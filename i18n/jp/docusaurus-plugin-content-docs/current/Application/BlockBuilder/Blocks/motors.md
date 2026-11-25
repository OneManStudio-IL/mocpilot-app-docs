---
id: Motors
title: モーター
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# モーター {#motors}

モーターブロックは、ハブのポートにつないだモーターの起動・停止・位置決めを行い、動き方を調整します。このカテゴリーは、プロフィール内のハブにモーター用のポートがあるときに表示されます。どのブロックでも、ハブと 1 つ以上のポートを選びます。

一部のブロックには、Technic アンギュラーモーターのような回転センサー（エンコーダー）内蔵のモーターと、それを制御できるハブが必要です。これらのブロックには「エンコーダー付きモーター」と記載しています。SBrick、SBrick Plus、BuWizz 2、WeDo 2.0、Mould King のハブでは使えません。Technic Move Hub もこれらのブロックで使えます（モーターはポート `A`、`B`、`C` です）。さらに、専用の車のプロフィールブロックもあります。このページの最後の [Technic Move Hub](#technic-move-hub) を参照してください。

## モーターを動かす {#running-motors}

### `速度を設定 …` (上級者) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
これらのポートで **モーターを起動** と **実行 … の間** が使う速度（−100～100 %）を設定します。このブロックだけではモーターは動き出しません。

### `モーターを起動 …` (初心者) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
**速度を設定** で決めた速度で、選んだ方向にモーターを回し始めます。

- 方向：時計回りまたは反時計回り

### `モーターを起動（設定値） … 速度 %` (初心者) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
指定した速度（−100～100 %）でモーターを回し始めます。マイナスの速度では逆方向に回ります。

- 主な使い方：ジョイスティックやスライダーで走らせる。コントロールの値を速度の欄に入れます。

### `モーターを停止` (初心者) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
モーターを止めます。

### `実行 … の間 …` (上級者) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
選んだ方向に、指定した回転数・角度・秒数だけモーターを回します。

- 方向：時計回りまたは反時計回り
- 単位：`回転`、`度`、`秒`
- エンコーダー付きモーター専用です。

### `の間実行 … で … 速度 %` (上級者) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
指定した速度で、指定した回転数・角度・秒数だけモーターを回します。

- 単位：`回転`、`度`、`秒`
- エンコーダー付きモーター専用です。

## 位置 {#position}

### `進む … 位置へ …` (上級者) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
モーターを絶対位置（モーター自体のゼロ位置が基準）まで回します。

- 経路：`最短経路`、`時計回り`、`反時計回り`
- エンコーダー付きモーター専用です。

### `相対位置へ移動 … で … 速度 %` (初心者) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
**相対位置を設定** で決めた点を基準に、指定した角度（度）の位置までモーターを回します。

- 主な使い方：サーボによるステアリング。ジョイスティックの値で角度を決めます。
- エンコーダー付きモーター専用です。BuWizz 3 では次のブロックを使います。

### `相対位置へ移動 …` (BuWizz 3) (初心者) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
上のブロックの BuWizz 3 版で、速度の入力欄はありません。

- ハブ：BuWizz 3（エンコーダー付きモーター使用時）。

### `相対位置を設定 …` (初心者) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
モーターの現在位置を指定した値とみなします。相対位置はこの値を基準に数えます。

- エンコーダー付きモーター専用です。

### `ラックをキャリブレーション … 中心 … 度 …` (初心者) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
ステアリングラックの中心と可動範囲を求めます。

- モーターがラックを両端まで動かして可動範囲を測り、欄に置いた 2 つの変数に結果を入れます。中心位置と、度単位の範囲（中心から片側の端まで）です。ラックは中央で止まり、その位置が相対位置 0 になります。あとは **相対位置へ移動** `範囲 × ジョイスティック / 100` でステアリングを操作します。
- ステアリングの両端には、機械的なしっかりしたストッパー（ラックの端やギアの限界）が必要です。
- エンコーダー付きモーター専用です。

## モーターの設定 {#motor-settings}

### `モーターを設定 … 停止時` (達人) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
モーターが止まるときの動作を選びます。

- `ブレーキ`：すばやく止まります。
- `位置を保持`：位置を積極的に保ちます（ステアリングに便利です）。
- `慣性滑走`：惰性で回りながら止まります。
- エンコーダー付きモーター専用です。

### `スタール検出を有効にする …` (達人) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
ストール（過負荷による停止）検出のオン／オフを切り替えます。オンにすると、動けなくなったモーターは押し続けずにあきらめるので、そのモーターを待つブロックが終われるようになります。

- ハブ：[MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub)（ブロックにハブのアイコンが付いています）。

### `加速度を設定 …` (達人) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
モーターがどのくらい速く加速するかを選びます。

- 選択肢：`デフォルト`、`速い`、`バランスの取れた`、`スムーズ`、`遅い`、`とても遅い`
- エンコーダー付きモーター専用です。

### `減速度を設定 …` (達人) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
モーターがどのくらい速く減速するかを選びます。

- 選択肢：`デフォルト`、`速い`、`バランスの取れた`、`スムーズ`、`遅い`、`とても遅い`
- エンコーダー付きモーター専用です。

## モーターの値 {#motor-values}

### `位置` (初心者) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
モーターの絶対位置を返します。

- エンコーダー付きモーター専用です。

### `相対位置` (初心者) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
モーターの相対位置を度単位で返します。

- エンコーダー付きモーター専用です。

### `速度` (初心者) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
モーターの現在の速度を返します。

### `電力` (上級者) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
モーターの現在のパワーを返します。

- ハブ：[MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub)（ブロックにハブのアイコンが付いています）。

## Robot Inventor {#robot-inventor-motors}

これらのブロックは Robot Inventor アプリから来たもので、[MINDSTORMS Robot Inventor と SPIKE Prime のハブ](/docs/Application/Hubs/RobotInventorHub)でのみ動作します。ハブのアイコンが付いています。2 輪のロボットを走らせるには、[移動](/docs/Application/BlockBuilder/Blocks/Movement)のブロックを参照してください。

### `モーターを起動（設定値） … パワー %` (上級者) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
選んだポートのモーターを、指定したパワー（−100～100 %、初期値 75 %）で起動します。**モーターを起動（設定値） … 速度 %** と違い、モーターは制御された速度を保ちません。負荷がかかると、エンコーダーのないモーターのように遅くなります。

### `モーターは中断された?` (達人) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
このポートのモーターへの直前のコマンドが、同じポートの別のモーターブロックに途中で打ち切られて終わらなかった場合に `true` になります。

## Technic Move Hub {#technic-move-hub}

Technic Move Hub（LEGO® Technic のリモコンカーのハブ）は、2 通りの方法でプログラムできます。

- **ポートブロック**（上記のモーターブロック）。ハブの 3 つの内蔵モーターがポートになります。`A` と `B` が駆動モーター、`C` がステアリングモーターです。エンコーダー付きモーターなので、上記のモーターブロックは **スタール検出を有効にする** と **電力** 以外すべて使えます。LEGO の車のモデルでは、前進するとき `A` は `B` と逆向きに回ります。また、`C` のステアリングには端のストッパーがあります。`C` で **ラックをキャリブレーション** を一度実行し、そのあと `C` で **相対位置へ移動** を使ってステアリングを操作します（0 が中心）。ハブの 6 つのライトは[ライトブロック](/docs/Application/BlockBuilder/Blocks/Light)のポート `1`–`6` で、[傾き、加速度、向き](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation)のブロックは Technic Hub と同じように使えます。
- **車のプロフィールブロック**（以下）：走行、ステアリング、ブレーキ、パワーパルス、ライト、パワーモードを、ハブに読み込んだ車の構成を通じて操作します。[Technic Move Hub の構成](/docs/Application/Hubs/TechnicMoveHubConfigurations)を参照してください。

:::caution 1 つのハブには 1 つの方法で
プロフィールブロックとポートブロックは同じモーターとライトに命令します。最後の命令が優先され、プロフィールブロックはモーターとライトの制御を取り戻します。ブロックエディターのプログラムチェックは、そのハブのすべてのポートブロックで次の警告を出します：「… は車のプロファイルブロックとポートブロックの両方で制御されています」。
:::

### `モーターを起動 … 速度 %` (初心者) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
駆動モーターを指定した速度で回し始めます。

### `パワーパルス` (初心者) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
駆動モーターにパワーパルスを送ります。

- 主な使い方：次のブロックの前に短くブーストをかける。

### `モーターを停止` (初心者) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
駆動モーターを止めます。

### `モーターのブレーキを設定 …` (初心者) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
駆動モーターのブレーキをオン／オフします。

- 選択肢：`オフ`、`有効`

### `ステアリングラックを設定 …` (初心者) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
ステアリングを指定した位置まで切ります。

### `ステアリングラックをキャリブレーション` (初心者) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
ハブ独自のアルゴリズムでステアリングをキャリブレーションし、ステアリングの可動範囲を自動で求めます。

- ステアリングには、機械的なしっかりしたストッパー（ステアリングラックの端など）が必要です。
