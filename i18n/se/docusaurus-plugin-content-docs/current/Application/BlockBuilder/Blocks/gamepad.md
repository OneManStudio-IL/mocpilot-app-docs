---
id: Gamepad
title: Handkontroll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Handkontroll {#gamepad}

Handkontrollsblock reagerar på en handkontroll och läser dess knappar, spakar och avtryckare. Kategorin visas när **Aktivera gamepad-block** är påslaget på [sidan Handkontroll](/docs/Application/Dashboard/Gamepad). Knappnamnen följer handkontrollens layout: Xbox eller Sony.

## Händelser {#events}

### `när … är …` (Nybörjare) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Körs när den valda knappen trycks in eller släpps.

- Knappar (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappar (Sony-layout): `kors`, `cirkel`, `fyrkant`, `triangel`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tillstånd: `tryckt`, `släppt`

### `när D-Pad … knapp …` (Nybörjare) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Körs när en knapp på styrkorset trycks in eller släpps.

- Riktningar: `upp`, `ner`, `vänster`, `höger`
- Tillstånd: `tryckt`, `släppt`

### `när … stick …` (Nybörjare) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Körs när en spak förs åt ett håll, rörs eller släpps.

- Spak: `vänster`, `höger`
- Tillstånd: `upp`, `ner`, `vänster`, `höger`, `flyttad`, `släppt`
- Typisk användning: reagera på spakrörelser och stoppa eller centrera modellen när spaken släpps.

## Värden {#values}

### `är … …` (Nybörjare) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerar `true` när den valda knappen är i det valda tillståndet.

- Knappar (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knappar (Sony-layout): `kors`, `cirkel`, `fyrkant`, `triangel`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tillstånd: `tryckt`, `släppt`

### `D-Pad … knapp …` (Nybörjare) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerar `true` när den valda knappen på styrkorset är i det valda tillståndet.

- Riktningar: `upp`, `ner`, `vänster`, `höger`
- Tillstånd: `tryckt`, `släppt`

### `stick … …` (Nybörjare) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerar en spaks läge längs en axel.

- Spak: `vänster`, `höger`
- Axel: `X-axel`, `Y-axel`
- Intervall: från `-1` till `1` som standard, eller från `-100` till `100` om du väljer det under **Gamepadens värdeintervall** på sidan Handkontroll.

### `… tryck` (Nybörjare) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerar hur långt en avtryckare är nedtryckt.

- Avtryckare (Xbox-layout): `LT`, `RT`
- Avtryckare (Sony-layout): `L2`, `R2`
- Intervall: från `0` (släppt) till `1` som standard, eller från `0` till `100` med det bredare **Gamepadens värdeintervall**.
