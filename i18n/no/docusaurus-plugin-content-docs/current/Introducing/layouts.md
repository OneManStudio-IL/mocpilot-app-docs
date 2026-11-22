---
id: Layouts
title: Telefon, nettbrett og datamaskin
description: "Hvor du finner alt i MOCPilot-oppsettene for telefon, nettbrett og datamaskin, pluss menyene og hurtigtastene på datamaskinen."
---

import Screenshot from '@site/src/components/Screenshot';

# Telefon, nettbrett og datamaskin {#phone-tablet-and-desktop}

MOCPilot har tre oppsett, og appen velger ett automatisk:

- **Telefon**: iPhone og Android-telefoner.
- **Nettbrett**: iPad og Android-nettbrett (7 tommer og større).
- **Datamaskin**: Mac- og Windows-datamaskiner. [Webeditoren](/docs/Introducing/WebEditor) i en nettleser bruker også skrivebordseditoren.

Profiler, editorer og dashboardet er like overalt; bare navigasjonen er forskjellig.

## Telefon {#phone}

<Screenshot name="profiles-phone" alt="Siden Mine profiler på en telefon med bunnlinjen" width={360} />

- **Bunnlinjen** har **Profiler**, **Innstillinger** og **Hjelp**, pluss **Varsler** når du er logget inn.
- **Konto** ligger øverst i **Innstillinger**.
- Toppen av **Mine profiler** har **Sorter og filtrer**, **Koble til en fjernkontroll** (fjernkontrollikonet), **+** (Ny profil, Importer profil…, Søk på nett) og søkefeltet.
- Hovedskjermene vises i stående format. Når du åpner en profil, bytter appen til **liggende format i fullskjerm**, slik at editoren og dashboardet får hele skjermen. Når du lukker profilen, kommer stående format tilbake.
- I editoren ligger **Hjem** til venstre i topplinjen. Til høyre ligger **Angre** og **Gjør om**, **Dashboard**, **Mine hubber** (med antall tilkoblede hubber), **Problemer** (Hurtigkoblinger), **Fjernstyring**, **Mer** (⋯) og **Kjør / Stopp**. **Mer** inneholder **AI-bygger**, [**Ryggsekk**](/docs/Application/BlockBuilder/Backpack) og **Monitor** (Logikkblokker), **Spillkontroller** og **Editorinnstillinger**. På en smal skjerm flyttes også Dashboard og Mine hubber til **Mer**, slik at knappene beholder en størrelse som passer for fingrene.

<Screenshot name="editor-phone" alt="Profileditoren på en telefon med topplinjen" width={900} />

## Nettbrett {#tablet}

<Screenshot name="profiles-tablet" alt="Siden Mine profiler på et nettbrett med sidelinjen" width={900} />

- **Sidelinjen** til venstre har **Profiler**, **Profilkatalog**, **Varsler**, **Innstillinger** og **Hjelp**. Under dem ligger **MocPilot Pro**-kortet og kontoen din (**Logg inn** i gjestemodus). Du kan slå sammen sidelinjen til bare ikoner.
- Toppen av **Mine profiler** har **Ny profil** (menyen har også Importer profil…, Koble til en fjernkontroll og Søk på nett), **Sorter og filtrer**, **Filtrer etter emneknagger**, **Koble til en fjernkontroll** og søkefeltet.
- Trykk på et profilkort for å velge det: linjen nederst viser **Del**, **Rediger**, **Legg til i favoritter** og **Start**. Dobbelttrykk på et kort for å starte det. Hold fingeren på et kort for å åpne menyen, som også har **Slett profil**.
- På brede skjermer åpnes Innstillinger og Hjelp ved siden av listen.
- En profil åpnes i liggende format, og editoren har den samme topplinjen som på en telefon.

## Datamaskin (Mac og Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Mine profiler på en datamaskin" width={900} />

