---
id: Operations
title: Operaciones y salidas
description: "Operaciones de Enlaces rápidos (Motor, Servo, Luz y más) y salidas (Hub, Indicador, LED del hub, Matriz de LED, Calibrar servos)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operaciones y salidas {#operations-and-outputs}

La pestaña **Salidas** de la paleta contiene operaciones y salidas.

- Una **operación** indica *qué* hacer (girar un motor, dirigir, hacer parpadear una luz). Siempre la sigue una salida **Hub**, que indica *dónde*: qué hub y qué puertos.
- Una **salida directa** (Indicador, LED del hub, Matriz de LED, Calibrar servos) cierra la fila por sí sola, sin operación.

Las operaciones comunes (Motor, Servo, Motor por tiempo, Luz) siempre están disponibles. Las operaciones específicas de un hub solo aparecen cuando algún hub del perfil las admite. Cada ajuste con sus valores y su valor predeterminado: [Bloques de operación y salida](/docs/Application/Links/Blocks/OutputBlocks).

## Motores y luces {#motors-and-lights}

| Operación | Qué hace | Uso típico |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | mueve el motor según el valor de la entrada; 0 lo detiene | conducción, cabrestantes |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | gira un motor con encoder a una posición que sigue a la entrada | dirección |
| [Motor por tiempo](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | mueve el motor durante un tiempo fijo en cada pulsación | puertas, volquetes |
| [Girar grados](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | gira el motor un ángulo fijo en cada pulsación | posicionado por pasos, plataformas giratorias |
| [Ir a la posición](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | lleva un motor angular a una posición al activarse y a otra al desactivarse | trampillas, selectores de marcha |
| [Luz](/docs/Application/Links/Blocks/OutputBlocks#op-light) | enciende luces LEGO®, fijas o parpadeando | faros, balizas, intermitentes |
| [Color del puerto](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colorea los LED de los puertos de un BuWizz 3.0 Pro | colores de estado |
| [Luces del sensor](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | enciende los «ojos» del sensor de distancia Technic (Robot Inventor) | caras de robot |

### Dirección con Servo {#steering-with-servo}

Servo necesita un motor con encoder y un mecanismo de dirección que centres a mano o que tenga topes.

- **Manual**: gira el eje hasta el centro y toca **Fijar como cero**; ajusta con precisión con **◀ 5°** / **5° ▶**. Después elige el **Ángulo** y, si las ruedas siguen tirando hacia un lado, el **Centro**.
- **Auto**: en cada arranque, el motor gira hasta ambos topes, el punto medio pasa a ser el cero y el recorrido pasa a ser el ángulo. **Calibrar ahora** lo ejecuta en el momento. Mensajes: «Calibrando: el motor gira hasta ambos topes…», «Calibrado: el servo gira ±…°, el centro es el cero», «Error de calibración: comprueba el hub, el motor y que el eje tenga topes».

En un **Technic Move Hub**, el propio hub dirige y calibra su cremallera; solo se aplica el modo de calibración.

<Screenshot name="links-servo-settings" alt="Ajustes de un bloque Servo" width={900} />

## Operaciones para todo el hub {#operations-for-the-whole-hub}

Estas operaciones controlan el hub en conjunto, así que el bloque Hub que va detrás no tiene puertos.

| Operación | Hub | Qué hace |
|---|---|---|
| [Freno](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | frena mientras la entrada está activada |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | modo de potencia boost mientras está activada, normal al desactivarse |
| [Pulso de potencia](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | un pulso de potencia por pulsación (solo con la configuración Batmobile™ Tumbler) |
| [Modo de potencia](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | cambia el modo de potencia: lento, normal, rápido, Ludicrous |
| [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | cambia el canal de control: A, B, C |

## Salidas {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): el hub y sus puertos. Consulta [El bloque Hub y los puertos](/docs/Application/Links/HubsAndPorts).
- [Indicador](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): muestra el valor en un monitor del panel (monitor de texto, Nivel de batería, Velocímetro, Monitor de inclinación). Justo después de un sensor del hub, un monitor de texto muestra el valor real con su unidad. El indicador muestra el valor tal cual, así que la fila no tiene operación. Consulta [Indicadores y monitores](/docs/Application/Dashboard/Indicators).
- [LED del hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led): la luz de color de un hub LEGO®, de un color mientras la entrada está activada y de otro mientras está desactivada.
- [Matriz de LED](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): la matriz de luces del hub Robot Inventor: una barra de nivel, un número o una imagen.
- [Calibrar servos](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): vuelve a calibrar todos los Servo en modo **Auto**. Ponlo en un botón del panel: *BTN3* → *Calibrar servos*.

## Cuando el programa se detiene {#when-the-program-stops}

Los motores se detienen, la matriz de LED se borra, y los colores de los puertos y las luces del sensor se apagan.
