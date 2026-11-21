---
id: Operators
title: Operátor
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operátor {#operators}

Operátory jsou hodnotové a booleovské bloky pro matematiku, porovnávání, logiku a text.

## Matematika {#math}

### `… + …` (Začátečník) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Vrací součet dvou čísel.

### `… − …` (Začátečník) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Odečte druhé číslo od prvního.

### `… × …` (Začátečník) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Vrací součin dvou čísel.

### `… ÷ …` (Začátečník) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Vydělí první číslo druhým.

### `… modulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Vrací zbytek po dělení prvního čísla druhým.

### `zaokrouhlit …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Zaokrouhlí číslo na nejbližší celé číslo (například z `2.6` se stane `3`).

### `… z …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Použije funkci na jedno číslo. Úhly jsou ve stupních.

- `absolutní hodnota`: absolutní hodnota
- `celé menší`: zaokrouhlení dolů na celé číslo
- `celé větší`: zaokrouhlení nahoru na celé číslo
- `odmocnina`: druhá odmocnina
- `sin`, `cos`, `tan`: sinus, kosinus a tangens úhlu
- `asin`, `acos`, `atan`: inverzní funkce; vracejí úhel
- `ln`: přirozený logaritmus (o základu `e`)
- `log`: dekadický logaritmus
- `e^`: `e` umocněné na dané číslo
- `10^`: `10` umocněné na dané číslo

### `… z … a …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Použije funkci na dvě čísla.

- `min`: menší z obou
- `max`: větší z obou
- `mocnina`: první číslo umocněné na druhé
- `atan2`: úhel bodu určeného oběma čísly
- `hypot`: délka přepony s těmito dvěma odvěsnami
- `copysign`: první číslo se znaménkem druhého

### `vybrat náhodně … k …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Vrací náhodné číslo mezi oběma hodnotami.

## Porovnávání {#comparison}

### `… = …` (Začátečník) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Vrací `true`, když se obě hodnoty rovnají.

### `… ≠ …` (Pokročilý) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Vrací `true`, když se obě hodnoty liší.

### `… > …` (Začátečník) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Vrací `true`, když je levá hodnota větší než pravá.

### `… < …` (Začátečník) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Vrací `true`, když je levá hodnota menší než pravá.

### `je … mezi … a …` (Pokročilý) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Vrací `true`, když číslo leží mezi oběma mezemi.

## Logika {#logic}

### `… a …` (Pokročilý) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Vrací `true`, jen když jsou obě podmínky pravdivé.

### `… nebo …` (Pokročilý) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Vrací `true`, když je pravdivá alespoň jedna z podmínek.

### `ne …` (Pokročilý) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Změní `true` na `false` a `false` na `true`.

## Text {#text}

### `spojit … …` (Pokročilý) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Spojí dva kusy textu do jednoho.

### `písmeno … z …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Vrací písmeno na zadané pozici v textu. První písmeno má číslo 1.

### `délka …` (Pokročilý) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Vrací počet znaků v textu.

### `… obsahuje …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Vrací `true`, když první text obsahuje druhý.
