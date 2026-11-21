---
id: FirmwareUpdating
title: Aktualizácia firmvéru
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Aktualizácia firmvéru {#firmware-updating}

MOCPilot dokáže aktualizovať firmvér podporovaných hubov LEGO® Powered Up, keď je k dispozícii novšia kompatibilná verzia.

Niektoré huby potrebujú aktualizáciu, aby s MOCPilotom fungovali správne: novší firmvér opravuje chyby hubu a pridáva funkcie, na ktoré sa aplikácia spolieha.

## Podporované huby {#supported-hubs}

MOCPilot dokáže aktualizovať tieto huby:

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

## Skôr než začnete {#before-you-start}

Uistite sa, že hub aj váš telefón, tablet alebo počítač majú dostatočne nabitú batériu.

Počas celej aktualizácie nechajte hub zapnutý a zariadenie držte blízko neho, aby bolo pripojenie Bluetooth stabilné. Kým sa firmvér nahráva, nezatvárajte MOCPilot, nevypínajte Bluetooth ani hub.

:::warning Dôležité
Prerušená aktualizácia môže v hube zanechať neúplný firmvér. Hub potom môže pred ďalším použitím potrebovať obnovenie firmvéru.
:::

## Spustenie aktualizácie {#starting-the-update}

Keď pripojíte hub, MOCPilot skontroluje verziu jeho firmvéru. Ak je potrebná novšia verzia, aplikácia zobrazí dialóg **Vyžaduje sa aktualizácia firmvéru**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialóg Vyžaduje sa aktualizácia firmvéru" />

Výberom **Aktualizovať** spustíte aktualizáciu firmvéru okamžite.

Ak chcete aktualizovať neskôr, vyberte **Zrušiť**. Aktualizáciu môžete kedykoľvek spustiť z ponuky hubu.

## Neskoršia aktualizácia z ponuky hubu {#updating-later-from-the-hub-menu}

Ak chcete aktualizáciu spustiť sami:

1. Otvorte **Moje Bluetooth huby**.
2. Nájdite hub, ktorý potrebuje aktualizáciu.
3. Otvorte ponuku hubu.
4. Vyberte **Aktualizovať firmvér**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Akcia Aktualizovať firmvér v kontextovej ponuke hubu" />

## Počas aktualizácie firmvéru {#during-the-firmware-update}

MOCPilot nahrá firmvér do hubu a zobrazuje priebeh.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Obrazovka s priebehom aktualizácie firmvéru" />

Počkajte, kým sa nahrávanie dokončí. Počas použitia nového firmvéru sa hub môže na chvíľu reštartovať alebo odpojiť.

Potom MOCPilot hub znova vyhľadá. Držte hub nablízku a počkajte, kým sa aplikácia znova pripojí.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmvér je nahraný, prebieha hľadanie hubu" />

## Dokončenie aktualizácie {#finishing-the-update}

Po dokončení aktualizácie MOCPilot zobrazí potvrdenie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialóg o dokončení aktualizácie firmvéru" />

Vyberte **OK**. Hub sa znova pripojí a na jeho karte sa zobrazí nová verzia firmvéru.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Karta hubu s aktualizovanou verziou firmvéru" />

Teraz môžete hub ďalej používať s MOCPilotom.

## Ak aktualizácia zlyhá {#if-the-update-fails}

Ak aktualizácia zlyhá, MOCPilot zobrazí chybové hlásenie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialóg o zlyhaní aktualizácie firmvéru" />

Najprv hub vypnite a zapnite a spustite aktualizáciu znova:

1. Vypnite hub.
2. Znova hub zapnite.
3. Držte hub blízko svojho zariadenia.
4. Pripojte sa k hubu v MOCPilote.
5. Znova spustite aktualizáciu firmvéru.

Ak hub ani potom nereaguje normálne, môže potrebovať obnovenie firmvéru: pozrite si [Obnovenie firmvéru hubu](/docs/Application/Hubs/RecoveryHubFirmware/).
