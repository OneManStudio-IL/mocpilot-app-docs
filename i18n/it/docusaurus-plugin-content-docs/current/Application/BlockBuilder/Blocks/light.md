---
id: Light
title: Luce
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: le porte `1`–`6` sono le sei luci dell'hub, numerate sull'hub. Ogni luce si può impostare singolarmente, luminosità 0–100 %.
- Uso tipico: fari, illuminazione regolabile.

### `spegnere` (Principiante) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Spegne le luci collegate alla porta selezionata.

- Hub: gli stessi di **accendere a … % luminosità**.

### `accendere le luci …` (Principiante) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Accende o spegne le luci di un Technic Move Hub tramite il suo profilo auto.

- Opzioni: `spento`, `abilitato`
- Hub: Technic Move Hub. Per impostare ogni luce singolarmente, usa invece **accendere a … % luminosità** con le porte `1`–`6`; non mescolare i due sullo stesso hub (vedi [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hub: [MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), e il Technic Hub (il blocco ha l'icona dell'hub Robot Inventor). Il sensore continua a misurare la distanza mentre le sue luci sono accese.

### `illumina il sensore di colore 1 … 2 … 3 … %` (Avanzato) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Imposta la luminosità delle tre luci attorno alla lente del Technic Color Sensor (il sensore di colore SPIKE) sulla porta selezionata, da 0 a 100 % ciascuna.

- Hub: Technic Hub.
- Mentre le sue luci sono accese, il sensore non misura: i suoi valori di colore e di luce restano quelli di prima. Prima di leggere di nuovo il sensore, usa Sensore Technic: **imposta modalità su …** (`predefinito` o `ambiente`) su quella porta. Il controllo del programma nell'editor dei blocchi avvisa quando un programma accende il sensore e lo legge senza **imposta modalità**.
- Uso tipico: una luce di segnalazione sul modello, o gli occhi di un robot.

## Matrice di luci Robot Inventor {#robot-inventor-light}

Questi blocchi provengono dall'app Robot Inventor e funzionano solo con gli [hub MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Hanno l'icona dell'hub. Tocca l'immagine in un blocco per disegnarla; nei blocchi di animazione mostra il primo fotogramma e il numero di fotogrammi.

### `accendere … per … secondi` (Principiante) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Mostra l'immagine sulla matrice di luci per il tempo indicato (2 secondi come predefinito), poi la spegne. Il blocco attende che il tempo sia trascorso.

### `riproduci animazione … a … fotogrammi al secondo fino alla fine` (Principiante) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Riproduce una volta i fotogrammi dell'animazione alla velocità indicata (4 fotogrammi al secondo come predefinito) e attende fino all'ultimo fotogramma.

### `avvia animazione … a … fotogrammi al secondo …` (Principiante) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Avvia l'animazione e passa subito al blocco successivo.

- `una volta`: la riproduce una sola volta.
- `ripetere` (predefinito): la riproduce di continuo finché un altro blocco di luce non cambia la matrice.

### `imposta luminosità pixel a … %` (Avanzato) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Imposta la luminosità delle immagini e delle animazioni dei blocchi Robot Inventor qui sopra, da 0 a 100 %. Finché questo blocco non viene eseguito, sono alla massima luminosità. Ogni pixel mantiene la propria luminosità rispetto agli altri.

### Disegnare immagini e animazioni {#animation-editor}

Tocca l'immagine in un blocco di luce per aprire l'editor:

- **Pixel**: tocca la griglia 5×5 o trascina il dito sopra di essa per dipingere con la luminosità selezionata.
- **Luminosità**: la scala accanto alla griglia sceglie la luminosità con cui dipingere (10 livelli, da spento a massima).
- **Tutto spento / tutto acceso**: cancella l'immagine o la riempie con la luminosità selezionata.
- **Fotogrammi** (solo nei blocchi di animazione): la barra sotto la griglia mostra il fotogramma corrente, per esempio **2/3**. I pulsanti passano al fotogramma **precedente** e **successivo**, **aggiungono** un fotogramma vuoto dopo quello corrente, **duplicano** il fotogramma corrente o lo **eliminano** (un'animazione conserva almeno un fotogramma).

<Screenshot name="robot-inventor-animation-editor" alt="L'editor di animazioni: la griglia 5×5, la scala della luminosità e la barra dei fotogrammi" width={600} />

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
