---
id: Lists
title: Listas
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listas {#lists}

Una lista guarda varios valores en orden. Crea, renombra y elimina listas con **Crear una lista**, **Renombrar lista** y **Eliminar lista** en la parte superior de la categoría. Los bloques de abajo aparecen en cuanto el programa tiene al menos una lista. Los elementos se numeran a partir de 1.

## Modificar una lista {#changing-a-list}

### `agregar … a …` (Avanzado) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Añade un valor al final de la lista.

### `insertar … en … de …` (Gurú) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserta un valor en la posición indicada; los elementos posteriores bajan una posición.

### `reemplazar artículo … de … con …` (Gurú) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Sustituye el elemento de la posición indicada por un valor nuevo.

### `eliminar … de …` (Avanzado) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Elimina el elemento de la posición indicada.

### `borrar …` (Avanzado) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Quita todos los elementos de la lista.

## Leer una lista {#reading-a-list}

### `artículo … de …` (Avanzado) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Devuelve el elemento de la posición indicada.

### `índice de … en …` (Gurú) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Devuelve la posición del primer elemento igual al valor, o `0` si no hay ninguno.

### `… contiene …` (Gurú) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Devuelve `true` cuando la lista contiene el valor.

### `tamaño de …` (Avanzado) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Devuelve el número de elementos de la lista.

### Lista (Avanzado) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Cada lista tiene su propio bloque informador con su nombre. Devuelve la lista completa como texto.

- Ejemplo de salida: `[item1,item2,item3]`; una lista vacía da un texto vacío.
- Uso típico: mostrar la lista en un monitor o pasarla a bloques que aceptan una lista (por ejemplo, **encender** para las luces del sensor de distancia).
