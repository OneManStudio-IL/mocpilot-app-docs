---
id: Operations
title: Bewerkingen en uitvoer
description: "Bewerkingen in Snelle koppelingen (Motor, Servo, Licht en meer) en uitvoer (Hub, Indicator, Hub-LED, LED-matrix, Servo's kalibreren)."
---

import Screenshot from '@site/src/components/Screenshot';

# Bewerkingen en uitvoer {#operations-and-outputs}

Het tabblad **Uitvoer** van het palet bevat bewerkingen en uitvoer.

- Een **Bewerking** zegt *wat* er moet gebeuren (een motor laten draaien, sturen, een lamp laten knipperen). Er volgt altijd een uitvoer **Hub** op, die zegt *waar*: welke hub en welke poorten.
- Een **directe uitvoer** (Indicator, Hub-LED, LED-matrix, Servo's kalibreren) sluit de rij zelf af, zonder bewerking.

De gewone bewerkingen (Motor, Servo, Motor voor tijd, Licht) zijn er altijd. Hubspecifieke bewerkingen verschijnen alleen als een hub van het profiel ze ondersteunt. Elke instelling met haar waarden en standaardwaarde: [Bewerkings- en uitvoerblokken](/docs/Application/Links/Blocks/OutputBlocks).

## Motoren en lampen {#motors-and-lights}

| Bewerking | Wat het doet | Gebruikelijke toepassing |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | laat de motor draaien met de waarde van de invoer; 0 stopt hem | rijden, lieren |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | draait een motor met encoder naar een positie die de invoer volgt | sturen |
| [Motor voor tijd](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | laat de motor bij elke druk een ingestelde tijd draaien | deuren, kiepbakken |
| [Draaien met graden](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | draait de motor bij elke druk over een ingestelde hoek | stapsgewijs draaien, draaischijven |
| [Naar positie gaan](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | stuurt een hoekmotor naar de ene positie bij aan en naar een andere bij uit | kleppen, versnellingskeuze |
| [Licht](/docs/Application/Links/Blocks/OutputBlocks#op-light) | laat LEGO®-lampen branden, continu of knipperend | koplampen, zwaailichten, richtingaanwijzers |
| [Poortkleur](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | kleurt de poort-leds van een BuWizz 3.0 Pro | statuskleuren |
| [Sensorlichten](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | laat de “ogen” van de Technic-afstandssensor oplichten (Robot Inventor) | robotgezichten |

### Sturen met Servo {#steering-with-servo}

Servo heeft een motor met encoder nodig en een stuurmechanisme dat je met de hand centreert of dat eindaanslagen heeft.

- **Handmatig**: draai de as naar het midden en tik op **Instellen als nul**; stel nauwkeurig bij met **◀ 5°** / **5° ▶**. Kies daarna de **Hoek** en, als de wielen nog naar één kant trekken, het **Midden**.
- **Auto**: bij elke start draait de motor naar beide eindaanslagen, het midden wordt nul en de slag wordt de hoek. **Nu kalibreren** voert dit meteen uit. Meldingen: “Kalibreren: de motor draait naar beide eindaanslagen…”, “Gekalibreerd: de servo draait ±…°, het midden is nul”, “Kalibratie mislukt: controleer de hub, de motor en of de as eindaanslagen heeft”.

Op een **Technic Move Hub** stuurt de hub zelf en kalibreert hij zijn eigen stuurheugel; alleen de kalibratiemodus is van toepassing.

<Screenshot name="links-servo-settings" alt="Instellingen van een Servo-blok" width={900} />

## Bewerkingen voor de hele hub {#operations-for-the-whole-hub}

Deze sturen de hub als geheel aan, dus het Hub-blok erna heeft geen poorten.

| Bewerking | Hub | Wat het doet |
|---|---|---|
| [Remmen](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | remt zolang de invoer aan is |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | vermogensmodus boost zolang aan, normaal bij uit |
| [Vermogenspuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | één vermogenspuls per druk (alleen met de configuratie Batmobile™ Tumbler) |
| [Vermogensmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | wisselt de vermogensmodus: Langzaam, Normaal, Snel, Ludicrous |
| [Kanaal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | wisselt het besturingskanaal: A, B, C |

## Uitvoer {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): de hub en zijn poorten. Zie [Hub-blok en poorten](/docs/Application/Links/HubsAndPorts).
- [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): toont de waarde op een dashboardmonitor (tekstmonitor, batterijniveau, snelheidsmeter, kantelmonitor). Direct na een hubsensor toont een tekstmonitor de echte waarde met eenheid. De indicator toont de waarde zoals hij is, dus de rij heeft geen bewerking. Zie [Indicatoren en monitoren](/docs/Application/Dashboard/Indicators).
- [Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): het kleurenlicht van een LEGO®-hub, de ene kleur zolang de invoer aan is en een andere zolang hij uit is.
- [LED-matrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): de lichtmatrix van de Robot Inventor-hub: een niveaubalk, een getal of een afbeelding.
- [Servo's kalibreren](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibreert elke Servo in modus **Auto** opnieuw. Zet het op een dashboardknop: *BTN3* → *Servo's kalibreren*.

## Als het programma stopt {#when-the-program-stops}

De motoren stoppen, de LED-matrix wordt gewist en de poortkleuren en sensorlichten gaan uit.
