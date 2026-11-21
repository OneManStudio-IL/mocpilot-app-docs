---
id: DashboardControllers
title: 屏幕控制器
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 屏幕控制器 {#dashboard-controllers}

这些积木读取仪表板上的控件，在你使用控件时做出反应，并改变控件的外观。它们位于**屏幕控制器**类别中，只要仪表板上有控件，这个类别就会出现。每种控件类型都会添加自己的积木；在积木中按名称选择控件，例如 *BTN1* 或 *GEAR1*。

下文使用的范围：大多数模拟值的范围是 0 到 100；如果零点在中间，则为 −100 到 100。

本页内容：

- [适用于所有控件的积木](#blocks-for-all-controls)：颜色、交互性和声音
- [按钮和开关](#buttons-and-switches)：按钮、开关、步进开关
- [操纵杆和方向键](#joysticks-and-d-pads)
- [滑块和旋钮](#sliders-and-knobs)：滑块、旋钮
- [监视器](#monitor-blocks)
- [方向盘和踏板](#steering-wheel-and-pedals)
- [其他特殊控件](#other-special-controls)：变速箱、手刹、转向灯、列车控制器

## 适用于所有控件的积木 {#blocks-for-all-controls}

### `设置控制器颜色`（进阶） {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*设置 [控件] 颜色到 [颜色]*：更改控件的强调色。

- 类型：命令积木
- 适用于有强调色的控件（不适用于方向盘和踏板）
- 典型用法：显示状态，例如电量低时变红的按钮

### `设置控制器交互性`（进阶） {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[启用 / 禁用] [控件] 交互性*：被禁用的控件不响应触摸。

- 类型：命令积木
- 典型用法：暂时锁定某个控件，例如在启动检查完成之前锁定油门

### `控件的声音`（初学者） {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*声音 [声音] 的 [控件]*：控件的某个声音，供**声音**类别中的*播放声音*积木使用。

- 类型：数值积木
- 当仪表板上有带声音的控件时出现：[方向盘](/docs/Application/Dashboard/SpecialControls#steering-wheel)（轿车、卡车和跑车喇叭）或[踏板](/docs/Application/Dashboard/SpecialControls#pedals)（轿车、跑车和卡车刹车声、倒车提示音）
- 只有当控件的**音效**设置和应用声音都开启时，才会播放声音

## 按钮和开关 {#buttons-and-switches}

### 按钮积木 {#button-blocks}

#### `按钮事件`（初学者） {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*当按钮 [控件] [按下 / 松开]*：按钮被按下或松开时运行脚本。

- 类型：事件积木

#### `按钮值（布尔）`（初学者） {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*按钮 [控件] [按下 / 松开]*：按钮当前是被按下还是松开。

- 类型：数值积木，`true` / `false`

### 开关积木 {#switch-blocks}

#### `开关事件`（初学者） {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*当开关 [控件] 已切换 [开 / 关]*：开关被打开或关闭时运行脚本。

- 类型：事件积木

#### `开关值（布尔）`（初学者） {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*开关 [控件] [开 / 关]*：开关是开还是关。

- 类型：数值积木，`true` / `false`

### 步进开关积木 {#stepper-blocks}

这些积木适用于步进开关和垂直步进开关。

#### `步进开关事件`（初学者） {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*当步进开关 [控件] [任何 / 重置 / 减 / 加] [按下 / 松开]*：步进开关的某个按钮被按下或松开时运行脚本（**任何**表示其中任意一个）。

- 类型：事件积木

#### `步进开关值（浮点）`（初学者） {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*步进开关 [控件]*：当前挡位编号。

- 类型：数值积木

## 操纵杆和方向键 {#joysticks-and-d-pads}

### 操纵杆积木 {#joystick-blocks}

#### `操纵杆事件`（初学者） {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*当操纵杆 [控件] [上 / 下 / 左 / 右 / 移动 / 松开]*：摇杆被推向某个方向、有任何移动或被松开时运行脚本。

- 类型：事件积木

#### `操纵杆值（浮点）`（初学者） {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*操纵杆 [控件] [X轴 / Y轴]*：摇杆在某个轴上的位置，范围 −100 到 100；中心为 0。

- 类型：数值积木

#### `操纵杆值（布尔）`（初学者） {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*是操纵杆 [控件] [按下 / 松开]*：是否有手指放在操纵杆上。

- 类型：数值积木，`true` / `false`

### 方向键积木 {#d-pad-blocks}

#### `方向键事件`（初学者） {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*当方向键 [控件] [上 / 下 / 左 / 右] 按钮 [按下 / 松开]*：方向键的某个按钮被按下或松开时运行脚本。

- 类型：事件积木

#### `方向键值（布尔）`（初学者） {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*方向键 [控件] [上 / 下 / 左 / 右] 按钮 [按下 / 松开]*：方向键的某个按钮当前是被按下还是松开。

- 类型：数值积木，`true` / `false`

## 滑块和旋钮 {#sliders-and-knobs}

### 滑块积木 {#slider-blocks}

这些积木适用于滑块和垂直滑块。

#### `滑块事件`（初学者） {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*当滑块 [控件] [低 / 高 / 移动 / 松开]*：滑块到达低端或高端、移动或被松开时运行脚本。

- 类型：事件积木

#### `滑块值（浮点）`（初学者） {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*滑块 [控件]*：滑块的位置，范围 0 到 100；开启**负值**时为 −100 到 100。

- 类型：数值积木

### 旋钮积木 {#rotary-knob-blocks}

付费主题中[旋钮](/docs/Application/Dashboard/ControlTypes#rotary-knob)的积木。

#### `旋钮事件`（初学者） {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*当旋钮 [控件] [转动 / 按下 / 松开 / 转到最小 / 转到最大]*：旋钮被转动、触摸、松开或到达某一端时运行脚本。

- 类型：事件积木

#### `旋钮值（浮点）`（初学者） {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*旋钮值 [控件]*：旋钮的位置，范围 0 到 100；开启**中心为零（-100..100）**时为 −100 到 100。

- 类型：数值积木

#### `旋钮值（布尔）`（初学者） {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*旋钮是否 [控件] [按下 / 在最小 / 在最大] ？*：是否有手指放在旋钮上，或旋钮是否处于某一端。

- 类型：数值积木，`true` / `false`

## 监视器 {#monitor-blocks}

[监视器](/docs/Application/Dashboard/Indicators)的积木。

### `监视器显示`（初学者） {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*显示 [值] 在 [控件] 监视器*：在**监视器**上显示文本或数值。

- 类型：命令积木
- 典型用法：显示电池电量、电机角度、连接在集线器端口上的设备或模式名称

### `监视器设置值`（初学者） {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*设置 [值] 到 [控件] 监视器*：设置**电池电量**或**速度表**监视器的数值。

- 类型：命令积木

### `倾斜监视器设置值`（初学者） {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*设置 [值] 到 [控件] [俯仰 / 横滚] 监视器*：设置**倾斜监视器**上显示的俯仰或横滚。

- 类型：命令积木

## 方向盘和踏板 {#steering-wheel-and-pedals}

### 方向盘积木 {#steering-wheel-blocks}

[方向盘](/docs/Application/Dashboard/SpecialControls#steering-wheel)的积木。

#### `方向盘事件`（初学者） {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*当方向盘 [控件] [移动 / 按下 / 松开]*：方向盘转动、被触摸或被松开时运行脚本。

- 类型：事件积木

#### `方向盘值（浮点）`（初学者） {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*方向盘 [控件]*：转向角度，从 −100（向左打满）到 100（向右打满）。

- 类型：数值积木

#### `方向盘值（布尔）`（初学者） {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*方向盘 [控件] [按下 / 松开]*：是否有手指放在方向盘上。

- 类型：数值积木，`true` / `false`

### 踏板积木 {#pedals-blocks}

[踏板](/docs/Application/Dashboard/SpecialControls#pedals)的积木。

#### `踏板事件`（初学者） {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*当踏板 [控件] [任何 / 刹车 / 加速] [移动 / 按下 / 松开]*：某个踏板移动、被踩下或被松开时运行脚本。

- 类型：事件积木

#### `踏板值（浮点）`（初学者） {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*踏板 [控件] [加速 / 刹车]*：油门或刹车踩下的程度，范围 0 到 100。

- 类型：数值积木

#### `踏板值（布尔）`（初学者） {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*踏板 [控件] [加速 / 刹车] [按下 / 松开]*：踏板是否被踩下。

- 类型：数值积木，`true` / `false`

## 其他特殊控件 {#other-special-controls}

其他[特殊控件](/docs/Application/Dashboard/SpecialControls)的积木。

### 变速箱积木 {#gearbox-blocks}

[手动和自动变速箱](/docs/Application/Dashboard/SpecialControls#gear-shifter)的积木。挡位值：手动变速箱 −1 = R，0 = N，1…6 = 前进挡；自动变速箱 −2 = P，−1 = R，0 = N，1 = D。

#### `变速箱事件`（初学者） {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*当变速箱 [控件] [换挡 / 升挡 / 降挡 / 换到空挡 / 换到倒挡 / 挂入驻车挡]*：挡位改变时运行脚本。**升挡**和**降挡**表示换到数值更高或更低的挡位。

- 类型：事件积木

#### `挡位`（初学者） {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*挡位 [控件]*：当前所挂的挡位（取值见上文）。

- 类型：数值积木

#### `变速箱状态（布尔）`（初学者） {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*变速箱是否 [控件] [在空挡 / 在倒挡 / 在前进挡 / 在驻车挡] ？*

- 类型：数值积木，`true` / `false`
- **在前进挡**在手动变速箱的任何前进挡以及自动变速箱的 D 挡时为真

#### `挡位数`（进阶） {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*挡位数 [控件]*：变速箱的**挡位数**设置。

- 类型：数值积木
- 典型用法：模拟器*驾驶*积木的*的*插槽

### 手刹积木 {#handbrake-blocks}

[手刹](/docs/Application/Dashboard/SpecialControls#handbrake)的积木。

#### `手刹事件`（初学者） {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*当手刹 [控件] [拉动 / 锁定 / 解锁 / 松开]*：手柄被拉动、锁定、解锁或松开时运行脚本。

- 类型：事件积木

#### `手刹力度`（初学者） {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*手刹力度 [控件]*：手柄拉起的程度，范围 0 到 100。

- 类型：数值积木

#### `手刹状态（布尔）`（初学者） {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*手刹是否 [控件] [锁定 / 解锁 / 拉动] ？* 力度大于 0 时，**拉动**为真。

- 类型：数值积木，`true` / `false`

### 转向灯积木 {#turn-signals-blocks}

[转向灯](/docs/Application/Dashboard/SpecialControls#turn-signals)的积木。它们读取转向灯的稳定状态，不包括闪烁。

#### `转向灯事件`（初学者） {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*当转向灯 [控件] [左转向灯 / 右转向灯 / 灯光] [打开 / 关闭]*

- 类型：事件积木

#### `转向灯状态（布尔）`（初学者） {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*转向灯 [控件] [左转向灯 / 右转向灯 / 灯光] 是否开启 ？*

- 类型：数值积木，`true` / `false`

### 列车控制器积木 {#train-controller-blocks}

[列车控制器](/docs/Application/Dashboard/SpecialControls#train-controller)的积木。

#### `列车控制器事件`（初学者） {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*当列车控制器 [控件] [档位改变 / 档位提高 / 档位降低 / 回到零位 / 换向手柄移动 / 手柄松开]*：**回到零位**表示手柄回到了 0 档。

- 类型：事件积木

#### `列车控制器值（浮点）`（初学者） {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*列车控制器 [控件] [牵引力 / 档位 / 换向手柄]*：

- **牵引力**：−100 到 100，以百分比表示的档位，正负号表示方向；
- **档位**：0 到 8；
- **换向手柄**：1 = 前进，0 = 空挡，−1 = 倒车。
- 类型：数值积木

#### `列车控制器状态（布尔）`（初学者） {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*列车控制器是否 [控件] [在前进 / 在倒挡 / 在空挡 / 在零位] ？*

- 类型：数值积木，`true` / `false`
