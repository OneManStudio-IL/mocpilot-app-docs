---
id: BluetoothPermissions
title: Bluetooth ja käyttöoikeudet
description: "Mitä käyttöoikeuksia MOCPilot pyytää kullakin alustalla ja miksi, ja miten korjaat evätyn käyttöoikeuden tai Bluetooth-ongelman."
---

# Bluetooth ja käyttöoikeudet {#bluetooth-and-permissions}

MOCPilot viestii hubien kanssa Bluetoothin kautta, joten järjestelmä pyytää sinua sallimaan sen. Muutamaa muuta käyttöoikeutta pyydetään vain, kun käytät niitä vaativaa toimintoa.

## Mitä MOCPilot pyytää ja miksi {#what-mocpilot-asks-for-and-why}

| Käyttöoikeus | Milloin sitä pyydetään | Miksi |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | kun haet hubia ensimmäisen kerran | hubien löytämiseen ja yhdistämiseen |
| **Lähellä olevat laitteet** (Android 12 ja uudemmat) | kun haet hubia ensimmäisen kerran | hubien löytämiseen ja yhdistämiseen |
| **Sijainti**, tarkka (Android 10 ja 11) | kun haet hubia ensimmäisen kerran | Android vaatii sen Bluetooth-hakuun näissä versioissa. MOCPilot ei kerää, tallenna eikä jaa sijaintiasi |
| **Sijainti** (Android, Mould King -hubit) | kun yhdistät Mould King -hubin | sovellus lähettää komennot Mould King -hubeille Bluetooth-lähetyksinä ja pyytää siihen Sijainti-luvan kaikissa Android-versioissa |
| **Kamera** (puhelin, tabletti) | kun skannaat QR-koodin kohdassa **Yhdistä kauko-ohjain** | [yhteyskoodin](/docs/Application/Profiles/RemoteControl) lukemiseen. Voit myös kirjoittaa 6 numeroa |
| **Mikrofoni** (iPhone, iPad, Mac, Android) | kun sanelet pyynnön [tekoälyrakentajalle](/docs/Application/Profiles/AiBuilder) ensimmäisen kerran | puhesyöte |
| **Puheentunnistus** (iPhone, iPad, Mac) | mikrofonin kanssa | puheesi muuttamiseen tekstiksi |

Windowsissa MOCPilot ei pyydä Bluetooth-lupaa; Bluetoothin tarvitsee vain olla päällä. Puhesyötteeseen Windowsissa MOCPilot ehdottaa Windowsin puhekirjoitusta (Win+H).

## Jos epäsit käyttöoikeuden {#if-you-denied-a-permission}

Jos epäsit käyttöoikeuden, järjestelmä ei yleensä kysy uudelleen. MOCPilot näyttää silloin ilmoituksen, esimerkiksi **Skannaus epäonnistui** ja ”Sovellus tarvitsee luvan lähellä olevien laitteiden skannaamiseen…”, ”Salli MOCPilotin käyttää kameraa järjestelmäasetuksissa koodin skannaamiseksi.” tai ”Salli MOCPilotille mikrofonin käyttö järjestelmäasetuksissa”. Ota käyttöoikeus käyttöön järjestelmäasetuksissa ja palaa sovellukseen:

**iPhone ja iPad**
1. Avaa **Asetukset** ja vieritä alas kohtaan **MOCPilot**.
2. Ota käyttöön **Bluetooth** (ja tarvittaessa **Kamera**, **Mikrofoni** tai **Puheentunnistus**).

**Android** (nimet vaihtelevat hieman valmistajan mukaan)
1. Avaa **Asetukset → Sovellukset → MOCPilot → Käyttöoikeudet**.
2. Salli **Lähellä olevat laitteet**. Androidissa 10 ja 11 tai Mould King -hubeja varten salli myös **Sijainti** ja ota käyttöön **Käytä tarkkaa sijaintia**.
3. Salli tarvittaessa **Kamera** tai **Mikrofoni**.

**Mac**
1. Avaa **Järjestelmäasetukset → Yksityisyys ja turvallisuus**.
2. Valitse **Bluetooth** (tai **Mikrofoni**, **Puheentunnistus**) ja ota käyttöön **MOCPilot**.

**Windows**
1. Avaa **Asetukset → Bluetooth ja laitteet** ja kytke **Bluetooth** päälle.

## ”Bluetooth on pois päältä” {#bluetooth-is-off}

MOCPilot näyttää ilmoituksen **Bluetooth on pois päältä**, kun laitteen Bluetooth on kytketty pois. Kytke se päälle ohjauskeskuksesta, pika-asetuksista tai järjestelmäasetuksista ja kuittaa ilmoitus: sovellus hakee uudelleen.

## Bluetooth-sovittimet Windowsissa {#bluetooth-adapters-on-windows}

- Tarvitset Bluetooth 4.0 (LE) -sovittimen tai uudemman: tietokoneeseen sisäänrakennetun tai USB-sovittimen.
- **Mould King 6.0** tarvitsee sovittimen ja ajurin, jotka pystyvät lähettämään Bluetooth-lähetyksiä (advertising). Kaikki sovittimet eivät pysty.
- **Mould King 4.0** ei toimi Windowsissa: sovellus ilmoittaa ”4-porttiset Mould King -hubit vaativat Bluetooth-mainostusta palvelutiedoilla, jota Windows ei tue.” Käytä näiden hubien kanssa puhelinta tai tablettia.

## Perinteistä Bluetoothia käyttävät hubit {#classic-bluetooth-hubs}

**Robot Inventor** -hubi käyttää perinteistä Bluetoothia, ei Bluetooth Low Energyä. Se toimii Androidissa, Macissa ja Windowsissa, mutta ei iPhonessa eikä iPadissa. Jos MOCPilot ei löydä sitä Windowsissa, muodosta hubin kanssa ensin pari kohdassa **Asetukset → Bluetooth ja laitteet → Lisää laite** ja hae sitten uudelleen sovelluksessa. Windowsissa ja Macissa sen voi yhdistää myös USB-kaapelilla; katso [MINDSTORMS Robot Inventor -hubi](/docs/Application/Hubs/RobotInventorHub#connect).

Kaikki muut tuetut hubit käyttävät Bluetooth Low Energyä, ja ne lisätään vain MOCPilotissa, ei järjestelmän Bluetooth-asetuksissa.

## Vakaa yhteys {#a-stable-connection}

- **Yksi sovellus kerrallaan.** Hubi hyväksyy vain yhden yhteyden. Sulje LEGO®-sovellukset ja muut ohjaussovellukset ja katkaise hubin yhteys muihin puhelimiin.
- **Kantama.** Pidä laite muutaman metrin päässä mallista. Seinät, metalli, oma kehosi ja muut 2,4 GHz:n laitteet (Wi-Fi-reitittimet, muut Bluetooth-laitteet) lyhentävät kantamaa.
- **Paristot ja akut.** Heikot paristot aiheuttavat yhteyskatkoja, kun moottorit tekevät raskasta työtä.
- **Pidä sovellus auki.** Aja MOCPilot näytöllä ja ota [Asetuksissa](/docs/Application/Account/Settings) käyttöön **Pidä näyttö päällä**, jotta näyttö ei sammu profiilin ollessa auki.

Lisää korjauksia hubeille, joita ei löydy tai joiden yhteys katkeilee: [Vianmääritys](/docs/Help/Troubleshooting#hubs).
