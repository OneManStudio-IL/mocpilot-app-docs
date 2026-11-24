import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import data from '@site/src/data/hubBlocks.json';
import styles from './styles.module.css';

////////////////////////////////////////////////////////////////
/// Hub filter for the block pages.
/// A sticky bar above the page content: the reader ticks the hubs they use, and the page hides the blocks
/// (and the sections and table-of-contents entries left empty) that none of the ticked hubs has.
/// Blocks missing from hubBlocks.json work with any hub and are never hidden. No hub ticked = no filter.
/// The choice is kept in localStorage, so it stays the same on every block page and on the next visit.
////////////////////////////////////////////////////////////////

const STORAGE_KEY = 'mocpilot.hubFilter';
const HUB_IDS = new Set(data.hubs.map((h) => h.id));
const PAGES = new Set(data.pages);
const MAX_CHIPS = 4;
const HIDDEN_ATTR = 'data-hub-hidden';

// Use layout effects only in the browser (no warning during the static build)
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function isHubFilterPage(docId) {
  return PAGES.has(docId);
}

function readStored() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((id) => HUB_IDS.has(id)) : [];
  } catch (e) {
    return [];
  }
}

function writeStored(selected) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  } catch (e) {
    // private mode or blocked storage: the filter still works for this page
  }
}

function headingLevel(el) {
  const m = /^H([1-6])$/.exec(el.tagName);
  return m ? Number(m[1]) : 0;
}

// Hide every block the selected hubs do not have, and every section whose blocks are all hidden.
// The markdown container holds a flat list: headings and the paragraphs, images and lists after them.
function applyFilter(root, selected) {
  const sel = new Set(selected);
  const isBlock = (el) => el.id && el.id.startsWith('block_');
  const blockHidden = (id) => {
    const hubs = data.blocks[id];
    return Boolean(hubs) && sel.size > 0 && !hubs.some((h) => sel.has(h));
  };

  const items = Array.from(root.children).map((el) => ({el, level: headingLevel(el)}));
  const hiddenHeading = new Array(items.length).fill(false);
  let blocks = 0;
  let hiddenBlocks = 0;

  items.forEach((item, i) => {
    if (!item.level) {
      return;
    }
    if (isBlock(item.el)) {
      hiddenHeading[i] = blockHidden(item.el.id);
      blocks += 1;
      hiddenBlocks += hiddenHeading[i] ? 1 : 0;
      return;
    }
    // A section heading: hidden only if it has blocks and all of them are hidden
    let inner = 0;
    let innerHidden = 0;
    for (let j = i + 1; j < items.length; j += 1) {
      const next = items[j];
      if (!next.level) {
        continue;
      }
      if (next.level <= item.level) {
        break;
      }
      if (isBlock(next.el)) {
        inner += 1;
        innerHidden += blockHidden(next.el.id) ? 1 : 0;
      }
    }
    hiddenHeading[i] = inner > 0 && inner === innerHidden;
  });

  const hiddenIds = [];
  const stack = []; // open sections: {level, hidden}
  items.forEach((item, i) => {
    if (item.level) {
      while (stack.length && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }
      stack.push({level: item.level, hidden: hiddenHeading[i]});
    }
    const hidden = stack.some((s) => s.hidden);
    item.el.toggleAttribute(HIDDEN_ATTR, hidden);
    if (hidden && item.level && item.el.id) {
      hiddenIds.push(item.el.id);
    }
  });

  // In-page lists of links ("On this page"): hide the items that start with a link to a hidden section
  const hiddenSet = new Set(hiddenIds);
  root.querySelectorAll('li').forEach((li) => {
    const first = li.firstElementChild;
    const href = first && first.tagName === 'A' ? first.getAttribute('href') || '' : '';
    const hash = href.includes('#') ? decodeURIComponent(href.slice(href.indexOf('#') + 1)) : '';
    const samePage = !href.startsWith('#') ? first && first.pathname === window.location.pathname : true;
    li.toggleAttribute(HIDDEN_ATTR, Boolean(hash) && samePage && hiddenSet.has(hash));
  });

  return {blocks, hiddenBlocks, hiddenIds};
}

function clearFilter(root) {
  root.querySelectorAll(`[${HIDDEN_ATTR}]`).forEach((el) => el.removeAttribute(HIDDEN_ATTR));
}

