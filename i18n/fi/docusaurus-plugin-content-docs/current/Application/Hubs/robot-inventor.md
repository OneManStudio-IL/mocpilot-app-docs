---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor -hubi
description: "Yhdistä LEGO MINDSTORMS Robot Inventor (51515)- tai SPIKE Prime -hubi Bluetoothilla tai USB:llä, käytä sen lohkoja ja palauta hubi toimintaan, jos se lakkaa toimimasta."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor -hubi

LEGO® MINDSTORMS® Robot Inventor -sarjan (51515) hubi on **LEGO® Technic™ Large Hub** (88016): kuusi porttia A–F, 5×5-valomatriisi, kaiutin, gyroskooppi ja kiihtyvyysanturi. MOCPilot ohjaa sitä samoilla lohkoilla kuin Robot Inventor -sovellus, ja lisäksi käytössä on kaikki, mitä MOCPilot tuo mukanaan: kojelauta, peliohjain ja profiilin muut hubit.

**SPIKE™ Prime -hubi** (45601) on samaa laitteistoa LEGO® Education -laiteohjelmistolla. MOCPilot tukee sitä **SPIKE Legacy** -laiteohjelmistolla (beta); katso [Laiteohjelmisto](#firmware).

## Mitä se osaa {#features}

- **Logiikkalohkot**: kaikki Robot Inventor -sovelluksen lohkot, katso [Robot Inventor -lohkot](#blocks).
- **Pikalinkit**: moottorit, anturit, [valomatriisi](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) ja [etäisyysanturin valot](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hubin seuranta**: akku, suunta, kallistus ja porttien laitteet, katso [Hubin seuranta](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Lohko-ohjelman voi suorittaa kahdella tavalla: **suoratoistona**, jolloin MOCPilot suorittaa ohjelmaa ja lähettää komentoja hubille (pidä laite yhdistettynä), tai **latauksena**, jolloin MOCPilot kirjoittaa ohjelman johonkin hubin ohjelmapaikoista ja hubi suorittaa sen itsenäisesti. Katso [Ohjelman suorittaminen hubissa](#download).

## Hubin yhdistäminen {#connect}

Lisää hubi tavalliseen tapaan ([Hubin lisääminen ja yhdistäminen](/docs/Application/Hubs/ConnectingHubs)) ja valitse **Lego® Large Hub** (tai **LEGO® SPIKE™ Prime Hub**). Tietokoneella yhteyssivun yläosassa on valitsin **Bluetooth / USB**. MOCPilot muistaa valintasi tälle hubimallille.

### Bluetoothilla {#bluetooth}

Hubi käyttää perinteistä Bluetoothia, ei Bluetooth Low Energyä: se toimii Androidissa, Macissa ja Windowsissa, mutta ei iPhonessa eikä iPadissa.

1. Kytke hubi päälle.
2. Muodosta laitepari laitteen Bluetooth-asetuksissa tavallisena Bluetooth-laitteena (Windowsissa: **Asetukset → Bluetooth ja laitteet → Lisää laite**). Paina hubin Bluetooth-painiketta, jotta se löytyy.
3. Napauta MOCPilotissa **Skannaa**.

### USB-kaapelilla {#usb}

Windowsissa ja Macissa voit yhdistää hubin myös sen USB-kaapelilla. LEGO-ajuria ei tarvitse asentaa.

1. Yhdistä hubi tietokoneeseen USB-kaapelilla ja kytke hubi päälle.
2. Napauta **Yhdistä**.

Jos MOCPilot ilmoittaa **USB:ssä ei ole hubia**, tarkista kaapeli (jotkin kaapelit vain lataavat) ja että hubi on päällä.

<Screenshot name="robot-inventor-connect" alt="Robot Inventor -hubin yhdistäminen: Bluetooth / USB -valitsin" width={900} />

### Sulje LEGO-sovellus ensin {#close-lego-app}

Hubi hyväksyy vain yhden yhteyden. Jos MINDSTORMS- tai SPIKE-sovellus on auki ja pitää hubia varattuna, MOCPilot ilmoittaa **Hubi on varattu: toinen sovellus käyttää sitä (LEGO MINDSTORMS tai SPIKE). Sulje se sovellus ja yritä uudelleen.** Sulje LEGO-sovellus ja yhdistä uudelleen.

## Robot Inventor -lohkot {#blocks}

Kun profiilissa on Robot Inventor- tai SPIKE Prime -hubi, Logiikkalohkojen palettiin tulevat Robot Inventor -sovelluksen lohkot. Lohkoissa, joita vain tämä hubi voi suorittaa, on mustavalkoinen **hubikuvake**.

| Luokka | Robot Inventor -lohkot |
|---|---|
| [Liike](/docs/Application/BlockBuilder/Blocks/Movement) (uusi luokka) | liikemoottorit, nopeus, matka kierrosta kohden, liikkuminen, ohjaus, tankkiohjaus, kiihtyvyys, pysäytys, ”keskeytyikö liike?” |
| [Moottorit](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | käynnistys teholla, ”keskeytyikö moottori?”, sekä moottorin teho ja jumiutumisen tunnistus |
| [Valo](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | kuva muutamaksi sekunniksi, animaatiot ja kuvaeditori, pikselien kirkkaus, sekä etäisyysanturin valot |
| [Äänet](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | piippaukset, hubin robottiäänet, äänenvoimakkuus, äänitehosteet, musiikki: nuotit, rummut, tauot, soitin, tempo |
| [Anturit](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | voima-anturi, eleet, suunta, kääntö- / nyökkäys- / kallistuskulma, kääntökulman nollaus, kulmanopeus, kiihtyvyys, kallistus, hubien välinen radio |
| [Tapahtumat](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | kun hubia ravistetaan tai napautetaan, se on kyljellään tai kallistettu, kun voima-anturia painetaan, kun radiosignaali saapuu |

Robot Inventor -sovelluksen hallinta-, operaattori-, muuttuja-, lista- ja Minun lohkot -lohkot ovat samat kuin MOCPilotin omat [peruslohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Lohkot, jotka yleiset hubilohkot jo kattavat (moottorin nopeus ja asento, väri- ja etäisyysanturit, valomatriisi, hubin painike, ajastin), ovat tavallisissa luokissaan.

## Ohjelman suorittaminen hubissa {#download}

Kuten Robot Inventor -sovellus, MOCPilot voi kirjoittaa Logiikkalohkot-ohjelman johonkin hubin 20 ohjelmapaikasta (0–19). Hubi suorittaa sen sitten ilman sovellusta: voit katkaista puhelimen tai tietokoneen yhteyden ja käynnistää ohjelman myöhemmin uudelleen hubin omilla painikkeilla.

### Paikkapainike ja paikkakortti {#slot-card}

Kun Robot Inventor- tai SPIKE Prime -hubi on yhdistetty Logiikkalohkot-profiiliin, editorin oikeaan alakulmaan zoomin viereen ilmestyy painike. Se näyttää valitun paikan numeron pienellä 5×5-matriisilla tai suoratoiston merkin. Napauta sitä avataksesi kortin:

- hubi ja valittu paikka; **‹** ja **›** valitsevat paikan 0–19;
- **Lataus / Suoratoisto**: miten **Suorita** toimii tällä hubilla;
- **latauspainike** (⤓): kirjoittaa ohjelman paikkaan käynnistämättä sitä;
- tilarivi: edistyminen, *Paikka 3: ohjelma on hubissa* tai mikä meni vikaan.

Kun yhdistettynä on useita Robot Inventor- tai SPIKE Prime -hubeja, kortissa on myös hubipainike: napauta sitä valitaksesi, mikä hubi saa ohjelman. MOCPilot muistaa tilan ja paikan tällä laitteella.

<Screenshot name="robot-inventor-slot-card" alt="Paikkakortti: hubi, paikkanuolet, Lataus / Suoratoisto -kytkin ja latauspainike" width={500} />

### Lataus {#download-mode}

**Lataus**-tilassa **Suorita** muuntaa lohko-ohjelman hubiohjelmaksi, kirjoittaa sen valittuun paikkaan ja käynnistää sen hubissa. Kirjoittaminen kestää muutaman sekunnin; sen jälkeen ohjelma toimii hubissa itsenäisesti.

- Käynnistääksesi sen myöhemmin uudelleen ilman sovellusta valitse paikka hubin vasemmalla ja oikealla painikkeella ja paina keskipainiketta.
- Hubin **keskipainike** pysäyttää ohjelman.
- Palataksesi suorittamaan ohjelmia MOCPilotista vaihda kortti tilaan **Suoratoisto**.

### Mitä hubissa voi suorittaa {#download-blocks}

Useimmat lohkot voi siirtää hubiin:

- tapahtumat: ohjelman käynnistys, viestit, ehdot, ajastin, hubin painikkeet, anturit, eleet, suunta, kallistus ja radiosignaalit;
- hallinta, operaattorit, muuttujat, listat ja Minun lohkot;
- kaikki Robot Inventor -lohkot sekä tämän hubin moottori-, valo- ja anturilohkot.

Jotkin lohkot tarvitsevat sovellusta eivätkä toimi hubissa yksinään: kojelaudan ja peliohjaimen lohkot, muiden hubien lohkot, **keskipainikkeen** tapahtuma (hubissa tämä painike pysäyttää ohjelman), akku- ja yhteystapahtumat, lämpötila sekä ohjaustangon kalibrointi. Jos ohjelmassa on yksikin niistä, mitään ei kirjoiteta: kortti ilmoittaa **Nämä palikat eivät voi toimia hubissa ilman sovellusta** ja luettelee ne. Poista nämä lohkot tai käytä **Suoratoisto**-tilaa.

Jos kirjoittaminen epäonnistuu, tilarivi kertoo syyn, esimerkiksi **Hubissa ei ole tarpeeksi tilaa** tai **Hubi ei vastannut**. Yritä uudelleen tai käynnistä hubi uudelleen, jos virhe toistuu.

## Laiteohjelmisto {#firmware}

MOCPilot toimii hubin oman LEGO-laiteohjelmiston kanssa eikä korvaa sitä:

- **Robot Inventor -hubi**: MINDSTORMS Robot Inventor -sovelluksen laiteohjelmisto. Viimeisin versio on laiteohjelmisto 1.5.6 ja hubiohjelmisto 3.2.36.
- **SPIKE Prime -hubi**: **SPIKE Legacy** -laiteohjelmisto (SPIKE 2 -sovelluksen laiteohjelmisto). Uudempaa **SPIKE App 3** -laiteohjelmistoa ei tueta: MOCPilot ilmoittaa siitä, kun se löytää tällaisen hubin. Asenna SPIKE Legacy -laiteohjelmisto LEGO® Education SPIKE™ Legacy -sovelluksella ja yhdistä sitten uudelleen.

Kun hubi on valmis, se näyttää ohjelmapaikan numeron valomatriisissaan.

## Jos hubi ei käynnisty {#restore}

Jos hubi ei käynnisty, pysyy pimeänä, ei näytä paikan numeroa tai siihen on vaihdettu SPIKE App 3 -laiteohjelmisto, palauta se ensin virallisella sovelluksella:

1. Avaa MINDSTORMS Robot Inventor -sovellus (SPIKE Prime -hubille SPIKE Legacy -sovellus) ja yhdistä hubi USB-kaapelilla.
2. Käynnistä hubin päivitys (**Update hub firmware**). Se kirjoittaa uudelleen laiteohjelmiston, hubiohjelmiston ja robottiäänet ja kestää noin 6 minuuttia. Älä irrota hubia sen aikana.
3. Sulje LEGO-sovellus ja yhdistä hubi MOCPilotissa.

### Palautustila (DFU) {#dfu}

Vain jos virallinen sovellus ei näe hubia lainkaan, voit kirjoittaa laiteohjelmiston hubin palautustilan (DFU) kautta. Tämä on kokeneille käyttäjille:

1. Sammuta hubi ja irrota se. Pidä **Bluetooth-painiketta** painettuna ja kytke USB-kaapeli; pidä painettuna, kunnes painikkeen valo vilkkuu punaisena, vihreänä ja sinisenä. Tietokone näkee nyt laitteen ”LEGO Technic Large Hub in DFU Mode”.
2. Asenna Windowsissa kerran WinUSB-ajuri tälle laitteelle, esimerkiksi Zadigilla. Mac ja Linux eivät tarvitse ajuria.
3. Kirjoita Robot Inventor -sovelluksen laiteohjelmistokuva (1.5.6) `dfu-util`-työkalulla osoitteeseen `0x08008000`. Hubi käynnistyy itsestään uudelleen, kun kirjoitus on valmis. Älä irrota sitä kirjoituksen aikana.
4. Suorita sitten Robot Inventor -sovelluksessa **Update hub firmware** (katso yllä) palauttaaksesi hubiohjelmiston ja äänet.

DFU kirjoittaa vain laiteohjelmiston. Itse palautuskäynnistyslataajaa ei voi korvata, joten voit aina yrittää uudelleen.
