---
id: HubsAndPorts
title: El bloque Hub y los puertos
description: "El bloque Hub de Enlaces rápidos, la elección de puertos, las comprobaciones de puertos y la pregunta de puerto en uso."
---

import Screenshot from '@site/src/components/Screenshot';

# El bloque Hub y los puertos {#hub-block-and-ports}

La salida [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) cierra una fila después de una operación. Hay un bloque Hub por cada hub de **Mis hubs**, así que añade allí tus hubs primero. Mientras no lo hagas, la pestaña muestra «Añade hubs en Mis hubs o indicadores en el panel: aparecerán aquí».

## Qué muestra el bloque Hub {#what-the-hub-block-shows}

- el nombre del hub y un **punto de conexión** (conectado o no);
- los **puertos** como chips: A, B, C, D… en los hubs LEGO® y en SBrick (A–F en Robot Inventor y Mould King 6.0), 1–4 en BuWizz 2.0, y 1–4 más A y B en BuWizz 3.0 Pro;
- un subtítulo: «puertos A, B», «elegir puertos», «todo el hub» (tras una operación para todo el hub) o «tracción, dirección, luces» (Technic Move en el modo **Perfil de coche**).

## Elegir puertos {#choose-ports}

Toca el chip de un puerto para usarlo; vuelve a tocarlo para liberarlo. Una fila puede controlar **varios puertos** a la vez, por ejemplo dos motores de tracción en A y B.

¿Necesitas que dos motores giren en sentidos opuestos? Crea dos filas con la misma entrada y añade **Invertir** a una de ellas.

## Un puerto, una fila {#one-port-one-row}

Cada puerto pertenece a una sola fila. Si eliges un puerto que ya usa otra fila, MOCPilot pregunta:

> **Puerto ya en uso**: En «Technic Hub», el puerto A se usa en la fila 2 (Motor). ¿Usarlo en esta fila? La otra fila pierde este puerto y deja de controlarlo.

**Usar en esta fila** mueve el puerto; **Cancelar** lo deja donde estaba. Un puerto que usan dos filas (por ejemplo, en un archivo antiguo) se indica como problema: «El puerto A también se usa en la fila 2».

<Screenshot name="port-in-use" alt="Diálogo Puerto ya en uso" width={700} />

## Comprobaciones de puertos {#port-checks}

Cuando el hub está conectado, MOCPilot sabe qué hay conectado a cada puerto y comprueba que la operación sea adecuada:

| Problema | Significado |
|---|---|
| «Puerto A: este dispositivo no puede funcionar como servo (se necesita un motor con encoder)» | Servo y Girar grados necesitan un motor con encoder |
| «Puerto A: el motor no tiene posición absoluta (solo motores angulares)» | Ir a la posición necesita un motor angular |
| «El puerto A tiene un sensor, no un motor» | el dispositivo del puerto es un sensor |
| «El puerto A solo acepta comandos de velocidad simples: sin control de posición» | este puerto no puede controlar posiciones |
| «El puerto A no tiene LED: usa los puertos 1-4» | Color del puerto solo funciona en los puertos 1–4 del BuWizz 3.0 Pro |
| «Luces del sensor: elige un solo puerto, el del sensor de distancia» | Luces del sensor admite exactamente un puerto |
| «Puerto A: no hay sensor de color» | Luces del sensor de color y las entradas de tono, saturación y brillo del color necesitan un sensor de color en el puerto |

Las operaciones que un hub no puede realizar no se ofrecen para él. Si cambias una fila a otro hub, la fila indica qué operación no encaja, por ejemplo «Freno: solo Technic Move (… no tiene comando de freno)».

## Technic Move Hub {#technic-move-hub}

El Technic Move Hub (en los coches teledirigidos LEGO® Technic) se puede controlar de dos formas. Elige una con **Control** en la ventana del bloque Hub: **Perfil de coche** (predeterminado) o **Puertos**. La elección pertenece al hub, así que todos los bloques Hub de ese hub usan la misma.

- **Perfil de coche**: el hub se controla por función, no por puerto. Su bloque Hub muestra **tracción, dirección, luces** y no tiene puertos. Usa **Motor** o **Motor por tiempo** para conducir, **Servo** para la dirección, **Luz** para las luces, y **Freno**, **Boost** y **Pulso de potencia** para las funciones especiales. La tracción, la dirección, las luces, el freno y el boost solo pueden usarse cada uno en una fila («La fila 2 ya controla este Technic Move»).
- **Puertos**: el hub funciona como los demás hubs con puertos. Sus motores son los puertos `A`, `B` (los motores de tracción) y `C` (el motor de dirección): **Motor**, **Motor por tiempo**, **Servo** (con calibración **Auto** en `C`), **Girar grados**, **Ir a la posición**, **Al detenerse** y **Aceleración del hub** funcionan con ellos. Sus seis luces son los puertos `1`–`6` de las filas **Luz**. Una [Entrada del hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) lee la velocidad y el ángulo de los motores. **Freno**, **Boost** y **Pulso de potencia** solo funcionan en el modo **Perfil de coche**.

Una fila que no encaja con el modo del hub es un problema que indica qué cambiar: «… se controla con su perfil de coche: cambia el hub a «Puertos» para esto» o «… se controla puerto a puerto: cambia el hub a «Perfil de coche» para esto». Los perfiles creados antes de que existiera esta opción se abren en el modo **Perfil de coche**.

Para cargar una configuración de coche en el hub (Porsche, Lamborghini, Batmobile), usa **Mis hubs → Seleccionar configuración**. Consulta [Configuraciones del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Los hubs Mould King solo reciben comandos, así que no tienen entradas ni confirman la conexión. Para cambiar el canal de control del hub, usa la operación [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
