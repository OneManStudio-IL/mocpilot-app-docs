---
id: Light
title: Světlo
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Světlo {#light}

Bloky světel ovládají stavové světlo hubu, světla připojená k portům a světelnou matici podporovaných hubů. Kategorie se objeví, když má některý hub v profilu co rozsvítit.

## Světla hubu a portů {#hub-and-port-lights}

### `nastavit barvu LED na …` (Začátečník) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Nastaví barvu stavového světla hubu.

- Huby: huby LEGO Powered Up (včetně Technic Move Hubu), WeDo 2.0 a hub MINDSTORMS Robot Inventor.
- Typické použití: ukázat stav modelu (připraveno, běží, varování, chyba).

### `zapnout na … % jas` (Začátečník) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Rozsvítí světla připojená k vybranému portu na zadaný jas.

- Huby: všechny huby s porty kromě WeDo 2.0.
- Technic Move Hub: porty `1`–`6` jsou šest světel hubu, očíslovaných na hubu. Každé světlo lze nastavit zvlášť, jas 0–100 %.
- Typické použití: světlomety, nastavitelné osvětlení.

### `vypnout` (Začátečník) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Zhasne světla připojená k vybranému portu.

- Huby: stejné jako u bloku **zapnout na … % jas**.

### `zapnout světla …` (Začátečník) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Rozsvítí nebo zhasne světla Technic Move Hubu přes jeho profil auta.

- Volby: `vypnuto`, `povoleno`
- Huby: Technic Move Hub. Chcete-li nastavit každé světlo zvlášť, použijte místo něj **zapnout na … % jas** s porty `1`–`6`; oba způsoby na jednom hubu nemíchejte (viz [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

## Světelná matice {#light-matrix}

Tyto bloky pracují se světelnou maticí 5×5 vestavěnou v hubu MINDSTORMS Robot Inventor.

### `zapnout …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Zobrazí na světelné matici vybraný obrázek a hned pokračuje dalším blokem. Obrázek zůstane, dokud matici nezmění jiný blok nebo se program nezastaví.

### `zapsat …` (Začátečník) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Nechá text projet světelnou maticí, jedno písmeno po druhém.

### `vypnout pixely` (Začátečník) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Zhasne všechny pixely světelné matice.

### `nastavit pixel … x … y … jas …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Nastaví jas jednoho pixelu; zbytek matice zůstane, jak je. `x` je sloupec a `y` je řádek; pixel `1, 1` je v levém horním rohu.

### `otočit orientaci …` (Pokročilý) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Otočí obraz na světelné matici o 90 stupňů, ve směru nebo proti směru hodinových ručiček. Nová orientace platí pro bloky světel, které běží po něm.

### `nastavit orientaci na …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Nastaví orientaci obrazu na světelné matici. Výchozí je `vzpřímeně`; nová orientace platí pro bloky světel, které běží po něm.

- Volby: `vzpřímeně`, `vlevo`, `vpravo`, `vzhůru nohama`

## Světla senzoru vzdálenosti {#distance-sensor-lights}

### `rozsvítit …` (Začátečník) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Ovládá světla kolem „očí“ senzoru vzdálenosti na vybraném portu. Každé světlo můžete rozsvítit nebo zhasnout, nebo do slotu vložit seznam a nastavit jas každého světla.

- Huby: [MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub) a také Technic Hub (blok nese ikonu hubu Robot Inventor). Senzor měří vzdálenost i tehdy, když jeho světla svítí.

### `rozsvítit senzor barvy 1 … 2 … 3 … %` (Pokročilý) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Nastaví jas tří světel kolem čočky senzoru barev Technic (senzoru barev SPIKE) na vybraném portu, každé od 0 do 100 %.

- Huby: Technic Hub.
- Dokud jeho světla svítí, senzor neměří: jeho hodnoty barvy a světla zůstávají takové, jaké byly. Než senzor znovu přečtete, použijte na tomto portu blok Senzor Technic: **nastavit režim na …** (`výchozí` nebo `okolní`). Kontrola programu v editoru bloků upozorní, když program senzor rozsvítí a čte ho bez bloku **nastavit režim na …**.
- Typické použití: signální světlo na modelu nebo oči robota.

## Světelná matice Robot Inventor {#robot-inventor-light}

Tyto bloky pocházejí z aplikace Robot Inventor a fungují jen s [huby MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesou ikonu hubu. Klepnutím na obrázek v bloku ho nakreslíte; v blocích animací ukazuje první snímek a počet snímků.

### `zapnout … po dobu … sekundy` (Začátečník) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Zobrazí obrázek na světelné matici po zadanou dobu (výchozí 2 sekundy) a pak ho zhasne. Blok čeká, dokud čas neuplyne.

### `přehrát animaci … na … snímků za sekundu až do konce` (Začátečník) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Jednou přehraje snímky animace zadanou rychlostí (výchozí 4 snímky za sekundu) a čeká na poslední snímek.

### `spustit animaci … na … snímků za sekundu …` (Začátečník) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Spustí animaci a hned pokračuje dalším blokem.

- `jednou`: přehraje ji jednou.
- `opakovat` (výchozí): přehrává ji stále dokola, dokud matici nezmění jiný blok světla.

### `nastavit jas pixelů na … %` (Pokročilý) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Nastaví, jak jasně svítí obrázky a animace výše uvedených bloků Robot Inventor, od 0 do 100 %. Dokud tento blok neproběhne, svítí plným jasem. Každý pixel si zachovává svůj jas vůči ostatním.

### Kreslení obrázků a animací {#animation-editor}

Klepnutím na obrázek v bloku světla otevřete editor:

- **Pixely**: klepáním nebo tažením po mřížce 5×5 malujete zvoleným jasem.
- **Jas**: stupnice vedle mřížky vybírá jas, kterým malujete (10 úrovní, od zhasnuto po plný jas).
- **Vše zhasnout / vše rozsvítit**: vymaže obrázek nebo ho vyplní zvoleným jasem.
- **Snímky** (jen v blocích animací): lišta pod mřížkou ukazuje aktuální snímek, například **2/3**. Tlačítka přejdou na **předchozí** a **další** snímek, **přidají** prázdný snímek za aktuální, aktuální snímek **zduplikují** nebo ho **smažou** (animace má vždy alespoň jeden snímek).

<Screenshot name="robot-inventor-animation-editor" alt="Editor animací: mřížka 5×5, stupnice jasu a lišta snímků" width={600} />

## LED portů BuWizz 3 {#buwizz-3-port-leds}

Tyto bloky nastavují barvu LED vedle portu BuWizz 3.

### `nastavit barvu LED portu na …` (Začátečník) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Nastaví LED portu na jednu z předdefinovaných barev.

### `nastavit barvu LED portu na … … …` (RGB) (Pokročilý) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Nastaví barvu LED portu z hodnot červené, zelené a modré.

- Typické použití: libovolná barva, plynulé změny barev.

### `nastavit barvu LED portu ze řetězce …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Nastaví barvu LED portu z textu.

- Typické použití: převzít barvu z proměnné nebo seznamu.
