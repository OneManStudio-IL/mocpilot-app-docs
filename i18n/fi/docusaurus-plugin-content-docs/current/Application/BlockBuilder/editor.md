---
id: Editor
title: Työskentely editorissa
description: "Yläpalkki, paletti, lohkojen vetäminen, zoomaus, pikavalikot, kumoaminen, Seuranta, Reppu, Editorin asetukset ja Tekoälyrakentaja Logiikkalohkoissa."
---

import Screenshot from '@site/src/components/Screenshot';

# Työskentely editorissa {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Logiikkalohkojen editori" width={900} />

## Yläpalkki {#top-bar}

- **Tietokone ja verkkoeditori**: vasemmalla **Koti** ja valikot sekä niiden vieressä **Kumoa** ja **Tee uudelleen**. Keskellä: profiilin nimi sekä **Kojelauta**, **Hubit** ja **Peliohjain**. Oikealla: **Tekoälyrakentaja**, [**Reppu**](/docs/Application/BlockBuilder/Backpack), **Seuranta**, **Lisää toimintoja** (⋯), **Etäohjaus** ja oranssi **Suorita**-painike. Kapeassa ikkunassa painikkeet, jotka eivät mahdu, siirtyvät kohtaan **Lisää toimintoja**; siellä on aina **Editorin asetukset…**.
- **Puhelin ja tabletti**: vasemmalla **Koti**; oikealla **Kumoa**, **Tee uudelleen**, **Kojelauta**, **Omat hubit**, **Etäohjaus**, **Lisää toimintoja** ja **Suorita / Pysäytä**. Kohdassa **Lisää toimintoja** ovat **Tekoälyrakentaja**, **Reppu**, **Seuranta**, **Peliohjain** ja **Editorin asetukset**.

