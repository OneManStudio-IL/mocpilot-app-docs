---
id: Sensors
title: Sensorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensorer {#sensors}

Sensorblokker leser tilstanden til telefonen eller nettbrettet ditt, programtimeren, hubbene og sensorene som er koblet til dem. Bruk verdiene deres i betingelser, hendelser og beregninger.

På denne siden:

- [Hubtilstand](#hub-state): batteri, spenning, temperatur, strøm og effektmodus
- [Hubknapper, helling og orientering](#hub-tilt-and-orientation)
- [Sensorer på porter](#sensors-on-ports): hvilken som helst enhet, Technic-fargesensor, Technic-avstandssensor, BOOST farge- og avstandssensor, WeDo 2.0-sensorer
- [Denne enheten](#this-device): telefonen, nettbrettet eller datamaskinen som kjører MOCPilot
- [Timer](#timer)

## Hubtilstand {#hub-state}

Disse blokkene finnes ikke for Mould King-hubber, som ikke rapporterer noen data.

### `… % batteri` (Nybegynner) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returnerer batterinivået til huben i prosent.

### `… batterispenning (V)` (Avansert) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returnerer batterispenningen til huben i volt.

- Hubber: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Returnerer `NaN` når huben ikke er tilkoblet.

### `… temperatur (C°)` (Avansert) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnerer temperaturen til hubens elektronikk i grader celsius.

- Hubber: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `få … utgangsspenning (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returnerer spenningen huben for øyeblikket leverer til portene sine, i volt.

- Hubber: BuWizz 2.

### `… strøm (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returnerer strømmen som trekkes på den valgte porten, i ampere.

- Hubber: BuWizz 2, BuWizz 3.

### `sett strømmodus …` (Technic Move Hub) (Nybegynner) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Setter effektmodusen til en Technic Move Hub.

- Moduser: `normal`, `boost`
- Hubber: Technic Move Hub.

## Hubknapper, helling og orientering {#hub-tilt-and-orientation}

Knappeblokken viser hvilke hubber den fungerer med. Blokkene for helling og orientering fungerer på BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub og Robot Inventor.

### `er … … knapp …` (Nybegynner) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Returnerer `true` når den valgte hubknappen er i den valgte tilstanden.

- Tilstander: `trykket`, `sleppt`
- Hubber: LEGO Powered Up-hubber, WeDo 2.0 og Robot Inventor. Listen over knapper avhenger av huben (vanligvis `senter`).

### `… … vinkel` (Nybegynner) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returnerer hellingsvinkelen til huben.

- Vinkler: `stigning`, `rulling`, `yaw`
- `yaw` er bare tilgjengelig på Technic Hub og Robot Inventor.

### `… … akselerometer (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returnerer den rå akselerometeravlesningen til huben langs én akse.

- Akser: `x`, `y`, `z`

### `… … akselerasjon (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returnerer hubens akselerasjon langs én akse.

- Akser: `x`, `y`, `z`

### `få … retning …` (Nybegynner) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returnerer hvilken side av huben som vender opp.

- Utdata: `tekst` eller `indeks`
- Verdier: `Foran`, `Topp`, `Høyre`, `Bak`, `Bunn`, `Venstre`

### `… retning …` (Nybegynner) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Returnerer `true` når den valgte siden av huben vender opp.

- Alternativer: `Foran`, `Topp`, `Høyre`, `Bak`, `Bunn`, `Venstre`

### `sett … tiltorientering til …` (Avansert) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Forteller huben hvordan den er montert i modellen, slik at helling og orientering måles ut fra den posisjonen.

- Alternativer: `Foran`, `Topp`, `Høyre`, `Bak`, `Bunn`, `Venstre`

## Sensorer på porter {#sensors-on-ports}

Technic- og BOOST-sensorblokkene nedenfor fungerer på City Hub, Technic Hub, BOOST Move Hub og MINDSTORMS Robot Inventor-huben (ikke SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Hvilken som helst enhet på en port {#any-port-device}

#### `… enhetstype` (Nybegynner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnerer typen enhet som er koblet til den valgte porten.

- Hubber: alle hubber med porter unntatt SBrick, SBrick Plus og BuWizz 2.
- Typisk bruk: sjekke hva som er tilkoblet før du kjører enhetsspesifikke blokker.

### Technic-fargesensor {#technic-color-sensor}

#### Technic-sensor: `sett modus til …` (Avansert) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Setter Technic-fargesensoren i den valgte modusen.

- Moduser: `standard`, `omgivelse`
- Bytte av modus kan påvirke programmet ditt på uventede måter: I modusen `omgivelse` kan sensoren ikke lese farger eller reflektert lys.

#### Technic-sensor: `farge …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returnerer fargen Technic-fargesensoren ser.

- Utdata: `verdi` (et tall) eller `streng` (fargenavnet)

#### Technic-sensor: `er farge …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Returnerer `true` når Technic-fargesensoren ser den valgte fargen.

#### Technic-sensor: `reflektert lys (%)` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returnerer hvor mye lys overflaten reflekterer tilbake til Technic-fargesensoren, i prosent.

#### Technic-sensor: `reflektert lys …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Returnerer `true` når det reflekterte lyset sammenlignet med verdien oppfyller den valgte betingelsen.

- Sammenligning: `<`, `=`, `>`

#### Technic-sensor: `omgivelseslys (%)` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returnerer lysstyrken til omgivelseslyset i prosent.

#### Technic-sensor: `omgivelseslys …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Returnerer `true` når omgivelseslyset sammenlignet med verdien oppfyller den valgte betingelsen.

- Sammenligning: `<`, `=`, `>`

#### Technic-sensor: `rå verdi …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returnerer råverdien til én fargekanal på Technic-fargesensoren.

- Kanaler: `rød`, `grønn`, `blå`

### Technic-avstandssensor {#technic-distance-sensor}

#### Technic-sensor: `avstand …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returnerer avstanden målt av Technic-avstandssensoren.

- Enheter: `mm`, `cm`, `tommer`, `%`

#### Technic-sensor: `er nærmere enn / lengre enn / nøyaktig på …` (Nybegynner) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Returnerer `true` når avstanden målt av Technic-avstandssensoren oppfyller betingelsen.

- Sammenligning: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enheter: `mm`, `cm`, `tommer`, `%`

### BOOST farge- og avstandssensor {#boost-color-and-distance-sensor}

#### BOOST-sensor: `farge …` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returnerer fargen BOOST farge- og avstandssensoren ser.

- Utdata: `verdi` (et tall) eller `streng` (fargenavnet)

#### BOOST-sensor: `er farge …` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Returnerer `true` når BOOST-sensoren ser den valgte fargen.

#### BOOST-sensor: `avstand …` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returnerer avstanden målt av BOOST farge- og avstandssensoren.

- Enheter: `%`, `cm`, `tommer`

#### BOOST-sensor: `er nærmere enn / lengre enn / nøyaktig på …` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Returnerer `true` når avstanden målt av BOOST-sensoren oppfyller betingelsen.

- Sammenligning: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enheter: `%`, `cm`, `tommer`

#### BOOST-sensor: `reflektert lys (%)` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returnerer hvor mye lys overflaten reflekterer tilbake til BOOST-sensoren, i prosent.

#### BOOST-sensor: `reflektert lys …` (Nybegynner) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Returnerer `true` når det reflekterte lyset sammenlignet med verdien oppfyller den valgte betingelsen.

- Sammenligning: `<`, `=`, `>`

### WeDo 2.0-sensorer {#wedo-2-sensors}

Bevegelsessensoren og vippesensoren for WeDo 2.0, på WeDo 2.0-huben.

#### WeDo 2.0-sensor: `avstand …` (Nybegynner) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returnerer avstanden målt av WeDo 2.0-bevegelsessensoren.

- Enheter: `%`, `cm`, `tommer`
- Hubber: WeDo 2.0.

#### WeDo 2.0-sensor: `er nærmere enn / lengre enn / nøyaktig på …` (Nybegynner) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Returnerer `true` når avstanden målt av WeDo 2.0-bevegelsessensoren oppfyller betingelsen.

- Sammenligning: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enheter: `%`, `cm`, `tommer`
- Hubber: WeDo 2.0.

#### WeDo 2.0-sensor: `vinkel …` / `retning som …` (Nybegynner) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returnerer data fra WeDo 2.0-vippesensoren: en hellingsvinkel eller retningen den heller i.

- Vinkler: `stigning`, `rulling`
- Utdata for retning: `tekst` eller `tall`; retninger: `nøytral`, `fremover`, `bakover`, `venstre`, `høyre`, `ukjent`
- Hubber: WeDo 2.0.

## Denne enheten {#this-device}

Disse blokkene leser telefonen, nettbrettet eller datamaskinen som kjører MOCPilot.

### `enhet % batteri` (Nybegynner) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returnerer batterinivået til enheten i prosent.

### `enhet … vinkel` (Avansert) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returnerer hellingsvinkelen til enheten.

- Vinkler: `stigning`, `rulling`, `yaw`
- Typisk bruk: styre modellen ved å vippe telefonen.

### `enhet … akselerometer (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returnerer den rå akselerometeravlesningen til enheten langs én akse, i m/s².

- Akser: `x`, `y`, `z`

### `enhet … akselerasjon (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returnerer enhetens akselerasjon langs én akse, i m/s².

- Akser: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Avansert) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returnerer tiden siden programmet startet eller siden siste **tilbakestill timer**, i sekunder.

### `tilbakestill timer` (Avansert) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Setter timeren tilbake til null.
