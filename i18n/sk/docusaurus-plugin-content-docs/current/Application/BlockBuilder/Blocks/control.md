---
id: Control
title: Kontrola
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrola {#control}

Bloky kontroly určujú, ako skript beží: čakanie, cykly, vetvenie a zastavenie. Keď má profil huby, táto kategória obsahuje aj bloky, ktoré huby pripájajú a menia ich nastavenia.

## Bloky čakania {#wait-blocks}

### `čakať … sekundy` (Začiatočník) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pozastaví skript na zadaný počet sekúnd.

### `počkajte, kým …` (Pokročilý) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pozastaví skript, kým sa podmienka nestane pravdivou.

## Cykly {#loops}

### `opakovať …` (Pokročilý) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Vykoná bloky vo svojom vnútri zadaný počet krát (predvolene 10).

### `zopakovať, kým …` (Pokročilý) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Vykonáva bloky vo svojom vnútri stále dokola, kým sa podmienka nestane pravdivou.

### `zopakovať vždy` (Pokročilý) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Vykonáva bloky vo svojom vnútri znova a znova, kým sa skript alebo program nezastaví. Pod neho sa nedá nič pripojiť.

## Vetvenie {#branches}

### `ak … potom` (Začiatočník) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Vykoná bloky vo svojom vnútri iba vtedy, keď je podmienka pravdivá.

### `ak … potom … iné` (Pokročilý) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Keď je podmienka pravdivá, vykoná prvú vetvu, inak druhú.

### `urob to … a toto` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Vykoná prvú skupinu blokov, potom druhú a až potom pokračuje blokmi pod sebou.

## Zastavenie {#stopping}

### `zastaviť …` (Začiatočník) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Zastaví skripty; čo presne zastaví, závisí od zvolenej možnosti.

- `všetky`: zastaví všetky skripty.
- `tento zásobník`: zastaví iba tento skript.
- `a ukončiť program`: zastaví program.

### `zastaviť ostatné zásobníky` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Zastaví všetky ostatné bežiace skripty; tento pokračuje.

## Bloky hubov {#hub-blocks}

### `pripojiť / odpojiť …` (Začiatočník) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Pripojí vybraný hub k programu alebo ho od neho odpojí.

- Možnosti: `pripojiť`, `odpojiť`
- Huby: všetky.

### `… pripojené` (Začiatočník) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Vráti `true`, keď je vybraný hub pripojený.

- Typ: booleovský blok
- Huby: všetky.

### `nastaviť … konfiguráciu na …` (Pokročilý) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Prepne hub do jednej z jeho konfigurácií.

- Huby: Technic Move Hub (v súčasnosti jediný hub s konfiguráciami).
- Typické použitie: prepnúť hub do inej konfigurácie pred vykonaním ďalších blokov.

### `získať … konfigurácia ako …` (Pokročilý) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Vráti aktuálnu konfiguráciu hubu.

- Typ: hlásiaci blok
- Výstup: `text` alebo `index`
- Huby: Technic Move Hub.
- Vráti `NaN`, keď hub nie je pripojený alebo nemá konfiguráciu.

### `nastaviť … režim napájania na …` (Začiatočník) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Nastaví režim výkonu hubu BuWizz 2.

- Režimy: `Pomaly`, `Normálny`, `Rýchlo`, `Ludicrous`
- Huby: BuWizz 2.

### `získať … režim napájania ako …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Vráti aktuálny režim výkonu hubu BuWizz 2.

- Výstup: `text` alebo `index`
- Huby: BuWizz 2.

### `nastaviť … riadiaci kanál na …` (Pokročilý) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Nastaví ovládací kanál hubu Mould King.

- Kanály: `A`, `B`, `C`
- Huby: Mould King 4.0 a 6.0.

### `získať … riadiaci kanál ako …` (Pokročilý) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Vráti aktuálny ovládací kanál hubu Mould King.

- Výstup: `text` alebo `index`
- Huby: Mould King 4.0 a 6.0.
