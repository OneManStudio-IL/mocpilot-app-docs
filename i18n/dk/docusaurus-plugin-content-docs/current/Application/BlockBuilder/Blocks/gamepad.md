---
id: Gamepad
title: Spilcontroller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Spilcontroller {#gamepad}

Spilcontrollerblokke reagerer på en spilcontroller og læser dens knapper, sticks og aftrækkere. Kategorien vises, når **Aktivér gamepad-blokke** er slået til på [siden Spilcontroller](/docs/Application/Dashboard/Gamepad). Knappernes navne følger controllerens layout: Xbox eller Sony.

## Hændelser {#events}

### `når … er …` (Begynder) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Kører, når den valgte knap trykkes ned eller slippes.

- Knapper (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapper (Sony-layout): `kryds`, `cirkel`, `kvadrat`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstande: `trykket`, `sluppet`

### `når D-Pad … knap …` (Begynder) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Kører, når en knap på retningspaden trykkes ned eller slippes.

- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

### `når … stick …` (Begynder) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Kører, når en stick skubbes i en retning, flyttes eller slippes.

- Stick: `venstre`, `højre`
- Tilstand: `op`, `ned`, `venstre`, `højre`, `flyttet`, `sluppet`
- Typisk brug: reager på stickbevægelser, og stop eller centrer modellen, når sticken slippes.

## Værdier {#values}

### `er … …` (Begynder) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerer `true`, når den valgte knap er i den valgte tilstand.

- Knapper (Xbox-layout): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapper (Sony-layout): `kryds`, `cirkel`, `kvadrat`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstande: `trykket`, `sluppet`

### `D-Pad … knap …` (Begynder) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerer `true`, når den valgte knap på retningspaden er i den valgte tilstand.

- Retninger: `op`, `ned`, `venstre`, `højre`
- Tilstande: `trykket`, `sluppet`

### `stick … …` (Begynder) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerer en sticks position langs én akse.

- Stick: `venstre`, `højre`
- Akse: `X-akse`, `Y-akse`
- Område: fra `-1` til `1` som standard eller fra `-100` til `100`, hvis du vælger det under **Gamepad-værdiområde** på siden Spilcontroller.

### `… tryk` (Begynder) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerer, hvor langt en aftrækker er trykket ned.

- Aftrækkere (Xbox-layout): `LT`, `RT`
- Aftrækkere (Sony-layout): `L2`, `R2`
- Område: fra `0` (sluppet) til `1` som standard eller fra `0` til `100` med det bredere **Gamepad-værdiområde**.
