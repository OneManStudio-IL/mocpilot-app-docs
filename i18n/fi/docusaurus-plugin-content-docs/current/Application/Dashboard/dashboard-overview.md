---
id: DashboardOverview
title: Kojelaudan editori
description: "MOCPilotin kojelauta: kenttä, ruudukko, työkalurivi, tausta ja kumoaminen."
---

import Screenshot from '@site/src/components/Screenshot';

# Kojelaudan editori {#dashboard-editor}

**Kojelauta** on näkymä, josta ajat malliasi: ohjainsauvat, liukusäätimet, painikkeet, näytöt ja muut ohjaimet. Jokaisella profiililla on yksi kojelauta.

Avaa se editorin **Kojelauta**-painikkeella (tietokoneella ⌘2 / Ctrl+2).

- **Puhelin ja tabletti**: kojelauta avautuu koko näytön kokoisena editorin päälle.
- **Tietokone**: kojelauta avautuu omaan **Kojelauta**-ikkunaansa, joten voit pitää sen ohjelman vieressä.
- **Verkkoeditori**: kelluva paneeli, jota voi siirtää ja jonka kokoa voi muuttaa.

<Screenshot name="dashboard-edit" alt="Kojelauta muokkaustilassa pisteruudukkoineen" width={900} />

## Kenttä ja ruudukko {#the-field-and-the-grid}

- Kentän muoto on aina **2:1**, ja se sovitetaan näyttöön, joten kojelauta näyttää samalta puhelimessa, tabletissa ja tietokoneessa.
- Muokkaustilassa näkyy 40 × 20 ruudun **pisteruudukko**. Ohjaimet kohdistuvat ruudukkoon.
- Ohjaimet eivät voi olla päällekkäin. Jos ohjain ei mahdu, se palaa paikalleen.

## Työkalurivi {#toolbar}

| Painike | Mitä se tekee |
|---|---|
| ← | takaisin ohjelmaeditoriin |
| Kumoa / Tee uudelleen | kumoaa ja tekee uudelleen kojelaudan muutokset |
| **+** (Lisää ohjain) | avaa ohjainpaletin; katso [Ohjainten lisääminen ja järjestäminen](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Kojelaudan asetukset) | taustan ja ruudukon asetukset (alla) |
| ▶ / ■ | **Suorita** / **Pysäytä**: käynnistää ja pysäyttää ohjelman |

Tietokoneella Kojelauta-ikkunassa on myös valikot: **Tiedosto** (Sulje profiili, Avaa erillisessä ikkunassa, Kojelaudan asetukset…), **Muokkaa** (Kumoa, Tee uudelleen, Lisää ohjain…) ja **Näytä** (Lohkot ⌘1, Kojelauta ⌘2).

Ohjelman ollessa käynnissä muokkauspainikkeet ovat piilossa.

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
