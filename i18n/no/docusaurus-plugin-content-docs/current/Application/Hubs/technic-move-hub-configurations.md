---
id: TechnicMoveHubConfigurations
title: Konfigurasjoner for Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfigurasjoner for Technic Move Hub {#technic-move-hub-configurations}

## Oversikt {#overview}

I motsetning til andre LEGO® Powered Up-hubber oppfører Technic Move Hub seg forskjellig avhengig av hvilken konfigurasjon som er lastet inn i den.

MOCPilot kan endre denne konfigurasjonen slik at huben passer til det offisielle LEGO-settet du vil styre.

## Støttede konfigurasjoner {#supported-configurations}

MOCPilot kjenner disse konfigurasjonene:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Konfigurasjonsvalg for Technic Move Hub i blokken Sett hubkonfigurasjon" />

## Endre konfigurasjonen fra Mine Bluetooth-hubber {#change-configuration-from-my-bluetooth-hubs}

Slik endrer du konfigurasjonen på siden **Mine Bluetooth-hubber**:

1. Åpne **Mine Bluetooth-hubber**.
2. Finn Technic Move Hub.
3. Åpne hubmenyen.
4. Velg **Velg konfigurasjon**.
5. Velg konfigurasjonen.
6. Bekreft i dialogen.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Hurtigmenyen for Technic Move Hub med handlingen Velg konfigurasjon" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Undermeny med konfigurasjoner for Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialog for å bekrefte ny konfigurasjon av Technic Move Hub" />

:::warning Viktig
Når du endrer konfigurasjonen, skrives et program inn i huben, omtrent som ved en fastvareoppdatering.

Hold huben påslått under hele prosessen, og hold telefonen, nettbrettet eller datamaskinen påslått og nær huben slik at Bluetooth-tilkoblingen er stabil. Ikke lukk MOCPilot, slå av Bluetooth eller slå av huben mens konfigurasjonen endres.

En avbrutt endring kan skade fastvaren i huben. Da kan det hende at huben trenger [gjenoppretting av fastvare](/docs/Application/Hubs/RecoveryHubFirmware/) før du kan bruke den igjen.
:::

Mens konfigurasjonen endres, ignorerer huben vanlige kommandoer, og LED-en skifter mellom farger. Når den nye konfigurasjonen er på plass, starter huben på nytt.

## Konfigurasjonsblokker {#configuration-blocks}

Logikkblokker kan lese og endre konfigurasjonen mens et program kjører.

### Sett hubkonfigurasjon {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blokken Sett hubkonfigurasjon" />

Blokken **Sett hubkonfigurasjon** laster en av de støttede konfigurasjonene inn i den valgte huben.

- Hubvelger: velger huben som skal konfigureres på nytt.
- Konfigurasjonsvelger: velger målkonfigurasjonen.
- Tilgjengelige konfigurasjoner for Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** og **Batmobile™ Tumbler**.

Se [dokumentasjonen for blokken Sett hubkonfigurasjon](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hubkonfigurasjon {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Rapporteringsblokken Hubkonfigurasjon" />

Blokken **Hubkonfigurasjon** rapporterer gjeldende konfigurasjon for den valgte huben.

- Hubvelger: velger huben som skal leses.
- Utdataformat: **tekst** returnerer navnet på konfigurasjonen.
- Utdataformat: **indeks** returnerer nummeret på konfigurasjonen, noe som er nyttig for sammenligninger i betingelser.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Valg av utdataformat for blokken Hubkonfigurasjon" />

Se [dokumentasjonen for blokken Hubkonfigurasjon](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Kraftpuls {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blokken Kraftpuls for Technic Move Hub" />

Blokken **Kraftpuls** sender en kraftpuls til den valgte Technic Move Hub. Den fungerer bare med konfigurasjonen **Batmobile™ Tumbler**.

Huben kjører da motorene med maksimal effekt og hastighet en kort stund, omtrent 1–2 sekunder. I Hurtigkoblinger er den samme funksjonen operasjonen [Kraftpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Se [dokumentasjonen for blokken Kraftpuls](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Endre konfigurasjonen mens programmet kjører {#change-configuration-during-program-runtime}

Et program kan også endre konfigurasjonen mens det kjører. En vanlig fremgangsmåte:

1. Les gjeldende hubkonfigurasjon.
2. Sammenlign den med konfigurasjonen profilen krever.
3. Hvis konfigurasjonen er en annen, angir du den nødvendige konfigurasjonen.
4. Les konfigurasjonen på nytt etter omkonfigureringen.
5. Fortsett bare når huben rapporterer den forventede konfigurasjonen.
6. Koble fra eller stopp programmet hvis den nødvendige konfigurasjonen ikke ble tatt i bruk.

Den ferdige profilen for denne huben viser hvordan du gjør det.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Blokkeksempel som viser endring av konfigurasjonen for Technic Move Hub mens programmet kjører" />
