---
id: FirmwareUpdating
title: Firmware bijwerken
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Firmware bijwerken {#firmware-updating}

MOCPilot kan de firmware van ondersteunde LEGO® Powered Up-hubs bijwerken als er een nieuwere compatibele versie beschikbaar is.

Sommige hubs hebben een update nodig voordat ze goed met MOCPilot werken: nieuwere firmware lost fouten in de hub op en voegt functies toe waar de app op rekent.

## Ondersteunde hubs {#supported-hubs}

MOCPilot kan deze hubs bijwerken:

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

## Voordat je begint {#before-you-start}

Zorg dat de hub en je telefoon, tablet of computer voldoende batterij hebben.

Laat de hub tijdens de hele update aan staan en houd je apparaat dichtbij, zodat de Bluetooth-verbinding stabiel blijft. Sluit MOCPilot niet, zet Bluetooth niet uit en schakel de hub niet uit terwijl de firmware wordt geüpload.

:::warning Belangrijk
Een onderbroken update kan de hub met onvolledige firmware achterlaten. De hub heeft dan mogelijk firmwareherstel nodig voordat je hem weer kunt gebruiken.
:::

## De update starten {#starting-the-update}

Als je een hub verbindt, controleert MOCPilot de firmwareversie. Is er een nieuwere versie nodig, dan toont de app het venster **Firmware-update vereist**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Venster Firmware-update vereist" />

Kies **Bijwerken** om de firmware-update meteen te starten.

Wil je later bijwerken, kies dan **Annuleren**. Je kunt de update op elk moment starten vanuit het hubmenu.

## Later bijwerken vanuit het hubmenu {#updating-later-from-the-hub-menu}

Zo start je de update zelf:

1. Open **Mijn Bluetooth-hubs**.
2. Zoek de hub die bijgewerkt moet worden.
3. Open het hubmenu.
4. Kies **Firmware bijwerken**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Actie Firmware bijwerken in het contextmenu van de hub" />

## Tijdens de firmware-update {#during-the-firmware-update}

MOCPilot uploadt de firmware naar de hub en toont de voortgang.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Voortgangsscherm van de firmware-update" />

Wacht tot het uploaden klaar is. De hub kan even opnieuw opstarten of de verbinding verbreken terwijl de nieuwe firmware wordt toegepast.

Daarna zoekt MOCPilot opnieuw naar de hub. Houd de hub in de buurt en wacht tot de app opnieuw verbinding maakt.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware geüpload, zoeken naar de hub" />

## De update afronden {#finishing-the-update}

Als de update klaar is, toont MOCPilot een bevestiging.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Venster Firmware-update voltooid" />

Kies **OK**. De hub maakt opnieuw verbinding en de kaart van de hub toont de nieuwe firmwareversie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hubkaart met de bijgewerkte firmwareversie" />

Je kunt de hub nu weer gewoon met MOCPilot gebruiken.

## Als de update mislukt {#if-the-update-fails}

Als de update mislukt, toont MOCPilot een foutmelding.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Venster Firmware-update mislukt" />

Zet de hub eerst uit en weer aan en voer de update opnieuw uit:

1. Zet de hub uit.
2. Zet de hub weer aan.
3. Houd de hub dicht bij je apparaat.
4. Maak in MOCPilot verbinding met de hub.
5. Start de firmware-update opnieuw.

Reageert de hub nog steeds niet normaal, dan heeft hij mogelijk firmwareherstel nodig: zie [Hubfirmware herstellen](/docs/Application/Hubs/RecoveryHubFirmware/).
