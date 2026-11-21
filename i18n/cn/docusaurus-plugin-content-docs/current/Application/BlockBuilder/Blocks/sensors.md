---
id: Sensors
title: 传感器
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 传感器 {#sensors}

传感器积木读取手机或平板电脑的状态、程序计时器、集线器以及连接在集线器上的传感器。可以把它们的数值用在条件、事件和计算中。

本页内容：

- [集线器状态](#hub-state)：电池、电压、温度、电流和功率模式
- [集线器按钮、倾斜和方向](#hub-tilt-and-orientation)
- [端口上的传感器](#sensors-on-ports)：任意设备、Technic 颜色传感器、Technic 距离传感器、BOOST 颜色与距离传感器、WeDo 2.0 传感器
- [本设备](#this-device)：运行 MOCPilot 的手机、平板电脑或电脑
- [计时器](#timer)

## 集线器状态 {#hub-state}

Mould King 集线器不报告任何数据，因此没有这些积木。

### `… % 电池`（初学者） {#block_hubs_all_sensors_battery_level}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />

返回集线器的电池电量，以百分比表示。

### `… 电池电压 (V)`（进阶） {#block_hubs_all_sensors_battery_voltage}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />

返回集线器的电池电压，以伏特为单位。

- 集线器：BuWizz 2、BuWizz 3、SBrick、SBrick Plus、Robot Inventor。
- 集线器未连接时返回 `NaN`。

### `… 温度 (C°)`（进阶） {#block_hubs_all_sensors_board_temp}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />

返回集线器电子元件的温度，以摄氏度为单位。

- 集线器：BuWizz 2、BuWizz 3、SBrick、SBrick Plus。

### `获取 … 输出电压 (V)`（大师） {#block_hubs_buwizz_sensors_get_output_voltage}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />

返回集线器当前向端口提供的电压，以伏特为单位。

- 集线器：BuWizz 2。

### `… 电流 (A)`（大师） {#block_hubs_buwizz_sensors_port_get_current}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />

返回所选端口上的电流，以安培为单位。

- 集线器：BuWizz 2、BuWizz 3。

### `设置电源模式 …`（Technic Move Hub）（初学者） {#block_hubs_technicmove_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />

设置 Technic Move Hub 的功率模式。

- 模式：`正常`、`Boost`
- 集线器：Technic Move Hub。

## 集线器按钮、倾斜和方向 {#hub-tilt-and-orientation}

按钮积木的说明中列出了它适用的集线器。倾斜和方向积木适用于 BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub 和 Robot Inventor。

### `是否 … … 按钮 …`（初学者） {#block_hubs_all_sensors_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />

所选集线器按钮处于所选状态时返回 `true`。

- 状态：`按下`、`松开`
- 集线器：LEGO Powered Up 集线器、WeDo 2.0 和 Robot Inventor。按钮列表取决于集线器（通常为 `中心`）。

### `… … 角度`（初学者） {#block_hubs_all_sensors_tilt}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />

返回集线器的倾斜角度。

- 角度：`俯仰`、`滚转`、`偏航`
- `偏航` 仅在 Technic Hub 和 Robot Inventor 上可用。

### `… … 加速度计 (米/秒²)`（大师） {#block_hubs_all_sensors_accelerometer}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />

返回集线器在某个轴上的原始加速度计读数。

- 轴：`x`、`y`、`z`

### `… … 加速度 (米/秒²)`（大师） {#block_hubs_all_sensors_acceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />

返回集线器在某个轴上的加速度。

- 轴：`x`、`y`、`z`

### `获取 … 方向 …`（初学者） {#block_hubs_sensors_get_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />

返回集线器朝上的是哪一面。

- 输出：`文本` 或 `索引`
- 取值：`前`、`上`、`右`、`后`、`下`、`左`

### `… 方向 …`（初学者） {#block_hubs_all_sensors_is_orientation_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />

集线器的所选一面朝上时返回 `true`。

- 选项：`前`、`上`、`右`、`后`、`下`、`左`

### `设置 … 倾斜方向到 …`（进阶） {#block_hubs_sensors_set_tilt_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />

告诉集线器它在模型中的安装方式，以便从该位置开始测量倾斜和方向。

- 选项：`前`、`上`、`右`、`后`、`下`、`左`

## 端口上的传感器 {#sensors-on-ports}

下面的 Technic 和 BOOST 传感器积木适用于 City Hub、Technic Hub、BOOST Move Hub 和 MINDSTORMS Robot Inventor 集线器（不支持 SBrick、BuWizz、WeDo 2.0 或 Mould King）。

### 端口上的任意设备 {#any-port-device}

#### `… 设备类型`（初学者） {#block_hubs_all_motors_port_device_type}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />

返回连接在所选端口上的设备类型。

- 集线器：除 SBrick、SBrick Plus 和 BuWizz 2 外所有带端口的集线器。
- 典型用法：在运行特定设备的积木之前，先检查连接的是什么设备。

### Technic 颜色传感器 {#technic-color-sensor}

#### Technic 传感器：`设置模式为 …`（进阶） {#block_hubs_all_sensors_port_technic_sensor_set_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />

把 Technic 颜色传感器切换到所选模式。

- 模式：`默认`、`环境`
- 更改模式可能会以意想不到的方式影响程序：在 `环境` 模式下，传感器无法读取颜色或反射光。

#### Technic 传感器：`颜色 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />

返回 Technic 颜色传感器检测到的颜色。

- 输出：`值`（数字）或 `字符串`（颜色名称）

#### Technic 传感器：`是颜色 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_when_color_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />

Technic 颜色传感器检测到所选颜色时返回 `true`。

#### Technic 传感器：`反射光（%）`（初学者） {#block_hubs_all_sensors_port_technic_sensor_reflected_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />

返回表面反射回 Technic 颜色传感器的光量，以百分比表示。

#### Technic 传感器：`反射光 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />

反射光与数值的比较结果符合所选条件时返回 `true`。

- 比较：`<`、`=`、`>`

#### Technic 传感器：`环境光（%）`（初学者） {#block_hubs_all_sensors_port_technic_sensor_ambient_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />

返回周围光线的亮度，以百分比表示。

#### Technic 传感器：`环境光 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />

环境光与数值的比较结果符合所选条件时返回 `true`。

- 比较：`<`、`=`、`>`

#### Technic 传感器：`原始值 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_raw_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />

返回 Technic 颜色传感器某个颜色通道的原始值。

- 通道：`红色`、`绿色`、`蓝色`

### Technic 距离传感器 {#technic-distance-sensor}

#### Technic 传感器：`距离 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />

返回 Technic 距离传感器测得的距离。

- 单位：`毫米`、`厘米`、`英寸`、`%`

#### Technic 传感器：`是否 比...更近 / 比...更远 / 正好在 …`（初学者） {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />

Technic 距离传感器测得的距离满足条件时返回 `true`。

- 比较：`比...更近`、`比...更远`、`正好在`
- 单位：`毫米`、`厘米`、`英寸`、`%`

### BOOST 颜色与距离传感器 {#boost-color-and-distance-sensor}

#### BOOST 传感器：`颜色 …`（初学者） {#block_hubs_all_sensors_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />

返回 BOOST 颜色与距离传感器检测到的颜色。

- 输出：`值`（数字）或 `字符串`（颜色名称）

#### BOOST 传感器：`是颜色 …`（初学者） {#block_hubs_all_sensors_port_boost_sensor_is_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />

BOOST 传感器检测到所选颜色时返回 `true`。

#### BOOST 传感器：`距离 …`（初学者） {#block_hubs_all_sensors_port_boost_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />

返回 BOOST 颜色与距离传感器测得的距离。

- 单位：`%`、`厘米`、`英寸`

#### BOOST 传感器：`是否 比...更近 / 比...更远 / 正好在 …`（初学者） {#block_hubs_all_sensors_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />

BOOST 传感器测得的距离满足条件时返回 `true`。

- 比较：`比...更近`、`比...更远`、`正好在`
- 单位：`%`、`厘米`、`英寸`

#### BOOST 传感器：`反射光（%）`（初学者） {#block_hubs_all_sensors_port_boost_sensor_reflected_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />

返回表面反射回 BOOST 传感器的光量，以百分比表示。

#### BOOST 传感器：`反射光 …`（初学者） {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />

反射光与数值的比较结果符合所选条件时返回 `true`。

- 比较：`<`、`=`、`>`

### WeDo 2.0 传感器 {#wedo-2-sensors}

WeDo 2.0 集线器上的 WeDo 2.0 运动传感器和倾斜传感器。

#### WeDo 2.0 传感器：`距离 …`（初学者） {#block_hubs_all_sensors_port_wedo2_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />

返回 WeDo 2.0 运动传感器测得的距离。

- 单位：`%`、`厘米`、`英寸`
- 集线器：WeDo 2.0。

#### WeDo 2.0 传感器：`是否 比...更近 / 比...更远 / 正好在 …`（初学者） {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />

WeDo 2.0 运动传感器测得的距离满足条件时返回 `true`。

- 比较：`比...更近`、`比...更远`、`正好在`
- 单位：`%`、`厘米`、`英寸`
- 集线器：WeDo 2.0。

#### WeDo 2.0 传感器：`角度 …` / `作为方向 …`（初学者） {#block_hubs_all_sensors_port_wedo2_tilt}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />

返回 WeDo 2.0 倾斜传感器的数据：倾斜角度或倾斜方向。

- 角度：`俯仰`、`滚转`
- 方向输出：`文本` 或 `数字`；方向：`中性`、`前进`、`向后`、`左`、`右`、`未知`
- 集线器：WeDo 2.0。

## 本设备 {#this-device}

这些积木读取运行 MOCPilot 的手机、平板电脑或电脑。

### `设备 % 电池`（初学者） {#block_sensors_device_battery_level}

<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />

返回设备的电池电量，以百分比表示。

### `设备 … 角度`（进阶） {#block_sensors_device_tilt_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />

返回设备的倾斜角度。

- 角度：`俯仰`、`滚转`、`偏航`
- 典型用法：通过倾斜手机来操控模型转向。

### `设备 … 加速度计 (米/秒²)`（大师） {#block_sensors_device_accelerometer_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />

返回设备在某个轴上的原始加速度计读数，单位为 m/s²。

- 轴：`x`、`y`、`z`

### `设备 … 加速度 (米/秒²)`（大师） {#block_sensors_device_acceleration_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />

返回设备在某个轴上的加速度，单位为 m/s²。

- 轴：`x`、`y`、`z`

## 计时器 {#timer}

### `计时器`（进阶） {#block_sensors_timer_value_float}

<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />

返回自程序启动或上次**重置计时器**以来经过的时间，以秒为单位。

### `重置计时器`（进阶） {#block_sensors_timer_reset}

<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />

把计时器归零。
