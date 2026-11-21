---
id: ArrangingControls
title: Tilføj og arrangér kontroller
description: "Tilføj kontroller fra paletten, flyt dem og ændr deres størrelse, dupliker, lås og slet dem."
---

import Screenshot from '@site/src/components/Screenshot';

# Tilføj og arrangér kontroller {#add-and-arrange-controls}

## Tilføj en kontrol {#add-a-control}

1. Tryk på **+** (**Tilføj controller**) på dashboardet. På en computer åbnes paletten i sit eget vindue.
2. Vælg en kontroltype på listen. Typerne er grupperet: **Joysticks**, **Skyder**, **Knapper og kontakter**, **Skærme**, derefter **Køretøj og special** for [specialkontrollerne](/docs/Application/Dashboard/SpecialControls) og **Mine designs** for de designs, du har gemt. Skriv i **Søg i kontroller** for hurtigt at finde en kontrol.
3. Stribe med udseender viser den valgte type i alle [temaer](/docs/Application/Themes/ThemesOverview) (for en specialkontrol alle dens udseender). Tryk på et udseende for at se det i den store forhåndsvisning; du kan prøve det lige der.
4. Indstil kontrollen under **Konfigurer**: fanerne **Stil** og **Indstillinger** og størrelsen.
5. Tryk på **Føj til dashboard**. På en computer kan du tilføje flere kontroller i træk.

<Screenshot name="controller-palette" alt="Paletten Tilføj controller" width={900} />

Kontrollen placeres i det første ledige område og får mærket **NY**. Hvis der ikke er plads, fortæller MOCPilot dig det: skab lidt plads, eller vælg en mindre størrelse.

Kontroller fra temaer, du ikke ejer, viser **Køb** og **Alt med MocPilot Pro** i stedet for **Føj til dashboard**. Se [Få, køb og opdater temaer](/docs/Application/Themes/GettingThemes).

## Flyt {#move}

I redigeringstilstand trykker du på en kontrol og trækker den. Når du slipper den, klikker den på plads i den nærmeste gittercelle. Hvis den ville overlappe en anden kontrol, springer den tilbage.

## Størrelser {#sizes}

Alle kontroller har tre størrelser: **S**, **M** og **L**. Skift den med **Størrelse** i kontrollens egenskaber. Størrelser i gitterceller (bredde × højde):

| Kontrol | S | M | L |
|---|---|---|---|
| Joystick, Retningspad | 7×7 | 10×10 | 13×13 |
| Skyder | 10×3 | 14×4 | 18×5 |
| Ver. skyder | 3×10 | 4×14 | 5×18 |
| Drejeknap | 6×6 | 8×8 | 10×10 |
| Knap, Kontakt | 3×3 | 4×4 | 5×5 |
| Trinkontakt | 8×3 | 12×4 | 16×5 |
| Ver. trinkontakt | 3×8 | 4×12 | 5×16 |
| Skærm | 4×2 | 6×2 | 8×3 |
| Batteriniveau, Fartmåler | 6×6 | 8×8 | 10×10 |
| Tilt skærm | 8×4 | 12×6 | 16×8 |
| Rat | 8×8 | 12×12 | 16×16 |
| Pedaler | 11×8 | 16×12 | 21×16 |
| Manuel gearkasse, Automatisk gearkasse | 8×8 | 10×10 | 12×12 |
| Håndbremse | 4×7 | 6×10 | 8×13 |
| Blinklys | 8×5 | 10×6 | 14×8 |
| Togkontrol | 6×8 | 8×10 | 10×13 |

Hele feltet er 40 × 20 celler. Hvis en større størrelse ikke kan være der, så flyt naboerne først.

## Vælg og rediger {#select-and-edit}

Tryk (klik) på en kontrol for at vælge den og åbne dens **egenskaber**. Se [Kontrollens egenskaber](/docs/Application/Dashboard/ControlProperties).

## Genvejsmenu {#context-menu}

Tryk længe (touchskærm), eller højreklik (computer) på en kontrol:

- **Lås** / **Lås op**
- **Egenskaber**
- **Skift tema**: skift kontrollen til et andet tema, du ejer, som har samme kontroltype
- **Dupliker**: en kopi med de samme egenskaber
- **Dupliker (kun type)**: en ny kontrol af samme type med standardegenskaber
- **Slet**

Tryk længe, eller højreklik på en tom del af feltet:

- **Lås alle** / **Lås op for alle**
- **Slet N controller(e)**: sletter alle ulåste kontroller

På en computer med egenskabspanelet åbent: **Esc** lukker det, **Delete** / **Backspace** sletter kontrollen, **⌘D / Ctrl+D** duplikerer den.

## Lås kontroller {#lock-controls}

En **låst** kontrol kan ikke flyttes eller slettes, så du ikke kommer til at skubbe den ud af position, mens du kører eller redigerer. Den viser et låseikon. Lås én kontrol fra dens menu eller med **Lås controlleren** i dens indstillinger, eller lås det hele med **Lås alle**.

## Kontrollernes navne {#control-names}

Hver kontrol har et kort navn, der vises på dens ramme i redigeringstilstand, for eksempel **JOY1**, **SLDR2** eller **BTN1**. Programmet henviser til kontrollerne med disse navne: i Hurtige forbindelser står der *JOY1* på inputblokken, og i Logikblokke vælger du *JOY1* i blokkens menu.

## Slet {#delete}

Brug **Slet** i menuen eller skraldespandsknappen i egenskaberne. Låste kontroller kan ikke slettes. En kontrol, som programmet bruger, kan ikke slettes, før du fjerner dens rækker eller blokke.
