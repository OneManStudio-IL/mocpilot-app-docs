---
id: Variables
title: Muuttujat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Muuttujat {#variables}

Muuttujat tallentavat arvoja, joita ohjelman jokainen skripti voi lukea ja muuttaa. Muuttujat luodaan, nimetään uudelleen ja poistetaan luokan yläreunan painikkeilla **Luo muuttuja**, **Nimeä muuttuja uudelleen** ja **Poista muuttuja**. Alla olevat lohkot näkyvät, kun ohjelmassa on vähintään yksi muuttuja.

## Muuttujan muuttaminen {#changing-a-variable}

### `aseta … arvoon …` (Aloittelija) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Asettaa valitulle muuttujalle arvon.

- Tyypillinen käyttö: alkuarvon asettaminen, edellisen arvon korvaaminen.

### `muuta … arvolla …` (Edistynyt) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Lisää valittuun muuttujaan luvun. Vähennä käyttämällä negatiivista lukua.

- Tyypillinen käyttö: laskurit, pisteet, matkan tai ajan summaaminen.

## Muuttujan lukeminen {#reading-a-variable}

### Muuttuja (Aloittelija) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Jokaisella muuttujalla on oma nimellään varustettu raportointilohko. Se palauttaa muuttujan nykyisen arvon.

- Tyypillinen käyttö: arvon sijoittaminen operaattoreihin, ehtoihin ja muiden lohkojen syötteisiin.
- [Seuranta](/docs/Application/BlockBuilder/Editor#monitor) näyttää kaikkien muuttujien arvot ohjelman käydessä.
