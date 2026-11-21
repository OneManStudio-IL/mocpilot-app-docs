---
id: ConnectingHubs
title: Hub hinzufügen und verbinden
description: "Einen Hub einem Profil-Slot hinzufügen, verbinden, umbenennen und seine Sensoren im Hub-Monitor beobachten."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub hinzufügen und verbinden {#add-and-connect-a-hub}

Sie fügen einen Hub nur einmal zu einem Profil hinzu. Danach verbindet sich MOCPilot jedes Mal mit ihm, wenn Sie das Profil öffnen.

## Hub hinzufügen {#add-a-hub}

1. Öffnen Sie das Profil und tippen Sie auf **Meine Hubs** (⇧⌘H / Strg+Umschalt+H). Die Seite **Meine Bluetooth-Hubs** zeigt die Slots.
2. Tippen Sie in einem freien Slot auf **Neuen Hub hinzufügen**.
3. Wählen Sie Ihren Hub aus der Liste. Der Filter oben zeigt **Alle**, **LEGO**, **SBrick**, **BuWizz** oder **Mould King**. Tippen Sie auf **Hinzufügen**.
4. Folgen Sie den Schritten auf dem Bildschirm: **Drücke die Taste am Hub** und **Warten Sie, bis die Suche den Hub findet**. Mit **Scan starten** suchen Sie erneut.

<Screenshot name="add-hub" alt="Hub zum Hinzufügen auswählen" width={900} />

Sobald der Hub gefunden ist, verbindet er sich und bleibt im Slot.

<Screenshot name="my-hubs" alt="Meine Bluetooth-Hubs mit verbundenen Hubs und freien Slots" width={900} />

## Das Slot-Menü {#the-slot-menu}

Die Schaltfläche **Verbinden** in einem Slot verbindet den Hub. Das Slot-Menü enthält:

- **Trennen**;
- **Hub umbenennen**: speichert einen neuen Namen im Hub selbst (bei verbundenen Hubs, die das unterstützen);
- **Firmware aktualisieren**: wenn eine neuere Firmware verfügbar ist; siehe [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating);
- **Hub-Firmware wiederherstellen**: wenn der Hub im Wiederherstellungsmodus verbunden ist; siehe [Firmware-Wiederherstellung](/docs/Application/Hubs/RecoveryHubFirmware);
- **Konfiguration auswählen**: Konfigurationen des Technic Move; siehe [Konfigurationen des Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Kanal auswählen: A / B / C**: der Steuerkanal von Mould King;
- **Hub löschen**: entfernt den Hub aus dem Profil.

Die Schaltfläche **Meine Hubs** im Editor zeigt, wie viele Hubs verbunden sind.

## Hub-Monitor {#hub-monitor}

Öffnen Sie einen verbundenen Hub, um seinen **Hub-Monitor** zu sehen:

- der Hub: Modell, Name, Firmware, Akku, Ladezustand, Platinentemperatur, Konfiguration, Ausrichtung, Neigung (Nicken, Rollen, Gieren) und Beschleunigungssensor;
- jeder Port: das angeschlossene Gerät und seine Geschwindigkeit, Position, relative Position, Farbe, reflektiertes Licht und Umgebungslicht oder Entfernung.

So prüfen Sie, welcher Motor an welchem Port hängt und in welche Richtung er sich dreht, bevor Sie das Programm erstellen.

<Screenshot name="hub-monitor" alt="Hub-Monitor eines verbundenen Technic Hub" width={900} />

## Tipps zur Verbindung {#connection-tips}

- Schalten Sie den Hub erst kurz vor dem Verbinden ein: Viele Hubs schalten sich nach einigen Minuten ohne Verbindung selbst ab.
- Halten Sie das Telefon nah am Hub; Wände und Metall verringern die Reichweite.
- Ein Hub kann immer nur mit einem Gerät verbunden sein. Schließen Sie andere Apps, die ihn verwenden (LEGO®-Apps, andere Fernsteuerungen).
- **Bluetooth ist aus**: Schalten Sie Bluetooth ein und erlauben Sie MOCPilot in den Systemeinstellungen, es zu verwenden.
- **Hub nicht gefunden**: Drücken Sie die Taste am Hub erneut, starten Sie die Suche neu oder wechseln Sie die Batterien.
- **Mould King**-Hubs „verbinden“ sich nicht wirklich: MOCPilot sendet ihnen Befehle per Bluetooth-Advertising. Reagiert der Hub nicht, tippen Sie auf **Erneut verbinden** und prüfen Sie den Kanal.

Mehr dazu unter [Fehlerbehebung](/docs/Help/Troubleshooting#hubs).
