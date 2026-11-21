---
id: ProcessingBlocks
title: Verarbeitungsblöcke
description: "Referenz aller Verarbeitungsblöcke der Schnellverknüpfungen: Umkehren, Begrenzung, Totzone, Schwelle, Sanft und Umschalten."
---

# Verarbeitungsblöcke {#processing-blocks}

Verarbeitungsblöcke sitzen zwischen dem Eingang und der Aktion (oder der Anzeige) und verändern das Signal unterwegs. Eine Zeile kann beliebig viele davon haben, in beliebiger Reihenfolge. Ein Block, der das ankommende Signal nicht annehmen kann, rastet nicht ein; in einer Datei wird er als „‚…‘ funktioniert nicht mit diesem Controller“ gemeldet. Zur Verwendung: [Verarbeitung](/docs/Application/Links/Processing).

## Umkehren {#mod-invert}

Kehrt das Signal um.

- Keine Einstellungen.
- Nimmt: Wert oder an/aus. Liefert: dieselbe Art.
- Wert: wechselt das Vorzeichen (aus 0,7 wird −0,7). An/aus: An wird zu aus und aus wird zu an.

## Begrenzung {#mod-limit}

Skaliert den Wert herunter, sodass voller Ausschlag nicht mehr als das Maximum ergibt.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 oder 90 % (Standard 50 %).
- Nimmt: Wert oder an/aus. Liefert: Wert (eine begrenzte Taste liefert 0 oder das Maximum).

## Totzone {#mod-deadzone}

Behandelt kleine Werte um null als null; der Rest wird wieder auf den vollen Bereich gestreckt, sodass voller Ausschlag weiterhin 1 ergibt.

- **Zone**: 5, 10, 15, 20 oder 30 % (Standard 10 %).
- Nimmt: Wert. Liefert: Wert.

## Schwelle {#mod-threshold}

Macht aus einem Wert an/aus.

- **An, wenn der Wert ist**: **Über** (Standard) oder **Unter**.
- **Pegel (vom Vollausschlag)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 oder 90 % (Standard 20 %).
- Nimmt: Wert. Liefert: an/aus.
- Eine kleine Hysterese (2 % des Vollausschlags) verhindert, dass der Ausgang flackert, wenn der Wert um den Pegel pendelt.

## Sanft {#mod-smooth}

Nähert sich dem ankommenden Wert allmählich, statt zu springen.

- **Beschleunigung (auf volle Geschw.)**: **Sofort**, 0,25, 0,5, 1, 2 oder 3 s (Standard 0,5 s): die Zeit von 0 bis zum vollen Ausschlag.
- **Verzögerung (bis zum Stopp)**: dieselbe Auswahl (Standard 0,5 s): die Zeit vom vollen Ausschlag zurück auf 0.
- Nimmt: Wert oder an/aus. Liefert: Wert (eine geglättete Taste fährt sanft hoch und runter).

## Umschalten {#mod-toggle}

Macht aus einem Taster einen Schalter: Jeder Druck schaltet den Ausgang zwischen an und aus um. Der Ausgang startet auf aus.

- Keine Einstellungen.
- Nimmt: an/aus. Liefert: an/aus.
