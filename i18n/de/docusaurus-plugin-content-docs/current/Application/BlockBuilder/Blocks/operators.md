---
id: Operators
title: Operator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operator {#operators}

Operatoren sind Werte- und boolesche Blöcke für Mathematik, Vergleiche, Logik und Text.

## Mathematik {#math}

### `… + …` (Anfänger) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Liefert die Summe zweier Zahlen.

### `… − …` (Anfänger) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Zieht die zweite Zahl von der ersten ab.

### `… × …` (Anfänger) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Liefert das Produkt zweier Zahlen.

### `… ÷ …` (Anfänger) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Teilt die erste Zahl durch die zweite.

### `… modulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Liefert den Rest der Division der ersten Zahl durch die zweite.

### `runden …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rundet eine Zahl auf die nächste ganze Zahl (zum Beispiel wird aus `2.6` die `3`).

### `… von …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Wendet eine Funktion auf eine Zahl an. Winkel sind in Grad angegeben.

- `Betrag`: Absolutwert
- `ganzzahliger kleiner`: auf eine ganze Zahl abrunden
- `ganzzahliger größer`: auf eine ganze Zahl aufrunden
- `Quadratwurzel`: Quadratwurzel
- `sin`, `cos`, `tan`: Sinus, Kosinus und Tangens eines Winkels
- `asin`, `acos`, `atan`: die Umkehrfunktionen; sie liefern einen Winkel
- `ln`: natürlicher Logarithmus (Basis `e`)
- `log`: Zehnerlogarithmus
- `e^`: `e` hoch die Zahl
- `10^`: `10` hoch die Zahl

### `… von … und …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Wendet eine Funktion auf zwei Zahlen an.

- `min`: die kleinere der beiden
- `max`: die größere der beiden
- `Potenz`: die erste Zahl hoch die zweite
- `atan2`: der Winkel des Punkts, der durch die beiden Zahlen gegeben ist
- `hypot`: die Länge der Hypotenuse mit diesen beiden Seiten
- `copysign`: die erste Zahl mit dem Vorzeichen der zweiten

### `zufällig wählen … bis …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Liefert eine Zufallszahl zwischen den beiden Werten.

## Vergleich {#comparison}

### `… = …` (Anfänger) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Liefert `true`, wenn die beiden Werte gleich sind.

### `… ≠ …` (Fortgeschritten) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Liefert `true`, wenn die beiden Werte verschieden sind.

### `… > …` (Anfänger) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Liefert `true`, wenn der linke Wert größer als der rechte ist.

### `… < …` (Anfänger) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Liefert `true`, wenn der linke Wert kleiner als der rechte ist.

### `ist … zwischen … und …` (Fortgeschritten) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Liefert `true`, wenn die Zahl zwischen den beiden Grenzen liegt.

## Logik {#logic}

### `… und …` (Fortgeschritten) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Liefert `true` nur, wenn beide Bedingungen wahr sind.

### `… oder …` (Fortgeschritten) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Liefert `true`, wenn mindestens eine der Bedingungen wahr ist.

### `nicht …` (Fortgeschritten) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Macht aus `true` ein `false` und aus `false` ein `true`.

## Text {#text}

### `verbinden … …` (Fortgeschritten) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Verbindet zwei Textstücke zu einem.

### `Buchstabe … von …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Liefert den Buchstaben an der angegebenen Position im Text. Der erste Buchstabe hat die Nummer 1.

### `Länge von …` (Fortgeschritten) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Liefert die Anzahl der Zeichen im Text.

### `… enthält …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Liefert `true`, wenn der erste Text den zweiten enthält.
