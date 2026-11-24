---
id: Movement
title: Rörelse
description: "Rörelseblock kör en robot med två motorer på MINDSTORMS Robot Inventor- eller SPIKE-hubben: köra, styra, bandvagnsstyrning, hastighet, acceleration och stopp."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Rörelse

Rörelseblock kör en robot med två hjul, som vart och ett drivs av en egen motor, som en enda enhet: ”kör framåt 10 cm”, ”snurra medurs 1 rotation”, ”styr 30 åt höger”. Det är samma rörelseblock som i appen LEGO® MINDSTORMS® Robot Inventor. Kategorin visas först i paletten när profilen har en [Robot Inventor- eller SPIKE Prime-hubb](/docs/Application/Hubs/RobotInventorHub). Alla dess block har den svartvita hubbikonen.

## Så fungerar rörelse {#how-movement-works}

- **Rörelsemotorer.** Som standard sitter det vänstra hjulet på port **A** och det högra på port **B**. Använd [ställ in rörelsemotorer på](#block_ri_move_set_pair) för att välja andra portar. På en robot är de två motorerna vända mot varandra, så MOCPilot vrider den högra åt andra hållet: en positiv hastighet kör alltid roboten framåt.
- **Rörelsehastighet.** Block utan egen hastighet använder rörelsehastigheten: **50 %** tills [ställ in rörelsehastighet till](#block_ri_move_set_speed) ändrar den.
- **Styrning** är ett tal från −100 till 100. **0** kör rakt fram. Positiva värden svänger åt höger, negativa åt vänster: det inre hjulet saktar in, mer ju närmare ±100 styrningen kommer (vid 50 går det med halv hastighet). Vid **100** eller **−100** snurrar hjulen åt motsatta håll och roboten snurrar på stället.
- **Enheter.** Sträckor kan anges i `cm`, `tum`, `rotationer` eller `grader` av motorerna, och många block tar också `sekunder`. Centimeter och tum använder sträckan per motorvarv: **17,5 cm** som standard (Robot Inventor-hjulet), som ändras med [ställ in 1 motorvarv till](#block_ri_move_set_distance). En negativ sträcka kör åt andra hållet.
- **Väntan.** Block med en sträcka (`kör … i …`) väntar tills roboten har kört så långt. Block som börjar med **börja köra** går vidare direkt: roboten fortsätter köra tills **sluta köra** eller ett annat rörelseblock.

## Rörelseinställningar {#movement-settings}

### `ställ in rörelsemotorer på … …` (Nybörjare) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Väljer portarna för motorn till det vänstra och det högra hjulet. Standard: **A** och **B**. De två portarna måste vara olika.

### `ställ in rörelsehastighet till … %` (Nybörjare) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Ställer in hastigheten, från −100 till 100 %, för de rörelseblock som inte har någon egen hastighet. Standard: 50 %. Blocket startar inte motorerna.

### `ställ in 1 motorvarv till … cm / tum körda` (Avancerad) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Talar om för MOCPilot hur långt roboten kör på ett motorvarv, så att sträckor i centimeter och tum blir rätt. Standard: 17,5 cm. Mät din robot: låt den **köra framåt 1 rotation** och mät sträckan. Värdet 0 ignoreras.

### `ställ in rörelseacceleration till …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Hur snabbt rörelsemotorerna ökar och minskar farten.

- Alternativ: `standard`, `snabb` (0,1 s), `balanserad` (0,35 s), `mjuk` (0,8 s), `långsam` (1,2 s), `mycket långsam` (2 s): tiden från stillastående till full hastighet.

### `ställ in rörelsemotorer på … vid stopp` (Avancerad) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Vad motorerna gör när roboten stannar.

- `rulla fritt`: motorerna går fritt och roboten rullar tills den stannar.
- `broms` (standard): motorerna bromsar.
- `håll position`: motorerna håller aktivt sin position, även om du knuffar på roboten.

## Köra {#moving}

### `kör … i …` (Nybörjare) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Kör roboten med rörelsehastigheten och väntar tills den är klar.

- Riktning: `framåt`, `bakåt`, `medurs`, `moturs` (de två sista snurrar roboten på stället).
- Enheter: `cm`, `tum`, `rotationer`, `grader`, `sekunder`. Standard: 10 cm.

### `kör … i …` (med styrning) (Nybörjare) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Kör roboten med angiven styrning (−100 till 100) och rörelsehastigheten och väntar tills den är klar. Med styrning 30 kör roboten i en kurva åt höger.

- Enheter: `cm`, `tum`, `rotationer`, `grader`, `sekunder`.

### `kör … i … vid … % hastighet` (Avancerad) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Samma sak, men med egen hastighet i stället för rörelsehastigheten.

- Enheter: `cm`, `tum`, `rotationer`, `grader`.

### `kör … vid … … % hastighet` (Avancerad) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Bandvagnsstyrning en viss sträcka: ställer in hastigheten för det vänstra och det högra hjulet var för sig (−100 till 100 % vardera) och väntar tills roboten har kört så långt.

- Enheter: `cm`, `tum`, `rotationer`, `grader`, `sekunder`.

### `börja köra …` (Nybörjare) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Börjar köra med angiven styrning och rörelsehastigheten och går direkt vidare till nästa block.

### `börja köra … vid … % hastighet` (Avancerad) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Börjar köra med angiven styrning och hastighet.

- Typisk användning: lägg ett skjutreglage från instrumentpanelen i styrningsfacket och en pedal i hastighetsfacket.

### `börja köra … vid … % kraft` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Som blocket ovan, men ställer in motorernas **kraft** i stället för en reglerad hastighet: motorerna försöker inte hålla hastigheten när roboten klättrar eller bär en last.

### `börja köra med … … % hastighet` (Avancerad) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Bandvagnsstyrning: startar det vänstra och det högra hjulet med var sin hastighet.

### `börja köra med … … % kraft` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Bandvagnsstyrning med motorkraften för varje hjul i stället för en reglerad hastighet.

### `sluta köra` (Nybörjare) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stoppar båda rörelsemotorerna på det sätt som **ställ in rörelsemotorer på … vid stopp** anger (broms som standard).

### `avbröts rörelsen?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` om den senaste rörelsen inte blev klar: ett annat rörelseblock eller **sluta köra** avbröt den.
