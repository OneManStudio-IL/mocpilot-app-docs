---
id: Variables
title: 変数
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 変数 {#variables}

変数は、プログラム内のすべてのスクリプトから読み取りや変更ができる値を保存します。変数の作成、名前の変更、削除は、カテゴリーの上部にある**変数を作成**、**変数の名前を変更**、**変数を削除**で行います。以下のブロックは、プログラムに変数が 1 つ以上あると表示されます。

## 変数を変更する {#changing-a-variable}

### `設定する … へ …` (初心者) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

選択した変数に値を設定します。

- 主な用途：初期値の設定、以前の値の置き換え。

### `変更する … によって …` (上級者) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

選択した変数に数値を加えます。減らすときは負の数を使います。

- 主な用途：カウンター、スコア、距離や時間の合計。

## 変数を読み取る {#reading-a-variable}

### 変数 (初心者) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

変数にはそれぞれ、その名前の付いた値ブロックがあります。変数の現在の値を返します。

- 主な用途：演算子、条件、ほかのブロックの入力に値を入れます。
- プログラムの実行中は、[モニター](/docs/Application/BlockBuilder/Editor#monitor)にすべての変数の値が表示されます。
