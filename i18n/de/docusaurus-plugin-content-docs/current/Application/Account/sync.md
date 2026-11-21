---
id: Sync
title: Synchronisierung zwischen Geräten
description: "MOCPilot-Profile und -Einstellungen zwischen Smartphones, Tablets, Computern und dem Web-Editor synchron halten und offline arbeiten."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronisierung zwischen Geräten {#sync-between-devices}

Wenn Sie angemeldet sind, hält MOCPilot Ihre Profile und Einstellungen auf jedem Gerät gleich: Smartphone, Tablet, Computer und [Web-Editor](/docs/Introducing/WebEditor). Sie müssen nichts einschalten: Für ein Konto ist die Synchronisierung immer aktiv.

## So funktioniert es {#how-it-works}

- Änderungen werden zuerst auf dem Gerät gespeichert und hochgeladen, sobald Sie online sind („Profile werden synchronisiert…“).
- Andere Geräte laden die neue Version herunter, wenn sie online sind.
- Käufe werden nicht als Dateien synchronisiert; sie gehören zu Ihrem Konto und sind überall verfügbar, wo Sie sich anmelden.
- Profile, die auf der Website hinzugefügt (**Zu meinem Konto hinzufügen** im Katalog) oder im Web-Editor bearbeitet wurden, kommen über die Synchronisierung an.
- Im Gastmodus wird nichts synchronisiert: Profile bleiben nur auf diesem Gerät.

## Konflikte {#conflicts}

Wurde dasselbe Profil auf zwei Geräten geändert, bevor sie synchronisiert wurden, setzt sich die Version aus Ihrem Konto durch, und Ihre Version auf diesem Gerät wird als Kopie gespeichert (ihrem Namen wird „(Kopie)“ hinzugefügt). MOCPilot informiert Sie darüber mit einer Meldung **Profilsynchronisierung**. Dasselbe passiert, wenn ein Profil, das Sie hier geändert haben, auf einem anderen Gerät gelöscht wurde.

Öffnen Sie ein Profil, das gerade auf einem anderen Gerät bearbeitet wird, können Sie **Nur ansehen** (Änderungen werden nicht gespeichert) oder **Bearbeitung übernehmen** wählen.

## Offline arbeiten {#working-offline}

Hubs, Ihre Profile und heruntergeladene Themes funktionieren ohne Internet.

- Kann MOCPilot den Server beim Start nicht erreichen, zeigt die App **Keine Internetverbindung** mit **Offline arbeiten** und **Erneut versuchen** an.
- Solange Sie offline sind, wird oben die Kennzeichnung **Offline** angezeigt. Funktionen, die den Server benötigen (Katalog und Veröffentlichen, KI-Builder, Fernsteuerung, Benachrichtigungen, Käufe, Support-Nachrichten), weisen darauf hin, dass sie eine Internetverbindung benötigen.
- Offline vorgenommene Änderungen werden hochgeladen, sobald die Verbindung wieder da ist. Erreicht die App den Server wieder, zeigt sie **Verbindung ist wieder da** mit **Online gehen** an.

<Screenshot name="offline-prompt" alt="Meldung „Keine Internetverbindung“ mit den Schaltflächen „Offline arbeiten“ und „Erneut versuchen“" width={900} />

## Abmelden {#signing-out}

Beim Abmelden werden Ihre Profile und Einstellungen von diesem Gerät entfernt; sie bleiben in Ihrem Konto und kommen zurück, wenn Sie sich wieder anmelden. Sind einige Änderungen noch nicht hochgeladen, warnt MOCPilot Sie vorher und listet die Profile auf: Verbinden Sie sich mit dem Internet und warten Sie, bis die Synchronisierung abgeschlossen ist, oder wählen Sie **Trotzdem abmelden** (eine Kopie bleibt im Backup-Ordner der App).

## Tipps {#tips}

- Stellen Sie vor dem Veröffentlichen eines Profils im Katalog sicher, dass es synchronisiert ist: Der Katalog übernimmt es aus Ihrem Konto.
- Um Profile auf ein Gerät ohne Konto zu übertragen, verwenden Sie **Teilen** und **Profil importieren…** mit `.dat`-Dateien. Siehe [Profile verwalten](/docs/Application/Profiles/ManageProfiles).
