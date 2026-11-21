---
id: Examples
title: "Voorbeelden: auto, tank, kraan, trein"
description: "Kant-en-klare recepten in Snelle koppelingen voor een auto, een tank, een kraan en een trein."
---

# Voorbeelden {#examples}

Kant-en-klare recepten. Zet eerst de bedieningen op het dashboard en voeg de hubs toe in Mijn hubs, en bouw daarna de rijen.

## Auto met servobesturing {#car-with-servo-steering}

Dashboard: **JOY1** (Alleen verticaal) links, **JOY2** (Alleen horizontaal) rechts, **BTN1** en een monitor **Batterijniveau**.

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | JOY1, Y-as | Dode zone 10 %, Geleidelijk 0,5 s | Motor | Technic Hub, poorten A + B |
| 2 | JOY2, X-as | | Servo (Auto, ±90°) | Technic Hub, poort D |
| 3 | BTN1 | Wisselen | Licht | Technic Hub, poort C |
| 4 | Hub: Batterij | | | Indicator: Batterijniveau |

Draait één aandrijfmotor de verkeerde kant op, splits rij 1 dan in twee rijen en voeg aan een ervan **Omkeren** toe.

## Auto met stuur, pedalen en versnellingsbak {#car-with-a-wheel-pedals-and-a-gearbox}

Dashboard: een **Stuur**, **Pedalen**, een **Versnellingspook**, een **Handrem** en **Richtingaanwijzers**. De invoer [Voertuig](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) zet de pedalen, de versnellingsbak en de handrem om in een snelheid die opbouwt en afneemt zoals bij een echte auto.

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | Voertuig: Snelheid | | Motor | Technic Hub, poorten A + B |
| 2 | Stuur: Stuurhoek | | Servo (Auto) | Technic Hub, poort D |
| 3 | Voertuig: Remmen | | Licht | Technic Hub, poort C (remlichten) |
| 4 | Richtingaanwijzers: Linker richtingaanwijzer | | Licht | City Hub, poort A |
| 5 | Richtingaanwijzers: Rechter richtingaanwijzer | | Licht | City Hub, poort B |

## Tank (twee rupsbanden) {#tank-two-tracks}

Dashboard: twee verticale schuifregelaars **VSLDR1** en **VSLDR2** met **Terug naar nul** en **Negatieve waarden** ingeschakeld.

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | VSLDR1 | Geleidelijk 0,25 s | Motor | Hub, poort A |
| 2 | VSLDR2 | Omkeren, Geleidelijk 0,25 s | Motor | Hub, poort B |

Met een gamepad gebruik je Linker stick Y voor rij 1 en Rechter stick Y voor rij 2.

## Kraan {#crane}

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | DPAD1, Links / rechts | Begrenzing 50 % | Motor | Hub, poort A (zwenken) |
| 2 | DPAD1, Omhoog / omlaag | | Motor | Hub, poort B (haaklier) |
| 3 | SLDR1 | Dode zone 10 % | Motor | Hub, poort C (giek) |
| 4 | SWCH1 | | Licht (knipperen 0,5 s) | Hub, poort D (zwaailicht) |

## Trein {#train}

Dashboard: een **Stappenschakelaar** **STPR1** met **Negatieve waarden** (snelheidsstappen vooruit en achteruit) en **BTN1** voor de lichten.

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | STPR1 | Geleidelijk 2 s | Motor | City Hub, poort A |
| 2 | BTN1 | Wisselen | Licht | City Hub, poort B |
| 3 | Hub: Batterij | | | Indicator: Monitor |

Het blok Geleidelijk laat de trein optrekken en stoppen als een echte. Heb je een **rijschakelaar** op het dashboard, gebruik die dan in rij 1 in plaats van STPR1: hij geeft de stand van de hendel, negatief bij achteruit.

## Technic Move-auto {#technic-move-car}

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | Voertuig: Snelheid | | Motor | Technic Move (rijden) |
| 2 | Stuur: Stuurhoek | | Servo | Technic Move (sturen) |
| 3 | BTN1 | Wisselen | Licht | Technic Move (lichten) |
| 4 | BTN2 | | Boost | Technic Move |

Zonder versnellingspook op het dashboard rijdt de auto achteruit als je bij stilstand het rempedaal ingetrapt houdt.

## Probeer het in de browser {#try-it-in-the-browser}

De demo van Snelle koppelingen op [mocpilot.com](https://mocpilot.com) heeft een voorbeeldprofiel met rijen zoals deze; zie [Webeditor](/docs/Introducing/WebEditor).
