---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer {#motors}

Motorblokker starter, stopper og posisjonerer motorer som er koblet til portene på huben, og finjusterer hvordan de beveger seg. Kategorien vises når en hub i profilen har motorporter. I hver blokk velger du huben og én eller flere porter.

Noen blokker krever en motor med innebygd rotasjonssensor (enkoder), for eksempel Technic-vinkelmotorene, og en hub som kan styre den. Disse blokkene er merket «motorer med enkoder». De er ikke tilgjengelige for hubbene SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 og Mould King. Technic Move Hub har sitt eget sett med blokker nederst på denne siden.

## Kjøre motorer {#running-motors}

### `sett hastighet til …` (Avansert) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Angir hastigheten (fra −100 til 100 %) som **start motor** og **kjør … i** bruker på disse portene. Blokken starter ikke motoren av seg selv.

### `start motor …` (Nybegynner) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starter motoren i den valgte retningen med hastigheten som er angitt med **sett hastighet til**.

- Retning: med klokken eller mot klokken

### `start motor på … % hastighet` (Nybegynner) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starter motoren med den angitte hastigheten, fra −100 til 100 %. En negativ hastighet får den til å gå den andre veien.

- Typisk bruk: kjør med en joystick eller skyveknapp: legg kontrollens verdi i hastighetsfeltet.

### `stopp motor` (Nybegynner) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stopper motoren.

### `kjør … i …` (Avansert) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kjører motoren i den valgte retningen et antall rotasjoner, grader eller sekunder.

- Retning: med klokken eller mot klokken
- Enheter: `rotasjoner`, `grader`, `sekunder`
- Bare motorer med enkoder.

### `kjør i … på … % hastighet` (Avansert) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kjører motoren et antall rotasjoner, grader eller sekunder med den angitte hastigheten.

- Enheter: `rotasjoner`, `grader`, `sekunder`
- Bare motorer med enkoder.

## Posisjon {#position}

### `gå … til posisjon …` (Avansert) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Dreier motoren til en absolutt posisjon (motorens eget nullmerke).

- Vei: `korteste vei`, `med klokken`, `mot klokken`
- Bare motorer med enkoder.

### `gå til relativ posisjon … på … % hastighet` (Nybegynner) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Dreier motoren til en posisjon, i grader, regnet fra punktet som er angitt med **sett relativ posisjon**.

- Typisk bruk: styring med en servo, der joystickverdien gir vinkelen.
- Bare motorer med enkoder; på BuWizz 3 bruker du blokken nedenfor.

### `gå til relativ posisjon …` (BuWizz 3) (Nybegynner) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-versjonen av blokken ovenfor, uten hastighetsinngang.

- Hubber: BuWizz 3, med motorer med enkoder.

### `sett relativ posisjon …` (Nybegynner) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Erklærer at motorens nåværende posisjon har den angitte verdien. Relative posisjoner regnes fra den.

- Bare motorer med enkoder.

### `kalibrer tannstang … senter … grader …` (Nybegynner) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Finner midtpunktet og vandringen til en styretannstang.

- Motoren dreier tannstangen til begge ender, måler hvor langt den kan gå, og legger resultatet i de to variablene du setter i feltene: midtposisjonen og området i grader. Tannstangen stopper i midten, men den relative posisjonen der er lik midtverdien, ikke 0, så legg til **sett relativ posisjon** 0 rett etter denne blokken; styr deretter med `område × joystick / 100`.
- Styringen må ha faste mekaniske stopp i begge ender (enden av tannstangen eller girene).
- Bare motorer med enkoder.

## Motorinnstillinger {#motor-settings}

### `sett motor til … ved stopp` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Velger hva motoren gjør når den stopper.

- `brems`: stopper raskt.
- `hold posisjon`: holder posisjonen aktivt (nyttig for styring).
- `frirulling`: snurrer fritt til den stopper.
- Bare motorer med enkoder.

### `slå på stall deteksjon …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Slår stall-deteksjon på eller av. Når den er på, gir en motor som blir blokkert opp i stedet for å presse videre, slik at en blokk som venter på motoren, kan bli ferdig.

- Hubber: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blokken har hubikonet).

### `sett akselerasjon til …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Velger hvor raskt motoren øker farten.

- Valg: `standard`, `rask`, `balansert`, `jevn`, `sakte`, `svært sakte`
- Bare motorer med enkoder.

### `sett retardasjon til …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Velger hvor raskt motoren senker farten.

- Valg: `standard`, `rask`, `balansert`, `jevn`, `sakte`, `svært sakte`
- Bare motorer med enkoder.

## Motorverdier {#motor-values}

### `posisjon` (Nybegynner) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerer motorens absolutte posisjon.

- Bare motorer med enkoder.

### `relativ posisjon` (Nybegynner) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerer motorens relative posisjon, i grader.

- Bare motorer med enkoder.

### `hastighet` (Nybegynner) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerer motorens gjeldende hastighet.

### `kraft` (Avansert) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerer motorens gjeldende effekt.

- Hubber: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blokken har hubikonet).

## Robot Inventor {#robot-inventor-motors}

Disse blokkene kommer fra Robot Inventor-appen og fungerer bare med [MINDSTORMS Robot Inventor- og SPIKE Prime-hubbene](/docs/Application/Hubs/RobotInventorHub). De har hubikonet. For å kjøre en tohjuls robot, se blokkene under [Bevegelse](/docs/Application/BlockBuilder/Blocks/Movement).

### `start motor på … % kraft` (Avansert) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Starter motorene på de valgte portene med angitt kraft, fra −100 til 100 % (standard 75 %). I motsetning til **start motor på … % hastighet** holder ikke motoren en regulert hastighet: under belastning går den saktere, som en motor uten enkoder.

### `ble motoren avbrutt?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` hvis den siste kommandoen til motoren på denne porten ikke ble fullført fordi en annen motorblokk på samme port avbrøt den.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub driver de innebygde motorene sine med disse blokkene i stedet for portblokkene ovenfor.

### `start motorer på … % hastighet` (Nybegynner) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starter drivmotorene med den angitte hastigheten.

### `kraftpuls` (Nybegynner) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Sender en kraftpuls til drivmotorene.

- Typisk bruk: et kort kraftløft før de neste blokkene.

### `stopp motorer` (Nybegynner) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stopper drivmotorene.

### `sett motorbremsen …` (Nybegynner) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Slår bremsen på drivmotorene på eller av.

- Valg: `av`, `på`

### `sett styring til …` (Nybegynner) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Dreier styringen til den angitte posisjonen.

### `kalibrer styring` (Nybegynner) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerer styringen med hubens egen algoritme, som finner styreområdet automatisk.

- Styringen må ha faste mekaniske stopp (for eksempel endene av styretannstangen).
