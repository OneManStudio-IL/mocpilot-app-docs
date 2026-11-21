---
id: AboutApp
title: O aplikácii MOCPilot
description: "MOCPilot premení telefón, tablet alebo počítač na diaľkový ovládač pre modely LEGO® a kompatibilné Bluetooth modely."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: postavte, riaďte, ovládajte všetko {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** premení váš telefón, tablet alebo počítač na diaľkový ovládač pre modely LEGO® a kompatibilné Bluetooth modely: autá, nákladiaky, vlaky, žeriavy, roboty aj vaše vlastné MOC.

Ovládanie si navrhnete sami: **panel** s joystickmi, posuvníkmi, tlačidlami, volantmi a indikátormi. **Program** potom prepojí panel s motormi a svetlami na vašich **huboch**. MOCPilot má dva editory programov:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor rýchlych prepojení: riadky od vstupu po hub" style={{width: '100%'}} />
    <h3>Rýchle prepojenia</h3>
    <p>Bez kódu. Každý riadok prepojí jeden ovládací prvok s motorom alebo svetlom: <em>vstup → spracovanie → operácia → hub</em>. Auto je pripravené na jazdu za pár minút. <a href="/docs/Application/Links/LinksIntroducing">Viac informácií</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor logických blokov: program z blokov" style={{width: '100%'}} />
    <h3>Logické bloky</h3>
    <p>Vizuálne bloky s udalosťami, cyklami, podmienkami, premennými a údajmi zo senzorov. Pre roboty, automatizáciu a všetko, čo potrebuje logiku. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Viac informácií</a>.</p>
  </div>
</div>

## Čo môžete robiť {#what-you-can-do}

- **Riaďte akýkoľvek model** z panela, ktorý si sami navrhnete: joysticky, posuvníky, tlačidlá, prepínače, stupňové prepínače, monitory a špeciálne ovládacie prvky, ako je volant, pedále, prevodovka, ručná brzda, smerovky a ovládač vlaku.
- **Používajte skutočné huby**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick a Mould King. Pozrite si [Podporované zariadenia](/docs/Introducing/SupportedDevices).
- **Používajte herný ovládač** (v štýle Xbox alebo PlayStation) namiesto dotykovej obrazovky.
- **Čítajte senzory**: batériu a náklon hubu, rýchlosť a polohu motora, senzory farby a vzdialenosti aj náklon vášho telefónu.
- **Prispôsobte si panel** pomocou [tém](/docs/Application/Themes/ThemesOverview).
- **Majte profily všade**: s účtom sa profily synchronizujú medzi vašimi zariadeniami a môžete ich upravovať v prehliadači na [mocpilot.com](/docs/Introducing/WebEditor).
- **Riaďte z iného zariadenia**: s MocPilot Pro jedno zariadenie pripája huby a druhé, prípadne webový editor, slúži ako diaľkový ovládač.
- **Zdieľajte**: inštalujte profily z [Katalógu profilov](/docs/Application/Profiles/Catalog) a zverejňujte vlastné.

<Screenshot name="dashboard-run" alt="Panel MOCPilot počas jazdy s modelom" width={900} />

## Kde MOCPilot beží {#where-mocpilot-runs}

| Zariadenie | Rozloženie |
|---|---|
| Telefóny iPhone a Android | Rozloženie pre telefón: spodná lišta; otvorený profil vyplní obrazovku na šírku |
| iPad a tablety s Androidom | Rozloženie pre tablet: bočný panel, viac miesta pre editor |
| Počítače Mac a Windows | Rozloženie pre počítač: ponuky, klávesové skratky, panel vo vlastnom okne |
| Prehliadač na mocpilot.com | [Webový editor](/docs/Introducing/WebEditor): úprava profilov; huby pripája aplikácia na inom zariadení |

Podrobnosti nájdete v časti [Telefón, tablet a počítač](/docs/Introducing/Layouts).

Huby, vaše profily a stiahnuté témy fungujú aj bez internetu. Pozrite si [Práca offline](/docs/Application/Account/Sync#working-offline).

## Kde začať {#where-to-start}

1. Prečítajte si [Ako funguje MOCPilot](/docs/Introducing/HowItWorks): päť minút, vďaka ktorým bude všetko ostatné jednoduchšie.
2. Podľa [Rýchleho štartu](/docs/Introducing/QuickStart) rozjazdite svoj prvý model.
3. Neviete, ktorý editor si vybrať? Porovnajte ich v časti [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, logo LEGO, Powered Up a Technic sú ochranné známky skupiny LEGO Group, ktorá MOCPilot nesponzoruje, neautorizuje ani neschvaľuje.
:::
