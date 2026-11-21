---
id: Variables
title: Variabler
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabler {#variables}

Variabler lagrer verdier som alle skriptene i programmet kan lese og endre. Du oppretter, gir nytt navn til og sletter dem med **Lag en variabel**, **Gi nytt navn til variabel** og **Slett variabel** øverst i kategorien. Blokkene nedenfor vises så snart programmet har minst én variabel.

## Endre en variabel {#changing-a-variable}

### `sett … til …` (Nybegynner) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setter den valgte variabelen til en verdi.

- Typisk bruk: angi en startverdi eller erstatte den forrige verdien.

### `endre … med …` (Avansert) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Legger et tall til den valgte variabelen. Bruk et negativt tall for å trekke fra.

- Typisk bruk: tellere, poeng, summering av avstand eller tid.

## Lese en variabel {#reading-a-variable}

### Variabel (Nybegynner) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Hver variabel har sin egen verdiblokk med variabelens navn. Den returnerer variabelens nåværende verdi.

- Typisk bruk: sette verdien inn i operatorer, betingelser og inngangene til andre blokker.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) viser verdiene til alle variablene mens programmet kjører.
