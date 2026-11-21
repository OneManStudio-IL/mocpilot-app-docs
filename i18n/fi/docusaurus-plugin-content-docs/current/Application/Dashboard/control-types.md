---
id: ControlTypes
title: Ohjaintyypit
description: "Ohjainsauva, suuntaohjain, liukusäätimet, kiertonuppi, painikkeet, kytkimet, askelkytkimet, näytöt ja erikoisohjaimet."
---

# Ohjaintyypit {#control-types}

Jokainen [teema](/docs/Application/Themes/ThemesOverview) piirtää samat ohjaintyypit omalla tyylillään. Ilmaisessa **Perus**-teemassa niitä on yhdeksän; jokainen maksullinen teema lisää **Kiertonupin** ja kolme graafista näyttöä. Ohjauspyörät, polkimet, vaihdevivut ja muut [erikoisohjaimet](/docs/Application/Dashboard/SpecialControls) ovat erillisiä tuotteita.

| Ohjain | Nimi kojelaudalla | Antaa ohjelmalle | Saatavilla |
|---|---|---|---|
| Ohjainsauva | JOY | X- ja Y-akselit | kaikissa teemoissa |
| Suuntaohjain | DPAD | ylös / alas / vasen / oikea -painikkeet | kaikissa teemoissa |
| Liukusäädin | SLDR | arvon | kaikissa teemoissa |
| Pystyliukusäädin | VSLDR | arvon | kaikissa teemoissa |
| Kiertonuppi | DIAL | arvon | maksullisissa teemoissa |
| Painike | BTN | painettu / päästetty | kaikissa teemoissa |
| Kytkin | SWCH | päällä / pois | kaikissa teemoissa |
| Askelkytkin | STPR | askeleen numeron | kaikissa teemoissa |
| Pystyaskelkytkin | VSTPR | askeleen numeron | kaikissa teemoissa |
| Seuranta | MNTR | näyttää tekstiä tai arvon | kaikissa teemoissa |
| Akun varaus | MNTBT | näyttää tason | maksullisissa teemoissa |
| Nopeusmittari | MNTSP | näyttää nopeuden | maksullisissa teemoissa |
| Kallistusnäyttö | MNTLT | näyttää nyökkäyksen ja kallistuman | maksullisissa teemoissa |
| Ohjauspyörä, polkimet, vaihteistot, käsijarru, suuntavilkut, junan ajokytkin | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | katso [Erikoisohjaimet](/docs/Application/Dashboard/SpecialControls) | erikoistuotteet |

Kojelaudan nimeen lisätään numero: ensimmäinen ohjainsauva on **JOY1**, toinen **JOY2**.

## Ohjainsauva {#joystick}

Sauva, joka palaa jousen tavoin keskelle. Se antaa **X**-arvon (vasen/oikea) ja **Y**-arvon (ylös/alas); keskikohta on nolla.

- **Akselin tyyppi**: **Molemmat akselit (X, Y)**, **Vain vaaka (X)** tai **Vain pystysuunnassa (Y)**. Yksiakselista ohjainsauvaa on helpompi käyttää, kun se vain ajaa tai vain ohjaa.
- Tyypillinen käyttö: Y ajamiseen ja X ohjaamiseen, tai yksi ohjainsauva kummallekin panssarivaunun telalle.

## Suuntaohjain {#directional-pad}

Neljä painiketta: ylös, alas, vasen ja oikea. Kukin on joko painettu tai päästetty. Pikalinkeissä D-padin akseli antaa arvon −1, 0 tai +1 (**Ylös / alas** tai **Vasen / oikea**), mikä on kätevää askeleittaisiin liikkeisiin, kuten nosturin koukulle.

## Liukusäädin ja Pystyliukusäädin {#slider-and-ver-slider}

Kahva, joka liikkuu vaaka- tai pystysuuntaisella uralla.

- **Palauta nollaan**: kahva palaa takaisin, kun päästät irti (kuten kaasu), sen sijaan että se jäisi siihen, mihin sen jätät (kuten junan nopeusasetus).
- **Negatiiviset arvot**: nolla on keskellä, joten liukusäädin antaa negatiivisia ja positiivisia arvoja (taakse ja eteen).
- **Askeleen arvo**: liukusäädin liikkuu askelin.

