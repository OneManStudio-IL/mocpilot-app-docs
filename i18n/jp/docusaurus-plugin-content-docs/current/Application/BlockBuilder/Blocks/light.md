---
id: Light
title: ライト
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# ライト {#light}

ライトブロックは、ハブのステータスライト、ポートにつないだライト、対応ハブのライトマトリックスを制御します。このカテゴリーは、プロフィール内のハブに光らせられるものがあるときに表示されます。

## ハブとポートのライト {#hub-and-port-lights}

### `LEDの色を設定 …` (初心者) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

ハブのステータスライトの色を設定します。

- ハブ：LEGO Powered Up ハブ（Technic Move Hub を含む）、WeDo 2.0、MINDSTORMS Robot Inventor のハブ。
- 主な使い方：モデルの状態（準備完了、動作中、警告、エラー）を表示する。

### `でオンにする … 明るさ %` (初心者) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

選んだポートにつないだライトを、指定した明るさで点灯します。

- ハブ：ポートのあるすべてのハブ（WeDo 2.0 を除く）。
- Technic Move Hub：ポート `1`–`6` はハブの 6 つのライトで、番号はハブに表示されています。ライトは 1 つずつ個別に、明るさ 0–100 % で設定できます。
- 主な使い方：ヘッドライト、明るさを調整できる照明。

### `オフにする` (初心者) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

選んだポートにつないだライトを消灯します。

- ハブ：**でオンにする … 明るさ %** と同じです。

### `ライトをつける …` (初心者) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Technic Move Hub のライトを、車のプロフィールを通じてオン／オフします。

- 選択肢：`オフ`、`有効`
- ハブ：Technic Move Hub。ライトを 1 つずつ設定するには、代わりにポート `1`–`6` で **でオンにする … 明るさ %** を使います。1 つのハブで両方を混ぜて使わないでください（[Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)を参照）。

## ライトマトリックス {#light-matrix}

これらのブロックは、MINDSTORMS Robot Inventor のハブに内蔵された 5×5 のライトマトリックスで使います。

### `点灯 …` (上級者) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

選んだ画像をライトマトリックスに表示し、すぐに次のブロックへ進みます。画像は、別のブロックがマトリックスを変更するか、プログラムが止まるまで表示されたままです。

### `書く …` (初心者) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

テキストを 1 文字ずつライトマトリックス上にスクロール表示します。

### `ピクセルを消灯` (初心者) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

ライトマトリックスのピクセルをすべて消灯します。

### `ピクセルを設定 … x … y … 明るさ …` (上級者) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

1 つのピクセルの明るさを設定します。マトリックスのほかの部分はそのままです。`x` は列、`y` は行で、ピクセル `1, 1` は左上の角にあります。

### `向きを回転 …` (上級者) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

ライトマトリックスの表示を時計回りまたは反時計回りに 90 度回転します。新しい向きは、このあとに実行されるライトブロックに適用されます。

### `向きを設定 …` (上級者) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

ライトマトリックスの表示の向きを設定します。初期値は `正立` で、新しい向きはこのあとに実行されるライトブロックに適用されます。

- 選択肢：`正立`、`左`、`右`、`上下逆`

## 距離センサーのライト {#distance-sensor-lights}

### `点灯 …` (初心者) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

選んだポートの距離センサーの「目」のまわりにあるライトを制御します。ライトを 1 つずつオン／オフできるほか、欄にリストを入れて各ライトの明るさを設定することもできます。

- ハブ：[MINDSTORMS Robot Inventor と SPIKE Prime](/docs/Application/Hubs/RobotInventorHub)、および Technic Hub（ブロックに Robot Inventor のハブのアイコンが付いています）。ライトの点灯中も、センサーは距離を測り続けます。

### `カラーセンサーを点灯 1 … 2 … 3 … %` (上級者) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

選んだポートの Technic カラーセンサー（SPIKE のカラーセンサー）のレンズのまわりにある 3 つのライトの明るさを、それぞれ 0–100 % で設定します。

- ハブ：Technic Hub。
- ライトが点灯している間、センサーは測定しません。色と光の値は前のままになります。センサーを再び読み取る前に、そのポートで Technic センサー：**モードを設定 …**（`デフォルト` または `環境`）を使ってください。プログラムがセンサーを点灯させ、**モードを設定** を使わずに読み取っていると、ブロックエディターのプログラムチェックが警告を出します。
- 主な用途：モデルの信号灯や、ロボットの目。

## Robot Inventor のライトマトリックス {#robot-inventor-light}

これらのブロックは Robot Inventor アプリから来たもので、[MINDSTORMS Robot Inventor と SPIKE Prime のハブ](/docs/Application/Hubs/RobotInventorHub)でのみ動作します。ハブのアイコンが付いています。ブロック内の絵をタップすると描けます。アニメーションのブロックでは、最初のフレームとフレーム数が表示されます。

### `点灯 … の間 … 秒` (初心者) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

指定した時間（初期値 2 秒）だけライトマトリックスに画像を表示し、そのあと消します。ブロックは時間が過ぎるまで待ちます。

### `アニメーションを再生 … で … フレーム/秒 終わるまで` (初心者) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

アニメーションのフレームを指定した速さ（初期値は毎秒 4 フレーム）で 1 回再生し、最後のフレームまで待ちます。

### `アニメーションを開始 … で … フレーム/秒 …` (初心者) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

アニメーションを開始し、すぐに次のブロックへ進みます。

- `1回`：1 回だけ再生します。
- `繰り返す`（初期値）：別のライトブロックがマトリックスを変えるまで、何度も再生します。

### `ピクセルの明るさを設定 … %` (上級者) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

上の Robot Inventor のブロックで表示する画像とアニメーションの明るさを 0～100 % で設定します。このブロックが実行されるまでは、最大の明るさで表示されます。各ピクセルは、ほかのピクセルとの明るさの比を保ちます。

### 画像とアニメーションを描く {#animation-editor}

ライトブロック内の絵をタップするとエディターが開きます。

- **ピクセル**：5×5 のグリッドをタップまたはドラッグして、選んだ明るさで塗ります。
- **明るさ**：グリッドの横の目盛りで、塗る明るさを選びます（消灯から最大まで 10 段階）。
- **すべて消灯／すべて点灯**：画像を消すか、選んだ明るさで塗りつぶします。
- **フレーム**（アニメーションのブロックのみ）：グリッドの下のバーに現在のフレームが表示されます（例：**2/3**）。ボタンで **前の** フレームと **次の** フレームに移動したり、現在のフレームのあとに空のフレームを **追加**、現在のフレームを **複製** または **削除** したりできます（アニメーションには少なくとも 1 フレームが残ります）。

<Screenshot name="robot-inventor-animation-editor" alt="アニメーションエディター：5×5 のグリッド、明るさの目盛り、フレームのバー" width={600} />

## BuWizz 3 のポート LED {#buwizz-3-port-leds}

これらのブロックは、BuWizz 3 のポート横にある LED の色を設定します。

### `ポートLEDの色を設定 …` (初心者) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

ポート LED をあらかじめ用意された色のいずれかに設定します。

### `ポートLEDの色を設定 … … …` (RGB) (上級者) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

赤・緑・青の値からポート LED の色を設定します。

- 主な使い方：好きな色を自由に作る、色をなめらかに変える。

### `文字列からポートLEDの色を設定 …` (達人) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

テキストからポート LED の色を設定します。

- 主な使い方：変数やリストから色を取り出して使う。
