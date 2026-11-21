---
id: TechnicMoveHubConfigurations
title: Konfigurationer för Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfigurationer för Technic Move Hub {#technic-move-hub-configurations}

## Översikt {#overview}

Till skillnad från andra LEGO® Powered Up-hubbar beter sig Technic Move Hub olika beroende på vilken konfiguration som finns inläst i den.

MOCPilot kan ändra konfigurationen så att hubben passar det officiella LEGO-set som du vill styra.

## Konfigurationer som stöds {#supported-configurations}

MOCPilot känner till dessa konfigurationer:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Konfigurationsalternativ för Technic Move Hub i blocket för att ställa in hubbens konfiguration" />

## Ändra konfigurationen från Mina Bluetooth-hubbar {#change-configuration-from-my-bluetooth-hubs}

Så ändrar du konfigurationen på sidan **Mina Bluetooth-hubbar**:

1. Öppna **Mina Bluetooth-hubbar**.
2. Leta upp Technic Move Hub.
3. Öppna hubbens meny.
4. Välj **Välj konfiguration**.
5. Välj konfiguration.
6. Bekräfta i dialogrutan.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Snabbmenyn för Technic Move Hub med åtgärden Välj konfiguration" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Undermeny med konfigurationer för Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialogruta för att bekräfta omkonfigurering av Technic Move Hub" />

:::warning Viktigt
När du ändrar konfigurationen skrivs ett program till hubben, ungefär som vid en firmwareuppdatering.

Låt hubben vara påslagen under hela processen, och håll din telefon, surfplatta eller dator påslagen och nära hubben så att Bluetooth-anslutningen förblir stabil. Stäng inte MOCPilot, stäng inte av Bluetooth och slå inte av hubben medan konfigurationen ändras.

En avbruten ändring kan skada hubbens firmware. Hubben kan då behöva en [återställning av firmware](/docs/Application/Hubs/RecoveryHubFirmware/) innan du kan använda den igen.
:::

Medan konfigurationen ändras ignorerar hubben vanliga kommandon och dess lysdiod växlar mellan olika färger. När den nya konfigurationen är på plats startar hubben om.

## Konfigurationsblock {#configuration-blocks}

Logikblock kan läsa och ändra konfigurationen medan ett program körs.

### Ställ in hubbens konfiguration {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blocket för att ställa in hubbens konfiguration" />

Blocket **ställ in … konfiguration till** läser in en av de konfigurationer som stöds i den valda hubben.

- Hubbväljare: väljer vilken hubb som ska konfigureras om.
- Konfigurationsväljare: väljer målkonfigurationen.
- Tillgängliga konfigurationer för Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** och **Batmobile™ Tumbler**.

Se [dokumentationen för blocket](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hubbens konfiguration {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Rapportblocket för hubbens konfiguration" />

Blocket **hämta … konfiguration som** rapporterar den valda hubbens aktuella konfiguration.

- Hubbväljare: väljer vilken hubb som ska läsas.
- Utdataformat: **text** returnerar konfigurationens namn.
- Utdataformat: **index** returnerar konfigurationens index, vilket är praktiskt för jämförelser i villkor.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Alternativ för utdataformat i blocket för hubbens konfiguration" />

Se [dokumentationen för blocket](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Effektpuls {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blocket kraftpuls för Technic Move Hub" />

Blocket **kraftpuls** skickar en effektpuls till den valda Technic Move Hub. Det fungerar bara med konfigurationen **Batmobile™ Tumbler**.

Hubben kör då motorerna med maximal effekt och hastighet under en kort stund, ungefär 1–2 sekunder. I Snabbkopplingar motsvaras funktionen av åtgärden [Effektpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Se [dokumentationen för blocket](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Ändra konfigurationen medan programmet körs {#change-configuration-during-program-runtime}

Ett program kan också ändra konfigurationen medan det körs. Ett vanligt tillvägagångssätt:

1. Läs hubbens aktuella konfiguration.
2. Jämför den med den konfiguration som profilen kräver.
3. Om konfigurationen skiljer sig ställer du in den som krävs.
4. Läs konfigurationen igen efter omkonfigureringen.
5. Fortsätt bara när hubben rapporterar den förväntade konfigurationen.
6. Koppla från eller stoppa programmet om den nödvändiga konfigurationen inte tillämpades.

Den färdiga profilen för den här hubben visar hur det går till.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Blockexempel som visar hur konfigurationen för Technic Move Hub ändras medan programmet körs" />
