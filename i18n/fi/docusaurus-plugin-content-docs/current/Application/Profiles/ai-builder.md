---
id: AiBuilder
title: Tekoälyrakentaja
description: "Kuvaile malliasi sanoin tai äänellä, niin tekoälyrakentaja määrittää Logiikkalohkot- tai Pikalinkit-profiilin hubit, kojelaudan ja ohjelman."
---

import Screenshot from '@site/src/components/Screenshot';

# Tekoälyrakentaja {#ai-builder}

Kuvaile malliasi omin sanoin, kirjoittamalla tai puhumalla, niin **tekoälyrakentaja** määrittää profiilin puolestasi: hubit ja portit, kojelaudan ohjaimet ja ohjelman. Se toimii molemmissa editoreissa: [Logiikkalohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)-profiilissa se rakentaa lohkoja, [Pikalinkit](/docs/Application/Links/LinksIntroducing)-profiilissa rivejä. Sen jälkeen voit jatkaa keskustelua sen kanssa muuttaaksesi profiilia tai muokata sitä itse.

Tekoälyrakentaja kuuluu [MocPilot Prohon](/docs/Application/Account/Pro) ja toimii sovelluksessa ja [verkkoeditorissa](/docs/Introducing/WebEditor). Se vaatii internetyhteyden.

<Screenshot name="blocks-ai-builder" alt="Tekoälyrakentajan paneeli ohjelman vieressä" width={900} />

## Avaa tekoälyrakentaja {#open-the-ai-builder}

1. Avaa profiili muokattavaksi.
2. Paina yläpalkin **Tekoälyrakentaja**-painiketta (kipinäkuvake). Tietokoneella voit myös painaa ⇧⌘I / Ctrl+Shift+I.
3. Kirjoita pyyntösi kenttään **Mitä tekoälyn pitäisi rakentaa tai muuttaa?** ja paina **Lähetä** (tai Enter; Shift+Enter aloittaa uuden rivin).

Ilman MocPilot Prota painike näyttää, mitä tekoälyrakentaja tekee, sekä vaihtoehdot **Hanki MocPilot Pro** ja **Ei nyt**.

Missä paneeli avautuu:

- **Puhelin**: koko näytön sivu editorin päällä.
- **Tabletti**: kelluva kortti; vedä sitä otsakkeesta vasempaan tai oikeaan reunaan.
- **Tietokone**: kortti oikealla. Sovelluksessa (ei selaimessa) voit painaa sen otsakkeessa **Avaa erillisessä ikkunassa** ja sijoittaa ikkunan editorin viereen.

Tekoälyn työskennellessä paneeli näyttää, mitä se tekee (**Mietitään malliasi…**, **Tarkistetaan profiilia…** ja niin edelleen). Muutokset näkyvät editorissa heti, kun se on valmis, ja niiden mukana lyhyt yhteenveto muutoksista. Kun paneeli on tyhjä, se ehdottaa muutamaa esimerkkipyyntöä: napauta yhtä siirtääksesi sen tekstikenttään ja lähetä se sellaisenaan tai muokkaa sitä ensin.

Keskustelu säilytetään profiilikohtaisesti, joten voit sulkea paneelin ja palata siihen myöhemmin.

## Kirjoita hyvä pyyntö {#ai-builder-tips}

:::tip Kerro, mitä hubia käytät, mitä kuhunkin porttiin on kytketty ja mitä sen pitäisi tehdä
Yhden rivin pyyntö, kuten ”auto, jossa on valot”, ei riitä: tekoälyn täytyy arvata hubi, portit ja kunkin moottorin tehtävä, ja tulosta joutuu todennäköisesti korjaamaan. Mainitse:

- **Hubi**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Mitä kussakin portissa on**: vetomoottori, ohjausmoottori (servo), valot, anturi.
- **Mitä kunkin pitäisi tehdä**: ajaa, ohjata kalibroinnilla, kytkeytyä päälle ja pois, nopeusrajoitus.
- **Miten haluat ohjata sitä**: ohjainsauvat, liukusäätimet, painikkeet, peliohjain.
:::

Sano se niin kuin selittäisit ystävälle. Voit kirjoittaa omalla kielelläsi.

Jos jokin ei vieläkään ole oikein, kerro tekoälylle, mitä muuttaa, sen sijaan että aloittaisit alusta.

## Esimerkkipyyntöjä {#example-requests}

