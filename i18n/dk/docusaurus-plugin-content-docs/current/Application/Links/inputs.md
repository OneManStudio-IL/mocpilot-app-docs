---
id: Inputs
title: Input
description: "Input i Hurtige forbindelser: dashboardets kontroller, det simulerede køretøj, spilcontrolleren samt hubbens knapper og sensorer."
---

import Screenshot from '@site/src/components/Screenshot';

# Input {#inputs}

Hver række starter med et input. Fanen **Input** i paletten indeholder:

- én blok for hver **kontrol på dashboardet**; kontroller med flere kanaler (joystick- og retningspadakser, rat, pedaler, gearstang, håndbremse, blinklys) får én blok pr. kanal;
- blokkene **Køretøj**, når dashboardet har pedaler, en gearstang eller en håndbremse;
- blokken **Spilcontroller**, når spilcontrollerblokkene er slået til;
- én **Hub**-blok for hver hub i profilen (undtagen Mould King, som ikke har knapper eller sensorer).

Er fanen tom, står der »Tilføj controllere på dashboardet eller hubs under Mine hubs: de vises her«.

<Screenshot name="links-palette-inputs" alt="Fanen Input i paletten i Hurtige forbindelser" width={900} />

Alle indstillinger og værdier for hvert input findes i oversigten [Inputblokke](/docs/Application/Links/Blocks/InputBlocks).

## Kontroller på dashboardet {#dashboard-controls}

En [Controller](/docs/Application/Links/Blocks/InputBlocks#src-controller)-blok henter en kontrol fra dit dashboard ud fra dens navn (**JOY1**, **SLDR1**, **BTN2**…) og, hvis kontrollen har flere, den **Kanal**, du ønsker:

| Kontrol | Hvad rækken får |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-akse** eller **Y-akse**, −1…1 |
| [Skyder](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [køreregulator](/docs/Application/Links/Blocks/InputBlocks#controller-train), [drejeknap](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | dens position |
| [Rat](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Styrevinkel** −1…1 eller **Horn** |
| [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Speederpedal** eller **Bremsepedal**, 0…1 |
| [Gearstang](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Gear** eller **Retning (R − / frem +)** |
| [Håndbremse](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Håndbremse låst** (til/fra) eller **Håndbremsekraft** |
| [Blinklys](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Blinklys (venstre − / højre +)**, **Venstre blinklys**, **Højre blinklys** eller **Lys** |
| [Retningspad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Op / ned** eller **Venstre / højre**: −1, 0 eller +1 |
| [Knap](/docs/Application/Links/Blocks/InputBlocks#controller-button) | til, så længe den holdes nede |
| [Kontakt](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | til / fra |
| [Trinkontakt](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | det aktuelle trin |

Når du tilføjer, omdøber eller ændrer en kontrol på dashboardet, følger paletten og rækkerne automatisk med. Sætter du et joystick til **Kun vandret (X)**, melder rækker, der bruger dets Y-akse, »… bevæger sig ikke langs denne akse«.

## Kør som en rigtig bil {#drive-like-a-real-car}

Rattet, pedalerne, gearstangen og håndbremsen giver deres rå positioner: En pedalrække kører motoren præcis så meget, som pedalen er trådt ned. Til en model, der opfører sig som en bil (den accelererer med inerti, ruller frit, bremser og bakker i R), bruger du i stedet inputtet [Køretøj](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Det læser pedalerne, gearstangen og håndbremsen samlet og giver køretøjets **Hastighed**, **Motoromdrejninger (rpm)**, **Bremser** eller **På håndbremsen**:

- *Køretøj (Hastighed)* → *Motor* → drivmotorer;
- *Rat (Styrevinkel)* → *Servo* → styring;
- *Køretøj (Bremser)* → *Lys* → bremselys;
- *Blinklys (Venstre blinklys)* → *Lys* → venstre blinklygte.

## Spilcontroller {#gamepad}

Én [Spilcontroller](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)-blok dækker hele controlleren; vælg en stick, en aftrækker eller en knap under **Input**. Slå først **Aktivér gamepad-blokke** til på [siden Spilcontroller](/docs/Application/Dashboard/Gamepad). Betegnelserne følger **Gamepad-knaplayout** (Xbox eller PlayStation).

## Hubbens knapper og sensorer {#hub-buttons-and-sensors}

Et [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub)-input læser hubbens knap eller en af dens sensorer: batteri, hældning, acceleration, motorens hastighed og position, afstands- og farvesensorer på portene og mere. Listen viser kun det, den pågældende hub kan rapportere. Ved hældning og acceleration skal du indstille **Hubbens orientering**, så den svarer til, hvordan hubben sidder i modellen.

Værdien sendes videre i rækken skaleret til −1…1. En tekst-**Monitor** lige efter en sensor viser den rigtige værdi med enhed, for eksempel »7.85 V« eller »−12°«.

Typiske anvendelser:

- *Batteri* → *Indikator* (Batteriniveau);
- *Afstandssensor* → *Tærskel* (Under, 20 %) → *Motor i tid*: bak, når noget kommer for tæt på;
- *Knap 1* (Powered Up-fjernbetjening) → *Motor*: kør med den fysiske fjernbetjening.
