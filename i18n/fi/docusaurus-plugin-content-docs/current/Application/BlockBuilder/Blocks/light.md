---
id: Light
title: Valo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Valo {#light}

Valolohkot ohjaavat hubin tilavaloa, portteihin kytkettyjä valoja ja tuettujen hubien valomatriisia. Luokka näkyy, kun jossakin profiilin hubissa on jotain sytytettävää.

## Hubin ja porttien valot {#hub-and-port-lights}

### `aseta LED-väri …` (Aloittelija) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Asettaa hubin tilavalon värin.

- Hubit: LEGO Powered Up -hubit (myös Technic Move Hub), WeDo 2.0 ja MINDSTORMS Robot Inventor -hubi.
- Tyypillinen käyttö: mallin tilan näyttäminen (valmis, käynnissä, varoitus, virhe).

### `käynnistä kohdassa … % kirkkaus` (Aloittelija) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Sytyttää valittuun porttiin kytketyt valot annetulla kirkkaudella.

- Hubit: kaikki hubit, joissa on portteja, paitsi WeDo 2.0.
- Tyypillinen käyttö: ajovalot, säädettävä valaistus.

### `sammuta` (Aloittelija) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Sammuttaa valittuun porttiin kytketyt valot.

- Hubit: samat kuin lohkolla **käynnistä kohdassa … % kirkkaus**.

### `kytke valot päälle …` (Aloittelija) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Sytyttää tai sammuttaa Technic Move Hubin valot.

- Vaihtoehdot: `pois`, `käytössä`
- Hubit: Technic Move Hub.

## Valomatriisi {#light-matrix}

Nämä lohkot toimivat MINDSTORMS Robot Inventor -hubin sisäänrakennetun 5×5-valomatriisin kanssa.

### `kytke päälle …` (Edistynyt) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Näyttää valitun kuvan valomatriisissa ja siirtyy heti seuraavaan lohkoon. Kuva pysyy, kunnes jokin toinen lohko muuttaa matriisia tai ohjelma pysähtyy.

### `kirjoita …` (Aloittelija) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Vierittää tekstin valomatriisin poikki kirjain kerrallaan.

### `sammuta pikselit` (Aloittelija) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Sammuttaa valomatriisin kaikki pikselit.

### `aseta pikseli … x … y … kirkkaus …` (Edistynyt) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Asettaa yhden pikselin kirkkauden; muu matriisi pysyy ennallaan. `x` on sarake ja `y` rivi; pikseli `1, 1` on vasemmassa yläkulmassa.

### `kierrä suuntaa …` (Edistynyt) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Kiertää valomatriisin kuvaa 90 astetta myötä- tai vastapäivään. Uusi suunta koskee sen jälkeen suoritettavia Valo-lohkoja.

### `aseta suunta …` (Edistynyt) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Asettaa valomatriisin kuvan suunnan. Oletuksena se on `oikein päin`; uusi suunta koskee sen jälkeen suoritettavia Valo-lohkoja.

- Vaihtoehdot: `oikein päin`, `vasen`, `oikea`, `ylösalaisin`

## Etäisyysanturin valot {#distance-sensor-lights}

### `sytytä …` (Aloittelija) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Ohjaa valitussa portissa olevan etäisyysanturin ”silmien” ympärillä olevia valoja. Voit sytyttää tai sammuttaa jokaisen valon tai asettaa paikkaan listan, jolla määrität kunkin valon kirkkauden.

- Hubit: MINDSTORMS Robot Inventor.

## BuWizz 3:n porttien LEDit {#buwizz-3-port-leds}

Nämä lohkot asettavat BuWizz 3:n portin vieressä olevan LEDin värin.

### `aseta portin LED-väri …` (Aloittelija) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Asettaa portin LEDiin jonkin valmiista väreistä.

### `aseta portin LED-väri … … …` (RGB) (Edistynyt) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Asettaa portin LEDin värin punaisen, vihreän ja sinisen arvoista.

- Tyypillinen käyttö: mikä tahansa haluamasi väri, pehmeät värinvaihdot.

### `aseta portin LED-väri merkkijonosta …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Asettaa portin LEDin värin tekstistä.

- Tyypillinen käyttö: värin ottaminen muuttujasta tai listasta.
