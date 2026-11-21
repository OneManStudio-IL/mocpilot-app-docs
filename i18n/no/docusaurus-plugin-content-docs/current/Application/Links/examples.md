---
id: Examples
title: "Eksempler: bil, stridsvogn, kran, tog"
description: "Ferdige oppskrifter i Hurtigkoblinger for en bil, en stridsvogn, en kran og et tog."
---

# Eksempler {#examples}

Ferdige oppskrifter. Legg først kontrollene på dashboardet og hubbene i Mine hubber, og bygg deretter radene.

## Bil med servostyring {#car-with-servo-steering}

Dashboard: **JOY1** (Bare vertikal) til venstre, **JOY2** (Bare horisontal) til høyre, **BTN1** og en **Batterinivå**-monitor.

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | JOY1, Y-akse | Dødsone 10 %, Myk 0,5 s | Motor | Technic Hub, porter A + B |
| 2 | JOY2, X-akse | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Veksle | Lys | Technic Hub, port C |
| 4 | Hub: Batteri | | | Indikator: Batterinivå |

Hvis den ene drivmotoren går feil vei, deler du rad 1 i to rader og legger til **Inverter** i den ene.

## Bil med ratt, pedaler og girkasse {#car-with-a-wheel-pedals-and-a-gearbox}

Dashboard: et **Ratt**, **Pedaler**, en **Girspak**, et **Handbrekk** og **Blinklys**. Inngangen [Kjøretøy](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) gjør pedalene, girkassen og handbrekket om til en fart som bygger seg opp og avtar som i en ekte bil.

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | Kjøretøy: Hastighet | | Motor | Technic Hub, porter A + B |
| 2 | Ratt: Rattvinkel | | Servo (Auto) | Technic Hub, port D |
| 3 | Kjøretøy: Bremser | | Lys | Technic Hub, port C (bremselys) |
| 4 | Blinklys: Venstre blinklys | | Lys | City Hub, port A |
| 5 | Blinklys: Høyre blinklys | | Lys | City Hub, port B |

## Stridsvogn (to belter) {#tank-two-tracks}

Dashboard: to loddrette skyveknapper **VSLDR1** og **VSLDR2** med **Tilbake til null** og **Negative verdier** slått på.

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | VSLDR1 | Myk 0,25 s | Motor | Hub, port A |
| 2 | VSLDR2 | Inverter, Myk 0,25 s | Motor | Hub, port B |

Med spillkontroller bruker du Venstre stikke Y for rad 1 og Høyre stikke Y for rad 2.

## Kran {#crane}

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | DPAD1, Venstre / høyre | Begrens 50 % | Motor | Hub, port A (svinging) |
| 2 | DPAD1, Opp / ned | | Motor | Hub, port B (krokvinsj) |
| 3 | SLDR1 | Dødsone 10 % | Motor | Hub, port C (bom) |
| 4 | SWCH1 | | Lys (blink 0,5 s) | Hub, port D (varsellys) |

## Tog {#train}

Dashboard: en **Trinnbryter** **STPR1** med **Negative verdier** (fartstrinn forover og bakover) og **BTN1** for lysene.

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | STPR1 | Myk 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Veksle | Lys | City Hub, port B |
| 3 | Hub: Batteri | | | Indikator: Monitor |

Myk-blokken får toget til å kjøre av gårde og stoppe som et ekte tog. Har du en **kjørekontroller** på dashboardet, bruker du den i rad 1 i stedet for STPR1: den gir spakens posisjon, negativ i revers.

## Technic Move-bil {#technic-move-car}

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | Kjøretøy: Hastighet | | Motor | Technic Move (kjøring) |
| 2 | Ratt: Rattvinkel | | Servo | Technic Move (styring) |
| 3 | BTN1 | Veksle | Lys | Technic Move (lys) |
| 4 | BTN2 | | Boost | Technic Move |

Uten girspak på dashboardet rygger bilen når du holder bremsepedalen inne mens den står stille.

## Prøv i nettleseren {#try-it-in-the-browser}

Demoen av Hurtigkoblinger på [mocpilot.com](https://mocpilot.com) har en eksempelprofil med rader som disse; se [Nettredigering](/docs/Introducing/WebEditor).
