---
id: FirstCarLinks
title: Ihr erstes RC-Auto mit Schnellverknüpfungen
description: "Schritt für Schritt: ein ferngesteuertes LEGO-Auto mit Antrieb, Servolenkung und Licht in Schnellverknüpfungen bauen, ganz ohne Code."
---

import Screenshot from '@site/src/components/Screenshot';

# Ihr erstes RC-Auto mit Schnellverknüpfungen {#your-first-rc-car-with-quick-links}

In dieser Anleitung bauen Sie ein vollständiges ferngesteuertes Auto mit [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing): Ein Joystick fährt und lenkt, eine Taste schaltet das Licht ein und aus. Das dauert etwa 15 Minuten, und Sie schreiben keinen Code.

**Was Sie brauchen**

- einen LEGO® Technic™ Hub (88012);
- einen Antriebsmotor an **Port A**;
- einen Lenkmotor mit Positionssensor (Encoder) an **Port B**, zum Beispiel einen Technic L- oder XL-Motor oder einen beliebigen Technic-Winkelmotor. Die Lenkung muss Endanschläge haben: Die Räder lassen sich nur begrenzt nach links und rechts einschlagen;
- LEGO®-Lichter an **Port C** (optional);
- MOCPilot auf einem Smartphone, Tablet oder Computer mit Bluetooth.

:::note City Hub
Ein City Hub (88009) hat nur zwei Ports. Schließen Sie den Antriebsmotor an **A** und den Lenkmotor an **B** an und lassen Sie das Licht weg, oder fügen Sie dafür einen zweiten Hub hinzu. Alles andere funktioniert genauso.
:::

**Das Ergebnis**: ein Profil mit drei Zeilen:

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | JOY1, Y-Achse | Sanft | Motor | Technic Hub, Port A |
| 2 | JOY1, X-Achse | | Servo (Auto) | Technic Hub, Port B |
| 3 | BTN1 | Umschalten | Licht | Technic Hub, Port C |

## 1. Profil erstellen {#create-the-profile}

1. Öffnen Sie **Meine Profile** und legen Sie ein neues Profil an: auf dem Smartphone über **+** → **Neues Profil**, auf dem Tablet über **Neues Profil** im Kopfbereich, auf dem Computer über **Datei → Neues Profil**.
2. Wählen Sie die Kachel **Schnellverknüpfungen**.
3. Geben Sie einen **Namen** ein, zum Beispiel „Mein erstes Auto“. Bild und Hashtags sind vorerst optional.
4. Tippen Sie auf **Erstellen**. Das Profil öffnet sich im Editor für Schnellverknüpfungen mit einer leeren Zeile.

Der Programmtyp lässt sich später nicht ändern. Mehr dazu unter [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile).

## 2. Hub hinzufügen und verbinden {#add-the-hub}

1. Tippen Sie im Editor auf **Meine Hubs**.
2. Tippen Sie in einem freien Slot auf **Neuen Hub hinzufügen**, wählen Sie den Technic Hub in der Liste und tippen Sie auf **Hinzufügen**.
3. Schalten Sie den Hub ein und drücken Sie seine Taste. MOCPilot findet ihn und verbindet sich; der Hub bleibt im Slot.
4. Erscheint der Dialog **Firmware-Update erforderlich**, tippen Sie auf **Aktualisieren** und lassen Sie den Hub eingeschaltet und in der Nähe, bis das Update abgeschlossen ist. Siehe [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating).

Tipp: Öffnen Sie den verbundenen Hub, um seinen [Hub-Monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor) zu sehen. Er zeigt, welches Gerät an jedem Port angeschlossen ist, sodass Sie die Motoren prüfen können, bevor Sie die Zeilen bauen.

Mehr dazu unter [Einen Hub hinzufügen und verbinden](/docs/Application/Hubs/ConnectingHubs).

## 3. Steuerelemente auf dem Dashboard platzieren {#dashboard}

1. Öffnen Sie das **Dashboard** und tippen Sie auf **+** (**Controller hinzufügen**).
2. Wählen Sie in der Gruppe **Joysticks** den **Joystick** und tippen Sie auf **Zum Dashboard hinzufügen**. Er heißt **JOY1**. Lassen Sie **Achsentyp** auf **Beide Achsen (X, Y)**: Hoch und runter fährt, links und rechts lenkt.
3. Tippen Sie erneut auf **+**. Wählen Sie unter **Tasten und Schalter** die **Taste** und tippen Sie auf **Zum Dashboard hinzufügen**. Sie heißt **BTN1**.
4. Ziehen Sie den Joystick nach links und die Taste nach rechts, dorthin, wo Ihre Daumen sein werden. Tippen Sie auf ein Steuerelement, um seine Größe (**S**, **M** oder **L**) oder sein Aussehen zu ändern.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard mit dem Joystick JOY1 links und der Taste BTN1 rechts" width={900} />

Lieber mit getrennten Daumen fahren und lenken? Fügen Sie stattdessen zwei Joysticks hinzu: **JOY1** mit **Nur vertikal (Y)** und **JOY2** mit **Nur horizontal (X)**, und verwenden Sie JOY2 in der Lenkungszeile.

