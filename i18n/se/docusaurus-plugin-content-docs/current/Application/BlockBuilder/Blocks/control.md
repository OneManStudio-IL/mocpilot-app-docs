---
id: Control
title: Kontroll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontroll {#control}

Kontrollblock bestämmer hur ett skript körs: väntan, loopar, förgreningar och stopp. När profilen har hubbar innehåller kategorin också block som ansluter hubbar och ändrar deras inställningar.

## Vänteblock {#wait-blocks}

### `vänta … sekunder` (Nybörjare) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pausar skriptet i angivet antal sekunder.

### `vänta tills …` (Avancerad) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pausar skriptet tills villkoret blir sant.

## Loopar {#loops}

### `upprepa …` (Avancerad) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Kör blocken inuti angivet antal gånger (10 som standard).

### `upprepa så länge …` (Avancerad) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Kör blocken inuti om och om igen tills villkoret blir sant.

### `upprepa alltid` (Avancerad) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Kör blocken inuti om och om igen tills skriptet eller programmet stoppas. Ingenting kan fästas under det.

## Förgreningar {#branches}

### `om … då` (Nybörjare) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Kör blocken inuti bara när villkoret är sant.

### `om … då … annars` (Avancerad) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Kör den första grenen när villkoret är sant och annars den andra grenen.

### `gör detta … och detta` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Kör den första gruppen block, sedan den andra, och fortsätter först därefter med blocken under.

## Stoppa {#stopping}

### `stoppa …` (Nybörjare) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stoppar skript; exakt vad som stoppas beror på alternativet.

- `alla`: stoppar alla skript.
- `den här högen`: stoppar bara det här skriptet.
- `och avsluta program`: stoppar programmet.

### `stoppa andra högar` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stoppar alla andra skript som körs; det här fortsätter.

## Hubbblock {#hub-blocks}

### `ansluta / koppla från …` (Nybörjare) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Ansluter eller kopplar från den valda hubben från programmet.

- Alternativ: `ansluta`, `koppla från`
- Hubbar: alla.

### `… ansluten` (Nybörjare) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnerar `true` när den valda hubben är ansluten.

- Typ: booleskt block
- Hubbar: alla.

### `ställ in … konfiguration till …` (Avancerad) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Växlar hubben till en av dess konfigurationer.

- Hubbar: Technic Move Hub (den enda hubben med konfigurationer i dag).
- Typisk användning: växla hubben till en annan konfiguration innan nästa block körs.

### `hämta … konfiguration som …` (Avancerad) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Returnerar hubbens aktuella konfiguration.

- Typ: rapportblock
- Utdata: `text` eller `index`
- Hubbar: Technic Move Hub.
- Returnerar `NaN` när hubben inte är ansluten eller saknar konfiguration.

### `ställ in … strömläge till …` (Nybörjare) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Ställer in effektläget på en BuWizz 2.

- Lägen: `Slow`, `Normal`, `Fast`, `Ludicrous`
- Hubbar: BuWizz 2.

### `hämta … strömläge som …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnerar det aktuella effektläget på en BuWizz 2.

- Utdata: `text` eller `index`
- Hubbar: BuWizz 2.

### `ställ in … styrkanal till …` (Avancerad) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Ställer in styrkanalen på en Mould King-hubb.

- Kanaler: `A`, `B`, `C`
- Hubbar: Mould King 4.0 och 6.0.

### `hämta … styrkanal som …` (Avancerad) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnerar den aktuella styrkanalen på en Mould King-hubb.

- Utdata: `text` eller `index`
- Hubbar: Mould King 4.0 och 6.0.
