---
id: Lists
title: Lijsten
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lijsten {#lists}

Een lijst bewaart meerdere waarden op volgorde. Lijsten maak, hernoem en verwijder je met **Maak een lijst**, **Lijst hernoemen** en **Lijst verwijderen** bovenaan de categorie. De blokken hieronder verschijnen zodra het programma minstens één lijst heeft. Items worden genummerd vanaf 1.

## Een lijst wijzigen {#changing-a-list}

### `toevoegen … naar …` (Gevorderd) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Voegt een waarde toe aan het einde van de lijst.

### `invoegen … bij … van …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Voegt een waarde in op de opgegeven positie; de items erna schuiven één plek op.

### `vervang item … van … met …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Vervangt het item op de opgegeven positie door een nieuwe waarde.

### `verwijderen … van …` (Gevorderd) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Verwijdert het item op de opgegeven positie.

### `wissen …` (Gevorderd) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Verwijdert alle items uit de lijst.

## Een lijst lezen {#reading-a-list}

### `item … van …` (Gevorderd) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Geeft het item op de opgegeven positie terug.

### `index van … in …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Geeft de positie terug van het eerste item dat gelijk is aan de waarde, of `0` als er geen is.

### `… bevat …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Geeft `true` terug als de lijst de waarde bevat.

### `grootte van …` (Gevorderd) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Geeft het aantal items in de lijst terug.

### Lijst (Gevorderd) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Elke lijst heeft een eigen waardeblok met haar naam. Het geeft de hele lijst als tekst terug.

- Voorbeeld van de uitvoer: `[item1,item2,item3]`; een lege lijst geeft lege tekst.
- Gebruikelijke toepassing: de lijst op een monitor tonen, of doorgeven aan blokken die een lijst accepteren (bijvoorbeeld **oplichten** voor de lampjes van de afstandssensor).
