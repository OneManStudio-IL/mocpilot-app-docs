---
id: ArrangingControls
title: Steuerelemente hinzufügen und anordnen
description: "Steuerelemente aus der Palette hinzufügen, verschieben und in der Größe ändern, duplizieren, sperren und löschen."
---

import Screenshot from '@site/src/components/Screenshot';

# Steuerelemente hinzufügen und anordnen {#add-and-arrange-controls}

## Ein Steuerelement hinzufügen {#add-a-control}

1. Tippen Sie auf dem Dashboard auf **+** (**Controller hinzufügen**); auf einem Computer klicken Sie rechts in der oberen Leiste auf **+ Controller**. Auf einem Computer öffnet sich die Palette in einem eigenen Fenster, mit **Controller hinzufügen** in der Mitte seiner oberen Leiste.
2. Wählen Sie in der Liste einen Steuerelementtyp. Die Typen sind gruppiert: **Joysticks**, **Schieberegler**, **Tasten und Schalter**, **Monitore**, dann **Fahrzeug & Spezial** für die [Spezial-Steuerelemente](/docs/Application/Dashboard/SpecialControls) und **Meine Designs** für Ihre gespeicherten Designs. Um ein Steuerelement schnell zu finden, tippen Sie in **Steuerungen suchen**.
3. Der Streifen mit den Varianten zeigt den gewählten Typ in jedem [Theme](/docs/Application/Themes/ThemesOverview) (bei einem Spezial-Steuerelement alle seine Aussehen-Varianten). Tippen Sie auf eine Variante, um sie in der großen Vorschau zu sehen; dort können Sie sie gleich ausprobieren.
4. Richten Sie das Steuerelement unter **Konfigurieren** ein: die Tabs **Stil** und **Einstellungen** sowie die Größe.
5. Tippen Sie auf **Zum Dashboard hinzufügen** (auf einem Computer die orange Schaltfläche rechts in der oberen Leiste der Palette). Auf einem Computer können Sie mehrere Steuerelemente nacheinander hinzufügen.

<Screenshot name="controller-palette" alt="Die Palette „Controller hinzufügen“" width={900} />

Das Steuerelement wird im ersten freien Bereich platziert und erhält das Abzeichen **NEU**. Ist kein Platz frei, weist MOCPilot Sie darauf hin: Schaffen Sie Platz oder wählen Sie eine kleinere Größe.

Steuerelemente aus Themes, die Sie nicht besitzen, zeigen statt **Zum Dashboard hinzufügen** die Schaltflächen **Kaufen** und **Alles mit MocPilot Pro**. Siehe [Themes erhalten, kaufen und aktualisieren](/docs/Application/Themes/GettingThemes).

## Verschieben {#move}

Drücken und ziehen Sie im Bearbeitungsmodus ein Steuerelement. Wenn Sie es loslassen, rastet es an der nächsten Rasterzelle ein. Würde es ein anderes Steuerelement überlappen, springt es zurück.

## Größen {#sizes}

Jedes Steuerelement hat drei Größen: **S**, **M** und **L**. Ändern Sie sie mit **Größe** in den Eigenschaften des Steuerelements. Größen in Rasterzellen (Breite × Höhe):

| Steuerelement | S | M | L |
|---|---|---|---|
| Joystick, Steuerkreuz | 7×7 | 10×10 | 13×13 |
| Schieberegler | 10×3 | 14×4 | 18×5 |
| Ver. Schieberegler | 3×10 | 4×14 | 5×18 |
| Drehknopf | 6×6 | 8×8 | 10×10 |
| Taste, Schalter | 3×3 | 4×4 | 5×5 |
| Schritt-Schalter | 8×3 | 12×4 | 16×5 |
| Ver. Schritt-Schalter | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Batteriestand, Geschwindigkeitsmesser | 6×6 | 8×8 | 10×10 |
| Neigungsmonitor | 8×4 | 12×6 | 16×8 |
| Lenkrad | 8×8 | 12×12 | 16×16 |
| Pedale | 11×8 | 16×12 | 21×16 |
| Schaltgetriebe, Automatikgetriebe | 8×8 | 10×10 | 12×12 |
| Handbremse | 4×7 | 6×10 | 8×13 |
| Blinker | 8×5 | 10×6 | 14×8 |
| Fahrschalter | 6×8 | 8×10 | 10×13 |

Das gesamte Feld umfasst 40 × 20 Zellen. Passt eine größere Größe nicht, verschieben Sie zuerst die benachbarten Steuerelemente.

## Auswählen und bearbeiten {#select-and-edit}

Tippen (klicken) Sie auf ein Steuerelement, um es auszuwählen und seine **Eigenschaften** zu öffnen. Siehe [Eigenschaften von Steuerelementen](/docs/Application/Dashboard/ControlProperties).

## Kontextmenü {#context-menu}

Halten Sie ein Steuerelement gedrückt (Touchscreen) oder klicken Sie mit der rechten Maustaste darauf (Computer):

- **Sperren** / **Entsperren**
- **Eigenschaften**
- **Theme ändern**: das Steuerelement auf ein anderes Theme umstellen, das Sie besitzen und das denselben Steuerelementtyp hat
- **Duplizieren**: eine Kopie mit denselben Eigenschaften
- **Duplizieren (nur Typ)**: ein neues Steuerelement desselben Typs mit Standardeigenschaften
- **Löschen**

Halten Sie einen leeren Bereich des Felds gedrückt oder klicken Sie mit der rechten Maustaste darauf:

- **Alles sperren** / **Alles entsperren**
- **N Controller löschen**: löscht alle nicht gesperrten Steuerelemente

Auf einem Computer bei geöffnetem Eigenschaftenbereich: **Esc** schließt ihn, **Entf** / **Rücktaste** löscht das Steuerelement, **⌘D / Strg+D** dupliziert es.

## Steuerelemente sperren {#lock-controls}

Ein **gesperrtes** Steuerelement lässt sich weder verschieben noch löschen, sodass Sie es beim Fahren oder Bearbeiten nicht versehentlich verrücken. Es zeigt ein Schlosssymbol. Sperren Sie ein einzelnes Steuerelement über sein Menü oder mit **Controller sperren** in seinen Einstellungen, oder sperren Sie alles mit **Alles sperren**.

## Namen der Steuerelemente {#control-names}

Jedes Steuerelement hat einen Kurznamen, der im Bearbeitungsmodus auf seinem Rahmen angezeigt wird, etwa **JOY1**, **SLDR2** oder **BTN1**. Das Programm bezieht sich über diese Namen auf die Steuerelemente: Bei Schnellverknüpfungen steht im Eingangsblock *JOY1*, und bei Logikblöcken wählen Sie *JOY1* im Menü des Blocks.

## Löschen {#delete}

Verwenden Sie **Löschen** im Menü oder die Papierkorb-Schaltfläche in den Eigenschaften. Gesperrte Steuerelemente lassen sich nicht löschen. Ein Steuerelement, das vom Programm verwendet wird, lässt sich erst löschen, wenn Sie die zugehörigen Zeilen oder Blöcke entfernt haben.
