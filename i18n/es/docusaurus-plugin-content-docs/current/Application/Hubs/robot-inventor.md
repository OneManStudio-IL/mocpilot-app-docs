---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Conecta el hub LEGO MINDSTORMS Robot Inventor (51515) o SPIKE Prime por Bluetooth o USB, usa sus bloques y recupera el hub si deja de funcionar."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor

El hub del set LEGO® MINDSTORMS® Robot Inventor (51515) es el **LEGO® Technic™ Large Hub** (88016): seis puertos A–F, una matriz de luces de 5×5, un altavoz, un giroscopio y un acelerómetro. MOCPilot lo controla con los mismos bloques que la app Robot Inventor, más todo lo que añade MOCPilot: el panel, el gamepad y los demás hubs del perfil.

El **hub SPIKE™ Prime** (45601) es el mismo hardware con el firmware de LEGO® Education. MOCPilot lo admite con el firmware **SPIKE Legacy** (beta); consulta [Firmware](#firmware).

## Qué puede hacer {#features}

- **Bloques lógicos**: todos los bloques de la app Robot Inventor, consulta [Bloques de Robot Inventor](#blocks).
- **Enlaces rápidos**: motores, sensores, la [matriz de luces](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) y las [luces del sensor de distancia](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor del hub**: batería, orientación, inclinación y los dispositivos de los puertos, consulta [Monitor del hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Un programa de bloques puede ejecutarse de dos formas: en **streaming**, donde MOCPilot lo ejecuta y envía las órdenes al hub (mantén el dispositivo conectado), o por **descarga**, donde MOCPilot lo escribe en una de las ranuras de programa del hub y el hub lo ejecuta por sí solo. Consulta [Ejecutar el programa en el hub](#download).

## Conectar el hub {#connect}

Añade el hub como siempre ([Añadir y conectar un hub](/docs/Application/Hubs/ConnectingHubs)) y elige **Lego® Large Hub** (o **LEGO® SPIKE™ Prime Hub**). En un ordenador, la página de conexión tiene arriba un selector **Bluetooth / USB**. MOCPilot recuerda tu elección para este modelo de hub.

### Por Bluetooth {#bluetooth}

El hub usa Bluetooth clásico, no Bluetooth Low Energy: funciona en Android, Mac y Windows, pero no en iPhone ni iPad.

1. Enciende el hub.
2. Emparéjalo en los ajustes de Bluetooth del dispositivo como un dispositivo Bluetooth normal (en Windows: **Configuración → Bluetooth y dispositivos → Agregar dispositivo**). Pulsa el botón Bluetooth del hub para que se pueda encontrar.
3. En MOCPilot, toca **Escanear**.

### Con un cable USB {#usb}

En Windows y Mac también puedes conectar el hub con su cable USB. No hace falta instalar ningún controlador de LEGO.

1. Conecta el hub al ordenador con un cable USB y enciende el hub.
2. Toca **Conectar**.

Si MOCPilot dice **No hay ningún hub en USB**, revisa el cable (algunos cables solo cargan) y que el hub esté encendido.

<Screenshot name="robot-inventor-connect" alt="Conexión de un hub Robot Inventor: el selector Bluetooth / USB" width={900} />

### Cierra antes la app de LEGO {#close-lego-app}

El hub solo acepta una conexión. Si la app MINDSTORMS o SPIKE está abierta y tiene ocupado el hub, MOCPilot dice **El hub está ocupado: otra aplicación lo está usando (LEGO MINDSTORMS o SPIKE). Cierra esa aplicación e inténtalo de nuevo.** Cierra la app de LEGO y vuelve a conectar.

## Bloques de Robot Inventor {#blocks}

Cuando el perfil tiene un hub Robot Inventor o SPIKE Prime, la paleta de Bloques lógicos recibe los bloques de la app Robot Inventor. Los bloques que solo puede ejecutar este hub llevan un **icono del hub** en blanco y negro.

| Categoría | Bloques de Robot Inventor |
|---|---|
| [Movimiento](/docs/Application/BlockBuilder/Blocks/Movement) (categoría nueva) | motores de movimiento, velocidad, distancia por rotación, mover, dirección, conducción tipo tanque, aceleración, parada, «¿se interrumpió el movimiento?» |
| [Motores](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | arrancar con potencia, «¿se interrumpió el motor?», además de la potencia del motor y la detección de bloqueo |
| [Luz](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | imagen durante unos segundos, animaciones con un editor de fotogramas, brillo de píxeles, además de las luces del sensor de distancia |
| [Sonidos](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pitidos, los sonidos de robot del hub, volumen, efectos de sonido, música: notas, tambores, silencios, instrumento, tempo |
| [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | sensor de fuerza, gestos, orientación, guiñada / cabeceo / balanceo, poner la guiñada a cero, velocidad angular, aceleración, inclinación, radio entre hubs |
| [Eventos](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | cuando el hub se agita o se toca, está sobre un lado, se inclina, cuando se presiona el sensor de fuerza, cuando llega una señal de radio |

Los bloques de control, operadores, variables, listas y Mis bloques de la app Robot Inventor son iguales que los [bloques básicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) de MOCPilot. Los bloques que ya cubren los bloques generales de hub (velocidad y posición del motor, sensores de color y de distancia, matriz de luces, botón del hub, temporizador) están en sus categorías habituales.

## Ejecutar el programa en el hub {#download}

Igual que la app Robot Inventor, MOCPilot puede escribir un programa de Bloques lógicos en una de las 20 ranuras de programa del hub (0–19). Después el hub lo ejecuta sin la app: puedes desconectar el teléfono o el ordenador y volver a iniciar el programa más tarde con los botones del propio hub.

### El botón y la tarjeta de la ranura {#slot-card}

Cuando hay un hub Robot Inventor o SPIKE Prime conectado a un perfil de Bloques lógicos, aparece un botón en la esquina inferior derecha del editor, junto al zoom. Muestra el número de la ranura elegida en una pequeña matriz de 5×5, o un símbolo de streaming. Tócalo para abrir la tarjeta:

- el hub con la ranura elegida; **‹** y **›** eligen la ranura 0–19;
- **Descarga / Streaming**: cómo funciona **Ejecutar** para este hub;
- el botón de **descarga** (⤓): escribe el programa en la ranura sin iniciarlo;
- una línea de estado: el progreso, *Ranura 3: el programa está en el hub*, o qué ha fallado.

Cuando hay varios hubs Robot Inventor o SPIKE Prime conectados, la tarjeta también tiene un botón de hub: tócalo para elegir qué hub recibe el programa. MOCPilot recuerda el modo y la ranura en este dispositivo.

<Screenshot name="robot-inventor-slot-card" alt="La tarjeta de la ranura: el hub, las flechas de ranura, el selector Descarga / Streaming y el botón de descarga" width={500} />

### Descarga {#download-mode}

En el modo **Descarga**, **Ejecutar** convierte el programa de bloques en un programa para el hub, lo escribe en la ranura elegida y lo inicia en el hub. La escritura tarda unos segundos; después el programa se ejecuta en el hub por sí solo.

- Para volver a iniciarlo más tarde sin la app, elige la ranura con los botones izquierdo y derecho del hub y pulsa el botón central.
- El **botón central** del hub detiene el programa.
- Para volver a ejecutar los programas desde MOCPilot, cambia la tarjeta a **Streaming**.

### Qué puede ejecutarse en el hub {#download-blocks}

La mayoría de los bloques pueden ir al hub:

- eventos: inicio del programa, mensajes, condiciones, el temporizador, los botones del hub, sensores, gestos, orientación, inclinación y señales de radio;
- control, operadores, variables, listas y Mis bloques;
- todos los bloques de Robot Inventor, y los bloques de motor, luz y sensores de este hub.

Algunos bloques necesitan la app y no pueden ejecutarse solo en el hub: los bloques del panel y del gamepad, los bloques de otros hubs, el evento del **botón central** (en el hub ese botón detiene el programa), los eventos de batería y de conexión, la temperatura y la calibración de la cremallera. Si el programa tiene alguno, no se escribe nada: la tarjeta dice **Estos bloques no pueden funcionar en el hub sin la aplicación** y los enumera. Quita esos bloques o usa **Streaming**.

Si la escritura falla, la línea de estado dice por qué, por ejemplo **No hay espacio suficiente en el hub** o **El hub no respondió**. Inténtalo de nuevo, o reinicia el hub si sigue fallando.

## Firmware {#firmware}

MOCPilot funciona con el firmware de LEGO propio del hub y no lo sustituye:

- **Hub Robot Inventor**: el firmware de la app MINDSTORMS Robot Inventor. La última versión es el firmware 1.5.6 con el software del hub 3.2.36.
- **Hub SPIKE Prime**: el firmware **SPIKE Legacy** (el de la app SPIKE 2). El firmware más reciente **SPIKE App 3** no es compatible: MOCPilot lo indica cuando encuentra un hub así. Instala el firmware SPIKE Legacy con la app LEGO® Education SPIKE™ Legacy y vuelve a conectar.

Cuando el hub está listo, muestra un número de ranura de programa en su matriz de luces.

## Si el hub no arranca {#restore}

Si el hub no arranca, se queda a oscuras, no muestra un número de ranura o se cambió al firmware SPIKE App 3, restáuralo primero con la app oficial:

1. Abre la app MINDSTORMS Robot Inventor (la app SPIKE Legacy para un hub SPIKE Prime) y conecta el hub con el cable USB.
2. Inicia la actualización del hub (**Update hub firmware**). Vuelve a escribir el firmware, el software del hub y los sonidos de robot, y tarda unos 6 minutos. No desconectes el hub mientras dura.
3. Cierra la app de LEGO y conecta el hub en MOCPilot.

### Modo de recuperación (DFU) {#dfu}

Solo si la app oficial no ve el hub en absoluto, puedes escribir el firmware mediante el modo de recuperación del hub (DFU). Esto es para usuarios con experiencia:

1. Apaga el hub y desconéctalo. Mantén pulsado el **botón Bluetooth** y conecta el cable USB; sigue pulsándolo hasta que la luz del botón parpadee en rojo, verde y azul. Ahora el ordenador ve «LEGO Technic Large Hub in DFU Mode».
2. En Windows, instala una vez el controlador WinUSB para ese dispositivo, por ejemplo con Zadig. Mac y Linux no necesitan controlador.
3. Escribe la imagen del firmware de la app Robot Inventor (1.5.6) con `dfu-util` en la dirección `0x08008000`. El hub se reinicia solo cuando termina. No lo desconectes mientras escribe.
4. Después ejecuta **Update hub firmware** en la app Robot Inventor (ver arriba) para restaurar el software del hub y los sonidos.

DFU solo escribe el firmware. El propio cargador de arranque de recuperación no se puede sobrescribir, así que siempre puedes volver a intentarlo.
