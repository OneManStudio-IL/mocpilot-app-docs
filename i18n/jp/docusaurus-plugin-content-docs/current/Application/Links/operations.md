---
id: Operations
title: 動作と出力
description: "クイックリンクの動作（モーター、サーボ、ライトなど）と出力（ハブ、インジケーター、ハブ LED、LED マトリックス、サーボのキャリブレーション）。"
---

import Screenshot from '@site/src/components/Screenshot';

# 動作と出力 {#operations-and-outputs}

パレットの **出力** タブには、動作と出力があります。

- **動作**は、*何を*するか（モーターを回す、ステアリングを切る、ライトを点滅させる）を表します。その後ろには必ず **ハブ** 出力が続き、*どこで*（どのハブのどのポートで）行うかを表します。
- **直接出力**（インジケーター、ハブ LED、LED マトリックス、サーボのキャリブレーション）は、動作なしで単独で行を締めくくります。

よく使う動作（モーター、サーボ、時間指定モーター、ライト）は常に表示されます。ハブ固有の動作は、プロフィールのハブが対応している場合にだけ表示されます。すべての設定と値、既定値：[動作ブロックと出力ブロック](/docs/Application/Links/Blocks/OutputBlocks)。

## モーターとライト {#motors-and-lights}

| 動作 | 働き | よくある使い方 |
|---|---|---|
| [モーター](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | 入力の値でモーターを回す。0 で停止 | 走行、ウインチ |
| [サーボ](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | エンコーダー付きモーターを、入力に追従する位置まで回す | ステアリング |
| [時間指定モーター](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | 押すたびに、設定した時間だけモーターを回す | ドア、ダンプ荷台 |
| [角度指定で回転](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | 押すたびに、設定した角度だけモーターを回す | 割り出し、ターンテーブル |
| [位置へ移動](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | アンギュラーモーターを、オンのときとオフのときでそれぞれ別の位置へ動かす | フラップ、ギアセレクター |
| [ライト](/docs/Application/Links/Blocks/OutputBlocks#op-light) | LEGO® ライトを点灯または点滅させる | ヘッドライト、回転灯、ウインカー |
| [ポートの色](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | BuWizz 3.0 Pro のポート LED に色を付ける | 状態の色 |
| [センサーライト](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | Technic 距離センサー（Robot Inventor）の「目」を点灯させる | ロボットの顔 |

### サーボでステアリング {#steering-with-servo}

サーボには、エンコーダー付きモーターと、手で中央に合わせられるか、両端にストッパーのあるステアリング機構が必要です。

- **手動**：軸を中央に回して **ゼロに設定** をタップし、**◀ 5°** / **5° ▶** で微調整します。次に **角度** を選び、それでも車輪が片側に寄るなら **中心** も選びます。
- **自動**：起動のたびにモーターが両端のストッパーまで回り、その中央がゼロに、可動範囲が角度になります。**今すぐキャリブレーション** を押すとすぐに実行します。メッセージ：「キャリブレーション中：モーターが両端まで回ります…」、「キャリブレーション完了：サーボは ±…° 回転し、中心がゼロです」、「キャリブレーション失敗：ハブ、モーター、軸に両端のストッパーがあるか確認してください」。

**Technic Move Hub** では、ハブ自身がステアリングラックを操作してキャリブレーションするため、キャリブレーションモードだけが有効です。

<Screenshot name="links-servo-settings" alt="サーボブロックの設定" width={900} />

## ハブ全体の動作 {#operations-for-the-whole-hub}

これらの動作はハブ全体を制御するため、後ろに置くハブブロックにはポートがありません。

| 動作 | ハブ | 働き |
|---|---|---|
| [ブレーキ](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | 入力がオンの間ブレーキをかける |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | オンの間は Boost パワーモード、オフで通常に戻る |
| [パワーパルス](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | 押すたびにパワーパルスを 1 回（Batmobile™ Tumbler の設定のみ） |
| [パワーモード](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | パワーモードを切り替える：遅い、ノーマル、速い、Ludicrous |
| [チャンネル](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | 制御チャンネルを切り替える：A、B、C |

## 出力 {#indicator}

- [ハブ](/docs/Application/Links/Blocks/OutputBlocks#hub-out)：ハブとそのポート。[ハブブロックとポート](/docs/Application/Links/HubsAndPorts)を参照してください。
- [インジケーター](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator)：ダッシュボードのモニター（テキストモニター、バッテリーレベル、スピードメーター、傾きモニター）に値を表示します。ハブのセンサーの直後に置いたテキストモニターは、単位付きの実際の値を表示します。インジケーターは値をそのまま表示するので、行に動作は置きません。[インジケーターとモニター](/docs/Application/Dashboard/Indicators)を参照してください。
- [ハブ LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led)：LEGO® ハブのカラーライト。入力がオンの間は 1 つの色、オフの間は別の色で光ります。
- [LED マトリックス](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix)：Robot Inventor ハブのライトマトリックス。レベルバー、数値、画像を表示します。
- [サーボのキャリブレーション](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate)：**自動** モードのすべてのサーボを再キャリブレーションします。ダッシュボードのボタンに割り当てましょう：*BTN3* → *サーボのキャリブレーション*。

## プログラムが停止したとき {#when-the-program-stops}

モーターは停止し、LED マトリックスは消去され、ポートの色とセンサーライトは消灯します。
