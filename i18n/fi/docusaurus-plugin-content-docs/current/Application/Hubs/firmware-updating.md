---
id: FirmwareUpdating
title: Laiteohjelmiston päivitys
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Laiteohjelmiston päivitys {#firmware-updating}

MOCPilot voi päivittää tuettujen LEGO® Powered Up -hubien laiteohjelmiston, kun uudempi yhteensopiva versio on saatavilla.

Jotkin hubit on päivitettävä, ennen kuin ne toimivat oikein MOCPilotin kanssa: uudempi laiteohjelmisto korjaa hubin virheitä ja tuo toimintoja, joita sovellus tarvitsee.

## Tuetut hubit {#supported-hubs}

MOCPilot voi päivittää nämä hubit:

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

## Ennen kuin aloitat {#before-you-start}

Varmista, että hubissa ja puhelimessasi, tabletissasi tai tietokoneessasi on riittävästi virtaa.

Pidä hubi päällä koko päivityksen ajan ja laitteesi lähellä hubia, jotta Bluetooth-yhteys pysyy vakaana. Älä sulje MOCPilotia, kytke Bluetoothia pois tai sammuta hubia laiteohjelmiston siirron aikana.

:::warning Tärkeää
Keskeytynyt päivitys voi jättää hubiin keskeneräisen laiteohjelmiston. Hubille voidaan silloin joutua tekemään laiteohjelmiston palautus, ennen kuin sitä voi taas käyttää.
:::

## Päivityksen aloittaminen {#starting-the-update}

Kun yhdistät hubin, MOCPilot tarkistaa sen laiteohjelmiston version. Jos uudempi versio vaaditaan, sovellus näyttää **Laiteohjelmiston päivitys vaaditaan** -ikkunan.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Laiteohjelmiston päivitys vaaditaan -ikkuna" />

Valitse **Päivitä**, niin laiteohjelmiston päivitys alkaa heti.

Jos haluat päivittää myöhemmin, valitse **Peruuta**. Voit aloittaa päivityksen hubin valikosta milloin tahansa.

## Päivittäminen myöhemmin hubin valikosta {#updating-later-from-the-hub-menu}

Päivityksen aloittaminen itse:

1. Avaa **Omat Bluetooth-keskitinlaitteet**.
2. Etsi päivitettävä hubi.
3. Avaa hubin valikko.
4. Valitse **Päivitä laiteohjelmisto**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Päivitä laiteohjelmisto -toiminto hubin pikavalikossa" />

## Laiteohjelmiston päivityksen aikana {#during-the-firmware-update}

MOCPilot siirtää laiteohjelmiston hubiin ja näyttää edistymisen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Laiteohjelmiston päivityksen edistymisnäkymä" />

Odota, että siirto valmistuu. Hubi voi käynnistyä uudelleen tai katkaista yhteyden hetkeksi, kun uutta laiteohjelmistoa otetaan käyttöön.

Sen jälkeen MOCPilot hakee hubia uudelleen. Pidä hubi lähellä ja odota, että sovellus yhdistää uudelleen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Laiteohjelmisto siirretty, hubia haetaan" />

## Päivityksen viimeistely {#finishing-the-update}

Kun päivitys on valmis, MOCPilot näyttää vahvistuksen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Laiteohjelmiston päivitys valmis -ikkuna" />

Valitse **OK**. Hubi yhdistyy uudelleen, ja sen kortissa näkyy uusi laiteohjelmiston versio.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hubin kortti, jossa näkyy päivitetty laiteohjelmiston versio" />

Voit nyt jatkaa hubin käyttöä MOCPilotin kanssa.

## Jos päivitys epäonnistuu {#if-the-update-fails}

Jos päivitys epäonnistuu, MOCPilot näyttää virheilmoituksen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Laiteohjelmiston päivitys epäonnistui -ikkuna" />

Sammuta ensin hubi, käynnistä se uudelleen ja suorita päivitys uudelleen:

1. Sammuta hubi.
2. Käynnistä hubi uudelleen.
3. Pidä hubi lähellä laitettasi.
4. Yhdistä hubiin MOCPilotissa.
5. Aloita laiteohjelmiston päivitys uudelleen.

Jos hubi ei vieläkään toimi normaalisti, se saattaa tarvita laiteohjelmiston palautuksen: katso [Hubin laiteohjelmiston palautus](/docs/Application/Hubs/RecoveryHubFirmware/).
