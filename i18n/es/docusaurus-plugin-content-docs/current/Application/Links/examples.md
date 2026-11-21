---
id: Examples
title: "Ejemplos: coche, tanque, grúa, tren"
description: "Recetas listas de Enlaces rápidos para un coche, un tanque, una grúa y un tren."
---

# Ejemplos {#examples}

Recetas listas para usar. Primero coloca los controles en el panel y añade los hubs en Mis hubs; después crea las filas.

## Coche con dirección por servo {#car-with-servo-steering}

Panel: **JOY1** (Solo vertical) a la izquierda, **JOY2** (Solo horizontal) a la derecha, **BTN1** y un monitor **Nivel de batería**.

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | JOY1, Eje Y | Zona muerta 10 %, Suave 0,5 s | Motor | Technic Hub, puertos A + B |
| 2 | JOY2, Eje X | | Servo (Auto, ±90°) | Technic Hub, puerto D |
| 3 | BTN1 | Alternar | Luz | Technic Hub, puerto C |
| 4 | Hub: Batería | | | Indicador: Nivel de batería |

Si uno de los motores de tracción gira al revés, divide la fila 1 en dos filas y añade **Invertir** a una de ellas.

## Coche con volante, pedales y caja de cambios {#car-with-a-wheel-pedals-and-a-gearbox}

Panel: un **Volante**, **Pedales**, una **Palanca de cambios**, un **Freno de mano** e **Intermitentes**. La entrada [Vehículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) convierte los pedales, la caja de cambios y el freno de mano en una velocidad que aumenta y disminuye como la de un coche real.

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | Vehículo: Velocidad | | Motor | Technic Hub, puertos A + B |
| 2 | Volante: Ángulo de dirección | | Servo (Auto) | Technic Hub, puerto D |
| 3 | Vehículo: Frenando | | Luz | Technic Hub, puerto C (luces de freno) |
| 4 | Intermitentes: Intermitente izquierdo | | Luz | City Hub, puerto A |
| 5 | Intermitentes: Intermitente derecho | | Luz | City Hub, puerto B |

## Tanque (dos orugas) {#tank-two-tracks}

Panel: dos deslizadores verticales, **VSLDR1** y **VSLDR2**, con **Volver a cero** y **Valores negativos** activados.

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | VSLDR1 | Suave 0,25 s | Motor | Hub, puerto A |
| 2 | VSLDR2 | Invertir, Suave 0,25 s | Motor | Hub, puerto B |

Con un gamepad, usa el eje Y del stick izquierdo para la fila 1 y el eje Y del stick derecho para la fila 2.

## Grúa {#crane}

Panel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | DPAD1, Izquierda / derecha | Límite 50 % | Motor | Hub, puerto A (giro) |
| 2 | DPAD1, Arriba / abajo | | Motor | Hub, puerto B (cabrestante del gancho) |
| 3 | SLDR1 | Zona muerta 10 % | Motor | Hub, puerto C (pluma) |
| 4 | SWCH1 | | Luz (parpadeo 0,5 s) | Hub, puerto D (baliza) |

## Tren {#train}

Panel: un **Interruptor de paso** **STPR1** con **Valores negativos** (niveles de velocidad hacia delante y marcha atrás) y **BTN1** para las luces.

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | STPR1 | Suave 2 s | Motor | City Hub, puerto A |
| 2 | BTN1 | Alternar | Luz | City Hub, puerto B |
| 3 | Hub: Batería | | | Indicador: Monitor |

El bloque Suave hace que el tren arranque y se detenga como uno de verdad. Si tienes un **controlador de tren** en el panel, úsalo en la fila 1 en lugar de STPR1: da la posición de la palanca, negativa en marcha atrás.

## Coche Technic Move {#technic-move-car}

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | Vehículo: Velocidad | | Motor | Technic Move (tracción) |
| 2 | Volante: Ángulo de dirección | | Servo | Technic Move (dirección) |
| 3 | BTN1 | Alternar | Luz | Technic Move (luces) |
| 4 | BTN2 | | Boost | Technic Move |

Si no hay palanca de cambios en el panel, el coche da marcha atrás cuando mantienes pisado el pedal de freno estando parado.

## Pruébalo en el navegador {#try-it-in-the-browser}

La demo de Enlaces rápidos en [mocpilot.com](https://mocpilot.com) incluye un perfil de ejemplo con filas como estas; consulta [Editor web](/docs/Introducing/WebEditor).
