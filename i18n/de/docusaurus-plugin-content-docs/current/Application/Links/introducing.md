---
id: LinksIntroducing
title: Schnellverknüpfungen im Überblick
description: "Schnellverknüpfungen verbinden Dashboard-Steuerelemente Zeile für Zeile mit Motoren und Lichtern am Hub, ganz ohne Code."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Schnellverknüpfungen {#quick-links}

**Schnellverknüpfungen** ist der Programmeditor von MOCPilot, der ohne Code auskommt. Sie verbinden Dashboard-Steuerelemente, das Gamepad oder Hub-Sensoren mit Motoren, Lichtern und Anzeigen, **eine Zeile nach der anderen**. Wenn Sie die klassische App Controlz kennen, werden Sie sich sofort zurechtfinden.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Zeilen der Schnellverknüpfungen" style={{width: '100%', maxWidth: 720}} />

## Eine Zeile liest sich wie ein Satz {#a-row-reads-like-a-sentence}

Jede Zeile verläuft von links nach rechts:

**Eingang → Verarbeitung (optional) → Aktion → Ausgang**

> *Joystick 1, Y-Achse* → *Sanft* → *Motor* → *Technic Hub, Port A*
>
> „Wenn ich den Joystick nach oben und unten bewege, dreht sich der Motor an Port A und läuft dabei sanft an und aus.“

| Teil | Was es ist | Beispiele |
|---|---|---|
| **Eingang** | woher der Wert kommt | ein Dashboard-Steuerelement, das simulierte Fahrzeug, das Gamepad, eine Hub-Taste oder ein Sensor |
| **Verarbeitung** | verändert den Wert unterwegs (kein, ein oder mehrere Blöcke) | Umkehren, Begrenzung, Totzone, Schwelle, Sanft, Umschalten |
| **Aktion** | was der Hub tun soll | Motor, Servo, Motor für Zeit, Licht, Um Grad drehen, Zu Position fahren… |
| **Ausgang** | wo es passiert | ein **Hub** mit seinen Ports oder ein direkter Ausgang: Anzeige, Hub-LED, LED-Matrix, Servos kalibrieren |

Direkte Ausgänge (Anzeige, Hub-LED, LED-Matrix, Servos kalibrieren) brauchen keine Aktion: *Hub-Akku → Anzeige*.

## Der Editor {#the-editor}

<Screenshot name="links-editor" alt="Editor der Schnellverknüpfungen mit Zeilen und Palette" width={900} />

- Die **Zeilen** füllen den Bildschirm und lassen sich vertikal scrollen. Neue Zeilen beginnen in der letzten, leeren Zeile („Neue Zeile: Eingang“).
- Die **Palette** unten hat drei Registerkarten: **Eingänge**, **Verarbeitung** und **Ausgänge**. Sie wird aus Ihrem Profil erstellt: Jedes Dashboard-Steuerelement und jeder Hub unter „Meine Hubs“ erscheinen automatisch, das Gamepad erscheint, wenn Gamepad-Blöcke aktiviert sind, und eine Aktion erscheint nur, wenn ein Hub des Profils sie ausführen kann.
- Die Schaltfläche **Probleme** in der oberen Leiste zeigt ein grünes Häkchen, wenn jede Zeile bereit ist, oder ein rotes „!“ mit der Anzahl der Probleme.

## Eine Zeile erstellen {#build-a-row}

1. Ziehen Sie einen Eingang aus **Eingänge** in die leere Zeile. Eine neue Zeile entsteht.
2. Ziehen Sie bei Bedarf Verarbeitungsblöcke aus **Verarbeitung** hinter den Eingang.
3. Ziehen Sie eine Aktion (zum Beispiel **Motor**) aus **Ausgänge**.
4. Ziehen Sie den Ausgang **Hub** hinter die Aktion und tippen Sie auf die Ports, die verwendet werden sollen.
5. Tippen Sie auf einen beliebigen Block, um seine Einstellungen zu ändern: Sie wählen aus Chips, ohne zu tippen.

Die Blöcke passen wie Puzzleteile zusammen. Die Form jeder Verbindungsstelle zeigt die Art des Signals, sodass Blöcke, die nicht zusammenarbeiten können, nicht einrasten:

- ein **Wert** von −1 bis 1 (Joystick-Achsen, Schieberegler, Pedale, Sensoren);
- **an/aus** (Tasten, Schalter, Schwellen);
- die Verbindung **Aktion → Hub**, sodass ein Hub nur auf eine Aktion folgen kann.

Um einen Block zu entfernen, ziehen Sie ihn zurück auf die Palette („Zum Entfernen hier ablegen“) oder tippen Sie ihn an und wählen Sie **Block entfernen**.

## Zeilen {#rows}

Tippen Sie auf die Zeilennummer, um das Zeilenmenü zu öffnen:

- **Ausschalten** / **Einschalten**: Eine ausgeschaltete Zeile bleibt im Programm, läuft aber nicht. Praktisch für Experimente.
- **Zeile entfernen**.

Sie können beliebig viele Zeilen hinzufügen.

## Starten {#run}

Drücken Sie **Start**. Während das Programm läuft, zeigt jede Verbindungsstelle den **Live-Wert**, der durch sie fließt, sodass Sie genau sehen, wo ein Signal stecken bleibt. Während das Programm läuft, können Sie nichts bearbeiten; drücken Sie **Stopp**, um wieder zu bearbeiten. Siehe [Ausführen und Probleme beheben](/docs/Application/Links/Problems).

## Rückgängig {#undo}

**Rückgängig** und **Wiederholen** (⌘Z / ⇧⌘Z, Strg+Z / Strg+Umschalt+Z oder die schwebenden Schaltflächen) gehen bis zu 100 Schritte zurück. Während das Programm läuft, sind sie nicht verfügbar.

## Mehr dazu {#read-more}

- [Eingänge](/docs/Application/Links/Inputs): Steuerelemente, das Fahrzeug, das Gamepad, Hub-Tasten und Sensoren
- [Verarbeitung](/docs/Application/Links/Processing): Umkehren, Begrenzung, Totzone, Schwelle, Sanft, Umschalten
- [Aktionen und Ausgänge](/docs/Application/Links/Operations)
- [Hub-Block und Ports](/docs/Application/Links/HubsAndPorts)
- [Ausführen und Probleme beheben](/docs/Application/Links/Problems)
- [Beispiele: Auto, Panzer, Kran, Zug](/docs/Application/Links/Examples)
- Blockreferenz: [Eingänge](/docs/Application/Links/Blocks/InputBlocks), [Verarbeitung](/docs/Application/Links/Blocks/ProcessingBlocks), [Aktionen und Ausgänge](/docs/Application/Links/Blocks/OutputBlocks)

## Schnellverknüpfungen oder Logikblöcke? {#quick-links-or-logic-blocks}

Schnellverknüpfungen sind ideal, wenn jedes Steuerelement einfach etwas bewegt. Wenn Sie Logik brauchen (Abläufe, Bedingungen, Variablen oder eine mehrstufige Reaktion auf einen Sensor), verwenden Sie [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Den Programmtyp wählen Sie beim Erstellen des Profils; siehe den [Vergleich](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
