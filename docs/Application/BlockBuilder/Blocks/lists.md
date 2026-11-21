---
id: Lists
title: Lists
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lists

A list stores several values in order. Create, rename and delete lists with **Make a list**, **Rename list** and **Delete list** at the top of the category. The blocks below appear once the program has at least one list. Items are numbered from 1.

## Changing a list

### `add … to …` (Advanced) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Adds a value to the end of the list.

### `insert … at … of …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Inserts a value at the given position; the items after it move down by one.

### `replace item … of … with …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Replaces the item at the given position with a new value.

### `delete … from …` (Advanced) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Deletes the item at the given position.

### `clear …` (Advanced) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Removes all items from the list.

## Reading a list

### `item … of …` (Advanced) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returns the item at the given position.

### `index of … in …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returns the position of the first item equal to the value, or `0` when there is none.

### `… contains …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returns `true` when the list contains the value.

### `size of …` (Advanced) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returns the number of items in the list.

### List (Advanced) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Each list has its own reporter block with its name. It returns the whole list as text.

- Output example: `[item1,item2,item3]`; an empty list gives empty text.
- Typical use: show the list on a monitor, or pass it to blocks that accept a list (for example, **light up** for the Distance Sensor lights).
