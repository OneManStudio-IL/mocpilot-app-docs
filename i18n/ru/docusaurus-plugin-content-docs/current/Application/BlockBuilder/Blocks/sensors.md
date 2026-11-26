---
id: Sensors
title: Датчики
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Датчики

Блоки датчиков читают состояние телефона или планшета, таймер программы, хабы и подключённые к ним датчики. Их значения используют в условиях, событиях и вычислениях.

На этой странице:

- [Состояние хаба](#hub-state): батарея, напряжение, температура, ток и режим питания
- [Кнопки, наклон и ориентация хаба](#hub-tilt-and-orientation)
- [Датчики на портах](#sensors-on-ports): любое устройство, датчик цвета Technic, датчик расстояния Technic, датчик цвета и расстояния BOOST, датчики WeDo 2.0
- [Хаб Robot Inventor](#robot-inventor-sensors): датчик силы, жесты, ориентация, рысканье, тангаж и крен, наклон, радиосвязь между хабами
- [Это устройство](#this-device): телефон, планшет или компьютер, на котором работает MOCPilot
- [Таймер](#timer)

## Состояние хаба {#hub-state}

У хабов Mould King этих блоков нет: такие хабы не передают никаких данных.

### `… % батареи` (Новичок) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Возвращает заряд батареи хаба в процентах.

### `… напряжение батареи (V)` (Продвинутый) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Возвращает напряжение батареи хаба в вольтах.

- Хабы: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Возвращает `NaN`, если хаб не подключён.

### `… температура (C°)` (Продвинутый) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Возвращает температуру электроники хаба в градусах Цельсия.

- Хабы: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… ток (мА)` (Гуру) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Возвращает общий ток, который потребляет хаб, в миллиамперах.

- Хабы: Technic Hub.
- Типичное применение: остановить захват или лебёдку, когда растёт нагрузка.

### `получить … выходное напряжение (В)` (Гуру) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Возвращает напряжение, которое хаб сейчас подаёт на порты, в вольтах.

- Хабы: BuWizz 2.

### `… ток (A)` (Гуру) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Возвращает ток на выбранном порту в амперах.

- Хабы: BuWizz 2, BuWizz 3.

### `установить режим питания …` (Technic Move Hub) (Новичок) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Задаёт режим питания Technic Move Hub.

- Режимы: `нормальный`, `турбо`
- Хабы: Technic Move Hub.

## Кнопки, наклон и ориентация хаба {#hub-tilt-and-orientation}

Для блока кнопки указано, с какими хабами он работает. Блоки наклона и ориентации работают с BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub и Robot Inventor. На Technic Move Hub они вычисляются по его акселерометру для хаба, установленного кнопкой вниз, как в моделях машин LEGO; у него нет угла `рысканье` и нет блока **установить … ориентация наклона в …**.

### `является … кнопка …` (Новичок) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Возвращает `true`, если выбранная кнопка хаба находится в выбранном состоянии.

- Состояния: `нажата`, `отпущен`
- Хабы: LEGO Powered Up, WeDo 2.0 и Robot Inventor. Набор кнопок зависит от хаба (обычно `center`).

### `… … угол` (Новичок) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Возвращает угол наклона хаба.

- Углы: `тангаж`, `крен`, `рысканье`
- `рысканье` есть только у Technic Hub и Robot Inventor.

### `… … акселерометр (м/с²)` (Гуру) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Возвращает «сырые» показания акселерометра хаба по одной оси.

- Оси: `x`, `y`, `z`

### `… … ускорение (м/с²)` (Гуру) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Возвращает ускорение хаба по одной оси.

- Оси: `x`, `y`, `z`

### `… … скорость вращения (°/с)` (Гуру) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Возвращает, как быстро хаб поворачивается вокруг одной оси, в градусах в секунду (по гироскопу хаба).

- Оси: `x`, `y`, `z`. `z` — поворот на месте (положительное значение — влево, когда хаб лежит плашмя); `x` и `y` — крен и тангаж.
- Хабы: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Типичное применение: удерживать машину на прямом курсе, заметить, что модель вращается или опрокидывается.

### `получить … ориентация …` (Новичок) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Возвращает, какой стороной хаб обращён вверх.

- Результат: `текст` или `индекс`
- Значения: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `… ориентация …` (Новичок) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Возвращает `true`, если вверх обращена выбранная сторона хаба.

- Варианты: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `установить … ориентация наклона в …` (Продвинутый) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Сообщает хабу, как он установлен в модели, чтобы наклон и ориентация отсчитывались от этого положения.

- Варианты: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`
- Недоступно для Technic Move Hub.

## Датчики на портах {#sensors-on-ports}

Блоки датчиков Technic и BOOST ниже работают с City Hub, Technic Hub, BOOST Move Hub и хабом MINDSTORMS Robot Inventor (не с SBrick, BuWizz, WeDo 2.0 и Mould King).

### Любое устройство на порту {#any-port-device}

#### `… тип устройства` (Новичок) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Возвращает тип устройства, подключённого к выбранному порту.

- Хабы: все хабы с портами, кроме SBrick, SBrick Plus, BuWizz 2 и Technic Move Hub.
- Для чего: проверить, что подключено, прежде чем запускать блоки для конкретного устройства.

### Датчик цвета Technic {#technic-color-sensor}

#### Датчик Technic: `установить режим на …` (Продвинутый) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Переключает датчик цвета Technic в выбранный режим.

- Режимы: `по умолчанию`, `окружающий`
- Смена режима может неожиданно повлиять на программу: в режиме `окружающий` датчик не различает цвета и не измеряет отражённый свет.

#### Датчик Technic: `цвет …` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Возвращает цвет, который видит датчик цвета Technic.

- Результат: `значение` (число) или `строка` (название цвета)

#### Датчик Technic: `является цветом …` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Возвращает `true`, если датчик цвета Technic видит выбранный цвет.

#### Датчик Technic: `отражённый свет (%)` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Возвращает, сколько света поверхность отражает обратно в датчик цвета Technic, в процентах.

#### Датчик Technic: `отражённый свет …` (сравнение) (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Возвращает `true`, если отражённый свет соотносится с заданным значением так, как выбрано.

- Сравнение: `<`, `=`, `>`

#### Датчик Technic: `окружающий свет (%)` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Возвращает яркость окружающего света в процентах.

#### Датчик Technic: `окружающий свет …` (сравнение) (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Возвращает `true`, если окружающий свет соотносится с заданным значением так, как выбрано.

- Сравнение: `<`, `=`, `>`

#### Датчик Technic: `сырое значение …` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Возвращает одно «сырое» значение цвета, который видит датчик.

- Значения: `красный`, `зеленый`, `синий`, `тон (°)` (0–359), `насыщенность (%)`, `яркость (%)`
- Датчики: датчик цвета Technic и датчик цвета и расстояния BOOST. На Technic Hub тон и насыщенность выдаёт сам датчик, а яркость вычисляется из красного, зелёного и синего.
- Типичное применение: различать по тону цвета, которых не знает блок **цвет …**, или близкие оттенки.

### Датчик расстояния Technic {#technic-distance-sensor}

#### Датчик Technic: `расстояние …` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Возвращает расстояние, измеренное датчиком расстояния Technic.

- Единицы: `мм`, `см`, `дюймы`, `%`

#### Датчик Technic: `является ближе чем / дальше чем / точно в …` (Новичок) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Возвращает `true`, если расстояние, измеренное датчиком расстояния Technic, отвечает условию.

- Сравнение: `ближе чем`, `дальше чем`, `точно в`
- Единицы: `мм`, `см`, `дюймы`, `%`

### Датчик цвета и расстояния BOOST {#boost-color-and-distance-sensor}

#### Датчик BOOST: `цвет …` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Возвращает цвет, который видит датчик цвета и расстояния BOOST.

- Результат: `значение` (число) или `строка` (название цвета)

#### Датчик BOOST: `является цветом …` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Возвращает `true`, если датчик BOOST видит выбранный цвет.

#### Датчик BOOST: `расстояние …` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Возвращает расстояние, измеренное датчиком цвета и расстояния BOOST.

- Единицы: `%`, `см`, `дюймы`

#### Датчик BOOST: `является ближе чем / дальше чем / точно в …` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Возвращает `true`, если расстояние, измеренное датчиком BOOST, отвечает условию.

- Сравнение: `ближе чем`, `дальше чем`, `точно в`
- Единицы: `%`, `см`, `дюймы`

#### Датчик BOOST: `отражённый свет (%)` (Новичок) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Возвращает, сколько света поверхность отражает обратно в датчик BOOST, в процентах, с шагом 1 %.

- Чтобы получить «сырой» цвет этого датчика (красный, зелёный, синий, тон, насыщенность, яркость), используйте блок Датчик Technic: **сырое значение …** — он работает и с этим датчиком.

#### Датчик BOOST: `отражённый свет …` (сравнение) (Новичок) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Возвращает `true`, если отражённый свет соотносится с заданным значением так, как выбрано.

- Сравнение: `<`, `=`, `>`

### Датчики WeDo 2.0 {#wedo-2-sensors}

Датчик движения и датчик наклона WeDo 2.0 на хабе WeDo 2.0.

#### Датчик WeDo 2.0: `расстояние …` (Новичок) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Возвращает расстояние, измеренное датчиком движения WeDo 2.0.

- Единицы: `%`, `см`, `дюймы`
- Хабы: WeDo 2.0.

#### Датчик WeDo 2.0: `является ближе чем / дальше чем / точно в …` (Новичок) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Возвращает `true`, если расстояние, измеренное датчиком движения WeDo 2.0, отвечает условию.

- Сравнение: `ближе чем`, `дальше чем`, `точно в`
- Единицы: `%`, `см`, `дюймы`
- Хабы: WeDo 2.0.

#### Датчик WeDo 2.0: `угол …` / `направление как …` (Новичок) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Возвращает данные датчика наклона WeDo 2.0: угол наклона или направление, в котором он наклонён.

- Углы: `тангаж`, `крен`
- Направление: результат `текст` или `число`; значения `нейтральный`, `вперёд`, `назад`, `влево`, `вправо`, `неизвестно`
- Хабы: WeDo 2.0.

## Хаб Robot Inventor {#robot-inventor-sensors}

Эти блоки взяты из приложения Robot Inventor и работают только с [хабами MINDSTORMS Robot Inventor и SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них есть значок хаба. Их события (когда хаб встряхнули, наклонили и т. д.) описаны на странице [События](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Датчик силы {#robot-inventor-force-sensor}

#### `… нажат / сильно нажат / отпущен ?` (Новичок) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Проверяет датчик силы на выбранном порту. `сильно нажат` означает нажатие с силой больше 5 ньютонов.

#### `… давление в % / ньютонах` (Новичок) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Возвращает, насколько сильно нажат датчик силы: в процентах (0–100) или в ньютонах (0–10).

### Движение хаба {#robot-inventor-motion}

#### `хаб … ?` (Продвинутый) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true`, если хаб только что подвергся такому действию: `стукнули`, `дважды стукнули`, `встряхнули` (по умолчанию) или `падает`. Жест учитывается один раз: после того как блок его прочитал, он исчезает.

#### `жест` (Гуру) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Возвращает последний жест в виде текста: `tapped`, `doubletapped`, `shake` или `freefall` либо пустое значение, если жеста не было.

#### `… сверху?` (Новичок) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true`, если эта сторона хаба смотрит вверх: `передняя сторона` (световая матрица), `верхняя сторона`, `правая сторона`, `задняя сторона`, `нижняя сторона` или `левая сторона`.

#### `ориентация` (Гуру) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Возвращает сторону, которая смотрит вверх, в виде текста: `front`, `up`, `rightside`, `back`, `down` или `leftside`.

#### `… угол` (Новичок) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Возвращает угол хаба в градусах вокруг одной оси: `рысканье` (поворот влево и вправо, как у компаса), `тангаж` (нос вверх и вниз) или `крен` (наклон в стороны).

- Для чего: вести робота по прямой или повернуть его ровно на 90°: сбросьте рысканье, а потом рулите, пока рысканье не достигнет нужного угла.

#### `установить угол рысканья на 0` (Новичок) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Делает текущее направление хаба новым нулём угла рысканья. Блок ждёт 0,1 с, чтобы следующее показание уже отсчитывалось от него.

#### `угловая скорость …` (Гуру) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Возвращает, как быстро хаб вращается вокруг оси `x`, `y` или `z` (гироскоп), в градусах в секунду.

#### `ускорение …` (Гуру) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Возвращает ускорение хаба вдоль оси `x`, `y` или `z` в том виде, в каком его сообщает хаб.

#### `хаб наклонён … ?` (Продвинутый) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true`, если хаб наклонён в этом направлении: `вверх`, `вниз`, `влево`, `вправо` или `любой` (по умолчанию). Хаб считается наклонённым примерно от 12° от горизонтали; если он наклонён в обе стороны, учитывается больший наклон.

### Радиосвязь между хабами {#robot-inventor-radio}

Хабы Robot Inventor могут отправлять друг другу короткие сигналы по радио, без участия MOCPilot. У сигнала есть имя и значение.

#### `отправить сигнал хаба … с …` (Гуру) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Отправляет сигнал с заданным именем (по умолчанию `signal`) и значением (`1`) с этого хаба хабам поблизости.

#### `полученный сигнал … значение` (Гуру) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Возвращает последнее значение, которое этот хаб получил для сигнала с этим именем, или 0, если ещё ничего не пришло. Чтобы реагировать в момент получения сигнала, используйте [когда хаб получает сигнал](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Это устройство {#this-device}

Эти блоки читают телефон, планшет или компьютер, на котором работает MOCPilot.

### `устройство % батареи` (Новичок) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Возвращает заряд батареи устройства в процентах.

### `устройство … угол` (Продвинутый) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Возвращает угол наклона устройства.

- Углы: `тангаж`, `крен`, `рысканье`
- Для чего: рулить моделью, наклоняя телефон.

### `устройство … акселерометр (м/с²)` (Гуру) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Возвращает «сырые» показания акселерометра устройства по одной оси, в м/с².

- Оси: `x`, `y`, `z`

### `устройство … ускорение (м/с²)` (Гуру) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Возвращает ускорение устройства по одной оси, в м/с².

- Оси: `x`, `y`, `z`

## Таймер {#timer}

### `таймер` (Продвинутый) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Возвращает время в секундах с запуска программы или с последнего **сбросить таймер**.

### `сбросить таймер` (Продвинутый) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Обнуляет таймер.
