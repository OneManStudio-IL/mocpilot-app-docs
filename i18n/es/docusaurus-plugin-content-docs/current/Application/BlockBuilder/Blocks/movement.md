---
id: Movement
title: Movimiento
description: "Los bloques de Movimiento conducen un robot de dos motores con el hub MINDSTORMS Robot Inventor o SPIKE: avanzar, girar, conducción tipo tanque, velocidad, aceleración y parada."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Movimiento

Los bloques de Movimiento conducen como una sola unidad un robot de dos ruedas, cada una movida por su propio motor: «avanzar 10 cm», «girar en sentido horario 1 rotación», «girar 30 a la derecha». Son los mismos bloques de movimiento que en la app LEGO® MINDSTORMS® Robot Inventor. La categoría aparece la primera de la paleta cuando el perfil tiene un [hub Robot Inventor o SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Todos sus bloques llevan el icono del hub en blanco y negro.

## Cómo funciona el movimiento {#how-movement-works}

- **Motores de movimiento.** De forma predeterminada, la rueda izquierda está en el puerto **A** y la derecha en el puerto **B**. Usa [establecer motores de movimiento en](#block_ri_move_set_pair) para elegir otros puertos. En un robot los dos motores están enfrentados, así que MOCPilot hace girar el derecho en sentido contrario: una velocidad positiva siempre hace avanzar el robot.
- **Velocidad de movimiento.** Los bloques sin velocidad propia usan la velocidad de movimiento: **50 %** hasta que [establecer velocidad de movimiento a](#block_ri_move_set_speed) la cambia.
- **La dirección** es un número de −100 a 100. **0** va en línea recta. Los valores positivos giran a la derecha y los negativos a la izquierda: la rueda interior va más despacio cuanto más se acerca la dirección a ±100 (con 50 gira a la mitad de velocidad). Con **100** o **−100** las ruedas giran en sentidos opuestos y el robot gira sobre sí mismo.
- **Unidades.** Las distancias pueden ser en `cm`, `pulgadas`, `rotaciones` o `grados` de los motores, y muchos bloques también admiten `segundos`. Los centímetros y las pulgadas usan la distancia por rotación del motor: **17,5 cm** de forma predeterminada (la rueda de Robot Inventor), que se cambia con [establecer 1 rotación del motor a](#block_ri_move_set_distance). Una distancia negativa mueve el robot en sentido contrario.
- **Espera.** Los bloques con distancia (`mover … por …`) esperan hasta que el robot ha recorrido esa distancia. Los bloques que empiezan por **empezar a moverse** terminan enseguida: el robot sigue avanzando hasta **dejar de moverse** u otro bloque de movimiento.

## Ajustes de movimiento {#movement-settings}

### `establecer motores de movimiento en … …` (Principiante) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Elige los puertos del motor de la rueda izquierda y de la derecha. Predeterminados: **A** y **B**. Los dos puertos deben ser distintos.

### `establecer velocidad de movimiento a … %` (Principiante) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Ajusta la velocidad, de −100 a 100 %, de los bloques de movimiento que no tienen velocidad propia. Predeterminado: 50 %. No arranca los motores.

### `establecer 1 rotación del motor a … cm / pulgadas recorridos` (Avanzado) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Le indica a MOCPilot cuánto avanza el robot en una rotación del motor, para que las distancias en centímetros y pulgadas salgan bien. Predeterminado: 17,5 cm. Mide tu robot: haz que **avance 1 rotación** y mide la distancia. Un valor de 0 se ignora.

### `establecer aceleración de movimiento a …` (Gurú) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Lo rápido que aceleran y frenan los motores de movimiento.

- Opciones: `predeterminado`, `rápido` (0,1 s), `equilibrado` (0,35 s), `suave` (0,8 s), `lento` (1,2 s), `muy lento` (2 s): el tiempo desde parado hasta la velocidad máxima.

### `establecer motores de movimiento en … al detenerse` (Avanzado) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Lo que hacen los motores cuando el robot se detiene.

- `deslizamiento`: los motores giran libremente y el robot rueda hasta pararse.
- `freno` (predeterminado): los motores frenan.
- `mantener posición`: los motores mantienen activamente su posición, aunque empujes el robot.

## Moverse {#moving}

### `mover … por …` (Principiante) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Mueve el robot a la velocidad de movimiento y espera hasta que termina.

- Dirección: `hacia adelante`, `hacia atrás`, `en sentido horario`, `en sentido antihorario` (las dos últimas hacen girar el robot sobre sí mismo).
- Unidades: `cm`, `pulgadas`, `rotaciones`, `grados`, `segundos`. Predeterminado: 10 cm.

### `mover … por …` (con dirección) (Principiante) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Mueve el robot con la dirección indicada (−100 a 100) a la velocidad de movimiento y espera hasta que termina. Con dirección 30, el robot traza una curva hacia la derecha.

- Unidades: `cm`, `pulgadas`, `rotaciones`, `grados`, `segundos`.

### `mover … por … en … % velocidad` (Avanzado) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Lo mismo, con su propia velocidad en lugar de la velocidad de movimiento.

- Unidades: `cm`, `pulgadas`, `rotaciones`, `grados`.

### `mover … en … … % velocidad` (Avanzado) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Conducción tipo tanque durante una distancia: ajusta por separado la velocidad de la rueda izquierda y la de la derecha (de −100 a 100 % cada una) y espera hasta que el robot ha recorrido esa distancia.

- Unidades: `cm`, `pulgadas`, `rotaciones`, `grados`, `segundos`.

### `empezar a moverse …` (Principiante) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Empieza a moverse con la dirección indicada a la velocidad de movimiento y pasa enseguida al siguiente bloque.

### `empezar a moverse … en … % velocidad` (Avanzado) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Empieza a moverse con la dirección y la velocidad indicadas.

- Uso típico: pon un deslizador del panel en el campo de la dirección y un pedal en el de la velocidad.

### `empezar a moverse … en … % potencia` (Gurú) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Como el bloque anterior, pero ajusta la **potencia** de los motores en lugar de una velocidad regulada: los motores no intentan mantener la velocidad cuando el robot sube una pendiente o lleva carga.

### `empezar a moverse a … … % velocidad` (Avanzado) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Conducción tipo tanque: arranca la rueda izquierda y la derecha, cada una a su propia velocidad.

### `empezar a moverse a … … % potencia` (Gurú) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Conducción tipo tanque con la potencia del motor de cada rueda en lugar de una velocidad regulada.

### `dejar de moverse` (Principiante) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Detiene los dos motores de movimiento como indica **establecer motores de movimiento en … al detenerse** (frenando, de forma predeterminada).

### `¿se interrumpió el movimiento?` (Gurú) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` si el último movimiento no terminó: otro bloque de movimiento o **dejar de moverse** lo interrumpió.
