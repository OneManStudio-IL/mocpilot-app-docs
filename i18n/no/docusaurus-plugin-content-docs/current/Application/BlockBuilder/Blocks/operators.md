---
id: Operators
title: Operatører
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatører {#operators}

Operatører er rapporterings- og boolske blokker for matematikk, sammenligninger, logikk og tekst.

## Matematikk {#math}

### `… + …` (Nybegynner) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnerer summen av to tall.

### `… − …` (Nybegynner) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Trekker det andre tallet fra det første.

### `… × …` (Nybegynner) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnerer produktet av to tall.

### `… ÷ …` (Nybegynner) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Deler det første tallet på det andre.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnerer resten etter at det første tallet er delt på det andre.

### `rund …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Runder av et tall til nærmeste heltall (for eksempel blir `2.6` til `3`).

### `… av …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Bruker en funksjon på ett tall. Vinkler er i grader.

- `absoluttverdi`: absoluttverdi
- `heltall mindre`: runder ned til et heltall
- `heltall større`: runder opp til et heltall
- `kvadratrot`: kvadratrot
- `sin`, `cos`, `tan`: sinus, cosinus og tangens til en vinkel
- `asin`, `acos`, `atan`: de omvendte funksjonene; de returnerer en vinkel
- `ln`: naturlig logaritme (grunntall `e`)
- `log`: logaritme med grunntall 10
- `e^`: `e` opphøyd i tallet
- `10^`: `10` opphøyd i tallet

### `… av … og …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Bruker en funksjon på to tall.

- `min`: det minste av de to
- `max`: det største av de to
- `pow`: det første tallet opphøyd i det andre
- `atan2`: vinkelen til punktet som de to tallene angir
- `hypot`: lengden av hypotenusen med disse to katetene
- `copysign`: det første tallet med fortegnet til det andre

### `velg tilfeldig … til …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnerer et tilfeldig tall mellom de to verdiene.

## Sammenligning {#comparison}

### `… = …` (Nybegynner) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnerer `true` når de to verdiene er like.

### `… ≠ …` (Avansert) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnerer `true` når de to verdiene er forskjellige.

### `… > …` (Nybegynner) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnerer `true` når verdien til venstre er større enn den til høyre.

### `… < …` (Nybegynner) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnerer `true` når verdien til venstre er mindre enn den til høyre.

### `er … mellom … og …` (Avansert) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnerer `true` når tallet ligger mellom de to grensene.

## Logikk {#logic}

### `… og …` (Avansert) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnerer `true` bare når begge betingelsene er sanne.

### `… eller …` (Avansert) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnerer `true` når minst én av betingelsene er sann.

### `ikke …` (Avansert) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Gjør `true` om til `false` og `false` om til `true`.

## Tekst {#text}

### `binde … …` (Avansert) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Slår sammen to tekstbiter til én.

### `bokstav … av …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnerer bokstaven på den angitte plassen i teksten. Den første bokstaven er nummer 1.

### `lengde av …` (Avansert) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnerer antall tegn i teksten.

### `… inneholder …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnerer `true` når den første teksten inneholder den andre.
