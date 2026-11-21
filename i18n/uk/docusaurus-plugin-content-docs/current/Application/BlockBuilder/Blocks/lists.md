---
id: Lists
title: Списки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Списки {#lists}

Список зберігає кілька значень по порядку. Створюйте, перейменовуйте й видаляйте списки кнопками **Створити список**, **Перейменувати список** і **Видалити список** вгорі категорії. Наведені нижче блоки з’являються, щойно в програмі є хоча б один список. Елементи нумеруються з 1.

## Зміна списку {#changing-a-list}

### `додати … до …` (Просунутий) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Додає значення в кінець списку.

### `вставити … на … з …` (Гуру) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Вставляє значення в задану позицію; наступні елементи зсуваються на одну позицію.

### `замінити елемент … з … з …` (Гуру) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Замінює елемент у заданій позиції новим значенням.

### `видалити … від …` (Просунутий) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Видаляє елемент у заданій позиції.

### `очистити …` (Просунутий) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Видаляє всі елементи зі списку.

## Читання списку {#reading-a-list}

### `елемент … з …` (Просунутий) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Повертає елемент у заданій позиції.

### `індекс … в …` (Гуру) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Повертає позицію першого елемента, що дорівнює значенню, або `0`, якщо такого немає.

### `… містить …` (Гуру) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Повертає `true`, коли список містить значення.

### `розмір …` (Просунутий) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Повертає кількість елементів у списку.

### Список (Просунутий) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Кожен список має власний блок-репортер зі своєю назвою. Він повертає весь список як текст.

- Приклад результату: `[item1,item2,item3]`; порожній список дає порожній текст.
- Для чого: показати список на моніторі або передати його блокам, які приймають список (наприклад, **засвітити** для світла датчика відстані).
