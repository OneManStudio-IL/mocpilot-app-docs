---
id: RecoveryHubFirmware
title: Hubin laiteohjelmiston palautus
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubin laiteohjelmiston palautus {#hub-firmware-recovery}

Laiteohjelmiston palautus herättää henkiin hubin, joka ei käynnisty normaalisti keskeytyneen tai epäonnistuneen laiteohjelmiston päivityksen jälkeen.

MOCPilot siirtää hubiin toimivan laiteohjelmiston, jotta hubi toimii ja sen voi taas päivittää. Käytä palautusta vain, kun hubi ei toimi normaalisti, kun MOCPilot ilmoittaa hubin olevan palautustilassa tai epäonnistuneen päivityksen jälkeen.

:::warning Tärkeää
Pidä hubi päällä ja laitteesi lähellä hubia koko palautuksen ajan. Bluetoothin kytkeminen pois, MOCPilotin sulkeminen, paristojen irrottaminen tai hubin sammuttaminen siirron aikana voi saada palautuksen epäonnistumaan.
:::

## Milloin palautus tarvitaan {#when-recovery-is-required}

Palautus voi olla tarpeen, jos:

- Laiteohjelmiston päivitys ei päättynyt onnistuneesti.
- Hubi ei enää yhdisty tavallisena hubina.
- Hubi näkyy MOCPilotissa nimellä **LEGO Bootloader**.
- MOCPilot havaitsee, että hubi on yhdistetty laiteohjelmiston palautustilassa.

Varmista ennen aloittamista, että hubissa on riittävästi virtaa, puhelimesi, tablettisi tai tietokoneesi on ladattu ja Bluetooth on päällä.

## Tuetut hubit {#supported-hubs}

Palautus toimii samoille hubeille kuin laiteohjelmiston päivitys:

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

## Technic Hubin, Boost Hubin tai City Hubin asettaminen palautustilaan {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Nämä hubit yhdistyvät käynnistyslataimensa kautta:

1. Sammuta hubi.
2. Paina vihreää painiketta ja pidä se painettuna.
3. Pidä painiketta painettuna, kunnes hubin LED alkaa vilkkua violettina.
4. Älä päästä painiketta irti, kun LED vilkkuu violettina.
5. Pidä painike yhä painettuna, avaa MOCPilotissa **Omat Bluetooth-keskitinlaitteet** ja yhdistä hubiin.
6. Kun hubi on yhdistetty käynnistyslataintilassa, voit päästää painikkeen irti.

Palautustilassa hubi voi näkyä nimellä **LEGO Bootloader** tavallisen nimensä sijaan.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="LEGO Bootloader -hubi hubiluettelossa ja laiteohjelmiston palautustoiminto" />

## Technic Move Hubin asettaminen palautustilaan {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub palautetaan eri tavalla: se ei yhdisty nimellä **LEGO Bootloader**. Sen sijaan alla oleva painikesarja lataa tehtaan laiteohjelmiston **1.2.3**, jota ei ole tarkoitettu jokapäiväiseen käyttöön.

Laiteohjelmiston palauttaminen:

1. Sammuta hubi.
2. Paina vihreää painiketta ja pidä se painettuna.
3. Pidä vihreää painiketta painettuna noin minuutin ajan.
4. Päästä painike irti.
5. Odota, kunnes hubin LED alkaa vilkkua valkoisena.
6. Avaa MOCPilotissa **Omat Bluetooth-keskitinlaitteet** ja yhdistä hubiin.

Kun hubi yhdistyy, MOCPilot tunnistaa tehtaan laiteohjelmiston ja tarjoaa sen päivittämistä uusimpaan versioon. Aloita päivitys ja odota, että se valmistuu.

## Palautuksen aloittaminen ikkunasta {#start-recovery-from-the-dialog}

Kun MOCPilot havaitsee palautustilassa yhdistetyn hubin, se näyttää palautusikkunan.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Hubin palautustila havaittu -ikkuna" />

Valitse **Palauta**, niin laiteohjelmiston siirto hubiin alkaa.

Jos et ole valmis, valitse **Peruuta**. Voit aloittaa palautuksen myöhemmin hubin valikosta.

## Palautuksen aloittaminen hubin valikosta {#start-recovery-from-the-hub-menu}

Palautuksen aloittaminen itse:

1. Avaa **Omat Bluetooth-keskitinlaitteet**.
2. Etsi hubi, joka näkyy nimellä **LEGO Bootloader**.
3. Avaa hubin valikko.
4. Valitse **Palauta hubin laiteohjelmisto**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Palauta hubin laiteohjelmisto -toiminto hubin pikavalikossa" />

## Laiteohjelmiston palautuksen aikana {#during-firmware-recovery}

MOCPilot siirtää laiteohjelmiston hubiin ja näyttää edistymisen.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Laiteohjelmiston palautuksen edistymisnäkymä" />

Odota, kunnes palautus on valmis. Älä vie hubia kauas laitteestasi, sulje sovellusta, kytke Bluetoothia pois tai katkaise hubin virtaa.

Hubi voi käynnistyä tai yhdistyä uudelleen useita kertoja. Se on normaalia: pidä MOCPilot auki ja odota.

## Palautuksen viimeistely {#finish-recovery}

Kun palautus on valmis, MOCPilot näyttää vahvistuksen.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Laiteohjelmiston palautus valmis -ikkuna" />

Valitse **OK**. Hubin pitäisi käynnistyä uudelleen ja yhdistyä tavallisena hubina eikä enää nimellä **LEGO Bootloader**.

Tarkista sitten hubi kohdassa **Omat Bluetooth-keskitinlaitteet**. Jos MOCPilot pyytää yhä laiteohjelmiston päivitystä, suorita tavallinen [laiteohjelmiston päivitys](/docs/Application/Hubs/FirmwareUpdating/).

## Jos palautus epäonnistuu {#if-recovery-fails}

Jos palautus epäonnistuu:

1. Pidä hubi lähellä laitettasi.
2. Sammuta hubi ja käynnistä se uudelleen.
3. Aseta hubi uudelleen palautustilaan.
4. Yhdistä MOCPilotissa laitteeseen **LEGO Bootloader**.
5. Aloita **Palauta hubin laiteohjelmisto** uudelleen.

Jos virhe toistuu, toista koko menettely. Jos useat yritykset epäonnistuvat, vaihda tai lataa paristot ja yritä uudelleen.
