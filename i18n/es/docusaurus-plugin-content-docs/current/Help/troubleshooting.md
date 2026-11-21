---
id: Troubleshooting
title: Solución de problemas
description: "Soluciones a problemas habituales con hubs, motores, el panel, la sincronización, las compras, las actualizaciones, el sonido, el asistente IA y el control remoto."
---

# Solución de problemas {#troubleshooting}

## Hubs {#hubs}

**No se encuentra el hub**
- Activa el Bluetooth y permite que MOCPilot lo use (en Android, también Dispositivos cercanos o Ubicación) en los ajustes del sistema. Consulta [Bluetooth y permisos](/docs/Help/BluetoothPermissions).
- Enciende el hub y pulsa su botón justo antes de buscar; vuelve a tocar **Iniciar escaneo**.
- Asegúrate de que el hub no está conectado a otro teléfono u otra app (apps de LEGO®, otro mando). Ciérralas.
- Cambia o carga las pilas.
- Robot Inventor: no disponible en iPhone ni iPad. Mould King 4.0: no disponible en Windows.

**El hub se desconecta**
- Acerca el dispositivo: las paredes, el metal y otros dispositivos de 2,4 GHz reducen el alcance.
- Las pilas gastadas provocan desconexiones bajo carga: cárgalas o cámbialas.
- Algunos hubs se apagan tras un rato sin recibir órdenes; vuelve a conectarlos en **Mis hubs**.
- Más sobre alcance, adaptadores y permisos: [Bluetooth y permisos](/docs/Help/BluetoothPermissions).

