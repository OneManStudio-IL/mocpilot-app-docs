---
id: Operations
title: Aktionen und Ausgänge
description: "Aktionen der Schnellverknüpfungen (Motor, Servo, Licht und mehr) und Ausgänge (Hub, Anzeige, Hub-LED, LED-Matrix, Servos kalibrieren)."
---

import Screenshot from '@site/src/components/Screenshot';

# Aktionen und Ausgänge {#operations-and-outputs}

Die Registerkarte **Ausgänge** der Palette enthält Aktionen und Ausgänge.

- Eine **Aktion** legt fest, *was* passieren soll (einen Motor drehen, lenken, ein Licht blinken lassen). Auf sie folgt immer ein Ausgang **Hub**, der festlegt, *wo*: welcher Hub und welche Ports.
- Ein **direkter Ausgang** (Anzeige, Hub-LED, LED-Matrix, Servos kalibrieren) beendet die Zeile allein, ohne Aktion.

Die gängigen Aktionen (Motor, Servo, Motor für Zeit, Licht) sind immer verfügbar. Hub-spezifische Aktionen erscheinen nur, wenn ein Hub des Profils sie unterstützt. Alle Einstellungen mit ihren Werten und Standardwerten: [Aktions- und Ausgangsblöcke](/docs/Application/Links/Blocks/OutputBlocks).

## Motoren und Lichter {#motors-and-lights}

| Aktion | Was sie tut | Typische Verwendung |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | lässt den Motor mit dem Wert des Eingangs laufen; 0 stoppt ihn | Antrieb, Seilwinden |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | dreht einen Motor mit Encoder auf eine Position, die dem Eingang folgt | Lenkung |
| [Motor für Zeit](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | lässt den Motor bei jedem Druck eine festgelegte Zeit laufen | Türen, Kipper |
| [Um Grad drehen](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | dreht den Motor bei jedem Druck um einen festgelegten Winkel | Schrittschaltungen, Drehteller |
| [Zu Position fahren](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | fährt einen Winkelmotor bei „an“ auf eine Position und bei „aus“ auf eine andere | Klappen, Gangwähler |
| [Licht](/docs/Application/Links/Blocks/OutputBlocks#op-light) | schaltet LEGO®-Lichter ein, dauerhaft oder blinkend | Scheinwerfer, Rundumleuchten, Blinker |
| [Portfarbe](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | färbt die Port-LEDs eines BuWizz 3.0 Pro | Statusfarben |
| [Sensorlichter](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | lässt die „Augen“ des Technic-Abstandssensors leuchten (Robot Inventor) | Robotergesichter |

### Lenken mit Servo {#steering-with-servo}

Servo braucht einen Motor mit Encoder und eine Lenkung, die Sie entweder von Hand zentrieren oder die Endanschläge hat.

- **Manuell**: Drehen Sie die Achse in die Mitte und tippen Sie auf **Als Nullpunkt setzen**; feinjustieren Sie mit **◀ 5°** / **5° ▶**. Wählen Sie dann den **Winkel** und, falls die Räder noch zu einer Seite ziehen, die **Mitte**.
- **Auto**: Bei jedem Start dreht der Motor zu beiden Endanschlägen, die Mitte wird zum Nullpunkt und der Stellweg zum Winkel. **Jetzt kalibrieren** führt das sofort aus. Meldungen: „Kalibrierung: Der Motor dreht zu beiden Endanschlägen…“, „Kalibriert: Das Servo dreht ±…°, die Mitte ist null“, „Kalibrierung fehlgeschlagen: Prüfen Sie den Hub, den Motor und ob die Achse Endanschläge hat“.

Beim **Technic Move Hub** lenkt der Hub selbst und kalibriert seine eigene Zahnstange; nur der Kalibriermodus gilt.

<Screenshot name="links-servo-settings" alt="Einstellungen eines Servo-Blocks" width={900} />

## Aktionen für den ganzen Hub {#operations-for-the-whole-hub}

Diese steuern den Hub als Ganzes, daher hat der Hub-Block danach keine Ports.

| Aktion | Hub | Was sie tut |
|---|---|---|
| [Bremsen](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | bremst, solange der Eingang an ist |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | Leistungsmodus Boost, solange an; normal bei aus |
| [Kraftimpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | ein Kraftimpuls pro Druck (nur mit der Konfiguration Batmobile™ Tumbler) |
| [Leistungsmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | wechselt den Leistungsmodus: Langsam, Normal, Schnell, Ludicrous |
| [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | wechselt den Steuerkanal: A, B, C |

## Ausgänge {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): der Hub und seine Ports. Siehe [Hub-Block und Ports](/docs/Application/Links/HubsAndPorts).
- [Anzeige](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): zeigt den Wert auf einem Dashboard-Monitor an (Textmonitor, Batteriestand, Geschwindigkeitsmesser, Neigungsmonitor). Direkt hinter einem Hub-Sensor zeigt ein Textmonitor den echten Wert mit Einheit. Die Anzeige zeigt den Wert unverändert, daher hat die Zeile keine Aktion. Siehe [Anzeigen und Monitore](/docs/Application/Dashboard/Indicators).
- [Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): das Farblicht eines LEGO®-Hubs, eine Farbe, solange der Eingang an ist, und eine andere, solange er aus ist.
- [LED-Matrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): die Lichtmatrix des Robot-Inventor-Hubs: ein Pegelbalken, eine Zahl oder ein Bild.
- [Servos kalibrieren](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibriert jedes Servo im Modus **Auto** neu. Legen Sie es auf eine Dashboard-Taste: *BTN3* → *Servos kalibrieren*.

## Wenn das Programm stoppt {#when-the-program-stops}

Die Motoren stoppen, die LED-Matrix wird gelöscht, und Portfarben und Sensorlichter gehen aus.
