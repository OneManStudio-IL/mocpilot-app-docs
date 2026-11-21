---
id: Sensors
title: Senzori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Senzori {#sensors}

Blocurile pentru senzori citesc starea telefonului sau tabletei, cronometrul programului, huburile și senzorii conectați la ele. Folosește valorile lor în condiții, evenimente și calcule.

Pe această pagină:

- [Starea hubului](#hub-state): baterie, tensiune, temperatură, curent și mod de putere
- [Butoanele, înclinarea și orientarea hubului](#hub-tilt-and-orientation)
- [Senzori pe porturi](#sensors-on-ports): orice dispozitiv, senzorul de culoare Technic, senzorul de distanță Technic, senzorul de culoare și distanță BOOST, senzorii WeDo 2.0
- [Acest dispozitiv](#this-device): telefonul, tableta sau computerul pe care rulează MOCPilot
- [Cronometru](#timer)

## Starea hubului {#hub-state}

Aceste blocuri nu există pentru huburile Mould King, care nu raportează niciun fel de date.

### `… % baterie` (Începător) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returnează nivelul bateriei hubului, în procente.

### `… tensiunea bateriei (V)` (Avansat) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returnează tensiunea bateriei hubului, în volți.

- Huburi: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Returnează `NaN` când hubul nu este conectat.

### `… temperatură (C°)` (Avansat) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returnează temperatura electronicii hubului, în grade Celsius.

- Huburi: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `obține … tensiune de ieșire (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returnează tensiunea pe care hubul o furnizează în acest moment porturilor, în volți.

- Huburi: BuWizz 2.

### `… curent (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returnează curentul consumat pe portul selectat, în amperi.

- Huburi: BuWizz 2, BuWizz 3.

### `setați modul de alimentare …` (Technic Move Hub) (Începător) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Setează modul de putere al unui Technic Move Hub.

- Moduri: `normal`, `impuls`
- Huburi: Technic Move Hub.

## Butoanele, înclinarea și orientarea hubului {#hub-tilt-and-orientation}

Blocul pentru buton listează huburile cu care funcționează. Blocurile de înclinare și orientare funcționează pe BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub și Robot Inventor.

### `este … … buton …` (Începător) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Returnează `true` când butonul selectat al hubului este în starea selectată.

- Stări: `apăsat`, `eliberat`
- Huburi: huburile LEGO Powered Up, WeDo 2.0 și Robot Inventor. Lista butoanelor depinde de hub (de obicei `centru`).

### `… … unghi` (Începător) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returnează unghiul de înclinare al hubului.

- Unghiuri: `înclinare`, `rotire`, `derapaj`
- `derapaj` este disponibil doar pe Technic Hub și Robot Inventor.

### `… … accelerometru (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returnează citirea brută a accelerometrului hubului pe o axă.

- Axe: `x`, `y`, `z`

### `… … accelerație (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returnează accelerația hubului pe o axă.

- Axe: `x`, `y`, `z`

### `obține … orientare …` (Începător) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returnează fața hubului îndreptată în sus.

- Ieșire: `text` sau `index`
- Valori: `Față`, `Sus`, `Dreapta`, `Spate`, `Jos`, `Stânga`

### `… orientare …` (Începător) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Returnează `true` când fața selectată a hubului este îndreptată în sus.

- Opțiuni: `Față`, `Sus`, `Dreapta`, `Spate`, `Jos`, `Stânga`

### `seta … orientare înclinată la …` (Avansat) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Îi spune hubului cum este montat în model, astfel încât înclinarea și orientarea să fie măsurate față de această poziție.

- Opțiuni: `Față`, `Sus`, `Dreapta`, `Spate`, `Jos`, `Stânga`

## Senzori pe porturi {#sensors-on-ports}

Blocurile pentru senzorii Technic și BOOST de mai jos funcționează pe City Hub, Technic Hub, BOOST Move Hub și hubul MINDSTORMS Robot Inventor (nu SBrick, BuWizz, WeDo 2.0 sau Mould King).

### Orice dispozitiv pe un port {#any-port-device}

#### `… tip dispozitiv` (Începător) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returnează tipul dispozitivului conectat la portul selectat.

- Huburi: toate huburile cu porturi, cu excepția SBrick, SBrick Plus și BuWizz 2.
- Utilizare tipică: verifică ce este conectat înainte de a rula blocuri specifice unui dispozitiv.

### Senzorul de culoare Technic {#technic-color-sensor}

#### Senzor Technic: `setează modul la …` (Avansat) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Trece senzorul de culoare Technic în modul selectat.

- Moduri: `implicit`, `ambiant`
- Schimbarea modului poate afecta programul în moduri neașteptate: în modul `ambiant` senzorul nu poate citi culori sau lumina reflectată.

#### Senzor Technic: `culoare …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returnează culoarea văzută de senzorul de culoare Technic.

- Ieșire: `valoare` (un număr) sau `șir` (numele culorii)

#### Senzor Technic: `este culoare …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Returnează `true` când senzorul de culoare Technic vede culoarea selectată.

#### Senzor Technic: `lumină reflectată (%)` (Începător) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returnează câtă lumină reflectă suprafața înapoi spre senzorul de culoare Technic, în procente.

#### Senzor Technic: `lumină reflectată …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Returnează `true` când lumina reflectată se compară cu valoarea conform operatorului selectat.

- Comparație: `<`, `=`, `>`

#### Senzor Technic: `lumină ambientală (%)` (Începător) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returnează luminozitatea luminii înconjurătoare, în procente.

#### Senzor Technic: `lumină ambientală …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Returnează `true` când lumina ambientală se compară cu valoarea conform operatorului selectat.

- Comparație: `<`, `=`, `>`

#### Senzor Technic: `valoare brută …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returnează valoarea brută a unui canal de culoare al senzorului de culoare Technic.

- Canale: `roșu`, `verde`, `albastru`

### Senzorul de distanță Technic {#technic-distance-sensor}

#### Senzor Technic: `distanță …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returnează distanța măsurată de senzorul de distanță Technic.

- Unități: `mm`, `cm`, `inci`, `%`

#### Senzor Technic: `este mai aproape decât / mai departe decât / exact la …` (Începător) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Returnează `true` când distanța măsurată de senzorul de distanță Technic îndeplinește condiția.

- Comparație: `mai aproape decât`, `mai departe decât`, `exact la`
- Unități: `mm`, `cm`, `inci`, `%`

### Senzorul de culoare și distanță BOOST {#boost-color-and-distance-sensor}

#### Senzor BOOST: `culoare …` (Începător) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returnează culoarea văzută de senzorul de culoare și distanță BOOST.

- Ieșire: `valoare` (un număr) sau `șir` (numele culorii)

#### Senzor BOOST: `este culoare …` (Începător) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Returnează `true` când senzorul BOOST vede culoarea selectată.

#### Senzor BOOST: `distanță …` (Începător) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returnează distanța măsurată de senzorul de culoare și distanță BOOST.

- Unități: `%`, `cm`, `inci`

#### Senzor BOOST: `este mai aproape decât / mai departe decât / exact la …` (Începător) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Returnează `true` când distanța măsurată de senzorul BOOST îndeplinește condiția.

- Comparație: `mai aproape decât`, `mai departe decât`, `exact la`
- Unități: `%`, `cm`, `inci`

#### Senzor BOOST: `lumină reflectată (%)` (Începător) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returnează câtă lumină reflectă suprafața înapoi spre senzorul BOOST, în procente.

#### Senzor BOOST: `lumină reflectată …` (Începător) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Returnează `true` când lumina reflectată se compară cu valoarea conform operatorului selectat.

- Comparație: `<`, `=`, `>`

### Senzorii WeDo 2.0 {#wedo-2-sensors}

Senzorul de mișcare și senzorul de înclinare WeDo 2.0, pe hubul WeDo 2.0.

#### Senzor WeDo 2.0: `distanță …` (Începător) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returnează distanța măsurată de senzorul de mișcare WeDo 2.0.

- Unități: `%`, `cm`, `inci`
- Huburi: WeDo 2.0.

#### Senzor WeDo 2.0: `este mai aproape decât / mai departe decât / exact la …` (Începător) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Returnează `true` când distanța măsurată de senzorul de mișcare WeDo 2.0 îndeplinește condiția.

- Comparație: `mai aproape decât`, `mai departe decât`, `exact la`
- Unități: `%`, `cm`, `inci`
- Huburi: WeDo 2.0.

#### Senzor WeDo 2.0: `unghi …` / `direcție ca …` (Începător) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returnează date de la senzorul de înclinare WeDo 2.0: un unghi de înclinare sau direcția în care este înclinat.

- Unghiuri: `înclinare`, `rotire`
- Ieșirea pentru direcție: `text` sau `număr`; direcții: `neutru`, `înainte`, `înapoi`, `stânga`, `dreapta`, `necunoscut`
- Huburi: WeDo 2.0.

## Acest dispozitiv {#this-device}

Aceste blocuri citesc telefonul, tableta sau computerul pe care rulează MOCPilot.

### `dispozitiv % baterie` (Începător) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returnează nivelul bateriei dispozitivului, în procente.

### `dispozitiv … unghi` (Avansat) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returnează unghiul de înclinare al dispozitivului.

- Unghiuri: `înclinare`, `rotire`, `derapaj`
- Utilizare tipică: condu modelul înclinând telefonul.

### `dispozitiv … accelerometru (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returnează citirea brută a accelerometrului dispozitivului pe o axă, în m/s².

- Axe: `x`, `y`, `z`

### `dispozitiv … accelerație (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returnează accelerația dispozitivului pe o axă, în m/s².

- Axe: `x`, `y`, `z`

## Cronometru {#timer}

### `temporizator` (Avansat) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returnează timpul scurs de la pornirea programului sau de la ultimul **resetați cronometrul**, în secunde.

### `resetați cronometrul` (Avansat) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Readuce cronometrul la zero.
