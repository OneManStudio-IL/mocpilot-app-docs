---
id: Gamepad
title: Spillkontroller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Spillkontroller {#gamepad}

Spillkontrollerblokker reagerer på en spillkontroller og leser knappene, spakene og avtrekkerne. Kategorien vises når **Aktiver gamepad-blokker** er slått på på [siden Spillkontroller](/docs/Application/Dashboard/Gamepad). Knappenavnene følger kontrolleroppsettet: Xbox eller Sony.

## Hendelser {#events}

### `når … er …` (Nybegynner) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Kjører når den valgte knappen trykkes inn eller slippes.

- Knapper (Xbox-oppsett): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapper (Sony-oppsett): `kryss`, `sirkel`, `firkant`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstander: `trykket`, `sleppt`

### `når styrepad … knapp …` (Nybegynner) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Kjører når en knapp på styrepaden trykkes inn eller slippes.

- Retninger: `opp`, `ned`, `venstre`, `høyre`
- Tilstander: `trykket`, `sleppt`

### `når … joystick …` (Nybegynner) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Kjører når en spak skyves i en retning, beveges eller slippes.

- Spak: `venstre`, `høyre`
- Tilstand: `opp`, `ned`, `venstre`, `høyre`, `flyttet`, `sleppt`
- Typisk bruk: reager på bevegelser med spaken, og stopp eller sentrer modellen når spaken slippes.

## Verdier {#values}

### `er … …` (Nybegynner) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnerer `true` når den valgte knappen er i den valgte tilstanden.

- Knapper (Xbox-oppsett): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Knapper (Sony-oppsett): `kryss`, `sirkel`, `firkant`, `trekant`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilstander: `trykket`, `sleppt`

### `retningspad … knapp …` (Nybegynner) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnerer `true` når den valgte knappen på styrepaden er i den valgte tilstanden.

- Retninger: `opp`, `ned`, `venstre`, `høyre`
- Tilstander: `trykket`, `sleppt`

### `joystick … …` (Nybegynner) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnerer posisjonen til en spak langs én akse.

- Spak: `venstre`, `høyre`
- Akse: `X-akse`, `Y-akse`
- Område: fra `-1` til `1` som standard, eller fra `-100` til `100` hvis du velger det i **Verdiområde for gamepad** på siden Spillkontroller.

### `… trykk` (Nybegynner) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnerer hvor langt en avtrekker er trykket inn.

- Avtrekkere (Xbox-oppsett): `LT`, `RT`
- Avtrekkere (Sony-oppsett): `L2`, `R2`
- Område: fra `0` (sluppet) til `1` som standard, eller fra `0` til `100` med det bredere **Verdiområde for gamepad**.
