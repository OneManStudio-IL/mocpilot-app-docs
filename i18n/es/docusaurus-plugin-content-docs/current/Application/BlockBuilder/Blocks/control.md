---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control {#control}

Los bloques de control deciden cómo se ejecuta un script: esperas, bucles, ramificaciones y paradas. Cuando el perfil tiene hubs, esta categoría también contiene bloques que conectan los hubs y cambian sus ajustes.

## Bloques de espera {#wait-blocks}

### `esperar … segundos` (Principiante) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pausa el script durante el número de segundos indicado.

### `esperar hasta …` (Avanzado) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pausa el script hasta que la condición se cumple.

## Bucles {#loops}

### `repetir …` (Avanzado) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Ejecuta los bloques que contiene el número de veces indicado (10 por defecto).

### `repetir mientras …` (Avanzado) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Ejecuta los bloques que contiene una y otra vez hasta que la condición se cumple.

### `repetir siempre` (Avanzado) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Ejecuta los bloques que contiene sin parar hasta que el script o el programa se detiene. No se puede encajar nada debajo.

## Ramificaciones {#branches}

### `si … entonces` (Principiante) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Ejecuta los bloques que contiene solo cuando la condición se cumple.

### `si … entonces … otro` (Avanzado) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Ejecuta la primera rama cuando la condición se cumple y, si no, la segunda.

### `haz esto … y esto` (Gurú) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Ejecuta el primer grupo de bloques, después el segundo, y solo entonces continúa con los bloques de debajo.

## Detener {#stopping}

### `detener …` (Principiante) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Detiene scripts; lo que detiene exactamente depende de la opción.

- `todos`: detiene todos los scripts.
- `esta pila`: detiene solo este script.
- `y salir del programa`: detiene el programa.

### `detener otras pilas` (Gurú) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Detiene todos los demás scripts en ejecución; este sigue funcionando.

## Bloques de hub {#hub-blocks}

### `conectar / desconectar …` (Principiante) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Conecta o desconecta del programa el hub seleccionado.

- Opciones: `conectar`, `desconectar`
- Hubs: todos.

### `… conectado` (Principiante) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Devuelve `true` cuando el hub seleccionado está conectado.

- Tipo: bloque booleano
- Hubs: todos.

### `configurar … configuración a …` (Avanzado) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Cambia el hub a una de sus configuraciones.

- Hubs: Technic Move Hub (actualmente el único hub con configuraciones).
- Uso típico: cambiar el hub a otra configuración antes de que se ejecuten los bloques siguientes.

### `obtener … configuración como …` (Avanzado) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Devuelve la configuración actual del hub.

- Tipo: bloque informador
- Salida: `texto` o `índice`
- Hubs: Technic Move Hub.
- Devuelve `NaN` cuando el hub no está conectado o no tiene configuración.

### `configurar … modo de energía a …` (Principiante) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Ajusta el modo de potencia de un BuWizz 2.

- Modos: `Lento`, `Normal`, `Rápido`, `Ludicrous`
- Hubs: BuWizz 2.

### `obtener … modo de potencia como …` (Gurú) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Devuelve el modo de potencia actual de un BuWizz 2.

- Salida: `texto` o `índice`
- Hubs: BuWizz 2.

### `configurar … canal de control a …` (Avanzado) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Ajusta el canal de control de un hub Mould King.

- Canales: `A`, `B`, `C`
- Hubs: Mould King 4.0 y 6.0.

### `obtener … canal de control como …` (Avanzado) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Devuelve el canal de control actual de un hub Mould King.

- Salida: `texto` o `índice`
- Hubs: Mould King 4.0 y 6.0.
