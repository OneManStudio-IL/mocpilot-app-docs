---
id: QuickStart
title: Inicio rápido
description: "Instala MOCPilot, inicia sesión, crea tu primer perfil y conduce un modelo en pocos minutos."
---

import Screenshot from '@site/src/components/Screenshot';

# Inicio rápido {#quick-start}

Esta guía te lleva desde la instalación de la app hasta conducir tu primer modelo. Necesitas un hub compatible con un motor; consulta [Dispositivos compatibles](/docs/Introducing/SupportedDevices).

## 1. Instala la app {#1-install-the-app}

MOCPilot está disponible en App Store (iPhone, iPad, Mac), Google Play (Android) y Microsoft Store (Windows). Encontrarás los enlaces en [mocpilot.com](https://mocpilot.com).

## 2. Inicia sesión o continúa sin cuenta {#2-sign-in-or-continue-without-an-account}

La primera vez que abres la app, te pide que inicies sesión. Usa tu correo electrónico o usuario y contraseña, Google o Apple ID, o crea una cuenta nueva.

<Screenshot name="sign-in" alt="La pantalla de inicio de sesión de MOCPilot" width={900} />

Te recomendamos crear una cuenta:

- tus perfiles y tu configuración se guardan en el servidor y se sincronizan entre tus dispositivos;
- puedes recuperar tus datos si cambias o pierdes un dispositivo;
- las compras y MocPilot Pro funcionan en todos tus dispositivos.

**Continuar sin una cuenta** también funciona, pero entonces todo se queda solo en este dispositivo y se pierde si desinstalas la app. Puedes iniciar sesión más tarde en **Configuración → Cuenta**. Consulta [Cuenta](/docs/Application/Account/UserAccount).

## 3. Oriéntate {#3-find-your-way-around}

- En un **teléfono**, la barra inferior tiene **Perfiles**, **Configuración** y **Ayuda** (y **Notificaciones** cuando hayas iniciado sesión).
- En una **tablet**, esas mismas secciones, el **Catálogo de perfiles** y tu cuenta están en la barra lateral.
- En un **ordenador**, usa la barra superior: los menús a la izquierda; Cuenta, Notificaciones y Configuración a la derecha.

Consulta [Teléfono, tablet y escritorio](/docs/Introducing/Layouts).

## 4. Crea un perfil {#4-create-a-profile}

1. En la página **Mis perfiles**, toca **+** → **Nuevo perfil** (teléfono), o elige **Nuevo perfil** (tablet y ordenador, o **Archivo → Nuevo perfil**).
2. Elige el **tipo de programa**:
   - **Enlaces rápidos** si quieres conducir un modelo sin código. Lo mejor para empezar.
   - **Bloques lógicos** si quieres eventos, bucles, condiciones y sensores.
3. Escribe un **nombre** y, si quieres, añade una imagen.
4. Toca **Crear**.

<Screenshot name="create-profile-tiles" alt="Página Nuevo perfil con los mosaicos Bloques lógicos y Enlaces rápidos" width={900} />

El perfil se abre en el editor. Más información en [Crear un perfil](/docs/Application/Profiles/CreateProfile).

:::tip ¿Quieres un modelo ya preparado?
Abre el **Catálogo de perfiles** (**Buscar en línea** en la página de perfiles) e instala un perfil oficial para tu set. Consulta [Catálogo y publicación](/docs/Application/Profiles/Catalog).
:::

## 5. Añade tu hub {#5-add-your-hub}

1. En el editor, abre **Mis hubs**.
2. Toca **Agregar un nuevo Hub** en una ranura libre, elige el modelo de tu hub y toca **Añadir**.
3. Enciende el hub, pulsa su botón y espera a que MOCPilot lo encuentre.

<Screenshot name="my-hubs" alt="Página Mis hubs con las ranuras de hub" width={900} />

Si la app pide una actualización de firmware, sigue [Actualizar el firmware](/docs/Application/Hubs/FirmwareUpdating). Más información en [Añadir y conectar un hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Coloca controles en el panel {#6-place-controls-on-the-dashboard}

1. Abre el **Panel**.
2. Toca **+** (**Añadir controlador**), elige un **Joystick** y toca **Añadir al panel**.
3. Arrástralo adonde quieras. Tócalo para cambiar su tamaño, color o comportamiento.

<Screenshot name="controller-palette" alt="Paleta Añadir controlador con el joystick seleccionado" width={900} />

Consulta [Añadir y organizar controles](/docs/Application/Dashboard/ArrangingControls).

## 7. Conecta el control a un motor {#7-connect-the-control-to-a-motor}

**Enlaces rápidos:** arrastra la entrada del joystick (por ejemplo, *JOY1 Eje Y*) desde **Entradas** hasta la fila vacía, añade la operación **Motor** y la salida **Hub** desde **Salidas**, y toca el puerto al que está conectado tu motor. La fila está lista cuando no tiene marco rojo. Consulta [Enlaces rápidos](/docs/Application/Links/LinksIntroducing).

**Bloques lógicos:** añade un bloque *cuando el programa comienza*, un bucle *repetir siempre* y un bloque *establecer velocidad del motor* que reciba el valor del joystick. Consulta [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) y los [ejemplos](/docs/Application/BlockBuilder/Examples).

## 8. Pulsa Ejecutar {#8-press-run}

Pulsa **Ejecutar** (▶). Mueve el joystick y el motor gira. Pulsa **Detener** para volver a editar.

¡Eso es todo! Siguientes pasos:

- Conoce todos los [tipos de controles](/docs/Application/Dashboard/ControlTypes).
- Dale un nuevo aspecto al panel con [temas](/docs/Application/Themes/ThemesOverview).
- Conecta un [gamepad](/docs/Application/Dashboard/Gamepad).
- Si algo no funciona, consulta [Solución de problemas](/docs/Help/Troubleshooting).
