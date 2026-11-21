---
id: BlocksIntroducing
title: Introduktion till Logikblock
description: "Logikblock är MOCPilots visuella redigerare för blockprogrammering: händelser, loopar, villkor, variabler, sensorer och ljud."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logikblock {#logic-blocks}

**Logikblock** är redigeraren för blockprogrammering i MOCPilot. Du bygger program genom att fästa ihop block, ungefär som i Scratch: händelser, loopar, villkor, variabler, listor, egna block, ljud samt block för motorer, lampor, sensorer, kontroller på instrumentpanelen och handkontrollen.

Välj Logikblock när din modell behöver logik: robotar, automatiska sekvenser, reaktioner på sensorer, startkontroller, spel. Om du bara behöver koppla kontroller till motorer går [Snabbkopplingar](/docs/Application/Links/LinksIntroducing) snabbare.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program i Logikblock" style={{width: '100%', maxWidth: 720}} />

:::warning Inte Scratch
Logikblock har sin egen uppsättning block och sitt eget beteende. Du kan inte importera MOCPilot-program till Scratch, och inte heller Scratch-projekt till MOCPilot.
:::

## Redigeraren i korthet {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Redigeraren för Logikblock med paletten och ett program" width={900} />

- **Paletten** listar blockkategorierna: **Händelser**, **Kontroll**, **Sensorer**, **Ljud**, **Operator**, **Variabler**, **Listor** och **Mina block**. Andra kategorier visas när profilen behöver dem: **Motorer** och **Ljus** (när en hubb stöder dem), **Simulator** (när instrumentpanelen har pedaler, en växellåda eller en handbroms), **Skärmkontroller** och **Handkontroll**.
- **Programområdet** är där du drar block och bygger skript.
- Det övre fältet har **Mina hubbar**, **Instrumentpanel**, **Handkontroll**, **Monitor**, **Redigerarens inställningar**, **AI-byggare** och **Kör/Stoppa**.

Se [Arbeta i redigeraren](/docs/Application/BlockBuilder/Editor) för mer information.

## Så körs ett program {#how-a-program-runs}

- Ett skript börjar med ett **händelseblock** (ett hattblock): *när programmet startar*, *när knappen … är tryckt*, *när jag tar emot …* och så vidare.
- Blocken som är fästa under det körs uppifrån och ned.
- Flera skript körs **samtidigt**. Använd meddelanden (*överföra*) för att samordna dem.
- **Loopar** (*upprepa alltid*, *upprepa*, *upprepa så länge*) håller ett skript igång; **villkor** (*om*, *om … annars*, *vänta tills*) fattar beslut.
- **Rapportblock** (rundade) returnerar värden och passar i andra blocks indata; **booleska** block (spetsiga) returnerar sant eller falskt för villkor.
- **Variabler** och **listor** sparar värden mellan block och skript.

## Blockformer {#block-shapes}

### Hattblock {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Startar ett skript när något händer. Du kan bara fästa block under dem.

---

### Stapelblock {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

De viktigaste kommandoblocken: vart och ett gör något.

---

### C-block {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-formade block som rymmer andra block: loopar och villkor.

---

### Rapportblock {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnerar ett värde, till exempel ett tal eller en text.

---

### Booleska block {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnerar bara `true` eller `false`. Du använder dem oftast i villkor.

---

### Slutblock {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Avslutar ett skript: ingenting kan fästas under dem.

---

### Blockhög {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

En hög är en grupp sammankopplade block som körs som ett skript, uppifrån och ned.
En hög börjar oftast med ett händelseblock, följt av blocken som körs i tur och ordning.

---


## Hubbar, portar och kontroller {#hubs-ports-and-controls}

- Motor- och ljusblock tar en **hubb** och en **port**. Kategorierna Motorer och Ljus visas bara när en hubb i profilen stöder dem, och vissa block finns bara för vissa hubbar (till exempel BuWizz effektlägen eller funktioner i Technic Move Hub). Varje blocks beskrivning anger vilka hubbar det fungerar med.
- Block för instrumentpanelen hänvisar till kontroller med namn (**JOY1**, **BTN2**). Du kan inte ta bort en kontroll från instrumentpanelen medan block använder den; ta bort de blocken först.
- Handkontrollsblock visas när **Aktivera gamepad-block** är påslaget på [sidan Handkontroll](/docs/Application/Dashboard/Gamepad).

## Blocknivåer {#block-levels}

Varje profil har en **blocknivå**: **Nybörjare** visar de enklaste blocken, **Avancerad** lägger till vanliga logik- och enhetsblock och **Guru** visar hela uppsättningen. Du väljer den när du skapar profilen eller senare i Redigerarens inställningar. Den här referensen visar varje blocks nivå bredvid dess namn.

## Rekommenderat arbetssätt {#recommended-workflow}

1. Börja med ett händelseblock och ett kort skript; tryck på **Kör** och kontrollera att det fungerar.
2. Kontrollera motorernas riktningar och värdeintervall tidigt (en Monitor hjälper).
3. Dela upp programmet i små skript som pratar med varandra via meddelanden; flytta upprepad logik till [Mina block](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Bygg in säkerhet: gränser, stopp, en startkontroll och en plan för när en hubb kopplas från.

## Vanliga fallgropar {#common-pitfalls}

- Ett skript utan händelseblock startar aldrig.
- Fel hubb eller port är vald, så ingenting syns hända.
- Om du blandar text, tal och booleska värden får du oväntade resultat.
- Mycket täta händelser utan filtrering (till exempel en sensorhändelse vid varje liten förändring) kan överbelasta programmet; använd trösklar eller korta väntetider.

## Blockreferens {#block-reference}

- [Händelser](/docs/Application/BlockBuilder/Blocks/Events) · [Kontroll](/docs/Application/BlockBuilder/Blocks/Control) · [Operatorer](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variabler](/docs/Application/BlockBuilder/Blocks/Variables) · [Listor](/docs/Application/BlockBuilder/Blocks/Lists) · [Mina block](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motorer](/docs/Application/BlockBuilder/Blocks/Motors) · [Ljus](/docs/Application/BlockBuilder/Blocks/Light) · [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors) · [Ljud](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Skärmkontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Handkontroll](/docs/Application/BlockBuilder/Blocks/Gamepad)

I appen trycker du länge på (eller högerklickar) ett block och väljer **Om blocket** för att öppna dess beskrivning här.

Färdiga program: [Exempel](/docs/Application/BlockBuilder/Examples).
