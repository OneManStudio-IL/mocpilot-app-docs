---
id: BluetoothPermissions
title: 蓝牙和权限
description: "MOCPilot 在各平台上会请求哪些权限、为什么需要它们，以及权限被拒绝或蓝牙出问题时该如何处理。"
---

# 蓝牙和权限 {#bluetooth-and-permissions}

MOCPilot 通过蓝牙与集线器通信，因此系统会请你授予相应权限。其他几项权限只有在你使用需要它们的功能时才会请求。

## MOCPilot 请求哪些权限以及原因 {#what-mocpilot-asks-for-and-why}

| 权限 | 何时请求 | 原因 |
|---|---|---|
| **蓝牙**（iPhone、iPad、Mac） | 首次搜索集线器时 | 用于查找和连接集线器 |
| **附近的设备**（Android 12 及更新版本） | 首次搜索集线器时 | 用于查找和连接集线器 |
| **位置信息**，确切位置（Android 10 和 11） | 首次搜索集线器时 | 在这些版本上，Android 要求具备此权限才能进行蓝牙扫描。MOCPilot 不会收集、存储或分享你的位置 |
| **位置信息**（Android，Mould King 集线器） | 连接 Mould King 集线器时 | 应用以蓝牙广播的方式向 Mould King 集线器发送命令，因此在所有 Android 版本上都会为此请求位置信息权限 |
| **相机**（手机、平板） | 在**连接遥控器**中扫描二维码时 | 用于读取[连接代码](/docs/Application/Profiles/RemoteControl)。你也可以改为输入 6 位数字 |
| **麦克风**（iPhone、iPad、Mac、Android） | 首次向 [AI 构建器](/docs/Application/Profiles/AiBuilder)口述请求时 | 语音输入 |
| **语音识别**（iPhone、iPad、Mac） | 与麦克风一起请求 | 把你的语音转换为文字 |

在 Windows 上，MOCPilot 不会请求蓝牙权限，只需打开蓝牙即可。在 Windows 上进行语音输入时，MOCPilot 会建议使用 Windows 语音输入（Win+H）。

## 如果你拒绝了某项权限 {#if-you-denied-a-permission}

如果你拒绝了某项权限，系统通常不会再次询问。此时 MOCPilot 会显示一条消息，例如**扫描失败**并附带“应用需要扫描附近设备的权限…”、“请在系统设置中允许 MOCPilot 使用相机以扫描代码。”或“请在系统设置中允许 MOCPilot 访问麦克风”。请在系统设置中打开该权限，然后返回应用：

**iPhone 和 iPad**
1. 打开**设置**，向下滚动到 **MOCPilot**。
2. 打开**蓝牙**（如有需要，还可以打开**相机**、**麦克风**或**语音识别**）。

**Android**（不同厂商的名称略有差异）
1. 打开**设置 → 应用 → MOCPilot → 权限**。
2. 允许**附近的设备**。在 Android 10 和 11 上，或使用 Mould King 集线器时，还需允许**位置信息**并打开**使用确切位置**。
3. 如有需要，允许**相机**或**麦克风**。

**Mac**
1. 打开**系统设置 → 隐私与安全性**。
2. 选择**蓝牙**（或**麦克风**、**语音识别**），然后打开 **MOCPilot**。

**Windows**
1. 打开**设置 → 蓝牙和其他设备**，然后打开**蓝牙**。

## “蓝牙已关闭” {#bluetooth-is-off}

当设备的蓝牙处于关闭状态时，MOCPilot 会显示**蓝牙已关闭**。在控制中心、快捷设置或系统设置中打开蓝牙，然后确认该消息：应用会重新搜索。

## Windows 上的蓝牙适配器 {#bluetooth-adapters-on-windows}

- 你需要 Bluetooth 4.0（LE）或更新版本的适配器：电脑内置的或 USB 适配器均可。
- **Mould King 6.0** 需要能够发送蓝牙广播（advertising）的适配器和驱动程序。并非所有适配器都支持。
- **Mould King 4.0** 无法在 Windows 上使用：应用会提示“Mould King 4 端口集线器需要蓝牙服务数据广播，而 Windows 不支持此功能。”。请使用手机或平板控制这类集线器。

## 经典蓝牙集线器 {#classic-bluetooth-hubs}

**Robot Inventor** 集线器使用经典蓝牙，而不是低功耗蓝牙。它可在 Android、Mac 和 Windows 上使用，但不支持 iPhone 和 iPad。在 Windows 上，如果 MOCPilot 找不到它，请先在**设置 → 蓝牙和其他设备 → 添加设备**中配对集线器，然后在应用中重新搜索。

其他所有受支持的集线器都使用低功耗蓝牙，只需在 MOCPilot 中添加，无需在系统的蓝牙设置中添加。

## 保持连接稳定 {#a-stable-connection}

- **一次只用一个应用。**集线器只接受一个连接。请关闭 LEGO® 应用和其他遥控应用，并断开集线器与其他手机的连接。
- **距离。**让设备与模型保持在几米之内。墙壁、金属、人体以及其他 2.4 GHz 设备（Wi-Fi 路由器、其他蓝牙设备）都会缩短有效距离。
- **电池。**电池电量不足时，电机高负荷工作会导致断开连接。
- **保持应用打开。**驾驶时让 MOCPilot 显示在屏幕上，并在[设置](/docs/Application/Account/Settings)中打开**保持屏幕常亮**，这样打开配置文件时屏幕就不会熄灭。

针对找不到集线器或频繁断开的更多解决方法：[故障排除](/docs/Help/Troubleshooting#hubs)。
