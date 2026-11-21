---
id: ProcessingBlocks
title: Verwerkingsblokken
description: "Overzicht van alle verwerkingsblokken in Snelle koppelingen: Omkeren, Begrenzing, Dode zone, Drempel, Geleidelijk en Wisselen."
---

# Verwerkingsblokken {#processing-blocks}

Verwerkingsblokken zitten tussen de invoer en de bewerking (of de indicator) en passen het signaal onderweg aan. Een rij kan er zoveel hebben als je wilt, in willekeurige volgorde. Een blok dat het binnenkomende signaal niet kan verwerken, klikt niet vast; in een bestand wordt het gemeld als “"…" werkt niet met deze controller”. Hoe je ze gebruikt: [Verwerking](/docs/Application/Links/Processing).

## Omkeren {#mod-invert}

Keert het signaal om.

- Geen instellingen.
- Neemt: waarde of aan/uit. Geeft: hetzelfde soort.
- Waarde: wisselt het teken (0,7 wordt −0,7). Aan/uit: aan wordt uit en uit wordt aan.

## Begrenzing {#mod-limit}

Schaalt de waarde omlaag, zodat volle uitslag niet meer geeft dan het maximum.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 of 90 % (standaard 50 %).
- Neemt: waarde of aan/uit. Geeft: waarde (een begrensde knop geeft 0 of het maximum).

## Dode zone {#mod-deadzone}

Behandelt kleine waarden rond nul als nul; de rest wordt weer uitgerekt tot het volle bereik, zodat volle uitslag nog steeds 1 geeft.

- **Zone**: 5, 10, 15, 20 of 30 % (standaard 10 %).
- Neemt: waarde. Geeft: waarde.

## Drempel {#mod-threshold}

Maakt van een waarde aan/uit.

- **Aan als de waarde is**: **Boven** (standaard) of **Onder**.
- **Niveau (van volle schaal)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 of 90 % (standaard 20 %).
- Neemt: waarde. Geeft: aan/uit.
- Een kleine hysterese (2 % van de volle schaal) voorkomt dat de uitvoer flikkert als de waarde rond het niveau schommelt.

## Geleidelijk {#mod-smooth}

Beweegt geleidelijk naar de binnenkomende waarde in plaats van te springen.

- **Versnelling (tot volle snelheid)**: **Direct**, 0,25, 0,5, 1, 2 of 3 s (standaard 0,5 s): de tijd van 0 tot vol, weg van nul.
- **Vertraging (tot stilstand)**: dezelfde keuzes (standaard 0,5 s): de tijd van vol terug naar 0.
- Neemt: waarde of aan/uit. Geeft: waarde (een vloeiend gemaakte knop loopt geleidelijk op en af).

## Wisselen {#mod-toggle}

Maakt van een drukknop een schakelaar: elke druk wisselt de uitvoer tussen aan en uit. De uitvoer begint op uit.

- Geen instellingen.
- Neemt: aan/uit. Geeft: aan/uit.
