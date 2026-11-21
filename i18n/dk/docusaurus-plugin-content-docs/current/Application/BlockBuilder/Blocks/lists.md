---
id: Lists
title: Lister
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lister {#lists}

En liste gemmer flere værdier i rækkefølge. Du opretter, omdøber og sletter lister med **Opret en liste**, **Omdøb liste** og **Slet liste** øverst i kategorien. Blokkene nedenfor vises, så snart programmet har mindst én liste. Elementerne nummereres fra 1.

## Ændring af en liste {#changing-a-list}

### `tilføje … til …` (Avanceret) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Tilføjer en værdi sidst i listen.

### `indsætte … ved … af …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Indsætter en værdi på den angivne position; elementerne efter den rykker én plads ned.

### `erstatte vare … af … med …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Erstatter elementet på den angivne position med en ny værdi.

### `slette … fra …` (Avanceret) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Sletter elementet på den angivne position.

### `rydde …` (Avanceret) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Fjerner alle elementer fra listen.

## Aflæsning af en liste {#reading-a-list}

### `vare … af …` (Avanceret) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Returnerer elementet på den angivne position.

### `indeks af … i …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Returnerer positionen for det første element, der er lig med værdien, eller `0`, hvis der ikke er noget.

### `… indeholder …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Returnerer `true`, når listen indeholder værdien.

### `størrelse af …` (Avanceret) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Returnerer antallet af elementer i listen.

### Liste (Avanceret) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Hver liste har sin egen rapporteringsblok med sit navn. Den returnerer hele listen som tekst.

- Eksempel på output: `[item1,item2,item3]`; en tom liste giver tom tekst.
- Typisk brug: vis listen på en monitor, eller send den videre til blokke, der accepterer en liste (for eksempel **tænd** til lysene på afstandssensoren).
