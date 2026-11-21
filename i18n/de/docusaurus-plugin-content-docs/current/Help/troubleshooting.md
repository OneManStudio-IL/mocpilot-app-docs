---
id: Troubleshooting
title: Fehlerbehebung
description: "Lösungen für häufige Probleme mit Hubs, Motoren, dem Dashboard, der Synchronisierung, Käufen, Updates, Ton, dem KI-Builder und der Fernsteuerung."
---

# Fehlerbehebung {#troubleshooting}

## Hubs {#hubs}

**Der Hub wird nicht gefunden**
- Schalten Sie Bluetooth ein und erlauben Sie MOCPilot in den Systemeinstellungen, Bluetooth zu verwenden (unter Android auch „Geräte in der Nähe“ oder den Standort). Siehe [Bluetooth und Berechtigungen](/docs/Help/BluetoothPermissions).
- Schalten Sie den Hub ein und drücken Sie seine Taste direkt vor der Suche; tippen Sie erneut auf **Scan starten**.
- Stellen Sie sicher, dass der Hub nicht mit einem anderen Smartphone oder einer anderen App verbunden ist (LEGO®-Apps, eine andere Fernsteuerung). Schließen Sie diese.
- Tauschen oder laden Sie die Batterien.
- Robot Inventor: auf iPhone und iPad nicht verfügbar. Mould King 4.0: unter Windows nicht verfügbar.

**Der Hub trennt die Verbindung**
- Gehen Sie mit dem Gerät näher heran: Wände, Metall und andere 2,4-GHz-Geräte verringern die Reichweite.
- Schwache Batterien führen unter Last zu Verbindungsabbrüchen: Laden oder tauschen Sie sie.
- Manche Hubs schalten sich nach einer Weile ohne Befehle ab; verbinden Sie sie unter **Meine Hubs** erneut.
- Mehr zu Reichweite, Adaptern und Berechtigungen: [Bluetooth und Berechtigungen](/docs/Help/BluetoothPermissions).

