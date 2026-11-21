---
id: PhoneSensors
title: Smartphone-Sensoren
description: "Neigung und Beschleunigung Ihres Smartphones oder Tablets zum Steuern eines Modells nutzen."
---

# Smartphone-Sensoren {#phone-sensors}

Ihr Smartphone oder Tablet hat Bewegungssensoren. MOCPilot kann sie als Eingang nutzen: Neigen Sie das Smartphone zum Lenken, schütteln Sie es, um etwas auszulösen, oder zeigen Sie den Akku des Smartphones auf dem Dashboard an.

Smartphone-Sensoren stehen bei **Logikblöcken** zur Verfügung (Kategorie **Sensoren**). Schnellverknüpfungen verwenden Dashboard-Steuerelemente, das Gamepad und Hub-Sensoren als Eingänge.

## Sensorblöcke {#sensor-blocks}

| Block | Liefert |
|---|---|
| `Geräteneigung` (Nicken, Rollen) | die Neigung des Geräts in Grad |
| `Gerätebeschleunigung` (x, y, z) | die Beschleunigung des Geräts, m/s² |
| `Gerätebeschleunigungsmesser` (x, y, z) | Rohwerte des Beschleunigungsmessers, m/s² |
| `Geräte-Akku in %` | den Akkustand des Geräts |

Details: [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors).

## Beispiel: lenken durch Neigen des Smartphones {#example-steer-by-tilting-the-phone}

```text
wenn das Programm startet
immer wiederholen
    Zu Position fahren  (Hub 1, Port B)  ←  Geräteneigung (Rollen) × 2
```

Verwenden Sie für die Lenkung einen Motor mit absoluter Position (einen Winkelmotor).

Halten Sie das Smartphone im Querformat wie ein Lenkrad. Begrenzen Sie den Wert mit den Operatoren *liegt zwischen* oder *min/max*, damit die Lenkung nicht gegen ihre Endanschläge fährt.

## Tipps {#tips}

- Sperren Sie die Bildschirmdrehung des Geräts, sonst dreht das System den Bildschirm möglicherweise, während Sie neigen.
- Computer haben keine Bewegungssensoren; die Blöcke liefern dort null.
- Um die Neigung auf dem Dashboard anzuzeigen, senden Sie die Winkel an einen **Neigungsmonitor** (kostenpflichtige Themes). Siehe [Anzeigen und Monitore](/docs/Application/Dashboard/Indicators).
- Auch Hubs haben eigene Neigungssensoren: siehe die Hub-Sensorblöcke und den Eingang **Hub** bei Schnellverknüpfungen.
