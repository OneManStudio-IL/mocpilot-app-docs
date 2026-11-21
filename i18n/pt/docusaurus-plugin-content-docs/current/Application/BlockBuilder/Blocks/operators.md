---
id: Operators
title: Operadores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operadores {#operators}

Os operadores são blocos repórter e booleanos para matemática, comparações, lógica e texto.

## Matemática {#math}

### `… + …` (Iniciante) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Retorna a soma de dois números.

### `… − …` (Iniciante) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Subtrai o segundo número do primeiro.

### `… × …` (Iniciante) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Retorna o produto de dois números.

### `… ÷ …` (Iniciante) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Divide o primeiro número pelo segundo.

### `… por módulo …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Retorna o resto da divisão do primeiro número pelo segundo.

### `arredondar …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Arredonda um número para o inteiro mais próximo (por exemplo, `2.6` vira `3`).

### `… de …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplica uma função a um número. Os ângulos são em graus.

- `valor absoluto`: valor absoluto
- `inteiro menor`: arredonda para baixo até um número inteiro
- `inteiro maior`: arredonda para cima até um número inteiro
- `raiz quadrada`: raiz quadrada
- `sin`, `cos`, `tan`: seno, cosseno e tangente de um ângulo
- `asin`, `acos`, `atan`: as funções inversas; retornam um ângulo
- `ln`: logaritmo natural (base `e`)
- `log`: logaritmo de base 10
- `e^`: `e` elevado à potência do número
- `10^`: `10` elevado à potência do número

### `… de … e …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplica uma função a dois números.

- `min`: o menor dos dois
- `max`: o maior dos dois
- `potência`: o primeiro número elevado à potência do segundo
- `atan2`: o ângulo do ponto dado pelos dois números
- `hypot`: o comprimento da hipotenusa com estes dois catetos
- `copysign`: o primeiro número com o sinal do segundo

### `escolher aleatoriamente … para …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Retorna um número aleatório entre os dois valores.

## Comparação {#comparison}

### `… = …` (Iniciante) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Retorna `true` quando os dois valores são iguais.

### `… ≠ …` (Avançado) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Retorna `true` quando os dois valores são diferentes.

### `… > …` (Iniciante) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Retorna `true` quando o valor da esquerda é maior que o da direita.

### `… < …` (Iniciante) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Retorna `true` quando o valor da esquerda é menor que o da direita.

### `está … entre … e …` (Avançado) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Retorna `true` quando o número está entre os dois limites.

## Lógica {#logic}

### `… e …` (Avançado) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Retorna `true` só quando as duas condições são verdadeiras.

### `… ou …` (Avançado) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Retorna `true` quando pelo menos uma das condições é verdadeira.

### `não …` (Avançado) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Transforma `true` em `false` e `false` em `true`.

## Texto {#text}

### `unir … …` (Avançado) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Junta dois trechos de texto em um só.

### `letra … de …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Retorna a letra na posição indicada do texto. A primeira letra é a número 1.

### `comprimento de …` (Avançado) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Retorna o número de caracteres do texto.

### `… contém …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Retorna `true` quando o primeiro texto contém o segundo.
