---
id: SystemRequirements
title: Systeemvereisten
description: "Ondersteunde besturingssystemen, Bluetooth, geheugen en browsers voor MOCPilot."
---

# Systeemvereisten {#system-requirements}

MOCPilot werkt op telefoons, tablets en computers. Om een model te besturen heeft het apparaat ook Bluetooth en een [ondersteunde hub](/docs/Introducing/SupportedDevices) nodig.

## Besturingssystemen {#operating-systems}

| Platform | Minimale versie | Verkrijgbaar via |
|---|---|---|
| iPhone en iPad | iOS / iPadOS 17 | App Store |
| Android-telefoons en -tablets | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-pc (64-bit, x64) | Windows 10 versie 1809 of Windows 11 | Microsoft Store |

De links naar de stores vind je op [mocpilot.com](https://mocpilot.com). De app kiest zelf de telefoon-, tablet- of desktopindeling; zie [Telefoon, tablet en desktop](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubs maken verbinding via **Bluetooth Low Energy** (Bluetooth 4.0 of nieuwer). Vrijwel elke telefoon en tablet heeft dat; op een computer gebruik je de ingebouwde adapter of een USB-Bluetooth-dongle.
- De **Robot Inventor**-hub gebruikt klassieke Bluetooth. Die werkt op Android, Mac en Windows, maar niet op iPhone en iPad.
- **Mould King**-hubs ontvangen opdrachten als Bluetooth-uitzendingen (advertising). Op Windows heeft Mould King 6.0 een adapter en stuurprogramma nodig die kunnen uitzenden, en Mould King 4.0 werkt daar helemaal niet; gebruik daarvoor een telefoon of tablet.
- De app vraagt om toestemming voor Bluetooth (op Android ook voor Apparaten in de buurt of Locatie). Zie [Bluetooth en machtigingen](/docs/Help/BluetoothPermissions).

## Geheugen {#memory}

Op apparaten met minder dan 4 GB geheugen tekent MOCPilot Logicablokken op een eenvoudigere manier, zodat grote programma's soepel blijven. Dat gebeurt automatisch; de blokken werken hetzelfde.

## Webeditor {#web-editor}

De [webeditor](/docs/Introducing/WebEditor) op mocpilot.com werkt in de browser:

- gebruik een actuele desktopbrowser; de editor heeft WebAssembly nodig;
- bij de eerste keer openen wordt ongeveer 20 MB voor de editor en ongeveer 15 MB aan thema's gedownload, dus een snelle verbinding helpt;
- browsers kunnen geen verbinding maken met Bluetooth-hubs: om vanuit de browser een model te besturen gebruik je de [afstandsbediening](/docs/Application/Profiles/RemoteControl), waarvoor een browser met WebRTC-ondersteuning nodig is;
- zie je “The editor could not start in this browser.”, werk dan de browser bij of probeer een andere.

## Internet {#internet}

Hubs, je profielen en gedownloade thema's werken offline. Voor inloggen, synchronisatie, de catalogus, de AI-bouwer, de afstandsbediening en aankopen is een internetverbinding nodig. Zie [Offline werken](/docs/Application/Account/Sync#working-offline).
