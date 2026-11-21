---
id: Variables
title: Variable
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variable {#variables}

Variabler gemmer værdier, som alle scripts i programmet kan læse og ændre. Du opretter, omdøber og sletter dem med **Opret en variabel**, **Omdøb variabel** og **Slet variabel** øverst i kategorien. Blokkene nedenfor vises, så snart programmet har mindst én variabel.

## Ændring af en variabel {#changing-a-variable}

### `sæt … til …` (Begynder) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Sætter den valgte variabel til en værdi.

- Typisk brug: sæt en startværdi, erstat den tidligere værdi.

### `ændre … af …` (Avanceret) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Lægger et tal til den valgte variabel. Brug et negativt tal for at trække fra.

- Typisk brug: tællere, point, sammenlægning af afstand eller tid.

## Aflæsning af en variabel {#reading-a-variable}

### Variabel (Begynder) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Hver variabel har sin egen rapporteringsblok med sit navn. Den returnerer variablens aktuelle værdi.

- Typisk brug: sæt værdien ind i operatorer, betingelser og andre blokkes input.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) viser værdierne af alle variabler, mens programmet kører.
