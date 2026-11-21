---
id: Sensors
title: Sensori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensori {#sensors}

I blocchi Sensori leggono lo stato del tuo telefono o tablet, il timer del programma, gli hub e i sensori collegati agli hub. Usa i loro valori nelle condizioni, negli eventi e nei calcoli.

In questa pagina:

- [Stato dell'hub](#hub-state): batteria, tensione, temperatura, corrente e modalità di potenza
- [Pulsanti, inclinazione e orientamento dell'hub](#hub-tilt-and-orientation)
- [Sensori sulle porte](#sensors-on-ports): qualsiasi dispositivo, Technic Color Sensor, Technic Distance Sensor, BOOST Color & Distance Sensor, sensori WeDo 2.0
- [Questo dispositivo](#this-device): il telefono, tablet o computer su cui è in esecuzione MOCPilot
- [Timer](#timer)

## Stato dell'hub {#hub-state}

Questi blocchi non esistono per gli hub Mould King, che non forniscono alcun dato.

### `… % batteria` (Principiante) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Restituisce il livello della batteria dell'hub, in percentuale.

### `… tensione batteria (V)` (Avanzato) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Restituisce la tensione della batteria dell'hub, in volt.

- Hub: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Restituisce `NaN` quando l'hub non è collegato.

### `… temperatura (C°)` (Avanzato) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Restituisce la temperatura dell'elettronica dell'hub, in gradi Celsius.

- Hub: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `ottenere … tensione di uscita (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Restituisce la tensione che l'hub sta fornendo alle sue porte, in volt.

- Hub: BuWizz 2.

### `… corrente (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Restituisce la corrente assorbita sulla porta selezionata, in ampere.

- Hub: BuWizz 2, BuWizz 3.

### `impostare modalità di alimentazione …` (Technic Move Hub) (Principiante) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Imposta la modalità di potenza di un Technic Move Hub.

- Modalità: `normale`, `boost`
- Hub: Technic Move Hub.

## Pulsanti, inclinazione e orientamento dell'hub {#hub-tilt-and-orientation}

Il blocco del pulsante elenca gli hub con cui funziona. I blocchi di inclinazione e orientamento funzionano su BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub e Robot Inventor.

### `è … … pulsante …` (Principiante) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Restituisce `true` quando il pulsante selezionato dell'hub è nello stato selezionato.

- Stati: `premuto`, `rilasciato`
- Hub: hub LEGO Powered Up, WeDo 2.0 e Robot Inventor. L'elenco dei pulsanti dipende dall'hub (di solito `centro`).

### `… … angolo` (Principiante) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Restituisce l'angolo di inclinazione dell'hub.

- Angoli: `beccheggio`, `rollio`, `imbardata`
- `imbardata` è disponibile solo su Technic Hub e Robot Inventor.

### `… … accelerometro (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Restituisce la lettura grezza dell'accelerometro dell'hub lungo un asse.

- Assi: `x`, `y`, `z`

### `… … accelerazione (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Restituisce l'accelerazione dell'hub lungo un asse.

- Assi: `x`, `y`, `z`

### `ottenere … orientamento …` (Principiante) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Restituisce quale lato dell'hub è rivolto verso l'alto.

- Uscita: `testo` o `indice`
- Valori: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

### `… orientamento …` (Principiante) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Restituisce `true` quando il lato selezionato dell'hub è rivolto verso l'alto.

- Opzioni: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

### `impostare … orientamento inclinato a …` (Avanzato) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Indica all'hub come è montato nel modello, così inclinazione e orientamento vengono misurati a partire da quella posizione.

- Opzioni: `Davanti`, `Superiore`, `Destra`, `Posteriore`, `Fondo`, `Sinistra`

## Sensori sulle porte {#sensors-on-ports}

I blocchi per i sensori Technic e BOOST qui sotto funzionano su City Hub, Technic Hub, BOOST Move Hub e sull'hub MINDSTORMS Robot Inventor (non su SBrick, BuWizz, WeDo 2.0 o Mould King).

### Qualsiasi dispositivo su una porta {#any-port-device}

#### `… tipo di dispositivo` (Principiante) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Restituisce il tipo del dispositivo collegato alla porta selezionata.

- Hub: tutti gli hub con porte tranne SBrick, SBrick Plus e BuWizz 2.
- Uso tipico: verificare che cosa è collegato prima di eseguire blocchi specifici per un dispositivo.

### Technic Color Sensor {#technic-color-sensor}

#### Sensore Technic: `imposta modalità su …` (Avanzato) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Porta il Technic Color Sensor nella modalità selezionata.

- Modalità: `predefinito`, `ambiente`
- Cambiare modalità può influire sul programma in modo inatteso: in modalità `ambiente` il sensore non può leggere i colori né la luce riflessa.

#### Sensore Technic: `colore …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Restituisce il colore visto dal Technic Color Sensor.

- Uscita: `valore` (un numero) o `stringa` (il nome del colore)

#### Sensore Technic: `è colore …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Restituisce `true` quando il Technic Color Sensor vede il colore selezionato.

#### Sensore Technic: `luce riflessa (%)` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Restituisce quanta luce la superficie riflette verso il Technic Color Sensor, in percentuale.

#### Sensore Technic: `luce riflessa …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Restituisce `true` quando la luce riflessa soddisfa il confronto selezionato con il valore.

- Confronto: `<`, `=`, `>`

#### Sensore Technic: `luce ambientale (%)` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Restituisce la luminosità della luce circostante, in percentuale.

#### Sensore Technic: `luce ambientale …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Restituisce `true` quando la luce ambientale soddisfa il confronto selezionato con il valore.

- Confronto: `<`, `=`, `>`

#### Sensore Technic: `valore grezzo …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Restituisce il valore grezzo di un canale di colore del Technic Color Sensor.

- Canali: `rosso`, `verde`, `blu`

### Technic Distance Sensor {#technic-distance-sensor}

#### Sensore Technic: `distanza …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Restituisce la distanza misurata dal Technic Distance Sensor.

- Unità: `mm`, `cm`, `pollici`, `%`

#### Sensore Technic: `è più vicino di / più lontano di / esattamente a …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Restituisce `true` quando la distanza misurata dal Technic Distance Sensor soddisfa la condizione.

- Confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Unità: `mm`, `cm`, `pollici`, `%`

### BOOST Color & Distance Sensor {#boost-color-and-distance-sensor}

#### Sensore BOOST: `colore …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Restituisce il colore visto dal BOOST Color & Distance Sensor.

- Uscita: `valore` (un numero) o `stringa` (il nome del colore)

#### Sensore BOOST: `è colore …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Restituisce `true` quando il sensore BOOST vede il colore selezionato.

#### Sensore BOOST: `distanza …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Restituisce la distanza misurata dal BOOST Color & Distance Sensor.

- Unità: `%`, `cm`, `pollici`

#### Sensore BOOST: `è più vicino di / più lontano di / esattamente a …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Restituisce `true` quando la distanza misurata dal sensore BOOST soddisfa la condizione.

- Confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Unità: `%`, `cm`, `pollici`

#### Sensore BOOST: `luce riflessa (%)` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Restituisce quanta luce la superficie riflette verso il sensore BOOST, in percentuale.

#### Sensore BOOST: `luce riflessa …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Restituisce `true` quando la luce riflessa soddisfa il confronto selezionato con il valore.

- Confronto: `<`, `=`, `>`

### Sensori WeDo 2.0 {#wedo-2-sensors}

Il sensore di movimento e il sensore di inclinazione WeDo 2.0, sull'hub WeDo 2.0.

#### Sensore WeDo 2.0: `distanza …` (Principiante) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Restituisce la distanza misurata dal sensore di movimento WeDo 2.0.

- Unità: `%`, `cm`, `pollici`
- Hub: WeDo 2.0.

#### Sensore WeDo 2.0: `è più vicino di / più lontano di / esattamente a …` (Principiante) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Restituisce `true` quando la distanza misurata dal sensore di movimento WeDo 2.0 soddisfa la condizione.

- Confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Unità: `%`, `cm`, `pollici`
- Hub: WeDo 2.0.

#### Sensore WeDo 2.0: `angolo …` / `direzione come …` (Principiante) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Restituisce i dati del sensore di inclinazione WeDo 2.0: un angolo di inclinazione oppure la direzione in cui è inclinato.

- Angoli: `beccheggio`, `rollio`
- Uscita della direzione: `testo` o `numero`; direzioni: `neutrale`, `in avanti`, `all’indietro`, `sinistra`, `destra`, `sconosciuto`
- Hub: WeDo 2.0.

## Questo dispositivo {#this-device}

Questi blocchi leggono il telefono, tablet o computer su cui è in esecuzione MOCPilot.

### `dispositivo % batteria` (Principiante) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Restituisce il livello della batteria del dispositivo, in percentuale.

### `dispositivo … angolo` (Avanzato) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Restituisce l'angolo di inclinazione del dispositivo.

- Angoli: `beccheggio`, `rollio`, `imbardata`
- Uso tipico: sterzare il modello inclinando il telefono.

### `dispositivo … accelerometro (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Restituisce la lettura grezza dell'accelerometro del dispositivo lungo un asse, in m/s².

- Assi: `x`, `y`, `z`

### `dispositivo … accelerazione (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Restituisce l'accelerazione del dispositivo lungo un asse, in m/s².

- Assi: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Avanzato) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Restituisce il tempo trascorso dall'avvio del programma o dall'ultimo **ripristina timer**, in secondi.

### `ripristina timer` (Avanzato) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Riporta il timer a zero.
