---
id: Problems
title: Uitvoeren en problemen oplossen
description: "Het probleempaneel, rode kaders, live waarden en veelvoorkomende meldingen in Snelle koppelingen."
---

import Screenshot from '@site/src/components/Screenshot';

# Uitvoeren en problemen oplossen {#running-and-fixing-problems}

## Is alles klaar? {#is-everything-ready}

De knop **Problemen** in de bovenbalk van de editor (op een computer vlak voor **Start**) toont:

- een **groen vinkje**: “Alle rijen zijn klaar”;
- een **rood “!”**: “Problemen: N”.

Op een computer staat de tekst op de knop; in een smal venster blijven alleen het pictogram en het aantal problemen over. Op een telefoon of tablet toont de knop het pictogram, met het aantal in een rood badge.

Tik erop om het probleempaneel te openen (een zijpaneel op een telefoon, een menu op een tablet of computer). Het toont “Rij N — reden”; tik op een item om naar die rij te springen. Het blok dat het probleem veroorzaakt, heeft een **rood kader**. Als alles in orde is, staat er in het paneel “Elke ingeschakelde rij kan draaien.”

<Screenshot name="links-problems" alt="Probleempaneel met een rij die niet klaar is" width={900} />

Rijen met problemen draaien niet; de andere rijen wel.

## Veelvoorkomende meldingen {#common-messages}

| Melding | Wat te doen |
|---|---|
| Sleep een invoer en een uitvoer (een hub of een dashboardindicator) in de rij | de rij is leeg |
| Voeg een invoer toe aan het begin van de rij | sleep eerst een bediening, het voertuig, de gamepad of een hub-invoer |
| Voeg een uitvoer toe: een hub of een dashboardindicator | sluit de rij af met een uitvoer |
| Voeg een bewerking toe vóór de hub: motor, servo, licht | een Hub-uitvoer heeft een bewerking ervoor nodig |
| Kies minstens één poort op de hub | tik op een poortchip in het Hub-blok |
| Kies een dashboardcontroller | tik op het invoerblok en kies een bediening |
| … beweegt niet langs deze as | de joystick heeft maar één as: kies de andere as of wijzig de joystick |
| Kies wat … geeft | de bediening heeft dit kanaal niet meer: kies er een |
| Kies de pedalen van het voertuig | de invoer Voertuig heeft pedalen op het dashboard nodig |
| … staat niet op het dashboard | de versnellingspook of handrem die voor het Voertuig gekozen was, is verwijderd |
| "…" werkt niet met deze controller | dit verwerkingsblok past niet bij het signaal |
| Poort A: dit apparaat kan niet als servo werken (een motor met encoder is nodig) | gebruik een motor met encoder of een andere bewerking |
| Poort A heeft een sensor, geen motor | controleer wat er op de poort is aangesloten |
| Poort A wordt ook gebruikt in rij 2 | elke poort kan maar bij één rij horen |
| Schakel gamepad-blokken in op de Gamepad-pagina (bovenste balk) | open **Gamepad** en schakel **Gamepad-blokken inschakelen** in |
| De indicator toont de waarde zoals hij is: verwijder de bewerking | een Indicator-rij heeft geen bewerking |
| Kalibratie heeft geen bewerking nodig: verwijder die | een rij met Servo's kalibreren heeft geen bewerking |
| Kies een hub met een kleuren-LED (LEGO-hubs) | Hub-LED werkt alleen op LEGO®-hubs |
| Poortkleuren zijn alleen beschikbaar op BuWizz 3 | Poortkleur heeft een BuWizz 3.0 Pro nodig |
| Geen servo met kalibratiemodus Auto in dit programma | Servo's kalibreren heeft een Servo in modus Auto nodig |
| Dit blok vereist een nieuwere versie van de app | het profiel is gemaakt in een nieuwere versie: werk MOCPilot bij |
| De rij is uitgeschakeld | schakel hem in via het rijmenu |

## Live waarden {#live-values}

Terwijl het programma draait, toont elke verbinding tussen blokken de waarde die erdoorheen gaat. Beweeg een bediening en volg de waarde door de rij:

- er verandert niets bij de invoer: de bediening of gamepad stuurt niets; controleer het kanaal of de as;
- de waarde verandert, maar de motor beweegt niet: controleer de verbindingsstip van de hub en de poort;
- de waarde is klein na **Begrenzing** of **Dode zone**: pas hun instellingen aan.

<Screenshot name="links-live-values" alt="Een draaiend programma in Snelle koppelingen met live waarden op de verbindingen" width={900} />

## Het model beweegt niet {#the-model-does-not-move}

1. Is de hub verbonden? Controleer **Mijn hubs** en de verbindingsstip op het Hub-blok.
2. Is de juiste poort gekozen? Zitten de motoren waar je denkt?
3. Staat de rij aan, zonder rood kader?
4. Draait het programma (**Start**)?
5. Is de batterij opgeladen? Voeg een rij *Batterij → Indicator* toe om die in de gaten te houden.

Meer in [Probleemoplossing](/docs/Help/Troubleshooting).
