---
id: Operators
title: Operator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operator {#operators}

Operatorer er rapporterings- og booleske blokke til matematik, sammenligninger, logik og tekst.

## Matematik {#math}

### `… + …` (Begynder) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerer summen af to tal.

### `… − …` (Begynder) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Trækker det andet tal fra det første.

### `… × …` (Begynder) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerer produktet af to tal.

### `… ÷ …` (Begynder) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Dividerer det første tal med det andet.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerer resten efter division af det første tal med det andet.

### `afrund …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Afrunder et tal til nærmeste hele tal (for eksempel bliver `2.6` til `3`).

### `… af …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Anvender en funktion på ét tal. Vinkler angives i grader.

- `absolutværdi`: absolut værdi
- `heltal mindre`: rund ned til et helt tal
- `heltal større`: rund op til et helt tal
- `kvadratrod`: kvadratrod
- `sin`, `cos`, `tan`: sinus, cosinus og tangens til en vinkel
- `asin`, `acos`, `atan`: de omvendte funktioner; de returnerer en vinkel
- `ln`: naturlig logaritme (grundtal `e`)
- `log`: titalslogaritme
- `e^`: `e` opløftet til tallets potens
- `10^`: `10` opløftet til tallets potens

### `… af … og …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Anvender en funktion på to tal.

- `min`: det mindste af de to
- `max`: det største af de to
- `potens`: det første tal opløftet til det andets potens
- `atan2`: vinklen til det punkt, de to tal angiver
- `hypot`: længden af hypotenusen med disse to sider
- `copysign`: det første tal med det andets fortegn

### `vælg tilfældigt … til …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerer et tilfældigt tal mellem de to værdier.

## Sammenligning {#comparison}

### `… = …` (Begynder) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerer `true`, når de to værdier er ens.

### `… ≠ …` (Avanceret) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerer `true`, når de to værdier er forskellige.

### `… > …` (Begynder) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerer `true`, når den venstre værdi er større end den højre.

### `… < …` (Begynder) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerer `true`, når den venstre værdi er mindre end den højre.

### `er … mellem … og …` (Avanceret) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerer `true`, når tallet ligger mellem de to grænser.

## Logik {#logic}

### `… og …` (Avanceret) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerer kun `true`, når begge betingelser er sande.

### `… eller …` (Avanceret) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerer `true`, når mindst én af betingelserne er sand.

### `ikke …` (Avanceret) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Gør `true` til `false` og `false` til `true`.

## Tekst {#text}

### `slutte … …` (Avanceret) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Sætter to tekststykker sammen til ét.

### `bogstav … af …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerer bogstavet på den angivne position i teksten. Det første bogstav er nummer 1.

### `længde af …` (Avanceret) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerer antallet af tegn i teksten.

### `… indeholder …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerer `true`, når den første tekst indeholder den anden.
