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

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Geeft `NaN` terug als de hub niet verbonden is.

### `… temperatuur (C°)` (Gevorderd) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Geeft de temperatuur van de elektronica van de hub terug, in graden Celsius.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

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

Het knopblok vermeldt met welke hubs het werkt. De kantel- en oriëntatieblokken werken op BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub en Robot Inventor.

### `… … knop …` (Beginner) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Geeft `true` terug als de gekozen hubknop in de gekozen toestand is.

- Toestanden: `ingedrukt`, `vrijgegeven`
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

## Sensoren op poorten {#sensors-on-ports}

De Technic- en BOOST-sensorblokken hieronder werken op de City Hub, Technic Hub, BOOST Move Hub en de MINDSTORMS Robot Inventor-hub (niet SBrick, BuWizz, WeDo 2.0 of Mould King).

### Elk apparaat op een poort {#any-port-device}

#### `… apparaat type` (Beginner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Geeft het type terug van het apparaat dat op de gekozen poort is aangesloten.

- Hubs: alle hubs met poorten behalve SBrick, SBrick Plus en BuWizz 2.
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
Geeft de ruwe waarde van één kleurkanaal van de Technic-kleursensor terug.

- Kanalen: `rood`, `groen`, `blauw`

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
Geeft terug hoeveel licht het oppervlak terugkaatst naar de BOOST-sensor, in procent.

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
