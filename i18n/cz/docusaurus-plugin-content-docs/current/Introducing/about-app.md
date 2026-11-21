---
id: AboutApp
title: O aplikaci MOCPilot
description: "MOCPilot promění telefon, tablet nebo počítač v dálkový ovladač pro modely LEGO® a kompatibilní modely s Bluetooth."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: postavte, řiďte, ovládejte všechno {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** promění váš telefon, tablet nebo počítač v dálkový ovladač pro modely LEGO® a kompatibilní modely s Bluetooth: auta, nákladní vozy, vlaky, jeřáby, roboty i vaše vlastní MOCy.

Ovládání si navrhnete sami: **panel** s joysticky, posuvníky, tlačítky, volanty a indikátory. **Program** pak panel propojí s motory a světly na vašich **hubech**. MOCPilot má dva editory programů:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor Rychlých propojení: řádky od vstupu k hubu" style={{width: '100%'}} />
    <h3>Rychlá propojení</h3>
    <p>Bez kódu. Každý řádek propojí jeden ovládací prvek s motorem nebo světlem: <em>vstup → zpracování → operace → hub</em>. Auto je připravené k jízdě během pár minut. <a href="/docs/Application/Links/LinksIntroducing">Více informací</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor Logických bloků: program z bloků" style={{width: '100%'}} />
    <h3>Logické bloky</h3>
    <p>Vizuální bloky s událostmi, cykly, podmínkami, proměnnými a daty ze senzorů. Pro roboty, automatizaci a všechno, co potřebuje logiku. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Více informací</a>.</p>
  </div>
</div>

## Co všechno můžete dělat {#what-you-can-do}

- **Řídit jakýkoli model** z panelu, který si sami navrhnete: joysticky, posuvníky, tlačítka, přepínače, krokové spínače, monitory a speciální ovládací prvky, jako je volant, pedály, převodovka, ruční brzda, blinkry nebo ovladač vlaku.
- **Používat skutečné huby**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick a Mould King. Viz [Podporovaná zařízení](/docs/Introducing/SupportedDevices).
- **Používat herní ovladač** (ve stylu Xbox nebo PlayStation) místo dotykové obrazovky.
- **Číst senzory**: baterii a náklon hubu, rychlost a polohu motoru, senzory barvy a vzdálenosti i náklon telefonu.
- **Přizpůsobit si panel** pomocí [motivů](/docs/Application/Themes/ThemesOverview).
- **Mít profily všude**: s účtem se profily synchronizují mezi vašimi zařízeními a můžete je upravovat v prohlížeči na [mocpilot.com](/docs/Introducing/WebEditor).
- **Řídit z jiného zařízení**: s MocPilot Pro jedno zařízení připojuje huby a jiné zařízení, nebo webový editor, slouží jako dálkový ovladač.
- **Sdílet**: instalujte profily z [Katalogu profilů](/docs/Application/Profiles/Catalog) a publikujte své vlastní.

<Screenshot name="dashboard-run" alt="Panel MOCPilot při řízení modelu" width={900} />

## Kde MOCPilot běží {#where-mocpilot-runs}

| Zařízení | Rozložení |
|---|---|
| Telefony iPhone a Android | Rozložení pro telefon: spodní lišta; otevřený profil vyplní obrazovku na šířku |
| Tablety iPad a Android | Rozložení pro tablet: boční panel, víc místa pro editor |
| Počítače Mac a Windows | Rozložení pro počítač: nabídky, klávesové zkratky, panel ve vlastním okně |
| Prohlížeč na mocpilot.com | [Webový editor](/docs/Introducing/WebEditor): úpravy profilů; huby připojuje aplikace na jiném zařízení |

Podrobnosti najdete v článku [Telefon, tablet a počítač](/docs/Introducing/Layouts).

Huby, vaše profily i stažené motivy fungují i bez internetu. Viz [Práce offline](/docs/Application/Account/Sync#working-offline).

## Kde začít {#where-to-start}

1. Přečtěte si [Jak MOCPilot funguje](/docs/Introducing/HowItWorks): pět minut, které vám usnadní všechno ostatní.
2. Projděte [Rychlý start](/docs/Introducing/QuickStart) a rozjeďte svůj první model.
3. Nevíte, který editor zvolit? Porovnejte je v článku [Vytvoření profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, logo LEGO, Powered Up a Technic jsou ochranné známky skupiny LEGO Group, která aplikaci MOCPilot nesponzoruje, neautorizuje ani nepodporuje.
:::
