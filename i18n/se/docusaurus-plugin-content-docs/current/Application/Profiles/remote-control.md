---
id: RemoteControl
title: Fjärrstyrning
description: "Kör en profil på telefonen, surfplattan eller datorn bredvid modellen och styr den från en annan enhet eller från webbredigeraren."
---

import Screenshot from '@site/src/components/Screenshot';

# Fjärrstyrning

Med fjärrstyrning kan du köra en modell som är ansluten till en annan enhet. En enhet står bredvid modellen och kommunicerar med hubbarna via Bluetooth; du håller i den andra och använder dess instrumentpanel. Det är också så du kör en modell från [webbredigeraren](/docs/Introducing/WebEditor), eftersom webbläsare inte kan ansluta till hubbar.

## De två enheterna {#the-two-devices}

- **Hubenheten** är telefonen, surfplattan eller datorn bredvid modellen. Dess MOCPilot-app ansluter hubbarna och kör profilen. Den behöver inget konto.
- **Fjärrkontrollen** är det du styr från: MOCPilot-appen på en annan enhet, eller webbredigeraren på [mocpilot.com](https://mocpilot.com). Profilen öppnas på fjärrkontrollen, och fjärrkontrollen skickar den till hubenheten.

## Det här behöver du {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) på kontot som är inloggat på **fjärrkontrollen**. Hubenheten behöver varken konto eller Pro.
- MOCPilot-appen på hubenheten.
- Internetanslutning på båda enheterna.

## Anslut en hubenhet {#connect-a-hub-device}

1. Öppna profilen på fjärrkontrollen och tryck på **Fjärrstyrning** (fjärrkontrollikonen: ett hus med signalbågar) i profilens övre fält. I webbredigeraren trycker du på **Visa koden** i panelen som öppnas.

   Fjärrkontrollen visar en **anslutningskod**: en QR-kod och 6 siffror.
2. Öppna MOCPilot på hubenheten och tryck på **Anslut en fjärrkontroll** på sidan **Mina profiler**. På en Mac kan du också välja **Fil → Anslut en fjärrkontroll…**.
3. Ange koden:
   - **på en telefon eller surfplatta** riktar du kameran mot QR-koden, eller trycker på **Ange kod** och skriver de 6 siffrorna;
   - **på en dator** skriver du de 6 siffrorna och trycker på **Anslut**.
4. Enheterna ansluts. Fjärrkontrollen skickar profilen till hubenheten och startar den där, och hubenheten visar sidan **Fjärrstyrning** i helskärm.

<Screenshot name="remote-control-code" alt="Panelen Fjärrstyrning i en öppen profil med QR-koden och den 6-siffriga koden" width={900} />

Om anslutningskoden:

- Den fungerar en gång och gäller i 5 minuter. Så länge fjärrkontrollen visar den ersätts den av en ny kod när den går ut.
- Skanna den i MOCPilot-appen, inte med telefonens kameraapp.
- Om du stänger panelen på fjärrkontrollen innan hubenheten har anslutit händer ingenting; tryck på **Fjärrstyrning** igen för att få en ny kod.

<Screenshot name="remote-connect-code-entry" alt="Fönstret Anslut en fjärrkontroll på en dator med fältet för de 6 siffrorna" width={900} />

## När enheterna är anslutna {#when-the-devices-are-connected}

**På fjärrkontrollen:**

- Knappen **Fjärrstyrning** blir grön (på en telefon eller surfplatta en grön ring), och dess panel visar hubenhetens namn och knappen **Koppla från**.
- **Mina hubbar** visar hubenhetens hubbar. Anslut hubbarna därifrån som vanligt: hubenheten söker efter dem, så tryck på knappen på hubben när du blir ombedd.
- Instrumentpanelen styr modellen.

**På hubenheten** visar sidan **Fjärrstyrning** i helskärm:

- statusen, till exempel **Kör «Min bil»**;
- **Anslutna hubbar: N** och, medan den söker, **Söker efter en hubb: tryck på knappen på hubben.**;
- en påminnelse: **Låt appen vara öppen. Det här är hubenheten: den ansluter hubbarna och kör profilen, fjärrkontrollen styr bara den.**;
- knappen **Stoppa**.

Hubenhetens skärm förblir tänd medan den är ansluten. Profilen sparas inte på hubenheten och visas inte i dess profillista.

<Screenshot name="remote-hub-device" alt="Sidan Fjärrstyrning i helskärm på hubenheten med anslutningsstatus, antal anslutna hubbar och knappen Stoppa" width={900} />

## Kör och Stoppa {#run-and-stop}

- Tryck på **Stoppa** på fjärrkontrollen för att stoppa profilen på hubenheten. Hubenheten stoppar alltid alla motorer, även om **Stoppa hubbportar när programmet stoppar** är avstängt i profilen.
- Tryck på **Kör** på fjärrkontrollen för att starta den på hubenheten igen.
- I webbredigeraren förblir hubenheten parkopplad för alla profiler du öppnar i samma webbläsarflik: **Kör** startar profilen på hubenheten. När ingen hubenhet är parkopplad kör **Kör** profilen i webbläsaren, utan hubbar.

## Om anslutningen bryts {#if-the-connection-drops}

:::caution Säkerhet
Om hubenheten inte hör något från fjärrkontrollen på 4 sekunder stoppar den profilen och alla motorer.
:::

Då:

- visar hubenheten **Anslutningen till fjärrkontrollen bröts. Profilen stoppades. Väntar på fjärrkontrollen…** och väntar;
- visar appen på fjärrkontrollen **Anslutningen bröts. Försöker igen…** med **Försök igen** och **Koppla från**;
- visar webbredigeraren **Hubenheten kopplades från**: ”*enheten* slutade svara. Profilen på den stoppades och dess motorer stängdes av.” Den fortsätter att försöka återansluta; du kan också trycka på **Återanslut**, **Kör i webbläsaren** eller **Stoppa**.

När enheterna är anslutna igen kontrollerar du statusen på fjärrkontrollen och trycker på **Kör** om profilen inte körs.

## Koppla från {#disconnect}

- **På fjärrkontrollen**: tryck på **Fjärrstyrning** och välj **Koppla från**.
- **På hubenheten**: tryck på **Stoppa** på sidan **Fjärrstyrning**.

I båda fallen stoppas profilen och motorerna, och hubenheten stänger profilen.

## Felsökning {#troubleshooting}

| Meddelande | Var | Vad du gör |
|---|---|---|
| **Fjärrstyrning ingår i MocPilot Pro** | fjärrkontroll | Prenumerera på [MocPilot Pro](/docs/Application/Account/Pro) med fjärrkontrollens konto. Du kan inte prenumerera i webbläsaren: gör det i appen, så fungerar Pro även i webbredigeraren |
| **Ingen anslutning till servern** | båda | Kontrollera internetanslutningen och försök igen |
| **Kunde inte hämta en kod från servern** | fjärrkontroll | Tryck på **Visa koden** för att försöka igen |
| **Fel eller utgången kod. Kontrollera de 6 siffrorna som visas på fjärrkontrollen.** | hubenhet | Skriv de 6 siffror som fjärrkontrollen visar just nu |
| **Koden har gått ut. Visa en ny kod på fjärrkontrollen och skanna den igen.** | hubenhet | Tryck på **Fjärrstyrning** på fjärrkontrollen och skanna den nya koden |
| **Det här är ingen MOCPilot-kod. Skanna koden som fjärrkontrollen visar.** | hubenhet | Skanna QR-koden i panelen **Fjärrstyrning** på fjärrkontrollen |
| **För många felaktiga koder. Försök igen om några minuter.** | hubenhet | Vänta några minuter och ange sedan den aktuella koden |
| **Tillåt MOCPilot att använda kameran i systeminställningarna för att skanna koden.** | hubenhet | Tillåt kameraåtkomst i systeminställningarna, eller tryck på **Ange kod** och skriv de 6 siffrorna |
| **Fjärrkontrollen svarar inte. Kontrollera att profilen är öppen på den och att den är online.** | hubenhet | Håll profilen öppen på fjärrkontrollen och kontrollera dess internetanslutning |
| **Den här versionen av appen kan inte ansluta till en fjärrkontroll** | båda | Uppdatera MOCPilot |
| **Den här webbläsaren kan inte öppna en direktanslutning (WebRTC)** | webbredigerare | Använd en annan webbläsare, till exempel Chrome, Edge eller Safari |
| **Profilen är för stor** / **Profilen kom inte fram helt** | båda | Kontrollera anslutningen och tryck på **Kör** igen |
| **Den andra enheten kunde inte spara profilen** / **Den andra enheten kunde inte öppna profilen** | fjärrkontroll | Tryck på **Kör** igen; om det fortsätter att hända kopplar du från och ansluter hubenheten igen |
| **Anslutningen till *enheten* bröts** / **Anslutningen till fjärrkontrollen bröts. Väntar på den…** | båda | Se [Om anslutningen bryts](#if-the-connection-drops) |
