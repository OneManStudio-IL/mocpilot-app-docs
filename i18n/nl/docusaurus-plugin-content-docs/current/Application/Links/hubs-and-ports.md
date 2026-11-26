---
id: HubsAndPorts
title: Hub-blok en poorten
description: "Het Hub-blok in Snelle koppelingen, poorten kiezen, poortcontroles en de vraag of een poort al in gebruik is."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub-blok en poorten {#hub-block-and-ports}

De uitvoer [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) sluit een rij af na een bewerking. Er is één Hub-blok per hub in **Mijn hubs**, dus voeg je hubs daar eerst toe. Tot die tijd staat er op het tabblad “Voeg hubs toe in Mijn hubs of indicatoren op het dashboard: ze verschijnen hier”.

## Wat het Hub-blok toont {#what-the-hub-block-shows}

- de naam van de hub en een **verbindingsstip** (verbonden of niet);
- de **poorten** als chips: A, B, C, D… op LEGO®-hubs en SBrick (A–F op Robot Inventor en Mould King 6.0), 1–4 op BuWizz 2.0, 1–4 plus A en B op BuWizz 3.0 Pro;
- een ondertitel: “poorten A, B”, “poorten kiezen”, “hele hub” (na een bewerking voor de hele hub) of “rijden, sturen, lichten” (Technic Move in de modus **Autoprofiel**).

## Poorten kiezen {#choose-ports}

Tik op een poortchip om de poort te gebruiken; tik nog een keer om hem vrij te geven. Eén rij kan **meerdere poorten** tegelijk aansturen, bijvoorbeeld twee aandrijfmotoren op A en B.

Moeten twee motoren tegengesteld draaien? Maak twee rijen met dezelfde invoer en voeg aan een ervan **Omkeren** toe.

## Eén poort, één rij {#one-port-one-row}

Een poort hoort bij één rij. Kies je een poort die een andere rij al gebruikt, dan vraagt MOCPilot:

> **Poort is al in gebruik**: Op "Technic Hub" poort A wordt gebruikt in rij 2 (Motor). In deze rij gebruiken? De andere rij verliest deze poort en stuurt hem niet meer aan.

**In deze rij gebruiken** verplaatst de poort; **Annuleren** laat hem waar hij was. Een poort die door twee rijen wordt gebruikt (bijvoorbeeld in een oud bestand), wordt als probleem gemeld: “Poort A wordt ook gebruikt in rij 2”.

<Screenshot name="port-in-use" alt="Venster Poort is al in gebruik" width={700} />

## Poortcontroles {#port-checks}

Als de hub verbonden is, weet MOCPilot wat er op elke poort is aangesloten en controleert het of de bewerking past:

| Probleem | Betekenis |
|---|---|
| “Poort A: dit apparaat kan niet als servo werken (een motor met encoder is nodig)” | Servo en Draaien met graden hebben een motor met encoder nodig |
| “Poort A: de motor heeft geen absolute positie (alleen hoekmotoren)” | Naar positie gaan heeft een hoekmotor nodig |
| “Poort A heeft een sensor, geen motor” | het apparaat op de poort is een sensor |
| “Poort A accepteert alleen eenvoudige snelheidsopdrachten: geen positiebesturing” | deze poort kan geen posities regelen |
| “Poort A heeft geen LED: gebruik poorten 1-4” | Poortkleur werkt alleen op poort 1–4 van de BuWizz 3.0 Pro |
| “Sensorlichten: kies één poort, die met de afstandssensor” | Sensorlichten gebruikt precies één poort |
| “Poort A: daar zit geen kleursensor” | Kleursensorlampjes en de invoer voor kleurtint, kleurverzadiging en kleurhelderheid hebben een kleursensor op de poort nodig |

Bewerkingen die een hub niet kan uitvoeren, worden voor die hub niet aangeboden. Zet je een rij over op een andere hub, dan meldt de rij welke bewerking niet past, bijvoorbeeld “Remmen: alleen Technic Move (… heeft geen remopdracht)”.

## Technic Move Hub {#technic-move-hub}

De Technic Move Hub (in op afstand bestuurbare LEGO® Technic-auto's) kan op twee manieren worden aangestuurd. Kies er een met **Besturing** in het venster van het Hub-blok: **Autoprofiel** (standaard) of **Poorten**. De keuze hoort bij de hub, dus elk Hub-blok van die hub gebruikt dezelfde.

- **Autoprofiel**: de hub wordt per functie aangestuurd, niet per poort. Zijn Hub-blok toont **rijden, sturen, lichten** en heeft geen poorten. Gebruik **Motor** of **Motor voor tijd** om te rijden, **Servo** om te sturen, **Licht** voor de lichten, en **Remmen**, **Boost** en **Vermogenspuls** voor de speciale functies. Rijden, sturen, lichten, remmen en boost kunnen elk maar door één rij worden gebruikt (“Rij 2 rijdt al met deze Technic Move”).
- **Poorten**: de hub werkt zoals de andere hubs met poorten. Zijn motoren zijn de poorten `A`, `B` (de aandrijfmotoren) en `C` (de stuurmotor): **Motor**, **Motor voor tijd**, **Servo** (met kalibratie **Auto** op `C`), **Draaien met graden**, **Naar positie gaan**, **Bij stoppen** en **Versnelling van hub** werken erop. Zijn zes lichten zijn de poorten `1`–`6` van **Licht**-rijen. Een [Hub-invoer](/docs/Application/Links/Blocks/InputBlocks#src-hub) leest de snelheid en hoek van de motoren. **Remmen**, **Boost** en **Vermogenspuls** werken alleen in de modus **Autoprofiel**.

Een rij die niet bij de modus van de hub past, is een probleem dat zegt wat je moet omschakelen: “… wordt bestuurd door zijn autoprofiel: zet de hub hiervoor op ‘Poorten’” of “… wordt poort voor poort bestuurd: zet de hub hiervoor op ‘Autoprofiel’”. Profielen die zijn gemaakt voordat deze keuze bestond, openen in de modus **Autoprofiel**.

Om een autoconfiguratie in de hub te laden (Porsche, Lamborghini, Batmobile), gebruik je **Mijn hubs → Configuratie selecteren**. Zie [Configuraties van de Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould King-hubs ontvangen alleen opdrachten, dus ze hebben geen invoer en geven geen terugmelding over de verbinding. Gebruik de bewerking [Kanaal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) om het besturingskanaal van de hub te wisselen.