## Kiertonuppi {#rotary-knob}

Pyöreä nuppi, kuten äänenvoimakkuuden säädin, jokaisen maksullisen teeman **Liukusäätimet**-ryhmässä. Käännä sitä yhdellä sormella sen keskipisteen ympäri: se kääntyy noin 135° kumpaankin suuntaan ja jää siihen, mihin sen jätät.

- **Lukitusaskeleet (0 = portaaton)** (0–24): askelten kanssa nuppi napsahtaa lukitusasennosta seuraavaan.
- **Nolla keskellä (-100..100)**: nuppi antaa arvoja −100…100 nolla keskellä, arvojen 0…100 sijaan.
- Lohkot: *kun kiertonuppi … käännetty / painettu / päästetty / käännetty minimiin / käännetty maksimiin*, *kiertonupin arvo …*, *onko kiertonuppi … painettu / minimissä / maksimissa?* Katso [Näytön ohjaimet](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- Pikalinkeissä nuppi toimii kuin [liukusäädin](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Perus-teemassa ei ole kiertonuppia. Koska jokaisessa maksullisessa teemassa on sellainen, **Vaihda teema** vaihtaa nupin toisen teeman ulkoasuun.

## Painike {#button}

Painettu, kun pidät sitä pohjassa, ja päästetty, kun päästät irti. Käytä sitä äänitorveen tai lyhyeen liikkeeseen, tai Pikalinkeissä **Vaihto**-lohkon kanssa kytkemään jotain päälle ja pois.

## Kytkin {#switch}

Pysyy päällä tai pois: napauta vaihtaaksesi. Käytä sitä valoihin, tiloihin tai vinssin lukitukseen.

## Askelkytkin ja Pystyaskelkytkin {#step-switch-and-ver-step-switch}

**−** / **+** -ohjain, joka laskee askeleita, kuten vaihteita tai junan nopeustasoja.

- **Askelmien määrä**: 1–100 (oletus 10).
- **Negatiiviset arvot**: sallii nollaa pienemmät askeleet (peruutustasot).
- **Ota nollaus käyttöön**: arvon napauttaminen palauttaa sen nollaan.

## Seuranta {#monitor}

Näyttää ohjelmalta tulevan tekstin tai luvun: nopeuden, akun varauksen, tilan nimen, anturin arvon.

- **Tekstin asettelu** (yksi tai useita rivejä), **Tekstin ylivuoto** (Leikkaa, Rivitä, Juokseva teksti, Vieritä), **Rivien enimmäismäärä**, vieritysasetukset, **Tekstin tasaus** ja **Tekstin skaalaus**.

## Akun varaus, Nopeusmittari, Kallistusnäyttö {#battery-level-speedometer-tilt-monitor}

Maksullisten teemojen graafiset ilmaisimet. Ohjelma asettaa niiden arvon: hubin akun, moottorin nopeuden, hubin kallistuksen. **Kallistusnäytössä** ovat asetukset **Käännä kallistus** ja **Käännä rullaus**. Katso [Ilmaisimet ja näytöt](/docs/Application/Dashboard/Indicators).

## Erikoisohjaimet {#special-controls}

Ohjauspyörä, polkimet, manuaali- tai automaattivaihteisto, käsijarru, suuntavilkkuvipu ja junan ajokytkin. Kukin on erillinen tuote, jolla on monta ulkoasua. Katso [Erikoisohjaimet](/docs/Application/Dashboard/SpecialControls).

## Interaktiivisuus {#interactivity}

Jokaisella interaktiivisella ohjaimella on asetus **Interaktiivisuus** (oletuksena päällä). Ei-interaktiivinen ohjain ei reagoi kosketuksiin. Ohjelma voi kytkeä interaktiivisuuden päälle ja pois, esimerkiksi estääkseen kaasun käytön, kunnes käynnistystarkistus on tehty.
