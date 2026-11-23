---
id: SpecialControls
title: Controles especiales
description: "Volante, pedales, palanca de cambios, freno de mano, intermitentes y mando de tren: cómo se usan, sus ajustes, apariencias, valores y bloques."
---

import Screenshot from '@site/src/components/Screenshot';

# Controles especiales {#special-controls}

Los controles especiales se ven y funcionan como los de verdad: un volante, pedales, una palanca de cambios, un freno de mano, una palanca de intermitentes, una caja de transferencia y un controlador de locomotora. Cada uno es un producto aparte: compra los que necesites o consíguelos todos con [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Un panel con volante, pedales, palanca de cambios, freno de mano, intermitentes y mando de tren" width={900} />

| Control | Producto | Nombre en el panel | Qué da al programa |
|---|---|---|---|
| [Volante](#steering-wheel) | Volante | STWHEEL | ángulo de dirección, claxon |
| [Pedales](#pedals) | Pedales | PDLS | acelerador y freno |
| [Caja de cambios manual](#gear-shifter) | Palanca de cambios | GEAR | marcha: R, N, 1…6 |
| [Caja de cambios automática](#gear-shifter) | Palanca de cambios | GEARA | selector: P, R, N, D |
| [Freno de mano](#handbrake) | Freno de mano | HBRK | fuerza, bloqueado |
| [Intermitentes](#turn-signals) | Intermitentes | STALK | intermitente izquierdo, intermitente derecho, luces |
| [Caja de transferencia](#transfer-case) | Caja de transferencia | XFER | modo de tracción: 2H, 4H, N, 4L; bloqueos de diferencial |
| [Mando de tren](#train-controller) | Mando de tren | TRTHR | posición de tracción, sentido, tracción |

El **Mando giratorio** no es un producto aparte: viene con cada tema de pago. Consulta [Tipos de controles](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Añadir un control especial {#add-a-special-control}

1. Abre el panel y toca **+** (**Añadir controlador**; en un ordenador, **+ Controlador**).
2. En la lista de tipos de controles, desplázate hasta **Vehículo y especiales** y selecciona un control.
3. La tira de apariencias muestra todas sus apariencias. Elige una y configura el control en **Configurar**.
4. Toca **Añadir al panel**. Para un control que aún no tienes, toca **Comprar** o **Todo con MocPilot Pro**.

<Screenshot name="special-control-looks" alt="La paleta Añadir controlador con el volante seleccionado y sus apariencias en la tira de apariencias" width={900} />

## Apariencias {#looks}

Cada control especial viene en muchas **apariencias**. La mayoría coinciden con un tema de pago (Carreras, Aura, Clásico, Holograma, etc.), así que el volante, la palanca de cambios y el freno de mano pueden combinar con el resto del panel. Puedes cambiar la apariencia en cualquier momento: selecciona el control y elige otra en **Apariencia**, en la pestaña **Estilo**. La apariencia solo cambia la imagen: los valores, los bloques y el programa siguen igual.

Algunas apariencias también ajustan el color de acento a su estilo al elegirlas.

## Ajustes de todos los controles especiales {#settings-of-all-special-controls}

- **Apariencia** (pestaña Estilo): ver arriba.
- **Color de acento** (pestaña Estilo): palanca de cambios, freno de mano, intermitentes, caja de transferencia y mando de tren.
- **Bloquear el controlador** e **Interactividad** (pestaña Configuración), como en todos los controles. Consulta [Propiedades de los controles](/docs/Application/Dashboard/ControlProperties).

## Volante {#steering-wheel}

Pon un dedo sobre el volante y gíralo alrededor de su centro. Al soltarlo, vuelve solo al centro. Pulsa el centro del volante para tocar el claxon: eso no gira el volante.

**Ajustes**

- **Ángulo del volante** (20–120°, 60° por defecto): cuánto giras el volante para llegar al tope. No cambia los valores que recibe el programa.
- **Efectos de sonido**: el sonido del claxon y los sonidos que el programa reproduce desde el volante. El sonido de la app debe estar activado.

**Valores**: el ángulo de dirección de −100 (todo a la izquierda), pasando por 0, a 100 (todo a la derecha); el claxon vale 100 mientras lo mantienes pulsado y 0 en caso contrario.

**Apariencias**: Todoterreno, Camión pesado, Superdeportivo, Madera clásica, Volante de carreras, Rally ante, Todoterreno utilitario, Concepto luminoso, Camión tráiler, Sedán familiar, Coche urbano, Buggy de dunas, 4x4 clásico, Maquinaria de construcción, Audio Hi-Fi, Aura, Bloques, Núcleo de circuito, Espacio profundo, Transporte pesado, Neo Órbita, Cabina todoterreno, Carreras, Rock Crawler, Táctico, Clásico, Atardecer, Miami, Alta tecnología, Holograma.

**Sonidos** para el programa: Claxon de coche, Bocina de camión, Claxon de deportivo.

**Enlaces rápidos**: la entrada [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) con los canales **Ángulo de dirección** y **Claxon**.

## Pedales {#pedals}

El pedal del freno está a la izquierda y el acelerador a la derecha. Pisa un pedal con un dedo: cuanto más arriba pongas el dedo en el pedal, más a fondo se pisa. Cerca de la parte inferior se pisa suavemente; cerca de la superior, a fondo. Al soltarlo, el pedal vuelve a subir. Puedes pisar los dos pedales a la vez.

**Ajustes**: **Efectos de sonido**: permite que el programa reproduzca los sonidos de los pedales. El sonido de la app debe estar activado.

**Valores**: el acelerador y el freno, cada uno de 0 a 100.

**Apariencias**: Todoterreno, Camión pesado, Superdeportivo, Cromo clásico, Carbono y rojo, Carreras perforado, Agarre todoterreno, Concepto luminoso, Camión tráiler, Sedán familiar, Coche urbano, Buggy de dunas, 4x4 clásico, Maquinaria de construcción, Audio Hi-Fi, Aura, Bloques, Núcleo de circuito, Espacio profundo, Transporte pesado, Neo Órbita, Cabina todoterreno, Carreras, Rock Crawler, Táctico, Clásico, Atardecer, Miami, Alta tecnología, Holograma.

**Sonidos** para el programa: Freno de coche, Freno de deportivo, Freno de aire de camión, Pitido de marcha atrás.

**Enlaces rápidos**: la entrada [Pedales](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) con los canales **Acelerador** y **Pedal de freno**.

:::tip Los pedales solos no hacen un coche
Los pedales solo indican cuánto se pisa cada uno. Si una fila envía el acelerador directamente a un motor, el motor gira exactamente tanto como se pisa el pedal. Para tener un modelo que acelere poco a poco, ruede por inercia, frene y dé marcha atrás, usa el [simulador de vehículo](#vehicle-simulator).
:::

## Palanca de cambios {#gear-shifter}

El producto **Palanca de cambios** tiene dos controles: una **Caja de cambios manual** y una **Caja de cambios automática**.

### Caja de cambios manual {#manual-gearbox}

Una rejilla en H con marcha atrás y hasta seis marchas adelante. Arrastra el pomo por la fila central y hacia arriba o hacia abajo hasta una marcha. Al soltarlo, el pomo encaja en la marcha más cercana o vuelve a punto muerto.

- **Número de marchas** (2–6, 6 por defecto, pestaña Configuración): la rejilla cambia con él. La marcha atrás siempre está en la columna de la izquierda y el punto muerto en el centro.
- **Valores**: −1 = marcha atrás (R), 0 = punto muerto (N), 1…6 = marchas adelante.

### Caja de cambios automática {#automatic-gearbox}

Un selector con cuatro posiciones: **P** (parking), **R** (marcha atrás), **N** (punto muerto) y **D** (conducción). Cómo se maneja depende de la apariencia:

| Selector | Cómo se usa | Apariencias |
|---|---|---|
| Palanca | desliza el mando por la ranura; se detiene en la posición más cercana | Alta tecnología |
| Mando giratorio | gira el mando con un dedo; encaja en P, R, N o D | Clásico, Espacio profundo, Táctico, Maquinaria de construcción, Audio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabina todoterreno, Neo Órbita, Todoterreno, Todoterreno de trabajo, Concepto, Sedán, Urbano, 4x4 clásico |
| Botones | toca P, R, N o D | Carreras, Transporte pesado, Bloques, Camión pesado, Retro, Rally, Superdeportivo, Fórmula, Larga distancia, Buggy, Atardecer, Miami, Holograma |

- **Número de marchas** (2–8, 6 por defecto, pestaña Configuración): cuántas marchas recorre el [simulador de vehículo](#vehicle-simulator) en D. Cuando el simulador elige una marcha, el selector la muestra, por ejemplo **D3**.
- **Valores**: −2 = P, −1 = R, 0 = N, 1 = D. Los tres selectores dan los mismos valores, así que el programa funciona con cualquier apariencia.

Las dos cajas de cambios tienen las mismas apariencias: Clásico, Carreras, Espacio profundo, Táctico, Transporte pesado, Maquinaria de construcción, Audio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabina todoterreno, Bloques, Neo Órbita, Camión pesado, Retro, Rally, Todoterreno, Superdeportivo, Fórmula, Todoterreno de trabajo, Concepto, Larga distancia, Sedán, Urbano, Buggy, Atardecer, 4x4 clásico, Miami, Alta tecnología, Holograma.

**Enlaces rápidos**: la entrada [Palanca de cambios](/docs/Application/Links/Blocks/InputBlocks#controller-gear) con los canales **Marcha** (manual: la marcha en relación con el número de marchas, con la marcha atrás en negativo; automática: el sentido) y **Sentido (R − / adelante +)**: −1 en marcha atrás, 0 en punto muerto y parking, +1 en cualquier marcha adelante.

## Freno de mano {#handbrake}

Una palanca de freno de mano. Coge la palanca por la empuñadura y tira de ella hacia abajo. La fuerza de frenado depende de cuánto tires. Al soltarla, la palanca vuelve a su sitio.

Para **bloquearla**, tira de la palanca hasta el final y luego desliza el dedo por la palanca hacia su base: la empuñadura baja y la palanca queda bloqueada. Para **soltar** una palanca bloqueada, toca el control o arrastra la palanca de vuelta.

**Valores**: la fuerza de 0 a 100, y si la palanca está bloqueada.

**Apariencias**: Clásico, Rally, Camión pesado, Retro, Espacio profundo, Táctico, Aura, Transporte pesado, Maquinaria de construcción, Audio Hi-Fi, Neo Órbita, Cabina todoterreno, Carreras, Bloques, Núcleo de circuito, Rock Crawler, Todoterreno, Superdeportivo, Fórmula, Todoterreno de trabajo, Concepto, Larga distancia, Sedán, Urbano, Buggy, Atardecer, 4x4 clásico, Miami, Alta tecnología, Holograma.

**Enlaces rápidos**: la entrada [Freno de mano](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) con los canales **Freno de mano puesto** (activado/desactivado, como un interruptor) y **Fuerza del freno de mano**.

## Intermitentes {#turn-signals}

Una palanca de intermitentes con interruptor de luces.

- Arrastra la palanca **hacia arriba** para el intermitente izquierdo y **hacia abajo** para el derecho. Se queda donde la dejas; llévala de vuelta al centro para apagar el intermitente.
- **Toca** la palanca o el botón del faro para encender o apagar las luces. Esto no mueve la palanca.

**Ajustes**

- **Ícono: left**, **Ícono: light**, **Ícono: right** (pestaña Estilo): los iconos de los pilotos indicadores.
- **Las salidas de los intermitentes parpadean** (pestaña Configuración, activado por defecto): las salidas de los intermitentes parpadean a la vez que el piloto de la palanca, así que una luz conectada a ellas parpadea sola. Si está desactivado, las salidas se quedan encendidas de forma fija mientras el intermitente está puesto. Los bloques siempre ven el estado fijo.

**Valores**: intermitente izquierdo, intermitente derecho y luces, cada uno encendido o apagado.

**Apariencias**: Clásico, Carreras, Espacio profundo, Táctico, Transporte pesado, Maquinaria de construcción, Audio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabina todoterreno, Bloques, Neo Órbita, Camión pesado, Retro, Rally, Todoterreno, Superdeportivo, Fórmula, Todoterreno de trabajo, Concepto, Larga distancia, Sedán, Urbano, Buggy, Atardecer, 4x4 clásico, Miami, Alta tecnología, Holograma.

**Enlaces rápidos**: la entrada [Intermitentes](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) con los canales **Intermitentes (izquierda − / derecha +)** (dos luces de polaridad opuesta en un mismo puerto), **Intermitente izquierdo**, **Intermitente derecho** y **Luz**.

## Caja de transferencia {#transfer-case}

La caja de transferencia de un todoterreno elige qué ruedas mueve el motor. El control tiene un selector de cuatro posiciones e interruptores para los bloqueos de diferencial:

| Posición | Qué significa |
|---|---|
| **2H** | tracción a dos ruedas: solo se mueven las ruedas traseras, para carreteras normales |
| **4H** | tracción a las cuatro ruedas: se mueven todas las ruedas, para barro, arena y nieve |
| **N** | punto muerto: el motor queda desconectado de las ruedas |
| **4L** | tracción a las cuatro ruedas con **reductora**: lenta y con mucha fuerza, para subidas empinadas y para avanzar entre rocas |

Los **bloqueos de diferencial** hacen que las ruedas de un eje (**delantero**, **trasero**) o los dos ejes (**central**) giren juntos, para que una rueda que ha perdido agarre no se quede girando en vano.

<Screenshot name="transfer-case-dashboard" alt="El control de la caja de transferencia en un panel: el selector, los interruptores de bloqueo y la pantalla" width={700} />

### Cómo se usa {#transfer-case-use}

- **Selector**: posiciones de arriba abajo: 2H, 4H, N, 4L. Según la apariencia, es un **deslizador** (un pomo estriado en una guía: deslízalo por ella; al soltarlo, encaja en la posición más cercana) o un **mando giratorio** (gíralo; encaja con un clic en cada posición). La guía es recta, así que desde 4H solo llegas a 4L pasando por N, como en una caja de transferencia real de palanca.
- **Bloqueos**: una fila de interruptores para los bloqueos delantero, central y trasero: palancas con piloto o botones con enclavamiento cuyo anillo se ilumina en el color de acento, según la apariencia. Toca un interruptor para activar el bloqueo y vuelve a tocarlo para soltarlo.
- **Pantalla**: las etiquetas 2H, 4H, N y 4L junto al selector no cambian; la pantalla muestra la posición seleccionada y los bloqueos activados (**F**, **C**, **R**) en el color de acento.

### Ajustes {#transfer-case-settings}

En la pestaña **Configuración**:

- **Punto muerto (N)** (activado por defecto): desactívalo para un selector con solo 2H, 4H y 4L.
- **Bloqueo del diferencial delantero** (activado), **Bloqueo del diferencial central** (desactivado), **Bloqueo del diferencial trasero** (activado): qué interruptores de bloqueo muestra el control. Si hay menos de tres, se colocan en el centro de la fila.
- **Bloqueos delantero y central solo en 4WD** (activado): los bloqueos delantero y central solo funcionan en 4H y 4L, como en un coche real. En 2H se rechaza el toque (el interruptor parpadea en rojo), y al pasar a 2H se sueltan. N los deja como están. El bloqueo trasero funciona en cualquier posición.

### Valores {#transfer-case-values}

- La **posición**: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L.
- **Tracción total**: encendido en 4H y 4L. **Reductora**: encendido en 4L.
- Cada bloqueo: encendido o apagado.

**Apariencias**: hay una apariencia para cada tema, con su mismo nombre: Clásico, 4x4 clásico, Todoterreno y una para cada tema de pago. Unas apariencias tienen un deslizador y otras un mando giratorio. **Holograma** dibuja todo el control como un contorno de un solo color en el color de acento.

**Enlaces rápidos**: la entrada [Caja de transferencia](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) con los canales **Tracción total**, **Reductora**, **Bloqueo del diferencial delantero**, **Bloqueo del diferencial central** y **Bloqueo del diferencial trasero** (cada uno encendido/apagado, como un interruptor). La entrada [Vehículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) recibe la caja de transferencia completa en su ajuste **Caja de transferencia**.

## Mando de tren {#train-controller}

Un controlador maestro de locomotora con palanca de tracción e inversor.

- **Palanca de tracción**: arrastra la palanca hacia arriba o hacia abajo. Tiene 8 posiciones de tracción (0–8) y se queda en la posición donde la dejas.
- **Inversor**: arrastra su mando hacia arriba para **adelante** o hacia abajo para **marcha atrás**; el centro es **neutral**. El mando salta de una posición a otra y nunca se queda entre dos. Como en una cabina real, solo se mueve cuando la tracción está en 0.

**Valores**: la posición de tracción (0–8), el inversor (1 = adelante, 0 = neutral, −1 = marcha atrás) y la **tracción**: posición ÷ 8 × 100 con el signo del sentido, de −100 a 100. La tracción puede mover directamente un motor de tren.

**Apariencias**: Original, Maquinaria de construcción, Audio Hi-Fi, Aura, Bloques, Buggy, Núcleo de circuito, Urbano, Clásico, Concepto, Espacio profundo, Todoterreno, Transporte pesado, 4x4 clásico, Camión pesado, Miami, Neo Órbita, Superdeportivo, Todoterreno de trabajo, Cabina todoterreno, Carreras, Rally, Rock Crawler, Sedán, Atardecer, Táctico, Larga distancia, Retro, Fórmula, Alta tecnología, Holograma.

**Enlaces rápidos**: la entrada [Deslizador](/docs/Application/Links/Blocks/InputBlocks#controller-train); da la tracción.

## Bloques {#blocks}

Cada control especial añade sus propios bloques a la categoría **Controladores en pantalla** de Bloques lógicos:

| Control | Eventos | Valores |
|---|---|---|
| Volante | *cuando el volante … movido / presionado / soltado* | *volante …*, *¿volante … presionado / soltado?* |
| Pedales | *cuando los pedales … cualquiera / freno / aceleración movido / presionado / soltado* | *pedales … aceleración / freno*, *¿pedal … presionado / soltado?* |
| Cajas de cambios | *cuando caja de cambios … cambia de marcha / sube de marcha / baja de marcha / pasa a punto muerto / mete la marcha atrás / pone parking* | *marcha …*, *¿caja de cambios … en punto muerto / en marcha atrás / en una marcha adelante / en parking?*, *marchas de …* |
| Freno de mano | *cuando freno de mano … tirado / bloqueado / desbloqueado / soltado* | *fuerza del freno de mano …*, *¿freno de mano … bloqueado / desbloqueado / tirado?* |
| Intermitentes | *cuando intermitentes … intermitente izquierdo / intermitente derecho / luces se enciende / se apaga* | *¿intermitentes … intermitente izquierdo / intermitente derecho / luces está encendido?* |
| Caja de transferencia | *cuando caja de transferencia … 2H / 4H / N / 4L / tracción total / reductora / bloqueo delantero / bloqueo central / bloqueo trasero se activa / se desactiva* | *¿caja de transferencia … [lo mismo] está activado?*, *posición de la caja de transferencia …* |
| Mando de tren | *cuando controlador de tren … posición cambiada / posición subida / posición bajada, acelerador cerrado, inversor movido, palanca soltada* | *controlador de tren … tracción / posición de tracción / inversor*, *¿controlador de tren … hacia adelante / en marcha atrás / en punto muerto / en posición 0?* |

El volante y los pedales también tienen el bloque *sonido … de …*: elige uno de sus sonidos para los bloques de **Sonidos**. Más detalles: [Controladores en pantalla](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulador de vehículo {#vehicle-simulator}

Los controles especiales solo dan la entrada en bruto. El **simulador de vehículo** convierte los pedales, la palanca de cambios y el freno de mano en un modelo que se conduce como un coche: acelera con inercia, rueda por inercia, frena, da marcha atrás, cambia de marcha en D y se mantiene quieto con el freno de mano.

- **Enlaces rápidos**: usa la entrada [Vehículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Elige los **Pedales**, la **Palanca de cambios**, el **Freno de mano** y la **Caja de transferencia** de tu panel, el **Tipo de vehículo** (Coche, Todoterreno, Deportivo, Camión) y la **Salida**: **Velocidad**, **Revoluciones del motor (rpm)**, **Frenando** o **Con el freno de mano**.
- **Bloques lógicos**: cuando el panel tiene pedales, una palanca de cambios o un freno de mano, aparece la categoría **Simulador**. Crea allí un vehículo (**Crear vehículo**) y coloca el bloque *conducir* bajo un evento. Conecta valores a sus huecos: *acelerador*, *freno*, *marcha*, *de* (número de marchas; aquí encaja el bloque *marchas de …*), *freno de mano*, *bloqueado* y *caja de transferencia* (aquí encaja el bloque *posición de la caja de transferencia …*; déjalo vacío si el modelo no tiene caja de transferencia). Otros bloques del Simulador ajustan el tipo de vehículo, la inercia del motor y la velocidad de marcha atrás, leen la velocidad, las revoluciones del motor y la marcha, y reaccionan cuando el vehículo arranca, se detiene, frena o cambia de marcha.

Cómo conduce el simulador:

- El **acelerador** hace que el modelo gane velocidad con inercia; al soltarlo, el modelo rueda por inercia. El **freno** lo frena.
- **Sin caja de cambios**, si mantienes pisado el freno cuando el modelo se ha detenido, da marcha atrás.
- **Caja de cambios manual**: R da marcha atrás y N no avanza. Opcionalmente, cada marcha limita la velocidad máxima.
- **Caja de cambios automática**: R da marcha atrás, N no avanza y P retiene el modelo como un freno de mano bloqueado. En D, el simulador sube y baja de marcha solo y muestra la marcha en el selector.
- **Freno de mano**: su fuerza se suma a la frenada; un freno de mano bloqueado puede retener el modelo.
- **Caja de transferencia**: en 2H y 4H se conduce como sin ella. En **N** no avanza: el modelo rueda por inercia y el freno solo lo frena, sin dar marcha atrás. **4L** limita la velocidad al 40 % hacia delante y marcha atrás, con las revoluciones del motor más altas en proporción; si el modelo va más rápido, frena hasta el límite al pasar a 4L. Los bloqueos de diferencial no cambian cómo conduce el simulador: son solo salidas del control.
- **Tipo de vehículo**: un camión es más pesado (más inercia) y tiene freno de aire; un deportivo reacciona rápido y da marcha atrás más deprisa.

No se pueden eliminar los últimos pedales, la última palanca de cambios ni el último freno de mano mientras el programa use bloques del Simulador.