- Til høyre i topplinjen: **Konto** (**Logg inn** i gjestemodus), **Varsler** (når du er logget inn), **Koble til en fjernkontroll** (fjernkontrollikonet) og **Innstillinger** (tannhjulet).
- Innstillinger, Hjelp, Konto, Ny profil, Rediger profil, Profilkatalogen og andre sider åpnes som **vinduer** over profillisten.
- Klikk på et profilkort for å se hva du kan gjøre med det (**Del…**, **Rediger…**, **Legg til i favoritter**, **Start**); et dobbeltklikk starter det. Høyreklikk på et kort for å åpne menyen, som også har **Slett profil**.
- I editoren åpnes **Dashboard** i **eget vindu**, slik at du kan se programmet og dashboardet side om side.

### Topplinjen i editoren {#editor-top-bar}

- **Venstre**: **Hjem** (lukker profilen), menyene **Fil**, **Rediger**, **Vis** og **Program**, deretter **Angre** og **Gjør om**.
- **Midten**: profilnavnet og knappene for profilens andre deler: **Dashboard**, **Hubber** (med antall tilkoblede hubber) og **Spillkontroller**. Siden du er på, har ingen egen knapp.
- **Høyre**: sidepanelene **AI-bygger**, [**Ryggsekk**](/docs/Application/BlockBuilder/Backpack) og **Monitor** (de to siste bare i Logikkblokker), **Mer** (⋯), deretter radstatusen i Hurtigkoblinger (**Alle rader er klare** eller **Problemer: N**), **Fjernstyring** og den oransje **Kjør**-knappen (**Stopp** mens programmet kjører).

**Mer** har alltid **Editorinnstillinger…**. Når vinduet blir smalt, foldes linjen sammen trinn for trinn i stedet for at knappene klemmes sammen: først skjules profilnavnet, deretter flyttes **Monitor**, **Ryggsekk** og **AI-bygger** til **Mer**, så beholder **Kjør** bare ikonet (og Hurtigkoblinger-statusen bare ikonet og antallet), og til slutt flyttes også **Spillkontroller**, **Dashboard** og **Hubber** til **Mer**. Hvis et sidepanel som ligger under **Mer**, er åpent, er **Mer**-knappen farget.

