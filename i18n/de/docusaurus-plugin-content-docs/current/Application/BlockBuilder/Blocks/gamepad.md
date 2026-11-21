---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

Gamepad-Blöcke reagieren auf einen Gamecontroller und lesen seine Tasten, Sticks und Trigger. Die Kategorie erscheint, wenn auf der [Gamepad-Seite](/docs/Application/Dashboard/Gamepad) **Gamepad-Blöcke aktivieren** eingeschaltet ist. Die Tastennamen folgen dem Layout des Controllers: Xbox oder Sony.

## Ereignisse {#events}

### `wenn … ist …` (Anfänger) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Wird ausgeführt, wenn die ausgewählte Taste gedrückt oder losgelassen wird.

- Tasten (Xbox-Layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tasten (Sony-Layout): `Kreuz`, `Kreis`, `Quadrat`, `Dreieck`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Zustände: `gedrückt`, `losgelassen`

### `wenn D-Pad … Taste …` (Anfänger) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Wird ausgeführt, wenn eine Taste des Steuerkreuzes gedrückt oder losgelassen wird.

- Richtungen: `hoch`, `runter`, `links`, `rechts`
- Zustände: `gedrückt`, `losgelassen`

### `wenn … Stick …` (Anfänger) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Wird ausgeführt, wenn ein Stick in eine Richtung gedrückt, bewegt oder losgelassen wird.

- Stick: `links`, `rechts`
- Zustand: `hoch`, `runter`, `links`, `rechts`, `bewegt`, `losgelassen`
- Typische Verwendung: auf Stickbewegungen reagieren und das Modell anhalten oder zentrieren, wenn der Stick losgelassen wird.

## Werte {#values}

### `ist … …` (Anfänger) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Liefert `true`, wenn die ausgewählte Taste im ausgewählten Zustand ist.

- Tasten (Xbox-Layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tasten (Sony-Layout): `Kreuz`, `Kreis`, `Quadrat`, `Dreieck`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Zustände: `gedrückt`, `losgelassen`

### `D-Pad … Taste …` (Anfänger) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Liefert `true`, wenn die ausgewählte Taste des Steuerkreuzes im ausgewählten Zustand ist.

- Richtungen: `hoch`, `runter`, `links`, `rechts`
- Zustände: `gedrückt`, `losgelassen`

### `Stick … …` (Anfänger) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Liefert die Stellung eines Sticks entlang einer Achse.

- Stick: `links`, `rechts`
- Achse: `X-Achse`, `Y-Achse`
- Bereich: standardmäßig von `-1` bis `1` oder von `-100` bis `100`, wenn Sie das auf der Gamepad-Seite unter **Wertebereich des Gamepads** wählen.

### `… Druck` (Anfänger) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Liefert, wie weit ein Trigger gedrückt ist.

- Trigger (Xbox-Layout): `LT`, `RT`
- Trigger (Sony-Layout): `L2`, `R2`
- Bereich: standardmäßig von `0` (losgelassen) bis `1` oder von `0` bis `100` mit dem größeren **Wertebereich des Gamepads**.
