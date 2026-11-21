---
id: Operations
title: 操作与输出
description: "快速连接的操作（电机、舵机、灯光等）和输出（集线器、指示器、集线器 LED、LED 点阵、校准舵机）。"
---

import Screenshot from '@site/src/components/Screenshot';

# 操作与输出 {#operations-and-outputs}

积木面板的**输出**标签页包含操作和输出。

- **操作**说明*做什么*（转动电机、转向、让灯闪烁）。它后面总是跟着一个**集线器**输出，说明*在哪里*：哪个集线器、哪些端口。
- **直接输出**（指示器、集线器 LED、LED 点阵、校准舵机）可以单独结束一行，不需要操作。

常用操作（电机、舵机、定时电机、灯光）始终可用。集线器专属操作只在配置文件中的某个集线器支持时才会出现。每个设置项的取值和默认值请参阅[操作与输出积木](/docs/Application/Links/Blocks/OutputBlocks)。

## 电机和灯光 {#motors-and-lights}

| 操作 | 作用 | 典型用途 |
|---|---|---|
| [电机](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | 按输入的数值驱动电机；为 0 时停止 | 行驶、绞盘 |
| [舵机](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | 让带编码器的电机转到跟随输入的位置 | 转向 |
| [定时电机](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | 每按一次，电机运转设定的时间 | 车门、自卸斗 |
| [按角度运行](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | 每按一次，电机转动设定的角度 | 分度机构、转台 |
| [转到位置](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | 开启时让角度电机转到一个位置，关闭时转到另一个位置 | 翻板、换挡机构 |
| [灯光](/docs/Application/Links/Blocks/OutputBlocks#op-light) | 点亮 LEGO® 灯，常亮或闪烁 | 前大灯、警示灯、转向灯 |
| [端口颜色](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | 设置 BuWizz 3.0 Pro 端口 LED 的颜色 | 状态颜色 |
| [传感器灯光](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | 点亮 Technic 距离传感器（Robot Inventor）的“眼睛” | 机器人表情 |

### 用舵机转向 {#steering-with-servo}

舵机需要一个带编码器的电机，以及一个可以手动回中或带有限位的转向机构。

- **手动**：把轴转到中间，然后点按**设为零点**；用 **◀ 5°** / **5° ▶** 微调。然后选择**角度**；如果车轮仍然跑偏，再调整**中心**。
- **自动**：每次启动时，电机会转到两端限位，中间位置成为零点，行程成为角度。**立即校准**会马上执行校准。提示信息：“正在校准：电机转向两端限位…”“已校准：舵机转动 ±…°，中心为零点”“校准失败：请检查集线器、电机以及轴两端是否有限位”。

在 **Technic Move Hub** 上，由集线器自己转向并校准转向齿条；只有校准模式适用。

<Screenshot name="links-servo-settings" alt="舵机积木的设置" width={900} />

## 整个集线器的操作 {#operations-for-the-whole-hub}

这些操作控制整个集线器，因此它们后面的集线器积木没有端口。

| 操作 | 集线器 | 作用 |
|---|---|---|
| [刹车](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | 输入为开时刹车 |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | 开启时为 Boost 功率模式，关闭时为正常模式 |
| [动力脉冲](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | 每按一次产生一次动力脉冲（仅限 Batmobile™ Tumbler 配置） |
| [功率模式](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | 切换功率模式：慢、正常、快、Ludicrous |
| [通道](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | 切换控制通道：A、B、C |

## 输出 {#indicator}

- [集线器](/docs/Application/Links/Blocks/OutputBlocks#hub-out)：集线器及其端口。请参阅[集线器积木与端口](/docs/Application/Links/HubsAndPorts)。
- [指示器](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator)：在仪表板监视器（文本监视器、电池电量、速度表、倾斜监视器）上显示数值。紧跟在集线器传感器后面时，文本监视器会显示带单位的真实数值。指示器按原样显示数值，因此这一行不需要操作。请参阅[指示器和监视器](/docs/Application/Dashboard/Indicators)。
- [集线器 LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led)：LEGO® 集线器的彩色灯，输入为开时显示一种颜色，为关时显示另一种颜色。
- [LED 点阵](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix)：Robot Inventor 集线器的灯光点阵：显示条形图、数字或图片。
- [校准舵机](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate)：重新校准所有处于**自动**模式的舵机。可以把它放到仪表板按钮上：*BTN3* → *校准舵机*。

## 程序停止时 {#when-the-program-stops}

电机停止，LED 点阵清空，端口颜色和传感器灯光熄灭。
