---
id: Operators
title: Operatore
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatore {#operators}

Gli operatori sono blocchi valore e booleani per calcoli, confronti, logica e testo.

## Matematica {#math}

### `… + …` (Principiante) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Restituisce la somma di due numeri.

### `… − …` (Principiante) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Sottrae il secondo numero dal primo.

### `… × …` (Principiante) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Restituisce il prodotto di due numeri.

### `… ÷ …` (Principiante) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Divide il primo numero per il secondo.

### `… per modulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Restituisce il resto della divisione del primo numero per il secondo.

### `arrotondare …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Arrotonda un numero all'intero più vicino (ad esempio `2.6` diventa `3`).

### `… di …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Applica una funzione a un numero. Gli angoli sono in gradi.

- `valore assoluto`: valore assoluto
- `intero minore`: arrotonda per difetto a un numero intero
- `intero maggiore`: arrotonda per eccesso a un numero intero
- `radice quadrata`: radice quadrata
- `sin`, `cos`, `tan`: seno, coseno e tangente di un angolo
- `asin`, `acos`, `atan`: le funzioni inverse; restituiscono un angolo
- `ln`: logaritmo naturale (in base `e`)
- `log`: logaritmo in base 10
- `eˆ`: `e` elevato alla potenza del numero
- `10ˆ`: `10` elevato alla potenza del numero

### `… di … e …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Applica una funzione a due numeri.

- `min`: il minore dei due
- `max`: il maggiore dei due
- `potenza`: il primo numero elevato alla potenza del secondo
- `atan2`: l'angolo del punto definito dai due numeri
- `hypot`: la lunghezza dell'ipotenusa con questi due cateti
- `copysign`: il primo numero con il segno del secondo

### `scegliere casualmente … a …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Restituisce un numero casuale compreso tra i due valori.

## Confronto {#comparison}

### `… = …` (Principiante) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Restituisce `true` quando i due valori sono uguali.

### `… ≠ …` (Avanzato) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Restituisce `true` quando i due valori sono diversi.

### `… > …` (Principiante) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Restituisce `true` quando il valore a sinistra è maggiore di quello a destra.

### `… < …` (Principiante) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Restituisce `true` quando il valore a sinistra è minore di quello a destra.

### `è … tra … e …` (Avanzato) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Restituisce `true` quando il numero è compreso tra i due limiti.

## Logica {#logic}

### `… e …` (Avanzato) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Restituisce `true` solo quando entrambe le condizioni sono vere.

### `… o …` (Avanzato) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Restituisce `true` quando almeno una delle condizioni è vera.

### `non …` (Avanzato) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Trasforma `true` in `false` e `false` in `true`.

## Testo {#text}

### `unire … …` (Avanzato) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Unisce due testi in uno.

### `lettera … di …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Restituisce la lettera nella posizione indicata del testo. La prima lettera è la numero 1.

### `lunghezza di …` (Avanzato) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Restituisce il numero di caratteri del testo.

### `… contiene …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Restituisce `true` quando il primo testo contiene il secondo.