**„Firmware-Update erforderlich“**
- MOCPilot benötigt für Technic-, Technic Move-, BOOST- und City-Hubs eine unterstützte Firmware. Folgen Sie [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating). Ist ein Update fehlgeschlagen, siehe [Firmware wiederherstellen](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King reagiert nicht**
- Mould-King-Hubs empfangen nur Befehle. Verwenden Sie **Erneut verbinden**, prüfen Sie den Kanal (**Kanal auswählen**) und verwenden Sie pro Profil nur einen Mould-King-Typ.

## Motoren und Programm {#motors-and-the-program}

**Der Motor bewegt sich nicht**
- Läuft das Programm (**Start**)? Ist der Hub verbunden?
- Ist der Motor an dem Port angeschlossen, den das Programm verwendet? Prüfen Sie den [Hub-Monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Schnellverknüpfungen: Öffnen Sie **Probleme**; verfolgen Sie die Live-Werte entlang der Zeile. Siehe [Ausführen und Probleme beheben](/docs/Application/Links/Problems).
- Logikblöcke: Beginnt das Skript mit einem Ereignisblock? Beobachten Sie die Werte mit dem **Monitor**.

**Der Motor dreht sich in die falsche Richtung**
- Schnellverknüpfungen: Fügen Sie der Zeile **Umkehren** hinzu. Logikblöcke: Multiplizieren Sie den Wert mit −1.

**Der Motor kriecht oder brummt bei losgelassenem Joystick**
- Schnellverknüpfungen: Fügen Sie **Totzone** hinzu. Logikblöcke: Ignorieren Sie kleine Werte mit *liegt zwischen*.

**Die Servolenkung steht nicht mittig oder fährt gegen den Endanschlag**
- Schnellverknüpfungen: Servo mit Kalibrierung **Auto** oder **Manuell** mit **Als Nullpunkt setzen** und **Mitte**; verringern Sie den **Winkel**. Logikblöcke: *Lenkstangen kalibrieren*.
- „Servo“, „Um Grad drehen“ und „Zu Position fahren“ benötigen Motoren mit Encoder; einfache Motoren und SBrick-Ports nehmen nur eine Geschwindigkeit entgegen.

**Motoren laufen nach „Stopp“ weiter**
- Logikblöcke: Schalten Sie in den Editor-Einstellungen **Hub-Ports beim Programmstopp stoppen** ein.

## Dashboard {#dashboard}

**Ich kann ein Steuerelement nicht verschieben oder löschen**
- Es ist gesperrt: **Entsperren** Sie es über sein Menü. Ein Steuerelement, das vom Programm verwendet wird, lässt sich erst löschen, wenn Sie die zugehörigen Zeilen oder Blöcke entfernt haben.

**„Auf dem Bildschirm ist kein verfügbarer Platz“**
- Verschieben oder verkleinern Sie andere Steuerelemente oder wählen Sie eine kleinere Größe.

**Ein Theme oder Steuerelement ist gesperrt**
- Sie besitzen es nicht: Kaufen Sie es oder holen Sie sich [MocPilot Pro](/docs/Application/Account/Pro), oder stellen Sie das Steuerelement mit **Theme ändern** auf das Theme „Grundlegend“ um.

**Das Gamepad wird nicht erkannt**
- Koppeln Sie das Gamepad in den Bluetooth-Einstellungen des Systems (oder schließen Sie es per USB an). Die Seite **Gamepad** zeigt **Gamepad: (Name)**, wenn die App es erkennt, andernfalls „Gamepad ist nicht verbunden“.
- Schalten Sie auf der Seite **Gamepad** die Option **Gamepad-Blöcke aktivieren** ein, sonst erscheinen die Gamepad-Eingänge und -Blöcke nicht.
- Mehrere Gamepads verbunden? Wählen Sie eines unter **Gamepad auswählen**.
- Prüfen Sie Tasten und Sticks mit **Gamepad testen**.
- Windows: Xbox-Controller (XInput) und Sony DualSense / DualSense Edge funktionieren; andere Controller ohne XInput-Unterstützung möglicherweise nicht.
- Siehe [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profile und Synchronisierung {#profiles-and-sync}

**Meine Profile sind nicht auf meinem anderen Gerät**
- Melden Sie sich auf beiden Geräten mit demselben Konto an und prüfen Sie die Internetverbindung. Zeigt die App **Offline** an, tippen Sie auf **Erneut versuchen** oder **Online gehen**.

**„Profil ist nicht kompatibel“**
- Das Profil wurde mit einer neueren Version von MOCPilot erstellt. Aktualisieren Sie die App.

**Ich habe meine Profile nach einer Neuinstallation verloren**
- Im Gastmodus existieren Profile nur auf dem Gerät und gehen mit der App verloren. Mit einem Konto melden Sie sich erneut an, und sie kommen zurück.

## E-Mails zum Konto {#account-emails}

**Die Aktivierungs-E-Mail oder der Code zum Zurücksetzen des Passworts kommt nicht an**
- Warten Sie ein paar Minuten und sehen Sie im Spam- oder Junk-Ordner nach. Die E-Mails kommen von no-reply@mocpilot.com.
- Prüfen Sie, ob Sie die E-Mail-Adresse richtig eingegeben haben.
- Aktivierung: Öffnen Sie Ihre Kontoseite und tippen Sie auf **Aktivierungs-E-Mail erneut senden**. Bis das Konto bestätigt ist, bleiben einige Funktionen deaktiviert.
- Passwort zurücksetzen: „E-Mail nicht gefunden“ bedeutet, dass es kein Konto mit dieser E-Mail-Adresse gibt; versuchen Sie die Adresse, mit der Sie sich registriert haben. Andernfalls tippen Sie neben „Passwort vergessen?“ erneut auf **Zurücksetzen**, um einen neuen Code zu erhalten. Siehe [Konto](/docs/Application/Account/UserAccount).

## Käufe {#purchases}

**Ein Kauf fehlt**
- Melden Sie sich mit dem Konto an, mit dem Sie den Kauf getätigt haben, und gehen Sie dann zu **Konto → Käufe → Wiederherstellen**.
- „Abo mit einem anderen Konto verknüpft“: Das Pro-Abo dieses Store-Kontos gehört zu einem anderen MOCPilot-Konto.

**„MocPilot Pro muss online geprüft werden“**
- Pro wurde lange offline verwendet. Verbinden Sie sich mit dem Internet, dann läuft die Prüfung von selbst.

## App-Updates {#app-updates}

**„Update erforderlich“**
- Die Vollbildmeldung „Diese Version von MOCPilot wird nicht mehr unterstützt…“ bedeutet, dass diese Version nicht mehr verwendet werden kann. Tippen Sie auf **Aktualisieren**, um den Store zu öffnen und die neue Version zu installieren. Der Bildschirm zeigt außerdem Ihre **Installierte Version**.
- Im Web-Editor heißt die Schaltfläche **Seite neu laden**: Der neueste Editor wird geladen.

**„MOCPilot (Version) ist verfügbar“**
- Eine neuere Version ist erschienen. Tippen Sie auf **Aktualisieren** (im Web-Editor auf **Seite neu laden**) oder schließen Sie das Banner mit ×: Es erscheint erst bei der nächsten Version wieder.

## Ton {#sound}

**Es ist kein Ton zu hören**
- Schalten Sie **Ton** in den [Einstellungen](/docs/Application/Account/Settings) ein: Diese Option schaltet alle Töne der App, der Steuerelemente und der Programme stumm.
- Erhöhen Sie die Medienlautstärke des Geräts. Sind Kopfhörer oder ein Bluetooth-Lautsprecher verbunden, wird der Ton dort abgespielt.
- Logikblöcke: Prüfen Sie, ob das Programm die Lautstärke auf 0 setzt oder alle Töne stoppt. Siehe [Töne](/docs/Application/BlockBuilder/Blocks/Sounds).

## KI-Builder {#ai-builder}

**Der KI-Builder ist nicht verfügbar oder zeigt einen Fehler**
- Der KI-Builder benötigt [MocPilot Pro](/docs/Application/Account/Pro) und eine Internetverbindung: „Der KI-Builder erfordert MocPilot Pro.“ oder „Der KI-Dienst ist nicht erreichbar. Prüfe deine Internetverbindung und versuche es erneut.“
- „Der KI-Dienst ist vorübergehend nicht verfügbar. Versuche es später erneut.“ oder „Gerade gibt es zu viele KI-Anfragen. Versuche es in einer Minute erneut.“: Warten Sie und versuchen Sie es erneut.
- Es gibt Tages- und Monatslimits: „Sie haben das heutige Limit für KI-Anfragen erreicht. Versuchen Sie es morgen erneut.“
- Spracheingabe: Erlauben Sie in den Systemeinstellungen das Mikrofon (und auf Apple-Geräten die Spracherkennung); siehe [Bluetooth und Berechtigungen](/docs/Help/BluetoothPermissions).
- Alle Meldungen und was zu tun ist: [KI-Builder](/docs/Application/Profiles/AiBuilder).

## Fernsteuerung {#remote-control}

**Das Hub-Gerät verbindet sich nicht oder die Verbindung bricht ab**
- „Fernsteuerung ist Teil von MocPilot Pro“: Das Konto der Fernbedienung benötigt [MocPilot Pro](/docs/Application/Account/Pro).
- „Der Code ist abgelaufen…“ oder „Falscher oder abgelaufener Code…“: Der Verbindungscode ist 5 Minuten gültig. Zeigen Sie auf der Fernbedienung einen neuen Code an und scannen oder tippen Sie ihn erneut ein.
- „Erlauben Sie MOCPilot in den Systemeinstellungen den Kamerazugriff, um den Code zu scannen.“: Erlauben Sie die Kamera in den Systemeinstellungen ([so geht's](/docs/Help/BluetoothPermissions)), oder tippen Sie auf **Code eingeben** und geben Sie die 6 Ziffern ein.
- „Diese App-Version kann keine Verbindung zu einer Fernbedienung herstellen“ oder „Das andere Gerät konnte das Profil nicht öffnen“: Aktualisieren Sie MOCPilot auf beiden Geräten.
- „Verbindung zur Fernbedienung verloren…“: Prüfen Sie, ob beide Geräte online sind. Ist die Verbindung etwa 4 Sekunden lang unterbrochen, stoppt das Hub-Gerät das Profil und alle Motoren.
- Mehr: [Fernsteuerung](/docs/Application/Profiles/RemoteControl).

## Immer noch Probleme? {#still-stuck}

Verwenden Sie **Eine Frage stellen** oder **Einen Fehler melden** in der **Hilfe** der App (Computer: Menü **Hilfe**). Die Antwort kommt per E-Mail und unter **Benachrichtigungen**.
