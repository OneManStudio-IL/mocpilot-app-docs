---
id: ArrangingControls
title: Ohjainten lisääminen ja järjestäminen
description: "Lisää ohjaimia paletista, siirrä niitä ja muuta niiden kokoa, monista, lukitse ja poista niitä."
---

import Screenshot from '@site/src/components/Screenshot';

# Ohjainten lisääminen ja järjestäminen {#add-and-arrange-controls}

## Lisää ohjain {#add-a-control}

1. Napauta kojelaudalla **+** (**Lisää ohjain**). Tietokoneella paletti avautuu omaan ikkunaansa.
2. Valitse luettelosta ohjaintyyppi. Tyypit on ryhmitelty: **Ohjaimet**, **Liukusäätimet**, **Painikkeet ja kytkimet**, **Näytöt**, sitten **Ajoneuvo ja erikois** [erikoisohjaimille](/docs/Application/Dashboard/SpecialControls) ja **Omat mallit** tallentamillesi malleille. Löydät ohjaimen nopeasti kirjoittamalla kenttään **Hae ohjaimia**.
3. Ulkoasunauha näyttää valitun tyypin jokaisessa [teemassa](/docs/Application/Themes/ThemesOverview) (erikoisohjaimelle kaikki sen ulkoasut). Napauta ulkoasua nähdäksesi sen suuressa esikatselussa; voit kokeilla sitä heti siinä.
4. Määritä ohjain kohdassa **Määritä**: välilehdet **Tyyli** ja **Asetukset** sekä koko.
5. Napauta **Lisää kojelautaan**. Tietokoneella voit lisätä useita ohjaimia peräkkäin.

<Screenshot name="controller-palette" alt="Lisää ohjain -paletti" width={900} />

Ohjain sijoittuu ensimmäiselle vapaalle alueelle ja saa **UUSI**-merkin. Jos tilaa ei ole, MOCPilot kertoo sen: tee tilaa tai valitse pienempi koko.

Sellaisten teemojen ohjaimissa, joita sinulla ei ole, näkyy **Lisää kojelautaan** -painikkeen sijaan **Osta** ja **Kaikki MocPilot Prolla**. Katso [Teemojen hankkiminen, ostaminen ja päivittäminen](/docs/Application/Themes/GettingThemes).

## Siirtäminen {#move}

Paina muokkaustilassa ohjainta ja vedä sitä. Kun päästät irti, se kohdistuu lähimpään ruudukon ruutuun. Jos se menisi toisen ohjaimen päälle, se hyppää takaisin.

## Koot {#sizes}

Jokaisella ohjaimella on kolme kokoa: **S**, **M** ja **L**. Vaihda kokoa ohjaimen ominaisuuksien **Koko**-asetuksella. Koot ruudukon ruutuina (leveys × korkeus):

| Ohjain | S | M | L |
|---|---|---|---|
| Ohjainsauva, Suuntaohjain | 7×7 | 10×10 | 13×13 |
| Liukusäädin | 10×3 | 14×4 | 18×5 |
| Pystyliukusäädin | 3×10 | 4×14 | 5×18 |
| Kiertonuppi | 6×6 | 8×8 | 10×10 |
| Painike, Kytkin | 3×3 | 4×4 | 5×5 |
| Askelkytkin | 8×3 | 12×4 | 16×5 |
| Pystyaskelkytkin | 3×8 | 4×12 | 5×16 |
| Seuranta | 4×2 | 6×2 | 8×3 |
| Akun varaus, Nopeusmittari | 6×6 | 8×8 | 10×10 |
| Kallistusnäyttö | 8×4 | 12×6 | 16×8 |
| Ohjauspyörä | 8×8 | 12×12 | 16×16 |
| Polkimet | 11×8 | 16×12 | 21×16 |
| Manuaalivaihteisto, Automaattivaihteisto | 8×8 | 10×10 | 12×12 |
| Käsijarru | 4×7 | 6×10 | 8×13 |
| Suuntavilkut | 8×5 | 10×6 | 14×8 |
| Junan ajokytkin | 6×8 | 8×10 | 10×13 |

Koko kenttä on 40 × 20 ruutua. Jos suurempi koko ei mahdu, siirrä ensin naapureita.

## Valitseminen ja muokkaaminen {#select-and-edit}

Napauta (napsauta) ohjainta valitaksesi sen ja avataksesi sen **ominaisuudet**. Katso [Ohjainten ominaisuudet](/docs/Application/Dashboard/ControlProperties).

## Pikavalikko {#context-menu}

Paina ohjainta pitkään (kosketusnäyttö) tai napsauta sitä hiiren kakkospainikkeella (tietokone):

- **Lukitse** / **Avaa lukitus**
- **Ominaisuudet**
- **Vaihda teema**: vaihda ohjain toiseen omistamaasi teemaan, jossa on sama ohjaintyyppi
- **Monista**: kopio samoilla ominaisuuksilla
- **Monista (vain tyyppi)**: uusi samantyyppinen ohjain oletusominaisuuksilla
- **Poista**

Paina pitkään tai napsauta hiiren kakkospainikkeella kentän tyhjää kohtaa:

- **Lukitse kaikki** / **Avaa kaikki**
- **Poista N ohjainta**: poistaa kaikki lukitsemattomat ohjaimet

Tietokoneella, kun ominaisuuspaneeli on auki: **Esc** sulkee sen, **Delete** / **Backspace** poistaa ohjaimen ja **⌘D / Ctrl+D** monistaa sen.

## Ohjainten lukitseminen {#lock-controls}

**Lukittua** ohjainta ei voi siirtää eikä poistaa, joten et vahingossa siirrä sitä paikaltaan ajaessasi tai muokatessasi. Siinä näkyy lukkokuvake. Lukitse yksittäinen ohjain sen valikosta tai sen asetusten valinnalla **Lukitse ohjain**, tai lukitse kaikki valinnalla **Lukitse kaikki**.

## Ohjainten nimet {#control-names}

Jokaisella ohjaimella on lyhyt nimi, joka näkyy muokkaustilassa sen kehyksessä, kuten **JOY1**, **SLDR2** tai **BTN1**. Ohjelma viittaa ohjaimiin näillä nimillä: Pikalinkeissä syötelohkossa lukee *JOY1*, ja Logiikkalohkoissa valitset lohkon valikosta *JOY1*.

## Poistaminen {#delete}

Käytä valikon **Poista**-toimintoa tai ominaisuuksien roskakoripainiketta. Lukittuja ohjaimia ei voi poistaa. Ohjainta, jota ohjelma käyttää, ei voi poistaa, ennen kuin poistat sen rivit tai lohkot.
