---
id: Gamepad
title: Геймпад
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Геймпад {#gamepad}

Блоки геймпада реагують на ігровий контролер і зчитують його кнопки, стіки та тригери. Категорія з’являється, коли ввімкнено **Увімкнути блоки геймпада** на [сторінці «Геймпад»](/docs/Application/Dashboard/Gamepad). Назви кнопок відповідають розкладці контролера: Xbox або Sony.

## Події {#events}

### `коли … є …` (Початківець) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Спрацьовує, коли вибрану кнопку натиснуто або відпущено.

- Кнопки (розкладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (розкладка Sony): `хрест`, `коло`, `квадрат`, `трикутник`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Стани: `натиснута`, `відпущено`

### `коли D-Pad … кнопка …` (Початківець) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Спрацьовує, коли кнопку хрестовини натиснуто або відпущено.

- Напрямки: `вгору`, `вниз`, `вліво`, `вправо`
- Стани: `натиснута`, `відпущено`

### `коли … джойстик …` (Початківець) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Спрацьовує, коли стік відхилено в певному напрямку, переміщено або відпущено.

- Стік: `лівий`, `правий`
- Стан: `вгору`, `вниз`, `вліво`, `вправо`, `переміщено`, `відпущено`
- Для чого: реагувати на рух стіка, а коли стік відпущено, зупиняти модель або вирівнювати її по центру.

## Значення {#values}

### `є … …` (Початківець) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Повертає `true`, коли вибрана кнопка у вибраному стані.

- Кнопки (розкладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (розкладка Sony): `хрест`, `коло`, `квадрат`, `трикутник`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Стани: `натиснута`, `відпущено`

### `D-Pad … кнопка …` (Початківець) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Повертає `true`, коли вибрана кнопка хрестовини у вибраному стані.

- Напрямки: `вгору`, `вниз`, `вліво`, `вправо`
- Стани: `натиснута`, `відпущено`

### `джойстик … …` (Початківець) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Повертає положення стіка вздовж однієї осі.

- Стік: `лівий`, `правий`
- Вісь: `вісь X`, `вісь Y`
- Діапазон: типово від `-1` до `1` або від `-100` до `100`, якщо вибрати це в **Діапазон значень геймпада** на сторінці «Геймпад».

### `… тиск` (Початківець) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Повертає, наскільки натиснуто тригер.

- Тригери (розкладка Xbox): `LT`, `RT`
- Тригери (розкладка Sony): `L2`, `R2`
- Діапазон: типово від `0` (відпущено) до `1` або від `0` до `100` з ширшим **Діапазон значень геймпада**.
