---
id: FirstCarLinks
title: Ensimmäinen RC-autosi Pikalinkeillä
description: "Vaihe vaiheelta: rakenna Pikalinkeillä kauko-ohjattava LEGO-auto, jossa on veto, servo-ohjaus ja valot, ilman koodia."
---

import Screenshot from '@site/src/components/Screenshot';

# Ensimmäinen RC-autosi Pikalinkeillä {#your-first-rc-car-with-quick-links}

Tässä opetusohjelmassa rakennat [Pikalinkeillä](/docs/Application/Links/LinksIntroducing) täydellisen kauko-ohjattavan auton: yksi ohjainsauva ajaa ja ohjaa, ja painike sytyttää ja sammuttaa valot. Siihen menee noin 15 minuuttia, eikä sinun tarvitse kirjoittaa riviäkään koodia.

**Mitä tarvitset**

- LEGO® Technic™ Hub (88012);
- vetomoottori **porttiin A**;
- asentoanturilla (enkooderilla) varustettu ohjausmoottori **porttiin B**, esimerkiksi Technic L- tai XL-moottori tai mikä tahansa Technic-kulmamoottori. Ohjauksessa on oltava rajoittimet: pyörät kääntyvät vasemmalle ja oikealle vain tiettyyn rajaan asti;
- LEGO®-valot **porttiin C** (valinnainen);
- MOCPilot puhelimessa, tabletissa tai tietokoneessa, jossa on Bluetooth.

:::note City Hub
City Hubissa (88009) on vain kaksi porttia. Kytke vetomoottori porttiin **A** ja ohjausmoottori porttiin **B** ja jätä valot pois, tai lisää niille toinen hubi. Kaikki muu toimii samalla tavalla.
:::

**Lopputulos**: profiili, jossa on kolme riviä:

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | JOY1, Y-akseli | Pehmeä | Moottori | Technic Hub, portti A |
| 2 | JOY1, X-akseli | | Servo (Auto) | Technic Hub, portti B |
| 3 | BTN1 | Vaihto | Valo | Technic Hub, portti C |

## 1. Luo profiili {#create-the-profile}

1. Siirry kohtaan **Omat profiilit** ja aloita uusi profiili: puhelimessa napauta **+** → **Uusi profiili**, tabletissa napauta otsakkeen **Uusi profiili**, tietokoneella valitse **Tiedosto → Uusi profiili**.
2. Valitse **Pikalinkit**-ruutu.
3. Kirjoita **Nimi**, esimerkiksi ”Ensimmäinen autoni”. Kuva ja hashtagit ovat toistaiseksi valinnaisia.
4. Napauta **Luo**. Profiili avautuu Pikalinkit-editoriin, jossa on yksi tyhjä rivi.

Ohjelman tyyppiä ei voi muuttaa myöhemmin. Lisätietoja sivulla [Profiilin luominen](/docs/Application/Profiles/CreateProfile).

## 2. Lisää ja yhdistä hubi {#add-the-hub}

1. Napauta editorissa **Omat hubit**.
2. Napauta vapaassa paikassa **Lisää uusi keskitin**, valitse luettelosta Technic Hub ja napauta **Lisää**.
3. Kytke hubi päälle ja paina sen painiketta. MOCPilot löytää sen ja yhdistää; hubi jää paikkaansa.
4. Jos näkyviin tulee **Laiteohjelmiston päivitys vaaditaan** -ikkuna, napauta **Päivitä** ja pidä hubi päällä ja lähellä, kunnes päivitys on valmis. Katso [Laiteohjelmiston päivittäminen](/docs/Application/Hubs/FirmwareUpdating).

