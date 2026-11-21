---
id: Gamepad
title: Gamepad
description: "Conduce tu modelo con un gamepad tipo Xbox o PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Un gamepad físico suele ser más agradable que una pantalla táctil: sticks, gatillos y botones de verdad. MOCPilot funciona con gamepads Bluetooth y USB compatibles con el sistema del dispositivo (mandos tipo Xbox y PlayStation en iPhone, iPad, Android, Mac y Windows).

El gamepad funciona junto con el panel; puedes usar los dos a la vez.

## Conectar un gamepad {#connect-a-gamepad}

1. Empareja el gamepad con tu teléfono, tablet u ordenador en los ajustes de Bluetooth del sistema (o conéctalo por USB).
2. Abre un perfil y toca **Gamepad** en el editor.
3. La cabecera de la página muestra **Gamepad: (nombre)**. «Gamepad is not connected» significa que el sistema todavía no lo ve.

<Screenshot name="gamepad" alt="Página Gamepad" width={900} />

## Página Gamepad {#gamepad-page}

- **Habilitar bloques de gamepad**: activa las entradas del gamepad para este perfil. Sin esta opción, las filas de Enlaces rápidos con la entrada Gamepad indican «Activa los bloques de gamepad en la página Gamepad (barra superior)», y Bloques lógicos no muestra la categoría Gamepad.
- **Distribución de botones del gamepad**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) o **Sony PS** (Cruz, Círculo, Cuadrado, Triángulo, L1, R1, L2, R2). Los editores nombran los botones según esta elección.
- **Rango de valores del gamepad** (Bloques lógicos): los sticks dan **-1..1** o **-100..100**.
- **Seleccionar gamepad**: cuando hay más de un gamepad conectado.
- **Probar gamepad** → **Prueba**: un probador en directo que muestra los botones, los gatillos, los sticks y la cruceta, para que puedas comprobarlo todo antes de usarlo.

La configuración se guarda en el perfil.

## Usar el gamepad en Enlaces rápidos {#use-the-gamepad-in-quick-links}

Arrastra la entrada **Gamepad** a una fila y elige su **Entrada**:

- sticks: Stick izquierdo Y, Stick izquierdo X, Stick derecho Y, Stick derecho X;
- gatillos: RT / LT (R2 / L2);
- botones frontales: A, B, X, Y (Cruz, Círculo, Cuadrado, Triángulo);
- botones superiores: LB / RB (L1 / R1);
- cruceta: Arriba, Abajo, Izquierda, Derecha.

Ejemplo: *Gamepad* (Stick izquierdo Y) → *Suave* → *Motor* → *Hub* (puerto A). Consulta [Entradas](/docs/Application/Links/Inputs#gamepad).

## Usar el gamepad en Bloques lógicos {#use-the-gamepad-in-logic-blocks}

La categoría **Gamepad** tiene bloques de evento (*cuando el botón del gamepad está …*, *cuando la cruceta del gamepad está …*, *cuando el stick del gamepad está …*) y bloques de valor (botón, cruceta, stick, presión del gatillo). Consulta [Bloques de gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Perfiles para publicar {#profiles-for-publishing}

Un perfil se puede publicar en el catálogo solo con un gamepad y sin controles en el panel: el requisito es «un controlador del panel o el gamepad».
