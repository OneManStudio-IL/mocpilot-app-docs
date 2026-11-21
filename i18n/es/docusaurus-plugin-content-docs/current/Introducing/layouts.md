---
id: Layouts
title: Teléfono, tablet y escritorio
description: "Dónde está cada cosa en los diseños de teléfono, tablet y escritorio de MOCPilot, además de los menús y atajos de teclado del escritorio."
---

import Screenshot from '@site/src/components/Screenshot';

# Teléfono, tablet y escritorio {#phone-tablet-and-desktop}

MOCPilot tiene tres diseños, y la app elige uno automáticamente:

- **Teléfono**: iPhone y teléfonos Android.
- **Tablet**: iPad y tablets Android (de 7 pulgadas o más).
- **Escritorio**: ordenadores Mac y Windows. El [editor web](/docs/Introducing/WebEditor) en un navegador también usa el editor de escritorio.

Los perfiles, los editores y el panel son iguales en todas partes; solo cambia la navegación.

## Teléfono {#phone}

<Screenshot name="profiles-phone" alt="Página Mis perfiles en un teléfono con la barra inferior" width={360} />

- La **barra inferior** tiene **Perfiles**, **Configuración** y **Ayuda**, además de **Notificaciones** cuando has iniciado sesión.
- **Cuenta** está en la parte superior de **Configuración**.
- La cabecera de **Mis perfiles** tiene **Ordenar y filtrar**, **Conectar un mando remoto** (el icono del mando a distancia), **+** (Nuevo perfil, Importar perfil…, Buscar en línea) y el campo de búsqueda.
- Las pantallas principales están en vertical. Al abrir un perfil, la app pasa a **horizontal, pantalla completa**, para que el editor y el panel aprovechen toda la pantalla. Al cerrar el perfil vuelve la orientación vertical.
- En el editor, los botones redondos de la parte superior dan acceso rápido a Inicio, Deshacer, Rehacer, Asistente IA, Configuración del editor, Problemas (Enlaces rápidos), Gamepad, Mis hubs, Control remoto, Panel, Monitor (Bloques lógicos) y Ejecutar / Detener.

<Screenshot name="editor-phone" alt="Editor de perfiles en un teléfono con los botones redondos en la parte superior" width={900} />

## Tablet {#tablet}

<Screenshot name="profiles-tablet" alt="Página Mis perfiles en una tablet con la barra lateral" width={900} />

- La **barra lateral** de la izquierda tiene **Perfiles**, **Catálogo de perfiles**, **Notificaciones**, **Configuración** y **Ayuda**. Debajo están la tarjeta de **MocPilot Pro** y tu cuenta (**Iniciar sesión** en modo invitado). Puedes contraer la barra lateral para que solo muestre iconos.
- La cabecera de **Mis perfiles** tiene **Nuevo perfil** (su menú también incluye Importar perfil…, Conectar un mando remoto y Buscar en línea), **Ordenar y filtrar**, **Filtrar por hashtags**, **Conectar un mando remoto** y el campo de búsqueda.
- Toca la tarjeta de un perfil para seleccionarla: la barra inferior muestra **Compartir**, **Editar**, **Añadir a favoritos** y **Lanzar**. Toca dos veces una tarjeta para lanzar el perfil. Mantén pulsada una tarjeta para abrir su menú, que también incluye **Eliminar perfil**.
- En pantallas anchas, Configuración y Ayuda se abren junto a la lista.
- Un perfil se abre en horizontal, y el editor tiene los mismos botones redondos que en el teléfono.

## Escritorio (Mac y Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Mis perfiles en un ordenador" width={900} />

- A la derecha de la barra superior: **Cuenta** (**Iniciar sesión** en modo invitado), **Notificaciones** (cuando has iniciado sesión), **Conectar un mando remoto** (el icono del mando a distancia) y **Configuración** (el engranaje).
- Configuración, Ayuda, Cuenta, Nuevo perfil, Editar perfil, el Catálogo de perfiles y otras páginas se abren como **ventanas** sobre la lista de perfiles.
- Haz clic en la tarjeta de un perfil para ver qué puedes hacer con él (**Compartir…**, **Editar…**, **Añadir a favoritos**, **Lanzar**); con doble clic se lanza. Haz clic derecho en una tarjeta para abrir su menú, que también incluye **Eliminar perfil**.
- En el editor, el **Panel** se abre en su **propia ventana**, para que puedas ver el programa y el panel uno junto al otro.

### Menús {#menus}

En Windows, los menús están a la izquierda de la barra superior de la app. En Mac están en la barra de menús del sistema, en la parte superior de la pantalla.

