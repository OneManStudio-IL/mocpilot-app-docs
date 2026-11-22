---
id: LinksIntroducing
title: Introducción a Enlaces rápidos
description: "Enlaces rápidos conecta los controles del panel con los motores y las luces del hub fila a fila, sin código."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Enlaces rápidos {#quick-links}

**Enlaces rápidos** es el editor de programas sin código de MOCPilot. Conectas los controles del panel, el gamepad o los sensores del hub con motores, luces e indicadores, **fila a fila**. Si has usado la app clásica Controlz, te sentirás como en casa.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Filas de Enlaces rápidos" style={{width: '100%', maxWidth: 720}} />

## Una fila se lee como una frase {#a-row-reads-like-a-sentence}

Cada fila va de izquierda a derecha:

**Entrada → Procesamiento (opcional) → Operación → Salida**

> *Joystick 1, Eje Y* → *Suave* → *Motor* → *Technic Hub, puerto A*
>
> «Cuando muevo el joystick arriba y abajo, gira el motor del puerto A, que arranca y se detiene con suavidad».

| Parte | Qué es | Ejemplos |
|---|---|---|
| **Entrada** | de dónde viene el valor | un control del panel, el vehículo simulado, el gamepad, un botón o sensor del hub |
| **Procesamiento** | cambia el valor por el camino (ninguno, uno o varios bloques) | Invertir, Límite, Zona muerta, Umbral, Suave, Alternar |
| **Operación** | qué debe hacer el hub | Motor, Servo, Motor por tiempo, Luz, Girar grados, Ir a la posición… |
| **Salida** | dónde ocurre | un **Hub** con sus puertos, o una salida directa: Indicador, LED del hub, Matriz de LED, Calibrar servos |

Las salidas directas (Indicador, LED del hub, Matriz de LED, Calibrar servos) no necesitan operación: *Batería del hub → Indicador*.

## El editor {#the-editor}

<Screenshot name="links-editor" alt="Editor de Enlaces rápidos con filas y la paleta" width={900} />

- Las **filas** ocupan la pantalla y se desplazan en vertical. Las filas nuevas empiezan en la última fila, la vacía («Nueva fila: entrada»).
- La **paleta** de la parte inferior tiene tres pestañas: **Entradas**, **Procesamiento** y **Salidas**. Se crea a partir de tu perfil: cada control del panel y cada hub de Mis hubs aparecen automáticamente, el gamepad aparece cuando los bloques de gamepad están activados, y una operación aparece solo si algún hub del perfil puede realizarla.
- El estado de las filas en la barra superior, justo antes de **Ejecutar**, muestra una **marca verde** cuando todas las filas están listas, o un **«!» rojo** con el número de problemas. En un ordenador también indica **Todas las filas están listas** o **Problemas: N**.

## Crear una fila {#build-a-row}

1. Arrastra una entrada desde **Entradas** a la fila vacía. Se crea una fila nueva.
2. Si lo necesitas, arrastra bloques de procesamiento desde **Procesamiento** detrás de la entrada.
3. Arrastra una operación (por ejemplo, **Motor**) desde **Salidas**.
4. Arrastra la salida **Hub** detrás de la operación y toca los puertos que quieras usar.
5. Toca cualquier bloque para cambiar sus ajustes: eliges entre chips, sin escribir.

Los bloques encajan como piezas de un puzle. La forma de cada unión indica el tipo de señal, así que los bloques que no pueden funcionar juntos no encajan:

- un **valor** de −1 a 1 (ejes del joystick, deslizadores, pedales, sensores);
- **encendido/apagado** (botones, interruptores, umbrales);
- la unión **operación → hub**, para que un hub solo pueda ir detrás de una operación.

Para quitar un bloque, arrástralo de vuelta a la paleta («Suelta aquí para eliminar»), o tócalo y elige **Eliminar bloque**.

## Filas {#rows}

Toca el número de la fila para abrir su menú:

- **Desactivar** / **Activar**: una fila desactivada se queda en el programa, pero no se ejecuta. Muy útil para hacer pruebas.
- **Eliminar fila**.

Puedes añadir tantas filas como quieras.

## Ejecutar {#run}

Pulsa **Ejecutar**. Mientras el programa se ejecuta, cada unión muestra el **valor en vivo** que pasa por ella, así que ves exactamente dónde se detiene una señal. No se puede editar mientras el programa se ejecuta; pulsa **Detener** para volver a editar. Consulta [Ejecución y solución de problemas](/docs/Application/Links/Problems).

## Deshacer {#undo}

**Deshacer** y **Rehacer** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z o los botones de la barra superior) retroceden hasta 100 pasos. No están disponibles mientras el programa se ejecuta.

## Más información {#read-more}

- [Entradas](/docs/Application/Links/Inputs): controles, el vehículo, el gamepad, botones y sensores del hub
- [Procesamiento](/docs/Application/Links/Processing): Invertir, Límite, Zona muerta, Umbral, Suave, Alternar
- [Operaciones y salidas](/docs/Application/Links/Operations)
- [El bloque Hub y los puertos](/docs/Application/Links/HubsAndPorts)
- [Ejecución y solución de problemas](/docs/Application/Links/Problems)
- [Ejemplos: coche, tanque, grúa, tren](/docs/Application/Links/Examples)
- Referencia de bloques: [entradas](/docs/Application/Links/Blocks/InputBlocks), [procesamiento](/docs/Application/Links/Blocks/ProcessingBlocks), [operaciones y salidas](/docs/Application/Links/Blocks/OutputBlocks)

## ¿Enlaces rápidos o Bloques lógicos? {#quick-links-or-logic-blocks}

Enlaces rápidos es ideal cuando cada control simplemente mueve algo. Cuando necesitas lógica (secuencias, condiciones, variables o una reacción en varios pasos a un sensor), usa [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). El tipo de programa se elige al crear el perfil; consulta la [comparación](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
