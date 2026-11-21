---
id: Lists
title: Listor
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listor {#lists}

En lista lagrar flera värden i ordning. Du skapar, byter namn på och tar bort listor med **Skapa en lista**, **Byt namn på lista** och **Ta bort lista** högst upp i kategorin. Blocken nedan visas när programmet har minst en lista. Objekten numreras från 1.

## Ändra en lista {#changing-a-list}

### `lägga till … till …` (Avancerad) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Lägger till ett värde i slutet av listan.

### `infoga … vid … av …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Infogar ett värde på angiven position; objekten efter den flyttas ett steg nedåt.

### `ersätt objekt … av … med …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Ersätter objektet på angiven position med ett nytt värde.

### `radera … från …` (Avancerad) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Raderar objektet på angiven position.

### `rensa …` (Avancerad) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Tar bort alla objekt från listan.

## Läsa en lista {#reading-a-list}

### `objekt … av …` (Avancerad) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerar objektet på angiven position.

### `index för … i …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerar positionen för det första objektet som är lika med värdet, eller `0` om det inte finns något.

### `… innehåller …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerar `true` när listan innehåller värdet.

### `storlek på …` (Avancerad) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerar antalet objekt i listan.

### Lista (Avancerad) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Varje lista har ett eget rapportblock med sitt namn. Det returnerar hela listan som text.

- Exempel på utdata: `[item1,item2,item3]`; en tom lista ger tom text.
- Typisk användning: visa listan på en monitor eller skicka den till block som tar emot en lista (till exempel **tänd** för avståndssensorns lampor).
