---
id: Sensors
title: Sensorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensorer {#sensors}

Sensorblock läser av tillståndet hos din telefon eller surfplatta, programmets timer, hubbarna och sensorerna som är anslutna till dem. Använd deras värden i villkor, händelser och beräkningar.

På den här sidan:

- [Hubbens tillstånd](#hub-state): batteri, spänning, temperatur, ström och effektläge
- [Hubbens knappar, lutning och orientering](#hub-tilt-and-orientation)
- [Sensorer på portar](#sensors-on-ports): valfri enhet, Technic-färgsensor, Technic-avståndssensor, BOOST färg- och avståndssensor, WeDo 2.0-sensorer
- [Robot Inventor-hubben](#robot-inventor-sensors): kraftsensor, gester, orientering, yaw, tippning och rollning, lutning, radio mellan hubbar
- [Den här enheten](#this-device): telefonen, surfplattan eller datorn som kör MOCPilot
- [Timer](#timer)

## Hubbens tillstånd {#hub-state}

De här blocken finns inte för Mould King-hubbar, som inte rapporterar några data.

### `… % batteri` (Nybörjare) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returnerar hubbens batterinivå i procent.

### `… batterispänning (V)` (Avancerad) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returnerar hubbens batterispänning i volt.

- Hubbar: Technic Hub, Technic Move Hub, BOOST Move Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Typiska värden: Technic Move Hub har en laddningsbar cell, cirka 4,2 V när den är full och 3,3–3,5 V när den är tom; BOOST Move Hub drivs av 6 AAA-batterier, cirka 9 V när de är nya.
- Returnerar `NaN` när hubben inte är ansluten.

### `… temperatur (C°)` (Avancerad) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnerar temperaturen i hubbens elektronik i grader Celsius.

- Hubbar: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… ström (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Returnerar den totala ström som hubben drar, i milliampere.

- Hubbar: Technic Hub, BOOST Move Hub.
- Typisk användning: stoppa en gripklo eller en vinsch när belastningen ökar.

### `hämta … utgångsspänning (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returnerar den spänning som hubben just nu levererar till sina portar, i volt.

- Utan belastning beror den på effektläget: cirka 6,3 V i Långsam, 7,7 V i Normal, 9,15 V i Snabb och 10,5 V i Ludicrous.

- Hubbar: BuWizz 2.

### `… ström (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returnerar strömmen som dras på den valda porten, i ampere.

- Hubbar: BuWizz 2, BuWizz 3.

### `ställ in strömläge …` (Technic Move Hub) (Nybörjare) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Ställer in effektläget på en Technic Move Hub.

- Lägen: `normal`, `boost`
- Hubbar: Technic Move Hub.

## Hubbens knappar, lutning och orientering {#hub-tilt-and-orientation}

Knappblocket listar de hubbar det fungerar med. Lutnings- och orienteringsblocken fungerar på BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub och Robot Inventor. På Technic Move Hub beräknas de från dess accelerometer för en hubb som är monterad med knappen nedåt, som i LEGO-bilmodellerna; den har ingen `yaw` och inget **ställ in … lutningsorientering till**.

### `är … … knapp …` (Nybörjare) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Returnerar `true` när den valda hubbknappen är i det valda tillståndet.

- Tillstånd: `tryckt`, `släppt`
- Hubbar: LEGO Powered Up-hubbar, WeDo 2.0 och Robot Inventor. Listan med knappar beror på hubben (oftast `centrum`).

### `… … vinkel` (Nybörjare) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returnerar hubbens lutningsvinkel.

- Vinklar: `lutning`, `rullning`, `yaw`
- `yaw` finns bara på Technic Hub och Robot Inventor.

### `… … accelerometer (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returnerar hubbens råa accelerometervärde längs en axel.

- Axlar: `x`, `y`, `z`

### `… … acceleration (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returnerar hubbens acceleration längs en axel.

- Axlar: `x`, `y`, `z`

### `… … rotationshastighet (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Returnerar hur snabbt hubben vrider sig runt en axel, i grader per sekund (från hubbens gyroskop).

- Axlar: `x`, `y`, `z`. `z` är vridning på stället (positivt = åt vänster när hubben ligger plant); `x` och `y` är rollning och tippning.
- Hubbar: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Typisk användning: hålla ett fordon på rak kurs, märka att en modell snurrar eller välter.

### `hämta … orientering …` (Nybörjare) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returnerar vilken sida av hubben som är vänd uppåt.

- Utdata: `text` eller `index`
- Värden: `Fram`, `Topp`, `Höger`, `Bak`, `Botten`, `Vänster`

### `… orientering …` (Nybörjare) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Returnerar `true` när den valda sidan av hubben är vänd uppåt.

- Alternativ: `Fram`, `Topp`, `Höger`, `Bak`, `Botten`, `Vänster`

### `ställ in … lutningsorientering till …` (Avancerad) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Talar om för hubben hur den är monterad i modellen, så att lutning och orientering mäts från det läget.

- Alternativ: `Fram`, `Topp`, `Höger`, `Bak`, `Botten`, `Vänster`
- Inte tillgängligt för Technic Move Hub.

## Sensorer på portar {#sensors-on-ports}

Technic- och BOOST-sensorblocken nedan fungerar på City Hub, Technic Hub, BOOST Move Hub och MINDSTORMS Robot Inventor-hubben (inte SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Valfri enhet på en port {#any-port-device}

#### `… enhetstyp` (Nybörjare) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnerar typen av enhet som är ansluten till den valda porten.

- Hubbar: alla hubbar med portar utom SBrick, SBrick Plus, BuWizz 2 och Technic Move Hub.
- Typisk användning: kontrollera vad som är anslutet innan enhetsspecifika block körs.

### Technic-färgsensor {#technic-color-sensor}

#### Technic-sensor: `ställ in läge på …` (Avancerad) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Växlar Technic-färgsensorn till det valda läget.

- Lägen: `standard`, `omgivning`
- Att byta läge kan påverka programmet på oväntade sätt: i läget `omgivning` kan sensorn inte läsa färger eller reflekterat ljus.

#### Technic-sensor: `färg …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returnerar färgen som Technic-färgsensorn ser.

- Utdata: `värde` (ett tal) eller `sträng` (färgens namn)

#### Technic-sensor: `är färg …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Returnerar `true` när Technic-färgsensorn ser den valda färgen.

#### Technic-sensor: `reflekterat ljus (%)` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returnerar hur mycket ljus ytan reflekterar tillbaka till Technic-färgsensorn, i procent.

#### Technic-sensor: `reflekterat ljus …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Returnerar `true` när det reflekterade ljuset förhåller sig till värdet enligt den valda jämförelsen.

- Jämförelse: `<`, `=`, `>`

#### Technic-sensor: `omgivande ljus (%)` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returnerar det omgivande ljusets styrka i procent.

#### Technic-sensor: `omgivande ljus …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Returnerar `true` när det omgivande ljuset förhåller sig till värdet enligt den valda jämförelsen.

- Jämförelse: `<`, `=`, `>`

#### Technic-sensor: `rå värde …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returnerar ett råvärde för färgen som sensorn ser.

- Värden: `röd`, `grön`, `blå`, `nyans (°)` (0–359), `mättnad (%)`, `ljusstyrka (%)`
- Sensorer: Technic-färgsensorn och BOOST färg- och avståndssensorn. På Technic Hub kommer nyans och mättnad från sensorn, och ljusstyrkan beräknas från rött, grönt och blått.
- Typisk användning: skilja på färger som blocket **färg** inte känner till, eller på liknande toner, med hjälp av nyansen.

### Technic-avståndssensor {#technic-distance-sensor}

#### Technic-sensor: `avstånd …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returnerar avståndet som Technic-avståndssensorn mäter.

- Enheter: `mm`, `cm`, `tum`, `%`

#### Technic-sensor: `är närmare än / längre än / precis på …` (Nybörjare) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Returnerar `true` när avståndet som Technic-avståndssensorn mäter uppfyller villkoret.

- Jämförelse: `närmare än`, `längre än`, `precis på`
- Enheter: `mm`, `cm`, `tum`, `%`

### BOOST färg- och avståndssensor {#boost-color-and-distance-sensor}

#### BOOST-sensor: `färg …` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returnerar färgen som BOOST färg- och avståndssensor ser.

- Utdata: `värde` (ett tal) eller `sträng` (färgens namn)

#### BOOST-sensor: `är färg …` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Returnerar `true` när BOOST-sensorn ser den valda färgen.

#### BOOST-sensor: `avstånd …` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returnerar avståndet som BOOST färg- och avståndssensor mäter.

- Enheter: `%`, `cm`, `tum`

#### BOOST-sensor: `är närmare än / längre än / precis på …` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Returnerar `true` när avståndet som BOOST-sensorn mäter uppfyller villkoret.

- Jämförelse: `närmare än`, `längre än`, `precis på`
- Enheter: `%`, `cm`, `tum`

#### BOOST-sensor: `reflekterat ljus (%)` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returnerar hur mycket ljus ytan reflekterar tillbaka till BOOST-sensorn, i procent, i steg om 1 %.

- För den råa färgen (röd, grön, blå, nyans, mättnad, ljusstyrka) från den här sensorn använder du Technic-sensor: **rå värde …**, som också fungerar med den.

#### BOOST-sensor: `reflekterat ljus …` (Nybörjare) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Returnerar `true` när det reflekterade ljuset förhåller sig till värdet enligt den valda jämförelsen.

- Jämförelse: `<`, `=`, `>`

### WeDo 2.0-sensorer {#wedo-2-sensors}

WeDo 2.0-rörelsesensorn och WeDo 2.0-lutningssensorn, på WeDo 2.0-hubben.

#### WeDo 2.0-sensor: `avstånd …` (Nybörjare) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returnerar avståndet som WeDo 2.0-rörelsesensorn mäter.

- Enheter: `%`, `cm`, `tum`
- Hubbar: WeDo 2.0.

#### WeDo 2.0-sensor: `är närmare än / längre än / precis på …` (Nybörjare) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Returnerar `true` när avståndet som WeDo 2.0-rörelsesensorn mäter uppfyller villkoret.

- Jämförelse: `närmare än`, `längre än`, `precis på`
- Enheter: `%`, `cm`, `tum`
- Hubbar: WeDo 2.0.

#### WeDo 2.0-sensor: `vinkel …` / `riktning som …` (Nybörjare) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returnerar data från WeDo 2.0-lutningssensorn: en lutningsvinkel eller riktningen den lutar åt.

- Vinklar: `lutning`, `rullning`
- Utdata för riktning: `text` eller `tal`; riktningar: `neutral`, `framåt`, `bakåt`, `vänster`, `höger`, `okänd`
- Hubbar: WeDo 2.0.

## Robot Inventor-hubben {#robot-inventor-sensors}

De här blocken kommer från Robot Inventor-appen och fungerar bara med [MINDSTORMS Robot Inventor- och SPIKE Prime-hubbarna](/docs/Application/Hubs/RobotInventorHub). De har hubbikonen. Deras händelser (när hubben skakas, lutas och så vidare) finns på sidan [Händelser](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Kraftsensor {#robot-inventor-force-sensor}

#### `är … tryckt / hårt tryckt / släppt ?` (Nybörjare) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Kontrollerar kraftsensorn på den valda porten. `hårt tryckt` betyder intryckt med mer än 5 newton.

#### `… tryck i % / newton` (Nybörjare) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Returnerar hur hårt kraftsensorn trycks in: i procent (0–100) eller i newton (0–10).

### Hubbens rörelse {#robot-inventor-motion}

#### `är hubben … ?` (Avancerad) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` om hubben just har rörts på det här sättet: `knackad`, `dubbelknackad`, `skakad` (standard) eller `i fritt fall`. En gest räknas en gång: när ett block har läst den är den borta.

#### `gest` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Returnerar den senaste gesten som text: `tapped`, `doubletapped`, `shake` eller `freefall`, eller ett tomt värde om det inte har funnits någon.

#### `är … uppåt?` (Nybörjare) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` om den här sidan av hubben är vänd uppåt: `framsida` (ljusmatrisen), `ovansida`, `höger sida`, `baksida`, `undersida` eller `vänster sida`.

#### `orientering` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Returnerar sidan som är vänd uppåt som text: `front`, `up`, `rightside`, `back`, `down` eller `leftside`.

#### `… vinkel` (Nybörjare) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Returnerar hubbens vinkel i grader runt en axel: `yaw` (vridning åt vänster och höger, som en kompass), `lutning` (tippning: nosen upp och ner) eller `rullning` (krängning åt sidorna).

- Typisk användning: köra en robot rakt fram eller svänga den exakt 90°: nollställ yaw-vinkeln och styr sedan tills yaw-vinkeln når önskad vinkel.

#### `ställ in yaw-vinkel till 0` (Nybörjare) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Gör hubbens aktuella riktning till ny nollpunkt för yaw-vinkeln. Blocket väntar 0,1 s så att nästa avläsning redan räknas från den.

#### `vinkelhastighet …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Returnerar hur snabbt hubben vrider sig runt axeln `x`, `y` eller `z` (gyroskopet), i grader per sekund.

#### `acceleration …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Returnerar hubbens acceleration längs axeln `x`, `y` eller `z`, så som hubben rapporterar den.

#### `är hubben lutad … ?` (Avancerad) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` om hubben lutar åt det här hållet: `upp`, `ner`, `åt vänster`, `åt höger` eller `vilken som helst` (standard). Hubben räknas som lutad från ungefär 12° från vågrätt läge; när den lutar åt båda hållen gäller den största lutningen.

### Radio mellan hubbar {#robot-inventor-radio}

Robot Inventor-hubbar kan skicka korta signaler till varandra trådlöst, utan att MOCPilot är inblandat. En signal har ett namn och ett värde.

#### `skicka hubbsignal … med …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Skickar signalen med angivet namn (`signal` som standard) och värde (`1`) från den här hubben till hubbarna i närheten.

#### `mottagen signal … värde` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Returnerar det senaste värdet som den här hubben har tagit emot för signalen med det här namnet, eller 0 om inget har kommit än. För att reagera i samma ögonblick som en signal kommer använder du [när hubben tar emot signal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Den här enheten {#this-device}

De här blocken läser av telefonen, surfplattan eller datorn som kör MOCPilot.

### `enhet % batteri` (Nybörjare) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returnerar enhetens batterinivå i procent.

### `enhet … vinkel` (Avancerad) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returnerar enhetens lutningsvinkel.

- Vinklar: `lutning`, `rullning`, `yaw`
- Typisk användning: styra modellen genom att luta telefonen.

### `enhet … accelerometer (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returnerar enhetens råa accelerometervärde längs en axel, i m/s².

- Axlar: `x`, `y`, `z`

### `enhet … acceleration (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returnerar enhetens acceleration längs en axel, i m/s².

- Axlar: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Avancerad) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returnerar tiden sedan programmet startade eller sedan den senaste **återställ timer**, i sekunder.

### `återställ timer` (Avancerad) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Nollställer timern.
