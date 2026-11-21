---
id: Operators
title: Operatorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatorer {#operators}

Operatorer är rapport- och booleska block för matematik, jämförelser, logik och text.

## Matematik {#math}

### `… + …` (Nybörjare) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerar summan av två tal.

### `… − …` (Nybörjare) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Drar det andra talet från det första.

### `… × …` (Nybörjare) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerar produkten av två tal.

### `… ÷ …` (Nybörjare) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Delar det första talet med det andra.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerar resten när det första talet delas med det andra.

### `avrunda …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Avrundar ett tal till närmaste heltal (till exempel blir `2.6` till `3`).

### `… av …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Tillämpar en funktion på ett tal. Vinklar anges i grader.

- `absolutvärde`: absolutbelopp
- `heltal mindre`: avrunda nedåt till ett heltal
- `heltal större`: avrunda uppåt till ett heltal
- `kvadratrot`: kvadratroten
- `sin`, `cos`, `tan`: sinus, cosinus och tangens för en vinkel
- `asin`, `acos`, `atan`: inversfunktionerna; de returnerar en vinkel
- `ln`: naturlig logaritm (bas `e`)
- `log`: tiologaritm
- `e^`: `e` upphöjt till talet
- `10^`: `10` upphöjt till talet

### `… av … och …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Tillämpar en funktion på två tal.

- `min`: det minsta av de två
- `max`: det största av de två
- `potens`: det första talet upphöjt till det andra
- `atan2`: vinkeln för punkten som ges av de två talen
- `hypot`: hypotenusans längd med dessa två kateter
- `copysign`: det första talet med det andras tecken

### `välj slumpmässigt … till …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerar ett slumptal mellan de två värdena.

## Jämförelse {#comparison}

### `… = …` (Nybörjare) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerar `true` när de två värdena är lika.

### `… ≠ …` (Avancerad) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerar `true` när de två värdena skiljer sig åt.

### `… > …` (Nybörjare) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerar `true` när det vänstra värdet är större än det högra.

### `… < …` (Nybörjare) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerar `true` när det vänstra värdet är mindre än det högra.

### `är … mellan … och …` (Avancerad) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerar `true` när talet ligger mellan de två gränserna.

## Logik {#logic}

### `… och …` (Avancerad) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerar `true` bara när båda villkoren är sanna.

### `… eller …` (Avancerad) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerar `true` när minst ett av villkoren är sant.

### `inte …` (Avancerad) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Gör `true` till `false` och `false` till `true`.

## Text {#text}

### `ansluta … …` (Avancerad) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Slår ihop två textstycken till ett.

### `bokstav … av …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerar bokstaven på angiven position i texten. Den första bokstaven har nummer 1.

### `längd av …` (Avancerad) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerar antalet tecken i texten.

### `… innehåller …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerar `true` när den första texten innehåller den andra.
