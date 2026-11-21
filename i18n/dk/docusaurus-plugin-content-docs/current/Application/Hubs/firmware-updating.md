---
id: FirmwareUpdating
title: Firmwareopdatering
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Firmwareopdatering {#firmware-updating}

MOCPilot kan opdatere firmwaren på understøttede LEGO® Powered Up-hubs, når der findes en nyere kompatibel version.

Nogle hubs skal opdateres, før de fungerer korrekt med MOCPilot: Nyere firmware retter fejl i hubben og tilføjer de funktioner, appen er afhængig af.

## Understøttede hubs {#supported-hubs}

MOCPilot kan opdatere disse hubs:

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

## Før du starter {#before-you-start}

Sørg for, at hubben og din telefon, tablet eller computer har tilstrækkeligt med strøm på batteriet.

Hold hubben tændt under hele opdateringen, og hold din enhed tæt på den, så Bluetooth-forbindelsen forbliver stabil. Luk ikke MOCPilot, slå ikke Bluetooth fra, og sluk ikke hubben, mens firmwaren uploades.

:::warning Vigtigt
En afbrudt opdatering kan efterlade hubben med ufuldstændig firmware. Hubben kan så kræve gendannelse af firmwaren, før du kan bruge den igen.
:::

## Start opdateringen {#starting-the-update}

Når du forbinder en hub, tjekker MOCPilot dens firmwareversion. Kræves der en nyere version, viser appen dialogen **Firmwareopdatering kræves**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialogen Firmwareopdatering kræves" />

Vælg **Opdater** for at starte firmwareopdateringen med det samme.

Vil du opdatere senere, så vælg **Annuller**. Du kan til enhver tid starte opdateringen fra hubmenuen.

## Opdater senere fra hubmenuen {#updating-later-from-the-hub-menu}

Sådan starter du selv opdateringen:

1. Åbn **Mine Bluetooth-hubs**.
2. Find den hub, der skal opdateres.
3. Åbn hubmenuen.
4. Vælg **Opdater firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Handlingen Opdater firmware i hubbens kontekstmenu" />

## Under firmwareopdateringen {#during-the-firmware-update}

MOCPilot uploader firmwaren til hubben og viser fremskridtet.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Skærmen med fremskridt for firmwareopdateringen" />

Vent, til uploaden er færdig. Hubben kan genstarte eller miste forbindelsen et øjeblik, mens den nye firmware tages i brug.

Derefter søger MOCPilot efter hubben igen. Hold hubben i nærheden, og vent på, at appen forbinder igen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmwaren er uploadet, og der søges efter hubben" />

## Afslut opdateringen {#finishing-the-update}

Når opdateringen er færdig, viser MOCPilot en bekræftelse.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialog om, at firmwareopdateringen er færdig" />

Vælg **OK**. Hubben forbindes igen, og dens kort viser den nye firmwareversion.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hubkort med den opdaterede firmwareversion" />

Du kan nu fortsætte med at bruge hubben med MOCPilot.

## Hvis opdateringen mislykkes {#if-the-update-fails}

Mislykkes opdateringen, viser MOCPilot en fejlmeddelelse.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialog om, at firmwareopdateringen mislykkedes" />

Sluk og tænd først hubben, og kør opdateringen igen:

1. Sluk hubben.
2. Tænd hubben igen.
3. Hold hubben tæt på din enhed.
4. Forbind til hubben i MOCPilot.
5. Start firmwareopdateringen igen.

Reagerer hubben stadig ikke normalt, kan den have brug for gendannelse af firmwaren: se [Gendannelse af hub-firmware](/docs/Application/Hubs/RecoveryHubFirmware/).
