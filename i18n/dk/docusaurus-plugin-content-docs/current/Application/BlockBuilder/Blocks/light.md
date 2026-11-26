---
id: Light
title: Lys
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: portene `1`–`6` er hubbens seks lys, nummereret på hubben. Hvert lys kan indstilles for sig, lysstyrke 0–100 %.
- Typisk brug: forlygter, justerbar belysning.

### `sluk` (Begynder) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Slukker lysene, der er tilsluttet den valgte port.

- Hubs: de samme som for **tænde på … % lysstyrke**.

### `tænd lys …` (Begynder) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Tænder eller slukker lysene på en Technic Move Hub via dens bilprofil.

- Valg: `off`, `aktiveret`
- Hubs: Technic Move Hub. For at indstille hvert lys for sig skal du i stedet bruge **tænde på … % lysstyrke** med portene `1`–`6`; bland ikke de to på én hub (se [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hubs: [MINDSTORMS Robot Inventor og SPIKE Prime](/docs/Application/Hubs/RobotInventorHub) samt Technic Hub (blokken har Robot Inventor-hub-ikonet). Sensoren bliver ved med at måle afstanden, mens dens lys er tændt.

### `tænd farvesensorens lys 1 … 2 … 3 … %` (Avanceret) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Indstiller lysstyrken for de tre lys omkring linsen på Technic-farvesensoren (SPIKE-farvesensoren) på den valgte port, fra 0 til 100 % hver.

- Hubs: Technic Hub.
- Mens dens lys er tændt, måler sensoren ikke: Dens farve- og lysværdier forbliver, som de var. Før du læser sensoren igen, skal du bruge Technic-sensor: **indstil tilstand til …** (`standard` eller `omgivende`) på den port. Programkontrollen i blokeditoren advarer, når et program tænder sensorens lys og læser den uden **indstil tilstand**.
- Typisk brug: et signallys på modellen eller øjnene på en robot.

## Robot Inventor-lysmatrix {#robot-inventor-light}

Disse blokke kommer fra Robot Inventor-appen og virker kun med [hubbene fra MINDSTORMS Robot Inventor og SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). De har hub-ikonet. Tryk på billedet i en blok for at tegne det; i animationsblokkene viser det det første billede og antallet af billeder.

### `tænd … i … sekunder` (Begynder) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Viser billedet på lysmatrixen i den angivne tid (som standard 2 sekunder) og slukker det derefter. Blokken venter, til tiden er gået.

### `afspil animation … ved … billeder pr. sekund indtil færdig` (Begynder) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Afspiller animationens billeder én gang med den angivne hastighed (som standard 4 billeder pr. sekund) og venter til det sidste billede.

### `start animation … ved … billeder pr. sekund …` (Begynder) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Starter animationen og går straks videre til næste blok.

- `én gang`: afspiller den én gang.
- `gentage` (standard): afspiller den igen og igen, indtil en anden lysblok ændrer matrixen.

### `indstil pixellysstyrke til … %` (Avanceret) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Indstiller, hvor klart billederne og animationerne fra Robot Inventor-blokkene ovenfor lyser, fra 0 til 100 %. Indtil denne blok kører, lyser de med fuld lysstyrke. Hver pixel beholder sin egen lysstyrke i forhold til de andre.

### Tegning af billeder og animationer {#animation-editor}

Tryk på billedet i en lysblok for at åbne editoren:

- **Pixels**: Tryk på eller træk hen over 5×5-gitteret for at male med den valgte lysstyrke.
- **Lysstyrke**: Skalaen ved siden af gitteret vælger den lysstyrke, der males med (10 niveauer, fra slukket til fuld).
- **Alle slukket / alle tændt**: ryd billedet, eller fyld det med den valgte lysstyrke.
- **Billeder** (kun animationsblokke): Bjælken under gitteret viser det aktuelle billede, for eksempel **2/3**. Knapperne går til det **forrige** og **næste** billede, **tilføjer** et tomt billede efter det aktuelle, **dublerer** det aktuelle billede eller **sletter** det (en animation beholder mindst ét billede).

<Screenshot name="robot-inventor-animation-editor" alt="Animationseditoren: 5×5-gitteret, lysstyrkeskalaen og billedbjælken" width={600} />

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
