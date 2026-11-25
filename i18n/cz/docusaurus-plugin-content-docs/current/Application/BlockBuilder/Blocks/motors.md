---
id: Motors
title: Motory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motory {#motors}

Bloky motorů spouštějí, zastavují a natáčejí motory připojené k portům hubu a ladí, jak se pohybují. Kategorie se objeví, když má některý hub v profilu porty pro motory. V každém bloku vybíráte hub a jeden nebo více portů.

Některé bloky potřebují motor s vestavěným senzorem otáčení (enkodérem), například úhlové motory Technic, a hub, který ho umí řídit. Tyto bloky jsou označené „motory s enkodérem“. Nejsou k dispozici pro huby SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 a Mould King. Technic Move Hub s těmito bloky také funguje (jeho motory jsou porty `A`, `B` a `C`) a má navíc vlastní bloky profilu auta: viz [Technic Move Hub](#technic-move-hub) na konci této stránky.

## Spouštění motorů {#running-motors}

### `nastavit rychlost na …` (Pokročilý) {#block_hubs_all_motors_port_set_motor_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />

Nastaví rychlost (od −100 do 100 %), kterou na těchto portech používají bloky **spustit motor** a **běžet … po dobu**. Samotný blok motor nespustí.

### `spustit motor …` (Začátečník) {#block_hubs_all_motors_port_start_motor}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />

Spustí motor ve zvoleném směru rychlostí nastavenou blokem **nastavit rychlost na**.

- Směr: ve směru nebo proti směru hodinových ručiček

### `spustit motor na … % rychlost` (Začátečník) {#block_hubs_all_motors_port_start_motor_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />

Spustí motor zadanou rychlostí, od −100 do 100 %. Záporná rychlost ho otočí opačně.

- Typické použití: jízda joystickem nebo posuvníkem: vložte hodnotu ovládacího prvku do slotu rychlosti.

### `zastavit motor` (Začátečník) {#block_hubs_all_motors_port_stop_motor}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />

Zastaví motor.

### `běžet … po dobu …` (Pokročilý) {#block_hubs_all_motors_port_run_for}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />

Nechá motor běžet ve zvoleném směru po zadaný počet otáček, stupňů nebo sekund.

- Směr: ve směru nebo proti směru hodinových ručiček
- Jednotky: `otáčky`, `stupně`, `sekundy`
- Jen motory s enkodérem.

### `běžet po dobu … na … % rychlost` (Pokročilý) {#block_hubs_all_motors_port_run_for_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />

Nechá motor běžet po zadaný počet otáček, stupňů nebo sekund zadanou rychlostí.

- Jednotky: `otáčky`, `stupně`, `sekundy`
- Jen motory s enkodérem.

## Poloha {#position}

### `jít … do polohy …` (Pokročilý) {#block_hubs_all_motors_port_go_to_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />

Natočí motor do absolutní polohy (vůči vlastní nulové značce motoru).

- Cesta: `nejkratší cesta`, `ve směru hodinových ručiček`, `proti směru hodinových ručiček`
- Jen motory s enkodérem.

### `jít na relativní polohu … na … % rychlost` (Začátečník) {#block_hubs_all_motors_port_go_to_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />

Natočí motor do polohy ve stupních, počítané od bodu nastaveného blokem **nastavit relativní polohu**.

- Typické použití: řízení servem, kde hodnota joysticku určuje úhel.
- Jen motory s enkodérem; u BuWizz 3 použijte blok níže.

### `jít na relativní polohu …` (BuWizz 3) (Začátečník) {#block_hubs_buwizz3_motors_port_go_to_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />

Verze předchozího bloku pro BuWizz 3, bez vstupu rychlosti.

- Huby: BuWizz 3, s motory s enkodérem.

### `nastavit relativní polohu …` (Začátečník) {#block_hubs_all_motors_port_set_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />

Prohlásí aktuální polohu motoru za zadanou hodnotu. Relativní polohy se počítají od ní.

- Jen motory s enkodérem.

### `kalibrovat ozubený hřeben … střed … stupně …` (Začátečník) {#block_hubs_all_motors_port_calibrate_steering_rack}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />

Najde střed a rozsah pohybu hřebenu řízení.

- Motor otočí hřebenem do obou krajních poloh, změří, kam až může dojet, a výsledek uloží do dvou proměnných, které vložíte do slotů: polohu středu a rozsah ve stupních (od středu k jednomu konci). Hřeben se zastaví uprostřed a tento bod se stane relativní polohou 0: řiďte pomocí **jít na relativní polohu** `rozsah × joystick / 100`.
- Řízení musí mít na obou koncích pevné mechanické dorazy (konec hřebenu nebo převodů).
- Jen motory s enkodérem.

## Nastavení motoru {#motor-settings}

### `nastavit motor na … při zastavení` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />

Určuje, co motor udělá, když se zastaví.

- `brzda`: zastaví rychle.
- `udržet pozici`: aktivně drží svou polohu (užitečné pro řízení).
- `plachtění`: volně doběhne.
- Jen motory s enkodérem.

### `zapnout detekci zablokování …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />

Zapne nebo vypne detekci zablokování. Když je zapnutá, zablokovaný motor to vzdá, místo aby dál tlačil, takže blok, který na motor čeká, může skončit.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok nese ikonu hubu).

### `nastavit zrychlení na …` (Guru) {#block_hubs_all_motors_port_set_acceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />

Určuje, jak rychle motor zrychluje.

- Volby: `výchozí`, `rychlý`, `vyvážený`, `hladký`, `pomalý`, `velmi pomalý`
- Jen motory s enkodérem.

### `nastavit zpomalení na …` (Guru) {#block_hubs_all_motors_port_set_deceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />

Určuje, jak rychle motor zpomaluje.

- Volby: `výchozí`, `rychlý`, `vyvážený`, `hladký`, `pomalý`, `velmi pomalý`
- Jen motory s enkodérem.

## Hodnoty motoru {#motor-values}

### `poloha` (Začátečník) {#block_hubs_all_motors_port_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />

Vrací absolutní polohu motoru.

- Jen motory s enkodérem.

### `relativní poloha` (Začátečník) {#block_hubs_all_motors_port_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />

Vrací relativní polohu motoru ve stupních.

- Jen motory s enkodérem.

### `rychlost` (Začátečník) {#block_hubs_all_motors_port_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />

Vrací aktuální rychlost motoru.

### `výkon` (Pokročilý) {#block_hubs_all_motors_port_power}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />

Vrací aktuální výkon motoru.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok nese ikonu hubu).

