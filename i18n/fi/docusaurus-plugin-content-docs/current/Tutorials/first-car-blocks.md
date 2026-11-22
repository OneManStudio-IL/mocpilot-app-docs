---
id: FirstCarBlocks
title: Sama auto Logiikkalohkoilla
description: "Vaihe vaiheelta: ohjelmoi Logiikkalohkoilla kauko-ohjattava LEGO-auto, jossa on veto, servo-ohjaus, valot ja suuntavilkut."
---

import Screenshot from '@site/src/components/Screenshot';

# Sama auto Logiikkalohkoilla {#the-same-car-in-logic-blocks}

Tässä opetusohjelmassa rakennetaan uudelleen auto oppaasta [Ensimmäinen RC-autosi Pikalinkeillä](/docs/Tutorials/FirstCarLinks), tällä kertaa [Logiikkalohkoilla](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Lopputulos on sama, ohjainsauva, joka ajaa ja ohjaa, ja painike valoille, ja samalla opit lohko-ohjelmoinnin perusteet: tapahtumat, silmukat, muuttujat ja Seurannan. Lopuksi voit lisätä suuntavilkut, joissa on tikittävä ääni.

**Mitä tarvitset**: saman mallin kuin Pikalinkit-opetusohjelmassa:

- LEGO® Technic™ Hub (88012);
- vetomoottori **porttiin A**;
- enkooderilla varustettu ohjausmoottori **porttiin B** (Technic L- tai XL-moottori tai mikä tahansa Technic-kulmamoottori);
- LEGO®-valot **porttiin C** (valinnainen).

City Hubin kanssa käytä portteja **A** ja **B** ja jätä valot pois.

**Lopputulos**:

```text
kun ohjelma käynnistyy
aseta (valot) arvoon 0
aseta suhteellinen sijainti 0  (Hubi 1, portti B)
toistaa aina
    aseta (kaasu) arvoon (ohjainsauva JOY1 Y-akseli)
    käynnistä moottori (kaasu) % nopeus  (Hubi 1, portti A)
    mene suhteelliseen asentoon (ohjainsauva JOY1 X-akseli × 0.9) 100 % nopeus  (Hubi 1, portti B)

kun nappia painetaan BTN1 painettu
    jos (valot) = 0 sitten
        käynnistä kohdassa 100 % kirkkaus  (Hubi 1, portti C)
        aseta (valot) arvoon 1
    muu
        sammuta  (Hubi 1, portti C)
        aseta (valot) arvoon 0
```

Näin luet listauksia: jokainen rivi on yksi lohko sellaisena kuin sovellus sen näyttää. Sulkeissa olevat arvot ovat lohkossa valitsemasi hubi ja portti tai lohko tai muuttuja, jonka pudotat paikkaan. Sisennetyt rivit menevät niiden yläpuolella olevan C-lohkon sisään.

## 1. Luo profiili {#create-the-profile}

1. Aloita **Omat profiilit** -sivulla uusi profiili (puhelimessa **+** → **Uusi profiili**, tabletissa **Uusi profiili**, tietokoneella **Tiedosto → Uusi profiili**).
2. Valitse **Logiikkalohkot**-ruutu.
3. Kirjoita **Nimi** ja aseta **Lohkotasot**-asetukseksi **Edistynyt**. Tässä käytetyt **toistaa aina** -silmukka ja **jos … sitten … muu** ovat Edistynyt-tason lohkoja; **Aloittelija**-paletti ei näytä niitä.
4. Napauta **Luo**.

Voit vaihtaa tasoa myöhemmin kohdassa **Editorin asetukset** → **Valitse lohkotaso**. Katso [Profiilin luominen](/docs/Application/Profiles/CreateProfile) ja [Lohkotasot](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Lisää hubi ja ohjaimet {#hub-and-dashboard}

Tee se täsmälleen kuten Pikalinkit-opetusohjelmassa:

1. [Lisää ja yhdistä hubi](/docs/Tutorials/FirstCarLinks#add-the-hub) kohdassa **Omat hubit**.
2. [Lisää ohjaimet kojelautaan](/docs/Tutorials/FirstCarLinks#dashboard): **Ohjainsauva** (**JOY1**) vasemmalle ja **Painike** (**BTN1**) oikealle.

<Screenshot name="tutorial-car-dashboard" alt="Kojelauta, jossa JOY1-ohjainsauva on vasemmalla ja BTN1-painike oikealla" width={900} />

Kun hubi on profiilissa, paletissa näkyvät **Moottorit**- ja **Valo**-luokat; ohjaimet ilmestyvät luokkaan **Näytön ohjaimet**.

## 3. Tapahtumat vai silmukka? {#events-or-loop}

Skripti alkaa **tapahtumalohkolla** ja suorittaa sen alla olevat lohkot ylhäältä alas. Useat skriptit toimivat samaan aikaan.

- Tapahtumalohko, kuten [kun nappia painetaan …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event), suorittaa skriptinsä kerran aina, kun tapahtuma sattuu. Tapahtumat sopivat asioihin, jotka tapahtuvat tietyllä hetkellä: painikkeen painallus, kytkin, suuntavilkku.
- Ohjainsauva muuttuu koko ajan. Helpoin tapa seurata sitä on skripti, joka alkaa lohkolla [kun ohjelma käynnistyy](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) ja lukee sauvaa jatkuvasti [toistaa aina](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) -silmukassa.

Tämä auto käyttää molempia: silmukkaa ajamiseen ja ohjaamiseen ja tapahtumaa valoille.

## 4. Veto {#drive}

1. Vedä **Tapahtumat**-luokasta [kun ohjelma käynnistyy](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) ohjelma-alueelle.
2. Liitä **Hallinta**-luokasta [toistaa aina](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) sen alle.
3. Pudota **Moottorit**-luokasta [käynnistä moottori … % nopeus](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) **toistaa aina** -silmukan sisään. Valitse hubi ja portti **A**.
4. Vedä **Näytön ohjaimet** -luokasta [ohjainsauvan](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) arvolohko nopeuden paikkaan. Valitse **JOY1** ja **Y-akseli**.

```text
kun ohjelma käynnistyy
toistaa aina
    käynnistä moottori (ohjainsauva JOY1 Y-akseli) % nopeus  (Hubi 1, portti A)
```

Nosta auto telineelle, paina **Suorita** ja työnnä ohjainsauvaa: ohjainsauva antaa arvoja −100…100, mikä on juuri moottorin nopeus prosentteina. Paina lopuksi **Pysäytä**.

**Ajaako auto taaksepäin, kun työnnät ylös?** Käytä **Operaattori**-luokan lohkoa [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply): `(ohjainsauva JOY1 Y-akseli × -1)`. **Liian nopea?** Kerro sen sijaan luvulla 0.5.

## 5. Ohjaus {#steer}

Ohjausmoottori seuraa ohjainsauvan X-akselia lohkolla [mene suhteelliseen asentoon … … % nopeus](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Suhteelliset asennot lasketaan kohdasta, jonka asetat lohkolla [aseta suhteellinen sijainti …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Liitä **aseta suhteellinen sijainti** heti lohkon **kun ohjelma käynnistyy** alle, **toistaa aina** -silmukan yläpuolelle. Jätä arvoksi 0 ja valitse portti **B**.
2. Lisää **toistaa aina** -silmukan sisään moottorilohkon alle **mene suhteelliseen asentoon … … % nopeus** portilla **B**.
3. Pudota sen asentopaikkaan **… × …**, jonka vasemmalla puolella on ohjainsauvan **X-akseli** ja oikealla `0.9`. Näin −100…100 muuttuu −90…90 asteeksi.
4. Aseta nopeudeksi 100.

```text
kun ohjelma käynnistyy
aseta suhteellinen sijainti 0  (Hubi 1, portti B)
toistaa aina
    käynnistä moottori (ohjainsauva JOY1 Y-akseli) % nopeus  (Hubi 1, portti A)
    mene suhteelliseen asentoon (ohjainsauva JOY1 X-akseli × 0.9) 100 % nopeus  (Hubi 1, portti B)
```

Käännä pyörät käsin suoraan ennen jokaista **Suorita**-painallusta: siitä asennosta tulee keskiasento. Jos pyörät kääntyvät liikaa, käytä lukua, joka on pienempi kuin 0.9; jos ne kääntyvät väärään suuntaan, käytä lukua −0.9.

### Vaihtoehto: kalibroi ohjaus automaattisesti {#calibrate-rack}

Jos ohjauksessa on rajoittimet, [kalibroi hammasratas … keskusta … astetta …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) etsii keskikohdan ja liikealueen puolestasi. Luo ensin kaksi muuttujaa (**Muuttujat** → **Luo muuttuja**), esimerkiksi `keskikohta` ja `alue`, ja pudota ne lohkon paikkoihin. Lohko kääntää hammastangon molempiin päihin, pysähtyy keskelle ja kirjoittaa tulokset muuttujiin; skripti jatkuu, kun kalibrointi on valmis.

```text
kun ohjelma käynnistyy
kalibroi hammasratas (keskikohta) keskusta (alue) astetta  (Hubi 1, portti B)
aseta suhteellinen sijainti 0  (Hubi 1, portti B)
toistaa aina
    käynnistä moottori (ohjainsauva JOY1 Y-akseli) % nopeus  (Hubi 1, portti A)
    mene suhteelliseen asentoon ((alue × ohjainsauva JOY1 X-akseli) ÷ 100) 100 % nopeus  (Hubi 1, portti B)
```

**aseta suhteellinen sijainti 0** heti kalibroinnin jälkeen tekee keskikohdasta nollan, joten sauva ääriasennossa kääntää pyöriä mitatun liikealueen verran.

## 6. Valot painikkeella {#lights}

Pikalinkeissä on valmis Vaihto-lohko. Logiikkalohkoissa [muuttuja](/docs/Application/BlockBuilder/Blocks/Variables) muistaa, ovatko valot päällä.

1. Napauta **Muuttujat**-luokassa **Luo muuttuja** ja anna nimeksi `valot`.
2. Lisää pääskriptin alkuun [aseta … arvoon …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to): `aseta (valot) arvoon 0`.
3. Vedä **Näytön ohjaimet** -luokasta [kun nappia painetaan …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) tyhjään kohtaan ja valitse **BTN1**.
4. Lisää sen alle [jos … sitten … muu](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) ehdolla [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(valot) = 0`.
5. Lisää ensimmäiseen haaraan [käynnistä kohdassa … % kirkkaus](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (portti **C**) ja `aseta (valot) arvoon 1`. Lisää toiseen haaraan [sammuta](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (portti **C**) ja `aseta (valot) arvoon 0`.

```text
kun nappia painetaan BTN1 painettu
    jos (valot) = 0 sitten
        käynnistä kohdassa 100 % kirkkaus  (Hubi 1, portti C)
        aseta (valot) arvoon 1
    muu
        sammuta  (Hubi 1, portti C)
        aseta (valot) arvoon 0
```

Painikkeen sijaan **Kytkin** tekee tästä vielä yksinkertaisempaa: *kun kytkin … on käännetty päälle / pois*; katso [esimerkit](/docs/Application/BlockBuilder/Examples).

## 7. Suorita ja seuraa Seurantaa {#monitor}

Kun jokin ei toimi odotetusti, katso arvoja. [Seuranta](/docs/Application/BlockBuilder/Editor#monitor) (tietokoneella yläpalkissa, puhelimessa tai tabletissa kohdassa **Lisää toimintoja**) näyttää jokaisen muuttujan ohjelman ollessa käynnissä.

1. Luo muuttuja `kaasu`.
2. Tallenna silmukassa ohjainsauvan arvo siihen ja käytä muuttujaa moottorin nopeutena:

```text
toistaa aina
    aseta (kaasu) arvoon (ohjainsauva JOY1 Y-akseli)
    käynnistä moottori (kaasu) % nopeus  (Hubi 1, portti A)
    mene suhteelliseen asentoon (ohjainsauva JOY1 X-akseli × 0.9) 100 % nopeus  (Hubi 1, portti B)
```

3. Paina **Suorita** ja avaa **Seuranta**. Liikuta ohjainsauvaa ja paina BTN1: `kaasu` seuraa sauvaa, ja `valot` vaihtelee arvojen 0 ja 1 välillä.

<Screenshot name="blocks-monitor" alt="Seuranta näyttää muuttujat ja listan ohjelman ollessa käynnissä" width={900} />

- `kaasu` muuttuu, mutta moottori ei pyöri: tarkista hubin yhteys kohdassa **Omat hubit** ja lohkon portti.
- `kaasu` pysyy nollassa: tarkista, että lohko lukee **JOY1**:tä ja oikeaa akselia.

Logiikkalohkoissa ohjelmaa voi muokata sen ollessa käynnissä, joten voit muuttaa lukua ja nähdä vaikutuksen heti. Tässä on koko ohjelma:

<Screenshot name="tutorial-car-blocks-program" alt="Valmis auto-ohjelma: pääskripti toistaa aina -silmukkoineen ja BTN1-valoskripti" width={900} />

Lisää apua: [Vianmääritys](/docs/Help/Troubleshooting).

## 8. Valinnainen: suuntavilkut äänellä {#turn-signals}

Lisää kojelautaan **Suuntavilkut**-[erikoisohjain](/docs/Application/Dashboard/SpecialControls#turn-signals) (**STALK1**) ja kytke valo **porttiin D**. Vedä vipua ylös vasenta vilkkua varten ja alas oikeaa varten.

```text
kun suuntavilkut STALK1 vasen vilkku syttyy
    ääni Suuntavilkku soita
    toistaa, kunnes ei (suuntavilkut STALK1 vasen vilkku on päällä ?)
        käynnistä kohdassa 100 % kirkkaus  (Hubi 1, portti D)
        odota 0.5 sekunnit
        sammuta  (Hubi 1, portti D)
        odota 0.5 sekunnit
    pysäytä ääni Suuntavilkku
```

Lohkot: [kun suuntavilkut …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) ja [suuntavilkut … on päällä ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) luokassa **Näytön ohjaimet**; [ääni … soita](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) ja [pysäytä ääni …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) luokassa **Äänet**; [toistaa, kunnes …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) ja [odota … sekunnit](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) luokassa **Hallinta**; [ei …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) luokassa **Operaattori**.

**Suuntavilkku**-ääni toistuu itsestään, kunnes pysäytät sen. Ääni kuuluu puhelimesta, tabletista tai tietokoneesta.

Monista skripti (pitkä painallus tai hiiren kakkospainike → **Monista**) ja valitse molemmissa lohkoissa **oikea vilkku**. Silloin molemmat vilkut vilkuttavat samaa portin D valoa; erillisiä vasemman ja oikean puolen valoja varten tarvitset kaksi vapaata porttia, esimerkiksi toisessa hubissa.

## Pikalinkit vai Logiikkalohkot: kumpi valita? {#which-to-choose}

| | Pikalinkit | Logiikkalohkot |
|---|---|---|
| Tämä auto | 3 riviä | 2 skriptiä, 2 muuttujaa |
| Pehmeä lähtö, kuollut alue, rajoitus | valmiit lohkot | kerro ja laske itse |
| Servo-ohjaus | Servo-lohko Auto-kalibroinnilla | suhteellisen asennon lohkot tai hammastangon kalibrointi |
| Valot painikkeella | Vaihto-lohko | muuttuja ja *jos … sitten … muu* |
| Äänet, sarjat, ehdot | ei | kyllä |
| Reaaliaikaiset arvot | rivin jokaisessa liitoksessa | Seuranta ja kojelaudan näytöt |
| Muokkaus suorituksen aikana | ei | kyllä |

Valitse **Pikalinkit**, kun jokainen ohjain yksinkertaisesti liikuttaa jotakin: autot, kuorma-autot, junat, nosturit. Valitse **Logiikkalohkot**, kun tarvitset logiikkaa: ääniä, vilkkukuvioita, sarjoja, reaktioita antureihin, pelejä. Ohjelman tyyppiä ei voi muuttaa, mutta voit tehdä samalle mallille toisen profiilin. Lisätietoja sivulla [Profiilin luominen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Seuraavat vaiheet {#next-steps}

- Näytä akun varaus kojelaudan **Seuranta**-ohjaimessa ja varoita, kun se on vähissä: [Esimerkit](/docs/Application/BlockBuilder/Examples#battery-warning).
- Aja peliohjaimella: [Peliohjaimen lohkot](/docs/Application/BlockBuilder/Blocks/Gamepad) ja [peliohjainesimerkki](/docs/Application/BlockBuilder/Examples#gamepad).
- Tee autosta aidon tuntuinen polkimilla, vaihteistolla ja hitaudella: [Simulaattori](/docs/Application/BlockBuilder/Blocks/Simulator).
- Opettele editorin käyttö: [Työskentely editorissa](/docs/Application/BlockBuilder/Editor).
