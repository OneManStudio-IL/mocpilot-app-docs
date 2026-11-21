---
id: TechnicMoveHubConfigurations
title: Konfigurácie Technic Move Hubu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfigurácie Technic Move Hubu {#technic-move-hub-configurations}

## Prehľad {#overview}

Na rozdiel od ostatných hubov LEGO® Powered Up sa Technic Move Hub správa rôzne podľa toho, aká konfigurácia je v ňom nahraná.

MOCPilot dokáže túto konfiguráciu zmeniť tak, aby hub zodpovedal oficiálnej sade LEGO, ktorú chcete ovládať.

## Podporované konfigurácie {#supported-configurations}

MOCPilot pozná tieto konfigurácie:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Možnosti konfigurácie Technic Move Hubu v bloku nastavenia konfigurácie hubu" />

## Zmena konfigurácie v Moje Bluetooth huby {#change-configuration-from-my-bluetooth-hubs}

Ak chcete zmeniť konfiguráciu na stránke **Moje Bluetooth huby**:

1. Otvorte **Moje Bluetooth huby**.
2. Nájdite Technic Move Hub.
3. Otvorte ponuku hubu.
4. Vyberte **Vybrať konfiguráciu**.
5. Zvoľte konfiguráciu.
6. Potvrďte ju v dialógu.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Kontextová ponuka Technic Move Hubu s akciou Vybrať konfiguráciu" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Podponuka konfigurácií Technic Move Hubu" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialóg na potvrdenie prekonfigurovania Technic Move Hubu" />

:::warning Dôležité
Zmena konfigurácie zapisuje do hubu program, podobne ako aktualizácia firmvéru.

Počas celého procesu nechajte hub zapnutý a telefón, tablet alebo počítač zapnutý a blízko hubu, aby bolo pripojenie Bluetooth stabilné. Kým sa konfigurácia mení, nezatvárajte MOCPilot, nevypínajte Bluetooth ani hub.

Prerušená zmena môže poškodiť firmvér hubu. Hub potom môže pred ďalším použitím potrebovať [obnovenie firmvéru](/docs/Application/Hubs/RecoveryHubFirmware/).
:::

Kým sa konfigurácia mení, hub ignoruje bežné príkazy a jeho LED postupne mení farby. Keď je nová konfigurácia nahraná, hub sa reštartuje.

## Bloky konfigurácie {#configuration-blocks}

Logické bloky dokážu počas behu programu konfiguráciu čítať aj meniť.

### Nastaviť konfiguráciu hubu {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blok nastavenia konfigurácie hubu" />

Blok **Nastaviť konfiguráciu hubu** nahrá do vybraného hubu jednu z podporovaných konfigurácií.

- Výber hubu: určuje hub, ktorý sa má prekonfigurovať.
- Výber konfigurácie: určuje cieľovú konfiguráciu.
- Konfigurácie dostupné pre Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** a **Batmobile™ Tumbler**.

Pozrite si [dokumentáciu bloku nastavenia konfigurácie hubu](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Konfigurácia hubu {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Hlásiaci blok konfigurácie hubu" />

Blok **Konfigurácia hubu** vracia aktuálnu konfiguráciu vybraného hubu.

- Výber hubu: určuje hub, ktorý sa má čítať.
- Formát výstupu: **text** vracia názov konfigurácie.
- Formát výstupu: **index** vracia index konfigurácie, čo sa hodí na porovnávanie v podmienkach.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Možnosti formátu výstupu bloku konfigurácie hubu" />

Pozrite si [dokumentáciu bloku konfigurácie hubu](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Výkonový impulz {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blok výkonového impulzu Technic Move Hubu" />

Blok **Výkonový impulz** pošle vybranému Technic Move Hubu výkonový impulz. Funguje iba s konfiguráciou **Batmobile™ Tumbler**.

Hub potom na krátky čas, asi 1–2 sekundy, poháňa motory maximálnym výkonom a rýchlosťou. V Rýchlych prepojeniach je rovnaká funkcia operácia [Výkonový impulz](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Pozrite si [dokumentáciu bloku výkonového impulzu](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Zmena konfigurácie počas behu programu {#change-configuration-during-program-runtime}

Program môže konfiguráciu zmeniť aj počas behu. Typický postup:

1. Prečítajte aktuálnu konfiguráciu hubu.
2. Porovnajte ju s konfiguráciou, ktorú vyžaduje profil.
3. Ak sa konfigurácia líši, nastavte požadovanú konfiguráciu.
4. Po prekonfigurovaní konfiguráciu prečítajte znova.
5. Pokračujte, až keď hub hlási očakávanú konfiguráciu.
6. Ak sa požadovaná konfigurácia nepoužila, odpojte sa alebo zastavte program.

Ukážkový profil pre tento hub ukazuje, ako na to.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Príklad blokov so zmenou konfigurácie Technic Move Hubu počas behu" />
