---
id: MyBlocks
title: Minun lohkot
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Minun lohkot {#my-blocks}

Minun lohkot -toiminnolla voit tehdä omia, uudelleenkäytettäviä lohkoja.
Se toimii kuin funktio tavallisessa ohjelmoinnissa: kuvaat toiminnan kerran ja käytät sitä niin monessa paikassa kuin haluat.

## Lohkot {#the-blocks}

### `määritellä …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Luo uusi lohko painamalla luokan yläreunan **Luo lohko** -painiketta. Ohjelma-alueelle tulee silloin lohkosi nimellä varustettu `määritellä`-hattulohko: sen alle liittämäsi lohkot ovat se, mitä lohkosi tekee.

- Tyypillinen käyttö: toistuvan logiikan kokoaminen yhteen selkeästi nimettyyn lohkoon.

### Oma lohkosi (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Jokainen tekemäsi lohko näkyy paletissa nimellään. Sen käyttäminen suorittaa sen `määritellä`-lohkoon liitetyt lohkot.

- Tyyppi: pinolohko
- Tyypillinen käyttö: saman logiikan käyttäminen useassa paikassa kopioimatta pinoja.

## Esimerkkejä erilaisilla syötteillä {#examples-with-different-inputs}

Omia lohkoja erilaisilla syötejoukoilla:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Oman lohkon käyttäminen ohjelmassa {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Tässä omaa lohkoa käytetään `kun ohjelma käynnistyy` -lohkon alla, ja `määritellä`-pinossa on sen suorittama moottorilogiikka.

- Tavallinen tapa: käytä omia lohkojasi tapahtumaskripteissä.
- Hyöty: yksi määrittely, monta käyttöpaikkaa.

## Lohkoeditori {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

**Luo lohko** -editorissa suunnittelet, miltä lohkosi näyttää: lisää tekstejä (**Lisää etiketti**) ja syötteitä (**Lisää syöte**: *numero tai teksti* tai *boolean*). `määritellä`-pinon sisällä syötteet toimivat kuin muuttujat, joissa on lohkolle välitetyt arvot.

## Miksi käyttää Minun lohkoja {#why-use-my-blocks}

- Uudelleenkäyttö: kirjoita kerran, käytä monta kertaa.
- Luettavuus: yksi kuvaava nimi pitkien toistuvien pinojen sijaan.
- Helpot muutokset: korjaa logiikka yhdessä paikassa jokaisen kopion sijaan.
- Rakenne: jaa iso ohjelma pieniin loogisiin osiin.

## Huomioita {#notes}

- Omat lohkot kuuluvat profiiliin, ja niitä voi käyttää missä tahansa sen ohjelmassa.
- Anna lohkoille nimet, jotka kertovat, mitä ne tekevät, eivät sitä, miten ne sen tekevät.
- Itseään kutsuva lohko voi jäädä silmukkaan ikuisesti; editori varoittaa siitä.
