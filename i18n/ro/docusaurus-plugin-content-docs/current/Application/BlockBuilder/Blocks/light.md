---
id: Light
title: Lumină
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Lumină {#light}

Blocurile de lumină controlează lumina de stare a hubului, luminile conectate la porturi și matricea de lumini a huburilor care o au. Categoria apare când un hub din profil are ceva de aprins.

## Luminile hubului și ale porturilor {#hub-and-port-lights}

### `setează culoarea LED la …` (Începător) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Setează culoarea luminii de stare a hubului.

- Huburi: huburile LEGO Powered Up (inclusiv Technic Move Hub), WeDo 2.0 și hubul MINDSTORMS Robot Inventor.
- Utilizare tipică: afișarea stării modelului (gata, în funcțiune, avertizare, eroare).

### `porni la … % luminozitate` (Începător) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Aprinde luminile conectate la portul selectat, cu luminozitatea dată.

- Huburi: toate huburile cu porturi, cu excepția WeDo 2.0.
- Utilizare tipică: faruri, iluminare reglabilă.

### `opriți` (Începător) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Stinge luminile conectate la portul selectat.

- Huburi: aceleași ca pentru **porni la … % luminozitate**.

### `aprinde luminile …` (Începător) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Aprinde sau stinge luminile unui Technic Move Hub.

- Opțiuni: `oprit`, `activat`
- Huburi: Technic Move Hub.

## Matricea de lumini {#light-matrix}

Aceste blocuri lucrează cu matricea de lumini 5×5 încorporată în hubul MINDSTORMS Robot Inventor.

### `pornește …` (Avansat) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Afișează imaginea selectată pe matricea de lumini și trece imediat la blocul următor. Imaginea rămâne până când alt bloc modifică matricea sau programul se oprește.

### `scrie …` (Începător) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Derulează textul pe matricea de lumini, câte o literă.

### `oprește pixelii` (Începător) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Stinge toți pixelii matricei de lumini.

### `setează pixelul … x … y … luminozitate …` (Avansat) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Setează luminozitatea unui singur pixel; restul matricei rămâne neschimbat. `x` este coloana, iar `y` este rândul; pixelul `1, 1` este în colțul din stânga sus.

### `rotește orientarea …` (Avansat) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Rotește imaginea de pe matricea de lumini cu 90 de grade, în sens orar sau antiorar. Noua orientare se aplică blocurilor de lumină care rulează după el.

### `setează orientarea la …` (Avansat) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Setează orientarea imaginii de pe matricea de lumini. Implicit este `vertical`; noua orientare se aplică blocurilor de lumină care rulează după el.

- Opțiuni: `vertical`, `stânga`, `dreapta`, `cu susul în jos`

## Luminile senzorului de distanță {#distance-sensor-lights}

### `aprinde …` (Începător) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Controlează luminile din jurul „ochilor” senzorului de distanță de pe portul selectat. Poți aprinde sau stinge fiecare lumină ori poți pune o listă în câmp pentru a seta luminozitatea fiecărei lumini.

- Huburi: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blocul poartă pictograma hubului).

## Matricea de lumini Robot Inventor {#robot-inventor-light}

Aceste blocuri vin din aplicația Robot Inventor și funcționează doar cu [huburile MINDSTORMS Robot Inventor și SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ele poartă pictograma hubului. Atinge imaginea dintr-un bloc ca s-o desenezi; în blocurile de animație ea arată primul cadru și numărul de cadre.

### `pornește … pentru … secunde` (Începător) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Afișează imaginea pe matricea de lumini pentru timpul dat (implicit 2 secunde), apoi o stinge. Blocul așteaptă până expiră timpul.

### `redă animația … la … cadre pe secundă până la final` (Începător) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Redă o dată cadrele animației, cu viteza dată (implicit 4 cadre pe secundă), și așteaptă până la ultimul cadru.

### `pornește animația … la … cadre pe secundă …` (Începător) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Pornește animația și trece imediat la blocul următor.

- `o dată`: o redă o singură dată.
- `repeta` (implicit): o redă din nou și din nou, până când un alt bloc de lumină schimbă matricea.

### `setează luminozitatea pixelilor la … %` (Avansat) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Setează cât de luminoase sunt imaginile și animațiile blocurilor Robot Inventor de mai sus, de la 0 la 100 %. Până rulează acest bloc, ele au luminozitatea maximă. Fiecare pixel își păstrează luminozitatea relativă față de ceilalți.

### Desenarea imaginilor și a animațiilor {#animation-editor}

Atinge imaginea dintr-un bloc de lumină ca să deschizi editorul:

- **Pixeli**: atinge grila 5×5 sau trage peste ea ca să pictezi cu luminozitatea selectată.
- **Luminozitate**: scala de lângă grilă alege luminozitatea cu care pictezi (10 niveluri, de la stins la maxim).
- **Toate stinse / toate aprinse**: golește imaginea sau o umple cu luminozitatea selectată.
- **Cadre** (doar în blocurile de animație): bara de sub grilă arată cadrul curent, de exemplu **2/3**. Butoanele trec la cadrul **anterior** și la cel **următor**, **adaugă** un cadru gol după cel curent, **duplică** cadrul curent sau îl **șterg** (o animație păstrează cel puțin un cadru).

<Screenshot name="robot-inventor-animation-editor" alt="Editorul de animații: grila 5×5, scala de luminozitate și bara de cadre" width={600} />

## LED-urile porturilor BuWizz 3 {#buwizz-3-port-leds}

Aceste blocuri setează culoarea LED-ului de lângă un port BuWizz 3.

### `setează culoarea LED-ului portului la …` (Începător) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Setează LED-ul portului la una dintre culorile predefinite.

### `setează culoarea LED-ului portului la … … …` (RGB) (Avansat) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Setează culoarea LED-ului portului din valori de roșu, verde și albastru.

- Utilizare tipică: orice culoare vrei, schimbări line de culoare.

### `setează culoarea LED-ului portului din șir …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Setează culoarea LED-ului portului dintr-un text.

- Utilizare tipică: ia culoarea dintr-o variabilă sau dintr-o listă.
