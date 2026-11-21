---
id: DashboardControllers
title: Наэкранные контроллеры
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Наэкранные контроллеры

Эти блоки читают элементы управления на панели, реагируют, когда вы ими пользуетесь, и меняют их вид. Они находятся в категории **Наэкранные контроллеры**, которая появляется, как только на панели есть хотя бы один элемент. Каждый тип элемента добавляет свои блоки; в блоке элемент выбирается по имени, например *BTN1* или *GEAR1*.

Диапазоны: большинство аналоговых значений идут от 0 до 100 или от −100 до 100, если ноль посередине.

На этой странице:

- [Блоки для всех элементов](#blocks-for-all-controls): цвет, интерактивность и звуки
- [Кнопки и переключатели](#buttons-and-switches): кнопка, переключатель, шаговый переключатель
- [Джойстики и крестовины](#joysticks-and-d-pads)
- [Слайдеры и ручки](#sliders-and-knobs): слайдер, поворотная ручка
- [Мониторы](#monitor-blocks)
- [Руль и педали](#steering-wheel-and-pedals)
- [Другие специальные элементы](#other-special-controls): коробка передач, ручной тормоз, поворотники, контроллер машиниста

## Блоки для всех элементов {#blocks-for-all-controls}

### `Установить цвет контроллера` (Продвинутый) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*установить [элемент] цвет в [цвет]*: меняет акцентный цвет элемента.

- Тип: командный блок
- Работает с элементами, у которых есть акцентный цвет (кроме руля и педалей)
- Пример: показать состояние — скажем, кнопка краснеет, когда садится батарея

### `Установить интерактивность контроллера` (Продвинутый) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[включить / отключить] [элемент] интерактивность*: отключённый элемент не реагирует на касания.

- Тип: командный блок
- Пример: на время заблокировать элемент — например, газ, пока не пройдёт стартовая проверка

### `Звук элемента` (Новичок) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*звук [звук] у [элемент]*: один из звуков элемента для блоков проигрывания звука из категории **Звуки**.

- Тип: блок значения
- Появляется, когда на панели есть элемент со звуками: [руль](/docs/Application/Dashboard/SpecialControls#steering-wheel) (клаксоны легковой и гоночной машины, гудок грузовика) или [педали](/docs/Application/Dashboard/SpecialControls#pedals) (тормоза легковой и гоночной машины, пневмотормоз грузовика, сигнал заднего хода)
- Звук играет, только если у элемента включены **Звуковые эффекты** и в приложении включён звук

## Кнопки и переключатели {#buttons-and-switches}

### Блоки кнопки {#button-blocks}

#### `Событие кнопки` (Новичок) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*когда кнопка [элемент] является [нажата / отпущен]*: запускает скрипт, когда кнопку нажимают или отпускают.

- Тип: блок события

#### `Значение кнопки (логическое)` (Новичок) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*кнопка [элемент] [нажата / отпущен]*: нажата ли кнопка прямо сейчас.

- Тип: блок значения, `истина` / `ложь`

### Блоки переключателя {#switch-blocks}

#### `Событие переключателя` (Новичок) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*когда переключатель [элемент] переключено [включено / выключено]*: запускает скрипт, когда переключатель включают или выключают.

- Тип: блок события

#### `Значение переключателя (логическое)` (Новичок) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*переключатель [элемент] [включено / выключено]*: включён ли переключатель.

- Тип: блок значения, `истина` / `ложь`

### Блоки шагового переключателя {#stepper-blocks}

Эти блоки работают с шаговым и вертикальным шаговым переключателем.

#### `Событие шагового переключателя` (Новичок) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*когда шаговый переключатель [элемент] [любой / сброс / минус / плюс] является [нажата / отпущен]*: запускает скрипт, когда кнопку переключателя нажимают или отпускают (**любой** — любую из них).

- Тип: блок события

#### `Значение шагового переключателя (число)` (Новичок) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*шаговый переключатель [элемент]*: номер текущего шага.

- Тип: блок значения

## Джойстики и крестовины {#joysticks-and-d-pads}

### Блоки джойстика {#joystick-blocks}

#### `Событие джойстика` (Новичок) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*когда джойстик [элемент] является [вверх / вниз / влево / вправо / перемещён / отпущен]*: запускает скрипт, когда ручку отклоняют в одну из сторон, просто двигают или отпускают.

- Тип: блок события

#### `Значение джойстика (число)` (Новичок) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*джойстик [элемент] [ось X / ось Y]*: положение ручки по одной оси, от −100 до 100; в центре 0.

- Тип: блок значения

#### `Значение джойстика (логическое)` (Новичок) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*является джойстиком [элемент] [нажата / отпущен]*: касается ли палец джойстика.

- Тип: блок значения, `истина` / `ложь`

### Блоки крестовины {#d-pad-blocks}

#### `Событие крестовины` (Новичок) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*когда крестовина [элемент] [вверх / вниз / влево / вправо] кнопка [нажата / отпущен]*: запускает скрипт, когда кнопку крестовины нажимают или отпускают.

- Тип: блок события

#### `Значение крестовины (логическое)` (Новичок) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*крестовина [элемент] [вверх / вниз / влево / вправо] кнопка [нажата / отпущен]*: нажата ли кнопка крестовины прямо сейчас.

- Тип: блок значения, `истина` / `ложь`

## Слайдеры и ручки {#sliders-and-knobs}

### Блоки слайдера {#slider-blocks}

Эти блоки работают со слайдером и вертикальным слайдером.

#### `Событие слайдера` (Новичок) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*когда ползунок [элемент] является [низкий / высокий / перемещён / отпущен]*: запускает скрипт, когда ручка доходит до нижнего или верхнего края, движется или её отпускают.

- Тип: блок события

#### `Значение слайдера (число)` (Новичок) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*слайдер [элемент]*: положение ручки, от 0 до 100 или от −100 до 100 с параметром **Отрицательные значения**.

- Тип: блок значения

### Блоки поворотной ручки {#rotary-knob-blocks}

Блоки [поворотной ручки](/docs/Application/Dashboard/ControlTypes#rotary-knob) платных тем.

#### `Событие поворотной ручки` (Новичок) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*когда регулятор [элемент] [повёрнут / нажат / отпущен / повёрнут до минимума / повёрнут до максимума]*: запускает скрипт, когда ручку поворачивают, касаются, отпускают или когда она доходит до одного из краёв.

- Тип: блок события

#### `Значение поворотной ручки (число)` (Новичок) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*значение регулятора [элемент]*: положение ручки, от 0 до 100 или от −100 до 100 с параметром **Ноль в центре (-100..100)**.

- Тип: блок значения

#### `Состояние поворотной ручки (логическое)` (Новичок) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*регулятор [элемент] [нажат / на минимуме / на максимуме] ?*: касается ли палец ручки и не стоит ли она в крайнем положении.

- Тип: блок значения, `истина` / `ложь`

## Мониторы {#monitor-blocks}

Блоки [мониторов](/docs/Application/Dashboard/Indicators).

### `Показать на мониторе` (Новичок) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*показать [значение] на [элемент] монитор*: выводит текст или значение на **Монитор**.

- Тип: командный блок
- Пример: показать заряд батареи, угол мотора, устройство на порту хаба или название режима

### `Установить значение монитора` (Новичок) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*установить [значение] к [элемент] монитор*: задаёт значение **Уровня заряда батареи** или **Спидометра**.

- Тип: командный блок

### `Установить значение монитора наклона` (Новичок) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*установить [значение] к [элемент] [тангаж / крен] монитор*: задаёт тангаж или крен на **Мониторе наклона**.

- Тип: командный блок

## Руль и педали {#steering-wheel-and-pedals}

### Блоки руля {#steering-wheel-blocks}

Блоки [руля](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Событие руля` (Новичок) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*когда руль [элемент] является [перемещён / нажата / отпущен]*: запускает скрипт, когда руль поворачивается, когда его касаются или отпускают.

- Тип: блок события

#### `Значение руля (число)` (Новичок) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*руль [элемент]*: угол поворота, от −100 (до упора влево) до 100 (до упора вправо).

- Тип: блок значения

#### `Значение руля (логическое)` (Новичок) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*руль [элемент] [нажата / отпущен]*: касается ли палец руля.

- Тип: блок значения, `истина` / `ложь`

### Блоки педалей {#pedals-blocks}

Блоки [педалей](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Событие педалей` (Новичок) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*когда педали [элемент] [любой / тормоз / ускорение] является [перемещён / нажата / отпущен]*: запускает скрипт, когда педаль движется, её нажимают или отпускают.

- Тип: блок события

#### `Значение педалей (число)` (Новичок) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*педали [элемент] [ускорение / тормоз]*: насколько нажат газ или тормоз, от 0 до 100.

- Тип: блок значения

#### `Значение педалей (логическое)` (Новичок) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*педаль [элемент] [ускорение / тормоз] [нажата / отпущен]*: нажата ли педаль.

- Тип: блок значения, `истина` / `ложь`

## Другие специальные элементы {#other-special-controls}

Блоки остальных [специальных элементов](/docs/Application/Dashboard/SpecialControls).

### Блоки коробки передач {#gearbox-blocks}

Блоки [механической и автоматической коробки](/docs/Application/Dashboard/SpecialControls#gear-shifter). Значения передач: у механики −1 — R, 0 — N, 1…6 — передачи вперёд; у автомата −2 — P, −1 — R, 0 — N, 1 — D.

#### `Событие коробки передач` (Новичок) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*когда КПП [элемент] [переключает передачу / повышает передачу / понижает передачу / включает нейтраль / включает заднюю / включает паркинг]*: запускает скрипт, когда меняется передача. **Повышает** и **понижает** — переход к большему или меньшему значению.

- Тип: блок события

#### `Передача` (Новичок) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*передача [элемент]*: включённая передача (значения см. выше).

- Тип: блок значения

#### `Состояние коробки передач (логическое)` (Новичок) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*КПП [элемент] [на нейтрали / на задней / на передаче вперёд / на паркинге] ?*

- Тип: блок значения, `истина` / `ложь`
- **На передаче вперёд** — любая передача вперёд у механики и положение D у автомата

#### `Число передач` (Продвинутый) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*передачи [элемент]*: значение параметра **Число передач** коробки.

- Тип: блок значения
- Пример: гнездо *из* блока *ехать* категории «Симулятор»

### Блоки ручного тормоза {#handbrake-blocks}

Блоки [ручного тормоза](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Событие ручника` (Новичок) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*когда ручник [элемент] [тянут / зафиксирован / разблокирован / отпущен]*: запускает скрипт, когда рычаг тянут, фиксируют, снимают с фиксации или отпускают.

- Тип: блок события

#### `Сила ручника` (Новичок) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*сила ручника [элемент]*: насколько опущен рычаг, от 0 до 100.

- Тип: блок значения

#### `Состояние ручника (логическое)` (Новичок) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*ручник [элемент] [зафиксирован / разблокирован / тянут] ?* **Тянут** — истина, пока сила больше 0.

- Тип: блок значения, `истина` / `ложь`

### Блоки поворотников {#turn-signals-blocks}

Блоки [поворотников](/docs/Application/Dashboard/SpecialControls#turn-signals). Они видят ровное состояние поворотников, без мигания.

#### `Событие поворотников` (Новичок) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*когда поворотники [элемент] [левый поворот / правый поворот / свет] [включается / выключается]*

- Тип: блок события

#### `Состояние поворотников (логическое)` (Новичок) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*поворотники [элемент] [левый поворот / правый поворот / свет] включён ?*

- Тип: блок значения, `истина` / `ложь`

### Блоки контроллера машиниста {#train-controller-blocks}

Блоки [контроллера машиниста](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Событие контроллера машиниста` (Новичок) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*когда контроллер машиниста [элемент] [позиция изменилась / позиция повышена / позиция понижена / тяга снята / реверсор переключён / рукоять отпущена]*: **тяга снята** — рукоять вернулась на позицию 0.

- Тип: блок события

#### `Значение контроллера машиниста (число)` (Новичок) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*контроллер машиниста [элемент] [тяга / позиция / реверсор]*:

- **тяга**: от −100 до 100, позиция в процентах со знаком направления;
- **позиция**: от 0 до 8;
- **реверсор**: 1 — вперёд, 0 — нейтраль, −1 — назад.
- Тип: блок значения

#### `Состояние контроллера машиниста (логическое)` (Новичок) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*контроллер машиниста [элемент] [вперёд / назад / в нейтрали / на позиции 0] ?*

- Тип: блок значения, `истина` / `ложь`
