---
id: Indicators
title: Anzeigen und Monitore
description: "Akku, Geschwindigkeit, Neigung, Sensorwerte und Text auf dem Dashboard anzeigen."
---

# Anzeigen und Monitore {#indicators-and-monitors}

Monitore zeigen während der Fahrt Informationen auf dem Dashboard an: Akkustand, Geschwindigkeit, Neigung, den Abstand zu einem Hindernis, den aktuellen Gang oder Modus.

| Monitor | Zeigt | Theme |
|---|---|---|
| **Monitor** | Text oder eine Zahl | alle Themes |
| **Batteriestand** | eine Füllstandsanzeige | kostenpflichtige Themes |
| **Geschwindigkeitsmesser** | eine Geschwindigkeitsanzeige | kostenpflichtige Themes |
| **Neigungsmonitor** | Nick- und Rollwinkel eines Modells | kostenpflichtige Themes |

Monitore zeigen nur Informationen an; steuern können Sie damit nicht. Das Programm entscheidet, was sie anzeigen.

## Bei Schnellverknüpfungen {#in-quick-links}

Verwenden Sie den Ausgang **Anzeige**. Die Zeile endet mit der Anzeige statt mit einem Hub:

- *Hub* (Akku) → *Anzeige* (Batteriestand): der Hub-Akku auf einer Anzeige.
- *Hub* (Motorgeschwindigkeit, Port A) → *Anzeige* (Geschwindigkeitsmesser).
- *Hub* (Neigung Nicken) → *Anzeige* (Neigungsmonitor, Neigung X) und eine zweite Zeile für Neigung Rollen → Neigung Y.
- *Hub* (Akkuspannung) → *Anzeige* (Monitor): zeigt den Wert mit seiner Einheit an, etwa „7.85 V“.

Die Anzeige zeigt den Wert so, wie er ist, daher hat die Zeile keine Aktion. Siehe [Anzeige](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## Bei Logikblöcken {#in-logic-blocks}

Verwenden Sie die Blöcke für Bildschirm-Controller:

- *zeige … auf Monitor …* für den Monitor;
- *setze Monitor … auf …* für Batteriestand und Geschwindigkeitsmesser;
- *setze Nick-/Roll-Monitor … auf …* für den Neigungsmonitor.

Sie können alles anzeigen, was sich berechnen lässt: einen Sensorwert, eine Variable, Text wie „Gang 2“. Siehe [Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tipps {#tips}

- Platzieren Sie den Akkumonitor in einer Ecke, wo Ihre Finger ihn nicht verdecken.
- Für längere Meldungen verwenden Sie einen mehrzeiligen Monitor mit dem Textüberlauf **Laufschrift** oder **Scrollen**.
- Das Programm kann die Farbe der meisten Steuerelemente ändern, zum Beispiel eine Taste rot färben, wenn der Akku schwach ist.
