---
id: Motors
title: Motoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motoren {#motors}

Met motorblokken start, stop en positioneer je motoren die op hubpoorten zijn aangesloten, en stel je in hoe ze bewegen. De categorie verschijnt als een hub in het profiel motorpoorten heeft. In elk blok kies je de hub en een of meer poorten.

Sommige blokken hebben een motor met ingebouwde rotatiesensor (encoder) nodig, zoals de Technic-hoekmotoren, en een hub die hem kan aansturen. Deze blokken zijn gemarkeerd met “motoren met encoder”. Ze zijn niet beschikbaar voor SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 en Mould King-hubs. De Technic Move Hub heeft een eigen set blokken aan het eind van deze pagina.

## Motoren laten draaien {#running-motors}

### `stel snelheid in op …` (Gevorderd) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Stelt de snelheid in (van −100 tot 100 %) die **start motor** en **uitvoeren … voor** op deze poorten gebruiken. Dit blok start de motor niet zelf.

### `start motor …` (Beginner) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Start de motor in de gekozen richting met de snelheid die is ingesteld met **stel snelheid in op**.

- Richting: met de klok mee of tegen de klok in

### `start motor op … % snelheid` (Beginner) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Start de motor met de opgegeven snelheid, van −100 tot 100 %. Bij een negatieve snelheid draait hij de andere kant op.

- Gebruikelijke toepassing: rijden met een joystick of een schuifregelaar: zet de waarde van de bediening in het snelheidsvak.

### `stop motor` (Beginner) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stopt de motor.

### `uitvoeren … voor …` (Gevorderd) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Laat de motor in de gekozen richting een aantal rotaties, graden of seconden draaien.

- Richting: met de klok mee of tegen de klok in
- Eenheden: `rotaties`, `graden`, `seconden`
- Alleen motoren met encoder.

### `uitvoeren voor … bij … % snelheid` (Gevorderd) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Laat de motor een aantal rotaties, graden of seconden draaien met de opgegeven snelheid.

- Eenheden: `rotaties`, `graden`, `seconden`
- Alleen motoren met encoder.

## Positie {#position}

### `gaan … naar positie …` (Gevorderd) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Draait de motor naar een absolute positie (het eigen nulpunt van de motor).

- Pad: `kortste pad`, `met de klok mee`, `tegen de klok in`
- Alleen motoren met encoder.

### `ga naar relatieve positie … bij … % snelheid` (Beginner) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Draait de motor naar een positie in graden, geteld vanaf het punt dat is ingesteld met **stel relatieve positie in**.

- Gebruikelijke toepassing: sturen met een servo, waarbij de joystickwaarde de hoek bepaalt.
- Alleen motoren met encoder; gebruik op BuWizz 3 het blok hieronder.

### `ga naar relatieve positie …` (BuWizz 3) (Beginner) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
De BuWizz 3-versie van het blok hierboven, zonder snelheidsinvoer.

- Hubs: BuWizz 3, met motoren met encoder.

### `stel relatieve positie in …` (Beginner) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Legt vast dat de huidige positie van de motor de opgegeven waarde is. Relatieve posities worden vanaf dat punt geteld.

- Alleen motoren met encoder.

### `rek kalibreren … midden … graden …` (Beginner) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Bepaalt het midden en de slag van een stuurheugel.

- De motor draait de heugel naar beide uiteinden, meet hoe ver hij kan gaan en zet het resultaat in de twee variabelen die je in de vakken plaatst: de middenpositie en het bereik in graden. De heugel stopt in het midden, maar de relatieve positie is daar gelijk aan de middenwaarde en niet 0; zet daarom direct na dit blok **stel relatieve positie in** 0 en stuur daarna met `bereik × joystick / 100`.
- De besturing moet aan beide kanten harde mechanische aanslagen hebben (het einde van de heugel of de overbrenging).
- Alleen motoren met encoder.

## Motorinstellingen {#motor-settings}

### `stel motor in op … bij stop` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Bepaalt wat de motor doet als hij stopt.

- `rem`: stopt snel.
- `positie vasthouden`: houdt actief zijn positie vast (handig voor besturing).
- `uitrollen`: draait vrij uit.
- Alleen motoren met encoder.

### `schakel stall detectie in …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Schakelt blokkeerdetectie in of uit. Als die aan staat, geeft een geblokkeerde motor het op in plaats van door te duwen, zodat een blok dat op de motor wacht, kan eindigen.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (het blok draagt het hubpictogram).

### `stel versnelling in op …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Bepaalt hoe snel de motor optrekt.

- Opties: `standaard`, `snel`, `gebalanceerd`, `vloeiend`, `langzaam`, `zeer langzaam`
- Alleen motoren met encoder.

### `stel vertraging in op …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Bepaalt hoe snel de motor afremt.

- Opties: `standaard`, `snel`, `gebalanceerd`, `vloeiend`, `langzaam`, `zeer langzaam`
- Alleen motoren met encoder.

## Motorwaarden {#motor-values}

### `positie` (Beginner) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Geeft de absolute positie van de motor terug.

- Alleen motoren met encoder.

### `relatieve positie` (Beginner) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Geeft de relatieve positie van de motor terug, in graden.

- Alleen motoren met encoder.

### `snelheid` (Beginner) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Geeft de huidige snelheid van de motor terug.

### `vermogen` (Gevorderd) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Geeft het huidige vermogen van de motor terug.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (het blok draagt het hubpictogram).

## Robot Inventor {#robot-inventor-motors}

Deze blokken komen uit de Robot Inventor-app en werken alleen met de [hubs van MINDSTORMS Robot Inventor en SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ze dragen het hubpictogram. Om een robot met twee wielen te besturen, zie de blokken van [Beweging](/docs/Application/BlockBuilder/Blocks/Movement).

### `start motor op … % vermogen` (Gevorderd) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Start de motoren op de gekozen poorten met het opgegeven vermogen, van −100 tot 100 % (standaard 75 %). Anders dan bij **start motor op … % snelheid** houdt de motor geen geregelde snelheid vast: onder belasting gaat hij langzamer, zoals een motor zonder encoder.

### `werd de motor onderbroken?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` als de laatste opdracht van de motor op deze poort niet is afgemaakt, omdat een ander motorblok op dezelfde poort hem heeft onderbroken.

## Technic Move Hub {#technic-move-hub}

De Technic Move Hub stuurt zijn ingebouwde motoren aan met deze blokken in plaats van met de poortblokken hierboven.

### `start motoren bij … % snelheid` (Beginner) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Start de aandrijfmotoren met de opgegeven snelheid.

### `krachtpuls` (Beginner) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Stuurt een vermogenspuls naar de aandrijfmotoren.

- Gebruikelijke toepassing: een korte boost vóór de volgende blokken.

### `stop motoren` (Beginner) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stopt de aandrijfmotoren.

### `zet motorrem in …` (Beginner) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Zet de rem van de aandrijfmotoren aan of uit.

- Opties: `uit`, `ingeschakeld`

### `zet stuurinrichting op …` (Beginner) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Draait de besturing naar de opgegeven positie.

### `kalibreer stuurinrichting` (Beginner) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibreert de besturing met het eigen algoritme van de hub, dat het stuurbereik automatisch bepaalt.

- De besturing moet harde mechanische aanslagen hebben (bijvoorbeeld de uiteinden van de stuurheugel).
