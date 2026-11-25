---
id: HubFunctions
title: Funciones específicas de cada hub
description: "Funciones especiales de Technic Move, BuWizz, SBrick, Mould King, Robot Inventor y otros hubs en ambos editores."
---

# Funciones específicas de cada hub {#hub-specific-functions}

Cualquier hub con puertos puede mover motores y encender luces. Algunos hubs pueden hacer más. En **Enlaces rápidos**, estas funciones aparecen en la paleta solo cuando el perfil tiene uno de esos hubs; en **Bloques lógicos**, son bloques específicos del hub.

## Motores con encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Función | Enlaces rápidos | Bloques lógicos |
|---|---|---|
| Control de velocidad | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Establecer velocidad del motor, Iniciar motor a una velocidad |
| Servo de dirección con calibración | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manual / Auto) | Ir a posición relativa, Calibrar barra de dirección |
| Girar un ángulo | [Girar grados](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Ejecutar durante |
| Posición absoluta (motores angulares) | [Ir a la posición](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Ir a la posición |
| Comportamiento al detenerse: deslizamiento, freno, mantener | Motor → **Al detenerse** | Establecer el comportamiento del motor al detenerse |
| Ajustes de aceleración del hub | Motor → **Aceleración del hub** | Establecer aceleración, Establecer deceleración |
| Velocidad, posición, potencia y corriente como entrada | [Entrada del hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Velocidad, Posición, Posición relativa, Potencia |

## Technic Move Hub {#technic-move-hub}

El hub de los coches teledirigidos de LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- La tracción, la dirección y las luces se controlan por función, no por puerto.
- **Dirección** calibra su propia cremallera.
- **Freno**, **Boost** (modo de potencia) y **Pulso de potencia** (solo con la configuración Batmobile™ Tumbler).
- **Configuraciones del hub**: carga un perfil de coche en el hub con **Mis hubs → Seleccionar configuración**. Consulta [Configuraciones del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Bloques lógicos: los bloques de perfil de coche (*iniciar motores*, *establecer barra de dirección a*, *ajustar el freno de los motores*, *pulso de potencia*, *encender luces*, *ajustar modo de energía*), o los bloques de puerto normales: motores `A`, `B` (tracción) y `C` (dirección; *calibrar cremallera* en `C` y después *ir a posición relativa*), luces `1`–`6` una a una, inclinación, aceleración y orientación. Usa una sola forma por hub: ambos controlan los mismos motores y luces. Consulta [Motores → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Enlaces rápidos: las filas propias del hub (tracción, dirección, luces); una [Entrada del hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) también puede leer su inclinación y aceleración.

## BuWizz 2.0 {#buwizz-20}

- **Modo de potencia**: lento, normal, rápido y Ludicrous. Enlaces rápidos: la operación [Modo de potencia](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Bloques lógicos: *BuWizz 2: ajustar modo de energía*.
- El modo de potencia actual, el **Voltaje de salida** y la corriente del motor como entradas.
- Control de velocidad simple en los puertos 1–4, sin control de posición.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED de **Color del puerto** en los puertos 1–4: de una lista o en RGB ([Color del puerto](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3: establecer color LED*).
- La corriente del motor como entrada y posiciones relativas.

## SBrick y SBrick Plus {#sbrick-and-sbrick-plus}

- Motores y luces con control de velocidad.
- Sin control de posición: Servo, Girar grados e Ir a la posición no están disponibles.

## Mould King 4.0 y 6.0 {#mould-king-40-and-60}

- Solo comandos: sin sensores, sin botones y sin confirmación de conexión.
- **Canal de control** A, B o C: la operación [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) de Enlaces rápidos, el bloque *MouldKing: establecer canal de control* de Bloques lógicos o **Seleccionar canal** en Mis hubs.
- Hasta 3 Mould King 4.0 o 1 Mould King 6.0 por perfil, y un solo tipo de Mould King por perfil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Todo sobre la conexión, el firmware y los bloques: [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).

- **Matriz de LED**: una barra de nivel, un número o una imagen en Enlaces rápidos; texto y píxeles en Bloques lógicos.
- **Luces del sensor de distancia** (los «ojos» del sensor).
- **Detección de bloqueo** y potencia del motor.
- Todos los bloques de la app Robot Inventor: [Movimiento](/docs/Application/BlockBuilder/Blocks/Movement), sonidos y música del hub, gestos, guiñada, el sensor de fuerza, radio entre hubs.
- Bluetooth clásico (no disponible en iPhone ni iPad) o un cable USB en Windows y Mac.

## Hubs LEGO® con LED de color {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor y el mando: puedes ajustar el color del LED del hub desde una lista o en RGB (Enlaces rápidos: [LED del hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led); Bloques lógicos: *establecer color LED en*).

## Mando LEGO® Powered Up {#lego-powered-up-remote-control}

Sus botones son entradas, así que puedes conducir un modelo con el mando físico a través de MOCPilot (Enlaces rápidos: entrada **Hub** → Botón; Bloques lógicos: eventos de los botones del hub).

## Sensores integrados {#built-in-sensors}

El nivel y el voltaje de la batería, la temperatura de la placa, la inclinación (cabeceo, balanceo y guiñada), la aceleración y la orientación están disponibles en los hubs que los tienen. Ajusta **Orientación del hub** (Enlaces rápidos) o *orientación de inclinación a* (Bloques lógicos) según cómo esté montado el hub.
