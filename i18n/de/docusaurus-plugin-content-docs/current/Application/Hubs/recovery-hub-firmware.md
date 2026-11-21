---
id: RecoveryHubFirmware
title: Firmware-Wiederherstellung des Hubs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Firmware-Wiederherstellung des Hubs {#hub-firmware-recovery}

Die Firmware-Wiederherstellung bringt einen Hub zurück, der nach einem unterbrochenen oder fehlgeschlagenen Firmware-Update nicht mehr normal startet.

MOCPilot lädt eine funktionierende Firmware auf den Hub, damit er wieder läuft und erneut aktualisiert werden kann. Verwenden Sie die Wiederherstellung nur, wenn der Hub nicht normal reagiert, wenn MOCPilot anzeigt, dass der Hub im Wiederherstellungsmodus ist, oder nach einem fehlgeschlagenen Update.

:::warning Wichtig
Lassen Sie den Hub während der gesamten Wiederherstellung eingeschaltet und Ihr Gerät in seiner Nähe. Wenn Sie während des Uploads Bluetooth ausschalten, MOCPilot schließen, die Batterien entnehmen oder den Hub ausschalten, kann die Wiederherstellung fehlschlagen.
:::

## Wann eine Wiederherstellung nötig ist {#when-recovery-is-required}

Eine Wiederherstellung kann nötig sein, wenn:

- ein Firmware-Update nicht erfolgreich abgeschlossen wurde;
- sich der Hub nicht mehr als normaler Hub verbindet;
- der Hub in MOCPilot als **LEGO Bootloader** erscheint;
- MOCPilot erkennt, dass der Hub im Firmware-Wiederherstellungsmodus verbunden ist.

Achten Sie vor dem Start darauf, dass der Hub genug Akkuladung hat, Ihr Telefon, Tablet oder Computer geladen ist und Bluetooth eingeschaltet ist.

## Unterstützte Hubs {#supported-hubs}

Die Wiederherstellung funktioniert mit denselben Hubs wie das Firmware-Update:

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

## Technic Hub, Boost Hub oder City Hub in den Wiederherstellungsmodus versetzen {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Diese Hubs verbinden sich über ihren Bootloader:

1. Schalten Sie den Hub aus.
2. Halten Sie die grüne Taste gedrückt.
3. Halten Sie die Taste weiter gedrückt, bis die LED des Hubs violett zu blinken beginnt.
4. Lassen Sie die Taste nicht los, solange die LED violett blinkt.
5. Öffnen Sie, während Sie die Taste weiter gedrückt halten, in MOCPilot **Meine Bluetooth-Hubs** und verbinden Sie den Hub.
6. Sobald der Hub im Bootloader-Modus verbunden ist, können Sie die Taste loslassen.

Im Wiederherstellungsmodus erscheint der Hub eventuell als **LEGO Bootloader** statt unter seinem normalen Namen.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub „LEGO Bootloader“ in der Hub-Liste mit der Aktion zur Firmware-Wiederherstellung" />

## Technic Move Hub in den Wiederherstellungsmodus versetzen {#put-a-technic-move-hub-into-recovery-mode}

Beim Technic Move Hub läuft die Wiederherstellung anders: Er verbindet sich nicht als **LEGO Bootloader**. Stattdessen lädt die folgende Tastenfolge die Werksfirmware **1.2.3**, die nicht für den täglichen Gebrauch gedacht ist.

So stellen Sie seine Firmware wieder her:

1. Schalten Sie den Hub aus.
2. Halten Sie die grüne Taste gedrückt.
3. Halten Sie die grüne Taste etwa eine Minute lang gedrückt.
4. Lassen Sie die Taste los.
5. Warten Sie, bis die LED des Hubs weiß zu blinken beginnt.
6. Öffnen Sie in MOCPilot **Meine Bluetooth-Hubs** und verbinden Sie den Hub.

Sobald sich der Hub verbindet, erkennt MOCPilot die Werksfirmware und bietet an, sie auf die neueste Version zu aktualisieren. Starten Sie das Update und warten Sie, bis es abgeschlossen ist.

## Wiederherstellung über den Dialog starten {#start-recovery-from-the-dialog}

Erkennt MOCPilot einen Hub, der im Wiederherstellungsmodus verbunden ist, wird ein Wiederherstellungsdialog angezeigt.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialog: Wiederherstellungsmodus des Hubs erkannt" />

Wählen Sie **Wiederherstellen**, um mit dem Hochladen der Firmware auf den Hub zu beginnen.

Wenn Sie noch nicht bereit sind, wählen Sie **Abbrechen**. Sie können die Wiederherstellung später über das Hub-Menü starten.

## Wiederherstellung über das Hub-Menü starten {#start-recovery-from-the-hub-menu}

So starten Sie die Wiederherstellung selbst:

1. Öffnen Sie **Meine Bluetooth-Hubs**.
2. Suchen Sie den Hub, der als **LEGO Bootloader** angezeigt wird.
3. Öffnen Sie das Hub-Menü.
4. Wählen Sie **Hub-Firmware wiederherstellen**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Aktion „Hub-Firmware wiederherstellen“ im Kontextmenü des Hubs" />

## Während der Firmware-Wiederherstellung {#during-firmware-recovery}

MOCPilot lädt die Firmware auf den Hub und zeigt den Fortschritt an.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Fortschrittsanzeige der Firmware-Wiederherstellung" />

Warten Sie, bis der Vorgang abgeschlossen ist. Entfernen Sie den Hub nicht von Ihrem Gerät, schließen Sie die App nicht, schalten Sie Bluetooth nicht aus und unterbrechen Sie nicht die Stromversorgung des Hubs.

Der Hub kann mehrmals neu starten oder sich neu verbinden. Das ist normal: Lassen Sie MOCPilot geöffnet und warten Sie.

## Wiederherstellung abschließen {#finish-recovery}

Wenn die Wiederherstellung fertig ist, zeigt MOCPilot eine Bestätigung.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialog: Firmware-Wiederherstellung abgeschlossen" />

Wählen Sie **OK**. Der Hub sollte neu starten und sich wieder als normaler Hub verbinden statt als **LEGO Bootloader**.

Prüfen Sie den Hub anschließend unter **Meine Bluetooth-Hubs**. Fordert MOCPilot weiterhin ein Firmware-Update an, führen Sie ein normales [Firmware-Update](/docs/Application/Hubs/FirmwareUpdating/) durch.

## Wenn die Wiederherstellung fehlschlägt {#if-recovery-fails}

Wenn die Wiederherstellung fehlschlägt:

1. Halten Sie den Hub nah an Ihrem Gerät.
2. Schalten Sie den Hub aus und wieder ein.
3. Versetzen Sie den Hub erneut in den Wiederherstellungsmodus.
4. Verbinden Sie sich in MOCPilot mit **LEGO Bootloader**.
5. Starten Sie **Hub-Firmware wiederherstellen** erneut.

Erscheint der Fehler wieder, wiederholen Sie den gesamten Ablauf. Schlagen mehrere Versuche fehl, tauschen oder laden Sie die Batterien und versuchen Sie es erneut.
