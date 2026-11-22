---
id: FirstCarLinks
title: Tu primer coche RC con Enlaces rápidos
description: "Paso a paso: construye un coche LEGO teledirigido con tracción, dirección por servo y luces en Enlaces rápidos, sin código."
---

import Screenshot from '@site/src/components/Screenshot';

# Tu primer coche RC con Enlaces rápidos {#your-first-rc-car-with-quick-links}

En este tutorial construyes un coche teledirigido completo en [Enlaces rápidos](/docs/Application/Links/LinksIntroducing): un joystick acelera y gira, y un botón enciende y apaga las luces. Se tarda unos 15 minutos y no hay que escribir código.

**Qué necesitas**

- un LEGO® Technic™ Hub (88012);
- un motor de tracción en el **puerto A**;
- un motor de dirección con sensor de posición (encoder) en el **puerto B**, por ejemplo un motor Technic L o XL o cualquier motor angular Technic. La dirección debe tener topes: las ruedas solo pueden girar hasta cierto punto a izquierda y derecha;
- luces LEGO® en el **puerto C** (opcional);
- MOCPilot en un teléfono, una tablet o un ordenador con Bluetooth.

:::note City Hub
Un City Hub (88009) solo tiene dos puertos. Conecta el motor de tracción en **A** y el de dirección en **B**, y prescinde de las luces o añade un segundo hub para ellas. Todo lo demás funciona igual.
:::

**El resultado**: un perfil con tres filas:

| # | Entrada | Procesamiento | Operación | Salida |
|---|---|---|---|---|
| 1 | JOY1, Eje Y | Suave | Motor | Technic Hub, puerto A |
| 2 | JOY1, Eje X | | Servo (Auto) | Technic Hub, puerto B |
| 3 | BTN1 | Alternar | Luz | Technic Hub, puerto C |

## 1. Crea el perfil {#create-the-profile}

1. Ve a **Mis perfiles** y empieza un perfil nuevo: en un teléfono toca **+** → **Nuevo perfil**, en una tablet toca **Nuevo perfil** en la cabecera, en un ordenador elige **Archivo → Nuevo perfil**.
2. Elige el mosaico **Enlaces rápidos**.
3. Escribe un **Nombre**, por ejemplo «Mi primer coche». La imagen y los hashtags son opcionales por ahora.
4. Toca **Crear**. El perfil se abre en el editor de Enlaces rápidos con una fila vacía.

El tipo de programa no se puede cambiar después. Más información en [Crear un perfil](/docs/Application/Profiles/CreateProfile).

## 2. Añade y conecta el hub {#add-the-hub}

1. En el editor, toca **Mis hubs** (**Hubs** en la barra superior en un ordenador).
2. Toca **Agregar un nuevo Hub** en una ranura libre, elige el Technic Hub en la lista y toca **Añadir**.
3. Enciende el hub y pulsa su botón. MOCPilot lo encuentra y se conecta; el hub se queda en la ranura.
4. Si aparece el diálogo **Se requiere actualización de firmware**, toca **Actualizar** y mantén el hub encendido y cerca hasta que termine la actualización. Consulta [Actualizar el firmware](/docs/Application/Hubs/FirmwareUpdating).

