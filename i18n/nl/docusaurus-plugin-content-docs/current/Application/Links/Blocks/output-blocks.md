---
id: OutputBlocks
title: Bewerkings- en uitvoerblokken
description: "Overzicht van alle bewerkingen en uitvoer in Snelle koppelingen: Motor, Servo, Licht, bewerkingen voor Technic Move, BuWizz en Mould King, Hub, Indicator, Hub-LED, LED-matrix, Servo's kalibreren."
---

import Screenshot from '@site/src/components/Screenshot';

# Bewerkings- en uitvoerblokken {#operation-and-output-blocks}

Het tabblad **Uitvoer** van het palet bevat de bewerkingen en de uitvoer. Hoe je ze gebruikt: [Bewerkingen en uitvoer](/docs/Application/Links/Operations).

- Een **Bewerking** zegt wat er moet gebeuren. Er moet een uitvoer [Hub](#hub-out) op volgen, die zegt waar.
- Een **directe uitvoer** ([Indicator](#dash-indicator), [Hub-LED](#hub-led), [LED-matrix](#hub-matrix), [Servo's kalibreren](#cmd-calibrate)) sluit de rij zelf af; de rij mag geen bewerking hebben.

**Motor**, **Servo**, **Motor voor tijd** en **Licht** staan altijd in het palet. De andere bewerkingen verschijnen alleen als een hub van het profiel ze kan uitvoeren.

“Aan” betekent hieronder een aan/uit-signaal dat aan is, of een waarde van minstens 0,5 (positief of negatief).

## Bewerkingen voor poorten {#operations-for-ports}

### Motor {#op-motor}

Laat de motor draaien met de waarde van de invoer: hoe verder je duwt, hoe sneller; 0 stopt hem.

- Neemt: waarde of aan/uit (aan = volle snelheid).
- **Bij stoppen**: **Standaard van hub** (standaard), **Uitrollen**, **Remmen** of **Positie vasthouden**.
- **Versnelling van hub**: **Standaard van hub** (standaard), **Snel**, **Gebalanceerd**, **Geleidelijk**, **Langzaam** of **Heel langzaam**: de eigen versnellingscurve van de hub. Voor je eigen curve gebruik je [Geleidelijk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Blokkeerdetectie**: **Standaard van hub** (standaard), **Aan** of **Uit**.
- Hubs: elke hub met poorten. **Bij stoppen** en **Versnelling van hub** vereisen een hub met positieregeling (niet SBrick, BuWizz 2.0, WeDo 2.0 of Mould King); **Blokkeerdetectie** vereist Robot Inventor. Op een Technic Move Hub laat Motor in de modus **Autoprofiel** de auto rijden en in de modus **Poorten** de motoren `A`–`C` draaien ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Stuurt met een motor met encoder: de invoer −1…1 draait de motor naar *midden + waarde × hoek*, en 0 brengt hem terug naar het midden.

- Neemt: waarde of aan/uit.
- **Kalibratie**: **Handmatig** (standaard) of **Auto**.
- **Hoek**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 omwenteling, ±2 omwentelingen, ±3 omwentelingen of ±5 omwentelingen (standaard ±90°). Alleen bij Handmatig.
- **Midden**: −20°, −10°, −5°, 0°, +5°, +10° of +20° (standaard 0°). Alleen bij Handmatig.
- **Draaisnelheid**: 25, 50, 75 of 100 % (standaard 100 %).
- Handmatig: het nulpunt is waar de motor stond bij het inschakelen, of de positie die je instelt met **Instellen als nul** (verschuif eerst met **◀ 5°** / **5° ▶**).
- Auto: bij elke start draait de motor naar beide eindaanslagen; het midden wordt het nulpunt en de slag wordt de hoek. **Nu kalibreren** voert dit meteen uit. De besturing moet eindaanslagen hebben.
- Hubs en poorten: een motor met encoder op een hub met positieregeling (niet SBrick, BuWizz 2.0, WeDo 2.0 of Mould King). Op een Technic Move Hub in de modus **Autoprofiel** draait Servo de stuurheugel van de hub, die de hub zelf kalibreert; gebruik in de modus **Poorten** poort `C` met kalibratie **Auto**.

<Screenshot name="links-servo-settings" alt="Instellingen van een Servo-blok" width={900} />

### Motor voor tijd {#op-timed}

Laat de motor een ingestelde tijd draaien, elke keer dat de invoer aan gaat. Snelheid en richting komen van de invoerwaarde op dat moment.

- Neemt: waarde of aan/uit.
- **Tijd**: 0,5, 1, 2, 3, 5 of 10 s (standaard 1 s).
- Hubs: elke hub met poorten; op een Technic Move Hub in de modus **Autoprofiel** laat het de auto rijden.

### Draaien met graden {#op-degrees}

Draait de motor over een ingestelde hoek, elke keer dat de invoer aan gaat. Een negatieve invoer draait hem de andere kant op.

- Neemt: waarde of aan/uit.
- **Graden**: 45°, 90°, 180°, 1 omwenteling, 2 omwentelingen, 3 omwentelingen, 5 omwentelingen of 10 omwentelingen (standaard 1 omwenteling).
- **Snelheid**: 25, 50, 75 of 100 % (standaard 50 %).
- Hubs en poorten: een motor met encoder op een hub met positieregeling.

### Naar positie gaan {#op-goto}

Draait de motor naar een absolute positie als de invoer aan gaat, en naar een andere als hij uit gaat. Hij kiest de kortste weg.

- Neemt: waarde of aan/uit.
- **Positie bij aan**: 0°, 45°, 90°, 135°, 180°, 225°, 270° of 315° (standaard 90°).
- **Positie bij uit**: **Blijven** of een van dezelfde posities (standaard 0°).
- **Snelheid**: 25, 50, 75 of 100 % (standaard 50 %).
- Hubs en poorten: een hoekmotor (absolute positie) op een hub met positieregeling.

### Licht {#op-light}

Stuurt LEGO®-lampen op een poort aan.

- Neemt: waarde of aan/uit. Bij een waarde volgt de helderheid die waarde (−1 en 1 zijn allebei volle helderheid).
- **Helderheid**: 25, 50, 75 of 100 % (standaard 100 %).
- **Knipperen: aan**: **Niet knipperen** (standaard), 0,25, 0,5, 1 of 2 s: hoe lang de lamp bij elke knipper aan blijft.
- **Knipperen: uit**: **Zelfde als aan** (standaard), 0,25, 0,5, 1 of 2 s: hoe lang hij uit blijft.
- Hubs: elke hub met poorten behalve WeDo 2.0. Op een Technic Move Hub schakelt Licht in de modus **Autoprofiel** de lichten van de auto, en in de modus **Poorten** de lichten `1`–`6` één voor één.

### Poortkleur {#op-portcolor}

Stelt de kleur van de poort-leds van een BuWizz 3.0 Pro in.

- Neemt: waarde of aan/uit.
- **Kleur**: **Uit de lijst** (standaard) of **RGB**.
- **Kleur bij aan** (standaard Rood) en **Kleur bij uit** (standaard Uit): Uit, Roze, Paars, Blauw, Lichtblauw, Lichtgroen, Groen, Geel, Oranje, Rood, Wit.
- **Rood**, **Groen**, **Blauw** (RGB): 0, 32, 64, 128, 192 of 255 (standaard 255, 0, 0).
- Hubs en poorten: BuWizz 3.0 Pro, poort 1–4. De leds gaan uit als het programma stopt.

### Sensorlichten {#op-sensorlights}

Laat de vier segmenten rond de “ogen” van de Technic-afstandssensor oplichten zolang de invoer aan is.

- Neemt: waarde of aan/uit.
- **Lichten**: **Alle** (standaard), **Boven**, **Onder**, **Links**, **Rechts** of **Diagonaal**.
- **Helderheid**: 25, 50, 75 of 100 % (standaard 100 %).
- Hubs en poorten: Robot Inventor, SPIKE Prime en Technic Hub, één poort met de afstandssensor. De lichten gaan uit als het programma stopt.

### Kleursensorlampjes {#op-colorlights}

Laat de drie lampjes rond de lens van de Technic-kleursensor (de SPIKE-kleursensor) oplichten zolang de invoer aan is.

- Neemt: waarde of aan/uit.
- **Lichten**: **Alle** (standaard), 1, 2, 3, 1 + 2, 2 + 3 of 1 + 3.
- **Helderheid**: 25, 50, 75 of 100 % (standaard 100 %).
- Hubs en poorten: Technic Hub, de poort met de kleursensor.
- Zolang de lampjes aan zijn, meet de sensor niets. Als de invoer uitgaat of het programma stopt, gaan de lampjes uit en meet de sensor weer kleuren. Een rij die de kleursensor uitleest op een poort die een andere rij verlicht, is een probleem (“Rij 2 verlicht de kleursensor op poort A: een verlichte sensor meet niets”).

## Bewerkingen voor de hele hub {#operations-for-the-whole-hub}

Het Hub-blok na deze bewerkingen heeft geen poorten.

### Remmen {#op-brake}

Remt de auto zolang de invoer aan is.

- Neemt: waarde of aan/uit. Geen instellingen.
- Hubs: Technic Move.

### Boost {#op-boost}

Zet de hub in de vermogensmodus boost zolang de invoer aan is, en terug naar normaal als hij uit gaat.

- Neemt: waarde of aan/uit. Geen instellingen.
- Hubs: Technic Move.

### Vermogenspuls {#op-pulse}

Stuurt één vermogenspuls elke keer dat de invoer aan gaat: de motoren draaien ongeveer twee seconden op maximaal vermogen.

- Neemt: waarde of aan/uit. Geen instellingen.
- Hubs: Technic Move met de configuratie **Batmobile™ Tumbler**; zie [Configuraties van de Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Vermogensmodus {#op-powermode}

Stelt de vermogensmodus van een BuWizz 2.0 in als de invoer aan gaat en, als je er een kiest, als hij uit gaat.

- Neemt: waarde of aan/uit.
- **Modus bij aan**: **Langzaam**, **Normaal** (standaard), **Snel** of **Ludicrous**.
- **Modus bij uit**: **Behouden** (standaard) of een van de modi.
- Hubs: BuWizz 2.0.

### Kanaal {#op-channel}

Wisselt het besturingskanaal van een Mould King-hub als de invoer aan gaat en, als je er een kiest, als hij uit gaat.

- Neemt: waarde of aan/uit.
- **Kanaal bij aan**: **A** (standaard), **B** of **C**.
- **Kanaal bij uit**: **Behouden** (standaard), **A**, **B** of **C**.
- Hubs: Mould King 4.0 en 6.0.

## Uitvoer {#outputs}

### Hub {#hub-out}

Waar de bewerking plaatsvindt: een hub en zijn poorten. Er is één Hub-blok per hub van het profiel.

- **Hub**: een hub van het profiel.
- **Poorten**: een of meer poorten van die hub (A–D op de meeste hubs en op SBrick, A–F op Robot Inventor en Mould King 6.0, 1–4 op BuWizz 2.0, 1–4 plus A en B op BuWizz 3.0 Pro). Een poort kan maar bij één rij horen.
- Neemt: een bewerking. Technic Move Hubs in de modus **Autoprofiel** en bewerkingen voor de hele hub hebben geen poorten. In de modus **Poorten** heeft een Technic Move Hub de poorten A–C, en lichten 1–6 voor **Licht**.
- Meer: [Hub-blok en poorten](/docs/Application/Links/HubsAndPorts).

### Indicator {#dash-indicator}

Toont de waarde op een dashboardmonitor, zoals hij is.

- Neemt: waarde of aan/uit, zonder bewerking ervoor.
- **Dashboardindicator**: een **Tekstmonitor** (Monitor), een **Waardemonitor** (batterijniveau, snelheidsmeter) of een **Kantelmonitor** op het dashboard.
- **As**: **Kanteling X** of **Kanteling Y**, alleen voor een Kantelmonitor (één rij per as).
- Een tekstmonitor direct na een hubsensor toont de echte waarde met eenheid.

### Hub-LED {#hub-led}

Het gekleurde statuslampje van de hub: de ene kleur zolang de invoer aan is, een andere zolang hij uit is.

- Neemt: waarde of aan/uit, zonder bewerking ervoor.
- **Hub**: een hub met een kleuren-led.
- **Kleur**: **Uit de lijst** (standaard) of **RGB**.
- **Kleur bij aan** (standaard Rood) en **Kleur bij uit** (standaard Uit): Uit, Roze, Paars, Blauw, Lichtblauw, Lichtgroen, Groen, Geel, Oranje, Rood, Wit.
- **Rood**, **Groen**, **Blauw** (RGB): 0, 32, 64, 128, 192 of 255 (standaard 255, 0, 0).
- Hubs: LEGO®-hubs (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, de Powered Up-afstandsbediening); niet BuWizz, SBrick of Mould King.

### LED-matrix {#hub-matrix}

De lichtmatrix van de hub.

- Neemt: waarde of aan/uit, zonder bewerking ervoor.
- **Hub**: een hub met een LED-matrix.
- **Tonen**: **Niveaubalk** (standaard; rijen lichten van onderaf op met de waarde), **Getal** (de waarde van −100 tot 100) of **Afbeelding bij aan**.
- **Afbeelding**: **Hart** (standaard), **Glimlach**, **Verdrietig**, **Vinkje**, **Kruis**, **Pijl omhoog**, **Pijl omlaag**, **Pijl links**, **Pijl rechts** of **Alles aan**.
- **Oriëntatie**: **Behouden** (standaard), **Rechtop**, **Ondersteboven**, **Links** of **Rechts**.
- Hubs: Robot Inventor. De matrix wordt gewist als het programma stopt.

### Servo's kalibreren {#cmd-calibrate}

Elke keer dat de invoer aan gaat, kalibreert elke [Servo](#op-servo) in modus **Auto** in het programma opnieuw.

- Neemt: waarde of aan/uit, zonder bewerking ervoor. Geen instellingen.
- Het programma moet een gebruiksklare Servo-rij in modus Auto hebben, anders meldt de rij “Geen servo met kalibratiemodus Auto in dit programma”.
