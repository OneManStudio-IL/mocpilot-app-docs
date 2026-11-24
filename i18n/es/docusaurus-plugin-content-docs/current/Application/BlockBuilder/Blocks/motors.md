---
id: Motors
title: Motores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motores {#motors}

Los bloques de motores arrancan, detienen y posicionan los motores conectados a los puertos del hub, y ajustan cómo se mueven. La categoría aparece cuando algún hub del perfil tiene puertos para motores. En cada bloque eliges el hub y uno o varios puertos.

Algunos bloques necesitan un motor con sensor de giro integrado (encoder), como los motores angulares Technic, y un hub capaz de controlarlo. Estos bloques están marcados como «motores con encoder». No están disponibles para los hubs SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 y Mould King. El Technic Move Hub tiene su propio conjunto de bloques al final de esta página.

## Mover motores {#running-motors}

### `establecer velocidad a …` (Avanzado) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Fija la velocidad (de −100 a 100 %) que usan **iniciar motor** y **ejecutar … durante** en estos puertos. Este bloque no arranca el motor por sí solo.

### `iniciar motor …` (Principiante) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Arranca el motor en el sentido elegido a la velocidad fijada con **establecer velocidad a**.

- Sentido: horario o antihorario

### `iniciar motor en … % velocidad` (Principiante) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Arranca el motor a la velocidad indicada, de −100 a 100 %. Una velocidad negativa lo hace girar en el otro sentido.

- Uso típico: conducir con un joystick o un deslizador: pon el valor del control en el campo de velocidad.

### `detener motor` (Principiante) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Detiene el motor.

### `ejecutar … durante …` (Avanzado) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Hace girar el motor en el sentido elegido un número de rotaciones, grados o segundos.

- Sentido: horario o antihorario
- Unidades: `rotaciones`, `grados`, `segundos`
- Solo motores con encoder.

### `ejecutar durante … en … % velocidad` (Avanzado) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Hace girar el motor un número de rotaciones, grados o segundos a la velocidad indicada.

- Unidades: `rotaciones`, `grados`, `segundos`
- Solo motores con encoder.

## Posición {#position}

### `ir … a la posición …` (Avanzado) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Gira el motor hasta una posición absoluta (la marca de cero propia del motor).

- Recorrido: `camino más corto`, `en sentido horario`, `en sentido antihorario`
- Solo motores con encoder.

### `ir a posición relativa … en … % velocidad` (Principiante) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Gira el motor hasta una posición, en grados, contada desde el punto fijado con **establecer posición relativa**.

- Uso típico: dirección con un servo, donde el valor del joystick da el ángulo.
- Solo motores con encoder; en BuWizz 3 usa el bloque siguiente.

### `ir a posición relativa …` (BuWizz 3) (Principiante) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
La versión para BuWizz 3 del bloque anterior, sin la entrada de velocidad.

- Hubs: BuWizz 3, con motores con encoder.

### `establecer posición relativa …` (Principiante) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Declara que la posición actual del motor es el valor indicado. Las posiciones relativas se cuentan a partir de él.

- Solo motores con encoder.

### `calibrar cremallera … centro … grados …` (Principiante) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Encuentra el centro y el recorrido de una cremallera de dirección.

- El motor lleva la cremallera hasta ambos extremos, mide cuánto puede recorrer y guarda el resultado en las dos variables que colocas en los campos: la posición central y el rango en grados. La cremallera se detiene en el medio, pero su posición relativa allí es igual al valor del centro, no a 0, así que añade **establecer posición relativa** 0 justo después de este bloque; después dirige con `rango × joystick / 100`.
- La dirección debe tener topes mecánicos firmes en ambos extremos (el final de la cremallera o los engranajes).
- Solo motores con encoder.

## Ajustes del motor {#motor-settings}

### `establecer motor en … al detenerse` (Gurú) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Elige qué hace el motor cuando se detiene.

- `freno`: se detiene rápidamente.
- `mantener posición`: mantiene activamente su posición (útil para la dirección).
- `deslizamiento`: gira libremente hasta pararse.
- Solo motores con encoder.

### `activar detección de bloqueo …` (Gurú) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Activa o desactiva la detección de bloqueo. Si está activada, un motor que se bloquea se rinde en lugar de seguir empujando, así que un bloque que espera al motor puede terminar.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (el bloque lleva el icono del hub).

### `establecer aceleración a …` (Gurú) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Elige con qué rapidez acelera el motor.

- Opciones: `predeterminado`, `rápido`, `equilibrado`, `suave`, `lento`, `muy lento`
- Solo motores con encoder.

### `establecer deceleración a …` (Gurú) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Elige con qué rapidez frena el motor.

- Opciones: `predeterminado`, `rápido`, `equilibrado`, `suave`, `lento`, `muy lento`
- Solo motores con encoder.

## Valores del motor {#motor-values}

### `posición` (Principiante) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Devuelve la posición absoluta del motor.

- Solo motores con encoder.

### `posición relativa` (Principiante) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Devuelve la posición relativa del motor, en grados.

- Solo motores con encoder.

### `velocidad` (Principiante) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Devuelve la velocidad actual del motor.

### `potencia` (Avanzado) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Devuelve la potencia actual del motor.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (el bloque lleva el icono del hub).

## Robot Inventor {#robot-inventor-motors}

Estos bloques vienen de la app Robot Inventor y solo funcionan con los [hubs MINDSTORMS Robot Inventor y SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Llevan el icono del hub. Para conducir un robot de dos ruedas, consulta los bloques de [Movimiento](/docs/Application/BlockBuilder/Blocks/Movement).

### `iniciar motor en … % potencia` (Avanzado) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Arranca los motores de los puertos seleccionados con la potencia indicada, de −100 a 100 % (75 % de forma predeterminada). A diferencia de **iniciar motor en … % velocidad**, el motor no mantiene una velocidad regulada: con carga se frena, como un motor sin encoder.

### `¿se interrumpió el motor?` (Gurú) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` si la última orden del motor de este puerto no terminó porque otro bloque de motor del mismo puerto la interrumpió.

## Technic Move Hub {#technic-move-hub}

El Technic Move Hub mueve sus motores integrados con estos bloques en lugar de los bloques de puerto anteriores.

### `iniciar motores a … % velocidad` (Principiante) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Arranca los motores de tracción a la velocidad indicada.

### `pulso de potencia` (Principiante) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Envía un pulso de potencia a los motores de tracción.

- Uso típico: un impulso breve antes de los bloques siguientes.

### `detener motores` (Principiante) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Detiene los motores de tracción.

### `ajustar el freno de los motores …` (Principiante) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Activa o desactiva el freno de los motores de tracción.

- Opciones: `apagado`, `activado`

### `establecer barra de dirección a …` (Principiante) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Gira la dirección hasta la posición indicada.

### `calibrar barra de dirección` (Principiante) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibra la dirección con el algoritmo propio del hub, que encuentra automáticamente el rango de la dirección.

- La dirección debe tener topes mecánicos firmes (por ejemplo, los extremos de la cremallera de dirección).
