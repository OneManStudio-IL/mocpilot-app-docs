---
id: Movement
title: Beweging
description: "Bewegingsblokken besturen een robot met twee motoren op de MINDSTORMS Robot Inventor- of SPIKE-hub: rijden, sturen, tankbesturing, snelheid, versnelling en stoppen."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Beweging

Bewegingsblokken besturen een robot met twee wielen, elk aangedreven door een eigen motor, als één geheel: “10 cm vooruit rijden”, “1 omwenteling met de klok mee draaien”, “30 naar rechts sturen”. Het zijn dezelfde bewegingsblokken als in de app LEGO® MINDSTORMS® Robot Inventor. De categorie staat als eerste in het palet als het profiel een [Robot Inventor- of SPIKE Prime-hub](/docs/Application/Hubs/RobotInventorHub) heeft. Al haar blokken dragen het zwart-witte hubpictogram.

## Zo werkt beweging {#how-movement-works}

- **Bewegingsmotoren.** Standaard zit het linkerwiel op poort **A** en het rechterwiel op poort **B**. Met [stel bewegingsmotoren in op](#block_ri_move_set_pair) kies je andere poorten. Op een robot staan de twee motoren tegenover elkaar, daarom laat MOCPilot de rechter de andere kant op draaien: een positieve snelheid rijdt de robot altijd vooruit.
- **Bewegingssnelheid.** Blokken zonder eigen snelheid gebruiken de bewegingssnelheid: **50 %**, totdat [stel bewegingssnelheid in op](#block_ri_move_set_speed) die verandert.
- **Sturing** is een getal van −100 tot 100. Bij **0** rijdt de robot rechtdoor. Positieve waarden sturen naar rechts, negatieve naar links: het binnenste wiel gaat langzamer draaien, hoe meer naarmate de sturing dichter bij ±100 komt (bij 50 draait het op halve snelheid). Bij **100** of **−100** draaien de wielen in tegengestelde richting en draait de robot ter plekke rond.
- **Eenheden.** Afstanden kunnen in `cm`, `duim`, `rotaties` of `graden` van de motoren, en veel blokken nemen ook `seconden`. Voor centimeters en duimen geldt de afstand per motoromwenteling: standaard **17,5 cm** (het wiel van Robot Inventor), te wijzigen met [stel 1 motoromwenteling in op](#block_ri_move_set_distance). Een negatieve afstand rijdt de andere kant op.
- **Wachten.** Blokken met een afstand (`beweeg … voor …`) wachten tot de robot zo ver is gereden. Blokken die beginnen met **begin met bewegen** gaan meteen door: de robot blijft rijden tot **stop met bewegen** of een ander bewegingsblok.

## Bewegingsinstellingen {#movement-settings}

### `stel bewegingsmotoren in op … …` (Beginner) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Kiest de poorten van de motor van het linker- en het rechterwiel. Standaard: **A** en **B**. De twee poorten moeten verschillend zijn.

### `stel bewegingssnelheid in op … %` (Beginner) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Stelt de snelheid in (van −100 tot 100 %) van de bewegingsblokken die geen eigen snelheid hebben. Standaard: 50 %. Dit blok start de motoren niet.

### `stel 1 motoromwenteling in op … cm / duim afgelegd` (Gevorderd) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Vertelt MOCPilot hoe ver de robot in één motoromwenteling rijdt, zodat afstanden in centimeters en duimen kloppen. Standaard: 17,5 cm. Meet je robot op: laat hem **1 rotatie vooruit bewegen** en meet de afstand. De waarde 0 wordt genegeerd.

### `stel bewegingsversnelling in op …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Bepaalt hoe snel de bewegingsmotoren optrekken en afremmen.

- Opties: `standaard`, `snel` (0,1 s), `gebalanceerd` (0,35 s), `vloeiend` (0,8 s), `langzaam` (1,2 s), `zeer langzaam` (2 s): de tijd van stilstand tot volle snelheid.

### `stel bewegingsmotoren in op … bij stop` (Gevorderd) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Wat de motoren doen als de robot stopt.

- `uitrollen`: de motoren draaien vrij en de robot rolt uit.
- `rem` (standaard): de motoren remmen.
- `positie vasthouden`: de motoren houden actief hun positie vast, ook als je tegen de robot duwt.

## Rijden {#moving}

### `beweeg … voor …` (Beginner) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Beweegt de robot met de bewegingssnelheid en wacht tot hij klaar is.

- Richting: `vooruit`, `achteruit`, `met de klok mee`, `tegen de klok in` (de laatste twee draaien de robot ter plekke rond).
- Eenheden: `cm`, `duim`, `rotaties`, `graden`, `seconden`. Standaard: 10 cm.

### `beweeg … voor …` (met sturing) (Beginner) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Beweegt de robot met de opgegeven sturing (−100 tot 100) en de bewegingssnelheid en wacht tot hij klaar is. Met sturing 30 rijdt de robot een bocht naar rechts.

- Eenheden: `cm`, `duim`, `rotaties`, `graden`, `seconden`.

### `beweeg … voor … bij … % snelheid` (Gevorderd) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Hetzelfde, maar met een eigen snelheid in plaats van de bewegingssnelheid.

- Eenheden: `cm`, `duim`, `rotaties`, `graden`.

### `beweeg … bij … … % snelheid` (Gevorderd) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Tankbesturing over een afstand: stelt de snelheid van het linker- en het rechterwiel apart in (elk −100 tot 100 %) en wacht tot de robot zo ver is gereden.

- Eenheden: `cm`, `duim`, `rotaties`, `graden`, `seconden`.

### `begin met bewegen …` (Beginner) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Begint te rijden met de opgegeven sturing en de bewegingssnelheid en gaat meteen door naar het volgende blok.

### `begin met bewegen … bij … % snelheid` (Gevorderd) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Begint te rijden met de opgegeven sturing en snelheid.

- Gebruikelijke toepassing: zet een schuifregelaar van het dashboard in het sturingsvak en een pedaal in het snelheidsvak.

### `begin met bewegen … bij … % vermogen` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Zoals het blok hierboven, maar stelt het **vermogen** van de motoren in in plaats van een geregelde snelheid: de motoren proberen de snelheid niet vast te houden als de robot omhoog rijdt of een last draagt.

### `begin met bewegen op … … % snelheid` (Gevorderd) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Tankbesturing: start het linker- en het rechterwiel elk met een eigen snelheid.

### `begin met bewegen op … … % vermogen` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Tankbesturing met het motorvermogen van elk wiel in plaats van een geregelde snelheid.

### `stop met bewegen` (Beginner) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stopt beide bewegingsmotoren zoals **stel bewegingsmotoren in op … bij stop** aangeeft (standaard remmen ze).

### `werd de beweging onderbroken?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` als de laatste beweging niet is afgemaakt: een ander bewegingsblok of **stop met bewegen** heeft haar onderbroken.
