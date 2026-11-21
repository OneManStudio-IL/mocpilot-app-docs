---
id: WebEditor
title: Web-Editor
description: "Bearbeiten Sie Ihre MOCPilot-Profile im Browser auf mocpilot.com und steuern Sie das Modell über die App auf einem anderen Gerät."
---

import Screenshot from '@site/src/components/Screenshot';

# Web-Editor auf mocpilot.com {#web-editor-on-mocpilotcom}

Der Web-Editor ist MOCPilot in Ihrem Browser. Es ist dieselbe App mit denselben Editoren, demselben Dashboard und denselben Themes, daher gilt alles in dieser Dokumentation auch für ihn.

Browser können nicht mit Bluetooth-Hubs kommunizieren, deshalb dient der Web-Editor dem **Bearbeiten**. Um ein Profil zu testen, führen Sie es im Browser ohne Hubs aus; um das Modell zu steuern, lassen Sie die MOCPilot-App auf einem Smartphone, Tablet oder Computer die Hubs verbinden (siehe [Fernsteuerung](/docs/Application/Profiles/RemoteControl)).

## Ohne Konto ausprobieren {#try-it-without-an-account}

Auf der Startseite von [mocpilot.com](https://mocpilot.com) hat jeder Editor (Logikblöcke und Schnellverknüpfungen) eine Schaltfläche **Demo ausprobieren**, die ein Demo-Profil öffnet. Die Demo benötigt weder ein Konto noch Hubs. Sie können darin jedes Theme und jedes Spezial-Steuerelement ausprobieren; es wird nichts gespeichert.

## Eigene Profile bearbeiten {#edit-your-own-profiles}

1. Melden Sie sich auf [mocpilot.com](https://mocpilot.com) mit Ihrem MOCPilot-Konto an.
2. Öffnen Sie Ihre Profile und klicken Sie bei einem davon auf **Bearbeiten**.
3. Ändern Sie die Hubs, das Dashboard oder das Programm, genau wie in der App.
4. Schließen Sie das Profil (Schaltfläche „Startseite“). Der Editor speichert das Profil und lädt es hoch, und die Änderung erreicht die App auf Ihren Geräten über die [Synchronisierung](/docs/Application/Account/Sync).

Hinweise:

- Sie können nur Profile des Kontos bearbeiten, mit dem Sie angemeldet sind. Andernfalls sehen Sie „Dieses Profil ist nicht in Ihrem Konto“ und eine Schaltfläche **Zurück zur Website**.
- Ihre Käufe und MocPilot Pro funktionieren im Browser genau wie in der App.
- In einem Desktop-Browser ist das Dashboard ein schwebender Bereich, den Sie verschieben und in der Größe ändern können.
- Themes werden bei jedem Besuch erneut heruntergeladen (etwa 15 MB), daher kann das erste Öffnen einen Moment dauern.
- Das Importieren und Exportieren von `.dat`-Dateien ist im Browser nicht verfügbar; verwenden Sie dafür die App.

## Ein Profil ausführen {#run-a-profile}

**Start** im Web-Editor führt das Profil im Browser aus: Alle Blöcke und Zeilen funktionieren außer Bluetooth – gut geeignet, um die Logik, die Monitore und das Dashboard zu testen. Ist ein Hub-Gerät gekoppelt (MocPilot Pro, siehe unten), startet **Start** das Profil stattdessen auf dem Hub-Gerät.

## Fernsteuerung {#remote-control}

Mit [MocPilot Pro](/docs/Application/Account/Pro) kann der Web-Editor die **Fernbedienung** sein: Die MOCPilot-App auf einem Smartphone, Tablet oder Computer neben dem Modell (das **Hub-Gerät**) verbindet die Hubs und führt das Profil aus, und die Browserseite steuert es. Drücken Sie in der oberen Leiste des Profils auf **Fernsteuerung** und dann auf **Code anzeigen**; tippen Sie auf dem Hub-Gerät auf der Seite **Meine Profile** auf **Fernbedienung verbinden** und scannen Sie den Code. Siehe [Fernsteuerung](/docs/Application/Profiles/RemoteControl).
