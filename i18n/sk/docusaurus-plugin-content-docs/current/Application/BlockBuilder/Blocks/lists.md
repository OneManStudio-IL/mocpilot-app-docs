---
id: Lists
title: Zoznamy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Zoznamy {#lists}

Zoznam uchováva viac hodnôt v poradí. Zoznamy vytvoríte, premenujete a odstránite tlačidlami **Vytvoriť zoznam**, **Premenovať zoznam** a **Odstrániť zoznam** hore v kategórii. Nižšie uvedené bloky sa zobrazia, keď má program aspoň jeden zoznam. Položky sú číslované od 1.

## Zmena zoznamu {#changing-a-list}

### `pridať … do …` (Pokročilý) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Pridá hodnotu na koniec zoznamu.

### `vložiť … na … z …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Vloží hodnotu na zadanú pozíciu; položky za ňou sa posunú o jednu ďalej.

### `nahradiť položku … z … s …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Nahradí položku na zadanej pozícii novou hodnotou.

### `odstrániť … z …` (Pokročilý) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Odstráni položku na zadanej pozícii.

### `vymazať …` (Pokročilý) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Odstráni zo zoznamu všetky položky.

## Čítanie zoznamu {#reading-a-list}

### `položka … z …` (Pokročilý) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Vráti položku na zadanej pozícii.

### `index … v …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Vráti pozíciu prvej položky, ktorá sa rovná hodnote, alebo `0`, ak taká neexistuje.

### `… obsahuje …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Vráti `true`, keď zoznam obsahuje danú hodnotu.

### `veľkosť …` (Pokročilý) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Vráti počet položiek v zozname.

### Zoznam (Pokročilý) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Každý zoznam má vlastný hlásiaci blok so svojím názvom. Vracia celý zoznam ako text.

- Príklad výstupu: `[item1,item2,item3]`; prázdny zoznam dáva prázdny text.
- Typické použitie: zobraziť zoznam na monitore alebo ho odovzdať blokom, ktoré prijímajú zoznam (napríklad **rozsvietiť** pre svetlá senzora vzdialenosti).