**Auto**: ”Auto, jossa on Technic Hub: ajomoottori portissa A, ohjausmoottori portissa C toimii servona, valot portissa D. Ohjausjoystick vasemmalla, kaasu oikealla, painike sytyttää valot.”

**Nosturi**: ”Nosturi, jossa on Technic Hub: kääntömoottori portissa A, puomin moottori portissa B, koukun vinssi portissa C. Liukusäädin kääntämiseen, ylös/alas-painikkeet puomille, ohjainsauva koukulle, puomin nopeus rajoitettu 50 %:iin.”

**Juna**: ”City-juna, jossa on City Hub: junamoottori portissa A, valot portissa B. Askelkytkin nopeudelle, nopeusmittari ja painike valoille.”

## Muuta olemassa olevaa profiilia {#change-an-existing-profile}

Avaa tekoälyrakentaja jo olemassa olevassa profiilissa, vaikka käsin rakentamassasi, ja kerro, mitä muuttaa. Tekoäly näkee nykyiset hubit, kojelaudan ja ohjelman ja muokkaa niitä:

- ”Tee ohjauksesta hitaampi.”
- ”Lisää pysäytyspainike.”
- ”Kopioi ohjaimet peliohjaimelleni.”
- ”Rajoita puomin nopeus 50 %:iin.”

Voit myös kysyä profiilista, esimerkiksi ”Missä portissa valot ovat?”. Tekoäly vastaa paneelissa ja jättää profiilin ennalleen.

## Mitä profiilillesi tapahtuu {#what-happens-to-your-profile}

- Tekoäly muuttaa avoinna olevaa profiilia suoraan: hubit, kojelauta ja ohjelma päivittyvät kerralla. Jos ohjelma on käynnissä, se pysähtyy.
- Tekoäly käyttää profiilin ohjelman tyyppiä: Logiikkalohkot-profiilissa se kirjoittaa lohkoja, Pikalinkit-profiilissa rivejä. Se ei koskaan muuta toista toiseksi. Jos pyyntö vaatii jotain, mihin Pikalinkkien rivit eivät pysty, tekoäly kertoo, että tarvitaan Logiikkalohkot-profiili.
- Profiilin osat, joita tekoälyn ei tarvitse muuttaa, pysyvät ennallaan.
- **Kumoa viimeisin tekoälyn muutos** (paneelin otsakkeen kumoamispainike) palauttaa profiilin sellaiseksi kuin se oli ennen viimeisintä tekoälyn muutosta. Paina sitä uudelleen palataksesi kauemmas, enintään 10 muutosta. Kumoamishistoria tyhjennetään, kun avaat toisen profiilin.
- Voit jatkaa profiilin muokkaamista itse milloin tahansa.

## Puhesyöte {#voice-input}

Paina **Sanele** (mikrofonipainike) ja sano pyyntösi; teksti ilmestyy kenttään, ja voit korjata sitä ennen lähettämistä. Lopeta painamalla painiketta uudelleen. Jos käytettävissä on useita kieliä, mikrofonin vieressä oleva pieni kielipainike vaihtaa sanelukieltä; sovellus muistaa valintasi.

| Missä | Miten |
|---|---|
| iPhone, iPad, Mac | **Sanele**; salli ensimmäisellä kerralla mikrofonin käyttö ja puheentunnistus |
| Android | **Sanele**; salli ensimmäisellä kerralla mikrofonin käyttö |
| Windows | paina **Win+H** sanellaksesi Windowsin puhekirjoituksella (mikrofonipainike muistuttaa siitä) |
| Verkkoeditori | **Sanele** Chromessa, Edgessä ja Safarissa; salli sivustolle mikrofonin käyttö. Firefoxissa ei ole sanelua |

Puhesyötteen ilmoitukset:

| Ilmoitus | Mitä tehdä |
|---|---|
| **Salli MOCPilotille mikrofonin käyttö järjestelmäasetuksissa** | Ota MOCPilotin mikrofonin käyttö käyttöön järjestelmäasetuksissa |
| **Salli MOCPilotille puheentunnistus järjestelmäasetuksissa** | Ota Applen laitteessa MOCPilotin puheentunnistus käyttöön järjestelmäasetuksissa |
| **Salli tälle sivustolle mikrofonin käyttö selaimessa** | Salli mikrofoni selaimen sivustoasetuksissa |
| **Mitään ei kuulunut** | Paina **Sanele** ja puhu uudelleen |
| **Puhesyöte vaatii verkkoyhteyden** | Yhdistä internetiin tai kirjoita pyyntö |
| **Puheentunnistus ei ole juuri nyt käytettävissä tällä kielellä** | Vaihda sanelukieltä tai kirjoita pyyntö |
| **Mikrofonia ei löytynyt** / **Puhesyöte ei ole käytettävissä tällä laitteella** | Kirjoita pyyntö |

