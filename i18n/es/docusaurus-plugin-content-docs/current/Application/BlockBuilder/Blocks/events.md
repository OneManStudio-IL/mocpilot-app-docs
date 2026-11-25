---
id: Events
title: Eventos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventos {#events}

La categoría **Eventos** contiene los bloques que inician scripts cuando ocurre algo, además de los bloques que envían mensajes entre scripts. Usa **Agregar mensaje** y **Eliminar mensaje** en la parte superior de la categoría para gestionar los mensajes.

## Eventos básicos {#core-events}

### `cuando el programa comienza` (Principiante) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Ejecuta su script una vez, cuando arranca el programa.

- Uso típico: fijar los valores iniciales de las variables, poner los motores en su estado inicial, mostrar un mensaje de «listo».

### `cuando …` (Avanzado) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Ejecuta su script cuando la condición del campo pasa de falsa a verdadera. Mientras el script se ejecuta, el bloque espera; vuelve a dispararse solo después de que la condición haya pasado a falsa y otra vez a verdadera.

- Uso típico: reaccionar a un estado, por ejemplo `cuando el temporizador > 5 y el interruptor está activado`.

### `cuando el temporizador > …` (Avanzado) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Ejecuta su script cuando el temporizador del programa supera el valor (en segundos).

- Uso típico: acciones retardadas, fases temporizadas. Reinicia el temporizador con **restablecer temporizador** (Sensores).

### `cuando reciba …` (Gurú) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Ejecuta su script cuando se transmite el mensaje seleccionado.

- Uso típico: coordinar varios scripts.

### `transmitir …` (Gurú) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envía un mensaje a todos los scripts que empiezan con **cuando reciba** para ese mensaje y continúa de inmediato.

- Uso típico: indicar a otros scripts que empiecen sin esperarlos.

### `transmitir … y esperar` (Gurú) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envía un mensaje y pausa este script hasta que todos los scripts que lo recibieron hayan terminado.

- Uso típico: secuencias paso a paso en las que importa el orden.

## Eventos del hub {#hub-events}

Estos bloques aparecen cuando algún hub del perfil los admite. No existen para los hubs Mould King.

### `cuando … … botón …` (Principiante) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Se ejecuta cuando se pulsa o se suelta un botón del hub.

- Opciones de estado: `presionado`, `liberado`, `cambiado`
- Hubs: hubs LEGO Powered Up, WeDo 2.0 y Robot Inventor. La lista de botones depende del hub.

### `cuando … está conectado / desconectado` (Principiante) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Se ejecuta cuando el hub se conecta o se desconecta.

- Uso típico: detener el modelo de forma segura cuando se pierde la conexión y restaurar su estado cuando vuelve.

### `cuando … % batería cambiada` (Principiante) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Se ejecuta cuando cambia el nivel de batería que informa el hub.

- Hubs: los que informan de su nivel de batería.
- Uso típico: un aviso de batería baja, el cambio a un modo de ahorro de energía.

### `cuando … los datos del acelerómetro han cambiado` (Gurú) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Se ejecuta cuando cambian los valores del acelerómetro del hub.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `cuando … inclinación … el ángulo ha cambiado` (Principiante) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Se ejecuta cuando cambia el ángulo de inclinación del hub.

- Opciones de ángulo: `cualquiera`, `cabeceo`, `balanceo`, `guiñada`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `guiñada` solo está disponible en el Technic Hub y el Robot Inventor.

### `cuando … la orientación ha cambiado` (Principiante) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Se ejecuta cuando cambia la orientación del hub, es decir, cuando otra cara del hub queda hacia arriba.

- Hubs: los mismos que para el evento de inclinación.

## Eventos de sensores {#sensor-events}

Estos eventos leen un sensor conectado a un puerto del hub. Hubs: City Hub, Technic Hub, BOOST Move Hub y el hub MINDSTORMS Robot Inventor (no SBrick, BuWizz, WeDo 2.0 ni Mould King).

### Sensor Technic: `cuando el color es …` (Principiante) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Se ejecuta cuando el sensor de color Technic ve el color seleccionado.

### Sensor Technic: `cuando … más cerca que / más lejos que / exactamente en …` (Principiante) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Se ejecuta cuando la distancia que mide el sensor de distancia Technic cumple la condición.

- Opciones de comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `mm`, `cm`, `pulgadas`, `%`

### Sensor BOOST: `cuando … más cerca que / más lejos que / exactamente en …` (Principiante) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Se ejecuta cuando la distancia que mide el sensor de color y distancia BOOST cumple la condición.

- Opciones de comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `%`, `cm`, `pulgadas`

### Sensor BOOST: `cuando el color es …` (Principiante) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Se ejecuta cuando el sensor de color y distancia BOOST ve el color seleccionado.

## Eventos de Robot Inventor {#robot-inventor-events}

Estos eventos vienen de la app Robot Inventor y solo funcionan con los [hubs MINDSTORMS Robot Inventor y SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Llevan el icono del hub. Los valores correspondientes están en la página [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `cuando el hub esté …` (Principiante) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Se ejecuta una vez cada vez que el hub está `tocado`, `tocado dos veces`, `agitado` (predeterminado) o `cayendo`.

### `cuando … esté arriba` (Principiante) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Se ejecuta cuando el lado elegido del hub queda mirando hacia arriba: `frontal` (la matriz de luces, predeterminado), `superior`, `lado derecho`, `trasera`, `inferior` o `lado izquierdo`.

### `cuando el hub esté inclinado …` (Avanzado) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Se ejecuta cuando el hub se inclina `hacia arriba`, `hacia abajo`, `a la izquierda`, `a la derecha` o en `cualquiera` de las direcciones (predeterminado), unos 12° o más.

### `cuando … presionado / presionado fuerte / liberado` (Principiante) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Se ejecuta cuando el sensor de fuerza del puerto seleccionado se presiona, se presiona fuerte (más de 5 newtons) o se suelta.

### `cuando el hub reciba la señal …` (Gurú) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Se ejecuta cuando este hub recibe de otro hub la señal de radio con este nombre. Lee su valor con [señal recibida … valor](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
