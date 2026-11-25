---
id: Events
title: Ereignisse
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ereignisse {#events}

Die Kategorie **Ereignisse** enthält die Blöcke, die Skripte starten, wenn etwas passiert, sowie die Blöcke, die Nachrichten zwischen Skripten senden. Mit **Nachricht hinzufügen** und **Nachricht löschen** oben in der Kategorie verwalten Sie die Nachrichten.

## Grundlegende Ereignisse {#core-events}

### `wenn das Programm startet` (Anfänger) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Führt sein Skript einmal aus, wenn das Programm startet.

- Typische Verwendung: Startwerte von Variablen setzen, Motoren in ihren Ausgangszustand bringen, eine „Bereit“-Meldung anzeigen.

### `wenn …` (Fortgeschritten) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Führt sein Skript aus, wenn die Bedingung im Eingabefeld von falsch zu wahr wechselt. Während das Skript läuft, wartet der Block; er löst erst wieder aus, nachdem die Bedingung falsch und dann erneut wahr geworden ist.

- Typische Verwendung: auf einen Zustand reagieren, zum Beispiel `wenn Timer > 5 und Schalter ist an`.

### `wenn der Timer > …` (Fortgeschritten) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Führt sein Skript aus, wenn der Programm-Timer den Wert (in Sekunden) überschreitet.

- Typische Verwendung: verzögerte Aktionen, zeitgesteuerte Phasen. Setzen Sie den Timer mit **Timer zurücksetzen** (Sensoren) zurück.

### `wenn ich erhalte …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Führt sein Skript aus, wenn die ausgewählte Nachricht gesendet wird.

- Typische Verwendung: mehrere Skripte aufeinander abstimmen.

### `übermitteln …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sendet eine Nachricht an jedes Skript, das mit **wenn ich erhalte** für diese Nachricht beginnt, und macht sofort weiter.

- Typische Verwendung: anderen Skripten den Start signalisieren, ohne auf sie zu warten.

### `übermitteln … und warten` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sendet eine Nachricht und hält dieses Skript an, bis alle Skripte, die sie erhalten haben, fertig sind.

- Typische Verwendung: schrittweise Abläufe, bei denen die Reihenfolge wichtig ist.

## Hub-Ereignisse {#hub-events}

Diese Blöcke erscheinen, wenn ein Hub im Profil sie unterstützt. Für Mould-King-Hubs gibt es sie nicht.

### `wenn … … Taste …` (Anfänger) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Wird ausgeführt, wenn eine Taste am Hub gedrückt oder losgelassen wird.

- Zustandsoptionen: `gedrückt`, `losgelassen`, `geändert`
- Hubs: LEGO Powered Up-Hubs, WeDo 2.0 und Robot Inventor. Die Liste der Tasten hängt vom Hub ab.

### `wenn … ist verbunden / getrennt` (Anfänger) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Wird ausgeführt, wenn sich der Hub verbindet oder die Verbindung trennt.

- Typische Verwendung: das Modell bei Verbindungsverlust sicher anhalten und seinen Zustand wiederherstellen, wenn die Verbindung zurückkommt.

### `wenn … % Batterie geändert` (Anfänger) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Wird ausgeführt, wenn sich der vom Hub gemeldete Akkustand ändert.

- Hubs: solche, die ihren Akkustand melden.
- Typische Verwendung: eine Warnung bei schwachem Akku, Umschalten in einen Stromsparmodus.

### `wenn … Beschleunigungsdaten wurden geändert` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Wird ausgeführt, wenn sich die Werte des Beschleunigungssensors des Hubs ändern.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `wenn … Neigung … Winkel wurde geändert` (Anfänger) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Wird ausgeführt, wenn sich der Neigungswinkel des Hubs ändert.

- Winkeloptionen: `irgendein`, `Neigung`, `Rollen`, `Gieren`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `Gieren` gibt es nur beim Technic Hub und Robot Inventor.

### `wenn … Ausrichtung wurde geändert` (Anfänger) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Wird ausgeführt, wenn sich die Ausrichtung des Hubs ändert, also wenn eine andere Seite des Hubs nach oben zeigt.

- Hubs: dieselben wie beim Neigungsereignis.

## Sensorereignisse {#sensor-events}

Diese Ereignisse lesen einen Sensor, der an einem Hub-Port angeschlossen ist. Hubs: City Hub, Technic Hub, BOOST Move Hub und der Hub von MINDSTORMS Robot Inventor (nicht SBrick, BuWizz, WeDo 2.0 oder Mould King).

### Technic-Sensor: `wenn die Farbe ist …` (Anfänger) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Wird ausgeführt, wenn der Technic-Farbsensor die ausgewählte Farbe erkennt.

### Technic-Sensor: `wenn … näher als / weiter als / genau bei …` (Anfänger) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Wird ausgeführt, wenn der vom Technic-Abstandssensor gemessene Abstand die Bedingung erfüllt.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheiten: `mm`, `cm`, `Zoll`, `%`

### BOOST-Sensor: `wenn … näher als / weiter als / genau bei …` (Anfänger) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Wird ausgeführt, wenn der vom BOOST-Farb- und Abstandssensor gemessene Abstand die Bedingung erfüllt.

- Vergleichsoptionen: `näher als`, `weiter als`, `genau bei`
- Einheiten: `%`, `cm`, `Zoll`

### BOOST-Sensor: `wenn die Farbe ist …` (Anfänger) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Wird ausgeführt, wenn der BOOST-Farb- und Abstandssensor die ausgewählte Farbe erkennt.

## Robot-Inventor-Ereignisse {#robot-inventor-events}

Diese Ereignisse stammen aus der Robot-Inventor-App und funktionieren nur mit den [Hubs von MINDSTORMS Robot Inventor und SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Sie tragen das Hub-Symbol. Die passenden Werte finden Sie auf der Seite [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `wenn Hub …` (Anfänger) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Wird jedes Mal einmal ausgeführt, wenn der Hub `angetippt`, `doppelt angetippt` oder `geschüttelt` (Standard) wird oder `fallend` ist.

### `wenn … oben ist` (Anfänger) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Wird ausgeführt, wenn die gewählte Seite des Hubs nach oben zeigt: `Vorderseite` (die Lichtmatrix, Standard), `Oberseite`, `rechte Seite`, `Rückseite`, `Unterseite` oder `linke Seite`.

### `wenn Hub geneigt …` (Fortgeschritten) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Wird ausgeführt, wenn der Hub um etwa 12° oder mehr `nach oben`, `nach unten`, `nach links`, `nach rechts` oder in eine beliebige Richtung (`irgendein`, Standard) geneigt wird.

### `wenn … gedrückt / fest gedrückt / losgelassen` (Anfänger) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Wird ausgeführt, wenn der Kraftsensor am gewählten Port gedrückt, fest gedrückt (mit mehr als 5 Newton) oder losgelassen wird.

### `wenn Hub Signal empfängt …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Wird ausgeführt, wenn dieser Hub das Funksignal mit diesem Namen von einem anderen Hub empfängt. Seinen Wert liest [empfangenes Signal … Wert](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
