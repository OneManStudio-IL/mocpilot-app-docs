---
id: HubFunctions
title: ハブ固有の機能
description: "Technic Move、BuWizz、SBrick、Mould King、Robot Inventor などのハブが持つ特別な機能と、両エディターでの使い方。"
---

# ハブ固有の機能 {#hub-specific-functions}

ポートのあるハブはどれも、モーターとライトを動かせます。さらに多くのことができるハブもあります。**クイックリンク**では、そうしたハブがプロフィールにあるときだけ、これらの機能がパレットに表示されます。**ロジックブロック**では、ハブ固有のブロックとして用意されています。

## エンコーダー付きモーター（LEGO® Technic、City、BOOST、Robot Inventor、BuWizz 3.0 Pro） {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| 機能 | クイックリンク | ロジックブロック |
|---|---|---|
| 速度制御 | [モーター](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | 速度を設定、モーターを起動（設定値） |
| キャリブレーション付きステアリングサーボ | [サーボ](/docs/Application/Links/Blocks/OutputBlocks#op-servo)（手動 / 自動） | 相対位置へ移動、ステアリングラックをキャリブレーション |
| 指定した角度だけ回す | [角度指定で回転](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | の間実行 |
| 絶対位置（アンギュラーモーター） | [位置へ移動](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | 位置へ移動 |
| 停止時の動作：惰性、ブレーキ、保持 | モーター → **停止時** | 停止時のモーター動作を設定 |
| ハブの加速プリセット | モーター → **ハブの加速** | 加速度を設定、減速度を設定 |
| 速度、位置、電力、電流を入力として使う | [ハブ入力](/docs/Application/Links/Blocks/InputBlocks#src-hub) | 速度、位置、相対位置、電力 |

## Technic Move Hub {#technic-move-hub}

LEGO® Technic のリモコンカー（Porsche GT4 e-Performance、Lamborghini Revuelto、Batmobile™ Tumbler）のハブです。

- 走行、ステアリング、ライトは、ポートではなく機能ごとに制御します。
- **ステアリング**は自分でラックをキャリブレーションします。
- **ブレーキ**、**Boost**（パワーモード）、**パワーパルス**（Batmobile™ Tumbler の構成のみ）。
- **ハブの構成**：**マイハブ → 設定を選択**で、車のプロフィールをハブに読み込みます。[Technic Move Hub の構成](/docs/Application/Hubs/TechnicMoveHubConfigurations)を参照してください。
- ロジックブロック：車のプロフィールブロック（*モーターを起動*、*ステアリングラックを設定*、*モーターのブレーキを設定*、*パワーパルス*、*ライトをつける*、*電源モードを設定*）、または通常のポートブロック：モーター `A`、`B`（駆動）と `C`（ステアリング。`C` で *ラックをキャリブレーション* のあと *相対位置へ移動*）、ライト `1`–`6` の個別制御、傾き、加速度、向き。1 つのハブでは 1 つの方法だけを使ってください。どちらも同じモーターとライトに命令します。[モーター → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)を参照してください。
- クイックリンク：ハブブロックの **制御** で、**車のプロファイル**（行で走行、ステアリング、ライトの切り替えを行う）または **ポート**（ほかのハブと同じく、モーター `A`、`B`、`C` とライト `1`–`6`）を選びます。[ハブブロックとポート → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)を参照してください。[ハブ入力](/docs/Application/Links/Blocks/InputBlocks#src-hub)で傾き、加速度、回転速度も読み取れます。

## BuWizz 2.0 {#buwizz-20}

- **パワーモード**：遅い、ノーマル、速い、Ludicrous。クイックリンクでは[パワーモード](/docs/Application/Links/Blocks/OutputBlocks#op-powermode)操作、ロジックブロックでは *BuWizz 2 電源モードを設定*ブロックを使います。
- 現在のパワーモード、**出力電圧**、モーター電流を入力として使えます。無負荷時の出力電圧は、「遅い」で約 6.3 V、「ノーマル」で約 7.7 V、「速い」で約 9.15 V、「Ludicrous」で約 10.5 V です。
- ポート 1〜4 は単純な速度制御のみで、位置制御はできません。

## BuWizz 3.0 Pro {#buwizz-30-pro}

- ポート 1〜4 の**ポートの色** LED：一覧から、または RGB で指定します（[ポートの色](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor)、*BuWizz 3 ポートLEDの色を設定*）。
- モーター電流を入力として使え、相対位置も使えます。
- ポート 1〜4 のセンサー付きモーター（Technic L と XL、SPIKE、Robot Inventor、グレーのアンギュラーモーター）は速度制御で動きます。ハブが設定速度を保つため、低速（約 20 % から）でも安定して回ります。停止するときは惰性で回って止まります。単純なモーター、ライト、ポート A と B はこれまでどおり動作します。
- BOOST モーター（BOOST Move Hub セットのもの）は BuWizz 3.0 Pro では使えません。ハブがたまにしか認識せず、モーターが正しく回りません。

## SBrick と SBrick Plus {#sbrick-and-sbrick-plus}

- 速度制御付きのモーターとライト。
- 位置制御はありません。サーボ、角度指定で回転、位置へ移動は使えません。

## Mould King 4.0 と 6.0 {#mould-king-40-and-60}

- コマンド送信のみ：センサー、ボタン、接続状態のフィードバックはありません。
- **コントロールチャンネル** A、B、C：クイックリンクの[チャンネル](/docs/Application/Links/Blocks/OutputBlocks#op-channel)操作、ロジックブロックの *MouldKing 制御チャンネルを設定*ブロック、またはマイハブの**チャンネルを選択**で設定します。
- 1 つのプロフィールで使えるのは Mould King 4.0 なら最大 3 台、Mould King 6.0 なら 1 台までで、Mould King の種類は 1 つだけです。

## Robot Inventor（LEGO® Large Hub） {#robot-inventor-lego-large-hub}

接続、ファームウェア、ブロックについてのすべて：[MINDSTORMS Robot Inventor のハブ](/docs/Application/Hubs/RobotInventorHub)。

- **LED マトリックス**：クイックリンクではレベルバー、数値、画像を、ロジックブロックではテキストとピクセルを表示できます。
- **センサーライト**（距離センサーの「目」）。
- **ストール検出**とモーターの電力。
- Robot Inventor アプリのすべてのブロック：[移動](/docs/Application/BlockBuilder/Blocks/Movement)、ハブのサウンドと音楽、ジェスチャー、ヨー、フォースセンサー、ハブ間の無線通信。
- クラシック Bluetooth（iPhone と iPad では使えません）、または Windows と Mac では USB ケーブル。

## カラー LED 付きの LEGO® ハブ {#lego-hubs-with-a-colour-led}

Technic、City、BOOST、Technic Move、WeDo 2.0、Robot Inventor、リモコン：ハブの LED の色を一覧から、または RGB で設定できます（クイックリンクの[ハブ LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led)、ロジックブロックの *LEDの色を設定*）。

## LEGO® Powered Up リモコン {#lego-powered-up-remote-control}

ボタンが入力になるので、MOCPilot を通して実物のリモコンでモデルを操作できます（クイックリンク：**ハブ**入力 → ボタン、ロジックブロック：ハブのボタンイベント）。

## 内蔵センサー {#built-in-sensors}

バッテリー残量と電圧、基板温度、傾き（ピッチ、ロール、ヨー）、加速度、向きは、それらを備えたハブで使えます。ハブの取り付け方に合わせて、**ハブの向き**（クイックリンク）または *傾斜方向に設定*（ロジックブロック）を設定してください。

ロジックブロックでは、Technic Hub、Technic Move Hub、Robot Inventor、SPIKE Prime のハブは回転速度（ジャイロスコープ、*回転速度 (°/秒)*）も報告し、Technic Hub と BOOST Move Hub は消費している電流（*電流 (mA)*）も報告します。[センサー](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state)を参照してください。
