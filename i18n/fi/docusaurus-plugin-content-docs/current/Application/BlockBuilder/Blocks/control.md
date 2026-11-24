---
id: Control
title: Hallinta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hallinta {#control}

Hallintalohkot määräävät, miten skripti etenee: odottaminen, silmukat, haarat ja pysäyttäminen. Kun profiilissa on hubeja, tässä luokassa ovat myös lohkot, jotka yhdistävät hubeja ja muuttavat niiden asetuksia.

## Odotuslohkot {#wait-blocks}

### `odota … sekunnit` (Aloittelija) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Keskeyttää skriptin annetuksi sekuntimääräksi.

### `odota kunnes …` (Edistynyt) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Keskeyttää skriptin, kunnes ehto toteutuu.

## Silmukat {#loops}

### `toista …` (Edistynyt) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Suorittaa sisällään olevat lohkot annetun määrän kertoja (oletuksena 10).

### `toistaa, kunnes …` (Edistynyt) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Suorittaa sisällään olevia lohkoja yhä uudelleen, kunnes ehto toteutuu.

### `toistaa aina` (Edistynyt) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Suorittaa sisällään olevia lohkoja uudelleen ja uudelleen, kunnes skripti tai ohjelma pysähtyy. Sen alle ei voi liittää mitään.

## Haarat {#branches}

### `jos … sitten` (Aloittelija) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Suorittaa sisällään olevat lohkot vain, kun ehto on tosi.

### `jos … sitten … muu` (Edistynyt) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Suorittaa ensimmäisen haaran, kun ehto on tosi, ja muuten toisen haaran.

### `tee tämä … ja tämä` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Suorittaa ensimmäisen lohkoryhmän, sitten toisen ja jatkaa vasta sen jälkeen alla olevilla lohkoilla.

## Pysäyttäminen {#stopping}

### `pysäytä …` (Aloittelija) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Pysäyttää skriptejä; mitä tarkalleen pysäytetään, riippuu valinnasta.

- `kaikki`: pysäyttää kaikki skriptit.
- `tämä pino`: pysäyttää vain tämän skriptin.
- `ja sulje ohjelma`: pysäyttää ohjelman.

### `pysäytä muut pinot` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Pysäyttää kaikki muut käynnissä olevat skriptit; tämä jatkaa toimintaansa.

## Hubilohkot {#hub-blocks}

### `yhdistä / katkaise …` (Aloittelija) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Yhdistää valitun hubin ohjelmaan tai katkaisee sen yhteyden.

- Vaihtoehdot: `yhdistä`, `katkaise`
- Hubit: kaikki.

### `… yhdistetty` (Aloittelija) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Palauttaa arvon `true`, kun valittu hubi on yhdistetty.

- Tyyppi: totuusarvolohko
- Hubit: kaikki.

### `aseta … kokoonpanoksi …` (Edistynyt) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Vaihtaa hubin johonkin sen kokoonpanoista.

- Hubit: Technic Move Hub (tällä hetkellä ainoa hubi, jolla on kokoonpanoja).
- Tyypillinen käyttö: vaihda hubi toiseen kokoonpanoon ennen seuraavien lohkojen suorittamista.

### `hanki … kokoonpano muodossa …` (Edistynyt) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Palauttaa hubin nykyisen kokoonpanon.

- Tyyppi: raportointilohko
- Tulos: `teksti` tai `indeksi`
- Hubit: Technic Move Hub.
- Palauttaa `NaN`, kun hubia ei ole yhdistetty tai sillä ei ole kokoonpanoa.

### `aseta … virta-asetus tilaksi …` (Aloittelija) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Asettaa BuWizz 2:n tehotilan.

- Tilat: `Hidas`, `Normaali`, `Nopea`, `Ludicrous`
- Hubit: BuWizz 2.

### `hanki … virta-asetus kuten …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Palauttaa BuWizz 2:n nykyisen tehotilan.

- Tulos: `teksti` tai `indeksi`
- Hubit: BuWizz 2.

### `aseta … ohjauskanava kohteeseen …` (Edistynyt) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Asettaa Mould King -hubin ohjauskanavan.

- Kanavat: `A`, `B`, `C`
- Hubit: Mould King 4.0 ja 6.0.

### `hanki … ohjauskanava nimellä …` (Edistynyt) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Palauttaa Mould King -hubin nykyisen ohjauskanavan.

- Tulos: `teksti` tai `indeksi`
- Hubit: Mould King 4.0 ja 6.0.
