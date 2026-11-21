---
id: Gamepad
title: Peliohjain
description: "Aja malliasi Xbox- tai PlayStation-tyyppisellä peliohjaimella."
---

import Screenshot from '@site/src/components/Screenshot';

# Peliohjain {#gamepad}

Fyysinen peliohjain on usein mukavampi kuin kosketusnäyttö: oikeat sauvat, liipaisimet ja painikkeet. MOCPilot toimii Bluetooth- ja USB-peliohjainten kanssa, joita laitteen järjestelmä tukee (Xbox- ja PlayStation-tyyppiset ohjaimet iPhonessa, iPadissa, Androidissa, Macissa ja Windowsissa).

Peliohjain toimii yhdessä kojelaudan kanssa; voit käyttää molempia samanaikaisesti.

## Yhdistä peliohjain {#connect-a-gamepad}

1. Muodosta peliohjaimen ja puhelimen, tabletin tai tietokoneen välille pari järjestelmän Bluetooth-asetuksissa (tai kytke se USB:llä).
2. Avaa profiili ja napauta editorissa **Peliohjain**.
3. Sivun otsakkeessa näkyy **Peliohjain: (nimi)**. ”Peliohjainta ei ole yhdistetty” tarkoittaa, ettei järjestelmä vielä näe sitä.

<Screenshot name="gamepad" alt="Peliohjain-sivu" width={900} />

## Peliohjain-sivu {#gamepad-page}

- **Ota peliohjaimen lohkot käyttöön**: ottaa peliohjaimen syötteet käyttöön tässä profiilissa. Ilman sitä Pikalinkkien rivit, joissa on Peliohjain-syöte, ilmoittavat ”Ota peliohjainlohkot käyttöön Peliohjain-sivulla (yläpalkki)”, eikä Logiikkalohkot näytä Peliohjain-luokkaa.
- **Peliohjaimen painikkeiden asettelu**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) tai **Sony PS** (Risti, Ympyrä, Neliö, Kolmio, L1, R1, L2, R2). Editorit nimeävät painikkeet tämän valinnan mukaan.
- **Peliohjaimen arvoalue** (Logiikkalohkot): sauvat antavat arvoja **-1..1** tai **-100..100**.
- **Valitse peliohjain**: kun yhdistettynä on useampi kuin yksi peliohjain.
- **Testaa peliohjain** → **Testi**: reaaliaikainen testeri, joka näyttää painikkeet, liipaisimet, sauvat ja D-padin, joten voit tarkistaa kaiken ennen käyttöä.

Asetukset tallennetaan profiiliin.

## Peliohjaimen käyttö Pikalinkeissä {#use-the-gamepad-in-quick-links}

Vedä **Peliohjain**-syöte riville ja valitse sen **Syöte**:

- sauvat: Vasen sauva Y, Vasen sauva X, Oikea sauva Y, Oikea sauva X;
- liipaisimet: RT / LT (R2 / L2);
- etupainikkeet: A, B, X, Y (Risti, Ympyrä, Neliö, Kolmio);
- olkapainikkeet: LB / RB (L1 / R1);
- D-pad: Ylös, Alas, Vasen, Oikea.

Esimerkki: *Peliohjain* (Vasen sauva Y) → *Pehmeä* → *Moottori* → *Hubi* (portti A). Katso [Syötteet](/docs/Application/Links/Inputs#gamepad).

## Peliohjaimen käyttö Logiikkalohkoissa {#use-the-gamepad-in-logic-blocks}

**Peliohjain**-luokassa on tapahtumalohkoja (*kun peliohjaimen nappi on …*, *kun D-Pad on …*, *kun peliohjaimen ohjain on …*) ja arvolohkoja (painike, D-pad, sauva, liipaisimen paine). Katso [Peliohjaimen lohkot](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Julkaistavat profiilit {#profiles-for-publishing}

Profiilin voi julkaista katalogissa pelkällä peliohjaimella ilman kojelaudan ohjaimia: vaatimus on ”kojelaudan ohjain tai peliohjain”.
