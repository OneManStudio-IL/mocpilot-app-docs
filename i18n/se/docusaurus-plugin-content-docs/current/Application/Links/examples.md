---
id: Examples
title: "Exempel: bil, stridsvagn, kran, tåg"
description: "Färdiga recept i Snabbkopplingar för en bil, en stridsvagn, en kran och ett tåg."
---

# Exempel {#examples}

Färdiga recept. Placera först kontrollerna på instrumentpanelen och lägg till hubbarna under Mina hubbar, och bygg sedan raderna.

## Bil med servostyrning {#car-with-servo-steering}

Instrumentpanel: **JOY1** (Endast vertikalt (Y)) till vänster, **JOY2** (Endast horisontellt (X)) till höger, **BTN1** och en monitor av typen **Batterinivå**.

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | JOY1, Y-axel | Dödzon 10 %, Mjuk 0,5 s | Motor | Technic Hub, portar A + B |
| 2 | JOY2, X-axel | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Växla | Ljus | Technic Hub, port C |
| 4 | Hubb: Batteri | | | Indikator: Batterinivå |

Om en av drivmotorerna snurrar åt fel håll delar du rad 1 i två rader och lägger till **Invertera** i den ena.

## Bil med ratt, pedaler och växellåda {#car-with-a-wheel-pedals-and-a-gearbox}

Instrumentpanel: en **Ratt**, **Pedaler**, en **Växelspak**, en **Handbroms** och **Blinkers**. Ingången [Fordon](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) gör om pedalerna, växellådan och handbromsen till en hastighet som byggs upp och avtar som i en riktig bil.

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | Fordon: Hastighet | | Motor | Technic Hub, portar A + B |
| 2 | Ratt: Rattvinkel | | Servo (Auto) | Technic Hub, port D |
| 3 | Fordon: Bromsning | | Ljus | Technic Hub, port C (bromsljus) |
| 4 | Blinkers: Vänster blinker | | Ljus | City Hub, port A |
| 5 | Blinkers: Höger blinker | | Ljus | City Hub, port B |

## Stridsvagn (två band) {#tank-two-tracks}

Instrumentpanel: två vertikala skjutreglage **VSLDR1** och **VSLDR2** med **Återställ till noll** och **Negativa värden** påslagna.

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | VSLDR1 | Mjuk 0,25 s | Motor | Hubb, port A |
| 2 | VSLDR2 | Invertera, Mjuk 0,25 s | Motor | Hubb, port B |

Med en handkontroll använder du Vänster spak Y för rad 1 och Höger spak Y för rad 2.

## Kran {#crane}

Instrumentpanel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | DPAD1, Vänster / höger | Begränsa 50 % | Motor | Hubb, port A (svängning) |
| 2 | DPAD1, Upp / ner | | Motor | Hubb, port B (krokvinsch) |
| 3 | SLDR1 | Dödzon 10 % | Motor | Hubb, port C (bom) |
| 4 | SWCH1 | | Ljus (blink 0,5 s) | Hubb, port D (varningsljus) |

## Tåg {#train}

Instrumentpanel: en **Stegswitch** **STPR1** med **Negativa värden** (hastighetssteg framåt och bakåt) och **BTN1** för lamporna.

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | STPR1 | Mjuk 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Växla | Ljus | City Hub, port B |
| 3 | Hubb: Batteri | | | Indikator: Monitor |

Blocket Mjuk gör att tåget sätter igång och stannar som ett riktigt tåg. Med ett **tågreglage** på instrumentpanelen använder du det i rad 1 i stället för STPR1: det ger spakens läge, negativt i back.

## Technic Move-bil {#technic-move-car}

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | Fordon: Hastighet | | Motor | Technic Move (körning) |
| 2 | Ratt: Rattvinkel | | Servo | Technic Move (styrning) |
| 3 | BTN1 | Växla | Ljus | Technic Move (lampor) |
| 4 | BTN2 | | Boost | Technic Move |

Utan växelspak på instrumentpanelen backar bilen när du håller in bromspedalen vid stillastående.

## Prova i webbläsaren {#try-it-in-the-browser}

Demon av Snabbkopplingar på [mocpilot.com](https://mocpilot.com) har en exempelprofil med rader som dessa; se [Webbredigeraren](/docs/Introducing/WebEditor).
