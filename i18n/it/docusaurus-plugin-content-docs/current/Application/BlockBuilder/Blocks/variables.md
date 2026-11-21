---
id: Variables
title: Variabili
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabili {#variables}

Le variabili memorizzano valori che tutti gli script del programma possono leggere e modificare. Creale, rinominale ed eliminale con **Creare una variabile**, **Rinomina variabile** ed **Eliminare variabile** in cima alla categoria. I blocchi qui sotto compaiono non appena il programma ha almeno una variabile.

## Modificare una variabile {#changing-a-variable}

### `impostare … a …` (Principiante) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Imposta la variabile selezionata su un valore.

- Uso tipico: impostare un valore iniziale, sostituire il valore precedente.

### `cambiare … da …` (Avanzato) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Aggiunge un numero alla variabile selezionata. Usa un numero negativo per sottrarre.

- Uso tipico: contatori, punteggi, somma di distanze o tempi.

## Leggere una variabile {#reading-a-variable}

### Variabile (Principiante) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Ogni variabile ha un proprio blocco valore con il suo nome. Restituisce il valore attuale della variabile.

- Uso tipico: inserire il valore negli operatori, nelle condizioni e negli spazi di altri blocchi.
- Il [Monitor](/docs/Application/BlockBuilder/Editor#monitor) mostra i valori di tutte le variabili mentre il programma è in esecuzione.
