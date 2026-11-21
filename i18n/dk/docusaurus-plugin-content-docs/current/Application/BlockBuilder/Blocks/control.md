---
id: Control
title: Kontrol
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrol {#control}

Kontrolblokke bestemmer, hvordan et script kører: pauser, løkker, forgreninger og stop. Når profilen har hubs, indeholder kategorien også blokke, der forbinder hubs og ændrer deres indstillinger.

## Venteblokke {#wait-blocks}

### `vent … sekunder` (Begynder) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Sætter scriptet på pause i det angivne antal sekunder.

### `vent indtil …` (Avanceret) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Sætter scriptet på pause, indtil betingelsen bliver sand.

## Løkker {#loops}

### `gentage …` (Avanceret) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Kører blokkene inden i den det angivne antal gange (10 som standard).

### `gentag, indtil …` (Avanceret) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Kører blokkene inden i den igen og igen, indtil betingelsen bliver sand.

### `gentag altid` (Avanceret) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Kører blokkene inden i den igen og igen, indtil scriptet eller programmet stopper. Der kan ikke sættes noget fast under den.

## Forgreninger {#branches}

### `hvis … så` (Begynder) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Kører kun blokkene inden i den, når betingelsen er sand.

### `hvis … så … ellers` (Avanceret) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Kører den første gren, når betingelsen er sand, og ellers den anden gren.

### `gør dette … og dette` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Kører den første gruppe blokke, derefter den anden og fortsætter først derefter med blokkene under den.

## Stop {#stopping}

### `stop …` (Begynder) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopper scripts; hvad den præcis stopper, afhænger af valget.

- `alle`: stopper alle scripts.
- `denne stak`: stopper kun dette script.
- `og afslut program`: stopper programmet.

### `stop andre stakke` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopper alle andre kørende scripts; dette fortsætter.

## Hubblokke {#hub-blocks}

### `forbinde / afbryd …` (Begynder) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Forbinder eller afbryder den valgte hub fra programmet.

- Valg: `forbinde`, `afbryd`
- Hubs: alle.

### `… tilsluttet` (Begynder) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnerer `true`, når den valgte hub er forbundet.

- Type: boolesk blok
- Hubs: alle.

### `sæt … konfiguration til …` (Avanceret) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Skifter hubben til en af dens konfigurationer.

- Hubs: Technic Move Hub (i dag den eneste hub med konfigurationer).
- Typisk brug: skift hubben til en anden konfiguration, før de næste blokke kører.

### `hent … konfiguration som …` (Avanceret) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Returnerer hubbens aktuelle konfiguration.

- Type: rapporteringsblok
- Output: `tekst` eller `indeks`
- Hubs: Technic Move Hub.
- Returnerer `NaN`, når hubben ikke er forbundet eller ikke har nogen konfiguration.

### `sæt … strømtilstand til …` (Begynder) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Indstiller strømtilstanden på en BuWizz 2.

- Tilstande: `Langsom`, `Normal`, `Hurtig`, `Ludicrous`
- Hubs: BuWizz 2.

### `hent … strømtilstand som …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnerer den aktuelle strømtilstand på en BuWizz 2.

- Output: `tekst` eller `indeks`
- Hubs: BuWizz 2.

### `sæt … kontrolkanal til …` (Avanceret) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Indstiller kontrolkanalen på en Mould King-hub.

- Kanaler: `A`, `B`, `C`
- Hubs: Mould King 4.0 og 6.0.

### `hent … kontrolkanal som …` (Avanceret) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnerer den aktuelle kontrolkanal på en Mould King-hub.

- Output: `tekst` eller `indeks`
- Hubs: Mould King 4.0 og 6.0.
