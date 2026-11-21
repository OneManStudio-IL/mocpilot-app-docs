---
id: ControlProperties
title: Eigenschappen van bedieningselementen
description: "Wijzig de grootte, kleur, het pictogram, de stijl, de werking en het thema van een bedieningselement in de eigenschappen."
---

import Screenshot from '@site/src/components/Screenshot';

# Eigenschappen van bedieningselementen {#control-properties}

Tik (klik) in de bewerkingsmodus op een bedieningselement om de eigenschappen te openen.

- **Telefoon en tablet**: een paneel over het dashboard; tik ernaast om het te sluiten.
- **Computer**: een zijpaneel; je kunt op het dashboard verder werken terwijl het open is.

<Screenshot name="controller-properties" alt="Het eigenschappenpaneel met de tabbladen Stijl en Instellingen" width={900} />

De kop toont de naam van het bedieningselement (bijvoorbeeld **JOY1**), de prullenbakknop, het menu voor dupliceren en **OK**.

## Tabblad Stijl {#style-tab}

- **Grootte**: S, M of L. Zie [grootten](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Accentkleur**: de hoofdkleur van het bedieningselement.
- **Pictogram**: een afbeelding op het bedieningselement (knoppen, schakelaars, monitors), te kiezen uit meer dan 260 pictogrammen.
- **Uiterlijk**: de stijl van een [speciaal bedieningselement](/docs/Application/Dashboard/SpecialControls), bijvoorbeeld de vorm van een stuurwiel.
- Opties van het thema, afhankelijk van het thema: bijvoorbeeld **Gekleurde koolstof**, **Gekleurde randen** en **Toon race lijnen** in Racen, **Aantal indicatorsegmenten** in Bouwmachines, **Waarden weergeven** in Aura.
- **Thema wijzigen**: zet het bedieningselement over op een ander thema dat je bezit en dat dezelfde soort bedieningselement heeft.

## Tabblad Instellingen {#settings-tab}

Algemene instellingen:

- **Lock de controller**: een vergrendeld bedieningselement kan niet worden verplaatst of verwijderd.
- **Interactiviteit**: een niet-interactief bedieningselement registreert geen aanrakingen.

Instellingen per soort:

| Bedieningselement | Instellingen |
|---|---|
| Joystick | **As-type**: Beide assen (X, Y), Alleen horizontaal (X), Alleen verticaal (Y) |
| Schuifregelaar, Ver. schuifregelaar | **Terug naar nul**, **Negatieve waarden**, **Stapwaarde** |
| Draaiknop | **Klikstappen (0 = traploos)** (0–24), **Nul in het midden (-100..100)** |
| Stappenschakelaar, Ver. stappenschakelaar | **Aantal stappen** (1–100), **Negatieve waarden**, **Reset inschakelen** |
| Monitor | **Tekstindeling**, **Tekstoverloop**, **Maximaal aantal regels**, **Scrollrichting**, **Scrollsnelheid**, **Scrollbar tonen**, **Interactief scrollen**, **Tekstuitlijning**, **Tekstschaal** |
| Kantelmonitor | **Kantel omkeren**, **Rol omkeren** |
| Stuurwiel | **Stuurhoek** (20–120°), **Geluidseffecten** |
| Pedalen | **Geluidseffecten** |
| Handgeschakelde bak | **Aantal versnellingen** (2–6) |
| Automatische bak | **Aantal versnellingen** (2–8) |
| Richtingaanwijzers | **Uitgangen van de richtingaanwijzers knipperen**; op het tabblad Stijl **Pictogram: left**, **Pictogram: light**, **Pictogram: right** |

Getalinstellingen hebben een knop **Resetten** die de standaardwaarde terugzet.

## Eigenschappen wijzigen vanuit het programma {#change-properties-from-the-program}

Bij Logicablokken kunnen blokken een bedieningselement wijzigen terwijl het programma loopt: de kleur instellen, de interactiviteit aan- of uitzetten, waarden op monitors tonen. Zie [Blokken voor dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
