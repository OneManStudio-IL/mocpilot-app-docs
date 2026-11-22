---
id: ArrangingControls
title: Añadir y organizar controles
description: "Añade controles desde la paleta, muévelos y cambia su tamaño, duplícalos, bloquéalos y elimínalos."
---

import Screenshot from '@site/src/components/Screenshot';

# Añadir y organizar controles {#add-and-arrange-controls}

## Añadir un control {#add-a-control}

1. En el panel, toca **+** (**Añadir controlador**); en un ordenador, haz clic en **+ Controlador** a la derecha de la barra superior. En un ordenador, la paleta se abre en su propia ventana, con **Añadir controlador** en el centro de su barra superior.
2. Elige un tipo de control en la lista. Los tipos están agrupados: **Joysticks**, **Deslizadores**, **Botones e interruptores**, **Monitores**, después **Vehículo y especiales** para los [controles especiales](/docs/Application/Dashboard/SpecialControls) y **Mis diseños** para los diseños que hayas guardado. Para encontrar un control rápidamente, escribe en **Buscar controles**.
3. La tira de apariencias muestra el tipo seleccionado en cada [tema](/docs/Application/Themes/ThemesOverview) (en un control especial, todas sus apariencias). Toca una apariencia para verla en la vista previa grande; puedes probarla ahí mismo.
4. Configura el control en **Configurar**: las pestañas **Estilo** y **Configuración** y el tamaño.
5. Toca **Añadir al panel** (en un ordenador, el botón naranja a la derecha de la barra superior de la paleta). En un ordenador puedes añadir varios controles seguidos.

<Screenshot name="controller-palette" alt="La paleta Añadir controlador" width={900} />

El control se coloca en el primer espacio libre y lleva una insignia **NUEVO**. Si no hay sitio, MOCPilot te lo indica: haz espacio o elige un tamaño más pequeño.

Los controles de temas que no tienes muestran **Comprar** y **Todo con MocPilot Pro** en lugar de **Añadir al panel**. Consulta [Conseguir, comprar y actualizar temas](/docs/Application/Themes/GettingThemes).

## Mover {#move}

En modo de edición, mantén pulsado un control y arrástralo. Al soltarlo, se ajusta a la celda más cercana de la cuadrícula. Si se solapara con otro control, vuelve a su sitio.

## Tamaños {#sizes}

Cada control tiene tres tamaños: **S**, **M** y **L**. Cámbialo con **Tamaño** en las propiedades del control. Tamaños en celdas de la cuadrícula (ancho × alto):

| Control | S | M | L |
|---|---|---|---|
| Joystick, Pad direccional | 7×7 | 10×10 | 13×13 |
| Deslizador | 10×3 | 14×4 | 18×5 |
| Deslizador ver. | 3×10 | 4×14 | 5×18 |
| Mando giratorio | 6×6 | 8×8 | 10×10 |
| Botón, Interruptor | 3×3 | 4×4 | 5×5 |
| Interruptor de paso | 8×3 | 12×4 | 16×5 |
| Interruptor de paso ver. | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Nivel de batería, Velocímetro | 6×6 | 8×8 | 10×10 |
| Monitor de inclinación | 8×4 | 12×6 | 16×8 |
| Volante | 8×8 | 12×12 | 16×16 |
| Pedales | 11×8 | 16×12 | 21×16 |
| Caja de cambios manual, Caja de cambios automática | 8×8 | 10×10 | 12×12 |
| Freno de mano | 4×7 | 6×10 | 8×13 |
| Intermitentes | 8×5 | 10×6 | 14×8 |
| Mando de tren | 6×8 | 8×10 | 10×13 |

El campo completo mide 40 × 20 celdas. Si un tamaño mayor no cabe, mueve primero los controles vecinos.

## Seleccionar y editar {#select-and-edit}

Toca (haz clic en) un control para seleccionarlo y abrir sus **propiedades**. Consulta [Propiedades de los controles](/docs/Application/Dashboard/ControlProperties).

## Menú contextual {#context-menu}

Mantén pulsado (pantalla táctil) o haz clic derecho (ordenador) en un control:

- **Bloquear** / **Desbloquear**
- **Propiedades**
- **Cambiar tema**: pasa el control a otro tema que tengas y que incluya el mismo tipo de control
- **Duplicar**: una copia con las mismas propiedades
- **Duplicar (Solo tipo)**: un control nuevo del mismo tipo con las propiedades predeterminadas
- **Eliminar**

Mantén pulsada o haz clic derecho en una zona vacía del campo:

- **Bloquear todo** / **Desbloquear todo**
- **Eliminar N controlador(es)**: elimina todos los controles desbloqueados

En un ordenador, con el panel de propiedades abierto: **Esc** lo cierra, **Supr** / **Retroceso** elimina el control y **⌘D / Ctrl+D** lo duplica.

## Bloquear controles {#lock-controls}

Un control **bloqueado** no se puede mover ni eliminar, así que no lo descolocarás sin querer mientras conduces o editas. Muestra un icono de candado. Bloquea un control desde su menú o con **Bloquear el controlador** en su configuración, o bloquéalo todo con **Bloquear todo**.

## Nombres de los controles {#control-names}

Cada control tiene un nombre corto que aparece en su marco en modo de edición, como **JOY1**, **SLDR2** o **BTN1**. El programa se refiere a los controles con estos nombres: en Enlaces rápidos, el bloque de entrada dice *JOY1*, y en Bloques lógicos eliges *JOY1* en el menú del bloque.

## Eliminar {#delete}

Usa **Eliminar** en el menú o el botón de la papelera en las propiedades. Los controles bloqueados no se pueden eliminar. Un control que usa el programa no se puede eliminar hasta que quites sus filas o bloques.
