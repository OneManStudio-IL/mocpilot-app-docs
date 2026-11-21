---
id: Sensors
title: Sensores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensores {#sensors}

Los bloques de sensores leen el estado de tu teléfono o tableta, el temporizador del programa, los hubs y los sensores conectados a ellos. Usa sus valores en condiciones, eventos y cálculos.

En esta página:

- [Estado del hub](#hub-state): batería, voltaje, temperatura, corriente y modo de potencia
- [Botones, inclinación y orientación del hub](#hub-tilt-and-orientation)
- [Sensores en los puertos](#sensors-on-ports): cualquier dispositivo, sensor de color Technic, sensor de distancia Technic, sensor de color y distancia BOOST, sensores WeDo 2.0
- [Este dispositivo](#this-device): el teléfono, la tableta o el ordenador donde se ejecuta MOCPilot
- [Temporizador](#timer)

## Estado del hub {#hub-state}

Estos bloques no existen para los hubs Mould King, que no informan de ningún dato.

### `… % batería` (Principiante) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Devuelve el nivel de batería del hub, en porcentaje.

### `… voltaje de batería (V)` (Avanzado) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Devuelve el voltaje de la batería del hub, en voltios.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Devuelve `NaN` cuando el hub no está conectado.

### `… temperatura (C°)` (Avanzado) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Devuelve la temperatura de la electrónica del hub, en grados Celsius.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `obtener … voltaje de salida (V)` (Gurú) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Devuelve el voltaje que el hub suministra en ese momento a sus puertos, en voltios.

- Hubs: BuWizz 2.

### `… corriente (A)` (Gurú) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Devuelve la corriente consumida en el puerto seleccionado, en amperios.

- Hubs: BuWizz 2, BuWizz 3.

### `ajustar modo de energía …` (Technic Move Hub) (Principiante) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Ajusta el modo de potencia de un Technic Move Hub.

- Modos: `normal`, `impulso`
- Hubs: Technic Move Hub.

## Botones, inclinación y orientación del hub {#hub-tilt-and-orientation}

El bloque de botón indica con qué hubs funciona. Los bloques de inclinación y orientación funcionan en BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub y Robot Inventor.

### `está … … botón …` (Principiante) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Devuelve `true` cuando el botón seleccionado del hub está en el estado seleccionado.

- Estados: `presionado`, `liberado`
- Hubs: hubs LEGO Powered Up, WeDo 2.0 y Robot Inventor. La lista de botones depende del hub (normalmente `centro`).

### `… … ángulo` (Principiante) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Devuelve el ángulo de inclinación del hub.

- Ángulos: `inclinación`, `balanceo`, `guiñada`
- `guiñada` solo está disponible en el Technic Hub y el Robot Inventor.

### `… … acelerómetro (m/s²)` (Gurú) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Devuelve la lectura en bruto del acelerómetro del hub en un eje.

- Ejes: `x`, `y`, `z`

### `… … aceleración (m/s²)` (Gurú) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Devuelve la aceleración del hub en un eje.

- Ejes: `x`, `y`, `z`

### `obtener … orientación …` (Principiante) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Devuelve qué cara del hub queda hacia arriba.

- Salida: `texto` o `índice`
- Valores: `Delante`, `Arriba`, `Derecha`, `Atrás`, `Abajo`, `Izquierda`

### `… orientación …` (Principiante) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Devuelve `true` cuando la cara seleccionada del hub queda hacia arriba.

- Opciones: `Delante`, `Arriba`, `Derecha`, `Atrás`, `Abajo`, `Izquierda`

### `configurar … orientación de inclinación a …` (Avanzado) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Indica al hub cómo está montado en el modelo, para que la inclinación y la orientación se midan desde esa posición.

- Opciones: `Delante`, `Arriba`, `Derecha`, `Atrás`, `Abajo`, `Izquierda`

## Sensores en los puertos {#sensors-on-ports}

Los bloques de sensores Technic y BOOST de abajo funcionan en el City Hub, el Technic Hub, el BOOST Move Hub y el hub MINDSTORMS Robot Inventor (no en SBrick, BuWizz, WeDo 2.0 ni Mould King).

### Cualquier dispositivo en un puerto {#any-port-device}

#### `… tipo de dispositivo` (Principiante) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Devuelve el tipo del dispositivo conectado al puerto seleccionado.

- Hubs: todos los hubs con puertos excepto SBrick, SBrick Plus y BuWizz 2.
- Uso típico: comprobar qué hay conectado antes de ejecutar bloques específicos de un dispositivo.

### Sensor de color Technic {#technic-color-sensor}

#### Sensor Technic: `establecer modo en …` (Avanzado) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Cambia el sensor de color Technic al modo seleccionado.

- Modos: `predeterminado`, `ambiente`
- Cambiar el modo puede afectar al programa de formas inesperadas: en modo `ambiente`, el sensor no puede leer colores ni luz reflejada.

#### Sensor Technic: `color …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Devuelve el color que ve el sensor de color Technic.

- Salida: `valor` (un número) o `cadena` (el nombre del color)

#### Sensor Technic: `es color …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Devuelve `true` cuando el sensor de color Technic ve el color seleccionado.

#### Sensor Technic: `luz reflejada (%)` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Devuelve cuánta luz refleja la superficie hacia el sensor de color Technic, en porcentaje.

#### Sensor Technic: `luz reflejada …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Devuelve `true` cuando la luz reflejada cumple la comparación seleccionada con el valor.

- Comparación: `<`, `=`, `>`

#### Sensor Technic: `luz ambiental (%)` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Devuelve el brillo de la luz del entorno, en porcentaje.

#### Sensor Technic: `luz ambiental …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Devuelve `true` cuando la luz ambiental cumple la comparación seleccionada con el valor.

- Comparación: `<`, `=`, `>`

#### Sensor Technic: `valor crudo …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Devuelve el valor en bruto de un canal de color del sensor de color Technic.

- Canales: `rojo`, `verde`, `azul`

### Sensor de distancia Technic {#technic-distance-sensor}

#### Sensor Technic: `distancia …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Devuelve la distancia que mide el sensor de distancia Technic.

- Unidades: `mm`, `cm`, `pulgadas`, `%`

#### Sensor Technic: `está más cerca que / más lejos que / exactamente en …` (Principiante) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Devuelve `true` cuando la distancia que mide el sensor de distancia Technic cumple la condición.

- Comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `mm`, `cm`, `pulgadas`, `%`

### Sensor de color y distancia BOOST {#boost-color-and-distance-sensor}

#### Sensor BOOST: `color …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Devuelve el color que ve el sensor de color y distancia BOOST.

- Salida: `valor` (un número) o `cadena` (el nombre del color)

#### Sensor BOOST: `es color …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Devuelve `true` cuando el sensor BOOST ve el color seleccionado.

#### Sensor BOOST: `distancia …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Devuelve la distancia que mide el sensor de color y distancia BOOST.

- Unidades: `%`, `cm`, `pulgadas`

#### Sensor BOOST: `está más cerca que / más lejos que / exactamente en …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Devuelve `true` cuando la distancia que mide el sensor BOOST cumple la condición.

- Comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `%`, `cm`, `pulgadas`

#### Sensor BOOST: `luz reflejada (%)` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Devuelve cuánta luz refleja la superficie hacia el sensor BOOST, en porcentaje.

#### Sensor BOOST: `luz reflejada …` (Principiante) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Devuelve `true` cuando la luz reflejada cumple la comparación seleccionada con el valor.

- Comparación: `<`, `=`, `>`

### Sensores WeDo 2.0 {#wedo-2-sensors}

El sensor de movimiento y el sensor de inclinación WeDo 2.0, en el hub WeDo 2.0.

#### Sensor WeDo 2.0: `distancia …` (Principiante) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Devuelve la distancia que mide el sensor de movimiento WeDo 2.0.

- Unidades: `%`, `cm`, `pulgadas`
- Hubs: WeDo 2.0.

#### Sensor WeDo 2.0: `está más cerca que / más lejos que / exactamente en …` (Principiante) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Devuelve `true` cuando la distancia que mide el sensor de movimiento WeDo 2.0 cumple la condición.

- Comparación: `más cerca que`, `más lejos que`, `exactamente en`
- Unidades: `%`, `cm`, `pulgadas`
- Hubs: WeDo 2.0.

#### Sensor WeDo 2.0: `ángulo …` / `dirección como …` (Principiante) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Devuelve datos del sensor de inclinación WeDo 2.0: un ángulo de inclinación o la dirección hacia la que está inclinado.

- Ángulos: `inclinación`, `balanceo`
- Salida de dirección: `texto` o `número`; direcciones: `neutral`, `hacia adelante`, `hacia atrás`, `izquierda`, `derecha`, `desconocido`
- Hubs: WeDo 2.0.

## Este dispositivo {#this-device}

Estos bloques leen el teléfono, la tableta o el ordenador donde se ejecuta MOCPilot.

### `dispositivo % batería` (Principiante) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Devuelve el nivel de batería del dispositivo, en porcentaje.

### `dispositivo … ángulo` (Avanzado) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Devuelve el ángulo de inclinación del dispositivo.

- Ángulos: `inclinación`, `balanceo`, `guiñada`
- Uso típico: dirigir el modelo inclinando el teléfono.

### `dispositivo … acelerómetro (m/s²)` (Gurú) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Devuelve la lectura en bruto del acelerómetro del dispositivo en un eje, en m/s².

- Ejes: `x`, `y`, `z`

### `dispositivo … aceleración (m/s²)` (Gurú) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Devuelve la aceleración del dispositivo en un eje, en m/s².

- Ejes: `x`, `y`, `z`

## Temporizador {#timer}

### `temporizador` (Avanzado) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Devuelve el tiempo transcurrido desde que arrancó el programa o desde el último **restablecer temporizador**, en segundos.

### `restablecer temporizador` (Avanzado) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Pone el temporizador a cero.
