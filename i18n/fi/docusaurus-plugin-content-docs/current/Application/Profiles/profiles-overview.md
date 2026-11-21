---
id: ProfilesOverview
title: Profiilit
description: "Mikä profiili on, profiililuettelo, haku, lajittelu ja suosikit."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiilit {#profiles}

**Profiili** on kaikki, mitä MOCPilot tietää yhdestä mallista: sen hubit, kojelauta ja ohjelma. Jokaisella mallilla on oma profiilinsa.

<Screenshot name="profiles-desktop" alt="Omat profiilit -luettelo" width={900} />

## Mistä profiilit tulevat {#where-profiles-come-from}

- **Omat profiilisi**, jotka on luotu toiminnolla **Uusi profiili**. Katso [Profiilin luominen](/docs/Application/Profiles/CreateProfile).
- **Katalogin profiilit**: MOCPilot-tiimin tekemät viralliset LEGO®-settien profiilit ja muiden rakentajien yhteisöprofiilit. Asentaminen lisää luetteloon oman kopiosi. Katso [Katalogi ja julkaiseminen](/docs/Application/Profiles/Catalog).
- **Tuodut profiilit**: `.dat`-tiedostot, jotka joku on jakanut kanssasi. Katso [Profiilien hallinta](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Ne kaikki ovat samassa luettelossa.

## Profiililuettelo {#the-profile-list}

Sivun nimi on **Omat profiilit**.

- **Haku** löytää profiilit nimen, hashtagin, tekijän, hubin, setin numeron tai vuoden perusteella.
- **Lajittele ja suodata** lajittelee järjestykseen **Uusimmat setit**, **Vanhimmat setit**, **Nimi (A–Ö)**, **Nimi (Ö–A)**, **Tekijä (A–Ö)**, **Tekijä (Ö–A)** tai **Käytetyt hubit**. **Vain omat profiilit** piilottaa katalogista asennetut profiilit.
- **Suodata hashtagien mukaan** (tabletti ja tietokone) näyttää vain profiilit, joissa on valitsemasi hashtagit.
- **Suosikki**-profiilit ovat aina ensimmäisinä.

Kortissa näkyvät profiilin kuva ja nimi sekä, jos tiedossa, setin numero, julkaisuvuosi ja osien määrä. **Päivitys saatavilla** tarkoittaa, että voit asentaa katalogiprofiilista uuden version.

## Profiilin toiminnot {#profile-actions}

| Toiminto | Puhelin | Tabletti | Tietokone |
|---|---|---|---|
| Avaa (käynnistä) | kortin **Käynnistä** | kaksoisnapauta korttia tai valitse se ja napauta **Käynnistä** | kaksoisnapsauta korttia tai **Käynnistä** |
| Muokkaa nimeä, kuvaa, hashtageja, kuvausta | kortin **Muokkaa** | **Muokkaa** | **Muokkaa…** |
| Lisää suosikkeihin | kohdassa **Muokkaa profiilia** | **Lisää suosikkeihin** | **Lisää suosikkeihin** |
| Jaa tiedostona | kortin **Jaa** | **Jaa** | **Jaa…** |
| Päivitä katalogista | **Päivitä** | **Päivitä** | **Päivitä** |
| Lähetä katalogiin | kohdassa **Muokkaa profiilia** | kohdassa **Muokkaa profiilia** | kohdassa **Muokkaa profiilia** |
| Poista | **Pyyhkäise poistaaksesi profiilin** kohdassa **Muokkaa profiilia** | sama, tai kortin valikon **Poista profiili** | **Poista profiili** kohdassa **Muokkaa profiilia** tai kortin valikossa |

## Kahdenlaisia ohjelmia {#two-kinds-of-programs}

Jokainen profiili käyttää toista kahdesta ohjelmaeditorista, joka valitaan profiilia luotaessa:

- **Pikalinkit**: rivit, jotka yhdistävät ohjaimet moottoreihin ja valoihin, ilman koodia. Katso [Pikalinkit](/docs/Application/Links/LinksIntroducing).
- **Logiikkalohkot**: lohko-ohjelma, jossa on tapahtumia, silmukoita, ehtoja ja muuttujia. Katso [Logiikkalohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
MOCPilotin uudemmalla versiolla tehty profiili ei välttämättä avaudu vanhemmassa versiossa (”Profiili ei ole yhteensopiva”). Päivitä sovellus kyseisellä laitteella.
:::
