---
id: InputBlocks
title: Invoerblokken
description: "Overzicht van alle invoer in Snelle koppelingen: dashboardbedieningen en hun kanalen, het voertuig, de gamepad, hubknoppen en sensoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Invoerblokken {#input-blocks}

Elke rij begint met een invoer. Het tabblad **Invoer** van het palet toont de blokken die je profiel op dit moment kan gebruiken: één blok per dashboardbediening (één per kanaal voor bedieningen met meerdere kanalen), de blokken **Voertuig**, het blok **Gamepad** en één blok **Hub** per hub. Hoe je ze gebruikt: [Invoer](/docs/Application/Links/Inputs).

Elke invoer stuurt een van twee signalen door de rij:

- **waarde**: een getal van −1 tot 1 (0…1 voor bedieningen zonder negatieve kant);
- **aan/uit**: 1 of 0.

Verwerkingsblokken en bewerkingen accepteren alleen de signalen waarmee ze kunnen werken; zie [Verwerkingsblokken](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controller {#src-controller}

Een bediening van je dashboard, weergegeven met de naam (**JOY1**, **SLDR1**, **BTN2**…).

- **Controller**: elke dashboardbediening uit de lijst hieronder. Monitoren zijn uitvoer, geen invoer.
- **Kanaal**: wat de bediening geeft, bij bedieningen met meerdere kanalen. Het palet biedt één blok per kanaal.

Het stuur, de pedalen, de versnellingspook, de handrem, de richtingaanwijzers, de verdeelbak en de rijschakelaar worden beschreven op [Speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls).

Wordt de bediening van het dashboard verwijderd, dan meldt de rij “Kies een dashboardcontroller”. Bestaat het kanaal niet meer, dan meldt de rij “Kies wat … geeft” (bij een joystick: “… beweegt niet langs deze as”).

### Joystick {#controller-joystick}

- **Kanaal**: **X-as** of **Y-as**. Een joystick die is ingesteld op **Alleen horizontaal (X)** of **Alleen verticaal (Y)** biedt alleen die as.
- Geeft: waarde −1…1, 0 in het midden.

### Schuifregelaar, verticale schuifregelaar {#controller-slider}

- Geen kanaal.
- Geeft: waarde 0…1, of −1…1 als **Negatieve waarden** aan staat.

### Rijschakelaar {#controller-train}

De rijschakelaar (speciaal bedieningselement) werkt in Snelle koppelingen als een schuifregelaar.

- Geen kanaal.
- Geeft: waarde −1…1: de stand van de hendel als deel van alle standen, negatief als de rijrichtingschakelaar op achteruit staat, 0 in neutraal.

### Draaiknop {#controller-knob}

De draaiknop van de betaalde thema's werkt in Snelle koppelingen als een schuifregelaar.

- Geen kanaal.
- Geeft: waarde 0…1, of −1…1 als de knop zijn nulpunt in het midden heeft.

### Stuur {#controller-wheel}

- **Kanaal**: **Stuurhoek** (standaard) of **Claxon**.
- Stuurhoek geeft: waarde −1…1, 0 bij rechtuit.
- Claxon geeft: waarde 1 zolang het claxongebied wordt ingedrukt, anders 0.

### Pedalen {#controller-pedals}

- **Kanaal**: **Gaspedaal** (standaard) of **Rempedaal**.
- Geeft: waarde 0…1, hoe ver het pedaal is ingetrapt.
- De pedalen geven de ruwe pedaalpositie. Voor een auto die zelf versnelt, vertraagt en achteruitrijdt, gebruik je de invoer [Voertuig](#src-vehicle).

### Versnellingspook {#controller-gear}

De handgeschakelde en de automatische versnellingspook (speciaal bedieningselement).

- **Kanaal**: **Versnelling** (standaard) of **Richting (R − / vooruit +)**.
- Versnelling, handgeschakelde bak: de ingeschakelde versnelling gedeeld door het aantal vooruitversnellingen: hoogste versnelling 1, neutraal 0, achteruit negatief. Met 4 versnellingen geeft de 2e versnelling 0,5.
- Versnelling, automatische bak: hetzelfde als Richting.
- Richting geeft: −1 in R, 0 in N (en P), +1 in elke vooruitversnelling of D.

### Handrem {#controller-handbrake}

- **Kanaal**: **Handrem aangetrokken** (standaard) of **Handremkracht**.
- Handrem aangetrokken geeft: aan/uit, aan zolang de hendel vergrendeld is.
- Handremkracht geeft: waarde 0…1, hoe ver de hendel is aangetrokken.

### Richtingaanwijzers {#controller-turnsignals}

De richtingaanwijzerhendel (speciaal bedieningselement).

- **Kanaal**: **Richtingaanwijzers (links − / rechts +)** (standaard), **Linker richtingaanwijzer**, **Rechter richtingaanwijzer** of **Licht**.
- Richtingaanwijzers geeft: waarde −1 (links), 0 (uit) of +1 (rechts).
- Linker richtingaanwijzer en Rechter richtingaanwijzer geven: waarde 1 zolang die richtingaanwijzer aan staat (knipperend met de lamp als knipperen bij de bediening aan staat), anders 0.
- Licht geeft: waarde 1 zolang het licht aan is, anders 0.

### Verdeelbak {#controller-transfercase}

De [verdeelbak](/docs/Application/Dashboard/SpecialControls#transfer-case) (speciaal bedieningselement).

- **Kanaal**: **Vierwielaandrijving** (standaard), **Lage gearing**, **Voorste differentieelslot**, **Middendifferentieelslot** of **Achterste differentieelslot**.
- Vierwielaandrijving geeft: aan/uit, aan in 4H en 4L.
- Lage gearing geeft: aan/uit, aan in 4L.
- Elk differentieelslot geeft: aan/uit, aan zolang dat slot is ingeschakeld.
- De stand zelf (2H, 4H, N, 4L) gaat naar de simulator via de instelling **Verdeelbak** van de invoer [Voertuig](#src-vehicle).

### Richtingspad {#controller-dpad}

- **Kanaal**: **Omhoog / omlaag** of **Links / rechts**.
- Geeft: waarde +1 (omhoog of rechts), −1 (omlaag of links) of 0.

### Knop {#controller-button}

- Geen kanaal.
- Geeft: aan/uit, aan zolang ingedrukt.

### Schakelaar {#controller-switch}

- Geen kanaal.
- Geeft: aan/uit.

### Stappenschakelaar {#controller-stepper}

- Geen kanaal.
- Geeft: waarde: de huidige stap gedeeld door **Aantal stappen**, zodat de laatste stap 1 is (−1 voor de laatste negatieve stap).

## Voertuig {#src-vehicle}

Een gesimuleerde auto die wordt bestuurd met de pedalen, de versnellingspook, de handrem en de verdeelbak van het dashboard: hij versnelt, remt, rolt uit en rijdt achteruit als een echt voertuig, en de rij krijgt zijn snelheid of toerental. Het palet toont Voertuig-blokken als het dashboard pedalen, een versnellingspook of een handrem heeft, één blok per uitvoerwaarde, al gekoppeld aan de eerste bediening van elk soort.

- **Pedalen**: de dashboardpedalen die het voertuig besturen (verplicht).
- **Versnellingspook**: **geen** of een versnellingspook op het dashboard. Zonder versnellingspook rijdt het voertuig achteruit als je bij stilstand het rempedaal ingetrapt houdt.
- **Handrem**: **geen** of een handrem op het dashboard.
- **Verdeelbak**: **geen** of een verdeelbak op het dashboard. In 2H en 4H rijdt het voertuig zoals zonder verdeelbak, in N rijdt het niet (het rolt uit), in 4L is de snelheid begrensd tot 40 %.
- **Voertuigtype**: **Auto** (standaard), **Terreinwagen**, **Sportwagen** of **Vrachtwagen**. De typen verschillen in traagheid en achteruitsnelheid; de vrachtwagen heeft ook een luchtrem.
- **Uitvoer**:
  - **Snelheid** (standaard): waarde −1…1, negatief bij achteruitrijden;
  - **Toerental (tpm)**: waarde 0…1;
  - **Remmen**: aan/uit, aan zolang het voertuig remt;
  - **Op de handrem**: aan/uit.

Problemen: “Kies de pedalen van het voertuig”, “… staat niet op het dashboard”.

<Screenshot name="links-vehicle-settings" alt="Instellingen van een Voertuig-invoerblok" width={900} />

## Gamepad {#src-gamepad}

De gamecontroller die met je apparaat verbonden is. Het blok staat alleen in het palet zolang **Gamepad-blokken inschakelen** aan staat (pagina **Gamepad** in de bovenbalk); anders meldt de rij “Schakel gamepad-blokken in op de Gamepad-pagina (bovenste balk)”.

- **Invoer** (standaard **Linker stick Y**). De labels volgen de **Gamepad-knoppenindeling** (Xbox / PlayStation):
  - **Linker stick Y**, **Linker stick X**, **Rechter stick Y**, **Rechter stick X**: waarde −1…1;
  - **RT** / **R2**, **LT** / **L2** (triggers): waarde;
  - **A**, **B**, **X**, **Y** / **Kruis**, **Cirkel**, **Vierkant**, **Driehoek**: aan/uit;
  - **LB** / **L1**, **RB** / **R1** (bumpers): aan/uit;
  - **Omhoog**, **Omlaag**, **Links**, **Rechts** (richtingspad): aan/uit.

## Hub {#src-hub}

De eigen knop of een sensor van een hub: op de hub zelf of op een van de poorten. Er is één Hub-invoer per hub van het profiel, behalve voor Mould King-hubs, die alleen opdrachten ontvangen.

- **Hub**: een hub van het profiel.
- **Knop of sensor**: alleen wat deze hub kan melden (lijst hieronder).
- **Poort**: voor sensoren op een poort (motorwaarden, poortsensoren).
- **Oriëntatie van de hub**: voor kanteling en versnelling op hubs die dit kunnen wijzigen: **Behouden** (standaard) of hoe de hub in het model gemonteerd is.

Een sensorwaarde gaat door de rij gedeeld door de volle schaal en begrensd tot −1…1: een batterij op 50 % geeft 0,5. Een tekst-**Monitor** direct na de sensor toont de echte waarde met eenheid.

| Knop of sensor | Signaal | Eenheid, volle schaal | Hubs |
|---|---|---|---|
| **Knop 1, 2…** | aan/uit | | hubs met een knop; de knoppen van de LEGO® Powered Up-afstandsbediening |
| **Batterij** | waarde | %, 100 | hubs die dit melden |
| **Batterijspanning** | waarde | V, 12 | hubs die dit melden |
| **Uitgangsspanning** | waarde | V, 12 | BuWizz 2.0 |
| **Temperatuur** | waarde | °C, 100 | hubs die dit melden |
| **Kanteling pitch** | waarde | °, 90 | hubs met een kantelsensor |
| **Kanteling roll** | waarde | °, 180 | hubs met een kantelsensor |
| **Kanteling gier** | waarde | °, 180 | hubs met een gieras |
| **Versnelling X / Y / Z** | waarde | m/s², 19,6 | hubs met een versnellingsmeter |
| **Motorsnelheid** | waarde | %, 100 | poort; alle hubs met poorten |
| **Motorhoek** | waarde | °, 360 (relatief) | poort; motoren met encoder; niet SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motorpositie** | waarde | °, 180 (absoluut) | poort; hoekmotoren |
| **Motorvermogen** | waarde | %, 100 | poort; Robot Inventor |
| **Motorstroom** | waarde | A, 3 | poort; BuWizz 2.0, BuWizz 3.0 Pro |
| **Afstandssensor** | waarde | 250 | poort; niet SBrick of BuWizz |
| **Kleursensor** | waarde | kleurnummer, 10 | poort; niet SBrick, BuWizz of WeDo 2.0 |
| **Weerkaatst licht**, **Omgevingslicht** | waarde | %, 100 | poort; niet SBrick, BuWizz of WeDo 2.0 |
| **Kantelsensor pitch / roll** | waarde | °, 45 | poort; kantelsensor van WeDo 2.0 / BOOST; niet SBrick of BuWizz |
| **Vermogensmodus** | waarde | 1–4, 4 | BuWizz 2.0 |
| **Verbonden** | aan/uit | | alle hubs |

Als de hub verbonden is, controleert MOCPilot ook het apparaat op de poort: “Poort A: daar zit geen motor”, “Poort A: de motor heeft geen encoder”, “Poort A: daar zit geen afstandssensor” enzovoort.
