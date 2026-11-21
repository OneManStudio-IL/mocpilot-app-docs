---
id: BluetoothPermissions
title: Bluetooth en machtigingen
description: "Om welke machtigingen MOCPilot op elk platform vraagt, waarom, en hoe je een geweigerde machtiging of een Bluetooth-probleem oplost."
---

# Bluetooth en machtigingen {#bluetooth-and-permissions}

MOCPilot communiceert via Bluetooth met hubs, dus het systeem vraagt je om toestemming. Om een paar andere machtigingen wordt alleen gevraagd als je een functie gebruikt die ze nodig heeft.

## Waar MOCPilot om vraagt en waarom {#what-mocpilot-asks-for-and-why}

| Machtiging | Wanneer erom wordt gevraagd | Waarom |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | de eerste keer dat je naar een hub zoekt | om hubs te vinden en te verbinden |
| **Apparaten in de buurt** (Android 12 en nieuwer) | de eerste keer dat je naar een hub zoekt | om hubs te vinden en te verbinden |
| **Locatie**, nauwkeurig (Android 10 en 11) | de eerste keer dat je naar een hub zoekt | Android vereist dit op deze versies voor het scannen naar Bluetooth-apparaten. MOCPilot verzamelt, bewaart en deelt je locatie niet |
| **Locatie** (Android, Mould King-hubs) | als je een Mould King-hub verbindt | de app stuurt opdrachten naar Mould King-hubs als Bluetooth-uitzendingen en vraagt daarvoor op elke Android-versie om Locatie |
| **Camera** (telefoon, tablet) | als je een QR-code scant in **Afstandsbediening verbinden** | om de [verbindingscode](/docs/Application/Profiles/RemoteControl) te lezen. Je kunt ook de 6 cijfers intypen |
| **Microfoon** (iPhone, iPad, Mac, Android) | de eerste keer dat je een verzoek aan de [AI-bouwer](/docs/Application/Profiles/AiBuilder) dicteert | spraakinvoer |
| **Spraakherkenning** (iPhone, iPad, Mac) | samen met de microfoon | om je stem om te zetten in tekst |

Op Windows vraagt MOCPilot niet om een Bluetooth-machtiging; Bluetooth hoeft alleen aan te staan. Voor spraakinvoer op Windows stelt MOCPilot spraaktypen van Windows voor (Win+H).

## Als je een machtiging hebt geweigerd {#if-you-denied-a-permission}

Heb je een machtiging geweigerd, dan vraagt het systeem er meestal niet opnieuw om. MOCPilot toont dan een melding, bijvoorbeeld **Scan mislukt** met “De app heeft toestemming nodig om apparaten in de buurt te scannen…”, “Geef MOCPilot in de systeeminstellingen toegang tot de camera om de code te scannen.” of “Geef MOCPilot toegang tot de microfoon in de systeeminstellingen”. Zet de machtiging aan in de systeeminstellingen en ga terug naar de app:

**iPhone en iPad**
1. Open **Instellingen** en scrol omlaag naar **MOCPilot**.
2. Zet **Bluetooth** aan (en **Camera**, **Microfoon** of **Spraakherkenning** als je die nodig hebt).

**Android** (de namen verschillen een beetje per fabrikant)
1. Open **Instellingen → Apps → MOCPilot → Rechten**.
2. Sta **Apparaten in de buurt** toe. Op Android 10 en 11, of voor Mould King-hubs, sta je ook **Locatie** toe en zet je **Exacte locatie gebruiken** aan.
3. Sta **Camera** of **Microfoon** toe als je die nodig hebt.

**Mac**
1. Open **Systeeminstellingen → Privacy en beveiliging**.
2. Kies **Bluetooth** (of **Microfoon**, **Spraakherkenning**) en zet **MOCPilot** aan.

**Windows**
1. Open **Instellingen → Bluetooth en apparaten** en zet **Bluetooth** aan.

## “Bluetooth is uitgeschakeld” {#bluetooth-is-off}

MOCPilot toont **Bluetooth is uitgeschakeld** als Bluetooth op het apparaat uit staat. Zet het aan via het bedieningscentrum, de snelle instellingen of de systeeminstellingen en bevestig de melding: de app zoekt opnieuw.

## Bluetooth-adapters op Windows {#bluetooth-adapters-on-windows}

- Je hebt een adapter voor Bluetooth 4.0 (LE) of nieuwer nodig: ingebouwd in de computer of een USB-dongle.
- **Mould King 6.0** heeft een adapter en stuurprogramma nodig die Bluetooth-uitzendingen (advertising) kunnen versturen. Niet elke adapter kan dat.
- **Mould King 4.0** werkt niet op Windows: de app meldt “Mould King-hubs met 4 poorten vereisen Bluetooth-advertising met servicegegevens, wat Windows niet ondersteunt.” Gebruik voor deze hubs een telefoon of tablet.

## Hubs met klassieke Bluetooth {#classic-bluetooth-hubs}

De **Robot Inventor**-hub gebruikt klassieke Bluetooth, geen Bluetooth Low Energy. Hij werkt op Android, Mac en Windows, maar niet op iPhone en iPad. Vindt MOCPilot hem op Windows niet, koppel de hub dan eerst via **Instellingen → Bluetooth en apparaten → Apparaat toevoegen** en zoek daarna opnieuw in de app.

Alle andere ondersteunde hubs gebruiken Bluetooth Low Energy en voeg je alleen in MOCPilot toe, niet in de Bluetooth-instellingen van het systeem.

## Een stabiele verbinding {#a-stable-connection}

- **Eén app tegelijk.** Een hub accepteert maar één verbinding. Sluit LEGO®-apps en andere besturingsapps en verbreek de verbinding van de hub met andere telefoons.
- **Bereik.** Houd het apparaat binnen een paar meter van het model. Muren, metaal, je lichaam en andere 2,4 GHz-apparaten (wifirouters, andere Bluetooth-apparaten) verkleinen het bereik.
- **Batterijen.** Zwakke batterijen veroorzaken verbroken verbindingen als de motoren zwaar werken.
- **Houd de app open.** Rijd met MOCPilot op het scherm en zet **Scherm ingeschakeld houden** aan in [Instellingen](/docs/Application/Account/Settings), zodat het scherm niet uitgaat terwijl er een profiel open is.

Meer oplossingen voor hubs die niet worden gevonden of steeds de verbinding verliezen: [Problemen oplossen](/docs/Help/Troubleshooting#hubs).
