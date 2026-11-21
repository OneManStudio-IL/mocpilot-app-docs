---
id: Lists
title: Seznamy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Seznamy {#lists}

Seznam uchovává několik hodnot v daném pořadí. Seznamy vytváříte, přejmenováváte a mažete tlačítky **Vytvořit seznam**, **Přejmenovat seznam** a **Smazat seznam** v horní části kategorie. Níže uvedené bloky se objeví, jakmile má program alespoň jeden seznam. Položky se číslují od 1.

## Změna seznamu {#changing-a-list}

### `přidat … k …` (Pokročilý) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Přidá hodnotu na konec seznamu.

### `vložit … na … z …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Vloží hodnotu na zadanou pozici; položky za ní se posunou o jednu dál.

### `nahradit položku … z … s …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Nahradí položku na zadané pozici novou hodnotou.

### `smazat … z …` (Pokročilý) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Smaže položku na zadané pozici.

### `vymazat …` (Pokročilý) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Odebere ze seznamu všechny položky.

## Čtení seznamu {#reading-a-list}

### `položka … z …` (Pokročilý) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Vrací položku na zadané pozici.

### `index … v …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Vrací pozici první položky rovné hodnotě, nebo `0`, pokud žádná taková není.

### `… obsahuje …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Vrací `true`, když seznam obsahuje danou hodnotu.

### `velikost …` (Pokročilý) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Vrací počet položek v seznamu.

### Seznam (Pokročilý) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Každý seznam má vlastní hodnotový blok se svým názvem. Vrací celý seznam jako text.

- Příklad výstupu: `[item1,item2,item3]`; prázdný seznam dává prázdný text.
- Typické použití: zobrazit seznam na monitoru nebo ho předat blokům, které přijímají seznam (například **rozsvítit** pro světla senzoru vzdálenosti).
