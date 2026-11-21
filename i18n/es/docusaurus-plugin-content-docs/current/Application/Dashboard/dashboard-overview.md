---
id: DashboardOverview
title: Editor del panel
description: "El panel de MOCPilot: el campo, la cuadrícula, la barra de herramientas, el fondo y deshacer."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor del panel {#dashboard-editor}

El **panel** es la pantalla desde la que conduces tu modelo: joysticks, deslizadores, botones, monitores y otros controles. Cada perfil tiene un panel.

Ábrelo con el botón **Panel** del editor (⌘2 / Ctrl+2 en un ordenador).

- **Teléfono y tablet**: el panel se abre a pantalla completa sobre el editor.
- **Ordenador**: el panel se abre en su propia ventana **Panel**, para que puedas tenerlo junto al programa.
- **Editor web**: una ventana flotante que puedes arrastrar y redimensionar.

<Screenshot name="dashboard-edit" alt="Panel en modo de edición con la cuadrícula de puntos" width={900} />

## El campo y la cuadrícula {#the-field-and-the-grid}

- El campo siempre tiene una proporción de **2:1** y se ajusta a la pantalla, así que un panel se ve igual en un teléfono, una tablet y un ordenador.
- En modo de edición se muestra una **cuadrícula de puntos** de 40 × 20 celdas. Los controles se ajustan a la cuadrícula.
- Los controles no pueden solaparse. Si un control no cabe, vuelve a donde estaba.

## Barra de herramientas {#toolbar}

| Botón | Qué hace |
|---|---|
| ← | vuelve al editor del programa |
| Deshacer / Rehacer | deshace y rehace los cambios del panel |
| **+** (Añadir controlador) | abre la paleta de controladores; consulta [Añadir y organizar controles](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Configuración del panel) | opciones de fondo y cuadrícula (ver más abajo) |
| ▶ / ■ | **Ejecutar** / **Detener**: inicia y detiene el programa |

En un ordenador, la ventana del Panel también tiene menús: **Archivo** (Cerrar perfil, Abrir en una ventana aparte, Configuración del panel…), **Editar** (Deshacer, Rehacer, Añadir controlador…) y **Ver** (Bloques ⌘1, Panel ⌘2).

Mientras el programa se ejecuta, los botones de edición se ocultan.

## Deshacer y rehacer {#undo-and-redo}

El panel tiene su propio historial, independiente del programa. Puedes deshacer cada movimiento, cambio de tamaño, cambio de propiedades, adición y eliminación.

## Configuración del panel {#dashboard-settings}

**Imagen de fondo**: toca **Cambiar** y elige:

- **Elegir uno listo**: un fondo ya preparado que viene con un tema. La galería muestra los fondos de los temas cuyos controles están en este panel. Un fondo listo siempre llena la pantalla alrededor del campo, así que las opciones de abajo no se le aplican.
- **Subir el mío**: cualquier imagen de tu dispositivo. Se guarda en el perfil.

**Eliminar** quita el fondo.

<Screenshot name="dashboard-backgrounds" alt="Configuración del panel con la galería de fondos listos" width={900} />

Para tu propia imagen también puedes ajustar:

- **Modo de relleno de imagen**: Estirar, Conservar proporción y ajustar, Conservar proporción y recortar, Mosaico, Mosaico vertical, Mosaico horizontal o Rellenar.
- **Área principal de la imagen**: **Área de trabajo** (solo el campo) o **Pantalla completa**.
- **Opacidad de imagen**, **Activar desenfoque de imagen** y **Valor de desenfoque**: suavizan el fondo para que los controles destaquen.

**Ocultar puntos**: oculta los puntos de la cuadrícula mientras se ejecuta el perfil. En modo de edición los puntos siguen visibles para que puedas alinear los controles.

## Los controles y el programa {#controls-and-the-program}

Un control da valores; el programa decide qué hacen. Un control que usa el programa no se puede eliminar hasta que el programa deje de usarlo. En Enlaces rápidos, quita las filas que lo usan; en Bloques lógicos, quita sus bloques.

## Más información {#read-more}

- [Añadir y organizar controles](/docs/Application/Dashboard/ArrangingControls): añadir, mover, tamaños, bloqueo
- [Tipos de controles](/docs/Application/Dashboard/ControlTypes)
- [Controles especiales](/docs/Application/Dashboard/SpecialControls): volante, pedales, palanca de cambios, freno de mano, intermitentes, mando de tren
- [Propiedades de los controles](/docs/Application/Dashboard/ControlProperties)
- [Indicadores y monitores](/docs/Application/Dashboard/Indicators)
