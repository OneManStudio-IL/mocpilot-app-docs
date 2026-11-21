---
id: DashboardOverview
title: Dashboard-Editor
description: "Das MOCPilot-Dashboard: das Feld, das Raster, die Symbolleiste, der Hintergrund und Rückgängig."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-Editor {#dashboard-editor}

Das **Dashboard** ist der Bildschirm, von dem aus Sie Ihr Modell steuern: Joysticks, Schieberegler, Tasten, Monitore und andere Steuerelemente. Jedes Profil hat ein Dashboard.

Öffnen Sie es mit der Schaltfläche **Dashboard** im Editor (⌘2 / Strg+2 auf einem Computer).

- **Smartphone und Tablet**: Das Dashboard öffnet sich im Vollbild über dem Editor.
- **Computer**: Das Dashboard öffnet sich in einem eigenen Fenster **Dashboard**, sodass Sie es neben dem Programm behalten können.
- **Web-Editor**: ein schwebender Bereich, den Sie verschieben und in der Größe ändern können.

<Screenshot name="dashboard-edit" alt="Dashboard im Bearbeitungsmodus mit dem Punkteraster" width={900} />

## Das Feld und das Raster {#the-field-and-the-grid}

- Das Feld hat immer das Seitenverhältnis **2:1** und passt sich dem Bildschirm an, sodass ein Dashboard auf Smartphone, Tablet und Computer gleich aussieht.
- Im Bearbeitungsmodus wird ein **Punkteraster** aus 40 × 20 Zellen angezeigt. Steuerelemente rasten am Raster ein.
- Steuerelemente können sich nicht überlappen. Passt ein Steuerelement nicht, kehrt es an seine vorherige Position zurück.

## Symbolleiste {#toolbar}

| Schaltfläche | Funktion |
|---|---|
| ← | zurück zum Programmeditor |
| Rückgängig / Wiederholen | Änderungen am Dashboard rückgängig machen und wiederholen |
| **+** (Controller hinzufügen) | öffnet die Controller-Palette; siehe [Steuerelemente hinzufügen und anordnen](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Dashboard-Einstellungen) | Hintergrund- und Rasteroptionen (siehe unten) |
| ▶ / ■ | **Start** / **Stopp**: das Programm starten und stoppen |

Auf einem Computer hat das Dashboard-Fenster außerdem Menüs: **Datei** (Profil schließen, In separatem Fenster öffnen, Dashboard-Einstellungen…), **Bearbeiten** (Rückgängig, Wiederholen, Controller hinzufügen…) und **Ansicht** (Blöcke ⌘1, Dashboard ⌘2).

Während das Programm läuft, sind die Bearbeitungsschaltflächen ausgeblendet.

## Rückgängig und Wiederholen {#undo-and-redo}

Das Dashboard hat einen eigenen Verlauf, getrennt vom Programm. Sie können jedes Verschieben, jede Größenänderung, jede Eigenschaftsänderung, jedes Hinzufügen und jedes Löschen rückgängig machen.

## Dashboard-Einstellungen {#dashboard-settings}

**Hintergrundbild**: Tippen Sie auf **Ändern** und wählen Sie:

- **Vorlage wählen**: ein fertiger Hintergrund, der zu einem Theme gehört. Die Galerie zeigt die Hintergründe der Themes, deren Steuerelemente sich auf diesem Dashboard befinden. Ein integrierter Hintergrund füllt immer den Bildschirm rund um das Feld, daher gelten die folgenden Optionen für ihn nicht.
- **Eigenes hochladen**: ein beliebiges Bild von Ihrem Gerät. Es wird im Profil gespeichert.

**Entfernen** löscht den Hintergrund.

<Screenshot name="dashboard-backgrounds" alt="Dashboard-Einstellungen mit der Galerie integrierter Hintergründe" width={900} />

Für ein eigenes Bild können Sie außerdem festlegen:

- **Bild-Füllmodus**: Strecken, Seitenverhältnis beibehalten und einpassen, Seitenverhältnis beibehalten und zuschneiden, Kacheln, Vertikal kacheln, Horizontal kacheln oder Auffüllen.
- **Bildbereich**: **Arbeitsbereich** (nur das Feld) oder **Ganzer Bildschirm**.
- **Bilddeckkraft**, **Bildunschärfe aktivieren** und **Unschärfewert**: machen den Hintergrund ruhiger, damit die Steuerelemente hervortreten.

**Punkte ausblenden**: blendet die Rasterpunkte aus, während das Profil läuft. Im Bearbeitungsmodus bleiben die Punkte sichtbar, damit Sie die Steuerelemente weiterhin ausrichten können.

## Steuerelemente und das Programm {#controls-and-the-program}

Ein Steuerelement liefert Werte; das Programm entscheidet, was sie bewirken. Ein Steuerelement, das vom Programm verwendet wird, lässt sich erst löschen, wenn das Programm es nicht mehr verwendet. Entfernen Sie bei Schnellverknüpfungen die Zeilen, die es verwenden; entfernen Sie bei Logikblöcken seine Blöcke.

## Weiterlesen {#read-more}

- [Steuerelemente hinzufügen und anordnen](/docs/Application/Dashboard/ArrangingControls): Hinzufügen, Verschieben, Größen, Sperren
- [Steuerelementtypen](/docs/Application/Dashboard/ControlTypes)
- [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls): Lenkrad, Pedale, Schalthebel, Handbremse, Blinker, Fahrschalter
- [Eigenschaften von Steuerelementen](/docs/Application/Dashboard/ControlProperties)
- [Anzeigen und Monitore](/docs/Application/Dashboard/Indicators)
