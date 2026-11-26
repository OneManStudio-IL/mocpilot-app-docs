---
id: HubsAndPorts
title: Hub-blokken og porte
description: "Hub-blokken i Hurtige forbindelser: valg af porte, portkontrol og spørgsmålet om en port, der allerede er i brug."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub-blokken og porte {#hub-block-and-ports}

Outputtet [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) afslutter en række efter en handling. Der er én Hub-blok for hver hub under **Mine hubs**, så tilføj dine hubs dér først. Indtil du gør det, står der på fanen »Tilføj hubs under Mine hubs eller indikatorer på dashboardet: de vises her«.

## Det viser Hub-blokken {#what-the-hub-block-shows}

- hubbens navn og en **forbindelsesprik** (forbundet eller ej);
- **portene** som knapper: A, B, C, D… på LEGO®-hubs og SBrick (A–F på Robot Inventor og Mould King 6.0), 1–4 på BuWizz 2.0, 1–4 samt A og B på BuWizz 3.0 Pro;
- en undertitel: »porte A, B«, »vælg porte«, »hele hubben« (efter en handling for hele hubben) eller »kørsel, styring, lys« (Technic Move i tilstanden **Bilprofil**).

## Vælg porte {#choose-ports}

Tryk på en portknap for at bruge porten, og tryk igen for at frigøre den. Én række kan styre **flere porte** på én gang, for eksempel to drivmotorer på A og B.

Skal to motorer dreje i hver sin retning? Lav to rækker med samme input, og tilføj **Inverter** til den ene af dem.

## Én port, én række {#one-port-one-row}

En port hører til én række. Vælger du en port, som en anden række allerede bruger, spørger MOCPilot:

> **Porten er allerede i brug**: På »Technic Hub« bruges port A i række 2 (Motor). Brug den i denne række? Den anden række mister porten og holder op med at styre den.

**Brug i denne række** flytter porten; **Annuller** lader den blive, hvor den var. En port, som bruges af to rækker (for eksempel i en gammel fil), vises som et problem: »Port A bruges også i række 2«.

<Screenshot name="port-in-use" alt="Dialogen Porten er allerede i brug" width={700} />

## Portkontrol {#port-checks}

Når hubben er forbundet, ved MOCPilot, hvad der er sat i hver port, og kontrollerer, at handlingen passer:

| Problem | Betydning |
|---|---|
| »Port A: denne enhed kan ikke fungere som servo (en motor med encoder kræves)« | Servo og Kør et antal grader kræver en motor med encoder |
| »Port A: motoren har ingen absolut position (kun vinkelmotorer)« | Gå til position kræver en vinkelmotor |
| »Port A har en sensor, ikke en motor« | enheden på porten er en sensor |
| »Port A tager kun simple hastighedskommandoer: ingen positionsstyring« | denne port kan ikke styre positioner |
| »Port A har ingen LED: brug port 1-4« | Portfarve virker kun på port 1–4 på BuWizz 3.0 Pro |
| »Sensorlys: vælg én port, den med afstandssensoren« | Sensorlys bruger præcis én port |
| »Port A: ingen farvesensor her« | Farvesensorens lys og inputtene farvetone, farvemætning og farvelysstyrke kræver en farvesensor på porten |

Handlinger, som en hub ikke kan udføre, tilbydes ikke for den. Skifter du en række til en anden hub, fortæller rækken, hvilken handling der ikke passer, for eksempel »Bremse: kun Technic Move (… har ingen bremsekommando)«.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (i fjernstyrede LEGO® Technic-biler) kan styres på to måder. Vælg én med **Styring** i Hub-blokkens vindue: **Bilprofil** (standard) eller **Porte**. Valget hører til hubben, så alle Hub-blokke for den hub bruger det samme.

- **Bilprofil**: Hubben styres efter funktion, ikke efter port. Dens Hub-blok viser **kørsel, styring, lys** og har ingen porte. Brug **Motor** eller **Motor i tid** til at køre, **Servo** til at styre, **Lys** til lysene og **Bremse**, **Boost** og **Kraftimpuls** til specialfunktionerne. Kørsel, styring, lys, bremse og boost kan hver kun bruges af én række (»Række 2 kører allerede denne Technic Move«).
- **Porte**: Hubben virker som de andre hubs med porte. Dens motorer er portene `A`, `B` (drivmotorerne) og `C` (styremotoren): **Motor**, **Motor i tid**, **Servo** (med kalibreringen **Auto** på `C`), **Kør et antal grader**, **Gå til position**, **Ved stop** og **Hubacceleration** virker på dem. Dens seks lys er portene `1`–`6` i **Lys**-rækker. Et [Hub-input](/docs/Application/Links/Blocks/InputBlocks#src-hub) læser motorernes hastighed og vinkel. **Bremse**, **Boost** og **Kraftimpuls** virker kun i tilstanden **Bilprofil**.

En række, der ikke passer til hubbens tilstand, er et problem, der siger, hvad du skal skifte: »… styres af sin bilprofil: skift hubben til »Porte« for dette« eller »… styres port for port: skift hubben til »Bilprofil« for dette«. Profiler, der er lavet, før dette valg fandtes, åbner i tilstanden **Bilprofil**.

Du indlæser en bilkonfiguration i hubben (Porsche, Lamborghini, Batmobile) under **Mine hubs → Vælg konfiguration**. Se [Technic Move Hub-konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould King-hubs modtager kun kommandoer, så de har ingen input og giver ingen tilbagemelding om forbindelsen. Du skifter hubbens styrekanal med handlingen [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
