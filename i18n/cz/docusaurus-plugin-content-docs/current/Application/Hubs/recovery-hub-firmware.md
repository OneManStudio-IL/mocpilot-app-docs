---
id: RecoveryHubFirmware
title: Obnova firmwaru hubu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Obnova firmwaru hubu {#hub-firmware-recovery}

Obnova firmwaru oživí hub, který se po přerušené nebo neúspěšné aktualizaci firmwaru nedokáže normálně spustit.

MOCPilot nahraje do hubu funkční firmware, aby mohl běžet a dal se znovu aktualizovat. Obnovu používejte jen tehdy, když hub nereaguje normálně, když MOCPilot ukazuje, že je hub v režimu obnovy, nebo po neúspěšné aktualizaci.

:::warning Důležité
Po celou dobu obnovy nechte hub zapnutý a zařízení blízko něj. Vypnutí Bluetooth, zavření MOCPilotu, vyjmutí baterií nebo vypnutí hubu během nahrávání může způsobit, že obnova selže.
:::

## Kdy je obnova potřeba {#when-recovery-is-required}

Obnovu můžete potřebovat, pokud:

- Aktualizace firmwaru neskončila úspěšně.
- Hub se už nepřipojuje jako běžný hub.
- Hub se v MOCPilotu zobrazuje jako **LEGO Bootloader**.
- MOCPilot zjistí, že je hub připojen v režimu obnovy firmwaru.

Než začnete, ujistěte se, že má hub dostatečně nabité baterie, váš telefon, tablet nebo počítač je nabitý a Bluetooth je zapnutý.

## Podporované huby {#supported-hubs}

Obnova funguje pro stejné huby jako aktualizace firmwaru:

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

## Přepnutí Technic Hubu, Boost Hubu nebo City Hubu do režimu obnovy {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Tyto huby se připojují přes svůj bootloader:

1. Vypněte hub.
2. Stiskněte a podržte zelené tlačítko.
3. Držte tlačítko, dokud LED hubu nezačne blikat fialově.
4. Dokud LED bliká fialově, tlačítko nepouštějte.
5. Stále držte tlačítko, otevřete v MOCPilotu **Moje Bluetooth huby** a připojte se k hubu.
6. Jakmile je hub připojen v režimu bootloaderu, můžete tlačítko pustit.

V režimu obnovy se hub může místo svého běžného názvu zobrazovat jako **LEGO Bootloader**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader v seznamu hubů s akcí obnovy firmwaru" />

## Přepnutí Technic Move Hubu do režimu obnovy {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub se obnovuje jinak: nepřipojuje se jako **LEGO Bootloader**. Níže uvedená sekvence tlačítek místo toho nahraje tovární firmware **1.2.3**, který není určen pro běžné používání.

Firmware obnovíte takto:

1. Vypněte hub.
2. Stiskněte a podržte zelené tlačítko.
3. Držte zelené tlačítko asi jednu minutu.
4. Pusťte tlačítko.
5. Počkejte, až LED hubu začne blikat bíle.
6. Otevřete v MOCPilotu **Moje Bluetooth huby** a připojte se k hubu.

Po připojení hubu MOCPilot rozpozná tovární firmware a nabídne jeho aktualizaci na nejnovější verzi. Spusťte aktualizaci a počkejte na její dokončení.

## Spuštění obnovy z dialogu {#start-recovery-from-the-dialog}

Když MOCPilot zjistí hub připojený v režimu obnovy, zobrazí dialog obnovy.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialog o zjištění režimu obnovy hubu" />

Vyberte **Obnovit** a začne nahrávání firmwaru do hubu.

Pokud nejste připraveni, vyberte **Zrušit**. Obnovu můžete spustit později z nabídky hubu.

## Spuštění obnovy z nabídky hubu {#start-recovery-from-the-hub-menu}

Obnovu spustíte sami takto:

1. Otevřete **Moje Bluetooth huby**.
2. Najděte hub zobrazený jako **LEGO Bootloader**.
3. Otevřete nabídku hubu.
4. Vyberte **Obnovit firmware hubu**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Akce Obnovit firmware hubu v kontextové nabídce hubu" />

## Během obnovy firmwaru {#during-firmware-recovery}

MOCPilot nahraje firmware do hubu a zobrazuje průběh.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Obrazovka s průběhem obnovy firmwaru" />

Počkejte, až bude hotovo. Neodnášejte hub od zařízení, nezavírejte aplikaci, nevypínejte Bluetooth a neodpojujte napájení hubu.

Hub se může několikrát restartovat nebo znovu připojit. To je normální: nechte MOCPilot otevřený a počkejte.

## Dokončení obnovy {#finish-recovery}

Po dokončení obnovy zobrazí MOCPilot potvrzení.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialog o dokončení obnovy firmwaru" />

Vyberte **OK**. Hub by se měl restartovat a znovu připojit jako běžný hub místo **LEGO Bootloader**.

Potom hub zkontrolujte v **Moje Bluetooth huby**. Pokud MOCPilot stále žádá aktualizaci firmwaru, proveďte běžnou [aktualizaci firmwaru](/docs/Application/Hubs/FirmwareUpdating/).

## Pokud obnova selže {#if-recovery-fails}

Pokud obnova selže:

1. Držte hub blízko svého zařízení.
2. Hub vypněte a zapněte.
3. Znovu hub přepněte do režimu obnovy.
4. Připojte se v MOCPilotu k **LEGO Bootloader**.
5. Znovu spusťte **Obnovit firmware hubu**.

Pokud se chyba objeví znovu, zopakujte celý postup. Pokud selže několik pokusů, vyměňte nebo nabijte baterie a zkuste to znovu.
