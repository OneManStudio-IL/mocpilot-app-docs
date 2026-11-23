---
id: Inputs
title: Syötteet
description: "Pikalinkkien syötteet: kojelaudan ohjaimet, simuloitu ajoneuvo, peliohjain, hubin painikkeet ja hubin anturit."
---

import Screenshot from '@site/src/components/Screenshot';

# Syötteet {#inputs}

Jokainen rivi alkaa syötteellä. Paletin **Syötteet**-välilehdellä on:

- yksi lohko kutakin **kojelaudan ohjainta** kohden; monikanavaisille ohjaimille (ohjainsauvan ja D-padin akselit, ohjauspyörä, polkimet, vaihdekeppi, käsijarru, suuntavilkut) tulee yksi lohko kanavaa kohden;
- **Ajoneuvo**-lohkot, kun kojelaudalla on polkimet, vaihdekeppi tai käsijarru;
- **Peliohjain**-lohko, kun peliohjainlohkot ovat käytössä;
- yksi **Hubi**-lohko kutakin profiilin hubia kohden (paitsi Mould King, jossa ei ole painikkeita eikä antureita).

Jos välilehti on tyhjä, siinä lukee ”Lisää ohjaimia kojelautaan tai hubeja kohdassa Omat hubit: ne näkyvät tässä”.

<Screenshot name="links-palette-inputs" alt="Pikalinkkien paletin Syötteet-välilehti" width={900} />

Jokaisen syötteen kaikki asetukset ja arvot on lueteltu [Syötelohkot](/docs/Application/Links/Blocks/InputBlocks)-hakemistossa.

## Kojelaudan ohjaimet {#dashboard-controls}

[Ohjain](/docs/Application/Links/Blocks/InputBlocks#src-controller)-lohko ottaa kojelaudalta ohjaimen sen nimen perusteella (**JOY1**, **SLDR1**, **BTN2**…) ja, jos ohjaimella on useita kanavia, haluamasi **Kanavan**:

| Ohjain | Mitä rivi saa |
|---|---|
| [Ohjainsauva](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-akseli** tai **Y-akseli**, −1…1 |
| [Liukusäädin](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [ajokytkin](/docs/Application/Links/Blocks/InputBlocks#controller-train), [kiertonuppi](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | sen asennon |
| [Ohjauspyörä](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Ohjauskulma** −1…1 tai **Äänitorvi** |
| [Polkimet](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Kaasupoljin** tai **Jarrupoljin**, 0…1 |
| [Vaihdekeppi](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Vaihde** tai **Suunta (R − / eteen +)** |
| [Käsijarru](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Käsijarru lukittu** (päällä/pois) tai **Käsijarrun voima** |
| [Suuntavilkut](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Suuntavilkut (vasen − / oikea +)**, **Vasen suuntavilkku**, **Oikea suuntavilkku** tai **Valo** |
| [Jakovaihteisto](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) | **Neliveto**, **Alennusvaihde**, **Etutasauspyörästön lukko**, **Keskitasauspyörästön lukko** tai **Takatasauspyörästön lukko** (päällä/pois) |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Ylös / alas** tai **Vasen / oikea**: −1, 0 tai +1 |
| [Painike](/docs/Application/Links/Blocks/InputBlocks#controller-button) | päällä niin kauan kuin sitä painetaan |
| [Kytkin](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | päällä / pois |
| [Askelkytkin](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | nykyisen askeleen |

Kun lisäät, nimeät uudelleen tai muutat ohjainta kojelaudalla, paletti ja rivit päivittyvät automaattisesti. Jos asetat ohjainsauvan tilaan **Vain vaakasuunta**, sen Y-akselia käyttävät rivit ilmoittavat ”… ei liiku tällä akselilla”.

## Aja kuin oikealla autolla {#drive-like-a-real-car}

Ohjauspyörä, polkimet, vaihdekeppi ja käsijarru antavat raaka-asentonsa: poljinrivi pyörittää moottoria täsmälleen niin paljon kuin poljinta painetaan. Jos haluat mallin käyttäytyvän kuin auto (kiihtyy hitaudella, rullaa, jarruttaa ja peruuttaa R-vaihteella), käytä sen sijaan [Ajoneuvo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)-syötettä. Se lukee polkimia, vaihdekeppiä ja käsijarrua yhdessä ja antaa ajoneuvon **Nopeuden**, **Moottorin kierrokset (rpm)**, **Jarruttaa**- tai **Käsijarrussa**-tiedon:

- *Ajoneuvo (Nopeus)* → *Moottori* → ajomoottorit;
- *Ohjauspyörä (Ohjauskulma)* → *Servo* → ohjaus;
- *Ajoneuvo (Jarruttaa)* → *Valo* → jarruvalot;
- *Suuntavilkut (Vasen suuntavilkku)* → *Valo* → vasen vilkkulamppu.

## Peliohjain {#gamepad}

Yksi [Peliohjain](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)-lohko kattaa koko ohjaimen; valitse tatti, liipaisin tai painike kohdassa **Syöte**. Ota ensin **Ota peliohjaimen lohkot käyttöön** päälle [Peliohjain-sivulla](/docs/Application/Dashboard/Gamepad). Nimet noudattavat **Peliohjaimen painikkeiden asettelu** -asetusta (Xbox tai PlayStation).

## Hubin painikkeet ja anturit {#hub-buttons-and-sensors}

[Hubi](/docs/Application/Links/Blocks/InputBlocks#src-hub)-syöte lukee hubin painiketta tai jotakin sen antureista: akkua, kallistusta, kiihtyvyyttä, moottorin nopeutta ja asentoa, porttien etäisyys- ja värianturia ja muuta. Luettelossa näkyy vain se, mitä kyseinen hubi pystyy ilmoittamaan. Kallistusta ja kiihtyvyyttä varten aseta **Hubin suunta** vastaamaan sitä, miten hubi on mallissa.

Arvo kulkee rivillä skaalattuna välille −1…1. Heti anturin perään lisätty **Tekstinäyttö** näyttää todellisen arvon yksikköineen, esimerkiksi ”7,85 V” tai ”−12°”.

Tyypillisiä käyttötapoja:

- *Akku* → *Ilmaisin* (Akun taso);
- *Etäisyysanturi* → *Kynnys* (Alle, 20 %) → *Moottori ajan*: peräänny, kun jokin tulee lähelle;
- *Painike 1* (Powered Up -kaukosäädin) → *Moottori*: aja fyysisellä kaukosäätimellä.
