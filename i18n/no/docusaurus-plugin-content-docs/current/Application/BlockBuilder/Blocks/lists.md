---
id: Lists
title: Lister
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lister {#lists}

En liste lagrer flere verdier i rekkefølge. Du oppretter, gir nytt navn til og sletter lister med **Lag en liste**, **Gi nytt navn til liste** og **Slett liste** øverst i kategorien. Blokkene nedenfor vises så snart programmet har minst én liste. Elementene nummereres fra 1.

## Endre en liste {#changing-a-list}

### `legg til … i …` (Avansert) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Legger til en verdi på slutten av listen.

### `sett inn … på … i …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Setter inn en verdi på den angitte plassen; elementene etter den flyttes én plass ned.

### `erstatt element … i … med …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Erstatter elementet på den angitte plassen med en ny verdi.

### `slett … fra …` (Avansert) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Sletter elementet på den angitte plassen.

### `tøm …` (Avansert) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Fjerner alle elementene fra listen.

## Lese en liste {#reading-a-list}

### `element … i …` (Avansert) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerer elementet på den angitte plassen.

### `indeks for … i …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerer plassen til det første elementet som er lik verdien, eller `0` hvis det ikke finnes noe slikt.

### `… inneholder …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerer `true` når listen inneholder verdien.

### `størrelse på …` (Avansert) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerer antall elementer i listen.

### Liste (Avansert) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Hver liste har sin egen verdiblokk med listens navn. Den returnerer hele listen som tekst.

- Eksempel på utdata: `[item1,item2,item3]`; en tom liste gir tom tekst.
- Typisk bruk: vise listen på en monitor, eller sende den til blokker som tar imot en liste (for eksempel **tenn** for lysene på avstandssensoren).
