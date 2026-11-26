---
id: Sensors
title: Sensoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensoren {#sensors}

Sensorblokken lezen de toestand uit van je telefoon of tablet, de programmatimer, de hubs en de sensoren die erop zijn aangesloten. Gebruik hun waarden in voorwaarden, gebeurtenissen en berekeningen.

Op deze pagina:

- [Hubtoestand](#hub-state): batterij, spanning, temperatuur, stroom en vermogensmodus
- [Hubknoppen, kanteling en oriëntatie](#hub-tilt-and-orientation)
- [Sensoren op poorten](#sensors-on-ports): elk apparaat, Technic-kleursensor, Technic-afstandssensor, BOOST-kleur- en afstandssensor, WeDo 2.0-sensoren
- [Robot Inventor-hub](#robot-inventor-sensors): krachtsensor, gebaren, oriëntatie, gieren, helling en rol, kanteling, radio tussen hubs
- [Dit apparaat](#this-device): de telefoon, tablet of computer waarop MOCPilot draait
- [Timer](#timer)

## Hubtoestand {#hub-state}

Deze blokken bestaan niet voor Mould King-hubs, die geen gegevens melden.

### `… % batterij` (Beginner) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Geeft het batterijniveau van de hub terug, in procent.

### `… batterijspanning (V)` (Gevorderd) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Geeft de batterijspanning van de hub terug, in volt.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Geeft `NaN` terug als de hub niet verbonden is.

### `… temperatuur (C°)` (Gevorderd) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Geeft de temperatuur van de elektronica van de hub terug, in graden Celsius.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… stroom (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Geeft de totale stroom terug die de hub opneemt, in milliampère.

- Hubs: Technic Hub.
- Gebruikelijke toepassing: een grijper of een lier stoppen als de belasting toeneemt.

### `krijg … uitgangsspanning (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Geeft de spanning terug die de hub op dit moment aan zijn poorten levert, in volt.

- Hubs: BuWizz 2.

### `… stroom (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Geeft de stroom terug die via de gekozen poort wordt afgenomen, in ampère.

- Hubs: BuWizz 2, BuWizz 3.

### `stel stroommodus in …` (Technic Move Hub) (Beginner) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Stelt de vermogensmodus van een Technic Move Hub in.

- Modi: `normaal`, `boost`
- Hubs: Technic Move Hub.

## Hubknoppen, kanteling en oriëntatie {#hub-tilt-and-orientation}

Het knopblok vermeldt met welke hubs het werkt. De kantel- en oriëntatieblokken werken op BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub en Robot Inventor. Op de Technic Move Hub worden ze berekend uit de versnellingsmeter, voor een hub die met de knop naar beneden is gemonteerd, zoals in de LEGO-automodellen; hij heeft geen `gieren` en geen **stel … hellingsoriëntatie naar**.

### `… … knop …` (Beginner) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Geeft `true` terug als de gekozen hubknop in de gekozen toestand is.

- Toestanden: `ingedrukt`, `losgelaten`
- Hubs: LEGO Powered Up-hubs, WeDo 2.0 en Robot Inventor. Welke knoppen er zijn, hangt af van de hub (meestal `midden`).

### `… … hoek` (Beginner) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Geeft de kantelhoek van de hub terug.

- Hoeken: `helling`, `rol`, `gieren`
- `gieren` is alleen beschikbaar op de Technic Hub en Robot Inventor.

### `… … versnellingsmeter (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Geeft de ruwe meetwaarde van de versnellingsmeter van de hub langs één as terug.

- Assen: `x`, `y`, `z`

### `… … versnelling (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Geeft de versnelling van de hub langs één as terug.

- Assen: `x`, `y`, `z`

### `… … draaisnelheid (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Geeft terug hoe snel de hub om één as draait, in graden per seconde (van de gyroscoop van de hub).

- Assen: `x`, `y`, `z`. `z` is draaien op de plaats (positief = naar links als de hub plat ligt); `x` en `y` zijn rol en helling.
- Hubs: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Gebruikelijke toepassing: een voertuig rechtdoor laten rijden, merken dat een model ronddraait of omvalt.

### `krijg … oriëntatie …` (Beginner) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Geeft terug welke kant van de hub naar boven wijst.

- Uitvoer: `tekst` of `index`
- Waarden: `Voor`, `Bovenkant`, `Rechts`, `Achterste`, `Onderkant`, `Links`

### `… oriëntatie …` (Beginner) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Geeft `true` terug als de gekozen kant van de hub naar boven wijst.

- Opties: `Voor`, `Bovenkant`, `Rechts`, `Achterste`, `Onderkant`, `Links`

### `stel … hellingsoriëntatie naar …` (Gevorderd) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Vertelt de hub hoe hij in het model gemonteerd is, zodat kanteling en oriëntatie vanuit die positie worden gemeten.

- Opties: `Voor`, `Bovenkant`, `Rechts`, `Achterste`, `Onderkant`, `Links`
- Niet beschikbaar voor de Technic Move Hub.

## Sensoren op poorten {#sensors-on-ports}

De Technic- en BOOST-sensorblokken hieronder werken op de City Hub, Technic Hub, BOOST Move Hub en de MINDSTORMS Robot Inventor-hub (niet SBrick, BuWizz, WeDo 2.0 of Mould King).

### Elk apparaat op een poort {#any-port-device}

#### `… apparaat type` (Beginner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Geeft het type terug van het apparaat dat op de gekozen poort is aangesloten.

- Hubs: alle hubs met poorten behalve SBrick, SBrick Plus, BuWizz 2 en Technic Move Hub.
- Gebruikelijke toepassing: controleren wat er is aangesloten voordat je apparaatspecifieke blokken uitvoert.

### Technic-kleursensor {#technic-color-sensor}

#### Technic-sensor: `stel modus in op …` (Gevorderd) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Zet de Technic-kleursensor in de gekozen modus.

- Modi: `standaard`, `omgeving`
- Het wijzigen van de modus kan je programma op onverwachte manieren beïnvloeden: in de modus `omgeving` kan de sensor geen kleuren of gereflecteerd licht meten.

#### Technic-sensor: `kleur …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Geeft de kleur terug die de Technic-kleursensor ziet.

- Uitvoer: `waarde` (een getal) of `tekenreeks` (de naam van de kleur)

#### Technic-sensor: `is kleur …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Geeft `true` terug als de Technic-kleursensor de gekozen kleur ziet.

#### Technic-sensor: `gereflecteerd licht (%)` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Geeft terug hoeveel licht het oppervlak terugkaatst naar de Technic-kleursensor, in procent.

#### Technic-sensor: `gereflecteerd licht …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Geeft `true` terug als het gereflecteerde licht zich op de gekozen manier tot de waarde verhoudt.

- Vergelijking: `<`, `=`, `>`

#### Technic-sensor: `omgevingslicht (%)` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Geeft de helderheid van het omgevingslicht terug, in procent.

#### Technic-sensor: `omgevingslicht …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Geeft `true` terug als het omgevingslicht zich op de gekozen manier tot de waarde verhoudt.

- Vergelijking: `<`, `=`, `>`

#### Technic-sensor: `ruwe waarde …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Geeft één ruwe waarde terug van de kleur die de sensor ziet.

- Waarden: `rood`, `groen`, `blauw`, `tint (°)` (0–359), `verzadiging (%)`, `helderheid (%)`
- Sensoren: de Technic-kleursensor en de BOOST-kleur- en afstandssensor. Op de Technic Hub komen tint en verzadiging van de sensor en wordt de helderheid berekend uit rood, groen en blauw.
- Gebruikelijke toepassing: kleuren die het blok **kleur** niet kent, of vergelijkbare tinten, van elkaar onderscheiden aan de hand van de tint.

### Technic-afstandssensor {#technic-distance-sensor}

#### Technic-sensor: `afstand …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Geeft de afstand terug die de Technic-afstandssensor meet.

- Eenheden: `mm`, `cm`, `duim`, `%`

#### Technic-sensor: `is dichterbij dan / verder dan / precies op …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Geeft `true` terug als de afstand die de Technic-afstandssensor meet aan de voorwaarde voldoet.

- Vergelijking: `dichterbij dan`, `verder dan`, `precies op`
- Eenheden: `mm`, `cm`, `duim`, `%`

### BOOST-kleur- en afstandssensor {#boost-color-and-distance-sensor}

#### BOOST-sensor: `kleur …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Geeft de kleur terug die de BOOST-kleur- en afstandssensor ziet.

- Uitvoer: `waarde` (een getal) of `tekenreeks` (de naam van de kleur)

#### BOOST-sensor: `is kleur …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Geeft `true` terug als de BOOST-sensor de gekozen kleur ziet.

#### BOOST-sensor: `afstand …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Geeft de afstand terug die de BOOST-kleur- en afstandssensor meet.

- Eenheden: `%`, `cm`, `duim`

#### BOOST-sensor: `is dichterbij dan / verder dan / precies op …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Geeft `true` terug als de afstand die de BOOST-sensor meet aan de voorwaarde voldoet.

- Vergelijking: `dichterbij dan`, `verder dan`, `precies op`
- Eenheden: `%`, `cm`, `duim`

#### BOOST-sensor: `gereflecteerd licht (%)` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Geeft terug hoeveel licht het oppervlak terugkaatst naar de BOOST-sensor, in procent, in stappen van 1 %.

- Gebruik voor de ruwe kleur (rood, groen, blauw, tint, verzadiging, helderheid) van deze sensor Technic-sensor: **ruwe waarde …**, dat ook met deze sensor werkt.

#### BOOST-sensor: `gereflecteerd licht …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Geeft `true` terug als het gereflecteerde licht zich op de gekozen manier tot de waarde verhoudt.

- Vergelijking: `<`, `=`, `>`

### WeDo 2.0-sensoren {#wedo-2-sensors}

De WeDo 2.0-bewegingssensor en -kantelsensor, op de WeDo 2.0-hub.

#### WeDo 2.0-sensor: `afstand …` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Geeft de afstand terug die de WeDo 2.0-bewegingssensor meet.

- Eenheden: `%`, `cm`, `duim`
- Hubs: WeDo 2.0.

#### WeDo 2.0-sensor: `is dichterbij dan / verder dan / precies op …` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Geeft `true` terug als de afstand die de WeDo 2.0-bewegingssensor meet aan de voorwaarde voldoet.

- Vergelijking: `dichterbij dan`, `verder dan`, `precies op`
- Eenheden: `%`, `cm`, `duim`
- Hubs: WeDo 2.0.

#### WeDo 2.0-sensor: `hoek …` / `richting als …` (Beginner) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Geeft gegevens van de WeDo 2.0-kantelsensor terug: een kantelhoek, of de richting waarin hij gekanteld is.

- Hoeken: `helling`, `rol`
- Uitvoer voor de richting: `tekst` of `getal`; richtingen: `neutraal`, `vooruit`, `achteruit`, `links`, `rechts`, `onbekend`
- Hubs: WeDo 2.0.

## Robot Inventor-hub {#robot-inventor-sensors}

Deze blokken komen uit de Robot Inventor-app en werken alleen met de [hubs van MINDSTORMS Robot Inventor en SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ze dragen het hubpictogram. Hun gebeurtenissen (als de hub geschud, gekanteld wordt enzovoort) staan op de pagina [Gebeurtenissen](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Krachtsensor {#robot-inventor-force-sensor}

#### `… is ingedrukt / hard ingedrukt / losgelaten ?` (Beginner) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Controleert de krachtsensor op de gekozen poort. `hard ingedrukt` betekent ingedrukt met meer dan 5 newton.

#### `… druk in % / newton` (Beginner) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Geeft terug hoe hard de krachtsensor wordt ingedrukt: in procenten (0–100) of in newton (0–10).

### Beweging van de hub {#robot-inventor-motion}

#### `is hub … ?` (Gevorderd) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` als de hub net op deze manier is bewogen: `getikt`, `dubbel getikt`, `geschud` (standaard) of `vallend`. Een gebaar telt één keer: nadat een blok het heeft gelezen, is het weg.

#### `gebaar` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Geeft het laatste gebaar terug als tekst: `tapped`, `doubletapped`, `shake` of `freefall`, of een lege waarde als er geen was.

#### `is … boven?` (Beginner) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` als deze kant van de hub naar boven wijst: `voorkant` (de lichtmatrix), `bovenkant`, `rechterkant`, `achterkant`, `onderkant` of `linkerkant`.

#### `oriëntatie` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Geeft de kant die naar boven wijst terug als tekst: `front`, `up`, `rightside`, `back`, `down` of `leftside`.

#### `… hoek` (Beginner) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Geeft de hoek van de hub in graden rond één as terug: `gieren` (links en rechts draaien, zoals een kompas), `helling` (neus omhoog en omlaag) of `rol` (opzij kantelen).

- Gebruikelijke toepassing: een robot in een rechte lijn laten rijden of precies 90° laten draaien: reset het gieren en stuur dan tot het gieren de hoek bereikt.

#### `stel gierhoek in op 0` (Beginner) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Maakt de huidige richting van de hub het nieuwe nulpunt van de gierhoek. Het blok wacht 0,1 s, zodat de volgende meting al vanaf daar wordt geteld.

#### `hoeksnelheid …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Geeft terug hoe snel de hub rond de as `x`, `y` of `z` draait (de gyroscoop), in graden per seconde.

#### `versnelling …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Geeft de versnelling van de hub langs de as `x`, `y` of `z` terug, zoals de hub die meldt.

#### `is hub gekanteld … ?` (Gevorderd) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` als de hub in deze richting gekanteld is: `omhoog`, `omlaag`, `naar links`, `naar rechts` of `elke` (standaard). De hub telt als gekanteld vanaf ongeveer 12° uit het horizontale vlak; als hij beide kanten op gekanteld is, telt de grootste kanteling.

### Radio tussen hubs {#robot-inventor-radio}

Robot Inventor-hubs kunnen elkaar via de radio korte signalen sturen, zonder MOCPilot ertussen. Een signaal heeft een naam en een waarde.

#### `verzend hubsignaal … met …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Verzendt het signaal met de opgegeven naam (standaard `signal`) en waarde (`1`) van deze hub naar de hubs in de buurt.

#### `ontvangen signaal … waarde` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Geeft de laatste waarde terug die deze hub voor het signaal met deze naam heeft ontvangen, of 0 als er nog niets is binnengekomen. Om meteen te reageren als een signaal binnenkomt, gebruik je [wanneer hub signaal ontvangt](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Dit apparaat {#this-device}

Deze blokken lezen de telefoon, tablet of computer uit waarop MOCPilot draait.

### `apparaat % batterij` (Beginner) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Geeft het batterijniveau van het apparaat terug, in procent.

### `apparaat … hoek` (Gevorderd) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Geeft de kantelhoek van het apparaat terug.

- Hoeken: `helling`, `rol`, `gieren`
- Gebruikelijke toepassing: het model besturen door de telefoon te kantelen.

### `apparaat … versnellingsmeter (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Geeft de ruwe meetwaarde van de versnellingsmeter van het apparaat langs één as terug, in m/s².

- Assen: `x`, `y`, `z`

### `apparaat … versnelling (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Geeft de versnelling van het apparaat langs één as terug, in m/s².

- Assen: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Gevorderd) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Geeft de tijd terug sinds het programma startte of sinds de laatste **reset timer**, in seconden.

### `reset timer` (Gevorderd) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Zet de timer terug op nul.
