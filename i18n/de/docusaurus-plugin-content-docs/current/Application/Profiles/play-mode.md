---
id: PlayMode
title: Ein Modell steuern (Start)
description: "Ein Profil starten, das Modell steuern, es stoppen, und was passiert, wenn es stoppt oder eine Verbindung abbricht."
---

import Screenshot from '@site/src/components/Screenshot';

# Ein Modell steuern (Start) {#driving-a-model-run}

Ein Profil hat zwei Modi:

- **Bearbeiten**: Sie ändern die Hubs, das Dashboard und das Programm.
- **Start**: Das Programm läuft, und die Steuerelemente des Dashboards steuern das Modell.

## Starten und stoppen {#start-and-stop}

Drücken Sie **Start** (▶) am rechten Ende der oberen Leiste des Editors; auf Smartphone und Tablet hat auch das Dashboard diese Schaltfläche. Auf einem Computer ist **Start** die orange Schaltfläche im Editor (auch **Programm → Start**, ⌘R / Strg+R). Mit **Stopp** (■) kehren Sie zum Bearbeiten zurück (⌘. / Strg+.).

<Screenshot name="dashboard-run" alt="Dashboard, während das Programm läuft" width={900} />

Während das Programm läuft:

- sind die Rasterpunkte des Dashboards und seine Bearbeitungsschaltflächen ausgeblendet (auf einem Computer sind diese nicht verfügbar);
- reagieren die Steuerelemente auf Berührung und auf das Gamepad;
- zeigen Monitore und Anzeigen Live-Werte;
- zeigt der Editor bei Schnellverknüpfungen Live-Werte zwischen den Blöcken jeder Zeile, und die Zeilen lassen sich nicht bearbeiten;
- bleibt das Programm bei Logikblöcken bearbeitbar, sodass Sie es live feinabstimmen können.

## Auf einem Smartphone oder Tablet {#on-a-phone-or-tablet}

Beim Öffnen eines Profils wechselt ein Smartphone ins Querformat mit Vollbild, damit das Dashboard den ganzen Bildschirm nutzt. Schalten Sie in den Einstellungen **Bildschirm eingeschaltet lassen** ein, damit der Bildschirm beim Fahren nicht dunkel wird. Siehe [Einstellungen](/docs/Application/Account/Settings).

## Bevor Sie Start drücken {#before-you-press-run}

- Schalten Sie die Hubs ein und prüfen Sie unter **Meine Hubs**, ob sie verbunden sind (die Zahl auf der Schaltfläche **Meine Hubs**, auf einem Computer **Hubs**, zeigt, wie viele es sind).
- Prüfen Sie bei Schnellverknüpfungen die Schaltfläche **Probleme**: Ein rotes „!“ bedeutet, dass einige Zeilen nicht ausgeführt werden können. Siehe [Ausführen und Probleme beheben](/docs/Application/Links/Problems).
- Stellen Sie das Modell beim ersten Versuch auf einen Ständer oder halten Sie es vom Tischrand fern.

## Wenn das Programm stoppt {#when-the-program-stops}

- **Schnellverknüpfungen** stoppen alle von den Zeilen verwendeten Motoren und setzen die Ausgänge zurück (LED-Matrix gelöscht, Portfarben und Sensorlichter aus).
- **Logikblöcke** stoppen die Hub-Ports, wenn in den Editor-Einstellungen **Hub-Ports beim Programmstopp stoppen** eingeschaltet ist.
- Trennt sich ein Hub, während das Programm läuft, stoppen seine Motoren. Bei Schnellverknüpfungen kann ein Hub-Eingang „Verbunden“ dies auf dem Dashboard anzeigen.
- Bei der Fernsteuerung stoppt das Hub-Gerät das Profil und alle Motoren, wenn die Verbindung zwischen Fernbedienung und Hub-Gerät etwa 4 Sekunden lang unterbrochen ist.

## Von einem anderen Gerät aus steuern {#drive-from-another-device}

Mit [MocPilot Pro](/docs/Application/Account/Pro) können Sie das Profil auf einem Gerät ausführen (dem Hub-Gerät, das die Hubs verbindet) und es von einem anderen Gerät oder aus dem Web-Editor steuern. Siehe [Fernsteuerung](/docs/Application/Profiles/RemoteControl).
