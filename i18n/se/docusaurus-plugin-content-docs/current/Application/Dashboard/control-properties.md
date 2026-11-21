---
id: ControlProperties
title: Kontrollens egenskaper
description: "Ändra en kontrolls storlek, färg, ikon, utseende, beteende och tema i dess egenskaper."
---

import Screenshot from '@site/src/components/Screenshot';

# Kontrollens egenskaper

I redigeringsläget trycker (klickar) du på en kontroll för att öppna dess egenskaper.

- **Telefon och surfplatta**: en panel ovanpå instrumentpanelen; tryck utanför den för att stänga den.
- **Dator**: en sidopanel; du kan fortsätta arbeta på instrumentpanelen medan den är öppen.

<Screenshot name="controller-properties" alt="Panelen med kontrollens egenskaper och flikarna Stil och Inställningar" width={900} />

Sidhuvudet visar kontrollens namn (till exempel **JOY1**), papperskorgsknappen, dupliceringsmenyn och **OK**.

## Fliken Stil {#style-tab}

- **Storlek**: S, M eller L. Se [storlekar](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Accentfärg**: kontrollens huvudfärg.
- **Ikon**: en bild på kontrollen (knappar, brytare, monitorer), vald bland fler än 260 ikoner.
- **Utseende**: utseendet på en [specialkontroll](/docs/Application/Dashboard/SpecialControls), till exempel stilen på en ratt.
- Temaalternativ, beroende på tema: till exempel **Färgad kol**, **Färgade ramar** och **Visa race lines** i Racing, **Antal indikatorsegment** i Byggmaskiner, **Visa värden** i Aura.
- **Ändra tema**: byter kontrollen till ett annat tema som du äger och som har samma kontrolltyp.

## Fliken Inställningar {#settings-tab}

Gemensamma inställningar:

- **Lås kontrollern**: en låst kontroll kan inte flyttas eller tas bort.
- **Interaktivitet**: en icke-interaktiv kontroll registrerar inga tryck.

Inställningar för varje typ:

| Kontroll | Inställningar |
|---|---|
| Joystick | **Axeltyp**: Båda axlarna (X, Y), Endast horisontellt (X), Endast vertikalt (Y) |
| Skjutreglage, Ver. reglage | **Återställ till noll**, **Negativa värden**, **Stegvärde** |
| Vridratt | **Klicksteg (0 = steglöst)** (0–24), **Noll i mitten (-100..100)** |
| Stegswitch, Ver. stegswitch | **Antal steg** (1–100), **Negativa värden**, **Aktivera återställning** |
| Monitor | **Textlayout**, **Textöverflöd**, **Max antal rader**, **Rullningsriktning**, **Rullningshastighet**, **Visa rullningslist**, **Interaktiv rullning**, **Textjustering**, **Textskala** |
| Lutningsmonitor | **Invertiera lutning**, **Invertiera rullning** |
| Ratt | **Styrvinkelsvinkel** (20–120°), **Ljud effekter** |
| Pedaler | **Ljud effekter** |
| Manuell växellåda | **Antal växlar** (2–6) |
| Automatisk växellåda | **Antal växlar** (2–8) |
| Blinkers | **Blinkerutgångarna blinkar**; på fliken Stil **Ikon: left**, **Ikon: light**, **Ikon: right** |

Numeriska inställningar har knappen **Återställ**, som återställer standardvärdet.

## Ändra egenskaper från programmet {#change-properties-from-the-program}

I Logikblock kan block ändra en kontroll medan programmet körs: ställa in dess färg, slå på eller av dess interaktivitet, visa värden på monitorer. Se [Block för instrumentpanelens kontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
