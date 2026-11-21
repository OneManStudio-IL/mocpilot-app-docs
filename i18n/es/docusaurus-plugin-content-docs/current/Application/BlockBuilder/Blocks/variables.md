---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables {#variables}

Las variables guardan valores que todos los scripts del programa pueden leer y cambiar. Créalas, renómbralas y elimínalas con **Crear una variable**, **Renombrar variable** y **Eliminar variable** en la parte superior de la categoría. Los bloques de abajo aparecen en cuanto el programa tiene al menos una variable.

## Modificar una variable {#changing-a-variable}

### `configurar … a …` (Principiante) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Asigna un valor a la variable seleccionada.

- Uso típico: fijar un valor inicial, sustituir el valor anterior.

### `cambiar … por …` (Avanzado) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Suma un número a la variable seleccionada. Usa un número negativo para restar.

- Uso típico: contadores, puntuaciones, ir sumando distancia o tiempo.

## Leer una variable {#reading-a-variable}

### Variable (Principiante) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Cada variable tiene su propio bloque informador con su nombre. Devuelve el valor actual de la variable.

- Uso típico: usar el valor en operadores, condiciones y entradas de otros bloques.
- El [Monitor](/docs/Application/BlockBuilder/Editor#monitor) muestra los valores de todas las variables mientras se ejecuta el programa.
