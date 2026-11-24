---
id: Gamepad
title: ゲームパッド
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ゲームパッド {#gamepad}

ゲームパッドブロックは、ゲームコントローラーの操作に反応し、ボタン、スティック、トリガーの状態を読み取ります。このカテゴリーは、[ゲームパッドのページ](/docs/Application/Dashboard/Gamepad)で**ゲームパッドブロックを有効にする**をオンにすると表示されます。ボタン名はコントローラーの配置（Xbox または Sony）に従います。

## イベント {#events}

### `とき … が …` (初心者) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

選択したボタンが押されたとき、または離されたときに実行されます。

- ボタン（Xbox 配置）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- ボタン（Sony 配置）：`クロス`、`サークル`、`四角`、`三角形`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状態：`押された`、`離された`

### `D-Padの場合 … ボタン …` (初心者) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

十字キーのボタンが押されたとき、または離されたときに実行されます。

- 方向：`上`、`下`、`左`、`右`
- 状態：`押された`、`離された`

### `とき … スティック …` (初心者) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

スティックがある方向に倒されたとき、動かされたとき、または離されたときに実行されます。

- スティック：`左`、`右`
- 状態：`上`、`下`、`左`、`右`、`移動`、`離された`
- 主な用途：スティックの動きに反応し、スティックを離したらモデルを停止させたり中央に戻したりします。

## 値 {#values}

### `が … …` (初心者) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

選択したボタンが選択した状態にあるとき `true` を返します。

- ボタン（Xbox 配置）：`A`、`B`、`X`、`Y`、`LB`、`RB`、`LT`、`RT`、`LSB`、`RSB`
- ボタン（Sony 配置）：`クロス`、`サークル`、`四角`、`三角形`、`L1`、`R1`、`L2`、`R2`、`L3`、`R3`
- 状態：`押された`、`離された`

### `D-Pad … ボタン …` (初心者) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

選択した十字キーのボタンが選択した状態にあるとき `true` を返します。

- 方向：`上`、`下`、`左`、`右`
- 状態：`押された`、`離された`

### `スティック … …` (初心者) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

スティックの 1 つの軸に沿った位置を返します。

- スティック：`左`、`右`
- 軸：`X軸`、`Y軸`
- 範囲：初期設定では `-1`〜`1`。ゲームパッドのページの**ゲームパッドの値の範囲**で選択すれば `-100`〜`100` になります。

### `… 圧力` (初心者) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

トリガーの押し込み量を返します。

- トリガー（Xbox 配置）：`LT`、`RT`
- トリガー（Sony 配置）：`L2`、`R2`
- 範囲：初期設定では `0`（離した状態）〜`1`。**ゲームパッドの値の範囲**を広くすると `0`〜`100` になります。
