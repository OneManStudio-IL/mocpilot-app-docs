---
id: ConnectingHubs
title: Hubin lisääminen ja yhdistäminen
description: "Lisää hubi profiilin paikkaan, yhdistä se, nimeä se uudelleen ja seuraa sen antureita hubin seurannassa."
---

import Screenshot from '@site/src/components/Screenshot';

# Hubin lisääminen ja yhdistäminen {#add-and-connect-a-hub}

Hubi lisätään profiiliin kerran. Sen jälkeen MOCPilot yhdistää siihen aina, kun avaat profiilin.

## Lisää hubi {#add-a-hub}

1. Avaa profiili ja napauta **Omat hubit** (tietokoneella yläpalkin **Hubit** tai ⇧⌘H / Ctrl+Shift+H). **Omat Bluetooth-keskitinlaitteet** -sivu näyttää paikat.
2. Napauta vapaassa paikassa **Lisää uusi keskitin**.
3. Valitse hubisi luettelosta. Yläreunan suodatin näyttää vaihtoehdot **Kaikki**, **LEGO**, **SBrick**, **BuWizz** tai **Mould King**. Napauta **Lisää**.
4. Seuraa näytön ohjeita: **Paina hubin painiketta** ja **Odota, että haku löytää hubin**. Napauta **Aloita skannaus** hakeaksesi uudelleen.

<Screenshot name="add-hub" alt="Lisättävän hubin valinta" width={900} />

Kun hubi löytyy, se yhdistyy ja jää paikkaansa.

<Screenshot name="my-hubs" alt="Omat Bluetooth-keskitinlaitteet: yhdistetyt hubit ja vapaat paikat" width={900} />

## Paikan valikko {#the-slot-menu}

Paikan **Yhdistä**-painike yhdistää hubin. Paikan valikossa on:

- **Katkaise yhteys**;
- **Nimeä hubi uudelleen**: tallentaa uuden nimen itse hubiin (yhdistetyt hubit, jotka tukevat tätä);
- **Päivitä laiteohjelmisto**: kun uudempi laiteohjelmisto on saatavilla; katso [Laiteohjelmiston päivitys](/docs/Application/Hubs/FirmwareUpdating);
- **Palauta hubin laiteohjelmisto**: kun hubi on yhdistetty palautustilassa; katso [Laiteohjelmiston palautus](/docs/Application/Hubs/RecoveryHubFirmware);
- **Valitse kokoonpano**: Technic Moven kokoonpanot; katso [Technic Move Hubin kokoonpanot](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Valitse kanava: A / B / C**: Mould Kingin ohjauskanava;
- **Poista hubi**: poistaa hubin profiilista.

Editorin **Omat hubit** -painike (tietokoneella **Hubit**) näyttää, montako hubia on yhdistetty.

## Hubin seuranta {#hub-monitor}

Avaa yhdistetty hubi nähdäksesi sen **hubin seurannan**:

- hubi: malli, nimi, laiteohjelmisto, akku, lataus, piirilevyn lämpötila, kokoonpano, suunta, kallistus (pituus-, sivu- ja kiertosuunta) ja kiihtyvyysanturi;
- jokainen portti: kytketty laite ja sen nopeus, asento, suhteellinen asento, väri, heijastunut valo ja ympäristön valo tai etäisyys.

Sen avulla voit tarkistaa ennen ohjelman rakentamista, mikä moottori on missäkin portissa ja mihin suuntaan se pyörii.

<Screenshot name="hub-monitor" alt="Yhdistetyn Technic Hubin seuranta" width={900} />

## Yhteysvinkkejä {#connection-tips}

- Kytke hubi päälle juuri ennen yhdistämistä: monet hubit sammuvat itsestään muutaman minuutin kuluttua, jos yhteyttä ei ole.
- Pidä puhelin lähellä hubia; seinät ja metalli lyhentävät kantamaa.
- Hubi voi olla yhdistettynä vain yhteen laitteeseen kerrallaan. Sulje muut sitä käyttävät sovellukset (LEGO®-sovellukset, muut kaukosäätimet).
- **Bluetooth on pois päältä**: kytke Bluetooth päälle ja salli MOCPilotin käyttää sitä järjestelmäasetuksissa.
- **Hubia ei löytynyt**: paina hubin painiketta uudelleen, käynnistä haku uudelleen tai vaihda paristot.
- **Mould King** -hubit eivät varsinaisesti ”yhdisty”: MOCPilot lähettää niille komentoja Bluetooth-mainostuksen kautta. Jos hubi ei reagoi, napauta **Yhdistä uudelleen** ja tarkista kanava.

Lisää ohjeita: [Vianmääritys](/docs/Help/Troubleshooting#hubs).
