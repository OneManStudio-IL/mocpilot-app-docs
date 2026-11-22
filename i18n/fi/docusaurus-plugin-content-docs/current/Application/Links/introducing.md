---
id: LinksIntroducing
title: Pikalinkit lyhyesti
description: "Pikalinkit yhdistää kojelaudan ohjaimet hubin moottoreihin ja valoihin rivi kerrallaan, ilman koodia."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Pikalinkit {#quick-links}

**Pikalinkit** on MOCPilotin ohjelmaeditori, jossa ei tarvitse kirjoittaa koodia. Yhdistät kojelaudan ohjaimet, peliohjaimen tai hubin anturit moottoreihin, valoihin ja ilmaisimiin **rivi kerrallaan**. Jos olet käyttänyt klassista Controlz-sovellusta, tunnet olosi heti kotoisaksi.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Pikalinkkien rivejä" style={{width: '100%', maxWidth: 720}} />

## Rivi luetaan kuin lause {#a-row-reads-like-a-sentence}

Jokainen rivi etenee vasemmalta oikealle:

**Syöte → Käsittely (valinnainen) → Toiminto → Lähtö**

> *Ohjainsauva 1, Y-akseli* → *Pehmeä* → *Moottori* → *Technic Hub, portti A*
>
> ”Kun liikutan ohjainsauvaa ylös ja alas, portin A moottori pyörii ja käynnistyy ja pysähtyy pehmeästi.”

| Osa | Mikä se on | Esimerkkejä |
|---|---|---|
| **Syöte** | mistä arvo tulee | kojelaudan ohjain, simuloitu ajoneuvo, peliohjain, hubin painike tai anturi |
| **Käsittely** | muuttaa arvoa matkalla (ei yhtään, yksi tai useampi lohko) | Käännä, Rajoitus, Kuollut alue, Kynnys, Pehmeä, Vaihto |
| **Toiminto** | mitä hubin pitää tehdä | Moottori, Servo, Moottori ajan, Valo, Pyöritä asteina, Siirry asentoon… |
| **Lähtö** | missä se tapahtuu | **Hubi** portteineen tai suora lähtö: Ilmaisin, Hubin LED, LED-matriisi, Kalibroi servot |

Suorat lähdöt (Ilmaisin, Hubin LED, LED-matriisi, Kalibroi servot) eivät tarvitse toimintoa: *Hubin akku → Ilmaisin*.

## Editori {#the-editor}

<Screenshot name="links-editor" alt="Pikalinkkien editori riveineen ja paletteineen" width={900} />

- **Rivit** täyttävät näytön ja vierivät pystysuunnassa. Uusi rivi aloitetaan viimeiseltä, tyhjältä riviltä (”Uusi rivi: syöte”).
- Alareunan **paletissa** on kolme välilehteä: **Syötteet**, **Käsittely** ja **Lähdöt**. Paletti kootaan profiilistasi: jokainen kojelaudan ohjain ja jokainen Omien hubien hubi näkyy siinä automaattisesti, peliohjain näkyy, kun peliohjainlohkot ovat käytössä, ja toiminto näkyy vain, jos jokin profiilin hubeista osaa sen.
- Rivien tila yläpalkissa, juuri ennen **Suorita**-painiketta, näyttää vihreän valintamerkin, kun kaikki rivit ovat valmiita, tai punaisen ”!” ja ongelmien määrän. Tietokoneella siinä lukee myös **Kaikki rivit ovat valmiita** tai **Ongelmia: N**.

## Rakenna rivi {#build-a-row}

1. Vedä syöte **Syötteet**-välilehdeltä tyhjälle riville. Uusi rivi luodaan.
2. Vedä tarvittaessa käsittelylohkoja **Käsittely**-välilehdeltä syötteen perään.
3. Vedä toiminto (esimerkiksi **Moottori**) **Lähdöt**-välilehdeltä.
4. Vedä **Hubi**-lähtö toiminnon perään ja napauta käytettäviä portteja.
5. Napauta mitä tahansa lohkoa muuttaaksesi sen asetuksia: valitset vaihtoehdoista, kirjoittamista ei tarvita.

Lohkot sopivat yhteen kuin palapelin palat. Liitoksen muoto kertoo signaalin tyypin, joten yhteensopimattomat lohkot eivät napsahda paikalleen:

- **arvo** väliltä −1…1 (ohjainsauvan akselit, liukusäätimet, polkimet, anturit);
- **päällä/pois** (painikkeet, kytkimet, kynnykset);
- **toiminto → hubi** -liitos, joten hubi voi tulla vain toiminnon perään.

Poista lohko vetämällä se takaisin palettiin (”Pudota tähän poistaaksesi”) tai napauttamalla sitä ja valitsemalla **Poista lohko**.

## Rivit {#rows}

Avaa rivivalikko napauttamalla rivin numeroa:

- **Poista käytöstä** / **Ota käyttöön**: käytöstä poistettu rivi pysyy ohjelmassa, mutta sitä ei suoriteta. Kätevää kokeiluissa.
- **Poista rivi**.

Rivejä voi lisätä niin monta kuin haluat.

## Suorita {#run}

Paina **Suorita**. Ohjelman käydessä jokainen liitos näyttää sen läpi kulkevan **reaaliaikaisen arvon**, joten näet tarkalleen, mihin signaali pysähtyy. Ohjelmaa ei voi muokata sen ollessa käynnissä; paina **Pysäytä**, niin voit taas muokata. Katso [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems).

## Kumoa {#undo}

**Kumoa** ja **Tee uudelleen** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z tai yläpalkin painikkeet) palaavat enintään 100 vaihetta. Ne eivät ole käytettävissä ohjelman ollessa käynnissä.

## Lue lisää {#read-more}

- [Syötteet](/docs/Application/Links/Inputs): ohjaimet, ajoneuvo, peliohjain, hubin painikkeet ja anturit
- [Käsittely](/docs/Application/Links/Processing): Käännä, Rajoitus, Kuollut alue, Kynnys, Pehmeä, Vaihto
- [Toiminnot ja lähdöt](/docs/Application/Links/Operations)
- [Hubi-lohko ja portit](/docs/Application/Links/HubsAndPorts)
- [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems)
- [Esimerkit: auto, panssarivaunu, nosturi, juna](/docs/Application/Links/Examples)
- Lohkohakemisto: [syötteet](/docs/Application/Links/Blocks/InputBlocks), [käsittely](/docs/Application/Links/Blocks/ProcessingBlocks), [toiminnot ja lähdöt](/docs/Application/Links/Blocks/OutputBlocks)

## Pikalinkit vai Logiikkalohkot? {#quick-links-or-logic-blocks}

Pikalinkit sopii parhaiten, kun jokainen ohjain yksinkertaisesti liikuttaa jotakin. Kun tarvitset logiikkaa (sarjoja, ehtoja, muuttujia tai monivaiheisen reaktion anturiin), käytä [Logiikkalohkoja](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Ohjelman tyyppi valitaan profiilia luotaessa; katso [vertailu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
