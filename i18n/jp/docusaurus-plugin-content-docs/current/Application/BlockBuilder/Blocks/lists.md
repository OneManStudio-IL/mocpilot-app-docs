---
id: Lists
title: リスト
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# リスト {#lists}

リストは複数の値を順番に保存します。リストの作成、名前の変更、削除は、カテゴリーの上部にある**リストを作成**、**リストの名前を変更**、**リストを削除**で行います。以下のブロックは、プログラムにリストが 1 つ以上あると表示されます。項目の番号は 1 から始まります。

## リストを変更する {#changing-a-list}

### `追加する … へ …` (上級者) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

リストの末尾に値を追加します。

### `挿入する … で … の …` (達人) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

指定した位置に値を挿入します。それ以降の項目は 1 つずつ後ろにずれます。

### `アイテムを置き換える … の … と …` (達人) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

指定した位置の項目を新しい値に置き換えます。

### `削除する … から …` (上級者) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

指定した位置の項目を削除します。

### `クリア …` (上級者) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

リストからすべての項目を削除します。

## リストを読み取る {#reading-a-list}

### `アイテム … の …` (上級者) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

指定した位置の項目を返します。

### `インデックス … 中で …` (達人) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

値と等しい最初の項目の位置を返します。見つからない場合は `0` を返します。

### `… 含む …` (達人) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

リストに値が含まれているとき `true` を返します。

### `のサイズ …` (上級者) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

リストの項目数を返します。

### リスト (上級者) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

リストにはそれぞれ、その名前の付いた値ブロックがあります。リスト全体をテキストとして返します。

- 出力例：`[item1,item2,item3]`。空のリストは空のテキストになります。
- 主な用途：リストをモニターに表示したり、リストを受け取るブロック（たとえば距離センサーのライト用の**点灯**）に渡したりします。
