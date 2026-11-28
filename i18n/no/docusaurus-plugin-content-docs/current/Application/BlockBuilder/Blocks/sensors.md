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
- [Robot Inventor-huben](#robot-inventor-sensors): kraftsensor, gester, orientering, yaw, stigning og rulling, helling, radio mellom hubber
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

- Hubber: Technic Hub, Technic Move Hub, BOOST Move Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Typiske verdier: Technic Move Hub har én oppladbar celle, omtrent 4,2 V når den er full og 3,3–3,5 V når den er tom; BOOST Move Hub går på 6 AAA-batterier, omtrent 9 V når de er nye.
- Returnerer `NaN` når huben ikke er tilkoblet.

### `… temperatur (C°)` (Avansert) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnerer temperaturen til hubens elektronikk i grader celsius.

- Hubber: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… strøm (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Returnerer den totale strømmen huben trekker, i milliampere.

- Hubber: Technic Hub, BOOST Move Hub.
- Typisk bruk: stoppe en griper eller en vinsj når belastningen øker.

### `få … utgangsspenning (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returnerer spenningen huben for øyeblikket leverer til portene sine, i volt.

- Uten belastning avhenger den av effektmodusen: omtrent 6,3 V i Sakte, 7,7 V i Normal, 9,15 V i Rask og 10,5 V i Ludicrous.

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

Knappeblokken viser hvilke hubber den fungerer med. Blokkene for helling og orientering fungerer på BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub og Robot Inventor. På Technic Move Hub beregnes de fra akselerometeret for en hub montert med knappen ned, som i LEGO-bilmodellene; den har ingen `yaw` og ingen **sett … tiltorientering til**.

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

### `… … rotasjonshastighet (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Returnerer hvor raskt huben dreier rundt én akse, i grader per sekund (fra hubens gyroskop).

- Akser: `x`, `y`, `z`. `z` er dreining på stedet (positiv = mot venstre når huben ligger flatt); `x` og `y` er rulling og stigning.
- Hubber: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Typisk bruk: holde et kjøretøy på rett kurs, merke at en modell snurrer eller velter.

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
- Ikke tilgjengelig for Technic Move Hub.

## Sensorer på porter {#sensors-on-ports}

Technic- og BOOST-sensorblokkene nedenfor fungerer på City Hub, Technic Hub, BOOST Move Hub og MINDSTORMS Robot Inventor-huben (ikke SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Hvilken som helst enhet på en port {#any-port-device}

#### `… enhetstype` (Nybegynner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnerer typen enhet som er koblet til den valgte porten.

- Hubber: alle hubber med porter unntatt SBrick, SBrick Plus, BuWizz 2 og Technic Move Hub.
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
Returnerer én råverdi for fargen sensoren ser.

- Verdier: `rød`, `grønn`, `blå`, `fargetone (°)` (0–359), `metning (%)`, `lysstyrke (%)`
- Sensorer: Technic-fargesensoren og BOOST farge- og avstandssensoren. På Technic Hub kommer fargetone og metning fra sensoren, og lysstyrken beregnes fra rødt, grønt og blått.
- Typisk bruk: skille fra hverandre farger som blokken **farge** ikke kjenner, eller like nyanser, etter fargetone.

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
Returnerer hvor mye lys overflaten reflekterer tilbake til BOOST-sensoren, i prosent, i trinn på 1 %.

- For råfargen (rød, grønn, blå, fargetone, metning, lysstyrke) fra denne sensoren bruker du Technic-sensor: **rå verdi …**, som også fungerer med den.

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

## Robot Inventor-huben {#robot-inventor-sensors}

Disse blokkene kommer fra Robot Inventor-appen og fungerer bare med [MINDSTORMS Robot Inventor- og SPIKE Prime-hubbene](/docs/Application/Hubs/RobotInventorHub). De har hubikonet. Hendelsene deres (når huben ristes, vippes og så videre) finner du på siden [Hendelser](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Kraftsensor {#robot-inventor-force-sensor}

#### `er … trykket / hardt trykket / sluppet ?` (Nybegynner) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Sjekker kraftsensoren på den valgte porten. `hardt trykket` betyr trykket med mer enn 5 newton.

#### `… trykk i % / newton` (Nybegynner) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Returnerer hvor hardt kraftsensoren trykkes: i prosent (0–100) eller i newton (0–10).

### Hubens bevegelse {#robot-inventor-motion}

#### `er huben … ?` (Avansert) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` hvis huben nettopp er beveget på denne måten: `banket`, `dobbeltbanket`, `ristet` (standard) eller `i fritt fall`. En gest teller én gang: når en blokk har lest den, er den borte.

#### `gest` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Returnerer den siste gesten som tekst: `tapped`, `doubletapped`, `shake` eller `freefall`, eller en tom verdi hvis det ikke har vært noen.

#### `er … opp?` (Nybegynner) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` hvis denne siden av huben vender opp: `forside` (lysmatrisen), `overside`, `høyre side`, `bakside`, `underside` eller `venstre side`.

#### `orientering` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Returnerer siden som vender opp, som tekst: `front`, `up`, `rightside`, `back`, `down` eller `leftside`.

#### `… vinkel` (Nybegynner) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Returnerer hubens vinkel i grader rundt én akse: `yaw` (dreining mot venstre og høyre, som et kompass), `stigning` (nesen opp og ned) eller `rulling` (helling til sidene).

- Typisk bruk: kjøre en robot i rett linje eller snu den nøyaktig 90°: nullstill yaw-vinkelen og styr deretter til yaw-vinkelen når ønsket vinkel.

#### `sett yaw-vinkel til 0` (Nybegynner) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Gjør hubens nåværende retning til nytt nullpunkt for yaw-vinkelen. Blokken venter 0,1 s slik at neste avlesning allerede regnes fra det.

#### `vinkelhastighet …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Returnerer hvor raskt huben dreier rundt aksen `x`, `y` eller `z` (gyroskopet), i grader per sekund.

#### `akselerasjon …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Returnerer hubens akselerasjon langs aksen `x`, `y` eller `z`, slik huben rapporterer den.

#### `er huben vippet … ?` (Avansert) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` hvis huben er vippet i denne retningen: `opp`, `ned`, `til venstre`, `til høyre` eller `hvilken som helst` (standard). Huben regnes som vippet fra omtrent 12° fra vannrett; når den er vippet begge veier, gjelder den største hellingen.

### Radio mellom hubber {#robot-inventor-radio}

Robot Inventor-hubber kan sende korte signaler til hverandre trådløst, uten MOCPilot imellom. Et signal har et navn og en verdi.

#### `send hub-signal … med …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Sender signalet med angitt navn (`signal` som standard) og verdi (`1`) fra denne huben til hubbene i nærheten.

#### `mottatt signal … verdi` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Returnerer den siste verdien denne huben har mottatt for signalet med dette navnet, eller 0 hvis ingenting har kommet ennå. For å reagere i det øyeblikket et signal kommer, bruker du [når huben mottar signal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

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
