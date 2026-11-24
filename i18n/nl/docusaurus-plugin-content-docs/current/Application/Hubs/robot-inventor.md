---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor-hub
description: "De hub van LEGO MINDSTORMS Robot Inventor (51515) of SPIKE Prime verbinden via Bluetooth of USB, zijn blokken gebruiken en de hub herstellen als hij niet meer werkt."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor-hub

De hub van de set LEGO® MINDSTORMS® Robot Inventor (51515) is de **LEGO® Technic™ Large Hub** (88016): zes poorten A–F, een lichtmatrix van 5×5, een luidspreker, een gyroscoop en een versnellingsmeter. MOCPilot bestuurt hem met dezelfde blokken als de Robot Inventor-app, plus alles wat MOCPilot toevoegt: het dashboard, de gamepad en de andere hubs van het profiel.

De **SPIKE™ Prime-hub** (45601) is dezelfde hardware met de firmware van LEGO® Education. MOCPilot ondersteunt hem met de firmware **SPIKE Legacy** (bèta); zie [Firmware](#firmware).

## Wat hij kan {#features}

- **Logicablokken**: alle blokken van de Robot Inventor-app, zie [Robot Inventor-blokken](#blocks).
- **Snelle koppelingen**: motoren, sensoren, de [lichtmatrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) en de [lampjes van de afstandssensor](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hubmonitor**: batterij, oriëntatie, kanteling en de apparaten op de poorten, zie [Hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Een blokprogramma kan op twee manieren draaien: **streaming**, waarbij MOCPilot het uitvoert en opdrachten naar de hub stuurt (houd het apparaat verbonden), of **downloaden**, waarbij MOCPilot het in een van de programmaslots van de hub schrijft en de hub het zelfstandig uitvoert. Zie [Het programma op de hub uitvoeren](#download).

## De hub verbinden {#connect}

Voeg de hub op de gewone manier toe ([Een hub toevoegen en verbinden](/docs/Application/Hubs/ConnectingHubs)) en kies **Lego® Large Hub** (of **LEGO® SPIKE™ Prime Hub**). Op een computer heeft de verbindingspagina bovenaan een keuzeschakelaar **Bluetooth / USB**. MOCPilot onthoudt je keuze voor dit hubmodel.

### Via Bluetooth {#bluetooth}

De hub gebruikt klassieke Bluetooth, geen Bluetooth Low Energy: hij werkt op Android, Mac en Windows, maar niet op iPhone en iPad.

1. Zet de hub aan.
2. Koppel hem in de Bluetooth-instellingen van het apparaat als een gewoon Bluetooth-apparaat (op Windows: **Instellingen → Bluetooth en apparaten → Apparaat toevoegen**). Druk op de Bluetooth-knop van de hub, zodat hij gevonden kan worden.
3. Tik in MOCPilot op **Scannen**.

### Met een USB-kabel {#usb}

Op Windows en Mac kun je de hub in plaats daarvan met zijn USB-kabel verbinden. Je hoeft geen LEGO-stuurprogramma te installeren.

1. Verbind de hub met een USB-kabel met de computer en zet de hub aan.
2. Tik op **Verbinden**.

Meldt MOCPilot **Geen hub op USB**, controleer dan de kabel (sommige kabels laden alleen op) en of de hub aanstaat.

<Screenshot name="robot-inventor-connect" alt="Een Robot Inventor-hub verbinden: de keuzeschakelaar Bluetooth / USB" width={900} />

### Sluit eerst de LEGO-app {#close-lego-app}

De hub accepteert maar één verbinding. Als de MINDSTORMS- of SPIKE-app open is en de hub vasthoudt, meldt MOCPilot **De hub is bezet: een andere app gebruikt hem (LEGO MINDSTORMS of SPIKE). Sluit die app en probeer het opnieuw.** Sluit de LEGO-app en maak opnieuw verbinding.

## Robot Inventor-blokken {#blocks}

Als het profiel een Robot Inventor- of SPIKE Prime-hub heeft, krijgt het palet van Logicablokken de blokken van de Robot Inventor-app. Blokken die alleen deze hub kan uitvoeren, dragen een zwart-wit **hubpictogram**.

| Categorie | Robot Inventor-blokken |
|---|---|
| [Beweging](/docs/Application/BlockBuilder/Blocks/Movement) (nieuwe categorie) | bewegingsmotoren, snelheid, afstand per omwenteling, rijden, sturen, tankbesturing, versnelling, stoppen, “werd de beweging onderbroken?” |
| [Motoren](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | starten op vermogen, “werd de motor onderbroken?”, plus motorvermogen en blokkeerdetectie |
| [Licht](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | afbeelding voor een paar seconden, animaties met een beeldeditor, pixelhelderheid, plus de lampjes van de afstandssensor |
| [Geluiden](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pieptonen, de robotgeluiden van de hub, volume, geluidseffecten, muziek: noten, trommels, rusten, instrument, tempo |
| [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | krachtsensor, gebaren, oriëntatie, gieren / helling / rol, gieren resetten, hoeksnelheid, versnelling, kanteling, radio tussen hubs |
| [Gebeurtenissen](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | als de hub geschud of getikt wordt, op een kant ligt, gekanteld is, als de krachtsensor wordt ingedrukt, als een radiosignaal binnenkomt |

De besturings-, operator-, variabele-, lijst- en Mijn blokken-blokken van de Robot Inventor-app zijn dezelfde als de eigen [basisblokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) van MOCPilot. De blokken die de algemene hubblokken al dekken (motorsnelheid en -positie, de kleur- en afstandssensor, de lichtmatrix, de hubknop, de timer) staan in hun gewone categorieën.

## Het programma op de hub uitvoeren {#download}

Net als de Robot Inventor-app kan MOCPilot een Logicablokken-programma in een van de 20 programmaslots van de hub (0–19) schrijven. De hub voert het dan uit zonder de app: je kunt de telefoon of computer loskoppelen en het programma later opnieuw starten met de knoppen van de hub zelf.

### De slotknop en de slotkaart {#slot-card}

Als een Robot Inventor- of SPIKE Prime-hub met een Logicablokken-profiel is verbonden, verschijnt rechtsonder in de editor, naast de zoom, een knop. Die toont het gekozen slotnummer op een kleine 5×5-matrix, of een streamingteken. Tik erop om de kaart te openen:

- de hub met het gekozen slot; **‹** en **›** kiezen slot 0–19;
- **Downloaden / Streaming**: hoe **Start** werkt voor deze hub;
- de **download**knop (⤓): schrijft het programma in het slot zonder het te starten;
- een statusregel: de voortgang, *Slot 3: het programma staat op de hub*, of wat er misging.

Als er meerdere Robot Inventor- of SPIKE Prime-hubs zijn verbonden, heeft de kaart ook een hubknop: tik erop om te kiezen welke hub het programma krijgt. MOCPilot onthoudt de modus en het slot op dit apparaat.

<Screenshot name="robot-inventor-slot-card" alt="De slotkaart: de hub, de slotpijlen, de schakelaar Downloaden / Streaming en de downloadknop" width={500} />

### Downloaden {#download-mode}

In de modus **Downloaden** zet **Start** het blokprogramma om in een hubprogramma, schrijft het in het gekozen slot en start het op de hub. Het schrijven duurt een paar seconden; daarna draait het programma zelfstandig op de hub.

- Om het later zonder de app opnieuw te starten, kies je het slot met de linker- en rechterknop van de hub en druk je op de middelste knop.
- De **middelste knop** van de hub stopt het programma.
- Om weer programma's vanuit MOCPilot uit te voeren, zet je de kaart op **Streaming**.

### Wat op de hub kan draaien {#download-blocks}

De meeste blokken kunnen naar de hub:

- gebeurtenissen: programmastart, berichten, voorwaarden, de timer, de hubknoppen, sensoren, gebaren, oriëntatie, kanteling en radiosignalen;
- besturing, operatoren, variabelen, lijsten en Mijn blokken;
- alle Robot Inventor-blokken, en de motor-, licht- en sensorblokken van deze hub.

Sommige blokken hebben de app nodig en kunnen niet alleen op de hub draaien: de dashboard- en gamepadblokken, blokken van andere hubs, de gebeurtenis van de **middelste knop** (op de hub stopt die knop het programma), batterij- en verbindingsgebeurtenissen, de temperatuur en het kalibreren van de tandheugelbesturing. Als het programma een daarvan bevat, wordt er niets geschreven: de kaart meldt **Deze blokken kunnen zonder de app niet op de hub draaien** en somt ze op. Verwijder die blokken of gebruik **Streaming**.

Als het schrijven mislukt, zegt de statusregel waarom, bijvoorbeeld **Niet genoeg ruimte op de hub** of **De hub antwoordde niet**. Probeer het opnieuw, of start de hub opnieuw op als het blijft mislukken.

## Firmware {#firmware}

MOCPilot werkt met de eigen LEGO-firmware van de hub en vervangt die niet:

- **Robot Inventor-hub**: de firmware van de app MINDSTORMS Robot Inventor. De laatste versie is firmware 1.5.6 met hubsoftware 3.2.36.
- **SPIKE Prime-hub**: de firmware **SPIKE Legacy** (die van de app SPIKE 2). De nieuwere firmware **SPIKE App 3** wordt niet ondersteund: MOCPilot meldt dat als het zo'n hub vindt. Installeer de firmware SPIKE Legacy met de app LEGO® Education SPIKE™ Legacy en maak dan opnieuw verbinding.

Als de hub klaar is, toont hij een programmaslotnummer op zijn lichtmatrix.

## Als de hub niet opstart {#restore}

Als de hub niet opstart, donker blijft, geen slotnummer toont of naar de firmware SPIKE App 3 is overgezet, herstel hem dan eerst met de officiële app:

1. Open de app MINDSTORMS Robot Inventor (voor een SPIKE Prime-hub de app SPIKE Legacy) en verbind de hub met de USB-kabel.
2. Start de hubupdate (**Update hub firmware**). Die schrijft de firmware, de hubsoftware en de robotgeluiden opnieuw en duurt ongeveer 6 minuten. Koppel de hub niet los zolang die bezig is.
3. Sluit de LEGO-app en verbind de hub in MOCPilot.

### Herstelmodus (DFU) {#dfu}

Alleen als de officiële app de hub helemaal niet ziet, kun je de firmware via de herstelmodus (DFU) van de hub schrijven. Dit is voor ervaren gebruikers:

1. Zet de hub uit en koppel hem los. Houd de **Bluetooth-knop** ingedrukt en steek de USB-kabel erin; blijf hem vasthouden tot het lampje van de knop rood, groen en blauw knippert. De computer ziet nu “LEGO Technic Large Hub in DFU Mode”.
2. Installeer op Windows eenmalig het WinUSB-stuurprogramma voor dat apparaat, bijvoorbeeld met Zadig. Mac en Linux hebben geen stuurprogramma nodig.
3. Schrijf het firmware-image van de Robot Inventor-app (1.5.6) met `dfu-util` naar adres `0x08008000`. De hub start vanzelf opnieuw op als het klaar is. Koppel hem niet los tijdens het schrijven.
4. Voer daarna **Update hub firmware** uit in de Robot Inventor-app (zie hierboven) om de hubsoftware en de geluiden te herstellen.

DFU schrijft alleen de firmware. De herstel-bootloader zelf kan niet worden overschreven, dus je kunt het altijd opnieuw proberen.
