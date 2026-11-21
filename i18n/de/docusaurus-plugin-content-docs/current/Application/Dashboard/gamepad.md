---
id: Gamepad
title: Gamepad
description: "Steuern Sie Ihr Modell mit einem Gamepad im Xbox- oder PlayStation-Stil."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Ein echtes Gamepad ist oft angenehmer als ein Touchscreen: richtige Sticks, Trigger und Tasten. MOCPilot funktioniert mit Bluetooth- und USB-Gamepads, die das System des Geräts unterstützt (Controller im Xbox- und PlayStation-Stil auf iPhone, iPad, Android, Mac und Windows).

Das Gamepad arbeitet mit dem Dashboard zusammen; Sie können beide gleichzeitig verwenden.

## Ein Gamepad verbinden {#connect-a-gamepad}

1. Koppeln Sie das Gamepad in den Bluetooth-Einstellungen des Systems mit Ihrem Smartphone, Tablet oder Computer (oder schließen Sie es per USB an).
2. Öffnen Sie ein Profil und tippen Sie im Editor auf **Gamepad**.
3. Die Kopfzeile der Seite zeigt **Gamepad: (Name)**. „Gamepad ist nicht verbunden“ bedeutet, dass das System es noch nicht erkennt.

<Screenshot name="gamepad" alt="Seite „Gamepad“" width={900} />

## Seite „Gamepad“ {#gamepad-page}

- **Gamepad-Blöcke aktivieren**: schaltet die Gamepad-Eingänge für dieses Profil ein. Ohne diese Option melden Zeilen der Schnellverknüpfungen mit dem Eingang „Gamepad“ „Aktivieren Sie Gamepad-Blöcke auf der Gamepad-Seite (obere Leiste)“, und Logikblöcke zeigen die Kategorie „Gamepad“ nicht an.
- **Gamepad-Tastenlayout**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) oder **Sony PS** (Kreuz, Kreis, Quadrat, Dreieck, L1, R1, L2, R2). Die Editoren beschriften die Tasten entsprechend dieser Wahl.
- **Wertebereich des Gamepads** (Logikblöcke): Die Sticks liefern **-1..1** oder **-100..100**.
- **Gamepad auswählen**: wenn mehr als ein Gamepad verbunden ist.
- **Gamepad testen** → **Test**: ein Live-Tester, der Tasten, Trigger, Sticks und das Steuerkreuz anzeigt, damit Sie alles vor der Verwendung prüfen können.

Die Einstellungen werden im Profil gespeichert.

## Das Gamepad bei Schnellverknüpfungen verwenden {#use-the-gamepad-in-quick-links}

Ziehen Sie den Eingang **Gamepad** in eine Zeile und wählen Sie seinen **Eingang**:

- Sticks: Linker Stick Y, Linker Stick X, Rechter Stick Y, Rechter Stick X;
- Trigger: RT / LT (R2 / L2);
- Aktionstasten: A, B, X, Y (Kreuz, Kreis, Quadrat, Dreieck);
- Schultertasten: LB / RB (L1 / R1);
- Steuerkreuz: Hoch, Runter, Links, Rechts.

Beispiel: *Gamepad* (Linker Stick Y) → *Sanft* → *Motor* → *Hub* (Port A). Siehe [Eingänge](/docs/Application/Links/Inputs#gamepad).

## Das Gamepad bei Logikblöcken verwenden {#use-the-gamepad-in-logic-blocks}

Die Kategorie **Gamepad** enthält Ereignisblöcke (*wenn Gamepad-Taste …*, *wenn Gamepad-Steuerkreuz …*, *wenn Gamepad-Stick …*) und Werteblöcke (Taste, Steuerkreuz, Stick, Triggerdruck). Siehe [Gamepad-Blöcke](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profile zum Veröffentlichen {#profiles-for-publishing}

Ein Profil kann auch nur mit einem Gamepad und ohne Dashboard-Steuerelemente im Katalog veröffentlicht werden: Die Anforderung lautet „ein Dashboard-Controller oder das Gamepad“.
