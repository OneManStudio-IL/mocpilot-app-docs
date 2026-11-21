---
id: BluetoothPermissions
title: Bluetooth und Berechtigungen
description: "Welche Berechtigungen MOCPilot auf welcher Plattform anfragt, warum, und wie Sie eine verweigerte Berechtigung oder ein Bluetooth-Problem beheben."
---

# Bluetooth und Berechtigungen {#bluetooth-and-permissions}

MOCPilot kommuniziert über Bluetooth mit den Hubs, deshalb bittet das System Sie um Erlaubnis. Einige weitere Berechtigungen werden nur angefragt, wenn Sie eine Funktion nutzen, die sie benötigt.

## Was MOCPilot anfragt und warum {#what-mocpilot-asks-for-and-why}

| Berechtigung | Wann sie angefragt wird | Warum |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | bei der ersten Suche nach einem Hub | um Hubs zu finden und zu verbinden |
| **Geräte in der Nähe** (Android 12 und neuer) | bei der ersten Suche nach einem Hub | um Hubs zu finden und zu verbinden |
| **Standort**, genau (Android 10 und 11) | bei der ersten Suche nach einem Hub | Android verlangt ihn in diesen Versionen für die Bluetooth-Suche. MOCPilot erfasst, speichert und teilt Ihren Standort nicht |
| **Standort** (Android, Mould-King-Hubs) | wenn Sie einen Mould-King-Hub verbinden | die App sendet Befehle an Mould-King-Hubs als Bluetooth-Broadcasts und fragt dafür in jeder Android-Version nach dem Standort |
| **Kamera** (Smartphone, Tablet) | wenn Sie unter **Fernbedienung verbinden** einen QR-Code scannen | um den [Verbindungscode](/docs/Application/Profiles/RemoteControl) zu lesen. Sie können stattdessen auch die 6 Ziffern eintippen |
| **Mikrofon** (iPhone, iPad, Mac, Android) | wenn Sie dem [KI-Builder](/docs/Application/Profiles/AiBuilder) zum ersten Mal eine Anfrage diktieren | Spracheingabe |
| **Spracherkennung** (iPhone, iPad, Mac) | zusammen mit dem Mikrofon | um Ihre Sprache in Text umzuwandeln |

Unter Windows fragt MOCPilot nicht nach einer Bluetooth-Berechtigung; Bluetooth muss nur eingeschaltet sein. Für die Spracheingabe unter Windows schlägt MOCPilot die Windows-Spracheingabe (Win+H) vor.

## Wenn Sie eine Berechtigung verweigert haben {#if-you-denied-a-permission}

Haben Sie eine Berechtigung verweigert, fragt das System meist nicht erneut. MOCPilot zeigt dann eine Meldung an, zum Beispiel **Scan fehlgeschlagen** mit „Die App benötigt die Berechtigung, Geräte in der Nähe zu scannen…“, „Erlauben Sie MOCPilot in den Systemeinstellungen den Kamerazugriff, um den Code zu scannen.“ oder „Erlauben Sie MOCPilot in den Systemeinstellungen den Mikrofonzugriff“. Schalten Sie die Berechtigung in den Systemeinstellungen ein und kehren Sie zur App zurück:

**iPhone und iPad**
1. Öffnen Sie **Einstellungen** und scrollen Sie nach unten zu **MOCPilot**.
2. Schalten Sie **Bluetooth** ein (und bei Bedarf **Kamera**, **Mikrofon** oder **Spracherkennung**).

**Android** (die Bezeichnungen variieren je nach Hersteller etwas)
1. Öffnen Sie **Einstellungen → Apps → MOCPilot → Berechtigungen**.
2. Erlauben Sie **Geräte in der Nähe**. Unter Android 10 und 11 oder für Mould-King-Hubs erlauben Sie außerdem **Standort** und schalten **Genauen Standort verwenden** ein.
3. Erlauben Sie bei Bedarf **Kamera** oder **Mikrofon**.

**Mac**
1. Öffnen Sie **Systemeinstellungen → Datenschutz & Sicherheit**.
2. Wählen Sie **Bluetooth** (oder **Mikrofon**, **Spracherkennung**) und schalten Sie **MOCPilot** ein.

**Windows**
1. Öffnen Sie **Einstellungen → Bluetooth und Geräte** und schalten Sie **Bluetooth** ein.

## „Bluetooth ist aus“ {#bluetooth-is-off}

MOCPilot zeigt **Bluetooth ist aus** an, wenn Bluetooth auf dem Gerät ausgeschaltet ist. Schalten Sie es im Kontrollzentrum, in den Schnelleinstellungen oder in den Systemeinstellungen ein und bestätigen Sie dann die Meldung: Die App sucht erneut.

## Bluetooth-Adapter unter Windows {#bluetooth-adapters-on-windows}

- Sie benötigen einen Bluetooth-Adapter ab Version 4.0 (LE): im Computer eingebaut oder als USB-Stick.
- **Mould King 6.0** benötigt einen Adapter und Treiber, die Bluetooth-Broadcasts (Advertising) senden können. Das kann nicht jeder Adapter.
- **Mould King 4.0** funktioniert unter Windows nicht: Die App meldet „Mould-King-Hubs mit 4 Ports benötigen Bluetooth-Advertising mit Servicedaten, das Windows nicht unterstützt.“ Verwenden Sie für diese Hubs ein Smartphone oder Tablet.

## Hubs mit klassischem Bluetooth {#classic-bluetooth-hubs}

Der **Robot Inventor**-Hub nutzt klassisches Bluetooth, nicht Bluetooth Low Energy. Er funktioniert unter Android, auf dem Mac und unter Windows, aber nicht auf iPhone und iPad. Findet MOCPilot ihn unter Windows nicht, koppeln Sie den Hub zuerst unter **Einstellungen → Bluetooth und Geräte → Gerät hinzufügen** und suchen Sie dann in der App erneut.

Alle anderen unterstützten Hubs nutzen Bluetooth Low Energy und werden nur in MOCPilot hinzugefügt, nicht in den Bluetooth-Einstellungen des Systems.

## Eine stabile Verbindung {#a-stable-connection}

- **Immer nur eine App.** Ein Hub akzeptiert nur eine Verbindung. Schließen Sie LEGO®-Apps und andere Fernsteuerungs-Apps und trennen Sie den Hub von anderen Smartphones.
- **Reichweite.** Halten Sie das Gerät nicht weiter als ein paar Meter vom Modell entfernt. Wände, Metall, Ihr Körper und andere 2,4-GHz-Geräte (WLAN-Router, andere Bluetooth-Geräte) verringern die Reichweite.
- **Batterien.** Schwache Batterien führen zu Verbindungsabbrüchen, wenn die Motoren stark arbeiten.
- **App geöffnet lassen.** Steuern Sie mit MOCPilot im Vordergrund und schalten Sie in den [Einstellungen](/docs/Application/Account/Settings) **Bildschirm eingeschaltet lassen** ein, damit sich der Bildschirm nicht ausschaltet, solange ein Profil geöffnet ist.

Weitere Lösungen für Hubs, die nicht gefunden werden oder immer wieder die Verbindung verlieren: [Fehlerbehebung](/docs/Help/Troubleshooting#hubs).