Katso [Puhelin, tabletti ja työpöytä](/docs/Introducing/Layouts#editor-top-bar), miten palkki tiivistyy kapeassa ikkunassa.

## Paletti ja ohjelma-alue {#palette-and-program-area}

- Näytä tai piilota paletti valinnalla **Näytä → Lohkopaletti** (⌘P / Ctrl+P).
- Valitse luokka, vedä lohko ohjelma-alueelle ja pudota se toisen lohkon alle liittääksesi sen. Esikatselu näyttää, mihin se napsahtaa.
- Vedä koko pinoa sen ylimmästä lohkosta; vetämällä lohkoa keskeltä otat mukaan sen ja kaiken sen alla olevan.
- Poista lohkoja vetämällä ne takaisin palettiin.
- Muuttujat, listat, viestit ja Minun lohkot luodaan luokkiensa painikkeilla (**Luo muuttuja**, **Luo lista**, **Lisää viesti**, **Luo lohko**) tai valikosta **Muokkaa → Uusi muuttuja… / Uusi lista… / Uusi viesti… / Uusi lohko…**. Äänillä ja ajoneuvoilla on myös omat painikkeensa: **Lisää ääni** luokassa [Äänet](/docs/Application/BlockBuilder/Blocks/Sounds) ja **Luo ajoneuvo** luokassa [Simulaattori](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoomaus ja vieritys {#zoom-and-scroll}

- Nipistä (kosketusnäytöllä) tai käytä valintaa **Näytä → Lähennä / Loitonna / Todellinen koko** (⌘+ / ⌘− / ⌘0).
- Liiku vetämällä tyhjästä kohdasta.
- Tyhjän kohdan pikavalikossa ovat **Lähennä**, **Loitonna**, **Palauta zoomaus** ja **Poista N lohkoa**.

## Lohkon valikko {#block-menu}

Paina lohkoa pitkään (kosketusnäytöllä) tai napsauta sitä hiiren oikealla painikkeella:

- **Muokkaa**: muuta sen arvoja;
- **Monista**;
- **Poista lohko** / **Poista N lohkoa**;
- **Lisää reppuun**: säilytä lohko ja kaikki siihen liitetty [repussa](/docs/Application/BlockBuilder/Backpack);
- **Tietoja lohkosta**: avaa lohkon kuvauksen tässä dokumentaatiossa;
- **Vie lohko SVG-muodossa** / **Vie kaikki lohkot SVG-muodossa**: tallenna kuva opetusohjetta tai foorumiviestiä varten.

<Screenshot name="blocks-block-menu" alt="Lohkon pikavalikko Logiikkalohkoissa" width={900} />

Kojelaudan ohjaimeen linkitetyn lohkon voi poistaa vasta, kun olet irrottanut sen ohjaimesta.

## Kumoa ja tee uudelleen {#undo-and-redo}

Käytä valintaa **Muokkaa → Kumoa / Tee uudelleen** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) tai yläpalkin **Kumoa**- ja **Tee uudelleen** -painikkeita (tietokoneella valikkojen vieressä).

- Yksi vetäminen on yksi vaihe; saman arvon nopeat muokkaukset yhdistyvät yhdeksi vaiheeksi.
- Kumoaminen toimii myös ohjelman käydessä.
- Muuttujien, listojen, viestien tai Minun lohkojen luominen tai poistaminen on myös vaihe; sen kumoaminen pysäyttää käynnissä olevan ohjelman.
- Muuttujiin ja listoihin tallennettuja arvoja ei kumota.
- Kojelaudalla on oma kumoamishistoriansa.

## Seuranta {#monitor}

**Seuranta** (⇧⌘M / Ctrl+Shift+M, **Näytä → Seuranta**) näyttää muuttujien ja listojen nykyiset arvot ohjelman käydessä. Sen painike on tietokoneella yläpalkissa ja puhelimessa tai tabletissa kohdassa **Lisää toimintoja**. Tietokoneella sen voi avata erilliseen ikkunaan. Siitä on suuri apu virheitä etsiessä.

## Reppu {#backpack}

**Reppu** (⇧⌘B / Ctrl+Shift+B, **Näytä → Reppu**) säilyttää lohkopinoja, joita voit käyttää uudelleen missä tahansa profiilissa: valitse lohkon valikosta **Lisää reppuun** ja lisää kohde sitten mihin tahansa ohjelmaan napauttamalla tai vetämällä. Sen painike on yläpalkissa **Seurannan** vieressä tai kohdassa **Lisää toimintoja**. Katso [Reppu](/docs/Application/BlockBuilder/Backpack).

<Screenshot name="blocks-monitor" alt="Seuranta näyttää muuttujat ja listan ohjelman käydessä" width={900} />

## Editorin asetukset {#editor-settings}

Avaa ne yläpalkista kohdasta **Lisää toimintoja** → **Editorin asetukset** (tietokoneella myös **Ohjelma → Editorin asetukset…**).

- **Käynnistä lohko napsauttamalla**: lohkon napsauttaminen suorittaa sen, joten voit testata sitä erikseen; jos ohjelma on pysäytetty, tämä myös käynnistää sen.
- **Avaa ohjelma keskelle**: kun avaat profiilin, ohjelma näytetään 100 %:n koossa piirtoalueen keskellä (tai vasemmasta yläkulmasta alkaen, jos se on suurempi) riippumatta siitä, mihin jätit sen muokatessasi. Tämä koskee kaikkia tämän laitteen profiileja.
- **Pysäytä hubin portit, kun ohjelma pysähtyy**: pysäyttää kaikki moottorit ja sammuttaa kaikki valot, kun painat **Pysäytä**. Pidä asetus päällä, ellei moottorien tarvitse säilyttää tilaansa.
- **Valitse lohkotaso**: Aloittelija, Edistynyt tai Guru.

<Screenshot name="blocks-editor-settings" alt="Logiikkalohkojen Editorin asetukset -paneeli" width={900} />

## Lohkotasot {#block-levels}

| Taso | Näyttää |
|---|---|
| **Aloittelija** | yksinkertaisimmat lohkot; selkeä paletti lapsille ja ensiaskeliin |
| **Edistynyt** | yleiset logiikka- ja laitelohkot |
| **Guru** | koko lohkovalikoiman |

Taso tallennetaan profiiliin. Ohjelmassa jo olevat lohkot toimivat edelleen, kun lasket tasoa.

## Tekoälyrakentaja {#ai-builder}

[MocPilot Prolla](/docs/Application/Account/Pro) **Tekoälyrakentaja** (yläpalkin kimallepainike, puhelimessa tai tabletissa **Lisää toimintoja** → **Tekoälyrakentaja**, ⇧⌘I / Ctrl+Shift+I) määrittää hubit, kojelaudan ja ohjelman kirjoittamasi tai sanomasi kuvauksen perusteella ja muuttaa sitten profiilia pyyntöjesi mukaan. Se toimii Logiikkalohko- ja Pikalinkit-profiileissa. Katso [Tekoälyrakentaja](/docs/Application/Profiles/AiBuilder).

### Näin saat hyvän tuloksen {#ai-builder-tips}

Nimeä hubi, kerro, mitä kuhunkin porttiin on kytketty ja mitä sen pitää tehdä, sekä miten haluat ohjata sitä. Katso [Kirjoita hyvä pyyntö](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Työpöydän valikot {#desktop-menus}

| Valikko | Kohteet |
|---|---|
| Tiedosto | Sulje profiili (⌘W) |
| Muokkaa | Kumoa, Tee uudelleen, Uusi muuttuja…, Uusi lista…, Uusi viesti…, Uusi lohko… |
| Näytä | Lohkopaletti (⌘P), [Reppu](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Seuranta (⇧⌘M), Lähennä, Loitonna, Todellinen koko |
| Ohjelma | Suorita (⌘R), Pysäytä (⌘.), Editorin asetukset… |

Käytä Windowsissa ⌘:n sijaan Ctrl-näppäintä ja ⇧:n sijaan Shift-näppäintä.
