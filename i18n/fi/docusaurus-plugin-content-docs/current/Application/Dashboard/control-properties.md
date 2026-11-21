---
id: ControlProperties
title: Ohjainten ominaisuudet
description: "Muuta ohjaimen kokoa, väriä, ikonia, ulkoasua, toimintaa ja teemaa sen ominaisuuksissa."
---

import Screenshot from '@site/src/components/Screenshot';

# Ohjainten ominaisuudet {#control-properties}

Napauta (napsauta) muokkaustilassa ohjainta avataksesi sen ominaisuudet.

- **Puhelin ja tabletti**: paneeli kojelaudan päällä; sulje se napauttamalla sen ulkopuolelle.
- **Tietokone**: sivupaneeli; voit jatkaa kojelaudan muokkaamista sen ollessa auki.

<Screenshot name="controller-properties" alt="Ohjaimen ominaisuuspaneeli, jossa ovat Tyyli- ja Asetukset-välilehdet" width={900} />

Otsakkeessa näkyvät ohjaimen nimi (esimerkiksi **JOY1**), roskakoripainike, monistusvalikko ja **OK**.

## Tyyli-välilehti {#style-tab}

- **Koko**: S, M tai L. Katso [koot](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Korosteväri**: ohjaimen pääväri.
- **Ikoni**: kuva ohjaimessa (painikkeet, kytkimet, näytöt), valittavissa yli 260 ikonista.
- **Ulkoasu**: [erikoisohjaimen](/docs/Application/Dashboard/SpecialControls) ulkoasu, esimerkiksi ohjauspyörän tyyli.
- Teeman asetukset teemasta riippuen: esimerkiksi **Värillinen hiili**, **Värilliset kehykset** ja **Näytä kilparadan linjat** Kilpailu-teemassa, **Indikaattorin segmenttien määrä** Rakennuskoneet-teemassa, **Näytä arvot** Aura-teemassa.
- **Vaihda teema**: vaihda ohjain toiseen omistamaasi teemaan, jossa on sama ohjaintyyppi.

## Asetukset-välilehti {#settings-tab}

Yhteiset asetukset:

- **Lukitse ohjain**: lukittua ohjainta ei voi siirtää eikä poistaa.
- **Interaktiivisuus**: ei-interaktiivinen ohjain ei rekisteröi painalluksia.

Tyyppikohtaiset asetukset:

| Ohjain | Asetukset |
|---|---|
| Ohjainsauva | **Akselin tyyppi**: Molemmat akselit (X, Y), Vain vaaka (X), Vain pystysuunnassa (Y) |
| Liukusäädin, Pystyliukusäädin | **Palauta nollaan**, **Negatiiviset arvot**, **Askeleen arvo** |
| Kiertonuppi | **Lukitusaskeleet (0 = portaaton)** (0–24), **Nolla keskellä (-100..100)** |
| Askelkytkin, Pystyaskelkytkin | **Askelmien määrä** (1–100), **Negatiiviset arvot**, **Ota nollaus käyttöön** |
| Seuranta | **Tekstin asettelu**, **Tekstin ylivuoto**, **Rivien enimmäismäärä**, **Vierityssuunta**, **Vieritysnopeus**, **Näytä vierityspalkki**, **Interaktiivinen vieritys**, **Tekstin tasaus**, **Tekstin skaalaus** |
| Kallistusnäyttö | **Käännä kallistus**, **Käännä rullaus** |
| Ohjauspyörä | **Ohjauspyörän kulma** (20–120°), **Äänitehosteet** |
| Polkimet | **Äänitehosteet** |
| Manuaalivaihteisto | **Vaihteiden määrä** (2–6) |
| Automaattivaihteisto | **Vaihteiden määrä** (2–8) |
| Suuntavilkut | **Suuntavilkkulähdöt vilkkuvat**; Tyyli-välilehdellä **Ikoni: left**, **Ikoni: light**, **Ikoni: right** |

Numeerisissa asetuksissa on **Nollaa**-painike, joka palauttaa oletusarvon.

## Ominaisuuksien muuttaminen ohjelmasta {#change-properties-from-the-program}

Logiikkalohkoissa lohkot voivat muuttaa ohjainta ohjelman ollessa käynnissä: asettaa sen värin, kytkeä sen interaktiivisuuden päälle tai pois ja näyttää arvoja näytöissä. Katso [Näytön ohjainten lohkot](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
