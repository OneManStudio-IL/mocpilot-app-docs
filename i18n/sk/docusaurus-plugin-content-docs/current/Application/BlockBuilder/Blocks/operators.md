---
id: Operators
title: Operátor
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operátor {#operators}

Operátory sú hlásiace a booleovské bloky na matematiku, porovnávanie, logiku a text.

## Matematika {#math}

### `… + …` (Začiatočník) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Vráti súčet dvoch čísel.

### `… − …` (Začiatočník) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Odčíta druhé číslo od prvého.

### `… × …` (Začiatočník) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Vráti súčin dvoch čísel.

### `… ÷ …` (Začiatočník) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Vydelí prvé číslo druhým.

### `… po módulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Vráti zvyšok po delení prvého čísla druhým.

### `zaokrúhliť …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Zaokrúhli číslo na najbližšie celé číslo (napríklad z `2.6` bude `3`).

### `… z …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Použije funkciu na jedno číslo. Uhly sú v stupňoch.

- `absolútna hodnota`: absolútna hodnota
- `celé menšie`: zaokrúhlenie nadol na celé číslo
- `celé väčšie`: zaokrúhlenie nahor na celé číslo
- `druhá odmocnina`: druhá odmocnina
- `sin`, `cos`, `tan`: sínus, kosínus a tangens uhla
- `asin`, `acos`, `atan`: inverzné funkcie; vracajú uhol
- `ln`: prirodzený logaritmus (so základom `e`)
- `log`: dekadický logaritmus
- `e^`: `e` umocnené na dané číslo
- `10^`: `10` umocnené na dané číslo

### `… z … a …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Použije funkciu na dve čísla.

- `min`: menšie z dvoch čísel
- `max`: väčšie z dvoch čísel
- `mocnina`: prvé číslo umocnené na druhé
- `atan2`: uhol bodu daného dvoma číslami
- `hypot`: dĺžka prepony s týmito dvoma odvesnami
- `copysign`: prvé číslo so znamienkom druhého

### `vybrať náhodne … do …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Vráti náhodné číslo medzi dvoma hodnotami.

## Porovnávanie {#comparison}

### `… = …` (Začiatočník) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Vráti `true`, keď sa dve hodnoty rovnajú.

### `… ≠ …` (Pokročilý) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Vráti `true`, keď sú dve hodnoty rôzne.

### `… > …` (Začiatočník) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Vráti `true`, keď je ľavá hodnota väčšia ako pravá.

### `… < …` (Začiatočník) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Vráti `true`, keď je ľavá hodnota menšia ako pravá.

### `je … medzi … a …` (Pokročilý) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Vráti `true`, keď číslo leží medzi dvoma hranicami.

## Logika {#logic}

### `… a …` (Pokročilý) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Vráti `true`, iba keď sú obe podmienky pravdivé.

### `… alebo …` (Pokročilý) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Vráti `true`, keď je pravdivá aspoň jedna z podmienok.

### `nie …` (Pokročilý) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Zmení `true` na `false` a `false` na `true`.

## Text {#text}

### `pripojiť … …` (Pokročilý) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Spojí dva kúsky textu do jedného.

### `písmeno … z …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Vráti písmeno na zadanej pozícii v texte. Prvé písmeno má číslo 1.

### `dĺžka …` (Pokročilý) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Vráti počet znakov v texte.

### `… obsahuje …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Vráti `true`, keď prvý text obsahuje druhý.
