---
id: Movement
title: Bevegelse
description: "Bevegelsesblokker kjører en robot med to motorer på MINDSTORMS Robot Inventor- eller SPIKE-huben: kjøre, styre, beltestyring, hastighet, akselerasjon og stopp."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Bevegelse

Bevegelsesblokker kjører en robot med to hjul, som hver drives av sin egen motor, som én enhet: «kjør fremover 10 cm», «snu med klokken 1 rotasjon», «styr 30 til høyre». Det er de samme bevegelsesblokkene som i appen LEGO® MINDSTORMS® Robot Inventor. Kategorien vises først i paletten når profilen har en [Robot Inventor- eller SPIKE Prime-hub](/docs/Application/Hubs/RobotInventorHub). Alle blokkene i den har det svart-hvite hubikonet.

## Slik fungerer bevegelse {#how-movement-works}

- **Bevegelsesmotorer.** Som standard sitter det venstre hjulet på port **A** og det høyre på port **B**. Bruk [sett bevegelsesmotorer til](#block_ri_move_set_pair) for å velge andre porter. På en robot vender de to motorene mot hverandre, så MOCPilot dreier den høyre motsatt vei: en positiv hastighet kjører alltid roboten fremover.
- **Bevegelseshastighet.** Blokker uten egen hastighet bruker bevegelseshastigheten: **50 %** til [sett bevegelseshastighet til](#block_ri_move_set_speed) endrer den.
- **Styring** er et tall fra −100 til 100. **0** kjører rett frem. Positive verdier svinger til høyre, negative til venstre: det indre hjulet går saktere, jo mer jo nærmere ±100 styringen kommer (ved 50 går det med halv hastighet). Ved **100** eller **−100** går hjulene hver sin vei, og roboten snurrer på stedet.
- **Enheter.** Avstander kan angis i `cm`, `tommer`, `rotasjoner` eller `grader` av motorene, og mange blokker tar også `sekunder`. Centimeter og tommer bruker avstanden per motoromdreining: **17,5 cm** som standard (Robot Inventor-hjulet), endret med [sett 1 motoromdreining til](#block_ri_move_set_distance). En negativ avstand kjører motsatt vei.
- **Venting.** Blokker med en avstand (`kjør … i …`) venter til roboten har kjørt så langt. Blokker som begynner med **begynn å kjøre**, går videre med en gang: roboten fortsetter å kjøre til **stopp kjøring** eller en annen bevegelsesblokk.

## Bevegelsesinnstillinger {#movement-settings}

### `sett bevegelsesmotorer til … …` (Nybegynner) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Velger portene til motoren for det venstre og det høyre hjulet. Standard: **A** og **B**. De to portene må være forskjellige.

### `sett bevegelseshastighet til … %` (Nybegynner) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Angir hastigheten, fra −100 til 100 %, for bevegelsesblokkene som ikke har egen hastighet. Standard: 50 %. Blokken starter ikke motorene.

### `sett 1 motoromdreining til … cm / tommer kjørt` (Avansert) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Forteller MOCPilot hvor langt roboten kjører på én motoromdreining, slik at avstander i centimeter og tommer blir riktige. Standard: 17,5 cm. Mål roboten din: la den **kjøre fremover 1 rotasjon** og mål avstanden. Verdien 0 ignoreres.

### `sett bevegelsesakselerasjon til …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Hvor raskt bevegelsesmotorene øker og senker farten.

- Valg: `standard`, `rask` (0,1 s), `balansert` (0,35 s), `jevn` (0,8 s), `langsom` (1,2 s), `veldig langsom` (2 s): tiden fra stillstand til full hastighet.

### `sett bevegelsesmotorer til … ved stopp` (Avansert) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Hva motorene gjør når roboten stopper.

- `frirulling`: motorene går fritt, og roboten ruller til den stopper.
- `brems` (standard): motorene bremser.
- `hold posisjon`: motorene holder aktivt posisjonen sin, selv om du dytter på roboten.

## Kjøring {#moving}

### `kjør … i …` (Nybegynner) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Kjører roboten med bevegelseshastigheten og venter til den er ferdig.

- Retning: `fremover`, `bakover`, `med klokken`, `mot klokken` (de to siste snurrer roboten på stedet).
- Enheter: `cm`, `tommer`, `rotasjoner`, `grader`, `sekunder`. Standard: 10 cm.

### `kjør … i …` (med styring) (Nybegynner) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Kjører roboten med angitt styring (−100 til 100) og bevegelseshastigheten og venter til den er ferdig. Med styring 30 kjører roboten i en kurve til høyre.

- Enheter: `cm`, `tommer`, `rotasjoner`, `grader`, `sekunder`.

### `kjør … i … på … % hastighet` (Avansert) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Det samme, men med egen hastighet i stedet for bevegelseshastigheten.

- Enheter: `cm`, `tommer`, `rotasjoner`, `grader`.

### `kjør … på … … % hastighet` (Avansert) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Beltestyring over en avstand: angir hastigheten for det venstre og det høyre hjulet hver for seg (−100 til 100 % hver) og venter til roboten har kjørt så langt.

- Enheter: `cm`, `tommer`, `rotasjoner`, `grader`, `sekunder`.

### `begynn å kjøre …` (Nybegynner) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Begynner å kjøre med angitt styring og bevegelseshastigheten og går videre til neste blokk med en gang.

### `begynn å kjøre … på … % hastighet` (Avansert) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Begynner å kjøre med angitt styring og hastighet.

- Typisk bruk: legg en skyveknapp fra dashboardet i styringsfeltet og en pedal i hastighetsfeltet.

### `begynn å kjøre … på … % kraft` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Som blokken over, men angir motorenes **kraft** i stedet for en regulert hastighet: motorene prøver ikke å holde hastigheten når roboten klatrer eller bærer last.

### `begynn å kjøre med … … % hastighet` (Avansert) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Beltestyring: starter det venstre og det høyre hjulet med hver sin hastighet.

### `begynn å kjøre med … … % kraft` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Beltestyring med motorkraften for hvert hjul i stedet for en regulert hastighet.

### `stopp kjøring` (Nybegynner) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stopper begge bevegelsesmotorene slik **sett bevegelsesmotorer til … ved stopp** angir (brems som standard).

### `ble bevegelsen avbrutt?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` hvis den siste bevegelsen ikke ble fullført: en annen bevegelsesblokk eller **stopp kjøring** avbrøt den.
