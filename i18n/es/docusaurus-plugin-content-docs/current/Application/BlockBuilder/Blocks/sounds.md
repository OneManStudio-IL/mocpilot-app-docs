---
id: Sounds
title: Sonidos
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sonidos {#sounds}

Los bloques de sonido reproducen sonidos en el teléfono, la tableta o el ordenador donde se ejecuta MOCPilot: pitidos, señales, bocinas, efectos y tus propias grabaciones.

## Qué sonidos puedes reproducir {#which-sounds-you-can-play}

La lista de sonidos de los bloques tiene dos partes:

- **La biblioteca integrada**: pitidos cortos, chirridos, un avisador de marcha atrás, una sirena, una alarma, señales de éxito y de error, bocinas de coche, camión y tren, un timbre de bicicleta, un intermitente y algunos efectos (clic, pop, láser, moneda, power up, power down).
- **Tus propios sonidos**: pulsa **Añadir sonido** en la parte superior de la categoría y elige un archivo de audio. La app lo convierte y lo guarda en el perfil, así que viaja con el perfil a tus otros dispositivos y al catálogo. Un perfil puede contener hasta 30 sonidos; los archivos más largos se recortan a 15 segundos. Usa **Renombrar sonido** y **Eliminar sonido** para gestionarlos; los bloques que reproducían un sonido eliminado se quedan en silencio.

<Screenshot name="blocks-add-sound" alt="El diálogo Añadir sonido en Bloques lógicos" width={900} />

## Bloques {#blocks}

### `sonido … reproducir / reproducir hasta terminar / repetir` (Principiante) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Reproduce el sonido seleccionado.

- `reproducir`: inicia el sonido y pasa de inmediato al bloque siguiente. Los sonidos pensados para repetirse en bucle (como la sirena o el avisador de marcha atrás) siguen repitiéndose.
- `reproducir hasta terminar`: reproduce el sonido una vez y espera a que termine.
- `repetir`: reproduce el sonido en bucle hasta que lo detengas.
- Iniciar un sonido que ya se está reproduciendo lo reinicia.
- Puedes poner en el campo un informador **sonido** (o una variable que lo contenga) en lugar de elegir de la lista.

### `pitido … Hz durante … s` (Principiante) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Reproduce un tono de la frecuencia y la duración indicadas y espera a que termine.

- Frecuencia: de 50 a 8000 Hz (440 por defecto).
- Duración: de 0,02 a 10 segundos (0,2 por defecto).

### `detener sonido …` (Principiante) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Detiene el sonido seleccionado.

### `detener todos los sonidos` (Principiante) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Detiene todos los sonidos que se están reproduciendo.

### `fijar volumen a … %` (Avanzado) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Ajusta el volumen de todos los sonidos del programa, de 0 a 100 %. Cuando el programa se detiene, el volumen vuelve al 100 %.

### `volumen` (Avanzado) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Devuelve el volumen actual, de 0 a 100.

### `sonido …` (Avanzado) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Devuelve el sonido seleccionado como valor.

- Uso típico: guardar un sonido en una variable o en una lista, o pasarlo a uno de [Mis bloques](/docs/Application/BlockBuilder/Blocks/MyBlocks), y después reproducirlo con **sonido … reproducir**.
