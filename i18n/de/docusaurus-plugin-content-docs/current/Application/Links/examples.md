---
id: Examples
title: "Beispiele: Auto, Panzer, Kran, Zug"
description: "Fertige Rezepte der Schnellverknüpfungen für ein Auto, einen Panzer, einen Kran und einen Zug."
---

# Beispiele {#examples}

Fertige Rezepte. Legen Sie zuerst die Steuerelemente auf dem Dashboard an und fügen Sie die Hubs unter „Meine Hubs“ hinzu, dann erstellen Sie die Zeilen.

## Auto mit Servolenkung {#car-with-servo-steering}

Dashboard: **JOY1** (Nur vertikal) links, **JOY2** (Nur horizontal) rechts, **BTN1** und ein Monitor **Batteriestand**.

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | JOY1, Y-Achse | Totzone 10 %, Sanft 0,5 s | Motor | Technic Hub, Ports A + B |
| 2 | JOY2, X-Achse | | Servo (Auto, ±90°) | Technic Hub, Port D |
| 3 | BTN1 | Umschalten | Licht | Technic Hub, Port C |
| 4 | Hub: Akku | | | Anzeige: Batteriestand |

Dreht sich ein Antriebsmotor falsch herum, teilen Sie Zeile 1 in zwei Zeilen auf und fügen Sie in einer davon **Umkehren** hinzu.

## Auto mit Lenkrad, Pedalen und Schaltgetriebe {#car-with-a-wheel-pedals-and-a-gearbox}

Dashboard: ein **Lenkrad**, **Pedale**, ein **Schalthebel**, eine **Handbremse** und **Blinker**. Der Eingang [Fahrzeug](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) macht aus Pedalen, Getriebe und Handbremse eine Geschwindigkeit, die wie bei einem echten Auto zu- und abnimmt.

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | Fahrzeug: Geschwindigkeit | | Motor | Technic Hub, Ports A + B |
| 2 | Lenkrad: Lenkwinkel | | Servo (Auto) | Technic Hub, Port D |
| 3 | Fahrzeug: Bremsen | | Licht | Technic Hub, Port C (Bremslichter) |
| 4 | Blinker: Linker Blinker | | Licht | City Hub, Port A |
| 5 | Blinker: Rechter Blinker | | Licht | City Hub, Port B |

## Panzer (zwei Ketten) {#tank-two-tracks}

Dashboard: zwei vertikale Schieberegler **VSLDR1** und **VSLDR2** mit aktiviertem **Zurücksetzen auf Null** und **Negative Werte**.

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | VSLDR1 | Sanft 0,25 s | Motor | Hub, Port A |
| 2 | VSLDR2 | Umkehren, Sanft 0,25 s | Motor | Hub, Port B |

Mit einem Gamepad verwenden Sie Linker Stick Y für Zeile 1 und Rechter Stick Y für Zeile 2.

## Kran {#crane}

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | DPAD1, Links / rechts | Begrenzung 50 % | Motor | Hub, Port A (Drehwerk) |
| 2 | DPAD1, Hoch / runter | | Motor | Hub, Port B (Hakenwinde) |
| 3 | SLDR1 | Totzone 10 % | Motor | Hub, Port C (Ausleger) |
| 4 | SWCH1 | | Licht (Blinken 0,5 s) | Hub, Port D (Rundumleuchte) |

## Zug {#train}

Dashboard: ein **Schritt-Schalter** **STPR1** mit **Negative Werte** (Geschwindigkeitsstufen vorwärts und rückwärts) und **BTN1** für das Licht.

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | STPR1 | Sanft 2 s | Motor | City Hub, Port A |
| 2 | BTN1 | Umschalten | Licht | City Hub, Port B |
| 3 | Hub: Akku | | | Anzeige: Monitor |

Der Block Sanft lässt den Zug wie einen echten anfahren und anhalten. Mit einem **Fahrschalter** auf dem Dashboard verwenden Sie ihn in Zeile 1 statt STPR1: Er liefert die Hebelstellung, bei Rückwärtsfahrt negativ.

## Technic Move-Auto {#technic-move-car}

| # | Eingang | Verarbeitung | Aktion | Ausgang |
|---|---|---|---|---|
| 1 | Fahrzeug: Geschwindigkeit | | Motor | Technic Move (Antrieb) |
| 2 | Lenkrad: Lenkwinkel | | Servo | Technic Move (Lenkung) |
| 3 | BTN1 | Umschalten | Licht | Technic Move (Licht) |
| 4 | BTN2 | | Boost | Technic Move |

Ohne Schalthebel auf dem Dashboard fährt das Auto rückwärts, wenn Sie im Stand das Bremspedal gedrückt halten.

## Im Browser ausprobieren {#try-it-in-the-browser}

Die Demo der Schnellverknüpfungen auf [mocpilot.com](https://mocpilot.com) enthält ein Beispielprofil mit Zeilen wie diesen; siehe [Web-Editor](/docs/Introducing/WebEditor).
