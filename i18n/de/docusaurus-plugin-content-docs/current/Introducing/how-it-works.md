---
id: HowItWorks
title: So funktioniert MOCPilot
description: "Profile, Dashboard, Hubs und Programm: die vier Bausteine jedes MOCPilot-Modells."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# So funktioniert MOCPilot {#how-mocpilot-works}

Alles in MOCPilot besteht aus vier Bausteinen. Wenn Sie diese kennen, ergibt jeder Bildschirm Sinn.

<HowItWorks />

## 1. Profil: ein Modell {#1-profile-one-model}

Ein **Profil** enthält alles zu einem Modell: seine Hubs, sein Dashboard und sein Programm. Legen Sie pro Modell ein Profil an, zum Beispiel „Technic Buggy“ oder „Kranwagen“.

Beim Erstellen eines Profils wählen Sie seinen **Programmtyp**: Logikblöcke oder Schnellverknüpfungen. Er lässt sich später nicht mehr ändern. Siehe [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: die Elektronik des Modells {#2-hubs-the-models-electronics}

**Hubs** sind die Bluetooth-Steine in Ihrem Modell; Motoren, Lichter und Sensoren werden an ihre Ports angeschlossen. Ein Profil hat Hub-**Slots**. Sie fügen die Hubs Ihres Modells einmal zu den Slots hinzu, und MOCPilot verbindet sich mit ihnen, sobald Sie das Profil öffnen. Siehe [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: Ihre Steuerung {#3-dashboard-your-controls}

Das **Dashboard** ist der Bildschirm, von dem aus Sie steuern. Sie platzieren Steuerelemente auf einem Raster: Joysticks, Schieberegler, Tasten, Schalter, Schritt-Schalter und Monitore sowie Spezial-Steuerelemente wie Lenkrad und Pedale. Ein Steuerelement bewirkt allein nichts; es gibt seine Werte an das Programm weiter. Siehe [Dashboard](/docs/Application/Dashboard/DashboardOverview).

Sie können auch ein Gamepad verwenden, zusammen mit dem Dashboard oder stattdessen. Siehe [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programm: das, was alles verbindet {#4-program-what-connects-them}

Das **Programm** legt fest, was passiert, wenn Sie ein Steuerelement bewegen: welcher Motor sich wie schnell dreht, welches Licht blinkt, was ein Monitor anzeigt.

- Bei **Schnellverknüpfungen** ist das Programm eine Liste von Zeilen: *Eingang → Verarbeitung → Aktion → Hub*. Siehe [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing).
- Bei **Logikblöcken** besteht das Programm aus Blöcken: Ereignisse, Schleifen, Bedingungen, Variablen und Sensoren. Siehe [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Starten {#5-run}

Drücken Sie **Start** (▶). Das Programm startet, die Steuerelemente des Dashboards werden aktiv und das Modell reagiert. Mit **Stopp** kehren Sie zum Bearbeiten zurück. Siehe [Ein Modell steuern](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programm mit Schnellverknüpfungen: Dashboard-Steuerelemente mit Hub-Ports verbunden" width={900} />

## Ein typischer Ablauf {#a-typical-session}

1. Öffnen Sie ein Profil oder [erstellen Sie eines](/docs/Application/Profiles/CreateProfile).
2. Fügen Sie Ihre Hubs unter **Meine Hubs** hinzu und schalten Sie sie ein.
3. Platzieren Sie Steuerelemente auf dem **Dashboard**.
4. Verbinden Sie sie im **Programm** mit Motoren und Lichtern.
5. Drücken Sie **Start**, fahren Sie, passen Sie an, wiederholen Sie.

## Was wo gespeichert wird {#what-is-stored-where}

- Profile werden auf Ihrem Gerät gespeichert. Wenn Sie angemeldet sind, werden sie zusätzlich in Ihrem Konto gespeichert und erscheinen auf all Ihren Geräten. Siehe [Synchronisierung zwischen Geräten](/docs/Application/Account/Sync).
- Themes und andere Käufe gehören zu Ihrem Konto. Siehe [MocPilot Pro und Käufe](/docs/Application/Account/Pro).
