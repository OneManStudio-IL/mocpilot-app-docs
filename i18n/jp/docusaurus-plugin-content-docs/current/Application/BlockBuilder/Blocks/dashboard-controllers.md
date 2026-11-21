---
id: DashboardControllers
title: オンスクリーンコントローラー
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# オンスクリーンコントローラー {#dashboard-controllers}

これらのブロックは、ダッシュボードのコントロールの状態を読み取り、操作されたときに反応し、見た目を変更します。ブロックは**オンスクリーンコントローラー**カテゴリにあり、このカテゴリはダッシュボードにコントロールを置くとすぐに表示されます。コントロールの種類ごとに専用のブロックが追加されます。ブロックでは、*BTN1* や *GEAR1* のように名前でコントロールを選びます。

以下で使う範囲：アナログ値の多くは 0〜100、ゼロが中央にある場合は −100〜100 です。

このページの内容：

- [すべてのコントロール共通のブロック](#blocks-for-all-controls)：色、操作の可否、サウンド
- [ボタンとスイッチ](#buttons-and-switches)：ボタン、スイッチ、ステップスイッチ
- [ジョイスティックと十字キー](#joysticks-and-d-pads)
- [スライダーとノブ](#sliders-and-knobs)：スライダー、ロータリーノブ
- [モニター](#monitor-blocks)
- [ハンドルとペダル](#steering-wheel-and-pedals)
- [その他の特殊コントロール](#other-special-controls)：ギアボックス、サイドブレーキ、ウインカー、マスコン

## すべてのコントロール共通のブロック {#blocks-for-all-controls}

### `コントローラーの色を設定` (上級者) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*設定する [コントロール] 色に設定 [色]*：コントロールのアクセントカラーを変更します。

- 種類：命令ブロック
- アクセントカラーのあるコントロールで使えます（ハンドルとペダルは対象外）
- 主な用途：状態を示す。例：バッテリーが少なくなると赤くなるボタン

### `コントローラーの操作の可否を設定` (上級者) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[有効化 / 無効化] [コントロール] インタラクティビティ*：無効にしたコントロールはタッチに反応しません。

- 種類：命令ブロック
- 主な用途：コントロールを一時的にロックする。例：起動時のチェックが終わるまでスロットルを使えないようにする

### `コントロールのサウンド` (初心者) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*サウンド [サウンド] の [コントロール]*：コントロールのサウンドの 1 つです。**サウンド**カテゴリの *再生* ブロックで使います。

- 種類：値ブロック
- サウンド付きのコントロールがダッシュボードにあるときに表示されます：[ハンドル](/docs/Application/Dashboard/SpecialControls#steering-wheel)（乗用車、トラック、スポーツカーのクラクション）、[ペダル](/docs/Application/Dashboard/SpecialControls#pedals)（乗用車、スポーツカー、トラックのブレーキ音、バック警告音）
- サウンドは、コントロールの**効果音**設定とアプリのサウンドがオンの場合にのみ再生されます

## ボタンとスイッチ {#buttons-and-switches}

### ボタンのブロック {#button-blocks}

#### `ボタンのイベント` (初心者) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*ボタンを押したとき [コントロール] です [押された / 解放された]*：ボタンが押されたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `ボタンの値（真偽値）` (初心者) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*ボタン [コントロール] [押された / 解放された]*：ボタンが今押されているか、離されているか。

- 種類：値ブロック、`true` / `false`

### スイッチのブロック {#switch-blocks}

#### `スイッチのイベント` (初心者) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*スイッチの場合 [コントロール] 切り替えられた [有効 / オフ]*：スイッチがオンまたはオフになったときにスクリプトを実行します。

- 種類：イベントブロック

#### `スイッチの値（真偽値）` (初心者) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*スイッチ [コントロール] [有効 / オフ]*：スイッチがオンかオフか。

- 種類：値ブロック、`true` / `false`

### ステップスイッチのブロック {#stepper-blocks}

これらのブロックは、ステップスイッチと縦型ステップスイッチで使えます。

#### `ステップスイッチのイベント` (初心者) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*ステップスイッチが [コントロール] [任意 / リセット / マイナス / プラス] です [押された / 解放された]*：ステップスイッチのボタンが押されたとき、または離されたときにスクリプトを実行します（**任意**はどのボタンでもよいという意味です）。

- 種類：イベントブロック

#### `ステップスイッチの値（数値）` (初心者) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*ステップスイッチ [コントロール]*：現在のステップ番号。

- 種類：値ブロック

## ジョイスティックと十字キー {#joysticks-and-d-pads}

### ジョイスティックのブロック {#joystick-blocks}

#### `ジョイスティックのイベント` (初心者) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*ジョイスティックが [コントロール] です [上 / 下 / 左 / 右 / 移動 / 解放された]*：スティックがある方向に倒されたとき、少しでも動いたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `ジョイスティックの値（数値）` (初心者) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*ジョイスティック [コントロール] [X軸 / Y軸]*：1 つの軸でのスティックの位置で、−100〜100 です。中央は 0 です。

- 種類：値ブロック

#### `ジョイスティックの値（真偽値）` (初心者) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*ジョイスティックである [コントロール] [押された / 解放された]*：ジョイスティックに指が触れているかどうか。

- 種類：値ブロック、`true` / `false`

### 十字キーのブロック {#d-pad-blocks}

#### `十字キーのイベント` (初心者) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*十字キーの場合 [コントロール] [上 / 下 / 左 / 右] ボタン [押された / 解放された]*：十字キーのボタンが押されたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `十字キーの値（真偽値）` (初心者) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*方向パッド [コントロール] [上 / 下 / 左 / 右] ボタン [押された / 解放された]*：十字キーのボタンが今押されているか、離されているか。

- 種類：値ブロック、`true` / `false`

## スライダーとノブ {#sliders-and-knobs}

### スライダーのブロック {#slider-blocks}

これらのブロックは、スライダーと縦型スライダーで使えます。

#### `スライダーのイベント` (初心者) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*スライダーが [コントロール] です [低い / 高い / 移動 / 解放された]*：つまみが下端または上端に達したとき、動いたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `スライダーの値（数値）` (初心者) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*スライダー [コントロール]*：つまみの位置で、0〜100、**負の値**がオンなら −100〜100 です。

- 種類：値ブロック

### ロータリーノブのブロック {#rotary-knob-blocks}

有料テーマの[ロータリーノブ](/docs/Application/Dashboard/ControlTypes#rotary-knob)のブロックです。

#### `ロータリーノブのイベント` (初心者) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*ノブが [コントロール] [回された / 押された / 離された / 最小まで回された / 最大まで回された]*：ノブが回されたとき、触れられたとき、離されたとき、またはどちらかの端に達したときにスクリプトを実行します。

- 種類：イベントブロック

#### `ロータリーノブの値（数値）` (初心者) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*ノブの値 [コントロール]*：ノブの位置で、0〜100、**中央ゼロ（-100..100）** がオンなら −100〜100 です。

- 種類：値ブロック

#### `ロータリーノブの値（真偽値）` (初心者) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*ノブが [コントロール] [押された / 最小 / 最大] ?*：ノブに指が触れているか、ノブがどちらかの端にあるか。

- 種類：値ブロック、`true` / `false`

## モニター {#monitor-blocks}

[モニター](/docs/Application/Dashboard/Indicators)のブロックです。

### `モニターに表示` (初心者) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*表示 [値] 上 [コントロール] モニター*：**モニター**にテキストや値を表示します。

- 種類：命令ブロック
- 主な用途：バッテリー残量、モーターの角度、ハブのポートに接続されたデバイス、モード名を表示する

### `モニターに値を設定` (初心者) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*設定する [値] へ [コントロール] モニター*：**バッテリー残量**モニターまたは**スピードメーター**モニターの値を設定します。

- 種類：命令ブロック

### `傾きモニターに値を設定` (初心者) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*設定する [値] へ [コントロール] [ピッチ / ロール] モニター*：**傾きモニター**に表示するピッチまたはロールを設定します。

- 種類：命令ブロック

## ハンドルとペダル {#steering-wheel-and-pedals}

### ハンドルのブロック {#steering-wheel-blocks}

[ハンドル](/docs/Application/Dashboard/SpecialControls#steering-wheel)のブロックです。

#### `ハンドルのイベント` (初心者) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*ハンドルが [コントロール] です [移動 / 押された / 解放された]*：ハンドルが回されたとき、触れたとき、または離したときにスクリプトを実行します。

- 種類：イベントブロック

#### `ハンドルの値（数値）` (初心者) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*ハンドル [コントロール]*：ステアリング角度で、−100（左いっぱい）〜100（右いっぱい）です。

- 種類：値ブロック

#### `ハンドルの値（真偽値）` (初心者) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*ハンドル [コントロール] [押された / 解放された]*：ハンドルに指が触れているかどうか。

- 種類：値ブロック、`true` / `false`

### ペダルのブロック {#pedals-blocks}

[ペダル](/docs/Application/Dashboard/SpecialControls#pedals)のブロックです。

#### `ペダルのイベント` (初心者) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*ペダルが [コントロール] [任意 / ブレーキ / 加速] です [移動 / 押された / 解放された]*：ペダルが動いたとき、踏まれたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `ペダルの値（数値）` (初心者) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*ペダル [コントロール] [加速 / ブレーキ]*：アクセルまたはブレーキの踏み込み量で、0〜100 です。

- 種類：値ブロック

#### `ペダルの値（真偽値）` (初心者) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*ペダル [コントロール] [加速 / ブレーキ] [押された / 解放された]*：ペダルが踏まれているかどうか。

- 種類：値ブロック、`true` / `false`

## その他の特殊コントロール {#other-special-controls}

その他の[特殊コントロール](/docs/Application/Dashboard/SpecialControls)のブロックです。

### ギアボックスのブロック {#gearbox-blocks}

[マニュアルとオートマチックのギアボックス](/docs/Application/Dashboard/SpecialControls#gear-shifter)のブロックです。ギアの値：マニュアルは −1 = R、0 = N、1〜6 = 前進ギア。オートマチックは −2 = P、−1 = R、0 = N、1 = D。

#### `ギアボックスのイベント` (初心者) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*ギアボックスが [コントロール] [ギアを変えた / シフトアップした / シフトダウンした / ニュートラルに入れた / リバースに入れた / パーキングに入れる]*：ギアが変わったときにスクリプトを実行します。**シフトアップした**と**シフトダウンした**は、値の大きいギア、または小さいギアへの移動を意味します。

- 種類：イベントブロック

#### `ギア` (初心者) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*ギア [コントロール]*：入っているギア（値は上記を参照）。

- 種類：値ブロック

#### `ギアボックスの状態（真偽値）` (初心者) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*ギアボックスが [コントロール] [ニュートラル / リバース / 前進ギア / パーキング] ?*

- 種類：値ブロック、`true` / `false`
- **前進ギア**は、マニュアルギアボックスのいずれかの前進ギア、またはオートマチックの D で真になります

#### `ギア数` (上級者) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*ギア数 [コントロール]*：ギアボックスの**ギア数**設定の値。

- 種類：値ブロック
- 主な用途：シミュレーターの *運転* ブロックの「/」の入力欄

### サイドブレーキのブロック {#handbrake-blocks}

[サイドブレーキ](/docs/Application/Dashboard/SpecialControls#handbrake)のブロックです。

#### `サイドブレーキのイベント` (初心者) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*サイドブレーキが [コントロール] [引かれた / ロックされた / 解除された / 離された]*：レバーが引かれたとき、ロックされたとき、ロックが解除されたとき、または離されたときにスクリプトを実行します。

- 種類：イベントブロック

#### `サイドブレーキの強さ` (初心者) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*サイドブレーキの強さ [コントロール]*：レバーの引き量で、0〜100 です。

- 種類：値ブロック

#### `サイドブレーキの状態（真偽値）` (初心者) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*サイドブレーキが [コントロール] [ロックされた / 解除された / 引かれた] ?* **引かれた**は、強さが 0 より大きい間は真です。

- 種類：値ブロック、`true` / `false`

### ウインカーのブロック {#turn-signals-blocks}

[ウインカー](/docs/Application/Dashboard/SpecialControls#turn-signals)のブロックです。点滅ではなく、ウインカーの安定した状態を検出します。

#### `ウインカーのイベント` (初心者) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*ウインカーの [コントロール] [左ウインカー / 右ウインカー / ライト] [点灯した / 消灯した]*

- 種類：イベントブロック

#### `ウインカーの状態（真偽値）` (初心者) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*ウインカー [コントロール] [左ウインカー / 右ウインカー / ライト] 点灯中 ?*

- 種類：値ブロック、`true` / `false`

### マスコンのブロック {#train-controller-blocks}

[マスコン](/docs/Application/Dashboard/SpecialControls#train-controller)のブロックです。

#### `マスコンのイベント` (初心者) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*マスコンが [コントロール] [ノッチが変わった / ノッチを上げた / ノッチを下げた / ノッチオフ / レバーサを動かした / レバーを離した]*：**ノッチオフ**は、レバーがノッチ 0 に戻ったことを意味します。

- 種類：イベントブロック

#### `マスコンの値（数値）` (初心者) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*マスコン [コントロール] [牽引力 / ノッチ / レバーサ]*：

- **牽引力**：−100〜100。ノッチをパーセントで表し、進行方向を符号で示します。
- **ノッチ**：0〜8。
- **レバーサ**：1 = 前進、0 = 中立、−1 = 後進。
- 種類：値ブロック

#### `マスコンの状態（真偽値）` (初心者) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*マスコンが [コントロール] [前進 / 後進 / 中立 / ノッチ0] ?*

- 種類：値ブロック、`true` / `false`
