---
id: RecoveryHubFirmware
title: 集线器固件恢复
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 集线器固件恢复 {#hub-firmware-recovery}

固件恢复可以让因固件更新中断或失败而无法正常启动的集线器恢复工作。

MOCPilot 会把可用的固件上传到集线器，使它能够运行并再次更新。仅在集线器无法正常响应、MOCPilot 显示集线器处于恢复模式，或更新失败之后，才需要使用恢复功能。

:::warning 重要
在整个恢复过程中，请保持集线器开机，并让设备靠近集线器。上传期间关闭蓝牙、关闭 MOCPilot、取出电池或关闭集线器都可能导致恢复失败。
:::

## 何时需要恢复 {#when-recovery-is-required}

在以下情况下，你可能需要恢复固件：

- 固件更新没有成功完成。
- 集线器无法再作为普通集线器连接。
- 集线器在 MOCPilot 中显示为 **LEGO Bootloader**。
- MOCPilot 检测到集线器以固件恢复模式连接。

开始之前，请确保集线器电量充足，你的手机、平板电脑或电脑已充电，并且蓝牙已打开。

## 支持的集线器 {#supported-hubs}

恢复功能支持的集线器与固件更新相同：

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## 让 Technic Hub、Boost Hub 或 City Hub 进入恢复模式 {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

这些集线器通过其引导程序（bootloader）连接：

1. 关闭集线器。
2. 按住绿色按钮。
3. 一直按住按钮，直到集线器 LED 开始闪烁紫色。
4. LED 闪烁紫色时不要松开按钮。
5. 在按住按钮的同时，在 MOCPilot 中打开**我的蓝牙集线器**并连接集线器。
6. 集线器以引导程序模式连接后，就可以松开按钮了。

集线器处于恢复模式时，可能会显示为 **LEGO Bootloader**，而不是它平时的名称。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="集线器列表中的 LEGO Bootloader 集线器及恢复固件操作" />

## 让 Technic Move Hub 进入恢复模式 {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub 的恢复方式不同：它不会以 **LEGO Bootloader** 的形式连接。按下面的按键步骤操作后，它会加载出厂固件 **1.2.3**，该固件不适合日常使用。

要恢复它的固件：

1. 关闭集线器。
2. 按住绿色按钮。
3. 持续按住绿色按钮约一分钟。
4. 松开按钮。
5. 等待集线器 LED 开始闪烁白色。
6. 在 MOCPilot 中打开**我的蓝牙集线器**并连接集线器。

集线器连接后，MOCPilot 会检测到出厂固件，并提示将其更新到最新版本。开始更新并等待完成。

## 从对话框开始恢复 {#start-recovery-from-the-dialog}

当 MOCPilot 检测到以恢复模式连接的集线器时，会显示恢复对话框。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="检测到集线器恢复模式的对话框" />

选择**恢复**即可开始向集线器上传固件。

如果还没准备好，请选择**取消**。你可以稍后从集线器菜单开始恢复。

## 从集线器菜单开始恢复 {#start-recovery-from-the-hub-menu}

要自行开始恢复：

1. 打开**我的蓝牙集线器**。
2. 找到显示为 **LEGO Bootloader** 的集线器。
3. 打开集线器菜单。
4. 选择**恢复 Hub 固件**。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="集线器上下文菜单中的“恢复 Hub 固件”操作" />

## 固件恢复过程中 {#during-firmware-recovery}

MOCPilot 会把固件上传到集线器并显示进度。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="固件恢复进度界面" />

请等待恢复完成。不要让集线器远离设备，也不要关闭应用、关闭蓝牙或切断集线器电源。

集线器可能会重启或重新连接数次。这是正常现象：请保持 MOCPilot 打开并耐心等待。

## 完成恢复 {#finish-recovery}

恢复完成后，MOCPilot 会显示确认信息。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="固件恢复完成对话框" />

选择**确定**。集线器应会重启，并作为普通集线器重新连接，而不再显示为 **LEGO Bootloader**。

然后在**我的蓝牙集线器**中检查该集线器。如果 MOCPilot 仍然提示需要更新固件，请执行一次正常的[固件更新](/docs/Application/Hubs/FirmwareUpdating/)。

## 如果恢复失败 {#if-recovery-fails}

如果恢复失败：

1. 让集线器靠近你的设备。
2. 把集线器关机再开机。
3. 再次让集线器进入恢复模式。
4. 在 MOCPilot 中连接 **LEGO Bootloader**。
5. 再次开始**恢复 Hub 固件**。

如果错误再次出现，请重复整个步骤。如果多次尝试都失败，请更换电池或充电后再试。
