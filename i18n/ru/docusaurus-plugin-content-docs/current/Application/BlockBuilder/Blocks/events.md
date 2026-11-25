---
id: Events
title: События
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# События

В категории **События** собраны блоки, которые запускают скрипты, когда что-то происходит, и блоки для обмена сообщениями между скриптами. Сообщения создаются и удаляются кнопками **Добавить сообщение** и **Удалить сообщение** в начале категории.

## Основные события

### `когда программа запускается` (Новичок) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Запускает свой скрипт один раз — при старте программы.

- Для чего: задать начальные значения переменных, привести моторы в исходное положение, показать сообщение о готовности.

### `когда …` (Продвинутый) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Запускает скрипт, когда условие в гнезде из ложного становится истинным. Пока скрипт выполняется, блок ждёт; снова он сработает, только когда условие станет ложным, а потом опять истинным.

- Для чего: реагировать на состояние, например `когда таймер > 5 и переключатель включён`.

### `когда таймер > …` (Продвинутый) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Запускает скрипт, когда таймер программы превысит заданное число секунд.

- Для чего: отложенные действия, этапы по времени. Таймер обнуляет блок **сбросить таймер** (категория «Датчики»).

### `когда я получаю …` (Гуру) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Запускает скрипт, когда передано выбранное сообщение.

- Для чего: согласовать работу нескольких скриптов.

### `передать …` (Гуру) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Отправляет сообщение всем скриптам, которые начинаются с **когда я получаю** с этим сообщением, и сразу идёт дальше.

- Для чего: запустить другие скрипты, не дожидаясь их окончания.

### `передать … и ждать` (Гуру) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Отправляет сообщение и приостанавливает текущий скрипт, пока не закончатся все скрипты, которые его получили.

- Для чего: пошаговые сценарии, где важен порядок.

## События хаба

Эти блоки появляются, если их поддерживает хаб профиля. У хабов Mould King их нет.

### `когда … кнопка …` (Новичок) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Срабатывает, когда кнопку на хабе нажимают или отпускают.

- Состояния: `нажата`, `отпущен`, `изменено`
- Хабы: LEGO Powered Up, WeDo 2.0 и Robot Inventor. Набор кнопок зависит от хаба.

### `когда … подключено / отключено` (Новичок) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Срабатывает, когда хаб подключается или отключается.

- Для чего: безопасно остановить модель при потере связи и восстановить её состояние, когда связь вернётся.

### `когда … % батареи изменена` (Новичок) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Срабатывает, когда меняется уровень заряда, который сообщает хаб.

- Хабы: те, что сообщают уровень заряда.
- Для чего: предупреждение о разряде, переход в экономный режим.

### `когда … данные акселерометра изменены` (Гуру) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Срабатывает, когда меняются показания акселерометра хаба.

- Хабы: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `когда … наклон … угол изменён` (Новичок) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Срабатывает, когда меняется угол наклона хаба.

- Углы: `любой`, `тангаж`, `крен`, `рысканье`
- Хабы: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `рысканье` есть только у Technic Hub и Robot Inventor.

### `когда … ориентация изменена` (Новичок) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Срабатывает, когда меняется ориентация хаба — то есть вверх оказывается другая его сторона.

- Хабы: те же, что у события наклона.

## События датчиков

Эти события читают датчик, подключённый к порту хаба. Хабы: City Hub, Technic Hub, BOOST Move Hub и хаб MINDSTORMS Robot Inventor (не SBrick, BuWizz, WeDo 2.0 и Mould King).

### Датчик Technic: `когда цвет …` (Новичок) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Срабатывает, когда датчик цвета Technic видит выбранный цвет.

### Датчик Technic: `когда … ближе чем / дальше чем / точно в …` (Новичок) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Срабатывает, когда расстояние, измеренное датчиком расстояния Technic, отвечает условию.

- Сравнение: `ближе чем`, `дальше чем`, `точно в`
- Единицы: `мм`, `см`, `дюймы`, `%`

### Датчик BOOST: `когда … ближе чем / дальше чем / точно в …` (Новичок) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Срабатывает, когда расстояние, измеренное датчиком цвета и расстояния BOOST, отвечает условию.

- Сравнение: `ближе чем`, `дальше чем`, `точно в`
- Единицы: `%`, `см`, `дюймы`

### Датчик BOOST: `когда цвет …` (Новичок) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Срабатывает, когда датчик цвета и расстояния BOOST видит выбранный цвет.

## События Robot Inventor {#robot-inventor-events}

Эти события взяты из приложения Robot Inventor и работают только с [хабами MINDSTORMS Robot Inventor и SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них есть значок хаба. Соответствующие значения описаны на странице [Датчики](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `когда хаб …` (Новичок) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Срабатывает каждый раз, когда хаб `стукнули`, `дважды стукнули`, `встряхнули` (по умолчанию) или когда он `падает`.

### `когда … сверху` (Новичок) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Срабатывает, когда выбранная сторона хаба поворачивается вверх: `передняя сторона` (световая матрица, по умолчанию), `верхняя сторона`, `правая сторона`, `задняя сторона`, `нижняя сторона` или `левая сторона`.

### `когда хаб наклонён …` (Продвинутый) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Срабатывает, когда хаб наклоняют `вверх`, `вниз`, `влево`, `вправо` или в любую сторону (`любой`, по умолчанию) примерно на 12° или больше.

### `когда … нажат / сильно нажат / отпущен` (Новичок) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Срабатывает, когда датчик силы на выбранном порту нажат, сильно нажат (больше 5 ньютонов) или отпущен.

### `когда хаб получает сигнал …` (Гуру) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Срабатывает, когда этот хаб получает от другого хаба радиосигнал с этим именем. Его значение читает блок [полученный сигнал … значение](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