**«Se requiere actualización de firmware»**
- MOCPilot necesita un firmware compatible en los hubs Technic, Technic Move, BOOST y City. Sigue [Actualizar el firmware](/docs/Application/Hubs/FirmwareUpdating). Si una actualización ha fallado, consulta [Recuperación del firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King no reacciona**
- Los hubs Mould King solo reciben órdenes. Usa **Conectar de nuevo**, comprueba el canal (**Seleccionar canal**) y usa un solo tipo de Mould King por perfil.

## Motores y programa {#motors-and-the-program}

**El motor no se mueve**
- ¿Se está ejecutando el programa (**Ejecutar**)? ¿Está conectado el hub?
- ¿Está el motor en el puerto que usa el programa? Revisa el [monitor del hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Enlaces rápidos: abre **Problemas**; sigue los valores en directo a lo largo de la fila. Consulta [Ejecución y solución de problemas](/docs/Application/Links/Problems).
- Bloques lógicos: ¿empieza el script con un bloque de evento? Usa el **Monitor** para observar los valores.

**El motor gira al revés**
- Enlaces rápidos: añade **Invertir** a la fila. Bloques lógicos: multiplica el valor por −1.

**El motor se mueve lentamente o zumba con el joystick suelto**
- Enlaces rápidos: añade **Zona muerta**. Bloques lógicos: ignora los valores pequeños con *entre*.

**La dirección por servo está descentrada o choca con el tope**
- Enlaces rápidos: Servo con calibración **Auto**, o **Manual** con **Fijar como cero** y **Centro**; reduce el **Ángulo**. Bloques lógicos: *calibrar barra de dirección*.
- Servo, Girar grados e Ir a la posición necesitan motores con encoder; los motores simples y los puertos de SBrick solo admiten velocidad.

**Los motores siguen girando después de Detener**
- Bloques lógicos: activa **Detener puertos del hub cuando se detenga el programa** en la Configuración del editor.

## Panel {#dashboard}

**No puedo mover ni eliminar un control**
- Está bloqueado: usa **Desbloquear** en su menú. Un control que usa el programa no se puede eliminar hasta que quites sus filas o bloques.

**«There is no available space on the dashboard»**
- Mueve o reduce otros controles, o elige un tamaño más pequeño.

**Un tema o un control está bloqueado**
- No lo tienes: cómpralo o consigue [MocPilot Pro](/docs/Application/Account/Pro), o cambia el control al tema Básico con **Cambiar tema**.

**No se detecta el gamepad**
- Empareja el gamepad en los ajustes de Bluetooth del sistema (o conéctalo por USB). La página **Gamepad** muestra **Gamepad: (nombre)** cuando la app lo ve, y «Gamepad is not connected» cuando no.
- Activa **Habilitar bloques de gamepad** en la página **Gamepad**; si no, las entradas y los bloques del gamepad no aparecen.
- ¿Hay varios gamepads conectados? Elige uno en **Seleccionar gamepad**.
- Comprueba los botones y los sticks con **Probar gamepad**.
- Windows: funcionan los mandos Xbox (XInput) y Sony DualSense / DualSense Edge; puede que otros mandos sin compatibilidad con XInput no funcionen.
- Consulta [Gamepad](/docs/Application/Dashboard/Gamepad).

## Perfiles y sincronización {#profiles-and-sync}

**Mis perfiles no están en mi otro dispositivo**
- Inicia sesión con la misma cuenta en los dos dispositivos y comprueba la conexión a internet. Si la app muestra **Sin conexión**, toca **Reintentar** o **Conectarse**.

**«El perfil no es compatible»**
- El perfil se creó con una versión más reciente de MOCPilot. Actualiza la app.

**He perdido mis perfiles al reinstalar**
- En modo invitado, los perfiles solo existen en el dispositivo y se pierden con la app. Con una cuenta, vuelve a iniciar sesión y reaparecerán.

## Correos de la cuenta {#account-emails}

**No llega el correo de activación o el código para restablecer la contraseña**
- Espera unos minutos y revisa la carpeta de spam o correo no deseado. Los correos llegan desde no-reply@mocpilot.com.
- Comprueba que escribiste bien la dirección de correo.
- Activación: abre la página de tu cuenta y toca **Reenviar correo de activación**. Hasta que la cuenta esté verificada, algunas funciones siguen desactivadas.
- Restablecer la contraseña: «Correo electrónico no encontrado» significa que no hay ninguna cuenta con ese correo; prueba con la dirección con la que te registraste. Si no, vuelve a tocar **Restablecer** junto a «¿Olvidaste tu contraseña?» para recibir un código nuevo. Consulta [Cuenta](/docs/Application/Account/UserAccount).

## Compras {#purchases}

**Falta una compra**
- Inicia sesión con la cuenta con la que hiciste la compra y ve a **Cuenta → Compras → Restaurar**.
- «Suscripción vinculada a otra cuenta»: la suscripción Pro de esta cuenta de la tienda pertenece a otra cuenta de MOCPilot.

**«MocPilot Pro necesita una comprobación en línea»**
- Pro se ha usado sin conexión durante mucho tiempo. Conéctate a internet y la comprobación se hará sola.

## Actualizaciones de la app {#app-updates}

**«Actualización necesaria»**
- El mensaje a pantalla completa «Esta versión de MOCPilot ya no es compatible…» significa que esta versión ya no se puede usar. Toca **Actualizar** para abrir la tienda e instalar la versión nueva. La pantalla también muestra tu **Versión instalada**.
- En el editor web, el botón es **Recargar página**: se carga el editor más reciente.

**«MOCPilot (versión) está disponible»**
- Ha salido una versión más reciente. Toca **Actualizar** (en el editor web, **Recargar página**) o cierra el aviso con ×: no volverá a aparecer hasta la siguiente versión.

## Sonido {#sound}

**No hay sonido**
- Activa **Sonido** en [Configuración](/docs/Application/Account/Settings): al desactivarlo se silencian todos los sonidos de la app, de los controles y de los programas.
- Sube el volumen multimedia del dispositivo. Si hay auriculares o un altavoz Bluetooth conectados, el sonido sale por ellos.
- Bloques lógicos: comprueba que el programa no pone el volumen a 0 ni detiene todos los sonidos. Consulta [Sonidos](/docs/Application/BlockBuilder/Blocks/Sounds).

## Asistente IA {#ai-builder}

**El asistente IA no está disponible o muestra un error**
- El asistente IA necesita [MocPilot Pro](/docs/Application/Account/Pro) y conexión a internet: «El asistente IA requiere MocPilot Pro.» o «No se pudo contactar con el servicio de IA. Comprueba tu conexión a internet e inténtalo de nuevo.»
- «El servicio de IA no está disponible temporalmente. Inténtalo más tarde.» o «Hay demasiadas solicitudes a la IA ahora mismo. Inténtalo dentro de un minuto.»: espera y vuelve a intentarlo.
- Hay límites diarios y mensuales: «Has alcanzado el límite diario de solicitudes a la IA. Inténtalo de nuevo mañana.»
- Entrada por voz: permite el micrófono (y el reconocimiento de voz en dispositivos Apple) en los ajustes del sistema; consulta [Bluetooth y permisos](/docs/Help/BluetoothPermissions).
- Todos los mensajes y qué hacer: [Asistente IA](/docs/Application/Profiles/AiBuilder).

## Control remoto {#remote-control}

**El dispositivo con los hubs no se conecta o la conexión se corta**
- «El control remoto forma parte de MocPilot Pro»: la cuenta del mando remoto necesita [MocPilot Pro](/docs/Application/Account/Pro).
- «El código ha caducado…» o «Código incorrecto o caducado…»: el código de conexión es válido durante 5 minutos. Muestra un código nuevo en el mando remoto y vuelve a escanearlo o a escribirlo.
- «Permite que MOCPilot use la cámara en los ajustes del sistema para escanear el código.»: permite la cámara en los ajustes del sistema ([cómo](/docs/Help/BluetoothPermissions)), o toca **Introducir código** y escribe los 6 dígitos.
- «Esta versión de la app no puede conectarse a un mando remoto» o «El otro dispositivo no pudo abrir el perfil»: actualiza MOCPilot en los dos dispositivos.
- «Se perdió la conexión con el mando…»: comprueba que los dos dispositivos están en línea. Si la conexión se pierde durante unos 4 segundos, el dispositivo con los hubs detiene el perfil y todos los motores.
- Más información: [Control remoto](/docs/Application/Profiles/RemoteControl).

## ¿Sigues sin solución? {#still-stuck}

Usa **Hacer una pregunta** o **Informar de un error** en la **Ayuda** de la app (en ordenador, el menú **Ayuda**). La respuesta llega por correo electrónico y en **Notificaciones**.
