---
id: RemoteControl
title: Fernsteuerung
description: "Ein Profil auf dem Smartphone, Tablet oder Computer neben dem Modell ausführen und es von einem anderen Gerät oder aus dem Web-Editor steuern."
---

import Screenshot from '@site/src/components/Screenshot';

# Fernsteuerung {#remote-control}

Mit der Fernsteuerung steuern Sie ein Modell, das mit einem anderen Gerät verbunden ist. Ein Gerät bleibt neben dem Modell und kommuniziert per Bluetooth mit den Hubs; das andere halten Sie in der Hand und nutzen dessen Dashboard. Auf diese Weise steuern Sie ein Modell auch aus dem [Web-Editor](/docs/Introducing/WebEditor), denn Browser können sich nicht mit Hubs verbinden.

## Die beiden Geräte {#the-two-devices}

- Das **Hub-Gerät** ist das Smartphone, Tablet oder der Computer neben dem Modell. Seine MOCPilot-App verbindet die Hubs und führt das Profil aus. Es benötigt kein Konto.
- Die **Fernbedienung** ist das, womit Sie steuern: die MOCPilot-App auf einem anderen Gerät oder der Web-Editor auf [mocpilot.com](https://mocpilot.com). Das Profil wird auf der Fernbedienung geöffnet, und die Fernbedienung sendet es an das Hub-Gerät.

## Was Sie brauchen {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) für das Konto, das auf der **Fernbedienung** angemeldet ist. Das Hub-Gerät benötigt weder ein Konto noch Pro.
- Die MOCPilot-App auf dem Hub-Gerät.
- Eine Internetverbindung auf beiden Geräten.

## Ein Hub-Gerät verbinden {#connect-a-hub-device}

1. Öffnen Sie auf der Fernbedienung das Profil und drücken Sie in der oberen Leiste des Profils **Fernsteuerung** (das Fernbedienungssymbol: ein Haus mit Funkwellen) neben **Start**. Drücken Sie im Web-Editor im sich öffnenden Bereich auf **Code anzeigen**.

   Die Fernbedienung zeigt einen **Verbindungscode**: einen QR-Code und 6 Ziffern.
2. Öffnen Sie auf dem Hub-Gerät MOCPilot und tippen Sie auf der Seite **Meine Profile** auf **Fernbedienung verbinden**. Auf dem Mac können Sie auch **Datei → Fernbedienung verbinden…** wählen.
3. Geben Sie den Code ein:
   - **auf einem Smartphone oder Tablet** richten Sie die Kamera auf den QR-Code oder tippen auf **Code eingeben** und geben die 6 Ziffern ein;
   - **auf einem Computer** geben Sie die 6 Ziffern ein und drücken **Verbinden**.
4. Die Geräte verbinden sich. Die Fernbedienung sendet das Profil an das Hub-Gerät und startet es dort, und das Hub-Gerät zeigt die Vollbildseite **Fernsteuerung**.

<Screenshot name="remote-control-code" alt="Bereich „Fernsteuerung“ in einem geöffneten Profil mit QR-Code und 6-stelligem Code" width={900} />

Zum Verbindungscode:

- Er funktioniert einmal und ist 5 Minuten gültig. Solange die Fernbedienung ihn anzeigt, wird er nach Ablauf durch einen neuen Code ersetzt.
- Scannen Sie ihn in der MOCPilot-App, nicht mit der Kamera-App des Smartphones.
- Schließen Sie den Bereich auf der Fernbedienung, bevor sich das Hub-Gerät verbindet, wird nichts eingerichtet; drücken Sie erneut auf **Fernsteuerung**, um einen neuen Code zu erhalten.

<Screenshot name="remote-connect-code-entry" alt="Fenster „Fernbedienung verbinden“ auf einem Computer mit dem Feld für die 6 Ziffern" width={900} />

## Wenn die Geräte verbunden sind {#when-the-devices-are-connected}

**Auf der Fernbedienung:**

- Die Schaltfläche **Fernsteuerung** wird grün (auf einem Smartphone oder Tablet ein grüner Ring), und ihr Bereich zeigt den Namen des Hub-Geräts und eine Schaltfläche **Trennen**.
- **Meine Hubs** zeigt die Hubs des Hub-Geräts. Verbinden Sie die Hubs von dort wie gewohnt: Das Hub-Gerät sucht nach ihnen, drücken Sie also die Taste am Hub, wenn Sie dazu aufgefordert werden.
- Das Dashboard steuert das Modell.

**Auf dem Hub-Gerät** zeigt die Vollbildseite **Fernsteuerung**:

- den Status, zum Beispiel **«My car» läuft**;
- **Verbundene Hubs: N** und während der Suche **Suche nach einem Hub: Drücke die Taste am Hub.**;
- einen Hinweis: **Lass diese App geöffnet. Dies ist das Hub-Gerät: Es verbindet die Hubs und führt das Profil aus, die Fernbedienung steuert es nur.**;
- eine Schaltfläche **Stopp**.

Der Bildschirm des Hub-Geräts bleibt eingeschaltet, solange es verbunden ist. Das Profil wird auf dem Hub-Gerät nicht gespeichert und erscheint nicht in dessen Profilliste.

<Screenshot name="remote-hub-device" alt="Vollbildseite „Fernsteuerung“ auf dem Hub-Gerät mit Verbindungsstatus, Anzahl der verbundenen Hubs und der Schaltfläche „Stopp“" width={900} />

## Start und Stopp {#run-and-stop}

- Drücken Sie **Stopp** auf der Fernbedienung, um das Profil auf dem Hub-Gerät zu stoppen. Das Hub-Gerät stoppt immer alle Motoren, auch wenn **Hub-Ports beim Programmstopp stoppen** im Profil ausgeschaltet ist.
- Drücken Sie **Start** auf der Fernbedienung, um es auf dem Hub-Gerät erneut zu starten.
- Im Web-Editor bleibt das Hub-Gerät für jedes Profil gekoppelt, das Sie im selben Browser-Tab öffnen: **Start** startet das Profil auf dem Hub-Gerät. Ist kein Hub-Gerät gekoppelt, führt **Start** das Profil im Browser aus, ohne Hubs.

## Wenn die Verbindung abbricht {#if-the-connection-drops}

:::caution Sicherheit
Empfängt das Hub-Gerät 4 Sekunden lang nichts von der Fernbedienung, stoppt es das Profil und alle Motoren.
:::

Dann:

- zeigt das Hub-Gerät **Verbindung zur Fernbedienung verloren. Das Profil wurde gestoppt. Warte auf die Fernbedienung…** und wartet;
- zeigt die App auf der Fernbedienung **Die Verbindung wurde unterbrochen. Neuer Versuch…** mit **Erneut versuchen** und **Trennen**;
- zeigt der Web-Editor **Das Hub-Gerät wurde getrennt**: „*Gerät* antwortet nicht mehr. Das Profil darauf wurde gestoppt und die Motoren wurden ausgeschaltet.“ Er versucht weiter, die Verbindung wiederherzustellen; Sie können auch **Erneut verbinden**, **Im Browser starten** oder **Stopp** drücken.

Sind die Geräte wieder verbunden, prüfen Sie den Status auf der Fernbedienung und drücken Sie **Start**, falls das Profil nicht läuft.

## Trennen {#disconnect}

- **Auf der Fernbedienung**: Drücken Sie **Fernsteuerung** und wählen Sie **Trennen**.
- **Auf dem Hub-Gerät**: Drücken Sie **Stopp** auf der Seite **Fernsteuerung**.

In beiden Fällen stoppen das Profil und die Motoren, und das Hub-Gerät schließt das Profil.

## Fehlerbehebung {#troubleshooting}

| Meldung | Wo | Was zu tun ist |
|---|---|---|
| **Fernsteuerung ist Teil von MocPilot Pro** | Fernbedienung | Abonnieren Sie [MocPilot Pro](/docs/Application/Account/Pro) für das Konto der Fernbedienung. Im Browser ist kein Abo möglich: Schließen Sie es in der App ab, dann funktioniert Pro auch im Web-Editor |
| **Keine Verbindung zum Server** | beide | Prüfen Sie die Internetverbindung und versuchen Sie es erneut |
| **Kein Code vom Server erhalten** | Fernbedienung | Drücken Sie **Code anzeigen**, um es erneut zu versuchen |
| **Falscher oder abgelaufener Code. Prüfe die 6 Ziffern auf der Fernbedienung.** | Hub-Gerät | Geben Sie die 6 Ziffern ein, die die Fernbedienung gerade anzeigt |
| **Der Code ist abgelaufen. Zeige auf der Fernbedienung einen neuen Code an und scanne ihn erneut.** | Hub-Gerät | Drücken Sie auf der Fernbedienung **Fernsteuerung** und scannen Sie den neuen Code |
| **Dies ist kein MOCPilot-Code. Scannen Sie den Code, den die Fernbedienung anzeigt.** | Hub-Gerät | Scannen Sie den QR-Code im Bereich **Fernsteuerung** der Fernbedienung |
| **Zu viele falsche Codes. Versuche es in ein paar Minuten erneut.** | Hub-Gerät | Warten Sie ein paar Minuten und geben Sie dann den aktuellen Code ein |
| **Erlauben Sie MOCPilot in den Systemeinstellungen den Kamerazugriff, um den Code zu scannen.** | Hub-Gerät | Erlauben Sie den Kamerazugriff in den Systemeinstellungen oder tippen Sie auf **Code eingeben** und geben Sie die 6 Ziffern ein |
| **Die Fernbedienung antwortet nicht. Prüfe, ob dort das Profil geöffnet und das Gerät online ist.** | Hub-Gerät | Lassen Sie das Profil auf der Fernbedienung geöffnet und prüfen Sie deren Internetverbindung |
| **Diese App-Version kann keine Verbindung zu einer Fernbedienung herstellen** | beide | Aktualisieren Sie MOCPilot |
| **Dieser Browser kann keine direkte Verbindung (WebRTC) herstellen** | Web-Editor | Verwenden Sie einen anderen Browser, zum Beispiel Chrome, Edge oder Safari |
| **Das Profil ist zu groß** / **Das Profil ist nicht vollständig angekommen** | beide | Prüfen Sie die Verbindung und drücken Sie erneut **Start** |
| **Das andere Gerät konnte das Profil nicht speichern** / **Das andere Gerät konnte das Profil nicht öffnen** | Fernbedienung | Drücken Sie erneut **Start**; passiert es immer wieder, trennen Sie das Hub-Gerät und verbinden Sie es erneut |
| **Die Verbindung zu *Gerät* wurde unterbrochen** / **Verbindung zur Fernbedienung unterbrochen. Warte darauf…** | beide | Siehe [Wenn die Verbindung abbricht](#if-the-connection-drops) |
