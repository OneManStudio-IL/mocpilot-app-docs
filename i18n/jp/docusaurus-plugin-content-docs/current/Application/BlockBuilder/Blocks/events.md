---
id: Events
title: イベント
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# イベント {#events}

**イベント**カテゴリには、何かが起きたときにスクリプトを開始するブロックと、スクリプト間でメッセージを送るブロックがあります。メッセージの管理には、カテゴリ上部の**メッセージを追加**と**メッセージを削除**を使います。

## 基本のイベント {#core-events}

### `プログラムが開始されたとき` (初心者) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

プログラムの開始時に、スクリプトを 1 回実行します。

- 主な用途：変数の初期値を設定する、モーターを初期状態にする、「準備完了」のメッセージを表示する。

### `いつ …` (上級者) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

スロットの条件が偽から真に変わったときに、スクリプトを実行します。スクリプトの実行中、ブロックは待機します。条件がいったん偽になり、再び真になったときにだけ、もう一度動作します。

- 主な用途：状態に反応する。例：`いつ タイマー > 5 かつ スイッチ 有効`

### `いつ タイマー > …` (上級者) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

プログラムのタイマーが指定した値（秒）を超えたときに、スクリプトを実行します。

- 主な用途：遅れて行う動作、時間で区切ったフェーズ。タイマーは**タイマーをリセット**（センサー）でリセットします。

### `受信したとき …` (達人) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

選択したメッセージが送られたときに、スクリプトを実行します。

- 主な用途：複数のスクリプトを連携させる。

### `伝える …` (達人) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

そのメッセージの**受信したとき**で始まるすべてのスクリプトにメッセージを送り、すぐに次へ進みます。

- 主な用途：ほかのスクリプトの終了を待たずに開始させる。

### `伝える … そして待つ` (達人) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

メッセージを送り、受け取ったすべてのスクリプトが終わるまで、このスクリプトを一時停止します。

- 主な用途：順番が大切な段階的な処理。

## ハブのイベント {#hub-events}

これらのブロックは、プロフィール内のハブが対応している場合に表示されます。Mould King のハブにはありません。

### `いつ … … ボタン …` (初心者) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

ハブのボタンが押されたとき、または離されたときに実行します。

- 状態の選択肢：`押された`、`解放された`、`変更された`
- ハブ：LEGO Powered Up のハブ、WeDo 2.0、Robot Inventor。ボタンの一覧はハブによって異なります。

### `いつ … です 接続済み / 切断済み` (初心者) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

ハブが接続されたとき、または切断されたときに実行します。

- 主な用途：接続が切れたらモデルを安全に止め、つながったら元の状態に戻す。

### `いつ … % バッテリーが変更されました` (初心者) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

ハブが報告するバッテリー残量が変わったときに実行します。

- ハブ：バッテリー残量を報告するハブ。
- 主な用途：バッテリー低下の警告、省電力モードへの切り替え。

### `いつ … 加速度センサーのデータが変更されました` (達人) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

ハブの加速度計の値が変わったときに実行します。

- ハブ：BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub、Robot Inventor。

### `いつ … 傾き … 角度が変更されました` (初心者) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

ハブの傾き角度が変わったときに実行します。

- 角度の選択肢：`任意`、`ピッチ`、`ロール`、`ヨー`
- ハブ：BuWizz 2、BuWizz 3、BOOST Move Hub、Technic Hub、Robot Inventor。`ヨー` は Technic Hub と Robot Inventor でのみ使えます。

### `いつ … 向きが変更されました` (初心者) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

ハブの向きが変わったとき、つまりハブの別の面が上を向いたときに実行します。

- ハブ：傾きのイベントと同じです。

## センサーのイベント {#sensor-events}

これらのイベントは、ハブのポートに接続したセンサーの値を読み取ります。ハブ：City Hub、Technic Hub、BOOST Move Hub、MINDSTORMS Robot Inventor のハブ（SBrick、BuWizz、WeDo 2.0、Mould King は非対応）。

### Technic センサー：`色が …` (初心者) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Technic カラーセンサーが選択した色を検出したときに実行します。

### Technic センサー：`いつ … より近い / より遠い / 正確に …` (初心者) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Technic 距離センサーで測った距離が条件を満たしたときに実行します。

- 比較の選択肢：`より近い`、`より遠い`、`正確に`
- 単位：`mm`、`cm`、`インチ`、`%`

### BOOST センサー：`いつ … より近い / より遠い / 正確に …` (初心者) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

BOOST カラー＆距離センサーで測った距離が条件を満たしたときに実行します。

- 比較の選択肢：`より近い`、`より遠い`、`正確に`
- 単位：`%`、`cm`、`インチ`

### BOOST センサー：`色が …` (初心者) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

BOOST カラー＆距離センサーが選択した色を検出したときに実行します。
