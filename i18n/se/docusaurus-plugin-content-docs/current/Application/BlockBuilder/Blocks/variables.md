---
id: Variables
title: Variabler
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabler {#variables}

Variabler lagrar värden som alla skript i programmet kan läsa och ändra. Du skapar, byter namn på och tar bort dem med **Skapa en variabel**, **Byt namn på variabel** och **Ta bort variabel** högst upp i kategorin. Blocken nedan visas när programmet har minst en variabel.

## Ändra en variabel {#changing-a-variable}

### `ställ in … till …` (Nybörjare) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Ger den valda variabeln ett värde.

- Typisk användning: ange ett startvärde, ersätta det tidigare värdet.

### `ändra … av …` (Avancerad) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Lägger till ett tal till den valda variabeln. Använd ett negativt tal för att dra ifrån.

- Typisk användning: räknare, poäng, summera sträcka eller tid.

## Läsa en variabel {#reading-a-variable}

### Variabel (Nybörjare) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Varje variabel har ett eget rapportblock med sitt namn. Det returnerar variabelns aktuella värde.

- Typisk användning: använda värdet i operatorer, villkor och andra blocks indata.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) visar värdena för alla variabler medan programmet körs.
