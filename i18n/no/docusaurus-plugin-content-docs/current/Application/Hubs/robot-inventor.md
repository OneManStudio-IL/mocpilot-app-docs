---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor-huben
description: "Koble til huben i LEGO MINDSTORMS Robot Inventor (51515) eller SPIKE Prime via Bluetooth eller USB, bruk blokkene og få huben til å virke igjen hvis den slutter å fungere."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor-huben

Huben i LEGO® MINDSTORMS® Robot Inventor-settet (51515) er **LEGO® Technic™ Large Hub** (88016): seks porter A–F, en 5×5-lysmatrise, en høyttaler, et gyroskop og et akselerometer. MOCPilot styrer den med de samme blokkene som Robot Inventor-appen, pluss alt MOCPilot legger til: dashboardet, spillkontrolleren og de andre hubbene i profilen.

**SPIKE™ Prime-huben** (45601) er samme maskinvare med LEGO® Education-fastvare. MOCPilot støtter den med fastvaren **SPIKE Legacy** (beta); se [Fastvare](#firmware).

## Hva den kan gjøre {#features}

- **Logikkblokker**: alle blokkene fra Robot Inventor-appen, se [Robot Inventor-blokker](#blocks).
- **Hurtigkoblinger**: motorer, sensorer, [lysmatrisen](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) og [lysene på avstandssensoren](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hubmonitor**: batteri, orientering, helling og enhetene på portene, se [Hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Et blokkprogram kan kjøres på to måter: **strømming**, der MOCPilot kjører programmet og sender kommandoer til huben (hold enheten tilkoblet), eller **nedlasting**, der MOCPilot skriver programmet til en av programplassene på huben og huben kjører det på egen hånd. Se [Kjøre programmet på huben](#download).

## Koble til huben {#connect}

Legg til huben som vanlig ([Legg til og koble til en hub](/docs/Application/Hubs/ConnectingHubs)) og velg **Lego® Large Hub** (eller **LEGO® SPIKE™ Prime Hub**). På en datamaskin har tilkoblingssiden en **Bluetooth / USB**-velger øverst. MOCPilot husker valget ditt for denne hubmodellen.

### Via Bluetooth {#bluetooth}

Huben bruker klassisk Bluetooth, ikke Bluetooth Low Energy: den fungerer på Android, Mac og Windows, men ikke på iPhone og iPad.

1. Slå på huben.
2. Par den i enhetens Bluetooth-innstillinger som en vanlig Bluetooth-enhet (på Windows: **Innstillinger → Bluetooth og enheter → Legg til enhet**). Trykk på Bluetooth-knappen på huben slik at den kan bli funnet.
3. Trykk på **Skann** i MOCPilot.

### Med en USB-kabel {#usb}

På Windows og Mac kan du i stedet koble til huben med USB-kabelen. Du trenger ikke å installere noen LEGO-driver.

1. Koble huben til datamaskinen med en USB-kabel og slå på huben.
2. Trykk på **Koble til**.

Hvis MOCPilot viser **Ingen hub på USB**, sjekker du kabelen (noen kabler kan bare lade) og at huben er slått på.

<Screenshot name="robot-inventor-connect" alt="Koble til en Robot Inventor-hub: Bluetooth / USB-velgeren" width={900} />

### Lukk LEGO-appen først {#close-lego-app}

Huben godtar bare én tilkobling. Hvis MINDSTORMS- eller SPIKE-appen er åpen og holder huben, viser MOCPilot **Huben er opptatt: en annen app bruker den (LEGO MINDSTORMS eller SPIKE). Lukk den appen og prøv igjen.** Lukk LEGO-appen og koble til på nytt.

## Robot Inventor-blokker {#blocks}

Når profilen har en Robot Inventor- eller SPIKE Prime-hub, får paletten i Logikkblokker blokkene fra Robot Inventor-appen. Blokker som bare denne huben kan kjøre, har et svart-hvitt **hubikon**.

| Kategori | Robot Inventor-blokker |
|---|---|
| [Bevegelse](/docs/Application/BlockBuilder/Blocks/Movement) (ny kategori) | bevegelsesmotorer, hastighet, avstand per omdreining, kjøre, styre, beltestyring, akselerasjon, stopp, «ble bevegelsen avbrutt?» |
| [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | start med kraft, «ble motoren avbrutt?», pluss motorkraft og stall-deteksjon |
| [Lys](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | bilde i noen sekunder, animasjoner med bilderedigering, pikselstyrke, pluss lysene på avstandssensoren |
| [Lyder](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pip, hubens robotlyder, volum, lydeffekter, musikk: noter, trommer, pauser, instrument, tempo |
| [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | kraftsensor, gester, orientering, yaw / stigning / rulling, nullstille yaw, vinkelhastighet, akselerasjon, helling, radio mellom hubber |
| [Hendelser](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | når huben ristes eller bankes på, ligger på en side, vippes, når kraftsensoren trykkes, når et radiosignal kommer |

Robot Inventor-appens blokker for kontroll, operatører, variabler, lister og Mine blokker er de samme som MOCPilots egne [grunnblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Blokkene som de generelle hubblokkene allerede dekker (motorhastighet og -posisjon, farge- og avstandssensorene, lysmatrisen, hubknappen, timeren), ligger i sine vanlige kategorier.

## Kjøre programmet på huben {#download}

Akkurat som Robot Inventor-appen kan MOCPilot skrive et Logikkblokker-program til en av hubens 20 programplasser (0–19). Huben kjører det da uten appen: du kan koble fra telefonen eller datamaskinen og starte programmet igjen senere med hubens egne knapper.

### Plassknappen og plasskortet {#slot-card}

Når en Robot Inventor- eller SPIKE Prime-hub er koblet til en Logikkblokker-profil, vises en knapp nederst til høyre i editoren, ved siden av zoomen. Den viser det valgte plassnummeret på en liten 5×5-matrise, eller et strømmesymbol. Trykk på den for å åpne kortet:

- huben med den valgte plassen; **‹** og **›** velger plass 0–19;
- **Last ned / Strømming**: hvordan **Kjør** fungerer for denne huben;
- **nedlastingsknappen** (⤓): skriver programmet til plassen uten å starte det;
- en statuslinje: fremdriften, *Plass 3: programmet er på huben*, eller hva som gikk galt.

Når flere Robot Inventor- eller SPIKE Prime-hubber er tilkoblet, har kortet også en hubknapp: trykk på den for å velge hvilken hub som får programmet. MOCPilot husker modusen og plassen på denne enheten.

<Screenshot name="robot-inventor-slot-card" alt="Plasskortet: huben, plasspilene, bryteren Last ned / Strømming og nedlastingsknappen" width={500} />

### Last ned {#download-mode}

I modusen **Last ned** gjør **Kjør** blokkprogrammet om til et hubprogram, skriver det til den valgte plassen og starter det på huben. Skrivingen tar noen sekunder; deretter kjører programmet på huben på egen hånd.

- For å starte det igjen senere uten appen velger du plassen med hubens venstre- og høyreknapp og trykker på midtknappen.
- Hubens **midtknapp** stopper programmet.
- For å gå tilbake til å kjøre programmer fra MOCPilot setter du kortet til **Strømming**.

### Hva som kan kjøre på huben {#download-blocks}

De fleste blokker kan sendes til huben:

- hendelser: programstart, meldinger, betingelser, timeren, hubknappene, sensorer, gester, orientering, helling og radiosignaler;
- kontroll, operatører, variabler, lister og Mine blokker;
- alle Robot Inventor-blokkene, og motor-, lys- og sensorblokkene for denne huben.

Noen blokker trenger appen og kan ikke kjøre på huben alene: dashboard- og spillkontrollerblokkene, blokker for andre hubber, hendelsen for **midtknappen** (på huben stopper den knappen programmet), batteri- og tilkoblingshendelser, temperaturen og kalibreringen av tannstangen. Hvis programmet inneholder noen av dem, skrives ingenting: kortet viser **Disse blokkene kan ikke kjøre på huben uten appen** og lister dem opp. Fjern disse blokkene eller bruk **Strømming**.

Hvis skrivingen mislykkes, viser statuslinjen hvorfor, for eksempel **Ikke nok plass på huben** eller **Huben svarte ikke**. Prøv igjen, eller start huben på nytt hvis det fortsetter å mislykkes.

## Fastvare {#firmware}

MOCPilot fungerer med hubens egen LEGO-fastvare og erstatter den ikke:

- **Robot Inventor-huben**: fastvaren fra MINDSTORMS Robot Inventor-appen. Siste versjon er fastvare 1.5.6 med hubprogramvare 3.2.36.
- **SPIKE Prime-huben**: fastvaren **SPIKE Legacy** (den fra SPIKE 2-appen). Den nyere fastvaren **SPIKE App 3** støttes ikke: MOCPilot sier fra når den finner en slik hub. Installer SPIKE Legacy-fastvaren med appen LEGO® Education SPIKE™ Legacy og koble til på nytt.

Når huben er klar, viser den et programplassnummer på lysmatrisen.

## Hvis huben ikke starter {#restore}

Hvis huben ikke starter, forblir mørk, ikke viser noe plassnummer eller er byttet til fastvaren SPIKE App 3, gjenoppretter du den først med den offisielle appen:

1. Åpne MINDSTORMS Robot Inventor-appen (SPIKE Legacy-appen for en SPIKE Prime-hub) og koble til huben med USB-kabelen.
2. Start huboppdateringen (**Update hub firmware**). Den skriver fastvaren, hubprogramvaren og robotlydene på nytt og tar omtrent 6 minutter. Ikke koble fra huben mens den pågår.
3. Lukk LEGO-appen og koble til huben i MOCPilot.

### Gjenopprettingsmodus (DFU) {#dfu}

Bare hvis den offisielle appen ikke ser huben i det hele tatt, kan du skrive fastvaren via hubens gjenopprettingsmodus (DFU). Dette er for erfarne brukere:

1. Slå av huben og koble den fra. Hold inne **Bluetooth-knappen** og koble til USB-kabelen; hold den inne til knappelyset blinker rødt, grønt og blått. Datamaskinen ser nå «LEGO Technic Large Hub in DFU Mode».
2. På Windows installerer du WinUSB-driveren for denne enheten én gang, for eksempel med Zadig. Mac og Linux trenger ingen driver.
3. Skriv fastvarebildet fra Robot Inventor-appen (1.5.6) med `dfu-util` til adressen `0x08008000`. Huben starter på nytt av seg selv når den er ferdig. Ikke koble den fra mens den skriver.
4. Kjør deretter **Update hub firmware** i Robot Inventor-appen (se over) for å gjenopprette hubprogramvaren og lydene.

DFU skriver bare fastvaren. Selve gjenopprettings-bootloaderen kan ikke overskrives, så du kan alltid prøve igjen.
