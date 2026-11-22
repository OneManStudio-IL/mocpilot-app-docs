---
id: BlocksIntroducing
title: Introduktion til Logikblokke
description: "Logikblokke er MOCPilots visuelle editor til blokprogrammering: hændelser, løkker, betingelser, variabler, sensorer og lyde."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logikblokke {#logic-blocks}

**Logikblokke** er MOCPilots editor til blokprogrammering. Du bygger programmer ved at sætte blokke sammen, meget som i Scratch: hændelser, løkker, betingelser, variabler, lister, dine egne blokke, lyde samt blokke til motorer, lys, sensorer, dashboardets kontroller og spilcontrolleren.

Vælg Logikblokke, når din model har brug for logik: robotter, automatiske sekvenser, reaktioner på sensorer, opstartstjek, spil. Skal du blot forbinde kontroller med motorer, er [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing) hurtigere.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program i Logikblokke" style={{width: '100%', maxWidth: 720}} />

:::warning Ikke Scratch
Logikblokke har sit eget sæt blokke og sin egen opførsel. Du kan ikke importere MOCPilot-programmer i Scratch eller Scratch-projekter i MOCPilot.
:::

## Editoren i overblik {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editoren i Logikblokke med paletten og et program" width={900} />

- **Paletten** viser blokkategorierne: **Begivenheder**, **Kontrol**, **Sensorer**, **Lyde**, **Operator**, **Variable**, **Lister** og **Mine blokke**. Andre kategorier vises, når din profil har brug for dem: **Motorer** og **Lys** (når en hub understøtter dem), **Simulator** (når dashboardet har pedaler, en gearkasse eller en håndbremse), **Skærmkontrollere** og **Spilcontroller**.
- **Programområdet** er der, hvor du trækker blokke hen og bygger scripts.
- Den øverste bjælke har **Fortryd** og **Gentag**, **Dashboard**, **Mine hubs**, **Spilcontroller**, sidepanelerne **AI-bygger**, [**Rygsæk**](/docs/Application/BlockBuilder/Backpack) og **Monitor**, **Mere** (med **Editorindstillinger**) og **Kør/Stop**. På en telefon eller tablet ligger sidepanelerne og Spilcontroller under **Mere**.

Se [Arbejd i editoren](/docs/Application/BlockBuilder/Editor) for detaljer.

## Sådan kører et program {#how-a-program-runs}

- Et script starter med en **hændelsesblok** (en hatteblok): *når programmet starter*, *når knappen … er trykket*, *når jeg modtager …* og så videre.
- Blokkene, der er sat fast under den, kører oppefra og ned.
- Flere scripts kører **på samme tid**. Brug beskeder (*overføre*) til at koordinere dem.
- **Løkker** (*gentag altid*, *gentage*, *gentag, indtil*) holder et script i gang; **betingelser** (*hvis*, *hvis … ellers*, *vent indtil*) træffer beslutninger.
- **Rapporteringsblokke** (afrundede) returnerer værdier og passer ind i andre blokkes input; **booleske** blokke (spidse) returnerer sand eller falsk til betingelser.
- **Variabler** og **lister** gemmer værdier mellem blokke og scripts.

## Blokformer {#block-shapes}

### Hatteblokke {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starter et script, når noget sker. Du kan kun sætte blokke fast under dem.

---

### Stakblokke {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

De vigtigste kommandoblokke: Hver af dem gør noget.

---

### C-blokke {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formede blokke, der rummer andre blokke: løkker og betingelser.

---

### Rapporteringsblokke {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerer en værdi, for eksempel et tal eller en tekst.

---

### Booleske blokke {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerer kun `true` eller `false`. Du bruger dem som regel i betingelser.

---

### Afslutningsblokke {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Afslutter et script: Der kan ikke sættes noget fast under dem.

---

### Blokstak {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En stak er en gruppe forbundne blokke, der kører som ét script oppefra og ned.
En stak starter som regel med en hændelsesblok efterfulgt af de blokke, der kører i rækkefølge.

---


## Hubs, porte og kontroller {#hubs-ports-and-controls}

- Motor- og lysblokke angiver en **hub** og en **port**. Kategorierne Motorer og Lys vises kun, når en hub i profilen understøtter dem, og nogle blokke findes kun til bestemte hubs (for eksempel BuWizz' effekttilstande eller funktioner i Technic Move Hub). Beskrivelsen af hver blok fortæller, hvilke hubs den virker med.
- Dashboardblokke henviser til kontroller ved navn (**JOY1**, **BTN2**). Du kan ikke slette en kontrol fra dashboardet, mens blokke bruger den; fjern først disse blokke.
- Spilcontrollerblokke vises, når **Aktivér gamepad-blokke** er slået til på [siden Spilcontroller](/docs/Application/Dashboard/Gamepad).

## Blokniveauer {#block-levels}

Hver profil har et **blokniveau**: **Begynder** viser de enkleste blokke, **Avanceret** tilføjer almindelige logik- og enhedsblokke, og **Guru** viser hele sættet. Du vælger det, når du opretter profilen, eller senere under Editorindstillinger. Denne oversigt viser hver bloks niveau ved siden af navnet.

## Anbefalet arbejdsgang {#recommended-workflow}

1. Start med én hændelsesblok og et kort script; tryk på **Kør**, og tjek, at det virker.
2. Tjek motorernes retning og værdiområder tidligt (en Monitor hjælper).
3. Del programmet op i små scripts, der taler sammen via beskeder; flyt gentaget logik til [Mine blokke](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Tilføj sikkerhed: grænser, stop, et opstartstjek og en plan for, hvad der sker, når en hub mister forbindelsen.

## Almindelige faldgruber {#common-pitfalls}

- Et script uden hændelsesblok starter aldrig.
- Den forkerte hub eller port er valgt, så der sker ikke noget synligt.
- Blanding af tekst, tal og booleske værdier giver uventede resultater.
- Meget hyppige hændelser uden filtrering (for eksempel en sensorhændelse ved hver lille ændring) kan overbelaste programmet; brug tærskler eller korte pauser.

## Blokoversigt {#block-reference}

- [Begivenheder](/docs/Application/BlockBuilder/Blocks/Events) · [Kontrol](/docs/Application/BlockBuilder/Blocks/Control) · [Operator](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variable](/docs/Application/BlockBuilder/Blocks/Variables) · [Lister](/docs/Application/BlockBuilder/Blocks/Lists) · [Mine blokke](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motorer](/docs/Application/BlockBuilder/Blocks/Motors) · [Lys](/docs/Application/BlockBuilder/Blocks/Light) · [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors) · [Lyde](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Spilcontroller](/docs/Application/BlockBuilder/Blocks/Gamepad)

I appen kan du trykke længe på (eller højreklikke på) en blok og vælge **Om blokken** for at åbne dens beskrivelse her.

Færdige programmer: [Eksempler](/docs/Application/BlockBuilder/Examples).
