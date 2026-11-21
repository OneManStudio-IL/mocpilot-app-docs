---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

Blocurile gamepadului reacționează la un controler de joc și îi citesc butoanele, stickurile și trăgaciele. Categoria apare când **Activează blocurile gamepad-ului** este activat pe [pagina Gamepad](/docs/Application/Dashboard/Gamepad). Numele butoanelor urmează dispunerea controlerului: Xbox sau Sony.

## Evenimente {#events}

### `când … este …` (Începător) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Rulează când butonul selectat este apăsat sau eliberat.

- Butoane (dispunere Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Butoane (dispunere Sony): `cruce`, `cerc`, `pătrat`, `triunghi`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stări: `apăsat`, `eliberat`

### `când D-Pad … buton …` (Începător) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Rulează când un buton al D-pad-ului este apăsat sau eliberat.

- Direcții: `sus`, `jos`, `stânga`, `dreapta`
- Stări: `apăsat`, `eliberat`

### `când … joystick …` (Începător) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Rulează când un stick este împins într-o direcție, mișcat sau eliberat.

- Stick: `stânga`, `dreapta`
- Stare: `sus`, `jos`, `stânga`, `dreapta`, `mutat`, `eliberat`
- Utilizare tipică: reacția la mișcarea stickului și oprirea sau centrarea modelului când stickul este eliberat.

## Valori {#values}

### `este … …` (Începător) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Returnează `true` când butonul selectat este în starea selectată.

- Butoane (dispunere Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Butoane (dispunere Sony): `cruce`, `cerc`, `pătrat`, `triunghi`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stări: `apăsat`, `eliberat`

### `D-Pad … buton …` (Începător) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Returnează `true` când butonul selectat al D-pad-ului este în starea selectată.

- Direcții: `sus`, `jos`, `stânga`, `dreapta`
- Stări: `apăsat`, `eliberat`

### `joystick … …` (Începător) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Returnează poziția unui stick pe o axă.

- Stick: `stânga`, `dreapta`
- Axă: `axa X`, `axa Y`
- Interval: implicit de la `-1` la `1` sau de la `-100` la `100`, dacă alegi asta în **Intervalul valorilor gamepad-ului** pe pagina Gamepad.

### `… presiune` (Începător) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Returnează cât de mult este apăsat un trăgaci.

- Trăgaci (dispunere Xbox): `LT`, `RT`
- Trăgaci (dispunere Sony): `L2`, `R2`
- Interval: implicit de la `0` (eliberat) la `1` sau de la `0` la `100` cu **Intervalul valorilor gamepad-ului** extins.