| Menú | Windows | Mac |
|---|---|---|
| **MOCPilot** (menú de la app) | — | Acerca de MOCPilot, Configuración…, Salir |
| **Archivo** | Nuevo perfil, Importar perfil…, Buscar en línea, Salir | Nuevo perfil, Importar perfil…, Buscar en línea, Conectar un mando remoto… |
| **Ver** | Pantalla completa | Entrar / salir de pantalla completa |
| **Ventana** | Minimizar, Maximizar / Restaurar | Minimizar |
| **Ayuda** | Ayuda de MOCPilot, Hacer una pregunta, Informar de un error, Acerca de MOCPilot | Ayuda de MOCPilot, Hacer una pregunta, Informar de un error |

Cuando hay un perfil abierto, el editor tiene sus propios menús **Archivo**, **Editar**, **Ver** y **Programa** (consulta [Menús de escritorio](/docs/Application/BlockBuilder/Editor#desktop-menus)), y la ventana del Panel tiene **Archivo**, **Editar** y **Ver** (consulta [Panel](/docs/Application/Dashboard/DashboardOverview)).

### Atajos de teclado {#keyboard-shortcuts}

En Mac, ⌘ (Comando) hace lo mismo que Ctrl en Windows; ⇧ es Mayúsculas y ⌃ es Control.

**En todas partes**

| Acción | Windows | Mac |
|---|---|---|
| Configuración | Ctrl+2 | ⌘, |
| Entrar / salir de pantalla completa | F11 o Alt+Enter | ⌃⌘F |
| Minimizar la ventana | — | ⌘M |
| Salir | Alt+F4 | ⌘Q |

**Mis perfiles** (sin ningún perfil abierto)

| Acción | Windows | Mac |
|---|---|---|
| Nuevo perfil | Ctrl+N | ⌘N |
| Importar perfil | Ctrl+O | ⌘O |
| Buscar perfiles | Ctrl+F | — |
| Perfiles / Configuración / Ayuda / Cuenta | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Editor de perfiles**

| Acción | Windows | Mac |
|---|---|---|
| Cerrar el perfil | Ctrl+W | ⌘W |
| Ejecutar / Detener | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Deshacer / Rehacer | Ctrl+Z / Ctrl+Shift+Z o Ctrl+Y | ⌘Z / ⇧⌘Z |
| Mostrar el panel | Ctrl+2 | ⌘2 |
| Mis hubs | Ctrl+Shift+H | ⇧⌘H |
| Asistente IA | Ctrl+Shift+I | ⇧⌘I |
| Mostrar / ocultar la paleta de bloques (Bloques lógicos) | Ctrl+P | ⌘P |
| Buscar en la paleta de bloques (Bloques lógicos) | Ctrl+F | ⌘F |
| Monitor (Bloques lógicos) | Ctrl+Shift+M | ⇧⌘M |
| Acercar / alejar / tamaño real (Bloques lógicos) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Panel**

| Acción | Windows | Mac |
|---|---|---|
| Deshacer / Rehacer | Ctrl+Z / Ctrl+Shift+Z o Ctrl+Y | ⌘Z / ⇧⌘Z |
| Volver al programa (cuando el panel está en la ventana principal) | Ctrl+1 | ⌘1 |
| Cerrar la ventana del Panel | — | ⌘W |
| Salir del modo **Seleccionar** o cerrar el panel de propiedades | Esc | Esc |
| Eliminar el control (con el panel de propiedades abierto) | Supr o Retroceso | Delete o Backspace |
| Duplicar el control (con el panel de propiedades abierto) | Ctrl+D | ⌘D |

En una tablet con teclado, Ctrl+B (⌘B en un iPad) muestra u oculta la barra lateral.

## El editor de perfiles en cada diseño {#the-profile-editor-on-every-layout}

El editor no tiene pestañas. El **programa** (filas de Enlaces rápidos o Bloques lógicos) ocupa la pantalla, y los botones abren todo lo demás:

| Botón | Abre |
|---|---|
| **Mis hubs** | las [ranuras de hub](/docs/Application/Hubs/ConnectingHubs) del perfil |
| **Panel** | el [panel](/docs/Application/Dashboard/DashboardOverview) |
| **Gamepad** | la [configuración del gamepad](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | los valores de variables y listas (solo Bloques lógicos) |
| **Configuración del editor** | las [opciones del editor](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **Asistente IA** | el [asistente IA](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problemas** | las filas que no se pueden ejecutar (solo Enlaces rápidos) |
| **Control remoto** | ejecutar el perfil en otro dispositivo y controlarlo desde aquí (MocPilot Pro); consulta [Control remoto](/docs/Application/Profiles/RemoteControl) |
| **Ejecutar / Detener** | inicia y detiene el programa |
