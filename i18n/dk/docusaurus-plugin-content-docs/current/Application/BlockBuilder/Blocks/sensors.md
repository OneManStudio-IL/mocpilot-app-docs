---
id: Sensors
title: Sensorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensorer {#sensors}

Sensorblokke læser tilstanden af din telefon eller tablet, programmets timer, hubbene og de sensorer, der er tilsluttet dem. Brug deres værdier i betingelser, hændelser og beregninger.

På denne side:

- [Hubbens tilstand](#hub-state): batteri, spænding, temperatur, strøm og strømtilstand
- [Hubbens knapper, hældning og orientering](#hub-tilt-and-orientation)
- [Sensorer på porte](#sensors-on-ports): enhver enhed, Technic-farvesensor, Technic-afstandssensor, BOOST-farve- og afstandssensor, WeDo 2.0-sensorer
- [Robot Inventor-hub](#robot-inventor-sensors): kraftsensor, gestusser, orientering, gyring, hældning og rulning, vipning, radio mellem hubs
- [Denne enhed](#this-device): den telefon, tablet eller computer, der kører MOCPilot
- [Timer](#timer)

## Hubbens tilstand {#hub-state}

Disse blokke findes ikke til Mould King-hubs, som ikke rapporterer nogen data.

### `… % batteri` (Begynder) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returnerer hubbens batteriniveau i procent.

### `… batterispænding (V)` (Avanceret) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returnerer hubbens batterispænding i volt.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Returnerer `NaN`, når hubben ikke er forbundet.

### `… temperatur (C°)` (Avanceret) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnerer temperaturen i hubbens elektronik i grader celsius.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… strøm (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Returnerer den samlede strøm, som hubben trækker, i milliampere.

- Hubs: Technic Hub.
- Typisk brug: stop en griber eller et wirespil, når belastningen stiger.

### `hent … udgangsspænding (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returnerer den spænding, hubben i øjeblikket leverer til sine porte, i volt.

- Hubs: BuWizz 2.

### `… strøm (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returnerer den strøm, der trækkes på den valgte port, i ampere.

- Hubs: BuWizz 2, BuWizz 3.

### `indstil strømtilstand …` (Technic Move Hub) (Begynder) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Indstiller strømtilstanden på en Technic Move Hub.

- Tilstande: `normal`, `boost`
- Hubs: Technic Move Hub.

## Hubbens knapper, hældning og orientering {#hub-tilt-and-orientation}

Knapblokken angiver, hvilke hubs den virker med. Blokkene til hældning og orientering virker på BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub og Robot Inventor. På Technic Move Hub beregnes de ud fra dens accelerometer for en hub, der er monteret med knappen nedad, som i LEGO-bilmodellerne; den har ingen `gyring` og ingen **sæt … tilt orientering til**.

### `er … … knap …` (Begynder) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Returnerer `true`, når den valgte knap på hubben er i den valgte tilstand.

- Tilstande: `trykket`, `sluppet`
- Hubs: LEGO Powered Up-hubs, WeDo 2.0 og Robot Inventor. Listen over knapper afhænger af hubben (som regel `center`).

### `… … vinkel` (Begynder) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returnerer hubbens hældningsvinkel.

- Vinkler: `hældning`, `rulning`, `gyring`
- `gyring` findes kun på Technic Hub og Robot Inventor.

### `… … accelerometer (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returnerer hubbens rå accelerometeraflæsning langs én akse.

- Akser: `x`, `y`, `z`

### `… … acceleration (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returnerer hubbens acceleration langs én akse.

- Akser: `x`, `y`, `z`

### `… … rotationshastighed (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Returnerer, hvor hurtigt hubben drejer om én akse, i grader pr. sekund (fra hubbens gyroskop).

- Akser: `x`, `y`, `z`. `z` er drejning på stedet (positiv = mod venstre, når hubben ligger fladt); `x` og `y` er rulning og hældning.
- Hubs: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Typisk brug: hold et køretøj kørende ligeud, opdag at en model drejer rundt eller vælter.

### `hent … orientering …` (Begynder) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returnerer, hvilken side af hubben der vender opad.

- Output: `tekst` eller `indeks`
- Værdier: `Foran`, `Top`, `Højre`, `Bageste`, `Bund`, `Venstre`

### `… orientering …` (Begynder) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Returnerer `true`, når den valgte side af hubben vender opad.

- Valg: `Foran`, `Top`, `Højre`, `Bageste`, `Bund`, `Venstre`

### `sæt … tilt orientering til …` (Avanceret) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Fortæller hubben, hvordan den er monteret i modellen, så hældning og orientering måles fra den position.

- Valg: `Foran`, `Top`, `Højre`, `Bageste`, `Bund`, `Venstre`
- Ikke tilgængelig for Technic Move Hub.

## Sensorer på porte {#sensors-on-ports}

Technic- og BOOST-sensorblokkene nedenfor virker på City Hub, Technic Hub, BOOST Move Hub og MINDSTORMS Robot Inventor-hubben (ikke SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Enhver enhed på en port {#any-port-device}

#### `… enhedstype` (Begynder) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnerer typen af den enhed, der er tilsluttet den valgte port.

- Hubs: alle hubs med porte undtagen SBrick, SBrick Plus, BuWizz 2 og Technic Move Hub.
- Typisk brug: tjek, hvad der er tilsluttet, før du kører enhedsspecifikke blokke.

### Technic-farvesensor {#technic-color-sensor}

#### Technic-sensor: `indstil tilstand til …` (Avanceret) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Skifter Technic-farvesensoren til den valgte tilstand.

- Tilstande: `standard`, `omgivende`
- Et skift af tilstand kan påvirke dit program på uventede måder: I tilstanden `omgivende` kan sensoren ikke læse farver eller reflekteret lys.

#### Technic-sensor: `farve …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returnerer den farve, Technic-farvesensoren ser.

- Output: `værdi` (et tal) eller `streng` (farvens navn)

#### Technic-sensor: `er farve …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Returnerer `true`, når Technic-farvesensoren ser den valgte farve.

#### Technic-sensor: `reflekteret lys (%)` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returnerer, hvor meget lys overfladen kaster tilbage til Technic-farvesensoren, i procent.

#### Technic-sensor: `reflekteret lys …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Returnerer `true`, når det reflekterede lys forholder sig til værdien som valgt.

- Sammenligning: `<`, `=`, `>`

#### Technic-sensor: `omgivende lys (%)` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returnerer lysstyrken af det omgivende lys i procent.

#### Technic-sensor: `omgivende lys …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Returnerer `true`, når det omgivende lys forholder sig til værdien som valgt.

- Sammenligning: `<`, `=`, `>`

#### Technic-sensor: `rå værdi …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returnerer én rå værdi af den farve, sensoren ser.

- Værdier: `rød`, `grøn`, `blå`, `farvetone (°)` (0–359), `mætning (%)`, `lysstyrke (%)`
- Sensorer: Technic-farvesensoren og BOOST-farve- og afstandssensoren. På Technic Hub kommer farvetone og mætning fra sensoren, og lysstyrken beregnes ud fra rød, grøn og blå.
- Typisk brug: skel mellem farver, som blokken **farve** ikke kender, eller mellem lignende nuancer ud fra farvetonen.

### Technic-afstandssensor {#technic-distance-sensor}

#### Technic-sensor: `afstand …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returnerer den afstand, Technic-afstandssensoren måler.

- Enheder: `mm`, `cm`, `tommer`, `%`

#### Technic-sensor: `er nærmere end / længere end / præcis ved …` (Begynder) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Returnerer `true`, når den afstand, Technic-afstandssensoren måler, opfylder betingelsen.

- Sammenligning: `nærmere end`, `længere end`, `præcis ved`
- Enheder: `mm`, `cm`, `tommer`, `%`

### BOOST-farve- og afstandssensor {#boost-color-and-distance-sensor}

#### BOOST-sensor: `farve …` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returnerer den farve, BOOST-farve- og afstandssensoren ser.

- Output: `værdi` (et tal) eller `streng` (farvens navn)

#### BOOST-sensor: `er farve …` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Returnerer `true`, når BOOST-sensoren ser den valgte farve.

#### BOOST-sensor: `afstand …` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returnerer den afstand, BOOST-farve- og afstandssensoren måler.

- Enheder: `%`, `cm`, `tommer`

#### BOOST-sensor: `er nærmere end / længere end / præcis ved …` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Returnerer `true`, når den afstand, BOOST-sensoren måler, opfylder betingelsen.

- Sammenligning: `nærmere end`, `længere end`, `præcis ved`
- Enheder: `%`, `cm`, `tommer`

#### BOOST-sensor: `reflekteret lys (%)` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returnerer, hvor meget lys overfladen kaster tilbage til BOOST-sensoren, i procent, i trin på 1 %.

- Til den rå farve (rød, grøn, blå, farvetone, mætning, lysstyrke) fra denne sensor bruger du Technic-sensor: **rå værdi …**, som også virker med den.

#### BOOST-sensor: `reflekteret lys …` (Begynder) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Returnerer `true`, når det reflekterede lys forholder sig til værdien som valgt.

- Sammenligning: `<`, `=`, `>`

### WeDo 2.0-sensorer {#wedo-2-sensors}

WeDo 2.0-bevægelsessensoren og -hældningssensoren på WeDo 2.0-hubben.

#### WeDo 2.0-sensor: `afstand …` (Begynder) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returnerer den afstand, WeDo 2.0-bevægelsessensoren måler.

- Enheder: `%`, `cm`, `tommer`
- Hubs: WeDo 2.0.

#### WeDo 2.0-sensor: `er nærmere end / længere end / præcis ved …` (Begynder) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Returnerer `true`, når den afstand, WeDo 2.0-bevægelsessensoren måler, opfylder betingelsen.

- Sammenligning: `nærmere end`, `længere end`, `præcis ved`
- Enheder: `%`, `cm`, `tommer`
- Hubs: WeDo 2.0.

#### WeDo 2.0-sensor: `vinkel …` / `retning som …` (Begynder) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returnerer data fra WeDo 2.0-hældningssensoren: en hældningsvinkel eller den retning, den hælder i.

- Vinkler: `hældning`, `rulning`
- Output for retning: `tekst` eller `tal`; retninger: `neutral`, `fremad`, `baglæns`, `venstre`, `højre`, `ukendt`
- Hubs: WeDo 2.0.

## Robot Inventor-hub {#robot-inventor-sensors}

Disse blokke kommer fra Robot Inventor-appen og virker kun med [hubbene fra MINDSTORMS Robot Inventor og SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). De har hub-ikonet. Deres begivenheder (når hubben rystes, vippes og så videre) findes på siden [Begivenheder](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Kraftsensor {#robot-inventor-force-sensor}

#### `… er trykket / trykket hårdt / sluppet ?` (Begynder) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Tjekker kraftsensoren på den valgte port. `trykket hårdt` betyder trykket med mere end 5 newton.

#### `… tryk i % / newton` (Begynder) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Returnerer, hvor hårdt kraftsensoren trykkes: i procent (0–100) eller i newton (0–10).

### Hubbens bevægelse {#robot-inventor-motion}

#### `er hub … ?` (Avanceret) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true`, hvis hubben lige er blevet bevæget på denne måde: `banket`, `dobbeltbanket`, `rystet` (standard) eller `i frit fald`. En gestus tæller én gang: Når en blok har læst den, er den væk.

#### `gestus` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Returnerer den sidste gestus som tekst: `tapped`, `doubletapped`, `shake` eller `freefall`, eller en tom værdi, hvis der ikke var nogen.

#### `er … opad?` (Begynder) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true`, hvis denne side af hubben vender opad: `forside` (lysmatrixen), `overside`, `højre side`, `bagside`, `underside` eller `venstre side`.

#### `orientering` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Returnerer den side, der vender opad, som tekst: `front`, `up`, `rightside`, `back`, `down` eller `leftside`.

#### `… vinkel` (Begynder) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Returnerer hubbens vinkel i grader om én akse: `gyring` (drejning til venstre og højre som et kompas), `hældning` (næsen op og ned) eller `rulning` (vipning til siderne).

- Typisk brug: Kør en robot i en lige linje, eller drej den præcis 90°: Nulstil gyringen, og styr derefter, indtil gyringen når vinklen.

#### `indstil gyringsvinkel til 0` (Begynder) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Gør hubbens nuværende retning til nyt nulpunkt for gyringsvinklen. Blokken venter 0,1 s, så den næste måling allerede regnes fra det.

#### `vinkelhastighed …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Returnerer, hvor hurtigt hubben drejer om aksen `x`, `y` eller `z` (gyroskopet), i grader pr. sekund.

#### `acceleration …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Returnerer hubbens acceleration langs aksen `x`, `y` eller `z`, sådan som hubben melder den.

#### `er hub vippet … ?` (Avanceret) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true`, hvis hubben er vippet i denne retning: `op`, `ned`, `til venstre`, `til højre` eller `enhver` (standard). Hubben regnes som vippet fra omkring 12° fra vandret; er den vippet begge veje, tæller den største vipning.

### Radio mellem hubs {#robot-inventor-radio}

Robot Inventor-hubs kan sende korte signaler til hinanden via radio, uden at MOCPilot er involveret. Et signal har et navn og en værdi.

#### `send hub-signal … med …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Sender signalet med det angivne navn (som standard `signal`) og værdi (`1`) fra denne hub til hubs i nærheden.

#### `modtaget signal … værdi` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Returnerer den sidste værdi, som denne hub har modtaget for signalet med dette navn, eller 0, hvis der ikke er kommet noget endnu. Brug [når hub modtager signal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio) for at reagere i det øjeblik, et signal kommer.

## Denne enhed {#this-device}

Disse blokke læser den telefon, tablet eller computer, der kører MOCPilot.

### `enhed % batteri` (Begynder) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returnerer enhedens batteriniveau i procent.

### `enhed … vinkel` (Avanceret) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returnerer enhedens hældningsvinkel.

- Vinkler: `hældning`, `rulning`, `gyring`
- Typisk brug: styr modellen ved at vippe telefonen.

### `enhed … accelerometer (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returnerer enhedens rå accelerometeraflæsning langs én akse i m/s².

- Akser: `x`, `y`, `z`

### `enhed … acceleration (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returnerer enhedens acceleration langs én akse i m/s².

- Akser: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Avanceret) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returnerer tiden i sekunder, siden programmet startede eller siden den seneste **nulstil timer**.

### `nulstil timer` (Avanceret) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Sætter timeren tilbage til nul.
