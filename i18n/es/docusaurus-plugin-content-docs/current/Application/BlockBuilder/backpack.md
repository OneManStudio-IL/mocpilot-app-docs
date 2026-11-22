---
id: Backpack
title: Mochila
description: "Guarda partes de tus programas de Bloques lógicos en la mochila e insértalas en cualquier perfil, en todos tus dispositivos."
---

import Screenshot from '@site/src/components/Screenshot';

# Mochila {#backpack}

La **Mochila** es donde guardas partes de tus programas de bloques para reutilizarlas en otros perfiles: una rutina de dirección, un espectáculo de luces, un bloque de Mis bloques que escribiste una vez y quieres tener en todas partes. Guarda una pila de bloques en la mochila desde un perfil y luego insértala en cualquier otro perfil, en este dispositivo o en cualquier dispositivo donde hayas iniciado sesión.

La mochila forma parte del editor de [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Los perfiles de Enlaces rápidos no la tienen.

<Screenshot name="backpack-panel" alt="El panel Mochila junto a un programa de bloques" width={900} />

## Qué guarda la mochila {#what-the-backpack-keeps}

Cada elemento de la mochila es una **copia** de los bloques que guardaste:

- **Una pila**: el bloque que elegiste junto con todo lo que está enganchado debajo y dentro de él, igual que lo copia **Duplicar**.
- **Un bloque de Mis bloques**: si guardas el bloque `definir …` de un [bloque propio](/docs/Application/BlockBuilder/Blocks/MyBlocks), la mochila guarda la definición completa. Estos elementos llevan la marca **Mi bloque**.

El elemento también recuerda los bloques de Mis bloques que usan tus bloques (incluso a través de otros bloques de Mis bloques) y los nombres de las variables, listas, mensajes, vehículos y sonidos a los que hacen referencia, para que los bloques funcionen cuando los insertes en otro sitio.

Los bloques insertados pasan a ser una parte normal del programa del perfil. Nada en el perfil depende de la mochila: eliminar o cambiar el nombre de un elemento no cambia los programas en los que lo insertaste. Los elementos no se pueden editar en la mochila. Para cambiar uno, insértalo, edita los bloques en el programa y vuelve a guardarlos en la mochila como un elemento nuevo.

## Guardar bloques en la mochila {#save-blocks}

1. En el programa, haz clic derecho en un bloque (ordenador) o mantenlo pulsado (teléfono, tablet).
2. Elige **Añadir a la mochila**.
3. Escribe un nombre en **Nombre de los bloques** y toca **Guardar**.

El bloque y todo lo que tiene enganchado van a la mochila. Para guardar la definición de un bloque de Mis bloques, abre el menú de su bloque `definir …`.

<Screenshot name="backpack-add" alt="El menú del bloque con Añadir a la mochila y la ventana del nombre" width={900} />

## Abrir la mochila {#open}

- **Ordenador y editor web**: el botón **Mochila** de la barra superior del editor, **Ver → Mochila** en el menú, o **Ctrl+Shift+B** (**⌘⇧B** en un Mac). Si la ventana es estrecha, el botón está en el menú **Más**. La mochila se abre como un panel en el lado derecho del editor, junto al [Monitor](/docs/Application/BlockBuilder/Editor#monitor) si también está abierto.
- **Teléfono y tablet**: **Más → Mochila** en la barra superior del editor. La mochila se abre como un panel sobre el editor.

El botón aparece resaltado mientras la mochila está abierta. Vuelve a pulsarlo para cerrarla.

Cada elemento muestra su imagen, su nombre y el número de bloques que contiene (**Bloques: N**). La nota de la parte inferior del panel te indica dónde se guarda la mochila (consulta [más abajo](#where-it-is-kept)).

## Insertar bloques en un programa {#insert}

- **Toca un elemento**: sus bloques aparecen en la parte visible del programa.
- **Arrastra un elemento al programa**: los bloques quedan donde los sueltas. Arrastra hacia un lado, hacia el programa; si arrastras hacia arriba o hacia abajo, se desplaza la lista.
- **Menú del elemento (⋯)**: **Insertar**, **Cambiar nombre…** o **Eliminar**.

En teléfonos y tablets, la mochila se cierra después de insertar para que puedas ver los bloques. Un solo **Deshacer** quita todo lo que se insertó.

### Qué pasa al insertar {#what-happens}

- **Mis bloques**: si el perfil ya tiene un bloque de Mis bloques con el mismo contenido, se reutiliza, así que insertar los mismos bloques otra vez no crea copias. Si otro bloque de Mis bloques del perfil usa el mismo nombre, el insertado recibe uno propio. Insertar un elemento de Mi bloque que ya está en el perfil no hace nada y muestra **Ya está aquí**: busca el bloque en **Mis bloques**.
- **Variables, listas, mensajes y vehículos**: si el perfil tiene uno con el mismo nombre, los bloques lo usan; si no, se crea. Los valores de las variables y el contenido de las listas no se copian. Si el nombre ya lo usa otra cosa, aparece un mensaje como *No se pudo crear la variable «velocidad»: el nombre ya existe*.
- **Sonidos**: tus propios sonidos son archivos del perfil y no se guardan en la mochila. Si el perfil no tiene un sonido con ese nombre, verás *El sonido «…» no está en este perfil: elige un sonido en los bloques*. Los sonidos integrados funcionan en todas partes.
- **Bloques de hub y del panel**: los bloques de un hub, de un control del panel o de un gamepad que este perfil no tiene no se pueden insertar. Antes de cambiar nada, la app muestra **Algunos bloques no se pueden insertar** con la lista de esos bloques y cuántos se omitirán, y te pregunta si quieres insertar los demás. Si quieres conservarlos, añade primero el hub o el control del panel. Si ninguno de los bloques encaja en el perfil, no se inserta nada.

## Cambiar nombre y eliminar {#rename-delete}

Abre el menú del elemento (⋯):

- **Cambiar nombre…** cambia el nombre del elemento.
- **Eliminar** lo quita después de que lo confirmes (**¿Eliminar de la mochila?**). Los programas en los que lo insertaste conservan sus bloques.

La mochila nunca elimina elementos por sí sola: elimina lo que ya no necesites.

## Dónde se guarda la mochila {#where-it-is-kept}

- **Sin cuenta (invitado)**: solo en este dispositivo. El panel indica *Guardada en este dispositivo. Inicia sesión para tener la mochila en todos tus dispositivos.*
- **Con sesión iniciada**: también en tu cuenta, así que tienes la misma mochila en todos tus dispositivos, incluido el [editor web](/docs/Introducing/WebEditor). El panel indica *Guardada en tu cuenta: la misma mochila en todos tus dispositivos.* Los cambios hechos en un dispositivo aparecen en los demás.
- **Primer inicio de sesión**: los elementos que guardaste como invitado en este dispositivo pasan a tu cuenta.

Puedes usar la mochila sin conexión. Los cambios se guardan en el dispositivo y se envían a tu cuenta cuando vuelve la conexión (mientras tanto, el panel muestra **Sincronizando…**). Un elemento que todavía se está descargando de tu cuenta aún no se puede insertar: la app indica **Aún no está listo**, así que inténtalo de nuevo en un momento.

## Límites {#limits}

| | Límite |
|---|---|
| Elementos en la mochila | 200 |
| Tamaño de un elemento | unos 512 KB (puede que una parte muy grande de un programa no quepa: guarda una parte más pequeña) |
| Nombre del elemento | hasta 100 caracteres |

Si la mochila de tu cuenta está llena o un elemento es demasiado grande para ella, el elemento se queda solo en este dispositivo y la app te lo indica. Los elementos guardados con una versión más reciente de la app solo se pueden insertar después de actualizar la app.

## Solución de problemas {#troubleshooting}

| Mensaje | Qué hacer |
|---|---|
| **La mochila está llena (200 elementos). Elimina algo que no necesites.** | Elimina los elementos que ya no uses. |
| **Demasiados bloques para la mochila. Guarda una parte más pequeña.** | Guarda una pila más pequeña o divide el programa en varios elementos. |
| **Algunos bloques no se pueden insertar** | Al perfil le falta un hub, un control del panel o un gamepad que los bloques necesitan. Añádelo y vuelve a insertar, o inserta los demás bloques. |
| **Ya está aquí** | El bloque de Mis bloques ya está en este perfil: búscalo en **Mis bloques**. |
| **Aún no está listo** | El elemento todavía se está descargando de tu cuenta. Espera un momento e inténtalo de nuevo. |
| **Estos bloques se guardaron con una versión más reciente de la app. Actualiza la app para usarlos.** | Actualiza MOCPilot en este dispositivo. |
