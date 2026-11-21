---
id: Examples
title: "Eksempler: bil, kampvogn, kran, tog"
description: "Færdige opskrifter i Hurtige forbindelser til en bil, en kampvogn, en kran og et tog."
---

# Eksempler {#examples}

Færdige opskrifter. Placer først kontrollerne på dashboardet, og tilføj hubbene under Mine hubs – byg derefter rækkerne.

## Bil med servostyring {#car-with-servo-steering}

Dashboard: **JOY1** (Kun lodret (Y)) til venstre, **JOY2** (Kun vandret (X)) til højre, **BTN1** og en **Batteriniveau**-monitor.

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | JOY1, Y-akse | Dødzone 10 %, Blød 0,5 s | Motor | Technic Hub, porte A + B |
| 2 | JOY2, X-akse | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Skift | Lys | Technic Hub, port C |
| 4 | Hub: Batteri | | | Indikator: Batteriniveau |

Drejer den ene drivmotor den forkerte vej, så del række 1 op i to rækker, og tilføj **Inverter** til den ene af dem.

## Bil med rat, pedaler og gearkasse {#car-with-a-wheel-pedals-and-a-gearbox}

Dashboard: et **Rat**, **Pedaler**, en **Gearstang**, en **Håndbremse** og **Blinklys**. Inputtet [Køretøj](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) gør pedalerne, gearkassen og håndbremsen til en hastighed, der bygges op og aftager som i en rigtig bil.

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | Køretøj: Hastighed | | Motor | Technic Hub, porte A + B |
| 2 | Rat: Styrevinkel | | Servo (Auto) | Technic Hub, port D |
| 3 | Køretøj: Bremser | | Lys | Technic Hub, port C (bremselys) |
| 4 | Blinklys: Venstre blinklys | | Lys | City Hub, port A |
| 5 | Blinklys: Højre blinklys | | Lys | City Hub, port B |

## Kampvogn (to bælter) {#tank-two-tracks}

Dashboard: to lodrette skydere **VSLDR1** og **VSLDR2** med **Returnere til nul** og **Negative værdier** slået til.

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | VSLDR1 | Blød 0,25 s | Motor | Hub, port A |
| 2 | VSLDR2 | Inverter, Blød 0,25 s | Motor | Hub, port B |

Med en spilcontroller bruger du Venstre stick Y til række 1 og Højre stick Y til række 2.

## Kran {#crane}

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | DPAD1, Venstre / højre | Begrænsning 50 % | Motor | Hub, port A (drejning) |
| 2 | DPAD1, Op / ned | | Motor | Hub, port B (krogspil) |
| 3 | SLDR1 | Dødzone 10 % | Motor | Hub, port C (bom) |
| 4 | SWCH1 | | Lys (blink 0,5 s) | Hub, port D (advarselslys) |

## Tog {#train}

Dashboard: en **Trinkontakt** **STPR1** med **Negative værdier** (hastighedstrin frem og tilbage) og **BTN1** til lyset.

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | STPR1 | Blød 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Skift | Lys | City Hub, port B |
| 3 | Hub: Batteri | | | Indikator: Monitor |

Blokken Blød får toget til at sætte i gang og stoppe som et rigtigt tog. Har du en **køreregulator** på dashboardet, så brug den i række 1 i stedet for STPR1: Den giver håndtagets position, negativ ved bakning.

## Technic Move-bil {#technic-move-car}

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | Køretøj: Hastighed | | Motor | Technic Move (kørsel) |
| 2 | Rat: Styrevinkel | | Servo | Technic Move (styring) |
| 3 | BTN1 | Skift | Lys | Technic Move (lys) |
| 4 | BTN2 | | Boost | Technic Move |

Uden gearstang på dashboardet bakker bilen, når du holder bremsepedalen nede i stilstand.

## Prøv det i browseren {#try-it-in-the-browser}

Demoen af Hurtige forbindelser på [mocpilot.com](https://mocpilot.com) har en eksempelprofil med rækker som disse; se [Webeditor](/docs/Introducing/WebEditor).
