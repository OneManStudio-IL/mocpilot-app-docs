---
id: RecoveryHubFirmware
title: Obnovenie firmvéru hubu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Obnovenie firmvéru hubu {#hub-firmware-recovery}

Obnovenie firmvéru oživí hub, ktorý sa po prerušenej alebo neúspešnej aktualizácii firmvéru nedokáže normálne spustiť.

MOCPilot nahrá do hubu funkčný firmvér, aby mohol znova bežať a dal sa aktualizovať. Obnovenie použite iba vtedy, keď hub nereaguje normálne, keď MOCPilot ukazuje, že je hub v režime obnovy, alebo po neúspešnej aktualizácii.

:::warning Dôležité
Počas celého obnovenia nechajte hub zapnutý a zariadenie blízko neho. Vypnutie Bluetooth, zatvorenie MOCPilotu, vybratie batérií alebo vypnutie hubu počas nahrávania môže spôsobiť zlyhanie obnovenia.
:::

## Kedy je obnovenie potrebné {#when-recovery-is-required}

Obnovenie môže byť potrebné, ak:

- Aktualizácia firmvéru sa nedokončila úspešne.
- Hub sa už nepripája ako bežný hub.
- Hub sa v MOCPilote zobrazuje ako **LEGO Bootloader**.
- MOCPilot zistí, že hub je pripojený v režime obnovy firmvéru.

Skôr než začnete, uistite sa, že hub má dostatočne nabité batérie, váš telefón, tablet alebo počítač je nabitý a Bluetooth je zapnutý.

## Podporované huby {#supported-hubs}

Obnovenie funguje pre tie isté huby ako aktualizácia firmvéru:

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

## Prepnutie Technic Hubu, Boost Hubu alebo City Hubu do režimu obnovy {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Tieto huby sa pripájajú cez svoj bootloader:

1. Vypnite hub.
2. Stlačte a podržte zelené tlačidlo.
3. Držte tlačidlo, kým LED hubu nezačne blikať nafialovo.
4. Kým LED bliká nafialovo, tlačidlo nepúšťajte.
5. Stále držte tlačidlo, otvorte v MOCPilote **Moje Bluetooth huby** a pripojte sa k hubu.
6. Keď je hub pripojený v režime bootloadera, tlačidlo môžete pustiť.

Keď je hub v režime obnovy, môže sa namiesto svojho bežného názvu zobrazovať ako **LEGO Bootloader**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader v zozname hubov s akciou obnovenia firmvéru" />

## Prepnutie Technic Move Hubu do režimu obnovy {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub sa obnovuje inak: nepripája sa ako **LEGO Bootloader**. Namiesto toho nižšie uvedená sekvencia tlačidla nahrá výrobný firmvér **1.2.3**, ktorý nie je určený na bežné používanie.

Ak chcete jeho firmvér obnoviť:

1. Vypnite hub.
2. Stlačte a podržte zelené tlačidlo.
3. Držte zelené tlačidlo asi jednu minútu.
4. Pustite tlačidlo.
5. Počkajte, kým LED hubu nezačne blikať nabielo.
6. Otvorte v MOCPilote **Moje Bluetooth huby** a pripojte sa k hubu.

Keď sa hub pripojí, MOCPilot rozpozná výrobný firmvér a ponúkne jeho aktualizáciu na najnovšiu verziu. Spustite aktualizáciu a počkajte, kým sa dokončí.

## Spustenie obnovenia z dialógu {#start-recovery-from-the-dialog}

Keď MOCPilot zistí hub pripojený v režime obnovy, zobrazí dialóg obnovenia.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialóg o zistení režimu obnovy hubu" />

Výberom **Obnoviť** spustíte nahrávanie firmvéru do hubu.

Ak ešte nie ste pripravení, vyberte **Zrušiť**. Obnovenie môžete spustiť neskôr z ponuky hubu.

## Spustenie obnovenia z ponuky hubu {#start-recovery-from-the-hub-menu}

Ak chcete obnovenie spustiť sami:

1. Otvorte **Moje Bluetooth huby**.
2. Nájdite hub zobrazený ako **LEGO Bootloader**.
3. Otvorte ponuku hubu.
4. Vyberte **Obnoviť firmvér hubu**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Akcia Obnoviť firmvér hubu v kontextovej ponuke hubu" />

## Počas obnovenia firmvéru {#during-firmware-recovery}

MOCPilot nahrá firmvér do hubu a zobrazuje priebeh.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Obrazovka s priebehom obnovenia firmvéru" />

Počkajte na dokončenie. Neodnášajte hub od zariadenia, nezatvárajte aplikáciu, nevypínajte Bluetooth ani neprerušujte napájanie hubu.

Hub sa môže niekoľkokrát reštartovať alebo znova pripojiť. Je to normálne: nechajte MOCPilot otvorený a počkajte.

## Dokončenie obnovenia {#finish-recovery}

Po dokončení obnovenia MOCPilot zobrazí potvrdenie.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialóg o dokončení obnovenia firmvéru" />

Vyberte **OK**. Hub by sa mal reštartovať a znova pripojiť ako bežný hub namiesto **LEGO Bootloader**.

Potom hub skontrolujte v **Moje Bluetooth huby**. Ak MOCPilot stále žiada aktualizáciu firmvéru, spustite bežnú [aktualizáciu firmvéru](/docs/Application/Hubs/FirmwareUpdating/).

## Ak obnovenie zlyhá {#if-recovery-fails}

Ak obnovenie zlyhá:

1. Držte hub blízko svojho zariadenia.
2. Vypnite a zapnite hub.
3. Znova prepnite hub do režimu obnovy.
4. Pripojte sa v MOCPilote k **LEGO Bootloader**.
5. Znova spustite **Obnoviť firmvér hubu**.

Ak sa chyba objaví znova, zopakujte celý postup. Ak zlyhá niekoľko pokusov, vymeňte alebo nabite batérie a skúste to znova.
