---
id: Editor
title: Arbeiten im Editor
description: "Obere Leiste, Palette, Blöcke ziehen, Zoom, Kontextmenüs, Rückgängig, Monitor, Rucksack, Editor-Einstellungen und der KI-Builder in den Logikblöcken."
---

import Screenshot from '@site/src/components/Screenshot';

# Arbeiten im Editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor der Logikblöcke" width={900} />

## Obere Leiste {#top-bar}

- **Computer und Web-Editor**: links **Startseite** und die Menüs, daneben **Rückgängig** und **Wiederholen**. In der Mitte: der Profilname sowie **Dashboard**, **Hubs** und **Gamepad**. Rechts: **KI-Builder**, [**Rucksack**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Mehr** (⋯), **Fernsteuerung** und die orange Schaltfläche **Start**. In einem schmalen Fenster wandern die Schaltflächen, die nicht mehr passen, unter **Mehr**; dort finden Sie immer auch **Editor-Einstellungen…**.
- **Smartphone und Tablet**: links **Startseite**; rechts **Rückgängig**, **Wiederholen**, **Dashboard**, **Meine Hubs**, **Fernsteuerung**, **Mehr** und **Start / Stopp**. Unter **Mehr** finden Sie **KI-Builder**, **Rucksack**, **Monitor**, **Gamepad** und **Editor-Einstellungen**.

Wie sich die Leiste in einem schmalen Fenster zusammenfaltet, lesen Sie unter [Smartphone, Tablet und Desktop](/docs/Introducing/Layouts#editor-top-bar).

## Palette und Programmbereich {#palette-and-program-area}

- Blenden Sie die Palette mit **Ansicht → Blockpalette** (⌘P / Strg+P) ein oder aus.
- Wählen Sie eine Kategorie, ziehen Sie einen Block in den Programmbereich und legen Sie ihn unter einem anderen Block ab, um ihn anzuhängen. Eine Vorschau zeigt, wo er einrastet.
- Ziehen Sie einen ganzen Stapel an seinem obersten Block; ziehen Sie einen Block aus der Mitte, um ihn mit allem darunter zu nehmen.
- Um Blöcke zu löschen, ziehen Sie sie zurück auf die Palette.
- Variablen, Listen, Nachrichten und Meine Blöcke erstellen Sie mit den Schaltflächen in ihren Kategorien (**Eine Variable erstellen**, **Eine Liste erstellen**, **Nachricht hinzufügen**, **Block erstellen**) oder über **Bearbeiten → Neue Variable… / Neue Liste… / Neue Nachricht… / Neuer Block…**. Auch Töne und Fahrzeuge haben eigene Schaltflächen: **Ton hinzufügen** in [Töne](/docs/Application/BlockBuilder/Blocks/Sounds) und **Fahrzeug erstellen** in [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoomen und Scrollen {#zoom-and-scroll}

- Ziehen Sie zwei Finger auseinander oder zusammen (auf einem Touchscreen) oder verwenden Sie **Ansicht → Vergrößern / Verkleinern / Originalgröße** (⌘+ / ⌘− / ⌘0).
- Ziehen Sie an einer leeren Stelle, um sich zu bewegen.
- Das Kontextmenü einer leeren Stelle enthält **Vergrößern**, **Verkleinern**, **Zoom zurücksetzen** und **Lösche N Blöcke**.

## Blockmenü {#block-menu}

Halten Sie einen Block gedrückt (auf einem Touchscreen) oder klicken Sie ihn mit der rechten Maustaste an:

- **Bearbeiten**: seine Werte ändern;
- **Duplizieren**;
- **Block löschen** / **Lösche N Blöcke**;
- **Zum Rucksack hinzufügen**: den Block mit allem, was daran hängt, im [Rucksack](/docs/Application/BlockBuilder/Backpack) aufbewahren;
- **Über den Block**: öffnet die Beschreibung des Blocks in dieser Dokumentation;
- **Block als SVG exportieren** / **Alle Blöcke als SVG exportieren**: ein Bild für eine Anleitung oder einen Forenbeitrag speichern.

<Screenshot name="blocks-block-menu" alt="Kontextmenü eines Blocks in den Logikblöcken" width={900} />

Ein Block, der mit einem Dashboard-Steuerelement verknüpft ist, lässt sich erst löschen, nachdem Sie ihn von diesem Steuerelement gelöst haben.

## Rückgängig und Wiederholen {#undo-and-redo}

Verwenden Sie **Bearbeiten → Rückgängig / Wiederholen** (⌘Z / ⇧⌘Z, Strg+Z / Strg+Umschalt+Z) oder die Schaltflächen **Rückgängig** und **Wiederholen** in der oberen Leiste (auf einem Computer neben den Menüs).

- Ein Ziehvorgang ist ein Schritt; schnelle Änderungen desselben Werts werden zu einem Schritt zusammengefasst.
- Rückgängig funktioniert auch, während das Programm läuft.
- Auch das Erstellen oder Löschen von Variablen, Listen, Nachrichten oder Meine Blöcke ist ein Schritt; macht man ihn rückgängig, stoppt ein laufendes Programm.
- In Variablen und Listen gespeicherte Werte werden nicht zurückgesetzt.
- Das Dashboard hat einen eigenen Rückgängig-Verlauf.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Strg+Umschalt+M, **Ansicht → Monitor**) zeigt die aktuellen Werte von Variablen und Listen, während das Programm läuft. Seine Schaltfläche befindet sich auf einem Computer in der oberen Leiste, auf Smartphone und Tablet unter **Mehr**. Auf einem Computer können Sie ihn in einem eigenen Fenster öffnen. Bei der Fehlersuche ist er eine große Hilfe.

<Screenshot name="blocks-monitor" alt="Monitor mit Variablen und einer Liste während der Programmausführung" width={900} />

## Rucksack {#backpack}

Der **Rucksack** (⇧⌘B / Strg+Umschalt+B, **Ansicht → Rucksack**) bewahrt Blockstapel auf, die Sie in jedem Profil wiederverwenden können: Wählen Sie im Menü eines Blocks **Zum Rucksack hinzufügen** und tippen Sie dann auf das Element oder ziehen Sie es, um es in ein beliebiges Programm einzufügen. Seine Schaltfläche befindet sich in der oberen Leiste neben **Monitor** oder unter **Mehr**. Siehe [Rucksack](/docs/Application/BlockBuilder/Backpack).

## Editor-Einstellungen {#editor-settings}

Sie öffnen sie über **Mehr → Editor-Einstellungen** in der oberen Leiste (auf einem Computer auch über **Programm → Editor-Einstellungen…**).

- **Block per Klick starten**: Ein Klick auf einen Block führt ihn aus, sodass Sie ihn einzeln testen können; ist das Programm gestoppt, wird es dabei auch gestartet.
- **Programm mittig öffnen**: Wenn Sie ein Profil öffnen, wird das Programm in 100 % in der Mitte der Arbeitsfläche angezeigt (oder ab seiner oberen linken Ecke, wenn es größer ist), egal wo Sie es beim Bearbeiten zuletzt hatten. Das gilt für alle Profile auf diesem Gerät.
- **Hub-Ports beim Programmstopp stoppen**: stoppt alle Motoren und schaltet alle Lichter aus, wenn Sie **Stopp** drücken. Lassen Sie die Option eingeschaltet, es sei denn, die Motoren sollen ihren Zustand beibehalten.
- **Blockstufe auswählen**: Anfänger, Fortgeschritten oder Guru.

<Screenshot name="blocks-editor-settings" alt="Bereich „Editor-Einstellungen“ in den Logikblöcken" width={900} />

## Blockstufen {#block-levels}

| Stufe | Zeigt |
|---|---|
| **Anfänger** | die einfachsten Blöcke; eine übersichtliche Palette für Kinder und erste Schritte |
| **Fortgeschritten** | die gängigen Logik- und Geräteblöcke |
| **Guru** | den vollständigen Blocksatz |

Die Stufe wird im Profil gespeichert. Blöcke, die bereits im Programm sind, funktionieren weiter, wenn Sie die Stufe senken.

## KI-Builder {#ai-builder}

Mit [MocPilot Pro](/docs/Application/Account/Pro) richtet der **KI-Builder** (die Schaltfläche mit den Funken in der oberen Leiste, auf Smartphone und Tablet **Mehr → KI-Builder**, ⇧⌘I / Strg+Umschalt+I) Hubs, Dashboard und Programm anhand einer Beschreibung ein, die Sie eintippen oder sprechen, und ändert das Profil anschließend nach Ihren Wünschen. Er funktioniert in Profilen mit Logikblöcken und mit Schnellverknüpfungen. Siehe [KI-Builder](/docs/Application/Profiles/AiBuilder).

### So erhalten Sie ein gutes Ergebnis {#ai-builder-tips}

Nennen Sie den Hub, sagen Sie, was an jedem Port angeschlossen ist und was es tun soll, und wie Sie es steuern möchten. Siehe [Eine gute Anfrage schreiben](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Desktop-Menüs {#desktop-menus}

| Menü | Einträge |
|---|---|
| Datei | Profil schließen (⌘W) |
| Bearbeiten | Rückgängig, Wiederholen, Neue Variable…, Neue Liste…, Neue Nachricht…, Neuer Block… |
| Ansicht | Blockpalette (⌘P), [Rucksack](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Vergrößern, Verkleinern, Originalgröße |
| Programm | Start (⌘R), Stopp (⌘.), Editor-Einstellungen… |

Unter Windows verwenden Sie Strg statt ⌘ und Umschalt statt ⇧.
