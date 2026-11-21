---
id: Variables
title: Premenné
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Premenné {#variables}

Premenné uchovávajú hodnoty, ktoré môže čítať a meniť každý skript v programe. Vytvoríte, premenujete a odstránite ich tlačidlami **Vytvoriť premennú**, **Premenovať premennú** a **Odstrániť premennú** hore v kategórii. Nižšie uvedené bloky sa zobrazia, keď má program aspoň jednu premennú.

## Zmena premennej {#changing-a-variable}

### `nastaviť … na …` (Začiatočník) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Nastaví vybranú premennú na hodnotu.

- Typické použitie: nastaviť počiatočnú hodnotu, nahradiť predchádzajúcu hodnotu.

### `zmeniť … podľa …` (Pokročilý) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Pripočíta k vybranej premennej číslo. Na odčítanie použite záporné číslo.

- Typické použitie: počítadlá, skóre, sčítanie vzdialenosti alebo času.

## Čítanie premennej {#reading-a-variable}

### Premenná (Začiatočník) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Každá premenná má vlastný hlásiaci blok so svojím názvom. Vracia aktuálnu hodnotu premennej.

- Typické použitie: vložiť hodnotu do operátorov, podmienok a vstupov iných blokov.
- [Monitor](/docs/Application/BlockBuilder/Editor#monitor) počas behu programu ukazuje hodnoty všetkých premenných.
