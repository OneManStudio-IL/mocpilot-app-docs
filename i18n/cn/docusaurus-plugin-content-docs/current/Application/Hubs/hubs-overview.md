---
id: HubsOverview
title: 集线器
description: "MOCPilot 配置文件中的集线器：支持的集线器、集线器槽位以及每种集线器的功能。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 集线器 {#hubs}

**集线器**是模型中的蓝牙电池盒：电机、灯和传感器插在它的端口上，MOCPilot 通过蓝牙与它通信。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## 支持的集线器 {#supported-hubs}

| 集线器 | 说明 |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 个端口，倾斜和加速度传感器 |
| LEGO® Technic™ Move Hub | 用于 LEGO Technic 遥控车；驱动、转向、灯光；[配置](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 个端口，用于火车和 City 套装 |
| LEGO® Move Hub / BOOST (88006) | 2 个内置电机 + 2 个端口 |
| LEGO® Remote Control (88010) | 它的按钮可作为输入 |
| LEGO® WeDo 2.0 Smart Hub | 2 个端口 |
| LEGO® Large Hub / Robot Inventor (88016) | 6 个端口，灯光点阵；不支持 iPhone 和 iPad |
| BuWizz 2.0 | 4 个端口，功率模式 |
| BuWizz 3.0 Pro | 6 个端口，端口彩色 LED |
| SBrick、SBrick Plus | 4 个端口，速度控制，不支持位置控制 |
| Mould King 4.0、6.0 | 4 或 6 个端口，只接收命令，控制通道 |

包含电机和传感器的完整列表：[支持的设备](/docs/Introducing/SupportedDevices)。

## 集线器槽位 {#hub-slots}

每个配置文件有 **5 个集线器槽位**：

- **2 个槽位免费**；
- **另外 3 个**可以通过**解锁槽位**逐个解锁（每个槽位购买一次“额外集线器槽位”），也可以通过 [MocPilot Pro](/docs/Application/Account/Pro) 一次性全部解锁。

购买的槽位属于你的账户，在你的所有配置文件中都可以使用。

Mould King 的限制：每个配置文件只能使用一种 Mould King 型号，最多 3 个 Mould King 4.0 或 1 个 Mould King 6.0（它们共用手机的蓝牙广播发射器）。

## 程序中的集线器 {#hubs-in-the-program}

- 在**快速连接**中，配置文件中的每个集线器都会作为**集线器**输出出现在积木面板中，同时也作为**集线器**输入提供其按钮和传感器。配置文件中没有任何集线器能执行的操作不会提供。请参阅[集线器积木与端口](/docs/Application/Links/HubsAndPorts)。
- 在**逻辑积木**中，电机、灯光和传感器积木需要指定集线器槽位和端口。请参阅[电机](/docs/Application/BlockBuilder/Blocks/Motors)。

## 了解更多 {#read-more}

- [添加并连接集线器](/docs/Application/Hubs/ConnectingHubs)
- [集线器专属功能](/docs/Application/Hubs/HubFunctions)
- [固件更新](/docs/Application/Hubs/FirmwareUpdating)和[固件恢复](/docs/Application/Hubs/RecoveryHubFirmware)
