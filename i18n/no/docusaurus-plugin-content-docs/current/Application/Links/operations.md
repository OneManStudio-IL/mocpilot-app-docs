---
id: Operations
title: Handlinger og utganger
description: "Handlinger i Hurtigkoblinger (Motor, Servo, Lys og flere) og utganger (Hub, Indikator, Hub-LED, LED-matrise, Kalibrer servoer)."
---

import Screenshot from '@site/src/components/Screenshot';

# Handlinger og utganger {#operations-and-outputs}

Fanen **Utganger** i paletten inneholder handlinger og utganger.

- En **handling** sier *hva* som skal gjøres (drive en motor, styre, blinke med et lys). En **Hub**-utgang kommer alltid etter den og sier *hvor*: hvilken hub og hvilke porter.
- En **direkte utgang** (Indikator, Hub-LED, LED-matrise, Kalibrer servoer) avslutter raden alene, uten handling.

De vanlige handlingene (Motor, Servo, Motor i en tid, Lys) er alltid der. Hubspesifikke handlinger vises bare når en hub i profilen støtter dem. Alle innstillinger med verdier og standardverdi: [Handlings- og utgangsblokker](/docs/Application/Links/Blocks/OutputBlocks).

## Motorer og lys {#motors-and-lights}

| Handling | Hva den gjør | Typisk bruk |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | kjører motoren med inngangens verdi; 0 stopper den | kjøring, vinsjer |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | dreier en motor med enkoder til en posisjon som følger inngangen | styring |
| [Motor i en tid](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | kjører motoren i en bestemt tid ved hvert trykk | dører, tippere |
| [Kjør et antall grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | dreier motoren en bestemt vinkel ved hvert trykk | trinnvis dreiing, dreieskiver |
| [Gå til posisjon](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | sender en vinkelmotor til én posisjon når den er på, og en annen når den er av | klaffer, girvelgere |
| [Lys](/docs/Application/Links/Blocks/OutputBlocks#op-light) | tenner LEGO®-lys, fast eller blinkende | frontlys, varsellys, blinklys |
| [Portfarge](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | farger port-LED-ene på en BuWizz 3.0 Pro | statusfarger |
| [Sensorlys](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | tenner «øynene» på Technic-avstandssensoren (Robot Inventor) | robotansikter |

### Styring med Servo {#steering-with-servo}

Servo krever en motor med enkoder og en styremekanisme som du enten sentrerer for hånd, eller som har endestopp.

- **Manuell**: drei akselen til midten og trykk på **Sett som null**; finjuster med **◀ 5°** / **5° ▶**. Velg deretter **Vinkel** og, hvis hjulene fortsatt trekker til én side, **Midtpunkt**.
- **Auto**: ved hver start dreier motoren til begge endestopp, midten blir null og vandringen blir vinkelen. **Kalibrer nå** kjører dette med en gang. Meldinger: «Kalibrerer: motoren dreier til begge endestopp…», «Kalibrert: servoen dreier ±…°, midten er null», «Kalibreringen mislyktes: sjekk huben, motoren og at akselen har endestopp».

På en **Technic Move Hub** styrer huben og kalibrerer tannstangen selv; bare kalibreringsmodusen gjelder.

<Screenshot name="links-servo-settings" alt="Innstillinger for en Servo-blokk" width={900} />

## Handlinger for hele huben {#operations-for-the-whole-hub}

Disse styrer huben som helhet, så Hub-blokken etter dem har ingen porter.

| Handling | Hub | Hva den gjør |
|---|---|---|
| [Brems](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | bremser mens inngangen er på |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | Boost-effektmodus når den er på, normal når den er av |
| [Kraftpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | én kraftpuls per trykk (bare med Batmobile™ Tumbler-konfigurasjonen) |
| [Effektmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | bytter effektmodus: Sakte, Normal, Rask, Ludicrous |
| [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | bytter styrekanal: A, B, C |

## Utganger {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): huben og portene. Se [Hub-blokken og porter](/docs/Application/Links/HubsAndPorts).
- [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): viser verdien på en monitor på dashboardet (tekstmonitor, Batterinivå, Speedometer, Hellingsmonitor). Rett etter en sensor på huben viser en tekstmonitor den faktiske verdien med enhet. Indikatoren viser verdien som den er, så raden har ingen handling. Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).
- [Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): fargelyset på en LEGO®-hub, én farge mens inngangen er på og en annen mens den er av.
- [LED-matrise](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): lysmatrisen på Robot Inventor-huben: en nivåstolpe, et tall eller et bilde.
- [Kalibrer servoer](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibrerer alle Servo-blokker i **Auto**-modus på nytt. Legg den på en knapp på dashboardet: *BTN3* → *Kalibrer servoer*.

## Når programmet stopper {#when-the-program-stops}

Motorene stopper, LED-matrisen tømmes, og portfarger og sensorlys slås av.
