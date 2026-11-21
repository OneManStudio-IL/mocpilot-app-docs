---
id: QuickStart
title: Schnellstart
description: "MOCPilot installieren, anmelden, das erste Profil erstellen und in wenigen Minuten ein Modell steuern."
---

import Screenshot from '@site/src/components/Screenshot';

# Schnellstart {#quick-start}

Diese Anleitung führt Sie von der Installation der App bis zum Steuern Ihres ersten Modells. Sie benötigen einen unterstützten Hub mit einem Motor; siehe [Unterstützte Geräte](/docs/Introducing/SupportedDevices).

## 1. App installieren {#1-install-the-app}

MOCPilot gibt es im App Store (iPhone, iPad, Mac), bei Google Play (Android) und im Microsoft Store (Windows). Die Links finden Sie auf [mocpilot.com](https://mocpilot.com).

## 2. Anmelden oder ohne Konto fortfahren {#2-sign-in-or-continue-without-an-account}

Beim ersten Start fordert die App Sie zur Anmeldung auf. Melden Sie sich mit E-Mail oder Login und Passwort, mit Google oder Apple ID an, oder erstellen Sie ein neues Konto.

<Screenshot name="sign-in" alt="Der Anmeldebildschirm von MOCPilot" width={900} />

Wir empfehlen ein Konto:

- Ihre Profile und Einstellungen werden auf dem Server gespeichert und zwischen Ihren Geräten synchronisiert;
- Sie erhalten Ihre Daten zurück, wenn Sie ein Gerät ersetzen oder verlieren;
- Käufe und MocPilot Pro funktionieren auf all Ihren Geräten.

**Ohne Konto fortfahren** geht auch, dann bleibt aber alles nur auf diesem Gerät und geht verloren, wenn Sie die App entfernen. Sie können sich später unter **Einstellungen → Konto** anmelden. Siehe [Konto](/docs/Application/Account/UserAccount).

## 3. Sich zurechtfinden {#3-find-your-way-around}

- Auf einem **Smartphone** enthält die untere Leiste **Profile**, **Einstellungen** und **Hilfe** (und **Benachrichtigungen**, sobald Sie angemeldet sind).
- Auf einem **Tablet** finden Sie dieselben Bereiche, den **Profilkatalog** und Ihr Konto in der Seitenleiste.
- Auf einem **Computer** verwenden Sie die obere Leiste: links die Menüs, rechts Konto, Benachrichtigungen und Einstellungen.

Siehe [Smartphone, Tablet und Desktop](/docs/Introducing/Layouts).

## 4. Profil erstellen {#4-create-a-profile}

1. Tippen Sie auf der Seite **Meine Profile** auf **+** → **Neues Profil** (Smartphone) oder wählen Sie **Neues Profil** (Tablet und Computer, oder **Datei → Neues Profil**).
2. Wählen Sie den **Programmtyp**:
   - **Schnellverknüpfungen**, wenn Sie ein Modell ganz ohne Code steuern möchten. Ideal für den ersten Versuch.
   - **Logikblöcke**, wenn Sie Ereignisse, Schleifen, Bedingungen und Sensoren nutzen möchten.
3. Geben Sie einen **Namen** ein und fügen Sie bei Bedarf ein Bild hinzu.
4. Tippen Sie auf **Erstellen**.

<Screenshot name="create-profile-tiles" alt="Seite „Neues Profil“ mit den Kacheln Logikblöcke und Schnellverknüpfungen" width={900} />

Das Profil wird im Editor geöffnet. Mehr dazu unter [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile).

:::tip Lieber ein fertiges Modell?
Öffnen Sie den **Profilkatalog** (**Online suchen** auf der Profilseite) und installieren Sie ein offizielles Profil für Ihr Set. Siehe [Katalog und Veröffentlichen](/docs/Application/Profiles/Catalog).
:::

## 5. Hub hinzufügen {#5-add-your-hub}

1. Öffnen Sie im Editor **Meine Hubs**.
2. Tippen Sie in einem freien Slot auf **Neuen Hub hinzufügen**, wählen Sie Ihr Hub-Modell und tippen Sie auf **Hinzufügen**.
3. Schalten Sie den Hub ein, drücken Sie seine Taste und warten Sie, bis MOCPilot ihn findet.

<Screenshot name="my-hubs" alt="Seite „Meine Hubs“ mit Hub-Slots" width={900} />

Falls die App ein Firmware-Update verlangt, folgen Sie [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating). Mehr dazu unter [Einen Hub hinzufügen und verbinden](/docs/Application/Hubs/ConnectingHubs).

## 6. Steuerelemente auf dem Dashboard platzieren {#6-place-controls-on-the-dashboard}

1. Öffnen Sie das **Dashboard**.
2. Tippen Sie auf **+** (**Controller hinzufügen**), wählen Sie einen **Joystick** und tippen Sie auf **Zum Dashboard hinzufügen**.
3. Ziehen Sie ihn an die gewünschte Stelle. Tippen Sie darauf, um Größe, Farbe oder Verhalten zu ändern.

<Screenshot name="controller-palette" alt="Palette „Controller hinzufügen“ mit ausgewähltem Joystick" width={900} />

Siehe [Steuerelemente hinzufügen und anordnen](/docs/Application/Dashboard/ArrangingControls).

## 7. Steuerelement mit einem Motor verbinden {#7-connect-the-control-to-a-motor}

**Schnellverknüpfungen:** Ziehen Sie den Joystick-Eingang (zum Beispiel *JOY1 Y-Achse*) aus **Eingänge** in die leere Zeile, fügen Sie die Aktion **Motor** und den Ausgang **Hub** aus **Ausgänge** hinzu und tippen Sie dann auf den Port, an dem Ihr Motor angeschlossen ist. Die Zeile ist fertig, wenn sie keinen roten Rahmen mehr hat. Siehe [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing).

**Logikblöcke:** Fügen Sie einen Block *wenn das Programm startet*, eine Schleife *immer wiederholen* und einen Block *Geschwindigkeit einstellen auf* hinzu, der den Joystick-Wert übernimmt. Siehe [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) und die [Beispiele](/docs/Application/BlockBuilder/Examples).

## 8. Start drücken {#8-press-run}

Drücken Sie **Start** (▶). Bewegen Sie den Joystick, und der Motor dreht sich. Mit **Stopp** kehren Sie zum Bearbeiten zurück.

Das war's. Als Nächstes:

- Lernen Sie alle [Steuerelementtypen](/docs/Application/Dashboard/ControlTypes) kennen.
- Geben Sie dem Dashboard mit [Themes](/docs/Application/Themes/ThemesOverview) ein neues Aussehen.
- Verbinden Sie ein [Gamepad](/docs/Application/Dashboard/Gamepad).
- Wenn etwas nicht funktioniert, lesen Sie [Fehlerbehebung](/docs/Help/Troubleshooting).
