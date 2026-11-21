---
id: Lists
title: Liste
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Liste {#lists}

Una lista memorizza più valori in ordine. Crea, rinomina ed elimina le liste con **Creare una lista**, **Rinomina elenco** ed **Elimina elenco** in cima alla categoria. I blocchi qui sotto compaiono non appena il programma ha almeno una lista. Gli elementi sono numerati a partire da 1.

## Modificare una lista {#changing-a-list}

### `aggiungere … a …` (Avanzato) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Aggiunge un valore alla fine della lista.

### `inserire … a … di …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserisce un valore nella posizione indicata; gli elementi successivi scendono di una posizione.

### `sostituire elemento … di … con …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Sostituisce l'elemento nella posizione indicata con un nuovo valore.

### `eliminare … da …` (Avanzato) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Elimina l'elemento nella posizione indicata.

### `cancellare …` (Avanzato) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Rimuove tutti gli elementi dalla lista.

## Leggere una lista {#reading-a-list}

### `elemento … di …` (Avanzato) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Restituisce l'elemento nella posizione indicata.

### `indice di … in …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Restituisce la posizione del primo elemento uguale al valore, oppure `0` se non ce n'è nessuno.

### `… contiene …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Restituisce `true` quando la lista contiene il valore.

### `dimensione di …` (Avanzato) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Restituisce il numero di elementi della lista.

### Lista (Avanzato) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Ogni lista ha un proprio blocco valore con il suo nome. Restituisce l'intera lista come testo.

- Esempio di uscita: `[item1,item2,item3]`; una lista vuota restituisce un testo vuoto.
- Uso tipico: mostrare la lista su un monitor o passarla ai blocchi che accettano una lista (ad esempio **accendere** per le luci del sensore di distanza).
