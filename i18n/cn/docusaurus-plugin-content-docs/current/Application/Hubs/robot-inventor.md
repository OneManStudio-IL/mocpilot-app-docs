---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor 集线器
description: "通过蓝牙或 USB 连接 LEGO MINDSTORMS Robot Inventor（51515）或 SPIKE Prime 集线器，使用它的积木，并在集线器无法工作时将其恢复。"
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor 集线器

LEGO® MINDSTORMS® Robot Inventor 套装（51515）的集线器是 **LEGO® Technic™ Large Hub**（88016）：六个端口 A–F、5×5 灯光点阵、扬声器、陀螺仪和加速度计。MOCPilot 用与 Robot Inventor 应用相同的积木来驱动它，此外还有 MOCPilot 提供的一切：仪表板、游戏手柄以及配置文件中的其他集线器。

**SPIKE™ Prime 集线器**（45601）是同样的硬件，搭载 LEGO® Education 固件。MOCPilot 支持装有 **SPIKE Legacy** 固件的 SPIKE Prime 集线器（测试版）；请参阅[固件](#firmware)。

## 它能做什么 {#features}

- **逻辑积木**：Robot Inventor 应用的所有积木，请参阅 [Robot Inventor 积木](#blocks)。
- **快速连接**：电机、传感器、[灯光点阵](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix)和[距离传感器灯光](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights)。
- **集线器监视器**：电池、方向、倾斜以及端口上的设备，请参阅[集线器监视器](/docs/Application/Hubs/ConnectingHubs#hub-monitor)。

积木程序有两种运行方式：**实时运行**，由 MOCPilot 执行程序并向集线器发送命令（设备需保持连接）；**下载**，由 MOCPilot 把程序写入集线器的某个程序插槽，集线器独立运行它。请参阅[在集线器上运行程序](#download)。

## 连接集线器 {#connect}

像平常一样添加集线器（[添加并连接集线器](/docs/Application/Hubs/ConnectingHubs)），然后选择 **Lego® Large Hub**（或 **LEGO® SPIKE™ Prime Hub**）。在电脑上，连接页面顶部有 **蓝牙 / USB** 选择器。MOCPilot 会为这种集线器型号记住你的选择。

### 通过蓝牙 {#bluetooth}

这个集线器使用经典蓝牙，而不是低功耗蓝牙：它可在 Android、Mac 和 Windows 上使用，但不支持 iPhone 和 iPad。

1. 打开集线器。
2. 在设备的蓝牙设置中把它当作普通蓝牙设备进行配对（在 Windows 上：**设置 → 蓝牙和其他设备 → 添加设备**）。按下集线器的蓝牙按钮，让它可以被找到。
3. 在 MOCPilot 中点按**扫描**。

### 使用 USB 线 {#usb}

在 Windows 和 Mac 上，你也可以改用集线器的 USB 线连接。不需要安装 LEGO 驱动程序。

1. 用 USB 线把集线器连接到电脑，然后打开集线器。
2. 点按**连接**。

如果 MOCPilot 显示 **USB 上没有集线器**，请检查数据线（有些线只能充电）以及集线器是否已打开。

<Screenshot name="robot-inventor-connect" alt="连接 Robot Inventor 集线器：蓝牙 / USB 选择器" width={900} />

### 先关闭 LEGO 应用 {#close-lego-app}

集线器同一时间只接受一个连接。如果 MINDSTORMS 或 SPIKE 应用已打开并占用着集线器，MOCPilot 会显示 **集线器正忙：另一个应用正在使用它（LEGO MINDSTORMS 或 SPIKE）。请关闭该应用后重试。** 关闭 LEGO 应用后重新连接即可。

## Robot Inventor 积木 {#blocks}

当配置文件中有 Robot Inventor 或 SPIKE Prime 集线器时，逻辑积木的积木面板中会出现 Robot Inventor 应用的积木。只有这种集线器才能运行的积木带有黑白的**集线器图标**。

| 类别 | Robot Inventor 积木 |
|---|---|
| [运动](/docs/Application/BlockBuilder/Blocks/Movement)（新类别） | 移动电机、速度、每圈距离、移动、转向、坦克式驾驶、加速度、停止、“移动被中断了吗？” |
| [电机](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | 以功率启动、“电机被中断了吗？”，以及电机功率和卡死检测 |
| [灯光](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | 显示图片几秒钟、带帧编辑器的动画、像素亮度，以及距离传感器灯光 |
| [声音](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | 蜂鸣、集线器的机器人声音、音量、音效、音乐：音符、鼓、休止、乐器、演奏速度 |
| [传感器](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | 力传感器、手势、方向、偏航 / 俯仰 / 横滚、重置偏航、角速度、加速度、倾斜、集线器之间的无线电 |
| [事件](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | 当集线器被摇晃或被轻敲、某一面朝上、倾斜时，当力传感器被按下时，当收到无线电信号时 |

Robot Inventor 应用中的控制、运算符、变量、列表和我的模块积木与 MOCPilot 自己的[核心积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)相同。通用集线器积木已经涵盖的积木（电机速度和位置、颜色和距离传感器、灯光点阵、集线器按钮、计时器）位于它们通常的类别中。

## 在集线器上运行程序 {#download}

与 Robot Inventor 应用一样，MOCPilot 可以把逻辑积木程序写入集线器 20 个程序插槽（0–19）中的一个。之后集线器无需应用即可运行它：你可以断开手机或电脑，以后再用集线器自己的按钮重新启动程序。

### 插槽按钮和卡片 {#slot-card}

当 Robot Inventor 或 SPIKE Prime 集线器连接到使用逻辑积木的配置文件时，编辑器右下角缩放按钮旁边会出现一个按钮。它在一个小的 5×5 点阵上显示所选插槽的编号，或者显示实时运行标志。点按它即可打开卡片：

- 带有所选插槽的集线器；**‹** 和 **›** 用于选择插槽 0–19；
- **下载 / 实时运行**：此集线器上**运行**的工作方式；
- **下载**按钮（⤓）：把程序写入插槽，但不启动它；
- 状态行：进度、*插槽 3：程序已在集线器上*，或出了什么问题。

当连接了多个 Robot Inventor 或 SPIKE Prime 集线器时，卡片上还有一个集线器按钮：点按它可以选择由哪个集线器接收程序。MOCPilot 会在这台设备上记住模式和插槽。

<Screenshot name="robot-inventor-slot-card" alt="插槽卡片：集线器、插槽箭头、“下载 / 实时运行”开关和下载按钮" width={500} />

### 下载 {#download-mode}

在**下载**模式下，**运行**会把积木程序转换成集线器程序，写入所选插槽并在集线器上启动它。写入需要几秒钟；之后程序会在集线器上独立运行。

- 以后要在不使用应用的情况下再次启动它，请用集线器的左、右按钮选择插槽，然后按中间按钮。
- 集线器的**中间按钮**会停止程序。
- 要恢复从 MOCPilot 运行程序，请把卡片切换到**实时运行**。

### 哪些积木可以在集线器上运行 {#download-blocks}

大多数积木都可以下载到集线器：

- 事件：程序启动、消息、条件、计时器、集线器按钮、传感器、手势、方向、倾斜和无线电信号；
- 控制、运算符、变量、列表和我的模块；
- 所有 Robot Inventor 积木，以及这个集线器的电机、灯光和传感器积木。

有些积木需要应用，无法单独在集线器上运行：仪表板和游戏手柄积木、其他集线器的积木、**中间按钮**事件（在集线器上这个按钮会停止程序）、电池和连接事件、温度以及齿条校准。如果程序中有任何这类积木，就不会写入任何内容：卡片会显示 **这些积木无法在没有应用的情况下在集线器上运行** 并列出它们。请删除这些积木或使用**实时运行**。

如果写入失败，状态行会说明原因，例如 **集线器空间不足** 或 **集线器没有响应**。请重试；如果一直失败，请重启集线器。

## 固件 {#firmware}

MOCPilot 使用集线器自带的 LEGO 固件，不会替换它：

- **Robot Inventor 集线器**：MINDSTORMS Robot Inventor 应用的固件。最新版本是固件 1.5.6，集线器软件 3.2.36。
- **SPIKE Prime 集线器**：**SPIKE Legacy** 固件（SPIKE 2 应用使用的固件）。不支持较新的 **SPIKE App 3** 固件：MOCPilot 发现这样的集线器时会提示。请用 LEGO® Education SPIKE™ Legacy 应用安装 SPIKE Legacy 固件，然后重新连接。

集线器准备就绪时，它的灯光点阵上会显示一个程序插槽编号。

## 如果集线器无法启动 {#restore}

如果集线器无法启动、一直不亮、不显示插槽编号，或者被刷成了 SPIKE App 3 固件，请先用官方应用恢复它：

1. 打开 MINDSTORMS Robot Inventor 应用（SPIKE Prime 集线器则打开 SPIKE Legacy 应用），并用 USB 线连接集线器。
2. 开始更新集线器（**Update hub firmware**）。它会重新写入固件、集线器软件和机器人声音，大约需要 6 分钟。更新期间不要拔下集线器。
3. 关闭 LEGO 应用，然后在 MOCPilot 中连接集线器。

### 恢复模式（DFU） {#dfu}

只有当官方应用完全看不到集线器时，你才可以通过集线器的恢复模式（DFU）写入固件。这适合有经验的用户：

1. 关闭集线器并拔下线缆。按住**蓝牙按钮**并插入 USB 线；一直按住，直到按钮灯闪烁红、绿、蓝三色。这时电脑会识别到 “LEGO Technic Large Hub in DFU Mode”。
2. 在 Windows 上，为该设备安装一次 WinUSB 驱动程序，例如使用 Zadig。Mac 和 Linux 不需要驱动程序。
3. 用 `dfu-util` 把 Robot Inventor 应用的固件映像（1.5.6）写入地址 `0x08008000`。完成后集线器会自动重启。写入期间不要拔下它。
4. 然后在 Robot Inventor 应用中运行 **Update hub firmware**（见上文），以恢复集线器软件和声音。

DFU 只写入固件。恢复引导程序本身无法被覆盖，所以你随时可以重试。
