---
id: Troubleshooting
title: Problemen oplossen
description: "Oplossingen voor veelvoorkomende problemen met hubs, motoren, het dashboard, synchronisatie, aankopen, updates, geluid, de AI-bouwer en de afstandsbediening."
---

# Problemen oplossen {#troubleshooting}

## Hubs {#hubs}

**De hub wordt niet gevonden**
- Zet Bluetooth aan en geef MOCPilot in de systeeminstellingen toestemming om Bluetooth te gebruiken (op Android ook Apparaten in de buurt of Locatie). Zie [Bluetooth en machtigingen](/docs/Help/BluetoothPermissions).
- Zet de hub aan en druk vlak voor het scannen op de knop ervan; tik opnieuw op **Scan starten**.
- Controleer of de hub niet met een andere telefoon of app verbonden is (LEGO®-apps, een andere afstandsbediening). Sluit die.
- Vervang of laad de batterijen op.
- Robot Inventor: niet beschikbaar op iPhone en iPad. Mould King 4.0: niet beschikbaar op Windows.

**De hub verliest de verbinding**
- Breng het apparaat dichterbij: muren, metaal en andere 2,4 GHz-apparaten verkleinen het bereik.
- Zwakke batterijen veroorzaken onder belasting verbroken verbindingen: laad ze op of vervang ze.
- Sommige hubs schakelen zichzelf na een tijdje zonder opdrachten uit; maak opnieuw verbinding in **Mijn hubs**.
- Meer over bereik, adapters en machtigingen: [Bluetooth en machtigingen](/docs/Help/BluetoothPermissions).

