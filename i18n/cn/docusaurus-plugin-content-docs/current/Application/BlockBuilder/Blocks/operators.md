---
id: Operators
title: 运算符
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 运算符 {#operators}

运算符是用于数学运算、比较、逻辑和文本处理的报告积木和布尔积木。

## 数学 {#math}

### `… + …`（初学者） {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

返回两个数之和。

### `… − …`（初学者） {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

用第一个数减去第二个数。

### `… × …`（初学者） {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

返回两个数之积。

### `… ÷ …`（初学者） {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

用第一个数除以第二个数。

### `… 按模 …`（大师） {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

返回第一个数除以第二个数后的余数。

### `四舍五入 …`（大师） {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

把数四舍五入到最接近的整数（例如 `2.6` 变为 `3`）。

### `… 的 …`（大师） {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

对一个数应用函数。角度以度为单位。

- `绝对值`：绝对值
- `小于整数`：向下取整
- `大于整数`：向上取整
- `平方根`：平方根
- `sin`、`cos`、`tan`：角的正弦、余弦和正切
- `asin`、`acos`、`atan`：反函数；返回一个角度
- `ln`：自然对数（以 `e` 为底）
- `log`：以 10 为底的对数
- `e^`：`e` 的该数次幂
- `10^`：`10` 的该数次幂

### `… 的 … 和 …`（大师） {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

对两个数应用函数。

- `最小`：两者中较小的一个
- `最大`：两者中较大的一个
- `幂`：第一个数的第二个数次幂
- `atan2`：由这两个数确定的点的角度
- `hypot`：以这两个数为直角边的斜边长度
- `copysign`：取第二个数符号的第一个数

### `随机选择 … 到 …`（大师） {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

返回两个数值之间的随机数。

## 比较 {#comparison}

### `… = …`（初学者） {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

两个值相等时返回 `true`。

### `… ≠ …`（进阶） {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

两个值不同时返回 `true`。

### `… > …`（初学者） {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

左边的值大于右边的值时返回 `true`。

### `… < …`（初学者） {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

左边的值小于右边的值时返回 `true`。

### `是否 … 之间 … 和 …`（进阶） {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

数值位于两个界限之间时返回 `true`。

## 逻辑 {#logic}

### `… 和 …`（进阶） {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

只有两个条件都为真时才返回 `true`。

### `… 或 …`（进阶） {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

至少有一个条件为真时返回 `true`。

### `不 …`（进阶） {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

把 `true` 变为 `false`，把 `false` 变为 `true`。

## 文本 {#text}

### `连接 … …`（进阶） {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

把两段文本连接成一段。

### `信 … 的 …`（大师） {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

返回文本中指定位置的字符。第一个字符的位置是 1。

### `长度 …`（进阶） {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

返回文本中的字符数。

### `… 包含 …`（大师） {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

第一段文本包含第二段文本时返回 `true`。
