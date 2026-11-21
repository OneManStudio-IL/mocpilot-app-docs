---
id: AiBuilder
title: Asistente IA
description: "Describe tu modelo con palabras o por voz, y el asistente IA configura los hubs, el panel y el programa de un perfil de Bloques lógicos o de Enlaces rápidos."
---

import Screenshot from '@site/src/components/Screenshot';

# Asistente IA {#ai-builder}

Describe tu modelo con tus propias palabras, por escrito o de viva voz, y el **asistente IA** configura el perfil por ti: los hubs y los puertos, los controles del panel y el programa. Funciona en los dos editores: en un perfil de [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) crea bloques, y en uno de [Enlaces rápidos](/docs/Application/Links/LinksIntroducing) crea filas. Después puedes seguir hablando con él para cambiar el perfil, o editarlo tú mismo.

El asistente IA forma parte de [MocPilot Pro](/docs/Application/Account/Pro) y funciona en la app y en el [editor web](/docs/Introducing/WebEditor). Necesita conexión a internet.

<Screenshot name="blocks-ai-builder" alt="Panel del asistente IA junto al programa" width={900} />

## Abrir el asistente IA {#open-the-ai-builder}

1. Abre un perfil para editarlo.
2. Pulsa el botón **Asistente IA** (el icono de los destellos) en la barra superior. En un ordenador también puedes pulsar ⇧⌘I / Ctrl+Shift+I.
3. Escribe tu petición en **¿Qué debe crear o cambiar la IA?** y pulsa **Enviar** (o Intro; Mayúsculas+Intro empieza una línea nueva).

Sin MocPilot Pro, el botón muestra lo que hace el asistente IA, con **Obtener MocPilot Pro** y **Ahora no**.

Dónde se abre el panel:

- **Teléfono**: una página a pantalla completa sobre el editor.
- **Tablet**: una tarjeta flotante; arrástrala por la cabecera hacia el lado izquierdo o derecho.
- **Ordenador**: una tarjeta a la derecha. En la app (no en el navegador) puedes pulsar **Abrir en una ventana aparte** en su cabecera y colocar la ventana junto al editor.

Mientras la IA trabaja, el panel muestra lo que está haciendo (**Pensando en tu modelo…**, **Comprobando el perfil…**, etc.). Los cambios aparecen en el editor en cuanto termina, junto con un breve resumen de lo que ha cambiado. Cuando el panel está vacío, sugiere algunas peticiones de ejemplo: toca una para ponerla en el campo de texto y envíala tal cual o modifícala antes.

La conversación se guarda para cada perfil, así que puedes cerrar el panel y volver a ella más tarde.

## Escribir una buena petición {#ai-builder-tips}

:::tip Indica qué hub usas, qué hay conectado a cada puerto y qué debe hacer
Una petición de una línea como «un coche con luces» no basta: la IA tiene que adivinar el hub, los puertos y qué hace cada motor, y probablemente habrá que corregir el resultado. Incluye:

- **El hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Qué hay en cada puerto**: un motor de tracción, un motor de dirección (servo), luces, un sensor.
- **Qué debe hacer cada uno**: avanzar, girar con calibración, encenderse y apagarse, un límite de velocidad.
- **Cómo quieres controlarlo**: joysticks, deslizadores, botones, un gamepad.
:::

Explícalo como se lo explicarías a un amigo. Puedes escribir en tu propio idioma.

Si algo sigue sin estar bien, dile a la IA qué cambiar en lugar de empezar de cero.

## Peticiones de ejemplo {#example-requests}

**Un coche**: «Un coche con un Technic Hub: el motor de tracción está en el puerto A, el motor de dirección en el puerto C funciona como servo y las luces están en el puerto D. Joystick de dirección a la izquierda, acelerador a la derecha y un botón que encienda y apague las luces.»

**Una grúa**: «Una grúa con un Technic Hub: el motor de giro está en el puerto A, el motor de la pluma en el puerto B y el cabrestante del gancho en el puerto C. Un deslizador para el giro, botones de subir/bajar para la pluma, un joystick para el gancho y la velocidad de la pluma limitada al 50 %.»

**Un tren**: «Un tren City con un City Hub: el motor del tren está en el puerto A y las luces en el puerto B. Un interruptor de paso para la velocidad, un velocímetro y un botón para las luces.»

## Cambiar un perfil existente {#change-an-existing-profile}

Abre el asistente IA en un perfil que ya tengas, incluso uno creado a mano, y dile qué cambiar. La IA ve los hubs, el panel y el programa actuales y los edita:

- «Haz que la dirección sea más lenta.»
- «Añade un botón de parada.»
- «Copia los controles a mi gamepad.»
- «Limita la velocidad de la pluma al 50 %.»

También puedes preguntar sobre el perfil, por ejemplo «¿En qué puerto están las luces?». La IA responde en el panel y deja el perfil como está.

## Qué le pasa a tu perfil {#what-happens-to-your-profile}

- La IA modifica directamente el perfil abierto: los hubs, el panel y el programa se actualizan a la vez. Si el programa se está ejecutando, se detiene.
- La IA trabaja con el tipo de programa del perfil: en un perfil de Bloques lógicos escribe bloques, y en uno de Enlaces rápidos escribe filas. Nunca convierte uno en otro. Si una petición necesita algo que las filas de Enlaces rápidos no pueden hacer, la IA te dice que hace falta un perfil de Bloques lógicos.
- Las partes del perfil que la IA no necesita cambiar se quedan como están.
- **Deshacer el último cambio de la IA** (el botón de deshacer en la cabecera del panel) devuelve el perfil al estado anterior al último cambio de la IA. Púlsalo de nuevo para retroceder más, hasta 10 cambios. El historial de deshacer se borra al abrir otro perfil.
- Puedes seguir editando el perfil tú mismo en cualquier momento.

