---
id: ControlProperties
title: Propiedades de los controles
description: "Cambia el tamaño, el color, el icono, la apariencia, el comportamiento y el tema de un control en sus propiedades."
---

import Screenshot from '@site/src/components/Screenshot';

# Propiedades de los controles {#control-properties}

En modo de edición, toca (haz clic en) un control para abrir sus propiedades.

- **Teléfono y tablet**: un panel sobre el panel de control; toca fuera de él para cerrarlo.
- **Ordenador**: un panel lateral; puedes seguir trabajando en el panel mientras está abierto.

<Screenshot name="controller-properties" alt="Panel de propiedades de un control con las pestañas Estilo y Configuración" width={900} />

La cabecera muestra el nombre del control (por ejemplo, **JOY1**), el botón de la papelera, el menú de duplicar y **Aceptar**.

## Pestaña Estilo {#style-tab}

- **Tamaño**: S, M o L. Consulta [tamaños](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Color de acento**: el color principal del control.
- **Ícono**: una imagen en el control (botones, interruptores, monitores), elegida entre más de 260 iconos.
- **Apariencia**: la apariencia de un [control especial](/docs/Application/Dashboard/SpecialControls), por ejemplo el estilo de un volante.
- Opciones del tema, según el tema: por ejemplo **Carbono coloreado**, **Biselados de colores** y **Mostrar líneas de carrera** en Carreras, **Número de segmentos del indicador** en Maquinaria de construcción, **Mostrar valores** en Aura.
- **Cambiar tema**: pasa el control a otro tema que tengas y que incluya el mismo tipo de control.

## Pestaña Configuración {#settings-tab}

Ajustes comunes:

- **Bloquear el controlador**: un control bloqueado no se puede mover ni eliminar.
- **Interactividad**: un control no interactivo no registra pulsaciones.

Ajustes de cada tipo:

| Control | Ajustes |
|---|---|
| Joystick | **Tipo de ejes**: Ambos ejes (X, Y), Solo horizontal (X), Solo vertical (Y) |
| Deslizador, Deslizador ver. | **Regresar a cero**, **Valores negativos**, **Valor del paso** |
| Mando giratorio | **Pasos con retén (0 = suave)** (0–24), **Cero en el centro (-100..100)** |
| Interruptor de paso, Interruptor de paso ver. | **Número de pasos** (1–100), **Valores negativos**, **Habilitar reinicio** |
| Monitor | **Diseño de texto**, **Desbordamiento de texto**, **Líneas máximas**, **Dirección de desplazamiento**, **Velocidad de desplazamiento**, **Mostrar barra de desplazamiento**, **Desplazamiento interactivo**, **Alineación de texto**, **Escala de texto** |
| Monitor de inclinación | **Invertir inclinación**, **Invertir rodamiento** |
| Volante | **Ángulo del volante** (20–120°), **Efectos de sonido** |
| Pedales | **Efectos de sonido** |
| Caja de cambios manual | **Número de marchas** (2–6) |
| Caja de cambios automática | **Número de marchas** (2–8) |
| Intermitentes | **Las salidas de los intermitentes parpadean**; en la pestaña Estilo, **Ícono: left**, **Ícono: light**, **Ícono: right** |

Los ajustes numéricos tienen un botón **Restablecer** que recupera el valor predeterminado.

## Cambiar propiedades desde el programa {#change-properties-from-the-program}

En Bloques lógicos, los bloques pueden cambiar un control mientras se ejecuta el programa: ajustar su color, activar o desactivar su interactividad, mostrar valores en los monitores. Consulta [Bloques de controladores en pantalla](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
