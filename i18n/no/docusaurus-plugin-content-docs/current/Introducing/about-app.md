---
id: AboutApp
title: Om MOCPilot
description: "MOCPilot gjør en telefon, et nettbrett eller en datamaskin til en fjernkontroll for LEGO® og kompatible Bluetooth-modeller."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: bygg, kjør og styr alt {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** gjør telefonen, nettbrettet eller datamaskinen din til en fjernkontroll for LEGO® og kompatible Bluetooth-modeller: biler, lastebiler, tog, kraner, roboter og dine egne MOC-er.

Du lager kontrollene selv: et **dashboard** med joysticker, skyveknapper, knapper, ratt og indikatorer. Et **program** kobler deretter dashboardet til motorene og lysene på **hubbene** dine. MOCPilot har to programeditorer:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Hurtigkoblinger-editoren: rader fra inngang til hub" style={{width: '100%'}} />
    <h3 id="quick-links">Hurtigkoblinger</h3>
    <p>Ingen kode. Hver rad kobler én kontroll til en motor eller et lys: <em>inngang → behandling → handling → hub</em>. En bil er klar til å kjøre på få minutter. <a href="/docs/Application/Links/LinksIntroducing">Les mer</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logikkblokker-editoren: blokkprogram" style={{width: '100%'}} />
    <h3 id="logic-blocks">Logikkblokker</h3>
    <p>Visuelle blokker med hendelser, løkker, betingelser, variabler og sensordata. For roboter, automatisering og alt som trenger logikk. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Les mer</a>.</p>
  </div>
</div>

## Hva du kan gjøre {#what-you-can-do}

- **Kjør hvilken som helst modell** fra et dashboard du lager selv: joysticker, skyveknapper, knapper, brytere, trinnbrytere, monitorer og spesialkontroller som ratt, pedaler, girkasse, håndbrekk, blinklys og togkontroller.
- **Bruk ekte hubber**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick og Mould King. Se [Støttede enheter](/docs/Introducing/SupportedDevices).
- **Bruk en spillkontroller** (Xbox- eller PlayStation-type) i stedet for berøringsskjermen.
- **Les av sensorer**: batteri og helling på huben, motorhastighet og -posisjon, farge- og avstandssensorer og hellingen på telefonen din.
- **Gjør dashboardet til ditt eget** med [temaer](/docs/Application/Themes/ThemesOverview).
- **Ha profilene dine overalt**: med en konto synkroniseres profilene mellom enhetene dine, og du kan redigere dem i nettleseren på [mocpilot.com](/docs/Introducing/WebEditor).
- **Kjør fra en annen enhet**: med MocPilot Pro kobler én enhet til hubbene, og en annen enhet, eller webeditoren, er fjernkontrollen.
- **Del**: installer profiler fra [Profilkatalogen](/docs/Application/Profiles/Catalog) og publiser dine egne.

<Screenshot name="dashboard-run" alt="Et MOCPilot-dashboard mens en modell kjøres" width={900} />

## Hvor MOCPilot kjører {#where-mocpilot-runs}

| Enhet | Oppsett |
|---|---|
| iPhone og Android-telefoner | Telefonoppsett: bunnlinje; en åpen profil fyller skjermen i liggende format |
| iPad og Android-nettbrett | Nettbrettoppsett: sidelinje, mer plass til editoren |
| Mac- og Windows-datamaskiner | Skrivebordsoppsett: menyer, hurtigtaster, dashboardet i eget vindu |
| Nettleser på mocpilot.com | [Webeditor](/docs/Introducing/WebEditor): rediger profiler; hubbene kobles til av appen på en annen enhet |

Se [Telefon, nettbrett og datamaskin](/docs/Introducing/Layouts) for detaljer.

Hubber, profilene dine og nedlastede temaer fungerer også uten internett. Se [Jobbe frakoblet](/docs/Application/Account/Sync#working-offline).

## Hvor du begynner {#where-to-start}

1. Les [Slik fungerer MOCPilot](/docs/Introducing/HowItWorks): fem minutter som gjør alt annet enklere.
2. Følg [Hurtigstart](/docs/Introducing/QuickStart) for å kjøre din første modell.
3. Usikker på hvilken editor du skal velge? Sammenlign dem i [Opprett en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, LEGO-logoen, Powered Up og Technic er varemerker for LEGO Group, som ikke sponser, autoriserer eller støtter MOCPilot.
:::
