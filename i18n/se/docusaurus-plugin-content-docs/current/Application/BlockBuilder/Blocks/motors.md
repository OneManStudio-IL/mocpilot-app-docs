---
id: Motors
title: Motorer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motorer {#motors}

Motorblock startar, stoppar och positionerar motorer som är anslutna till hubbens portar, och finjusterar hur de rör sig. Kategorin visas när en hubb i profilen har motorportar. I varje block väljer du hubb och en eller flera portar.

Vissa block kräver en motor med inbyggd rotationssensor (pulsgivare), till exempel Technics vinkelmotorer, och en hubb som kan styra den. Dessa block är markerade med ”motorer med pulsgivare”. De är inte tillgängliga för SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 och Mould King-hubbar. Technic Move Hub fungerar också med de här blocken (dess motorer är portarna `A`, `B` och `C`) och har dessutom egna bilprofilblock: se [Technic Move Hub](#technic-move-hub) i slutet av sidan.

## Köra motorer {#running-motors}

### `ställ in hastighet till …` (Avancerad) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Ställer in den hastighet (från −100 till 100 %) som **starta motor** och **köra … för** använder på dessa portar. Blocket startar inte motorn av sig självt.

### `starta motor …` (Nybörjare) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Startar motorn i vald riktning med den hastighet som ställts in med **ställ in hastighet till**.

- Riktning: medurs eller moturs

### `starta motor vid … % hastighet` (Nybörjare) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Startar motorn med angiven hastighet, från −100 till 100 %. En negativ hastighet får den att snurra åt andra hållet.

- Typisk användning: köra med en joystick eller ett skjutreglage: lägg kontrollens värde i hastighetsfacket.

### `stoppa motor` (Nybörjare) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stoppar motorn.

### `köra … för …` (Avancerad) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Kör motorn i vald riktning ett antal varv, grader eller sekunder.

- Riktning: medurs eller moturs
- Enheter: `rotationer`, `grader`, `sekunder`
- Endast motorer med pulsgivare.

### `köra i … vid … % hastighet` (Avancerad) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Kör motorn ett antal varv, grader eller sekunder med angiven hastighet.

- Enheter: `rotationer`, `grader`, `sekunder`
- Endast motorer med pulsgivare.

## Position {#position}

### `gå … till position …` (Avancerad) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Vrider motorn till en absolut position (motorns eget nollmärke).

- Väg: `kortaste väg`, `medurs`, `moturs`
- Endast motorer med pulsgivare.

### `gå till relativ position … vid … % hastighet` (Nybörjare) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Vrider motorn till en position, i grader, räknat från den punkt som ställts in med **ställ in relativ position**.

- Typisk användning: styrning med servo, där joystickens värde ger vinkeln.
- Endast motorer med pulsgivare; på BuWizz 3 använder du blocket nedan.

### `gå till relativ position …` (BuWizz 3) (Nybörjare) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
BuWizz 3-versionen av blocket ovan, utan hastighetsindata.

- Hubbar: BuWizz 3, med motorer med pulsgivare.

### `ställ in relativ position …` (Nybörjare) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Anger att motorns aktuella position har det givna värdet. Relativa positioner räknas från den.

- Endast motorer med pulsgivare.

### `kalibrera kuggstång … centrum … grader …` (Nybörjare) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Hittar mittläget och slaglängden för en styrkuggstång.

- Motorn vrider kuggstången till båda ändarna, mäter hur långt den kan gå och lägger resultatet i de två variabler som du placerar i facken: mittpositionen och omfånget i grader (från mitten till ena änden). Kuggstången stannar i mitten, och den punkten blir relativ position 0: styr med **gå till relativ position** `omfång × joystick / 100`.
- Styrningen måste ha fasta mekaniska stopp i båda ändarna (kuggstångens ände eller utväxlingen).
- Endast motorer med pulsgivare.

## Motorinställningar {#motor-settings}

### `ställ in motor på … vid stopp` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Väljer vad motorn gör när den stannar.

- `broms`: stannar snabbt.
- `håll position`: håller aktivt sin position (praktiskt för styrning).
- `rulla fritt`: snurrar ut fritt.
- Endast motorer med pulsgivare.

### `aktivera stall detektering …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Slår på eller av stoppdetektering. När den är på ger en motor som blockeras upp i stället för att fortsätta trycka, så att ett block som väntar på motorn kan bli klart.

- Hubbar: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blocket har hubbikonen).

### `ställ in acceleration till …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Väljer hur snabbt motorn kommer upp i fart.

- Alternativ: `standard`, `snabb`, `balanserad`, `mjuk`, `långsam`, `mycket långsam`
- Endast motorer med pulsgivare.

### `ställ in retardation till …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Väljer hur snabbt motorn saktar in.

- Alternativ: `standard`, `snabb`, `balanserad`, `mjuk`, `långsam`, `mycket långsam`
- Endast motorer med pulsgivare.

## Motorvärden {#motor-values}

### `position` (Nybörjare) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnerar motorns absoluta position.

- Endast motorer med pulsgivare.

### `relativ position` (Nybörjare) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnerar motorns relativa position, i grader.

- Endast motorer med pulsgivare.

### `hastighet` (Nybörjare) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnerar motorns aktuella hastighet.

### `kraft` (Avancerad) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnerar motorns aktuella effekt.

- Hubbar: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blocket har hubbikonen).

