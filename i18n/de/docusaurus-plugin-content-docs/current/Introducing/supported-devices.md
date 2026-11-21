---
id: SupportedDevices
title: Unterstützte Hubs, Motoren und Sensoren
description: "Hubs, Motoren und Sensoren, die mit MOCPilot funktionieren."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Unterstützte Geräte {#supported-devices}

MOCPilot funktioniert mit diesen Hubs, Motoren und Sensoren. Jeder Hub funktioniert mit beiden Programmeditoren: [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing) und [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Hinweise:

- Ein Profil hat 5 Hub-Slots: 2 sind kostenlos, 3 weitere erhalten Sie mit dem Kauf eines zusätzlichen Hub-Slots oder mit [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King**-Hubs empfangen nur Befehle (keine Sensoren, keine Rückmeldung). In einem Profil kann nur ein Mould-King-Typ verwendet werden: bis zu 3 Mould King 4.0-Hubs oder 1 Mould King 6.0.
- Der **Robot Inventor**-Hub (LEGO® Large Hub) nutzt klassisches Bluetooth und ist auf iPhone und iPad nicht verfügbar.
- Firmware-Updates und Wiederherstellung sind für Technic Hub, Technic Move Hub, BOOST Move Hub und City Hub verfügbar. Siehe [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating).
- Was jeder Hub über Motoren und Lichter hinaus kann, ist unter [Hub-spezifische Funktionen](/docs/Application/Hubs/HubFunctions) beschrieben.

## Motoren {#motors}

<SupportedMotorsTable />

Motoren mit Encoder (Winkelmotoren, Technic L und XL) melden Geschwindigkeit und Position. Sie lassen sich daher als Servos verwenden, um eine Gradzahl drehen und Positionen anfahren. Einfache Motoren (Zugmotor, einfacher mittlerer Linearmotor) nehmen nur eine Geschwindigkeit entgegen.

## Sensoren und Lichter {#sensors-and-lights}

<SupportedSensorsTable />

Auch die eingebauten Sensoren der Hubs (Akku, Neigung, Beschleunigung, Temperatur) und die Sensoren Ihres Smartphones oder Tablets lassen sich nutzen. Siehe [Smartphone-Sensoren](/docs/Application/Dashboard/PhoneSensors).
