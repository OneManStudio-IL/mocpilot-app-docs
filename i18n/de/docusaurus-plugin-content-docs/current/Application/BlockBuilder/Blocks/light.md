---
id: Light
title: Licht
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (der Block trägt das Hub-Symbol).

## Robot-Inventor-Lichtmatrix {#robot-inventor-light}

Diese Blöcke stammen aus der Robot-Inventor-App und funktionieren nur mit den [Hubs von MINDSTORMS Robot Inventor und SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Sie tragen das Hub-Symbol. Tippen Sie auf das Bild in einem Block, um es zu zeichnen; in den Animationsblöcken zeigt es das erste Bild und die Anzahl der Bilder.

### `einschalten … für … sekunden` (Anfänger) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Zeigt das Bild für die angegebene Zeit (standardmäßig 2 Sekunden) auf der Lichtmatrix und schaltet es dann aus. Der Block wartet, bis die Zeit abgelaufen ist.

### `Animation abspielen … bei … Bilder pro Sekunde bis zum Ende` (Anfänger) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Spielt die Bilder der Animation einmal mit der angegebenen Geschwindigkeit ab (standardmäßig 4 Bilder pro Sekunde) und wartet bis zum letzten Bild.

### `Animation starten … bei … Bilder pro Sekunde …` (Anfänger) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Startet die Animation und geht sofort zum nächsten Block weiter.

- `einmal`: spielt sie ein Mal ab.
- `wiederholen` (Standard): spielt sie immer wieder ab, bis ein anderer Lichtblock die Matrix ändert.

### `Pixelhelligkeit einstellen auf … %` (Fortgeschritten) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Legt fest, wie hell die Bilder und Animationen der Robot-Inventor-Blöcke oben sind, von 0 bis 100 %. Bis dieser Block läuft, leuchten sie mit voller Helligkeit. Jedes Pixel behält seine eigene Helligkeit im Verhältnis zu den anderen.

### Bilder und Animationen zeichnen {#animation-editor}

Tippen Sie auf das Bild in einem Lichtblock, um den Editor zu öffnen:

- **Pixel**: Tippen Sie auf das 5×5-Raster oder ziehen Sie darüber, um mit der gewählten Helligkeit zu malen.
- **Helligkeit**: Die Skala neben dem Raster wählt die Helligkeit zum Malen (10 Stufen, von aus bis voll).
- **Alle aus / alle an**: das Bild löschen oder mit der gewählten Helligkeit füllen.
- **Bilder** (nur Animationsblöcke): Die Leiste unter dem Raster zeigt das aktuelle Bild, zum Beispiel **2/3**. Die Schaltflächen gehen zum **vorherigen** und **nächsten** Bild, **fügen** nach dem aktuellen ein leeres Bild **hinzu**, **duplizieren** das aktuelle Bild oder **löschen** es (eine Animation behält mindestens ein Bild).

<Screenshot name="robot-inventor-animation-editor" alt="Der Animationseditor: das 5×5-Raster, die Helligkeitsskala und die Bildleiste" width={600} />

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
