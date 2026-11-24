---
id: Movement
title: Bevægelse
description: "Bevægelsesblokke styrer en robot med to motorer på MINDSTORMS Robot Inventor- eller SPIKE-hubben: kørsel, styring, kampvognsstyring, hastighed, acceleration og stop."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Bevægelse

Bevægelsesblokke styrer en robot med to hjul, der hver drives af sin egen motor, som én enhed: »kør 10 cm fremad«, »drej 1 omdrejning med uret«, »styr 30 til højre«. Det er de samme bevægelsesblokke som i appen LEGO® MINDSTORMS® Robot Inventor. Kategorien vises først i paletten, når profilen har en [Robot Inventor- eller SPIKE Prime-hub](/docs/Application/Hubs/RobotInventorHub). Alle dens blokke har det sort-hvide hub-ikon.

## Sådan virker bevægelse {#how-movement-works}

- **Bevægelsesmotorer.** Som standard sidder det venstre hjul på port **A** og det højre på port **B**. Brug [indstil bevægelsesmotorer til](#block_ri_move_set_pair) til at vælge andre porte. På en robot vender de to motorer mod hinanden, så MOCPilot drejer den højre den modsatte vej: En positiv hastighed kører altid robotten fremad.
- **Bevægelseshastighed.** Blokke uden egen hastighed bruger bevægelseshastigheden: **50 %**, indtil [indstil bevægelseshastighed til](#block_ri_move_set_speed) ændrer den.
- **Styring** er et tal fra −100 til 100. Ved **0** kører robotten ligeud. Positive værdier drejer til højre, negative til venstre: Det inderste hjul sænker farten, jo mere styringen nærmer sig ±100 (ved 50 drejer det med halv hastighed). Ved **100** eller **−100** drejer hjulene i hver sin retning, og robotten drejer rundt på stedet.
- **Enheder.** Afstande kan angives i `cm`, `tommer`, `rotationer` eller `grader` af motorerne, og mange blokke tager også `sekunder`. Centimeter og tommer bruger afstanden pr. motoromdrejning: som standard **17,5 cm** (Robot Inventor-hjulet), ændres med [indstil 1 motoromdrejning til](#block_ri_move_set_distance). En negativ afstand kører den anden vej.
- **Ventetid.** Blokke med en afstand (`kør … i …`) venter, til robotten har kørt så langt. Blokke, der begynder med **begynd at køre**, fortsætter med det samme: Robotten bliver ved med at køre indtil **stop med at køre** eller en anden bevægelsesblok.

## Bevægelsesindstillinger {#movement-settings}

### `indstil bevægelsesmotorer til … …` (Begynder) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Vælger portene til motoren for det venstre og det højre hjul. Standard: **A** og **B**. De to porte skal være forskellige.

### `indstil bevægelseshastighed til … %` (Begynder) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Indstiller hastigheden (fra −100 til 100 %) for de bevægelsesblokke, der ikke har deres egen hastighed. Standard: 50 %. Blokken starter ikke motorerne.

### `indstil 1 motoromdrejning til … cm / tommer kørt` (Avanceret) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Fortæller MOCPilot, hvor langt robotten kører på én motoromdrejning, så afstande i centimeter og tommer passer. Standard: 17,5 cm. Mål din robot: Lad den **køre 1 rotation fremad**, og mål afstanden. Værdien 0 ignoreres.

### `indstil bevægelsesacceleration til …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Hvor hurtigt bevægelsesmotorerne sætter farten op og ned.

- Valgmuligheder: `standard`, `hurtig` (0,1 s), `balanceret` (0,35 s), `jævn` (0,8 s), `langsom` (1,2 s), `meget langsom` (2 s): tiden fra stilstand til fuld hastighed.

### `indstil bevægelsesmotorer til … ved stop` (Avanceret) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Hvad motorerne gør, når robotten stopper.

- `rulle frit`: Motorerne kører frit, og robotten ruller ud.
- `bremse` (standard): Motorerne bremser.
- `hold position`: Motorerne holder aktivt deres position, selv hvis du skubber til robotten.

## Kørsel {#moving}

### `kør … i …` (Begynder) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Flytter robotten med bevægelseshastigheden og venter, til den er færdig.

- Retning: `fremad`, `baglæns`, `med uret`, `mod uret` (de to sidste drejer robotten rundt på stedet).
- Enheder: `cm`, `tommer`, `rotationer`, `grader`, `sekunder`. Standard: 10 cm.

### `kør … i …` (med styring) (Begynder) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Flytter robotten med den angivne styring (−100 til 100) og bevægelseshastigheden og venter, til den er færdig. Med styring 30 kører robotten i en kurve til højre.

- Enheder: `cm`, `tommer`, `rotationer`, `grader`, `sekunder`.

### `kør … i … ved … % hastighed` (Avanceret) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Det samme, men med sin egen hastighed i stedet for bevægelseshastigheden.

- Enheder: `cm`, `tommer`, `rotationer`, `grader`.

### `kør … ved … … % hastighed` (Avanceret) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Kampvognsstyring over en afstand: Indstiller hastigheden for det venstre og det højre hjul hver for sig (hver −100 til 100 %) og venter, til robotten har kørt så langt.

- Enheder: `cm`, `tommer`, `rotationer`, `grader`, `sekunder`.

### `begynd at køre …` (Begynder) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Begynder at køre med den angivne styring og bevægelseshastigheden og går straks videre til næste blok.

### `begynd at køre … ved … % hastighed` (Avanceret) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Begynder at køre med den angivne styring og hastighed.

- Typisk brug: Sæt en skyder fra dashboardet i styringsfeltet og en pedal i hastighedsfeltet.

### `begynd at køre … ved … % effekt` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Som blokken ovenfor, men indstiller motorernes **effekt** i stedet for en reguleret hastighed: Motorerne forsøger ikke at holde hastigheden, når robotten kører op ad bakke eller bærer en last.

### `begynd at køre med … … % hastighed` (Avanceret) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Kampvognsstyring: Starter det venstre og det højre hjul med hver sin hastighed.

### `begynd at køre med … … % effekt` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Kampvognsstyring med motoreffekten for hvert hjul i stedet for en reguleret hastighed.

### `stop med at køre` (Begynder) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stopper begge bevægelsesmotorer, sådan som **indstil bevægelsesmotorer til … ved stop** angiver (som standard bremser de).

### `blev bevægelsen afbrudt?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true`, hvis den sidste bevægelse ikke blev fuldført: En anden bevægelsesblok eller **stop med at køre** afbrød den.
