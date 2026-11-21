---
id: ControlTypes
title: Steuerelementtypen
description: "Joystick, Steuerkreuz, Schieberegler, Drehknopf, Tasten, Schalter, Schritt-Schalter, Monitore und Spezial-Steuerelemente."
---

# Steuerelementtypen {#control-types}

Jedes [Theme](/docs/Application/Themes/ThemesOverview) zeichnet dieselben Steuerelementtypen in seinem eigenen Stil. Das kostenlose Theme **Grundlegend** enthält neun davon; jedes kostenpflichtige Theme bietet zusätzlich den **Drehknopf** und drei grafische Monitore. Lenkräder, Pedale, Schalthebel und die anderen [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls) sind eigene Produkte.

| Steuerelement | Name auf dem Dashboard | Liefert dem Programm | Verfügbar in |
|---|---|---|---|
| Joystick | JOY | X- und Y-Achse | allen Themes |
| Steuerkreuz | DPAD | Tasten hoch / runter / links / rechts | allen Themes |
| Schieberegler | SLDR | einen Wert | allen Themes |
| Ver. Schieberegler | VSLDR | einen Wert | allen Themes |
| Drehknopf | DIAL | einen Wert | kostenpflichtigen Themes |
| Taste | BTN | gedrückt / losgelassen | allen Themes |
| Schalter | SWCH | an / aus | allen Themes |
| Schritt-Schalter | STPR | eine Stufennummer | allen Themes |
| Ver. Schritt-Schalter | VSTPR | eine Stufennummer | allen Themes |
| Monitor | MNTR | zeigt Text oder einen Wert | allen Themes |
| Batteriestand | MNTBT | zeigt einen Füllstand | kostenpflichtigen Themes |
| Geschwindigkeitsmesser | MNTSP | zeigt eine Geschwindigkeit | kostenpflichtigen Themes |
| Neigungsmonitor | MNTLT | zeigt Nick- und Rollwinkel | kostenpflichtigen Themes |
| Lenkrad, Pedale, Getriebe, Handbremse, Blinker, Fahrschalter | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | siehe [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls) | Spezialprodukten |

Der Name auf dem Dashboard erhält eine Nummer: Der erste Joystick heißt **JOY1**, der zweite **JOY2**.

## Joystick {#joystick}

Ein Stick, der in die Mitte zurückfedert. Er liefert einen **X**-Wert (links/rechts) und einen **Y**-Wert (hoch/runter); die Mitte ist null.

- **Achsentyp**: **Beide Achsen (X, Y)**, **Nur horizontal (X)** oder **Nur vertikal (Y)**. Ein Joystick mit einer Achse ist leichter zu bedienen, wenn er nur fährt oder nur lenkt.
- Typische Verwendung: Y zum Fahren und X zum Lenken, oder ein Joystick pro Kette eines Panzers.

## Steuerkreuz {#directional-pad}

Vier Tasten: hoch, runter, links und rechts. Jede ist entweder gedrückt oder losgelassen. Bei Schnellverknüpfungen liefert eine Achse des Steuerkreuzes −1, 0 oder +1 (**Hoch / runter** oder **Links / rechts**), praktisch für schrittweise Bewegungen wie bei einem Kranhaken.

## Schieberegler und Ver. Schieberegler {#slider-and-ver-slider}

Ein Griff, der sich auf einer waagerechten oder senkrechten Bahn bewegt.

- **Zurücksetzen auf Null**: Der Griff federt beim Loslassen zurück (wie ein Gashebel), statt dort stehen zu bleiben, wo Sie ihn loslassen (wie die Geschwindigkeitseinstellung eines Zuges).
- **Negative Werte**: Null liegt in der Mitte, sodass der Schieberegler negative und positive Werte liefert (rückwärts und vorwärts).
- **Schrittwert**: Der Schieberegler bewegt sich in Schritten.

## Drehknopf {#rotary-knob}

Ein runder Knopf wie ein Lautstärkeregler, in der Gruppe **Schieberegler** jedes kostenpflichtigen Themes. Drehen Sie ihn mit einem Finger um seine Mitte: Er dreht sich etwa 135° in jede Richtung und bleibt dort stehen, wo Sie ihn loslassen.

- **Rastschritte (0 = stufenlos)** (0–24): Mit Schritten rastet der Knopf von einer Stufe zur nächsten ein.
- **Null in der Mitte (-100..100)**: Der Knopf liefert −100 bis 100 mit null in der Mitte statt 0 bis 100.
- Blöcke: *wenn Drehregler … gedreht / gedrückt / losgelassen / auf Minimum gedreht / auf Maximum gedreht*, *Drehreglerwert …*, *ist Drehregler … gedrückt / auf Minimum / auf Maximum?* Siehe [Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- Bei Schnellverknüpfungen funktioniert der Knopf wie ein [Schieberegler](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Das Theme „Grundlegend“ hat keinen Drehknopf. Da jedes kostenpflichtige Theme einen hat, stellt **Theme ändern** einen Knopf auf das Aussehen eines anderen Themes um.

## Taste {#button}

Gedrückt, solange Sie sie halten, losgelassen, wenn Sie loslassen. Verwenden Sie sie für eine Hupe oder eine kurze Bewegung, oder bei Schnellverknüpfungen mit dem Block **Umschalten**, um etwas ein- und auszuschalten.

## Schalter {#switch}

Bleibt an oder aus: Tippen Sie darauf, um umzuschalten. Verwenden Sie ihn für Lichter, Modi oder eine Windensperre.

## Schritt-Schalter und Ver. Schritt-Schalter {#step-switch-and-ver-step-switch}

Ein Steuerelement mit **−** / **+**, das Stufen zählt, etwa Gänge oder die Geschwindigkeitsstufen eines Zuges.

- **Schrittanzahl**: 1 bis 100 (Standard 10).
- **Negative Werte**: erlaubt Stufen unter null (Rückwärtsstufen).
- **Reset aktivieren**: Ein Tippen auf den Wert setzt ihn auf null zurück.

## Monitor {#monitor}

Zeigt Text oder eine Zahl aus dem Programm an: Geschwindigkeit, Akku, den Namen eines Modus, einen Sensorwert.

- **Textlayout** (eine oder mehrere Zeilen), **Textüberlauf** (Abschneiden, Umbrechen, Laufschrift, Scrollen), **Maximale Zeilen**, Scrolloptionen, **Textausrichtung** und **Textskalierung**.

## Batteriestand, Geschwindigkeitsmesser, Neigungsmonitor {#battery-level-speedometer-tilt-monitor}

Grafische Anzeigen in den kostenpflichtigen Themes. Das Programm legt ihren Wert fest: den Akku eines Hubs, die Geschwindigkeit eines Motors, die Neigung eines Hubs. Der **Neigungsmonitor** hat **Pitching umkehren** und **Rollen umkehren**. Siehe [Anzeigen und Monitore](/docs/Application/Dashboard/Indicators).

## Spezial-Steuerelemente {#special-controls}

Ein Lenkrad, Pedale, ein Schalt- oder Automatikgetriebe, eine Handbremse, ein Blinkerhebel und ein Fahrschalter. Jedes ist ein eigenes Produkt mit vielen Aussehen-Varianten. Siehe [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls).

## Interaktivität {#interactivity}

Jedes interaktive Steuerelement hat die Einstellung **Interaktivität** (standardmäßig an). Ein nicht interaktives Steuerelement reagiert nicht auf Berührungen. Das Programm kann die Interaktivität ein- und ausschalten, etwa um den Gashebel zu sperren, bis eine Startprüfung abgeschlossen ist.
