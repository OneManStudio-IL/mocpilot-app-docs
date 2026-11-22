---
id: Editor
title: Arbeide i redigeringsprogrammet
description: "Topplinje, palett, dra blokker, zoom, hurtigmenyer, angre, Monitor, Ryggsekk, Editorinnstillinger og AI-byggeren i Logikkblokker."
---

import Screenshot from '@site/src/components/Screenshot';

# Arbeide i redigeringsprogrammet {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Redigeringsprogrammet for Logikkblokker" width={900} />

## Topplinjen {#top-bar}

- **Datamaskin og webeditor**: **Hjem** og menyene til venstre, med **Angre** og **Gjør om** ved siden av. I midten: profilnavnet og **Dashboard**, **Hubber** og **Spillkontroller**. Til høyre: **AI-bygger**, [**Ryggsekk**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Mer** (⋯), **Fjernstyring** og den oransje **Kjør**-knappen. I et smalt vindu flyttes knappene som ikke får plass, til **Mer**; der finnes alltid **Editorinnstillinger…**.
- **Telefon og nettbrett**: **Hjem** til venstre; til høyre **Angre**, **Gjør om**, **Dashboard**, **Mine hubber**, **Fjernstyring**, **Mer** og **Kjør / Stopp**. **Mer** inneholder **AI-bygger**, **Ryggsekk**, **Monitor**, **Spillkontroller** og **Editorinnstillinger**.

Se [Telefon, nettbrett og datamaskin](/docs/Introducing/Layouts#editor-top-bar) for hvordan linjen foldes sammen i et smalt vindu.

## Palett og programområde {#palette-and-program-area}

- Vis eller skjul paletten med **Vis → Blokkpalett** (⌘P / Ctrl+P).
- Velg en kategori, dra en blokk inn i programområdet og slipp den under en annen blokk for å feste den. En forhåndsvisning viser hvor den vil klikke på plass.
- Dra en hel stabel etter den øverste blokken; drar du en blokk fra midten, tar du med den og alt under den.
- For å slette blokker drar du dem tilbake til paletten.
- Variabler, lister, meldinger og Mine blokker opprettes med knappene i kategoriene deres (**Lag en variabel**, **Lag en liste**, **Legg til melding**, **Lag en blokk**) eller fra **Rediger → Ny variabel… / Ny liste… / Ny melding… / Ny blokk…**. Lyder og kjøretøy har også egne knapper: **Legg til lyd** i [Lyder](/docs/Application/BlockBuilder/Blocks/Sounds) og **Opprett kjøretøy** i [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom og rulling {#zoom-and-scroll}

- Knip (på berøringsskjerm) eller bruk **Vis → Zoom inn / Zoom ut / Faktisk størrelse** (⌘+ / ⌘− / ⌘0).
- Dra i et tomt område for å flytte deg rundt.
- Hurtigmenyen for et tomt område har **Zoom inn**, **Zoom ut**, **Tilbakestill zoom** og **Slett N blokker**.

## Blokkmeny {#block-menu}

Hold fingeren på en blokk (på berøringsskjerm) eller høyreklikk på den:

- **Rediger**: endre verdiene;
- **Dupliser**;
- **Slett blokk** / **Slett N blokker**;
- **Legg i ryggsekken**: ta vare på blokken og alt som er festet til den, i [ryggsekken](/docs/Application/BlockBuilder/Backpack);
- **Om blokken**: åpner beskrivelsen av blokken i denne dokumentasjonen;
- **Eksporter blokk som SVG** / **Eksporter alle blokker som SVG**: lagre et bilde til en veiledning eller et foruminnlegg.

<Screenshot name="blocks-block-menu" alt="Hurtigmenyen for en blokk i Logikkblokker" width={900} />

En blokk som er knyttet til en kontroll på dashboardet, kan bare slettes etter at du har frigjort den fra kontrollen.

## Angre og gjør om {#undo-and-redo}

Bruk **Rediger → Angre / Gjør om** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) eller knappene **Angre** og **Gjør om** i topplinjen (ved siden av menyene på en datamaskin).

- Én dragning er ett trinn; raske endringer av samme verdi slås sammen til ett trinn.
- Angre fungerer også mens programmet kjører.
- Å opprette eller slette variabler, lister, meldinger eller Mine blokker er også et trinn; angrer du det, stopper et program som kjører.
- Verdier som er lagret i variabler og lister, angres ikke.
- Dashboardet har sin egen angrehistorikk.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Vis → Monitor**) viser gjeldende verdier for variabler og lister mens programmet kjører. Knappen ligger i topplinjen på en datamaskin og under **Mer** på telefon og nettbrett. På en datamaskin kan du åpne den i et eget vindu. Den er til stor hjelp når du leter etter en feil.

## Ryggsekk {#backpack}

**Ryggsekken** (⇧⌘B / Ctrl+Shift+B, **Vis → Ryggsekk**) tar vare på blokkstabler som du kan bruke igjen i hvilken som helst profil: velg **Legg i ryggsekken** i menyen til en blokk, og trykk eller dra deretter elementet for å sette det inn i et hvilket som helst program. Knappen ligger ved siden av **Monitor** i topplinjen, eller under **Mer**. Se [Ryggsekk](/docs/Application/BlockBuilder/Backpack).

<Screenshot name="blocks-monitor" alt="Monitor som viser variabler og en liste mens programmet kjører" width={900} />

## Editorinnstillinger {#editor-settings}

Du åpner dem fra **Mer → Editorinnstillinger** i topplinjen (på en datamaskin også **Program → Editorinnstillinger…**).

- **Start blokk ved klikk**: når du klikker på en blokk, kjøres den, slik at du kan teste den alene; hvis programmet er stoppet, startes det også.
- **Åpne programmet i midten**: når du åpner en profil, vises programmet i 100 % midt på lerretet (eller fra øvre venstre hjørne når det er større), uansett hvor du forlot det under redigeringen. Dette gjelder alle profiler på denne enheten.
- **Stopp hubporter når programmet stopper**: stopper alle motorer og slår av alle lys når du trykker på **Stopp**. La den være på med mindre motorene må beholde tilstanden sin.
- **Velg blokknivå**: Nybegynner, Avansert eller Guru.

<Screenshot name="blocks-editor-settings" alt="Panelet Editorinnstillinger i Logikkblokker" width={900} />

## Blokknivåer {#block-levels}

| Nivå | Viser |
|---|---|
| **Nybegynner** | de enkleste blokkene; en oversiktlig palett for barn og første steg |
| **Avansert** | de vanlige logikk- og enhetsblokkene |
| **Guru** | hele settet med blokker |

Nivået lagres i profilen. Blokker som allerede er i programmet, fortsetter å fungere når du senker nivået.

## AI-bygger {#ai-builder}

Med [MocPilot Pro](/docs/Application/Account/Pro) setter **AI-byggeren** (knappen med gnistene i topplinjen, **Mer → AI-bygger** på telefon og nettbrett, ⇧⌘I / Ctrl+Shift+I) opp hubbene, dashboardet og programmet ut fra en beskrivelse du skriver eller sier, og endrer deretter profilen slik du ber om. Den fungerer i profiler med Logikkblokker og Hurtigkoblinger. Se [AI-bygger](/docs/Application/Profiles/AiBuilder).

### Slik får du et godt resultat {#ai-builder-tips}

Oppgi huben, si hva som er koblet til hver port og hva det skal gjøre, og hvordan du vil styre det. Se [Skriv en god forespørsel](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menyer på datamaskin {#desktop-menus}

| Meny | Elementer |
|---|---|
| Fil | Lukk profil (⌘W) |
| Rediger | Angre, Gjør om, Ny variabel…, Ny liste…, Ny melding…, Ny blokk… |
| Vis | Blokkpalett (⌘P), [Ryggsekk](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Zoom inn, Zoom ut, Faktisk størrelse |
| Program | Kjør (⌘R), Stopp (⌘.), Editorinnstillinger… |

På Windows bruker du Ctrl i stedet for ⌘ og Shift i stedet for ⇧.
