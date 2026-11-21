---
id: Control
title: Ovládání
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovládání {#control}

Bloky ovládání určují, jak skript běží: čekání, cykly, větvení a zastavení. Když má profil huby, obsahuje tato kategorie také bloky, které huby připojují a mění jejich nastavení.

## Bloky čekání {#wait-blocks}

### `čekat … sekundy` (Začátečník) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pozastaví skript na zadaný počet sekund.

### `čekat, dokud …` (Pokročilý) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pozastaví skript, dokud se podmínka nestane pravdivou.

## Cykly {#loops}

### `opakovat …` (Pokročilý) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Spustí bloky uvnitř zadaný početkrát (výchozí je 10).

### `opakovat, dokud …` (Pokročilý) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Spouští bloky uvnitř stále znovu, dokud se podmínka nestane pravdivou.

### `opakovat vždy` (Pokročilý) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Spouští bloky uvnitř pořád dokola, dokud se skript nebo program nezastaví. Pod něj nelze nic připojit.

## Větvení {#branches}

### `pokud … pak` (Začátečník) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Spustí bloky uvnitř, jen když je podmínka pravdivá.

### `pokud … pak … jinak` (Pokročilý) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Když je podmínka pravdivá, spustí první větev, jinak druhou.

### `udělej to … a to` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Spustí první skupinu bloků, pak druhou a teprve potom pokračuje bloky pod sebou.

## Zastavení {#stopping}

### `zastavit …` (Začátečník) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Zastaví skripty; co přesně zastaví, závisí na volbě.

- `všechny`: zastaví všechny skripty.
- `tento zásobník`: zastaví jen tento skript.
- `a ukončit program`: zastaví program.

### `zastavit ostatní zásobníky` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Zastaví všechny ostatní běžící skripty; tento běží dál.

## Bloky hubů {#hub-blocks}

### `připojit / odpojit …` (Začátečník) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Připojí vybraný hub k programu nebo ho odpojí.

- Volby: `připojit`, `odpojit`
- Huby: všechny.

### `… připojeno` (Začátečník) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Vrací `true`, když je vybraný hub připojený.

- Typ: booleovský blok
- Huby: všechny.

### `nastavit … konfiguraci na …` (Pokročilý) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Přepne hub do jedné z jeho konfigurací.

- Huby: Technic Move Hub (zatím jediný hub s konfiguracemi).
- Typické použití: přepnout hub do jiné konfigurace dřív, než se spustí další bloky.

### `získat … konfigurace jako …` (Pokročilý) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Vrací aktuální konfiguraci hubu.

- Typ: hodnotový blok
- Výstup: `text` nebo `index`
- Huby: Technic Move Hub.
- Vrací `NaN`, když hub není připojený nebo nemá žádnou konfiguraci.

### `nastavit … režim napájení na …` (Začátečník) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Nastaví režim výkonu BuWizz 2.

- Režimy: `Pomalé`, `Normální`, `Rychlé`, `Ludicrous`
- Huby: BuWizz 2.

### `získat … napájecí režim jako …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Vrací aktuální režim výkonu BuWizz 2.

- Výstup: `text` nebo `index`
- Huby: BuWizz 2.

### `nastavit … řídicí kanál na …` (Pokročilý) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Nastaví řídicí kanál hubu Mould King.

- Kanály: `A`, `B`, `C`
- Huby: Mould King 4.0 a 6.0.

### `získat … řídicí kanál jako …` (Pokročilý) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Vrací aktuální řídicí kanál hubu Mould King.

- Výstup: `text` nebo `index`
- Huby: Mould King 4.0 a 6.0.
