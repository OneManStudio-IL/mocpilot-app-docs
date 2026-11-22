---
id: Editor
title: Trabajar en el editor
description: "Barra superior, paleta, arrastrar bloques, zoom, menús contextuales, deshacer, Monitor, Mochila, Configuración del editor y el Asistente IA en Bloques lógicos."
---

import Screenshot from '@site/src/components/Screenshot';

# Trabajar en el editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor de Bloques lógicos" width={900} />

## Barra superior {#top-bar}

- **Ordenador y editor web**: **Inicio** y los menús a la izquierda, con **Deshacer** y **Rehacer** al lado. En el centro: el nombre del perfil y **Panel**, **Hubs** y **Gamepad**. A la derecha: **Asistente IA**, [**Mochila**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Más** (⋯), **Control remoto** y el botón naranja **Ejecutar**. En una ventana estrecha, los botones que no caben pasan a **Más**, que siempre incluye **Configuración del editor…**.
- **Teléfono y tablet**: **Inicio** a la izquierda; a la derecha, **Deshacer**, **Rehacer**, **Panel**, **Mis hubs**, **Control remoto**, **Más** y **Ejecutar / Detener**. **Más** incluye **Asistente IA**, **Mochila**, **Monitor**, **Gamepad** y **Configuración del editor**.

Consulta [Teléfono, tablet y escritorio](/docs/Introducing/Layouts#editor-top-bar) para ver cómo se pliega la barra en una ventana estrecha.

## Paleta y área del programa {#palette-and-program-area}

- Muestra u oculta la paleta con **Ver → Paleta de bloques** (⌘P / Ctrl+P).
- Elige una categoría, arrastra un bloque al área del programa y suéltalo debajo de otro bloque para encajarlo. Una vista previa muestra dónde se acoplará.
- Arrastra una pila entera desde su bloque superior; arrastra un bloque del medio para llevártelo junto con todo lo que tiene debajo.
- Para eliminar bloques, arrástralos de vuelta a la paleta.
- Las variables, las listas, los mensajes y Mis bloques se crean con los botones de sus categorías (**Crear una variable**, **Crear una lista**, **Agregar mensaje**, **Crear un bloque**) o desde **Editar → Nueva variable… / Nueva lista… / Nuevo mensaje… / Nuevo bloque…**. Los sonidos y los vehículos también tienen sus propios botones: **Añadir sonido** en [Sonidos](/docs/Application/BlockBuilder/Blocks/Sounds) y **Crear vehículo** en [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom y desplazamiento {#zoom-and-scroll}

- Pellizca (en una pantalla táctil) o usa **Ver → Acercar / Alejar / Tamaño real** (⌘+ / ⌘− / ⌘0).
- Arrastra un punto vacío para moverte.
- El menú contextual de un punto vacío tiene **Acercar**, **Alejar**, **Restablecer zoom** y **Eliminar N bloques**.

## Menú del bloque {#block-menu}

Mantén pulsado (en una pantalla táctil) o haz clic con el botón derecho en un bloque:

- **Editar**: cambia sus valores;
- **Duplicar**;
- **Eliminar bloque** / **Eliminar N bloques**;
- **Añadir a la mochila**: guarda el bloque y todo lo que tiene enganchado en la [mochila](/docs/Application/BlockBuilder/Backpack);
- **Acerca del bloque**: abre la descripción del bloque en esta documentación;
- **Exportar bloque como SVG** / **Exportar todos los bloques como SVG**: guarda una imagen para un tutorial o una publicación en un foro.

<Screenshot name="blocks-block-menu" alt="Menú contextual de un bloque en Bloques lógicos" width={900} />

Un bloque vinculado a un control del panel solo se puede eliminar después de desvincularlo de ese control.

## Deshacer y rehacer {#undo-and-redo}

Usa **Editar → Deshacer / Rehacer** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) o los botones **Deshacer** y **Rehacer** de la barra superior (junto a los menús en un ordenador).

- Un arrastre es un paso; las ediciones rápidas del mismo valor se combinan en un solo paso.
- Deshacer funciona incluso mientras se ejecuta el programa.
- Crear o eliminar variables, listas, mensajes o Mis bloques también es un paso; deshacerlo detiene el programa en ejecución.
- Los valores guardados en variables y listas no se deshacen.
- El panel tiene su propio historial de deshacer.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Ver → Monitor**) muestra los valores actuales de las variables y las listas mientras se ejecuta el programa. Su botón está en la barra superior en un ordenador y en **Más** en un teléfono o una tablet. En un ordenador puedes abrirlo en una ventana aparte. Es de gran ayuda cuando buscas un error.

## Mochila {#backpack}

La **Mochila** (⇧⌘B / Ctrl+Shift+B, **Ver → Mochila**) guarda pilas de bloques para reutilizarlas en cualquier perfil: elige **Añadir a la mochila** en el menú de un bloque y luego toca o arrastra el elemento para insertarlo en cualquier programa. Su botón está junto a **Monitor** en la barra superior, o en **Más**. Consulta [Mochila](/docs/Application/BlockBuilder/Backpack).

<Screenshot name="blocks-monitor" alt="Monitor con variables y una lista mientras se ejecuta el programa" width={900} />

## Configuración del editor {#editor-settings}

Ábrela desde **Más → Configuración del editor** en la barra superior (en un ordenador, también desde **Programa → Configuración del editor…**).

- **Iniciar bloque al hacer clic**: al hacer clic en un bloque, este se ejecuta, así que puedes probarlo por separado; si el programa está detenido, también lo inicia.
- **Abrir el programa en el centro**: al abrir un perfil, el programa se muestra al 100 % en el centro del lienzo (o desde su esquina superior izquierda si es más grande), independientemente de dónde lo dejaste al editar. Se aplica a todos los perfiles de este dispositivo.
- **Detener puertos del hub cuando se detenga el programa**: detiene todos los motores y apaga todas las luces cuando pulsas **Detener**. Déjalo activado salvo que los motores tengan que mantener su estado.
- **Seleccionar nivel de bloques**: Principiante, Avanzado o Gurú.

<Screenshot name="blocks-editor-settings" alt="Panel de Configuración del editor en Bloques lógicos" width={900} />

## Niveles de bloques {#block-levels}

| Nivel | Muestra |
|---|---|
| **Principiante** | los bloques más sencillos; una paleta despejada para niños y primeros pasos |
| **Avanzado** | la lógica y los bloques de dispositivos más habituales |
| **Gurú** | el conjunto completo de bloques |

El nivel se guarda en el perfil. Los bloques que ya están en el programa siguen funcionando cuando bajas el nivel.

## Asistente IA {#ai-builder}

Con [MocPilot Pro](/docs/Application/Account/Pro), el **Asistente IA** (el botón de los destellos en la barra superior, **Más → Asistente IA** en un teléfono o una tablet, ⇧⌘I / Ctrl+Shift+I) configura los hubs, el panel y el programa a partir de una descripción que escribes o dictas, y después cambia el perfil según le pidas. Funciona en perfiles de Bloques lógicos y de Enlaces rápidos. Consulta [Asistente IA](/docs/Application/Profiles/AiBuilder).

### Cómo obtener un buen resultado {#ai-builder-tips}

Indica el hub, qué hay conectado a cada puerto y qué debe hacer, y cómo quieres controlarlo. Consulta [Escribir una buena petición](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menús de escritorio {#desktop-menus}

| Menú | Elementos |
|---|---|
| Archivo | Cerrar perfil (⌘W) |
| Editar | Deshacer, Rehacer, Nueva variable…, Nueva lista…, Nuevo mensaje…, Nuevo bloque… |
| Ver | Paleta de bloques (⌘P), [Mochila](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Acercar, Alejar, Tamaño real |
| Programa | Ejecutar (⌘R), Detener (⌘.), Configuración del editor… |

En Windows, usa Ctrl en lugar de ⌘ y Shift en lugar de ⇧.
