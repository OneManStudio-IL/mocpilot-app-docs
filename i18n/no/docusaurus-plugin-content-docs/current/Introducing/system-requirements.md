---
id: SystemRequirements
title: Systemkrav
description: "Støttede operativsystemer, Bluetooth, minne og nettlesere for MOCPilot."
---

# Systemkrav {#system-requirements}

MOCPilot kjører på telefoner, nettbrett og datamaskiner. For å kjøre en modell trenger enheten også Bluetooth og en [støttet hub](/docs/Introducing/SupportedDevices).

## Operativsystemer {#operating-systems}

| Plattform | Minste versjon | Hvor du får den |
|---|---|---|
| iPhone og iPad | iOS / iPadOS 17 | App Store |
| Android-telefoner og -nettbrett | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-PC (64-bit, x64) | Windows 10 versjon 1809 eller Windows 11 | Microsoft Store |

Du finner lenkene til butikkene på [mocpilot.com](https://mocpilot.com). Appen velger selv telefon-, nettbrett- eller skrivebordsoppsett; se [Telefon, nettbrett og datamaskin](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubber kobles til over **Bluetooth Low Energy** (Bluetooth 4.0 eller nyere). Nesten alle telefoner og nettbrett har det; på en datamaskin bruker du den innebygde adapteren eller en USB-Bluetooth-adapter.
- **Robot Inventor**-huben bruker klassisk Bluetooth. Den fungerer på Android, Mac og Windows, men ikke på iPhone og iPad. På Windows og Mac kan den også kobles til med en USB-kabel.
- **Mould King**-hubber tar imot kommandoer som Bluetooth-kringkasting (advertising). På Windows trenger Mould King 6.0 en adapter og driver som kan kringkaste, og Mould King 4.0 fungerer ikke i det hele tatt; bruk en telefon eller et nettbrett til den.
- Appen ber om tillatelse til Bluetooth (på Android også Enheter i nærheten eller Posisjon). Se [Bluetooth og tillatelser](/docs/Help/BluetoothPermissions).

## Minne {#memory}

På enheter med mindre enn 4 GB minne tegner MOCPilot Logikkblokker på en enklere måte, slik at store programmer fortsatt går jevnt. Dette skjer automatisk; blokkene fungerer likt.

## Webeditor {#web-editor}

[Webeditoren](/docs/Introducing/WebEditor) på mocpilot.com kjører i nettleseren:

- bruk en oppdatert nettleser på datamaskin; editoren trenger WebAssembly;
- første gang lastes det ned rundt 20 MB for editoren og rundt 15 MB med temaer, så en rask forbindelse hjelper;
- nettlesere kan ikke koble til Bluetooth-hubber: for å kjøre en modell fra nettleseren bruker du [fjernstyring](/docs/Application/Profiles/RemoteControl), som krever en nettleser med støtte for WebRTC;
- hvis du ser «The editor could not start in this browser.», oppdaterer du nettleseren eller prøver en annen.

## Internett {#internet}

Hubber, profilene dine og nedlastede temaer fungerer frakoblet. Pålogging, synkronisering, katalogen, AI-byggeren, fjernstyring og kjøp krever internettforbindelse. Se [Jobbe frakoblet](/docs/Application/Account/Sync#working-offline).
