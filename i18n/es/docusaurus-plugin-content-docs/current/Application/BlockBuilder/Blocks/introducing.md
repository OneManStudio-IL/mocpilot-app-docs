---
id: BlocksIntroducing
title: Introducción a Bloques lógicos
description: "Bloques lógicos es el editor de programación visual por bloques de MOCPilot: eventos, bucles, condiciones, variables, sensores y sonidos."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Bloques lógicos {#logic-blocks}

**Bloques lógicos** es el editor de programación por bloques de MOCPilot. Creas programas encajando bloques, de forma muy parecida a Scratch: eventos, bucles, condiciones, variables, listas, tus propios bloques, sonidos, y bloques para motores, luces, sensores, controles del panel y el gamepad.

Elige Bloques lógicos cuando tu modelo necesite lógica: robots, secuencias automáticas, reacciones a sensores, comprobaciones al arrancar, juegos. Si solo necesitas conectar controles con motores, [Enlaces rápidos](/docs/Application/Links/LinksIntroducing) es más rápido.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programa de Bloques lógicos" style={{width: '100%', maxWidth: 720}} />

:::warning No es Scratch
Bloques lógicos tiene su propio conjunto de bloques y su propio comportamiento. No puedes importar programas de MOCPilot en Scratch ni proyectos de Scratch en MOCPilot.
:::

## El editor de un vistazo {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor de Bloques lógicos con la paleta y un programa" width={900} />

- La **paleta** muestra las categorías de bloques: **Eventos**, **Control**, **Sensores**, **Sonidos**, **Operador**, **Variables**, **Listas** y **Mis bloques**. Otras categorías aparecen cuando tu perfil las necesita: **Motores** y **Luz** (cuando algún hub las admite), **Simulador** (cuando el panel tiene pedales, caja de cambios o freno de mano), **Controladores en pantalla** y **Gamepad**.
- El **área del programa** es donde arrastras los bloques y creas los scripts.
- La barra superior tiene **Deshacer** y **Rehacer**, **Panel**, **Mis hubs**, **Gamepad**, los paneles laterales **Asistente IA**, [**Mochila**](/docs/Application/BlockBuilder/Backpack) y **Monitor**, **Más** (con **Configuración del editor**) y **Ejecutar/Detener**. En un teléfono o una tablet, los paneles laterales y Gamepad están en **Más**.

Consulta [Trabajar en el editor](/docs/Application/BlockBuilder/Editor) para más detalles.

## Cómo se ejecuta un programa {#how-a-program-runs}

- Un script empieza con un bloque de **evento** (un bloque de sombrero): *cuando el programa comienza*, *cuando el botón … está presionado*, *cuando reciba …*, etc.
- Los bloques encajados debajo se ejecutan de arriba abajo.
- Varios scripts se ejecutan **a la vez**. Usa mensajes (*transmitir*) para coordinarlos.
- Los **bucles** (*repetir siempre*, *repetir*, *repetir mientras*) mantienen un script en marcha; las **condiciones** (*si*, *si … otro*, *esperar hasta*) toman decisiones.
- Los bloques **informadores** (redondeados) devuelven valores y encajan en las entradas de otros bloques; los bloques **booleanos** (puntiagudos) devuelven verdadero o falso para las condiciones.
- Las **variables** y las **listas** conservan valores entre bloques y scripts.

## Formas de los bloques {#block-shapes}

### Bloques de sombrero {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Inician un script cuando ocurre algo. Solo se pueden encajar bloques debajo de ellos.

---

### Bloques de pila {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Los bloques de comando principales: cada uno hace algo.

---

### Bloques en C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloques en forma de C que contienen otros bloques: bucles y condiciones.

---

### Bloques informadores {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Devuelven un valor, como un número o un texto.

---

### Bloques booleanos {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Solo devuelven `true` o `false`. Normalmente se usan en condiciones.

---

### Bloques de cierre {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Terminan un script: no se puede encajar nada debajo de ellos.

---

### Pila de bloques {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Una pila es un grupo de bloques conectados que se ejecuta como un solo script, de arriba abajo.
Una pila suele empezar con un bloque de evento, seguido de los bloques que se ejecutan en orden.

---


## Hubs, puertos y controles {#hubs-ports-and-controls}

- Los bloques de motores y luces usan un **hub** y un **puerto**. Las categorías Motores y Luz solo aparecen cuando algún hub del perfil las admite, y algunos bloques solo existen para determinados hubs (por ejemplo, los modos de potencia de BuWizz o las funciones del Technic Move Hub). La descripción de cada bloque indica con qué hubs funciona.
- Los bloques del panel se refieren a los controles por su nombre (**JOY1**, **BTN2**). No puedes eliminar un control del panel mientras lo usen bloques; quita primero esos bloques.
- Los bloques de gamepad aparecen cuando **Habilitar bloques de gamepad** está activado en la [página Gamepad](/docs/Application/Dashboard/Gamepad).

## Niveles de bloques {#block-levels}

Cada perfil tiene un **Nivel de bloques**: **Principiante** muestra los bloques más sencillos, **Avanzado** añade la lógica y los bloques de dispositivos más habituales, y **Gurú** muestra el conjunto completo. Elígelo al crear el perfil o más tarde en la Configuración del editor. Esta referencia muestra el nivel de cada bloque junto a su nombre.

## Flujo de trabajo recomendado {#recommended-workflow}

1. Empieza con un bloque de evento y un script corto; pulsa **Ejecutar** y comprueba que funciona.
2. Comprueba pronto el sentido de giro de los motores y los rangos de valores (un Monitor ayuda).
3. Divide el programa en scripts pequeños que se comuniquen entre sí con mensajes; lleva la lógica repetida a [Mis bloques](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Añade seguridad: límites, paradas, una comprobación al arrancar y un plan para cuando un hub se desconecte.

## Errores habituales {#common-pitfalls}

- Un script sin bloque de evento nunca empieza.
- Está seleccionado el hub o el puerto equivocado, así que no ocurre nada visible.
- Mezclar texto, números y valores booleanos da resultados inesperados.
- Los eventos muy frecuentes sin filtrar (por ejemplo, un evento de sensor con cada cambio mínimo) pueden sobrecargar el programa; usa umbrales o esperas cortas.

## Referencia de bloques {#block-reference}

- [Eventos](/docs/Application/BlockBuilder/Blocks/Events) · [Control](/docs/Application/BlockBuilder/Blocks/Control) · [Operadores](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variables](/docs/Application/BlockBuilder/Blocks/Variables) · [Listas](/docs/Application/BlockBuilder/Blocks/Lists) · [Mis bloques](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motores](/docs/Application/BlockBuilder/Blocks/Motors) · [Luz](/docs/Application/BlockBuilder/Blocks/Light) · [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors) · [Sonidos](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator) · [Controladores en pantalla](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

En la app, mantén pulsado (o haz clic con el botón derecho en) un bloque y elige **Acerca del bloque** para abrir aquí su descripción.

Programas listos para usar: [Ejemplos](/docs/Application/BlockBuilder/Examples).
