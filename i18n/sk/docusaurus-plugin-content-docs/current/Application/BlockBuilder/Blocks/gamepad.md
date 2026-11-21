---
id: Gamepad
title: Herný ovládač
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Herný ovládač {#gamepad}

Bloky herného ovládača reagujú na herný ovládač a čítajú jeho tlačidlá, páčky a spúšte. Kategória sa zobrazí, keď je na [stránke Herný ovládač](/docs/Application/Dashboard/Gamepad) zapnutá voľba **Povoliť bloky gamepadu**. Názvy tlačidiel sa riadia rozložením ovládača: Xbox alebo Sony.

## Udalosti {#events}

### `keď … je …` (Začiatočník) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Spustí sa, keď sa vybrané tlačidlo stlačí alebo pustí.

- Tlačidlá (rozloženie Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tlačidlá (rozloženie Sony): `krížik`, `kruh`, `štvorec`, `trojuholník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stavy: `stlačené`, `uvoľnené`

### `keď D-Pad … tlačidlo …` (Začiatočník) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Spustí sa, keď sa tlačidlo D-padu stlačí alebo pustí.

- Smery: `hore`, `dole`, `vľavo`, `vpravo`
- Stavy: `stlačené`, `uvoľnené`

### `keď … joystick …` (Začiatočník) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Spustí sa, keď páčku vychýlite niektorým smerom, pohnete ňou alebo ju pustíte.

- Páčka: `ľavý`, `pravý`
- Stav: `hore`, `dole`, `vľavo`, `vpravo`, `pohnutý`, `uvoľnené`
- Typické použitie: reagovať na pohyb páčky a po jej pustení model zastaviť alebo vycentrovať.

## Hodnoty {#values}

### `je … …` (Začiatočník) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Vráti `true`, keď je vybrané tlačidlo vo vybranom stave.

- Tlačidlá (rozloženie Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tlačidlá (rozloženie Sony): `krížik`, `kruh`, `štvorec`, `trojuholník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stavy: `stlačené`, `uvoľnené`

### `D-Pad … tlačidlo …` (Začiatočník) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Vráti `true`, keď je vybrané tlačidlo D-padu vo vybranom stave.

- Smery: `hore`, `dole`, `vľavo`, `vpravo`
- Stavy: `stlačené`, `uvoľnené`

### `joystick … …` (Začiatočník) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Vráti polohu páčky v jednej osi.

- Páčka: `ľavý`, `pravý`
- Os: `os X`, `os Y`
- Rozsah: predvolene od `-1` do `1` alebo od `-100` do `100`, ak to zvolíte v nastavení **Rozsah hodnôt gamepadu** na stránke Herný ovládač.

### `… tlak` (Začiatočník) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Vráti, ako hlboko je spúšť stlačená.

- Spúšte (rozloženie Xbox): `LT`, `RT`
- Spúšte (rozloženie Sony): `L2`, `R2`
- Rozsah: predvolene od `0` (pustená) do `1` alebo od `0` do `100` so širším nastavením **Rozsah hodnôt gamepadu**.
