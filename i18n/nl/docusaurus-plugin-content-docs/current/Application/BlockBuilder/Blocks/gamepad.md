---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

Gamepadblokken reageren op een gamecontroller en lezen de knoppen, sticks en triggers uit. De categorie verschijnt als **Gamepad-blokken inschakelen** aan staat op de [Gamepad-pagina](/docs/Application/Dashboard/Gamepad). De knopnamen volgen de indeling van de controller: Xbox of Sony.

## Gebeurtenissen {#events}

### `wanneer … is …` (Beginner) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Wordt uitgevoerd als de gekozen knop wordt ingedrukt of losgelaten.

- Knoppen (Xbox-indeling): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knoppen (Sony-indeling): `kruis`, `cirkel`, `vierkant`, `driehoek`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Toestanden: `ingedrukt`, `vrijgegeven`

### `wanneer D-Pad … knop is …` (Beginner) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Wordt uitgevoerd als een knop van het richtingspad wordt ingedrukt of losgelaten.

- Richtingen: `omhoog`, `omlaag`, `links`, `rechts`
- Toestanden: `ingedrukt`, `vrijgegeven`

### `wanneer … stick …` (Beginner) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Wordt uitgevoerd als een stick in een richting wordt geduwd, bewogen of losgelaten.

- Stick: `links`, `rechts`
- Toestand: `omhoog`, `omlaag`, `links`, `rechts`, `bewogen`, `vrijgegeven`
- Gebruikelijke toepassing: reageren op stickbewegingen, en het model stoppen of centreren als de stick wordt losgelaten.

## Waarden {#values}

### `is … …` (Beginner) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Geeft `true` terug als de gekozen knop in de gekozen toestand is.

- Knoppen (Xbox-indeling): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knoppen (Sony-indeling): `kruis`, `cirkel`, `vierkant`, `driehoek`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Toestanden: `ingedrukt`, `vrijgegeven`

### `D-Pad … knop …` (Beginner) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Geeft `true` terug als de gekozen knop van het richtingspad in de gekozen toestand is.

- Richtingen: `omhoog`, `omlaag`, `links`, `rechts`
- Toestanden: `ingedrukt`, `vrijgegeven`

### `stick … …` (Beginner) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Geeft de positie van een stick langs één as terug.

- Stick: `links`, `rechts`
- As: `X-as`, `Y-as`
- Bereik: standaard van `-1` tot `1`, of van `-100` tot `100` als je dat kiest bij **Bereik van gamepadwaarden** op de Gamepad-pagina.

### `… druk` (Beginner) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Geeft terug hoe ver een trigger is ingedrukt.

- Triggers (Xbox-indeling): `LT`, `RT`
- Triggers (Sony-indeling): `L2`, `R2`
- Bereik: standaard van `0` (losgelaten) tot `1`, of van `0` tot `100` met het bredere **Bereik van gamepadwaarden**.
