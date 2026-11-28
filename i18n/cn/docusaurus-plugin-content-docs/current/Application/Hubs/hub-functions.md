---
id: HubFunctions
title: 集线器专属功能
description: "Technic Move、BuWizz、SBrick、Mould King、Robot Inventor 等集线器在两种编辑器中的特殊功能。"
---

# 集线器专属功能 {#hub-specific-functions}

每个带端口的集线器都能驱动电机和灯。有些集线器还能做更多事情。在**快速连接**中，只有配置文件中有这类集线器时，这些功能才会出现在积木面板中；在**逻辑积木**中，它们是集线器专属积木。

## 带编码器的电机（LEGO® Technic、City、BOOST、Robot Inventor、BuWizz 3.0 Pro） {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| 功能 | 快速连接 | 逻辑积木 |
|---|---|---|
| 速度控制 | [电机](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | 设置电机速度、以指定速度启动电机 |
| 带校准的转向舵机 | [舵机](/docs/Application/Links/Blocks/OutputBlocks#op-servo)（手动 / 自动） | 移动到相对位置、校准转向架 |
| 转动指定角度 | [按角度运行](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | 运行持续 |
| 绝对位置（角度电机） | [转到位置](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | 转到位置 |
| 停止时的行为：惯性滑行、刹车、保持 | 电机 → **停止时** | 设置电机停止时的行为 |
| 集线器加速预设 | 电机 → **集线器加速** | 设置加速度、设置减速度 |
| 速度、位置、功率、电流作为输入 | [集线器输入](/docs/Application/Links/Blocks/InputBlocks#src-hub) | 速度、位置、相对位置、功率 |

## Technic Move Hub {#technic-move-hub}

LEGO® Technic 遥控车（Porsche GT4 e-Performance、Lamborghini Revuelto、Batmobile™ Tumbler）所用的集线器。

- 驱动、转向和灯光按功能控制，而不是按端口。
- **转向**会自行校准转向齿条。
- **刹车**、**Boost**（功率模式）和**动力脉冲**（仅限 Batmobile™ Tumbler 配置）。
- **集线器配置**：通过**我的集线器 → 选择配置**把汽车配置加载到集线器中。请参阅 [Technic Move Hub 配置](/docs/Application/Hubs/TechnicMoveHubConfigurations)。
- 逻辑积木：汽车配置积木（*以此启动电机 … 速度 %*、*设置转向架为*、*设置电机刹车*、*动力脉冲*、*打开灯光*、*设置电源模式*），或普通的端口积木：电机 `A`、`B`（驱动）和 `C`（转向；先在 `C` 上运行*校准齿条*，再用*移动到相对位置*），逐个控制的灯 `1`–`6`，以及倾斜、加速度和方向。每个集线器只用一种方式：两者控制的是同一组电机和灯。请参阅 [电机 → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)。
- 快速连接：集线器积木中的**控制**可选择**汽车配置文件**（各行负责驱动、转向和开关灯光）或**端口**（电机 `A`、`B`、`C` 和灯 `1`–`6`，与其他集线器一样）。请参阅 [集线器积木与端口 → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)。[集线器输入](/docs/Application/Links/Blocks/InputBlocks#src-hub)也可以读取它的倾斜、加速度和旋转速度。

## BuWizz 2.0 {#buwizz-20}

- **功率模式**：慢、正常、快、Ludicrous。快速连接：[功率模式](/docs/Application/Links/Blocks/OutputBlocks#op-powermode)操作；逻辑积木：*BuWizz 2 设置电源模式*。
- 当前功率模式、**输出电压**和电机电流可作为输入。空载时输出电压约为：慢 6.3 V、正常 7.7 V、快 9.15 V、Ludicrous 10.5 V。
- 端口 1–4 上只有简单的速度控制：不支持位置控制。

## BuWizz 3.0 Pro {#buwizz-30-pro}

- 端口 1–4 上的**端口颜色** LED：从列表选择或使用 RGB（[端口颜色](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor)；*BuWizz 3 设置 LED 颜色为*）。
- 电机电流可作为输入，支持相对位置。
- 端口 1–4 上带传感器的电机（Technic L 和 XL、SPIKE、Robot Inventor 以及灰色角度电机）使用速度控制运行：集线器会保持设定的速度，因此即使在低速下（约 20 % 起）也能平稳转动。停止时电机会自由滑行。简单电机、灯以及端口 A 和 B 的工作方式不变。
- BOOST 电机（BOOST Move Hub 套装中的电机）无法在 BuWizz 3.0 Pro 上使用：集线器只能偶尔识别它们，电机也无法正常转动。

## SBrick 和 SBrick Plus {#sbrick-and-sbrick-plus}

- 支持速度控制的电机和灯。
- 不支持位置控制：舵机、按角度运行和转到位置不可用。
- 电机停止时惯性滑行；SBrick 没有刹车或保持选项。
- MOCPilot 中的端口字母 A–D 与集线器上印的字母一致。
- 电池电压以伏特显示；电池电量百分比为近似值（按 4.8–9 V 计算）。
- 暂不支持 SBrick Plus 端口上（通过适配器连接）的传感器。

## Mould King 4.0 和 6.0 {#mould-king-40-and-60}

- 只接收命令：没有传感器、没有按钮、没有连接反馈。
- **控制通道** A、B 或 C：使用快速连接的[通道](/docs/Application/Links/Blocks/OutputBlocks#op-channel)操作、逻辑积木中的 *MouldKing 设置控制通道*积木，或“我的集线器”中的**选择通道**。
- 每个配置文件最多 3 个 Mould King 4.0 或 1 个 Mould King 6.0，并且只能使用一种 Mould King 型号。

## Robot Inventor（LEGO® Large Hub） {#robot-inventor-lego-large-hub}

有关连接、固件和积木的全部内容：[MINDSTORMS Robot Inventor 集线器](/docs/Application/Hubs/RobotInventorHub)。

- **LED 点阵**：在快速连接中显示条形图、数字或图片；在逻辑积木中显示文字和像素。
- **距离传感器灯光**（传感器的“眼睛”）。
- **卡死检测**和电机功率。
- Robot Inventor 应用的所有积木：[运动](/docs/Application/BlockBuilder/Blocks/Movement)、集线器声音和音乐、手势、偏航、力传感器、集线器之间的无线电。
- 经典蓝牙（不支持 iPhone 和 iPad），或在 Windows 和 Mac 上使用 USB 线。

## 带彩色 LED 的 LEGO® 集线器 {#lego-hubs-with-a-colour-led}

Technic、City、BOOST、Technic Move、WeDo 2.0、Robot Inventor 和遥控器：可以从列表中选择或用 RGB 设置集线器 LED 颜色（快速连接的[集线器 LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led)，逻辑积木的*设置 LED 颜色为*）。

## LEGO® Powered Up 遥控器 {#lego-powered-up-remote-control}

它的按钮可作为输入，因此你可以通过 MOCPilot 用实体遥控器驾驶模型（快速连接：**集线器**输入 → 按钮；逻辑积木：集线器按钮事件）。

## 内置传感器 {#built-in-sensors}

电池电量和电压、主板温度、倾斜（俯仰、滚转、偏航）、加速度和方向，在具备这些传感器的集线器上可用。请设置**集线器方向**（快速连接）或*设置倾斜方向*（逻辑积木），使其与集线器的安装方式一致。

在逻辑积木中，Technic Hub、Technic Move Hub、Robot Inventor 和 SPIKE Prime 集线器还会报告其旋转速度（陀螺仪，*旋转速度 (°/秒)*），Technic Hub 和 BOOST Move Hub 还会报告其消耗的电流（*电流 (毫安)*）。参见[传感器](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state)。