## Rajoitukset {#limits}

- Noin 30 pyyntöä päivässä ja kuukausiraja. Paneelin otsake näyttää, paljonko olet käyttänyt: **Tänään 5/30 · Kuukausi 12%**.
- Ilmaisen kokeilujakson aikana tekoälypyyntöjen määrä on rajoitettu; ne jatkuvat, kun tilaus alkaa.
- Yksi pyyntö kerrallaan: odota vastausta ennen kuin lähetät seuraavan.
- Tekoälyrakentaja vain rakentaa ja muokkaa profiileja. Se ei vastaa muita aiheita koskeviin kysymyksiin.

## Virheilmoitukset {#error-messages}

| Ilmoitus | Mitä tehdä |
|---|---|
| **Tekoälyrakentaja ei ole käytettävissä** / **Tekoälypalveluun ei saatu yhteyttä. Tarkista internetyhteys ja yritä uudelleen.** | Tarkista internetyhteys ja avaa paneeli uudelleen |
| **Ei yhteyttä tekoälypalveluun. Tarkista internetyhteys ja yritä uudelleen.** | Tarkista yhteys ja lähetä pyyntö uudelleen |
| **Yhteys tekoälypalveluun katkesi…** | Kun olet taas verkossa, vastaus näkyy paneelissa, tai lähetä pyyntö uudelleen |
| **Tekoäly ei vastannut ajoissa. Lähetä pyyntö uudelleen.** / **Pyyntö katosi, lähetä se uudelleen** | Lähetä pyyntö uudelleen |
| **Tekoäly ei pystynyt rakentamaan toimivaa profiilia tähän pyyntöön. Kokeile sanoa se toisin.** | Muotoile pyyntö uudelleen: nimeä hubi, portit ja kunkin tehtävä |
| **Profiili on liian suuri rakennettavaksi kerralla. Pyydä vähemmän asioita kerralla.** | Jaa pyyntö pienempiin vaiheisiin |
| **Tekoäly hylkäsi tämän pyynnön.** | Muotoile pyyntö uudelleen niin, että se koskee profiilia |
| **Saavutit tämän päivän tekoälypyyntöjen rajan. Yritä uudelleen huomenna.** | Odota huomiseen tai muokkaa profiilia itse |
| **Saavutit tämän kuun tekoälyrajan.** | Raja nollautuu ensi kuussa |
| **Olet käyttänyt kaikki ilmaisen kokeilujakson tekoälypyynnöt. Ne jatkuvat, kun tilaus alkaa.** | Odota, että tilaus alkaa |
| **Tekoälyrakentaja vain rakentaa ja muokkaa profiileja. Liian monta pyyntöä muista aiheista: yritä uudelleen tunnin kuluttua.** | Odota tunti ja kysy vain profiilista |
| **Tekoälypyyntöjä on juuri nyt liikaa. Yritä uudelleen minuutin kuluttua.** | Yritä uudelleen minuutin kuluttua |
| **Edellinen pyyntö on vielä käynnissä.** | Odota vastausta |
| **Tekoälypalvelu ei ole tilapäisesti käytettävissä. Yritä myöhemmin uudelleen.** / **Sinulla on MocPilot Pro. Tekoälyrakentaja ei ole juuri nyt käytettävissä, yritä myöhemmin uudelleen.** | Yritä myöhemmin uudelleen |
| **Vastaus koski toista profiilia** | Avasit toisen profiilin tekoälyn työskennellessä, joten muutosta ei otettu käyttöön. Avaa ensimmäinen profiili uudelleen ja toista pyyntö |
| **Avaa ensin profiili muokattavaksi** | Avaa profiili editorissa ja lähetä sitten pyyntö |
| **Profiilia ei voitu päivittää editorissa** / **Muutosta ei voitu kumota** | Yritä uudelleen; jos sama toistuu, sulje profiili ja avaa se uudelleen |
