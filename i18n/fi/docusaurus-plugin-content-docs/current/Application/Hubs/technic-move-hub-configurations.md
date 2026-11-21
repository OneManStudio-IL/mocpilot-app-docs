---
id: TechnicMoveHubConfigurations
title: Technic Move Hubin kokoonpanot
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Technic Move Hubin kokoonpanot {#technic-move-hub-configurations}

## Yleiskatsaus {#overview}

Toisin kuin muut LEGO® Powered Up -hubit, Technic Move Hub toimii eri tavalla sen mukaan, mikä kokoonpano siihen on ladattu.

MOCPilot voi vaihtaa tämän kokoonpanon, jotta hubi vastaa virallista LEGO-sarjaa, jota haluat ohjata.

## Tuetut kokoonpanot {#supported-configurations}

MOCPilot tuntee nämä kokoonpanot:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Technic Move Hubin kokoonpanovaihtoehdot Aseta hubin kokoonpano -lohkossa" />

## Kokoonpanon vaihtaminen Omista Bluetooth-hubeista {#change-configuration-from-my-bluetooth-hubs}

Kokoonpanon vaihtaminen **Omat Bluetooth-keskitinlaitteet** -sivulla:

1. Avaa **Omat Bluetooth-keskitinlaitteet**.
2. Etsi Technic Move Hub.
3. Avaa hubin valikko.
4. Valitse **Valitse kokoonpano**.
5. Valitse kokoonpano.
6. Vahvista ikkunassa.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Technic Move Hubin pikavalikko ja Valitse kokoonpano -toiminto" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Technic Move Hubin kokoonpanojen alivalikko" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Technic Move Hubin uudelleenmäärityksen vahvistusikkuna" />

:::warning Tärkeää
Kokoonpanon vaihtaminen kirjoittaa hubiin ohjelman, samaan tapaan kuin laiteohjelmiston päivitys.

Pidä hubi päällä koko toimenpiteen ajan ja puhelimesi, tablettisi tai tietokoneesi päällä ja lähellä hubia, jotta Bluetooth-yhteys pysyy vakaana. Älä sulje MOCPilotia, kytke Bluetoothia pois tai sammuta hubia kokoonpanon vaihtuessa.

Keskeytynyt vaihto voi vahingoittaa hubin laiteohjelmistoa. Hubille voidaan silloin joutua tekemään [laiteohjelmiston palautus](/docs/Application/Hubs/RecoveryHubFirmware/), ennen kuin sitä voi taas käyttää.
:::

Kokoonpanon vaihtuessa hubi ei reagoi tavallisiin komentoihin, ja sen LED vaihtaa väriä vuorotellen. Kun uusi kokoonpano on paikallaan, hubi käynnistyy uudelleen.

## Kokoonpanolohkot {#configuration-blocks}

Logiikkalohkot voivat lukea ja vaihtaa kokoonpanoa ohjelman käydessä.

### Aseta hubin kokoonpano {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Aseta hubin kokoonpano -lohko" />

**Aseta hubin kokoonpano** -lohko lataa valittuun hubiin jonkin tuetuista kokoonpanoista.

- Hubin valitsin: valitsee uudelleen määritettävän hubin.
- Kokoonpanon valitsin: valitsee halutun kokoonpanon.
- Technic Move Hubin käytettävissä olevat kokoonpanot: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** ja **Batmobile™ Tumbler**.

Katso [Aseta hubin kokoonpano -lohkon ohje](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hubin kokoonpano {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Hubin kokoonpano -raportointilohko" />

**Hubin kokoonpano** -lohko palauttaa valitun hubin nykyisen kokoonpanon.

- Hubin valitsin: valitsee luettavan hubin.
- Tulosmuoto: **teksti** palauttaa kokoonpanon nimen.
- Tulosmuoto: **indeksi** palauttaa kokoonpanon indeksin, joka on kätevä vertailuissa ehtolauseissa.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Hubin kokoonpano -lohkon tulosmuodon vaihtoehdot" />

Katso [Hubin kokoonpano -lohkon ohje](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Tehopulssi {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Technic Move Hubin tehopulssilohko" />

**Tehopulssi**-lohko lähettää tehopulssin valitulle Technic Move Hubille. Se toimii vain **Batmobile™ Tumbler** -kokoonpanolla.

Hubi käyttää silloin moottoreita täydellä teholla ja nopeudella lyhyen aikaa, noin 1–2 sekuntia. Pikalinkeissä sama toiminto on [Tehopulssi](/docs/Application/Links/Blocks/OutputBlocks#op-pulse)-toiminto.

Katso [Tehopulssi-lohkon ohje](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Kokoonpanon vaihtaminen ohjelman aikana {#change-configuration-during-program-runtime}

Ohjelma voi vaihtaa kokoonpanoa myös käydessään. Tyypillinen tapa:

1. Lue hubin nykyinen kokoonpano.
2. Vertaa sitä profiilin vaatimaan kokoonpanoon.
3. Jos kokoonpano on eri, aseta vaadittu kokoonpano.
4. Lue kokoonpano uudelleen uudelleenmäärityksen jälkeen.
5. Jatka vasta, kun hubi ilmoittaa odotetun kokoonpanon.
6. Katkaise yhteys tai pysäytä ohjelma, jos vaadittua kokoonpanoa ei otettu käyttöön.

Tämän hubin valmis profiili näyttää, miten se tehdään.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Lohkoesimerkki Technic Move Hubin kokoonpanon vaihtamisesta ohjelman aikana" />
