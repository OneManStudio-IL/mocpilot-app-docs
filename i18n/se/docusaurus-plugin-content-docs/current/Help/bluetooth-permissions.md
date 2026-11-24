---
id: BluetoothPermissions
title: Bluetooth och behörigheter
description: "Vilka behörigheter MOCPilot ber om på varje plattform, varför, och hur du åtgärdar en nekad behörighet eller ett Bluetooth-problem."
---

# Bluetooth och behörigheter

MOCPilot kommunicerar med hubbar via Bluetooth, så systemet ber dig att tillåta det. Några andra behörigheter efterfrågas bara när du använder en funktion som behöver dem.

## Vad MOCPilot ber om och varför {#what-mocpilot-asks-for-and-why}

| Behörighet | När den efterfrågas | Varför |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | första gången du söker efter en hubb | för att hitta och ansluta hubbar |
| **Enheter i närheten** (Android 12 och senare) | första gången du söker efter en hubb | för att hitta och ansluta hubbar |
| **Plats**, exakt (Android 10 och 11) | första gången du söker efter en hubb | Android kräver det för Bluetooth-sökning i dessa versioner. MOCPilot samlar inte in, sparar eller delar din plats |
| **Plats** (Android, Mould King-hubbar) | när du ansluter en Mould King-hubb | appen skickar kommandon till Mould King-hubbar som Bluetooth-sändningar och ber om Plats för det i alla Android-versioner |
| **Kamera** (telefon, surfplatta) | när du skannar en QR-kod i **Anslut en fjärrkontroll** | för att läsa [anslutningskoden](/docs/Application/Profiles/RemoteControl). Du kan skriva de 6 siffrorna i stället |
| **Mikrofon** (iPhone, iPad, Mac, Android) | första gången du dikterar en förfrågan till [AI-byggaren](/docs/Application/Profiles/AiBuilder) | röstinmatning |
| **Taligenkänning** (iPhone, iPad, Mac) | tillsammans med mikrofonen | för att göra om din röst till text |

I Windows ber MOCPilot inte om någon Bluetooth-behörighet; Bluetooth behöver bara vara påslaget. För röstinmatning i Windows föreslår MOCPilot röstinmatning i Windows (Win+H).

## Om du har nekat en behörighet {#if-you-denied-a-permission}

Om du har nekat en behörighet frågar systemet oftast inte igen. MOCPilot visar då ett meddelande, till exempel **Skanningen misslyckades** med ”Appen behöver behörighet att skanna enheter i närheten…”, ”Tillåt MOCPilot att använda kameran i systeminställningarna för att skanna koden.” eller ”Tillåt mikrofonåtkomst för MOCPilot i systeminställningarna”. Slå på behörigheten i systeminställningarna och gå tillbaka till appen:

**iPhone och iPad**
1. Öppna **Inställningar** och rulla ned till **MOCPilot**.
2. Slå på **Bluetooth** (och **Kamera**, **Mikrofon** eller **Taligenkänning** om du behöver dem).

**Android** (namnen varierar lite mellan tillverkare)
1. Öppna **Inställningar → Appar → MOCPilot → Behörigheter**.
2. Tillåt **Enheter i närheten**. På Android 10 och 11, eller för Mould King-hubbar, tillåter du också **Plats** och slår på **Använd exakt plats**.
3. Tillåt **Kamera** eller **Mikrofon** om du behöver dem.

**Mac**
1. Öppna **Systeminställningar → Integritet och säkerhet**.
2. Välj **Bluetooth** (eller **Mikrofon**, **Taligenkänning**) och slå på **MOCPilot**.

**Windows**
1. Öppna **Inställningar → Bluetooth och enheter** och slå på **Bluetooth**.

## ”Bluetooth är avstängt” {#bluetooth-is-off}

MOCPilot visar **Bluetooth är avstängt** när enhetens Bluetooth är avstängt. Slå på det i kontrollcentret, snabbinställningarna eller systeminställningarna och bekräfta sedan meddelandet: appen söker igen.

## Bluetooth-adaptrar i Windows {#bluetooth-adapters-on-windows}

- Du behöver en adapter för Bluetooth 4.0 (LE) eller senare: inbyggd i datorn eller en USB-dongel.
- **Mould King 6.0** kräver en adapter och drivrutin som kan skicka Bluetooth-sändningar (advertising). Alla adaptrar klarar inte det.
- **Mould King 4.0** fungerar inte i Windows: appen säger ”Mould King-hubbar med 4 portar kräver Bluetooth-annonsering med tjänstdata, vilket Windows inte stöder.” Använd en telefon eller surfplatta för dessa hubbar.

## Hubbar med klassisk Bluetooth {#classic-bluetooth-hubs}

**Robot Inventor**-hubben använder klassisk Bluetooth, inte Bluetooth Low Energy. Den fungerar på Android, Mac och Windows, men inte på iPhone och iPad. Om MOCPilot inte hittar den i Windows parkopplar du först hubben under **Inställningar → Bluetooth och enheter → Lägg till enhet** och söker sedan igen i appen. På Windows och Mac kan du också ansluta den med en USB-kabel; se [MINDSTORMS Robot Inventor-hubben](/docs/Application/Hubs/RobotInventorHub#connect).

Alla andra hubbar som stöds använder Bluetooth Low Energy och läggs bara till i MOCPilot, inte i systemets Bluetooth-inställningar.

## En stabil anslutning {#a-stable-connection}

- **En app i taget.** En hubb tar bara emot en anslutning. Stäng LEGO®-appar och andra fjärrkontrollappar, och koppla bort hubben från andra telefoner.
- **Räckvidd.** Håll enheten inom några meter från modellen. Väggar, metall, din kropp och andra 2,4 GHz-enheter (Wi-Fi-routrar, andra Bluetooth-enheter) minskar räckvidden.
- **Batterier.** Svaga batterier orsakar frånkopplingar när motorerna arbetar hårt.
- **Låt appen vara öppen.** Kör med MOCPilot på skärmen och slå på **Håll skärmen på** i [Inställningar](/docs/Application/Account/Settings) så att skärmen inte släcks medan en profil är öppen.

Fler lösningar för hubbar som inte hittas eller som hela tiden kopplas från: [Felsökning](/docs/Help/Troubleshooting#hubs).
