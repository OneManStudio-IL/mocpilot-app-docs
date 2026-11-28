---
id: ConnectingHubs
title: 添加并连接集线器
description: "把集线器添加到配置文件的槽位、连接、重命名，并在集线器监视器中查看它的传感器。"
---

import Screenshot from '@site/src/components/Screenshot';

# 添加并连接集线器 {#add-and-connect-a-hub}

集线器只需添加到配置文件一次。之后每次打开该配置文件时，MOCPilot 都会自动连接它。

## 添加集线器 {#add-a-hub}

1. 打开配置文件，点按**我的集线器**（在电脑上为顶栏中的**集线器**，或 ⇧⌘H / Ctrl+Shift+H）。**我的蓝牙集线器**页面会显示各个槽位。
2. 在空闲槽位中点按**添加新集线器**。
3. 从列表中选择你的集线器。顶部的筛选器可显示**全部**、**LEGO**、**SBrick**、**BuWizz** 或 **Mould King**。点按**添加**。
4. 按照屏幕上的步骤操作：**按下集线器上的按钮**，然后**等待搜索找到集线器**。点按**开始扫描**可重新搜索。

<Screenshot name="add-hub" alt="选择要添加的集线器" width={900} />

找到集线器后，它会自动连接并保留在该槽位中。

<Screenshot name="my-hubs" alt="“我的蓝牙集线器”页面，显示已连接的集线器和空闲槽位" width={900} />

## 槽位菜单 {#the-slot-menu}

槽位上的**连接**按钮用于连接集线器。槽位菜单包含：

- **断开连接**；
- **重命名集线器**：把新名称保存到集线器本身（适用于支持此功能的已连接集线器）；
- **更新固件**：有新固件时显示；请参阅[固件更新](/docs/Application/Hubs/FirmwareUpdating)；
- **恢复 Hub 固件**：集线器以恢复模式连接时显示；请参阅[固件恢复](/docs/Application/Hubs/RecoveryHubFirmware)；
- **选择配置**：Technic Move 配置；请参阅 [Technic Move Hub 配置](/docs/Application/Hubs/TechnicMoveHubConfigurations)；
- **选择通道：A / B / C**：Mould King 的控制通道；
- **删除集线器**：从配置文件中移除该集线器。

编辑器中的**我的集线器**按钮（在电脑上为**集线器**）会显示已连接的集线器数量。

## 集线器监视器 {#hub-monitor}

打开一个已连接的集线器，即可看到它的**集线器监视器**：

- 集线器：型号、名称、固件、电池、电池电压、充电状态、主板温度、配置、方向、倾斜（俯仰、滚转、偏航）和加速度计；
- 每个端口：插入的设备及其速度、位置、相对位置、颜色、反射光和环境光，或距离。

在搭建程序之前，可以用它检查哪个电机接在哪个端口上，以及它朝哪个方向转。MOCPilot 窗口处于后台时，数值也会持续更新。

<Screenshot name="hub-monitor" alt="已连接的 Technic Hub 的集线器监视器" width={900} />

## 连接提示 {#connection-tips}

- 在连接前再打开集线器：很多集线器在一段时间没有连接后会自动关机。
- 让手机靠近集线器；墙壁和金属会缩短通信距离。
- 集线器同一时间只能连接一台设备。请关闭其他使用它的应用（LEGO® 应用、其他遥控器）。
- **蓝牙已关闭**：打开蓝牙，并在系统设置中允许 MOCPilot 使用蓝牙。
- **未找到集线器**：再次按下集线器按钮、重新扫描或更换电池。
- **Mould King** 集线器并不会真正“连接”：MOCPilot 通过蓝牙广播向它们发送命令。如果集线器没有反应，请点按**再次连接**并检查通道。

更多内容请参阅[故障排除](/docs/Help/Troubleshooting#hubs)。
