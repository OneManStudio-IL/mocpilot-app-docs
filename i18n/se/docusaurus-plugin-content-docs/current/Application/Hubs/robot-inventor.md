---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor-hubben
description: "Anslut hubben till LEGO MINDSTORMS Robot Inventor (51515) eller SPIKE Prime via Bluetooth eller USB, använd dess block och få liv i hubben igen om den slutar fungera."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor-hubben

Hubben i LEGO® MINDSTORMS® Robot Inventor-satsen (51515) är **LEGO® Technic™ Large Hub** (88016): sex portar A–F, en 5×5-ljusmatris, en högtalare, ett gyroskop och en accelerometer. MOCPilot styr den med samma block som Robot Inventor-appen, plus allt som MOCPilot lägger till: instrumentpanelen, handkontrollen och profilens andra hubbar.

**SPIKE™ Prime-hubben** (45601) har samma hårdvara med LEGO® Education-firmware. MOCPilot stöder den med firmwaren **SPIKE Legacy** (beta); se [Firmware](#firmware).

## Vad den kan göra {#features}

- **Logikblock**: alla block från Robot Inventor-appen, se [Robot Inventor-block](#blocks).
- **Snabbkopplingar**: motorer, sensorer, [ljusmatrisen](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) och [avståndssensorns lampor](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hubbmonitor**: batteri, orientering, lutning och enheterna på portarna, se [Hubbmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Ett blockprogram kan köras på två sätt: **streaming**, där MOCPilot kör programmet och skickar kommandon till hubben (håll enheten ansluten), eller **nedladdning**, där MOCPilot skriver programmet till en av hubbens programplatser och hubben kör det på egen hand. Se [Köra programmet på hubben](#download).

## Ansluta hubben {#connect}

Lägg till hubben som vanligt ([Lägga till och ansluta en hubb](/docs/Application/Hubs/ConnectingHubs)) och välj **Lego® Large Hub** (eller **LEGO® SPIKE™ Prime Hub**). På en dator har anslutningssidan en väljare **Bluetooth / USB** längst upp. MOCPilot kommer ihåg ditt val för den här hubbmodellen.

### Via Bluetooth {#bluetooth}

Hubben använder klassisk Bluetooth, inte Bluetooth Low Energy: den fungerar på Android, Mac och Windows, men inte på iPhone och iPad.

1. Slå på hubben.
2. Parkoppla den i enhetens Bluetooth-inställningar som en vanlig Bluetooth-enhet (i Windows: **Inställningar → Bluetooth och enheter → Lägg till enhet**). Tryck på hubbens Bluetooth-knapp så att den kan hittas.
3. Tryck på **Skanna** i MOCPilot.

### Med en USB-kabel {#usb}

På Windows och Mac kan du i stället ansluta hubben med dess USB-kabel. Du behöver inte installera någon LEGO-drivrutin.

1. Anslut hubben till datorn med en USB-kabel och slå på hubben.
2. Tryck på **Anslut**.

Om MOCPilot visar **Ingen hubb på USB** kontrollerar du kabeln (vissa kablar kan bara ladda) och att hubben är påslagen.

<Screenshot name="robot-inventor-connect" alt="Ansluta en Robot Inventor-hubb: väljaren Bluetooth / USB" width={900} />

### Stäng LEGO-appen först {#close-lego-app}

Hubben tar bara emot en anslutning. Om MINDSTORMS- eller SPIKE-appen är öppen och håller hubben visar MOCPilot **Hubben är upptagen: en annan app använder den (LEGO MINDSTORMS eller SPIKE). Stäng den appen och försök igen.** Stäng LEGO-appen och anslut igen.

## Robot Inventor-block {#blocks}

När profilen har en Robot Inventor- eller SPIKE Prime-hubb får paletten i Logikblock blocken från Robot Inventor-appen. Block som bara den här hubben kan köra har en svartvit **hubbikon**.

| Kategori | Robot Inventor-block |
|---|---|
| [Rörelse](/docs/Application/BlockBuilder/Blocks/Movement) (ny kategori) | rörelsemotorer, hastighet, sträcka per varv, köra, styra, bandvagnsstyrning, acceleration, stopp, ”avbröts rörelsen?” |
| [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | starta med kraft, ”avbröts motorn?”, plus motorkraft och stoppdetektering |
| [Ljus](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | bild i några sekunder, animationer med bildrutsredigerare, pixelljusstyrka, plus avståndssensorns lampor |
| [Ljud](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pip, hubbens robotljud, volym, ljudeffekter, musik: toner, trummor, pauser, instrument, tempo |
| [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | kraftsensor, gester, orientering, yaw / tippning / rollning, nollställa yaw, vinkelhastighet, acceleration, lutning, radio mellan hubbar |
| [Händelser](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | när hubben skakas eller knackas, ligger på en sida, lutas, när kraftsensorn trycks in, när en radiosignal kommer |

Robot Inventor-appens block för kontroll, operatorer, variabler, listor och Mina block är desamma som MOCPilots egna [grundblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). De block som de allmänna hubbblocken redan täcker (motorhastighet och position, färg- och avståndssensorerna, ljusmatrisen, hubbknappen, timern) finns i sina vanliga kategorier.

## Köra programmet på hubben {#download}

Precis som Robot Inventor-appen kan MOCPilot skriva ett Logikblock-program till en av hubbens 20 programplatser (0–19). Hubben kör det sedan utan appen: du kan koppla från telefonen eller datorn och starta programmet igen senare med hubbens egna knappar.

### Platsknappen och platskortet {#slot-card}

När en Robot Inventor- eller SPIKE Prime-hubb är ansluten till en Logikblock-profil visas en knapp i redigerarens nedre högra hörn, bredvid zoomen. Den visar det valda platsnumret på en liten 5×5-matris, eller en streamingsymbol. Tryck på den för att öppna kortet:

- hubben med den valda platsen; **‹** och **›** väljer plats 0–19;
- **Ladda ner / Streaming**: hur **Kör** fungerar för den här hubben;
- **nedladdningsknappen** (⤓): skriver programmet till platsen utan att starta det;
- en statusrad: förloppet, *Plats 3: programmet finns på hubben*, eller vad som gick fel.

När flera Robot Inventor- eller SPIKE Prime-hubbar är anslutna har kortet också en hubbknapp: tryck på den för att välja vilken hubb som får programmet. MOCPilot kommer ihåg läget och platsen på den här enheten.

<Screenshot name="robot-inventor-slot-card" alt="Platskortet: hubben, platspilarna, omkopplaren Ladda ner / Streaming och nedladdningsknappen" width={500} />

### Ladda ner {#download-mode}

I läget **Ladda ner** gör **Kör** om blockprogrammet till ett hubbprogram, skriver det till den valda platsen och startar det på hubben. Skrivningen tar några sekunder; sedan körs programmet på hubben på egen hand.

- För att starta det igen senare utan appen väljer du platsen med hubbens vänster- och högerknapp och trycker på mittknappen.
- Hubbens **mittknapp** stoppar programmet.
- För att åter köra program från MOCPilot ställer du om kortet till **Streaming**.

### Vad som kan köras på hubben {#download-blocks}

De flesta block kan skickas till hubben:

- händelser: programstart, meddelanden, villkor, timern, hubbknapparna, sensorer, gester, orientering, lutning och radiosignaler;
- kontroll, operatorer, variabler, listor och Mina block;
- alla Robot Inventor-block, och den här hubbens motor-, ljus- och sensorblock.

Vissa block behöver appen och kan inte köras på hubben ensam: instrumentpanelens och handkontrollens block, block för andra hubbar, händelsen för **mittknappen** (på hubben stoppar den knappen programmet), batteri- och anslutningshändelser, temperaturen och kalibreringen av kuggstången. Om programmet innehåller något av dem skrivs ingenting: kortet visar **De här blocken kan inte köras på hubben utan appen** och listar dem. Ta bort de blocken eller använd **Streaming**.

Om skrivningen misslyckas visar statusraden varför, till exempel **Inte tillräckligt med utrymme på hubben** eller **Hubben svarade inte**. Försök igen, eller starta om hubben om det fortsätter att misslyckas.

## Firmware {#firmware}

MOCPilot fungerar med hubbens egen LEGO-firmware och ersätter den inte:

- **Robot Inventor-hubben**: firmwaren från MINDSTORMS Robot Inventor-appen. Den senaste versionen är firmware 1.5.6 med hubbprogramvara 3.2.36.
- **SPIKE Prime-hubben**: firmwaren **SPIKE Legacy** (den från SPIKE 2-appen). Den nyare firmwaren **SPIKE App 3** stöds inte: MOCPilot säger till när den hittar en sådan hubb. Installera SPIKE Legacy-firmwaren med appen LEGO® Education SPIKE™ Legacy och anslut sedan igen.

När hubben är redo visar den ett programplatsnummer på sin ljusmatris.

## Om hubben inte startar {#restore}

Om hubben inte startar, förblir mörk, inte visar något platsnummer eller har bytts till firmwaren SPIKE App 3 återställer du den först med den officiella appen:

1. Öppna MINDSTORMS Robot Inventor-appen (SPIKE Legacy-appen för en SPIKE Prime-hubb) och anslut hubben med USB-kabeln.
2. Starta hubbuppdateringen (**Update hub firmware**). Den skriver om firmwaren, hubbprogramvaran och robotljuden och tar ungefär 6 minuter. Koppla inte ur hubben medan den pågår.
3. Stäng LEGO-appen och anslut hubben i MOCPilot.

### Återställningsläge (DFU) {#dfu}

Bara om den officiella appen inte ser hubben alls kan du skriva firmwaren via hubbens återställningsläge (DFU). Det här är för erfarna användare:

1. Stäng av hubben och koppla ur den. Håll in **Bluetooth-knappen** och anslut USB-kabeln; håll kvar tills knappens lampa blinkar rött, grönt och blått. Datorn ser nu ”LEGO Technic Large Hub in DFU Mode”.
2. I Windows installerar du en gång WinUSB-drivrutinen för den enheten, till exempel med Zadig. Mac och Linux behöver ingen drivrutin.
3. Skriv firmwareavbildningen från Robot Inventor-appen (1.5.6) med `dfu-util` till adressen `0x08008000`. Hubben startar om av sig själv när den är klar. Koppla inte ur den medan den skriver.
4. Kör sedan **Update hub firmware** i Robot Inventor-appen (se ovan) för att återställa hubbprogramvaran och ljuden.

DFU skriver bara firmwaren. Själva återställningsstartprogrammet kan inte skrivas över, så du kan alltid försöka igen.
