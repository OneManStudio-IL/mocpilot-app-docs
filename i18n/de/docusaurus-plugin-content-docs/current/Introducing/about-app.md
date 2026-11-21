---
id: AboutApp
title: Über MOCPilot
description: "MOCPilot macht ein Smartphone, Tablet oder einen Computer zur Fernsteuerung für LEGO®- und kompatible Bluetooth-Modelle."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: bauen, fahren, alles steuern {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** macht Ihr Smartphone, Tablet oder Ihren Computer zur Fernsteuerung für LEGO®- und kompatible Bluetooth-Modelle: Autos, Lkw, Züge, Kräne, Roboter und Ihre eigenen MOCs.

Die Steuerung gestalten Sie selbst: ein **Dashboard** aus Joysticks, Schiebereglern, Tasten, Lenkrädern und Anzeigen. Ein **Programm** verbindet das Dashboard dann mit den Motoren und Lichtern an Ihren **Hubs**. MOCPilot bietet zwei Programmeditoren:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor für Schnellverknüpfungen: Zeilen vom Eingang bis zum Hub" style={{width: '100%'}} />
    <h3>Schnellverknüpfungen</h3>
    <p>Ganz ohne Code. Jede Zeile verbindet ein Steuerelement mit einem Motor oder Licht: <em>Eingang → Verarbeitung → Aktion → Hub</em>. Ein Auto ist in wenigen Minuten fahrbereit. <a href="/docs/Application/Links/LinksIntroducing">Mehr erfahren</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor für Logikblöcke: Blockprogramm" style={{width: '100%'}} />
    <h3>Logikblöcke</h3>
    <p>Visuelle Blöcke mit Ereignissen, Schleifen, Bedingungen, Variablen und Sensordaten. Für Roboter, Automatisierung und alles, was Logik braucht. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Mehr erfahren</a>.</p>
  </div>
</div>

## Was Sie damit machen können {#what-you-can-do}

- **Jedes Modell steuern** – mit einem Dashboard, das Sie selbst gestalten: Joysticks, Schieberegler, Tasten, Schalter, Schritt-Schalter, Monitore und Spezial-Steuerelemente wie Lenkrad, Pedale, Getriebe, Handbremse, Blinker und ein Fahrschalter für Züge.
- **Echte Hubs verwenden**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick und Mould King. Siehe [Unterstützte Geräte](/docs/Introducing/SupportedDevices).
- **Ein Gamepad verwenden** (im Xbox- oder PlayStation-Stil) statt des Touchscreens.
- **Sensoren auslesen**: Akku und Neigung des Hubs, Geschwindigkeit und Position von Motoren, Farb- und Abstandssensoren sowie die Neigung Ihres Smartphones.
- **Das Dashboard individuell gestalten** – mit [Themes](/docs/Application/Themes/ThemesOverview).
- **Ihre Profile überall dabeihaben**: Mit einem Konto werden Profile zwischen Ihren Geräten synchronisiert, und Sie können sie im Browser auf [mocpilot.com](/docs/Introducing/WebEditor) bearbeiten.
- **Von einem anderen Gerät aus steuern**: Mit MocPilot Pro verbindet ein Gerät die Hubs, und ein anderes Gerät oder der Web-Editor dient als Fernbedienung.
- **Teilen**: Installieren Sie Profile aus dem [Profilkatalog](/docs/Application/Profiles/Catalog) und veröffentlichen Sie Ihre eigenen.

<Screenshot name="dashboard-run" alt="Ein MOCPilot-Dashboard beim Steuern eines Modells" width={900} />

## Wo MOCPilot läuft {#where-mocpilot-runs}

| Gerät | Layout |
|---|---|
| iPhone und Android-Smartphones | Smartphone-Layout: untere Leiste; ein geöffnetes Profil füllt im Querformat den Bildschirm |
| iPad und Android-Tablets | Tablet-Layout: Seitenleiste, mehr Platz für den Editor |
| Mac- und Windows-Computer | Desktop-Layout: Menüs, Tastenkürzel, das Dashboard in einem eigenen Fenster |
| Browser auf mocpilot.com | [Web-Editor](/docs/Introducing/WebEditor): Profile bearbeiten; die Hubs verbindet die App auf einem anderen Gerät |

Details finden Sie unter [Smartphone, Tablet und Desktop](/docs/Introducing/Layouts).

Hubs, Ihre Profile und heruntergeladene Themes funktionieren auch ohne Internet. Siehe [Offline arbeiten](/docs/Application/Account/Sync#working-offline).

## Wo Sie anfangen {#where-to-start}

1. Lesen Sie [So funktioniert MOCPilot](/docs/Introducing/HowItWorks): fünf Minuten, die alles Weitere leichter machen.
2. Folgen Sie dem [Schnellstart](/docs/Introducing/QuickStart), um Ihr erstes Modell zu steuern.
3. Unsicher, welchen Editor Sie wählen sollen? Einen Vergleich finden Sie unter [Ein Profil erstellen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, das LEGO-Logo, Powered Up und Technic sind Marken der LEGO Gruppe, die MOCPilot weder sponsert noch autorisiert oder unterstützt.
:::
