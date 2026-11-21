---
id: ManageProfiles
title: Profile verwalten
description: "MOCPilot-Profile bearbeiten, teilen, importieren, exportieren und löschen."
---

import Screenshot from '@site/src/components/Screenshot';

# Profile verwalten {#manage-profiles}

## Profildetails bearbeiten {#edit-profile-details}

Tippen Sie bei einem Profil auf **Bearbeiten** (Smartphone, Tablet) oder klicken Sie auf **Bearbeiten…** (Computer). Unter **Profil bearbeiten** können Sie Folgendes ändern:

- das **Bild** und den **Namen**;
- die **Beschreibung** (was das Profil tut, für welches Modell es gedacht ist, wie man es steuert);
- die **Blockstufe** (Logikblöcke);
- **Hashtags**;
- **Favorit** (Smartphone, Tablet): Ein Favoritenprofil rückt an den Anfang Ihrer Liste. Auf einem Computer befindet sich **Favorit** in der unteren Leiste der Profilseite.

<Screenshot name="edit-profile" alt="Fenster „Profil bearbeiten“ mit Bild, Name, Beschreibung und Hashtags" width={900} />

Hier löschen Sie das Profil auch und senden es, sobald Sie angemeldet sind, an den Katalog.

Der Programmtyp lässt sich nicht ändern. Um ein Modell in den anderen Editor zu übertragen, erstellen Sie ein neues Profil.

## Ein Profil teilen (exportieren) {#share-export-a-profile}

**Teilen…** packt das Profil in eine einzige `.dat`-Datei (benannt etwa `Technic Buggy_<id>.dat`) und öffnet das Teilen-Menü des Systems. Senden Sie die Datei per Nachricht oder E-Mail oder speichern Sie sie in Ihren Dateien.

Die Datei enthält die Hubs, das Dashboard und das Programm. Käufe enthält sie nicht: Themes und Spezial-Steuerelemente, die der Empfänger nicht besitzt, werden ersetzt oder gesperrt, wenn er das Profil bearbeitet (siehe [unten](#paid-themes-in-shared-profiles)).

## Ein Profil importieren {#import-a-profile}

1. Wählen Sie unter **Meine Profile** **Profil importieren…** (Smartphone: **+** → **Profil importieren…**; Tablet: das Menü **Neues Profil**; Computer: **Datei → Profil importieren…**, ⌘O / Strg+O).
2. Wählen Sie eine `.dat`-Datei aus.

Wenn Sie dieses Profil bereits haben:

- eine andere Version: Wählen Sie **Ersetzen**, **Als Kopie speichern** (fügt dem Namen „(Kopie)“ hinzu) oder **Abbrechen**;
- genau dieselbe Datei: Sie wird nicht erneut geladen.

Eine Datei, die kein Profil ist, wird abgelehnt.

:::tip Ein Profil duplizieren
Einen eigenen Befehl „Duplizieren“ gibt es nicht. Um eine Kopie zu erhalten, teilen Sie das Profil in eine Datei und importieren Sie es mit **Als Kopie speichern**.
:::

## Ein Profil löschen {#delete-a-profile}

Öffnen Sie **Profil bearbeiten**:

- Smartphone und Tablet: **Wischen Sie, um das Profil zu löschen**;
- Computer: **Profil löschen**, dann bestätigen. **Profil löschen** finden Sie auch im Menü der Profilkarte.

Das Profil wird von diesem Gerät und aus Ihrem Konto gelöscht und verschwindet daher auch von Ihren anderen Geräten. Das lässt sich nicht rückgängig machen; teilen Sie das Profil vorher in eine Datei, wenn Sie es vielleicht noch einmal brauchen.

## Profile aus dem Katalog {#profiles-from-the-catalog}

Ein aus dem [Profilkatalog](/docs/Application/Profiles/Catalog) installiertes Profil ist Ihre eigene Kopie:

- Solange Sie es nicht ändern, läuft es genau so wie veröffentlicht, und **Aktualisieren** installiert eine neue Version, wenn der Autor eine herausbringt (**Aus dem Katalog aktualisieren** unter **Profil bearbeiten** tut dasselbe);
- die erste Änderung zeigt eine Warnung: Danach erhält das Profil keine Katalog-Updates mehr.

## Kostenpflichtige Themes in geteilten Profilen {#paid-themes-in-shared-profiles}

Profile können kostenpflichtige [Themes](/docs/Application/Themes/ThemesOverview) und Spezial-Steuerelemente (Lenkrad, Pedale, Getriebe und andere) verwenden. Wenn Sie ein Profil bearbeiten, das Produkte verwendet, die Sie nicht besitzen:

- Steuerelemente aus Themes, die Sie nicht besitzen, wechseln zum kostenlosen Theme **Grundlegend**;
- Spezial-Steuerelemente ohne kostenloses Gegenstück werden gesperrt, bis Sie sie kaufen;
- Produkte, die Sie besitzen, bleiben unverändert.

Ein unverändertes Katalogprofil läuft mit all seinen Produkten, auch mit denen, die Sie nicht besitzen.

## Synchronisierung {#sync}

Wenn Sie angemeldet sind, wird jede Änderung hochgeladen und erscheint auf Ihren anderen Geräten. Siehe [Synchronisierung zwischen Geräten](/docs/Application/Account/Sync).

Öffnen Sie ein Profil, das gerade auf einem anderen Gerät bearbeitet wird, lässt MOCPilot Sie wählen: **Nur ansehen** (Änderungen werden nicht gespeichert) oder **Bearbeitung übernehmen**.
