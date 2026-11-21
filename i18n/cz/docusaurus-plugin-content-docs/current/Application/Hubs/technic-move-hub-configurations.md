---
id: TechnicMoveHubConfigurations
title: Konfigurace Technic Move Hubu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfigurace Technic Move Hubu {#technic-move-hub-configurations}

## Přehled {#overview}

Na rozdíl od ostatních hubů LEGO® Powered Up se Technic Move Hub chová různě podle toho, jaká konfigurace je do něj nahraná.

MOCPilot umí tuto konfiguraci změnit, aby hub odpovídal oficiální sadě LEGO, kterou chcete ovládat.

## Podporované konfigurace {#supported-configurations}

MOCPilot zná tyto konfigurace:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Možnosti konfigurace Technic Move Hubu v bloku nastavení konfigurace hubu" />

## Změna konfigurace v Moje Bluetooth huby {#change-configuration-from-my-bluetooth-hubs}

Konfiguraci na stránce **Moje Bluetooth huby** změníte takto:

1. Otevřete **Moje Bluetooth huby**.
2. Najděte Technic Move Hub.
3. Otevřete nabídku hubu.
4. Vyberte **Vybrat konfiguraci**.
5. Zvolte konfiguraci.
6. Potvrďte v dialogu.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Kontextová nabídka Technic Move Hubu s akcí Vybrat konfiguraci" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Podnabídka konfigurací Technic Move Hubu" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialog pro potvrzení změny konfigurace Technic Move Hubu" />

:::warning Důležité
Změna konfigurace zapisuje do hubu program, podobně jako aktualizace firmwaru.

Po celou dobu nechte hub zapnutý a telefon, tablet nebo počítač zapnutý a blízko hubu, aby spojení přes Bluetooth zůstalo stabilní. Během změny konfigurace nezavírejte MOCPilot, nevypínejte Bluetooth ani hub.

Přerušená změna může poškodit firmware hubu. Hub pak může před dalším použitím potřebovat [obnovu firmwaru](/docs/Application/Hubs/RecoveryHubFirmware/).
:::

Během změny konfigurace hub ignoruje běžné příkazy a jeho LED postupně mění barvy. Jakmile je nová konfigurace nahraná, hub se restartuje.

## Bloky konfigurace {#configuration-blocks}

Logické bloky umí konfiguraci číst a měnit za běhu programu.

### Nastavit konfiguraci hubu {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blok nastavení konfigurace hubu" />

Blok **Nastavit konfiguraci hubu** nahraje do vybraného hubu jednu z podporovaných konfigurací.

- Výběr hubu: určuje hub, který se má překonfigurovat.
- Výběr konfigurace: určuje cílovou konfiguraci.
- Dostupné konfigurace pro Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** a **Batmobile™ Tumbler**.

Viz [dokumentace bloku nastavení konfigurace hubu](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Konfigurace hubu {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Hodnotový blok konfigurace hubu" />

Blok **Konfigurace hubu** vrací aktuální konfiguraci vybraného hubu.

- Výběr hubu: určuje hub, ze kterého se čte.
- Formát výstupu: **text** vrací název konfigurace.
- Formát výstupu: **index** vrací index konfigurace, což se hodí pro porovnávání v podmínkách.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Možnosti formátu výstupu bloku konfigurace hubu" />

Viz [dokumentace bloku konfigurace hubu](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Výkonový pulz {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blok výkonového pulzu Technic Move Hubu" />

Blok **Výkonový pulz** pošle vybranému Technic Move Hubu výkonový pulz. Funguje jen s konfigurací **Batmobile™ Tumbler**.

Hub pak na krátkou dobu, asi 1–2 sekundy, pohání motory maximálním výkonem a rychlostí. V Rychlých propojeních odpovídá této funkci operace [Výkonový pulz](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Viz [dokumentace bloku výkonového pulzu](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Změna konfigurace za běhu programu {#change-configuration-during-program-runtime}

Program může konfiguraci měnit i za běhu. Typický postup:

1. Přečtěte aktuální konfiguraci hubu.
2. Porovnejte ji s konfigurací, kterou profil vyžaduje.
3. Pokud se konfigurace liší, nastavte požadovanou konfiguraci.
4. Po změně konfiguraci přečtěte znovu.
5. Pokračujte, až když hub hlásí očekávanou konfiguraci.
6. Pokud se požadovaná konfigurace nepoužila, odpojte se nebo zastavte program.

Jak na to, ukazuje hotový profil pro tento hub.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Příklad bloků se změnou konfigurace Technic Move Hubu za běhu" />
