---
id: Operators
title: Operadores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operadores {#operators}

Los operadores son bloques informadores y booleanos para matemáticas, comparaciones, lógica y texto.

## Matemáticas {#math}

### `… + …` (Principiante) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Devuelve la suma de dos números.

### `… − …` (Principiante) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Resta el segundo número del primero.

### `… × …` (Principiante) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Devuelve el producto de dos números.

### `… ÷ …` (Principiante) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Divide el primer número entre el segundo.

### `… por módulo …` (Gurú) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Devuelve el resto de dividir el primer número entre el segundo.

### `redondear …` (Gurú) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Redondea un número al entero más cercano (por ejemplo, `2.6` pasa a ser `3`).

### `… de …` (Gurú) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Aplica una función a un número. Los ángulos se expresan en grados.

- `valor absoluto`: valor absoluto
- `entero menor`: redondear hacia abajo a un número entero
- `entero mayor`: redondear hacia arriba a un número entero
- `raíz cuadrada`: raíz cuadrada
- `sin`, `cos`, `tan`: seno, coseno y tangente de un ángulo
- `asin`, `acos`, `atan`: las funciones inversas; devuelven un ángulo
- `ln`: logaritmo natural (base `e`)
- `log`: logaritmo en base 10
- `e^`: `e` elevado al número
- `10^`: `10` elevado al número

### `… de … y …` (Gurú) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Aplica una función a dos números.

- `mín`: el menor de los dos
- `máx`: el mayor de los dos
- `potencia`: el primer número elevado al segundo
- `atan2`: el ángulo del punto definido por los dos números
- `hypot`: la longitud de la hipotenusa con estos dos catetos
- `copysign`: el primer número con el signo del segundo

### `elegir aleatorio … a …` (Gurú) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Devuelve un número aleatorio entre los dos valores.

## Comparación {#comparison}

### `… = …` (Principiante) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Devuelve `true` cuando los dos valores son iguales.

### `… ≠ …` (Avanzado) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Devuelve `true` cuando los dos valores son distintos.

### `… > …` (Principiante) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Devuelve `true` cuando el valor de la izquierda es mayor que el de la derecha.

### `… < …` (Principiante) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Devuelve `true` cuando el valor de la izquierda es menor que el de la derecha.

### `está … entre … y …` (Avanzado) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Devuelve `true` cuando el número está entre los dos límites.

## Lógica {#logic}

### `… y …` (Avanzado) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Devuelve `true` solo cuando ambas condiciones se cumplen.

### `… o …` (Avanzado) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Devuelve `true` cuando se cumple al menos una de las condiciones.

### `no …` (Avanzado) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Convierte `true` en `false` y `false` en `true`.

## Texto {#text}

### `unir … …` (Avanzado) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Une dos fragmentos de texto en uno.

### `letra … de …` (Gurú) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Devuelve la letra de la posición indicada del texto. La primera letra es la número 1.

### `longitud de …` (Avanzado) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Devuelve el número de caracteres del texto.

### `… contiene …` (Gurú) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Devuelve `true` cuando el primer texto contiene el segundo.
