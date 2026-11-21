---
id: Control
title: Besturing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Besturing {#control}

Besturingsblokken bepalen hoe een script verloopt: wachten, lussen, vertakkingen en stoppen. Als het profiel hubs heeft, bevat deze categorie ook blokken die hubs verbinden en hun instellingen wijzigen.

## Wachtblokken {#wait-blocks}

### `wachten … seconden` (Beginner) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pauzeert het script het opgegeven aantal seconden.

### `wacht tot …` (Gevorderd) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pauzeert het script tot de voorwaarde waar wordt.

## Lussen {#loops}

### `herhalen …` (Gevorderd) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Voert de blokken erin het opgegeven aantal keren uit (standaard 10).

### `herhalen zolang …` (Gevorderd) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Voert de blokken erin steeds opnieuw uit tot de voorwaarde waar wordt.

### `altijd herhalen` (Gevorderd) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Voert de blokken erin steeds opnieuw uit tot het script of het programma stopt. Eronder kan niets worden vastgemaakt.

## Vertakkingen {#branches}

### `als … dan` (Beginner) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Voert de blokken erin alleen uit als de voorwaarde waar is.

### `als … dan … anders` (Gevorderd) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Voert de eerste tak uit als de voorwaarde waar is, en anders de tweede tak.

### `doe dit … en dit` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Voert de eerste groep blokken uit, daarna de tweede, en gaat pas dan verder met de blokken eronder.

## Stoppen {#stopping}

### `stoppen …` (Beginner) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stopt scripts; wat er precies stopt, hangt af van de optie.

- `alles`: stopt alle scripts.
- `deze stapel`: stopt alleen dit script.
- `en programma beëindigen`: stopt het programma.

### `stop andere stapels` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stopt alle andere draaiende scripts; dit script gaat door.

## Hubblokken {#hub-blocks}

### `verbinden / verbreken …` (Beginner) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Verbindt de geselecteerde hub met het programma of verbreekt de verbinding.

- Opties: `verbinden`, `verbreken`
- Hubs: alle.

### `… verbonden` (Beginner) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Geeft `true` terug als de geselecteerde hub verbonden is.

- Type: booleaans blok
- Hubs: alle.

### `stel … configuratie naar …` (Gevorderd) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Zet de hub over op een van zijn configuraties.

- Hubs: Technic Move Hub (op dit moment de enige hub met configuraties).
- Gebruikelijke toepassing: de hub naar een andere configuratie overzetten voordat de volgende blokken worden uitgevoerd.

### `krijg … configuratie als …` (Gevorderd) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Geeft de huidige configuratie van de hub terug.

- Type: waardeblok
- Uitvoer: `tekst` of `index`
- Hubs: Technic Move Hub.
- Geeft `NaN` terug als de hub niet verbonden is of geen configuratie heeft.

### `stel … stroommodus naar …` (Beginner) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Stelt de vermogensmodus van een BuWizz 2 in.

- Modi: `Langzaam`, `Normaal`, `Snel`, `Ludicrous`
- Hubs: BuWizz 2.

### `krijg … stroommodus als …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Geeft de huidige vermogensmodus van een BuWizz 2 terug.

- Uitvoer: `tekst` of `index`
- Hubs: BuWizz 2.

### `stel … besturingskanaal naar …` (Gevorderd) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Stelt het besturingskanaal van een Mould King-hub in.

- Kanalen: `A`, `B`, `C`
- Hubs: Mould King 4.0 en 6.0.

### `krijg … besturingskanaal als …` (Gevorderd) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Geeft het huidige besturingskanaal van een Mould King-hub terug.

- Uitvoer: `tekst` of `index`
- Hubs: Mould King 4.0 en 6.0.
