---
id: HubsOverview
title: ハブ
description: "MOCPilot のプロフィールにおけるハブ：対応ハブ、ハブスロット、各ハブでできること。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ハブ {#hubs}

**ハブ**は、モデルの Bluetooth ブロックです。モーター、ライト、センサーをそのポートに接続し、MOCPilot は Bluetooth でハブと通信します。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/spike_hub_p.webp')} alt="SPIKE Prime Hub" style={{maxWidth: 110}} /><div>SPIKE Prime</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/essential_hub_p.webp')} alt="SPIKE Essential Hub" style={{maxWidth: 110}} /><div>SPIKE Essential</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## 対応ハブ {#supported-hubs}

| ハブ | 備考 |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 ポート、傾きセンサーと加速度センサー |
| LEGO® Technic™ Move Hub | LEGO Technic のリモコンカーに搭載。走行、ステアリング、ライト。[構成](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 ポート、列車と City セット |
| LEGO® Move Hub / BOOST (88006) | 内蔵モーター 2 個 + 2 ポート |
| LEGO® Remote Control (88010) | ボタンが入力になります |
| LEGO® WeDo 2.0 Smart Hub | 2 ポート |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 ポート、ライトマトリックス、スピーカー、ジャイロ。Bluetooth または USB。iPhone と iPad では使用不可 |
| LEGO® SPIKE™ Prime Hub (45601) | ベータ版。Robot Inventor と同じハブに SPIKE Legacy ファームウェアを搭載。Bluetooth または USB。iPhone と iPad では使用不可 |
| LEGO® SPIKE™ Essential Hub (45609) | ベータ版。2 ポート、ライト、傾きと加速度。Bluetooth Low Energy |
| BuWizz 2.0 | 4 ポート、パワーモード |
| BuWizz 3.0 Pro | 6 ポート、ポートのカラー LED |
| SBrick, SBrick Plus | 4 ポート、速度制御のみ（位置制御なし） |
| Mould King 4.0, 6.0 | 4 または 6 ポート、コマンド送信のみ、コントロールチャンネル |

モーターとセンサーを含む完全な一覧：[対応デバイス](/docs/Introducing/SupportedDevices)。

## ハブスロット {#hub-slots}

各プロフィールには **5 つのハブスロット**があります。

- **2 つのスロットは無料**です。
- **残りの 3 つ**は、**スロットを解除**（*追加ハブスロット*の購入、1 スロットにつき 1 回）で個別に、または [MocPilot Pro](/docs/Application/Account/Pro) でまとめて解除できます。

購入したスロットはアカウントに属し、すべてのプロフィールで使えます。

Mould King の制限：1 つのプロフィールで使える Mould King の種類は 1 つだけで、Mould King 4.0 なら最大 3 台、Mould King 6.0 なら 1 台までです（スマートフォンの Bluetooth アドバタイズ送信機を共有するため）。

## プログラムでのハブ {#hubs-in-the-program}

- **クイックリンク**では、プロフィールの各ハブがパレットに**ハブ**出力として、またボタンとセンサー用の**ハブ**入力として表示されます。プロフィールのどのハブにもできない操作は表示されません。[ハブブロックとポート](/docs/Application/Links/HubsAndPorts)を参照してください。
- **ロジックブロック**では、モーター、ライト、センサーのブロックでハブスロットとポートを指定します。[モーター](/docs/Application/BlockBuilder/Blocks/Motors)を参照してください。

## 関連情報 {#read-more}

- [ハブを追加して接続する](/docs/Application/Hubs/ConnectingHubs)
- [ハブ固有の機能](/docs/Application/Hubs/HubFunctions)
- [ファームウェアの更新](/docs/Application/Hubs/FirmwareUpdating)と[ファームウェアの復旧](/docs/Application/Hubs/RecoveryHubFirmware)
