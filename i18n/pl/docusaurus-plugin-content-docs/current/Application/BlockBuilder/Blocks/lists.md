---
id: Lists
title: Listy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listy

Lista przechowuje kilka wartości w określonej kolejności. Tworzysz listy, zmieniasz ich nazwy i usuwasz je za pomocą przycisków **Utwórz listę**, **Zmień nazwę listy** i **Usuń listę** na górze kategorii. Poniższe bloki pojawiają się, gdy program ma co najmniej jedną listę. Elementy są numerowane od 1.

## Zmiana listy {#changing-a-list}

### `dodać … do …` (Zaawansowany) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Dodaje wartość na końcu listy.

### `wstawić … w … z …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Wstawia wartość na podanej pozycji; kolejne elementy przesuwają się o jedno miejsce dalej.

### `zamień przedmiot … z … z …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Zastępuje element na podanej pozycji nową wartością.

### `usunąć … z …` (Zaawansowany) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Usuwa element na podanej pozycji.

### `czyścić …` (Zaawansowany) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Usuwa wszystkie elementy z listy.

## Odczyt listy {#reading-a-list}

### `przedmiot … z …` (Zaawansowany) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Zwraca element na podanej pozycji.

### `indeks … w …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Zwraca pozycję pierwszego elementu równego wartości albo `0`, jeśli takiego nie ma.

### `… zawiera …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Zwraca `true`, gdy lista zawiera wartość.

### `rozmiar …` (Zaawansowany) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Zwraca liczbę elementów listy.

### Lista (Zaawansowany) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Każda lista ma własny blok raportujący ze swoją nazwą. Zwraca całą listę jako tekst.

- Przykład wyniku: `[item1,item2,item3]`; pusta lista daje pusty tekst.
- Typowe zastosowanie: wyświetlenie listy na monitorze lub przekazanie jej do bloków, które przyjmują listę (na przykład **zaświeć** dla świateł czujnika odległości).
