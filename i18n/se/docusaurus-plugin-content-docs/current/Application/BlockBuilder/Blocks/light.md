---
id: Light
title: Ljus
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: portarna `1`–`6` är hubbens sex lampor, numrerade på hubben. Varje lampa kan ställas in separat, ljusstyrka 0–100 %.
- Typisk användning: strålkastare, justerbar belysning.

### `stänga av` (Nybörjare) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Släcker lamporna som är anslutna till den valda porten.

- Hubbar: samma som för **slå på vid … % ljusstyrka**.

### `slå på ljusen …` (Nybörjare) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Tänder eller släcker lamporna på en Technic Move Hub via dess bilprofil.

- Alternativ: `av`, `aktiverad`
- Hubbar: Technic Move Hub. Om du vill ställa in varje lampa separat använder du i stället **slå på vid … % ljusstyrka** med portarna `1`–`6`; blanda inte de två på samma hubb (se [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hubbar: [MINDSTORMS Robot Inventor och SPIKE Prime](/docs/Application/Hubs/RobotInventorHub) samt Technic Hub (blocket har Robot Inventor-hubbikonen). Sensorn fortsätter att mäta avståndet medan dess lampor är tända.

### `tänd färgsensorns ljus 1 … 2 … 3 … %` (Avancerad) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Ställer in ljusstyrkan för de tre lamporna runt linsen på Technic-färgsensorn (SPIKE-färgsensorn) på den valda porten, från 0 till 100 % var.

- Hubbar: Technic Hub.
- Medan lamporna är tända mäter sensorn inte: dess färg- och ljusvärden står kvar som de var. Innan du läser av sensorn igen använder du Technic-sensor: **ställ in läge på …** (`standard` eller `omgivning`) på den porten. Programkontrollen i blockredigeraren varnar när ett program tänder sensorns ljus och läser av den utan **ställ in läge**.
- Typisk användning: en signallampa på modellen eller ögonen på en robot.

## Robot Inventor-ljusmatris {#robot-inventor-light}

De här blocken kommer från Robot Inventor-appen och fungerar bara med [MINDSTORMS Robot Inventor- och SPIKE Prime-hubbarna](/docs/Application/Hubs/RobotInventorHub). De har hubbikonen. Tryck på bilden i ett block för att rita den; i animationsblocken visar den den första bildrutan och antalet bildrutor.

### `slå på … för … sekunder` (Nybörjare) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Visar bilden på ljusmatrisen under angiven tid (2 sekunder som standard) och släcker den sedan. Blocket väntar tills tiden har gått.

### `spela animation … vid … bilder per sekund tills klart` (Nybörjare) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Spelar animationens bildrutor en gång med angiven hastighet (4 bilder per sekund som standard) och väntar till den sista bildrutan.

### `starta animation … vid … bilder per sekund …` (Nybörjare) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Startar animationen och går direkt vidare till nästa block.

- `en gång`: spelar den en gång.
- `upprepa` (standard): spelar den om och om igen tills ett annat ljusblock ändrar matrisen.

### `ställ in pixelljusstyrka till … %` (Avancerad) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Ställer in hur ljusa bilderna och animationerna i Robot Inventor-blocken ovan är, från 0 till 100 %. Tills det här blocket körs har de full ljusstyrka. Varje pixel behåller sin egen ljusstyrka i förhållande till de andra.

### Rita bilder och animationer {#animation-editor}

Tryck på bilden i ett ljusblock för att öppna redigeraren:

- **Pixlar**: tryck på eller dra över rutnätet 5×5 för att måla med den valda ljusstyrkan.
- **Ljusstyrka**: skalan bredvid rutnätet väljer ljusstyrkan att måla med (10 nivåer, från släckt till full).
- **Alla släckta / alla tända**: töm bilden eller fyll den med den valda ljusstyrkan.
- **Bildrutor** (bara animationsblock): fältet under rutnätet visar den aktuella bildrutan, till exempel **2/3**. Knapparna går till **föregående** och **nästa** bildruta, **lägger till** en tom bildruta efter den aktuella, **duplicerar** den aktuella bildrutan eller **tar bort** den (en animation behåller minst en bildruta).

<Screenshot name="robot-inventor-animation-editor" alt="Animationsredigeraren: rutnätet 5×5, ljusstyrkeskalan och bildrutefältet" width={600} />

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
