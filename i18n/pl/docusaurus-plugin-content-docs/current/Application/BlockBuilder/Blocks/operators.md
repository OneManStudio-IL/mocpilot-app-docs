---
id: Operators
title: Operator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operator

Operatory to bloki raportujące i logiczne do obliczeń, porównań, logiki i pracy z tekstem.

## Matematyka {#math}

### `… + …` (Początkujący) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Zwraca sumę dwóch liczb.

### `… − …` (Początkujący) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Odejmuje drugą liczbę od pierwszej.

### `… × …` (Początkujący) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Zwraca iloczyn dwóch liczb.

### `… ÷ …` (Początkujący) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Dzieli pierwszą liczbę przez drugą.

### `… po modulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Zwraca resztę z dzielenia pierwszej liczby przez drugą.

### `zaokrąglić …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Zaokrągla liczbę do najbliższej liczby całkowitej (na przykład `2.6` staje się `3`).

### `… z …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Stosuje funkcję do jednej liczby. Kąty podaje się w stopniach.

- `wartość bezwzględna`: wartość bezwzględna
- `całkowita mniejsza`: zaokrąglenie w dół do liczby całkowitej
- `całkowita większa`: zaokrąglenie w górę do liczby całkowitej
- `pierwiastek kwadratowy`: pierwiastek kwadratowy
- `sin`, `cos`, `tan`: sinus, cosinus i tangens kąta
- `asin`, `acos`, `atan`: funkcje odwrotne; zwracają kąt
- `ln`: logarytm naturalny (o podstawie `e`)
- `log`: logarytm dziesiętny
- `e^`: `e` podniesione do potęgi danej liczby
- `10^`: `10` podniesione do potęgi danej liczby

### `… z … i …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Stosuje funkcję do dwóch liczb.

- `min`: mniejsza z dwóch
- `max`: większa z dwóch
- `potęga`: pierwsza liczba podniesiona do potęgi drugiej
- `atan2`: kąt punktu wyznaczonego przez dwie liczby
- `hypot`: długość przeciwprostokątnej o takich przyprostokątnych
- `copysign`: pierwsza liczba ze znakiem drugiej

### `wybierz losowo … do …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Zwraca losową liczbę z przedziału między dwiema wartościami.

## Porównanie {#comparison}

### `… = …` (Początkujący) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Zwraca `true`, gdy obie wartości są równe.

### `… ≠ …` (Zaawansowany) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Zwraca `true`, gdy obie wartości się różnią.

### `… > …` (Początkujący) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Zwraca `true`, gdy lewa wartość jest większa od prawej.

### `… < …` (Początkujący) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Zwraca `true`, gdy lewa wartość jest mniejsza od prawej.

### `jest … pomiędzy … i …` (Zaawansowany) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Zwraca `true`, gdy liczba mieści się między dwiema granicami.

## Logika {#logic}

### `… i …` (Zaawansowany) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Zwraca `true` tylko wtedy, gdy oba warunki są prawdziwe.

### `… lub …` (Zaawansowany) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Zwraca `true`, gdy co najmniej jeden z warunków jest prawdziwy.

### `nie …` (Zaawansowany) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Zamienia `true` na `false`, a `false` na `true`.

## Tekst {#text}

### `połączyć … …` (Zaawansowany) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Łączy dwa fragmenty tekstu w jeden.

### `litera … z …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Zwraca literę na podanej pozycji w tekście. Pierwsza litera ma numer 1.

### `długość …` (Zaawansowany) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Zwraca liczbę znaków w tekście.

### `… zawiera …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Zwraca `true`, gdy pierwszy tekst zawiera drugi.
