---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

De **Simulator** maakt van de pedalen, de versnellingsbak en de handrem van het dashboard een auto die zich als een echte gedraagt: hij trekt op met traagheid, rolt uit, remt, rijdt achteruit en schakelt. De bedieningen geven alleen hun ruwe waarden; het programma bouwt daar de auto van en stuurt zijn snelheid naar de motoren.

De categorie verschijnt zolang het dashboard pedalen, een versnellingsbak of een handrem heeft. Zie [Dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers) voor de blokken die deze bedieningen uitlezen.

## Voertuigen {#vehicles}

Druk op **Voertuig aanmaken** bovenaan de categorie en geef het voertuig een naam (bijvoorbeeld “Voertuig 1”). De blokken verschijnen zodra het programma minstens één voertuig heeft, en in elk blok kies je met welk voertuig het werkt. Met **Voertuig hernoemen** en **Voertuig verwijderen** beheer je ze; je kunt een voertuig niet verwijderen zolang zijn blokken in het programma staan, en de laatste pedalen, versnellingsbak of handrem kun je niet van het dashboard verwijderen zolang er Simulator-blokken worden gebruikt.

<Screenshot name="blocks-simulator" alt="Categorie Simulator met een rijden-blok onder de pedaalgebeurtenis" width={900} />

Een gebruikelijke auto: hang **rijden** onder de pedaalgebeurtenis, verbind de pedalen met `gas` en `rem`, en start daarbinnen de aandrijfmotor met de `snelheid` van het voertuig:

```text
wanneer de pedalen PDL1 elke bewogen
    Voertuig 1  rijden  gas (pedalen PDL1 versnelling)  rem (pedalen PDL1 rem)
        start motor op (snelheid van Voertuig 1) % snelheid  (Hub 1, poort A)
```

Een lus `altijd herhalen` is niet nodig: **rijden** blijft vanzelf draaien tot de auto stilstaat.

## Blokken {#blocks}

### `… rijden gas … rem … versnelling … versnellingen van … handrem … aangetrokken … verdeelbak …` (Beginner) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Het hart van de simulator. Een C-blok dat het voertuig laat rijden: elke 0,1 s leest het de invoer, verplaatst het de auto één stap en voert het de blokken erin uit (zet daar de motorblokken). Het eindigt als de auto stilstaat en er niets is ingedrukt; de blokken erin worden dan nog één keer uitgevoerd, zodat de motor de laatste waarde krijgt.

- `gas` en `rem`: hoe diep elk pedaal is ingetrapt, 0 tot 100.
- `versnelling`: de gekozen versnelling: `-1` achteruit, `0` neutraal, `1` en hoger vooruit. Staat er een automatische versnellingspook in dit vak, dan wordt in plaats daarvan de stand van de keuzehendel gebruikt (P, R, N, D) en kiest de auto in D zelf de versnelling.
- `versnellingen van`: hoeveel versnellingen de bak heeft (standaard 6).
- `handrem`: hoe hard de handrem is aangetrokken, 0 tot 100; `aangetrokken`: of hij vergrendeld is.
- `verdeelbak` (optioneel): de stand van de [verdeelbak](/docs/Application/Dashboard/SpecialControls#transfer-case), meestal het blok [stand van de verdeelbak](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. In 2H en 4H rijdt de auto zoals zonder verdeelbak; in N rijdt hij niet (hij rolt uit, en de rem remt hem alleen af zonder dat hij achteruitrijdt); in 4L is zijn snelheid begrensd tot 40 %. Laat het leeg als het model geen verdeelbak heeft.
- Een invoer telt alleen als er een blok in staat; een los getal in een leeg vak wordt genegeerd (behalve bij `versnellingen van`).
- Er kan maar één **rijden**-blok tegelijk een voertuig besturen; een tweede voor hetzelfde voertuig slaat zijn binnenste blokken over.

### `stel … type in op …` (Beginner) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Stemt de motor van het voertuig af op een soort voertuig: hoe lang het blijft doorrollen (traagheid), de topsnelheid achteruit en of het een luchtrem heeft.

- Typen: `auto`, `terreinwagen`, `sportwagen`, `vrachtwagen` (de vrachtwagen heeft een luchtrem)

### `stel … … in op … %` (Gevorderd) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Wijzigt één motorinstelling.

- `motortraagheid`: hoe hoger, hoe langer de auto zonder gas doorrolt (0 betekent geen traagheid).
- `achteruitsnelheid`: de topsnelheid achteruit.

### `stel … … in op …` (Gevorderd) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Zet één voertuigoptie aan of uit.

- `achteruit met de rem`: met alleen pedalen rijdt de auto achteruit als je bij stilstand de rem ingetrapt houdt.
- `versnellingen beperken de snelheid`: elke versnelling heeft een eigen topsnelheid.
- `handrem houdt vast`: een vergrendelde handrem houdt de auto op zijn plek.
- `luchtrem`: de luchtrem van de vrachtwagen (geeft de gebeurtenis “blaast lucht af”).
- `automatische bak`: behandel de invoer `versnelling` als een automatische keuzehendel.

### `resetten …` (Gevorderd) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Stopt het voertuig waar het is en vergeet de toestand.

### `… van …` (Beginner) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Geeft een van de waarden van het voertuig terug.

- `snelheid`: van −100 tot 100 (negatief bij achteruitrijden), klaar voor een snelheidsvak van een motor.
- `toerental`: van 0 tot 100, voor een toerenteller of motorgeluid.
- `versnelling`: de huidige versnelling (`-1` achteruit, `0` neutraal, daarna `1`, `2`…).

### `is … … ?` (Beginner) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Geeft `true` terug als het voertuig in de gekozen toestand is.

- Toestanden: `in beweging`, `aan het remmen`, `op de handrem`

### `wanneer … …` (Beginner) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Voert het script uit als er iets met het voertuig gebeurt.

- Gebeurtenissen: `start`, `stopt`, `begint te remmen`, `stopt met remmen`, `remt hard`, `blaast lucht af`, `schakelt`
- Gebruikelijke toepassing: een geluid afspelen, bijvoorbeeld het sissen van een luchtrem bij `blaast lucht af` of piepende banden bij `remt hard` (zie [Geluiden](/docs/Application/BlockBuilder/Blocks/Sounds)).
