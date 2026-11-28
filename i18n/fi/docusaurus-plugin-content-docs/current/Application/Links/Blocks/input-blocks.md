---
id: InputBlocks
title: Syötelohkot
description: "Kaikkien Pikalinkkien syötteiden hakemisto: kojelaudan ohjaimet ja niiden kanavat, ajoneuvo, peliohjain, hubin painikkeet ja anturit."
---

import Screenshot from '@site/src/components/Screenshot';

# Syötelohkot {#input-blocks}

Jokainen rivi alkaa syötteellä. Paletin **Syötteet**-välilehdellä näkyvät lohkot, joita profiilisi voi juuri nyt käyttää: yksi lohko kutakin kojelaudan ohjainta kohden (monikanavaisille ohjaimille yksi kanavaa kohden), **Ajoneuvo**-lohkot, **Peliohjain**-lohko ja yksi **Hubi**-lohko kutakin hubia kohden. Käyttöohjeet: [Syötteet](/docs/Application/Links/Inputs).

Kukin syöte lähettää rivillä eteenpäin jompaakumpaa kahdesta signaalista:

- **arvo**: luku väliltä −1…1 (0…1 ohjaimilla, joilla ei ole negatiivista puolta);
- **päällä/pois**: 1 tai 0.

Käsittelylohkot ja toiminnot hyväksyvät vain signaalit, joiden kanssa ne osaavat toimia; katso [Käsittelylohkot](/docs/Application/Links/Blocks/ProcessingBlocks).

## Ohjain {#src-controller}

Kojelaudan ohjain, joka näkyy nimellään (**JOY1**, **SLDR1**, **BTN2**…).

- **Ohjain**: mikä tahansa alla luetelluista kojelaudan ohjaimista. Näytöt ovat lähtöjä, eivät syötteitä.
- **Kanava**: mitä ohjain antaa, jos ohjaimella on useita kanavia. Paletti tarjoaa yhden lohkon kanavaa kohden.

Ohjauspyörä, polkimet, vaihdekeppi, käsijarru, suuntavilkut, jakovaihteisto ja ajokytkin on kuvattu sivulla [Erikoisohjaimet](/docs/Application/Dashboard/SpecialControls).

Jos ohjain poistetaan kojelaudalta, rivi ilmoittaa ”Valitse kojelaudan ohjain”. Jos sen kanavaa ei enää ole, rivi ilmoittaa ”Valitse, mitä … antaa” (ohjainsauvalla: ”… ei liiku tällä akselilla”).

### Ohjainsauva {#controller-joystick}

- **Kanava**: **X-akseli** tai **Y-akseli**. Ohjainsauva, jonka asetuksena on **Vain vaakasuunta (X)** tai **Vain pystysuunta (Y)**, tarjoaa vain sen akselin.
- Antaa: arvon −1…1, keskellä 0.

### Liukusäädin, pystysuuntainen liukusäädin {#controller-slider}

- Ei kanavaa.
- Antaa: arvon 0…1 tai −1…1, kun **Negatiiviset arvot** on käytössä.

### Ajokytkin {#controller-train}

Ajokytkin (erikoisohjain) toimii Pikalinkeissä liukusäätimenä.

- Ei kanavaa.
- Antaa: arvon −1…1: vivun asento osuutena kaikista pykälistä, negatiivinen suunnanvaihtajan ollessa peruutusasennossa, vapaalla 0.

### Kiertonuppi {#controller-knob}

Maksullisten teemojen kiertonuppi toimii Pikalinkeissä liukusäätimenä.

- Ei kanavaa.
- Antaa: arvon 0…1 tai −1…1, kun nupin nollakohta on keskellä.

### Ohjauspyörä {#controller-wheel}

- **Kanava**: **Ohjauskulma** (oletus) tai **Äänitorvi**.
- Ohjauskulma antaa: arvon −1…1, suoraan eteenpäin 0.
- Äänitorvi antaa: arvon 1, kun äänitorven aluetta painetaan, muuten 0.

### Polkimet {#controller-pedals}

