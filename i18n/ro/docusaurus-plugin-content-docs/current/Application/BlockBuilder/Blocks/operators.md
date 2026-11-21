---
id: Operators
title: Operatori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operatori {#operators}

Operatorii sunt blocuri raportor și booleene pentru calcule matematice, comparații, logică și text.

## Matematică {#math}

### `… + …` (Începător) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returnează suma a două numere.

### `… − …` (Începător) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Scade al doilea număr din primul.

### `… × …` (Începător) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returnează produsul a două numere.

### `… ÷ …` (Începător) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Împarte primul număr la al doilea.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returnează restul împărțirii primului număr la al doilea.

### `rotunjire …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rotunjește un număr la cel mai apropiat număr întreg (de exemplu, `2.6` devine `3`).

### `… de …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplică o funcție unui număr. Unghiurile sunt în grade.

- `valoare absolută`: valoarea absolută
- `întreg mai mic`: rotunjire în jos la un număr întreg
- `întreg mai mare`: rotunjire în sus la un număr întreg
- `rădăcina pătrată`: rădăcina pătrată
- `sin`, `cos`, `tan`: sinusul, cosinusul și tangenta unui unghi
- `asin`, `acos`, `atan`: funcțiile inverse; returnează un unghi
- `ln`: logaritmul natural (în baza `e`)
- `log`: logaritmul în baza 10
- `e^`: `e` ridicat la puterea numărului
- `10^`: `10` ridicat la puterea numărului

### `… de … și …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplică o funcție la două numere.

- `min`: cel mai mic dintre cele două
- `max`: cel mai mare dintre cele două
- `putere`: primul număr ridicat la puterea celui de-al doilea
- `atan2`: unghiul punctului dat de cele două numere
- `hypot`: lungimea ipotenuzei cu aceste două catete
- `copysign`: primul număr cu semnul celui de-al doilea

### `alege aleatoriu … la …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returnează un număr aleatoriu între cele două valori.

## Comparație {#comparison}

### `… = …` (Începător) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returnează `true` când cele două valori sunt egale.

### `… ≠ …` (Avansat) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returnează `true` când cele două valori sunt diferite.

### `… > …` (Începător) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returnează `true` când valoarea din stânga este mai mare decât cea din dreapta.

### `… < …` (Începător) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returnează `true` când valoarea din stânga este mai mică decât cea din dreapta.

### `este … între … și …` (Avansat) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returnează `true` când numărul se află între cele două limite.

## Logică {#logic}

### `… și …` (Avansat) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returnează `true` doar când ambele condiții sunt adevărate.

### `… sau …` (Avansat) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returnează `true` când cel puțin una dintre condiții este adevărată.

### `nu …` (Avansat) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Transformă `true` în `false` și `false` în `true`.

## Text {#text}

### `uni … …` (Avansat) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Unește două bucăți de text într-una singură.

### `literă … de …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returnează litera din poziția dată a textului. Prima literă are numărul 1.

### `lungimea de …` (Avansat) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returnează numărul de caractere din text.

### `… conține …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returnează `true` când primul text îl conține pe al doilea.
