---
id: Sensors
title: Czujniki
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Czujniki

Bloki czujników odczytują stan telefonu lub tabletu, stoper programu, huby i podłączone do nich czujniki. Ich wartości wykorzystasz w warunkach, zdarzeniach i obliczeniach.

Na tej stronie:

- [Stan huba](#hub-state): bateria, napięcie, temperatura, prąd i tryb mocy
- [Przyciski, nachylenie i orientacja huba](#hub-tilt-and-orientation)
- [Czujniki na portach](#sensors-on-ports): dowolne urządzenie, czujnik koloru Technic, czujnik odległości Technic, czujnik koloru i odległości BOOST, czujniki WeDo 2.0
- [To urządzenie](#this-device): telefon, tablet lub komputer, na którym działa MOCPilot
- [Stoper](#timer)

## Stan huba {#hub-state}

Te bloki nie istnieją dla hubów Mould King, które nie zgłaszają żadnych danych.

### `… % baterii` (Początkujący) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Zwraca poziom baterii huba w procentach.

### `… napięcie baterii (V)` (Zaawansowany) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Zwraca napięcie baterii huba w woltach.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Zwraca `NaN`, gdy hub nie jest połączony.

### `… temperatura (C°)` (Zaawansowany) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Zwraca temperaturę elektroniki huba w stopniach Celsjusza.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `pobierz … napięcie wyjściowe (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Zwraca napięcie, które hub obecnie podaje na porty, w woltach.

- Huby: BuWizz 2.

### `… prąd (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Zwraca prąd pobierany na wybranym porcie w amperach.

- Huby: BuWizz 2, BuWizz 3.

### `ustaw tryb zasilania …` (Technic Move Hub) (Początkujący) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Ustawia tryb mocy Technic Move Hub.

- Tryby: `normalny`, `boost`
- Huby: Technic Move Hub.

## Przyciski, nachylenie i orientacja huba {#hub-tilt-and-orientation}

Blok przycisku podaje huby, z którymi działa. Bloki nachylenia i orientacji działają w BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub i Robot Inventor.

### `jest … … przycisk …` (Początkujący) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Zwraca `true`, gdy wybrany przycisk huba jest w wybranym stanie.

- Stany: `naciśnięty`, `zwolniony`
- Huby: huby LEGO Powered Up, WeDo 2.0 i Robot Inventor. Lista przycisków zależy od huba (zwykle `środek`).

### `… … kąt` (Początkujący) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Zwraca kąt nachylenia huba.

- Kąty: `pochylenie`, `obrót`, `ryskanie`
- `ryskanie` jest dostępne tylko w Technic Hub i Robot Inventor.

### `… … akcelerometr (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Zwraca surowy odczyt akcelerometru huba wzdłuż jednej osi.

- Osie: `x`, `y`, `z`

### `… … przyspieszenie (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Zwraca przyspieszenie huba wzdłuż jednej osi.

- Osie: `x`, `y`, `z`

### `pobierz … orientacja …` (Początkujący) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Zwraca, która strona huba jest zwrócona do góry.

- Wynik: `tekst` lub `indeks`
- Wartości: `Przód`, `Góra`, `Prawo`, `Tylny`, `Dół`, `Lewo`

### `… orientacja …` (Początkujący) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Zwraca `true`, gdy wybrana strona huba jest zwrócona do góry.

- Opcje: `Przód`, `Góra`, `Prawo`, `Tylny`, `Dół`, `Lewo`

### `ustawić … orientacja nachylenia do …` (Zaawansowany) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Informuje hub, jak jest zamontowany w modelu, aby nachylenie i orientacja były mierzone względem tej pozycji.

- Opcje: `Przód`, `Góra`, `Prawo`, `Tylny`, `Dół`, `Lewo`

## Czujniki na portach {#sensors-on-ports}

Poniższe bloki czujników Technic i BOOST działają w City Hub, Technic Hub, BOOST Move Hub i hubie MINDSTORMS Robot Inventor (nie SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Dowolne urządzenie na porcie {#any-port-device}

#### `… typ urządzenia` (Początkujący) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Zwraca typ urządzenia podłączonego do wybranego portu.

- Huby: wszystkie huby z portami z wyjątkiem SBrick, SBrick Plus i BuWizz 2.
- Typowe zastosowanie: sprawdzenie, co jest podłączone, przed uruchomieniem bloków dla konkretnego urządzenia.

### Czujnik koloru Technic {#technic-color-sensor}

#### Czujnik Technic: `ustaw tryb na …` (Zaawansowany) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Przełącza czujnik koloru Technic w wybrany tryb.

- Tryby: `domyślny`, `otoczenie`
- Zmiana trybu może nieoczekiwanie wpłynąć na program: w trybie `otoczenie` czujnik nie odczytuje kolorów ani światła odbitego.

#### Czujnik Technic: `kolor …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Zwraca kolor widziany przez czujnik koloru Technic.

- Wynik: `wartość` (liczba) lub `ciąg` (nazwa koloru)

#### Czujnik Technic: `jest kolorem …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Zwraca `true`, gdy czujnik koloru Technic widzi wybrany kolor.

#### Czujnik Technic: `światło odbite (%)` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Zwraca w procentach, ile światła powierzchnia odbija z powrotem do czujnika koloru Technic.

#### Czujnik Technic: `światło odbite …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Zwraca `true`, gdy porównanie światła odbitego z wartością daje wybrany wynik.

- Porównanie: `<`, `=`, `>`

#### Czujnik Technic: `światło otoczenia (%)` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Zwraca jasność światła otoczenia w procentach.

#### Czujnik Technic: `światło otoczenia …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Zwraca `true`, gdy porównanie światła otoczenia z wartością daje wybrany wynik.

- Porównanie: `<`, `=`, `>`

#### Czujnik Technic: `surowa wartość …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Zwraca surową wartość jednego kanału koloru czujnika koloru Technic.

- Kanały: `czerwony`, `zielony`, `niebieski`

### Czujnik odległości Technic {#technic-distance-sensor}

#### Czujnik Technic: `odległość …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Zwraca odległość zmierzoną przez czujnik odległości Technic.

- Jednostki: `mm`, `cm`, `cal`, `%`

#### Czujnik Technic: `jest bliżej niż / dalej niż / dokładnie na …` (Początkujący) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Zwraca `true`, gdy odległość zmierzona przez czujnik odległości Technic spełnia warunek.

- Porównanie: `bliżej niż`, `dalej niż`, `dokładnie na`
- Jednostki: `mm`, `cm`, `cal`, `%`

### Czujnik koloru i odległości BOOST {#boost-color-and-distance-sensor}

#### Czujnik BOOST: `kolor …` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Zwraca kolor widziany przez czujnik koloru i odległości BOOST.

- Wynik: `wartość` (liczba) lub `ciąg` (nazwa koloru)

#### Czujnik BOOST: `jest kolorem …` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Zwraca `true`, gdy czujnik BOOST widzi wybrany kolor.

#### Czujnik BOOST: `odległość …` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Zwraca odległość zmierzoną przez czujnik koloru i odległości BOOST.

- Jednostki: `%`, `cm`, `cal`

#### Czujnik BOOST: `jest bliżej niż / dalej niż / dokładnie na …` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Zwraca `true`, gdy odległość zmierzona przez czujnik BOOST spełnia warunek.

- Porównanie: `bliżej niż`, `dalej niż`, `dokładnie na`
- Jednostki: `%`, `cm`, `cal`

#### Czujnik BOOST: `światło odbite (%)` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Zwraca w procentach, ile światła powierzchnia odbija z powrotem do czujnika BOOST.

#### Czujnik BOOST: `światło odbite …` (Początkujący) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Zwraca `true`, gdy porównanie światła odbitego z wartością daje wybrany wynik.

- Porównanie: `<`, `=`, `>`

### Czujniki WeDo 2.0 {#wedo-2-sensors}

Czujnik ruchu i czujnik nachylenia WeDo 2.0, w hubie WeDo 2.0.

#### Czujnik WeDo 2.0: `odległość …` (Początkujący) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Zwraca odległość zmierzoną przez czujnik ruchu WeDo 2.0.

- Jednostki: `%`, `cm`, `cal`
- Huby: WeDo 2.0.

#### Czujnik WeDo 2.0: `jest bliżej niż / dalej niż / dokładnie na …` (Początkujący) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Zwraca `true`, gdy odległość zmierzona przez czujnik ruchu WeDo 2.0 spełnia warunek.

- Porównanie: `bliżej niż`, `dalej niż`, `dokładnie na`
- Jednostki: `%`, `cm`, `cal`
- Huby: WeDo 2.0.

#### Czujnik WeDo 2.0: `kąt …` / `kierunek jako …` (Początkujący) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Zwraca dane z czujnika nachylenia WeDo 2.0: kąt nachylenia albo kierunek, w którym czujnik jest nachylony.

- Kąty: `pochylenie`, `obrót`
- Wynik kierunku: `tekst` lub `liczba`; kierunki: `neutralny`, `do przodu`, `do tyłu`, `lewo`, `prawo`, `nieznany`
- Huby: WeDo 2.0.

## To urządzenie {#this-device}

Te bloki odczytują telefon, tablet lub komputer, na którym działa MOCPilot.

### `urządzenie % baterii` (Początkujący) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Zwraca poziom baterii urządzenia w procentach.

### `urządzenie … kąt` (Zaawansowany) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Zwraca kąt nachylenia urządzenia.

- Kąty: `pochylenie`, `obrót`, `ryskanie`
- Typowe zastosowanie: sterowanie modelem przez przechylanie telefonu.

### `urządzenie … akcelerometr (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Zwraca surowy odczyt akcelerometru urządzenia wzdłuż jednej osi, w m/s².

- Osie: `x`, `y`, `z`

### `urządzenie … przyspieszenie (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Zwraca przyspieszenie urządzenia wzdłuż jednej osi, w m/s².

- Osie: `x`, `y`, `z`

## Stoper {#timer}

### `stoper` (Zaawansowany) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Zwraca czas od uruchomienia programu lub od ostatniego bloku **zresetuj timer**, w sekundach.

### `zresetuj timer` (Zaawansowany) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Zeruje stoper.
