---
id: QuickStart
title: Pikaopas
description: "Asenna MOCPilot, kirjaudu sisään, luo ensimmäinen profiilisi ja aja mallia muutamassa minuutissa."
---

import Screenshot from '@site/src/components/Screenshot';

# Pikaopas {#quick-start}

Tämä opas vie sinut sovelluksen asentamisesta ensimmäisen mallisi ajamiseen. Tarvitset tuetun hubin ja moottorin; katso [Tuetut laitteet](/docs/Introducing/SupportedDevices).

## 1. Asenna sovellus {#1-install-the-app}

MOCPilot on saatavilla App Storesta (iPhone, iPad, Mac), Google Playsta (Android) ja Microsoft Storesta (Windows). Linkit löydät osoitteesta [mocpilot.com](https://mocpilot.com).

## 2. Kirjaudu sisään tai jatka ilman tiliä {#2-sign-in-or-continue-without-an-account}

Ensimmäisellä käynnistyskerralla sovellus pyytää sinua kirjautumaan sisään. Käytä sähköpostiosoitettasi tai käyttäjätunnustasi ja salasanaa, Googlea tai Apple ID:tä, tai luo uusi tili.

<Screenshot name="sign-in" alt="MOCPilotin kirjautumisnäkymä" width={900} />

Suosittelemme tiliä:

- profiilisi ja asetuksesi tallennetaan palvelimelle ja synkronoidaan laitteidesi välillä;
- saat tietosi takaisin, jos vaihdat laitteen tai kadotat sen;
- ostokset ja MocPilot Pro toimivat kaikilla laitteillasi.

**Jatka ilman tiliä** toimii myös, mutta silloin kaikki pysyy vain tällä laitteella ja katoaa, jos poistat sovelluksen. Voit kirjautua sisään myöhemmin kohdassa **Asetukset → Tili**. Katso [Tili](/docs/Application/Account/UserAccount).

## 3. Tutustu sovellukseen {#3-find-your-way-around}

- **Puhelimessa** alapalkissa ovat **Profiilit**, **Asetukset** ja **Ohje** (sekä kirjautumisen jälkeen **Ilmoitukset**).
- **Tabletissa** samat osiot, **Profiilikatalogi** ja tilisi ovat sivupalkissa.
- **Tietokoneella** käytä yläpalkkia: valikot vasemmalla; Tili, Ilmoitukset ja Asetukset oikealla.

Katso [Puhelin, tabletti ja työpöytä](/docs/Introducing/Layouts).

## 4. Luo profiili {#4-create-a-profile}

1. Napauta **Omat profiilit** -sivulla **+** → **Uusi profiili** (puhelin) tai valitse **Uusi profiili** (tabletti ja tietokone, tai **Tiedosto → Uusi profiili**).
2. Valitse **ohjelman tyyppi**:
   - **Pikalinkit**, jos haluat ajaa mallia ilman koodia. Paras ensimmäiseen kokeiluun.
   - **Logiikkalohkot**, jos haluat käyttää tapahtumia, silmukoita, ehtoja ja antureita.
3. Kirjoita **nimi** ja lisää halutessasi kuva.
4. Napauta **Luo**.

<Screenshot name="create-profile-tiles" alt="Uusi profiili -sivu, jossa ovat Logiikkalohkot- ja Pikalinkit-ruudut" width={900} />

Profiili avautuu editoriin. Lisätietoja sivulla [Profiilin luominen](/docs/Application/Profiles/CreateProfile).

:::tip Haluatko valmiin mallin?
Avaa **Profiilikatalogi** (profiilisivun **Hae verkosta**) ja asenna settisi virallinen profiili. Katso [Katalogi ja julkaiseminen](/docs/Application/Profiles/Catalog).
:::

## 5. Lisää hubisi {#5-add-your-hub}

1. Avaa editorissa **Omat hubit**.
2. Napauta vapaassa paikassa **Lisää uusi keskitin**, valitse hubisi malli ja napauta **Lisää**.
3. Kytke hubi päälle, paina sen painiketta ja odota, kunnes MOCPilot löytää sen.

<Screenshot name="my-hubs" alt="Omat hubit -sivu hubipaikkoineen" width={900} />

Jos sovellus pyytää päivittämään laiteohjelmiston, toimi sivun [Laiteohjelmiston päivittäminen](/docs/Application/Hubs/FirmwareUpdating) ohjeiden mukaan. Lisätietoja sivulla [Hubin lisääminen ja yhdistäminen](/docs/Application/Hubs/ConnectingHubs).

## 6. Sijoita ohjaimet kojelautaan {#6-place-controls-on-the-dashboard}

1. Avaa **Kojelauta**.
2. Napauta **+** (**Lisää ohjain**), valitse **Ohjainsauva** ja napauta **Lisää kojelautaan**.
3. Vedä se haluamaasi kohtaan. Napauta sitä muuttaaksesi sen kokoa, väriä tai toimintaa.

<Screenshot name="controller-palette" alt="Lisää ohjain -paletti, jossa ohjainsauva on valittuna" width={900} />

Katso [Ohjainten lisääminen ja järjestäminen](/docs/Application/Dashboard/ArrangingControls).

## 7. Yhdistä ohjain moottoriin {#7-connect-the-control-to-a-motor}

**Pikalinkit:** vedä ohjainsauvan syöte (esimerkiksi *JOY1 Y-akseli*) kohdasta **Syötteet** tyhjälle riville, lisää **Moottori**-toiminto ja **Hubi**-lähtö kohdasta **Lähdöt** ja napauta sitten porttia, johon moottorisi on kytketty. Rivi on valmis, kun sen ympärillä ei ole punaista kehystä. Katso [Pikalinkit](/docs/Application/Links/LinksIntroducing).

**Logiikkalohkot:** lisää *kun ohjelma käynnistyy* -lohko, *toistaa aina* -silmukka ja *aseta moottorin nopeus* -lohko, joka saa ohjainsauvan arvon. Katso [Logiikkalohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) ja [esimerkit](/docs/Application/BlockBuilder/Examples).

## 8. Paina Suorita {#8-press-run}

Paina **Suorita** (▶). Liikuta ohjainsauvaa, ja moottori pyörii. Palaa muokkaamaan painamalla **Pysäytä**.

Siinä kaikki. Seuraavaksi:

- Tutustu kaikkiin [ohjaintyyppeihin](/docs/Application/Dashboard/ControlTypes).
- Anna kojelaudalle uusi ilme [teemoilla](/docs/Application/Themes/ThemesOverview).
- Yhdistä [peliohjain](/docs/Application/Dashboard/Gamepad).
- Jos jokin ei toimi, katso [Vianmääritys](/docs/Help/Troubleshooting).
