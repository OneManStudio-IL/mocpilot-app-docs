---
id: Inputs
title: Entradas
description: "Entradas de Enlaces rápidos: controles del panel, el vehículo simulado, el gamepad, los botones y los sensores del hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Entradas {#inputs}

Cada fila empieza con una entrada. La pestaña **Entradas** de la paleta contiene:

- un bloque por cada **control del panel**; los controles con varios canales (ejes del joystick y del pad direccional, volante, pedales, palanca de cambios, freno de mano, intermitentes) tienen un bloque por canal;
- los bloques **Vehículo**, cuando el panel tiene pedales, palanca de cambios o freno de mano;
- el bloque **Gamepad**, cuando los bloques de gamepad están activados;
- un bloque **Hub** por cada hub del perfil (excepto Mould King, que no tiene botones ni sensores).

Si la pestaña está vacía, muestra «Añade controladores en el panel o hubs en Mis hubs: aparecerán aquí».

<Screenshot name="links-palette-inputs" alt="La pestaña Entradas de la paleta de Enlaces rápidos" width={900} />

Todos los ajustes y valores de cada entrada se describen en la referencia [Bloques de entrada](/docs/Application/Links/Blocks/InputBlocks).

## Controles del panel {#dashboard-controls}

Un bloque [Controlador](/docs/Application/Links/Blocks/InputBlocks#src-controller) toma un control del panel por su nombre (**JOY1**, **SLDR1**, **BTN2**…) y, si el control tiene varios, el **Canal** que quieras:

| Control | Lo que recibe la fila |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Eje X** o **Eje Y**, −1…1 |
| [Deslizador](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [controlador de tren](/docs/Application/Links/Blocks/InputBlocks#controller-train), [mando giratorio](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | su posición |
| [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Ángulo de dirección** −1…1 o **Claxon** |
| [Pedales](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Acelerador** o **Pedal de freno**, 0…1 |
| [Palanca de cambios](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Marcha** o **Sentido (R − / adelante +)** |
| [Freno de mano](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Freno de mano puesto** (encendido/apagado) o **Fuerza del freno de mano** |
| [Intermitentes](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Intermitentes (izquierda − / derecha +)**, **Intermitente izquierdo**, **Intermitente derecho** o **Luz** |
| [Pad direccional](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Arriba / abajo** o **Izquierda / derecha**: −1, 0 o +1 |
| [Botón](/docs/Application/Links/Blocks/InputBlocks#controller-button) | encendido mientras se mantiene pulsado |
| [Interruptor](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | encendido / apagado |
| [Interruptor de paso](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | el paso actual |

Cuando añades, renombras o cambias un control en el panel, la paleta y las filas se actualizan automáticamente. Si ajustas un joystick a **Solo horizontal**, las filas que usan su eje Y indican «… no se mueve en este eje».

## Conducir como un coche real {#drive-like-a-real-car}

El volante, los pedales, la palanca de cambios y el freno de mano dan sus posiciones en bruto: una fila con un pedal mueve el motor exactamente en la medida en que pisas el pedal. Para un modelo que se comporte como un coche (acelera con inercia, avanza por inercia, frena y da marcha atrás en R), usa en su lugar la entrada [Vehículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Lee a la vez los pedales, la palanca de cambios y el freno de mano, y da la **Velocidad** del vehículo, las **Revoluciones del motor (rpm)**, **Frenando** o **Con el freno de mano**:

- *Vehículo (Velocidad)* → *Motor* → motores de tracción;
- *Volante (Ángulo de dirección)* → *Servo* → dirección;
- *Vehículo (Frenando)* → *Luz* → luces de freno;
- *Intermitentes (Intermitente izquierdo)* → *Luz* → luz del intermitente izquierdo.

## Gamepad {#gamepad}

Un solo bloque [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) abarca todo el mando; elige un stick, un gatillo o un botón en **Entrada**. Antes, activa **Habilitar bloques de gamepad** en la [página Gamepad](/docs/Application/Dashboard/Gamepad). Las etiquetas siguen la **Distribución de botones del gamepad** (Xbox o PlayStation).

## Botones y sensores del hub {#hub-buttons-and-sensors}

Una entrada [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) lee el botón de un hub o uno de sus sensores: batería, inclinación, aceleración, velocidad y posición de los motores, sensores de distancia y de color en los puertos, y más. La lista muestra solo lo que ese hub puede informar. Para la inclinación y la aceleración, ajusta **Orientación del hub** según cómo esté colocado el hub en el modelo.

El valor recorre la fila escalado a −1…1. Un **Monitor** de texto justo después de un sensor muestra el valor real con su unidad, como «7,85 V» o «−12°».

Usos típicos:

- *Batería* → *Indicador* (Nivel de batería);
- *Sensor de distancia* → *Umbral* (Por debajo, 20 %) → *Motor por tiempo*: retroceder cuando algo se acerca;
- *Botón 1* (mando Powered Up) → *Motor*: conducir con el mando físico.