## Robot Inventor {#robot-inventor-motors}

Tyto bloky pocházejí z aplikace Robot Inventor a fungují jen s [huby MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesou ikonu hubu. K řízení dvoukolového robota slouží bloky [Pohyb](/docs/Application/BlockBuilder/Blocks/Movement).

### `spustit motor na … % výkon` (Pokročilý) {#block_ri_motor_start_power}

<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />

Spustí motory na vybraných portech zadaným výkonem, od −100 do 100 % (výchozí 75 %). Na rozdíl od bloku **spustit motor na … % rychlost** motor neudržuje regulovanou rychlost: pod zátěží zpomalí jako motor bez enkodéru.

### `byl motor přerušen?` (Guru) {#block_ri_motor_was_interrupted}

<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />

`true`, pokud poslední příkaz motoru na tomto portu nedoběhl do konce, protože ho přerušil jiný blok motoru na stejném portu.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (v dálkově ovládaných autech LEGO® Technic) lze programovat dvěma způsoby:

- **Bloky pro porty** (výše uvedené bloky motorů). Tři vestavěné motory hubu jsou porty: `A` a `B` jsou hnací motory, `C` je motor řízení. Jsou to motory s enkodérem, takže na nich fungují všechny výše uvedené bloky motorů kromě **zapnout detekci zablokování** a **výkon**. V modelech aut LEGO se `A` při jízdě vpřed otáčí opačně než `B` a řízení na `C` má dorazy: jednou spusťte **kalibrovat ozubený hřeben** na `C` a pak řiďte pomocí **jít na relativní polohu** na `C` (0 je střed). Šest světel hubu jsou porty `1`–`6` [bloků světel](/docs/Application/BlockBuilder/Blocks/Light) a bloky [náklonu, zrychlení a orientace](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) fungují stejně jako na Technic Hubu.
- **Bloky profilu auta** (níže): pohon, řízení, brzda, výkonový impuls, světla a režim napájení, přes konfiguraci auta nahranou do hubu. Viz [Konfigurace Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Jeden způsob na hub
Bloky profilu a bloky pro porty ovládají stejné motory a světla: platí poslední příkaz a blok profilu si motory a světla vezme zpět. Kontrola programu v editoru bloků na to upozorní u každého bloku pro port tohoto hubu: „… je ovládán jak bloky profilu auta, tak bloky portů“.
:::

### `spustit motory na … % rychlost` (Začátečník) {#block_hubs_technicmove_motors_start_motors_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />

Spustí hnací motory zadanou rychlostí.

### `výkonový impuls` (Začátečník) {#block_hubs_technicmove_motors_power_pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />

Pošle hnacím motorům výkonový pulz.

- Typické použití: krátké posílení před dalšími bloky.

### `zastavit motory` (Začátečník) {#block_hubs_technicmove_motors_stop_motors}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />

Zastaví hnací motory.

### `nastavit brzdu motorů …` (Začátečník) {#block_hubs_technicmove_motors_brake}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />

Zapne nebo vypne brzdu hnacích motorů.

- Volby: `vypnuto`, `povoleno`

### `nastavit řízení na …` (Začátečník) {#block_hubs_technicmove_motors_set_steering_rack_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />

Natočí řízení do zadané polohy.

### `kalibrovat řízení` (Začátečník) {#block_hubs_technicmove_motors_calibrate_steering_rack}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />

Zkalibruje řízení vlastním algoritmem hubu, který rozsah řízení najde automaticky.

- Řízení musí mít pevné mechanické dorazy (například konce hřebenu řízení).
