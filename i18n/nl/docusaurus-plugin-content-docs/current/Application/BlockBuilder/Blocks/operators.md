---
id: Operators
title: Operator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operator {#operators}

Operatoren zijn waarde- en booleaanse blokken voor rekenen, vergelijken, logica en tekst.

## Rekenen {#math}

### `… + …` (Beginner) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Geeft de som van twee getallen terug.

### `… − …` (Beginner) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Trekt het tweede getal af van het eerste.

### `… × …` (Beginner) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Geeft het product van twee getallen terug.

### `… ÷ …` (Beginner) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Deelt het eerste getal door het tweede.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Geeft de rest terug na het delen van het eerste getal door het tweede.

### `afronden …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rondt een getal af op het dichtstbijzijnde gehele getal (bijvoorbeeld: `2.6` wordt `3`).

### `… van …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Past een functie toe op één getal. Hoeken zijn in graden.

- `absoluutwaarde`: absolute waarde
- `geheel getal kleiner`: naar beneden afronden op een geheel getal
- `geheel getal groter`: naar boven afronden op een geheel getal
- `vierkantswortel`: vierkantswortel
- `sin`, `cos`, `tan`: sinus, cosinus en tangens van een hoek
- `asin`, `acos`, `atan`: de inverse functies; ze geven een hoek terug
- `ln`: natuurlijke logaritme (grondtal `e`)
- `log`: logaritme met grondtal 10
- `e^`: `e` tot de macht van het getal
- `10^`: `10` tot de macht van het getal

### `… van … en …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Past een functie toe op twee getallen.

- `min`: de kleinste van de twee
- `max`: de grootste van de twee
- `macht`: het eerste getal tot de macht van het tweede
- `atan2`: de hoek van het punt dat door de twee getallen wordt gegeven
- `hypot`: de lengte van de schuine zijde bij deze twee zijden
- `copysign`: het eerste getal met het teken van het tweede

### `kies willekeurig … tot …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Geeft een willekeurig getal tussen de twee waarden terug.

## Vergelijken {#comparison}

### `… = …` (Beginner) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Geeft `true` terug als de twee waarden gelijk zijn.

### `… ≠ …` (Gevorderd) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Geeft `true` terug als de twee waarden verschillen.

### `… > …` (Beginner) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Geeft `true` terug als de linkerwaarde groter is dan de rechter.

### `… < …` (Beginner) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Geeft `true` terug als de linkerwaarde kleiner is dan de rechter.

### `is … tussen … en …` (Gevorderd) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Geeft `true` terug als het getal tussen de twee grenzen ligt.

## Logica {#logic}

### `… en …` (Gevorderd) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Geeft alleen `true` terug als beide voorwaarden waar zijn.

### `… of …` (Gevorderd) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Geeft `true` terug als minstens één van de voorwaarden waar is.

### `niet …` (Gevorderd) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Maakt van `true` `false` en van `false` `true`.

## Tekst {#text}

### `verbinden … …` (Gevorderd) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Voegt twee stukken tekst samen tot één.

### `letter … van …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Geeft de letter op de opgegeven positie in de tekst terug. De eerste letter heeft nummer 1.

### `lengte van …` (Gevorderd) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Geeft het aantal tekens in de tekst terug.

### `… bevat …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Geeft `true` terug als de eerste tekst de tweede bevat.
