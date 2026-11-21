---
id: Variables
title: Variáveis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variáveis {#variables}

As variáveis guardam valores que todos os scripts do programa podem ler e alterar. Crie, renomeie e exclua variáveis com **Criar uma variável**, **Renomear variável** e **Excluir variável** no topo da categoria. Os blocos abaixo aparecem assim que o programa tem pelo menos uma variável.

## Alterar uma variável {#changing-a-variable}

### `definir … para …` (Iniciante) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Atribui um valor à variável selecionada.

- Uso típico: definir um valor inicial, substituir o valor anterior.

### `mudar … por …` (Avançado) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Soma um número à variável selecionada. Use um número negativo para subtrair.

- Uso típico: contadores, pontuações, somar distância ou tempo.

## Ler uma variável {#reading-a-variable}

### Variável (Iniciante) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Cada variável tem o seu próprio bloco repórter com o nome dela. Ele retorna o valor atual da variável.

- Uso típico: colocar o valor em operadores, condições e nas entradas de outros blocos.
- O [Monitor](/docs/Application/BlockBuilder/Editor#monitor) mostra os valores de todas as variáveis enquanto o programa é executado.
