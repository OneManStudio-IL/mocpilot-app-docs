---
id: Light
title: ライト
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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
- 主な使い方：ヘッドライト、明るさを調整できる照明。

### `オフにする` (初心者) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

選んだポートにつないだライトを消灯します。

- ハブ：**でオンにする … 明るさ %** と同じです。

### `ライトをつける …` (初心者) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Technic Move Hub のライトをオン／オフします。

- 選択肢：`オフ`、`有効`
- ハブ：Technic Move Hub。

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

- ハブ：MINDSTORMS Robot Inventor。

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
