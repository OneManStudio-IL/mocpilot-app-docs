---
id: FirstCarBlocks
title: El mismo coche en Bloques lógicos
description: "Paso a paso: programa un coche LEGO teledirigido con tracción, dirección por servo, luces e intermitentes en Bloques lógicos."
---

import Screenshot from '@site/src/components/Screenshot';

# El mismo coche en Bloques lógicos {#the-same-car-in-logic-blocks}

Este tutorial vuelve a construir el coche de [Tu primer coche RC con Enlaces rápidos](/docs/Tutorials/FirstCarLinks), esta vez en [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Obtienes el mismo resultado, un joystick que acelera y gira y un botón para las luces, y por el camino aprendes lo básico de la programación con bloques: eventos, bucles, variables y el Monitor. Al final puedes añadir intermitentes con su tictac.

**Qué necesitas**: el mismo modelo que en el tutorial de Enlaces rápidos:

- un LEGO® Technic™ Hub (88012);
- un motor de tracción en el **puerto A**;
- un motor de dirección con encoder en el **puerto B** (un motor Technic L o XL o cualquier motor angular Technic);
- luces LEGO® en el **puerto C** (opcional).

Con un City Hub, usa los puertos **A** y **B** y prescinde de las luces.

**El resultado**:

```text
cuando el programa comienza
configurar (luces) a 0
establecer posición relativa 0  (Hub 1, puerto B)
repetir siempre
    configurar (acelerador) a (joystick JOY1 eje Y)
    iniciar motor en (acelerador) % velocidad  (Hub 1, puerto A)
    ir a posición relativa (joystick JOY1 eje X × 0.9) en 100 % velocidad  (Hub 1, puerto B)

cuando el botón BTN1 presionado
    si (luces) = 0 entonces
        encender en 100 % brillo  (Hub 1, puerto C)
        configurar (luces) a 1
    otro
        apagar  (Hub 1, puerto C)
        configurar (luces) a 0
```

Cómo leer los listados: cada línea es un bloque, tal como lo muestra la app. Los valores entre paréntesis son el hub y el puerto que eliges en el bloque, o un bloque o una variable que colocas en un hueco. Las líneas con sangría van dentro del bloque en forma de C que tienen encima.

## 1. Crea el perfil {#create-the-profile}

1. En **Mis perfiles**, empieza un perfil nuevo (**+** → **Nuevo perfil** en un teléfono, **Nuevo perfil** en una tablet, **Archivo → Nuevo perfil** en un ordenador).
2. Elige el mosaico **Bloques lógicos**.
3. Escribe un **Nombre** y pon **Nivel de bloques** en **Avanzado**. El bucle **repetir siempre** y el bloque **si … entonces … otro** que se usan aquí son bloques de nivel Avanzado; la paleta **Principiante** no los muestra.
4. Toca **Crear**.

Puedes cambiar el nivel más adelante en **Configuración del editor** → **Seleccionar nivel de bloques**. Consulta [Crear un perfil](/docs/Application/Profiles/CreateProfile) y [Niveles de bloques](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Añade el hub y los controles {#hub-and-dashboard}

Hazlo exactamente igual que en el tutorial de Enlaces rápidos:

1. [Añade y conecta el hub](/docs/Tutorials/FirstCarLinks#add-the-hub) en **Mis hubs**.
2. [Coloca los controles en el panel](/docs/Tutorials/FirstCarLinks#dashboard): un **Joystick** (**JOY1**) a la izquierda y un **Botón** (**BTN1**) a la derecha.

<Screenshot name="tutorial-car-dashboard" alt="Panel con el joystick JOY1 a la izquierda y el botón BTN1 a la derecha" width={900} />

Cuando el hub está en el perfil, la paleta muestra las categorías **Motores** y **Luz**; los controles aparecen en **Controladores en pantalla**.

## 3. ¿Eventos o un bucle? {#events-or-loop}

Un script empieza con un bloque de **evento** y ejecuta los bloques que tiene debajo de arriba abajo. Varios scripts se ejecutan a la vez.

- Un bloque de evento como [cuando el botón … presionado](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) ejecuta su script una vez cada vez que ocurre el evento. Los eventos sirven para cosas que pasan en un momento concreto: pulsar un botón, accionar un interruptor, poner un intermitente.
- Un joystick cambia todo el tiempo. La forma más sencilla de seguirlo es un script que empiece con [cuando el programa comienza](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) y lea el stick una y otra vez en un bucle [repetir siempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Este coche usa las dos cosas: un bucle para la tracción y la dirección, y un evento para las luces.

## 4. Tracción {#drive}

1. Desde **Eventos**, arrastra [cuando el programa comienza](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) al área del programa.
2. Desde **Control**, engancha [repetir siempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) debajo.
3. Desde **Motores**, coloca [iniciar motor en … % velocidad](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) dentro de **repetir siempre**. Elige el hub y el puerto **A**.
4. Desde **Controladores en pantalla**, arrastra el bloque de valor del [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) al hueco de la velocidad. Elige **JOY1** y **eje Y**.

```text
cuando el programa comienza
repetir siempre
    iniciar motor en (joystick JOY1 eje Y) % velocidad  (Hub 1, puerto A)
```

Pon el coche sobre un soporte, pulsa **Ejecutar** y mueve el joystick: el joystick da de −100 a 100, que es exactamente la velocidad del motor en porcentaje. Pulsa **Detener** cuando termines.

**¿Va hacia atrás cuando empujas hacia arriba?** Usa [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) de **Operador**: `(joystick JOY1 eje Y × -1)`. **¿Demasiado rápido?** Multiplica por 0.5.

## 5. Dirección {#steer}

El motor de dirección sigue el eje X del joystick con [ir a posición relativa … en … % velocidad](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Las posiciones relativas se cuentan desde el punto que fijas con [establecer posición relativa …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Engancha **establecer posición relativa** justo debajo de **cuando el programa comienza**, encima de **repetir siempre**. Deja el valor en 0 y elige el puerto **B**.
2. Dentro de **repetir siempre**, debajo del bloque del motor, añade **ir a posición relativa … en … % velocidad** con el puerto **B**.
3. En su hueco de posición, coloca **… × …**, con el **eje X** del joystick a la izquierda y `0.9` a la derecha. Así −100…100 se convierte en −90…90 grados.
4. Pon la velocidad en 100.

```text
cuando el programa comienza
establecer posición relativa 0  (Hub 1, puerto B)
repetir siempre
    iniciar motor en (joystick JOY1 eje Y) % velocidad  (Hub 1, puerto A)
    ir a posición relativa (joystick JOY1 eje X × 0.9) en 100 % velocidad  (Hub 1, puerto B)
```

Antes de cada **Ejecutar**, endereza las ruedas a mano: esa posición pasa a ser el centro. Si las ruedas giran demasiado, usa un número menor que 0.9; si giran al revés, usa −0.9.

### Opción: calibrar la dirección automáticamente {#calibrate-rack}

Si la dirección tiene topes, [calibrar cremallera … centro … grados …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) encuentra el centro y el recorrido por ti. Primero crea dos variables (**Variables** → **Crear una variable**), por ejemplo `centro` y `recorrido`, y colócalas en los huecos del bloque. El bloque lleva la cremallera a los dos extremos, se detiene en el medio y escribe los resultados en las variables; el script continúa cuando termina la calibración.

```text
cuando el programa comienza
calibrar cremallera (centro) centro (recorrido) grados  (Hub 1, puerto B)
establecer posición relativa 0  (Hub 1, puerto B)
repetir siempre
    iniciar motor en (joystick JOY1 eje Y) % velocidad  (Hub 1, puerto A)
    ir a posición relativa ((recorrido × joystick JOY1 eje X) ÷ 100) en 100 % velocidad  (Hub 1, puerto B)
```

**establecer posición relativa 0** justo después de la calibración convierte el punto medio en el cero, así que con el stick al máximo las ruedas giran todo el recorrido medido.

## 6. Luces con un botón {#lights}

Enlaces rápidos tiene un bloque Alternar listo para usar. En Bloques lógicos, una [variable](/docs/Application/BlockBuilder/Blocks/Variables) recuerda si las luces están encendidas.

1. En **Variables**, toca **Crear una variable** y llámala `luces`.
2. Añade [configurar … a …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) al principio del script principal: `configurar (luces) a 0`.
3. Desde **Controladores en pantalla**, arrastra [cuando el botón … presionado](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) a un espacio libre y elige **BTN1**.
4. Debajo, añade [si … entonces … otro](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) con la condición [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(luces) = 0`.
5. En la primera rama, añade [encender en … % brillo](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (puerto **C**) y `configurar (luces) a 1`. En la segunda rama, añade [apagar](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (puerto **C**) y `configurar (luces) a 0`.

```text
cuando el botón BTN1 presionado
    si (luces) = 0 entonces
        encender en 100 % brillo  (Hub 1, puerto C)
        configurar (luces) a 1
    otro
        apagar  (Hub 1, puerto C)
        configurar (luces) a 0
```

Con un **Interruptor** en lugar del botón es aún más sencillo: *cuando interruptor … está alternado activado / apagado*; consulta los [ejemplos](/docs/Application/BlockBuilder/Examples).

## 7. Ejecuta y observa el Monitor {#monitor}

Cuando algo no funciona como esperas, mira los valores. El [Monitor](/docs/Application/BlockBuilder/Editor#monitor) (en la barra superior en un ordenador, en **Más** en un teléfono o una tablet) muestra todas las variables mientras el programa se ejecuta.

1. Crea una variable `acelerador`.
2. En el bucle, guarda en ella el valor del joystick y usa la variable como velocidad del motor:

```text
repetir siempre
    configurar (acelerador) a (joystick JOY1 eje Y)
    iniciar motor en (acelerador) % velocidad  (Hub 1, puerto A)
    ir a posición relativa (joystick JOY1 eje X × 0.9) en 100 % velocidad  (Hub 1, puerto B)
```

3. Pulsa **Ejecutar** y abre el **Monitor**. Mueve el joystick y pulsa BTN1: `acelerador` sigue al stick y `luces` cambia entre 0 y 1.

<Screenshot name="blocks-monitor" alt="Monitor con variables y una lista mientras se ejecuta el programa" width={900} />

- `acelerador` cambia pero el motor no gira: revisa la conexión del hub en **Mis hubs** y el puerto del bloque.
- `acelerador` se queda en 0: comprueba que el bloque lee **JOY1** y el eje correcto.

En Bloques lógicos el programa se puede seguir editando mientras se ejecuta, así que puedes cambiar un número y ver el efecto al instante. Este es el programa completo:

<Screenshot name="tutorial-car-blocks-program" alt="El programa del coche terminado: el script principal con el bucle repetir siempre y el script de luces de BTN1" width={900} />

Más ayuda: [Solución de problemas](/docs/Help/Troubleshooting).

## 8. Opcional: intermitentes con sonido {#turn-signals}

Añade al panel el [control especial](/docs/Application/Dashboard/SpecialControls#turn-signals) **Intermitentes** (**STALK1**) y conecta una luz en el **puerto D**. Mueve la palanca hacia arriba para el intermitente izquierdo y hacia abajo para el derecho.

```text
cuando intermitentes STALK1 intermitente izquierdo se enciende
    sonido Intermitente reproducir
    repetir mientras no (intermitentes STALK1 intermitente izquierdo está encendido ?)
        encender en 100 % brillo  (Hub 1, puerto D)
        esperar 0.5 segundos
        apagar  (Hub 1, puerto D)
        esperar 0.5 segundos
    detener sonido Intermitente
```

Los bloques: [cuando intermitentes …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) e [intermitentes … está encendido ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) en **Controladores en pantalla**; [sonido … reproducir](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) y [detener sonido …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) en **Sonidos**; [repetir mientras …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) y [esperar … segundos](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) en **Control**; [no …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) en **Operador**.

El sonido **Intermitente** se repite solo hasta que lo detienes. El sonido se reproduce en tu teléfono, tablet u ordenador.

Duplica el script (mantén pulsado o haz clic derecho → **Duplicar**) y elige **intermitente derecho** en los dos bloques. Así ambos intermitentes hacen parpadear la misma luz del puerto D; para tener luces izquierda y derecha separadas necesitas dos puertos libres, por ejemplo en un segundo hub.

## Enlaces rápidos o Bloques lógicos: ¿cuál elegir? {#which-to-choose}

| | Enlaces rápidos | Bloques lógicos |
|---|---|---|
| Este coche | 3 filas | 2 scripts, 2 variables |
| Arranque suave, zona muerta, límite | bloques listos | multiplicar y calcular por tu cuenta |
| Dirección por servo | bloque Servo con calibración Auto | bloques de posición relativa o calibrar cremallera |
| Luces con un botón | bloque Alternar | una variable y *si … entonces … otro* |
| Sonidos, secuencias, condiciones | no | sí |
| Valores en directo | en cada unión de una fila | el Monitor y los monitores del panel |
| Editar durante la ejecución | no | sí |

Elige **Enlaces rápidos** cuando cada control simplemente mueve algo: coches, camiones, trenes, grúas. Elige **Bloques lógicos** cuando necesitas lógica: sonidos, patrones de parpadeo, secuencias, reacciones a sensores, juegos. El tipo de programa no se puede cambiar, pero puedes crear un segundo perfil para el mismo modelo. Más información en [Crear un perfil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Siguientes pasos {#next-steps}

- Muestra la batería en un **Monitor** del panel y avisa cuando esté baja: [Ejemplos](/docs/Application/BlockBuilder/Examples#battery-warning).
- Conduce con un gamepad: [Bloques de gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad) y el [ejemplo con gamepad](/docs/Application/BlockBuilder/Examples#gamepad).
- Haz que el coche se sienta real con pedales, caja de cambios e inercia: [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).
- Aprende a usar el editor: [Trabajar en el editor](/docs/Application/BlockBuilder/Editor).
