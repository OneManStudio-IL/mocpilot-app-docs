---
id: Problems
title: Suorittaminen ja ongelmien korjaaminen
description: "Ongelmapaneeli, punaiset kehykset, reaaliaikaiset arvot ja Pikalinkkien yleiset viestit."
---

import Screenshot from '@site/src/components/Screenshot';

# Suorittaminen ja ongelmien korjaaminen {#running-and-fixing-problems}

## Onko kaikki valmista? {#is-everything-ready}

Editorin yläpalkin **Ongelmat**-painike (tietokoneella juuri ennen **Suorita**-painiketta) näyttää:

- **vihreän valintamerkin**: ”Kaikki rivit ovat valmiita”;
- **punaisen ”!”**: ”Ongelmia: N”.

Tietokoneella teksti on kirjoitettu painikkeeseen; kapeassa ikkunassa jäljelle jäävät vain kuvake ja ongelmien määrä. Puhelimessa ja tabletissa painikkeessa näkyy kuvake ja määrä punaisessa merkissä.

Napauta sitä avataksesi ongelmapaneelin (puhelimessa sivupaneeli, tabletissa tai tietokoneella valikko). Siinä luetellaan ”Rivi N — syy”; napauta kohdetta siirtyäksesi kyseiselle riville. Ongelman aiheuttavalla lohkolla on **punainen kehys**. Kun kaikki on kunnossa, paneelissa lukee ”Jokainen käytössä oleva rivi voi toimia.”

<Screenshot name="links-problems" alt="Ongelmapaneeli, jossa näkyy rivi, joka ei ole valmis" width={900} />

Ongelmalliset rivit eivät toimi; muut rivit toimivat.

## Yleiset viestit {#common-messages}

| Viesti | Mitä tehdä |
|---|---|
| Vedä riville syöte ja lähtö (hubi tai kojelaudan ilmaisin) | rivi on tyhjä |
| Lisää syöte rivin alkuun | vedä ensin ohjain, ajoneuvo, peliohjain tai hubin syöte |
| Lisää lähtö: hubi tai kojelaudan ilmaisin | päätä rivi lähtöön |
| Lisää toiminto ennen hubia: moottori, servo, valo | Hubi-lähtö tarvitsee eteensä toiminnon |
| Valitse hubista vähintään yksi portti | napauta portin valintapalaa Hubi-lohkossa |
| Valitse kojelaudan ohjain | napauta syötelohkoa ja valitse ohjain |
| … ei liiku tällä akselilla | ohjainsauvalla on vain yksi akseli: valitse toinen akseli tai muuta ohjainsauvaa |
| Valitse, mitä … antaa | ohjaimella ei enää ole tätä kanavaa: valitse jokin |
| Valitse ajoneuvon polkimet | Ajoneuvo-syöte tarvitsee kojelaudalle polkimet |
| … ei ole kojelaudalla | Ajoneuvolle valittu vaihdekeppi tai käsijarru on poistettu |
| ”…” ei toimi tämän ohjaimen kanssa | tämä käsittelylohko ei sovi signaaliin |
| Portti A: tämä laite ei voi toimia servona (tarvitaan anturoitu moottori) | käytä kulma-anturillista moottoria tai toista toimintoa |
| Portissa A on anturi, ei moottori | tarkista, mitä porttiin on kytketty |
| Porttia A käytetään myös rivillä 2 | kukin portti voi kuulua vain yhdelle riville |
| Ota peliohjainlohkot käyttöön Peliohjain-sivulla (yläpalkki) | avaa **Peliohjain** ja ota **Ota peliohjaimen lohkot käyttöön** päälle |
| Ilmaisin näyttää arvon sellaisenaan: poista toiminto | Ilmaisin-rivillä ei ole toimintoa |
| Kalibrointi ei tarvitse toimintoa: poista se | Kalibroi servot -rivillä ei ole toimintoa |
| Valitse hubi, jossa on väri-LED (LEGO-hubit) | Hubin LED toimii vain LEGO®-hubeissa |
| Porttien värit ovat käytettävissä vain BuWizz 3:ssa | Portin väri vaatii BuWizz 3.0 Pron |
| Tässä ohjelmassa ei ole servoa automaattisessa kalibrointitilassa | Kalibroi servot tarvitsee Auto-tilassa olevan Servon |
| Tämä lohko vaatii sovelluksen uudemman version | profiili on tehty uudemmalla versiolla: päivitä MOCPilot |
| Rivi on poistettu käytöstä | ota se käyttöön rivivalikosta |

## Reaaliaikaiset arvot {#live-values}

Ohjelman käydessä jokainen lohkojen välinen liitos näyttää sen läpi kulkevan arvon. Liikuta ohjainta ja seuraa arvoa rivillä:

- syötteessä ei muutu mitään: ohjain tai peliohjain ei lähetä mitään; tarkista kanava tai akseli;
- arvo muuttuu, mutta moottori ei liiku: tarkista hubin yhteyspiste ja portti;
- arvo on pieni **Rajoituksen** tai **Kuolleen alueen** jälkeen: säädä niiden asetuksia.

<Screenshot name="links-live-values" alt="Käynnissä oleva Pikalinkit-ohjelma, jonka liitoksissa näkyvät reaaliaikaiset arvot" width={900} />

## Malli ei liiku {#the-model-does-not-move}

1. Onko hubi yhdistetty? Tarkista **Omat hubit** ja Hubi-lohkon yhteyspiste.
2. Onko oikea portti valittu? Onko moottorit kytketty sinne, minne luulet?
3. Onko rivi käytössä, eikä siinä ole punaista kehystä?
4. Onko ohjelma käynnissä (**Suorita**)?
5. Onko akku ladattu? Lisää rivi *Akku → Ilmaisin*, niin voit seurata sitä.

Lisää ohjeita: [Vianmääritys](/docs/Help/Troubleshooting).
