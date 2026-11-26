---
id: InputBlocks
title: Bloques de entrada
description: "Referencia de todas las entradas de Enlaces rápidos: controles del panel y sus canales, el vehículo, el gamepad, botones y sensores del hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloques de entrada {#input-blocks}

Cada fila empieza con una entrada. La pestaña **Entradas** de la paleta muestra los bloques que tu perfil puede usar en este momento: un bloque por cada control del panel (uno por canal en los controles con varios canales), los bloques **Vehículo**, el bloque **Gamepad** y un bloque **Hub** por cada hub. Cómo usarlos: [Entradas](/docs/Application/Links/Inputs).

Cada entrada envía una de estas dos señales a lo largo de la fila:

- **valor**: un número de −1 a 1 (0…1 en los controles que no tienen lado negativo);
- **encendido/apagado**: 1 o 0.

Los bloques de procesamiento y las operaciones solo aceptan las señales con las que pueden trabajar; consulta [Bloques de procesamiento](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controlador {#src-controller}

Un control de tu panel, mostrado por su nombre (**JOY1**, **SLDR1**, **BTN2**…).

- **Controlador**: cualquiera de los controles del panel que se describen abajo. Los monitores son salidas, no entradas.
- **Canal**: lo que da el control, en los controles con varios canales. La paleta ofrece un bloque por canal.

El volante, los pedales, la palanca de cambios, el freno de mano, los intermitentes, la caja de transferencia y el controlador de tren se describen en [Controles especiales](/docs/Application/Dashboard/SpecialControls).

Si el control se elimina del panel, la fila indica «Elige un controlador del panel». Si su canal ya no existe, indica «Elige qué da …» (en un joystick: «… no se mueve en este eje»).

### Joystick {#controller-joystick}

- **Canal**: **Eje X** o **Eje Y**. Un joystick configurado como **Solo horizontal (X)** o **Solo vertical (Y)** ofrece solo ese eje.
- Da: valor −1…1, 0 en el centro.

### Deslizador, deslizador vertical {#controller-slider}

- Sin canal.
- Da: valor 0…1, o −1…1 cuando **Valores negativos** está activado.

### Controlador de tren {#controller-train}

El controlador de tren (control especial) funciona como un deslizador en Enlaces rápidos.

- Sin canal.
- Da: valor −1…1: la posición de la palanca como fracción de todas las muescas, negativa cuando el inversor está en marcha atrás, 0 en punto muerto.

### Mando giratorio {#controller-knob}

El mando giratorio de los temas de pago funciona como un deslizador en Enlaces rápidos.

- Sin canal.
- Da: valor 0…1, o −1…1 cuando el mando tiene el cero en el centro.

### Volante {#controller-wheel}

- **Canal**: **Ángulo de dirección** (predeterminado) o **Claxon**.
- Ángulo de dirección da: valor −1…1, 0 en línea recta.
- Claxon da: valor 1 mientras se pulsa la zona del claxon; si no, 0.

### Pedales {#controller-pedals}

- **Canal**: **Acelerador** (predeterminado) o **Pedal de freno**.
- Da: valor 0…1, cuánto se pisa el pedal.
- Los pedales dan la posición del pedal en bruto. Para un coche que acelere, frene y dé marcha atrás por sí solo, usa la entrada [Vehículo](#src-vehicle).

### Palanca de cambios {#controller-gear}

Las palancas de cambios manual y automática (control especial).

- **Canal**: **Marcha** (predeterminado) o **Sentido (R − / adelante +)**.
- Marcha, caja manual: la marcha engranada dividida entre el número de marchas hacia delante: la marcha más alta da 1, el punto muerto 0, la marcha atrás un valor negativo. Con 4 marchas, la 2.ª da 0,5.
- Marcha, caja automática: lo mismo que Sentido.
- Sentido da: −1 en R, 0 en N (y P), +1 en cualquier marcha hacia delante o en D.

### Freno de mano {#controller-handbrake}

- **Canal**: **Freno de mano puesto** (predeterminado) o **Fuerza del freno de mano**.
- Freno de mano puesto da: encendido/apagado, encendido mientras la palanca está bloqueada.
- Fuerza del freno de mano da: valor 0…1, cuánto se tira de la palanca.

### Intermitentes {#controller-turnsignals}

La palanca de los intermitentes (control especial).

- **Canal**: **Intermitentes (izquierda − / derecha +)** (predeterminado), **Intermitente izquierdo**, **Intermitente derecho** o **Luz**.
- Intermitentes da: valor −1 (izquierda), 0 (apagado) o +1 (derecha).
- Intermitente izquierdo e Intermitente derecho dan: valor 1 mientras ese intermitente está encendido (parpadeando con la luz cuando el parpadeo del control está activado); si no, 0.
- Luz da: valor 1 mientras la luz está encendida; si no, 0.

### Caja de transferencia {#controller-transfercase}

La [caja de transferencia](/docs/Application/Dashboard/SpecialControls#transfer-case) (control especial).

- **Canal**: **Tracción total** (predeterminado), **Reductora**, **Bloqueo del diferencial delantero**, **Bloqueo del diferencial central** o **Bloqueo del diferencial trasero**.
- Tracción total da: encendido/apagado, encendido en 4H y 4L.
- Reductora da: encendido/apagado, encendido en 4L.
- Cada bloqueo de diferencial da: encendido/apagado, encendido mientras ese bloqueo está activado.
- La posición en sí (2H, 4H, N, 4L) llega al simulador a través del ajuste **Caja de transferencia** de la entrada [Vehículo](#src-vehicle).

### Pad direccional {#controller-dpad}

- **Canal**: **Arriba / abajo** o **Izquierda / derecha**.
- Da: valor +1 (arriba o derecha), −1 (abajo o izquierda) o 0.

### Botón {#controller-button}

- Sin canal.
- Da: encendido/apagado, encendido mientras se mantiene pulsado.

### Interruptor {#controller-switch}

- Sin canal.
- Da: encendido/apagado.

### Interruptor de paso {#controller-stepper}

- Sin canal.
- Da: valor: el paso actual dividido entre el **Número de pasos**, de modo que el último paso da 1 (−1 el último paso negativo).

## Vehículo {#src-vehicle}

Un coche simulado que se maneja con los pedales, la palanca de cambios, el freno de mano y la caja de transferencia del panel: acelera, frena, avanza por inercia y da marcha atrás como un vehículo real, y la fila recibe su velocidad o sus revoluciones. La paleta muestra bloques Vehículo cuando el panel tiene pedales, palanca de cambios o freno de mano: un bloque por salida, ya vinculado al primer control de cada tipo.

- **Pedales**: los pedales del panel que manejan el vehículo (obligatorio).
- **Palanca de cambios**: **ninguno** o una palanca de cambios del panel. Sin ella, mantener pisado el pedal de freno estando parado hace que el vehículo vaya marcha atrás.
- **Freno de mano**: **ninguno** o un freno de mano del panel.
- **Caja de transferencia**: **ninguno** o una caja de transferencia del panel. En 2H y 4H el vehículo se conduce como sin ella; en N no avanza (rueda por inercia); en 4L su velocidad se limita al 40 %.
- **Tipo de vehículo**: **Coche** (predeterminado), **Todoterreno**, **Deportivo** o **Camión**. Los tipos se diferencian en la inercia y la velocidad marcha atrás; el camión tiene además freno neumático.
- **Salida**:
  - **Velocidad** (predeterminado): valor −1…1, negativo al ir marcha atrás;
  - **Revoluciones del motor (rpm)**: valor 0…1;
  - **Frenando**: encendido/apagado, encendido mientras el vehículo frena;
  - **Con el freno de mano**: encendido/apagado.

Problemas: «Elige los pedales del vehículo», «… no está en el panel».

<Screenshot name="links-vehicle-settings" alt="Ajustes de un bloque de entrada Vehículo" width={900} />

## Gamepad {#src-gamepad}

El mando de juego conectado a tu dispositivo. El bloque solo está en la paleta mientras **Habilitar bloques de gamepad** está activado (página **Gamepad** de la barra superior); si no, la fila indica «Activa los bloques de gamepad en la página Gamepad (barra superior)».

- **Entrada** (predeterminado **Stick izquierdo Y**). Las etiquetas siguen la **Distribución de botones del gamepad** (Xbox / PlayStation):
  - **Stick izquierdo Y**, **Stick izquierdo X**, **Stick derecho Y**, **Stick derecho X**: valor −1…1;
  - **RT** / **R2**, **LT** / **L2** (gatillos): valor;
  - **A**, **B**, **X**, **Y** / **Cruz**, **Círculo**, **Cuadrado**, **Triángulo**: encendido/apagado;
  - **LB** / **L1**, **RB** / **R1** (botones superiores): encendido/apagado;
  - **Arriba**, **Abajo**, **Izquierda**, **Derecha** (pad direccional): encendido/apagado.

## Hub {#src-hub}

El botón propio de un hub o un sensor: del hub o de uno de sus puertos. Hay una entrada Hub por cada hub del perfil, excepto los hubs Mould King, que solo reciben comandos.

- **Hub**: un hub del perfil.
- **Botón o sensor**: solo lo que este hub puede informar (lista de abajo).
- **Puerto**: para los sensores de un puerto (valores de motor, sensores en puertos).
- **Orientación del hub**: para la inclinación y la aceleración en los hubs que permiten cambiarla: **Mantener** (predeterminado) o cómo está montado el hub en el modelo.

El valor de un sensor recorre la fila dividido entre su fondo de escala y limitado a −1…1: una batería al 50 % da 0,5. Un **Monitor** de texto justo después del sensor muestra el valor real con su unidad.

| Botón o sensor | Señal | Unidad, fondo de escala | Hubs |
|---|---|---|---|
| **Botón 1, 2…** | encendido/apagado | | hubs con botón; los botones del mando LEGO® Powered Up |
| **Batería** | valor | %, 100 | hubs que la informan |
| **Voltaje de la batería** | valor | V, 12 | hubs que lo informan |
| **Voltaje de salida** | valor | V, 12 | BuWizz 2.0 |
| **Temperatura** | valor | °C, 100 | hubs que la informan |
| **Inclinación: cabeceo** | valor | °, 90 | hubs con sensor de inclinación |
| **Inclinación: balanceo** | valor | °, 180 | hubs con sensor de inclinación |
| **Inclinación: guiñada** | valor | °, 180 | hubs con eje de guiñada |
| **Aceleración X / Y / Z** | valor | m/s², 19,6 | hubs con acelerómetro |
| **Velocidad de giro X / Y / Z** | valor | °/s, 360 | hubs con giroscopio: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Corriente del hub** | valor | mA, 3000 | Technic Hub |
| **Velocidad del motor** | valor | %, 100 | puerto; todos los hubs con puertos |
| **Ángulo del motor** | valor | °, 360 (relativo) | puerto; motores con encoder; no SBrick, BuWizz 2.0, WeDo 2.0 |
| **Posición del motor** | valor | °, 180 (absoluta) | puerto; motores angulares |
| **Potencia del motor** | valor | %, 100 | puerto; Robot Inventor |
| **Corriente del motor** | valor | A, 3 | puerto; BuWizz 2.0, BuWizz 3.0 Pro |
| **Sensor de distancia** | valor | 250 | puerto; no SBrick ni BuWizz |
| **Sensor de color** | valor | número de color, 10 | puerto; no SBrick, BuWizz ni WeDo 2.0 |
| **Luz reflejada**, **Luz ambiental** | valor | %, 100 | puerto; no SBrick, BuWizz ni WeDo 2.0 |
| **Tono del color** | valor | °, 360 | puerto; sensor de color Technic o sensor de color y distancia BOOST; no SBrick, BuWizz ni WeDo 2.0 |
| **Saturación del color**, **Brillo del color** | valor | %, 100 | puerto; como Tono del color |
| **Sensor de inclinación: cabeceo / balanceo** | valor | °, 45 | puerto; sensor de inclinación WeDo 2.0 / BOOST; no SBrick ni BuWizz |
| **Modo de potencia** | valor | 1–4, 4 | BuWizz 2.0 |
| **Conectado** | encendido/apagado | | todos los hubs |

Cuando el hub está conectado, MOCPilot también comprueba el dispositivo del puerto: «Puerto A: no hay motor», «Puerto A: el motor no tiene encoder», «Puerto A: no hay sensor de distancia», etc.
