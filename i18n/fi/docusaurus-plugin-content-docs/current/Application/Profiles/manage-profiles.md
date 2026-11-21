---
id: ManageProfiles
title: Profiilien hallinta
description: "MOCPilot-profiilien muokkaaminen, jakaminen, tuonti, vienti ja poistaminen."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiilien hallinta {#manage-profiles}

## Muokkaa profiilin tietoja {#edit-profile-details}

Napauta profiilin kohdalla **Muokkaa** (puhelin, tabletti) tai napsauta **Muokkaa…** (tietokone). Kohdassa **Muokkaa profiilia** voit muuttaa:

- **kuvaa** ja **nimeä**;
- **kuvausta** (mitä profiili tekee, mille mallille se on ja miten sillä ajetaan);
- **lohkotasoa** (Logiikkalohkot);
- **hashtageja**;
- **Suosikki**-merkintää (puhelin, tabletti): suosikkiprofiili siirtyy luettelosi kärkeen. Tietokoneella **Suosikki** on profiilisivun alapalkissa.

<Screenshot name="edit-profile" alt="Muokkaa profiilia -ikkuna, jossa ovat kuva, nimi, kuvaus ja hashtagit" width={900} />

Täällä myös poistat profiilin ja, kun olet kirjautunut sisään, lähetät sen katalogiin.

Ohjelman tyyppiä ei voi muuttaa. Jos haluat siirtää mallin toiseen editoriin, luo uusi profiili.

## Jaa (vie) profiili {#share-export-a-profile}

**Jaa…** pakkaa profiilin yhdeksi `.dat`-tiedostoksi (nimeltään esimerkiksi `Technic Buggy_<id>.dat`) ja avaa järjestelmän jakovalikon. Lähetä se viestissä tai sähköpostitse tai tallenna tiedostoihisi.

Tiedosto sisältää hubit, kojelaudan ja ohjelman. Se ei sisällä ostoksia: teemat ja erikoisohjaimet, joita vastaanottajalla ei ole, korvataan tai lukitaan, kun hän muokkaa profiilia (katso [alla](#paid-themes-in-shared-profiles)).

## Tuo profiili {#import-a-profile}

1. Valitse **Omat profiilit** -sivulla **Tuo profiili…** (puhelin: **+** → **Tuo profiili…**; tabletti: **Uusi profiili** -valikko; tietokone: **Tiedosto → Tuo profiili…**, ⌘O / Ctrl+O).
2. Valitse `.dat`-tiedosto.

Jos sinulla on jo tämä profiili:

- eri versio: valitse **Korvaa**, **Tallenna kopiona** (lisää nimeen ”(copy)”) tai **Peruuta**;
- täsmälleen sama tiedosto: sitä ei ladata uudelleen.

Tiedosto, joka ei ole profiili, hylätään.

:::tip Profiilin monistaminen
Erillistä ”monista”-komentoa ei ole. Saat kopion jakamalla profiilin tiedostoksi ja tuomalla sen valinnalla **Tallenna kopiona**.
:::

## Poista profiili {#delete-a-profile}

Avaa **Muokkaa profiilia**:

- puhelin ja tabletti: **Pyyhkäise poistaaksesi profiilin**;
- tietokone: **Poista profiili** ja vahvista. **Poista profiili** on myös profiilikortin valikossa.

Profiili poistetaan tältä laitteelta ja tililtäsi, joten se katoaa myös muilta laitteiltasi. Tätä ei voi perua; jaa profiili ensin tiedostoksi, jos saatat tarvita sitä uudelleen.

## Katalogin profiilit {#profiles-from-the-catalog}

[Profiilikatalogista](/docs/Application/Profiles/Catalog) asennettu profiili on oma kopiosi:

- niin kauan kuin et muuta sitä, se toimii täsmälleen julkaistussa muodossa, ja **Päivitä** asentaa uuden version, kun tekijä julkaisee sellaisen (**Muokkaa profiilia** -kohdan **Päivitä katalogista** tekee saman);
- ensimmäinen muutos näyttää varoituksen: sen jälkeen profiili ei enää saa katalogipäivityksiä.

## Maksulliset teemat jaetuissa profiileissa {#paid-themes-in-shared-profiles}

Profiilit voivat käyttää maksullisia [teemoja](/docs/Application/Themes/ThemesOverview) ja erikoisohjaimia (ohjauspyörä, polkimet, vaihteisto ja muut). Kun muokkaat profiilia, joka käyttää tuotteita, joita sinulla ei ole:

- sellaisten teemojen ohjaimet, joita sinulla ei ole, vaihtuvat ilmaiseen **Perus**-teemaan;
- erikoisohjaimet, joilla ei ole ilmaista vastinetta, lukitaan, kunnes ostat ne;
- omistamasi tuotteet pysyvät ennallaan.

Muuttamaton katalogiprofiili toimii kaikkine tuotteineen, myös niiden, joita sinulla ei ole.

## Synkronointi {#sync}

Kun olet kirjautunut sisään, jokainen muutos lähetetään palvelimelle ja näkyy muilla laitteillasi. Katso [Synkronointi laitteiden välillä](/docs/Application/Account/Sync).

Jos avaat profiilin, jota muokataan jo toisella laitteella, MOCPilot pyytää sinua valitsemaan: **Vain katselu** (muutoksia ei tallenneta) tai **Ota muokkaus haltuun**.
