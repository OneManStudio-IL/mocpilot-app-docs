---
id: BlocksIntroducing
title: Logikblöcke im Überblick
description: "Logikblöcke ist der visuelle Blockprogrammier-Editor von MOCPilot: Ereignisse, Schleifen, Bedingungen, Variablen, Sensoren und Töne."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logikblöcke {#logic-blocks}

**Logikblöcke** ist der Editor für Blockprogrammierung in MOCPilot. Sie erstellen Programme, indem Sie Blöcke zusammenstecken, ganz ähnlich wie in Scratch: Ereignisse, Schleifen, Bedingungen, Variablen, Listen, eigene Blöcke, Töne sowie Blöcke für Motoren, Lichter, Sensoren, Dashboard-Steuerelemente und das Gamepad.

Wählen Sie Logikblöcke, wenn Ihr Modell Logik braucht: Roboter, automatische Abläufe, Reaktionen auf Sensoren, Startprüfungen, Spiele. Wenn Sie nur Steuerelemente mit Motoren verbinden möchten, sind [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing) schneller.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programm in den Logikblöcken" style={{width: '100%', maxWidth: 720}} />

:::warning Kein Scratch
Logikblöcke hat einen eigenen Blocksatz und ein eigenes Verhalten. Sie können MOCPilot-Programme nicht in Scratch importieren und Scratch-Projekte nicht in MOCPilot.
:::

## Der Editor auf einen Blick {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor der Logikblöcke mit Palette und einem Programm" width={900} />

- Die **Palette** listet die Blockkategorien auf: **Ereignisse**, **Steuerung**, **Sensoren**, **Töne**, **Operator**, **Variablen**, **Listen** und **Meine Blöcke**. Weitere Kategorien erscheinen, wenn Ihr Profil sie braucht: **Motoren** und **Licht** (wenn ein Hub sie unterstützt), **Bewegung** (mit einem [Robot-Inventor-Hub](/docs/Application/Hubs/RobotInventorHub)), **Simulator** (wenn das Dashboard Pedale, ein Getriebe oder eine Handbremse hat), **Bildschirm-Controller** und **Gamepad**.
- Im **Programmbereich** ziehen Sie Blöcke hinein und bauen Skripte.
- Die obere Leiste enthält **Rückgängig** und **Wiederholen**, **Dashboard**, **Meine Hubs**, **Gamepad**, die Seitenbereiche **KI-Builder**, [**Rucksack**](/docs/Application/BlockBuilder/Backpack) und **Monitor**, **Mehr** (mit den **Editor-Einstellungen**) und **Start/Stopp**. Auf Smartphone und Tablet befinden sich die Seitenbereiche und das Gamepad unter **Mehr**.

Einzelheiten unter [Arbeiten im Editor](/docs/Application/BlockBuilder/Editor).

## Wie ein Programm abläuft {#how-a-program-runs}

- Ein Skript beginnt mit einem **Ereignis**-Block (einem Hutblock): *wenn das Programm startet*, *wenn der Knopf … gedrückt*, *wenn ich erhalte …* und so weiter.
- Die darunter angehängten Blöcke laufen von oben nach unten.
- Mehrere Skripte laufen **gleichzeitig**. Mit Nachrichten (*übermitteln*) stimmen Sie sie aufeinander ab.
- **Schleifen** (*immer wiederholen*, *wiederholen*, *wiederholen, solange*) halten ein Skript in Gang; **Bedingungen** (*wenn*, *wenn … sonst*, *warten bis*) treffen Entscheidungen.
- **Werteblöcke** (abgerundet) liefern Werte und passen in die Eingabefelder anderer Blöcke; **boolesche** Blöcke (spitz) liefern wahr oder falsch für Bedingungen.
- **Variablen** und **Listen** speichern Werte zwischen Blöcken und Skripten.

## Blockformen {#block-shapes}

### Hutblöcke {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Starten ein Skript, wenn etwas passiert. Blöcke können nur darunter angehängt werden.

---

### Stapelblöcke {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Die wichtigsten Befehlsblöcke: Jeder davon tut etwas.

---

### C-Blöcke {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-förmige Blöcke, die andere Blöcke in sich aufnehmen: Schleifen und Bedingungen.

---

### Werteblöcke {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Liefern einen Wert, etwa eine Zahl oder einen Text.

---

### Boolesche Blöcke {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Liefern nur `true` oder `false`. Sie werden meist in Bedingungen verwendet.

---

### Abschlussblöcke {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Beenden ein Skript: Darunter lässt sich nichts anhängen.

---

### Blockstapel {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Ein Stapel ist eine Gruppe verbundener Blöcke, die als ein Skript von oben nach unten läuft.
Ein Stapel beginnt meist mit einem Ereignisblock, gefolgt von den Blöcken, die der Reihe nach ausgeführt werden.

---


## Hubs, Ports und Steuerelemente {#hubs-ports-and-controls}

- Motor- und Lichtblöcke erhalten einen **Hub** und einen **Port**. Die Kategorien Motoren und Licht erscheinen nur, wenn ein Hub im Profil sie unterstützt, und manche Blöcke gibt es nur für bestimmte Hubs (zum Beispiel die Leistungsmodi des BuWizz oder Funktionen des Technic Move Hub). Die Beschreibung jedes Blocks nennt die Hubs, mit denen er funktioniert.
- Dashboard-Blöcke verweisen über den Namen auf Steuerelemente (**JOY1**, **BTN2**). Solange Blöcke ein Steuerelement verwenden, können Sie es nicht vom Dashboard löschen; entfernen Sie zuerst diese Blöcke.
- Gamepad-Blöcke erscheinen, wenn auf der [Gamepad-Seite](/docs/Application/Dashboard/Gamepad) **Gamepad-Blöcke aktivieren** eingeschaltet ist.

## Blockstufen {#block-levels}

Jedes Profil hat eine **Blockstufe**: **Anfänger** zeigt die einfachsten Blöcke, **Fortgeschritten** fügt gängige Logik- und Geräteblöcke hinzu, und **Guru** zeigt den vollständigen Satz. Sie wählen sie beim Erstellen des Profils oder später in den Editor-Einstellungen. Diese Referenz zeigt die Stufe jedes Blocks neben seinem Namen.

## Empfohlene Vorgehensweise {#recommended-workflow}

1. Beginnen Sie mit einem Ereignisblock und einem kurzen Skript; drücken Sie **Start** und prüfen Sie, ob es funktioniert.
2. Prüfen Sie Motorrichtungen und Wertebereiche frühzeitig (ein Monitor hilft dabei).
3. Teilen Sie das Programm in kleine Skripte auf, die über Nachrichten miteinander sprechen; verschieben Sie wiederholte Logik in [Meine Blöcke](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Sorgen Sie für Sicherheit: Grenzen, Stopps, eine Startprüfung und einen Plan für den Fall, dass ein Hub die Verbindung verliert.

## Häufige Fehler {#common-pitfalls}

- Ein Skript ohne Ereignisblock startet nie.
- Der falsche Hub oder Port ist ausgewählt, deshalb passiert sichtbar nichts.
- Wer Text, Zahlen und boolesche Werte mischt, erhält unerwartete Ergebnisse.
- Sehr häufige Ereignisse ohne Filterung (zum Beispiel ein Sensorereignis bei jeder winzigen Änderung) können das Programm überlasten; verwenden Sie Schwellenwerte oder kurze Wartezeiten.

## Blockreferenz {#block-reference}

- [Ereignisse](/docs/Application/BlockBuilder/Blocks/Events) · [Steuerung](/docs/Application/BlockBuilder/Blocks/Control) · [Operator](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variablen](/docs/Application/BlockBuilder/Blocks/Variables) · [Listen](/docs/Application/BlockBuilder/Blocks/Lists) · [Meine Blöcke](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Bewegung](/docs/Application/BlockBuilder/Blocks/Movement) · [Motoren](/docs/Application/BlockBuilder/Blocks/Motors) · [Licht](/docs/Application/BlockBuilder/Blocks/Light) · [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors) · [Töne](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

Halten Sie in der App einen Block gedrückt (oder klicken Sie ihn mit der rechten Maustaste an) und wählen Sie **Über den Block**, um seine Beschreibung hier zu öffnen.

Fertige Programme: [Beispiele](/docs/Application/BlockBuilder/Examples).
