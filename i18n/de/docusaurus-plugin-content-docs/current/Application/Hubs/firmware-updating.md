---
id: FirmwareUpdating
title: Firmware aktualisieren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Firmware aktualisieren {#firmware-updating}

MOCPilot kann die Firmware unterstützter LEGO® Powered Up-Hubs aktualisieren, wenn eine neuere kompatible Version verfügbar ist.

Manche Hubs brauchen ein Update, bevor sie richtig mit MOCPilot funktionieren: Neuere Firmware behebt Fehler im Hub und bringt Funktionen mit, auf die die App angewiesen ist.

## Unterstützte Hubs {#supported-hubs}

MOCPilot kann diese Hubs aktualisieren:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Bevor Sie beginnen {#before-you-start}

Achten Sie darauf, dass der Hub und Ihr Telefon, Tablet oder Computer genug Akkuladung haben.

Lassen Sie den Hub während des gesamten Updates eingeschaltet und halten Sie Ihr Gerät in seiner Nähe, damit die Bluetooth-Verbindung stabil bleibt. Schließen Sie MOCPilot nicht, schalten Sie Bluetooth nicht aus und schalten Sie den Hub nicht ab, während die Firmware hochgeladen wird.

:::warning Wichtig
Ein unterbrochenes Update kann den Hub mit unvollständiger Firmware zurücklassen. Dann muss die Firmware des Hubs eventuell wiederhergestellt werden, bevor Sie ihn wieder verwenden können.
:::

## Update starten {#starting-the-update}

Wenn Sie einen Hub verbinden, prüft MOCPilot seine Firmware-Version. Ist eine neuere Version erforderlich, zeigt die App den Dialog **Firmware-Update erforderlich**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialog „Firmware-Update erforderlich“" />

Wählen Sie **Aktualisieren**, um das Firmware-Update sofort zu starten.

Um später zu aktualisieren, wählen Sie **Abbrechen**. Sie können das Update jederzeit über das Hub-Menü starten.

## Später über das Hub-Menü aktualisieren {#updating-later-from-the-hub-menu}

So starten Sie das Update selbst:

1. Öffnen Sie **Meine Bluetooth-Hubs**.
2. Suchen Sie den Hub, der aktualisiert werden muss.
3. Öffnen Sie das Hub-Menü.
4. Wählen Sie **Firmware aktualisieren**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Aktion „Firmware aktualisieren“ im Kontextmenü des Hubs" />

## Während des Firmware-Updates {#during-the-firmware-update}

MOCPilot lädt die Firmware auf den Hub und zeigt den Fortschritt an.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Fortschrittsanzeige des Firmware-Updates" />

Warten Sie, bis der Upload abgeschlossen ist. Der Hub kann kurz neu starten oder die Verbindung trennen, während die neue Firmware übernommen wird.

Danach sucht MOCPilot erneut nach dem Hub. Halten Sie den Hub in der Nähe und warten Sie, bis sich die App wieder verbindet.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware hochgeladen, Suche nach dem Hub" />

## Update abschließen {#finishing-the-update}

Wenn das Update fertig ist, zeigt MOCPilot eine Bestätigung.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialog „Firmware-Update abgeschlossen“" />

Wählen Sie **OK**. Der Hub verbindet sich wieder, und seine Karte zeigt die neue Firmware-Version.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hub-Karte mit der aktualisierten Firmware-Version" />

Sie können den Hub jetzt weiter mit MOCPilot verwenden.

## Wenn das Update fehlschlägt {#if-the-update-fails}

Schlägt das Update fehl, zeigt MOCPilot eine Fehlermeldung.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialog „Firmware-Update fehlgeschlagen“" />

Schalten Sie den Hub zuerst aus und wieder ein und führen Sie das Update erneut aus:

1. Schalten Sie den Hub aus.
2. Schalten Sie den Hub wieder ein.
3. Halten Sie den Hub nah an Ihrem Gerät.
4. Verbinden Sie den Hub in MOCPilot.
5. Starten Sie das Firmware-Update erneut.

Reagiert der Hub danach immer noch nicht normal, muss seine Firmware eventuell wiederhergestellt werden: siehe [Firmware-Wiederherstellung des Hubs](/docs/Application/Hubs/RecoveryHubFirmware/).
