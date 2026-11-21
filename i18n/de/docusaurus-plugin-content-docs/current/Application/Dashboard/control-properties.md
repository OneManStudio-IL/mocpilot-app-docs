---
id: ControlProperties
title: Eigenschaften von Steuerelementen
description: "Größe, Farbe, Symbol, Aussehen, Verhalten und Theme eines Steuerelements in seinen Eigenschaften ändern."
---

import Screenshot from '@site/src/components/Screenshot';

# Eigenschaften von Steuerelementen {#control-properties}

Tippen (klicken) Sie im Bearbeitungsmodus auf ein Steuerelement, um seine Eigenschaften zu öffnen.

- **Smartphone und Tablet**: ein Bereich über dem Dashboard; tippen Sie außerhalb davon, um ihn zu schließen.
- **Computer**: ein Seitenbereich; Sie können weiter am Dashboard arbeiten, während er geöffnet ist.

<Screenshot name="controller-properties" alt="Eigenschaftenbereich eines Steuerelements mit den Tabs „Stil“ und „Einstellungen“" width={900} />

Die Kopfzeile zeigt den Namen des Steuerelements (zum Beispiel **JOY1**), die Papierkorb-Schaltfläche, das Menü zum Duplizieren und **OK**.

## Tab „Stil“ {#style-tab}

- **Größe**: S, M oder L. Siehe [Größen](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Akzentfarbe**: die Hauptfarbe des Steuerelements.
- **Symbol**: ein Bild auf dem Steuerelement (Tasten, Schalter, Monitore), ausgewählt aus mehr als 260 Symbolen.
- **Aussehen**: das Aussehen eines [Spezial-Steuerelements](/docs/Application/Dashboard/SpecialControls), zum Beispiel der Stil eines Lenkrads.
- Theme-Optionen, je nach Theme: zum Beispiel **Farbiger Kohlenstoff**, **Bunte Rahmen** und **Rennlinien anzeigen** im Theme „Rennen“, **Anzahl der Anzeigensegmente** im Theme „Baumaschinen“, **Werte anzeigen** im Theme „Aura“.
- **Theme ändern**: das Steuerelement auf ein anderes Theme umstellen, das Sie besitzen und das denselben Steuerelementtyp hat.

## Tab „Einstellungen“ {#settings-tab}

Allgemeine Einstellungen:

- **Controller sperren**: Ein gesperrtes Steuerelement lässt sich weder verschieben noch löschen.
- **Interaktivität**: Ein nicht interaktives Steuerelement registriert keine Berührungen.

Einstellungen der einzelnen Typen:

| Steuerelement | Einstellungen |
|---|---|
| Joystick | **Achsentyp**: Beide Achsen (X, Y), Nur horizontal (X), Nur vertikal (Y) |
| Schieberegler, Ver. Schieberegler | **Zurücksetzen auf Null**, **Negative Werte**, **Schrittwert** |
| Drehknopf | **Rastschritte (0 = stufenlos)** (0–24), **Null in der Mitte (-100..100)** |
| Schritt-Schalter, Ver. Schritt-Schalter | **Schrittanzahl** (1–100), **Negative Werte**, **Reset aktivieren** |
| Monitor | **Textlayout**, **Textüberlauf**, **Maximale Zeilen**, **Scrollrichtung**, **Scrollgeschwindigkeit**, **Scrollleiste anzeigen**, **Interaktives Scrollen**, **Textausrichtung**, **Textskalierung** |
| Neigungsmonitor | **Pitching umkehren**, **Rollen umkehren** |
| Lenkrad | **Lenkradwinkel** (20–120°), **Soundeffekte** |
| Pedale | **Soundeffekte** |
| Schaltgetriebe | **Anzahl der Gänge** (2–6) |
| Automatikgetriebe | **Anzahl der Gänge** (2–8) |
| Blinker | **Blinker-Ausgänge blinken**; im Tab „Stil“ **Symbol: left**, **Symbol: light**, **Symbol: right** |

Zahleneinstellungen haben eine Schaltfläche **Zurücksetzen**, die den Standardwert wiederherstellt.

## Eigenschaften aus dem Programm ändern {#change-properties-from-the-program}

Bei Logikblöcken können Blöcke ein Steuerelement ändern, während das Programm läuft: seine Farbe festlegen, seine Interaktivität ein- oder ausschalten, Werte auf Monitoren anzeigen. Siehe [Blöcke für Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
