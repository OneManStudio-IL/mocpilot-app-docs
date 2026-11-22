---
id: RemoteControl
title: Etäohjaus
description: "Suorita profiilia mallin lähellä olevalla puhelimella, tabletilla tai tietokoneella ja ohjaa sitä toiselta laitteelta tai verkkoeditorista."
---

import Screenshot from '@site/src/components/Screenshot';

# Etäohjaus {#remote-control}

Etäohjauksella voit ajaa mallia, joka on yhdistetty toiseen laitteeseen. Yksi laite pysyy mallin lähellä ja viestii hubien kanssa Bluetoothin kautta; pidät toista laitetta kädessäsi ja käytät sen kojelautaa. Näin myös ajat mallia [verkkoeditorista](/docs/Introducing/WebEditor), koska selaimet eivät voi yhdistää hubeihin.

## Kaksi laitetta {#the-two-devices}

- **Hub-laite** on mallin lähellä oleva puhelin, tabletti tai tietokone. Sen MOCPilot-sovellus yhdistää hubit ja suorittaa profiilin. Se ei tarvitse tiliä.
- **Kauko-ohjain** on laite, josta ohjaat: toisen laitteen MOCPilot-sovellus tai verkkoeditori osoitteessa [mocpilot.com](https://mocpilot.com). Profiili avataan kauko-ohjaimessa, ja kauko-ohjain lähettää sen hub-laitteelle.

## Mitä tarvitset {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) tilillä, jolla on kirjauduttu **kauko-ohjaimessa**. Hub-laite ei tarvitse tiliä eikä Prota.
- MOCPilot-sovellus hub-laitteella.
- Internetyhteys molemmilla laitteilla.

## Yhdistä hub-laite {#connect-a-hub-device}

1. Avaa kauko-ohjaimessa profiili ja paina profiilin yläpalkissa **Suorita**-painikkeen vieressä **Etäohjaus** (kauko-ohjauksen kuvake: talo ja signaalikaaret). Paina verkkoeditorissa avautuvassa paneelissa **Näytä koodi**.

   Kauko-ohjain näyttää **yhteyskoodin**: QR-koodin ja 6 numeroa.
2. Avaa hub-laitteella MOCPilot ja napauta **Omat profiilit** -sivulla **Yhdistä kauko-ohjain**. Macissa voit myös valita **Tiedosto → Yhdistä kauko-ohjain…**.
3. Syötä koodi:
   - **puhelimessa tai tabletissa** osoita kameralla QR-koodia tai napauta **Syötä koodi** ja kirjoita 6 numeroa;
   - **tietokoneella** kirjoita 6 numeroa ja paina **Yhdistä**.
4. Laitteet yhdistyvät. Kauko-ohjain lähettää profiilin hub-laitteelle ja käynnistää sen siellä, ja hub-laite näyttää koko näytön **Etäohjaus**-sivun.

<Screenshot name="remote-control-code" alt="Etäohjaus-paneeli avoimessa profiilissa: QR-koodi ja 6-numeroinen koodi" width={900} />

Yhteyskoodista:

- Se toimii kerran ja on voimassa 5 minuuttia. Kun kauko-ohjain näyttää sitä edelleen, uusi koodi korvaa sen vanhentuessa.
- Skannaa se MOCPilot-sovelluksessa, ei puhelimen kamerasovelluksella.
- Jos suljet kauko-ohjaimen paneelin ennen kuin hub-laite yhdistyy, mitään ei muodostu; paina uudelleen **Etäohjaus** saadaksesi uuden koodin.

<Screenshot name="remote-connect-code-entry" alt="Yhdistä kauko-ohjain -ikkuna tietokoneella ja kenttä 6 numerolle" width={900} />

## Kun laitteet on yhdistetty {#when-the-devices-are-connected}

**Kauko-ohjaimessa:**

- **Etäohjaus**-painike muuttuu vihreäksi (puhelimessa tai tabletissa vihreä rengas), ja sen paneelissa näkyvät hub-laitteen nimi ja **Katkaise yhteys** -painike.
- **Omat hubit** näyttää hub-laitteen hubit. Yhdistä hubit sieltä tavalliseen tapaan: hub-laite etsii niitä, joten paina hubin painiketta pyydettäessä.
- Kojelauta ohjaa mallia.

**Hub-laitteella** koko näytön **Etäohjaus**-sivu näyttää:

- tilan, esimerkiksi **Käynnissä: «Autoni»**;
- **Yhdistettyjä hubeja: N** ja haun aikana **Haetaan hubia: paina hubin painiketta.**;
- muistutuksen: **Pidä sovellus auki. Tämä on hub-laite: se yhdistää hubit ja suorittaa profiilin, kauko-ohjain vain ohjaa sitä.**;
- **Pysäytä**-painikkeen.

Hub-laitteen näyttö pysyy päällä yhteyden ajan. Profiilia ei tallenneta hub-laitteelle, eikä se näy sen profiililuettelossa.

<Screenshot name="remote-hub-device" alt="Hub-laitteen koko näytön Etäohjaus-sivu: yhteyden tila, yhdistettyjen hubien määrä ja Pysäytä-painike" width={900} />

## Suorita ja Pysäytä {#run-and-stop}

- Paina kauko-ohjaimessa **Pysäytä** pysäyttääksesi profiilin hub-laitteella. Hub-laite pysäyttää aina kaikki moottorit, vaikka **Pysäytä hubin portit, kun ohjelma pysähtyy** olisi profiilissa pois käytöstä.
- Paina kauko-ohjaimessa **Suorita** käynnistääksesi sen uudelleen hub-laitteella.
- Verkkoeditorissa hub-laite pysyy pariliitettynä kaikkiin profiileihin, jotka avaat samassa selainvälilehdessä: **Suorita** käynnistää profiilin hub-laitteella. Kun hub-laitetta ei ole liitetty, **Suorita** suorittaa profiilin selaimessa ilman hubeja.

## Jos yhteys katkeaa {#if-the-connection-drops}

:::caution Turvallisuus
Jos hub-laite ei kuule kauko-ohjaimesta mitään 4 sekuntiin, se pysäyttää profiilin ja kaikki moottorit.
:::

Silloin:

- hub-laite näyttää ilmoituksen **Yhteys kauko-ohjaimeen katkesi. Profiili pysäytettiin. Odotetaan kauko-ohjainta…** ja odottaa;
- kauko-ohjaimen sovellus näyttää ilmoituksen **Yhteys katkesi. Yritetään uudelleen…** ja painikkeet **Yritä uudelleen** ja **Katkaise yhteys**;
- verkkoeditori näyttää ilmoituksen **Hub-laitteen yhteys katkesi**: ”*laite* ei vastaa enää. Sen profiili pysäytettiin ja moottorit sammutettiin.” Se yrittää jatkuvasti yhdistää uudelleen; voit myös painaa **Yhdistä uudelleen**, **Suorita selaimessa** tai **Pysäytä**.

Kun laitteet ovat taas yhteydessä, tarkista tila kauko-ohjaimessa ja paina **Suorita**, jos profiili ei ole käynnissä.

## Yhteyden katkaiseminen {#disconnect}

- **Kauko-ohjaimessa**: paina **Etäohjaus** ja valitse **Katkaise yhteys**.
- **Hub-laitteella**: paina **Etäohjaus**-sivulla **Pysäytä**.

Kummassakin tapauksessa profiili ja moottorit pysähtyvät, ja hub-laite sulkee profiilin.

## Vianmääritys {#troubleshooting}

| Ilmoitus | Missä | Mitä tehdä |
|---|---|---|
| **Etäohjaus kuuluu MocPilot Prohon** | kauko-ohjain | Tilaa [MocPilot Pro](/docs/Application/Account/Pro) kauko-ohjaimen tilille. Selaimessa et voi tilata: tee se sovelluksessa, niin Pro toimii myös verkkoeditorissa |
| **Ei yhteyttä palvelimeen** | kumpi tahansa | Tarkista internetyhteys ja yritä uudelleen |
| **Koodin hakeminen palvelimelta epäonnistui** | kauko-ohjain | Yritä uudelleen painamalla **Näytä koodi** |
| **Väärä tai vanhentunut koodi. Tarkista ohjaimessa näkyvät 6 numeroa.** | hub-laite | Kirjoita ne 6 numeroa, jotka kauko-ohjain näyttää juuri nyt |
| **Koodi on vanhentunut. Näytä ohjaimessa uusi koodi ja skannaa se uudelleen.** | hub-laite | Paina kauko-ohjaimessa **Etäohjaus** ja skannaa uusi koodi |
| **Tämä ei ole MOCPilot-koodi. Skannaa kauko-ohjaimen näyttämä koodi.** | hub-laite | Skannaa QR-koodi kauko-ohjaimen **Etäohjaus**-paneelista |
| **Liian monta väärää koodia. Yritä uudelleen muutaman minuutin kuluttua.** | hub-laite | Odota muutama minuutti ja syötä sitten voimassa oleva koodi |
| **Salli MOCPilotin käyttää kameraa järjestelmäasetuksissa koodin skannaamiseksi.** | hub-laite | Salli kameran käyttö järjestelmäasetuksissa tai napauta **Syötä koodi** ja kirjoita 6 numeroa |
| **Kauko-ohjain ei vastaa. Tarkista, että profiili on siinä auki ja että se on verkossa.** | hub-laite | Pidä profiili auki kauko-ohjaimessa ja tarkista sen internetyhteys |
| **Tämä sovellusversio ei voi yhdistää kauko-ohjaimeen** | kumpi tahansa | Päivitä MOCPilot |
| **Tämä selain ei voi avata suoraa yhteyttä (WebRTC)** | verkkoeditori | Käytä toista selainta, esimerkiksi Chromea, Edgeä tai Safaria |
| **Profiili on liian suuri** / **Profiili ei saapunut kokonaan** | kumpi tahansa | Tarkista yhteys ja paina uudelleen **Suorita** |
| **Toinen laite ei voinut tallentaa profiilia** / **Toinen laite ei voinut avata profiilia** | kauko-ohjain | Paina uudelleen **Suorita**; jos sama toistuu, katkaise yhteys ja yhdistä hub-laite uudelleen |
| **Yhteys laitteeseen *laite* katkesi** / **Yhteys ohjaimeen katkesi. Odotetaan…** | kumpi tahansa | Katso [Jos yhteys katkeaa](#if-the-connection-drops) |
