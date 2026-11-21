---
id: TechnicMoveHubConfigurations
title: Configuraties van de Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configuraties van de Technic Move Hub {#technic-move-hub-configurations}

## Overzicht {#overview}

Anders dan andere LEGO® Powered Up-hubs gedraagt de Technic Move Hub zich verschillend, afhankelijk van de configuratie die erin geladen is.

MOCPilot kan deze configuratie wijzigen, zodat de hub past bij de officiële LEGO-set die je wilt besturen.

## Ondersteunde configuraties {#supported-configurations}

MOCPilot kent deze configuraties:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Configuratieopties van de Technic Move Hub in het blok voor de hubconfiguratie" />

## Configuratie wijzigen via Mijn Bluetooth-hubs {#change-configuration-from-my-bluetooth-hubs}

Zo wijzig je de configuratie op de pagina **Mijn Bluetooth-hubs**:

1. Open **Mijn Bluetooth-hubs**.
2. Zoek de Technic Move Hub.
3. Open het hubmenu.
4. Kies **Configuratie selecteren**.
5. Kies de configuratie.
6. Bevestig in het venster.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Contextmenu van de Technic Move Hub met de actie Configuratie selecteren" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Configuratiesubmenu van de Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Bevestigingsvenster voor het herconfigureren van de Technic Move Hub" />

:::warning Belangrijk
Bij het wijzigen van de configuratie wordt er een programma in de hub geschreven, net als bij een firmware-update.

Laat de hub tijdens het hele proces aan staan, en houd je telefoon, tablet of computer aan en dicht bij de hub, zodat de Bluetooth-verbinding stabiel blijft. Sluit MOCPilot niet, zet Bluetooth niet uit en schakel de hub niet uit terwijl de configuratie verandert.

Een onderbroken wijziging kan de firmware van de hub beschadigen. De hub heeft dan mogelijk [firmwareherstel](/docs/Application/Hubs/RecoveryHubFirmware/) nodig voordat je hem weer kunt gebruiken.
:::

Terwijl de configuratie verandert, negeert de hub gewone opdrachten en wisselt de led van kleur. Zodra de nieuwe configuratie geladen is, start de hub opnieuw op.

## Configuratieblokken {#configuration-blocks}

Logicablokken kunnen de configuratie lezen en wijzigen terwijl een programma draait.

### Hubconfiguratie instellen {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blok Hubconfiguratie instellen" />

Het blok **stel … configuratie naar …** laadt een van de ondersteunde configuraties in de geselecteerde hub.

- Hubkeuze: kiest de hub die je wilt herconfigureren.
- Configuratiekeuze: kiest de gewenste configuratie.
- Beschikbare configuraties voor de Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** en **Batmobile™ Tumbler**.

Zie de [documentatie van het blok Hubconfiguratie instellen](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hubconfiguratie {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Waardeblok Hubconfiguratie" />

Het blok **krijg … configuratie als …** geeft de huidige configuratie van de geselecteerde hub terug.

- Hubkeuze: kiest de hub die je wilt uitlezen.
- Uitvoerformaat: **tekst** geeft de naam van de configuratie terug.
- Uitvoerformaat: **index** geeft het nummer van de configuratie terug, handig om in voorwaarden te vergelijken.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opties voor het uitvoerformaat van het blok Hubconfiguratie" />

Zie de [documentatie van het blok Hubconfiguratie](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Vermogenspuls {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blok krachtpuls van de Technic Move Hub" />

Het blok **krachtpuls** stuurt een vermogenspuls naar de geselecteerde Technic Move Hub. Het werkt alleen met de configuratie **Batmobile™ Tumbler**.

De hub laat de motoren dan kort, ongeveer 1–2 seconden, op maximaal vermogen en maximale snelheid draaien. In Snelle koppelingen heet dezelfde functie de bewerking [Vermogenspuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Zie de [documentatie van het blok krachtpuls](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Configuratie wijzigen terwijl het programma draait {#change-configuration-during-program-runtime}

Een programma kan de configuratie ook wijzigen terwijl het draait. Een gebruikelijke aanpak:

1. Lees de huidige hubconfiguratie.
2. Vergelijk die met de configuratie die het profiel nodig heeft.
3. Is de configuratie anders, stel dan de vereiste configuratie in.
4. Lees de configuratie na het herconfigureren opnieuw.
5. Ga pas verder als de hub de verwachte configuratie meldt.
6. Verbreek de verbinding of stop het programma als de vereiste configuratie niet is toegepast.

Het kant-en-klare profiel voor deze hub laat zien hoe dat werkt.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Blokvoorbeeld waarin de configuratie van de Technic Move Hub tijdens het draaien wordt gewijzigd" />