## Entrada por voz {#voice-input}

Pulsa **Dictar** (el botón del micrófono) y di tu petición; el texto aparece en el campo y puedes corregirlo antes de enviarlo. Vuelve a pulsar el botón para parar. Si hay varios idiomas disponibles, el pequeño botón de idioma junto al micrófono cambia el idioma del dictado; la app recuerda tu elección.

| Dónde | Cómo |
|---|---|
| iPhone, iPad, Mac | **Dictar**; la primera vez, permite el acceso al micrófono y el reconocimiento de voz |
| Android | **Dictar**; la primera vez, permite el acceso al micrófono |
| Windows | pulsa **Win+H** para dictar con el dictado por voz de Windows (el botón del micrófono te lo recuerda) |
| Editor web | **Dictar** en Chrome, Edge y Safari; permite el acceso al micrófono para el sitio. Firefox no tiene dictado |

Mensajes de la entrada por voz:

| Mensaje | Qué hacer |
|---|---|
| **Permite el acceso al micrófono para MOCPilot en los ajustes del sistema** | Activa el acceso al micrófono para MOCPilot en los ajustes del sistema |
| **Permite el reconocimiento de voz para MOCPilot en los ajustes del sistema** | En un dispositivo Apple, activa el reconocimiento de voz para MOCPilot en los ajustes del sistema |
| **Permite el acceso al micrófono para este sitio en el navegador** | Permite el micrófono en la configuración del sitio del navegador |
| **No se ha oído nada** | Pulsa **Dictar** y vuelve a hablar |
| **La entrada de voz necesita conexión** | Conéctate a internet o escribe la petición |
| **El reconocimiento de voz no está disponible para este idioma por ahora** | Cambia el idioma del dictado o escribe la petición |
| **No se encontró ningún micrófono** / **La entrada de voz no está disponible en este dispositivo** | Escribe la petición |

## Límites {#limits}

- Unas 30 peticiones al día y un límite mensual. La cabecera del panel muestra cuánto has usado: **Hoy 5/30 · Mes 12%**.
- Durante la prueba gratuita, el número de peticiones a la IA es limitado; continúan cuando empieza la suscripción.
- Una petición cada vez: espera la respuesta antes de enviar la siguiente.
- El asistente IA solo crea y edita perfiles. No responde preguntas sobre otros temas.

## Mensajes de error {#error-messages}

| Mensaje | Qué hacer |
|---|---|
| **El generador de IA no está disponible** / **No se pudo contactar con el servicio de IA. Comprueba tu conexión a internet e inténtalo de nuevo.** | Comprueba tu conexión a internet y vuelve a abrir el panel |
| **No hay conexión con el servicio de IA. Comprueba tu conexión a internet e inténtalo de nuevo.** | Comprueba la conexión y vuelve a enviar la petición |
| **Se perdió la conexión con el servicio de IA…** | Cuando vuelvas a estar en línea, la respuesta aparecerá en el panel; si no, vuelve a enviar la petición |
| **La IA no respondió a tiempo. Envía la solicitud de nuevo.** / **La solicitud se ha perdido, envíala de nuevo** | Vuelve a enviar la petición |
| **La IA no pudo crear un perfil que funcione para esta solicitud. Prueba a decirlo con otras palabras.** | Reformula la petición: indica el hub, los puertos y qué hace cada uno |
| **El perfil es demasiado grande para crearlo de una vez. Pide menos cosas a la vez.** | Divide la petición en pasos más pequeños |
| **La IA rechazó esta solicitud.** | Reformula la petición para que trate sobre el perfil |
| **Has alcanzado el límite diario de solicitudes a la IA. Inténtalo de nuevo mañana.** | Espera hasta mañana o edita el perfil tú mismo |
| **Has alcanzado el límite mensual de la IA.** | El límite se restablece el mes que viene |
| **Has usado todas las solicitudes de IA de la prueba gratuita. Continuarán cuando empiece la suscripción.** | Espera a que empiece la suscripción |
| **El asistente IA solo crea y edita perfiles. Demasiadas solicitudes sobre otros temas: inténtalo de nuevo en una hora.** | Espera una hora y pregunta solo sobre el perfil |
| **Hay demasiadas solicitudes a la IA ahora mismo. Inténtalo dentro de un minuto.** | Vuelve a intentarlo dentro de un minuto |
| **La solicitud anterior aún está en curso.** | Espera la respuesta |
| **El servicio de IA no está disponible temporalmente. Inténtalo más tarde.** / **Tienes MocPilot Pro. El asistente IA no está disponible ahora mismo, inténtalo de nuevo más tarde.** | Vuelve a intentarlo más tarde |
| **La respuesta era para otro perfil** | Abriste otro perfil mientras la IA trabajaba, así que el cambio no se aplicó. Vuelve a abrir el primer perfil y repite la petición |
| **Primero abre un perfil para editarlo** | Abre el perfil en el editor y luego envía la petición |
| **No se pudo actualizar el perfil en el editor** / **No se pudo deshacer el cambio** | Vuelve a intentarlo; si sigue ocurriendo, cierra y vuelve a abrir el perfil |
