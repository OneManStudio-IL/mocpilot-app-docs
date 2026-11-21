---
id: Lists
title: Liste
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Liste {#lists}

O listă stochează mai multe valori în ordine. Creează, redenumește și șterge liste cu **Creează o listă**, **Redenumește lista** și **Șterge lista** din partea de sus a categoriei. Blocurile de mai jos apar de îndată ce programul are cel puțin o listă. Elementele sunt numerotate de la 1.

## Modificarea unei liste {#changing-a-list}

### `adăuga … la …` (Avansat) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Adaugă o valoare la sfârșitul listei.

### `insera … la … de …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserează o valoare în poziția dată; elementele de după ea se mută cu o poziție mai jos.

### `înlocuiți articolul … de … cu …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Înlocuiește elementul din poziția dată cu o valoare nouă.

### `șterge … de la …` (Avansat) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Șterge elementul din poziția dată.

### `șterge …` (Avansat) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Elimină toate elementele din listă.

## Citirea unei liste {#reading-a-list}

### `articol … de …` (Avansat) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnează elementul din poziția dată.

### `indexul … în …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnează poziția primului element egal cu valoarea sau `0` dacă nu există niciunul.

### `… conține …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnează `true` când lista conține valoarea.

### `mărimea …` (Avansat) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnează numărul de elemente din listă.

### Listă (Avansat) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Fiecare listă are propriul bloc raportor cu numele ei. Acesta returnează întreaga listă ca text.

- Exemplu de ieșire: `[item1,item2,item3]`; o listă goală dă un text gol.
- Utilizare tipică: afișează lista pe un monitor sau transmite-o blocurilor care acceptă o listă (de exemplu, **aprinde** pentru luminile senzorului de distanță).
