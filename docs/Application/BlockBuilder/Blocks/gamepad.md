---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad

Gamepad blocks react to a game controller and read its buttons, sticks and triggers. The category appears when **Enable gamepad blocks** is on in the [Gamepad page](/docs/Application/Dashboard/Gamepad). Button names follow the controller layout: Xbox or Sony.

## Events

### `when … is …` (Beginner) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Runs when the selected button is pressed or released.

- Buttons (Xbox layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Buttons (Sony layout): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- States: `pressed`, `released`

### `when D-Pad … button is …` (Beginner) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Runs when a D-pad button is pressed or released.

- Directions: `up`, `down`, `left`, `right`
- States: `pressed`, `released`

### `when … stick is …` (Beginner) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Runs when a stick is pushed in a direction, moved or released.

- Stick: `left`, `right`
- State: `up`, `down`, `left`, `right`, `moved`, `released`
- Typical use: react to stick movement, and stop or center the model when the stick is released.

## Values

### `is … …` (Beginner) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returns `true` when the selected button is in the selected state.

- Buttons (Xbox layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Buttons (Sony layout): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- States: `pressed`, `released`

### `is D-Pad … button …` (Beginner) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returns `true` when the selected D-pad button is in the selected state.

- Directions: `up`, `down`, `left`, `right`
- States: `pressed`, `released`

### `stick … …` (Beginner) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returns the position of a stick along one axis.

- Stick: `left`, `right`
- Axis: `x-axis`, `y-axis`
- Range: from `-1` to `1` by default, or from `-100` to `100` if you choose that in **Gamepad values range** on the Gamepad page.

### `… pressure` (Beginner) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returns how far a trigger is pressed.

- Triggers (Xbox layout): `LT`, `RT`
- Triggers (Sony layout): `L2`, `R2`
- Range: from `0` (released) to `1` by default, or from `0` to `100` with the wider **Gamepad values range**.
