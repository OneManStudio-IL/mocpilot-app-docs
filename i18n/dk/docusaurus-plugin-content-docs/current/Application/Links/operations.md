---
id: Operations
title: Handlinger og output
description: "Handlinger i Hurtige forbindelser (Motor, Servo, Lys med flere) og output (Hub, Indikator, Hub-LED, LED-matrix, Kalibrer servoer)."
---

import Screenshot from '@site/src/components/Screenshot';

# Handlinger og output {#operations-and-outputs}

Fanen **Output** i paletten indeholder handlinger og output.

- En **handling** angiver, *hvad* der skal ske (dreje en motor, styre, blinke med et lys). Et **Hub**-output følger altid efter og angiver, *hvor*: hvilken hub og hvilke porte.
- Et **direkte output** (Indikator, Hub-LED, LED-matrix, Kalibrer servoer) afslutter rækken alene, uden en handling.

De almindelige handlinger (Motor, Servo, Motor i tid, Lys) er der altid. Hub-specifikke handlinger vises kun, når en hub i profilen understøtter dem. Alle indstillinger med værdier og standardværdi: [Handlings- og outputblokke](/docs/Application/Links/Blocks/OutputBlocks).

## Motorer og lys {#motors-and-lights}

| Handling | Hvad den gør | Typisk brug |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | kører motoren med inputtets værdi; 0 stopper den | kørsel, spil |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | drejer en motor med encoder til en position, der følger inputtet | styring |
| [Motor i tid](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | kører motoren i en fast tid ved hvert tryk | døre, tippelad |
| [Kør et antal grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | drejer motoren en fast vinkel ved hvert tryk | trinvis fremføring, drejeskiver |
| [Gå til position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | sender en vinkelmotor til én position ved til og en anden ved fra | klapper, gearvælgere |
| [Lys](/docs/Application/Links/Blocks/OutputBlocks#op-light) | tænder LEGO®-lys, konstant eller blinkende | forlygter, advarselslys, blinklys |
| [Portfarve](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | farver port-LED'erne på en BuWizz 3.0 Pro | statusfarver |
| [Sensorlys](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | tænder »øjnene« på Technic-afstandssensoren (Robot Inventor) | robotansigter |

### Styring med Servo {#steering-with-servo}

Servo kræver en motor med encoder og en styremekanisme, som du enten centrerer med hånden, eller som har endestop.

- **Manuel**: Drej akslen til midten, og tryk på **Sæt som nul**; finjuster med **◀ 5°** / **5° ▶**. Vælg derefter **Vinkel** og, hvis hjulene stadig trækker til den ene side, **Midte**.
- **Auto**: Ved hver start drejer motoren til begge endestop, midten bliver nul, og vandringen bliver vinklen. **Kalibrer nu** kører kalibreringen med det samme. Meddelelser: »Kalibrerer: motoren drejer til begge endestop…«, »Kalibreret: servoen drejer ±…°, midten er nul«, »Kalibrering mislykkedes: tjek hubben, motoren og at akslen har endestop«.

På en **Technic Move Hub** styrer og kalibrerer hubben selv sin tandstang; kun kalibreringstilstanden gælder.

<Screenshot name="links-servo-settings" alt="Indstillinger for en Servo-blok" width={900} />

## Handlinger for hele hubben {#operations-for-the-whole-hub}

Disse styrer hubben som helhed, så Hub-blokken efter dem har ingen porte.

| Handling | Hub | Hvad den gør |
|---|---|---|
| [Bremse](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | bremser, så længe inputtet er til |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | effekttilstanden boost ved til, normal ved fra |
| [Kraftimpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | én kraftimpuls pr. tryk (kun konfigurationen Batmobile™ Tumbler) |
| [Effekttilstand](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | skifter effekttilstand: Langsom, Normal, Hurtig, Ludicrous |
| [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | skifter styrekanal: A, B, C |

## Output {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hubben og dens porte. Se [Hub-blokken og porte](/docs/Application/Links/HubsAndPorts).
- [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): viser værdien på en monitor på dashboardet (tekstmonitor, Batteriniveau, Fartmåler, Hældningsmonitor). Lige efter en hubsensor viser en tekstmonitor den rigtige værdi med enhed. Indikatoren viser værdien, som den er, så rækken har ingen handling. Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).
- [Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): farvelyset på en LEGO®-hub – én farve, mens inputtet er til, og en anden, mens det er fra.
- [LED-matrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): lysmatrixen på Robot Inventor-hubben: en niveaubjælke, et tal eller et billede.
- [Kalibrer servoer](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibrerer alle servoer i tilstanden **Auto** igen. Læg den på en knap på dashboardet: *BTN3* → *Kalibrer servoer*.

## Når programmet stopper {#when-the-program-stops}

Motorerne stopper, LED-matrixen ryddes, og portfarver og sensorlys slukkes.
