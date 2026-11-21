---
id: Light
title: Ljus
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ljus {#light}

Ljusblock styr hubbens statuslampa, lampor som är anslutna till portar och ljusmatrisen på hubbar som har en. Kategorin visas när en hubb i profilen har något som kan lysa.

## Hubb- och portlampor {#hub-and-port-lights}

### `ställ in LED-färg till …` (Nybörjare) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Ställer in färgen på hubbens statuslampa.

- Hubbar: LEGO Powered Up-hubbar (inklusive Technic Move Hub), WeDo 2.0 och MINDSTORMS Robot Inventor-hubben.
- Typisk användning: visa modellens tillstånd (klar, körs, varning, fel).

### `slå på vid … % ljusstyrka` (Nybörjare) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Tänder lamporna som är anslutna till den valda porten med angiven ljusstyrka.

- Hubbar: alla hubbar med portar utom WeDo 2.0.
- Typisk användning: strålkastare, justerbar belysning.

### `stänga av` (Nybörjare) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Släcker lamporna som är anslutna till den valda porten.

- Hubbar: samma som för **slå på vid … % ljusstyrka**.

### `slå på ljusen …` (Nybörjare) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Tänder eller släcker lamporna på en Technic Move Hub.

- Alternativ: `av`, `aktiverad`
- Hubbar: Technic Move Hub.

## Ljusmatris {#light-matrix}

De här blocken fungerar med den inbyggda 5×5-ljusmatrisen i MINDSTORMS Robot Inventor-hubben.

### `slå på …` (Avancerad) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Visar den valda bilden på ljusmatrisen och går direkt vidare till nästa block. Bilden ligger kvar tills ett annat block ändrar matrisen eller programmet stoppas.

### `skriv …` (Nybörjare) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Rullar texten över ljusmatrisen, en bokstav i taget.

### `släck pixlar` (Nybörjare) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Släcker alla pixlar i ljusmatrisen.

### `ställ in pixel … x … y … ljusstyrka …` (Avancerad) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Ställer in ljusstyrkan för en pixel; resten av matrisen förblir som den är. `x` är kolumnen och `y` är raden; pixel `1, 1` sitter i övre vänstra hörnet.

### `rotera orientering …` (Avancerad) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Roterar bilden på ljusmatrisen 90 grader, medurs eller moturs. Den nya orienteringen gäller för de Ljus-block som körs efter det.

### `ställ in orientering till …` (Avancerad) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Ställer in orienteringen för bilden på ljusmatrisen. Standard är `upprätt`; den nya orienteringen gäller för de Ljus-block som körs efter det.

- Alternativ: `upprätt`, `vänster`, `höger`, `upp och ned`

## Avståndssensorns lampor {#distance-sensor-lights}

### `tänd …` (Nybörjare) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Styr lamporna runt ”ögonen” på avståndssensorn på den valda porten. Du kan tända eller släcka varje lampa, eller lägga en lista i facket för att ställa in ljusstyrkan för varje lampa.

- Hubbar: MINDSTORMS Robot Inventor.

## Portlysdioder på BuWizz 3 {#buwizz-3-port-leds}

De här blocken ställer in färgen på lysdioden bredvid en port på BuWizz 3.

### `ställ in port LED-färg till …` (Nybörjare) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Ställer in portlysdioden på en av de fördefinierade färgerna.

### `ställ in port LED-färg till … … …` (RGB) (Avancerad) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Ställer in portlysdiodens färg utifrån värden för rött, grönt och blått.

- Typisk användning: valfri färg, mjuka färgövergångar.

### `ställ in port LED-färg från sträng …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Ställer in portlysdiodens färg utifrån text.

- Typisk användning: hämta färgen från en variabel eller en lista.
