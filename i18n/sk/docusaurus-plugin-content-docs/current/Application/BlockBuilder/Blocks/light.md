---
id: Light
title: Svetlo
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Svetlo {#light}

Bloky svetla ovládajú stavové svetlo hubu, svetlá pripojené k portom a svetelnú maticu podporovaných hubov. Kategória sa zobrazí, keď má niektorý hub v profile čo rozsvietiť.

## Svetlá hubu a portov {#hub-and-port-lights}

### `nastaviť farbu LED na …` (Začiatočník) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Nastaví farbu stavového svetla hubu.

- Huby: huby LEGO Powered Up (vrátane Technic Move Hubu), WeDo 2.0 a hub MINDSTORMS Robot Inventor.
- Typické použitie: zobraziť stav modelu (pripravený, beží, upozornenie, chyba).

### `zapnúť na … % jas` (Začiatočník) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Rozsvieti svetlá pripojené k vybranému portu so zadaným jasom.

- Huby: všetky huby s portami okrem WeDo 2.0.
- Technic Move Hub: porty `1`–`6` sú šesť svetiel hubu, očíslovaných na hube. Každé svetlo sa dá nastaviť samostatne, jas 0–100 %.
- Typické použitie: svetlomety, nastaviteľné osvetlenie.

### `vypnúť` (Začiatočník) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Zhasne svetlá pripojené k vybranému portu.

- Huby: rovnaké ako pri bloku **zapnúť na … % jas**.

### `zapnúť svetlá …` (Začiatočník) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Zapne alebo vypne svetlá Technic Move Hubu cez jeho profil auta.

- Možnosti: `vyp.`, `zap.`
- Huby: Technic Move Hub. Ak chcete nastaviť každé svetlo samostatne, použite namiesto neho **zapnúť na … % jas** s portami `1`–`6`; oba spôsoby na jednom hube nemiešajte (pozrite si [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

## Svetelná matica {#light-matrix}

Tieto bloky pracujú so svetelnou maticou 5×5 zabudovanou v hube MINDSTORMS Robot Inventor.

### `zapnúť …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Zobrazí na svetelnej matici vybraný obrázok a hneď prejde na ďalší blok. Obrázok zostane, kým maticu nezmení iný blok alebo kým sa program nezastaví.

### `napísať …` (Začiatočník) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Posúva text po svetelnej matici, po jednom písmene.

### `vypnúť pixely` (Začiatočník) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Zhasne všetky pixely svetelnej matice.

### `nastaviť pixel … x … y … jas …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Nastaví jas jedného pixelu; zvyšok matice zostane nezmenený. `x` je stĺpec a `y` je riadok; pixel `1, 1` je v ľavom hornom rohu.

### `otočiť orientáciu …` (Pokročilý) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Otočí obraz na svetelnej matici o 90 stupňov v smere alebo proti smeru hodinových ručičiek. Nová orientácia platí pre bloky svetla, ktoré sa vykonajú po ňom.

### `nastaviť orientáciu na …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Nastaví orientáciu obrazu na svetelnej matici. Predvolene je `vzpriamene`; nová orientácia platí pre bloky svetla, ktoré sa vykonajú po ňom.

- Možnosti: `vzpriamene`, `vľavo`, `vpravo`, `hore nohami`

## Svetlá senzora vzdialenosti {#distance-sensor-lights}

### `rozsvietiť …` (Začiatočník) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Ovláda svetlá okolo „očí“ senzora vzdialenosti na vybranom porte. Každé svetlo môžete zapnúť alebo vypnúť, prípadne do políčka vložiť zoznam a nastaviť jas každého svetla.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok nesie ikonu hubu).

## Svetelná matica Robot Inventor {#robot-inventor-light}

Tieto bloky pochádzajú z aplikácie Robot Inventor a fungujú iba s [hubmi MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesú ikonu hubu. Ťuknutím na obrázok v bloku ho nakreslíte; v blokoch animácií ukazuje prvú snímku a počet snímok.

### `zapnúť … na … sekundy` (Začiatočník) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Zobrazí obrázok na svetelnej matici na zadaný čas (predvolene 2 sekundy) a potom ho zhasne. Blok čaká, kým čas neuplynie.

### `prehrať animáciu … na … snímok za sekundu až do konca` (Začiatočník) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Raz prehrá snímky animácie zadanou rýchlosťou (predvolene 4 snímky za sekundu) a čaká na poslednú snímku.

### `spustiť animáciu … na … snímok za sekundu …` (Začiatočník) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Spustí animáciu a hneď pokračuje ďalším blokom.

- `raz`: prehrá ju jedenkrát.
- `zopakovať` (predvolené): prehráva ju stále dookola, kým maticu nezmení iný blok svetla.

### `nastaviť jas pixelov na … %` (Pokročilý) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Nastaví, ako jasne svietia obrázky a animácie vyššie uvedených blokov Robot Inventor, od 0 do 100 %. Kým tento blok neprebehne, svietia plným jasom. Každý pixel si zachováva svoj jas voči ostatným.

### Kreslenie obrázkov a animácií {#animation-editor}

Ťuknutím na obrázok v bloku svetla otvoríte editor:

- **Pixely**: ťukaním alebo ťahaním po mriežke 5×5 maľujete zvoleným jasom.
- **Jas**: stupnica vedľa mriežky vyberá jas, ktorým maľujete (10 úrovní, od zhasnutého po plný jas).
- **Všetko zhasnúť / všetko rozsvietiť**: vymaže obrázok alebo ho vyplní zvoleným jasom.
- **Snímky** (iba v blokoch animácií): lišta pod mriežkou ukazuje aktuálnu snímku, napríklad **2/3**. Tlačidlá prejdú na **predchádzajúcu** a **ďalšiu** snímku, **pridajú** prázdnu snímku za aktuálnu, aktuálnu snímku **duplikujú** alebo ju **odstránia** (animácia má vždy aspoň jednu snímku).

<Screenshot name="robot-inventor-animation-editor" alt="Editor animácií: mriežka 5×5, stupnica jasu a lišta snímok" width={600} />

## LED portov BuWizz 3 {#buwizz-3-port-leds}

Tieto bloky nastavujú farbu LED vedľa portu hubu BuWizz 3.

### `nastaviť farbu LED portu na …` (Začiatočník) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Nastaví LED portu na jednu z preddefinovaných farieb.

### `nastaviť farbu LED portu na … … …` (RGB) (Pokročilý) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Nastaví farbu LED portu z hodnôt červenej, zelenej a modrej.

- Typické použitie: ľubovoľná farba, plynulé zmeny farieb.

### `nastaviť farbu LED portu zo stringu …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Nastaví farbu LED portu z textu.

- Typické použitie: vziať farbu z premennej alebo zoznamu.
