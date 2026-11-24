---
id: Sensors
title: Senzory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Senzory {#sensors}

Bloky senzorů čtou stav vašeho telefonu nebo tabletu, časovač programu, huby a senzory k nim připojené. Jejich hodnoty používejte v podmínkách, událostech a výpočtech.

Na této stránce:

- [Stav hubu](#hub-state): baterie, napětí, teplota, proud a režim výkonu
- [Tlačítka, náklon a orientace hubu](#hub-tilt-and-orientation)
- [Senzory na portech](#sensors-on-ports): libovolné zařízení, senzor barev Technic, senzor vzdálenosti Technic, senzor barev a vzdálenosti BOOST, senzory WeDo 2.0
- [Hub Robot Inventor](#robot-inventor-sensors): senzor síly, gesta, orientace, stáčení, klopení a klonění, náklon, rádio mezi huby
- [Toto zařízení](#this-device): telefon, tablet nebo počítač, na kterém běží MOCPilot
- [Časovač](#timer)

## Stav hubu {#hub-state}

Tyto bloky neexistují pro huby Mould King, které žádná data nehlásí.

### `… % baterie` (Začátečník) {#block_hubs_all_sensors_battery_level}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />

Vrací úroveň baterie hubu v procentech.

### `… napětí baterie (V)` (Pokročilý) {#block_hubs_all_sensors_battery_voltage}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />

Vrací napětí baterie hubu ve voltech.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Vrací `NaN`, když hub není připojený.

### `… teplota (C°)` (Pokročilý) {#block_hubs_all_sensors_board_temp}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />

Vrací teplotu elektroniky hubu ve stupních Celsia.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `získat … výstupní napětí (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />

Vrací napětí, které hub právě dodává do svých portů, ve voltech.

- Huby: BuWizz 2.

### `… proud (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />

Vrací proud odebíraný na vybraném portu v ampérech.

- Huby: BuWizz 2, BuWizz 3.

### `nastavit režim napájení …` (Technic Move Hub) (Začátečník) {#block_hubs_technicmove_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />

Nastaví režim výkonu Technic Move Hubu.

- Režimy: `normální`, `turbo`
- Huby: Technic Move Hub.

## Tlačítka, náklon a orientace hubu {#hub-tilt-and-orientation}

Blok tlačítka uvádí huby, se kterými funguje. Bloky náklonu a orientace fungují na BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub a Robot Inventor.

### `je … … tlačítko …` (Začátečník) {#block_hubs_all_sensors_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />

Vrací `true`, když je vybrané tlačítko hubu ve vybraném stavu.

- Stavy: `stisknuto`, `uvolněno`
- Huby: huby LEGO Powered Up, WeDo 2.0 a Robot Inventor. Seznam tlačítek závisí na hubu (obvykle `střed`).

### `… … úhel` (Začátečník) {#block_hubs_all_sensors_tilt}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />

Vrací úhel náklonu hubu.

- Úhly: `náklon`, `rotace`, `vybočení` (klopení, klonění, stáčení)
- `vybočení` je k dispozici jen u Technic Hubu a Robot Inventoru.

### `… … akcelerometr (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />

Vrací surovou hodnotu akcelerometru hubu v jedné ose.

- Osy: `x`, `y`, `z`

### `… … zrychlení (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />

Vrací zrychlení hubu v jedné ose.

- Osy: `x`, `y`, `z`

### `získat … orientace …` (Začátečník) {#block_hubs_sensors_get_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />

Vrací, která strana hubu směřuje nahoru.

- Výstup: `text` nebo `index`
- Hodnoty: `Přední`, `Horní`, `Vpravo`, `Zadní`, `Dno`, `Vlevo`

### `… orientace …` (Začátečník) {#block_hubs_all_sensors_is_orientation_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />

Vrací `true`, když vybraná strana hubu směřuje nahoru.

- Volby: `Přední`, `Horní`, `Vpravo`, `Zadní`, `Dno`, `Vlevo`

### `nastavit … nakloňte orientaci na …` (Pokročilý) {#block_hubs_sensors_set_tilt_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />

Sdělí hubu, jak je v modelu namontovaný, aby se náklon a orientace měřily od této polohy.

- Volby: `Přední`, `Horní`, `Vpravo`, `Zadní`, `Dno`, `Vlevo`

## Senzory na portech {#sensors-on-ports}

Níže uvedené bloky senzorů Technic a BOOST fungují na City Hubu, Technic Hubu, BOOST Move Hubu a hubu MINDSTORMS Robot Inventor (ne SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Libovolné zařízení na portu {#any-port-device}

#### `… typ zařízení` (Začátečník) {#block_hubs_all_motors_port_device_type}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />

Vrací typ zařízení připojeného k vybranému portu.

- Huby: všechny huby s porty kromě SBrick, SBrick Plus a BuWizz 2.
- Typické použití: zkontrolovat, co je připojeno, než spustíte bloky pro konkrétní zařízení.

### Senzor barev Technic {#technic-color-sensor}

#### Senzor Technic: `nastavit režim na …` (Pokročilý) {#block_hubs_all_sensors_port_technic_sensor_set_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />

Přepne senzor barev Technic do vybraného režimu.

- Režimy: `výchozí`, `okolní`
- Změna režimu může program ovlivnit nečekaným způsobem: v režimu `okolní` senzor nedokáže číst barvy ani odražené světlo.

#### Senzor Technic: `barva …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />

Vrací barvu, kterou vidí senzor barev Technic.

- Výstup: `hodnota` (číslo) nebo `řetězec` (název barvy)

#### Senzor Technic: `je barva …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />

Vrací `true`, když senzor barev Technic vidí vybranou barvu.

#### Senzor Technic: `reflektované světlo (%)` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />

Vrací, kolik světla povrch odráží zpět do senzoru barev Technic, v procentech.

#### Senzor Technic: `odražené světlo …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />

Vrací `true`, když odražené světlo vyhovuje zvolenému porovnání s hodnotou.

- Porovnání: `<`, `=`, `>`

#### Senzor Technic: `okolní světlo (%)` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />

Vrací jas okolního světla v procentech.

#### Senzor Technic: `okolní světlo …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />

Vrací `true`, když okolní světlo vyhovuje zvolenému porovnání s hodnotou.

- Porovnání: `<`, `=`, `>`

#### Senzor Technic: `surová hodnota …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_raw_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />

Vrací surovou hodnotu jednoho barevného kanálu senzoru barev Technic.

- Kanály: `červená`, `zelená`, `modrá`

### Senzor vzdálenosti Technic {#technic-distance-sensor}

#### Senzor Technic: `vzdálenost …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />

Vrací vzdálenost změřenou senzorem vzdálenosti Technic.

- Jednotky: `mm`, `cm`, `palce`, `%`

#### Senzor Technic: `je blíže než / dál než / přesně na …` (Začátečník) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />

Vrací `true`, když vzdálenost změřená senzorem vzdálenosti Technic splní podmínku.

- Porovnání: `blíže než`, `dál než`, `přesně na`
- Jednotky: `mm`, `cm`, `palce`, `%`

### Senzor barev a vzdálenosti BOOST {#boost-color-and-distance-sensor}

#### Senzor BOOST: `barva …` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />

Vrací barvu, kterou vidí senzor barev a vzdálenosti BOOST.

- Výstup: `hodnota` (číslo) nebo `řetězec` (název barvy)

#### Senzor BOOST: `je barva …` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_is_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />

Vrací `true`, když senzor BOOST vidí vybranou barvu.

#### Senzor BOOST: `vzdálenost …` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />

Vrací vzdálenost změřenou senzorem barev a vzdálenosti BOOST.

- Jednotky: `%`, `cm`, `palce`

#### Senzor BOOST: `je blíže než / dál než / přesně na …` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />

Vrací `true`, když vzdálenost změřená senzorem BOOST splní podmínku.

- Porovnání: `blíže než`, `dál než`, `přesně na`
- Jednotky: `%`, `cm`, `palce`

#### Senzor BOOST: `reflektované světlo (%)` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />

Vrací, kolik světla povrch odráží zpět do senzoru BOOST, v procentech.

#### Senzor BOOST: `odražené světlo …` (Začátečník) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />

Vrací `true`, když odražené světlo vyhovuje zvolenému porovnání s hodnotou.

- Porovnání: `<`, `=`, `>`

### Senzory WeDo 2.0 {#wedo-2-sensors}

Senzor pohybu a senzor náklonu WeDo 2.0 na hubu WeDo 2.0.

#### Senzor WeDo 2.0: `vzdálenost …` (Začátečník) {#block_hubs_all_sensors_port_wedo2_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />

Vrací vzdálenost změřenou senzorem pohybu WeDo 2.0.

- Jednotky: `%`, `cm`, `palce`
- Huby: WeDo 2.0.

#### Senzor WeDo 2.0: `je blíže než / dál než / přesně na …` (Začátečník) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />

Vrací `true`, když vzdálenost změřená senzorem pohybu WeDo 2.0 splní podmínku.

- Porovnání: `blíže než`, `dál než`, `přesně na`
- Jednotky: `%`, `cm`, `palce`
- Huby: WeDo 2.0.

#### Senzor WeDo 2.0: `úhel …` / `směr jako …` (Začátečník) {#block_hubs_all_sensors_port_wedo2_tilt}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />

Vrací data ze senzoru náklonu WeDo 2.0: úhel náklonu nebo směr, kterým je nakloněný.

- Úhly: `náklon`, `rotace` (klopení, klonění)
- Výstup směru: `text` nebo `číslo`; směry: `neutrální`, `vpřed`, `vzad`, `vlevo`, `vpravo`, `neznámý`
- Huby: WeDo 2.0.

## Hub Robot Inventor {#robot-inventor-sensors}

Tyto bloky pocházejí z aplikace Robot Inventor a fungují jen s [huby MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesou ikonu hubu. Jejich události (když hubem zatřesete, nakloníte ho a podobně) najdete na stránce [Události](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Senzor síly {#robot-inventor-force-sensor}

#### `je … stisknuto / silně stisknut / uvolněno ?` (Začátečník) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Zkontroluje senzor síly na vybraném portu. `silně stisknut` znamená stisk silou větší než 5 newtonů.

#### `… tlak v % / newtonech` (Začátečník) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Vrací, jak silně je senzor síly stisknutý: v procentech (0–100) nebo v newtonech (0–10).

### Pohyb hubu {#robot-inventor-motion}

#### `je hub … ?` (Pokročilý) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true`, pokud s hubem právě někdo takto pohnul: `poklepán`, `dvakrát poklepán`, `zatřesen` (výchozí) nebo `padá`. Gesto se počítá jednou: jakmile ho některý blok přečte, zmizí.

#### `gesto` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Vrací poslední gesto jako text: `tapped`, `doubletapped`, `shake` nebo `freefall`, případně prázdnou hodnotu, pokud žádné nebylo.

#### `je … nahoře?` (Začátečník) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true`, pokud je tato strana hubu otočená nahoru: `přední strana` (světelná matice), `horní strana`, `pravá strana`, `zadní strana`, `spodní strana` nebo `levá strana`.

#### `orientace` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Vrací stranu, která je nahoře, jako text: `front`, `up`, `rightside`, `back`, `down` nebo `leftside`.

#### `… úhel` (Začátečník) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Vrací úhel hubu ve stupních kolem jedné osy: `vybočení` (otáčení doleva a doprava jako kompas), `náklon` (klopení: příď nahoru a dolů) nebo `rotace` (klonění: naklápění do stran).

- Typické použití: vést robota rovně nebo ho otočit přesně o 90°: vynulujte úhel stáčení a pak zatáčejte, dokud nedosáhne požadovaného úhlu.

#### `nastavit úhel vybočení na 0` (Začátečník) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Udělá z aktuálního směru hubu novou nulu úhlu stáčení. Blok počká 0,1 s, aby se další měření už počítalo od ní.

#### `úhlová rychlost …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Vrací, jak rychle se hub otáčí kolem osy `x`, `y` nebo `z` (gyroskop), ve stupních za sekundu.

#### `zrychlení …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Vrací zrychlení hubu podél osy `x`, `y` nebo `z` tak, jak ho hub hlásí.

#### `je hub nakloněn … ?` (Pokročilý) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true`, pokud je hub nakloněný tímto směrem: `nahoru`, `dolů`, `doleva`, `doprava` nebo `jakýkoli` (výchozí). Hub se počítá za nakloněný zhruba od 12° od vodorovné polohy; když je nakloněný oběma směry, rozhoduje větší náklon.

### Rádio mezi huby {#robot-inventor-radio}

Huby Robot Inventor si mohou bezdrátově posílat krátké signály, bez MOCPilotu jako prostředníka. Signál má název a hodnotu.

#### `vyslat signál hubu … s …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Pošle z tohoto hubu hubům v okolí signál se zadaným názvem (výchozí `signal`) a hodnotou (`1`).

#### `přijatý signál … hodnota` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Vrací poslední hodnotu, kterou tento hub přijal pro signál s tímto názvem, nebo 0, pokud zatím žádná nepřišla. Chcete-li reagovat hned, jak signál dorazí, použijte [když hub přijme signál](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Toto zařízení {#this-device}

Tyto bloky čtou telefon, tablet nebo počítač, na kterém běží MOCPilot.

### `zařízení % baterie` (Začátečník) {#block_sensors_device_battery_level}

<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />

Vrací úroveň baterie zařízení v procentech.

### `zařízení … úhel` (Pokročilý) {#block_sensors_device_tilt_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />

Vrací úhel náklonu zařízení.

- Úhly: `náklon`, `rotace`, `vybočení` (klopení, klonění, stáčení)
- Typické použití: řídit model nakláněním telefonu.

### `zařízení … akcelerometr (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />

Vrací surovou hodnotu akcelerometru zařízení v jedné ose, v m/s².

- Osy: `x`, `y`, `z`

### `zařízení … zrychlení (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}

<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />

Vrací zrychlení zařízení v jedné ose, v m/s².

- Osy: `x`, `y`, `z`

## Časovač {#timer}

### `časovač` (Pokročilý) {#block_sensors_timer_value_float}

<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />

Vrací čas od spuštění programu nebo od posledního **resetovat časovač**, v sekundách.

### `resetovat časovač` (Pokročilý) {#block_sensors_timer_reset}

<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />

Vynuluje časovač.
