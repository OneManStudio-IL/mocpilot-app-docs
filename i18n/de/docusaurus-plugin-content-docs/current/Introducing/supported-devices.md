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
- Der **Robot Inventor**-Hub (LEGO® Large Hub) und der **SPIKE Prime**-Hub (Beta, Firmware SPIKE Legacy) nutzen klassisches Bluetooth und sind auf iPhone und iPad nicht verfügbar. Unter Windows und auf dem Mac lassen sie sich auch mit einem USB-Kabel verbinden. Siehe [MINDSTORMS-Robot-Inventor-Hub](/docs/Application/Hubs/RobotInventorHub).
- Der **SPIKE Essential**-Hub (Beta) verbindet sich wie der Technic Hub über Bluetooth Low Energy: 2 Ports, ein Licht, Neigung und Beschleunigung. Auch er braucht die Firmware SPIKE Legacy; Hubs mit der Firmware SPIKE App 3 werden noch nicht unterstützt.
- Die Hubs SPIKE Prime und SPIKE Essential sind in der App mit **Beta** gekennzeichnet: Ihre Unterstützung ist neu und wurde noch nicht mit jedem Hub geprüft.
- Firmware-Updates und Wiederherstellung sind für Technic Hub, Technic Move Hub, BOOST Move Hub und City Hub verfügbar. Siehe [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating).
- Was jeder Hub über Motoren und Lichter hinaus kann, ist unter [Hub-spezifische Funktionen](/docs/Application/Hubs/HubFunctions) beschrieben.

## Motoren {#motors}

<SupportedMotorsTable />

Motoren mit Encoder (Winkelmotoren, Technic L und XL) melden Geschwindigkeit und Position. Sie lassen sich daher als Servos verwenden, um eine Gradzahl drehen und Positionen anfahren. Einfache Motoren (Zugmotor, einfacher mittlerer Linearmotor) nehmen nur eine Geschwindigkeit entgegen.

## Sensoren und Lichter {#sensors-and-lights}

<SupportedSensorsTable />

Der **Kraftsensor** funktioniert an den Robot Inventor- und SPIKE Prime-Hubs: Er misst, wie fest er gedrückt wird (0–10 N), und ob er gedrückt, fest gedrückt oder losgelassen ist. Siehe [Robot-Inventor-Blöcke: Kraftsensor](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). An Powered-Up-Hubs (Technic Hub, City Hub, BOOST) funktioniert er nicht.

Auch die eingebauten Sensoren der Hubs (Akku, Neigung, Beschleunigung, Temperatur) und die Sensoren Ihres Smartphones oder Tablets lassen sich nutzen. Siehe [Smartphone-Sensoren](/docs/Application/Dashboard/PhoneSensors).
