---
id: Troubleshooting
title: Vianmääritys
description: "Ratkaisuja yleisiin ongelmiin, jotka liittyvät hubeihin, moottoreihin, kojelautaan, synkronointiin, ostoksiin, päivityksiin, ääneen, tekoälyrakentajaan ja etäohjaukseen."
---

# Vianmääritys {#troubleshooting}

## Hubit {#hubs}

**Hubia ei löydy**
- Kytke Bluetooth päälle ja salli MOCPilotin käyttää Bluetoothia (Androidissa myös Lähellä olevat laitteet tai Sijainti) järjestelmäasetuksissa. Katso [Bluetooth ja käyttöoikeudet](/docs/Help/BluetoothPermissions).
- Kytke hubi päälle ja paina sen painiketta juuri ennen hakua; napauta uudelleen **Aloita skannaus**.
- Varmista, ettei hubi ole yhdistettynä toiseen puhelimeen tai sovellukseen (LEGO®-sovellukset, toinen kauko-ohjain). Sulje ne.
- Vaihda tai lataa paristot.
- Robot Inventor: ei käytettävissä iPhonessa ja iPadissa. Mould King 4.0: ei käytettävissä Windowsissa.

**Hubin yhteys katkeaa**
- Siirrä laite lähemmäs: seinät, metalli ja muut 2,4 GHz:n laitteet lyhentävät kantamaa.
- Heikot paristot aiheuttavat yhteyskatkoja kuormituksessa: lataa tai vaihda ne.
- Jotkin hubit sammuvat, kun ne eivät hetkeen saa komentoja; yhdistä uudelleen kohdassa **Omat hubit**.
- Lisää kantamasta, sovittimista ja käyttöoikeuksista: [Bluetooth ja käyttöoikeudet](/docs/Help/BluetoothPermissions).

