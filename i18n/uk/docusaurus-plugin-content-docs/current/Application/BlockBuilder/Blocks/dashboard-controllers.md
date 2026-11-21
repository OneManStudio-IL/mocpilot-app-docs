---
id: DashboardControllers
title: Наекранні контролери
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Наекранні контролери {#dashboard-controllers}

Ці блоки зчитують елементи керування на панелі, реагують, коли ви ними користуєтеся, і змінюють їхній вигляд. Вони містяться в категорії **Наекранні контролери**, яка з’являється, щойно на панелі є хоч один елемент. Кожен тип елемента додає власні блоки; у блоці елемент вибирається за назвою, наприклад *BTN1* або *GEAR1*.

Діапазони нижче: більшість аналогових значень змінюються від 0 до 100 або від −100 до 100, коли нуль посередині.

На цій сторінці:

- [Блоки для всіх елементів](#blocks-for-all-controls): колір, інтерактивність і звуки
- [Кнопки й перемикачі](#buttons-and-switches): кнопка, перемикач, кроковий перемикач
- [Джойстики й хрестовини](#joysticks-and-d-pads)
- [Повзунки й регулятори](#sliders-and-knobs): повзунок, поворотний регулятор
- [Монітори](#monitor-blocks)
- [Кермо й педалі](#steering-wheel-and-pedals)
- [Інші спеціальні контролери](#other-special-controls): коробка передач, ручник, поворотники, контролер машиніста

## Блоки для всіх елементів {#blocks-for-all-controls}

### `Колір контролера` (Просунутий) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*налаштувати [елемент] колір до [колір]*: змінює акцентний колір елемента.

- Тип: блок-команда
- Працює з елементами, що мають акцентний колір (не з кермом і не з педалями)
- Для чого: показати стан, наприклад кнопка стає червоною, коли батарея розряджається

### `Інтерактивність контролера` (Просунутий) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[увімкнути / вимкнути] [елемент] інтерактивність*: вимкнений елемент не реагує на дотики.

- Тип: блок-команда
- Для чого: тимчасово заблокувати елемент, наприклад газ, доки не завершиться перевірка під час запуску

### `Звук елемента` (Початківець) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*звук [звук] у [елемент]*: один зі звуків елемента для блоків *відтворення звуку* з категорії **Звуки**.

- Тип: блок-значення
- З’являється, коли на панелі є елемент зі звуками: [кермо](/docs/Application/Dashboard/SpecialControls#steering-wheel) (клаксони легковика, вантажівки й спорткара) або [педалі](/docs/Application/Dashboard/SpecialControls#pedals) (гальма легковика, спорткара й вантажівки, сигнал заднього ходу)
- Звук відтворюється, лише якщо в елемента ввімкнено налаштування **Звукові ефекти** і звук застосунку

## Кнопки й перемикачі {#buttons-and-switches}

### Блоки кнопки {#button-blocks}

#### `Подія кнопки` (Початківець) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*коли кнопка [елемент] є [натиснута / відпущена]*: запускає скрипт, коли кнопку натиснуто або відпущено.

- Тип: блок події

#### `Стан кнопки (boolean)` (Початківець) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*кнопка [елемент] [натиснута / відпущена]*: чи натиснута кнопка зараз.

- Тип: блок-значення, `true` / `false`

### Блоки перемикача {#switch-blocks}

#### `Подія перемикача` (Початківець) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*коли перемикач [елемент] перемкнуто [увімкнено / вимкнено]*: запускає скрипт, коли перемикач вмикають або вимикають.

- Тип: блок події

#### `Стан перемикача (boolean)` (Початківець) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*перемикач [елемент] [увімкнено / вимкнено]*: чи ввімкнено перемикач.

- Тип: блок-значення, `true` / `false`

### Блоки крокового перемикача {#stepper-blocks}

Ці блоки працюють із кроковим перемикачем і вертикальним кроковим перемикачем.

#### `Подія крокового перемикача` (Початківець) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*коли кроковий вимикач [елемент] [будь-який / скинути / мінус / плюс] є [натиснута / відпущена]*: запускає скрипт, коли кнопку крокового перемикача натиснуто або відпущено (**будь-який** означає будь-яку з них).

- Тип: блок події

#### `Значення крокового перемикача (float)` (Початківець) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*кроковий перемикач [елемент]*: номер поточного кроку.

- Тип: блок-значення

## Джойстики й хрестовини {#joysticks-and-d-pads}

### Блоки джойстика {#joystick-blocks}

#### `Подія джойстика` (Початківець) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*коли джойстик [елемент] є [вгору / вниз / вліво / вправо / переміщено / відпущена]*: запускає скрипт, коли стік відхилено в певному напрямку, взагалі зрушено або відпущено.

- Тип: блок події

#### `Значення джойстика (float)` (Початківець) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*джойстик [елемент] [вісь X / вісь Y]*: положення стіка на одній осі, від −100 до 100; центр — 0.

- Тип: блок-значення

#### `Стан джойстика (boolean)` (Початківець) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*є джойстиком [елемент] [натиснута / відпущена]*: чи лежить палець на джойстику.

- Тип: блок-значення, `true` / `false`

### Блоки хрестовини {#d-pad-blocks}

#### `Подія хрестовини` (Початківець) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*коли хрестовина [елемент] [вгору / вниз / вліво / вправо] кнопка [натиснута / відпущена]*: запускає скрипт, коли кнопку хрестовини натиснуто або відпущено.

- Тип: блок події

#### `Стан хрестовини (boolean)` (Початківець) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*хрестовина [елемент] [вгору / вниз / вліво / вправо] кнопка [натиснута / відпущена]*: чи натиснута кнопка хрестовини зараз.

- Тип: блок-значення, `true` / `false`

## Повзунки й регулятори {#sliders-and-knobs}

### Блоки повзунка {#slider-blocks}

Ці блоки працюють із повзунком і вертикальним повзунком.

#### `Подія повзунка` (Початківець) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*коли повзунок [елемент] є [низький / високий / переміщено / відпущена]*: запускає скрипт, коли повзунок доходить до нижнього чи верхнього краю, рухається або його відпускають.

- Тип: блок події

#### `Значення повзунка (float)` (Початківець) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*слайдер [елемент]*: положення повзунка від 0 до 100 або від −100 до 100 з увімкненим **Від’ємні значення**.

- Тип: блок-значення

### Блоки поворотного регулятора {#rotary-knob-blocks}

Блоки [поворотного регулятора](/docs/Application/Dashboard/ControlTypes#rotary-knob) з платних тем.

#### `Подія регулятора` (Початківець) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*коли регулятор [елемент] є [повернуто / натиснута / відпущена / повернуто до мінімуму / повернуто до максимуму]*: запускає скрипт, коли регулятор повертають, торкаються його, відпускають або він доходить до одного з крайніх положень.

- Тип: блок події

#### `Значення регулятора (float)` (Початківець) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*значення регулятора [елемент]*: положення регулятора від 0 до 100 або від −100 до 100 з увімкненим **Нуль у центрі (-100..100)**.

- Тип: блок-значення

#### `Стан регулятора (boolean)` (Початківець) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*регулятор [елемент] [натиснута / на мінімумі / на максимумі] ?*: чи лежить палець на регуляторі або чи перебуває він в одному з крайніх положень.

- Тип: блок-значення, `true` / `false`

## Монітори {#monitor-blocks}

Блоки [моніторів](/docs/Application/Dashboard/Indicators).

### `Показ на моніторі` (Початківець) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*показати [значення] на [елемент] монітор*: показує текст або значення на **Монітор**.

- Тип: блок-команда
- Для чого: показати рівень батареї, кут мотора, пристрій на порту хаба або назву режиму

### `Значення монітора` (Початківець) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*налаштувати [значення] до [елемент] монітор*: задає значення монітора **Рівень батареї** або **Спідометр**.

- Тип: блок-команда

### `Значення монітора нахилу` (Початківець) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*налаштувати [значення] до [елемент] [тангаж / крен] монітор*: задає тангаж або крен, що показує **Монітор нахилу**.

- Тип: блок-команда

## Кермо й педалі {#steering-wheel-and-pedals}

### Блоки керма {#steering-wheel-blocks}

Блоки [керма](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Подія керма` (Початківець) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*коли кермо [елемент] є [переміщено / натиснута / відпущена]*: запускає скрипт, коли кермо повертається або коли ви його торкаєтеся чи відпускаєте.

- Тип: блок події

#### `Значення керма (float)` (Початківець) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*кермо [елемент]*: кут повороту керма від −100 (до упору вліво) до 100 (до упору вправо).

- Тип: блок-значення

#### `Стан керма (boolean)` (Початківець) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*кермо [елемент] [натиснута / відпущена]*: чи лежить палець на кермі.

- Тип: блок-значення, `true` / `false`

### Блоки педалей {#pedals-blocks}

Блоки [педалей](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Подія педалей` (Початківець) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*коли педалі [елемент] [будь-який / гальмо / прискорення] є [переміщено / натиснута / відпущена]*: запускає скрипт, коли педаль рухається, натискається або відпускається.

- Тип: блок події

#### `Значення педалей (float)` (Початківець) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*педалі [елемент] [прискорення / гальмо]*: наскільки натиснуто газ або гальмо, від 0 до 100.

- Тип: блок-значення

#### `Стан педалі (boolean)` (Початківець) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*педаль [елемент] [прискорення / гальмо] [натиснута / відпущена]*: чи натиснуто педаль.

- Тип: блок-значення, `true` / `false`

## Інші спеціальні контролери {#other-special-controls}

Блоки інших [спеціальних контролерів](/docs/Application/Dashboard/SpecialControls).

### Блоки коробки передач {#gearbox-blocks}

Блоки [механічної та автоматичної коробок передач](/docs/Application/Dashboard/SpecialControls#gear-shifter). Значення передач: механічна −1 = R, 0 = N, 1…6 = передачі вперед; автоматична −2 = P, −1 = R, 0 = N, 1 = D.

#### `Подія коробки передач` (Початківець) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*коли КПП [елемент] [перемикає передачу / підвищує передачу / знижує передачу / вмикає нейтраль / вмикає задню / вмикає паркінг]*: запускає скрипт, коли змінюється передача. **Підвищує передачу** і **знижує передачу** означають перехід до більшого або меншого значення.

- Тип: блок події

#### `Передача` (Початківець) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*передача [елемент]*: увімкнена передача (див. значення вище).

- Тип: блок-значення

#### `Стан коробки передач (boolean)` (Початківець) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*КПП [елемент] [на нейтралі / на задній / на передачі вперед / на паркінгу] ?*

- Тип: блок-значення, `true` / `false`
- **На передачі вперед** істинне на будь-якій передачі вперед механічної коробки та в D автоматичної

#### `Кількість передач` (Просунутий) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*передачі [елемент]*: налаштування коробки **Кількість передач**.

- Тип: блок-значення
- Для чого: поле *з* блока *їхати* Симулятора

### Блоки ручника {#handbrake-blocks}

Блоки [ручника](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Подія ручника` (Початківець) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*коли ручник [елемент] [тягнуть / зафіксовано / розблоковано / відпущено]*: запускає скрипт, коли важіль тягнуть, фіксують, розблоковують або відпускають.

- Тип: блок події

#### `Сила ручника` (Початківець) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*сила ручника [елемент]*: наскільки витягнуто важіль, від 0 до 100.

- Тип: блок-значення

#### `Стан ручника (boolean)` (Початківець) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*ручник [елемент] [зафіксовано / розблоковано / тягнуть] ?* **Тягнуть** істинне, поки сила більша за 0.

- Тип: блок-значення, `true` / `false`

### Блоки поворотників {#turn-signals-blocks}

Блоки [поворотників](/docs/Application/Dashboard/SpecialControls#turn-signals). Вони бачать постійний стан сигналів, без блимання.

#### `Подія поворотників` (Початківець) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*коли поворотники [елемент] [лівий поворот / правий поворот / світло] [вмикається / вимикається]*

- Тип: блок події

#### `Стан поворотників (boolean)` (Початківець) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*поворотники [елемент] [лівий поворот / правий поворот / світло] увімкнено ?*

- Тип: блок-значення, `true` / `false`

### Блоки контролера машиніста {#train-controller-blocks}

Блоки [контролера машиніста](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Подія контролера машиніста` (Початківець) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*коли контролер машиніста [елемент] [позиція змінилася / позицію підвищено / позицію знижено / тягу знято / реверсор перемкнено / рукоятку відпущено]*: **Тягу знято** означає, що рукоятка повернулася на позицію 0.

- Тип: блок події

#### `Значення контролера машиніста (float)` (Початківець) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*контролер машиніста [елемент] [тяга / позиція / реверсор]*:

- **тяга**: від −100 до 100, позиція у відсотках зі знаком напрямку;
- **позиція**: від 0 до 8;
- **реверсор**: 1 = вперед, 0 = нейтраль, −1 = назад.
- Тип: блок-значення

#### `Стан контролера машиніста (boolean)` (Початківець) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*контролер машиніста [елемент] [вперед / на задній / на нейтралі / на позиції 0] ?*

- Тип: блок-значення, `true` / `false`
