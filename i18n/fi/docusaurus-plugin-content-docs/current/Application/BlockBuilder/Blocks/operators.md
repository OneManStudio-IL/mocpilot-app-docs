---
id: Operators
title: Operaattorit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operaattorit {#operators}

Operaattorit ovat raportointi- ja totuusarvolohkoja laskutoimituksiin, vertailuihin, logiikkaan ja tekstiin.

## Matematiikka {#math}

### `… + …` (Aloittelija) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Palauttaa kahden luvun summan.

### `… − …` (Aloittelija) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Vähentää toisen luvun ensimmäisestä.

### `… × …` (Aloittelija) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Palauttaa kahden luvun tulon.

### `… ÷ …` (Aloittelija) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Jakaa ensimmäisen luvun toisella.

### `… modulolla …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Palauttaa jakojäännöksen, kun ensimmäinen luku jaetaan toisella.

### `pyöristää …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Pyöristää luvun lähimpään kokonaislukuun (esimerkiksi `2.6`:sta tulee `3`).

### `… luvusta …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Soveltaa funktiota yhteen lukuun. Kulmat ovat asteina.

- `absoluuttiarvo`: itseisarvo
- `kokonaisluku pienempi`: pyöristys alaspäin kokonaislukuun
- `kokonaisluku suurempi`: pyöristys ylöspäin kokonaislukuun
- `neliöjuuri`: neliöjuuri
- `sin`, `cos`, `tan`: kulman sini, kosini ja tangentti
- `asin`, `acos`, `atan`: käänteisfunktiot; ne palauttavat kulman
- `ln`: luonnollinen logaritmi (kantaluku `e`)
- `log`: 10-kantainen logaritmi
- `eˆ`: `e` korotettuna luvun osoittamaan potenssiin
- `10ˆ`: `10` korotettuna luvun osoittamaan potenssiin

### `… luvuista … ja …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Soveltaa funktiota kahteen lukuun.

- `min`: pienempi kahdesta
- `max`: suurempi kahdesta
- `potenssi`: ensimmäinen luku korotettuna toisen osoittamaan potenssiin
- `atan2`: kahden luvun määrittämän pisteen kulma
- `hypot`: hypotenuusan pituus, kun kateetit ovat nämä kaksi lukua
- `copysign`: ensimmäinen luku toisen luvun etumerkillä

### `valitse satunnainen … – …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Palauttaa satunnaisen luvun kahden arvon väliltä.

## Vertailu {#comparison}

### `… = …` (Aloittelija) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Palauttaa arvon `true`, kun arvot ovat yhtä suuret.

### `… ≠ …` (Edistynyt) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Palauttaa arvon `true`, kun arvot eroavat toisistaan.

### `… > …` (Aloittelija) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Palauttaa arvon `true`, kun vasen arvo on suurempi kuin oikea.

### `… < …` (Aloittelija) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Palauttaa arvon `true`, kun vasen arvo on pienempi kuin oikea.

### `on … välissä … ja …` (Edistynyt) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Palauttaa arvon `true`, kun luku on kahden rajan välissä.

## Logiikka {#logic}

### `… ja …` (Edistynyt) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Palauttaa arvon `true` vain, kun molemmat ehdot ovat tosia.

### `… tai …` (Edistynyt) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Palauttaa arvon `true`, kun vähintään yksi ehdoista on tosi.

### `ei …` (Edistynyt) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Muuttaa arvon `true` arvoksi `false` ja arvon `false` arvoksi `true`.

## Teksti {#text}

### `yhdistää … …` (Edistynyt) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Yhdistää kaksi tekstinpätkää yhdeksi.

### `kirjain … tekstistä …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Palauttaa tekstin annetussa kohdassa olevan kirjaimen. Ensimmäinen kirjain on numero 1.

### `pituus …` (Edistynyt) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Palauttaa tekstin merkkien määrän.

### `… sisältää …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Palauttaa arvon `true`, kun ensimmäinen teksti sisältää toisen.
