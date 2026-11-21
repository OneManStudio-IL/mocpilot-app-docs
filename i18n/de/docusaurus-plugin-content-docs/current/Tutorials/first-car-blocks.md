---
id: FirstCarBlocks
title: Dasselbe Auto mit Logikblöcken
description: "Schritt für Schritt: ein ferngesteuertes LEGO-Auto mit Antrieb, Servolenkung, Licht und Blinkern mit Logikblöcken programmieren."
---

import Screenshot from '@site/src/components/Screenshot';

# Dasselbe Auto mit Logikblöcken {#the-same-car-in-logic-blocks}

In dieser Anleitung bauen Sie das Auto aus [Ihr erstes RC-Auto mit Schnellverknüpfungen](/docs/Tutorials/FirstCarLinks) noch einmal, diesmal mit [Logikblöcken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Sie erhalten dasselbe Ergebnis – einen Joystick zum Fahren und Lenken und eine Taste für das Licht – und lernen dabei die Grundlagen der Blockprogrammierung kennen: Ereignisse, Schleifen, Variablen und den Monitor. Zum Schluss können Sie Blinker mit Tickgeräusch hinzufügen.

**Was Sie brauchen**: dasselbe Modell wie in der Anleitung zu Schnellverknüpfungen:

- einen LEGO® Technic™ Hub (88012);
- einen Antriebsmotor an **Port A**;
- einen Lenkmotor mit Encoder an **Port B** (einen Technic L- oder XL-Motor oder einen beliebigen Technic-Winkelmotor);
- LEGO®-Lichter an **Port C** (optional).

Mit einem City Hub verwenden Sie die Ports **A** und **B** und lassen das Licht weg.

**Das Ergebnis**:

```text
wenn das Programm startet
setze (lights) auf 0
relative Position einstellen 0  (Hub 1, Port B)
immer wiederholen
    setze (throttle) auf (Joystick JOY1 Y-Achse)
    Motor starten bei (throttle) % Geschwindigkeit  (Hub 1, Port A)
    zur relativen Position gehen (Joystick JOY1 X-Achse × 0.9) bei 100 % Geschwindigkeit  (Hub 1, Port B)

wenn der Knopf BTN1 gedrückt ist
    wenn (lights) = 0 dann
        einschalten bei 100 % Helligkeit  (Hub 1, Port C)
        setze (lights) auf 1
    sonst
        ausschalten  (Hub 1, Port C)
        setze (lights) auf 0
```

So lesen Sie die Listings: Jede Zeile ist ein Block, so wie die App ihn anzeigt. Werte in Klammern sind der Hub und der Port, die Sie im Block wählen, oder ein Block bzw. eine Variable, die Sie in einen Slot ziehen. Eingerückte Zeilen gehören in den C-Block darüber.

## 1. Profil erstellen {#create-the-profile}

1. Legen Sie unter **Meine Profile** ein neues Profil an (**+** → **Neues Profil** auf dem Smartphone, **Neues Profil** auf dem Tablet, **Datei → Neues Profil** auf dem Computer).
2. Wählen Sie die Kachel **Logikblöcke**.
3. Geben Sie einen **Namen** ein und stellen Sie die **Blockstufe** auf **Fortgeschritten**. Die hier verwendete Schleife **immer wiederholen** und **wenn … dann … sonst** sind Blöcke der Stufe „Fortgeschritten“; die Palette **Anfänger** zeigt sie nicht.
4. Tippen Sie auf **Erstellen**.

Die Stufe können Sie später unter **Editor-Einstellungen** → **Blockstufe auswählen** ändern. Siehe [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile) und [Blockstufen](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Hub und Steuerelemente hinzufügen {#hub-and-dashboard}

Gehen Sie genauso vor wie in der Anleitung zu Schnellverknüpfungen:

1. [Hub hinzufügen und verbinden](/docs/Tutorials/FirstCarLinks#add-the-hub) unter **Meine Hubs**.
2. [Steuerelemente auf dem Dashboard platzieren](/docs/Tutorials/FirstCarLinks#dashboard): einen **Joystick** (**JOY1**) links und eine **Taste** (**BTN1**) rechts.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard mit dem Joystick JOY1 links und der Taste BTN1 rechts" width={900} />

Sobald der Hub im Profil ist, zeigt die Palette die Kategorien **Motoren** und **Licht**; die Steuerelemente erscheinen unter **Bildschirm-Controller**.

## 3. Ereignisse oder eine Schleife? {#events-or-loop}

Ein Skript beginnt mit einem **Ereignis**-Block und führt die Blöcke darunter von oben nach unten aus. Mehrere Skripte laufen gleichzeitig.

- Ein Ereignisblock wie [wenn der Knopf … gedrückt ist](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) führt sein Skript jedes Mal einmal aus, wenn das Ereignis eintritt. Ereignisse eignen sich für Dinge, die zu einem bestimmten Zeitpunkt passieren: ein Tastendruck, ein Schalter, ein Blinker.
- Ein Joystick ändert sich ständig. Am einfachsten verfolgen Sie ihn mit einem Skript, das mit [wenn das Programm startet](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) beginnt und den Stick in einer Schleife [immer wiederholen](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) fortlaufend ausliest.

Dieses Auto nutzt beides: eine Schleife zum Fahren und Lenken und ein Ereignis für das Licht.

## 4. Fahren {#drive}

1. Ziehen Sie aus **Ereignisse** den Block [wenn das Programm startet](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) in den Programmbereich.
2. Hängen Sie aus **Steuerung** [immer wiederholen](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) darunter an.
3. Legen Sie aus **Motoren** [Motor starten bei … % Geschwindigkeit](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) in **immer wiederholen**. Wählen Sie den Hub und Port **A**.
4. Ziehen Sie aus **Bildschirm-Controller** den Werteblock [Joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) in den Geschwindigkeits-Slot. Wählen Sie **JOY1** und **Y-Achse**.

```text
wenn das Programm startet
immer wiederholen
    Motor starten bei (Joystick JOY1 Y-Achse) % Geschwindigkeit  (Hub 1, Port A)
```

Stellen Sie das Auto auf einen Ständer, drücken Sie **Start** und bewegen Sie den Joystick: Der Joystick liefert −100 bis 100, genau die Motorgeschwindigkeit in Prozent. Drücken Sie **Stopp**, wenn Sie fertig sind.

**Fährt rückwärts, wenn Sie nach oben drücken?** Verwenden Sie [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) aus **Operator**: `(Joystick JOY1 Y-Achse × -1)`. **Zu schnell?** Multiplizieren Sie stattdessen mit 0.5.

## 5. Lenken {#steer}

Der Lenkmotor folgt der X-Achse des Joysticks mit [zur relativen Position gehen … bei … % Geschwindigkeit](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relative Positionen werden ab dem Punkt gezählt, den Sie mit [relative Position einstellen …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position) festlegen.

1. Hängen Sie **relative Position einstellen** direkt unter **wenn das Programm startet** an, oberhalb von **immer wiederholen**. Lassen Sie den Wert auf 0 und wählen Sie Port **B**.
2. Fügen Sie in **immer wiederholen** unter dem Motorblock **zur relativen Position gehen … bei … % Geschwindigkeit** mit Port **B** hinzu.
3. Legen Sie in dessen Positions-Slot **… × …** mit der **X-Achse** des Joysticks links und `0.9` rechts. So wird aus −100…100 ein Bereich von −90…90 Grad.
4. Stellen Sie die Geschwindigkeit auf 100.

```text
wenn das Programm startet
relative Position einstellen 0  (Hub 1, Port B)
immer wiederholen
    Motor starten bei (Joystick JOY1 Y-Achse) % Geschwindigkeit  (Hub 1, Port A)
    zur relativen Position gehen (Joystick JOY1 X-Achse × 0.9) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

Stellen Sie die Räder vor jedem **Start** von Hand gerade: Diese Stellung wird zur Mitte. Schlagen die Räder zu weit ein, verwenden Sie eine kleinere Zahl als 0.9; lenken sie in die falsche Richtung, verwenden Sie −0.9.

### Option: Lenkung automatisch kalibrieren {#calibrate-rack}

Hat die Lenkung Endanschläge, findet [zahnstange kalibrieren … mitte … grad …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) die Mitte und den Lenkweg für Sie. Erstellen Sie zuerst zwei Variablen (**Variablen** → **Eine Variable erstellen**), zum Beispiel `center` und `range`, und ziehen Sie sie in die Slots des Blocks. Der Block fährt die Zahnstange an beide Enden, hält in der Mitte an und schreibt die Ergebnisse in die Variablen; das Skript läuft weiter, sobald die Kalibrierung abgeschlossen ist.

```text
wenn das Programm startet
zahnstange kalibrieren (center) mitte (range) grad  (Hub 1, Port B)
relative Position einstellen 0  (Hub 1, Port B)
immer wiederholen
    Motor starten bei (Joystick JOY1 Y-Achse) % Geschwindigkeit  (Hub 1, Port A)
    zur relativen Position gehen ((range × Joystick JOY1 X-Achse) ÷ 100) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

**relative Position einstellen 0** direkt nach der Kalibrierung macht die Mitte zum Nullpunkt, sodass voller Stickausschlag die Räder um den gemessenen Lenkweg einschlägt.

## 6. Licht per Taste {#lights}

Schnellverknüpfungen haben einen fertigen Block „Umschalten“. Bei Logikblöcken merkt sich eine [Variable](/docs/Application/BlockBuilder/Blocks/Variables), ob das Licht an ist.

1. Tippen Sie unter **Variablen** auf **Eine Variable erstellen** und nennen Sie sie `lights`.
2. Fügen Sie [setze … auf …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) am Anfang des Hauptskripts hinzu: `setze (lights) auf 0`.
3. Ziehen Sie aus **Bildschirm-Controller** [wenn der Knopf … gedrückt ist](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) an eine freie Stelle und wählen Sie **BTN1**.
4. Fügen Sie darunter [wenn … dann … sonst](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) mit der Bedingung [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal) hinzu: `(lights) = 0`.
5. Fügen Sie im ersten Zweig [einschalten bei … % Helligkeit](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (Port **C**) und `setze (lights) auf 1` hinzu. Fügen Sie im zweiten Zweig [ausschalten](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (Port **C**) und `setze (lights) auf 0` hinzu.

```text
wenn der Knopf BTN1 gedrückt ist
    wenn (lights) = 0 dann
        einschalten bei 100 % Helligkeit  (Hub 1, Port C)
        setze (lights) auf 1
    sonst
        ausschalten  (Hub 1, Port C)
        setze (lights) auf 0
```

Mit einem **Schalter** statt der Taste ist es noch einfacher: *wenn Schalter … ist umgeschaltet an / aus*; siehe die [Beispiele](/docs/Application/BlockBuilder/Examples).

## 7. Starten und den Monitor beobachten {#monitor}

Wenn etwas nicht wie erwartet funktioniert, sehen Sie sich die Werte an. Der [Monitor](/docs/Application/BlockBuilder/Editor#monitor) in der oberen Leiste zeigt jede Variable an, während das Programm läuft.

1. Erstellen Sie eine Variable `throttle`.
2. Speichern Sie in der Schleife den Joystick-Wert darin und verwenden Sie die Variable für die Motorgeschwindigkeit:

```text
immer wiederholen
    setze (throttle) auf (Joystick JOY1 Y-Achse)
    Motor starten bei (throttle) % Geschwindigkeit  (Hub 1, Port A)
    zur relativen Position gehen (Joystick JOY1 X-Achse × 0.9) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

3. Drücken Sie **Start** und öffnen Sie den **Monitor**. Bewegen Sie den Joystick und drücken Sie BTN1: `throttle` folgt dem Stick, und `lights` wechselt zwischen 0 und 1.

<Screenshot name="blocks-monitor" alt="Monitor mit Variablen und einer Liste während das Programm läuft" width={900} />

- `throttle` ändert sich, aber der Motor dreht sich nicht: Prüfen Sie die Hub-Verbindung unter **Meine Hubs** und den Port im Block.
- `throttle` bleibt bei 0: Prüfen Sie, ob der Block **JOY1** und die richtige Achse ausliest.

Bei Logikblöcken bleibt das Programm auch während der Ausführung bearbeitbar, sodass Sie eine Zahl ändern und die Wirkung sofort sehen können. Hier das gesamte Programm:

<Screenshot name="tutorial-car-blocks-program" alt="Das fertige Autoprogramm: das Hauptskript mit der Schleife „immer wiederholen“ und das Lichtskript für BTN1" width={900} />

Weitere Hilfe: [Fehlerbehebung](/docs/Help/Troubleshooting).

## 8. Optional: Blinker mit Ton {#turn-signals}

Fügen Sie dem Dashboard das [Spezial-Steuerelement](/docs/Application/Dashboard/SpecialControls#turn-signals) **Blinker** (**STALK1**) hinzu und schließen Sie ein Licht an **Port D** an. Ziehen Sie den Hebel nach oben für den linken und nach unten für den rechten Blinker.

```text
wenn Blinker STALK1 linker Blinker geht an
    Ton Blinker spiele
    wiederholen, solange nicht (Blinker STALK1 linker Blinker ist an ?)
        einschalten bei 100 % Helligkeit  (Hub 1, Port D)
        warten 0.5 Sekunden
        ausschalten  (Hub 1, Port D)
        warten 0.5 Sekunden
    stoppe Ton Blinker
```

Die Blöcke: [wenn Blinker …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) und [Blinker … ist an ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) unter **Bildschirm-Controller**; [Ton … spiele](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) und [stoppe Ton …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) unter **Töne**; [wiederholen, solange …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) und [warten … Sekunden](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) unter **Steuerung**; [nicht …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) unter **Operator**.

Der Ton **Blinker** wiederholt sich von selbst, bis Sie ihn stoppen. Der Ton wird auf Ihrem Smartphone, Tablet oder Computer abgespielt.

Duplizieren Sie das Skript (lange drücken oder Rechtsklick → **Duplizieren**) und wählen Sie in beiden Blöcken **rechter Blinker**. Beide Blinker lassen dann dasselbe Licht an Port D blinken; für getrennte Lampen links und rechts brauchen Sie zwei freie Ports, zum Beispiel an einem zweiten Hub.

## Schnellverknüpfungen oder Logikblöcke: was wählen? {#which-to-choose}

| | Schnellverknüpfungen | Logikblöcke |
|---|---|---|
| Dieses Auto | 3 Zeilen | 2 Skripte, 2 Variablen |
| Sanftes Anfahren, Totzone, Begrenzung | fertige Blöcke | selbst multiplizieren und berechnen |
| Servolenkung | Servo-Block mit Auto-Kalibrierung | Blöcke für relative Position oder Zahnstange kalibrieren |
| Licht per Taste | Block „Umschalten“ | eine Variable und *wenn … dann … sonst* |
| Töne, Abläufe, Bedingungen | nein | ja |
| Live-Werte | an jeder Verbindung einer Zeile | der Monitor und Dashboard-Monitore |
| Bearbeiten während der Ausführung | nein | ja |

Wählen Sie **Schnellverknüpfungen**, wenn jedes Steuerelement einfach etwas bewegt: Autos, Lkw, Züge, Kräne. Wählen Sie **Logikblöcke**, wenn Sie Logik brauchen: Töne, Blinkmuster, Abläufe, Reaktionen auf Sensoren, Spiele. Der Programmtyp lässt sich nicht ändern, aber Sie können für dasselbe Modell ein zweites Profil anlegen. Mehr dazu unter [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Nächste Schritte {#next-steps}

- Zeigen Sie den Akkustand auf einem Dashboard-**Monitor** an und warnen Sie, wenn er niedrig wird: [Beispiele](/docs/Application/BlockBuilder/Examples#battery-warning).
- Mit einem Gamepad fahren: [Gamepad-Blöcke](/docs/Application/BlockBuilder/Blocks/Gamepad) und das [Gamepad-Beispiel](/docs/Application/BlockBuilder/Examples#gamepad).
- Lassen Sie das Auto mit Pedalen, Getriebe und Trägheit realistisch wirken: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Lernen Sie den Editor kennen: [Arbeiten im Editor](/docs/Application/BlockBuilder/Editor).
