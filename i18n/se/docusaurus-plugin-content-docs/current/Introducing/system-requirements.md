---
id: SystemRequirements
title: Systemkrav
description: "Operativsystem, Bluetooth, minne och webbläsare som stöds av MOCPilot."
---

# Systemkrav

MOCPilot fungerar på telefoner, surfplattor och datorer. För att köra en modell behöver enheten också Bluetooth och en [hubb som stöds](/docs/Introducing/SupportedDevices).

## Operativsystem {#operating-systems}

| Plattform | Lägsta version | Var du hämtar appen |
|---|---|---|
| iPhone och iPad | iOS / iPadOS 17 | App Store |
| Android-telefoner och surfplattor | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-dator (64-bitars, x64) | Windows 10 version 1809 eller Windows 11 | Microsoft Store |

Du hittar länkarna till butikerna på [mocpilot.com](https://mocpilot.com). Appen väljer själv layout för telefon, surfplatta eller dator; se [Telefon, surfplatta och dator](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubbar ansluts via **Bluetooth Low Energy** (Bluetooth 4.0 eller senare). Nästan alla telefoner och surfplattor har det; på en dator använder du den inbyggda adaptern eller en USB-Bluetooth-dongel.
- **Robot Inventor**-hubben använder klassisk Bluetooth. Den fungerar på Android, Mac och Windows, men inte på iPhone och iPad. På Windows och Mac kan den också anslutas med en USB-kabel.
- **Mould King**-hubbar tar emot kommandon som Bluetooth-sändningar (advertising). I Windows kräver Mould King 6.0 en adapter och drivrutin som kan sända, och Mould King 4.0 fungerar inte alls; använd en telefon eller surfplatta för den.
- Appen ber om Bluetooth-behörighet (på Android även Enheter i närheten eller Plats). Se [Bluetooth och behörigheter](/docs/Help/BluetoothPermissions).

## Minne {#memory}

På enheter med mindre än 4 GB minne ritar MOCPilot Logikblock på ett enklare sätt, så att stora program fortsätter att flyta på. Det sker automatiskt; blocken fungerar likadant.

## Webbredigerare {#web-editor}

[Webbredigeraren](/docs/Introducing/WebEditor) på mocpilot.com körs i webbläsaren:

- använd en uppdaterad datorwebbläsare; redigeraren kräver WebAssembly;
- första gången laddas cirka 20 MB ned för redigeraren och cirka 15 MB teman, så en snabb anslutning hjälper;
- webbläsare kan inte ansluta till Bluetooth-hubbar: för att köra en modell från webbläsaren använder du [fjärrstyrning](/docs/Application/Profiles/RemoteControl), som kräver en webbläsare med stöd för WebRTC;
- om du ser ”The editor could not start in this browser.” uppdaterar du webbläsaren eller provar en annan.

## Internet {#internet}

Hubbar, dina profiler och nedladdade teman fungerar offline. Inloggning, synkronisering, katalogen, AI-byggaren, fjärrstyrning och köp kräver internetanslutning. Se [Arbeta offline](/docs/Application/Account/Sync#working-offline).