- **Kanava**: **Kaasupoljin** (oletus) tai **Jarrupoljin**.
- Antaa: arvon 0…1 sen mukaan, kuinka pitkälle poljinta painetaan.
- Polkimet antavat polkimen raaka-asennon. Jos haluat auton, joka kiihtyy, hidastuu ja peruuttaa itsestään, käytä [Ajoneuvo](#src-vehicle)-syötettä.

### Vaihdekeppi {#controller-gear}

Käsivalintainen ja automaattinen vaihdekeppi (erikoisohjain).

- **Kanava**: **Vaihde** (oletus) tai **Suunta (R − / eteen +)**.
- Vaihde, käsivalintainen vaihteisto: kytketty vaihde jaettuna eteenpäin vievien vaihteiden määrällä: suurin vaihde 1, vapaa 0, peruutus negatiivinen. Neljällä vaihteella 2. vaihde antaa 0,5.
- Vaihde, automaattivaihteisto: sama kuin Suunta.
- Suunta antaa: −1 asennossa R, 0 asennossa N (ja P), +1 millä tahansa eteenpäin vievällä vaihteella tai asennossa D.

### Käsijarru {#controller-handbrake}

- **Kanava**: **Käsijarru lukittu** (oletus) tai **Käsijarrun voima**.
- Käsijarru lukittu antaa: päällä/pois, päällä niin kauan kuin vipu on lukittuna.
- Käsijarrun voima antaa: arvon 0…1 sen mukaan, kuinka pitkälle vipua on vedetty.

### Suuntavilkut {#controller-turnsignals}

Suuntavilkkuvipu (erikoisohjain).

- **Kanava**: **Suuntavilkut (vasen − / oikea +)** (oletus), **Vasen suuntavilkku**, **Oikea suuntavilkku** tai **Valo**.
- Suuntavilkut antaa: arvon −1 (vasen), 0 (pois) tai +1 (oikea).
- Vasen suuntavilkku ja Oikea suuntavilkku antavat: arvon 1, kun kyseinen vilkku on päällä (vilkkuu lampun tahdissa, jos ohjaimen vilkutus on käytössä), muuten 0.
- Valo antaa: arvon 1, kun valo palaa, muuten 0.

### Jakovaihteisto {#controller-transfercase}

[Jakovaihteisto](/docs/Application/Dashboard/SpecialControls#transfer-case) (erikoisohjain).

- **Kanava**: **Neliveto** (oletus), **Alennusvaihde**, **Etutasauspyörästön lukko**, **Keskitasauspyörästön lukko** tai **Takatasauspyörästön lukko**.
- Neliveto antaa: päällä/pois, päällä asennoissa 4H ja 4L.
- Alennusvaihde antaa: päällä/pois, päällä asennossa 4L.
- Kukin tasauspyörästön lukko antaa: päällä/pois, päällä, kun kyseinen lukko on kytketty.
- Itse asento (2H, 4H, N, 4L) välittyy simulaattorille [Ajoneuvo](#src-vehicle)-syötteen **Jakovaihteisto**-asetuksen kautta.

### D-pad {#controller-dpad}

- **Kanava**: **Ylös / alas** tai **Vasen / oikea**.
- Antaa: arvon +1 (ylös tai oikealle), −1 (alas tai vasemmalle) tai 0.

### Painike {#controller-button}

- Ei kanavaa.
- Antaa: päällä/pois, päällä niin kauan kuin sitä painetaan.

### Kytkin {#controller-switch}

- Ei kanavaa.
- Antaa: päällä/pois.

### Askelkytkin {#controller-stepper}

- Ei kanavaa.
- Antaa: arvon: nykyinen askel jaettuna **Askelten määrällä**, joten viimeinen askel on 1 (viimeinen negatiivinen askel −1).

## Ajoneuvo {#src-vehicle}

Simuloitu auto, jota ohjataan kojelaudan polkimilla, vaihdekepillä, käsijarrulla ja jakovaihteistolla: se kiihtyy, jarruttaa, rullaa ja peruuttaa kuin oikea ajoneuvo, ja rivi saa sen nopeuden tai moottorin kierrokset. Paletti näyttää Ajoneuvo-lohkot, kun kojelaudalla on polkimet, vaihdekeppi tai käsijarru, yhden lohkon kutakin lähtöä kohden valmiiksi linkitettynä kunkin tyypin ensimmäiseen ohjaimeen.

- **Polkimet**: kojelaudan polkimet, jotka ohjaavat ajoneuvoa (pakollinen).
- **Vaihdekeppi**: **ei mitään** tai kojelaudan vaihdekeppi. Ilman sitä jarrupolkimen painaminen paikallaan seistessä ajaa ajoneuvoa taaksepäin.
- **Käsijarru**: **ei mitään** tai kojelaudan käsijarru.
- **Jakovaihteisto**: **ei mitään** tai kojelaudan jakovaihteisto. Asennoissa 2H ja 4H ajoneuvo ajaa kuin ilman sitä, asennossa N se ei aja (se rullaa vapaasti), asennossa 4L nopeus rajoitetaan 40 %:iin.
- **Ajoneuvon tyyppi**: **Henkilöauto** (oletus), **Maastoajoneuvo**, **Urheiluauto** tai **Kuorma-auto**. Tyypit eroavat hitaudeltaan ja peruutusnopeudeltaan; kuorma-autossa on lisäksi paineilmajarru.
- **Lähtö**:
  - **Nopeus** (oletus): arvo −1…1, peruuttaessa negatiivinen;
  - **Moottorin kierrokset (rpm)**: arvo 0…1;
  - **Jarruttaa**: päällä/pois, päällä ajoneuvon jarruttaessa;
  - **Käsijarrussa**: päällä/pois.

Ongelmat: ”Valitse ajoneuvon polkimet”, ”… ei ole kojelaudalla”.

<Screenshot name="links-vehicle-settings" alt="Ajoneuvo-syötelohkon asetukset" width={900} />

## Peliohjain {#src-gamepad}

Laitteeseesi yhdistetty peliohjain. Lohko on paletissa vain, kun **Ota peliohjaimen lohkot käyttöön** on päällä (**Peliohjain**-sivu yläpalkissa); muuten rivi ilmoittaa ”Ota peliohjainlohkot käyttöön Peliohjain-sivulla (yläpalkki)”.

- **Syöte** (oletus **Vasen sauva Y**). Nimet noudattavat **Peliohjaimen painikkeiden asettelu** -asetusta (Xbox / PlayStation):
  - **Vasen sauva Y**, **Vasen sauva X**, **Oikea sauva Y**, **Oikea sauva X**: arvo −1…1;
  - **RT** / **R2**, **LT** / **L2** (liipaisimet): arvo;
  - **A**, **B**, **X**, **Y** / **Risti**, **Ympyrä**, **Neliö**, **Kolmio**: päällä/pois;
  - **LB** / **L1**, **RB** / **R1** (olkanäppäimet): päällä/pois;
  - **Ylös**, **Alas**, **Vasen**, **Oikea** (D-pad): päällä/pois.

## Hubi {#src-hub}

Hubin oma painike tai anturi: hubissa itsessään tai jossakin sen porteista. Jokaista profiilin hubia kohden on yksi Hubi-syöte, paitsi Mould King -hubeille, jotka vain vastaanottavat komentoja.

- **Hubi**: profiilin hubi.
- **Painike tai anturi**: vain se, mitä tämä hubi pystyy ilmoittamaan (luettelo alla).
- **Portti**: porttiin kytketyille antureille (moottorin arvot, porttianturit).
- **Hubin suunta**: kallistukselle ja kiihtyvyydelle hubeissa, joissa sitä voi muuttaa: **Säilytä** (oletus) tai se, miten hubi on asennettu malliin.

Anturin arvo kulkee rivillä jaettuna koko asteikollaan ja rajattuna välille −1…1: 50 %:n akku antaa 0,5. Heti anturin perään lisätty **Tekstinäyttö** näyttää todellisen arvon yksikköineen.

| Painike tai anturi | Signaali | Yksikkö, koko asteikko | Hubit |
|---|---|---|---|
| **Painike 1, 2…** | päällä/pois | | hubit, joissa on painike; LEGO® Powered Up -kaukosäätimen painikkeet |
| **Akku** | arvo | %, 100 | hubit, jotka ilmoittavat sen |
| **Akun jännite** | arvo | V, 12 | hubit, jotka ilmoittavat sen |
| **Lähtöjännite** | arvo | V, 12 | BuWizz 2.0 |
| **Lämpötila** | arvo | °C, 100 | hubit, jotka ilmoittavat sen |
| **Kallistus pituussuunnassa** | arvo | °, 90 | hubit, joissa on kallistusanturi |
| **Kallistus sivusuunnassa** | arvo | °, 180 | hubit, joissa on kallistusanturi |
| **Kierto (yaw)** | arvo | °, 180 | hubit, joissa on kiertoakseli |
| **Kiihtyvyys X / Y / Z** | arvo | m/s², 19,6 | hubit, joissa on kiihtyvyysanturi |
| **Pyörimisnopeus X / Y / Z** | arvo | °/s, 360 | hubit, joissa on gyroskooppi: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Hubin virta** | arvo | mA, 3000 | Technic Hub, BOOST Move Hub |
| **Moottorin nopeus** | arvo | %, 100 | portti; kaikki hubit, joissa on portteja |
| **Moottorin kulma** | arvo | °, 360 (suhteellinen) | portti; kulma-anturilliset moottorit; ei SBrick, BuWizz 2.0, WeDo 2.0 |
| **Moottorin asento** | arvo | °, 180 (absoluuttinen) | portti; kulmamoottorit |
| **Moottorin teho** | arvo | %, 100 | portti; Robot Inventor |
| **Moottorin virta** | arvo | A, 3 | portti; BuWizz 2.0, BuWizz 3.0 Pro |
| **Etäisyysanturi** | arvo | 250 | portti; ei SBrick eikä BuWizz |
| **Värintunnistin** | arvo | värin numero, 10 | portti; ei SBrick, BuWizz eikä WeDo 2.0 |
| **Heijastunut valo**, **Ympäristön valo** | arvo | %, 100 | portti; ei SBrick, BuWizz eikä WeDo 2.0 |
| **Värisävy** | arvo | °, 360 | portti; Technic-värianturi tai BOOST-väri- ja etäisyysanturi; ei SBrick, BuWizz eikä WeDo 2.0 |
| **Värikylläisyys**, **Värin kirkkaus** | arvo | %, 100 | portti; kuten Värisävy |
| **Kallistusanturi: pituussuunta / sivusuunta** | arvo | °, 45 | portti; WeDo 2.0 / BOOST -kallistusanturi; ei SBrick eikä BuWizz |
| **Tehotila** | arvo | 1–4, 4 | BuWizz 2.0 |
| **Yhdistetty** | päällä/pois | | kaikki hubit |

Kun hubi on yhdistetty, MOCPilot tarkistaa myös portissa olevan laitteen: ”Portti A: siinä ei ole moottoria”, ”Portti A: moottorissa ei ole kulma-anturia”, ”Portti A: siinä ei ole etäisyysanturia” ja niin edelleen.
