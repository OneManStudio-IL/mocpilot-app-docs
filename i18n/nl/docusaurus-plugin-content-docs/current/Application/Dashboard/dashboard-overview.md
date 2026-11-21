---
id: DashboardOverview
title: Dashboard-editor
description: "Het MOCPilot-dashboard: het veld, het raster, de werkbalk, de achtergrond en ongedaan maken."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-editor {#dashboard-editor}

Het **dashboard** is het scherm waarmee je je model bestuurt: joysticks, schuifregelaars, knoppen, monitors en andere bedieningselementen. Elk profiel heeft één dashboard.

Open het met de knop **Dashboard** in de editor (⌘2 / Ctrl+2 op een computer).

- **Telefoon en tablet**: het dashboard opent schermvullend over de editor.
- **Computer**: het dashboard opent in een eigen venster **Dashboard**, zodat je het naast het programma kunt houden.
- **Webeditor**: een zwevend paneel dat je kunt verslepen en van grootte kunt veranderen.

<Screenshot name="dashboard-edit" alt="Het dashboard in de bewerkingsmodus met het puntraster" width={900} />

## Het veld en het raster {#the-field-and-the-grid}

- Het veld heeft altijd de verhouding **2:1** en past op het scherm, zodat een dashboard er op een telefoon, tablet en computer hetzelfde uitziet.
- In de bewerkingsmodus wordt een **puntraster** van 40 × 20 cellen getoond. Bedieningselementen klikken vast op het raster.
- Bedieningselementen kunnen elkaar niet overlappen. Past een bedieningselement niet, dan gaat het terug naar waar het was.

## Werkbalk {#toolbar}

| Knop | Wat hij doet |
|---|---|
| ← | terug naar de programma-editor |
| Ongedaan maken / Opnieuw | wijzigingen aan het dashboard ongedaan maken en opnieuw uitvoeren |
| **+** (Controller toevoegen) | opent het palet met bedieningselementen; zie [Bedieningselementen toevoegen en schikken](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Dashboardinstellingen) | opties voor achtergrond en raster (hieronder) |
| ▶ / ■ | **Start** / **Stop**: het programma starten en stoppen |

Op een computer heeft het venster Dashboard ook menu's: **Bestand** (Profiel sluiten, Openen in apart venster, Dashboardinstellingen…), **Bewerken** (Ongedaan maken, Opnieuw, Controller toevoegen…) en **Weergave** (Blokken ⌘1, Dashboard ⌘2).

Terwijl het programma loopt, zijn de bewerkingsknoppen verborgen.

## Ongedaan maken en opnieuw {#undo-and-redo}

Het dashboard heeft een eigen geschiedenis, los van het programma. Je kunt elke verplaatsing, grootteverandering, eigenschapswijziging, toevoeging en verwijdering ongedaan maken.

## Dashboardinstellingen {#dashboard-settings}

**Achtergrondafbeelding**: tik op **Wijzigen** en kies:

- **Kant-en-klaar kiezen**: een kant-en-klare achtergrond die bij een thema hoort. De galerij toont de achtergronden van de thema's waarvan bedieningselementen op dit dashboard staan. Een kant-en-klare achtergrond vult altijd het scherm rond het veld, dus de opties hieronder gelden er niet voor.
- **Eigen uploaden**: een willekeurige afbeelding van je apparaat. Die wordt in het profiel opgeslagen.

**Verwijderen** wist de achtergrond.

<Screenshot name="dashboard-backgrounds" alt="Dashboardinstellingen met de galerij van kant-en-klare achtergronden" width={900} />

Voor je eigen afbeelding kun je ook instellen:

- **Afbeeldingsvulmodus**: Uitrekken, Verhouding behouden en passend maken, Verhouding behouden en bijsnijden, Tegelen, Verticaal tegelen, Horizontaal tegelen of Opvullen.
- **Bovenliggend afbeeldingsgebied**: **Werkgebied** (alleen het veld) of **Hele scherm**.
- **Afbeeldingsdekking**, **Afbeeldingsvervaging inschakelen** en **Vervagingswaarde**: maak de achtergrond rustiger zodat de bedieningselementen beter opvallen.

**Punten verbergen**: verbergt de rasterpunten terwijl het profiel loopt. In de bewerkingsmodus blijven de punten zichtbaar, zodat je de bedieningselementen nog kunt uitlijnen.

## Bedieningselementen en het programma {#controls-and-the-program}

Een bedieningselement geeft waarden; het programma bepaalt wat ermee gebeurt. Een bedieningselement dat het programma gebruikt, kan pas worden verwijderd als het programma het niet meer gebruikt. Verwijder bij Snelle koppelingen de rijen die het gebruiken; verwijder bij Logicablokken de blokken ervan.

## Meer lezen {#read-more}

- [Bedieningselementen toevoegen en schikken](/docs/Application/Dashboard/ArrangingControls): toevoegen, verplaatsen, grootten, vergrendelen
- [Soorten bedieningselementen](/docs/Application/Dashboard/ControlTypes)
- [Speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls): stuurwiel, pedalen, versnellingspook, handrem, richtingaanwijzers, treinregelaar
- [Eigenschappen van bedieningselementen](/docs/Application/Dashboard/ControlProperties)
- [Indicatoren en monitors](/docs/Application/Dashboard/Indicators)
