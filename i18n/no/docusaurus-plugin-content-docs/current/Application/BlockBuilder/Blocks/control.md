---
id: Control
title: Kontroll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontroll {#control}

Kontrollblokker bestemmer hvordan et skript kjører: venting, løkker, forgreninger og stopp. Når profilen har hubber, inneholder denne kategorien også blokker som kobler til hubber og endrer innstillingene deres.

## Venteblokker {#wait-blocks}

### `vent … sekunder` (Nybegynner) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Setter skriptet på pause i det angitte antallet sekunder.

### `vent til …` (Avansert) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Setter skriptet på pause til betingelsen blir sann.

## Løkker {#loops}

### `gjenta …` (Avansert) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Kjører blokkene inni det angitte antallet ganger (10 som standard).

### `gjenta så lenge …` (Avansert) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Kjører blokkene inni om og om igjen til betingelsen blir sann.

### `gjenta alltid` (Avansert) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Kjører blokkene inni om og om igjen til skriptet eller programmet stopper. Ingenting kan festes under den.

## Forgreninger {#branches}

### `hvis … så` (Nybegynner) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Kjører blokkene inni bare når betingelsen er sann.

### `hvis … så … ellers` (Avansert) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Kjører den første grenen når betingelsen er sann, og ellers den andre grenen.

### `gjør dette … og dette` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Kjører den første gruppen blokker, deretter den andre, og fortsetter først da med blokkene under.

## Stopp {#stopping}

### `stopp …` (Nybegynner) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopper skript; hva som stoppes, avhenger av valget.

- `alle`: stopper alle skript.
- `denne stakken`: stopper bare dette skriptet.
- `og avslutt program`: stopper programmet.

### `stopp andre stakker` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopper alle andre skript som kjører; dette fortsetter.

## Hubblokker {#hub-blocks}

### `koble til / koble fra …` (Nybegynner) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Kobler den valgte huben til eller fra programmet.

- Valg: `koble til`, `koble fra`
- Hubber: alle.

### `… tilkoblet` (Nybegynner) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnerer `true` når den valgte huben er tilkoblet.

- Type: boolsk blokk
- Hubber: alle.

### `sett … konfigurasjon til …` (Avansert) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Bytter huben til en av konfigurasjonene sine.

- Hubber: Technic Move Hub (i dag den eneste huben med konfigurasjoner).
- Typisk bruk: bytt huben til en annen konfigurasjon før de neste blokkene kjører.

### `få … konfigurasjon som …` (Avansert) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Returnerer hubens gjeldende konfigurasjon.

- Type: rapporteringsblokk
- Utdata: `tekst` eller `indeks`
- Hubber: Technic Move Hub.
- Returnerer `NaN` når huben ikke er tilkoblet eller ikke har noen konfigurasjon.

### `sett … strømmodus til …` (Nybegynner) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Angir effektmodusen på en BuWizz 2.

- Moduser: `Sakte`, `Normal`, `Rask`, `Ludicrous`
- Hubber: BuWizz 2.

### `få … strømmodus som …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnerer gjeldende effektmodus på en BuWizz 2.

- Utdata: `tekst` eller `indeks`
- Hubber: BuWizz 2.

### `sett … kontrollkanal til …` (Avansert) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Angir styrekanalen på en Mould King-hub.

- Kanaler: `A`, `B`, `C`
- Hubber: Mould King 4.0 og 6.0.

### `få … kontrollkanal som …` (Avansert) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnerer gjeldende styrekanal på en Mould King-hub.

- Utdata: `tekst` eller `indeks`
- Hubber: Mould King 4.0 og 6.0.
