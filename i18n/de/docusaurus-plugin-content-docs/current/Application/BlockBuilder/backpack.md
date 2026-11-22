---
id: Backpack
title: Rucksack
description: "Bewahren Sie Teile Ihrer Logikblöcke-Programme im Rucksack auf und fügen Sie sie in jedes Profil ein, auf jedem Ihrer Geräte."
---

import Screenshot from '@site/src/components/Screenshot';

# Rucksack {#backpack}

Im **Rucksack** bewahren Sie Teile Ihrer Blockprogramme auf, um sie in anderen Profilen wiederzuverwenden: eine Lenkroutine, eine Lichtshow, einen eigenen Block aus „Meine Blöcke“, den Sie einmal geschrieben haben und überall nutzen möchten. Legen Sie in einem Profil einen Blockstapel in den Rucksack und fügen Sie ihn dann in ein beliebiges anderes Profil ein, auf diesem Gerät oder auf jedem Gerät, auf dem Sie angemeldet sind.

Der Rucksack gehört zum Editor der [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profile mit Schnellverknüpfungen haben ihn nicht.

<Screenshot name="backpack-panel" alt="Der Bereich „Rucksack“ neben einem Blockprogramm" width={900} />

## Was der Rucksack aufbewahrt {#what-the-backpack-keeps}

Jedes Element im Rucksack ist eine **Kopie** der Blöcke, die Sie gespeichert haben:

- **Ein Stapel**: der gewählte Block zusammen mit allem, was darunter und darin hängt, genau so, wie **Duplizieren** ihn kopiert.
- **Ein eigener Block**: Wenn Sie den Block `definieren …` eines eigenen Blocks aus [Meine Blöcke](/docs/Application/BlockBuilder/Blocks/MyBlocks) speichern, bewahrt der Rucksack die ganze Definition auf. Solche Elemente sind mit **Mein Block** gekennzeichnet.

Das Element merkt sich außerdem die eigenen Blöcke, die Ihre Blöcke verwenden (auch über andere eigene Blöcke hinweg), sowie die Namen der Variablen, Listen, Nachrichten, Fahrzeuge und Töne, auf die sie sich beziehen. So funktionieren die Blöcke auch, wenn Sie sie anderswo einfügen.

Eingefügte Blöcke werden ein gewöhnlicher Teil des Profilprogramms. Nichts im Profil hängt vom Rucksack ab: Wenn Sie ein Element löschen oder umbenennen, ändern sich die Programme nicht, in die Sie es eingefügt haben. Im Rucksack lassen sich Elemente nicht bearbeiten. Um eines zu ändern, fügen Sie es ein, bearbeiten die Blöcke im Programm und speichern sie erneut als neues Element im Rucksack.

## Blöcke im Rucksack speichern {#save-blocks}

1. Klicken Sie im Programm mit der rechten Maustaste auf einen Block (Computer) oder halten Sie ihn gedrückt (Smartphone, Tablet).
2. Wählen Sie **Zum Rucksack hinzufügen**.
3. Geben Sie unter **Name der Blöcke** einen Namen ein und tippen Sie auf **Speichern**.

Der Block und alles, was daran hängt, landen im Rucksack. Um die Definition eines eigenen Blocks zu speichern, öffnen Sie das Menü seines Blocks `definieren …`.

<Screenshot name="backpack-add" alt="Das Blockmenü mit „Zum Rucksack hinzufügen“ und das Fenster für den Namen" width={900} />

## Den Rucksack öffnen {#open}

- **Computer und Web-Editor**: die Schaltfläche **Rucksack** in der oberen Leiste des Editors, **Ansicht → Rucksack** im Menü oder **Strg+Umschalt+B** (**⌘⇧B** auf dem Mac). Ist das Fenster schmal, finden Sie die Schaltfläche im Menü **Mehr**. Der Rucksack öffnet sich als Bereich rechts im Editor, neben dem [Monitor](/docs/Application/BlockBuilder/Editor#monitor), falls dieser ebenfalls geöffnet ist.
- **Smartphone und Tablet**: **Mehr → Rucksack** in der oberen Leiste des Editors. Der Rucksack öffnet sich als Bereich über dem Editor.

Solange der Rucksack geöffnet ist, ist die Schaltfläche hervorgehoben. Drücken Sie sie erneut, um den Rucksack zu schließen.

Jedes Element zeigt sein Bild, seinen Namen und die Anzahl der Blöcke darin (**Blöcke: N**). Der Hinweis unten im Bereich sagt Ihnen, wo der Rucksack aufbewahrt wird (siehe [unten](#where-it-is-kept)).

## Blöcke in ein Programm einfügen {#insert}

- **Auf ein Element tippen**: Seine Blöcke erscheinen im sichtbaren Teil des Programms.
- **Ein Element auf das Programm ziehen**: Die Blöcke landen dort, wo Sie sie ablegen. Ziehen Sie seitwärts in Richtung Programm; Ziehen nach oben oder unten scrollt die Liste.
- **Elementmenü (⋯)**: **Einfügen**, **Umbenennen…** oder **Löschen**.

Auf Smartphones und Tablets schließt sich der Rucksack nach dem Einfügen, damit Sie die Blöcke sehen. Ein einziges **Rückgängig** entfernt alles, was eingefügt wurde.

### Was beim Einfügen passiert {#what-happens}

- **Meine Blöcke**: Ein eigener Block, den das Profil bereits mit demselben Inhalt hat, wird wiederverwendet. Wenn Sie dieselben Blöcke noch einmal einfügen, entstehen also keine Kopien davon. Verwendet ein anderer eigener Block im Profil denselben Namen, aber einen anderen Inhalt, bekommt der eingefügte einen eigenen. Ein Element mit einem eigenen Block, der schon im Profil ist, wird nicht eingefügt, und die App zeigt **Bereits vorhanden**: Sie finden den Block unter **Meine Blöcke**.
- **Variablen, Listen, Nachrichten und Fahrzeuge**: Hat das Profil eines mit demselben Namen, verwenden die Blöcke dieses; andernfalls wird es angelegt. Werte von Variablen und Inhalte von Listen werden nicht kopiert. Ist der Name bereits durch etwas anderes belegt, erhalten Sie eine Meldung wie *Variable „speed“ konnte nicht erstellt werden: Der Name ist vergeben*.
- **Töne**: Ihre eigenen Töne sind Dateien des Profils und werden nicht im Rucksack aufbewahrt. Hat das Profil keinen Ton mit diesem Namen, sehen Sie *Der Sound „…“ ist nicht in diesem Profil: Wähle einen Sound in den Blöcken*. Integrierte Töne funktionieren überall.
- **Hub- und Dashboard-Blöcke**: Blöcke für einen Hub, ein Dashboard-Steuerelement oder ein Gamepad, die dieses Profil nicht hat, lassen sich nicht einfügen. Bevor sich etwas ändert, zeigt die App **Einige Blöcke können nicht eingefügt werden** mit der Liste dieser Blöcke und der Anzahl, die ausgelassen wird, und fragt, ob die übrigen eingefügt werden sollen. Wenn Sie sie behalten möchten, fügen Sie zuerst den Hub oder das Dashboard-Steuerelement hinzu. Passt keiner der Blöcke zum Profil, wird nichts eingefügt.

## Umbenennen und löschen {#rename-delete}

Öffnen Sie das Elementmenü (⋯):

- **Umbenennen…** ändert den Namen des Elements.
- **Löschen** entfernt es, nachdem Sie bestätigt haben (**Aus dem Rucksack löschen?**). Programme, in die Sie es eingefügt haben, behalten ihre Blöcke.

Der Rucksack entfernt nie von selbst Elemente: Löschen Sie, was Sie nicht mehr brauchen.

## Wo der Rucksack aufbewahrt wird {#where-it-is-kept}

- **Ohne Konto (Gast)**: nur auf diesem Gerät. Im Bereich steht *Auf diesem Gerät gespeichert. Melde dich an, um den Rucksack auf allen deinen Geräten zu haben.*
- **Angemeldet**: zusätzlich in Ihrem Konto, sodass Sie auf allen Ihren Geräten denselben Rucksack haben, auch im [Web-Editor](/docs/Introducing/WebEditor). Im Bereich steht *In deinem Konto gespeichert: derselbe Rucksack auf allen deinen Geräten.* Änderungen auf einem Gerät erscheinen auch auf den anderen.
- **Erste Anmeldung**: Elemente, die Sie auf diesem Gerät als Gast gespeichert haben, wandern in Ihr Konto.

Sie können den Rucksack auch offline nutzen. Änderungen bleiben auf dem Gerät und werden an Ihr Konto gesendet, sobald die Verbindung wieder da ist (in der Zwischenzeit zeigt der Bereich **Wird synchronisiert…**). Ein Element, das noch aus Ihrem Konto heruntergeladen wird, lässt sich noch nicht einfügen: Die App meldet **Noch nicht bereit**. Versuchen Sie es gleich noch einmal.

## Grenzen {#limits}

| | Grenze |
|---|---|
| Elemente im Rucksack | 200 |
| Größe eines Elements | etwa 512 KB (ein sehr großer Programmteil passt eventuell nicht: Speichern Sie einen kleineren Teil) |
| Name des Elements | bis zu 100 Zeichen |

Ist der Rucksack in Ihrem Konto voll oder ein Element zu groß dafür, bleibt das Element nur auf diesem Gerät, und die App weist Sie darauf hin. Elemente, die mit einer neueren App-Version gespeichert wurden, lassen sich erst nach einem Update der App einfügen.

## Fehlerbehebung {#troubleshooting}

| Meldung | Was zu tun ist |
|---|---|
| **Der Rucksack ist voll (200 Elemente). Lösche etwas, das du nicht brauchst.** | Löschen Sie Elemente, die Sie nicht mehr verwenden. |
| **Zu viele Blöcke für den Rucksack. Speichere einen kleineren Teil.** | Speichern Sie einen kleineren Stapel oder teilen Sie das Programm auf mehrere Elemente auf. |
| **Einige Blöcke können nicht eingefügt werden** | Dem Profil fehlt ein Hub, ein Dashboard-Steuerelement oder ein Gamepad, das die Blöcke brauchen. Fügen Sie es hinzu und fügen Sie die Blöcke erneut ein, oder fügen Sie nur die übrigen Blöcke ein. |
| **Bereits vorhanden** | Der eigene Block ist bereits in diesem Profil: Sie finden ihn unter **Meine Blöcke**. |
| **Noch nicht bereit** | Das Element wird noch aus Ihrem Konto heruntergeladen. Warten Sie einen Moment und versuchen Sie es erneut. |
| **Diese Blöcke wurden mit einer neueren App-Version gespeichert. Aktualisiere die App, um sie zu verwenden.** | Aktualisieren Sie MOCPilot auf diesem Gerät. |
