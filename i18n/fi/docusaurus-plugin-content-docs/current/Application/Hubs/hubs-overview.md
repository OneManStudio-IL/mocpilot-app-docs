---
id: HubsOverview
title: Hubit
description: "Hubit MOCPilot-profiileissa: tuetut hubit, hubipaikat ja mitä kukin hubi osaa."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubit {#hubs}

**Hubi** on mallisi Bluetooth-palikka: moottorit, valot ja anturit kytketään sen portteihin, ja MOCPilot viestii sen kanssa Bluetoothin kautta.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Tuetut hubit {#supported-hubs}

| Hubi | Huomioita |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porttia, kallistus- ja kiihtyvyysanturit |
| LEGO® Technic™ Move Hub | LEGO Technic -kauko-ohjattavissa autoissa; ajo, ohjaus, valot; [kokoonpanot](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porttia, junat ja City-sarjat |
| LEGO® Move Hub / BOOST (88006) | 2 sisäänrakennettua moottoria + 2 porttia |
| LEGO® Remote Control (88010) | sen painikkeet ovat syötteitä |
| LEGO® WeDo 2.0 Smart Hub | 2 porttia |
| LEGO® Large Hub / Robot Inventor (88016) | 6 porttia, valomatriisi; ei iPhonessa eikä iPadissa |
| BuWizz 2.0 | 4 porttia, tehotilat |
| BuWizz 3.0 Pro | 6 porttia, porttien väri-LEDit |
| SBrick, SBrick Plus | 4 porttia, nopeuden ohjaus, ei asennon ohjausta |
| Mould King 4.0, 6.0 | 4 tai 6 porttia, vain komennot, ohjauskanavat |

Täydellinen luettelo moottoreineen ja antureineen: [Tuetut laitteet](/docs/Introducing/SupportedDevices).

## Hubipaikat {#hub-slots}

Jokaisessa profiilissa on **5 hubipaikkaa**:

- **2 paikkaa on ilmaisia**;
- **3 lisäpaikkaa** avataan painikkeella **Avaa lokero** (*Lisähubipaikka*-osto, yksi paikkaa kohden) tai kaikki kerralla [MocPilot Prolla](/docs/Application/Account/Pro).

Ostetut paikat kuuluvat tilillesi ja toimivat kaikissa profiileissasi.

Mould King -rajoitukset: yksi Mould King -tyyppi profiilia kohden, enintään 3 Mould King 4.0:aa tai 1 Mould King 6.0 (ne jakavat puhelimen Bluetooth-mainoslähettimen).

## Hubit ohjelmassa {#hubs-in-the-program}

- **Pikalinkeissä** jokainen profiilin hubi näkyy paletissa **Hubi**-lähtönä sekä **Hubi**-syötteenä painikkeitaan ja anturejaan varten. Toimintoja, joihin mikään profiilin hubi ei pysty, ei tarjota. Katso [Hubi-lohko ja portit](/docs/Application/Links/HubsAndPorts).
- **Logiikkalohkoissa** moottori-, valo- ja anturilohkot ottavat hubipaikan ja portin. Katso [Moottorit](/docs/Application/BlockBuilder/Blocks/Motors).

## Lue lisää {#read-more}

- [Hubin lisääminen ja yhdistäminen](/docs/Application/Hubs/ConnectingHubs)
- [Hubikohtaiset toiminnot](/docs/Application/Hubs/HubFunctions)
- [Laiteohjelmiston päivitys](/docs/Application/Hubs/FirmwareUpdating) ja [laiteohjelmiston palautus](/docs/Application/Hubs/RecoveryHubFirmware)
