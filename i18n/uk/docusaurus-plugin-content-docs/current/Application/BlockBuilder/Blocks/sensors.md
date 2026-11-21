---
id: Sensors
title: Датчики
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Датчики {#sensors}

Блоки датчиків зчитують стан вашого телефона чи планшета, таймер програми, хаби та підключені до них датчики. Використовуйте їхні значення в умовах, подіях і обчисленнях.

На цій сторінці:

- [Стан хаба](#hub-state): батарея, напруга, температура, струм і режим потужності
- [Кнопки, нахил і орієнтація хаба](#hub-tilt-and-orientation)
- [Датчики на портах](#sensors-on-ports): будь-який пристрій, датчик кольору Technic, датчик відстані Technic, датчик кольору й відстані BOOST, датчики WeDo 2.0
- [Цей пристрій](#this-device): телефон, планшет або комп’ютер, на якому працює MOCPilot
- [Таймер](#timer)

## Стан хаба {#hub-state}

Цих блоків немає для хабів Mould King, які не передають жодних даних.

### `… % батареї` (Початківець) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Повертає рівень заряду батареї хаба у відсотках.

### `… напруга батареї (V)` (Просунутий) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Повертає напругу батареї хаба у вольтах.

- Хаби: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Повертає `NaN`, коли хаб не підключено.

### `… температура (C°)` (Просунутий) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Повертає температуру електроніки хаба в градусах Цельсія.

- Хаби: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `отримати … вихідна напруга (В)` (Гуру) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Повертає напругу, яку хаб зараз подає на свої порти, у вольтах.

- Хаби: BuWizz 2.

### `… струм (A)` (Гуру) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Повертає струм, що споживається на вибраному порту, в амперах.

- Хаби: BuWizz 2, BuWizz 3.

### `встановити режим живлення …` (Technic Move Hub) (Початківець) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Задає режим потужності Technic Move Hub.

- Режими: `нормальний`, `підсилення`
- Хаби: Technic Move Hub.

## Кнопки, нахил і орієнтація хаба {#hub-tilt-and-orientation}

Для блока кнопки вказано хаби, з якими він працює. Блоки нахилу й орієнтації працюють на BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub і Robot Inventor.

### `є … … кнопка …` (Початківець) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Повертає `true`, коли вибрана кнопка хаба у вибраному стані.

- Стани: `натиснута`, `відпущена`
- Хаби: хаби LEGO Powered Up, WeDo 2.0 і Robot Inventor. Перелік кнопок залежить від хаба (зазвичай `центр`).

### `… … кут` (Початківець) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Повертає кут нахилу хаба.

- Кути: `тангаж`, `крен`, `рискування`
- `рискування` доступне лише на Technic Hub і Robot Inventor.

### `… … акселерометр (м/с²)` (Гуру) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Повертає сирі показання акселерометра хаба вздовж однієї осі.

- Осі: `x`, `y`, `z`

### `… … прискорення (м/с²)` (Гуру) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Повертає прискорення хаба вздовж однієї осі.

- Осі: `x`, `y`, `z`

### `отримати … орієнтація …` (Початківець) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Повертає, яка сторона хаба повернута вгору.

- Результат: `текст` або `індекс`
- Значення: `Перед`, `Верх`, `вправо`, `Задня`, `Низ`, `вліво`

### `… орієнтація …` (Початківець) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Повертає `true`, коли вибрана сторона хаба повернута вгору.

- Варіанти: `Перед`, `Верх`, `вправо`, `Задня`, `Низ`, `вліво`

### `налаштувати … орієнтація нахилу до …` (Просунутий) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Повідомляє хабу, як його закріплено в моделі, щоб нахил і орієнтація вимірювалися від цього положення.

- Варіанти: `Перед`, `Верх`, `вправо`, `Задня`, `Низ`, `вліво`

## Датчики на портах {#sensors-on-ports}

Наведені нижче блоки датчиків Technic і BOOST працюють на City Hub, Technic Hub, BOOST Move Hub і хабі MINDSTORMS Robot Inventor (не SBrick, BuWizz, WeDo 2.0 чи Mould King).

### Будь-який пристрій на порту {#any-port-device}

#### `… тип пристрою` (Початківець) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Повертає тип пристрою, підключеного до вибраного порту.

- Хаби: усі хаби з портами, крім SBrick, SBrick Plus і BuWizz 2.
- Для чого: перевірити, що підключено, перш ніж виконувати блоки для конкретного пристрою.

### Датчик кольору Technic {#technic-color-sensor}

#### Датчик Technic: `встановити режим на …` (Просунутий) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Перемикає датчик кольору Technic у вибраний режим.

- Режими: `за замовчуванням`, `навколишнє середовище`
- Зміна режиму може несподівано вплинути на програму: у режимі `навколишнє середовище` датчик не може зчитувати кольори й відбите світло.

#### Датчик Technic: `колір …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Повертає колір, який бачить датчик кольору Technic.

- Результат: `значення` (число) або `рядок` (назва кольору)

#### Датчик Technic: `є кольором …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Повертає `true`, коли датчик кольору Technic бачить вибраний колір.

#### Датчик Technic: `відбите світло (%)` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Повертає, скільки світла поверхня відбиває назад до датчика кольору Technic, у відсотках.

#### Датчик Technic: `відбите світло …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Повертає `true`, коли відбите світло відповідає вибраному порівнянню зі значенням.

- Порівняння: `<`, `=`, `>`

#### Датчик Technic: `навколишнє світло (%)` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Повертає яскравість навколишнього світла у відсотках.

#### Датчик Technic: `навколишнє світло …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Повертає `true`, коли навколишнє світло відповідає вибраному порівнянню зі значенням.

- Порівняння: `<`, `=`, `>`

#### Датчик Technic: `сире значення …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Повертає сире значення одного колірного каналу датчика кольору Technic.

- Канали: `червоний`, `зелений`, `синій`

### Датчик відстані Technic {#technic-distance-sensor}

#### Датчик Technic: `відстань …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Повертає відстань, виміряну датчиком відстані Technic.

- Одиниці: `мм`, `см`, `дюймі`, `%`

#### Датчик Technic: `є ближче, ніж / далі, ніж / точно на …` (Початківець) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Повертає `true`, коли відстань, виміряна датчиком відстані Technic, відповідає умові.

- Порівняння: `ближче, ніж`, `далі, ніж`, `точно на`
- Одиниці: `мм`, `см`, `дюймі`, `%`

### Датчик кольору й відстані BOOST {#boost-color-and-distance-sensor}

#### Датчик BOOST: `колір …` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Повертає колір, який бачить датчик кольору й відстані BOOST.

- Результат: `значення` (число) або `рядок` (назва кольору)

#### Датчик BOOST: `є кольором …` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Повертає `true`, коли датчик BOOST бачить вибраний колір.

#### Датчик BOOST: `відстань …` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Повертає відстань, виміряну датчиком кольору й відстані BOOST.

- Одиниці: `%`, `см`, `дюймі`

#### Датчик BOOST: `є ближче, ніж / далі, ніж / точно на …` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Повертає `true`, коли відстань, виміряна датчиком BOOST, відповідає умові.

- Порівняння: `ближче, ніж`, `далі, ніж`, `точно на`
- Одиниці: `%`, `см`, `дюймі`

#### Датчик BOOST: `відбите світло (%)` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Повертає, скільки світла поверхня відбиває назад до датчика BOOST, у відсотках.

#### Датчик BOOST: `відбите світло …` (Початківець) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Повертає `true`, коли відбите світло відповідає вибраному порівнянню зі значенням.

- Порівняння: `<`, `=`, `>`

### Датчики WeDo 2.0 {#wedo-2-sensors}

Датчик руху та датчик нахилу WeDo 2.0 на хабі WeDo 2.0.

#### Датчик WeDo 2.0: `відстань …` (Початківець) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Повертає відстань, виміряну датчиком руху WeDo 2.0.

- Одиниці: `%`, `см`, `дюймі`
- Хаби: WeDo 2.0.

#### Датчик WeDo 2.0: `є ближче, ніж / далі, ніж / точно на …` (Початківець) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Повертає `true`, коли відстань, виміряна датчиком руху WeDo 2.0, відповідає умові.

- Порівняння: `ближче, ніж`, `далі, ніж`, `точно на`
- Одиниці: `%`, `см`, `дюймі`
- Хаби: WeDo 2.0.

#### Датчик WeDo 2.0: `кут …` / `напрямок як …` (Початківець) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Повертає дані датчика нахилу WeDo 2.0: кут нахилу або напрямок, у який його нахилено.

- Кути: `тангаж`, `крен`
- Результат напрямку: `текст` або `число`; напрямки: `нейтральний`, `вперед`, `назад`, `вліво`, `вправо`, `невідомо`
- Хаби: WeDo 2.0.

## Цей пристрій {#this-device}

Ці блоки зчитують дані телефона, планшета чи комп’ютера, на якому працює MOCPilot.

### `пристрій % батареї` (Початківець) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Повертає рівень заряду батареї пристрою у відсотках.

### `пристрій … кут` (Просунутий) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Повертає кут нахилу пристрою.

- Кути: `тангаж`, `крен`, `рискування`
- Для чого: кермувати моделлю, нахиляючи телефон.

### `пристрій … акселерометр (м/с²)` (Гуру) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Повертає сирі показання акселерометра пристрою вздовж однієї осі, у м/с².

- Осі: `x`, `y`, `z`

### `пристрій … прискорення (м/с²)` (Гуру) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Повертає прискорення пристрою вздовж однієї осі, у м/с².

- Осі: `x`, `y`, `z`

## Таймер {#timer}

### `таймер` (Просунутий) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Повертає час від запуску програми або від останнього **скинути таймер**, у секундах.

### `скинути таймер` (Просунутий) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Скидає таймер на нуль.
