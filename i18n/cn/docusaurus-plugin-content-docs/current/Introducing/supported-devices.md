---
id: SupportedDevices
title: 支持的集线器、电机和传感器
description: "可与 MOCPilot 配合使用的集线器、电机和传感器。"
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# 支持的设备 {#supported-devices}

MOCPilot 支持以下集线器、电机和传感器。所有集线器都可以在两种程序编辑器中使用：[快速连接](/docs/Application/Links/LinksIntroducing)和[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)。

## 集线器 {#hubs}

<SupportedHubsTable />

说明：

- 一个配置文件有 5 个集线器槽位：其中 2 个免费，另外 3 个需单独购买集线器槽位或开通 [MocPilot Pro](/docs/Application/Account/Pro)。
- **Mould King** 集线器只接收命令（没有传感器，也没有反馈）。一个配置文件中只能使用一种 Mould King 类型：最多 3 个 Mould King 4.0 集线器，或 1 个 Mould King 6.0。
- **Robot Inventor** 集线器（LEGO® 大型集线器）和 **SPIKE Prime** 集线器（测试版，SPIKE Legacy 固件）使用经典蓝牙，在 iPhone 和 iPad 上不可用。在 Windows 和 Mac 上，它们也可以用 USB 线连接。请参阅 [MINDSTORMS Robot Inventor 集线器](/docs/Application/Hubs/RobotInventorHub)。
- **SPIKE Essential** 集线器（测试版）和 Technic Hub 一样通过低功耗蓝牙连接：2 个端口、一个灯、倾斜和加速度。它同样需要 SPIKE Legacy 固件；暂不支持使用 SPIKE App 3 固件的集线器。
- SPIKE Prime 和 SPIKE Essential 集线器在应用中标有 **Beta**：对它们的支持是新加入的，尚未在每个集线器上都经过检验。
- Technic Hub、Technic Move Hub、BOOST Move Hub 和 City Hub 支持固件更新和恢复。参见[固件更新](/docs/Application/Hubs/FirmwareUpdating)。
- 各集线器除电机和灯光之外的其他功能，请参见[集线器特有功能](/docs/Application/Hubs/HubFunctions)。

## 电机 {#motors}

<SupportedMotorsTable />

带编码器的电机（角度电机、Technic L 和 XL 电机）会报告速度和位置，因此可以用作舵机、按角度转动或转到指定位置。普通电机（火车电机、普通中型线性电机）只能控制速度。

## 传感器和灯光 {#sensors-and-lights}

<SupportedSensorsTable />

**力传感器**可用于 Robot Inventor 和 SPIKE Prime 集线器：它测量被按下的力度（0–10 N），以及当前是按下、用力按下还是释放。参见[Robot Inventor 积木：力传感器](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor)。它不能用于 Powered Up 集线器（Technic Hub、City Hub、BOOST）。

集线器的内置传感器（电量、倾斜、加速度、温度）以及手机或平板的传感器也可以使用。参见[手机传感器](/docs/Application/Dashboard/PhoneSensors)。
