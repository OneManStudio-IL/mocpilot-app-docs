---
id: Processing
title: Verarbeitung
description: "Verarbeitungsblöcke der Schnellverknüpfungen: Umkehren, Begrenzung, Totzone, Schwelle, Sanft und Umschalten."
---

# Verarbeitung {#processing}

Verarbeitungsblöcke sitzen zwischen Eingang und Aktion und verändern den Wert unterwegs. Eine Zeile kann keinen, einen oder mehrere davon haben, in beliebiger Reihenfolge. Einstellungen und zulässige Werte: [Verarbeitungsblöcke](/docs/Application/Links/Blocks/ProcessingBlocks).

| Block | Was er tut |
|---|---|
| [Umkehren](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | kehrt die Richtung um oder tauscht an und aus |
| [Begrenzung](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | deckelt den Wert |
| [Totzone](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignoriert kleine Bewegungen um null |
| [Schwelle](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | macht aus einem Wert an/aus |
| [Sanft](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | beschleunigt und bremst allmählich |
| [Umschalten](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | einmal drücken für an, nochmal für aus |

## Umkehren {#invert}

Dreht sich der Motor falsch herum? Fügen Sie **Umkehren** hinzu, statt das Modell umzubauen. Für zwei Motoren, die sich gegenläufig drehen müssen (linke und rechte Kette, zwei Seiten eines Getriebes), erstellen Sie zwei Zeilen mit demselben Eingang und setzen Umkehren in eine davon.

## Begrenzung {#limit}

Macht das Modell langsamer und leichter zu steuern: Mit **Maximum** 50 % ergibt der voll ausgelenkte Stick halbe Geschwindigkeit. Gut für Kinder, Fahrten in der Wohnung und empfindliche Mechanismen.

## Totzone {#dead-zone}

Ein Joystick steht selten genau auf null, deshalb kann ein Motor brummen oder langsam kriechen. **Totzone** behandelt kleine Werte als null. 10 % sind ein guter Anfang.

## Schwelle {#threshold}

Macht aus einem Wert an/aus: „an, wenn der Wert **Über** 20 % ist“. Mit einem Sensor ist *Abstandssensor* → *Schwelle* (Unter, 20 %) an, wenn etwas nahe ist. Die Schwelle hat eine kleine Hysterese, damit sie an der Grenze nicht flackert.

## Sanft {#smooth}

Fährt allmählich an und hält allmählich an, wie ein echtes Fahrzeug. Beschleunigung und Verzögerung werden getrennt eingestellt: Ein schwerer Lkw braucht vielleicht 2 s zum Beschleunigen und 0,5 s zum Anhalten. Bei einem Licht blendet Sanft es weich ein und aus.

## Umschalten {#toggle}

Macht aus einer Taste einen Schalter: einmal drücken für an, nochmal drücken für aus. *Taste* → *Umschalten* → *Licht*.

## Tipps {#tips}

- Die Reihenfolge zählt: *Totzone → Begrenzung → Sanft* ist eine gute Kette zum Fahren.
- Ein Block, der nicht zum Signal passt, rastet nicht ein: Umschalten braucht einen An/Aus-Eingang; Totzone und Schwelle brauchen einen Wert.
- Beobachten Sie die Live-Werte, während das Programm läuft, um zu sehen, was jeder Block bewirkt.
