---
id: Gamepad
title: 游戏手柄
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 游戏手柄 {#gamepad}

游戏手柄积木对游戏控制器做出反应，并读取它的按钮、摇杆和扳机。在[游戏手柄页面](/docs/Application/Dashboard/Gamepad)上开启**启用游戏手柄块**后，就会出现这个类别。按钮名称跟随控制器布局：Xbox 或 Sony。

## 事件 {#events}

### `当 … 是 …`（初学者） {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

所选按钮被按下或松开时运行。

- 按钮（Xbox 布局）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- 按钮（Sony 布局）：`叉`、`圆圈`、`方块`、`三角`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状态：`按下`、`松开`

### `当方向键 … 按钮 …`（初学者） {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

方向键的某个按钮被按下或松开时运行。

- 方向：`上`、`下`、`左`、`右`
- 状态：`按下`、`松开`

### `当 … 摇杆 …`（初学者） {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

摇杆被推向某个方向、移动或松开时运行。

- 摇杆：`左`、`右`
- 状态：`上`、`下`、`左`、`右`、`移动`、`松开`
- 典型用法：对摇杆移动做出反应，并在松开摇杆时让模型停止或回中。

## 数值 {#values}

### `是否 … …`（初学者） {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

所选按钮处于所选状态时返回 `true`。

- 按钮（Xbox 布局）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- 按钮（Sony 布局）：`叉`、`圆圈`、`方块`、`三角`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状态：`按下`、`松开`

### `方向键 … 按钮 …`（初学者） {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

方向键的所选按钮处于所选状态时返回 `true`。

- 方向：`上`、`下`、`左`、`右`
- 状态：`按下`、`松开`

### `摇杆 … …`（初学者） {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

返回摇杆在某个轴上的位置。

- 摇杆：`左`、`右`
- 轴：`X轴`、`Y轴`
- 范围：默认从 `-1` 到 `1`；如果在游戏手柄页面的**游戏手柄数值范围**中选择了 `-100` 到 `100`，则为该范围。

### `… 压力`（初学者） {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

返回扳机被按下的程度。

- 扳机（Xbox 布局）：`LT`、`RT`
- 扳机（Sony 布局）：`L2`、`R2`
- 范围：默认从 `0`（松开）到 `1`；选择更大的**游戏手柄数值范围**时为 `0` 到 `100`。