Mehr dazu unter [Steuerelemente hinzufügen und anordnen](/docs/Application/Dashboard/ArrangingControls) und [Steuerelementtypen](/docs/Application/Dashboard/ControlTypes).

### Option: Lenkrad und Pedale {#wheel-and-pedals}

Wenn Sie die [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls) **Lenkrad** und **Pedale** haben, können Sie diese statt des Joysticks verwenden. Bauen Sie in Schritt 4 Zeile 1 aus dem Eingang [Fahrzeug](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) mit **Ausgang** auf **Geschwindigkeit** (es beschleunigt und bremst wie ein echtes Auto, daher brauchen Sie „Sanft“ nicht), und Zeile 2 aus dem Eingang **Lenkrad** mit dem Kanal **Lenkwinkel**.

## 4. Zeilen bauen {#rows}

Kehren Sie zum Programm zurück. Die Palette unten hat drei Tabs: **Eingänge**, **Verarbeitung** und **Ausgänge**. Jede Zeile verläuft von links nach rechts: Eingang → Verarbeitung → Aktion → Hub. Wie der Editor funktioniert: [Einführung in Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing).

### Zeile 1: Antrieb {#row-drive}

1. Ziehen Sie unter **Eingänge** **JOY1** mit dem Kanal **Y-Achse** in die leere Zeile („Neue Zeile: Eingang“). Darunter erscheint eine neue leere Zeile.
2. Ziehen Sie unter **Verarbeitung** **Sanft** hinter den Eingang. Die Standardwerte von 0,5 s für **Beschleunigung (auf volle Geschw.)** und **Verzögerung (bis zum Stopp)** sind ein guter Anfang.
3. Ziehen Sie unter **Ausgänge** **Motor** hinter „Sanft“.
4. Ziehen Sie den Ausgang **Technic Hub** hinter „Motor“ und tippen Sie auf den Port-Chip **A**.

### Zeile 2: Lenkung {#row-steering}

1. Ziehen Sie **JOY1** mit dem Kanal **X-Achse** in die nächste leere Zeile.
2. Ziehen Sie **Servo** aus **Ausgänge** hinein.
3. Tippen Sie auf den Servo-Block und stellen Sie **Kalibrierung** auf **Auto**.
4. Ziehen Sie den Ausgang **Technic Hub** hinter „Servo“ und tippen Sie auf **B**.

Im Modus **Auto** fährt der Lenkmotor bei jedem Programmstart an beide Endanschläge; die Mitte wird zur Mittelstellung und der Weg zum Lenkwinkel. Um es sofort auszuprobieren, tippen Sie in den Servo-Einstellungen auf **Jetzt kalibrieren**, während der Hub verbunden ist. Schlägt die Kalibrierung fehl, prüfen Sie den Hub, den Motor und ob die Lenkung wirklich Endanschläge hat.

<Screenshot name="links-servo-settings" alt="Einstellungen eines Servo-Blocks" width={900} />

