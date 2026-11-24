---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer {#motors}

Motorblokke starter, stopper og positionerer motorer, der er tilsluttet hubbens porte, og justerer, hvordan de bevæger sig. Kategorien vises, når en hub i profilen har motorporte. I hver blok vælger du hubben og en eller flere porte.

Nogle blokke kræver en motor med indbygget rotationssensor (encoder), for eksempel Technic-vinkelmotorerne, og en hub, der kan styre den. Disse blokke er markeret med »encodermotorer«. De er ikke tilgængelige for SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 og Mould King-hubs. Technic Move Hub har sit eget sæt blokke sidst på denne side.

## Kør motorer {#running-motors}

### `indstil hastighed til …` (Avanceret) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Indstiller den hastighed (fra −100 til 100 %), som **start motor** og **kør … i** bruger på disse porte. Blokken starter ikke selv motoren.

### `start motor …` (Begynder) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starter motoren i den valgte retning med den hastighed, der er indstillet med **indstil hastighed til**.

- Retning: med uret eller mod uret

### `start motor ved … % hastighed` (Begynder) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starter motoren med den angivne hastighed fra −100 til 100 %. En negativ hastighed får den til at dreje den anden vej.

- Typisk brug: kør med et joystick eller en skyder – sæt kontrollens værdi ind i hastighedsfeltet.

### `stop motor` (Begynder) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stopper motoren.

### `kør … i …` (Avanceret) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kører motoren i den valgte retning et antal rotationer, grader eller sekunder.

- Retning: med uret eller mod uret
- Enheder: `rotationer`, `grader`, `sekunder`
- Kun encodermotorer.

### `kør i … ved … % hastighed` (Avanceret) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kører motoren et antal rotationer, grader eller sekunder med den angivne hastighed.

- Enheder: `rotationer`, `grader`, `sekunder`
- Kun encodermotorer.

## Position {#position}

### `gå … til position …` (Avanceret) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Drejer motoren til en absolut position (motorens eget nulmærke).

- Vej: `korteste vej`, `med uret`, `mod uret`
- Kun encodermotorer.

### `gå til relativ position … ved … % hastighed` (Begynder) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Drejer motoren til en position i grader, regnet fra det punkt, der er indstillet med **indstil relativ position**.

- Typisk brug: styring med en servo, hvor joystickets værdi giver vinklen.
- Kun encodermotorer; på BuWizz 3 bruger du blokken nedenfor.

### `gå til relativ position …` (BuWizz 3) (Begynder) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-udgaven af blokken ovenfor uden hastighedsinput.

- Hubs: BuWizz 3 med encodermotorer.

### `indstil relativ position …` (Begynder) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Erklærer motorens aktuelle position for at være den angivne værdi. Relative positioner regnes fra den.

- Kun encodermotorer.

### `kalibrer tandstang … center … grader …` (Begynder) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Finder midten og vandringen for en styretandstang.

- Motoren drejer tandstangen til begge ender, måler, hvor langt den kan komme, og lægger resultatet i de to variabler, du sætter ind i felterne: midterpositionen og området i grader. Tandstangen stopper i midten, men dens relative position dér er lig med centerværdien, ikke 0, så tilføj **indstil relativ position** 0 lige efter denne blok; styr derefter med `område × joystick / 100`.
- Styretøjet skal have faste mekaniske stop i begge ender (enden af tandstangen eller gearingen).
- Kun encodermotorer.

## Motorindstillinger {#motor-settings}

### `indstil motor til … ved stop` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Vælger, hvad motoren gør, når den stopper.

- `bremse`: stopper hurtigt.
- `hold position`: holder aktivt sin position (nyttigt til styring).
- `rulle frit`: løber frit ud.
- Kun encodermotorer.

### `tænd for blokering registrering …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Slår blokeringsregistrering til eller fra. Når den er slået til, giver en blokeret motor op i stedet for at blive ved med at skubbe, så en blok, der venter på motoren, kan blive færdig.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blokken har hub-ikonet).

### `indstil acceleration til …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Vælger, hvor hurtigt motoren kommer op i fart.

- Valg: `standard`, `hurtig`, `balanceret`, `jævn`, `langsom`, `meget langsom`
- Kun encodermotorer.

### `indstil deceleration til …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Vælger, hvor hurtigt motoren sænker farten.

- Valg: `standard`, `hurtig`, `balanceret`, `jævn`, `langsom`, `meget langsom`
- Kun encodermotorer.

## Motorværdier {#motor-values}

### `position` (Begynder) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerer motorens absolutte position.

- Kun encodermotorer.

### `relativ position` (Begynder) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerer motorens relative position i grader.

- Kun encodermotorer.

### `hastighed` (Begynder) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerer motorens aktuelle hastighed.

### `effekt` (Avanceret) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerer motorens aktuelle effekt.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blokken har hub-ikonet).

## Robot Inventor {#robot-inventor-motors}

Disse blokke kommer fra Robot Inventor-appen og virker kun med [hubbene fra MINDSTORMS Robot Inventor og SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). De har hub-ikonet. Brug blokkene i [Bevægelse](/docs/Application/BlockBuilder/Blocks/Movement) til at køre en tohjulet robot.

### `start motor ved … % effekt` (Avanceret) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Starter motorerne på de valgte porte med den angivne effekt fra −100 til 100 % (standard 75 %). I modsætning til **start motor ved … % hastighed** holder motoren ikke en reguleret hastighed: Under belastning sænker den farten som en motor uden encoder.

### `blev motoren afbrudt?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, hvis den sidste kommando til motoren på denne port ikke blev fuldført, fordi en anden motorblok på samme port afbrød den.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub driver sine indbyggede motorer med disse blokke i stedet for portblokkene ovenfor.

### `start motorer ved … % hastighed` (Begynder) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starter drivmotorerne med den angivne hastighed.

### `kraftimpuls` (Begynder) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Sender en kraftimpuls til drivmotorerne.

- Typisk brug: et kort boost før de næste blokke.

### `stop motorer` (Begynder) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stopper drivmotorerne.

### `sæt motorbremse …` (Begynder) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Slår drivmotorernes bremse til eller fra.

- Valg: `off`, `aktiveret`

### `sæt styring til …` (Begynder) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Drejer styringen til den angivne position.

### `kalibrer styring` (Begynder) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerer styringen med hubbens egen algoritme, som automatisk finder styringens udslag.

- Styretøjet skal have faste mekaniske stop (for eksempel enderne af styretandstangen).
