---
id: Lists
title: Listat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listat {#lists}

Lista tallentaa useita arvoja järjestyksessä. Listat luodaan, nimetään uudelleen ja poistetaan luokan yläreunan painikkeilla **Luo lista**, **Nimeä lista uudelleen** ja **Poista lista**. Alla olevat lohkot näkyvät, kun ohjelmassa on vähintään yksi lista. Kohteet numeroidaan alkaen 1:stä.

## Listan muuttaminen {#changing-a-list}

### `lisää … listaan …` (Edistynyt) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Lisää arvon listan loppuun.

### `lisätä … kohtaan … listassa …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Lisää arvon annettuun kohtaan; sen jälkeiset kohteet siirtyvät yhden pykälän eteenpäin.

### `korvata kohde … listassa … arvolla …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Korvaa annetussa kohdassa olevan kohteen uudella arvolla.

### `poistaa … listasta …` (Edistynyt) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Poistaa annetussa kohdassa olevan kohteen.

### `tyhjentää …` (Edistynyt) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Poistaa listasta kaikki kohteet.

## Listan lukeminen {#reading-a-list}

### `kohde … listasta …` (Edistynyt) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Palauttaa annetussa kohdassa olevan kohteen.

### `indeksi … sisällä …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Palauttaa ensimmäisen arvoa vastaavan kohteen sijainnin tai `0`, jos sellaista ei ole.

### `… sisältää …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Palauttaa arvon `true`, kun lista sisältää arvon.

### `koko …` (Edistynyt) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Palauttaa listan kohteiden määrän.

### Lista (Edistynyt) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Jokaisella listalla on oma nimellään varustettu raportointilohko. Se palauttaa koko listan tekstinä.

- Esimerkkitulos: `[item1,item2,item3]`; tyhjä lista antaa tyhjän tekstin.
- Tyypillinen käyttö: listan näyttäminen näytössä tai sen välittäminen lohkoille, jotka hyväksyvät listan (esimerkiksi etäisyysanturin valojen **sytytä**-lohko).
