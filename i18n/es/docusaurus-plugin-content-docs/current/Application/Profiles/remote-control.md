---
id: RemoteControl
title: Control remoto
description: "Ejecuta un perfil en el teléfono, la tablet o el ordenador situado junto al modelo y contrólalo desde otro dispositivo o desde el editor web."
---

import Screenshot from '@site/src/components/Screenshot';

# Control remoto {#remote-control}

El control remoto te permite conducir un modelo conectado a otro dispositivo. Un dispositivo se queda junto al modelo y se comunica con los hubs por Bluetooth; tú sostienes el otro y usas su panel. También es la forma de conducir un modelo desde el [editor web](/docs/Introducing/WebEditor), porque los navegadores no pueden conectarse a los hubs.

## Los dos dispositivos {#the-two-devices}

- El **dispositivo con los hubs** es el teléfono, la tablet o el ordenador que está junto al modelo. Su app MOCPilot conecta los hubs y ejecuta el perfil. No necesita cuenta.
- El **mando remoto** es desde donde controlas: la app MOCPilot en otro dispositivo o el editor web en [mocpilot.com](https://mocpilot.com). El perfil se abre en el mando remoto, y el mando remoto lo envía al dispositivo con los hubs.

## Qué necesitas {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) en la cuenta con la que se ha iniciado sesión en el **mando remoto**. El dispositivo con los hubs no necesita cuenta ni Pro.
- La app MOCPilot en el dispositivo con los hubs.
- Conexión a internet en los dos dispositivos.

## Conectar el dispositivo con los hubs {#connect-a-hub-device}

1. En el mando remoto, abre el perfil y pulsa **Control remoto** (el icono del mando a distancia: una casa con ondas de señal) en la barra superior del perfil. En el editor web, pulsa **Mostrar el código** en el panel que se abre.

   El mando remoto muestra un **código de conexión**: un código QR y 6 dígitos.
2. En el dispositivo con los hubs, abre MOCPilot y toca **Conectar un mando remoto** en la página **Mis perfiles**. En Mac también puedes elegir **Archivo → Conectar un mando remoto…**.
3. Introduce el código:
   - **en un teléfono o una tablet**, apunta la cámara al código QR, o toca **Introducir código** y escribe los 6 dígitos;
   - **en un ordenador**, escribe los 6 dígitos y pulsa **Conectar**.
4. Los dispositivos se conectan. El mando remoto envía el perfil al dispositivo con los hubs y lo inicia allí, y el dispositivo con los hubs muestra la página **Control remoto** a pantalla completa.

<Screenshot name="remote-control-code" alt="Panel Control remoto en un perfil abierto con el código QR y el código de 6 dígitos" width={900} />

Sobre el código de conexión:

- Funciona una sola vez y es válido durante 5 minutos. Mientras el mando remoto lo siga mostrando, un código nuevo lo sustituye cuando caduca.
- Escanéalo con la app MOCPilot, no con la app de cámara del teléfono.
- Si cierras el panel en el mando remoto antes de que se conecte el dispositivo con los hubs, no se configura nada; vuelve a pulsar **Control remoto** para obtener un código nuevo.

<Screenshot name="remote-connect-code-entry" alt="Ventana Conectar un mando remoto en un ordenador con el campo para los 6 dígitos" width={900} />

## Cuando los dispositivos están conectados {#when-the-devices-are-connected}

**En el mando remoto:**

- El botón **Control remoto** se pone verde (en un teléfono o una tablet, un anillo verde), y su panel muestra el nombre del dispositivo con los hubs y un botón **Desconectar**.
- **Mis hubs** muestra los hubs del dispositivo con los hubs. Conecta los hubs desde ahí como siempre: el dispositivo con los hubs los busca, así que pulsa el botón del hub cuando se te pida.
- El panel controla el modelo.

**En el dispositivo con los hubs**, la página **Control remoto** a pantalla completa muestra:

- el estado, por ejemplo **Ejecutando «Mi coche»**;
- **Hubs conectados: N** y, mientras busca, **Buscando un hub: pulsa el botón del hub.**;
- un recordatorio: **Mantén esta aplicación abierta. Es el dispositivo con los hubs: conecta los hubs y ejecuta el perfil; el mando remoto solo lo controla.**;
- un botón **Detener**.

La pantalla del dispositivo con los hubs permanece encendida mientras está conectado. El perfil no se guarda en el dispositivo con los hubs y no aparece en su lista de perfiles.

<Screenshot name="remote-hub-device" alt="Página Control remoto a pantalla completa en el dispositivo con los hubs con el estado de la conexión, el número de hubs conectados y el botón Detener" width={900} />

## Ejecutar y Detener {#run-and-stop}

- Pulsa **Detener** en el mando remoto para detener el perfil en el dispositivo con los hubs. El dispositivo con los hubs siempre detiene todos los motores, aunque **Detener puertos del hub cuando se detenga el programa** esté desactivado en el perfil.
- Pulsa **Ejecutar** en el mando remoto para volver a iniciarlo en el dispositivo con los hubs.
- En el editor web, el dispositivo con los hubs sigue emparejado para todos los perfiles que abras en la misma pestaña del navegador: **Ejecutar** inicia el perfil en el dispositivo con los hubs. Cuando no hay ningún dispositivo con hubs emparejado, **Ejecutar** ejecuta el perfil en el navegador, sin hubs.

## Si se corta la conexión {#if-the-connection-drops}

:::caution Seguridad
Si el dispositivo con los hubs no recibe nada del mando remoto durante 4 segundos, detiene el perfil y todos los motores.
:::

Entonces:

- el dispositivo con los hubs muestra **Se perdió la conexión con el mando. El perfil se ha detenido. Esperando al mando…** y espera;
- la app del mando remoto muestra **Se perdió la conexión. Reintentando…** con **Reintentar** y **Desconectar**;
- el editor web muestra **El dispositivo con los hubs se ha desconectado**: «*dispositivo* ha dejado de responder. El perfil en él se ha detenido y sus motores se han apagado.» Sigue intentando reconectarse; también puedes pulsar **Reconectar**, **Ejecutar en el navegador** o **Detener**.

Cuando los dispositivos vuelvan a conectarse, comprueba el estado en el mando remoto y pulsa **Ejecutar** si el perfil no se está ejecutando.

## Desconectar {#disconnect}

- **En el mando remoto**: pulsa **Control remoto** y elige **Desconectar**.
- **En el dispositivo con los hubs**: pulsa **Detener** en la página **Control remoto**.

En ambos casos, el perfil y los motores se detienen, y el dispositivo con los hubs cierra el perfil.

## Solución de problemas {#troubleshooting}

| Mensaje | Dónde | Qué hacer |
|---|---|---|
| **El control remoto forma parte de MocPilot Pro** | mando remoto | Suscríbete a [MocPilot Pro](/docs/Application/Account/Pro) con la cuenta del mando remoto. No es posible suscribirse en el navegador: hazlo en la app, y Pro funcionará también en el editor web |
| **Sin conexión con el servidor** | cualquiera | Comprueba la conexión a internet y vuelve a intentarlo |
| **No se pudo obtener un código del servidor** | mando remoto | Pulsa **Mostrar el código** para volver a intentarlo |
| **Código incorrecto o caducado. Comprueba los 6 dígitos que se muestran en el mando.** | dispositivo con los hubs | Escribe los 6 dígitos que muestra el mando remoto en este momento |
| **El código ha caducado. Muestra un código nuevo en el mando y escanéalo de nuevo.** | dispositivo con los hubs | Pulsa **Control remoto** en el mando remoto y escanea el código nuevo |
| **Este no es un código de MOCPilot. Escanea el código que muestra el mando remoto.** | dispositivo con los hubs | Escanea el código QR del panel **Control remoto** del mando remoto |
| **Demasiados códigos incorrectos. Inténtalo de nuevo en unos minutos.** | dispositivo con los hubs | Espera unos minutos y luego introduce el código actual |
| **Permite que MOCPilot use la cámara en los ajustes del sistema para escanear el código.** | dispositivo con los hubs | Permite el acceso a la cámara en los ajustes del sistema, o toca **Introducir código** y escribe los 6 dígitos |
| **El mando remoto no responde. Comprueba que tiene el perfil abierto y que está en línea.** | dispositivo con los hubs | Mantén el perfil abierto en el mando remoto y comprueba su conexión a internet |
| **Esta versión de la app no puede conectarse a un mando remoto** | cualquiera | Actualiza MOCPilot |
| **Este navegador no puede abrir una conexión directa (WebRTC)** | editor web | Usa otro navegador, por ejemplo Chrome, Edge o Safari |
| **El perfil es demasiado grande** / **El perfil no llegó completo** | cualquiera | Comprueba la conexión y vuelve a pulsar **Ejecutar** |
| **El otro dispositivo no pudo guardar el perfil** / **El otro dispositivo no pudo abrir el perfil** | mando remoto | Vuelve a pulsar **Ejecutar**; si sigue ocurriendo, desconecta y vuelve a conectar el dispositivo con los hubs |
| **Se perdió la conexión con *dispositivo*** / **Se perdió la conexión con el mando. Esperando…** | cualquiera | Consulta [Si se corta la conexión](#if-the-connection-drops) |
