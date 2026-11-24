---
id: Movement
title: 移動
description: "移動ブロックは、MINDSTORMS Robot Inventor または SPIKE のハブで 2 モーターのロボットを走らせます。移動、ステアリング、タンク走行、速度、加速、停止。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 移動

移動ブロックは、左右の車輪をそれぞれ別のモーターで回すロボットを、ひとまとまりとして走らせます。「前に 10 cm 進む」「時計回りに 1 回転する」「右に 30 ステアリングする」といった具合です。LEGO® MINDSTORMS® Robot Inventor アプリの移動ブロックと同じものです。プロフィールに [Robot Inventor または SPIKE Prime のハブ](/docs/Application/Hubs/RobotInventorHub)があると、このカテゴリーがパレットの先頭に表示されます。どのブロックにも白黒のハブのアイコンが付いています。

## 移動のしくみ {#how-movement-works}

- **移動モーター。** 初期設定では、左の車輪がポート **A**、右の車輪がポート **B** です。ほかのポートにするには [移動モーターを設定](#block_ri_move_set_pair) を使います。ロボットでは 2 つのモーターが向かい合わせに付いているので、MOCPilot は右のモーターを逆向きに回します。速度がプラスなら、ロボットは必ず前に進みます。
- **移動速度。** 自分の速度を持たないブロックは移動速度を使います。[移動速度を設定](#block_ri_move_set_speed) で変えるまでは **50 %** です。
- **ステアリング** は −100～100 の数値です。**0** でまっすぐ進みます。プラスの値で右に、マイナスの値で左に曲がります。内側の車輪が遅くなり、ステアリングが ±100 に近いほど遅くなります（50 のとき内側の車輪は半分の速度で回ります）。**100** または **−100** では左右の車輪が逆向きに回り、ロボットはその場で回転します。
- **単位。** 距離は `cm`、`インチ`、モーターの `回転` または `度` で指定でき、多くのブロックでは `秒` も使えます。センチメートルとインチは、モーター 1 回転あたりの移動距離から計算されます。初期値は **17.5 cm**（Robot Inventor の車輪）で、[モーター1回転の移動量を設定](#block_ri_move_set_distance) で変えられます。距離をマイナスにすると逆向きに進みます。
- **待機。** 距離を指定するブロック（`移動 … 分 …`）は、ロボットがその距離を進むまで待ちます。**移動を開始** で始まるブロックはすぐに次へ進みます。ロボットは **移動を停止** か別の移動ブロックが来るまで走り続けます。

## 移動の設定 {#movement-settings}

### `移動モーターを設定 … …` (初心者) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
左の車輪と右の車輪のモーターのポートを選びます。初期値：**A** と **B**。2 つのポートは別々でなければなりません。

### `移動速度を設定 … %` (初心者) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
自分の速度を持たない移動ブロックの速度を −100～100 % で設定します。初期値：50 %。このブロックだけではモーターは動き出しません。

### `モーター1回転の移動量を設定 … cm / インチ 進む` (上級者) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
モーター 1 回転でロボットがどれだけ進むかを MOCPilot に教え、センチメートルやインチの距離が正しくなるようにします。初期値：17.5 cm。自分のロボットで測ってみましょう。前に 1 回転だけ進ませて、その距離を測ります。0 は無視されます。

### `移動加速度を設定 …` (達人) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
移動モーターがどのくらい速く加速・減速するかを決めます。

- 選択肢：`デフォルト`、`速い`（0.1 秒）、`バランスの取れた`（0.35 秒）、`スムーズ`（0.8 秒）、`遅い`（1.2 秒）、`とても遅い`（2 秒）。止まった状態から全速になるまでの時間です。

### `移動モーターを設定 … 停止時` (上級者) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
ロボットが止まるときにモーターがどうするかを決めます。

- `慣性滑走`：モーターは自由に回り、ロボットは惰性で転がって止まります。
- `ブレーキ`（初期値）：モーターにブレーキがかかります。
- `位置を保持`：ロボットを押しても、モーターが積極的に位置を保ちます。

## 移動する {#moving}

### `移動 … 分 …` (初心者) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
ロボットを移動速度で動かし、終わるまで待ちます。

- 方向：`前方`、`後方`、`時計回り`、`反時計回り`（後の 2 つはロボットをその場で回転させます）。
- 単位：`cm`、`インチ`、`回転`、`度`、`秒`。初期値：10 cm。

### `移動 … 分 …` (ステアリング付き) (初心者) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
指定したステアリング（−100～100）と移動速度でロボットを動かし、終わるまで待ちます。ステアリングが 30 なら、ロボットは右へカーブを描いて進みます。

- 単位：`cm`、`インチ`、`回転`、`度`、`秒`。

### `移動 … 分 … で … 速度 %` (上級者) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
上と同じですが、移動速度の代わりに自分の速度を使います。

- 単位：`cm`、`インチ`、`回転`、`度`。

### `移動 … で … … 速度 %` (上級者) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
距離を指定したタンク走行です。左右の車輪の速度を別々に（それぞれ −100～100 %）設定し、ロボットがその距離を進むまで待ちます。

- 単位：`cm`、`インチ`、`回転`、`度`、`秒`。

### `移動を開始 …` (初心者) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
指定したステアリングと移動速度で動き始め、すぐに次のブロックへ進みます。

### `移動を開始 … で … 速度 %` (上級者) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
指定したステアリングと速度で動き始めます。

- 主な使い方：ダッシュボードのスライダーをステアリングの欄に、ペダルを速度の欄に入れます。

### `移動を開始 … で … パワー %` (達人) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
上のブロックと似ていますが、制御された速度ではなくモーターの **パワー** を設定します。ロボットが坂を上ったり荷物を運んだりしても、モーターは速度を保とうとしません。

### `移動を開始 … … 速度 %` (上級者) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
タンク走行：左右の車輪をそれぞれの速度で回し始めます。

### `移動を開始 … … パワー %` (達人) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
制御された速度の代わりに、各車輪のモーターのパワーを使うタンク走行です。

### `移動を停止` (初心者) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
**移動モーターを設定 … 停止時** の設定どおりに、2 つの移動モーターを止めます（初期値はブレーキ）。

### `移動は中断された?` (達人) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
直前の移動が終わらなかった場合に `true` になります。別の移動ブロックか **移動を停止** が途中で打ち切ったということです。
