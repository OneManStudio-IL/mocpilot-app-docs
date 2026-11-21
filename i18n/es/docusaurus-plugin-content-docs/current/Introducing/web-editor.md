---
id: WebEditor
title: Editor web
description: "Edita tus perfiles de MOCPilot en el navegador en mocpilot.com y conduce el modelo a través de la app en otro dispositivo."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor web en mocpilot.com {#web-editor-on-mocpilotcom}

El editor web es MOCPilot funcionando en tu navegador. Es la misma app, con los mismos editores, el mismo panel y los mismos temas, así que todo lo que dice esta documentación también se aplica a él.

Los navegadores no pueden comunicarse con hubs Bluetooth, así que el editor web sirve para **editar**. Para probar un perfil, ejecútalo en el navegador sin hubs; para conducir el modelo, deja que la app MOCPilot de un teléfono, una tablet o un ordenador conecte los hubs (consulta [Control remoto](/docs/Application/Profiles/RemoteControl)).

## Pruébalo sin cuenta {#try-it-without-an-account}

En la página de inicio de [mocpilot.com](https://mocpilot.com), cada editor (Bloques lógicos y Enlaces rápidos) tiene un botón **Probar la demo** que abre un perfil de demostración. La demo no necesita cuenta ni hubs. En ella puedes probar todos los temas y controles especiales; no se guarda nada.

## Edita tus propios perfiles {#edit-your-own-profiles}

1. Inicia sesión en [mocpilot.com](https://mocpilot.com) con tu cuenta de MOCPilot.
2. Abre tus perfiles y haz clic en **Editar** en uno de ellos.
3. Cambia los hubs, el panel o el programa, igual que en la app.
4. Cierra el perfil (el botón Inicio). El editor guarda el perfil y lo sube, y el cambio llega a la app de tus dispositivos mediante la [sincronización](/docs/Application/Account/Sync).

Notas:

- Solo puedes editar perfiles de la cuenta con la que has iniciado sesión. Si no, verás «Este perfil no está en tu cuenta» y un botón **Volver al sitio web**.
- Tus compras y MocPilot Pro funcionan en el navegador igual que en la app.
- En un navegador de escritorio, el panel es una ventana flotante que puedes arrastrar y redimensionar.
- Los temas se descargan de nuevo en cada visita (unos 15 MB), así que la primera apertura puede tardar un poco.
- Importar y exportar archivos `.dat` no está disponible en el navegador; usa la app.

## Ejecutar un perfil {#run-a-profile}

**Ejecutar** en el editor web ejecuta el perfil en el navegador: todos los bloques y filas funcionan salvo el Bluetooth, lo que viene bien para probar la lógica, los monitores y el panel. Cuando hay un dispositivo con hubs emparejado (MocPilot Pro, ver más abajo), **Ejecutar** inicia el perfil en ese dispositivo.

## Control remoto {#remote-control}

Con [MocPilot Pro](/docs/Application/Account/Pro), el editor web puede ser el **mando remoto**: la app MOCPilot de un teléfono, una tablet o un ordenador situado junto al modelo (el **dispositivo con los hubs**) conecta los hubs y ejecuta el perfil, y la página del navegador lo controla. Pulsa **Control remoto** en la barra superior del perfil y luego **Mostrar el código**; en el dispositivo con los hubs, toca **Conectar un mando remoto** en la página **Mis perfiles** y escanea el código. Consulta [Control remoto](/docs/Application/Profiles/RemoteControl).
