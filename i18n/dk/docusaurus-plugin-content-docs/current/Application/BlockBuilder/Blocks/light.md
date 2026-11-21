---
id: Light
title: Lys
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lys {#light}

Lysblokke styrer hubbens statuslys, lys, der er tilsluttet porte, og lysmatrixen på understøttede hubs. Kategorien vises, når en hub i profilen har noget, der kan lyse.

## Lys på hub og porte {#hub-and-port-lights}

### `sæt LED-farve til …` (Begynder) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Indstiller farven på hubbens statuslys.

- Hubs: LEGO Powered Up-hubs (inklusive Technic Move Hub), WeDo 2.0 og MINDSTORMS Robot Inventor-hubben.
- Typisk brug: vis modellens tilstand (klar, kører, advarsel, fejl).

### `tænde på … % lysstyrke` (Begynder) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Tænder lysene, der er tilsluttet den valgte port, med den angivne lysstyrke.

- Hubs: alle hubs med porte undtagen WeDo 2.0.
- Typisk brug: forlygter, justerbar belysning.

### `sluk` (Begynder) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Slukker lysene, der er tilsluttet den valgte port.

- Hubs: de samme som for **tænde på … % lysstyrke**.

### `tænd lys …` (Begynder) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Tænder eller slukker lysene på en Technic Move Hub.

- Valg: `off`, `aktiveret`
- Hubs: Technic Move Hub.

## Lysmatrix {#light-matrix}

Disse blokke arbejder med den 5×5-lysmatrix, der er indbygget i MINDSTORMS Robot Inventor-hubben.

### `tænd …` (Avanceret) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Viser det valgte billede på lysmatrixen og går straks videre til næste blok. Billedet bliver vist, indtil en anden blok ændrer matrixen, eller programmet stopper.

### `skriv …` (Begynder) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Ruller teksten hen over lysmatrixen ét bogstav ad gangen.

### `sluk pixels` (Begynder) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Slukker alle lysmatrixens pixels.

### `indstil pixel … x … y … lysstyrke …` (Avanceret) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Indstiller lysstyrken for én pixel; resten af matrixen forbliver uændret. `x` er kolonnen, og `y` er rækken; pixel `1, 1` sidder i øverste venstre hjørne.

### `roter orientering …` (Avanceret) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Roterer billedet på lysmatrixen 90 grader med eller mod uret. Den nye orientering gælder for de Lys-blokke, der kører derefter.

### `indstil orientering til …` (Avanceret) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Indstiller orienteringen af billedet på lysmatrixen. Standard er `opretstående`; den nye orientering gælder for de Lys-blokke, der kører derefter.

- Valg: `opretstående`, `venstre`, `højre`, `på hovedet`

## Lys på afstandssensoren {#distance-sensor-lights}

### `tænd …` (Begynder) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Styrer lysene omkring »øjnene« på afstandssensoren på den valgte port. Du kan tænde eller slukke hvert lys eller sætte en liste ind i feltet for at indstille lysstyrken for hvert lys.

- Hubs: MINDSTORMS Robot Inventor.

## Port-LED'er på BuWizz 3 {#buwizz-3-port-leds}

Disse blokke indstiller farven på LED'en ved siden af en port på BuWizz 3.

### `sæt port LED farve til …` (Begynder) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Indstiller port-LED'en til en af de foruddefinerede farver.

### `sæt port LED farve til … … …` (RGB) (Avanceret) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Indstiller port-LED'ens farve ud fra værdier for rød, grøn og blå.

- Typisk brug: en hvilken som helst farve, bløde farveskift.

### `sæt port LED farve fra streng …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Indstiller port-LED'ens farve ud fra tekst.

- Typisk brug: hent farven fra en variabel eller en liste.
