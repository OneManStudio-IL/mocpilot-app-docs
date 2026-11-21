---
id: Operators
title: Оператори
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Оператори {#operators}

Оператори — це блоки-репортери та булеві блоки для математики, порівнянь, логіки й тексту.

## Математика {#math}

### `… + …` (Початківець) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Повертає суму двох чисел.

### `… − …` (Початківець) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Віднімає друге число від першого.

### `… × …` (Початківець) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Повертає добуток двох чисел.

### `… ÷ …` (Початківець) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Ділить перше число на друге.

### `… по модулю …` (Гуру) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Повертає остачу від ділення першого числа на друге.

### `округлити …` (Гуру) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Округлює число до найближчого цілого (наприклад, `2.6` стає `3`).

### `… з …` (Гуру) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Застосовує функцію до одного числа. Кути — в градусах.

- `модуль`: абсолютне значення
- `ціле менше`: округлення вниз до цілого
- `ціле більше`: округлення вгору до цілого
- `квадратний корінь`: квадратний корінь
- `sin`, `cos`, `tan`: синус, косинус і тангенс кута
- `asin`, `acos`, `atan`: обернені функції; повертають кут
- `ln`: натуральний логарифм (за основою `e`)
- `log`: десятковий логарифм
- `e^`: `e` у степені цього числа
- `10^`: `10` у степені цього числа

### `… з … і …` (Гуру) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Застосовує функцію до двох чисел.

- `мін`: менше з двох
- `макс`: більше з двох
- `степінь`: перше число в степені другого
- `atan2`: кут точки, заданої двома числами
- `hypot`: довжина гіпотенузи з такими катетами
- `copysign`: перше число зі знаком другого

### `вибрати випадково від … до …` (Гуру) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Повертає випадкове число між двома значеннями.

## Порівняння {#comparison}

### `… = …` (Початківець) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Повертає `true`, коли два значення рівні.

### `… ≠ …` (Просунутий) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Повертає `true`, коли два значення різні.

### `… > …` (Початківець) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Повертає `true`, коли ліве значення більше за праве.

### `… < …` (Початківець) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Повертає `true`, коли ліве значення менше за праве.

### `є … між … і …` (Просунутий) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Повертає `true`, коли число лежить між двома межами.

## Логіка {#logic}

### `… і …` (Просунутий) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Повертає `true`, лише коли обидві умови істинні.

### `… або …` (Просунутий) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Повертає `true`, коли істинна хоча б одна з умов.

### `не …` (Просунутий) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Перетворює `true` на `false`, а `false` — на `true`.

## Текст {#text}

### `приєднати … …` (Просунутий) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Об’єднує два фрагменти тексту в один.

### `літера … з …` (Гуру) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Повертає літеру в заданій позиції тексту. Перша літера має номер 1.

### `довжина …` (Просунутий) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Повертає кількість символів у тексті.

### `… містить …` (Гуру) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Повертає `true`, коли перший текст містить другий.
