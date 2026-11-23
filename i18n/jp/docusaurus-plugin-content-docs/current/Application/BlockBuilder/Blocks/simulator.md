---
id: Simulator
title: シミュレーター
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# シミュレーター {#simulator}

**シミュレーター**は、ダッシュボードのペダル、ギアボックス、サイドブレーキを、本物のように振る舞う車に変えます。慣性で加速し、惰性で走り、ブレーキをかけ、後退し、ギアを切り替えます。コントロール自体は生の値を出すだけで、プログラムがその値から車を組み立て、速度をモーターに送ります。

このカテゴリーは、ダッシュボードにペダル、ギアボックス、サイドブレーキのいずれかがあるときに表示されます。これらのコントロールを読み取るブロックについては[ダッシュボードコントローラー](/docs/Application/BlockBuilder/Blocks/DashboardControllers)を参照してください。

## 車両 {#vehicles}

カテゴリーの上部にある**車両を作成**を押し、名前を付けます（例：「車両 1」）。プログラムに車両が 1 台以上あるとブロックが表示され、各ブロックでどの車両を扱うかを選びます。管理には**車両の名前を変更**と**車両を削除**を使います。ブロックがプログラムで使われている車両は削除できません。また、シミュレーターのブロックを使っている間は、最後のペダル、ギアボックス、サイドブレーキをダッシュボードから削除できません。

<Screenshot name="blocks-simulator" alt="ペダルのイベントに運転ブロックをつないだシミュレーターカテゴリー" width={900} />

典型的な車の組み方：ペダルのイベントに**運転**をつなぎ、ペダルを `アクセル` と `ブレーキ` に接続し、その中で駆動モーターを車両の `速度` で起動します。

```text
ペダルが PDL1 任意 です 移動
    車両 1  運転  アクセル (ペダル PDL1 加速)  ブレーキ (ペダル PDL1 ブレーキ)
        モーターを起動（設定値） (速度 の 車両 1) 速度 %  (ハブ 1、ポート A)
```

`いつも繰り返す` ループは必要ありません。**運転**は車が止まるまで自動で動き続けます。

## ブロック {#blocks}

### `… 運転 アクセル … ブレーキ … ギア … / … サイドブレーキ … ロック … トランスファー …` (初心者) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

シミュレーターの中心となるブロックです。車両を運転する C ブロックで、0.1 秒ごとに入力を読み取り、車を 1 ステップ動かし、中のブロックを実行します（モーターのブロックはここに入れます）。車が停止して何も押されていない状態になると終了します。このとき、モーターに最終値が届くよう中のブロックが最後にもう一度実行されます。

- `アクセル` と `ブレーキ`：各ペダルの踏み込み量（0〜100）。
- `ギア`：選択中のギア。`-1` が後退、`0` がニュートラル、`1` 以上が前進です。このスロットにオートマチック変速機のコントロールを入れると、代わりにセレクターの位置（P、R、N、D）が使われ、D では車が自動でギアを選びます。
- `/`：ギアボックスのギア数（初期値は 6）。
- `サイドブレーキ`：サイドブレーキの引き具合（0〜100）。`ロック`：ロックされているかどうか。
- `トランスファー`（省略可）：[トランスファー](/docs/Application/Dashboard/SpecialControls#transfer-case)のポジション。通常は[トランスファーの位置](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float)ブロックを入れます。`0` が 2H、`1` が 4H、`2` が N、`3` が 4L です。2H と 4H では、トランスファーがないときと同じように走ります。N では走りません（惰性で進み、ブレーキは減速させるだけで後退はしません）。4L では速度が 40 % に制限されます。モデルにトランスファーがない場合は空のままにします。
- 入力はブロックを入れたときだけ有効です。空のスロットに直接入力した数値は無視されます（`/` を除く）。
- 1 台の車両を運転できる**運転**ブロックは同時に 1 つだけです。同じ車両に対する 2 つ目のブロックは、中のブロックを実行しません。

### `設定 … タイプを …` (初心者) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

車両のエンジンを車種に合わせて調整します。惰性で走り続ける長さ（慣性）、後退時の最高速度、エアブレーキの有無が変わります。

- タイプ：`乗用車`、`オフロード車`、`スポーツカー`、`トラック`（トラックにはエアブレーキがあります）

### `設定 … … を … %` (上級者) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

エンジンの設定を 1 つ変更します。

- `エンジン慣性`：値が大きいほど、アクセルを離した後も長く走り続けます（0 で慣性なし）。
- `後退速度`：後退時の最高速度。

### `設定 … … を …` (上級者) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

車両のオプションを 1 つオンまたはオフにします。

- `ブレーキで後退`：ペダルのみの場合、停止中にブレーキを踏み続けると後退します。
- `ギアで速度を制限`：ギアごとに最高速度が決まります。
- `サイドブレーキで保持`：ロックしたサイドブレーキで車をその場に止めておきます。
- `エアブレーキ`：トラックのエアブレーキ（「エアを排出した」イベントが発生します）。
- `オートマチック変速機`：`ギア` 入力をオートマチックのセレクターとして扱います。

### `リセット …` (上級者) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

車両をその場で停止させ、状態をリセットします。

### `… の …` (初心者) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

車両の値を 1 つ返します。

- `速度`：−100〜100（後退中は負の値）。そのままモーターの速度スロットに使えます。
- `エンジン回転数`：0〜100。タコメーターやエンジン音に使います。
- `ギア`：現在のギア（`-1` が後退、`0` がニュートラル、続いて `1`、`2`…）。

### `状態 … … ？` (初心者) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

車両が選択した状態にあるとき `true` を返します。

- 状態：`走行中`、`ブレーキ中`、`サイドブレーキ中`

### `次のとき: … …` (初心者) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

車両に何かが起きたときにスクリプトを実行します。

- イベント：`発進した`、`停止した`、`ブレーキを開始した`、`ブレーキを終了した`、`急ブレーキをかけた`、`エアを排出した`、`ギアを変える`
- 主な用途：サウンドの再生。たとえば `エアを排出した` でエアブレーキの排気音、`急ブレーキをかけた` でスキール音を鳴らします（[サウンド](/docs/Application/BlockBuilder/Blocks/Sounds)を参照）。
