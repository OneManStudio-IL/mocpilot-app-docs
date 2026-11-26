---
id: Sensors
title: Sensoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensoren {#sensors}

Sensorblöcke lesen den Zustand Ihres Telefons oder Tablets, den Programm-Timer, die Hubs und die daran angeschlossenen Sensoren. Verwenden Sie ihre Werte in Bedingungen, Ereignissen und Berechnungen.

Auf dieser Seite:

- [Hub-Zustand](#hub-state): Akku, Spannung, Temperatur, Strom und Leistungsmodus
- [Hub-Tasten, Neigung und Ausrichtung](#hub-tilt-and-orientation)
- [Sensoren an Ports](#sensors-on-ports): beliebiges Gerät, Technic-Farbsensor, Technic-Abstandssensor, BOOST-Farb- und Abstandssensor, WeDo-2.0-Sensoren
- [Robot-Inventor-Hub](#robot-inventor-sensors): Kraftsensor, Gesten, Ausrichtung, Gieren, Neigung und Rollen, Neigung, Funk zwischen Hubs
- [Dieses Gerät](#this-device): das Telefon, Tablet oder der Computer, auf dem MOCPilot läuft
- [Timer](#timer)

## Hub-Zustand {#hub-state}

Für Mould-King-Hubs gibt es diese Blöcke nicht, da sie keine Daten melden.

### `… % Batterie` (Anfänger) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Liefert den Akkustand des Hubs in Prozent.

### `… Batteriespannung (V)` (Fortgeschritten) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Liefert die Akkuspannung des Hubs in Volt.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Liefert `NaN`, wenn der Hub nicht verbunden ist.

### `… Temperatur (C°)` (Fortgeschritten) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Liefert die Temperatur der Hub-Elektronik in Grad Celsius.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… Strom (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Liefert den gesamten Strom, den der Hub aufnimmt, in Milliampere.

- Hubs: Technic Hub.
- Typische Verwendung: einen Greifer oder eine Seilwinde stoppen, wenn die Last steigt.

### `holen … Ausgangsspannung (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Liefert die Spannung, die der Hub gerade an seine Ports abgibt, in Volt.

- Hubs: BuWizz 2.

### `… Strom (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Liefert den am ausgewählten Port fließenden Strom in Ampere.

- Hubs: BuWizz 2, BuWizz 3.

### `Stromversorgungsmodus einstellen …` (Technic Move Hub) (Anfänger) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Stellt den Leistungsmodus eines Technic Move Hub ein.

- Modi: `normal`, `Boost`
- Hubs: Technic Move Hub.

## Hub-Tasten, Neigung und Ausrichtung {#hub-tilt-and-orientation}

Beim Tastenblock sind die Hubs angegeben, mit denen er funktioniert. Die Neigungs- und Ausrichtungsblöcke funktionieren mit BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub und Robot Inventor. Beim Technic Move Hub werden sie aus seinem Beschleunigungssensor berechnet, für einen Hub, der mit der Taste nach unten eingebaut ist, wie in den LEGO-Automodellen; er hat kein `Gieren` und kein **setzen … Neigungsausrichtung auf**.

### `ist … … Taste …` (Anfänger) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Liefert `true`, wenn die ausgewählte Hub-Taste im ausgewählten Zustand ist.

- Zustände: `gedrückt`, `losgelassen`
- Hubs: LEGO Powered Up-Hubs, WeDo 2.0 und Robot Inventor. Die Liste der Tasten hängt vom Hub ab (meist `Mitte`).

### `… … Winkel` (Anfänger) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Liefert den Neigungswinkel des Hubs.

- Winkel: `Neigung`, `Rollen`, `Gieren`
- `Gieren` gibt es nur beim Technic Hub und Robot Inventor.

### `… … Beschleunigungssensor (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Liefert den Rohwert des Beschleunigungssensors des Hubs entlang einer Achse.

- Achsen: `x`, `y`, `z`

### `… … Beschleunigung (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Liefert die Beschleunigung des Hubs entlang einer Achse.

- Achsen: `x`, `y`, `z`

### `… … Drehgeschwindigkeit (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Liefert, wie schnell sich der Hub um eine Achse dreht, in Grad pro Sekunde (vom Gyroskop des Hubs).

- Achsen: `x`, `y`, `z`. `z` ist das Drehen auf der Stelle (positiv = nach links, wenn der Hub flach liegt); `x` und `y` sind Rollen und Nicken.
- Hubs: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Typische Verwendung: ein Fahrzeug geradeaus fahren lassen, erkennen, dass sich ein Modell dreht oder umkippt.

### `holen … Ausrichtung …` (Anfänger) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Liefert, welche Seite des Hubs nach oben zeigt.

- Ausgabe: `Text` oder `index`
- Werte: `Vorne`, `Oben`, `Rechts`, `Hinten`, `Unten`, `Links`

### `… Ausrichtung …` (Anfänger) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Liefert `true`, wenn die ausgewählte Seite des Hubs nach oben zeigt.

- Optionen: `Vorne`, `Oben`, `Rechts`, `Hinten`, `Unten`, `Links`

### `setzen … Neigungsausrichtung auf …` (Fortgeschritten) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Teilt dem Hub mit, wie er im Modell eingebaut ist, damit Neigung und Ausrichtung von dieser Lage aus gemessen werden.

- Optionen: `Vorne`, `Oben`, `Rechts`, `Hinten`, `Unten`, `Links`
- Nicht verfügbar für den Technic Move Hub.

## Sensoren an Ports {#sensors-on-ports}

Die folgenden Technic- und BOOST-Sensorblöcke funktionieren mit City Hub, Technic Hub, BOOST Move Hub und dem Hub von MINDSTORMS Robot Inventor (nicht SBrick, BuWizz, WeDo 2.0 oder Mould King).

### Beliebiges Gerät an einem Port {#any-port-device}

#### `… Gerätetyp` (Anfänger) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Liefert den Typ des Geräts, das am ausgewählten Port angeschlossen ist.

- Hubs: alle Hubs mit Ports außer SBrick, SBrick Plus, BuWizz 2 und Technic Move Hub.
- Typische Verwendung: prüfen, was angeschlossen ist, bevor gerätespezifische Blöcke laufen.

### Technic-Farbsensor {#technic-color-sensor}

#### Technic-Sensor: `Modus einstellen auf …` (Fortgeschritten) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Schaltet den Technic-Farbsensor in den ausgewählten Modus.

- Modi: `Standard`, `Umgebung`
- Ein Moduswechsel kann Ihr Programm auf unerwartete Weise beeinflussen: Im Modus `Umgebung` kann der Sensor weder Farben noch reflektiertes Licht lesen.

#### Technic-Sensor: `Farbe …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Liefert die Farbe, die der Technic-Farbsensor erkennt.

- Ausgabe: `Wert` (eine Zahl) oder `Zeichenkette` (der Farbname)

#### Technic-Sensor: `ist Farbe …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Liefert `true`, wenn der Technic-Farbsensor die ausgewählte Farbe erkennt.

#### Technic-Sensor: `reflektiertes Licht (%)` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Liefert, wie viel Licht die Oberfläche zum Technic-Farbsensor zurückwirft, in Prozent.

#### Technic-Sensor: `reflektiertes Licht …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Liefert `true`, wenn der Vergleich des reflektierten Lichts mit dem Wert zutrifft.

- Vergleich: `<`, `=`, `>`

#### Technic-Sensor: `Umgebungslicht (%)` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Liefert die Helligkeit des Umgebungslichts in Prozent.

#### Technic-Sensor: `Umgebungslicht …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Liefert `true`, wenn der Vergleich des Umgebungslichts mit dem Wert zutrifft.

- Vergleich: `<`, `=`, `>`

#### Technic-Sensor: `Rohwert …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Liefert einen Rohwert der Farbe, die der Sensor sieht.

- Werte: `rot`, `grün`, `blau`, `Farbton (°)` (0–359), `Sättigung (%)`, `Helligkeit (%)`
- Sensoren: der Technic-Farbsensor und der BOOST-Farb- und Abstandssensor. Am Technic Hub kommen Farbton und Sättigung vom Sensor, die Helligkeit wird aus Rot, Grün und Blau berechnet.
- Typische Verwendung: Farben, die der Block **Farbe** nicht kennt, oder ähnliche Farbtöne anhand des Farbtons unterscheiden.

### Technic-Abstandssensor {#technic-distance-sensor}

#### Technic-Sensor: `Entfernung …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Liefert den vom Technic-Abstandssensor gemessenen Abstand.

- Einheiten: `mm`, `cm`, `Zoll`, `%`

#### Technic-Sensor: `ist näher als / weiter als / genau bei …` (Anfänger) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Liefert `true`, wenn der vom Technic-Abstandssensor gemessene Abstand die Bedingung erfüllt.

- Vergleich: `näher als`, `weiter als`, `genau bei`
- Einheiten: `mm`, `cm`, `Zoll`, `%`

### BOOST-Farb- und Abstandssensor {#boost-color-and-distance-sensor}

#### BOOST-Sensor: `Farbe …` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Liefert die Farbe, die der BOOST-Farb- und Abstandssensor erkennt.

- Ausgabe: `Wert` (eine Zahl) oder `Zeichenkette` (der Farbname)

#### BOOST-Sensor: `ist Farbe …` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Liefert `true`, wenn der BOOST-Sensor die ausgewählte Farbe erkennt.

#### BOOST-Sensor: `Entfernung …` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Liefert den vom BOOST-Farb- und Abstandssensor gemessenen Abstand.

- Einheiten: `%`, `cm`, `Zoll`

#### BOOST-Sensor: `ist näher als / weiter als / genau bei …` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Liefert `true`, wenn der vom BOOST-Sensor gemessene Abstand die Bedingung erfüllt.

- Vergleich: `näher als`, `weiter als`, `genau bei`
- Einheiten: `%`, `cm`, `Zoll`

#### BOOST-Sensor: `reflektiertes Licht (%)` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Liefert, wie viel Licht die Oberfläche zum BOOST-Sensor zurückwirft, in Prozent, in Schritten von 1 %.

- Für die Rohfarbe (Rot, Grün, Blau, Farbton, Sättigung, Helligkeit) dieses Sensors verwenden Sie Technic-Sensor: **Rohwert …**, der auch mit ihm funktioniert.

#### BOOST-Sensor: `reflektiertes Licht …` (Anfänger) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Liefert `true`, wenn der Vergleich des reflektierten Lichts mit dem Wert zutrifft.

- Vergleich: `<`, `=`, `>`

### WeDo-2.0-Sensoren {#wedo-2-sensors}

Der Bewegungssensor und der Neigungssensor von WeDo 2.0, am WeDo-2.0-Hub.

#### WeDo-2.0-Sensor: `Entfernung …` (Anfänger) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Liefert den vom WeDo-2.0-Bewegungssensor gemessenen Abstand.

- Einheiten: `%`, `cm`, `Zoll`
- Hubs: WeDo 2.0.

#### WeDo-2.0-Sensor: `ist näher als / weiter als / genau bei …` (Anfänger) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Liefert `true`, wenn der vom WeDo-2.0-Bewegungssensor gemessene Abstand die Bedingung erfüllt.

- Vergleich: `näher als`, `weiter als`, `genau bei`
- Einheiten: `%`, `cm`, `Zoll`
- Hubs: WeDo 2.0.

#### WeDo-2.0-Sensor: `Winkel …` / `Richtung als …` (Anfänger) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Liefert Daten des WeDo-2.0-Neigungssensors: einen Neigungswinkel oder die Richtung, in die er geneigt ist.

- Winkel: `Neigung`, `Rollen`
- Richtungsausgabe: `Text` oder `Zahl`; Richtungen: `neutral`, `vorwärts`, `rückwärts`, `links`, `rechts`, `unbekannt`
- Hubs: WeDo 2.0.

## Robot-Inventor-Hub {#robot-inventor-sensors}

Diese Blöcke stammen aus der Robot-Inventor-App und funktionieren nur mit den [Hubs von MINDSTORMS Robot Inventor und SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Sie tragen das Hub-Symbol. Ihre Ereignisse (wenn der Hub geschüttelt, geneigt wird usw.) finden Sie auf der Seite [Ereignisse](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Kraftsensor {#robot-inventor-force-sensor}

#### `… ist gedrückt / fest gedrückt / losgelassen ?` (Anfänger) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Prüft den Kraftsensor am gewählten Port. `fest gedrückt` bedeutet mit mehr als 5 Newton gedrückt.

#### `… Druck in % / Newton` (Anfänger) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Liefert, wie fest der Kraftsensor gedrückt wird: in Prozent (0–100) oder in Newton (0–10).

### Bewegung des Hubs {#robot-inventor-motion}

#### `ist Hub … ?` (Fortgeschritten) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true`, wenn der Hub gerade auf diese Weise bewegt wurde: `angetippt`, `doppelt angetippt`, `geschüttelt` (Standard) oder `fallend`. Eine Geste zählt einmal: Nachdem ein Block sie gelesen hat, ist sie weg.

#### `Geste` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Liefert die letzte Geste als Text: `tapped`, `doubletapped`, `shake` oder `freefall`, oder einen leeren Wert, wenn es keine gab.

#### `ist … oben?` (Anfänger) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true`, wenn diese Seite des Hubs nach oben zeigt: `Vorderseite` (die Lichtmatrix), `Oberseite`, `rechte Seite`, `Rückseite`, `Unterseite` oder `linke Seite`.

#### `Ausrichtung` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Liefert die Seite, die nach oben zeigt, als Text: `front`, `up`, `rightside`, `back`, `down` oder `leftside`.

#### `… Winkel` (Anfänger) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Liefert den Winkel des Hubs in Grad um eine Achse: `Gieren` (Drehen nach links und rechts, wie ein Kompass), `Neigung` (Nase hoch und runter) oder `Rollen` (Kippen zur Seite).

- Typische Verwendung: einen Roboter geradeaus fahren oder genau um 90° drehen: Setzen Sie das Gieren zurück und lenken Sie dann, bis das Gieren den Winkel erreicht.

#### `Gierwinkel auf 0 setzen` (Anfänger) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Macht die aktuelle Richtung des Hubs zur neuen Null des Gierwinkels. Der Block wartet 0,1 s, damit der nächste Messwert schon davon aus gezählt wird.

#### `Winkelgeschwindigkeit …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Liefert, wie schnell sich der Hub um die Achse `x`, `y` oder `z` dreht (das Gyroskop), in Grad pro Sekunde.

#### `Beschleunigung …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Liefert die Beschleunigung des Hubs entlang der Achse `x`, `y` oder `z`, so wie der Hub sie meldet.

#### `ist Hub geneigt … ?` (Fortgeschritten) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true`, wenn der Hub in diese Richtung geneigt ist: `nach oben`, `nach unten`, `nach links`, `nach rechts` oder `irgendein` (Standard). Der Hub gilt ab etwa 12° Abweichung von der Waagerechten als geneigt; ist er in beide Richtungen geneigt, zählt die größere Neigung.

### Funk zwischen Hubs {#robot-inventor-radio}

Robot-Inventor-Hubs können einander kurze Signale per Funk senden, ohne MOCPilot dazwischen. Ein Signal hat einen Namen und einen Wert.

#### `Hub-Signal senden … mit …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Sendet das Signal mit dem angegebenen Namen (standardmäßig `signal`) und Wert (`1`) von diesem Hub an die Hubs in der Nähe.

#### `empfangenes Signal … Wert` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Liefert den letzten Wert, den dieser Hub für das Signal mit diesem Namen empfangen hat, oder 0, wenn noch keiner kam. Um sofort zu reagieren, wenn ein Signal ankommt, verwenden Sie [wenn Hub Signal empfängt](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Dieses Gerät {#this-device}

Diese Blöcke lesen das Telefon, Tablet oder den Computer, auf dem MOCPilot läuft.

### `Gerät % Batterie` (Anfänger) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Liefert den Akkustand des Geräts in Prozent.

### `Gerät … Winkel` (Fortgeschritten) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Liefert den Neigungswinkel des Geräts.

- Winkel: `Neigung`, `Rollen`, `Gieren`
- Typische Verwendung: das Modell durch Neigen des Telefons lenken.

### `Gerät … Beschleunigungssensor (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Liefert den Rohwert des Beschleunigungssensors des Geräts entlang einer Achse, in m/s².

- Achsen: `x`, `y`, `z`

### `Gerät … Beschleunigung (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Liefert die Beschleunigung des Geräts entlang einer Achse, in m/s².

- Achsen: `x`, `y`, `z`

## Timer {#timer}

### `Timer` (Fortgeschritten) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Liefert die Zeit seit dem Programmstart oder seit dem letzten **Timer zurücksetzen**, in Sekunden.

### `Timer zurücksetzen` (Fortgeschritten) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Setzt den Timer auf null zurück.
