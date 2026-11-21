---
id: PlayMode
title: Een model besturen (Start)
description: "Start een profiel, bestuur het model, stop het, en lees wat er gebeurt als het stopt of een verbinding wegvalt."
---

import Screenshot from '@site/src/components/Screenshot';

# Een model besturen (Start) {#driving-a-model-run}

Een profiel heeft twee modi:

- **Bewerken**: je wijzigt de hubs, het dashboard en het programma.
- **Start**: het programma loopt en de bedieningselementen op het dashboard besturen het model.

## Starten en stoppen {#start-and-stop}

Druk op **Start** (▶) in de editor of op het dashboard (computer: **Programma → Start**, ⌘R / Ctrl+R). Druk op **Stop** (■) om terug te gaan naar bewerken (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Het dashboard terwijl het programma loopt" width={900} />

Terwijl het programma loopt:

- zijn de rasterpunten van het dashboard en de knoppen voor toevoegen en instellingen verborgen;
- reageren de bedieningselementen op aanraking en op de gamepad;
- tonen monitors en indicatoren live waarden;
- toont de editor bij Snelle koppelingen live waarden tussen de blokken van elke rij, en kunnen de rijen niet worden bewerkt;
- blijft het programma bij Logicablokken bewerkbaar, zodat je het live kunt bijstellen.

## Op een telefoon of tablet {#on-a-phone-or-tablet}

Als je een profiel opent, schakelt een telefoon over naar liggend, volledig scherm, zodat het dashboard het hele scherm krijgt. Zet **Scherm ingeschakeld houden** aan in Instellingen, zodat het scherm niet donker wordt terwijl je rijdt. Zie [Instellingen](/docs/Application/Account/Settings).

## Voordat je op Start drukt {#before-you-press-run}

- Zet de hubs aan en controleer in **Mijn hubs** of ze verbonden zijn (het badge op de knop toont hoeveel er verbonden zijn).
- Controleer bij Snelle koppelingen de knop **Problemen**: een rood “!” betekent dat sommige rijen niet kunnen worden uitgevoerd. Zie [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems).
- Zet het model de eerste keer op een standaard of houd het uit de buurt van de rand van de tafel.

## Als het programma stopt {#when-the-program-stops}

- **Snelle koppelingen** stopt alle motoren die de rijen gebruiken en zet de uitvoer terug (ledmatrix gewist, poortkleuren en sensorlampjes uit).
- **Logicablokken** stopt de hubpoorten als **Hubpoorten stoppen wanneer programma stopt** aan staat in Editorinstellingen.
- Verliest een hub de verbinding terwijl het programma loopt, dan stoppen zijn motoren. Bij Snelle koppelingen kan een hubinvoer “Verbonden” dit op het dashboard tonen.
- Valt bij het besturen op afstand de verbinding tussen de afstandsbediening en het hub-apparaat ongeveer 4 seconden weg, dan stopt het hub-apparaat het profiel en alle motoren.

## Besturen vanaf een ander apparaat {#drive-from-another-device}

Met [MocPilot Pro](/docs/Application/Account/Pro) kun je het profiel op het ene apparaat uitvoeren (het hub-apparaat, dat de hubs verbindt) en het vanaf een ander apparaat of vanuit de webeditor besturen. Zie [Afstandsbediening](/docs/Application/Profiles/RemoteControl).
