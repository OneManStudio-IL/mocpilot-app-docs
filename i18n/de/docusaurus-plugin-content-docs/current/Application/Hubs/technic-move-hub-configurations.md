---
id: TechnicMoveHubConfigurations
title: Konfigurationen des Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfigurationen des Technic Move Hub {#technic-move-hub-configurations}

## Überblick {#overview}

Anders als andere LEGO® Powered Up-Hubs verhält sich der Technic Move Hub je nach der in ihn geladenen Konfiguration unterschiedlich.

MOCPilot kann diese Konfiguration ändern, damit der Hub zu dem offiziellen LEGO-Set passt, das Sie steuern möchten.

## Unterstützte Konfigurationen {#supported-configurations}

MOCPilot kennt diese Konfigurationen:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Konfigurationsoptionen des Technic Move Hub im Block „Hub-Konfiguration einstellen“" />

## Konfiguration unter „Meine Bluetooth-Hubs“ ändern {#change-configuration-from-my-bluetooth-hubs}

So ändern Sie die Konfiguration auf der Seite **Meine Bluetooth-Hubs**:

1. Öffnen Sie **Meine Bluetooth-Hubs**.
2. Suchen Sie den Technic Move Hub.
3. Öffnen Sie das Hub-Menü.
4. Wählen Sie **Konfiguration auswählen**.
5. Wählen Sie die Konfiguration.
6. Bestätigen Sie im Dialog.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Kontextmenü des Technic Move Hub mit der Aktion „Konfiguration auswählen“" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Untermenü der Konfigurationen des Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Bestätigungsdialog zur Neukonfiguration des Technic Move Hub" />

:::warning Wichtig
Beim Ändern der Konfiguration wird ein Programm in den Hub geschrieben, ähnlich wie bei einem Firmware-Update.

Lassen Sie den Hub während des gesamten Vorgangs eingeschaltet, und halten Sie Ihr Telefon, Tablet oder Ihren Computer eingeschaltet und nah am Hub, damit die Bluetooth-Verbindung stabil bleibt. Schließen Sie MOCPilot nicht, schalten Sie Bluetooth nicht aus und schalten Sie den Hub nicht ab, während die Konfiguration geändert wird.

Eine unterbrochene Änderung kann die Firmware des Hubs beschädigen. Dann ist eventuell eine [Firmware-Wiederherstellung](/docs/Application/Hubs/RecoveryHubFirmware/) nötig, bevor Sie den Hub wieder verwenden können.
:::

Während die Konfiguration geändert wird, ignoriert der Hub normale Befehle, und seine LED wechselt durch verschiedene Farben. Sobald die neue Konfiguration aktiv ist, startet der Hub neu.

## Konfigurationsblöcke {#configuration-blocks}

Logikblöcke können die Konfiguration lesen und ändern, während ein Programm läuft.

### Hub-Konfiguration einstellen {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Block „Hub-Konfiguration einstellen“" />

Der Block **Hub-Konfiguration einstellen** lädt eine der unterstützten Konfigurationen in den ausgewählten Hub.

- Hub-Auswahl: wählt den Hub, der neu konfiguriert wird.
- Konfigurationsauswahl: wählt die Zielkonfiguration.
- Verfügbare Konfigurationen für den Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** und **Batmobile™ Tumbler**.

Siehe die [Dokumentation zum Block „Hub-Konfiguration einstellen“](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hub-Konfiguration {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Werteblock „Hub-Konfiguration“" />

Der Block **Hub-Konfiguration** liefert die aktuelle Konfiguration des ausgewählten Hubs.

- Hub-Auswahl: wählt den Hub, der gelesen wird.
- Ausgabeformat: **Text** liefert den Namen der Konfiguration.
- Ausgabeformat: **index** liefert die Nummer der Konfiguration, was für Vergleiche in Bedingungen praktisch ist.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Optionen für das Ausgabeformat des Blocks „Hub-Konfiguration“" />

Siehe die [Dokumentation zum Block „Hub-Konfiguration“](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Kraftimpuls {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Block „Leistungsimpuls“ des Technic Move Hub" />

Der Block **Leistungsimpuls** sendet einen Kraftimpuls an den ausgewählten Technic Move Hub. Er funktioniert nur mit der Konfiguration **Batmobile™ Tumbler**.

Der Hub lässt die Motoren dann kurz, etwa 1–2 Sekunden, mit maximaler Leistung und Geschwindigkeit laufen. In den Schnellverknüpfungen ist dieselbe Funktion die Aktion [Kraftimpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Siehe die [Dokumentation zum Block „Leistungsimpuls“](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Konfiguration während der Programmausführung ändern {#change-configuration-during-program-runtime}

Ein Programm kann die Konfiguration auch während der Ausführung ändern. Ein typisches Vorgehen:

1. Lesen Sie die aktuelle Hub-Konfiguration.
2. Vergleichen Sie sie mit der Konfiguration, die das Profil benötigt.
3. Weicht die Konfiguration ab, stellen Sie die benötigte Konfiguration ein.
4. Lesen Sie die Konfiguration nach der Neukonfiguration erneut.
5. Fahren Sie erst fort, wenn der Hub die erwartete Konfiguration meldet.
6. Trennen Sie die Verbindung oder stoppen Sie das Programm, wenn die benötigte Konfiguration nicht übernommen wurde.

Das fertige Profil für diesen Hub zeigt, wie das geht.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Blockbeispiel für die Änderung der Technic Move Hub-Konfiguration zur Laufzeit" />
