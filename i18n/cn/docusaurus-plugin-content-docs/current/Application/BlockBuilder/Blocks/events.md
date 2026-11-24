---
id: Events
title: 事件
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 事件 {#events}

**事件**类别包含在某件事发生时启动脚本的积木，以及在脚本之间发送消息的积木。使用类别顶部的**添加消息**和**删除消息**来管理消息。

## 核心事件 {#core-events}

### `当程序启动时`（初学者） {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

程序启动时运行一次它的脚本。

- 典型用法：设置变量的初始值，让电机处于初始状态，显示“就绪”消息。

### `当 …`（进阶） {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

当插槽中的条件从假变为真时运行它的脚本。脚本运行期间，该积木会等待；只有当条件先变为假、再次变为真之后，它才会再次触发。

- 典型用法：对某种状态做出反应，例如 `当 计时器 > 5 和 开关已开启`。

### `当计时器 > …`（进阶） {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

当程序计时器超过该数值（以秒为单位）时运行它的脚本。

- 典型用法：延时动作、定时阶段。用**重置计时器**（传感器）重置计时器。

### `当我接收时 …`（大师） {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

当所选消息被广播时运行它的脚本。

- 典型用法：协调多个脚本。

### `传递 …`（大师） {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

向所有以该消息的**当我接收时**开头的脚本发送消息，并立即继续执行。

- 典型用法：通知其他脚本开始运行，而不等待它们。

### `传递 … 并等待`（大师） {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

发送消息，并暂停当前脚本，直到所有收到该消息的脚本都执行完毕。

- 典型用法：顺序很重要的分步流程。

## 集线器事件 {#hub-events}

当配置文件中的集线器支持时，才会出现这些积木。Mould King 集线器没有这些积木。

### `当 … … 按钮 …`（初学者） {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

当集线器上的按钮被按下或松开时运行。

- 状态选项：`按下`、`松开`、`已更改`
- 集线器：LEGO Powered Up 集线器、WeDo 2.0 和 Robot Inventor。按钮列表取决于集线器。

### `当 … 已连接 / 已断开`（初学者） {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

当集线器连接或断开时运行。

- 典型用法：连接丢失时安全地停止模型，连接恢复时还原其状态。

### `当 … % 电池已更改`（初学者） {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

当集线器报告的电池电量变化时运行。

- 集线器：能报告电池电量的集线器。
- 典型用法：低电量警告、切换到省电模式。

### `当 … 加速度计数据已更改`（大师） {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

当集线器的加速度计数值变化时运行。

- 集线器：BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub、Robot Inventor。

### `当 … 倾斜 … 角度已更改`（初学者） {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

当集线器的倾斜角度变化时运行。

- 角度选项：`任何`、`俯仰`、`滚转`、`偏航`
- 集线器：BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub、Robot Inventor。`偏航` 仅在 Technic Hub 和 Robot Inventor 上可用。

### `当 … 方向已更改`（初学者） {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

当集线器的方向变化时运行，也就是集线器的另一面朝上时。

- 集线器：与倾斜事件相同。

## 传感器事件 {#sensor-events}

这些事件读取连接在集线器端口上的传感器。集线器：City Hub、Technic Hub、BOOST Move Hub 和 MINDSTORMS Robot Inventor 集线器（不支持 SBrick、BuWizz、WeDo 2.0 或 Mould King）。

### Technic 传感器：`当颜色是 …`（初学者） {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

当 Technic 颜色传感器检测到所选颜色时运行。

### Technic 传感器：`当 … 比...更近 / 比...更远 / 正好在 …`（初学者） {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

当 Technic 距离传感器测得的距离满足条件时运行。

- 比较选项：`比...更近`、`比...更远`、`正好在`
- 单位：`毫米`、`厘米`、`英寸`、`%`

### BOOST 传感器：`当 … 比...更近 / 比...更远 / 正好在 …`（初学者） {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

当 BOOST 颜色与距离传感器测得的距离满足条件时运行。

- 比较选项：`比...更近`、`比...更远`、`正好在`
- 单位：`%`、`厘米`、`英寸`

### BOOST 传感器：`当颜色是 …`（初学者） {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

当 BOOST 颜色与距离传感器检测到所选颜色时运行。

## Robot Inventor 事件 {#robot-inventor-events}

这些事件来自 Robot Inventor 应用，只适用于 [MINDSTORMS Robot Inventor 和 SPIKE Prime 集线器](/docs/Application/Hubs/RobotInventorHub)。它们带有集线器图标。对应的数值积木在[传感器](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors)页面上。

### `当集线器 …`（初学者） {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

集线器每次`被轻敲`、`被轻敲两次`、`被摇晃`（默认）或`正在掉落`时运行一次。

### `当 … 朝上`（初学者） {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

当集线器的所选一面转为朝上时运行：`正面`（灯光点阵，默认）、`顶面`、`右侧`、`背面`、`底面`或`左侧`。

### `当集线器倾斜 …`（进阶） {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

当集线器`向上`、`向下`、`向左`、`向右`或朝`任何`方向（默认）倾斜约 12° 或更多时运行。

### `当 … 按下 / 用力按下 / 释放`（初学者） {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

当所选端口上的力传感器被按下、被用力按下（超过 5 牛顿）或被松开时运行。

### `当集线器收到信号 …`（大师） {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

当这个集线器从另一个集线器收到这个名称的无线电信号时运行。用[收到的信号 … 值](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value)读取它的数值。
