---
id: BlocksIntroducing
title: Introduksjon til Logikkblokker
description: "Logikkblokker er den visuelle blokkprogrammeringen i MOCPilot: hendelser, løkker, betingelser, variabler, sensorer og lyder."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logikkblokker {#logic-blocks}

**Logikkblokker** er blokkprogrammeringen i MOCPilot. Du lager programmer ved å sette sammen blokker, omtrent som i Scratch: hendelser, løkker, betingelser, variabler, lister, dine egne blokker, lyder og blokker for motorer, lys, sensorer, kontroller på dashboardet og spillkontrolleren.

Velg Logikkblokker når modellen trenger logikk: roboter, automatiske sekvenser, reaksjoner på sensorer, oppstartskontroller, spill. Trenger du bare å koble kontroller til motorer, går det raskere med [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing).

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program i Logikkblokker" style={{width: '100%', maxWidth: 720}} />

:::warning Ikke Scratch
Logikkblokker har sitt eget sett med blokker og sin egen oppførsel. Du kan ikke importere MOCPilot-programmer til Scratch eller Scratch-prosjekter til MOCPilot.
:::

## Redigeringsprogrammet i korte trekk {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Redigeringsprogrammet for Logikkblokker med paletten og et program" width={900} />

- **Paletten** viser blokkategoriene: **Hendelser**, **Kontroll**, **Sensorer**, **Lyder**, **Operatør**, **Variabler**, **Lister** og **Mine blokker**. Andre kategorier vises når profilen trenger dem: **Motorer** og **Lys** (når en hub støtter dem), **Simulator** (når dashboardet har pedaler, girkasse eller handbrekk), **Skjermkontrollere** og **Spillkontroller**.
- **Programområdet** er der du drar inn blokker og bygger skript.
- Topplinjen har **Angre** og **Gjør om**, **Dashboard**, **Mine hubber**, **Spillkontroller**, sidepanelene **AI-bygger**, [**Ryggsekk**](/docs/Application/BlockBuilder/Backpack) og **Monitor**, **Mer** (med **Editorinnstillinger**) og **Kjør/Stopp**. På telefon og nettbrett ligger sidepanelene og Spillkontroller under **Mer**.

Se [Arbeide i redigeringsprogrammet](/docs/Application/BlockBuilder/Editor) for detaljer.

## Slik kjører et program {#how-a-program-runs}

- Et skript starter med en **hendelsesblokk** (en hatteblokk): *når programmet starter*, *når knapp … trykket*, *når jeg mottar …* og så videre.
- Blokkene som er festet under den, kjører ovenfra og ned.
- Flere skript kjører **samtidig**. Bruk meldinger (*overføre*) for å samordne dem.
- **Løkker** (*gjenta alltid*, *gjenta*, *gjenta så lenge*) holder et skript i gang; **betingelser** (*hvis*, *hvis … ellers*, *vent til*) tar avgjørelser.
- **Rapporteringsblokker** (avrundede) returnerer verdier og passer inn i feltene på andre blokker; **boolske** blokker (spisse) returnerer sant eller usant for betingelser.
- **Variabler** og **lister** tar vare på verdier mellom blokker og skript.

## Blokkformer {#block-shapes}

### Hatteblokker {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starter et skript når noe skjer. Du kan bare feste blokker under dem.

---

### Stabelblokker {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

De vanlige kommandoblokkene: hver av dem gjør noe.

---

### C-blokker {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formede blokker som rommer andre blokker: løkker og betingelser.

---

### Rapporteringsblokker {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerer en verdi, for eksempel et tall eller en tekst.

---

### Boolske blokker {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerer bare `true` eller `false`. Du bruker dem vanligvis i betingelser.

---

### Avslutningsblokker {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Avslutter et skript: ingenting kan festes under dem.

---

### Blokkstabel {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En stabel er en gruppe sammenkoblede blokker som kjører som ett skript, ovenfra og ned.
En stabel starter vanligvis med en hendelsesblokk, etterfulgt av blokkene som kjører i rekkefølge.

---


## Hubber, porter og kontroller {#hubs-ports-and-controls}

- Motor- og lysblokker tar en **hub** og en **port**. Kategoriene Motorer og Lys vises bare når en hub i profilen støtter dem, og noen blokker finnes bare for bestemte hubber (for eksempel effektmoduser for BuWizz eller funksjoner for Technic Move Hub). Beskrivelsen av hver blokk sier hvilke hubber den fungerer med.
- Dashboardblokker viser til kontroller etter navn (**JOY1**, **BTN2**). Du kan ikke slette en kontroll fra dashboardet mens blokker bruker den; fjern de blokkene først.
- Spillkontrollerblokker vises når **Aktiver gamepad-blokker** er slått på på [siden Spillkontroller](/docs/Application/Dashboard/Gamepad).

## Blokknivåer {#block-levels}

Hver profil har et **blokknivå**: **Nybegynner** viser de enkleste blokkene, **Avansert** legger til vanlig logikk og enhetsblokker, og **Guru** viser hele settet. Du velger det når du oppretter profilen, eller senere i Editorinnstillinger. Denne referansen viser nivået til hver blokk ved siden av navnet.

## Anbefalt arbeidsflyt {#recommended-workflow}

1. Begynn med én hendelsesblokk og et kort skript; trykk på **Kjør** og sjekk at det fungerer.
2. Sjekk motorretninger og verdiområder tidlig (en Monitor er til hjelp).
3. Del programmet opp i små skript som kommuniserer med meldinger; flytt gjentatt logikk til [Mine blokker](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Legg inn sikkerhet: grenser, stopp, en oppstartskontroll og en plan for hva som skjer når en hub kobles fra.

## Vanlige feil {#common-pitfalls}

- Et skript uten hendelsesblokk starter aldri.
- Feil hub eller port er valgt, så ingenting synlig skjer.
- Blanding av tekst, tall og boolske verdier gir uventede resultater.
- Svært hyppige hendelser uten filtrering (for eksempel en sensorhendelse ved hver minste endring) kan overbelaste programmet; bruk terskler eller korte pauser.

## Blokkreferanse {#block-reference}

- [Hendelser](/docs/Application/BlockBuilder/Blocks/Events) · [Kontroll](/docs/Application/BlockBuilder/Blocks/Control) · [Operatører](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variabler](/docs/Application/BlockBuilder/Blocks/Variables) · [Lister](/docs/Application/BlockBuilder/Blocks/Lists) · [Mine blokker](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motorer](/docs/Application/BlockBuilder/Blocks/Motors) · [Lys](/docs/Application/BlockBuilder/Blocks/Light) · [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors) · [Lyder](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Skjermkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Spillkontroller](/docs/Application/BlockBuilder/Blocks/Gamepad)

I appen holder du fingeren på en blokk (eller høyreklikker) og velger **Om blokken** for å åpne beskrivelsen her.

Ferdige programmer: [Eksempler](/docs/Application/BlockBuilder/Examples).
