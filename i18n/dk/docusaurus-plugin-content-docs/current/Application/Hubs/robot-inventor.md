---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor-hub
description: "Forbind hubben fra LEGO MINDSTORMS Robot Inventor (51515) eller SPIKE Prime via Bluetooth eller USB, brug dens blokke, og få hubben i gang igen, hvis den holder op med at virke."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor-hub

Hubben i sættet LEGO® MINDSTORMS® Robot Inventor (51515) er **LEGO® Technic™ Large Hub** (88016): seks porte A–F, en 5×5-lysmatrix, en højttaler, et gyroskop og et accelerometer. MOCPilot styrer den med de samme blokke som Robot Inventor-appen plus alt det, MOCPilot tilføjer: dashboardet, spilcontrolleren og profilens andre hubs.

**SPIKE™ Prime-hubben** (45601) er den samme hardware med firmware fra LEGO® Education. MOCPilot understøtter den med firmwaren **SPIKE Legacy** (beta); se [Firmware](#firmware).

## Hvad den kan {#features}

- **Logikblokke**: alle blokkene fra Robot Inventor-appen, se [Robot Inventor-blokke](#blocks).
- **Hurtige forbindelser**: motorer, sensorer, [lysmatrixen](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) og [lyset på afstandssensoren](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hubmonitor**: batteri, orientering, hældning og enhederne på portene, se [Hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Et blokprogram kan køre på to måder: **streaming**, hvor MOCPilot kører det og sender kommandoer til hubben (enheden skal forblive forbundet), eller **download**, hvor MOCPilot skriver det ind på en af hubbens programpladser, og hubben kører det på egen hånd. Se [Kør programmet på hubben](#download).

## Forbind hubben {#connect}

Tilføj hubben som normalt ([Tilføj og forbind en hub](/docs/Application/Hubs/ConnectingHubs)), og vælg **Lego® Large Hub** (eller **LEGO® SPIKE™ Prime Hub**). På en computer har forbindelsessiden en **Bluetooth / USB**-vælger øverst. MOCPilot husker dit valg for denne hubmodel.

### Via Bluetooth {#bluetooth}

Hubben bruger klassisk Bluetooth, ikke Bluetooth Low Energy: Den virker på Android, Mac og Windows, men ikke på iPhone og iPad.

1. Tænd hubben.
2. Par den i enhedens Bluetooth-indstillinger som en almindelig Bluetooth-enhed (på Windows: **Indstillinger → Bluetooth og enheder → Tilføj enhed**). Tryk på hubbens Bluetooth-knap, så den kan findes.
3. Tryk på **Scan** i MOCPilot.

### Med et USB-kabel {#usb}

På Windows og Mac kan du i stedet forbinde hubben med dens USB-kabel. Du behøver ikke installere en LEGO-driver.

1. Forbind hubben med computeren med et USB-kabel, og tænd hubben.
2. Tryk på **Forbind**.

Hvis MOCPilot skriver **Ingen hub på USB**, så tjek kablet (nogle kabler kan kun oplade), og at hubben er tændt.

<Screenshot name="robot-inventor-connect" alt="Forbindelse af en Robot Inventor-hub: Bluetooth / USB-vælgeren" width={900} />

### Luk LEGO-appen først {#close-lego-app}

Hubben accepterer kun én forbindelse. Hvis MINDSTORMS- eller SPIKE-appen er åben og holder fast i hubben, skriver MOCPilot **Hubben er optaget: en anden app bruger den (LEGO MINDSTORMS eller SPIKE). Luk den app, og prøv igen.** Luk LEGO-appen, og forbind igen.

## Robot Inventor-blokke {#blocks}

Når profilen har en Robot Inventor- eller SPIKE Prime-hub, får paletten i Logikblokke blokkene fra Robot Inventor-appen. Blokke, som kun denne hub kan køre, har et sort-hvidt **hub-ikon**.

| Kategori | Robot Inventor-blokke |
|---|---|
| [Bevægelse](/docs/Application/BlockBuilder/Blocks/Movement) (ny kategori) | bevægelsesmotorer, hastighed, afstand pr. omdrejning, kørsel, styring, kampvognsstyring, acceleration, stop, »blev bevægelsen afbrudt?« |
| [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | start med effekt, »blev motoren afbrudt?«, plus motoreffekt og blokeringsregistrering |
| [Lys](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | billede i nogle sekunder, animationer med billededitor, pixellysstyrke, plus lyset på afstandssensoren |
| [Lyde](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | bip, hubbens robotlyde, lydstyrke, lydeffekter, musik: noder, trommer, pauser, instrument, tempo |
| [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | kraftsensor, gestusser, orientering, gyring / hældning / rulning, nulstil gyring, vinkelhastighed, acceleration, vipning, radio mellem hubs |
| [Begivenheder](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | når hubben rystes eller bankes på, ligger på en side, vippes, når kraftsensoren trykkes, når et radiosignal kommer |

Robot Inventor-appens blokke til kontrol, operatorer, variable, lister og Mine blokke er de samme som MOCPilots egne [grundblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). De blokke, som de generelle hubblokke allerede dækker (motorhastighed og -position, farve- og afstandssensoren, lysmatrixen, hubknappen, timeren), ligger i deres sædvanlige kategorier.

## Kør programmet på hubben {#download}

Ligesom Robot Inventor-appen kan MOCPilot skrive et Logikblokke-program ind på en af hubbens 20 programpladser (0–19). Hubben kører det derefter uden appen: Du kan afbryde forbindelsen til telefonen eller computeren og starte programmet igen senere med hubbens egne knapper.

### Pladsknappen og pladskortet {#slot-card}

Når en Robot Inventor- eller SPIKE Prime-hub er forbundet med en Logikblokke-profil, vises en knap i editorens nederste højre hjørne ved siden af zoom. Den viser det valgte pladsnummer på en lille 5×5-matrix eller et streamingtegn. Tryk på den for at åbne kortet:

- hubben med den valgte plads; **‹** og **›** vælger plads 0–19;
- **Download / Streaming**: hvordan **Kør** virker for denne hub;
- **download**-knappen (⤓): skriver programmet ind på pladsen uden at starte det;
- en statuslinje: fremskridtet, *Plads 3: programmet er på hubben*, eller hvad der gik galt.

Når flere Robot Inventor- eller SPIKE Prime-hubs er forbundet, har kortet også en hubknap: Tryk på den for at vælge, hvilken hub der får programmet. MOCPilot husker tilstanden og pladsen på denne enhed.

<Screenshot name="robot-inventor-slot-card" alt="Pladskortet: hubben, pladspilene, Download / Streaming-kontakten og download-knappen" width={500} />

### Download {#download-mode}

I tilstanden **Download** gør **Kør** blokprogrammet til et hubprogram, skriver det ind på den valgte plads og starter det på hubben. Skrivningen tager et par sekunder; derefter kører programmet på hubben på egen hånd.

- For at starte det igen senere uden appen skal du vælge pladsen med hubbens venstre og højre knap og trykke på midterknappen.
- Hubbens **midterknap** stopper programmet.
- For at køre programmer fra MOCPilot igen skal du skifte kortet til **Streaming**.

### Hvad der kan køre på hubben {#download-blocks}

De fleste blokke kan komme over på hubben:

- begivenheder: programstart, beskeder, betingelser, timeren, hubknapperne, sensorer, gestusser, orientering, vipning og radiosignaler;
- kontrol, operatorer, variable, lister og Mine blokke;
- alle Robot Inventor-blokkene samt denne hubs motor-, lys- og sensorblokke.

Nogle blokke har brug for appen og kan ikke køre alene på hubben: dashboard- og spilcontrollerblokkene, blokke til andre hubs, begivenheden for **midterknappen** (på hubben stopper den knap programmet), batteri- og forbindelsesbegivenheder, temperaturen og kalibreringen af tandstangsstyringen. Hvis programmet indeholder nogen af dem, skrives der intet: Kortet skriver **Disse blokke kan ikke køre på hubben uden appen** og viser dem. Fjern de blokke, eller brug **Streaming**.

Hvis skrivningen mislykkes, fortæller statuslinjen hvorfor, for eksempel **Ikke nok plads på hubben** eller **Hubben svarede ikke**. Prøv igen, eller genstart hubben, hvis det bliver ved med at mislykkes.

## Firmware {#firmware}

MOCPilot arbejder med hubbens egen LEGO-firmware og erstatter den ikke:

- **Robot Inventor-hub**: firmwaren fra appen MINDSTORMS Robot Inventor. Den sidste version er firmware 1.5.6 med hubsoftware 3.2.36.
- **SPIKE Prime-hub**: firmwaren **SPIKE Legacy** (den fra appen SPIKE 2). Den nyere firmware **SPIKE App 3** understøttes ikke: MOCPilot siger det, når den finder sådan en hub. Installer firmwaren SPIKE Legacy med appen LEGO® Education SPIKE™ Legacy, og forbind derefter igen.

Når hubben er klar, viser den et programpladsnummer på sin lysmatrix.

## Hvis hubben ikke starter {#restore}

Hvis hubben ikke starter, forbliver mørk, ikke viser et pladsnummer eller er blevet skiftet til firmwaren SPIKE App 3, så gendan den først med den officielle app:

1. Åbn appen MINDSTORMS Robot Inventor (appen SPIKE Legacy til en SPIKE Prime-hub), og forbind hubben med USB-kablet.
2. Start hubopdateringen (**Update hub firmware**). Den skriver firmwaren, hubsoftwaren og robotlydene på ny og tager omkring 6 minutter. Tag ikke hubben ud, mens den kører.
3. Luk LEGO-appen, og forbind hubben i MOCPilot.

### Gendannelsestilstand (DFU) {#dfu}

Kun hvis den officielle app slet ikke kan se hubben, kan du skrive firmwaren via hubbens gendannelsestilstand (DFU). Det er for erfarne brugere:

1. Sluk hubben, og tag stikket ud. Hold **Bluetooth-knappen** inde, og sæt USB-kablet i; bliv ved med at holde, indtil knappens lys blinker rødt, grønt og blåt. Computeren ser nu »LEGO Technic Large Hub in DFU Mode«.
2. På Windows skal du én gang installere WinUSB-driveren til den enhed, for eksempel med Zadig. Mac og Linux behøver ingen driver.
3. Skriv firmwarebilledet fra Robot Inventor-appen (1.5.6) med `dfu-util` til adressen `0x08008000`. Hubben genstarter af sig selv, når det er færdigt. Tag den ikke ud, mens der skrives.
4. Kør derefter **Update hub firmware** i Robot Inventor-appen (se ovenfor) for at gendanne hubsoftwaren og lydene.

DFU skriver kun firmwaren. Selve gendannelses-bootloaderen kan ikke overskrives, så du kan altid prøve igen.
