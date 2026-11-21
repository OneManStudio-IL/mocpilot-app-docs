---
id: Examples
title: Ejemplos
description: "Programas de ejemplo de Bloques lógicos para conducir, dirigir, luces, sonidos, avisos de batería y sensores."
---

# Ejemplos {#examples}

Programas cortos para empezar. Los nombres de los bloques siguen la [referencia de bloques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); los valores entre paréntesis son el hub, el puerto o un bloque informador colocado en un campo. Las líneas sangradas van dentro de un bloque en C.

## Conducir con un joystick {#drive-with-a-joystick}

Panel: joystick **JOY1**. Motor de tracción en el puerto A.

```text
cuando el programa comienza
repetir siempre
    iniciar motor en (joystick JOY1 eje Y) % velocidad  (Hub 1, puerto A)
```

## Dirigir con un servo {#steer-with-a-servo}

Motor de dirección (un motor angular) en el puerto B. Fija su posición actual como centro y después sigue al joystick: `× 0.9` convierte el −100…100 del joystick en −90…90 grados.

```text
cuando el programa comienza
establecer posición relativa 0  (Hub 1, puerto B)
repetir siempre
    ir a posición relativa (joystick JOY1 eje X × 0.9) en 100 % velocidad  (Hub 1, puerto B)
```

Para una cremallera de dirección con topes, calíbrala primero (consulta [Motores](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `centro` y `rango` son variables. Después de la calibración, la cremallera queda en el medio, pero su posición relativa allí es el valor del centro, no 0, así que ponla a 0 antes de dirigir:

```text
cuando el programa comienza
calibrar cremallera (centro) centro (rango) grados  (Hub 1, puerto B)
establecer posición relativa 0  (Hub 1, puerto B)
repetir siempre
    ir a posición relativa ((rango × joystick JOY1 eje X) ÷ 100) en 100 % velocidad  (Hub 1, puerto B)
```

## Luces con un interruptor {#lights-on-a-switch}

```text
cuando interruptor SWCH1 está alternado activado
    encender en 100 % brillo  (Hub 1, puerto C)
cuando interruptor SWCH1 está alternado apagado
    apagar  (Hub 1, puerto C)
```

## Botón de bocina {#horn-button}

```text
cuando el botón BTN1 está presionado
    sonido Bocina de coche reproducir hasta terminar
```

## Aviso de batería {#battery-warning}

Monitor **MNTR1**; el botón se pone rojo cuando la batería está baja.

```text
cuando el programa comienza
repetir siempre
    mostrar (Hub 1 % batería) en MNTR1 monitor
    si (Hub 1 % batería) < 20 entonces
        configurar BTN1 color a rojo
    esperar 5 segundos
```

## Detenerse ante un obstáculo {#stop-before-an-obstacle}

Sensor de distancia Technic en el puerto D, motor de tracción en el puerto A.

```text
cuando el programa comienza
repetir siempre
    si (distancia cm  (Hub 1, puerto D)) < 10 entonces
        detener motor  (Hub 1, puerto A)
        establecer color LED en rojo  (Hub 1)
    otro
        iniciar motor en (deslizador SLDR1) % velocidad  (Hub 1, puerto A)
        establecer color LED en verde  (Hub 1)
```

## Límite de velocidad con un interruptor de paso {#speed-limit-on-a-stepper}

El interruptor de paso **STPR1** con 4 pasos limita la velocidad máxima.

```text
cuando el programa comienza
repetir siempre
    configurar (límite de velocidad) a (interruptor de paso STPR1 × 25)
    iniciar motor en (joystick JOY1 eje Y × límite de velocidad / 100) % velocidad  (Hub 1, puerto A)
```

`límite de velocidad` es una variable (**Variables → Crear una variable**).

## Comprobación al arrancar {#startup-check}

Bloquea el acelerador hasta que ambos hubs estén conectados.

```text
cuando el programa comienza
deshabilitar JOY1 interactividad
esperar hasta (Hub 1 conectado) y (Hub 2 conectado)
mostrar "Listo" en MNTR1 monitor
habilitar JOY1 interactividad
```

## Gamepad {#gamepad}

Ajusta **Rango de valores del gamepad** a −100…100 en la [página Gamepad](/docs/Application/Dashboard/Gamepad) y activa **Habilitar bloques de gamepad**.

```text
cuando el programa comienza
repetir siempre
    iniciar motor en (palanca izquierda eje Y) % velocidad  (Hub 1, puerto A)
    ir a posición relativa (palanca derecha eje X × 0.9) en 100 % velocidad  (Hub 1, puerto B)
```

## Coche con pedales {#car-with-pedals}

Para un coche que se maneja con pedales, caja de cambios y freno de mano, consulta el [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).

## Más {#more}

- Instala perfiles oficiales desde el [catálogo](/docs/Application/Profiles/Catalog) y estudia sus programas.
- Prueba la demo de Bloques lógicos en [mocpilot.com](https://mocpilot.com).
