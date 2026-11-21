---
id: Processing
title: Procesamiento
description: "Bloques de procesamiento de Enlaces rápidos: Invertir, Límite, Zona muerta, Umbral, Suave y Alternar."
---

# Procesamiento {#processing}

Los bloques de procesamiento se colocan entre la entrada y la operación y cambian el valor por el camino. Una fila puede tener ninguno, uno o varios, en cualquier orden. Ajustes y valores permitidos: [Bloques de procesamiento](/docs/Application/Links/Blocks/ProcessingBlocks).

| Bloque | Qué hace |
|---|---|
| [Invertir](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | invierte el sentido, o intercambia encendido y apagado |
| [Límite](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | pone un tope al valor |
| [Zona muerta](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignora los movimientos pequeños alrededor de cero |
| [Umbral](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | convierte un valor en encendido/apagado |
| [Suave](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | acelera y frena de forma gradual |
| [Alternar](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | una pulsación enciende, otra apaga |

## Invertir {#invert}

¿El motor gira al revés? Añade **Invertir** en lugar de reconstruir el modelo. Para dos motores que deben girar en sentidos opuestos (orugas izquierda y derecha, los dos lados de una caja de cambios), crea dos filas con la misma entrada y pon Invertir en una de ellas.

## Límite {#limit}

Hace que el modelo sea más lento y fácil de controlar: con un **Máximo** del 50 %, el stick a fondo da la mitad de la velocidad. Ideal para niños, para conducir en interiores y para mecanismos delicados.

## Zona muerta {#dead-zone}

Un joystick rara vez reposa exactamente en cero, así que un motor puede zumbar o moverse lentamente. **Zona muerta** trata los valores pequeños como cero. Un 10 % es un buen punto de partida.

## Umbral {#threshold}

Convierte un valor en encendido/apagado: «encendido cuando el valor está **Por encima** del 20 %». Con un sensor, *Sensor de distancia* → *Umbral* (Por debajo, 20 %) se enciende cuando algo está cerca. Umbral tiene una pequeña histéresis, así que no parpadea en el límite.

## Suave {#smooth}

Arranca y se detiene de forma gradual, como un vehículo real. La aceleración y la deceleración se ajustan por separado: un camión pesado puede tardar 2 s en acelerar y 0,5 s en detenerse. En una luz, Suave la enciende y la apaga de forma progresiva.

## Alternar {#toggle}

Convierte un botón en un interruptor: una pulsación enciende y otra apaga. *Botón* → *Alternar* → *Luz*.

## Consejos {#tips}

- El orden importa: *Zona muerta → Límite → Suave* es una buena cadena para conducir.
- Un bloque que no encaja con la señal no se acopla: Alternar necesita una entrada de encendido/apagado; Zona muerta y Umbral necesitan un valor.
- Observa los valores en vivo mientras se ejecuta el programa para ver qué hace cada bloque.
