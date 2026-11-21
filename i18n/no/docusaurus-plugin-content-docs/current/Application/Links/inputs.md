---
id: Inputs
title: Innganger
description: "Innganger i Hurtigkoblinger: kontroller på dashboardet, det simulerte kjøretøyet, spillkontrolleren, knapper og sensorer på huben."
---

import Screenshot from '@site/src/components/Screenshot';

# Innganger {#inputs}

Hver rad starter med en inngang. Fanen **Innganger** i paletten viser:

- én blokk per **kontroll på dashboardet**; kontroller med flere kanaler (akser på joystick og D-pad, ratt, pedaler, girspak, handbrekk, blinklys) får én blokk per kanal;
- **Kjøretøy**-blokkene, når dashboardet har pedaler, girspak eller handbrekk;
- **Spillkontroller**-blokken, når gamepad-blokkene er slått på;
- én **Hub**-blokk per hub i profilen (unntatt Mould King, som ikke har knapper eller sensorer).

Hvis fanen er tom, står det «Legg til kontrollere på dashboardet eller hubber i Mine hubber: de vises her».

<Screenshot name="links-palette-inputs" alt="Fanen Innganger i paletten i Hurtigkoblinger" width={900} />

Alle innstillinger og verdier for hver inngang står i referansen [Inngangsblokker](/docs/Application/Links/Blocks/InputBlocks).

## Kontroller på dashboardet {#dashboard-controls}

En [Kontroller](/docs/Application/Links/Blocks/InputBlocks#src-controller)-blokk henter en kontroll fra dashboardet etter navnet (**JOY1**, **SLDR1**, **BTN2**…) og, hvis kontrollen har flere, **Kanal** du vil bruke:

| Kontroll | Hva raden får |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-akse** eller **Y-akse**, −1…1 |
| [Skyveknapp](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [kjørekontroller](/docs/Application/Links/Blocks/InputBlocks#controller-train), [dreieknapp](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | posisjonen |
| [Ratt](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Rattvinkel** −1…1 eller **Horn** |
| [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Gasspedal** eller **Bremsepedal**, 0…1 |
| [Girspak](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Gir** eller **Retning (R − / forover +)** |
| [Handbrekk](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Handbrekk låst** (av/på) eller **Handbrekkraft** |
| [Blinklys](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Blinklys (venstre − / høyre +)**, **Venstre blinklys**, **Høyre blinklys** eller **Lys** |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Opp / ned** eller **Venstre / høyre**: −1, 0 eller +1 |
| [Knapp](/docs/Application/Links/Blocks/InputBlocks#controller-button) | på mens den holdes inne |
| [Bryter](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | på / av |
| [Trinnbryter](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | gjeldende trinn |

Når du legger til, gir nytt navn til eller endrer en kontroll på dashboardet, følger paletten og radene med automatisk. Hvis du stiller en joystick til **Bare horisontal**, rapporterer rader som bruker Y-aksen, «… beveger seg ikke langs denne aksen».

## Kjør som en ekte bil {#drive-like-a-real-car}

Ratt, pedaler, girspak og handbrekk gir de rå posisjonene sine: en pedalrad kjører motoren nøyaktig så langt som pedalen er trykket inn. For en modell som oppfører seg som en bil (den akselererer med treghet, ruller fritt, bremser og rygger i R), bruker du i stedet inngangen [Kjøretøy](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Den leser pedalene, girspaken og handbrekket samlet og gir kjøretøyets **Hastighet**, **Turtall (o/min)**, **Bremser** eller **På handbrekket**:

- *Kjøretøy (Hastighet)* → *Motor* → drivmotorer;
- *Ratt (Rattvinkel)* → *Servo* → styring;
- *Kjøretøy (Bremser)* → *Lys* → bremselys;
- *Blinklys (Venstre blinklys)* → *Lys* → venstre blinklyspære.

## Spillkontroller {#gamepad}

Én [Spillkontroller](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)-blokk dekker hele kontrolleren; velg en spak, avtrekker eller knapp i **Inngang**. Slå først på **Aktiver gamepad-blokker** på [siden Spillkontroller](/docs/Application/Dashboard/Gamepad). Etikettene følger **Gamepad-knappeoppsett** (Xbox eller PlayStation).

## Knapper og sensorer på huben {#hub-buttons-and-sensors}

En [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub)-inngang leser knappen på en hub eller en av sensorene: batteri, helning, akselerasjon, motorhastighet og -posisjon, avstands- og fargesensorer på portene og mer. Listen viser bare det den aktuelle huben kan rapportere. For helning og akselerasjon stiller du inn **Huborientering** slik at det passer med hvordan huben sitter i modellen.

Verdien går videre langs raden skalert til −1…1. En tekst-**Monitor** rett etter en sensor viser den faktiske verdien med enhet, for eksempel «7,85 V» eller «−12°».

Typiske bruksområder:

- *Batteri* → *Indikator* (Batterinivå);
- *Avstandssensor* → *Terskel* (Under, 20 %) → *Motor i en tid*: rygg unna når noe kommer nær;
- *Knapp 1* (Powered Up-fjernkontroll) → *Motor*: kjør med den fysiske fjernkontrollen.
