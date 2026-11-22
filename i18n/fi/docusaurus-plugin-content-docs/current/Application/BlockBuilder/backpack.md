---
id: Backpack
title: Reppu
description: "Säilytä Logiikkalohkot-ohjelmiesi osia repussa ja lisää ne mihin tahansa profiiliin millä tahansa laitteellasi."
---

import Screenshot from '@site/src/components/Screenshot';

# Reppu {#backpack}

**Reppu** on paikka, jossa säilytät lohko-ohjelmiesi osia käyttääksesi niitä uudelleen muissa profiileissa: ohjausrutiinin, valoshow'n tai kerran kirjoittamasi Oman lohkon, jonka haluat kaikkialle. Tallenna lohkopino reppuun yhdessä profiilissa ja lisää se sitten mihin tahansa muuhun profiiliin, tällä laitteella tai millä tahansa laitteella, jolla olet kirjautuneena.

Reppu kuuluu [Logiikkalohkojen](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) editoriin. Pikalinkit-profiileissa sitä ei ole.

<Screenshot name="backpack-panel" alt="Reppu-paneeli lohko-ohjelman vieressä" width={900} />

## Mitä reppu säilyttää {#what-the-backpack-keeps}

Jokainen repun kohde on **kopio** tallentamistasi lohkoista:

- **Pino**: valitsemasi lohko sekä kaikki sen alle ja sisään liitetyt lohkot, aivan kuten **Monista** kopioi sen.
- **Oma lohko**: jos tallennat [Oman lohkon](/docs/Application/BlockBuilder/Blocks/MyBlocks) `define …`-lohkon, reppu säilyttää koko määrittelyn. Tällaiset kohteet on merkitty tekstillä **Oma lohko**.

Kohde muistaa myös, mitä Omia lohkoja lohkosi käyttävät (myös muiden Omien lohkojen kautta), sekä niiden muuttujien, listojen, viestien, ajoneuvojen ja äänten nimet, joihin ne viittaavat, joten lohkot toimivat, kun lisäät ne muualle.

Lisätyistä lohkoista tulee tavallinen osa profiilin ohjelmaa. Mikään profiilissa ei ole riippuvainen repusta: kohteen poistaminen tai nimeäminen uudelleen ei muuta ohjelmia, joihin olet lisännyt sen. Kohteita ei voi muokata repussa. Jos haluat muuttaa kohdetta, lisää se, muokkaa lohkoja ohjelmassa ja tallenna ne reppuun uudelleen uutena kohteena.

## Lohkojen tallentaminen reppuun {#save-blocks}

1. Napsauta ohjelmassa lohkoa hiiren oikealla painikkeella (tietokone) tai paina sitä pitkään (puhelin, tabletti).
2. Valitse **Lisää reppuun**.
3. Kirjoita nimi kenttään **Lohkojen nimi** ja napauta **Tallenna**.

Lohko ja kaikki siihen liitetty siirtyvät reppuun. Jos haluat tallentaa Oman lohkon määrittelyn, avaa sen `define …`-lohkon valikko.

<Screenshot name="backpack-add" alt="Lohkon valikko, jossa on Lisää reppuun, ja nimi-ikkuna" width={900} />

## Repun avaaminen {#open}

