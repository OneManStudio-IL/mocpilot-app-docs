---
id: FirmwareUpdating
title: 固件更新
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 固件更新 {#firmware-updating}

当有更新的兼容版本时，MOCPilot 可以为支持的 LEGO® Powered Up 集线器更新固件。

有些集线器需要先更新才能与 MOCPilot 正常配合：新固件修复了集线器的错误，并加入了应用所依赖的功能。

## 支持的集线器 {#supported-hubs}

MOCPilot 可以更新以下集线器：

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

## 开始之前 {#before-you-start}

请确保集线器以及你的手机、平板电脑或电脑电量充足。

在整个更新过程中保持集线器开机，并让设备靠近集线器，以保持蓝牙连接稳定。固件上传期间，请不要关闭 MOCPilot、关闭蓝牙或关闭集线器。

:::warning 重要
更新中断可能导致集线器固件不完整。之后可能需要先恢复固件，才能再次使用集线器。
:::

## 开始更新 {#starting-the-update}

连接集线器时，MOCPilot 会检查其固件版本。如果需要更新版本，应用会显示**需要更新固件**对话框。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="“需要更新固件”对话框" />

选择**更新**即可立即开始固件更新。

如果想稍后再更新，请选择**取消**。你可以随时从集线器菜单开始更新。

## 稍后从集线器菜单更新 {#updating-later-from-the-hub-menu}

要自行开始更新：

1. 打开**我的蓝牙集线器**。
2. 找到需要更新的集线器。
3. 打开集线器菜单。
4. 选择**更新固件**。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="集线器上下文菜单中的“更新固件”操作" />

## 固件更新过程中 {#during-the-firmware-update}

MOCPilot 会把固件上传到集线器并显示进度。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="固件更新进度界面" />

请等待上传完成。应用新固件时，集线器可能会重启或短暂断开连接。

随后 MOCPilot 会重新搜索集线器。请让集线器留在附近，等待应用重新连接。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="固件已上传，正在搜索集线器" />

## 完成更新 {#finishing-the-update}

更新完成后，MOCPilot 会显示确认信息。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="固件更新完成对话框" />

选择**确定**。集线器会重新连接，其卡片上会显示新的固件版本。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="显示已更新固件版本的集线器卡片" />

现在你可以继续在 MOCPilot 中使用这个集线器了。

## 如果更新失败 {#if-the-update-fails}

如果更新失败，MOCPilot 会显示错误信息。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="固件更新失败对话框" />

首先，把集线器关机再开机，然后重新运行更新：

1. 关闭集线器。
2. 重新打开集线器。
3. 让集线器靠近你的设备。
4. 在 MOCPilot 中连接集线器。
5. 再次开始固件更新。

如果集线器仍然无法正常响应，可能需要恢复固件：请参阅[集线器固件恢复](/docs/Application/Hubs/RecoveryHubFirmware/)。
