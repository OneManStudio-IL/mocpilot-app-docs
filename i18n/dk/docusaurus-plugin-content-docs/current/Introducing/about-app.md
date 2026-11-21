---
id: AboutApp
title: Om MOCPilot
description: "MOCPilot gør din telefon, tablet eller computer til en fjernbetjening til LEGO® og kompatible Bluetooth-modeller."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: byg den, kør den, styr det hele {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** gør din telefon, tablet eller computer til en fjernbetjening til LEGO® og kompatible Bluetooth-modeller: biler, lastbiler, tog, kraner, robotter og dine egne MOC'er.

Du designer selv betjeningen: et **dashboard** med joysticks, skydere, knapper, rat og indikatorer. Et **program** forbinder derefter dashboardet med motorerne og lysene på dine **hubs**. MOCPilot har to programeditorer:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editoren Hurtige forbindelser: rækker fra input til hub" style={{width: '100%'}} />
    <h3>Hurtige forbindelser</h3>
    <p>Ingen kode. Hver række forbinder én kontrol med en motor eller et lys: <em>input → behandling → handling → hub</em>. En bil er klar til at køre på få minutter. <a href="/docs/Application/Links/LinksIntroducing">Læs mere</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editoren Logikblokke: et blokprogram" style={{width: '100%'}} />
    <h3>Logikblokke</h3>
    <p>Visuelle blokke med hændelser, løkker, betingelser, variabler og sensordata. Til robotter, automatisering og alt, der kræver logik. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Læs mere</a>.</p>
  </div>
</div>

## Det kan du {#what-you-can-do}

- **Køre enhver model** fra et dashboard, du selv designer: joysticks, skydere, knapper, kontakter, trinkontakter, monitorer og specialkontroller som rat, pedaler, gearkasse, håndbremse, blinklys og togkontroller.
- **Bruge rigtige hubs**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick og Mould King. Se [Understøttede enheder](/docs/Introducing/SupportedDevices).
- **Bruge en gamepad** (i Xbox- eller PlayStation-stil) i stedet for touchskærmen.
- **Læse sensorer**: hubbens batteri og hældning, motorens hastighed og position, farve- og afstandssensorer samt telefonens hældning.
- **Gøre dashboardet til dit eget** med [temaer](/docs/Application/Themes/ThemesOverview).
- **Have dine profiler overalt**: med en konto synkroniseres profilerne mellem dine enheder, og du kan redigere dem i browseren på [mocpilot.com](/docs/Introducing/WebEditor).
- **Køre fra en anden enhed**: med MocPilot Pro forbinder én enhed hubbene, mens en anden enhed eller webeditoren er fjernbetjeningen.
- **Dele**: installér profiler fra [Profilkatalog](/docs/Application/Profiles/Catalog), og udgiv dine egne.

<Screenshot name="dashboard-run" alt="Et MOCPilot-dashboard under kørsel med en model" width={900} />

## Hvor MOCPilot kører {#where-mocpilot-runs}

| Enhed | Layout |
|---|---|
| iPhone og Android-telefoner | Telefonlayout: bundbjælke; en åben profil fylder skærmen i liggende format |
| iPad og Android-tablets | Tabletlayout: sidebjælke, mere plads til editoren |
| Mac- og Windows-computere | Skrivebordslayout: menuer, tastaturgenveje, dashboardet i sit eget vindue |
| Browser på mocpilot.com | [Webeditor](/docs/Introducing/WebEditor): rediger profiler; hubbene forbindes af appen på en anden enhed |

Se [Telefon, tablet og computer](/docs/Introducing/Layouts) for detaljer.

Hubs, dine profiler og downloadede temaer virker også uden internet. Se [Arbejde offline](/docs/Application/Account/Sync#working-offline).

## Hvor skal du starte {#where-to-start}

1. Læs [Sådan virker MOCPilot](/docs/Introducing/HowItWorks): fem minutter, der gør alt andet lettere.
2. Følg [Hurtig start](/docs/Introducing/QuickStart) for at køre din første model.
3. Usikker på, hvilken editor du skal vælge? Sammenlign dem i [Opret en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, LEGO-logoet, Powered Up og Technic er varemærker tilhørende LEGO Group, som ikke sponsorerer, godkender eller anbefaler MOCPilot.
:::
