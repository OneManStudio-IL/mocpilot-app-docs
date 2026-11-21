---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Licht {#light}

Lichtblöcke steuern die Statusleuchte des Hubs, an Ports angeschlossene Lichter und die Lichtmatrix unterstützter Hubs. Die Kategorie erscheint, wenn ein Hub im Profil etwas zum Leuchten hat.

## Hub- und Port-Lichter {#hub-and-port-lights}

### `LED-Farbe setzen auf …` (Anfänger) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Stellt die Farbe der Statusleuchte des Hubs ein.

- Hubs: LEGO Powered Up-Hubs (einschließlich Technic Move Hub), WeDo 2.0 und der Hub von MINDSTORMS Robot Inventor.
- Typische Verwendung: den Zustand des Modells anzeigen (bereit, läuft, Warnung, Fehler).

### `einschalten bei … % Helligkeit` (Anfänger) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Schaltet die am ausgewählten Port angeschlossenen Lichter mit der angegebenen Helligkeit ein.

- Hubs: alle Hubs mit Ports außer WeDo 2.0.
- Typische Verwendung: Scheinwerfer, dimmbare Beleuchtung.

### `ausschalten` (Anfänger) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Schaltet die am ausgewählten Port angeschlossenen Lichter aus.

- Hubs: dieselben wie bei **einschalten bei … % Helligkeit**.

### `Lichter einschalten …` (Anfänger) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Schaltet die Lichter eines Technic Move Hub ein oder aus.

- Optionen: `aus`, `auf`
- Hubs: Technic Move Hub.

## Lichtmatrix {#light-matrix}

Diese Blöcke arbeiten mit der 5×5-Lichtmatrix, die im Hub von MINDSTORMS Robot Inventor eingebaut ist.

### `einschalten …` (Fortgeschritten) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Zeigt das ausgewählte Bild auf der Lichtmatrix und geht sofort zum nächsten Block über. Das Bild bleibt, bis ein anderer Block die Matrix ändert oder das Programm stoppt.

### `schreiben …` (Anfänger) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Lässt den Text Buchstabe für Buchstabe über die Lichtmatrix laufen.

### `Pixel ausschalten` (Anfänger) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Schaltet alle Pixel der Lichtmatrix aus.

### `Pixel setzen … x … y … Helligkeit …` (Fortgeschritten) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Stellt die Helligkeit eines Pixels ein; der Rest der Matrix bleibt, wie er ist. `x` ist die Spalte und `y` die Zeile; Pixel `1, 1` liegt in der oberen linken Ecke.

### `Ausrichtung drehen …` (Fortgeschritten) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Dreht das Bild auf der Lichtmatrix um 90 Grad im oder gegen den Uhrzeigersinn. Die neue Ausrichtung gilt für die Lichtblöcke, die danach laufen.

### `Ausrichtung festlegen auf …` (Fortgeschritten) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Legt die Ausrichtung des Bildes auf der Lichtmatrix fest. Standardmäßig ist sie `aufrecht`; die neue Ausrichtung gilt für die Lichtblöcke, die danach laufen.

- Optionen: `aufrecht`, `links`, `rechts`, `auf dem Kopf`

## Lichter des Abstandssensors {#distance-sensor-lights}

### `aufleuchten …` (Anfänger) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Steuert die Lichter um die „Augen“ des Abstandssensors am ausgewählten Port. Sie können jedes Licht ein- oder ausschalten oder eine Liste in das Eingabefeld setzen, um die Helligkeit jedes Lichts festzulegen.

- Hubs: MINDSTORMS Robot Inventor.

## Port-LEDs des BuWizz 3 {#buwizz-3-port-leds}

Diese Blöcke stellen die Farbe der LED neben einem Port des BuWizz 3 ein.

### `Setze die Port-LED-Farbe auf …` (Anfänger) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Stellt die Port-LED auf eine der vordefinierten Farben ein.

### `Setze die Port-LED-Farbe auf … … …` (RGB) (Fortgeschritten) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Stellt die Farbe der Port-LED aus Rot-, Grün- und Blauwerten ein.

- Typische Verwendung: jede beliebige Farbe, fließende Farbwechsel.

### `Setze die Port-LED-Farbe aus String …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Stellt die Farbe der Port-LED aus einem Text ein.

- Typische Verwendung: die Farbe aus einer Variablen oder einer Liste übernehmen.
