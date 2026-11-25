---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: de poorten `1`–`6` zijn de zes lichten van de hub, genummerd op de hub. Elk licht kun je apart instellen, helderheid 0–100 %.
- Gebruikelijke toepassing: koplampen, regelbare verlichting.

### `uitzetten` (Beginner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Zet de lampen op de gekozen poort uit.

- Hubs: dezelfde als bij **inschakelen bij … % helderheid**.

### `zet lichten aan …` (Beginner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Zet de lichten van een Technic Move Hub aan of uit via zijn autoprofiel.

- Opties: `uit`, `ingeschakeld`
- Hubs: Technic Move Hub. Om elk licht apart in te stellen, gebruik je in plaats daarvan **inschakelen bij … % helderheid** met de poorten `1`–`6`; combineer de twee niet op één hub (zie [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (het blok draagt het hubpictogram).

## Robot Inventor-lichtmatrix {#robot-inventor-light}

Deze blokken komen uit de Robot Inventor-app en werken alleen met de [hubs van MINDSTORMS Robot Inventor en SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ze dragen het hubpictogram. Tik op de afbeelding in een blok om hem te tekenen; in de animatieblokken toont hij het eerste beeld en het aantal beelden.

### `inschakelen … voor … seconden` (Beginner) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Toont de afbeelding op de lichtmatrix gedurende de opgegeven tijd (standaard 2 seconden) en zet hem daarna uit. Het blok wacht tot de tijd om is.

### `speel animatie … bij … beelden per seconde tot het klaar is` (Beginner) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Speelt de beelden van de animatie één keer af met de opgegeven snelheid (standaard 4 beelden per seconde) en wacht tot het laatste beeld.

### `start animatie … bij … beelden per seconde …` (Beginner) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Start de animatie en gaat meteen door naar het volgende blok.

- `één keer`: speelt hem één keer af.
- `herhalen` (standaard): speelt hem steeds opnieuw af, totdat een ander lichtblok de matrix verandert.

### `stel pixelhelderheid in op … %` (Gevorderd) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Stelt in hoe helder de afbeeldingen en animaties van de Robot Inventor-blokken hierboven zijn, van 0 tot 100 %. Totdat dit blok draait, branden ze op volle helderheid. Elke pixel behoudt zijn eigen helderheid ten opzichte van de andere.

### Afbeeldingen en animaties tekenen {#animation-editor}

Tik op de afbeelding in een lichtblok om de editor te openen:

- **Pixels**: tik op het raster van 5×5 of sleep eroverheen om te schilderen met de gekozen helderheid.
- **Helderheid**: de schaal naast het raster kiest de helderheid om mee te schilderen (10 niveaus, van uit tot vol).
- **Alles uit / alles aan**: de afbeelding wissen of vullen met de gekozen helderheid.
- **Beelden** (alleen animatieblokken): de balk onder het raster toont het huidige beeld, bijvoorbeeld **2/3**. De knoppen gaan naar het **vorige** en **volgende** beeld, **voegen** een leeg beeld na het huidige **toe**, **dupliceren** het huidige beeld of **verwijderen** het (een animatie houdt minstens één beeld).

<Screenshot name="robot-inventor-animation-editor" alt="De animatie-editor: het raster van 5×5, de helderheidsschaal en de beeldbalk" width={600} />

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
