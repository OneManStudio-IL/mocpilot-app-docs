---
id: Motors
title: Моторы
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Моторы

Блоки моторов запускают, останавливают и поворачивают в нужное положение моторы, подключённые к портам хаба, а также настраивают их движение. Категория появляется, если у хаба профиля есть порты для моторов. В каждом блоке выбираются хаб и один или несколько портов.

Некоторым блокам нужен мотор со встроенным датчиком поворота (энкодером) — например, угловые моторы Technic — и хаб, который умеет им управлять. Такие блоки помечены «моторы с энкодером». Их нет у хабов SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 и Mould King. Technic Move Hub тоже работает с этими блоками (его моторы — порты `A`, `B` и `C`), а ещё у него есть собственные блоки профиля машины: см. [Technic Move Hub](#technic-move-hub) в конце страницы.

## Запуск моторов

### `установить скорость на …` (Продвинутый) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Задаёт скорость (от −100 до 100 %), с которой на этих портах работают **запустить мотор** и **запустить … в течение**. Сам по себе блок мотор не запускает.

### `запустить мотор …` (Новичок) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Запускает мотор в выбранном направлении со скоростью, заданной блоком **установить скорость на**.

- Направление: по часовой или против часовой стрелки

### `запустить мотор на … % скорость` (Новичок) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Запускает мотор с заданной скоростью от −100 до 100 %. При отрицательной скорости мотор крутится в обратную сторону.

- Для чего: езда от джойстика или ползунка — подставьте значение элемента в поле скорости.

### `остановить мотор` (Новичок) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Останавливает мотор.

### `запустить … в течение …` (Продвинутый) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Крутит мотор в выбранном направлении заданное число оборотов, градусов или секунд.

- Направление: по часовой или против часовой стрелки
- Единицы: `обороты`, `градусы`, `секунды`
- Только моторы с энкодером.

### `запустить на … в … % скорость` (Продвинутый) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Крутит мотор заданное число оборотов, градусов или секунд с указанной скоростью.

- Единицы: `обороты`, `градусы`, `секунды`
- Только моторы с энкодером.

## Положение

### `идти … в позицию …` (Продвинутый) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Поворачивает мотор в абсолютное положение (относительно нулевой отметки самого мотора).

- Путь: `кратчайший путь`, `по часовой стрелке`, `против часовой стрелки`
- Только моторы с энкодером.

### `перейти в относительную позицию … в … % скорость` (Новичок) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Поворачивает мотор в положение (в градусах), отсчитанное от точки, заданной блоком **установить относительное положение**.

- Для чего: руление сервоприводом, когда угол задаёт джойстик.
- Только моторы с энкодером; для BuWizz 3 есть отдельный блок ниже.

### `перейти в относительную позицию …` (BuWizz 3) (Новичок) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Вариант предыдущего блока для BuWizz 3, без поля скорости.

- Хабы: BuWizz 3, моторы с энкодером.

### `установить относительное положение …` (Новичок) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Объявляет текущее положение мотора равным заданному значению. От него отсчитываются относительные позиции.

- Только моторы с энкодером.

### `калибровать рейку … центр … градусы …` (Новичок) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Находит центр и ход рулевой рейки.

- Мотор доводит рейку до обоих упоров, измеряет ход и записывает результат в две переменные, которые вы вставили в поля: положение центра и диапазон в градусах (от центра до одного упора). Рейка останавливается посередине, и эта точка становится относительным положением 0: рулите блоком **перейти в относительную позицию** `диапазон × джойстик / 100`.
- У рулевого механизма должны быть жёсткие механические упоры с обеих сторон (конец рейки или передачи).
- Только моторы с энкодером.

## Настройки мотора

### `установить мотор на … при остановке` (Гуру) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Определяет, что делает мотор при остановке.

- `тормоз` — быстро останавливается.
- `удерживать позицию` — активно держит положение (удобно для руля).
- `накат` — свободно останавливается сам.
- Только моторы с энкодером.

### `включить обнаружение застревания …` (Гуру) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Включает или выключает обнаружение застревания мотора. Когда оно включено, заблокированный мотор перестаёт давить и сдаётся, поэтому блок, который ждёт мотор, может завершиться.

- Хабы: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (на блоке значок хаба).

### `установить ускорение на …` (Гуру) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Определяет, как быстро мотор набирает скорость.

- Варианты: `по умолчанию`, `быстро`, `сбалансированный`, `плавный`, `медленно`, `очень медленно`
- Только моторы с энкодером.

### `установить замедление на …` (Гуру) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Определяет, как быстро мотор сбрасывает скорость.

- Варианты: `по умолчанию`, `быстро`, `сбалансированный`, `плавный`, `медленно`, `очень медленно`
- Только моторы с энкодером.

## Значения мотора

### `позиция` (Новичок) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Возвращает абсолютное положение мотора.

- Только моторы с энкодером.

### `относительное положение` (Новичок) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Возвращает относительное положение мотора в градусах.

- Только моторы с энкодером.

### `скорость` (Новичок) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Возвращает текущую скорость мотора.

### `мощность` (Продвинутый) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Возвращает текущую мощность мотора.

- Хабы: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (на блоке значок хаба).

## Robot Inventor {#robot-inventor-motors}

Эти блоки взяты из приложения Robot Inventor и работают только с [хабами MINDSTORMS Robot Inventor и SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них есть значок хаба. Чтобы управлять двухколёсным роботом, используйте блоки категории [Движение](/docs/Application/BlockBuilder/Blocks/Movement).

### `запустить мотор на … % мощность` (Продвинутый) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Запускает моторы на выбранных портах с заданной мощностью от −100 до 100 % (по умолчанию 75 %). В отличие от **запустить мотор на … % скорость**, мотор не поддерживает заданную скорость: под нагрузкой он замедляется, как мотор без энкодера.

### `мотор был прерван?` (Гуру) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, если последняя команда мотора на этом порту не завершилась, потому что её прервал другой блок мотора на том же порту.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (в радиоуправляемых машинах LEGO® Technic) можно программировать двумя способами:

- **Блоки портов** (блоки моторов выше). Три встроенных мотора хаба — это порты: `A` и `B` — ходовые моторы, `C` — мотор руля. Это моторы с энкодером, поэтому на них работают все блоки моторов выше, кроме **включить обнаружение застревания** и **мощность**. В моделях машин LEGO `A` при движении вперёд вращается в другую сторону, чем `B`, а у руля на `C` есть упоры: один раз выполните **калибровать рейку** на `C`, затем рулите блоком **перейти в относительную позицию** на `C` (0 — центр). Шесть лампочек хаба — это порты `1`–`6` [блоков света](/docs/Application/BlockBuilder/Blocks/Light), а блоки [наклона, ускорения и ориентации](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) работают так же, как на Technic Hub.
- **Блоки профиля машины** (ниже): ход, руль, тормоз, силовой импульс, свет и режим питания — через конфигурацию машины, загруженную в хаб. См. [Конфигурации Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Один способ на хаб
Блоки профиля и блоки портов командуют одними и теми же моторами и лампочками: срабатывает последняя команда, а блок профиля забирает моторы и лампочки обратно. Проверка программы в редакторе блоков предупреждает об этом на каждом блоке порта этого хаба: «… управляется и блоками профиля машины, и блоками портов».
:::

### `запустить моторы при … % скорость` (Новичок) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Запускает ходовые моторы с заданной скоростью.

### `силовой импульс` (Новичок) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Подаёт на ходовые моторы силовой импульс.

- Для чего: кратковременный рывок перед следующими блоками.

### `остановить моторы` (Новичок) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Останавливает ходовые моторы.

### `установить тормоз моторов …` (Новичок) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Включает или выключает тормоз ходовых моторов.

- Варианты: `выключено`, `включено`

### `установить рулевую рейку на …` (Новичок) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Поворачивает руль в заданное положение.

### `калибровать рулевую рейку` (Новичок) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Калибрует руль встроенным алгоритмом хаба, который сам находит диапазон поворота.

- У рулевого механизма должны быть жёсткие механические упоры (например, концы рулевой рейки).
