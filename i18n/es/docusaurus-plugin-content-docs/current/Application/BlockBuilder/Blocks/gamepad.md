---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

Los bloques de gamepad reaccionan a un mando de juego y leen sus botones, sticks y gatillos. La categoría aparece cuando **Habilitar bloques de gamepad** está activado en la [página Gamepad](/docs/Application/Dashboard/Gamepad). Los nombres de los botones siguen la distribución del mando: Xbox o Sony.

## Eventos {#events}

### `cuando … está …` (Principiante) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Se ejecuta cuando se pulsa o se suelta el botón seleccionado.

- Botones (distribución Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Botones (distribución Sony): `cruz`, `círculo`, `cuadrado`, `triángulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `presionado`, `liberado`

### `cuando D-Pad … botón …` (Principiante) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Se ejecuta cuando se pulsa o se suelta un botón del pad direccional.

- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `liberado`

### `cuando … palanca …` (Principiante) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Se ejecuta cuando un stick se empuja en una dirección, se mueve o se suelta.

- Stick: `izquierda`, `derecha`
- Estado: `arriba`, `abajo`, `izquierda`, `derecha`, `movido`, `liberado`
- Uso típico: reaccionar al movimiento del stick, y detener o centrar el modelo cuando se suelta el stick.

## Valores {#values}

### `está … …` (Principiante) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Devuelve `true` cuando el botón seleccionado está en el estado seleccionado.

- Botones (distribución Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Botones (distribución Sony): `cruz`, `círculo`, `cuadrado`, `triángulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `presionado`, `liberado`

### `D-Pad … botón …` (Principiante) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Devuelve `true` cuando el botón seleccionado del pad direccional está en el estado seleccionado.

- Direcciones: `arriba`, `abajo`, `izquierda`, `derecha`
- Estados: `presionado`, `liberado`

### `palanca … …` (Principiante) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Devuelve la posición de un stick a lo largo de un eje.

- Stick: `izquierda`, `derecha`
- Eje: `eje X`, `eje Y`
- Rango: de `-1` a `1` por defecto, o de `-100` a `100` si lo eliges en **Rango de valores del gamepad** en la página Gamepad.

### `… presión` (Principiante) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Devuelve cuánto se pulsa un gatillo.

- Gatillos (distribución Xbox): `LT`, `RT`
- Gatillos (distribución Sony): `L2`, `R2`
- Rango: de `0` (suelto) a `1` por defecto, o de `0` a `100` con el **Rango de valores del gamepad** más amplio.