Keine Endanschläge? Verwenden Sie **Manuell**: Stellen Sie die Räder von Hand gerade, tippen Sie auf **Als Nullpunkt setzen** und wählen Sie den **Winkel**. Siehe [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Zeile 3: Licht {#row-lights}

1. Ziehen Sie **BTN1** in die nächste leere Zeile.
2. Ziehen Sie **Umschalten** aus **Verarbeitung** hinein. Damit wird die Taste zum Schalter: einmal drücken für ein, noch einmal für aus.
3. Ziehen Sie **Licht** aus **Ausgänge** hinein.
4. Ziehen Sie den Ausgang **Technic Hub** hinter „Licht“ und tippen Sie auf **C**.

<Screenshot name="tutorial-car-links-rows" alt="Die drei fertigen Zeilen des Autos: Antrieb, Lenkung und Licht" width={900} />

Wenn alle drei Zeilen fertig sind, zeigt die Schaltfläche **Probleme** in der oberen Leiste einen grünen Haken. Ein rotes „!“ zeigt an, wie viele Probleme noch übrig sind; tippen Sie darauf und dann auf ein Problem, um zur Zeile zu springen. Siehe [Ausführen und Probleme beheben](/docs/Application/Links/Problems).

## 5. Starten und testen {#run}

1. Stellen Sie das Auto auf einen Ständer oder halten Sie es so, dass die Räder den Tisch nicht berühren.
2. Drücken Sie **Start**. Der Lenkmotor kalibriert sich: Er schlägt nach beiden Seiten ein und kehrt zur Mitte zurück.
3. Drücken Sie den Joystick nach oben und unten: Das Auto fährt vorwärts und rückwärts und fährt sanft an und hält sanft. Bewegen Sie ihn nach links und rechts: Die Räder lenken.
4. Drücken Sie **BTN1**: Das Licht geht an. Drücken Sie erneut: Es geht aus.
5. Mit **Stopp** kehren Sie zum Bearbeiten zurück.

Während das Programm läuft, zeigt jede Verbindung zwischen Blöcken den Wert, der gerade hindurchfließt. So können Sie ein Signal vom Joystick bis zum Hub verfolgen.

<Screenshot name="links-live-values" alt="Ein laufendes Programm mit Schnellverknüpfungen und Live-Werten an den Verbindungen" width={900} />

Mehr dazu unter [Ein Modell steuern (Start)](/docs/Application/Profiles/PlayMode).

## 6. Feinabstimmung {#tune}

Drücken Sie zuerst **Stopp**: Während das Programm läuft, lassen sich Zeilen nicht bearbeiten.

- **Das Auto fährt rückwärts, wenn Sie nach oben drücken?** Fügen Sie **Umkehren** zu Zeile 1 hinzu. Dasselbe funktioniert in Zeile 2, wenn die Räder in die falsche Richtung lenken.
- **Der Motor brummt oder kriecht bei losgelassenem Joystick?** Fügen Sie **Totzone** zu Zeile 1 hinzu, vor „Sanft“. Die Standard-**Zone** von 10 % ist ein guter Anfang.
- **Zu schnell?** Fügen Sie **Begrenzung** zu Zeile 1 hinzu, zum Beispiel mit **Maximum** 50 %.
- **Zu träge?** Tippen Sie auf „Sanft“ und wählen Sie eine kürzere Zeit oder **Sofort**.

Eine gute Reihenfolge für eine Antriebszeile ist *Totzone → Begrenzung → Sanft*. Alle Einstellungen: [Verarbeitungsblöcke](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Optional: mit einem Gamepad fahren {#gamepad}

1. Koppeln Sie ein Gamepad im Xbox- oder PlayStation-Stil in den Bluetooth-Einstellungen des Systems mit Ihrem Gerät.
2. Öffnen Sie im Editor **Gamepad** und schalten Sie **Gamepad-Blöcke aktivieren** ein.
3. Ziehen Sie in jeder Zeile den Dashboard-Eingang zurück auf die Palette, um ihn zu entfernen, und ziehen Sie den Eingang **Gamepad** an seine Stelle. Stellen Sie seinen **Eingang** ein: **Linker Stick Y** für Zeile 1, **Rechter Stick X** für Zeile 2 und **A** (**Kreuz** bei PlayStation) für Zeile 3.

Jeder Port kann nur zu einer Zeile gehören, daher steuert eine Zeile einen Port entweder vom Dashboard oder vom Gamepad aus. Mehr dazu unter [Gamepad](/docs/Application/Dashboard/Gamepad).

## Wenn sich nichts bewegt {#if-something-does-not-move}

1. Ist der Hub verbunden? Prüfen Sie **Meine Hubs** und den Verbindungspunkt am Hub-Block.
2. Sind die Motoren an den Ports angeschlossen, die Sie in den Zeilen gewählt haben?
3. Zeigt die Schaltfläche **Probleme** einen grünen Haken, und ist jede Zeile eingeschaltet?
4. Läuft das Programm?
5. Starten Sie das Programm und beobachten Sie die Live-Werte: Ändert sich der Wert am Eingang, aber der Motor dreht sich nicht, prüfen Sie den Hub und den Port.

Eine Meldung wie „Port B: Dieses Gerät kann nicht als Servo arbeiten (ein Motor mit Encoder ist nötig)“ bedeutet, dass der Motor an diesem Port keinen Encoder hat. Weitere Meldungen und Lösungen: [Ausführen und Probleme beheben](/docs/Application/Links/Problems) und [Fehlerbehebung](/docs/Help/Troubleshooting).

## 8. Speichern und teilen {#save-and-share}

Es gibt keine Schaltfläche zum Speichern: Das Profil behält Ihre Änderungen. Wenn Sie angemeldet sind, wird es außerdem mit Ihren anderen Geräten [synchronisiert](/docs/Application/Account/Sync).

- **Als Datei teilen**: Tippen Sie unter **Meine Profile** auf der Profilkarte auf **Teilen** (**Teilen…** auf einem Computer). Sie erhalten eine `.dat`-Datei, die Sie einem Freund schicken können. Siehe [Profile verwalten](/docs/Application/Profiles/ManageProfiles).
- **Im Katalog veröffentlichen**: Öffnen Sie **Profil bearbeiten** und tippen Sie auf **An den Katalog senden**. Fügen Sie vorher ein Bild, eine Beschreibung und einen Hashtag hinzu. Siehe [Katalog und Veröffentlichen](/docs/Application/Profiles/Catalog).

## Nächste Schritte {#next-steps}

- Behalten Sie den Akku im Blick: Fügen Sie dem Dashboard einen **Batteriestand** oder einen Text-**Monitor** hinzu und eine Zeile *Technic Hub (Akku) → Anzeige*. Siehe [Anzeigen und Monitore](/docs/Application/Dashboard/Indicators).
- Bauen Sie dasselbe Auto mit Logikblöcken: [Dasselbe Auto mit Logikblöcken](/docs/Tutorials/FirstCarBlocks).
- Weitere Rezepte: ein Panzer, ein Kran und ein Zug unter [Beispiele](/docs/Application/Links/Examples).
- Geben Sie dem Dashboard mit [Themes](/docs/Application/Themes/ThemesOverview) ein neues Aussehen.
