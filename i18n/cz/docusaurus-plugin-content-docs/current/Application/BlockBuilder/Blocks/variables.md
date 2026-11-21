---
id: Variables
title: Proměnné
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Proměnné {#variables}

Proměnné uchovávají hodnoty, které může číst a měnit každý skript v programu. Vytváříte, přejmenováváte a mažete je tlačítky **Vytvořit proměnnou**, **Přejmenovat proměnnou** a **Smazat proměnnou** v horní části kategorie. Níže uvedené bloky se objeví, jakmile má program alespoň jednu proměnnou.

## Změna proměnné {#changing-a-variable}

### `nastavit … k …` (Začátečník) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Nastaví vybranou proměnnou na hodnotu.

- Typické použití: nastavit počáteční hodnotu, nahradit předchozí hodnotu.

### `změnit … podle …` (Pokročilý) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Přičte k vybrané proměnné číslo. Chcete-li odečítat, použijte záporné číslo.

- Typické použití: počítadla, skóre, sčítání vzdálenosti nebo času.

## Čtení proměnné {#reading-a-variable}

### Proměnná (Začátečník) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Každá proměnná má vlastní hodnotový blok se svým názvem. Vrací aktuální hodnotu proměnné.

- Typické použití: vložit hodnotu do operátorů, podmínek a vstupů jiných bloků.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) za běhu programu ukazuje hodnoty všech proměnných.
