---
id: SpecialControls
title: Erikoisohjaimet
description: "Ohjauspyörä, polkimet, vaihdevipu, käsijarru, suuntavilkut ja junan ajokytkin: käyttö, asetukset, ulkoasut, arvot ja lohkot."
---

import Screenshot from '@site/src/components/Screenshot';

# Erikoisohjaimet {#special-controls}

Erikoisohjaimet näyttävät ja toimivat kuin oikeat: ohjauspyörä, polkimet, vaihdevipu, käsijarru, suuntavilkkuvipu, jakovaihteisto ja veturin ajokytkin. Kukin on erillinen tuote: osta tarvitsemasi tai hanki kaikki [MocPilot Prolla](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Kojelauta, jossa on ohjauspyörä, polkimet, vaihdevipu, käsijarru, suuntavilkut ja junan ajokytkin" width={900} />

| Ohjain | Tuote | Nimi kojelaudalla | Antaa ohjelmalle |
|---|---|---|---|
| [Ohjauspyörä](#steering-wheel) | Ohjauspyörä | STWHEEL | ohjauskulman, äänitorven |
| [Polkimet](#pedals) | Polkimet | PDLS | kaasun ja jarrun |
| [Manuaalivaihteisto](#gear-shifter) | Vaihdevipu | GEAR | vaihteen: R, N, 1…6 |
| [Automaattivaihteisto](#gear-shifter) | Vaihdevipu | GEARA | valitsimen: P, R, N, D |
| [Käsijarru](#handbrake) | Käsijarru | HBRK | voiman, lukituksen |
| [Suuntavilkut](#turn-signals) | Suuntavilkut | STALK | vasemman vilkun, oikean vilkun, valot |
| [Jakovaihteisto](#transfer-case) | Jakovaihteisto | XFER | ajotilan: 2H, 4H, N, 4L; tasauspyörästön lukot |
| [Junan ajokytkin](#train-controller) | Junan ajokytkin | TRTHR | ajoaskeleen, suunnan, vedon |

**Kiertonuppi** ei ole erillinen tuote: se tulee jokaisen maksullisen teeman mukana. Katso [Ohjaintyypit](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Lisää erikoisohjain {#add-a-special-control}

1. Avaa kojelauta ja napauta **+** (**Lisää ohjain**; tietokoneella **+ Ohjain**).
2. Vieritä ohjaintyyppien luettelossa kohtaan **Ajoneuvo ja erikois** ja valitse ohjain.
3. Ulkoasunauha näyttää kaikki sen ulkoasut. Valitse yksi ja määritä ohjain kohdassa **Määritä**.
4. Napauta **Lisää kojelautaan**. Jos sinulla ei vielä ole ohjainta, napauta **Osta** tai **Kaikki MocPilot Prolla**.

<Screenshot name="special-control-looks" alt="Lisää ohjain -paletti, jossa ohjauspyörä on valittuna ja sen ulkoasut näkyvät ulkoasunauhassa" width={900} />

## Ulkoasut {#looks}

Jokaisesta erikoisohjaimesta on monta **ulkoasua**. Useimmat niistä vastaavat maksullista teemaa (Kilpailu, Aura, Klassinen, Hologrammi ja niin edelleen), joten ohjauspyörä, vaihdevipu ja käsijarru voivat sopia muuhun kojelautaasi. Voit vaihtaa ulkoasua milloin tahansa: valitse ohjain ja valitse toinen **Tyyli**-välilehden kohdassa **Ulkoasu**. Ulkoasu muuttaa vain kuvaa: arvot, lohkot ja ohjelma pysyvät samoina.

Jotkin ulkoasut myös asettavat niille sopivan korostevärin, kun valitset ne.

## Kaikkien erikoisohjainten asetukset {#settings-of-all-special-controls}

- **Ulkoasu** (Tyyli-välilehti): katso yllä.
- **Korosteväri** (Tyyli-välilehti): vaihdevipu, käsijarru, suuntavilkut, jakovaihteisto ja junan ajokytkin.
- **Lukitse ohjain** ja **Interaktiivisuus** (Asetukset-välilehti), kuten jokaisessa ohjaimessa. Katso [Ohjainten ominaisuudet](/docs/Application/Dashboard/ControlProperties).

## Ohjauspyörä {#steering-wheel}

Aseta sormi ohjauspyörälle ja käännä sitä sen keskipisteen ympäri. Kun päästät irti, se palaa jousen tavoin keskelle. Paina ohjauspyörän keskustaa soittaaksesi äänitorvea: se ei käännä pyörää.

**Asetukset**

- **Ohjauspyörän kulma** (20–120°, oletus 60°): kuinka paljon pyörää käännetään täyteen ohjauskulmaan. Se ei muuta ohjelman saamia arvoja.
- **Äänitehosteet**: äänitorven ääni ja äänet, joita ohjelma soittaa ohjauspyörästä. Sovelluksen äänen on oltava päällä.

**Arvot**: ohjauskulma −100:sta (täysin vasemmalle) nollan kautta 100:aan (täysin oikealle); äänitorvi on 100, kun pidät sitä painettuna, muuten 0.

**Ulkoasut**: Maastoajoneuvo, Raskas kuorma-auto, Superauto, Retro puu, Kilpaohjain, Ralli mokka, Maasto-hyötyajoneuvo, Konsepti hehku, Rekka, Perhesedan, Kaupunkiauto, Dyynibuggy, Klassinen 4x4, Rakennuskoneet, Hi-Fi ääni, Aura, Palikat, Piiriydin, Syvä avaruus, Raskas kuljetus, Neo Orbit, Maastoauton ohjaamo, Kilpailu, Rock Crawler, Taktinen, Klassinen, Auringonlasku, Miami, Huipputekniikka, Hologrammi.

**Äänet** ohjelmalle: Auton äänitorvi, Kuorma-auton äänitorvi, Urheiluauton äänitorvi.

**Pikalinkit**: [Ohjauspyörä](/docs/Application/Links/Blocks/InputBlocks#controller-wheel)-syöte kanavilla **Ohjauskulma** ja **Äänitorvi**.

## Polkimet {#pedals}

Jarrupoljin on vasemmalla, kaasupoljin oikealla. Paina poljinta sormella: mitä ylempänä sormesi on polkimella, sitä voimakkaammin se on painettu. Alaosassa se on painettu kevyesti, yläosassa kokonaan. Kun päästät irti, poljin nousee takaisin. Voit painaa molempia polkimia yhtä aikaa.

**Asetukset**: **Äänitehosteet**: antaa ohjelman soittaa polkimien ääniä. Sovelluksen äänen on oltava päällä.

**Arvot**: kaasu ja jarru, kumpikin 0–100.

**Ulkoasut**: Maastoajoneuvo, Raskas kuorma-auto, Superauto, Retro kromi, Hiilikuitu & punainen, Kilpa porattu, Maastopito, Konsepti hehku, Rekka, Perhesedan, Kaupunkiauto, Dyynibuggy, Klassinen 4x4, Rakennuskoneet, Hi-Fi ääni, Aura, Palikat, Piiriydin, Syvä avaruus, Raskas kuljetus, Neo Orbit, Maastoauton ohjaamo, Kilpailu, Rock Crawler, Taktinen, Klassinen, Auringonlasku, Miami, Huipputekniikka, Hologrammi.

**Äänet** ohjelmalle: Auton jarru, Urheiluauton jarru, Kuorma-auton paineilmajarru, Peruutuspiippari.

**Pikalinkit**: [Polkimet](/docs/Application/Links/Blocks/InputBlocks#controller-pedals)-syöte kanavilla **Kaasupoljin** ja **Jarrupoljin**.

:::tip Pelkät polkimet eivät tee autoa
Polkimet kertovat vain, kuinka voimakkaasti kumpaakin painetaan. Jos rivi lähettää kaasun suoraan moottorille, moottori pyörii täsmälleen niin paljon kuin poljinta painetaan. Jos haluat mallin, joka kiihtyy vähitellen, rullaa vapaasti, jarruttaa ja peruuttaa, käytä [ajoneuvosimulaattoria](#vehicle-simulator).
:::

## Vaihdevipu {#gear-shifter}

**Vaihdevipu**-tuotteessa on kaksi ohjainta: **Manuaalivaihteisto** ja **Automaattivaihteisto**.

### Manuaalivaihteisto {#manual-gearbox}

H-kaavioinen vaihteisto, jossa on peruutusvaihde ja enintään kuusi eteenpäinvaihdetta. Vedä nuppia keskiriviä pitkin ja ylös tai alas vaihteelle. Kun päästät irti, nuppi napsahtaa lähimmälle vaihteelle tai takaisin vapaalle.

- **Vaihteiden määrä** (2–6, oletus 6, Asetukset-välilehti): kaavio muuttuu sen mukana. Peruutusvaihde on aina vasemmanpuoleisimmassa sarakkeessa ja vapaa keskellä.
- **Arvot**: −1 = peruutus (R), 0 = vapaa (N), 1…6 = eteenpäinvaihteet.

### Automaattivaihteisto {#automatic-gearbox}

Valitsin, jossa on neljä asentoa: **P** (pysäköinti), **R** (peruutus), **N** (vapaa) ja **D** (ajo). Käyttötapa riippuu ulkoasusta:

| Valitsin | Käyttö | Ulkoasut |
|---|---|---|
| Vipu | liu'uta kahvaa uraa pitkin; se pysähtyy lähimpään asentoon | Huipputekniikka |
| Kiertovalitsin | käännä valitsinta sormella; se napsahtaa asentoon P, R, N tai D | Klassinen, Syvä avaruus, Taktinen, Rakennuskoneet, Hi-Fi ääni, Aura, Piiriydin, Rock Crawler, Maastoauton ohjaamo, Neo Orbit, Maastoauto, Työjuhta, Konsepti, Sedan, Kaupunkiauto, Klassinen 4x4 |
| Painikkeet | napauta P, R, N tai D | Kilpailu, Raskas kuljetus, Palikat, Raskas kuorma-auto, Retro, Ralli, Superauto, Formula, Kaukoliikenne, Buggy, Auringonlasku, Miami, Hologrammi |

- **Vaihteiden määrä** (2–8, oletus 6, Asetukset-välilehti): kuinka monen vaihteen läpi [ajoneuvosimulaattori](#vehicle-simulator) vaihtaa D-asennossa. Kun simulaattori valitsee vaihteen, valitsin näyttää sen, esimerkiksi **D3**.
- **Arvot**: −2 = P, −1 = R, 0 = N, 1 = D. Kaikki kolme valitsinta antavat samat arvot, joten ohjelma toimii millä tahansa ulkoasulla.

Kummassakin vaihteistossa on samat ulkoasut: Klassinen, Kilpailu, Syvä avaruus, Taktinen, Raskas kuljetus, Rakennuskoneet, Hi-Fi ääni, Aura, Piiriydin, Rock Crawler, Maastoauton ohjaamo, Palikat, Neo Orbit, Raskas kuorma-auto, Retro, Ralli, Maastoauto, Superauto, Formula, Työjuhta, Konsepti, Kaukoliikenne, Sedan, Kaupunkiauto, Buggy, Auringonlasku, Klassinen 4x4, Miami, Huipputekniikka, Hologrammi.

**Pikalinkit**: [Vaihdekeppi](/docs/Application/Links/Blocks/InputBlocks#controller-gear)-syöte kanavilla **Vaihde** (manuaali: vaihde suhteessa vaihteiden määrään, peruutus negatiivinen; automaatti: suunta) ja **Suunta (R − / eteen +)**: −1 peruutuksella, 0 vapaalla ja pysäköinnissä, +1 millä tahansa eteenpäinvaihteella.

## Käsijarru {#handbrake}

Käsijarruvipu. Tartu vipuun sen kahvasta ja vedä se alas. Jarrutusvoima seuraa sitä, kuinka pitkälle vedät. Kun päästät irti, vipu palaa jousen tavoin takaisin.

**Lukitse** se vetämällä vipu pohjaan asti ja liu'uttamalla sitten sormea vipua pitkin kohti sen tyveä: kahva liukuu alas ja vipu jää lukituksi. **Vapauta** lukittu vipu napauttamalla ohjainta tai vetämällä vipu takaisin.

**Arvot**: voima 0–100 ja tieto siitä, onko vipu lukittu.

**Ulkoasut**: Klassinen, Ralli, Raskas kuorma-auto, Retro, Syvä avaruus, Taktinen, Aura, Raskas kuljetus, Rakennuskoneet, Hi-Fi ääni, Neo Orbit, Maastoauton ohjaamo, Kilpailu, Palikat, Piiriydin, Rock Crawler, Maastoauto, Superauto, Formula, Työjuhta, Konsepti, Kaukoliikenne, Sedan, Kaupunkiauto, Buggy, Auringonlasku, Klassinen 4x4, Miami, Huipputekniikka, Hologrammi.

**Pikalinkit**: [Käsijarru](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake)-syöte kanavilla **Käsijarru lukittu** (päällä/pois, kuten kytkin) ja **Käsijarrun voima**.

## Suuntavilkut {#turn-signals}

Suuntavilkkuvipu ja valokytkin.

- Vedä vipua **ylös** vasenta vilkkua varten ja **alas** oikeaa vilkkua varten. Se jää siihen, mihin sen jätät; vedä se takaisin keskelle sammuttaaksesi vilkun.
- **Napauta** vipua tai ajovalopainiketta sytyttääksesi tai sammuttaaksesi valot. Tämä ei liikuta vipua.

**Asetukset**

- **Ikoni: left**, **Ikoni: light**, **Ikoni: right** (Tyyli-välilehti): merkkivalojen ikonit.
- **Suuntavilkkulähdöt vilkkuvat** (Asetukset-välilehti, oletuksena päällä): vilkkujen lähdöt vilkkuvat yhdessä vivun merkkivalon kanssa, joten niihin kytketty valo vilkkuu itsestään. Kun asetus on pois päältä, lähdöt palavat tasaisesti vilkun ollessa päällä. Lohkot näkevät aina tasaisen tilan.

**Arvot**: vasen vilkku, oikea vilkku ja valot, kukin päällä tai pois.

**Ulkoasut**: Klassinen, Kilpailu, Syvä avaruus, Taktinen, Raskas kuljetus, Rakennuskoneet, Hi-Fi ääni, Aura, Piiriydin, Rock Crawler, Maastoauton ohjaamo, Palikat, Neo Orbit, Raskas kuorma-auto, Retro, Ralli, Maastoauto, Superauto, Formula, Työjuhta, Konsepti, Kaukoliikenne, Sedan, Kaupunkiauto, Buggy, Auringonlasku, Klassinen 4x4, Miami, Huipputekniikka, Hologrammi.

**Pikalinkit**: [Suuntavilkut](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals)-syöte kanavilla **Suuntavilkut (vasen − / oikea +)** (kaksi vastakkaisnapaista valoa yhdessä portissa), **Vasen suuntavilkku**, **Oikea suuntavilkku** ja **Valo**.

## Jakovaihteisto {#transfer-case}

Maastoajoneuvon jakovaihteisto valitsee, mitä pyöriä moottori vetää. Ohjaimessa on neliasentoinen valitsin sekä kytkimet tasauspyörästön lukoille:

| Asento | Merkitys |
|---|---|
| **2H** | kaksiveto: vain takapyörät vetävät, tavallisille teille |
| **4H** | neliveto: kaikki pyörät vetävät, mutaan, hiekkaan ja lumeen |
| **N** | vapaa: moottori on irti pyöristä |
| **4L** | neliveto **alennusvaihteella**: hidas ja voimakas, jyrkkiin nousuihin ja kivikkoon |

**Tasauspyörästön lukot** saavat akselin pyörät (**etu**, **taka**) tai kaksi akselia (**keski**) pyörimään yhdessä, jolloin pidon menettänyt pyörä ei vain sudi tyhjää.

<Screenshot name="transfer-case-dashboard" alt="Jakovaihteiston ohjain kojelaudalla: valitsin, lukkojen kytkimet ja näyttö" width={700} />

### Käyttö {#transfer-case-use}

- **Valitsin**: asennot ylhäältä alas: 2H, 4H, N, 4L. Ulkoasusta riippuen se on **liukusäädin** (uritettu nuppi urassa: liu'uta sitä uraa pitkin; kun päästät irti, se napsahtaa lähimpään asentoon) tai **kiertovalitsin** (käännä sitä; se napsahtaa asentoihin). Ura on suora, joten 4H:sta pääset 4L:ään vain N:n kautta, kuten oikeassa vipukäyttöisessä jakovaihteistossa.
- **Lukot**: rivi kytkimiä etu-, keski- ja takalukolle: ulkoasusta riippuen merkkivalollisia vipukytkimiä tai lukittuvia painikkeita, joiden rengas syttyy korostevärillä. Napauta kytkintä kytkeäksesi lukon ja napauta uudelleen vapauttaaksesi sen.
- **Näyttö**: valitsimen vieressä olevat merkinnät 2H, 4H, N ja 4L eivät muutu; näyttö näyttää valitun asennon ja kytketyt lukot (**F**, **C**, **R**) korostevärillä.

### Asetukset {#transfer-case-settings}

**Asetukset**-välilehdellä:

- **Vapaa (N)** (oletuksena päällä): poista se käytöstä, jos haluat valitsimen, jossa on vain 2H, 4H ja 4L.
- **Etutasauspyörästön lukko** (päällä), **Keskitasauspyörästön lukko** (pois), **Takatasauspyörästön lukko** (päällä): mitkä lukkokytkimet ohjain näyttää. Jos niitä on alle kolme, ne siirtyvät rivin keskelle.
- **Etu- ja keskilukko vain 4WD:ssä** (päällä): etu- ja keskilukko toimivat vain asennoissa 4H ja 4L, kuten oikeassa autossa. Asennossa 2H niiden napautus hylätään (kytkin välähtää punaisena), ja vaihto asentoon 2H vapauttaa ne. N jättää ne ennalleen. Takalukko toimii kaikissa asennoissa.

### Arvot {#transfer-case-values}

- **Asento**: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L.
- **Neliveto**: päällä asennoissa 4H ja 4L. **Alennusvaihde**: päällä asennossa 4L.
- Jokainen lukko: päällä tai pois.

**Ulkoasut**: jokaiselle teemalle on oma, sen mukaan nimetty ulkoasu: Klassinen, Klassinen 4x4, Maastoauto ja yksi kullekin maksulliselle teemalle. Joissakin ulkoasuissa on liukusäädin, toisissa kiertovalitsin. **Hologrammi** piirtää koko ohjaimen yksivärisenä ääriviivana korostevärillä.

**Pikalinkit**: [Jakovaihteisto](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase)-syöte kanavilla **Neliveto**, **Alennusvaihde**, **Etutasauspyörästön lukko**, **Keskitasauspyörästön lukko** ja **Takatasauspyörästön lukko** (kukin päällä/pois, kuten kytkin). [Ajoneuvo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)-syöte ottaa koko jakovaihteiston **Jakovaihteisto**-asetukseensa.

## Junan ajokytkin {#train-controller}

Veturin ajokytkin, jossa on ajovipu ja suunnanvaihtaja.

- **Ajovipu**: vedä vipua ylös tai alas. Siinä on 8 ajoaskelta (0–8), ja se jää siihen askeleeseen, johon sen jätät.
- **Suunnanvaihtaja**: vedä sen nuppia ylös asentoon **eteenpäin** tai alas asentoon **taaksepäin**; keskellä on **neutraali**. Nuppi hyppää asennosta toiseen eikä koskaan pysähdy niiden väliin. Kuten oikeassa ohjaamossa, se liikkuu vain, kun ajovipu on asennossa 0.

**Arvot**: ajoaskel (0–8), suunnanvaihtaja (1 = eteenpäin, 0 = neutraali, −1 = taaksepäin) ja **veto**: ajoaskel ÷ 8 × 100 suunnan etumerkillä, −100…100. Veto voi ohjata junamoottoria suoraan.

**Ulkoasut**: Alkuperäinen, Rakennuskoneet, Hi-Fi ääni, Aura, Palikat, Buggy, Piiriydin, Kaupunkiauto, Klassinen, Konsepti, Syvä avaruus, Maastoauto, Raskas kuljetus, Klassinen 4x4, Raskas kuorma-auto, Miami, Neo Orbit, Superauto, Työjuhta, Maastoauton ohjaamo, Kilpailu, Ralli, Rock Crawler, Sedan, Auringonlasku, Taktinen, Kaukoliikenne, Retro, Formula, Huipputekniikka, Hologrammi.

**Pikalinkit**: [Liukusäädin](/docs/Application/Links/Blocks/InputBlocks#controller-train)-syöte; se antaa vedon.

## Lohkot {#blocks}

Jokainen erikoisohjain lisää omat lohkonsa Logiikkalohkojen **Näytön ohjaimet** -luokkaan:

| Ohjain | Tapahtumat | Arvot |
|---|---|---|
| Ohjauspyörä | *kun ohjauspyörä … liikkuu / painettu / vapautettu* | *ohjauspyörä …*, *ohjauspyörä … painettu / vapautettu?* |
| Polkimet | *kun polkimet … mikä tahansa / jarru / kiihtyvyys liikkuu / painettu / vapautettu* | *polkimet … kiihtyvyys / jarru*, *poljin … painettu / vapautettu?* |
| Vaihteistot | *kun vaihteisto … vaihtaa vaihdetta / vaihtaa ylös / vaihtaa alas / vaihtaa vapaalle / peruutusvaihteelle / pysäköintiin* | *vaihde …*, *onko vaihteisto … vapaalla / peruutusvaihteella / eteenpäin vaihteella / pysäköinnillä?*, *vaihteet: …* |
| Käsijarru | *kun käsijarru … vedetty / lukittu / vapautettu / päästetty* | *käsijarrun voima …*, *onko käsijarru … lukittu / vapautettu / vedetty?* |
| Suuntavilkut | *kun suuntavilkut … vasen vilkku / oikea vilkku / valot syttyy / sammuu* | *suuntavilkut … vasen vilkku / oikea vilkku / valot on päällä?* |
| Jakovaihteisto | *kun jakovaihteisto … 2H / 4H / N / 4L / neliveto / alennusvaihde / etulukko / keskilukko / takalukko kytkeytyy / kytkeytyy irti* | *jakovaihteisto … [samat valinnat] on kytketty?*, *jakovaihteiston asento …* |
| Junan ajokytkin | *kun ajokytkin … ajoaskel muuttui / nousi / laski, ajokytkin nollassa, suunnanvaihtaja siirretty, vipu päästetty* | *ajokytkin … veto / ajoaskel / suunnanvaihtaja*, *onko ajokytkin … eteenpäin / taaksepäin / neutraali / ajoaskeleella 0?* |

Ohjauspyörällä ja polkimilla on myös *ääni … ohjaimesta …* -lohko: se valitsee yhden niiden äänistä **Äänet**-lohkoille. Lisätietoja: [Näytön ohjaimet](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Ajoneuvosimulaattori {#vehicle-simulator}

Erikoisohjaimet antavat vain raakasyötteen. **Ajoneuvosimulaattori** muuttaa polkimet, vaihdevivun ja käsijarrun malliksi, joka ajaa kuin auto: se kiihtyy hitauden kanssa, rullaa vapaasti, jarruttaa, peruuttaa, vaihtaa vaihteita D-asennossa ja pysyy paikallaan käsijarrun varassa.

- **Pikalinkit**: käytä [Ajoneuvo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)-syötettä. Valitse kojelaudaltasi **Polkimet**, **Vaihdekeppi**, **Käsijarru** ja **Jakovaihteisto**, **Ajoneuvon tyyppi** (Henkilöauto, Maastoajoneuvo, Urheiluauto, Kuorma-auto) ja **Lähtö**: **Nopeus**, **Moottorin kierrokset (rpm)**, **Jarruttaa** tai **Käsijarrussa**.
- **Logiikkalohkot**: kun kojelaudalla on polkimet, vaihdevipu tai käsijarru, näkyviin tulee **Simulaattori**-luokka. Luo siellä ajoneuvo (**Luo ajoneuvo**) ja aseta *aja*-lohko tapahtuman alle. Kytke arvot sen paikkoihin: *kaasu*, *jarru*, *vaihde*, */* (vaihteiden määrä; *vaihteet: …* -lohko sopii tähän), *käsijarru*, *lukittu* ja *jakovaihteisto* (*jakovaihteiston asento …* -lohko sopii tähän; jätä se tyhjäksi, jos mallissa ei ole jakovaihteistoa). Muut Simulaattori-lohkot asettavat ajoneuvon tyypin, moottorin hitauden ja peruutusnopeuden, lukevat nopeuden, moottorin kierrokset ja vaihteen sekä reagoivat, kun ajoneuvo lähtee liikkeelle, pysähtyy, jarruttaa tai vaihtaa vaihdetta.

Miten simulaattori ajaa:

- **Kaasu** kiihdyttää mallia hitauden kanssa; kun päästät sen, malli rullaa vapaasti. **Jarru** hidastaa sitä.
- **Ilman vaihteistoa** jarrun pitäminen pohjassa mallin pysähdyttyä saa sen peruuttamaan.
- **Manuaalivaihteisto**: R peruuttaa, N ei aja. Valinnaisesti jokainen vaihde rajoittaa huippunopeutta.
- **Automaattivaihteisto**: R peruuttaa, N ei aja, P pitää mallin paikallaan kuin lukittu käsijarru. D-asennossa simulaattori vaihtaa ylös ja alas itsestään ja näyttää vaihteen valitsimessa.
- **Käsijarru**: sen voima lisätään jarrutukseen; lukittu käsijarru voi pitää mallin paikallaan.
- **Jakovaihteisto**: 2H ja 4H ajavat kuin ilman sitä. **N** ei aja: malli rullaa vapaasti, ja jarru vain hidastaa sitä peruuttamatta. **4L** rajoittaa nopeuden 40 %:iin eteen- ja taaksepäin, ja moottorin kierrokset nousevat vastaavasti; nopeammin liikkuva malli hidastuu rajaan, kun vaihdat asentoon 4L. Tasauspyörästön lukot eivät vaikuta simulaattorin ajoon: ne ovat vain ohjaimen lähtöjä.
- **Ajoneuvon tyyppi**: kuorma-auto on raskaampi (enemmän hitautta) ja siinä on paineilmajarru; urheiluauto reagoi nopeasti ja peruuttaa nopeammin.

Viimeisiä polkimia, vaihdevipua tai käsijarrua ei voi poistaa, kun ohjelma käyttää Simulaattori-lohkoja.
