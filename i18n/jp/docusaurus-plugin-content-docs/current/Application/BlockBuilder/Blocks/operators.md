---
id: Operators
title: 演算子
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 演算子 {#operators}

演算子は、計算・比較・論理演算・テキスト処理を行う値ブロックと真偽値ブロックです。

## 計算 {#math}

### `… + …` (初心者) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

2 つの数の和を返します。

### `… − …` (初心者) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

1 つ目の数から 2 つ目の数を引きます。

### `… × …` (初心者) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

2 つの数の積を返します。

### `… ÷ …` (初心者) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

1 つ目の数を 2 つ目の数で割ります。

### `… 剰余で …` (達人) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

1 つ目の数を 2 つ目の数で割った余りを返します。

### `四捨五入 …` (達人) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

数を最も近い整数に丸めます（たとえば `2.6` は `3` になります）。

### `… の …` (達人) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

1 つの数に関数を適用します。角度の単位は度です。

- `絶対値`：絶対値
- `整数より小さい`：整数に切り捨て
- `整数より大きい`：整数に切り上げ
- `平方根`：平方根
- `sin`、`cos`、`tan`：角度の正弦・余弦・正接
- `asin`、`acos`、`atan`：逆関数。角度を返します
- `ln`：自然対数（底 `e`）
- `log`：常用対数（底 10）
- `e^`：`e` のその数乗
- `10^`：`10` のその数乗

### `… の … かつ …` (達人) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

2 つの数に関数を適用します。

- `最小`：2 つのうち小さいほう
- `最大`：2 つのうち大きいほう
- `累乗`：1 つ目の数の、2 つ目の数乗
- `atan2`：2 つの数で表される点の角度
- `hypot`：この 2 辺をもつ直角三角形の斜辺の長さ
- `copysign`：1 つ目の数に 2 つ目の数の符号を付けたもの

### `ランダムに選ぶ … へ …` (達人) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

2 つの値のあいだの乱数を返します。

## 比較 {#comparison}

### `… = …` (初心者) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

2 つの値が等しいときに `true` を返します。

### `… ≠ …` (上級者) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

2 つの値が異なるときに `true` を返します。

### `… > …` (初心者) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

左の値が右の値より大きいときに `true` を返します。

### `… < …` (初心者) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

左の値が右の値より小さいときに `true` を返します。

### `が … の間に … かつ …` (上級者) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

数が 2 つの境界値のあいだにあるときに `true` を返します。

## 論理 {#logic}

### `… かつ …` (上級者) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

両方の条件が真のときだけ `true` を返します。

### `… または …` (上級者) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

少なくとも一方の条件が真のときに `true` を返します。

### `ではない …` (上級者) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

`true` を `false` に、`false` を `true` に反転します。

## テキスト {#text}

### `結合する … …` (上級者) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

2 つのテキストを 1 つにつなげます。

### `文字 … の …` (達人) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

テキストの指定した位置にある文字を返します。最初の文字が 1 番目です。

### `の長さ …` (上級者) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

テキストの文字数を返します。

### `… 含む …` (達人) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

1 つ目のテキストに 2 つ目のテキストが含まれているときに `true` を返します。
