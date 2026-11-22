---
id: PlayMode
title: Conducir un modelo (Ejecutar)
description: "Ejecuta un perfil, conduce el modelo, detenlo, y qué ocurre cuando se detiene o se corta una conexión."
---

import Screenshot from '@site/src/components/Screenshot';

# Conducir un modelo (Ejecutar) {#driving-a-model-run}

Un perfil tiene dos modos:

- **Edición**: cambias los hubs, el panel y el programa.
- **Ejecutar**: el programa se ejecuta y los controles del panel manejan el modelo.

## Iniciar y detener {#start-and-stop}

Pulsa **Ejecutar** (▶) en el extremo derecho de la barra superior del editor; en un teléfono o una tablet, el panel también lo tiene. En un ordenador, **Ejecutar** es el botón naranja del editor (también **Programa → Ejecutar**, ⌘R / Ctrl+R). Pulsa **Detener** (■) para volver a editar (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Panel mientras se ejecuta el programa" width={900} />

Mientras el programa se ejecuta:

- los puntos de la cuadrícula del panel se ocultan, igual que sus botones de edición (en un ordenador quedan desactivados);
- los controles responden al tacto y al gamepad;
- los monitores y los indicadores muestran valores en directo;
- en Enlaces rápidos, el editor muestra valores en directo entre los bloques de cada fila, y las filas no se pueden editar;
- en Bloques lógicos, el programa se puede seguir editando, así que puedes ajustarlo en directo.

## En un teléfono o una tablet {#on-a-phone-or-tablet}

Al abrir un perfil, el teléfono pasa a horizontal y pantalla completa, para que el panel ocupe toda la pantalla. Activa **Mantener la pantalla encendida** en la Configuración para que la pantalla no se apague mientras conduces. Consulta [Configuración](/docs/Application/Account/Settings).

## Antes de pulsar Ejecutar {#before-you-press-run}

- Enciende los hubs y comprueba en **Mis hubs** que están conectados (el número del botón **Mis hubs**, **Hubs** en un ordenador, muestra cuántos lo están).
- En Enlaces rápidos, mira el botón **Problemas**: un «!» rojo significa que algunas filas no se pueden ejecutar. Consulta [Ejecución y solución de problemas](/docs/Application/Links/Problems).
- La primera vez, pon el modelo sobre un soporte o mantenlo lejos del borde de la mesa.

## Cuando el programa se detiene {#when-the-program-stops}

- **Enlaces rápidos** detiene todos los motores que usan las filas y restablece las salidas (se borra la matriz LED y se apagan los colores de los puertos y las luces de los sensores).
- **Bloques lógicos** detiene los puertos del hub si **Detener puertos del hub cuando se detenga el programa** está activado en la Configuración del editor.
- Si un hub se desconecta mientras el programa se ejecuta, sus motores se detienen. En Enlaces rápidos, una entrada de hub «Conectado» puede mostrarlo en el panel.
- Con el control remoto, si la conexión entre el mando remoto y el dispositivo con los hubs se pierde durante unos 4 segundos, el dispositivo con los hubs detiene el perfil y todos los motores.

## Conducir desde otro dispositivo {#drive-from-another-device}

Con [MocPilot Pro](/docs/Application/Account/Pro), puedes ejecutar el perfil en un dispositivo (el dispositivo con los hubs, que conecta los hubs) y controlarlo desde otro dispositivo o desde el editor web. Consulta [Control remoto](/docs/Application/Profiles/RemoteControl).
