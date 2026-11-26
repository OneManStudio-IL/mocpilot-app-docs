---
id: OutputBlocks
title: Bloques de operación y salida
description: "Referencia de todas las operaciones y salidas de Enlaces rápidos: Motor, Servo, Luz, operaciones de Technic Move, BuWizz y Mould King, Hub, Indicador, LED del hub, Matriz de LED, Calibrar servos."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloques de operación y salida {#operation-and-output-blocks}

La pestaña **Salidas** de la paleta contiene las operaciones y las salidas. Cómo usarlas: [Operaciones y salidas](/docs/Application/Links/Operations).

- Una **operación** indica qué hacer. Debe ir seguida de una salida [Hub](#hub-out), que indica dónde.
- Una **salida directa** ([Indicador](#dash-indicator), [LED del hub](#hub-led), [Matriz de LED](#hub-matrix), [Calibrar servos](#cmd-calibrate)) cierra la fila por sí sola; la fila no debe tener operación.

**Motor**, **Servo**, **Motor por tiempo** y **Luz** siempre están en la paleta. Las demás operaciones solo aparecen cuando algún hub del perfil puede realizarlas.

En esta página, «activada» significa una señal de encendido/apagado que está encendida, o un valor de al menos 0,5 (con cualquier signo).

## Operaciones para puertos {#operations-for-ports}

### Motor {#op-motor}

Mueve el motor según el valor de la entrada: cuanto más empujas, más rápido; 0 lo detiene.

- Recibe: valor o encendido/apagado (encendido = velocidad máxima).
- **Al detenerse**: **Predeterminado del hub** (predeterminado), **Deslizamiento**, **Freno** o **Mantener posición**.
- **Aceleración del hub**: **Predeterminado del hub** (predeterminado), **Rápida**, **Equilibrada**, **Suave**, **Lenta** o **Muy lenta**: la rampa propia del hub. Para una rampa propia, usa [Suave](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Detección de bloqueo**: **Predeterminado del hub** (predeterminado), **Activada** o **Desactivada**.
- Hubs: cualquier hub con puertos. **Al detenerse** y **Aceleración del hub** necesitan un hub con control de posición (no SBrick, BuWizz 2.0, WeDo 2.0 ni Mould King); **Detección de bloqueo** necesita Robot Inventor. En un Technic Move Hub, Motor mueve el coche en el modo **Perfil de coche** y los motores `A`–`C` en el modo **Puertos** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Dirige con un motor que tiene encoder: la entrada −1…1 gira el motor hasta *centro + valor × ángulo*, y 0 lo devuelve al centro.

- Recibe: valor o encendido/apagado.
- **Calibración**: **Manual** (predeterminado) o **Auto**.
- **Ángulo**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 vuelta, ±2 vueltas, ±3 vueltas o ±5 vueltas (predeterminado ±90°). Solo en Manual.
- **Centro**: −20°, −10°, −5°, 0°, +5°, +10° o +20° (predeterminado 0°). Solo en Manual.
- **Velocidad de giro**: 25, 50, 75 o 100 % (predeterminado 100 %).
- Manual: el cero es donde estaba el motor al encenderse, o la posición que fijas con **Fijar como cero** (ajústala antes con **◀ 5°** / **5° ▶**).
- Auto: en cada arranque, el motor gira hasta ambos topes; el punto medio pasa a ser el cero y el recorrido pasa a ser el ángulo. **Calibrar ahora** lo ejecuta en el momento. La dirección debe tener topes.
- Hubs y puertos: un motor con encoder en un hub con control de posición (no SBrick, BuWizz 2.0, WeDo 2.0 ni Mould King). En un Technic Move Hub en el modo **Perfil de coche**, Servo gira la cremallera de dirección del hub, que el propio hub calibra; en el modo **Puertos**, usa el puerto `C` con calibración **Auto**.

<Screenshot name="links-servo-settings" alt="Ajustes de un bloque Servo" width={900} />

### Motor por tiempo {#op-timed}

Mueve el motor durante un tiempo fijo cada vez que la entrada se activa. La velocidad y el sentido se toman del valor de la entrada en ese momento.

- Recibe: valor o encendido/apagado.
- **Tiempo**: 0,5, 1, 2, 3, 5 o 10 s (predeterminado 1 s).
- Hubs: cualquier hub con puertos; en un Technic Move Hub en el modo **Perfil de coche** mueve el coche.

### Girar grados {#op-degrees}

Gira el motor un ángulo fijo cada vez que la entrada se activa. Una entrada negativa lo gira en el otro sentido.

- Recibe: valor o encendido/apagado.
- **Grados**: 45°, 90°, 180°, 1 vuelta, 2 vueltas, 3 vueltas, 5 vueltas o 10 vueltas (predeterminado 1 vuelta).
- **Velocidad**: 25, 50, 75 o 100 % (predeterminado 50 %).
- Hubs y puertos: un motor con encoder en un hub con control de posición.

### Ir a la posición {#op-goto}

Gira el motor hasta una posición absoluta cuando la entrada se activa, y hasta otra cuando se desactiva. Toma el camino más corto.

- Recibe: valor o encendido/apagado.
- **Posición al activar**: 0°, 45°, 90°, 135°, 180°, 225°, 270° o 315° (predeterminado 90°).
- **Posición al desactivar**: **No mover** o una de las mismas posiciones (predeterminado 0°).
- **Velocidad**: 25, 50, 75 o 100 % (predeterminado 50 %).
- Hubs y puertos: un motor angular (posición absoluta) en un hub con control de posición.

### Luz {#op-light}

Controla luces LEGO® conectadas a un puerto.

- Recibe: valor o encendido/apagado. Con un valor, el brillo lo sigue (−1 y 1 dan ambos el brillo máximo).
- **Brillo**: 25, 50, 75 o 100 % (predeterminado 100 %).
- **Parpadeo: encendido**: **Sin parpadeo** (predeterminado), 0,25, 0,5, 1 o 2 s: cuánto tiempo permanece encendida la luz en cada parpadeo.
- **Parpadeo: apagado**: **Igual que encendido** (predeterminado), 0,25, 0,5, 1 o 2 s: cuánto tiempo permanece apagada.
- Hubs: cualquier hub con puertos excepto WeDo 2.0. En un Technic Move Hub, Luz enciende y apaga las luces del coche en el modo **Perfil de coche**, y las luces `1`–`6` una a una en el modo **Puertos**.

### Color del puerto {#op-portcolor}

Ajusta el color de los LED de los puertos de un BuWizz 3.0 Pro.

- Recibe: valor o encendido/apagado.
- **Color**: **De la lista** (predeterminado) o **RGB**.
- **Color al activar** (predeterminado Rojo) y **Color al desactivar** (predeterminado Apagado): Apagado, Rosa, Morado, Azul, Azul claro, Verde claro, Verde, Amarillo, Naranja, Rojo, Blanco.
- **Rojo**, **Verde**, **Azul** (RGB): 0, 32, 64, 128, 192 o 255 (predeterminado 255, 0, 0).
- Hubs y puertos: BuWizz 3.0 Pro, puertos 1–4. Los LED se apagan cuando el programa se detiene.

### Luces del sensor {#op-sensorlights}

Enciende los cuatro segmentos alrededor de los «ojos» del sensor de distancia Technic mientras la entrada está activada.

- Recibe: valor o encendido/apagado.
- **Luces**: **Todas** (predeterminado), **Arriba**, **Abajo**, **Izquierda**, **Derecha** o **Diagonal**.
- **Brillo**: 25, 50, 75 o 100 % (predeterminado 100 %).
- Hubs y puertos: Robot Inventor, SPIKE Prime y Technic Hub, un puerto con el sensor de distancia. Las luces se apagan cuando el programa se detiene.

### Luces del sensor de color {#op-colorlights}

Enciende las tres luces alrededor de la lente del sensor de color Technic (el sensor de color SPIKE) mientras la entrada está activada.

- Recibe: valor o encendido/apagado.
- **Luces**: **Todas** (predeterminado), 1, 2, 3, 1 + 2, 2 + 3 o 1 + 3.
- **Brillo**: 25, 50, 75 o 100 % (predeterminado 100 %).
- Hubs y puertos: Technic Hub, el puerto con el sensor de color.
- Mientras sus luces están encendidas, el sensor no mide nada. Cuando la entrada se desactiva o el programa se detiene, las luces se apagan y el sensor vuelve a medir colores. Una fila que lee el sensor de color en un puerto que otra fila enciende se indica como problema («La fila 2 enciende el sensor de color en el puerto A: un sensor encendido no mide nada»).

## Operaciones para todo el hub {#operations-for-the-whole-hub}

El bloque Hub que va detrás de estas operaciones no tiene puertos.

### Freno {#op-brake}

Frena el coche mientras la entrada está activada.

- Recibe: valor o encendido/apagado. Sin ajustes.
- Hubs: Technic Move.

### Boost {#op-boost}

Pone el hub en su modo de potencia boost mientras la entrada está activada, y lo devuelve al modo normal cuando se desactiva.

- Recibe: valor o encendido/apagado. Sin ajustes.
- Hubs: Technic Move.

### Pulso de potencia {#op-pulse}

Envía un pulso de potencia cada vez que la entrada se activa: los motores giran a máxima potencia durante unos dos segundos.

- Recibe: valor o encendido/apagado. Sin ajustes.
- Hubs: Technic Move con la configuración **Batmobile™ Tumbler**; consulta [Configuraciones del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Modo de potencia {#op-powermode}

Ajusta el modo de potencia de un BuWizz 2.0 cuando la entrada se activa y, si eliges uno, cuando se desactiva.

- Recibe: valor o encendido/apagado.
- **Modo al activar**: **Lento**, **Normal** (predeterminado), **Rápido** o **Ludicrous**.
- **Modo al desactivar**: **Mantener** (predeterminado) o uno de los modos.
- Hubs: BuWizz 2.0.

### Canal {#op-channel}

Cambia el canal de control de un hub Mould King cuando la entrada se activa y, si eliges uno, cuando se desactiva.

- Recibe: valor o encendido/apagado.
- **Canal al activar**: **A** (predeterminado), **B** o **C**.
- **Canal al desactivar**: **Mantener** (predeterminado), **A**, **B** o **C**.
- Hubs: Mould King 4.0 y 6.0.

## Salidas {#outputs}

### Hub {#hub-out}

Dónde ocurre la operación: un hub y sus puertos. Hay un bloque Hub por cada hub del perfil.

- **Hub**: un hub del perfil.
- **Puertos**: uno o varios puertos de ese hub (A–D en la mayoría de los hubs y en SBrick, A–F en Robot Inventor y Mould King 6.0, 1–4 en BuWizz 2.0, y 1–4 más A y B en BuWizz 3.0 Pro). Cada puerto solo puede pertenecer a una fila.
- Recibe: una operación. Los Technic Move Hub en el modo **Perfil de coche** y las operaciones para todo el hub no usan puertos. En el modo **Puertos**, un Technic Move Hub tiene los puertos A–C, y las luces 1–6 para **Luz**.
- Más información: [El bloque Hub y los puertos](/docs/Application/Links/HubsAndPorts).

### Indicador {#dash-indicator}

Muestra el valor en un monitor del panel, tal cual.

- Recibe: valor o encendido/apagado, sin ninguna operación delante.
- **Indicador del panel**: un **Monitor de texto** (Monitor), un **Monitor de valor** (Nivel de batería, Velocímetro) o un **Monitor de inclinación** del panel.
- **Eje**: **Inclinación X** o **Inclinación Y**, solo para un Monitor de inclinación (una fila por eje).
- Un monitor de texto justo después de un sensor del hub muestra el valor real con su unidad.

### LED del hub {#hub-led}

La luz de estado de color del hub: de un color mientras la entrada está activada y de otro mientras está desactivada.

- Recibe: valor o encendido/apagado, sin ninguna operación delante.
- **Hub**: un hub con LED de color.
- **Color**: **De la lista** (predeterminado) o **RGB**.
- **Color al activar** (predeterminado Rojo) y **Color al desactivar** (predeterminado Apagado): Apagado, Rosa, Morado, Azul, Azul claro, Verde claro, Verde, Amarillo, Naranja, Rojo, Blanco.
- **Rojo**, **Verde**, **Azul** (RGB): 0, 32, 64, 128, 192 o 255 (predeterminado 255, 0, 0).
- Hubs: hubs LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, el mando Powered Up); no BuWizz, SBrick ni Mould King.

### Matriz de LED {#hub-matrix}

La matriz de luces del hub.

- Recibe: valor o encendido/apagado, sin ninguna operación delante.
- **Hub**: un hub con matriz de LED.
- **Mostrar**: **Barra de nivel** (predeterminado; las filas se encienden desde abajo según el valor), **Número** (el valor de −100 a 100) o **Imagen al activar**.
- **Imagen**: **Corazón** (predeterminado), **Sonrisa**, **Triste**, **Visto**, **Cruz**, **Flecha arriba**, **Flecha abajo**, **Flecha izquierda**, **Flecha derecha** o **Todo encendido**.
- **Orientación**: **Mantener** (predeterminado), **Normal**, **Boca abajo**, **Izquierda** o **Derecha**.
- Hubs: Robot Inventor. La matriz se borra cuando el programa se detiene.

### Calibrar servos {#cmd-calibrate}

Cada vez que la entrada se activa, todos los [Servo](#op-servo) del programa en modo **Auto** se vuelven a calibrar.

- Recibe: valor o encendido/apagado, sin ninguna operación delante. Sin ajustes.
- El programa debe tener una fila Servo lista en modo Auto; si no, la fila indica «No hay ningún servo en modo de calibración Auto en este programa».
