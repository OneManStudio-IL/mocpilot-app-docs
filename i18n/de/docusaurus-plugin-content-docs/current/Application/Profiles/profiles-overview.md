---
id: ProfilesOverview
title: Profile
description: "Was ein Profil ist, die Profilliste, Suche, Sortierung und Favoriten."
---

import Screenshot from '@site/src/components/Screenshot';

# Profile {#profiles}

Ein **Profil** ist alles, was MOCPilot über ein Modell weiß: seine Hubs, sein Dashboard und sein Programm. Pro Modell legen Sie ein Profil an.

<Screenshot name="profiles-desktop" alt="Liste „Meine Profile“" width={900} />

## Woher Profile kommen {#where-profiles-come-from}

- **Ihre eigenen Profile**, erstellt mit **Neues Profil**. Siehe [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile).
- **Profile aus dem Katalog**: offizielle Profile für LEGO®-Sets vom MOCPilot-Team und Profile aus der Community von anderen Baumeistern. Beim Installieren wird Ihrer Liste eine eigene Kopie hinzugefügt. Siehe [Katalog und Veröffentlichen](/docs/Application/Profiles/Catalog).
- **Importierte Profile**: `.dat`-Dateien, die jemand mit Ihnen geteilt hat. Siehe [Profile verwalten](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Alle befinden sich in derselben Liste.

## Die Profilliste {#the-profile-list}

Die Seite heißt **Meine Profile**.

- **Suchen** findet Profile nach Name, Hashtag, Autor, Hub, Setnummer oder Jahr.
- **Sortieren und filtern** sortiert nach **Neueste Sätze**, **Älteste Sätze**, **Name (A–Z)**, **Name (Z–A)**, **Autor (A–Z)**, **Autor (Z–A)** oder **Verwendete Hubs**. **Nur meine Profile** blendet aus dem Katalog installierte Profile aus.
- **Nach Hashtags filtern** (Tablet und Computer) zeigt nur Profile mit den gewählten Hashtags.
- **Favoriten** stehen immer an erster Stelle.

Eine Karte zeigt Bild und Namen des Profils und, sofern bekannt, Setnummer, Erscheinungsjahr und Teileanzahl. **Update verfügbar** bedeutet, dass Sie eine neue Version eines Katalogprofils installieren können.

## Aktionen für Profile {#profile-actions}

| Aktion | Smartphone | Tablet | Computer |
|---|---|---|---|
| Öffnen (starten) | **Starten** auf der Karte | Doppeltipp auf die Karte, oder auswählen und auf **Starten** tippen | Doppelklick auf die Karte, oder **Starten** |
| Name, Bild, Hashtags, Beschreibung bearbeiten | **Bearbeiten** auf der Karte | **Bearbeiten** | **Bearbeiten…** |
| Zu Favoriten hinzufügen | unter **Profil bearbeiten** | **Zu Favoriten hinzufügen** | **Zu Favoriten hinzufügen** |
| Als Datei teilen | **Teilen** auf der Karte | **Teilen** | **Teilen…** |
| Aus dem Katalog aktualisieren | **Aktualisieren** | **Aktualisieren** | **Aktualisieren** |
| An den Katalog senden | unter **Profil bearbeiten** | unter **Profil bearbeiten** | unter **Profil bearbeiten** |
| Löschen | **Wischen Sie, um das Profil zu löschen** unter **Profil bearbeiten** | ebenso, oder **Profil löschen** im Menü der Karte | **Profil löschen** unter **Profil bearbeiten** oder im Menü der Karte |

## Zwei Arten von Programmen {#two-kinds-of-programs}

Jedes Profil verwendet einen von zwei Programmeditoren, der beim Erstellen gewählt wird:

- **Schnellverknüpfungen**: Zeilen, die Steuerelemente mit Motoren und Lichtern verbinden, ohne Code. Siehe [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing).
- **Logikblöcke**: ein Blockprogramm mit Ereignissen, Schleifen, Bedingungen und Variablen. Siehe [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
Ein Profil, das in einer neueren Version von MOCPilot erstellt wurde, lässt sich in einer älteren möglicherweise nicht öffnen („Profil ist nicht kompatibel“). Aktualisieren Sie die App auf diesem Gerät.
:::
