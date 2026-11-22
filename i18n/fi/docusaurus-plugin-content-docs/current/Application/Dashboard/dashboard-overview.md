---
id: DashboardOverview
title: Kojelaudan editori
description: "MOCPilotin kojelauta: kenttä, ruudukko, yläpalkki, tausta ja kumoaminen."
---

import Screenshot from '@site/src/components/Screenshot';

# Kojelaudan editori {#dashboard-editor}

**Kojelauta** on näkymä, josta ajat malliasi: ohjainsauvat, liukusäätimet, painikkeet, näytöt ja muut ohjaimet. Jokaisella profiililla on yksi kojelauta.

Avaa se editorin yläpalkin **Kojelauta**-painikkeella (tietokoneella ⌘2 / Ctrl+2). Kapeanäyttöisessä puhelimessa se on kohdassa **Lisää toimintoja**.

- **Puhelin ja tabletti**: kojelauta avautuu koko näytön kokoisena editorin päälle.
- **Tietokone**: kojelauta avautuu omaan **Kojelauta**-ikkunaansa, joten voit pitää sen ohjelman vieressä.
- **Verkkoeditori**: kelluva paneeli, jota voi siirtää ja jonka kokoa voi muuttaa.

<Screenshot name="dashboard-edit" alt="Kojelauta muokkaustilassa pisteruudukkoineen" width={900} />

## Kenttä ja ruudukko {#the-field-and-the-grid}

- Kentän muoto on aina **2:1**, ja se sovitetaan näyttöön, joten kojelauta näyttää samalta puhelimessa, tabletissa ja tietokoneessa.
- Muokkaustilassa näkyy 40 × 20 ruudun **pisteruudukko**. Ohjaimet kohdistuvat ruudukkoon.
- Ohjaimet eivät voi olla päällekkäin. Jos ohjain ei mahdu, se palaa paikalleen.

## Yläpalkki {#toolbar}

**Puhelin ja tabletti**

| Painike | Mitä se tekee |
|---|---|
| ← | takaisin ohjelmaeditoriin |
| Kumoa / Tee uudelleen | kumoaa ja tekee uudelleen kojelaudan muutokset |
| **Valitse** | valitse useita ohjaimia ja lukitse, avaa lukitus, poista tai muokkaa niitä yhdessä; **Valmis** lopettaa valinnan |
| ⚙ (Kojelaudan asetukset) | taustan ja ruudukon asetukset (alla) |
| **+** (Lisää ohjain, oranssi rengas) | avaa ohjainpaletin; katso [Ohjainten lisääminen ja järjestäminen](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Suorita** / **Pysäytä**: käynnistää ja pysäyttää ohjelman |

Ohjelman ollessa käynnissä muokkauspainikkeet ovat piilossa.

**Tietokone ja verkkoeditori**

Yläpalkki on samanlainen kuin editorissa:

- **Vasemmalla**: **Koti** (sulkee profiilin), valikot **Tiedosto**, **Muokkaa** ja **Näytä** sekä sitten **Kumoa** ja **Tee uudelleen**.
- **Keskellä**: profiilin nimi ja **Lohkot** (Pikalinkit-profiilissa **Linkit**, ⌘1 / Ctrl+1), joilla palaat ohjelmaan. Kojelaudalla itsellään ei ole tässä painiketta: se on sivu, jolla olet.
- **Oikealla**: **Valitse**, **Kojelaudan asetukset** (⚙) ja oranssi **+ Ohjain** -painike (Lisää ohjain). Kapeassa ikkunassa profiilin nimi ja **Lohkot**-painike piiloutuvat, ja **+ Ohjain** -painikkeesta jää vain **+**.

Tietokoneella kojelaudan palkissa ei ole **Suorita**-painiketta: käynnistä ja pysäytä ohjelma editorista (⌘R / Ctrl+R, ⌘. / Ctrl+.). Ohjelman ollessa käynnissä **Valitse**, **Kojelaudan asetukset** ja **+ Ohjain** eivät ole käytettävissä.

Valikot: **Tiedosto** (Sulje profiili, Avaa erillisessä ikkunassa), **Muokkaa** (Kumoa, Tee uudelleen) ja **Näytä** (Lohkot ⌘1, Kojelauta ⌘2). Erillisessä Kojelauta-ikkunassa palkissa näkyy **Kodin** sijaan ikkunan otsikko, **Tiedosto**-valikossa on **Sulje ikkuna**, eikä **Näytä**-valikkoa tai **Lohkot**-painiketta ole.

## Kumoa ja tee uudelleen {#undo-and-redo}

Kojelaudalla on oma historiansa, erillään ohjelmasta. Voit kumota jokaisen siirron, koon muutoksen, ominaisuuden muutoksen, lisäyksen ja poiston.

## Kojelaudan asetukset {#dashboard-settings}

**Taustakuva**: napauta **Vaihda** ja valitse:

- **Valitse valmis**: teeman mukana tuleva valmis tausta. Galleria näyttää niiden teemojen taustat, joiden ohjaimia on tällä kojelaudalla. Valmis tausta täyttää aina näytön kentän ympäriltä, joten alla olevat asetukset eivät koske sitä.
- **Lataa oma**: mikä tahansa laitteesi kuva. Se tallennetaan profiiliin.

**Poista** tyhjentää taustan.

<Screenshot name="dashboard-backgrounds" alt="Kojelaudan asetukset ja valmiiden taustojen galleria" width={900} />

Omalle kuvalle voit lisäksi asettaa:

- **Kuvan täyttötila**: Venytä, Säilytä kuvasuhde ja sovita, Säilytä kuvasuhde ja rajaa, Laatoita, Laatoita pystysuunnassa, Laatoita vaakasuunnassa tai Täytä reunuksilla.
- **Kuvan yläalue**: **Työalue** (vain kenttä) tai **Koko näyttö**.
- **Kuvan peittävyys**, **Ota kuvan sumennus käyttöön** ja **Sumennusarvo**: rauhoita taustaa, jotta ohjaimet erottuvat.

**Piilota pisteet**: piilottaa ruudukon pisteet profiilin ollessa käynnissä. Muokkaustilassa pisteet pysyvät näkyvissä, jotta voit edelleen kohdistaa ohjaimia.

## Ohjaimet ja ohjelma {#controls-and-the-program}

Ohjain antaa arvoja; ohjelma päättää, mitä niillä tehdään. Ohjainta, jota ohjelma käyttää, ei voi poistaa, ennen kuin ohjelma lakkaa käyttämästä sitä. Poista Pikalinkeissä rivit, jotka käyttävät sitä; poista Logiikkalohkoissa sen lohkot.

## Lue lisää {#read-more}

- [Ohjainten lisääminen ja järjestäminen](/docs/Application/Dashboard/ArrangingControls): lisääminen, siirtäminen, koot, lukitseminen
- [Ohjaintyypit](/docs/Application/Dashboard/ControlTypes)
- [Erikoisohjaimet](/docs/Application/Dashboard/SpecialControls): ohjauspyörä, polkimet, vaihdevipu, käsijarru, suuntavilkut, junan ajokytkin
- [Ohjainten ominaisuudet](/docs/Application/Dashboard/ControlProperties)
- [Ilmaisimet ja näytöt](/docs/Application/Dashboard/Indicators)