## Robot Inventor {#robot-inventor-motors}

De här blocken kommer från Robot Inventor-appen och fungerar bara med [MINDSTORMS Robot Inventor- och SPIKE Prime-hubbarna](/docs/Application/Hubs/RobotInventorHub). De har hubbikonen. För att köra en tvåhjulig robot, se blocken under [Rörelse](/docs/Application/BlockBuilder/Blocks/Movement).

### `starta motor vid … % kraft` (Avancerad) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Startar motorerna på de valda portarna med angiven kraft, från −100 till 100 % (standard 75 %). Till skillnad från **starta motor vid … % hastighet** håller motorn ingen reglerad hastighet: under belastning saktar den in, som en motor utan pulsgivare.

### `avbröts motorn?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` om det senaste kommandot till motorn på den här porten inte blev klart eftersom ett annat motorblock på samma port avbröt det.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (i LEGO® Technics radiostyrda bilar) kan programmeras på två sätt:

- **Portblock** (motorblocken ovan). Hubbens tre inbyggda motorer är portar: `A` och `B` är drivmotorerna, `C` är styrmotorn. De är motorer med pulsgivare, så alla motorblock ovan fungerar på dem utom **aktivera stall detektering** och **kraft**. I LEGO-bilmodellerna snurrar `A` åt andra hållet än `B` för att köra framåt, och styrningen på `C` har ändlägen: kör **kalibrera kuggstång** på `C` en gång och styr sedan med **gå till relativ position** på `C` (0 är mitten). Hubbens sex lampor är portarna `1`–`6` i [ljusblocken](/docs/Application/BlockBuilder/Blocks/Light), och dess block för [lutning, acceleration och orientering](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) fungerar som på Technic Hub.
- **Bilprofilblock** (nedan): körning, styrning, broms, kraftpuls, lampor och effektläge, via bilkonfigurationen som har lästs in i hubben. Se [Konfigurationer för Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Använd ett sätt per hubb
Profilblocken och portblocken styr samma motorer och lampor: det senaste kommandot vinner, och ett profilblock tar tillbaka motorerna och lamporna. Programkontrollen i blockredigeraren varnar för det på varje portblock för den hubben: ”… styrs både av blocken i sin bilprofil och av portblock”.
:::

### `starta motorer vid … % hastighet` (Nybörjare) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Startar drivmotorerna med angiven hastighet.

### `kraftpuls` (Nybörjare) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Skickar en effektpuls till drivmotorerna.

- Typisk användning: en kort boost före nästa block.

### `stopp motorer` (Nybörjare) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stoppar drivmotorerna.

### `ställ in motorbromsen …` (Nybörjare) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Slår på eller av drivmotorernas broms.

- Alternativ: `av`, `aktiverad`

### `ställ in styrinriktning till …` (Nybörjare) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Vrider styrningen till angiven position.

### `kalibrera styrinriktning` (Nybörjare) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibrerar styrningen med hubbens egen algoritm, som hittar styrningens omfång automatiskt.

- Styrningen måste ha fasta mekaniska stopp (till exempel styrkuggstångens ändar).