export default function HubFilter() {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState({blocks: 0, hiddenBlocks: 0, hiddenIds: []});
  const barRef = useRef(null);

  // Load the stored choice after hydration, and follow changes made in other tabs
  useEffect(() => {
    setSelected(readStored());
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        setSelected(readStored());
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Filter the page content
  useIsoLayoutEffect(() => {
    const root = document.querySelector(`.${ThemeClassNames.docs.docMarkdown}`);
    if (!root) {
      return undefined;
    }
    setResult(applyFilter(root, selected));
    return () => clearFilter(root);
  }, [selected]);

  // Anchor links must land below the sticky bar: publish its height for the CSS
  useIsoLayoutEffect(() => {
    const docEl = document.documentElement;
    const bar = barRef.current;
    if (!bar) {
      return undefined;
    }
    const update = () => docEl.style.setProperty('--hub-filter-height', `${bar.offsetHeight}px`);
    update();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    if (ro) {
      ro.observe(bar);
    }
    return () => {
      if (ro) {
        ro.disconnect();
      }
      docEl.style.removeProperty('--hub-filter-height');
    };
  }, []);

  // Close the hub list on Escape or a click outside the bar
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onDown = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const update = useCallback((next) => {
    // Keep the hub order of the list, whatever order the reader ticked them in
    const ordered = data.hubs.map((h) => h.id).filter((id) => next.includes(id));
    setSelected(ordered);
    writeStored(ordered);
  }, []);

  const toggle = (id) => update(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);

  const nameOf = (id) => data.hubs.find((h) => h.id === id).name;
  const chips = selected.slice(0, MAX_CHIPS);
  const more = selected.length - chips.length;
  const nothingLeft = selected.length > 0 && result.blocks > 0 && result.hiddenBlocks === result.blocks;

  const label = translate({
    id: 'hubFilter.label',
    message: 'Show blocks for:',
    description: 'Block pages: label before the hubs chosen in the hub filter bar',
  });
  const removeLabel = translate({
    id: 'hubFilter.removeHub',
    message: 'Remove',
    description: 'Block pages: tooltip of the x on a chosen hub in the hub filter bar',
  });

  // Hide the table-of-contents entries of the hidden headings (desktop and mobile TOC)
  const tocCss = result.hiddenIds
    .map((id) => `.table-of-contents li:has(> a[href="#${id}"])`)
    .join(',\n');

  return (
    <>
      {tocCss && <style>{`${tocCss} { display: none; }`}</style>}
      <div ref={barRef} className={styles.bar} role="region" aria-label={label}>
        <div className={styles.row}>
          <span className={styles.label}>{label}</span>
          {selected.length === 0 ? (
            <span className={styles.all}>
              {translate({
                id: 'hubFilter.allHubs',
                message: 'all hubs',
                description: 'Block pages: shown in the hub filter bar when no hub is chosen',
              })}
            </span>
          ) : (
            <>
              {chips.map((id) => (
                <span key={id} className={styles.chip}>
                  {nameOf(id)}
                  <button
                    type="button"
                    className={styles.chipRemove}
                    onClick={() => toggle(id)}
                    title={removeLabel}
                    aria-label={`${removeLabel}: ${nameOf(id)}`}>
                    ×
                  </button>
                </span>
              ))}
              {more > 0 && <span className={styles.more}>+{more}</span>}
            </>
          )}
          <button
            type="button"
            className={styles.chooseButton}
            aria-expanded={open}
            onClick={() => setOpen(!open)}>
            {translate({
              id: 'hubFilter.choose',
              message: 'Choose hubs',
              description: 'Block pages: button that opens the hub list of the hub filter bar',
            })}
            <span className={styles.caret} aria-hidden="true">
              ▾
            </span>
          </button>
          {selected.length > 0 && (
            <button type="button" className={styles.linkButton} onClick={() => update([])}>
              {translate({
                id: 'hubFilter.showAll',
                message: 'Show all',
                description: 'Block pages: button that clears the hub filter',
              })}
            </button>
          )}
          {result.hiddenBlocks > 0 && (
            <span className={styles.count}>
              {translate(
                {
                  id: 'hubFilter.hiddenCount',
                  message: 'Hidden blocks: {count}',
                  description: 'Block pages: how many blocks of this page the hub filter hides',
                },
                {count: result.hiddenBlocks},
              )}
            </span>
          )}
        </div>

        {open && (
          <div className={styles.panel}>
            <div className={styles.grid}>
              {data.hubs.map((h) => (
                <label key={h.id} className={styles.option}>
                  <input type="checkbox" checked={selected.includes(h.id)} onChange={() => toggle(h.id)} />
                  <span>{h.name}</span>
                </label>
              ))}
            </div>
            <div className={styles.panelFooter}>
              <span className={styles.note}>
                {translate({
                  id: 'hubFilter.note',
                  message: 'Blocks that work with any hub are always shown.',
                  description: 'Block pages: note under the hub list of the hub filter bar',
                })}
              </span>
              <button type="button" className="button button--primary button--sm" onClick={() => setOpen(false)}>
                {translate({
                  id: 'hubFilter.done',
                  message: 'Done',
                  description: 'Block pages: button that closes the hub list of the hub filter bar',
                })}
              </button>
            </div>
          </div>
        )}

        {nothingLeft && (
          <div className={styles.empty}>
            {translate({
              id: 'hubFilter.empty',
              message: 'This page has no blocks for the chosen hubs.',
              description: 'Block pages: shown when the hub filter hides every hub block of the page',
            })}
          </div>
        )}
      </div>
    </>
  );
}
