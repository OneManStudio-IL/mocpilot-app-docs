---
id: SystemRequirements
title: Systemanforderungen
description: "Unterstützte Betriebssysteme, Bluetooth, Arbeitsspeicher und Browser für MOCPilot."
---

# Systemanforderungen {#system-requirements}

MOCPilot läuft auf Smartphones, Tablets und Computern. Um ein Modell zu steuern, braucht das Gerät außerdem Bluetooth und einen [unterstützten Hub](/docs/Introducing/SupportedDevices).

## Betriebssysteme {#operating-systems}

| Plattform | Mindestversion | Bezugsquelle |
|---|---|---|
| iPhone und iPad | iOS / iPadOS 17 | App Store |
| Android-Smartphones und -Tablets | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-PC (64 Bit, x64) | Windows 10 Version 1809 oder Windows 11 | Microsoft Store |

Die Links zu den Stores finden Sie auf [mocpilot.com](https://mocpilot.com). Die App wählt das Smartphone-, Tablet- oder Desktop-Layout selbst; siehe [Smartphone, Tablet und Desktop](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubs werden über **Bluetooth Low Energy** (Bluetooth 4.0 oder neuer) verbunden. Fast jedes Smartphone und Tablet unterstützt es; an einem Computer verwenden Sie den eingebauten Adapter oder einen USB-Bluetooth-Stick.
- Der **Robot Inventor**-Hub nutzt klassisches Bluetooth. Er funktioniert unter Android, auf dem Mac und unter Windows, aber nicht auf iPhone und iPad. Unter Windows und auf dem Mac kann er auch über ein USB-Kabel verbunden werden.
- **Mould King**-Hubs empfangen Befehle als Bluetooth-Broadcasts (Advertising). Unter Windows benötigt Mould King 6.0 einen Adapter und Treiber, die Broadcasts senden können, und Mould King 4.0 funktioniert dort gar nicht; verwenden Sie dafür ein Smartphone oder Tablet.
- Die App fragt nach der Bluetooth-Berechtigung (unter Android auch nach „Geräte in der Nähe“ oder dem Standort). Siehe [Bluetooth und Berechtigungen](/docs/Help/BluetoothPermissions).

## Arbeitsspeicher {#memory}

Auf Geräten mit weniger als 4 GB Arbeitsspeicher stellt MOCPilot Logikblöcke vereinfacht dar, damit auch große Programme flüssig bleiben. Das geschieht automatisch; die Blöcke funktionieren genauso.

## Web-Editor {#web-editor}

Der [Web-Editor](/docs/Introducing/WebEditor) auf mocpilot.com läuft im Browser:

- verwenden Sie einen aktuellen Desktop-Browser; der Editor benötigt WebAssembly;
- beim ersten Öffnen werden etwa 20 MB für den Editor und etwa 15 MB an Themes heruntergeladen, eine schnelle Verbindung ist also hilfreich;
- Browser können sich nicht mit Bluetooth-Hubs verbinden: Um ein Modell aus dem Browser zu steuern, verwenden Sie die [Fernsteuerung](/docs/Application/Profiles/RemoteControl), die einen Browser mit WebRTC-Unterstützung erfordert;
- wenn Sie „The editor could not start in this browser.“ sehen, aktualisieren Sie den Browser oder probieren Sie einen anderen.

## Internet {#internet}

Hubs, Ihre Profile und heruntergeladene Themes funktionieren offline. Anmeldung, Synchronisierung, Katalog, KI-Builder, Fernsteuerung und Käufe erfordern eine Internetverbindung. Siehe [Offline arbeiten](/docs/Application/Account/Sync#working-offline).