**“Firmware-update vereist”**
- MOCPilot heeft ondersteunde firmware nodig voor Technic-, Technic Move-, BOOST- en City-hubs. Volg [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating). Is een update mislukt, zie dan [Firmware herstellen](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King reageert niet**
- Mould King-hubs ontvangen alleen opdrachten. Gebruik **Opnieuw verbinden**, controleer het kanaal (**Selecteer kanaal**) en gebruik maar één Mould King-type per profiel.

## Motoren en het programma {#motors-and-the-program}

**De motor beweegt niet**
- Loopt het programma (**Start**)? Is de hub verbonden?
- Zit de motor op de poort die het programma gebruikt? Controleer de [hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Snelle koppelingen: open **Problemen**; volg de live waarden langs de rij. Zie [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems).
- Logicablokken: begint het script met een gebeurtenisblok? Gebruik **Monitor** om de waarden te volgen.

**De motor draait de verkeerde kant op**
- Snelle koppelingen: voeg **Omkeren** toe aan de rij. Logicablokken: vermenigvuldig de waarde met −1.

**De motor kruipt of bromt als de joystick is losgelaten**
- Snelle koppelingen: voeg **Dode zone** toe. Logicablokken: negeer kleine waarden met *tussen*.

**De servobesturing staat niet in het midden of loopt tegen de eindaanslag**
- Snelle koppelingen: Servo met kalibratie **Auto**, of **Handmatig** met **Instellen als nul** en **Midden**; verklein de **Hoek**. Logicablokken: *kalibreer stuurinrichting*.
- Servo, Draaien met graden en Naar positie gaan hebben motoren met een encoder nodig; eenvoudige motoren en SBrick-poorten accepteren alleen een snelheid.

**Motoren blijven draaien na Stop**
- Logicablokken: zet **Hubpoorten stoppen wanneer programma stopt** aan in Editorinstellingen.

## Dashboard {#dashboard}

**Ik kan een bedieningselement niet verplaatsen of verwijderen**
- Het is vergrendeld: kies **Ontgrendelen** in het menu ervan. Een bedieningselement dat door het programma wordt gebruikt, kun je pas verwijderen als je de bijbehorende rijen of blokken hebt verwijderd.

**“Er is geen beschikbare ruimte op het scherm”**
- Verplaats of verklein andere bedieningselementen, of kies een kleinere grootte.

**Een thema of bedieningselement is vergrendeld**
- Je bezit het niet: koop het of neem [MocPilot Pro](/docs/Application/Account/Pro), of zet het bedieningselement met **Thema wijzigen** over op het thema Basis.

**De gamepad wordt niet herkend**
- Koppel de gamepad in de Bluetooth-instellingen van het systeem (of sluit hem aan via USB). De pagina **Gamepad** toont **Gamepad: (naam)** als de app hem ziet, en “Gamepad is niet verbonden” als dat niet zo is.
- Zet **Gamepad-blokken inschakelen** aan op de pagina **Gamepad**, anders verschijnen de gamepadinvoer en -blokken niet.
- Meerdere gamepads verbonden? Kies er een in **Gamepad selecteren**.
- Controleer de knoppen en sticks met **Gamepad testen**.
- Windows: Xbox-controllers (XInput) en Sony DualSense / DualSense Edge werken; andere controllers zonder XInput-ondersteuning werken mogelijk niet.
- Zie [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profielen en synchronisatie {#profiles-and-sync}

**Mijn profielen staan niet op mijn andere apparaat**
- Log op beide apparaten in met hetzelfde account en controleer de internetverbinding. Toont de app **Offline**, tik dan op **Opnieuw proberen** of **Online gaan**.

**“Profiel is niet compatibel”**
- Het profiel is gemaakt met een nieuwere versie van MOCPilot. Werk de app bij.

**Ik ben mijn profielen kwijt na het opnieuw installeren**
- In gastmodus staan profielen alleen op het apparaat en verdwijnen ze samen met de app. Met een account log je opnieuw in en komen ze terug.

## E-mails van je account {#account-emails}

**De activeringsmail of de code om je wachtwoord te resetten komt niet aan**
- Wacht een paar minuten en kijk in de map met spam of ongewenste e-mail. De e-mails komen van no-reply@mocpilot.com.
- Controleer of je het e-mailadres goed hebt getypt.
- Activering: open je accountpagina en tik op **Stuur activatiemail opnieuw**. Zolang het account niet is geverifieerd, blijven sommige functies uitgeschakeld.
- Wachtwoord resetten: “E-mail niet gevonden” betekent dat er geen account met dit e-mailadres is; probeer het adres waarmee je je hebt aangemeld. Tik anders opnieuw op **Resetten** naast “Wachtwoord vergeten?” om een nieuwe code te krijgen. Zie [Account](/docs/Application/Account/UserAccount).

## Aankopen {#purchases}

**Er ontbreekt een aankoop**
- Log in met het account waarmee je de aankoop hebt gedaan en ga naar **Account → Aankopen → Herstellen**.
- “Abonnement gekoppeld aan een ander account”: het Pro-abonnement van dit storeaccount hoort bij een ander MOCPilot-account.

**“MocPilot Pro moet online worden gecontroleerd”**
- Pro is lange tijd offline gebruikt. Maak verbinding met internet, dan gebeurt de controle vanzelf.

## App-updates {#app-updates}

**“Update vereist”**
- De schermvullende melding “Deze versie van MOCPilot wordt niet meer ondersteund…” betekent dat deze versie niet meer kan worden gebruikt. Tik op **Bijwerken** om de store te openen en de nieuwe versie te installeren. Het scherm toont ook je **Geïnstalleerde versie**.
- In de webeditor heet de knop **Pagina herladen**: de nieuwste editor wordt geladen.

**“MOCPilot (versie) is beschikbaar”**
- Er is een nieuwere versie uit. Tik op **Bijwerken** (in de webeditor **Pagina herladen**), of sluit de banner met ×: hij komt pas bij de volgende versie terug.

## Geluid {#sound}

**Er is geen geluid**
- Zet **Geluid** aan in [Instellingen](/docs/Application/Account/Settings): daarmee worden alle geluiden van de app, de bedieningselementen en het programma gedempt.
- Zet het mediavolume van het apparaat hoger. Als er een koptelefoon of Bluetooth-luidspreker is aangesloten, speelt het geluid daar af.
- Logicablokken: controleer of het programma het volume niet op 0 zet of alle geluiden stopt. Zie [Geluiden](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI-bouwer {#ai-builder}

**De AI-bouwer is niet beschikbaar of toont een fout**
- De AI-bouwer heeft [MocPilot Pro](/docs/Application/Account/Pro) en een internetverbinding nodig: “De AI-bouwer vereist MocPilot Pro.” of “De AI-dienst is niet bereikbaar. Controleer je internetverbinding en probeer het opnieuw.”
- “De AI-dienst is tijdelijk niet beschikbaar. Probeer het later opnieuw.” of “Er zijn nu te veel AI-verzoeken. Probeer het over een minuut opnieuw.”: wacht even en probeer het opnieuw.
- Er gelden dag- en maandlimieten: “Je hebt de daglimiet voor AI-verzoeken bereikt. Probeer het morgen opnieuw.”
- Spraakinvoer: sta de microfoon (en op Apple-apparaten spraakherkenning) toe in de systeeminstellingen; zie [Bluetooth en machtigingen](/docs/Help/BluetoothPermissions).
- Alle meldingen en wat je moet doen: [AI-bouwer](/docs/Application/Profiles/AiBuilder).

## Afstandsbediening {#remote-control}

**Het hub-apparaat maakt geen verbinding of de verbinding valt weg**
- “Afstandsbediening hoort bij MocPilot Pro”: het account van de afstandsbediening heeft [MocPilot Pro](/docs/Application/Account/Pro) nodig.
- “De code is verlopen…” of “Verkeerde of verlopen code…”: de verbindingscode is 5 minuten geldig. Toon een nieuwe code op de afstandsbediening en scan of typ die opnieuw.
- “Geef MOCPilot in de systeeminstellingen toegang tot de camera om de code te scannen.”: sta de camera toe in de systeeminstellingen ([zo doe je dat](/docs/Help/BluetoothPermissions)), of tik op **Code invoeren** en typ de 6 cijfers.
- “Deze versie van de app kan geen verbinding maken met een afstandsbediening” of “Het andere apparaat kon het profiel niet openen”: werk MOCPilot op beide apparaten bij.
- “Verbinding met de afstandsbediening verbroken…”: controleer of beide apparaten online zijn. Is de verbinding ongeveer 4 seconden weg, dan stopt het hub-apparaat het profiel en alle motoren.
- Meer: [Afstandsbediening](/docs/Application/Profiles/RemoteControl).

## Kom je er nog niet uit? {#still-stuck}

Gebruik **Stel een vraag** of **Meld een bug** in **Help** van de app (computer: het menu **Help**). Het antwoord komt per e-mail en in **Meldingen**.
