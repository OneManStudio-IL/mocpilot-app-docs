---
id: AboutApp
title: Om MOCPilot
description: "MOCPilot gör din telefon, surfplatta eller dator till en fjärrkontroll för LEGO® och kompatibla Bluetooth-modeller."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: bygg, kör, styr allt

**MOCPilot** gör din telefon, surfplatta eller dator till en fjärrkontroll för LEGO® och kompatibla Bluetooth-modeller: bilar, lastbilar, tåg, kranar, robotar och dina egna MOC:ar.

Du utformar kontrollerna själv: en **instrumentpanel** med joystickar, skjutreglage, knappar, rattar och indikatorer. Ett **program** kopplar sedan instrumentpanelen till motorerna och lamporna på dina **hubbar**. MOCPilot har två programredigerare:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Redigeraren Snabbkopplingar: rader från ingång till hubb" style={{width: '100%'}} />
    <h3>Snabbkopplingar</h3>
    <p>Ingen kod. Varje rad kopplar en kontroll till en motor eller lampa: <em>ingång → bearbetning → åtgärd → hubb</em>. En bil är redo att köras på några minuter. <a href="/docs/Application/Links/LinksIntroducing">Läs mer</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Redigeraren Logikblock: program av block" style={{width: '100%'}} />
    <h3>Logikblock</h3>
    <p>Visuella block med händelser, loopar, villkor, variabler och sensordata. För robotar, automation och allt som kräver logik. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Läs mer</a>.</p>
  </div>
</div>

## Vad du kan göra {#what-you-can-do}

- **Kör vilken modell som helst** från en instrumentpanel du själv utformar: joystickar, skjutreglage, knappar, brytare, stegomkopplare, monitorer och specialkontroller som ratt, pedaler, växellåda, handbroms, blinkers och körkontroll för tåg.
- **Använd riktiga hubbar**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick och Mould King. Se [Enheter som stöds](/docs/Introducing/SupportedDevices).
- **Använd en handkontroll** (i Xbox- eller PlayStation-stil) i stället för pekskärmen.
- **Läs av sensorer**: hubbens batteri och lutning, motorns hastighet och position, färg- och avståndssensorer samt telefonens lutning.
- **Gör instrumentpanelen till din egen** med [teman](/docs/Application/Themes/ThemesOverview).
- **Ha dina profiler överallt**: med ett konto synkroniseras profilerna mellan dina enheter, och du kan redigera dem i webbläsaren på [mocpilot.com](/docs/Introducing/WebEditor).
- **Kör från en annan enhet**: med MocPilot Pro ansluter en enhet hubbarna medan en annan enhet, eller webbredigeraren, är fjärrkontrollen.
- **Dela**: installera profiler från [Profilkatalogen](/docs/Application/Profiles/Catalog) och publicera dina egna.

<Screenshot name="dashboard-run" alt="En instrumentpanel i MOCPilot medan en modell körs" width={900} />

## Var MOCPilot fungerar {#where-mocpilot-runs}

| Enhet | Layout |
|---|---|
| iPhone och Android-telefoner | Telefonlayout: nedre fält; en öppen profil fyller skärmen i liggande läge |
| iPad och Android-surfplattor | Surfplattelayout: sidofält, mer utrymme för redigeraren |
| Mac- och Windows-datorer | Datorlayout: menyer, kortkommandon, instrumentpanelen i ett eget fönster |
| Webbläsare på mocpilot.com | [Webbredigerare](/docs/Introducing/WebEditor): redigera profiler; hubbarna ansluts av appen på en annan enhet |

Läs mer i [Telefon, surfplatta och dator](/docs/Introducing/Layouts).

Hubbar, dina profiler och nedladdade teman fungerar även utan internet. Se [Arbeta offline](/docs/Application/Account/Sync#working-offline).

## Var du ska börja {#where-to-start}

1. Läs [Så fungerar MOCPilot](/docs/Introducing/HowItWorks): fem minuter som gör allt annat enklare.
2. Följ [Snabbstart](/docs/Introducing/QuickStart) för att köra din första modell.
3. Osäker på vilken redigerare du ska välja? Jämför dem i [Skapa en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, LEGO-logotypen, Powered Up och Technic är varumärken som tillhör LEGO Group, som inte sponsrar, godkänner eller rekommenderar MOCPilot.
:::
