---
id: Sounds
title: Sonidos
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sonidos {#sounds}

Los bloques de sonido reproducen sonidos en el teléfono, la tableta o el ordenador donde se ejecuta MOCPilot: pitidos, señales, bocinas, efectos y tus propias grabaciones. El hub Robot Inventor también tiene su propio altavoz, consulta [Altavoz del hub Robot Inventor](#robot-inventor-sounds).

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

## Altavoz del hub Robot Inventor {#robot-inventor-sounds}

Estos bloques vienen de la app Robot Inventor y reproducen sonidos en el altavoz del [hub MINDSTORMS Robot Inventor o SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), no en tu dispositivo. Llevan el icono del hub. Las notas son números de nota MIDI: 60 es el do central y cada paso es un semitono (de 0 a 132).

### `reproducir pitido … durante … segundos` (Principiante) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Reproduce un pitido de la nota indicada (60 de forma predeterminada) durante el tiempo indicado (0,2 s de forma predeterminada) y espera hasta que termina.

### `iniciar pitido …` (Avanzado) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Inicia un pitido de la nota indicada y continúa enseguida. El pitido suena hasta **detener todos los sonidos** u otro sonido del hub.

### `reproducir sonido … hasta que termine` (Principiante) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Reproduce uno de los sonidos de robot guardados en el hub (Affirmative, Laser, Hello, Tadaa y 80 más) y espera hasta que termina. Los sonidos vienen con el software del hub; si el hub no suena, consulta [Si el hub no arranca](/docs/Application/Hubs/RobotInventorHub#restore).

### `iniciar sonido …` (Principiante) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Inicia un sonido de robot del hub y continúa enseguida.

### `detener todos los sonidos` (hub) (Principiante) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Detiene el sonido y el pitido en el hub. El bloque con el mismo nombre sin el icono del hub detiene los sonidos de tu dispositivo.

### `establecer volumen del hub a … %` (Avanzado) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Ajusta el volumen de los pitidos, sonidos y notas del hub, de 0 a 100 % (100 % hasta que lo cambies).

### `cambiar volumen del hub en …` (Avanzado) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Sube o baja el volumen del hub en la cantidad indicada (−10 de forma predeterminada); el volumen se queda entre 0 y 100 %.

### `volumen del hub` (Avanzado) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Devuelve el volumen del hub, de 0 a 100.

### `configurar … efecto a …` (Avanzado) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Ajusta un efecto de sonido para los sonidos de robot que empiecen después.

- `tono`: de −360 a 360; los valores positivos hacen los sonidos más agudos y rápidos, los negativos más graves y lentos. 0 es lo normal.
- `balance izquierda/derecha`: de −100 a 100. El hub tiene un solo altavoz, así que no lo oirás; el valor se conserva para los programas creados en la app Robot Inventor.

### `cambiar … efecto en …` (Avanzado) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Cambia el efecto de tono o de balance en la cantidad indicada (10 de forma predeterminada), dentro de los mismos límites.

### `quitar efectos de sonido` (Avanzado) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Vuelve a poner el tono y el balance a 0.

### Música {#robot-inventor-music}

Los bloques de música cuentan el tiempo en **tiempos** (pulsos): con el tempo de 60 tiempos por minuto (el predeterminado), un tiempo dura un segundo. Mientras el programa se ejecuta en MOCPilot, las notas suenan como pitidos del hub de la altura y duración correctas, y los tambores como pitidos cortos; el instrumento todavía no cambia el sonido.

#### `tocar nota … durante … tiempos` (Avanzado) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Toca una nota (60 de forma predeterminada) durante el número de tiempos indicado (0,25 de forma predeterminada) y espera.

#### `tocar tambor … durante … tiempos` (Avanzado) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Toca uno de los 18 tambores (caja, bombo, charles, cencerro y otros) y espera el número de tiempos indicado.

#### `silencio durante … tiempos` (Avanzado) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Espera el número de tiempos indicado sin tocar nada.

#### `fijar instrumento a …` (Gurú) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Elige uno de los 21 instrumentos (piano, órgano, guitarra, flauta, coro, sintetizador y otros) para las notas siguientes.

#### `fijar tempo a …` (Avanzado) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Ajusta el tempo en tiempos por minuto, de 20 a 500 (60 de forma predeterminada).

#### `cambiar tempo en …` (Avanzado) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Hace la música más rápida o más lenta en el número de tiempos por minuto indicado (20 de forma predeterminada).

#### `tempo` (Avanzado) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Devuelve el tempo actual en tiempos por minuto.