Topplinjen i Dashboard ser lik ut: **Hjem**, **Fil**, **Rediger** og **Vis**, **Angre** og **Gjør om** til venstre; profilnavnet og **Blokker** (eller **Koblinger**) for å gå tilbake til programmet i midten; **Velg**, **Dashboardinnstillinger** og **+ Kontroller** til høyre. Se [Dashboard-editoren](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Menyer {#menus}

På Windows ligger menyene til venstre i appens topplinje. På Mac ligger de i systemets menylinje øverst på skjermen.

| Meny | Windows | Mac |
|---|---|---|
| **MOCPilot** (appmeny) | — | Om MOCPilot, Innstillinger…, Avslutt |
| **Fil** | Ny profil, Importer profil…, Søk på nett, Avslutt | Ny profil, Importer profil…, Søk på nett, Koble til en fjernkontroll… |
| **Vis** | Fullskjerm | Fullskjerm / Avslutt fullskjerm |
| **Vindu** | Minimer, Maksimer / Gjenopprett | Minimer |
| **Hjelp** | MOCPilot-hjelp, Still et spørsmål, Rapporter en feil, Om MOCPilot | MOCPilot-hjelp, Still et spørsmål, Rapporter en feil |

Når en profil er åpen, har editoren egne menyer: **Fil**, **Rediger**, **Vis** og **Program** (se [Menyer på datamaskin](/docs/Application/BlockBuilder/Editor#desktop-menus)), og Dashboard-vinduet har **Fil**, **Rediger** og **Vis** (se [Dashboard](/docs/Application/Dashboard/DashboardOverview)).

### Hurtigtaster {#keyboard-shortcuts}

På Mac gjør ⌘ (Command) det samme som Ctrl på Windows; ⇧ er Shift, ⌃ er Control.

**Overalt**

| Handling | Windows | Mac |
|---|---|---|
| Innstillinger | Ctrl+2 | ⌘, |
| Fullskjerm av / på | F11 eller Alt+Enter | ⌃⌘F |
| Minimer vinduet | — | ⌘M |
| Avslutt | Alt+F4 | ⌘Q |

**Mine profiler** (ingen profil åpen)

| Handling | Windows | Mac |
|---|---|---|
| Ny profil | Ctrl+N | ⌘N |
| Importer profil | Ctrl+O | ⌘O |
| Søk i profiler | Ctrl+F | — |
| Profiler / Innstillinger / Hjelp / Konto | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Profileditor**

| Handling | Windows | Mac |
|---|---|---|
| Lukk profilen | Ctrl+W | ⌘W |
| Kjør / Stopp | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Angre / Gjør om | Ctrl+Z / Ctrl+Shift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Vis dashboardet | Ctrl+2 | ⌘2 |
| Mine hubber | Ctrl+Shift+H | ⇧⌘H |
| AI-bygger | Ctrl+Shift+I | ⇧⌘I |
| Vis / skjul blokkpaletten (Logikkblokker) | Ctrl+P | ⌘P |
| Søk i blokkpaletten (Logikkblokker) | Ctrl+F | ⌘F |
| Monitor (Logikkblokker) | Ctrl+Shift+M | ⇧⌘M |
| [Ryggsekk](/docs/Application/BlockBuilder/Backpack) (Logikkblokker) | Ctrl+Shift+B | ⇧⌘B |
| Zoom inn / ut / faktisk størrelse (Logikkblokker) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Dashboard**

| Handling | Windows | Mac |
|---|---|---|
| Angre / Gjør om | Ctrl+Z / Ctrl+Shift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Tilbake til programmet (når dashboardet er i hovedvinduet) | Ctrl+1 | ⌘1 |
| Lukk Dashboard-vinduet | — | ⌘W |
| Gå ut av **Velg**-modus, eller lukk egenskapspanelet | Esc | Esc |
| Slett kontrollen (egenskapspanelet åpent) | Delete eller Backspace | Delete eller Backspace |
| Dupliser kontrollen (egenskapspanelet åpent) | Ctrl+D | ⌘D |

På et nettbrett med tastatur viser eller skjuler Ctrl+B (⌘B på iPad) sidelinjen.

## Profileditoren i alle oppsett {#the-profile-editor-on-every-layout}

Editoren har ingen faner. **Programmet** (Hurtigkoblinger-rader eller Logikkblokker) fyller skjermen, og knappene i topplinjen åpner alt annet. Noen av dem ligger under **Mer** (⋯): på telefon og nettbrett AI-bygger, Ryggsekk, Monitor, Spillkontroller og Editorinnstillinger; på en datamaskin Editorinnstillinger og det som ikke får plass i et smalt vindu.

| Knapp | Åpner |
|---|---|
| **Mine hubber** (**Hubber** på en datamaskin) | profilens [hubplasser](/docs/Application/Hubs/ConnectingHubs) |
| **Dashboard** | [dashboardet](/docs/Application/Dashboard/DashboardOverview) |
| **Spillkontroller** | [innstillinger for spillkontroller](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | verdier for variabler og lister (bare Logikkblokker) |
| **Ryggsekk** | blokkstabler du har lagret for å bruke igjen i hvilken som helst profil (bare Logikkblokker); se [Ryggsekk](/docs/Application/BlockBuilder/Backpack) |
| **Editorinnstillinger** | [editoralternativer](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI-bygger** | [AI-byggeren](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problemer** | rader som ikke kan kjøres (bare Hurtigkoblinger) |
| **Fjernstyring** | kjør profilen på en annen enhet og styr den herfra (MocPilot Pro); se [Fjernstyring](/docs/Application/Profiles/RemoteControl) |
| **Kjør / Stopp** | starter og stopper programmet (på en datamaskin den oransje **Kjør**-knappen helt til høyre) |
