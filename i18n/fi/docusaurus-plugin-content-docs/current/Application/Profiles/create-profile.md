---
id: CreateProfile
title: Profiilin luominen
description: "Luo profiili ja valitse Logiikkalohkot- tai Pikalinkit-ohjelmaeditori."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Profiilin luominen {#create-a-profile}

1. Siirry kohtaan **Omat profiilit**.
   - Puhelin: napauta **+** → **Uusi profiili**.
   - Tabletti: otsakkeen **Uusi profiili**.
   - Tietokone: **Tiedosto → Uusi profiili** (⌘N / Ctrl+N).
2. Valitse **ohjelman tyyppi** (katso alla).
3. Täytä profiilin tiedot.
4. Napauta **Luo**. Profiili avautuu editoriin.

<Screenshot name="create-profile-tiles" alt="Uusi profiili -sivu" width={900} />

## Valitse ohjelman tyyppi {#choose-the-program-type}

Ohjelman tyyppi määrää, mitä editoria profiili käyttää. **Sitä ei voi muuttaa myöhemmin.** Jos haluat kokeilla toista editoria, luo toinen profiili.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Pikalinkit" style={{width: '100%', maxWidth: 320}} />
    <h3>Pikalinkit</h3>
    <p><em>Yksinkertaistettu malli, kuten Controlzissa.</em> Yhdistä kojelaudan ohjaimet hubin moottoreihin ja valoihin rivi kerrallaan: syöte, käsittely, toiminto, hubi. Valmis minuuteissa.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logiikkalohkot" style={{width: '100%', maxWidth: 320}} />
    <h3>Logiikkalohkot</h3>
    <p><em>Robotiikkaa, algoritmeja ja edistyneitä skenaarioita.</em> Ohjelmoi malli lohkoilla: tapahtumat, silmukat, ehdot, muuttujat ja anturitiedot. Roboteille ja automaatioon.</p>
  </div>
</div>

| | Pikalinkit | Logiikkalohkot |
|---|---|---|
| Miten rakennetaan | Rivit: syöte → käsittely → toiminto → hubi | Lohkot napsautetaan skripteiksi |
| Oppimisaika | Minuutteja | Pidempi; enemmän mahdollisuuksia |
| Sopii parhaiten | Autot, kuorma-autot, junat, nosturit: ”tämä ohjain liikuttaa tuota moottoria” | Robotit, automaattiset sarjat, anturilogiikka, pelit |
| Logiikka (jos, silmukat, muuttujat) | Ei (vain kynnysarvot ja vaihtokytkimet) | Kyllä |
| Anturit | Hubin anturit syötteinä; arvot ilmaisimiin | Kaikki hubin ja puhelimen anturit, mitkä tahansa laskutoimitukset |
| Pehmeä lähtö, rajoitukset, kuollut alue | Valmiit lohkot | Rakennetaan lohkoista |
| Servo-ohjaus kalibroinnilla | Valmis lohko | Lohkot |
| Peliohjain | Kyllä | Kyllä |
| Useita hubeja | Kyllä | Kyllä |

**Etkö ole varma?** Aloita Pikalinkeillä. Jos tarvitset myöhemmin logiikkaa, tee mallille Logiikkalohkot-profiili.

Jos napautat **Luo** valitsematta tyyppiä, ruudut korostetaan. Kussakin ruudussa on **Dokumentaatio ↗** -linkki tämän dokumentaation vastaavaan osaan.

## Profiilin tiedot {#profile-details}

- **Kuva**: napsauta kuva-aluetta (kosketusnäytöllä paina pitkään) valitaksesi kuvan. Vedä kuvaa ylös tai alas valitaksesi näkyvän osan. **Päivitä kuva** ja **Poista** muuttavat sitä myöhemmin.
- **Nimi**: pakollinen, ja sen on oltava yksilöllinen: ”Profiili nimellä … on jo olemassa” tarkoittaa, että sinulla on jo samanniminen profiili.
- **Lohkotasot** (vain Logiikkalohkot): **Aloittelija**, **Edistynyt** tai **Guru**. Se määrää, mitä lohkoja paletti näyttää tälle profiilille. Voit muuttaa sitä myöhemmin Editorin asetuksissa. Katso [Työskentely editorissa](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtagit**: kuvaavat profiilia ja auttavat muita löytämään sen. Hashtagit tulevat yhteisestä luettelosta, joka latautuu, kun olet verkossa.

Kaikkea muuta paitsi ohjelman tyyppiä voi muuttaa myöhemmin kohdassa **Muokkaa profiilia**, jossa voit myös lisätä kuvauksen ja merkitä profiilin **Suosikiksi**.

## Seuraavat vaiheet {#next-steps}

1. Lisää hubit: [Hubin lisääminen ja yhdistäminen](/docs/Application/Hubs/ConnectingHubs).
2. Sijoita ohjaimet: [Kojelauta](/docs/Application/Dashboard/DashboardOverview).
3. Kirjoita ohjelma: [Pikalinkit](/docs/Application/Links/LinksIntroducing) tai [Logiikkalohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Tekoälyrakentaja
[MocPilot Prolla](/docs/Application/Account/Pro) voit kuvailla mallisi sanoin tai äänellä ja antaa tekoälyrakentajan luoda hubit, kojelaudan ja ohjelman (Logiikkalohkot tai Pikalinkit). Kerro, mitä hubia käytät, mitä kuhunkin porttiin on kytketty ja mitä sen pitäisi tehdä. Katso [Näin saat hyvän tuloksen](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
