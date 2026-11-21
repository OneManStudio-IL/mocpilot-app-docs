---
id: FirmwareUpdating
title: Fastvareoppdatering
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Fastvareoppdatering {#firmware-updating}

MOCPilot kan oppdatere fastvaren på støttede LEGO® Powered Up-hubber når en nyere kompatibel versjon er tilgjengelig.

Noen hubber må oppdateres før de fungerer riktig med MOCPilot: nyere fastvare retter feil i huben og legger til funksjonene appen er avhengig av.

## Støttede hubber {#supported-hubs}

MOCPilot kan oppdatere disse hubbene:

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

## Før du begynner {#before-you-start}

Sørg for at både huben og telefonen, nettbrettet eller datamaskinen har nok batteri.

Hold huben påslått under hele oppdateringen, og hold enheten nær den slik at Bluetooth-tilkoblingen er stabil. Ikke lukk MOCPilot, slå av Bluetooth eller slå av huben mens fastvaren lastes opp.

:::warning Viktig
En avbrutt oppdatering kan etterlate huben med ufullstendig fastvare. Da kan det hende at huben må gjenopprettes før du kan bruke den igjen.
:::

## Start oppdateringen {#starting-the-update}

Når du kobler til en hub, sjekker MOCPilot fastvareversjonen. Hvis en nyere versjon kreves, viser appen dialogen **Fastvareoppdatering kreves**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialogen Fastvareoppdatering kreves" />

Velg **Oppdater** for å starte fastvareoppdateringen med en gang.

Vil du oppdatere senere, velger du **Avbryt**. Du kan når som helst starte oppdateringen fra hubmenyen.

## Oppdater senere fra hubmenyen {#updating-later-from-the-hub-menu}

Slik starter du oppdateringen selv:

1. Åpne **Mine Bluetooth-hubber**.
2. Finn huben som skal oppdateres.
3. Åpne hubmenyen.
4. Velg **Oppdater fastvare**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Handlingen Oppdater fastvare i hubens hurtigmeny" />

## Under fastvareoppdateringen {#during-the-firmware-update}

MOCPilot laster opp fastvaren til huben og viser fremdriften.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Skjermbilde med fremdriften for fastvareoppdateringen" />

Vent til opplastingen er ferdig. Huben kan starte på nytt eller koble fra et øyeblikk mens den nye fastvaren tas i bruk.

Deretter søker MOCPilot etter huben igjen. Hold huben i nærheten og vent til appen kobler til på nytt.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Fastvaren er lastet opp, og appen søker etter huben" />

## Fullfør oppdateringen {#finishing-the-update}

Når oppdateringen er ferdig, viser MOCPilot en bekreftelse.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialog om at fastvareoppdateringen er fullført" />

Velg **OK**. Huben kobler til igjen, og kortet viser den nye fastvareversjonen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hubkort som viser den oppdaterte fastvareversjonen" />

Nå kan du fortsette å bruke huben med MOCPilot.

## Hvis oppdateringen mislykkes {#if-the-update-fails}

Hvis oppdateringen mislykkes, viser MOCPilot en feilmelding.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialog om at fastvareoppdateringen mislyktes" />

Slå først huben av og på, og kjør oppdateringen på nytt:

1. Slå av huben.
2. Slå på huben igjen.
3. Hold huben nær enheten din.
4. Koble til huben i MOCPilot.
5. Start fastvareoppdateringen på nytt.

Hvis huben fortsatt ikke svarer normalt, kan den trenge gjenoppretting av fastvaren: se [Gjenoppretting av hub-fastvare](/docs/Application/Hubs/RecoveryHubFirmware/).
