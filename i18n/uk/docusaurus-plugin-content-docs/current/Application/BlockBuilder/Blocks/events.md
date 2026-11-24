---
id: Events
title: Події
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Події {#events}

Категорія **Події** містить блоки, які запускають скрипти, коли щось відбувається, а також блоки, що надсилають повідомлення між скриптами. Керувати повідомленнями можна кнопками **Додати повідомлення** і **Видалити повідомлення** вгорі категорії.

## Основні події {#core-events}

### `коли програма запускається` (Початківець) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Виконує свій скрипт один раз, під час запуску програми.

- Для чого: задати початкові значення змінних, привести мотори в початковий стан, показати повідомлення «готово».

### `коли …` (Просунутий) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Виконує свій скрипт, коли умова в полі змінюється з хибної на істинну. Поки скрипт працює, блок чекає; він спрацьовує знову лише після того, як умова стане хибною, а потім знову істинною.

- Для чого: реагувати на стан, наприклад `коли таймер > 5 і перемикач увімкнено`.

### `коли таймер > …` (Просунутий) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Виконує свій скрипт, коли таймер програми перевищує значення (у секундах).

- Для чого: відкладені дії, етапи за часом. Скинути таймер можна блоком **скинути таймер** (Датчики).

### `коли я отримую …` (Гуру) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Виконує свій скрипт, коли передано вибране повідомлення.

- Для чого: узгоджувати кілька скриптів.

### `передати …` (Гуру) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Надсилає повідомлення кожному скрипту, що починається з **коли я отримую** для цього повідомлення, і одразу продовжує роботу.

- Для чого: дати іншим скриптам команду почати, не чекаючи на них.

### `передати … і чекати` (Гуру) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Надсилає повідомлення й призупиняє цей скрипт, доки всі скрипти, що його отримали, не завершаться.

- Для чого: покрокові послідовності, де важливий порядок.

## Події хаба {#hub-events}

Ці блоки з’являються, коли їх підтримує хаб профілю. Для хабів Mould King їх немає.

### `коли … кнопка …` (Початківець) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Спрацьовує, коли кнопку на хабі натиснуто або відпущено.

- Варіанти стану: `натиснута`, `відпущена`, `змінено`
- Хаби: хаби LEGO Powered Up, WeDo 2.0 і Robot Inventor. Перелік кнопок залежить від хаба.

### `коли … є підключено / відключено` (Початківець) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Спрацьовує, коли хаб підключається або від’єднується.

- Для чого: безпечно зупинити модель, коли зв’язок втрачено, і відновити її стан, коли він повернеться.

### `коли … % батареї змінена` (Початківець) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Спрацьовує, коли змінюється рівень заряду, який повідомляє хаб.

- Хаби: ті, що повідомляють рівень заряду.
- Для чого: попередження про розряд батареї, перехід в енергоощадний режим.

### `коли … дані акселерометра змінено` (Гуру) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Спрацьовує, коли змінюються значення акселерометра хаба.

- Хаби: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `коли … нахил … кут змінено` (Початківець) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Спрацьовує, коли змінюється кут нахилу хаба.

- Варіанти кута: `будь-який`, `тангаж`, `крен`, `рискування`
- Хаби: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `рискування` доступне лише на Technic Hub і Robot Inventor.

### `коли … орієнтацію змінено` (Початківець) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Спрацьовує, коли змінюється орієнтація хаба, тобто коли вгору повернуто іншу його сторону.

- Хаби: ті самі, що й для події нахилу.

## Події датчиків {#sensor-events}

Ці події зчитують датчик, підключений до порту хаба. Хаби: City Hub, Technic Hub, BOOST Move Hub і хаб MINDSTORMS Robot Inventor (не SBrick, BuWizz, WeDo 2.0 чи Mould King).

### Датчик Technic: `коли колір …` (Початківець) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Спрацьовує, коли датчик кольору Technic бачить вибраний колір.

### Датчик Technic: `коли … ближче, ніж / далі, ніж / точно на …` (Початківець) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Спрацьовує, коли відстань, виміряна датчиком відстані Technic, відповідає умові.

- Варіанти порівняння: `ближче, ніж`, `далі, ніж`, `точно на`
- Одиниці: `мм`, `см`, `дюймі`, `%`

### Датчик BOOST: `коли … ближче, ніж / далі, ніж / точно на …` (Початківець) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Спрацьовує, коли відстань, виміряна датчиком кольору й відстані BOOST, відповідає умові.

- Варіанти порівняння: `ближче, ніж`, `далі, ніж`, `точно на`
- Одиниці: `%`, `см`, `дюймі`

### Датчик BOOST: `коли колір …` (Початківець) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Спрацьовує, коли датчик кольору й відстані BOOST бачить вибраний колір.

## Події Robot Inventor {#robot-inventor-events}

Ці події взято із застосунку Robot Inventor, і вони працюють лише з [хабами MINDSTORMS Robot Inventor і SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них є значок хаба. Відповідні значення описано на сторінці [Датчики](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `коли хаб …` (Початківець) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Спрацьовує щоразу, коли хаб `стукнули`, `двічі стукнули`, `струснули` (типово) або коли він `падає`.

### `коли … зверху` (Початківець) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Спрацьовує, коли вибрана сторона хаба повертається догори: `передня сторона` (світлова матриця, типово), `верхня сторона`, `права сторона`, `задня сторона`, `нижня сторона` або `ліва сторона`.

### `коли хаб нахилений …` (Просунутий) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Спрацьовує, коли хаб нахиляють `вгору`, `вниз`, `вліво`, `вправо` або в будь-який бік (`будь-який`, типово) приблизно на 12° або більше.

### `коли … натиснута / сильно натиснуто / відпущен` (Початківець) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Спрацьовує, коли датчик сили на вибраному порту натиснуто, сильно натиснуто (понад 5 ньютонів) або відпущено (у застосунку `відпущен`).

### `коли хаб отримує сигнал …` (Гуру) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Спрацьовує, коли цей хаб отримує від іншого хаба радіосигнал із цією назвою. Його значення читає блок [отриманий сигнал … значення](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
