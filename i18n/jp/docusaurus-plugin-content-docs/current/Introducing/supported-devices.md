---
id: SupportedDevices
title: 対応しているハブ、モーター、センサー
description: "MOCPilot で使えるハブ、モーター、センサー。"
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# 対応デバイス {#supported-devices}

MOCPilot は以下のハブ、モーター、センサーに対応しています。どのハブも、[クイックリンク](/docs/Application/Links/LinksIntroducing)と[ロジックブロック](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)の両方のプログラムエディターで使えます。

## ハブ {#hubs}

<SupportedHubsTable />

注意事項：

- プロフィールには 5 つのハブスロットがあります。2 つは無料で、残りの 3 つはハブスロットの追加購入または [MocPilot Pro](/docs/Application/Account/Pro) で使えるようになります。
- **Mould King** のハブはコマンドを受信するだけです（センサーやフィードバックはありません）。1 つのプロフィールで使える Mould King の種類は 1 つだけです：Mould King 4.0 ハブなら最大 3 台、Mould King 6.0 なら 1 台。
- **Robot Inventor** ハブ（LEGO® ラージハブ）はクラシック Bluetooth を使うため、iPhone と iPad では使えません。
- ファームウェアの更新と復旧は、Technic Hub、Technic Move Hub、BOOST Move Hub、City Hub で利用できます。[ファームウェアの更新](/docs/Application/Hubs/FirmwareUpdating)を参照してください。
- モーターとライト以外に各ハブでできることは、[ハブ固有の機能](/docs/Application/Hubs/HubFunctions)で説明しています。

## モーター {#motors}

<SupportedMotorsTable />

エンコーダー付きのモーター（アンギュラーモーター、Technic L と XL）は速度と位置を返すので、サーボとして使ったり、角度を指定して回したり、指定の位置へ動かしたりできます。シンプルなモーター（トレインモーター、シンプルミディアムリニアモーター）は速度の指定のみです。

## センサーとライト {#sensors-and-lights}

<SupportedSensorsTable />

ハブの内蔵センサー（バッテリー、傾き、加速度、温度）や、スマートフォン・タブレットのセンサーも使えます。[スマートフォンのセンサー](/docs/Application/Dashboard/PhoneSensors)を参照してください。
