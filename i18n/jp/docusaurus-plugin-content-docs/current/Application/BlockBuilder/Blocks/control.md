---
id: Control
title: コントロール
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# コントロール {#control}

コントロールブロックは、スクリプトの実行の流れを決めます。待機、繰り返し、分岐、停止などです。プロフィールにハブがある場合は、ハブの接続や設定変更を行うブロックもこのカテゴリーに入ります。

## 待機ブロック {#wait-blocks}

### `待つ … 秒` (初心者) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

指定した秒数だけスクリプトを一時停止します。

### `まで待つ …` (上級者) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

条件が真になるまでスクリプトを一時停止します。

## 繰り返し {#loops}

### `繰り返す …` (上級者) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

中のブロックを指定した回数（初期値は 10 回）実行します。

### `～まで繰り返す …` (上級者) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

条件が真になるまで、中のブロックを繰り返し実行します。

### `いつも繰り返す` (上級者) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

スクリプトまたはプログラムが止まるまで、中のブロックを何度でも実行します。下にはブロックをつなげられません。

## 分岐 {#branches}

### `もし … その後` (初心者) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

条件が真のときだけ、中のブロックを実行します。

### `もし … その後 … 他の` (上級者) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

条件が真なら 1 つ目の分岐を、そうでなければ 2 つ目の分岐を実行します。

### `これをやる … そしてこれ` (達人) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

1 つ目のブロック群、続いて 2 つ目のブロック群を実行し、そのあとで下のブロックへ進みます。

## 停止 {#stopping}

### `停止 …` (初心者) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

スクリプトを止めます。何を止めるかは選択肢によって変わります。

- `すべて`：すべてのスクリプトを止めます。
- `このスタック`：このスクリプトだけを止めます。
- `プログラムを終了し、`：プログラムを停止します。

### `他のスタックを停止する` (達人) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

実行中のほかのスクリプトをすべて止めます。このスクリプトは動き続けます。

## ハブブロック {#hub-blocks}

### `接続 / 切断 …` (初心者) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

選んだハブをプログラムに接続、またはプログラムから切断します。

- 選択肢：`接続`、`切断`
- ハブ：すべて。

### `… 接続済み` (初心者) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

選んだハブが接続されているときに `true` を返します。

- 種類：真偽値ブロック
- ハブ：すべて。

### `設定する … 設定を …` (上級者) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

ハブをいずれかの構成に切り替えます。

- ハブ：Technic Move Hub（現在、構成をもつ唯一のハブです）。
- 主な使い方：次のブロックを実行する前に、ハブを別の構成に切り替える。

### `取得する … 設定を次の形式で …` (上級者) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

ハブの現在の構成を返します。

- 種類：値ブロック
- 出力：`テキスト` または `インデックス`
- ハブ：Technic Move Hub。
- ハブが接続されていないか、構成がない場合は `NaN` を返します。

### `設定する … 電源モードを …` (初心者) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

BuWizz 2 のパワーモードを設定します。

- モード：`遅い`、`通常`、`速い`、`Ludicrous`
- ハブ：BuWizz 2。

### `取得する … 電源モードとして …` (達人) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

BuWizz 2 の現在のパワーモードを返します。

- 出力：`テキスト` または `インデックス`
- ハブ：BuWizz 2。

### `設定する … 制御チャンネルを …` (上級者) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Mould King ハブの制御チャンネルを設定します。

- チャンネル：`A`、`B`、`C`
- ハブ：Mould King 4.0 と 6.0。

### `取得する … 制御チャンネルとして …` (上級者) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Mould King ハブの現在の制御チャンネルを返します。

- 出力：`テキスト` または `インデックス`
- ハブ：Mould King 4.0 と 6.0。
