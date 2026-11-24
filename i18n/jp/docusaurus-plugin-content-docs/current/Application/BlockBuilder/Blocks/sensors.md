---
id: Sensors
title: センサー
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# センサー {#sensors}

センサーブロックは、スマートフォンやタブレットの状態、プログラムのタイマー、ハブ、ハブに接続したセンサーの値を読み取ります。読み取った値は、条件、イベント、計算に使えます。

このページの内容：

- [ハブの状態](#hub-state)：バッテリー、電圧、温度、電流、電源モード
- [ハブのボタン、傾き、向き](#hub-tilt-and-orientation)
- [ポートのセンサー](#sensors-on-ports)：任意のデバイス、Technic カラーセンサー、Technic 距離センサー、BOOST カラー＆距離センサー、WeDo 2.0 のセンサー
- [Robot Inventor のハブ](#robot-inventor-sensors)：フォースセンサー、ジェスチャー、向き、ヨー・ピッチ・ロール、傾き、ハブ間の無線通信
- [このデバイス](#this-device)：MOCPilot を実行しているスマートフォン、タブレット、パソコン
- [タイマー](#timer)

## ハブの状態 {#hub-state}

これらのブロックは Mould King のハブにはありません。Mould King のハブはデータを報告しないためです。

### `… % バッテリー` (初心者) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
ハブのバッテリー残量をパーセントで返します。

### `… バッテリー電圧 (V)` (上級者) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
ハブのバッテリー電圧をボルトで返します。

- ハブ：BuWizz 2、BuWizz 3、SBrick、SBrick Plus、Robot Inventor。
- ハブが接続されていないときは `NaN` を返します。

### `… 温度 (C°)` (上級者) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
ハブの電子回路の温度を摂氏で返します。

- ハブ：BuWizz 2、BuWizz 3、SBrick、SBrick Plus。

### `取得する … 出力電圧 (V)` (達人) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
ハブが現在ポートに供給している電圧をボルトで返します。

- ハブ：BuWizz 2。

### `… 電流 (A)` (達人) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
選択したポートに流れている電流をアンペアで返します。

- ハブ：BuWizz 2、BuWizz 3。

### `電源モードを設定 …` (Technic Move Hub) (初心者) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Technic Move Hub の電源モードを設定します。

- モード：`通常`、`ブースト`
- ハブ：Technic Move Hub。

## ハブのボタン、傾き、向き {#hub-tilt-and-orientation}

ボタンのブロックには、対応するハブが一覧で表示されます。傾きと向きのブロックは、BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub、Robot Inventor で使えます。

### `です … … ボタン …` (初心者) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
選択したハブのボタンが選択した状態のとき、`true` を返します。

- 状態：`押された`、`解放された`
- ハブ：LEGO Powered Up のハブ、WeDo 2.0、Robot Inventor。ボタンの一覧はハブによって異なります（通常は `中心`）。

### `… … 角度` (初心者) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
ハブの傾き角度を返します。

- 角度：`ピッチ`、`ロール`、`ヨー`
- `ヨー` は Technic Hub と Robot Inventor でのみ使えます。

### `… … 加速度計 (m/s²)` (達人) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
ハブの加速度計の 1 軸の生の値を返します。

- 軸：`x`、`y`、`z`

### `… … 加速度 (m/s²)` (達人) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
ハブの 1 軸の加速度を返します。

- 軸：`x`、`y`、`z`

### `取得する … 向き …` (初心者) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
ハブのどの面が上を向いているかを返します。

- 出力：`テキスト` または `インデックス`
- 値：`前`、`上部`、`右`、`後部`、`底`、`左`

### `… 向き …` (初心者) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
ハブの選択した面が上を向いているとき、`true` を返します。

- 選択肢：`前`、`上部`、`右`、`後部`、`底`、`左`

### `設定する … 傾斜方向に …` (上級者) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
ハブがモデルにどの向きで取り付けられているかをハブに伝えます。傾きと向きは、その位置を基準に測られます。

- 選択肢：`前`、`上部`、`右`、`後部`、`底`、`左`

## ポートのセンサー {#sensors-on-ports}

以下の Technic と BOOST のセンサーブロックは、City Hub、Technic Hub、BOOST Move Hub、MINDSTORMS Robot Inventor のハブで使えます（SBrick、BuWizz、WeDo 2.0、Mould King は非対応）。

### ポートに接続した任意のデバイス {#any-port-device}

#### `… デバイスタイプ` (初心者) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
選択したポートに接続されているデバイスの種類を返します。

- ハブ：SBrick、SBrick Plus、BuWizz 2 を除く、ポートのあるすべてのハブ。
- 主な用途：デバイス専用のブロックを実行する前に、何が接続されているかを確認する。

### Technic カラーセンサー {#technic-color-sensor}

#### Technic センサー：`モードを設定 …` (上級者) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Technic カラーセンサーを選択したモードに切り替えます。

- モード：`デフォルト`、`環境`
- モードを変えると、プログラムが思わぬ動きをすることがあります。`環境` モードでは、センサーは色や反射光を読み取れません。

#### Technic センサー：`色 …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Technic カラーセンサーが検出した色を返します。

- 出力：`値`（数値）または `文字列`（色の名前）

#### Technic センサー：`色である …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Technic カラーセンサーが選択した色を検出しているとき、`true` を返します。

#### Technic センサー：`反射光（％）` (初心者) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
表面が Technic カラーセンサーに反射して返す光の量をパーセントで返します。

#### Technic センサー：`反射光 …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
反射光と値を選択した方法で比べ、条件を満たすとき `true` を返します。

- 比較：`<`、`=`、`>`

#### Technic センサー：`環境光（％）` (初心者) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
周囲の明るさをパーセントで返します。

#### Technic センサー：`環境光 …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
環境光と値を選択した方法で比べ、条件を満たすとき `true` を返します。

- 比較：`<`、`=`、`>`

#### Technic センサー：`生の値 …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Technic カラーセンサーの 1 つの色チャンネルの生の値を返します。

- チャンネル：`赤`、`緑`、`青`

### Technic 距離センサー {#technic-distance-sensor}

#### Technic センサー：`距離 …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Technic 距離センサーで測った距離を返します。

- 単位：`mm`、`cm`、`インチ`、`%`

#### Technic センサー：`です より近い / より遠い / 正確に …` (初心者) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Technic 距離センサーで測った距離が条件を満たすとき、`true` を返します。

- 比較：`より近い`、`より遠い`、`正確に`
- 単位：`mm`、`cm`、`インチ`、`%`

### BOOST カラー＆距離センサー {#boost-color-and-distance-sensor}

#### BOOST センサー：`色 …` (初心者) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
BOOST カラー＆距離センサーが検出した色を返します。

- 出力：`値`（数値）または `文字列`（色の名前）

#### BOOST センサー：`色である …` (初心者) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
BOOST センサーが選択した色を検出しているとき、`true` を返します。

#### BOOST センサー：`距離 …` (初心者) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
BOOST カラー＆距離センサーで測った距離を返します。

- 単位：`%`、`cm`、`インチ`

#### BOOST センサー：`です より近い / より遠い / 正確に …` (初心者) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
BOOST センサーで測った距離が条件を満たすとき、`true` を返します。

- 比較：`より近い`、`より遠い`、`正確に`
- 単位：`%`、`cm`、`インチ`

#### BOOST センサー：`反射光（％）` (初心者) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
表面が BOOST センサーに反射して返す光の量をパーセントで返します。

#### BOOST センサー：`反射光 …` (初心者) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
反射光と値を選択した方法で比べ、条件を満たすとき `true` を返します。

- 比較：`<`、`=`、`>`

### WeDo 2.0 のセンサー {#wedo-2-sensors}

WeDo 2.0 ハブで使う WeDo 2.0 モーションセンサーと傾きセンサーです。

#### WeDo 2.0 センサー：`距離 …` (初心者) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
WeDo 2.0 モーションセンサーで測った距離を返します。

- 単位：`%`、`cm`、`インチ`
- ハブ：WeDo 2.0。

#### WeDo 2.0 センサー：`です より近い / より遠い / 正確に …` (初心者) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
WeDo 2.0 モーションセンサーで測った距離が条件を満たすとき、`true` を返します。

- 比較：`より近い`、`より遠い`、`正確に`
- 単位：`%`、`cm`、`インチ`
- ハブ：WeDo 2.0。

#### WeDo 2.0 センサー：`角度 …` / `方向として …` (初心者) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
WeDo 2.0 傾きセンサーのデータとして、傾き角度または傾いている方向を返します。

- 角度：`ピッチ`、`ロール`
- 方向の出力：`テキスト` または `数値`。方向：`中立`、`前方`、`後方`、`左`、`右`、`不明`
- ハブ：WeDo 2.0。

## Robot Inventor のハブ {#robot-inventor-sensors}

これらのブロックは Robot Inventor アプリから来たもので、[MINDSTORMS Robot Inventor と SPIKE Prime のハブ](/docs/Application/Hubs/RobotInventorHub)でのみ動作します。ハブのアイコンが付いています。対応するイベント（ハブが振られたとき、傾いたときなど）は[イベント](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events)のページにあります。

### フォースセンサー {#robot-inventor-force-sensor}

#### `… です 押された / 強く押された / 解放された ?` (初心者) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

選んだポートのフォースセンサーを調べます。ブロックには `です` と表示されますが、意味は「…が押されているか？」です。`強く押された` は 5 ニュートンを超える力で押されていること、`解放された` は押されていない（離された）ことを表します。

#### `… 圧力の単位 % / ニュートン` (初心者) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

フォースセンサーがどれだけ強く押されているかを、パーセント（0～100）またはニュートン（0～10）で返します。

### ハブの動き {#robot-inventor-motion}

#### `ハブが … ?` (上級者) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

ハブが今この動きをした場合に `true` になります：`タップされた`、`ダブルタップされた`、`振られた`（初期値）、`落下中`。ジェスチャーは 1 回だけ数えられます。あるブロックが読み取ると、消えてしまいます。

#### `ジェスチャー` (達人) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

最後のジェスチャーをテキストで返します：`tapped`、`doubletapped`、`shake`、`freefall`。ジェスチャーがなければ空の値を返します。

#### `です … が上?` (初心者) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

ハブのこの面が上を向いている場合に `true` になります：`前面`（ライトマトリックス）、`上面`、`右側面`、`背面`、`底面`、`左側面`。先頭に `です` と表示されますが、ブロックの意味は「…が上を向いているか？」です。

#### `向き` (達人) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

上を向いている面をテキストで返します：`front`、`up`、`rightside`、`back`、`down`、`leftside`。

#### `… 角度` (初心者) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

1 つの軸のまわりのハブの角度を度で返します：`ヨー`（コンパスのように左右に向きを変える）、`ピッチ`（前側が上下する）、`ロール`（左右に傾く）。

- 主な使い方：ロボットをまっすぐ走らせる、またはちょうど 90° 回す。ヨーをリセットしてから、ヨーが目標の角度になるまでステアリングします。

#### `ヨー角を0にする` (初心者) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

ハブの今の向きを、ヨー角の新しい 0 にします。次の読み取り値がすでにそこから数えられるよう、ブロックは 0.1 秒待ちます。

#### `角速度 …` (達人) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

ハブが `x`、`y`、`z` 軸のまわりにどれだけ速く回っているか（ジャイロ）を、度/秒で返します。

#### `加速 …` (達人) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

`x`、`y`、`z` 軸方向のハブの加速度を、ハブが報告するとおりに返します。

#### `ハブが傾いている … ?` (上級者) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

ハブがこの方向に傾いている場合に `true` になります：`上`、`下`、`左`、`右`、`任意`（初期値）。水平から約 12° 以上で傾いているとみなされます。両方向に傾いているときは、傾きの大きいほうが優先されます。

### ハブ間の無線通信 {#robot-inventor-radio}

Robot Inventor のハブどうしは、MOCPilot を介さずに無線で短い信号を送り合えます。信号には名前と値があります。

#### `ハブの信号を送信 … と …` (達人) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

指定した名前（初期値 `signal`）と値（`1`）の信号を、このハブから近くのハブへ送ります。

#### `受信した信号 … 値` (達人) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

この名前の信号についてこのハブが最後に受信した値を返します。まだ何も届いていなければ 0 です。信号が届いた瞬間に反応するには、[ハブが信号を受信したとき](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio) を使います。

## このデバイス {#this-device}

これらのブロックは、MOCPilot を実行しているスマートフォン、タブレット、パソコンの値を読み取ります。

### `デバイス % バッテリー` (初心者) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
デバイスのバッテリー残量をパーセントで返します。

### `デバイス … 角度` (上級者) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
デバイスの傾き角度を返します。

- 角度：`ピッチ`、`ロール`、`ヨー`
- 主な用途：スマートフォンを傾けてモデルを操縦する。

### `デバイス … 加速度計 (m/s²)` (達人) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
デバイスの加速度計の 1 軸の生の値を m/s² で返します。

- 軸：`x`、`y`、`z`

### `デバイス … 加速度 (m/s²)` (達人) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
デバイスの 1 軸の加速度を m/s² で返します。

- 軸：`x`、`y`、`z`

## タイマー {#timer}

### `タイマー` (上級者) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
プログラムの開始時、または最後の**タイマーをリセット**からの経過時間を秒で返します。

### `タイマーをリセット` (上級者) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
タイマーを 0 に戻します。
