---
id: CreateProfile
title: Ein Profil erstellen
description: "Ein Profil erstellen und zwischen den Programmeditoren Logikblöcke und Schnellverknüpfungen wählen."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Ein Profil erstellen {#create-a-profile}

1. Öffnen Sie **Meine Profile**.
   - Smartphone: Tippen Sie auf **+** → **Neues Profil**.
   - Tablet: **Neues Profil** im Kopfbereich.
   - Computer: **Datei → Neues Profil** (⌘N / Strg+N).
2. Wählen Sie den **Programmtyp** (siehe unten).
3. Füllen Sie die Profildetails aus.
4. Tippen Sie auf **Erstellen**. Das Profil öffnet sich im Editor.

<Screenshot name="create-profile-tiles" alt="Seite „Neues Profil“" width={900} />

## Programmtyp wählen {#choose-the-program-type}

Der Programmtyp legt fest, welchen Editor das Profil verwendet. **Er lässt sich später nicht ändern.** Um den anderen Editor auszuprobieren, erstellen Sie ein zweites Profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Schnellverknüpfungen" style={{width: '100%', maxWidth: 320}} />
    <h3>Schnellverknüpfungen</h3>
    <p><em>Ein vereinfachtes Schema wie in Controlz.</em> Verbinden Sie Dashboard-Steuerelemente Zeile für Zeile mit den Motoren und Lichtern der Hubs: Eingang, Verarbeitung, Aktion, Hub. In wenigen Minuten fertig.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logikblöcke" style={{width: '100%', maxWidth: 320}} />
    <h3>Logikblöcke</h3>
    <p><em>Robotik, Algorithmen und anspruchsvolle Szenarien.</em> Programmieren Sie das Modell mit Blöcken: Ereignisse, Schleifen, Bedingungen, Variablen und Sensordaten. Für Roboter und Automatisierung.</p>
  </div>
</div>

| | Schnellverknüpfungen | Logikblöcke |
|---|---|---|
| Wie Sie bauen | Zeilen: Eingang → Verarbeitung → Aktion → Hub | Zu Skripten zusammengesteckte Blöcke |
| Einarbeitungszeit | Minuten | Länger; mehr Möglichkeiten |
| Ideal für | Autos, Lkw, Züge, Kräne: „dieses Steuerelement bewegt jenen Motor“ | Roboter, automatische Abläufe, Sensorlogik, Spiele |
| Logik (Wenn, Schleifen, Variablen) | Nein (nur Schwellenwerte und Umschalten) | Ja |
| Sensoren | Hub-Sensoren als Eingänge; Werte an Anzeigen | Alle Hub- und Smartphone-Sensoren, beliebige Berechnungen |
| Sanftes Anfahren, Begrenzungen, Totzone | Fertige Blöcke | Mit Blöcken gebaut |
| Servolenkung mit Kalibrierung | Fertiger Block | Blöcke |
| Gamepad | Ja | Ja |
| Mehrere Hubs | Ja | Ja |

**Unsicher?** Beginnen Sie mit Schnellverknüpfungen. Wenn Sie später Logik brauchen, erstellen Sie für das Modell ein Profil mit Logikblöcken.

Tippen Sie auf **Erstellen**, ohne einen Typ zu wählen, werden die Kacheln hervorgehoben. Jede Kachel hat einen Link **Dokumentation ↗** zum passenden Teil dieser Dokumentation.

## Profildetails {#profile-details}

- **Bild**: Klicken Sie auf den Bildbereich (auf einem Touchscreen gedrückt halten), um ein Bild auszuwählen. Ziehen Sie das Bild nach oben oder unten, um den sichtbaren Ausschnitt zu wählen. Mit **Bild aktualisieren** und **Entfernen** ändern Sie es später.
- **Name**: Pflichtfeld, und er muss eindeutig sein: „Ein Profil mit dem Namen „…“ existiert bereits“ bedeutet, dass Sie bereits ein Profil mit diesem Namen haben.
- **Blockstufe** (nur Logikblöcke): **Anfänger**, **Fortgeschritten** oder **Guru**. Sie legt fest, welche Blöcke die Palette für dieses Profil zeigt. Sie können sie später in den Editor-Einstellungen ändern. Siehe [Arbeiten im Editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: beschreiben das Profil und helfen anderen, es zu finden. Hashtags stammen aus einer gemeinsamen Liste, die geladen wird, wenn Sie online sind.

Alles außer dem Programmtyp lässt sich später unter **Profil bearbeiten** ändern. Dort können Sie auch eine Beschreibung hinzufügen und das Profil als **Favorit** markieren.

## Nächste Schritte {#next-steps}

1. Hubs hinzufügen: [Einen Hub hinzufügen und verbinden](/docs/Application/Hubs/ConnectingHubs).
2. Steuerelemente platzieren: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Das Programm schreiben: [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing) oder [Logikblöcke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip KI-Builder
Mit [MocPilot Pro](/docs/Application/Account/Pro) können Sie Ihr Modell in Worten oder per Sprache beschreiben und den KI-Builder die Hubs, das Dashboard und das Programm (Logikblöcke oder Schnellverknüpfungen) erstellen lassen. Sagen Sie, welchen Hub Sie verwenden, was an jedem Port angeschlossen ist und was es tun soll. Siehe [So erhalten Sie ein gutes Ergebnis](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
