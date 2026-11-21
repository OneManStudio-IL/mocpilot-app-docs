---
id: Operators
title: Операторы
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Операторы

Операторы — это блоки-репортёры и логические блоки для вычислений, сравнений, логики и работы с текстом.

## Арифметика

### `… + …` (Новичок) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Возвращает сумму двух чисел.

### `… − …` (Новичок) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Вычитает второе число из первого.

### `… × …` (Новичок) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Возвращает произведение двух чисел.

### `… ÷ …` (Новичок) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Делит первое число на второе.

### `… по модулю …` (Гуру) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Возвращает остаток от деления первого числа на второе.

### `округлить …` (Гуру) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Округляет число до ближайшего целого (например, `2.6` превращается в `3`).

### `… из …` (Гуру) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Применяет функцию к одному числу. Углы задаются в градусах.

- `модуль` — абсолютное значение
- `целое меньшее` — округление вниз до целого
- `целое большее` — округление вверх до целого
- `квадратный корень`
- `sin`, `cos`, `tan` — синус, косинус и тангенс угла
- `asin`, `acos`, `atan` — обратные функции, возвращают угол
- `ln` — натуральный логарифм (по основанию `e`)
- `log` — десятичный логарифм
- `e^` — `e` в степени числа
- `10^` — `10` в степени числа

### `… из … и …` (Гуру) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Применяет функцию к двум числам.

- `мин` — меньшее из двух
- `макс` — большее из двух
- `степень` — первое число в степени второго
- `atan2` — угол точки с координатами из двух чисел
- `hypot` — длина гипотенузы с такими катетами
- `copysign` — первое число со знаком второго

### `выбрать случайно от … к …` (Гуру) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Возвращает случайное число между двумя значениями.

## Сравнение

### `… = …` (Новичок) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Возвращает `true`, если значения равны.

### `… ≠ …` (Продвинутый) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Возвращает `true`, если значения различаются.

### `… > …` (Новичок) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Возвращает `true`, если левое значение больше правого.

### `… < …` (Новичок) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Возвращает `true`, если левое значение меньше правого.

### `является … между … и …` (Продвинутый) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Возвращает `true`, если число лежит между двумя границами.

## Логика

### `… и …` (Продвинутый) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Возвращает `true`, только если оба условия истинны.

### `… или …` (Продвинутый) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Возвращает `true`, если истинно хотя бы одно из условий.

### `не …` (Продвинутый) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Превращает `true` в `false`, а `false` — в `true`.

## Текст

### `присоединить … …` (Продвинутый) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Склеивает два фрагмента текста в один.

### `буква … из …` (Гуру) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Возвращает букву, стоящую в тексте на заданном месте. Первая буква имеет номер 1.

### `длина …` (Продвинутый) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Возвращает число символов в тексте.

### `… содержит …` (Гуру) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Возвращает `true`, если первый текст содержит второй.
