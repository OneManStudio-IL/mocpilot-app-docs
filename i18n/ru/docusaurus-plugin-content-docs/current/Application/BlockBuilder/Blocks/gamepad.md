---
id: Gamepad
title: Геймпад
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Геймпад

Блоки геймпада реагируют на игровой контроллер и читают его кнопки, стики и триггеры. Категория появляется, когда на [странице «Геймпад»](/docs/Application/Dashboard/Gamepad) включён параметр **Включить блоки геймпада**. Названия кнопок зависят от раскладки контроллера: Xbox или Sony.

## События

### `когда … является …` (Новичок) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Срабатывает, когда выбранную кнопку нажимают или отпускают.

- Кнопки (раскладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (раскладка Sony): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Состояния: `нажата`, `отпущен`

### `когда D-Pad … кнопка …` (Новичок) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Срабатывает, когда кнопку крестовины нажимают или отпускают.

- Направления: `вверх`, `вниз`, `влево`, `вправо`
- Состояния: `нажата`, `отпущен`

### `когда … джойстик …` (Новичок) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Срабатывает, когда стик отклоняют в какую-то сторону, двигают или отпускают.

- Стик: `левый`, `правый`
- Состояние: `вверх`, `вниз`, `влево`, `вправо`, `перемещён`, `отпущен`
- Для чего: реагировать на движение стика, а когда его отпустили — остановить модель или вернуть руль в центр.

## Значения

### `является … …` (Новичок) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Возвращает `true`, если выбранная кнопка находится в выбранном состоянии.

- Кнопки (раскладка Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Кнопки (раскладка Sony): `cross`, `circle`, `square`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Состояния: `нажата`, `отпущен`

### `D-Pad … кнопка …` (Новичок) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Возвращает `true`, если выбранная кнопка крестовины находится в выбранном состоянии.

- Направления: `вверх`, `вниз`, `влево`, `вправо`
- Состояния: `нажата`, `отпущен`

### `джойстик … …` (Новичок) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Возвращает положение стика по одной оси.

- Стик: `левый`, `правый`
- Ось: `ось X`, `ось Y`
- Диапазон: по умолчанию от `-1` до `1`, а если выбрать это в параметре **Диапазон значений геймпада** на странице «Геймпад» — от `-100` до `100`.

### `… давление` (Новичок) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Возвращает, насколько нажат триггер.

- Триггеры (раскладка Xbox): `LT`, `RT`
- Триггеры (раскладка Sony): `L2`, `R2`
- Диапазон: по умолчанию от `0` (отпущен) до `1`, а с широким **Диапазоном значений геймпада** — от `0` до `100`.
