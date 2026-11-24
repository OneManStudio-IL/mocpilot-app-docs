---
id: RobotInventorHub
title: MINDSTORMS-Robot-Inventor-Hub
description: "Den Hub von LEGO MINDSTORMS Robot Inventor (51515) oder SPIKE Prime über Bluetooth oder USB verbinden, seine Blöcke nutzen und den Hub wiederherstellen, wenn er nicht mehr funktioniert."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS-Robot-Inventor-Hub

Der Hub des Sets LEGO® MINDSTORMS® Robot Inventor (51515) ist der **LEGO® Technic™ Large Hub** (88016): sechs Ports A–F, eine 5×5-Lichtmatrix, ein Lautsprecher, ein Gyroskop und ein Beschleunigungssensor. MOCPilot steuert ihn mit denselben Blöcken wie die Robot-Inventor-App und mit allem, was MOCPilot hinzufügt: dem Dashboard, dem Gamepad und den anderen Hubs des Profils.

Der **SPIKE™-Prime-Hub** (45601) ist dieselbe Hardware mit der Firmware von LEGO® Education. MOCPilot unterstützt ihn mit der Firmware **SPIKE Legacy** (Beta); siehe [Firmware](#firmware).

## Was er kann {#features}

- **Logikblöcke**: alle Blöcke der Robot-Inventor-App, siehe [Robot-Inventor-Blöcke](#blocks).
- **Schnellverknüpfungen**: Motoren, Sensoren, die [Lichtmatrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) und die [Sensorlichter des Abstandssensors](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hub-Monitor**: Akku, Ausrichtung, Neigung und die Geräte an den Ports, siehe [Hub-Monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Ein Blockprogramm kann auf zwei Arten laufen: **Streaming**, bei dem MOCPilot es ausführt und Befehle an den Hub sendet (das Gerät muss verbunden bleiben), oder **Download**, bei dem MOCPilot es in einen der Programm-Slots des Hubs schreibt und der Hub es selbstständig ausführt. Siehe [Das Programm auf dem Hub ausführen](#download).

## Den Hub verbinden {#connect}

Fügen Sie den Hub wie gewohnt hinzu ([Hub hinzufügen und verbinden](/docs/Application/Hubs/ConnectingHubs)) und wählen Sie **Lego® Large Hub** (oder **LEGO® SPIKE™ Prime Hub**). Auf einem Computer hat die Verbindungsseite oben einen Umschalter **Bluetooth / USB**. MOCPilot merkt sich Ihre Wahl für dieses Hub-Modell.

### Über Bluetooth {#bluetooth}

Der Hub nutzt klassisches Bluetooth, nicht Bluetooth Low Energy: Er funktioniert unter Android, auf dem Mac und unter Windows, aber nicht auf iPhone und iPad.

1. Schalten Sie den Hub ein.
2. Koppeln Sie ihn in den Bluetooth-Einstellungen des Geräts als normales Bluetooth-Gerät (unter Windows: **Einstellungen → Bluetooth und Geräte → Gerät hinzufügen**). Drücken Sie die Bluetooth-Taste des Hubs, damit er gefunden werden kann.
3. Tippen Sie in MOCPilot auf **Scannen**.

### Mit einem USB-Kabel {#usb}

Unter Windows und auf dem Mac können Sie den Hub stattdessen mit seinem USB-Kabel verbinden. Einen LEGO-Treiber müssen Sie nicht installieren.

1. Verbinden Sie den Hub mit einem USB-Kabel mit dem Computer und schalten Sie den Hub ein.
2. Tippen Sie auf **Verbinden**.

Meldet MOCPilot **Kein Hub an USB**, prüfen Sie das Kabel (manche Kabel laden nur) und ob der Hub eingeschaltet ist.

<Screenshot name="robot-inventor-connect" alt="Einen Robot-Inventor-Hub verbinden: der Umschalter Bluetooth / USB" width={900} />

### Zuerst die LEGO-App schließen {#close-lego-app}

Der Hub nimmt nur eine Verbindung an. Ist die MINDSTORMS- oder SPIKE-App geöffnet und hält den Hub, meldet MOCPilot **Der Hub ist belegt: Eine andere App verwendet ihn (LEGO MINDSTORMS oder SPIKE). Schließe diese App und versuche es erneut.** Schließen Sie die LEGO-App und verbinden Sie erneut.

## Robot-Inventor-Blöcke {#blocks}

Hat das Profil einen Robot-Inventor- oder SPIKE-Prime-Hub, bekommt die Palette der Logikblöcke die Blöcke der Robot-Inventor-App. Blöcke, die nur dieser Hub ausführen kann, tragen ein schwarz-weißes **Hub-Symbol**.

| Kategorie | Robot-Inventor-Blöcke |
|---|---|
| [Bewegung](/docs/Application/BlockBuilder/Blocks/Movement) (neue Kategorie) | Fahrmotoren, Geschwindigkeit, Strecke pro Umdrehung, fahren, lenken, Panzersteuerung, Beschleunigung, anhalten, „wurde die Fahrt unterbrochen?“ |
| [Motoren](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | mit Leistung starten, „wurde der Motor unterbrochen?“, dazu Motorleistung und Blockiererkennung |
| [Licht](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | Bild für einige Sekunden, Animationen mit Bildeditor, Pixelhelligkeit, dazu die Sensorlichter des Abstandssensors |
| [Töne](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | Pieptöne, die Roboterklänge des Hubs, Lautstärke, Klangeffekte, Musik: Noten, Trommeln, Pausen, Instrument, Tempo |
| [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | Kraftsensor, Gesten, Ausrichtung, Gieren / Neigung / Rollen, Gieren zurücksetzen, Winkelgeschwindigkeit, Beschleunigung, Neigung, Funk zwischen Hubs |
| [Ereignisse](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | wenn der Hub geschüttelt oder angetippt wird, auf einer Seite liegt, geneigt ist, wenn der Kraftsensor gedrückt wird, wenn ein Funksignal ankommt |

Die Steuerungs-, Operator-, Variablen-, Listen- und Meine-Blöcke-Blöcke der Robot-Inventor-App sind dieselben wie die eigenen [Grundblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) von MOCPilot. Die Blöcke, die die allgemeinen Hub-Blöcke bereits abdecken (Motorgeschwindigkeit und -position, Farb- und Abstandssensor, Lichtmatrix, Hub-Taste, Timer), finden Sie in ihren gewohnten Kategorien.

## Das Programm auf dem Hub ausführen {#download}

Wie die Robot-Inventor-App kann MOCPilot ein Logikblöcke-Programm in einen der 20 Programm-Slots des Hubs (0–19) schreiben. Der Hub führt es dann ohne die App aus: Sie können das Telefon oder den Computer trennen und das Programm später mit den Tasten des Hubs erneut starten.

### Slot-Schaltfläche und Slot-Karte {#slot-card}

Ist ein Robot-Inventor- oder SPIKE-Prime-Hub mit einem Logikblöcke-Profil verbunden, erscheint unten rechts im Editor neben dem Zoom eine Schaltfläche. Sie zeigt die gewählte Slot-Nummer auf einer kleinen 5×5-Matrix oder ein Streaming-Zeichen. Tippen Sie darauf, um die Karte zu öffnen:

- der Hub mit dem gewählten Slot; **‹** und **›** wählen Slot 0–19;
- **Download / Streaming**: wie **Start** für diesen Hub funktioniert;
- die **Download**-Schaltfläche (⤓): schreibt das Programm in den Slot, ohne es zu starten;
- eine Statuszeile: der Fortschritt, *Slot 3: Das Programm ist auf dem Hub* oder was schiefgelaufen ist.

Sind mehrere Robot-Inventor- oder SPIKE-Prime-Hubs verbunden, hat die Karte zusätzlich eine Hub-Schaltfläche: Tippen Sie darauf, um zu wählen, welcher Hub das Programm bekommt. MOCPilot merkt sich Modus und Slot auf diesem Gerät.

<Screenshot name="robot-inventor-slot-card" alt="Die Slot-Karte: der Hub, die Slot-Pfeile, der Umschalter Download / Streaming und die Download-Schaltfläche" width={500} />

### Download {#download-mode}

Im Modus **Download** wandelt **Start** das Blockprogramm in ein Hub-Programm um, schreibt es in den gewählten Slot und startet es auf dem Hub. Das Schreiben dauert einige Sekunden; danach läuft das Programm selbstständig auf dem Hub.

- Um es später ohne die App erneut zu starten, wählen Sie den Slot mit der linken und rechten Taste des Hubs und drücken die mittlere Taste.
- Die **mittlere Taste** des Hubs stoppt das Programm.
- Um wieder Programme aus MOCPilot auszuführen, stellen Sie die Karte auf **Streaming** um.

### Was auf dem Hub laufen kann {#download-blocks}

Die meisten Blöcke können auf den Hub:

- Ereignisse: Programmstart, Nachrichten, Bedingungen, der Timer, die Hub-Tasten, Sensoren, Gesten, Ausrichtung, Neigung und Funksignale;
- Steuerung, Operatoren, Variablen, Listen und Meine Blöcke;
- alle Robot-Inventor-Blöcke sowie die Motor-, Licht- und Sensorblöcke dieses Hubs.

Manche Blöcke brauchen die App und können nicht allein auf dem Hub laufen: die Dashboard- und Gamepad-Blöcke, Blöcke anderer Hubs, das Ereignis der **mittleren Taste** (auf dem Hub stoppt diese Taste das Programm), Akku- und Verbindungsereignisse, die Temperatur und die Kalibrierung der Zahnstangenlenkung. Enthält das Programm einen davon, wird nichts geschrieben: Die Karte meldet **Diese Blöcke können ohne die App nicht auf dem Hub laufen** und listet sie auf. Entfernen Sie diese Blöcke oder verwenden Sie **Streaming**.

Schlägt das Schreiben fehl, nennt die Statuszeile den Grund, zum Beispiel **Nicht genug Platz auf dem Hub** oder **Der Hub hat nicht geantwortet**. Versuchen Sie es erneut oder starten Sie den Hub neu, wenn es immer wieder fehlschlägt.

## Firmware {#firmware}

MOCPilot arbeitet mit der eigenen LEGO-Firmware des Hubs und ersetzt sie nicht:

- **Robot-Inventor-Hub**: die Firmware der App MINDSTORMS Robot Inventor. Die letzte Version ist Firmware 1.5.6 mit Hub-Software 3.2.36.
- **SPIKE-Prime-Hub**: die Firmware **SPIKE Legacy** (die der App SPIKE 2). Die neuere Firmware **SPIKE App 3** wird nicht unterstützt: MOCPilot weist darauf hin, wenn es einen solchen Hub findet. Installieren Sie die Firmware SPIKE Legacy mit der App LEGO® Education SPIKE™ Legacy und verbinden Sie dann erneut.

Ist der Hub bereit, zeigt er eine Programm-Slot-Nummer auf seiner Lichtmatrix.

## Wenn der Hub nicht startet {#restore}

Startet der Hub nicht, bleibt er dunkel, zeigt er keine Slot-Nummer oder wurde er auf die Firmware SPIKE App 3 umgestellt, stellen Sie ihn zuerst mit der offiziellen App wieder her:

1. Öffnen Sie die App MINDSTORMS Robot Inventor (für einen SPIKE-Prime-Hub die App SPIKE Legacy) und verbinden Sie den Hub mit dem USB-Kabel.
2. Starten Sie das Hub-Update (**Update hub firmware**). Es schreibt die Firmware, die Hub-Software und die Roboterklänge neu und dauert etwa 6 Minuten. Trennen Sie den Hub nicht, solange es läuft.
3. Schließen Sie die LEGO-App und verbinden Sie den Hub in MOCPilot.

### Wiederherstellungsmodus (DFU) {#dfu}

Nur wenn die offizielle App den Hub gar nicht sieht, können Sie die Firmware über den Wiederherstellungsmodus (DFU) des Hubs schreiben. Das ist etwas für erfahrene Nutzer:

1. Schalten Sie den Hub aus und trennen Sie ihn. Halten Sie die **Bluetooth-Taste** gedrückt und stecken Sie das USB-Kabel ein; halten Sie sie, bis das Licht der Taste rot, grün und blau blinkt. Der Computer sieht jetzt „LEGO Technic Large Hub in DFU Mode“.
2. Installieren Sie unter Windows einmalig den WinUSB-Treiber für dieses Gerät, zum Beispiel mit Zadig. Mac und Linux brauchen keinen Treiber.
3. Schreiben Sie das Firmware-Image der Robot-Inventor-App (1.5.6) mit `dfu-util` an die Adresse `0x08008000`. Der Hub startet von selbst neu, wenn es fertig ist. Trennen Sie ihn nicht, solange geschrieben wird.
4. Führen Sie danach in der Robot-Inventor-App **Update hub firmware** aus (siehe oben), um die Hub-Software und die Klänge wiederherzustellen.

DFU schreibt nur die Firmware. Der Wiederherstellungs-Bootloader selbst kann nicht überschrieben werden, deshalb können Sie es jederzeit erneut versuchen.
