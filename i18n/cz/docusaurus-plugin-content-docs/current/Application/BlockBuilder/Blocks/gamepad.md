---
id: Gamepad
title: Herní ovladač
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Herní ovladač {#gamepad}

Bloky herního ovladače reagují na gamepad a čtou jeho tlačítka, páčky a spouště. Kategorie se objeví, když je na [stránce Herní ovladač](/docs/Application/Dashboard/Gamepad) zapnuté **Povolit bloky gamepadu**. Názvy tlačítek se řídí rozložením ovladače: Xbox nebo Sony.

## Události {#events}

### `když … je …` (Začátečník) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Spustí se, když je vybrané tlačítko stisknuto nebo uvolněno.

- Tlačítka (rozložení Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tlačítka (rozložení Sony): `kříž`, `kruh`, `čtverec`, `trojúhelník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stavy: `stisknuto`, `uvolněno`

### `když D-Pad … tlačítko …` (Začátečník) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Spustí se, když je tlačítko D-padu stisknuto nebo uvolněno.

- Směry: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Stavy: `stisknuto`, `uvolněno`

### `když … joystick …` (Začátečník) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Spustí se, když je páčka vychýlena určitým směrem, pohnuta nebo uvolněna.

- Páčka: `levý`, `pravý`
- Stav: `nahoru`, `dolů`, `vlevo`, `vpravo`, `pohnut`, `uvolněno`
- Typické použití: reagovat na pohyb páčky a po jejím uvolnění model zastavit nebo vystředit.

## Hodnoty {#values}

### `je … …` (Začátečník) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Vrací `true`, když je vybrané tlačítko ve vybraném stavu.

- Tlačítka (rozložení Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Tlačítka (rozložení Sony): `kříž`, `kruh`, `čtverec`, `trojúhelník`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stavy: `stisknuto`, `uvolněno`

### `D-Pad … tlačítko …` (Začátečník) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Vrací `true`, když je vybrané tlačítko D-padu ve vybraném stavu.

- Směry: `nahoru`, `dolů`, `vlevo`, `vpravo`
- Stavy: `stisknuto`, `uvolněno`

### `joystick … …` (Začátečník) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Vrací polohu páčky v jedné ose.

- Páčka: `levý`, `pravý`
- Osa: `osa X`, `osa Y`
- Rozsah: ve výchozím nastavení od `-1` do `1`, nebo od `-100` do `100`, pokud to zvolíte v nastavení **Rozsah hodnot herního ovladače** na stránce Herní ovladač.

### `… tlak` (Začátečník) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Vrací, jak hluboko je spoušť stisknutá.

- Spouště (rozložení Xbox): `LT`, `RT`
- Spouště (rozložení Sony): `L2`, `R2`
- Rozsah: ve výchozím nastavení od `0` (uvolněno) do `1`, nebo od `0` do `100` s širším nastavením **Rozsah hodnot herního ovladače**.
