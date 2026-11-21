---
id: ControlTypes
title: Tipos de controles
description: "Joystick, pad direccional, deslizadores, mando giratorio, botones, interruptores, interruptores de paso, monitores y controles especiales."
---

# Tipos de controles {#control-types}

Cada [tema](/docs/Application/Themes/ThemesOverview) dibuja el mismo conjunto de tipos de controles con su propio estilo. El tema gratuito **Básico** tiene nueve; cada tema de pago añade el **Mando giratorio** y tres monitores gráficos. Los volantes, los pedales, las palancas de cambios y los demás [controles especiales](/docs/Application/Dashboard/SpecialControls) son productos aparte.

| Control | Nombre en el panel | Qué da al programa | Disponible en |
|---|---|---|---|
| Joystick | JOY | ejes X e Y | todos los temas |
| Pad direccional | DPAD | botones arriba / abajo / izquierda / derecha | todos los temas |
| Deslizador | SLDR | un valor | todos los temas |
| Deslizador ver. | VSLDR | un valor | todos los temas |
| Mando giratorio | DIAL | un valor | temas de pago |
| Botón | BTN | pulsado / soltado | todos los temas |
| Interruptor | SWCH | activado / desactivado | todos los temas |
| Interruptor de paso | STPR | un número de paso | todos los temas |
| Interruptor de paso ver. | VSTPR | un número de paso | todos los temas |
| Monitor | MNTR | muestra texto o un valor | todos los temas |
| Nivel de batería | MNTBT | muestra un nivel | temas de pago |
| Velocímetro | MNTSP | muestra una velocidad | temas de pago |
| Monitor de inclinación | MNTLT | muestra el cabeceo y el balanceo | temas de pago |
| Volante, pedales, cajas de cambios, freno de mano, intermitentes, mando de tren | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | consulta [Controles especiales](/docs/Application/Dashboard/SpecialControls) | productos especiales |

El nombre en el panel lleva un número: el primer joystick es **JOY1**, el segundo **JOY2**.

## Joystick {#joystick}

Una palanca que vuelve sola al centro. Da un valor **X** (izquierda/derecha) y un valor **Y** (arriba/abajo); el centro es cero.

- **Tipo de ejes**: **Ambos ejes (X, Y)**, **Solo horizontal (X)** o **Solo vertical (Y)**. Un joystick de un solo eje es más cómodo cuando solo sirve para acelerar o solo para girar.
- Uso típico: Y para acelerar y X para girar, o un joystick por cada oruga de un tanque.

## Pad direccional {#directional-pad}

Cuatro botones: arriba, abajo, izquierda y derecha. Cada uno está pulsado o soltado. En Enlaces rápidos, un eje del pad direccional da −1, 0 o +1 (**Arriba / abajo** o **Izquierda / derecha**), lo que viene bien para movimientos paso a paso, como el gancho de una grúa.

## Deslizador y Deslizador ver. {#slider-and-ver-slider}

Un tirador que se desplaza por una pista horizontal o vertical.

- **Regresar a cero**: el tirador vuelve a su sitio al soltarlo (como un acelerador) en lugar de quedarse donde lo dejas (como el ajuste de velocidad de un tren).
- **Valores negativos**: el cero está en el centro, así que el deslizador da valores negativos y positivos (marcha atrás y adelante).
- **Valor del paso**: el deslizador se mueve a saltos.

## Mando giratorio {#rotary-knob}

Un mando redondo, como un control de volumen, en el grupo **Deslizadores** de cada tema de pago. Gíralo con un dedo alrededor de su centro: gira unos 135° hacia cada lado y se queda donde lo dejas.

- **Pasos con retén (0 = suave)** (0–24): con pasos, el mando hace clic de un retén al siguiente.
- **Cero en el centro (-100..100)**: el mando da de −100 a 100 con el cero en el centro, en lugar de 0 a 100.
- Bloques: *cuando mando giratorio … girado / presionado / soltado / girado al mínimo / girado al máximo*, *valor del mando giratorio …*, *¿mando giratorio … presionado / al mínimo / al máximo?* Consulta [Controladores en pantalla](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- En Enlaces rápidos, el mando funciona como un [deslizador](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

El tema Básico no tiene mando giratorio. Como todos los temas de pago tienen uno, **Cambiar tema** pasa un mando a la apariencia de otro tema.

## Botón {#button}

Pulsado mientras lo mantienes, soltado cuando lo sueltas. Úsalo para un claxon o un movimiento corto, o con el bloque **Alternar** de Enlaces rápidos para encender y apagar algo.

## Interruptor {#switch}

Se queda activado o desactivado: tócalo para cambiarlo. Úsalo para luces, modos o el bloqueo de un cabrestante.

## Interruptor de paso e Interruptor de paso ver. {#step-switch-and-ver-step-switch}

Un control **−** / **+** que cuenta pasos, como las marchas o los niveles de velocidad de un tren.

- **Número de pasos**: de 1 a 100 (10 por defecto).
- **Valores negativos**: permite pasos por debajo de cero (niveles de marcha atrás).
- **Habilitar reinicio**: al tocar el valor, vuelve a cero.

## Monitor {#monitor}

Muestra texto o un número del programa: velocidad, batería, el nombre de un modo, el valor de un sensor.

- **Diseño de texto** (una o varias líneas), **Desbordamiento de texto** (Recortar, Ajustar, Marquesina, Desplazar), **Líneas máximas**, opciones de desplazamiento, **Alineación de texto** y **Escala de texto**.

## Nivel de batería, Velocímetro, Monitor de inclinación {#battery-level-speedometer-tilt-monitor}

Indicadores gráficos de los temas de pago. El programa fija su valor: la batería de un hub, la velocidad de un motor, la inclinación de un hub. El **Monitor de inclinación** tiene **Invertir inclinación** e **Invertir rodamiento**. Consulta [Indicadores y monitores](/docs/Application/Dashboard/Indicators).

## Controles especiales {#special-controls}

Un volante, pedales, una caja de cambios manual o automática, un freno de mano, una palanca de intermitentes y un mando de tren. Cada uno es un producto aparte con muchas apariencias. Consulta [Controles especiales](/docs/Application/Dashboard/SpecialControls).

## Interactividad {#interactivity}

Todos los controles interactivos tienen **Interactividad** (activada por defecto). Un control no interactivo no reacciona al tacto. El programa puede activar y desactivar la interactividad, por ejemplo para bloquear el acelerador hasta que termine una comprobación inicial.