Vinkki: avaa yhdistetty hubi nähdäksesi sen [hubin seurannan](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Se näyttää, mikä laite on kytketty kuhunkin porttiin, joten voit tarkistaa moottorit ennen rivien rakentamista.

Lisätietoja sivulla [Hubin lisääminen ja yhdistäminen](/docs/Application/Hubs/ConnectingHubs).

## 3. Lisää ohjaimet kojelautaan {#dashboard}

1. Avaa **Kojelauta** ja napauta **+** (**Lisää ohjain**).
2. Valitse **Ohjaimet**-ryhmästä **Ohjainsauva** ja napauta **Lisää kojelautaan**. Sen nimeksi tulee **JOY1**. Jätä **Akselin tyyppi** -asetukseksi **Molemmat akselit (X, Y)**: ylös ja alas ajavat, vasemmalle ja oikealle ohjaavat.
3. Napauta taas **+**. Valitse **Painikkeet ja kytkimet** -ryhmästä **Painike** ja napauta **Lisää kojelautaan**. Sen nimeksi tulee **BTN1**.
4. Vedä ohjainsauva vasemmalle ja painike oikealle, peukaloidesi kohdalle. Napauta ohjainta muuttaaksesi sen kokoa (**S**, **M** tai **L**) tai tyyliä.

<Screenshot name="tutorial-car-dashboard" alt="Kojelauta, jossa JOY1-ohjainsauva on vasemmalla ja BTN1-painike oikealla" width={900} />

Haluatko ajaa ja ohjata eri peukaloilla? Lisää sen sijaan kaksi ohjainsauvaa: **JOY1** asetuksella **Vain pystysuunnassa (Y)** ja **JOY2** asetuksella **Vain vaaka (X)**, ja käytä JOY2:ta ohjausrivillä.

Lisätietoja sivuilla [Ohjainten lisääminen ja järjestäminen](/docs/Application/Dashboard/ArrangingControls) ja [Ohjaintyypit](/docs/Application/Dashboard/ControlTypes).

### Vaihtoehto: ohjauspyörä ja polkimet {#wheel-and-pedals}

Jos sinulla on **Ohjauspyörä**- ja **Polkimet**-[erikoisohjaimet](/docs/Application/Dashboard/SpecialControls), voit käyttää niitä ohjainsauvan sijaan. Rakenna vaiheessa 4 rivi 1 [Ajoneuvo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)-syötteestä, jonka **Lähtö**-asetus on **Nopeus** (se kiihdyttää ja hidastaa kuin oikea auto, joten Pehmeää ei tarvita), ja rivi 2 **Ohjauspyörä**-syötteestä **Ohjauskulma**-kanavalla.

## 4. Rakenna rivit {#rows}

Palaa ohjelmaan. Alareunan paletissa on kolme välilehteä: **Syötteet**, **Käsittely** ja **Lähdöt**. Jokainen rivi kulkee vasemmalta oikealle: syöte → käsittely → toiminto → hubi. Editorin toiminta: [Johdanto Pikalinkkeihin](/docs/Application/Links/LinksIntroducing).

### Rivi 1: veto {#row-drive}

1. Vedä **Syötteet**-välilehdeltä **JOY1** **Y-akseli**-kanavalla tyhjälle riville (”Uusi rivi: syöte”). Sen alle ilmestyy uusi tyhjä rivi.
2. Vedä **Käsittely**-välilehdeltä **Pehmeä** syötteen perään. Oletusarvot **Kiihdytys (täyteen nopeuteen)** ja **Hidastus (pysähdykseen)** 0,5 s ovat hyvä lähtökohta.
3. Vedä **Lähdöt**-välilehdeltä **Moottori** Pehmeän perään.
4. Vedä **Technic Hub** -lähtö Moottorin perään ja napauta **A**-porttisirua.

### Rivi 2: ohjaus {#row-steering}

1. Vedä **JOY1** **X-akseli**-kanavalla seuraavalle tyhjälle riville.
2. Vedä **Servo** **Lähdöt**-välilehdeltä.
3. Napauta Servo-lohkoa ja aseta **Kalibrointi**-asetukseksi **Auto**.
4. Vedä **Technic Hub** -lähtö Servon perään ja napauta **B**.

**Auto**-tilassa ohjausmoottori kääntyy aina ohjelman käynnistyessä molempiin ääriasentoihin; keskikohdasta tulee keskiasento ja liikealueesta ohjauskulma. Kokeile heti napauttamalla Servon asetuksissa **Kalibroi nyt**, kun hubi on yhdistetty. Jos kalibrointi epäonnistuu, tarkista hubi ja moottori sekä se, että ohjauksessa todella on rajoittimet.

<Screenshot name="links-servo-settings" alt="Servo-lohkon asetukset" width={900} />

Ei rajoittimia? Käytä **Manuaalinen**-tilaa: käännä pyörät käsin suoraan, napauta **Aseta nollaksi** ja valitse **Kulma**. Katso [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Rivi 3: valot {#row-lights}

1. Vedä **BTN1** seuraavalle tyhjälle riville.
2. Vedä **Vaihto** **Käsittely**-välilehdeltä. Se muuttaa painikkeen kytkimeksi: paina kerran päälle, uudelleen pois.
3. Vedä **Valo** **Lähdöt**-välilehdeltä.
4. Vedä **Technic Hub** -lähtö Valon perään ja napauta **C**.

<Screenshot name="tutorial-car-links-rows" alt="Auton kolme valmista riviä: veto, ohjaus ja valot" width={900} />

Kun kaikki kolme riviä ovat valmiita, yläpalkin **Ongelmat**-painikkeessa näkyy vihreä valintamerkki. Punainen ”!” kertoo, montako ongelmaa on jäljellä; napauta sitä ja sitten ongelmaa siirtyäksesi riville. Katso [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems).

## 5. Suorita ja testaa {#run}

1. Nosta auto telineelle tai pidä sitä niin, että pyörät eivät kosketa pöytää.
2. Paina **Suorita**. Ohjausmoottori kalibroituu: se kääntyy molemmille puolille ja palaa keskelle.
3. Työnnä ohjainsauvaa ylös ja alas: auto ajaa eteen- ja taaksepäin ja lähtee ja pysähtyy pehmeästi. Liikuta sitä vasemmalle ja oikealle: pyörät kääntyvät.
4. Paina **BTN1**: valot syttyvät. Paina uudelleen: ne sammuvat.
5. Palaa muokkaamaan painamalla **Pysäytä**.

Ohjelman ollessa käynnissä jokainen lohkojen välinen liitos näyttää sen läpi kulkevan arvon, joten voit seurata signaalia ohjainsauvasta hubiin asti.

<Screenshot name="links-live-values" alt="Käynnissä oleva Pikalinkit-ohjelma, jonka liitoksissa näkyvät reaaliaikaiset arvot" width={900} />

Lisätietoja sivulla [Mallin ajaminen (Suorita)](/docs/Application/Profiles/PlayMode).

## 6. Hienosäädä {#tune}

Paina ensin **Pysäytä**: rivejä ei voi muokata ohjelman ollessa käynnissä.

- **Ajaako auto taaksepäin, kun työnnät ylös?** Lisää riville 1 **Käännä**. Sama toimii rivillä 2, jos pyörät kääntyvät väärään suuntaan.
- **Huriseeko tai ryömiikö moottori, kun ohjainsauva on vapaana?** Lisää riville 1 **Kuollut alue** ennen Pehmeää. Oletusarvo **Alue** 10 % on hyvä lähtökohta.
- **Liian nopea?** Lisää riville 1 **Rajoitus**, esimerkiksi **Enintään** 50 %.
- **Liian hidas reagoimaan?** Napauta Pehmeää ja valitse lyhyempi aika tai **Heti**.

Hyvä järjestys vetoriville on *Kuollut alue → Rajoitus → Pehmeä*. Kaikki asetukset: [Käsittelylohkot](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Valinnainen: aja peliohjaimella {#gamepad}

1. Muodosta Xbox- tai PlayStation-tyyppisen peliohjaimen ja laitteesi välille pari järjestelmän Bluetooth-asetuksissa.
2. Avaa editorissa **Peliohjain** ja ota käyttöön **Ota peliohjaimen lohkot käyttöön**.
3. Poista kultakin riviltä kojelaudan syöte vetämällä se takaisin palettiin ja vedä **Peliohjain**-syöte sen tilalle. Aseta sen **Syöte**: rivillä 1 **Vasen sauva Y**, rivillä 2 **Oikea sauva X** ja rivillä 3 **A** (PlayStationissa **Risti**).

Kukin portti voi kuulua vain yhdelle riville, joten rivi ohjaa porttia joko kojelaudalta tai peliohjaimelta. Lisätietoja sivulla [Peliohjain](/docs/Application/Dashboard/Gamepad).

## Jos jokin ei liiku {#if-something-does-not-move}

1. Onko hubi yhdistetty? Tarkista **Omat hubit** ja Hubi-lohkon yhteyspiste.
2. Onko moottorit kytketty niihin portteihin, jotka valitsit riveillä?
3. Näkyykö **Ongelmat**-painikkeessa vihreä valintamerkki, ja onko jokainen rivi päällä?
4. Onko ohjelma käynnissä?
5. Suorita ohjelma ja seuraa reaaliaikaisia arvoja: jos arvo muuttuu syötteessä mutta moottori ei pyöri, tarkista hubi ja portti.

Ilmoitus, kuten ”Portti B: tämä laite ei voi toimia servona (tarvitaan anturoitu moottori)”, tarkoittaa, että kyseisen portin moottorissa ei ole enkooderia. Lisää ilmoituksia ja korjauksia: [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems) ja [Vianmääritys](/docs/Help/Troubleshooting).

## 8. Tallenna ja jaa {#save-and-share}

Tallenna-painiketta ei ole: profiili säilyttää muutoksesi. Kun olet kirjautunut sisään, se myös [synkronoituu](/docs/Application/Account/Sync) muille laitteillesi.

- **Jaa tiedostona**: napauta **Omat profiilit** -sivulla profiilin kortin **Jaa** (tietokoneella **Jaa…**). Saat `.dat`-tiedoston, jonka voit lähettää ystävälle. Katso [Profiilien hallinta](/docs/Application/Profiles/ManageProfiles).
- **Julkaise katalogissa**: avaa **Muokkaa profiilia** ja napauta **Lähetä katalogiin**. Lisää ensin kuva, kuvaus ja hashtag. Katso [Katalogi ja julkaiseminen](/docs/Application/Profiles/Catalog).

## Seuraavat vaiheet {#next-steps}

- Pidä akkua silmällä: lisää kojelautaan **Akun varaus** -ohjain tai tekstiä näyttävä **Seuranta** ja rivi *Technic Hub (Akku) → Ilmaisin*. Katso [Ilmaisimet ja näytöt](/docs/Application/Dashboard/Indicators).
- Rakenna sama auto Logiikkalohkoilla: [Sama auto Logiikkalohkoilla](/docs/Tutorials/FirstCarBlocks).
- Lisää reseptejä: panssarivaunu, nosturi ja juna sivulla [Esimerkit](/docs/Application/Links/Examples).
- Anna kojelaudalle uusi ilme [teemoilla](/docs/Application/Themes/ThemesOverview).
