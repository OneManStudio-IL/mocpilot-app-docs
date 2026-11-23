---
id: DashboardControllers
title: Controladores en pantalla
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controladores en pantalla {#dashboard-controllers}

Estos bloques leen los controles del panel, reaccionan cuando los usas y cambian su aspecto. Están en la categoría **Controladores en pantalla**, que aparece en cuanto el panel tiene un control. Cada tipo de control añade sus propios bloques; en un bloque eliges el control por su nombre, como *BTN1* o *GEAR1*.

Rangos usados a continuación: la mayoría de los valores analógicos van de 0 a 100, o de −100 a 100 cuando el cero está en el medio.

En esta página:

- [Bloques para todos los controles](#blocks-for-all-controls): color, interactividad y sonidos
- [Botones e interruptores](#buttons-and-switches): botón, interruptor, interruptor de paso
- [Joysticks y pads direccionales](#joysticks-and-d-pads)
- [Deslizadores y mandos giratorios](#sliders-and-knobs): deslizador, mando giratorio
- [Monitores](#monitor-blocks)
- [Volante y pedales](#steering-wheel-and-pedals)
- [Otros controles especiales](#other-special-controls): caja de cambios, freno de mano, intermitentes, caja de transferencia, controlador de tren

## Bloques para todos los controles {#blocks-for-all-controls}

### `Color del control` (Avanzado) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*configurar [control] color a [color]*: cambia el color de acento de un control.

- Tipo: bloque de comando
- Funciona con los controles que tienen color de acento (no con el volante ni con los pedales)
- Uso típico: mostrar un estado, por ejemplo un botón que se pone rojo cuando la batería está baja

### `Interactividad del control` (Avanzado) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[habilitar / deshabilitar] [control] interactividad*: un control deshabilitado no reacciona a los toques.

- Tipo: bloque de comando
- Uso típico: bloquear un control durante un tiempo, por ejemplo el acelerador hasta que termine una comprobación inicial

### `Sonido de un control` (Principiante) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*sonido [sonido] de [control]*: uno de los sonidos de un control, para los bloques de reproducir sonido de la categoría **Sonidos**.

- Tipo: bloque de valor
- Aparece cuando el panel tiene un control con sonidos: el [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel) (bocinas de coche, camión y deportivo) o los [pedales](/docs/Application/Dashboard/SpecialControls#pedals) (frenos de coche, deportivo y camión, avisador de marcha atrás)
- El sonido solo se reproduce si están activados el ajuste **Efectos de sonido** del control y el sonido de la app

## Botones e interruptores {#buttons-and-switches}

### Bloques de botón {#button-blocks}

#### `Evento de botón` (Principiante) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*cuando el botón [control] está [presionado / liberado]*: ejecuta el script cuando se pulsa o se suelta el botón.

- Tipo: bloque de evento

#### `Valor del botón (booleano)` (Principiante) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*botón [control] [presionado / liberado]*: si el botón está pulsado o suelto en este momento.

- Tipo: bloque de valor, `true` / `false`

### Bloques de interruptor {#switch-blocks}

#### `Evento de interruptor` (Principiante) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*cuando interruptor [control] está alternado [activado / apagado]*: ejecuta el script cuando el interruptor se enciende o se apaga.

- Tipo: bloque de evento

#### `Valor del interruptor (booleano)` (Principiante) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*interruptor [control] [activado / apagado]*: si el interruptor está encendido o apagado.

- Tipo: bloque de valor, `true` / `false`

### Bloques de interruptor de paso {#stepper-blocks}

Estos bloques funcionan con el interruptor de paso y el interruptor de paso vertical.

#### `Evento del interruptor de paso` (Principiante) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*cuando el interruptor de paso [control] [cualquiera / restablecer / menos / más] está [presionado / liberado]*: ejecuta el script cuando se pulsa o se suelta un botón del interruptor de paso (**cualquiera** significa cualquiera de ellos).

- Tipo: bloque de evento

#### `Valor del interruptor de paso (número)` (Principiante) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*interruptor de paso [control]*: el número del paso actual.

- Tipo: bloque de valor

## Joysticks y pads direccionales {#joysticks-and-d-pads}

### Bloques de joystick {#joystick-blocks}

#### `Evento de joystick` (Principiante) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*cuando el joystick [control] está [arriba / abajo / izquierda / derecha / movido / liberado]*: ejecuta el script cuando el stick se empuja en una dirección, se mueve o se suelta.

- Tipo: bloque de evento

#### `Valor del joystick (número)` (Principiante) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [control] [eje X / eje Y]*: la posición del stick en un eje, de −100 a 100; el centro es 0.

- Tipo: bloque de valor

#### `Valor del joystick (booleano)` (Principiante) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*es joystick [control] [presionado / liberado]*: si hay un dedo sobre el joystick.

- Tipo: bloque de valor, `true` / `false`

### Bloques de pad direccional {#d-pad-blocks}

#### `Evento del pad direccional` (Principiante) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*cuando el D-pad [control] [arriba / abajo / izquierda / derecha] botón [presionado / liberado]*: ejecuta el script cuando se pulsa o se suelta un botón del pad direccional.

- Tipo: bloque de evento

#### `Valor del pad direccional (booleano)` (Principiante) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*pad direccional [control] [arriba / abajo / izquierda / derecha] botón [presionado / liberado]*: si un botón del pad direccional está pulsado o suelto en este momento.

- Tipo: bloque de valor, `true` / `false`

## Deslizadores y mandos giratorios {#sliders-and-knobs}

### Bloques de deslizador {#slider-blocks}

Estos bloques funcionan con el deslizador y el deslizador vertical.

#### `Evento de deslizador` (Principiante) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*cuando el control deslizante [control] está [bajo / alto / movido / liberado]*: ejecuta el script cuando el tirador llega al extremo inferior o superior, se mueve o se suelta.

- Tipo: bloque de evento

#### `Valor del deslizador (número)` (Principiante) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*deslizador [control]*: la posición del tirador, de 0 a 100, o de −100 a 100 con **Valores negativos**.

- Tipo: bloque de valor

### Bloques de mando giratorio {#rotary-knob-blocks}

Bloques del [mando giratorio](/docs/Application/Dashboard/ControlTypes#rotary-knob) de los temas de pago.

#### `Evento del mando giratorio` (Principiante) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*cuando mando giratorio [control] está [girado / presionado / liberado / girado al mínimo / girado al máximo]*: ejecuta el script cuando el mando se gira, se toca, se suelta o llega a uno de sus extremos.

- Tipo: bloque de evento

#### `Valor del mando giratorio (número)` (Principiante) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*valor del mando giratorio [control]*: la posición del mando, de 0 a 100, o de −100 a 100 con **Cero en el centro (-100..100)**.

- Tipo: bloque de valor

#### `Valor del mando giratorio (booleano)` (Principiante) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*mando giratorio [control] [presionado / al mínimo / al máximo] ?*: si hay un dedo sobre el mando o si el mando está en uno de sus extremos.

- Tipo: bloque de valor, `true` / `false`

## Monitores {#monitor-blocks}

Bloques de los [monitores](/docs/Application/Dashboard/Indicators).

### `Mostrar en el monitor` (Principiante) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*mostrar [valor] en [control] monitor*: muestra un texto o un valor en un **Monitor**.

- Tipo: bloque de comando
- Uso típico: mostrar el nivel de batería, el ángulo de un motor, el dispositivo conectado a un puerto del hub o el nombre de un modo

### `Fijar valor del monitor` (Principiante) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*configurar [valor] a [control] monitor*: fija el valor de un monitor **Nivel de batería** o **Velocímetro**.

- Tipo: bloque de comando

### `Fijar valor del monitor de inclinación` (Principiante) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*configurar [valor] a [control] [inclinación / balanceo] monitor*: fija el cabeceo o el balanceo que muestra un **Monitor de inclinación**.

- Tipo: bloque de comando

## Volante y pedales {#steering-wheel-and-pedals}

### Bloques de volante {#steering-wheel-blocks}

Bloques del [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Evento del volante` (Principiante) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*cuando el volante [control] está [movido / presionado / liberado]*: ejecuta el script cuando el volante gira, o cuando lo tocas o lo sueltas.

- Tipo: bloque de evento

#### `Valor del volante (número)` (Principiante) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volante [control]*: el ángulo de dirección, de −100 (todo a la izquierda) a 100 (todo a la derecha).

- Tipo: bloque de valor

#### `Valor del volante (booleano)` (Principiante) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volante [control] [presionado / liberado]*: si hay un dedo sobre el volante.

- Tipo: bloque de valor, `true` / `false`

### Bloques de pedales {#pedals-blocks}

Bloques de los [pedales](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Evento de los pedales` (Principiante) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*cuando los pedales [control] [cualquiera / freno / aceleración] está [movido / presionado / liberado]*: ejecuta el script cuando un pedal se mueve, se pisa o se suelta.

- Tipo: bloque de evento

#### `Valor de los pedales (número)` (Principiante) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedales [control] [aceleración / freno]*: cuánto se pisa el acelerador o el freno, de 0 a 100.

- Tipo: bloque de valor

#### `Valor de los pedales (booleano)` (Principiante) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedal [control] [aceleración / freno] [presionado / liberado]*: si un pedal está pisado.

- Tipo: bloque de valor, `true` / `false`

## Otros controles especiales {#other-special-controls}

Bloques de los demás [controles especiales](/docs/Application/Dashboard/SpecialControls).

### Bloques de caja de cambios {#gearbox-blocks}

Bloques de las [cajas de cambios manual y automática](/docs/Application/Dashboard/SpecialControls#gear-shifter). Valores de marcha: manual −1 = R, 0 = N, 1…6 = marchas hacia delante; automática −2 = P, −1 = R, 0 = N, 1 = D.

#### `Evento de la caja de cambios` (Principiante) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*cuando caja de cambios [control] [cambia de marcha / sube de marcha / baja de marcha / pasa a punto muerto / mete la marcha atrás / pone parking]*: ejecuta el script cuando cambia la marcha. **Sube de marcha** y **baja de marcha** significan pasar a un valor más alto o más bajo.

- Tipo: bloque de evento

#### `Marcha` (Principiante) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*marcha [control]*: la marcha engranada (consulta los valores de arriba).

- Tipo: bloque de valor

#### `Estado de la caja de cambios (booleano)` (Principiante) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*caja de cambios [control] [en punto muerto / en marcha atrás / en una marcha adelante / en parking] ?*

- Tipo: bloque de valor, `true` / `false`
- **En una marcha adelante** es verdadero en cualquier marcha hacia delante de la caja manual y en D de la automática

#### `Número de marchas` (Avanzado) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*marchas de [control]*: el ajuste **Número de marchas** de la caja de cambios.

- Tipo: bloque de valor
- Uso típico: el campo *de* del bloque *conducir* del Simulador

### Bloques de freno de mano {#handbrake-blocks}

Bloques del [freno de mano](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Evento del freno de mano` (Principiante) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*cuando freno de mano [control] está [tirado / bloqueado / desbloqueado / liberado]*: ejecuta el script cuando se tira de la palanca, se bloquea, se desbloquea o se suelta.

- Tipo: bloque de evento

#### `Fuerza del freno de mano` (Principiante) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*fuerza del freno de mano [control]*: cuánto se tira de la palanca, de 0 a 100.

- Tipo: bloque de valor

#### `Estado del freno de mano (booleano)` (Principiante) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*freno de mano [control] [bloqueado / desbloqueado / tirado] ?* **Tirado** es verdadero mientras la fuerza es mayor que 0.

- Tipo: bloque de valor, `true` / `false`

### Bloques de intermitentes {#turn-signals-blocks}

Bloques de los [intermitentes](/docs/Application/Dashboard/SpecialControls#turn-signals). Ven el estado fijo de los intermitentes, sin el parpadeo.

#### `Evento de los intermitentes` (Principiante) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*cuando intermitentes [control] [intermitente izquierdo / intermitente derecho / luz] [se enciende / se apaga]*

- Tipo: bloque de evento

#### `Estado de los intermitentes (booleano)` (Principiante) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*intermitentes [control] [intermitente izquierdo / intermitente derecho / luz] está encendido ?*

- Tipo: bloque de valor, `true` / `false`

### Bloques de la caja de transferencia {#transfer-case-blocks}

Bloques de la [caja de transferencia](/docs/Application/Dashboard/SpecialControls#transfer-case). La segunda lista de los bloques de evento y de estado ofrece las mismas opciones:

- **2H**, **4H**, **N**, **4L**: el selector está en esa posición;
- **tracción total**: el selector está en 4H o 4L;
- **reductora**: el selector está en 4L;
- **bloqueo delantero**, **bloqueo central**, **bloqueo trasero**: el bloqueo del diferencial está activado.

#### `Evento de la caja de transferencia` (Principiante) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*cuando caja de transferencia [control] [2H / 4H / N / 4L / tracción total / reductora / bloqueo delantero / bloqueo central / bloqueo trasero] [se activa / se desactiva]*: **se activa** se ejecuta cuando la opción pasa a ser verdadera (el selector llega a la posición o se activa el bloqueo), y **se desactiva**, cuando deja de serlo.

- Tipo: bloque de evento

#### `Estado de la caja de transferencia (booleano)` (Principiante) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*caja de transferencia [control] [2H / 4H / N / 4L / tracción total / reductora / bloqueo delantero / bloqueo central / bloqueo trasero] está activado ?*

- Tipo: bloque de valor, `true` / `false`

#### `Posición de la caja de transferencia (número)` (Principiante) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*posición de la caja de transferencia [control]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Conéctalo al hueco *caja de transferencia* del bloque [conducir](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) para que el simulador use la caja de transferencia.

- Tipo: bloque de valor

### Bloques del controlador de tren {#train-controller-blocks}

Bloques del [controlador de tren](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Evento del controlador de tren` (Principiante) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*cuando controlador de tren [control] [posición cambiada / posición subida / posición bajada / acelerador cerrado / inversor movido / palanca soltada]*: **Acelerador cerrado** significa que la palanca ha vuelto a la posición 0.

- Tipo: bloque de evento

#### `Valor del controlador de tren (número)` (Principiante) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*controlador de tren [control] [tracción / posición de tracción / inversor]*:

- **tracción**: de −100 a 100, la posición como porcentaje con el signo del sentido;
- **posición de tracción**: de 0 a 8;
- **inversor**: 1 = adelante, 0 = punto muerto, −1 = marcha atrás.
- Tipo: bloque de valor

#### `Estado del controlador de tren (booleano)` (Principiante) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*controlador de tren [control] [hacia adelante / en marcha atrás / en punto muerto / en posición 0] ?*

- Tipo: bloque de valor, `true` / `false`
