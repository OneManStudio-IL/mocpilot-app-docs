---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control {#control}

Blocurile de control decid cum rulează un script: așteptări, bucle, ramificații și oprire. Când profilul are huburi, această categorie conține și blocuri care conectează huburile și le schimbă setările.

## Blocuri de așteptare {#wait-blocks}

### `aștepta … secunde` (Începător) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Întrerupe scriptul pentru numărul dat de secunde.

### `așteptați până la …` (Avansat) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Întrerupe scriptul până când condiția devine adevărată.

## Bucle {#loops}

### `repetă …` (Avansat) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Rulează blocurile din interior de numărul dat de ori (implicit 10).

### `repeta cât timp …` (Avansat) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Rulează blocurile din interior iar și iar, până când condiția devine adevărată.

### `repeta mereu` (Avansat) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Rulează blocurile din interior în mod repetat, până când scriptul sau programul se oprește. Sub el nu se poate atașa nimic.

## Ramificații {#branches}

### `dacă … atunci` (Începător) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Rulează blocurile din interior doar când condiția este adevărată.

### `dacă … atunci … altul` (Avansat) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Rulează prima ramură când condiția este adevărată, iar a doua în caz contrar.

### `fă aceasta … și asta` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Rulează primul grup de blocuri, apoi pe al doilea și abia după aceea continuă cu blocurile de dedesubt.

## Oprire {#stopping}

### `opri …` (Începător) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Oprește scripturi; ce anume oprește depinde de opțiune.

- `toate`: oprește toate scripturile.
- `acest stivă`: oprește doar acest script.
- `și închide programul`: oprește programul.

### `opri alte stive` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Oprește toate celelalte scripturi care rulează; acesta continuă.

## Blocuri pentru huburi {#hub-blocks}

### `conecta / deconectează …` (Începător) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Conectează sau deconectează hubul selectat din program.

- Opțiuni: `conecta`, `deconectează`
- Huburi: toate.

### `… conectat` (Începător) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returnează `true` când hubul selectat este conectat.

- Tip: bloc boolean
- Huburi: toate.

### `setează … configurația la …` (Avansat) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Trece hubul la una dintre configurațiile sale.

- Huburi: Technic Move Hub (deocamdată singurul hub cu configurații).
- Utilizare tipică: treci hubul la altă configurație înainte de a rula blocurile următoare.

### `obține … configurație ca …` (Avansat) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Returnează configurația curentă a hubului.

- Tip: bloc raportor
- Ieșire: `text` sau `index`
- Huburi: Technic Move Hub.
- Returnează `NaN` când hubul nu este conectat sau nu are nicio configurație.

### `setează … mod de alimentare la …` (Începător) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Setează modul de putere al unui BuWizz 2.

- Moduri: `Lentă`, `Normal`, `Rapidă`, `Ludicrous`
- Huburi: BuWizz 2.

### `obține … modul de putere ca …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returnează modul de putere curent al unui BuWizz 2.

- Ieșire: `text` sau `index`
- Huburi: BuWizz 2.

### `setează … canal de control către …` (Avansat) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Setează canalul de control al unui hub Mould King.

- Canale: `A`, `B`, `C`
- Huburi: Mould King 4.0 și 6.0.

### `obține … canal de control ca …` (Avansat) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returnează canalul de control curent al unui hub Mould King.

- Ieșire: `text` sau `index`
- Huburi: Mould King 4.0 și 6.0.
