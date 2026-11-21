---
id: Light
title: Luce
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Luce {#light}

I blocchi Luce controllano la spia di stato dell'hub, le luci collegate alle porte e la matrice di luci degli hub supportati. La categoria compare quando un hub del profilo ha qualcosa da illuminare.

## Luci dell'hub e delle porte {#hub-and-port-lights}

### `imposta colore LED su …` (Principiante) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Imposta il colore della spia di stato dell'hub.

- Hub: hub LEGO Powered Up (compreso il Technic Move Hub), WeDo 2.0 e l'hub MINDSTORMS Robot Inventor.
- Uso tipico: mostrare lo stato del modello (pronto, in esecuzione, avviso, errore).

### `accendere a … % luminosità` (Principiante) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Accende con la luminosità indicata le luci collegate alla porta selezionata.

- Hub: tutti gli hub con porte, tranne WeDo 2.0.
- Uso tipico: fari, illuminazione regolabile.

### `spegnere` (Principiante) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Spegne le luci collegate alla porta selezionata.

- Hub: gli stessi di **accendere a … % luminosità**.

### `accendere le luci …` (Principiante) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Accende o spegne le luci di un Technic Move Hub.

- Opzioni: `spento`, `abilitato`
- Hub: Technic Move Hub.

## Matrice di luci {#light-matrix}

Questi blocchi funzionano con la matrice di luci 5×5 integrata nell'hub MINDSTORMS Robot Inventor.

### `accendere …` (Avanzato) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Mostra l'immagine selezionata sulla matrice di luci e passa subito al blocco successivo. L'immagine resta finché un altro blocco non modifica la matrice o il programma non si ferma.

### `scrivere …` (Principiante) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Fa scorrere il testo sulla matrice di luci, una lettera alla volta.

### `spegnere i pixel` (Principiante) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Spegne tutti i pixel della matrice di luci.

### `impostare il pixel … x … y … luminosità …` (Avanzato) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Imposta la luminosità di un singolo pixel; il resto della matrice rimane com'è. `x` è la colonna e `y` è la riga; il pixel `1, 1` si trova nell'angolo in alto a sinistra.

### `ruotare l’orientamento …` (Avanzato) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Ruota l'immagine sulla matrice di luci di 90 gradi, in senso orario o antiorario. Il nuovo orientamento vale per i blocchi Luce eseguiti dopo.

### `impostare l’orientamento su …` (Avanzato) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Imposta l'orientamento dell'immagine sulla matrice di luci. Per impostazione predefinita è `diritto`; il nuovo orientamento vale per i blocchi Luce eseguiti dopo.

- Opzioni: `diritto`, `sinistra`, `destra`, `capovolto`

## Luci del sensore di distanza {#distance-sensor-lights}

### `accendere …` (Principiante) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Controlla le luci attorno agli «occhi» del sensore di distanza sulla porta selezionata. Puoi accendere o spegnere ogni luce, oppure inserire una lista nello spazio per impostare la luminosità di ciascuna luce.

- Hub: MINDSTORMS Robot Inventor.

## LED delle porte BuWizz 3 {#buwizz-3-port-leds}

Questi blocchi impostano il colore del LED accanto a una porta del BuWizz 3.

### `imposta il colore della LED del porto su …` (Principiante) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Imposta il LED della porta su uno dei colori predefiniti.

### `imposta il colore della LED del porto su … … …` (RGB) (Avanzato) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Imposta il colore del LED della porta a partire dai valori di rosso, verde e blu.

- Uso tipico: qualsiasi colore tu voglia, cambi di colore graduali.

### `imposta il colore della LED del porto dalla stringa …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Imposta il colore del LED della porta a partire da un testo.

- Uso tipico: prendere il colore da una variabile o da una lista.
