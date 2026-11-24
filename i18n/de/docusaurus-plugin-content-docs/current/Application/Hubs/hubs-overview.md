---
id: HubsOverview
title: Hubs
description: "Hubs in MOCPilot-Profilen: unterstützte Hubs, Hub-Slots und was jeder Hub kann."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs {#hubs}

Ein **Hub** ist der Bluetooth-Stein Ihres Modells: Motoren, Lichter und Sensoren werden an seine Ports angeschlossen, und MOCPilot spricht per Bluetooth mit ihm.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/spike_hub_p.webp')} alt="SPIKE Prime Hub" style={{maxWidth: 110}} /><div>SPIKE Prime</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/essential_hub_p.webp')} alt="SPIKE Essential Hub" style={{maxWidth: 110}} /><div>SPIKE Essential</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Unterstützte Hubs {#supported-hubs}

| Hub | Hinweise |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 Ports, Neigungs- und Beschleunigungssensoren |
| LEGO® Technic™ Move Hub | in den ferngesteuerten LEGO Technic-Autos; Antrieb, Lenkung, Licht; [Konfigurationen](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 Ports, Züge und City-Sets |
| LEGO® Move Hub / BOOST (88006) | 2 eingebaute Motoren + 2 Ports |
| LEGO® Remote Control (88010) | ihre Tasten sind Eingänge |
| LEGO® WeDo 2.0 Smart Hub | 2 Ports |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 Ports, Lichtmatrix, Lautsprecher, Gyroskop; Bluetooth oder USB; nicht auf iPhone und iPad |
| LEGO® SPIKE™ Prime Hub (45601) | Beta; derselbe Hub wie Robot Inventor mit der Firmware SPIKE Legacy; Bluetooth oder USB; nicht auf iPhone und iPad |
| LEGO® SPIKE™ Essential Hub (45609) | Beta; 2 Ports, Licht, Neigung und Beschleunigung; Bluetooth Low Energy |
| BuWizz 2.0 | 4 Ports, Leistungsmodi |
| BuWizz 3.0 Pro | 6 Ports, Port-LEDs mit Farbe |
| SBrick, SBrick Plus | 4 Ports, Geschwindigkeitsregelung, keine Positionssteuerung |
| Mould King 4.0, 6.0 | 4 oder 6 Ports, nur Befehle, Steuerkanäle |

Vollständige Liste mit Motoren und Sensoren: [Unterstützte Geräte](/docs/Introducing/SupportedDevices).

## Hub-Slots {#hub-slots}

Jedes Profil hat **5 Hub-Slots**:

- **2 Slots sind kostenlos**;
- **3 weitere** schalten Sie mit **Slot freischalten** frei (ein Kauf *Zusätzlicher Hub-Slot* pro Slot) oder alle auf einmal mit [MocPilot Pro](/docs/Application/Account/Pro).

Gekaufte Slots gehören zu Ihrem Konto und gelten in all Ihren Profilen.

Grenzen für Mould King: ein Mould-King-Typ pro Profil, mit bis zu 3 Mould King 4.0 oder 1 Mould King 6.0 (sie teilen sich den Bluetooth-Advertising-Sender des Telefons).

## Hubs im Programm {#hubs-in-the-program}

- Im Editor **Schnellverknüpfungen** erscheint jeder Hub des Profils in der Palette als Ausgang **Hub** und als Eingang **Hub** für seine Tasten und Sensoren. Aktionen, die kein Hub des Profils ausführen kann, werden nicht angeboten. Siehe [Hub-Block und Ports](/docs/Application/Links/HubsAndPorts).
- Im Editor **Logikblöcke** erhalten Motor-, Licht- und Sensorblöcke den Hub-Slot und den Port. Siehe [Motoren](/docs/Application/BlockBuilder/Blocks/Motors).

## Mehr dazu {#read-more}

- [Hub hinzufügen und verbinden](/docs/Application/Hubs/ConnectingHubs)
- [Hub-spezifische Funktionen](/docs/Application/Hubs/HubFunctions)
- [Firmware aktualisieren](/docs/Application/Hubs/FirmwareUpdating) und [Firmware wiederherstellen](/docs/Application/Hubs/RecoveryHubFirmware)
