---
id: Editor
title: Arbeide i redigeringsprogrammet
description: "Palett, dra blokker, zoom, hurtigmenyer, angre, Monitor, Editorinnstillinger og AI-byggeren i Logikkblokker."
---

import Screenshot from '@site/src/components/Screenshot';

# Arbeide i redigeringsprogrammet {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Redigeringsprogrammet for Logikkblokker" width={900} />

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
- **Om blokken**: åpner beskrivelsen av blokken i denne dokumentasjonen;
- **Eksporter blokk som SVG** / **Eksporter alle blokker som SVG**: lagre et bilde til en veiledning eller et foruminnlegg.

<Screenshot name="blocks-block-menu" alt="Hurtigmenyen for en blokk i Logikkblokker" width={900} />

En blokk som er knyttet til en kontroll på dashboardet, kan bare slettes etter at du har frigjort den fra kontrollen.

## Angre og gjør om {#undo-and-redo}

Bruk **Rediger → Angre / Gjør om** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) eller de flytende knappene.

- Én dragning er ett trinn; raske endringer av samme verdi slås sammen til ett trinn.
- Angre fungerer også mens programmet kjører.
- Å opprette eller slette variabler, lister, meldinger eller Mine blokker er også et trinn; angrer du det, stopper et program som kjører.
- Verdier som er lagret i variabler og lister, angres ikke.
- Dashboardet har sin egen angrehistorikk.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) viser gjeldende verdier for variabler og lister mens programmet kjører. På en datamaskin kan du åpne den i et eget vindu. Den er til stor hjelp når du leter etter en feil.

<Screenshot name="blocks-monitor" alt="Monitor som viser variabler og en liste mens programmet kjører" width={900} />

## Editorinnstillinger {#editor-settings}

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

Med [MocPilot Pro](/docs/Application/Account/Pro) setter **AI-byggeren** (knappen med gnistene, ⇧⌘I / Ctrl+Shift+I) opp hubbene, dashboardet og programmet ut fra en beskrivelse du skriver eller sier, og endrer deretter profilen slik du ber om. Den fungerer i profiler med Logikkblokker og Hurtigkoblinger. Se [AI-bygger](/docs/Application/Profiles/AiBuilder).

### Slik får du et godt resultat {#ai-builder-tips}

Oppgi huben, si hva som er koblet til hver port og hva det skal gjøre, og hvordan du vil styre det. Se [Skriv en god forespørsel](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menyer på datamaskin {#desktop-menus}

| Meny | Elementer |
|---|---|
| Fil | Lukk profil (⌘W) |
| Rediger | Angre, Gjør om, Ny variabel…, Ny liste…, Ny melding…, Ny blokk… |
| Vis | Blokkpalett, Zoom inn, Zoom ut, Faktisk størrelse |
| Program | Kjør (⌘R), Stopp (⌘.) |
