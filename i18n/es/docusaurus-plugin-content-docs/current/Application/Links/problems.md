---
id: Problems
title: Ejecución y solución de problemas
description: "Panel de problemas, marcos rojos, valores en vivo y mensajes habituales de Enlaces rápidos."
---

import Screenshot from '@site/src/components/Screenshot';

# Ejecución y solución de problemas {#running-and-fixing-problems}

## ¿Está todo listo? {#is-everything-ready}

El botón **Problemas** de la barra superior del editor (en un ordenador, justo antes de **Ejecutar**) muestra:

- una **marca verde**: «Todas las filas están listas»;
- un **«!» rojo**: «Problemas: N».

En un ordenador, el texto aparece escrito en el botón; en una ventana estrecha solo quedan el icono y el número de problemas. En un teléfono o una tablet, el botón muestra el icono, con el número en una insignia roja.

Tócalo para abrir el panel de problemas (un panel lateral en el teléfono, un menú en la tableta o el ordenador). Muestra una lista «Fila N — motivo»; toca un elemento para ir a esa fila. El bloque que causa el problema tiene un **marco rojo**. Cuando todo está bien, el panel indica «Todas las filas activadas pueden ejecutarse.»

<Screenshot name="links-problems" alt="Panel de problemas con una fila que no está lista" width={900} />

Las filas con problemas no se ejecutan; las demás sí.

## Mensajes habituales {#common-messages}

| Mensaje | Qué hacer |
|---|---|
| Arrastra una entrada y una salida (un hub o un indicador del panel) a la fila | la fila está vacía |
| Añade una entrada al principio de la fila | arrastra primero un control, el vehículo, el gamepad o una entrada de hub |
| Añade una salida: un hub o un indicador del panel | termina la fila con una salida |
| Añade una operación antes del hub: motor, servo, luz | una salida Hub necesita una operación delante |
| Elige al menos un puerto del hub | toca el chip de un puerto en el bloque Hub |
| Elige un controlador del panel | toca el bloque de entrada y elige un control |
| … no se mueve en este eje | el joystick solo tiene un eje: elige el otro eje o cambia el joystick |
| Elige qué da … | el control ya no tiene este canal: elige uno |
| Elige los pedales del vehículo | la entrada Vehículo necesita pedales en el panel |
| … no está en el panel | se eliminó la palanca de cambios o el freno de mano elegidos para el Vehículo |
| «…» no funciona con este controlador | este bloque de procesamiento no encaja con la señal |
| Puerto A: este dispositivo no puede funcionar como servo (se necesita un motor con encoder) | usa un motor con encoder u otra operación |
| El puerto A tiene un sensor, no un motor | comprueba qué hay conectado al puerto |
| El puerto A también se usa en la fila 2 | cada puerto solo puede pertenecer a una fila |
| Activa los bloques de gamepad en la página Gamepad (barra superior) | abre **Gamepad** y activa **Habilitar bloques de gamepad** |
| El indicador muestra el valor tal cual: elimina la operación | una fila con Indicador no lleva operación |
| La calibración no necesita operación: elimínala | una fila con Calibrar servos no lleva operación |
| Elige un hub con LED de color (hubs LEGO) | LED del hub solo funciona en hubs LEGO® |
| Los colores de los puertos solo están disponibles en BuWizz 3 | Color del puerto necesita un BuWizz 3.0 Pro |
| No hay ningún servo en modo de calibración Auto en este programa | Calibrar servos necesita un Servo en modo Auto |
| Este bloque requiere una versión más reciente de la app | el perfil se creó con una versión más reciente: actualiza MOCPilot |
| La fila está desactivada | actívala en el menú de la fila |

## Valores en vivo {#live-values}

Mientras el programa se ejecuta, cada unión entre bloques muestra el valor que pasa por ella. Mueve un control y sigue el valor a lo largo de la fila:

- no cambia nada en la entrada: el control o el gamepad no envía nada; comprueba el canal o el eje;
- el valor cambia, pero el motor no se mueve: comprueba el punto de conexión del hub y el puerto;
- el valor es pequeño después de **Límite** o **Zona muerta**: revisa sus ajustes.

<Screenshot name="links-live-values" alt="Un programa de Enlaces rápidos en ejecución con valores en vivo en las uniones" width={900} />

## El modelo no se mueve {#the-model-does-not-move}

1. ¿Está conectado el hub? Comprueba **Mis hubs** y el punto de conexión del bloque Hub.
2. ¿Está elegido el puerto correcto? ¿Están los motores conectados donde crees?
3. ¿Está activada la fila y sin marco rojo?
4. ¿Se está ejecutando el programa (**Ejecutar**)?
5. ¿Está cargada la batería? Añade una fila *Batería → Indicador* para vigilarla.

Más información en [Solución de problemas](/docs/Help/Troubleshooting).
