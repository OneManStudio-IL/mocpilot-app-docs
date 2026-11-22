---
id: DashboardOverview
title: Dashboard-Editor
description: "Das MOCPilot-Dashboard: das Feld, das Raster, die obere Leiste, der Hintergrund und Rückgängig."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-Editor {#dashboard-editor}

Das **Dashboard** ist der Bildschirm, von dem aus Sie Ihr Modell steuern: Joysticks, Schieberegler, Tasten, Monitore und andere Steuerelemente. Jedes Profil hat ein Dashboard.

Öffnen Sie es mit der Schaltfläche **Dashboard** in der oberen Leiste des Editors (⌘2 / Strg+2 auf einem Computer). Auf einem Smartphone mit schmalem Bildschirm befindet sie sich unter **Mehr**.

- **Smartphone und Tablet**: Das Dashboard öffnet sich im Vollbild über dem Editor.
- **Computer**: Das Dashboard öffnet sich in einem eigenen Fenster **Dashboard**, sodass Sie es neben dem Programm behalten können.
- **Web-Editor**: ein schwebender Bereich, den Sie verschieben und in der Größe ändern können.

<Screenshot name="dashboard-edit" alt="Dashboard im Bearbeitungsmodus mit dem Punkteraster" width={900} />

## Das Feld und das Raster {#the-field-and-the-grid}

- Das Feld hat immer das Seitenverhältnis **2:1** und passt sich dem Bildschirm an, sodass ein Dashboard auf Smartphone, Tablet und Computer gleich aussieht.
- Im Bearbeitungsmodus wird ein **Punkteraster** aus 40 × 20 Zellen angezeigt. Steuerelemente rasten am Raster ein.
- Steuerelemente können sich nicht überlappen. Passt ein Steuerelement nicht, kehrt es an seine vorherige Position zurück.

## Obere Leiste {#toolbar}

**Smartphone und Tablet**

| Schaltfläche | Funktion |
|---|---|
| ← | zurück zum Programmeditor |
| Rückgängig / Wiederholen | Änderungen am Dashboard rückgängig machen und wiederholen |
| **Auswählen** | mehrere Steuerelemente auswählen und gemeinsam sperren, entsperren, löschen oder bearbeiten; **Fertig** beendet den Modus |
| ⚙ (Dashboard-Einstellungen) | Hintergrund- und Rasteroptionen (siehe unten) |
| **+** (Controller hinzufügen, mit orangem Ring) | öffnet die Controller-Palette; siehe [Steuerelemente hinzufügen und anordnen](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Start** / **Stopp**: das Programm starten und stoppen |

Während das Programm läuft, sind die Bearbeitungsschaltflächen ausgeblendet.

**Computer und Web-Editor**

Die obere Leiste sieht aus wie die des Editors:

- **Links**: **Startseite** (schließt das Profil), die Menüs **Datei**, **Bearbeiten** und **Ansicht**, dann **Rückgängig** und **Wiederholen**.
- **Mitte**: der Profilname und **Blöcke** (bzw. **Verknüpfungen** in einem Profil mit Schnellverknüpfungen, ⌘1 / Strg+1), um zum Programm zurückzukehren. Für das Dashboard selbst gibt es hier keine Schaltfläche: Es ist die Seite, auf der Sie sich befinden.
- **Rechts**: **Auswählen**, **Dashboard-Einstellungen** (⚙) und die orange Schaltfläche **+ Controller** (Controller hinzufügen). In einem schmalen Fenster werden der Profilname und die Schaltfläche **Blöcke** ausgeblendet, und von **+ Controller** bleibt nur das **+**.

Auf einem Computer hat die Leiste des Dashboards kein **Start**: Starten und stoppen Sie das Programm im Editor (⌘R / Strg+R, ⌘. / Strg+.). Während es läuft, sind **Auswählen**, **Dashboard-Einstellungen** und **+ Controller** nicht verfügbar.

Menüs: **Datei** (Profil schließen, In separatem Fenster öffnen), **Bearbeiten** (Rückgängig, Wiederholen) und **Ansicht** (Blöcke ⌘1, Dashboard ⌘2). Im separaten Dashboard-Fenster zeigt die Leiste statt **Startseite** den Fenstertitel, **Datei** enthält **Fenster schließen**, und es gibt weder das Menü **Ansicht** noch die Schaltfläche **Blöcke**.

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
