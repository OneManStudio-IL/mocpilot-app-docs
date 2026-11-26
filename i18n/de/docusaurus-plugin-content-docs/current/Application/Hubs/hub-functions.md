---
id: HubFunctions
title: Hub-spezifische Funktionen
description: "Sonderfunktionen von Technic Move, BuWizz, SBrick, Mould King, Robot Inventor und anderen Hubs in beiden Editoren."
---

# Hub-spezifische Funktionen {#hub-specific-functions}

Jeder Hub mit Ports kann Motoren und Lichter steuern. Manche Hubs können mehr. Im Editor **Schnellverknüpfungen** erscheinen diese Funktionen nur dann in der Palette, wenn ein solcher Hub im Profil ist; im Editor **Logikblöcke** sind es hub-spezifische Blöcke.

## Motoren mit Encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funktion | Schnellverknüpfungen | Logikblöcke |
|---|---|---|
| Geschwindigkeitsregelung | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Geschwindigkeit einstellen auf, Motor starten bei … % Geschwindigkeit |
| Lenkservo mit Kalibrierung | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuell / Auto) | Zur relativen Position gehen, Lenkstangen kalibrieren |
| Um einen Winkel drehen | [Um Grad drehen](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Laufen für |
| Absolute Position (Winkelmotoren) | [Zu Position fahren](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Zur Position |
| Verhalten beim Stopp: ausrollen, bremsen, halten | Motor → **Beim Stopp** | Motorverhalten beim Anhalten einstellen |
| Beschleunigungsvorgaben des Hubs | Motor → **Hub-Beschleunigung** | Beschleunigung einstellen auf, Verzögerung einstellen auf |
| Geschwindigkeit, Position, Leistung, Strom als Eingang | [Hub-Eingang](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Geschwindigkeit, Position, Relative Position, Leistung |

## Technic Move Hub {#technic-move-hub}

Der Hub der ferngesteuerten LEGO® Technic-Autos (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Antrieb, Lenkung und Licht werden nach Funktion gesteuert, nicht nach Port.
- **Lenkung** kalibriert ihre Zahnstange selbst.
- **Bremsen**, **Boost** (Leistungsmodus) und **Kraftimpuls** (nur mit der Konfiguration Batmobile™ Tumbler).
- **Hub-Konfigurationen**: Laden Sie ein Fahrzeugprofil mit **Meine Hubs → Konfiguration auswählen** in den Hub. Siehe [Konfigurationen des Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logikblöcke: die Fahrzeugprofil-Blöcke (*Starte Motoren*, *Setze die Lenkstange auf*, *Setze die Motorbremse*, *Leistungsimpuls*, *Lichter einschalten*, *Stromversorgungsmodus einstellen*) oder die normalen Port-Blöcke: Motoren `A`, `B` (Antrieb) und `C` (Lenkung; *Zahnstange kalibrieren* an `C`, dann *zur relativen Position gehen*), Lichter `1`–`6` einzeln, Neigung, Beschleunigung und Ausrichtung. Verwenden Sie nur eine Art pro Hub: Beide steuern dieselben Motoren und Lichter. Siehe [Motoren → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Schnellverknüpfungen: die eigenen Zeilen des Hubs (Antrieb, Lenkung, Licht); ein [Hub-Eingang](/docs/Application/Links/Blocks/InputBlocks#src-hub) kann auch seine Neigung und Beschleunigung lesen.

## BuWizz 2.0 {#buwizz-20}

- **Leistungsmodus**: Langsam, Normal, Schnell, Ludicrous. Schnellverknüpfungen: die Aktion [Leistungsmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logikblöcke: *BuWizz 2 Stromversorgungsmodus einstellen*.
- Der aktuelle Leistungsmodus, die **Ausgangsspannung** und der Motorstrom als Eingänge.
- Einfache Geschwindigkeitsregelung an den Ports 1–4: keine Positionssteuerung.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Portfarbe**: LEDs an den Ports 1–4, aus einer Liste oder als RGB ([Portfarbe](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 LED-Farbe setzen auf*).
- Motorstrom als Eingang, relative Positionen.

## SBrick und SBrick Plus {#sbrick-and-sbrick-plus}

- Motoren und Lichter mit Geschwindigkeitsregelung.
- Keine Positionssteuerung: Servo, Um Grad drehen und Zu Position fahren sind nicht verfügbar.

## Mould King 4.0 und 6.0 {#mould-king-40-and-60}

- Nur Befehle: keine Sensoren, keine Tasten, keine Rückmeldung über die Verbindung.
- **Steuerkanal** A, B oder C: die Aktion [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) in den Schnellverknüpfungen, der Block *MouldKing Steuerkanal zu* in den Logikblöcken oder **Kanal auswählen** unter „Meine Hubs“.
- Bis zu 3 Mould King 4.0 oder 1 Mould King 6.0 pro Profil, und nur ein Mould-King-Typ pro Profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Alles über Verbindung, Firmware und die Blöcke: [MINDSTORMS-Robot-Inventor-Hub](/docs/Application/Hubs/RobotInventorHub).

- **LED-Matrix**: ein Pegelbalken, eine Zahl oder ein Bild in den Schnellverknüpfungen; Text und Pixel in den Logikblöcken.
- **Sensorlichter** des Abstandssensors (die „Augen“ des Sensors).
- **Blockiererkennung** und Motorleistung.
- Alle Blöcke der Robot-Inventor-App: [Bewegung](/docs/Application/BlockBuilder/Blocks/Movement), Hub-Klänge und Musik, Gesten, Gieren, der Kraftsensor, Funk zwischen Hubs.
- Klassisches Bluetooth (nicht auf iPhone und iPad verfügbar) oder ein USB-Kabel unter Windows und auf dem Mac.

## LEGO®-Hubs mit Farb-LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor und die Fernbedienung: Sie können die Farbe der Hub-LED aus einer Liste oder als RGB einstellen ([Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led) in den Schnellverknüpfungen, *LED-Farbe setzen auf* in den Logikblöcken).

## LEGO® Powered Up-Fernbedienung {#lego-powered-up-remote-control}

Ihre Tasten sind Eingänge, sodass Sie ein Modell mit der echten Fernbedienung über MOCPilot steuern können (Schnellverknüpfungen: Eingang **Hub** → Taste; Logikblöcke: Ereignisse der Hub-Tasten).

## Eingebaute Sensoren {#built-in-sensors}

Akkustand und -spannung, Platinentemperatur, Neigung (Nicken, Rollen, Gieren), Beschleunigung und Ausrichtung sind bei Hubs verfügbar, die diese Sensoren haben. Stellen Sie **Hub-Ausrichtung** (Schnellverknüpfungen) oder *Neigungsausrichtung auf* (Logikblöcke) passend zur Einbaulage des Hubs ein.

In den Logikblöcken melden die Hubs Technic Hub, Technic Move Hub, Robot Inventor und SPIKE Prime auch ihre Drehgeschwindigkeit (Gyroskop, *Drehgeschwindigkeit (°/s)*), und der Technic Hub meldet den Strom, den er aufnimmt (*Strom (mA)*). Siehe [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
