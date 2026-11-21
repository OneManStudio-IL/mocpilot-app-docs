---
id: Lists
title: Списки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Списки

Список хранит несколько значений по порядку. Создают, переименовывают и удаляют списки кнопки **Создать список**, **Переименовать список** и **Удалить список** в начале категории. Блоки ниже появляются, когда в программе есть хотя бы один список. Элементы нумеруются с 1.

## Изменение списка

### `добавить … к …` (Продвинутый) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Добавляет значение в конец списка.

### `вставить … в … из …` (Гуру) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Вставляет значение на заданное место; следующие элементы сдвигаются на одну позицию.

### `заменить элемент … из … с …` (Гуру) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Заменяет элемент на заданном месте новым значением.

### `удалить … от …` (Продвинутый) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Удаляет элемент на заданном месте.

### `очистить …` (Продвинутый) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Удаляет из списка все элементы.

## Чтение списка

### `элемент … из …` (Продвинутый) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Возвращает элемент на заданном месте.

### `индекс … в …` (Гуру) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Возвращает номер первого элемента, равного значению, или `0`, если такого нет.

### `… содержит …` (Гуру) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Возвращает `true`, если в списке есть это значение.

### `размер …` (Продвинутый) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Возвращает число элементов в списке.

### Список (Продвинутый) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

У каждого списка есть свой блок-репортёр с его именем. Он возвращает весь список в виде текста.

- Пример результата: `[item1,item2,item3]`; пустой список даёт пустой текст.
- Для чего: показать список на мониторе или передать его блокам, которые принимают список (например, **зажечь** для подсветки датчика расстояния).