- **Tietokone ja verkkoeditori**: editorin yläpalkin **Reppu**-painike, valikon **Näytä → Reppu** tai **Ctrl+Shift+B** (Macissa **⌘⇧B**). Jos ikkuna on kapea, painike on **Lisää toimintoja** -valikossa. Reppu avautuu paneelina editorin oikeaan reunaan, [Seurannan](/docs/Application/BlockBuilder/Editor#monitor) viereen, jos sekin on auki.
- **Puhelin ja tabletti**: editorin yläpalkissa **Lisää toimintoja → Reppu**. Reppu avautuu paneelina editorin päälle.

Painike on korostettuna, kun reppu on auki. Sulje reppu painamalla painiketta uudelleen.

Jokaisessa kohteessa näkyy sen kuva, nimi ja lohkojen määrä (**Lohkoja: N**). Paneelin alareunan teksti kertoo, missä reppua säilytetään (katso [alempaa](#where-it-is-kept)).

## Lohkojen lisääminen ohjelmaan {#insert}

- **Napauta kohdetta**: sen lohkot ilmestyvät ohjelman näkyvään osaan.
- **Vedä kohde ohjelmaan**: lohkot tulevat siihen kohtaan, johon pudotat ne. Vedä sivuttain ohjelmaa kohti; ylös- tai alaspäin vetäminen vierittää luetteloa.
- **Kohteen valikko (⋯)**: **Lisää**, **Nimeä uudelleen…** tai **Poista**.

Puhelimissa ja tableteissa reppu sulkeutuu lisäämisen jälkeen, jotta näet lohkot. Yksi **Kumoa** poistaa kaiken lisätyn.

### Mitä lisättäessä tapahtuu {#what-happens}

- **Omat lohkot**: jos profiilissa on jo samansisältöinen Oma lohko, sitä käytetään, joten samojen lohkojen lisääminen uudelleen ei luo siitä kopioita. Jos jokin toinen profiilin Oma lohko käyttää sisäisesti samaa nimeä, lisätylle luodaan oma erillinen Oma lohko. Jos lisäät Oma lohko -kohteen, joka on jo profiilissa, mitään ei tapahdu ja näkyviin tulee **On jo täällä**: löydät lohkon kohdasta **Minun lohkot**.
- **Muuttujat, listat, viestit ja ajoneuvot**: jos profiilissa on samanniminen, lohkot käyttävät sitä; muuten se luodaan. Muuttujien arvoja ja listojen sisältöä ei kopioida. Jos nimi on jo jonkin muun käytössä, saat viestin, kuten *Muuttujaa ”speed” ei voitu luoda: nimi on varattu*.
- **Äänet**: omat äänesi ovat profiilin tiedostoja, eikä niitä säilytetä repussa. Jos profiilissa ei ole sennimistä ääntä, näet viestin *Ääntä ”…” ei ole tässä profiilissa: valitse ääni lohkoissa*. Sisäänrakennetut äänet toimivat kaikkialla.
- **Hubi- ja kojelautalohkot**: lohkoja, jotka koskevat hubia, kojelaudan ohjainta tai peliohjainta, jota profiilissa ei ole, ei voi lisätä. Ennen kuin mitään muutetaan, sovellus näyttää ilmoituksen **Joitakin lohkoja ei voi lisätä** sekä luettelon tällaisista lohkoista ja kertoo, montako jää pois, ja kysyy, lisätäänkö muut. Lisää ensin hubi tai kojelaudan ohjain, jos haluat säilyttää ne. Jos mikään lohkoista ei sovi profiiliin, mitään ei lisätä.

## Nimeäminen uudelleen ja poistaminen {#rename-delete}

Avaa kohteen valikko (⋯):

- **Nimeä uudelleen…** muuttaa kohteen nimen.
- **Poista** poistaa sen, kun olet vahvistanut (**Poistetaanko repusta?**). Ohjelmat, joihin olet lisännyt sen, säilyttävät lohkonsa.

Reppu ei koskaan poista kohteita itsestään: poista se, mitä et enää tarvitse.

## Missä reppua säilytetään {#where-it-is-kept}

- **Ilman tiliä (vieras)**: vain tällä laitteella. Paneelissa lukee *Tallennettu tälle laitteelle. Kirjaudu sisään, niin reppu on kaikilla laitteillasi.*
- **Kirjautuneena**: myös tililläsi, joten sinulla on sama reppu kaikilla laitteillasi, myös [verkkoeditorissa](/docs/Introducing/WebEditor). Paneelissa lukee *Tallennettu tiliisi: sama reppu kaikilla laitteillasi.* Yhdellä laitteella tehdyt muutokset näkyvät muilla.
- **Ensimmäinen kirjautuminen**: kohteet, jotka tallensit tällä laitteella vieraana, siirtyvät tilillesi.

Voit käyttää reppua ilman verkkoyhteyttä. Muutokset säilytetään laitteella ja lähetetään tilillesi, kun yhteys palaa (paneelissa näkyy sillä välin **Synkronoidaan…**). Kohdetta, jonka lataus tililtäsi on vielä kesken, ei voi vielä lisätä: sovellus ilmoittaa **Ei vielä valmis**, joten yritä hetken kuluttua uudelleen.

## Rajoitukset {#limits}

| | Raja |
|---|---|
| Kohteita repussa | 200 |
| Yhden kohteen koko | noin 512 kt (hyvin suuri ohjelman osa ei ehkä mahdu: tallenna pienempi osa) |
| Kohteen nimi | enintään 100 merkkiä |

Jos tilisi reppu on täynnä tai kohde on sille liian suuri, kohde jää vain tälle laitteelle, ja sovellus kertoo siitä. Sovelluksen uudemmalla versiolla tallennettuja kohteita voi lisätä vasta, kun olet päivittänyt sovelluksen.

## Vianmääritys {#troubleshooting}

| Viesti | Mitä tehdä |
|---|---|
| **Reppu on täynnä (200 kohdetta). Poista jotain, mitä et tarvitse.** | Poista kohteita, joita et enää käytä. |
| **Liian monta lohkoa reppuun. Tallenna pienempi osa.** | Tallenna pienempi pino tai jaa ohjelma useaksi kohteeksi. |
| **Joitakin lohkoja ei voi lisätä** | Profiilista puuttuu hubi, kojelaudan ohjain tai peliohjain, jota lohkot tarvitsevat. Lisää se ja lisää lohkot uudelleen, tai lisää muut lohkot. |
| **On jo täällä** | Oma lohko on jo tässä profiilissa: löydät sen kohdasta **Minun lohkot**. |
| **Ei vielä valmis** | Kohteen lataus tililtäsi on vielä kesken. Odota hetki ja yritä uudelleen. |
| **Nämä lohkot on tallennettu sovelluksen uudemmalla versiolla. Päivitä sovellus käyttääksesi niitä.** | Päivitä MOCPilot tällä laitteella. |
