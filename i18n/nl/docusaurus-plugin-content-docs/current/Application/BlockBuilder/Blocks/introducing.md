---
id: BlocksIntroducing
title: Kennismaken met Logicablokken
description: "Logicablokken is de visuele blokprogrammeereditor van MOCPilot: gebeurtenissen, lussen, voorwaarden, variabelen, sensoren en geluiden."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logicablokken {#logic-blocks}

**Logicablokken** is de blokprogrammeereditor in MOCPilot. Je bouwt programma's door blokken aan elkaar te klikken, net als in Scratch: gebeurtenissen, lussen, voorwaarden, variabelen, lijsten, je eigen blokken, geluiden, en blokken voor motoren, lampen, sensoren, dashboardbedieningen en de gamepad.

Kies Logicablokken als je model logica nodig heeft: robots, automatische reeksen, reacties op sensoren, controles bij het starten, spellen. Wil je alleen bedieningen met motoren verbinden, dan is [Snelle koppelingen](/docs/Application/Links/LinksIntroducing) sneller.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programma in Logicablokken" style={{width: '100%', maxWidth: 720}} />

:::warning Geen Scratch
Logicablokken heeft een eigen set blokken en een eigen gedrag. Je kunt MOCPilot-programma's niet in Scratch importeren, en Scratch-projecten niet in MOCPilot.
:::

## De editor in één oogopslag {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor van Logicablokken met het palet en een programma" width={900} />

- Het **palet** toont de blokcategorieën: **Gebeurtenissen**, **Besturing**, **Sensoren**, **Geluiden**, **Operator**, **Variabelen**, **Lijsten** en **Mijn blokken**. Andere categorieën verschijnen als je profiel ze nodig heeft: **Motoren** en **Licht** (als een hub ze ondersteunt), **Simulator** (als het dashboard pedalen, een versnellingsbak of een handrem heeft), **Dashboardbedieningselementen** en **Gamepad**.
- In het **programmagebied** sleep je blokken en bouw je scripts.
- De bovenbalk bevat **Mijn hubs**, **Dashboard**, **Gamepad**, **Monitor**, **Editorinstellingen**, de **AI-bouwer** en **Start/Stop**.

Zie [Werken in de editor](/docs/Application/BlockBuilder/Editor) voor details.

## Hoe een programma draait {#how-a-program-runs}

- Een script begint met een **gebeurtenisblok** (een hoedblok): *wanneer het programma start*, *wanneer de knop … ingedrukt*, *wanneer ik ontvang …* enzovoort.
- De blokken die eronder vastzitten, worden van boven naar beneden uitgevoerd.
- Meerdere scripts draaien **tegelijk**. Gebruik berichten (*doorgeven*) om ze op elkaar af te stemmen.
- **Lussen** (*altijd herhalen*, *herhalen*, *herhalen zolang*) houden een script draaiende; **voorwaarden** (*als*, *als … anders*, *wacht tot*) nemen beslissingen.
- **Waardeblokken** (afgerond) geven waarden terug en passen in de invoervakken van andere blokken; **booleaanse** blokken (puntig) geven waar of onwaar terug voor voorwaarden.
- **Variabelen** en **lijsten** bewaren waarden tussen blokken en scripts.

## Blokvormen {#block-shapes}

### Hoedblokken {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starten een script als er iets gebeurt. Je kunt alleen blokken eronder vastmaken.

---

### Stapelblokken {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

De belangrijkste opdrachtblokken: elk blok doet iets.

---

### C-blokken {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-vormige blokken waar andere blokken in passen: lussen en voorwaarden.

---

### Waardeblokken {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Geven een waarde terug, zoals een getal of tekst.

---

### Booleaanse blokken {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Geven alleen `true` (waar) of `false` (onwaar) terug. Je gebruikt ze meestal in voorwaarden.

---

### Afsluitblokken {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Beëindigen een script: eronder kan niets worden vastgemaakt.

---

### Blokstapel {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Een stapel is een groep verbonden blokken die als één script wordt uitgevoerd, van boven naar beneden.
Een stapel begint meestal met een gebeurtenisblok, gevolgd door de blokken die op volgorde worden uitgevoerd.

---


## Hubs, poorten en bedieningen {#hubs-ports-and-controls}

- Motor- en lichtblokken gebruiken een **Hub** en een **Poort**. De categorieën Motoren en Licht verschijnen alleen als een hub in het profiel ze ondersteunt, en sommige blokken bestaan alleen voor bepaalde hubs (bijvoorbeeld de vermogensmodi van BuWizz of functies van de Technic Move Hub). De beschrijving van elk blok vermeldt met welke hubs het werkt.
- Dashboardblokken verwijzen naar bedieningen op naam (**JOY1**, **BTN2**). Je kunt een bediening niet van het dashboard verwijderen zolang blokken haar gebruiken; verwijder eerst die blokken.
- Gamepadblokken verschijnen als **Gamepad-blokken inschakelen** aan staat op de [Gamepad-pagina](/docs/Application/Dashboard/Gamepad).

## Blokniveaus {#block-levels}

Elk profiel heeft een **Blokniveau**: **Beginner** toont de eenvoudigste blokken, **Gevorderd** voegt gangbare logica- en apparaatblokken toe en **Guru** toont de complete set. Je kiest het bij het maken van het profiel of later in Editorinstellingen. Dit overzicht toont het niveau van elk blok naast de naam.

## Aanbevolen werkwijze {#recommended-workflow}

1. Begin met één gebeurtenisblok en een kort script; druk op **Start** en controleer of het werkt.
2. Controleer draairichtingen van motoren en waardebereiken al vroeg (een Monitor helpt).
3. Verdeel het programma in kleine scripts die via berichten met elkaar praten; zet herhaalde logica in [Mijn blokken](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Bouw veiligheid in: begrenzingen, stops, een controle bij het starten en een plan voor als een hub de verbinding verliest.

## Veelgemaakte fouten {#common-pitfalls}

- Een script zonder gebeurtenisblok start nooit.
- De verkeerde hub of poort is gekozen, waardoor er niets zichtbaars gebeurt.
- Tekst, getallen en booleaanse waarden door elkaar gebruiken geeft onverwachte resultaten.
- Heel frequente gebeurtenissen zonder filter (bijvoorbeeld een sensorgebeurtenis bij elke kleine verandering) kunnen het programma overbelasten; gebruik drempels of korte wachttijden.

## Blokkenoverzicht {#block-reference}

- [Gebeurtenissen](/docs/Application/BlockBuilder/Blocks/Events) · [Besturing](/docs/Application/BlockBuilder/Blocks/Control) · [Operator](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variabelen](/docs/Application/BlockBuilder/Blocks/Variables) · [Lijsten](/docs/Application/BlockBuilder/Blocks/Lists) · [Mijn blokken](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motoren](/docs/Application/BlockBuilder/Blocks/Motors) · [Licht](/docs/Application/BlockBuilder/Blocks/Light) · [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors) · [Geluiden](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

Houd in de app een blok lang ingedrukt (of klik er met de rechtermuisknop op) en kies **Over het blok** om de beschrijving hier te openen.

Kant-en-klare programma's: [Voorbeelden](/docs/Application/BlockBuilder/Examples).
