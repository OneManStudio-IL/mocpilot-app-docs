---
id: Light
title: Lys
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Lys {#light}

Lysblokker styrer statuslyset på huben, lys som er koblet til porter, og lysmatrisen på hubber som har en. Kategorien vises når en hub i profilen har noe som kan lyse.

## Lys på hub og porter {#hub-and-port-lights}

### `sett LED-farge til …` (Nybegynner) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Angir fargen på statuslyset til huben.

- Hubber: LEGO Powered Up-hubber (også Technic Move Hub), WeDo 2.0 og MINDSTORMS Robot Inventor-huben.
- Typisk bruk: vis tilstanden til modellen (klar, kjører, advarsel, feil).

### `skru på ved … % lysstyrke` (Nybegynner) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Slår på lysene som er koblet til den valgte porten, med den angitte lysstyrken.

- Hubber: alle hubber med porter, unntatt WeDo 2.0.
- Typisk bruk: frontlys, justerbar belysning.

### `skru av` (Nybegynner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Slår av lysene som er koblet til den valgte porten.

- Hubber: de samme som for **skru på ved … % lysstyrke**.

### `slå på lysene …` (Nybegynner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Slår lysene på en Technic Move Hub av eller på.

- Valg: `av`, `på`
- Hubber: Technic Move Hub.

## Lysmatrise {#light-matrix}

Disse blokkene arbeider med lysmatrisen på 5×5 som er innebygd i MINDSTORMS Robot Inventor-huben.

### `skru på …` (Avansert) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Viser det valgte bildet på lysmatrisen og går straks videre til neste blokk. Bildet blir stående til en annen blokk endrer matrisen eller programmet stopper.

### `skriv …` (Nybegynner) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Ruller teksten over lysmatrisen, én bokstav om gangen.

### `skru av piksler` (Nybegynner) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Slår av alle pikslene i lysmatrisen.

### `sett piksel … x … y … lysstyrke …` (Avansert) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Angir lysstyrken til én piksel; resten av matrisen forblir som den er. `x` er kolonnen og `y` er raden; piksel `1, 1` er i øvre venstre hjørne.

### `roter orientering …` (Avansert) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Roterer bildet på lysmatrisen 90 grader med eller mot klokken. Den nye orienteringen gjelder for Lys-blokkene som kjører etterpå.

### `sett orientering til …` (Avansert) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Angir orienteringen til bildet på lysmatrisen. Standard er `oppreist`; den nye orienteringen gjelder for Lys-blokkene som kjører etterpå.

- Valg: `oppreist`, `venstre`, `høyre`, `opp ned`

## Lys på avstandssensoren {#distance-sensor-lights}

### `tenn …` (Nybegynner) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Styrer lysene rundt «øynene» på avstandssensoren på den valgte porten. Du kan slå hvert lys av eller på, eller legge en liste i feltet for å angi lysstyrken til hvert lys.

- Hubber: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blokken har hubikonet).

## Robot Inventor-lysmatrise {#robot-inventor-light}

Disse blokkene kommer fra Robot Inventor-appen og fungerer bare med [MINDSTORMS Robot Inventor- og SPIKE Prime-hubbene](/docs/Application/Hubs/RobotInventorHub). De har hubikonet. Trykk på bildet i en blokk for å tegne det; i animasjonsblokkene viser det første bilde og antall bilder.

### `skru på … for … sekunder` (Nybegynner) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Viser bildet på lysmatrisen i angitt tid (2 sekunder som standard) og slår det deretter av. Blokken venter til tiden er ute.

### `spill animasjon … på … bilder per sekund til ferdig` (Nybegynner) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Spiller bildene i animasjonen én gang med angitt hastighet (4 bilder per sekund som standard) og venter til det siste bildet.

### `start animasjon … på … bilder per sekund …` (Nybegynner) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Starter animasjonen og går videre til neste blokk med en gang.

- `én gang`: spiller den én gang.
- `gjenta` (standard): spiller den om og om igjen til en annen lysblokk endrer matrisen.

### `sett pikselstyrke til … %` (Avansert) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Angir hvor lyse bildene og animasjonene i Robot Inventor-blokkene over er, fra 0 til 100 %. Til denne blokken kjører, har de full lysstyrke. Hver piksel beholder sin egen lysstyrke i forhold til de andre.

### Tegne bilder og animasjoner {#animation-editor}

Trykk på bildet i en lysblokk for å åpne redigeringsvinduet:

- **Piksler**: trykk på eller dra over rutenettet på 5×5 for å male med valgt lysstyrke.
- **Lysstyrke**: skalaen ved siden av rutenettet velger lysstyrken du maler med (10 nivåer, fra av til full).
- **Alle av / alle på**: tøm bildet eller fyll det med valgt lysstyrke.
- **Bilder** (bare animasjonsblokker): linjen under rutenettet viser gjeldende bilde, for eksempel **2/3**. Knappene går til **forrige** og **neste** bilde, **legger til** et tomt bilde etter det gjeldende, **dupliserer** gjeldende bilde eller **sletter** det (en animasjon beholder minst ett bilde).

<Screenshot name="robot-inventor-animation-editor" alt="Animasjonsredigeringen: rutenettet på 5×5, lysstyrkeskalaen og bildelinjen" width={600} />

## Port-LED-er på BuWizz 3 {#buwizz-3-port-leds}

Disse blokkene angir fargen på LED-en ved siden av en port på BuWizz 3.

### `sett port LED-farge til …` (Nybegynner) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Setter port-LED-en til en av de forhåndsdefinerte fargene.

### `sett port LED-farge til … … …` (RGB) (Avansert) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Angir fargen på port-LED-en ut fra verdier for rødt, grønt og blått.

- Typisk bruk: hvilken som helst farge, myke fargeoverganger.

### `sett port LED-farge fra streng …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Angir fargen på port-LED-en fra tekst.

- Typisk bruk: hent fargen fra en variabel eller en liste.
