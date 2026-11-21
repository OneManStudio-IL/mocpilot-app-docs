---
id: Lists
title: Listas
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listas {#lists}

Uma lista guarda vários valores em ordem. Crie, renomeie e exclua listas com **Criar uma lista**, **Renomear lista** e **Excluir lista** no topo da categoria. Os blocos abaixo aparecem assim que o programa tem pelo menos uma lista. Os itens são numerados a partir de 1.

## Alterar uma lista {#changing-a-list}

### `adicionar … para …` (Avançado) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Adiciona um valor ao final da lista.

### `inserir … em … de …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Insere um valor na posição indicada; os itens seguintes descem uma posição.

### `substituir item … de … com …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Substitui o item na posição indicada por um novo valor.

### `excluir … de …` (Avançado) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Exclui o item na posição indicada.

### `limpar …` (Avançado) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Remove todos os itens da lista.

## Ler uma lista {#reading-a-list}

### `item … de …` (Avançado) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Retorna o item na posição indicada.

### `índice de … em …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Retorna a posição do primeiro item igual ao valor, ou `0` quando não há nenhum.

### `… contém …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Retorna `true` quando a lista contém o valor.

### `tamanho de …` (Avançado) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Retorna o número de itens da lista.

### Lista (Avançado) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Cada lista tem o seu próprio bloco repórter com o nome dela. Ele retorna a lista inteira como texto.

- Exemplo de saída: `[item1,item2,item3]`; uma lista vazia dá um texto vazio.
- Uso típico: mostrar a lista em um monitor ou passá-la a blocos que aceitam uma lista (por exemplo, **acender** para as luzes do sensor de distância).
