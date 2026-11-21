---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Licht {#light}

Lichtblokken sturen het statuslampje van de hub aan, lampen die op poorten zijn aangesloten en de lichtmatrix van ondersteunde hubs. De categorie verschijnt als een hub in het profiel iets heeft om te laten oplichten.

## Hub- en poortlampen {#hub-and-port-lights}

### `stel LED-kleur in op …` (Beginner) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Stelt de kleur van het statuslampje van de hub in.

- Hubs: LEGO Powered Up-hubs (inclusief de Technic Move Hub), WeDo 2.0 en de MINDSTORMS Robot Inventor-hub.
- Gebruikelijke toepassing: de toestand van het model tonen (klaar, actief, waarschuwing, fout).

### `inschakelen bij … % helderheid` (Beginner) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Zet de lampen op de gekozen poort aan met de opgegeven helderheid.

- Hubs: alle hubs met poorten, behalve WeDo 2.0.
- Gebruikelijke toepassing: koplampen, regelbare verlichting.

### `uitzetten` (Beginner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Zet de lampen op de gekozen poort uit.

- Hubs: dezelfde als bij **inschakelen bij … % helderheid**.

### `zet lichten aan …` (Beginner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Zet de lichten van een Technic Move Hub aan of uit.

- Opties: `uit`, `ingeschakeld`
- Hubs: Technic Move Hub.

## Lichtmatrix {#light-matrix}

Deze blokken werken met de 5×5-lichtmatrix die in de MINDSTORMS Robot Inventor-hub zit.

### `inschakelen …` (Gevorderd) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Toont de gekozen afbeelding op de lichtmatrix en gaat meteen door naar het volgende blok. De afbeelding blijft staan tot een ander blok de matrix wijzigt of het programma stopt.

### `schrijven …` (Beginner) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Laat de tekst letter voor letter over de lichtmatrix lopen.

### `pixels uitschakelen` (Beginner) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Zet alle pixels van de lichtmatrix uit.

### `pixel instellen … x … y … helderheid …` (Gevorderd) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Stelt de helderheid van één pixel in; de rest van de matrix blijft zoals hij is. `x` is de kolom en `y` de rij; pixel `1, 1` zit in de linkerbovenhoek.

### `oriëntatie draaien …` (Gevorderd) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Draait het beeld op de lichtmatrix 90 graden, met de klok mee of tegen de klok in. De nieuwe oriëntatie geldt voor de lichtblokken die daarna worden uitgevoerd.

### `oriëntatie instellen op …` (Gevorderd) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Stelt de oriëntatie van het beeld op de lichtmatrix in. Standaard is dat `rechtop`; de nieuwe oriëntatie geldt voor de lichtblokken die daarna worden uitgevoerd.

- Opties: `rechtop`, `links`, `rechts`, `ondersteboven`

## Lampjes van de afstandssensor {#distance-sensor-lights}

### `oplichten …` (Beginner) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Stuurt de lampjes rond de “ogen” van de afstandssensor op de gekozen poort aan. Je kunt elk lampje aan- of uitzetten, of een lijst in het vak zetten om de helderheid van elk lampje in te stellen.

- Hubs: MINDSTORMS Robot Inventor.

## Poort-leds van de BuWizz 3 {#buwizz-3-port-leds}

Deze blokken stellen de kleur in van de led naast een poort van de BuWizz 3.

### `stel de poort-LED kleur in op …` (Beginner) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Zet de poort-led op een van de vooraf ingestelde kleuren.

### `stel de poort-LED kleur in op … … …` (RGB) (Gevorderd) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Stelt de kleur van de poort-led in op basis van waarden voor rood, groen en blauw.

- Gebruikelijke toepassing: elke gewenste kleur, vloeiende kleurovergangen.

### `stel de poort-LED kleur in vanuit string …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Stelt de kleur van de poort-led in op basis van tekst.

- Gebruikelijke toepassing: de kleur uit een variabele of een lijst halen.
