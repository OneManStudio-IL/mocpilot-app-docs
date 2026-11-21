---
id: ControlTypes
title: Soorten bedieningselementen
description: "Joystick, richtingspad, schuifregelaars, draaiknop, knoppen, schakelaars, stappenschakelaars, monitors en speciale bedieningselementen."
---

# Soorten bedieningselementen {#control-types}

Elk [thema](/docs/Application/Themes/ThemesOverview) tekent dezelfde set soorten bedieningselementen in een eigen stijl. Het gratis thema **Basis** heeft er negen; elk betaald thema voegt de **Draaiknop** en drie grafische monitors toe. Stuurwielen, pedalen, versnellingspoken en de andere [speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls) zijn aparte producten.

| Bedieningselement | Naam op het dashboard | Geeft het programma | Beschikbaar in |
|---|---|---|---|
| Joystick | JOY | X- en Y-as | alle thema's |
| Richtingspad | DPAD | knoppen omhoog / omlaag / links / rechts | alle thema's |
| Schuifregelaar | SLDR | een waarde | alle thema's |
| Ver. schuifregelaar | VSLDR | een waarde | alle thema's |
| Draaiknop | DIAL | een waarde | betaalde thema's |
| Knop | BTN | ingedrukt / losgelaten | alle thema's |
| Schakelaar | SWCH | aan / uit | alle thema's |
| Stappenschakelaar | STPR | een stapnummer | alle thema's |
| Ver. stappenschakelaar | VSTPR | een stapnummer | alle thema's |
| Monitor | MNTR | toont tekst of een waarde | alle thema's |
| Batterijniveau | MNTBT | toont een niveau | betaalde thema's |
| Snelheidsmeter | MNTSP | toont een snelheid | betaalde thema's |
| Kantelmonitor | MNTLT | toont kanteling en rolling | betaalde thema's |
| Stuurwiel, pedalen, versnellingsbakken, handrem, richtingaanwijzers, treinregelaar | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | zie [Speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls) | speciale producten |

De naam op het dashboard krijgt een nummer: de eerste joystick is **JOY1**, de tweede **JOY2**.

## Joystick {#joystick}

Een stick die terugveert naar het midden. Hij geeft een **X**-waarde (links/rechts) en een **Y**-waarde (omhoog/omlaag); het midden is nul.

- **As-type**: **Beide assen (X, Y)**, **Alleen horizontaal (X)** of **Alleen verticaal (Y)**. Een joystick met één as is makkelijker als hij alleen rijdt of alleen stuurt.
- Typisch gebruik: Y om te rijden en X om te sturen, of één joystick per rups van een tank.

## Richtingspad {#directional-pad}

Vier knoppen: omhoog, omlaag, links en rechts. Elke knop is ingedrukt of losgelaten. Bij Snelle koppelingen geeft een as van het richtingspad −1, 0 of +1 (**Omhoog / omlaag** of **Links / rechts**), handig voor stapsgewijze bewegingen zoals een kraanhaak.

## Schuifregelaar en Ver. schuifregelaar {#slider-and-ver-slider}

Een schuif die langs een horizontale of verticale baan beweegt.

- **Terug naar nul**: de schuif veert terug als je loslaat (zoals een gashendel), in plaats van te blijven staan waar je hem laat (zoals de snelheidsinstelling van een trein).
- **Negatieve waarden**: nul ligt in het midden, zodat de schuifregelaar negatieve en positieve waarden geeft (achteruit en vooruit).
- **Stapwaarde**: de schuifregelaar beweegt in stappen.

## Draaiknop {#rotary-knob}

Een ronde knop, zoals een volumeknop, in de groep **Schuifregelaars** van elk betaald thema. Draai hem met één vinger rond het midden: hij draait ongeveer 135° naar elke kant en blijft staan waar je hem laat.

- **Klikstappen (0 = traploos)** (0–24): met stappen klikt de knop van de ene stand naar de volgende.
- **Nul in het midden (-100..100)**: de knop geeft −100 tot 100 met nul in het midden, in plaats van 0 tot 100.
- Blokken: *wanneer draaiknop … is gedraaid / ingedrukt / losgelaten / naar minimum gedraaid / naar maximum gedraaid*, *waarde van draaiknop …*, *is draaiknop … ingedrukt / op minimum / op maximum?* Zie [Dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- Bij Snelle koppelingen werkt de knop als een [schuifregelaar](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Het thema Basis heeft geen draaiknop. Omdat elk betaald thema er een heeft, zet **Thema wijzigen** een knop over op de stijl van een ander thema.

## Knop {#button}

Ingedrukt zolang je hem vasthoudt, losgelaten als je loslaat. Gebruik hem voor een claxon of een korte beweging, of bij Snelle koppelingen met het blok **Wisselen** om iets aan en uit te zetten.

## Schakelaar {#switch}

Blijft aan of uit: tik erop om te wisselen. Gebruik hem voor lampen, modi of een lierblokkering.

## Stappenschakelaar en Ver. stappenschakelaar {#step-switch-and-ver-step-switch}

Een bedieningselement met **−** / **+** dat stappen telt, zoals versnellingen of de snelheidsstanden van een trein.

- **Aantal stappen**: 1 tot 100 (standaard 10).
- **Negatieve waarden**: staat stappen onder nul toe (achteruitstanden).
- **Reset inschakelen**: als je op de waarde tikt, gaat die terug naar nul.

## Monitor {#monitor}

Toont tekst of een getal uit het programma: snelheid, batterij, de naam van een modus, een sensorwaarde.

- **Tekstindeling** (één of meerdere regels), **Tekstoverloop** (Afkappen, Teruglopen, Lichtkrant, Scrollen), **Maximaal aantal regels**, scrollopties, **Tekstuitlijning** en **Tekstschaal**.

## Batterijniveau, Snelheidsmeter, Kantelmonitor {#battery-level-speedometer-tilt-monitor}

Grafische indicatoren in de betaalde thema's. Het programma stelt hun waarde in: de batterij van een hub, de snelheid van een motor, de kanteling van een hub. **Kantelmonitor** heeft **Kantel omkeren** en **Rol omkeren**. Zie [Indicatoren en monitors](/docs/Application/Dashboard/Indicators).

## Speciale bedieningselementen {#special-controls}

Een stuurwiel, pedalen, een handgeschakelde of automatische versnellingsbak, een handrem, een richtingaanwijzerhendel en een treinregelaar. Elk is een apart product met veel stijlen. Zie [Speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls).

## Interactiviteit {#interactivity}

Elk interactief bedieningselement heeft **Interactiviteit** (standaard aan). Een niet-interactief bedieningselement reageert niet op aanrakingen. Het programma kan de interactiviteit aan- en uitzetten, bijvoorbeeld om het gas te blokkeren tot een opstartcontrole klaar is.