**”Laiteohjelmiston päivitys vaaditaan”**
- MOCPilot tarvitsee tuetun laiteohjelmiston Technic-, Technic Move-, BOOST- ja City-hubeille. Toimi sivun [Laiteohjelmiston päivittäminen](/docs/Application/Hubs/FirmwareUpdating) ohjeiden mukaan. Jos päivitys epäonnistui, katso [Laiteohjelmiston palautus](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King ei reagoi**
- Mould King -hubit vain vastaanottavat komentoja. Käytä toimintoa **Yhdistä uudelleen**, tarkista kanava (**Valitse kanava**) ja käytä profiilissa vain yhtä Mould King -tyyppiä.

## Moottorit ja ohjelma {#motors-and-the-program}

**Moottori ei liiku**
- Onko ohjelma käynnissä (**Suorita**)? Onko hubi yhdistetty?
- Onko moottori siinä portissa, jota ohjelma käyttää? Tarkista [hubin seuranta](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Pikalinkit: avaa **Ongelmat**; seuraa reaaliaikaisia arvoja rivillä. Katso [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems).
- Logiikkalohkot: alkaako skripti tapahtumalohkolla? Seuraa arvoja **Seuranta**-näkymässä.

**Moottori pyörii väärään suuntaan**
- Pikalinkit: lisää riville **Käännä**. Logiikkalohkot: kerro arvo luvulla −1.

**Moottori ryömii tai hurisee, kun ohjainsauva on vapaana**
- Pikalinkit: lisää **Kuollut alue**. Logiikkalohkot: ohita pienet arvot *on välillä* -lohkolla.

**Servo-ohjaus on vinossa tai osuu rajoittimeen**
- Pikalinkit: Servo **Auto**-kalibroinnilla tai **Manuaalinen** käyttäen asetuksia **Aseta nollaksi** ja **Keskikohta**; pienennä **Kulmaa**. Logiikkalohkot: *kalibroi ohjausrata*.
- Servo, Pyöritä asteita ja Siirry asentoon vaativat enkooderilla varustetut moottorit; yksinkertaiset moottorit ja SBrickin portit ottavat vastaan vain nopeuden.

**Moottorit jatkavat pyörimistä Pysäytä-painalluksen jälkeen**
- Logiikkalohkot: ota Editorin asetuksissa käyttöön **Pysäytä hubin portit, kun ohjelma pysähtyy**.

## Kojelauta {#dashboard}

**En voi siirtää tai poistaa ohjainta**
- Se on lukittu: valitse sen valikosta **Avaa lukitus**. Ohjainta, jota ohjelma käyttää, ei voi poistaa, ennen kuin poistat sen rivit tai lohkot.

**”Kojelaudalla ei ole vapaata tilaa”**
- Siirrä tai pienennä muita ohjaimia tai valitse pienempi koko.

**Teema tai ohjain on lukittu**
- Sinulla ei ole sitä: osta se tai hanki [MocPilot Pro](/docs/Application/Account/Pro), tai vaihda ohjain Perus-teemaan toiminnolla **Vaihda teema**.

**Peliohjainta ei tunnisteta**
- Muodosta peliohjaimen kanssa pari järjestelmän Bluetooth-asetuksissa (tai kytke se USB:llä). **Peliohjain**-sivulla näkyy **Peliohjain: (nimi)**, kun sovellus näkee sen, ja ”Peliohjainta ei ole yhdistetty”, kun se ei näe.
- Ota **Peliohjain**-sivulla käyttöön **Ota peliohjaimen lohkot käyttöön**, muuten peliohjaimen syötteet ja lohkot eivät näy.
- Onko yhdistettynä useita peliohjaimia? Valitse yksi kohdassa **Valitse peliohjain**.
- Tarkista painikkeet ja sauvat toiminnolla **Testaa peliohjain**.
- Windows: Xbox (XInput) -ohjaimet ja Sony DualSense / DualSense Edge toimivat; muut ohjaimet, jotka eivät tue XInputia, eivät välttämättä toimi.
- Katso [Peliohjain](/docs/Application/Dashboard/Gamepad).

## Profiilit ja synkronointi {#profiles-and-sync}

**Profiilini eivät näy toisella laitteellani**
- Kirjaudu sisään samalla tilillä molemmilla laitteilla ja tarkista internetyhteys. Jos sovellus näyttää **Offline**, napauta **Yritä uudelleen** tai **Siirry verkkoon**.

**”Profiili ei ole yhteensopiva”**
- Profiili on tehty MOCPilotin uudemmalla versiolla. Päivitä sovellus.

**Menetin profiilini uudelleenasennuksen jälkeen**
- Vierastilassa profiilit ovat vain laitteella ja katoavat sovelluksen mukana. Tilin kanssa kirjaudu uudelleen sisään, niin ne palaavat.

## Tilin sähköpostit {#account-emails}

**Aktivointiviesti tai salasanan palautuskoodi ei saavu**
- Odota muutama minuutti ja tarkista roskapostikansio. Viestit tulevat osoitteesta no-reply@mocpilot.com.
- Tarkista, että kirjoitit sähköpostiosoitteen oikein.
- Aktivointi: avaa tilisivusi ja napauta **Lähetä aktivointiviesti uudelleen**. Ennen kuin tili on vahvistettu, osa toiminnoista on poissa käytöstä.
- Salasanan palautus: ”Sähköpostia ei löydy” tarkoittaa, ettei tällä sähköpostiosoitteella ole tiliä; kokeile osoitetta, jolla rekisteröidyit. Muuten napauta uudelleen **Nollaa** kohdan ”Unohtuiko salasana?” vieressä saadaksesi uuden koodin. Katso [Tili](/docs/Application/Account/UserAccount).

## Ostokset {#purchases}

**Ostos puuttuu**
- Kirjaudu sisään tilillä, jolla teit ostoksen, ja siirry kohtaan **Tili → Ostokset → Palauta**.
- ”Tilaus on liitetty toiseen tiliin”: tämän kauppatilin Pro-tilaus kuuluu toiselle MOCPilot-tilille.

**”MocPilot Pro on tarkistettava verkossa”**
- Prota on käytetty offline-tilassa pitkään. Yhdistä internetiin, niin tarkistus tehdään itsestään.

## Sovelluspäivitykset {#app-updates}

**”Päivitys vaaditaan”**
- Koko näytön ilmoitus ”Tätä MOCPilot-versiota ei enää tueta…” tarkoittaa, ettei tätä versiota voi enää käyttää. Napauta **Päivitä** avataksesi kaupan ja asentaaksesi uuden version. Näytössä näkyy myös **Asennettu versio**.
- Verkkoeditorissa painike on **Lataa sivu uudelleen**: uusin editori latautuu.

**”MOCPilot (versio) on saatavilla”**
- Uudempi versio on julkaistu. Napauta **Päivitä** (verkkoeditorissa **Lataa sivu uudelleen**) tai sulje ilmoituspalkki ×-painikkeella: se ei palaa ennen seuraavaa versiota.

## Ääni {#sound}

**Ääntä ei kuulu**
- Ota käyttöön **Ääni** [Asetuksissa](/docs/Application/Account/Settings): se mykistää kaikki sovelluksen, ohjainten ja ohjelmien äänet.
- Lisää laitteen median äänenvoimakkuutta. Jos kuulokkeet tai Bluetooth-kaiutin on yhdistetty, ääni kuuluu niistä.
- Logiikkalohkot: tarkista, ettei ohjelma aseta äänenvoimakkuutta nollaan tai pysäytä kaikkia ääniä. Katso [Äänet](/docs/Application/BlockBuilder/Blocks/Sounds).

## Tekoälyrakentaja {#ai-builder}

**Tekoälyrakentaja ei ole käytettävissä tai näyttää virheen**
- Tekoälyrakentaja vaatii [MocPilot Pron](/docs/Application/Account/Pro) ja internetyhteyden: ”Tekoälyrakentaja vaatii MocPilot Pron.” tai ”Tekoälypalveluun ei saatu yhteyttä. Tarkista internetyhteys ja yritä uudelleen.”
- ”Tekoälypalvelu ei ole tilapäisesti käytettävissä. Yritä myöhemmin uudelleen.” tai ”Tekoälypyyntöjä on juuri nyt liikaa. Yritä uudelleen minuutin kuluttua.”: odota ja yritä uudelleen.
- Käytössä on päivä- ja kuukausirajat: ”Saavutit tämän päivän tekoälypyyntöjen rajan. Yritä uudelleen huomenna.”
- Puhesyöte: salli mikrofoni (ja Applen laitteissa puheentunnistus) järjestelmäasetuksissa; katso [Bluetooth ja käyttöoikeudet](/docs/Help/BluetoothPermissions).
- Kaikki ilmoitukset ja mitä tehdä: [Tekoälyrakentaja](/docs/Application/Profiles/AiBuilder).

## Etäohjaus {#remote-control}

**Hub-laite ei yhdisty tai yhteys katkeaa**
- ”Etäohjaus kuuluu MocPilot Prohon”: kauko-ohjaimen tilillä on oltava [MocPilot Pro](/docs/Application/Account/Pro).
- ”Koodi on vanhentunut…” tai ”Väärä tai vanhentunut koodi…”: yhteyskoodi on voimassa 5 minuuttia. Näytä kauko-ohjaimessa uusi koodi ja skannaa tai kirjoita se uudelleen.
- ”Salli MOCPilotin käyttää kameraa järjestelmäasetuksissa koodin skannaamiseksi.”: salli kamera järjestelmäasetuksissa ([ohje](/docs/Help/BluetoothPermissions)) tai napauta **Syötä koodi** ja kirjoita 6 numeroa.
- ”Tämä sovellusversio ei voi yhdistää kauko-ohjaimeen” tai ”Toinen laite ei voinut avata profiilia”: päivitä MOCPilot molemmilla laitteilla.
- ”Yhteys kauko-ohjaimeen katkesi…”: tarkista, että molemmat laitteet ovat verkossa. Jos yhteys on poikki noin 4 sekuntia, hub-laite pysäyttää profiilin ja kaikki moottorit.
- Lisää: [Etäohjaus](/docs/Application/Profiles/RemoteControl).

## Etkö vieläkään pääse eteenpäin? {#still-stuck}

Käytä sovelluksen **Ohje**-kohdan (tietokoneella **Ohje**-valikon) toimintoja **Esitä kysymys** tai **Ilmoita virheestä**. Vastaus tulee sähköpostitse ja kohtaan **Ilmoitukset**.