Consejo: abre el hub conectado para ver su [monitor del hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Muestra qué dispositivo está conectado a cada puerto, así que puedes comprobar los motores antes de crear las filas.

Más información en [Añadir y conectar un hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Coloca los controles en el panel {#dashboard}

1. Abre el **Panel** y toca **+** (**Añadir controlador**; en un ordenador, **+ Controlador**).
2. En el grupo **Joysticks**, elige **Joystick** y toca **Añadir al panel**. Se llama **JOY1**. Deja **Tipo de ejes** en **Ambos ejes (X, Y)**: arriba y abajo servirán para acelerar, izquierda y derecha para girar.
3. Vuelve a tocar **+**. En **Botones e interruptores**, elige **Botón** y toca **Añadir al panel**. Se llama **BTN1**.
4. Arrastra el joystick a la izquierda y el botón a la derecha, donde tendrás los pulgares. Toca un control para cambiar su tamaño (**S**, **M** o **L**) o su apariencia.

<Screenshot name="tutorial-car-dashboard" alt="Panel con el joystick JOY1 a la izquierda y el botón BTN1 a la derecha" width={900} />

¿Prefieres acelerar y girar con pulgares distintos? Añade dos joysticks: **JOY1** con **Solo vertical (Y)** y **JOY2** con **Solo horizontal (X)**, y usa JOY2 en la fila de dirección.

Más información en [Añadir y organizar controles](/docs/Application/Dashboard/ArrangingControls) y [Tipos de controles](/docs/Application/Dashboard/ControlTypes).

### Opción: volante y pedales {#wheel-and-pedals}

Si tienes los [controles especiales](/docs/Application/Dashboard/SpecialControls) **Volante** y **Pedales**, puedes usarlos en lugar del joystick. En el paso 4, crea la fila 1 con la entrada [Vehículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) con **Salida** en **Velocidad** (acelera y frena como un coche de verdad, así que no necesitas Suave), y la fila 2 con la entrada **Volante** y el canal **Ángulo de dirección**.

## 4. Crea las filas {#rows}

Vuelve al programa. La paleta de la parte inferior tiene tres pestañas: **Entradas**, **Procesamiento** y **Salidas**. Cada fila va de izquierda a derecha: entrada → procesamiento → operación → hub. Cómo funciona el editor: [Introducción a Enlaces rápidos](/docs/Application/Links/LinksIntroducing).

### Fila 1: tracción {#row-drive}

1. En **Entradas**, arrastra **JOY1** con el canal **Eje Y** a la fila vacía («Nueva fila: entrada»). Debajo aparece una nueva fila vacía.
2. En **Procesamiento**, arrastra **Suave** detrás de la entrada. Los valores predeterminados de 0,5 s para **Aceleración (hasta velocidad máxima)** y **Deceleración (hasta detenerse)** son un buen punto de partida.
3. En **Salidas**, arrastra **Motor** detrás de Suave.
4. Arrastra la salida **Technic Hub** detrás de Motor y toca la etiqueta del puerto **A**.

### Fila 2: dirección {#row-steering}

1. Arrastra **JOY1** con el canal **Eje X** a la siguiente fila vacía.
2. Arrastra **Servo** desde **Salidas**.
3. Toca el bloque Servo y pon **Calibración** en **Auto**.
4. Arrastra la salida **Technic Hub** detrás de Servo y toca **B**.

En modo **Auto**, cada vez que arranca el programa, el motor de dirección gira hasta los dos topes; el punto medio pasa a ser el centro y el recorrido, el ángulo de dirección. Para probarlo enseguida, toca **Calibrar ahora** en la configuración del Servo mientras el hub está conectado. Si la calibración falla, revisa el hub, el motor y que la dirección tenga topes de verdad.

<Screenshot name="links-servo-settings" alt="Configuración de un bloque Servo" width={900} />

¿No hay topes? Usa **Manual**: endereza las ruedas a mano, toca **Fijar como cero** y elige el **Ángulo**. Consulta [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Fila 3: luces {#row-lights}

1. Arrastra **BTN1** a la siguiente fila vacía.
2. Arrastra **Alternar** desde **Procesamiento**. Convierte el pulsador en un interruptor: una pulsación enciende y otra apaga.
3. Arrastra **Luz** desde **Salidas**.
4. Arrastra la salida **Technic Hub** detrás de Luz y toca **C**.

<Screenshot name="tutorial-car-links-rows" alt="Las tres filas terminadas del coche: tracción, dirección y luces" width={900} />

Cuando las tres filas están listas, el botón **Problemas** de la barra superior (justo antes de **Ejecutar**) muestra una marca verde. Un «!» rojo indica cuántos problemas quedan; tócalo y luego toca un problema para ir a la fila. Consulta [Ejecución y solución de problemas](/docs/Application/Links/Problems).

## 5. Ejecuta y prueba {#run}

1. Pon el coche sobre un soporte o sujétalo para que las ruedas no toquen la mesa.
2. Pulsa **Ejecutar**. El motor de dirección se calibra: gira a ambos lados y vuelve al centro.
3. Mueve el joystick arriba y abajo: el coche avanza y retrocede, arrancando y frenando con suavidad. Muévelo a izquierda y derecha: las ruedas giran.
4. Pulsa **BTN1**: las luces se encienden. Vuelve a pulsarlo: se apagan.
5. Pulsa **Detener** para volver a editar.

Mientras el programa se ejecuta, cada unión entre bloques muestra el valor que pasa por ella, así que puedes seguir una señal desde el joystick hasta el hub.

<Screenshot name="links-live-values" alt="Un programa de Enlaces rápidos en ejecución con valores en directo en las uniones" width={900} />

Más información en [Conducir un modelo (Ejecutar)](/docs/Application/Profiles/PlayMode).

## 6. Ajusta los detalles {#tune}

Primero pulsa **Detener**: las filas no se pueden editar mientras el programa se ejecuta.

- **¿El coche va hacia atrás cuando empujas hacia arriba?** Añade **Invertir** a la fila 1. Lo mismo sirve para la fila 2 si las ruedas giran al revés.
- **¿El motor zumba o se mueve lentamente con el joystick suelto?** Añade **Zona muerta** a la fila 1, antes de Suave. La **Zona** predeterminada del 10 % es un buen punto de partida.
- **¿Demasiado rápido?** Añade **Límite** a la fila 1, por ejemplo con **Máximo** al 50 %.
- **¿Demasiado lento en reaccionar?** Toca Suave y elige un tiempo más corto, o **Instantáneo**.

Un buen orden para una fila de tracción es *Zona muerta → Límite → Suave*. Todos los ajustes: [Bloques de procesamiento](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Opcional: conduce con un gamepad {#gamepad}

1. Empareja un gamepad tipo Xbox o PlayStation con tu dispositivo en los ajustes de Bluetooth del sistema.
2. En el editor, abre **Gamepad** y activa **Habilitar bloques de gamepad**.
3. En cada fila, arrastra la entrada del panel de vuelta a la paleta para quitarla, y arrastra la entrada **Gamepad** en su lugar. Configura su **Entrada**: **Stick izquierdo Y** para la fila 1, **Stick derecho X** para la fila 2 y **A** (**Cruz** en PlayStation) para la fila 3.

Cada puerto solo puede pertenecer a una fila, así que una fila maneja un puerto o desde el panel o desde el gamepad. Más información en [Gamepad](/docs/Application/Dashboard/Gamepad).

## Si algo no se mueve {#if-something-does-not-move}

1. ¿Está conectado el hub? Revisa **Mis hubs** y el punto de conexión del bloque Hub.
2. ¿Están los motores conectados a los puertos que elegiste en las filas?
3. ¿Muestra el botón **Problemas** una marca verde y están activadas todas las filas?
4. ¿Se está ejecutando el programa?
5. Ejecuta el programa y observa los valores en directo: si el valor cambia en la entrada pero el motor no gira, revisa el hub y el puerto.

Un mensaje como «Puerto B: este dispositivo no puede funcionar como servo (se necesita un motor con encoder)» significa que el motor de ese puerto no tiene encoder. Más mensajes y soluciones: [Ejecución y solución de problemas](/docs/Application/Links/Problems) y [Solución de problemas](/docs/Help/Troubleshooting).

## 8. Guarda y comparte {#save-and-share}

No hay botón Guardar: el perfil conserva tus cambios. Si has iniciado sesión, también se [sincroniza](/docs/Application/Account/Sync) con tus otros dispositivos.

- **Compartir como archivo**: en **Mis perfiles**, toca **Compartir** en la tarjeta del perfil (**Compartir…** en un ordenador). Obtienes un archivo `.dat` para enviárselo a un amigo. Consulta [Gestionar perfiles](/docs/Application/Profiles/ManageProfiles).
- **Publicar en el catálogo**: abre **Editar perfil** y toca **Enviar al catálogo**. Antes añade una imagen, una descripción y un hashtag. Consulta [Catálogo y publicación](/docs/Application/Profiles/Catalog).

## Siguientes pasos {#next-steps}

- Vigila la batería: añade al panel un **Nivel de batería** o un **Monitor** de texto y una fila *Technic Hub (Batería) → Indicador*. Consulta [Indicadores y monitores](/docs/Application/Dashboard/Indicators).
- Construye el mismo coche en Bloques lógicos: [El mismo coche en Bloques lógicos](/docs/Tutorials/FirstCarBlocks).
- Más recetas: un tanque, una grúa y un tren en [Ejemplos](/docs/Application/Links/Examples).
- Dale un nuevo aspecto al panel con [temas](/docs/Application/Themes/ThemesOverview).
