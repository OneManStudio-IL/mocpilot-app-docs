---
id: HubFunctions
title: Hubspecifieke functies
description: "Speciale functies van Technic Move, BuWizz, SBrick, Mould King, Robot Inventor en andere hubs in beide editors."
---

# Hubspecifieke functies {#hub-specific-functions}

Elke hub met poorten kan motoren en lampen aansturen. Sommige hubs kunnen meer. In **Snelle koppelingen** verschijnen deze functies alleen in het palet als zo'n hub in het profiel zit; in **Logicablokken** zijn het hubspecifieke blokken.

## Motoren met encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Functie | Snelle koppelingen | Logicablokken |
|---|---|---|
| Snelheidsregeling | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | stel snelheid in op, start motor op … % snelheid |
| Stuurservo met kalibratie | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Handmatig / Auto) | ga naar relatieve positie, rek kalibreren |
| Een hoek draaien | [Draaien met graden](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | uitvoeren voor |
| Absolute positie (hoekmotoren) | [Naar positie gaan](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | gaan … naar positie |
| Gedrag bij stoppen: uitrollen, remmen, vasthouden | Motor → **Bij stoppen** | stel motor in op … bij stop |
| Versnellingsvoorinstellingen van de hub | Motor → **Versnelling van hub** | stel versnelling in op, stel vertraging in op |
| Snelheid, positie, vermogen en stroom als ingang | [Hub-invoer](/docs/Application/Links/Blocks/InputBlocks#src-hub) | snelheid, positie, relatieve positie, vermogen |

## Technic Move Hub {#technic-move-hub}

De hub van de op afstand bestuurbare LEGO® Technic-auto's (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Rijden, sturen en lichten worden per functie aangestuurd, niet per poort.
- **Sturen** kalibreert de eigen stuurheugel.
- **Remmen**, **Boost** (vermogensmodus) en **Vermogenspuls** (alleen met de configuratie Batmobile™ Tumbler).
- **Hubconfiguraties**: laad een autoprofiel in de hub via **Mijn hubs → Configuratie selecteren**. Zie [Configuraties van de Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logicablokken: de autoprofielblokken (*start motoren*, *zet stuurinrichting op*, *zet motorrem in*, *krachtpuls*, *zet lichten aan*, *stel stroommodus in*), of de gewone poortblokken: motoren `A`, `B` (aandrijving) en `C` (besturing; *rek kalibreren* op `C`, daarna *ga naar relatieve positie*), lichten `1`–`6` afzonderlijk, kanteling, versnelling en oriëntatie. Gebruik één manier per hub: beide sturen dezelfde motoren en lichten aan. Zie [Motoren → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Snelle koppelingen: **Besturing** in het Hub-blok kiest **Autoprofiel** (de rijen rijden, sturen en schakelen de lichten) of **Poorten** (motoren `A`, `B`, `C` en lichten `1`–`6`, zoals bij de andere hubs). Zie [Hub-blok en poorten → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub). Een [Hub-invoer](/docs/Application/Links/Blocks/InputBlocks#src-hub) kan ook de kanteling, versnelling en draaisnelheid ervan lezen.

## BuWizz 2.0 {#buwizz-20}

- **Vermogensmodus**: Langzaam, Normaal, Snel, Ludicrous. Snelle koppelingen: de bewerking [Vermogensmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logicablokken: *BuWizz 2 stel stroommodus in*.
- De huidige vermogensmodus, de **Uitgangsspanning** en de motorstroom als ingangen. Zonder belasting is de uitgangsspanning ongeveer 6,3 V in Langzaam, 7,7 V in Normaal, 9,15 V in Snel en 10,5 V in Ludicrous.
- Eenvoudige snelheidsregeling op poort 1–4: geen positieregeling.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Poortkleur**-leds op poort 1–4: uit een lijst of als RGB ([Poortkleur](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 stel LED-kleur in op*).
- Motorstroom als ingang, relatieve posities.
- Motoren met sensor (Technic L en XL, SPIKE, Robot Inventor en de grijze hoekmotoren) op poort 1–4 draaien met snelheidsregeling: de hub houdt de ingestelde snelheid vast, dus ze draaien gelijkmatig, zelfs langzaam (vanaf ongeveer 20 %). Bij het stoppen rollen ze uit. Eenvoudige motoren, lampen en poort A en B werken zoals voorheen.
- BOOST-motoren (uit de set met de BOOST Move Hub) werken niet op een BuWizz 3.0 Pro: de hub herkent ze maar af en toe, en de motor draait niet goed.

## SBrick en SBrick Plus {#sbrick-and-sbrick-plus}

- Motoren en lampen met snelheidsregeling.
- Geen positieregeling: Servo, Draaien met graden en Naar positie gaan zijn niet beschikbaar.

## Mould King 4.0 en 6.0 {#mould-king-40-and-60}

- Alleen opdrachten: geen sensoren, geen knoppen, geen terugmelding van de verbinding.
- **Besturingskanaal** A, B of C: de bewerking [Kanaal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) in Snelle koppelingen, het blok *MouldKing stel besturingskanaal in* in Logicablokken, of **Selecteer kanaal** in Mijn hubs.
- Maximaal 3 Mould King 4.0 of 1 Mould King 6.0 per profiel, en maar één Mould King-type per profiel.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Alles over verbinden, firmware en de blokken: [MINDSTORMS Robot Inventor-hub](/docs/Application/Hubs/RobotInventorHub).

- **LED-matrix**: een niveaubalk, een getal of een afbeelding in Snelle koppelingen; tekst en pixels in Logicablokken.
- **Lampjes van de afstandssensor** (de “ogen” van de sensor).
- **Blokkeerdetectie** en motorvermogen.
- Alle blokken van de Robot Inventor-app: [Beweging](/docs/Application/BlockBuilder/Blocks/Movement), hubgeluiden en muziek, gebaren, gieren, de krachtsensor, radio tussen hubs.
- Klassieke Bluetooth (niet beschikbaar op iPhone en iPad) of een USB-kabel op Windows en Mac.

## LEGO®-hubs met een kleurenled {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor en de afstandsbediening: je kunt de kleur van de hub-led instellen uit een lijst of als RGB ([Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led) in Snelle koppelingen, *stel LED-kleur in op* in Logicablokken).

## LEGO® Powered Up Remote Control {#lego-powered-up-remote-control}

De knoppen zijn ingangen, dus je kunt een model via MOCPilot met de fysieke afstandsbediening besturen (Snelle koppelingen: **Hub**-invoer → Knop; Logicablokken: gebeurtenissen van hubknoppen).

## Ingebouwde sensoren {#built-in-sensors}

Batterijniveau en -spanning, temperatuur van de printplaat, kanteling (pitch, roll, yaw), versnelling en oriëntatie zijn beschikbaar op hubs die ze hebben. Stel **Oriëntatie van de hub** (Snelle koppelingen) of *stel hellingsoriëntatie in* (Logicablokken) zo in dat het overeenkomt met hoe de hub gemonteerd is.

In Logicablokken melden de Technic Hub, Technic Move Hub, Robot Inventor en SPIKE Prime ook hun draaisnelheid (gyroscoop, *draaisnelheid (°/s)*), en de Technic Hub en de BOOST Move Hub melden de stroom die ze opnemen (*stroom (mA)*). Zie [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
