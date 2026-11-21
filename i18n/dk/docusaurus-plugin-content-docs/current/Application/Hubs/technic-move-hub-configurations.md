---
id: TechnicMoveHubConfigurations
title: Technic Move Hub-konfigurationer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Technic Move Hub-konfigurationer {#technic-move-hub-configurations}

## Oversigt {#overview}

I modsætning til andre LEGO® Powered Up-hubs opfører Technic Move Hub sig forskelligt afhængigt af den konfiguration, der er indlæst i den.

MOCPilot kan ændre konfigurationen, så hubben passer til det officielle LEGO-sæt, du vil styre.

## Understøttede konfigurationer {#supported-configurations}

MOCPilot kender disse konfigurationer:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Konfigurationsmuligheder for Technic Move Hub i blokken Indstil hubkonfiguration" />

## Skift konfiguration fra Mine Bluetooth-hubs {#change-configuration-from-my-bluetooth-hubs}

Sådan skifter du konfiguration på siden **Mine Bluetooth-hubs**:

1. Åbn **Mine Bluetooth-hubs**.
2. Find Technic Move Hub.
3. Åbn hubmenuen.
4. Vælg **Vælg konfiguration**.
5. Vælg konfigurationen.
6. Bekræft i dialogen.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Kontekstmenuen for Technic Move Hub med handlingen Vælg konfiguration" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Undermenuen med konfigurationer for Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialog til bekræftelse af ny konfiguration af Technic Move Hub" />

:::warning Vigtigt
Når du skifter konfiguration, skrives et program til hubben – næsten som ved en firmwareopdatering.

Hold hubben tændt under hele processen, og hold din telefon, tablet eller computer tændt og tæt på hubben, så Bluetooth-forbindelsen forbliver stabil. Luk ikke MOCPilot, slå ikke Bluetooth fra, og sluk ikke hubben, mens konfigurationen skiftes.

Et afbrudt skift kan beskadige hubbens firmware. Hubben kan så kræve [gendannelse af firmwaren](/docs/Application/Hubs/RecoveryHubFirmware/), før du kan bruge den igen.
:::

Mens konfigurationen skiftes, ignorerer hubben almindelige kommandoer, og dens LED skifter mellem farver. Når den nye konfiguration er på plads, genstarter hubben.

## Konfigurationsblokke {#configuration-blocks}

Logikblokke kan læse og ændre konfigurationen, mens et program kører.

### Indstil hubkonfiguration {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blokken Indstil hubkonfiguration" />

Blokken **Indstil hubkonfiguration** indlæser en af de understøttede konfigurationer i den valgte hub.

- Hubvælger: vælger den hub, der skal konfigureres.
- Konfigurationsvælger: vælger målkonfigurationen.
- Tilgængelige konfigurationer for Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** og **Batmobile™ Tumbler**.

Se [dokumentationen for blokken Indstil hubkonfiguration](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hubkonfiguration {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Rapporteringsblokken Hubkonfiguration" />

Blokken **Hubkonfiguration** rapporterer den valgte hubs aktuelle konfiguration.

- Hubvælger: vælger den hub, der skal læses.
- Outputformat: **tekst** returnerer konfigurationens navn.
- Outputformat: **indeks** returnerer konfigurationens indeks, som er nyttigt til sammenligninger i betingelser.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Muligheder for outputformat i blokken Hubkonfiguration" />

Se [dokumentationen for blokken Hubkonfiguration](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Kraftimpuls {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blokken kraftimpuls til Technic Move Hub" />

Blokken **Kraftimpuls** sender en kraftimpuls til den valgte Technic Move Hub. Den virker kun med konfigurationen **Batmobile™ Tumbler**.

Hubben kører derefter motorerne med maksimal effekt og hastighed i kort tid, cirka 1–2 sekunder. I Hurtige forbindelser er den samme funktion handlingen [Kraftimpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Se [dokumentationen for blokken Kraftimpuls](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Skift konfiguration, mens programmet kører {#change-configuration-during-program-runtime}

Et program kan også skifte konfiguration, mens det kører. En typisk fremgangsmåde:

1. Læs hubbens aktuelle konfiguration.
2. Sammenlign den med den konfiguration, profilen kræver.
3. Er konfigurationen en anden, så indstil den krævede konfiguration.
4. Læs konfigurationen igen efter skiftet.
5. Fortsæt først, når hubben rapporterer den forventede konfiguration.
6. Afbryd forbindelsen, eller stop programmet, hvis den krævede konfiguration ikke blev anvendt.

Den færdige profil til denne hub viser, hvordan det gøres.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Blokeksempel, der viser skift af Technic Move Hub-konfiguration under kørsel" />
