---
id: Variables
title: Variabile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variabile {#variables}

Variabilele stochează valori pe care orice script din program le poate citi și modifica. Le creezi, redenumești și ștergi cu **Creează o variabilă**, **Redenumește variabila** și **Șterge variabila** din partea de sus a categoriei. Blocurile de mai jos apar de îndată ce programul are cel puțin o variabilă.

## Modificarea unei variabile {#changing-a-variable}

### `seta … la …` (Începător) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setează variabila selectată la o valoare.

- Utilizare tipică: setarea unei valori inițiale, înlocuirea valorii anterioare.

### `schimba … de către …` (Avansat) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Adaugă un număr la variabila selectată. Folosește un număr negativ pentru a scădea.

- Utilizare tipică: contoare, punctaje, însumarea distanței sau a timpului.

## Citirea unei variabile {#reading-a-variable}

### Variabilă (Începător) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Fiecare variabilă are propriul bloc raportor cu numele ei. Acesta returnează valoarea curentă a variabilei.

- Utilizare tipică: pune valoarea în operatori, condiții și intrările altor blocuri.
- [Monitorul](/docs/Application/BlockBuilder/Editor#monitor) arată valorile tuturor variabilelor cât timp programul rulează.
