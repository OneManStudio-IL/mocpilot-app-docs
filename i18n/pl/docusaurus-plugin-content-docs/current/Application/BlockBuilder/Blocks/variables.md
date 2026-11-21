---
id: Variables
title: Zmienne
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Zmienne

Zmienne przechowują wartości, które może odczytywać i zmieniać każdy skrypt programu. Tworzysz je, zmieniasz ich nazwy i usuwasz za pomocą przycisków **Utwórz zmienną**, **Zmień nazwę zmiennej** i **Usuń zmienną** na górze kategorii. Poniższe bloki pojawiają się, gdy program ma co najmniej jedną zmienną.

## Zmiana zmiennej {#changing-a-variable}

### `ustawić … do …` (Początkujący) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Ustawia wybraną zmienną na podaną wartość.

- Typowe zastosowanie: ustawienie wartości początkowej, zastąpienie poprzedniej wartości.

### `zmienić … przez …` (Zaawansowany) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Dodaje liczbę do wybranej zmiennej. Aby odjąć, użyj liczby ujemnej.

- Typowe zastosowanie: liczniki, punkty, sumowanie odległości lub czasu.

## Odczyt zmiennej {#reading-a-variable}

### Zmienna (Początkujący) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Każda zmienna ma własny blok raportujący ze swoją nazwą. Zwraca bieżącą wartość zmiennej.

- Typowe zastosowanie: wstawianie wartości do operatorów, warunków i pól innych bloków.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) pokazuje wartości wszystkich zmiennych podczas działania programu.
