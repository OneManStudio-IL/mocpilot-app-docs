---
id: PlayMode
title: Mallin ajaminen (Suorita)
description: "Suorita profiili, aja mallia ja pysäytä se, sekä mitä tapahtuu, kun ohjelma pysähtyy tai yhteys katkeaa."
---

import Screenshot from '@site/src/components/Screenshot';

# Mallin ajaminen (Suorita) {#driving-a-model-run}

Profiililla on kaksi tilaa:

- **Muokkaa**: muutat hubeja, kojelautaa ja ohjelmaa.
- **Suorita**: ohjelma on käynnissä, ja kojelaudan ohjaimet ajavat mallia.

## Käynnistys ja pysäytys {#start-and-stop}

Paina **Suorita** (▶) editorissa tai kojelaudalla (tietokoneella **Ohjelma → Suorita**, ⌘R / Ctrl+R). Palaa muokkaamaan painamalla **Pysäytä** (■) (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Kojelauta ohjelman ollessa käynnissä" width={900} />

Ohjelman ollessa käynnissä:

- kojelaudan ruudukon pisteet sekä lisäys- ja asetuspainikkeet ovat piilossa;
- ohjaimet reagoivat kosketukseen ja peliohjaimeen;
- näytöt ja ilmaisimet näyttävät reaaliaikaisia arvoja;
- Pikalinkeissä editori näyttää reaaliaikaiset arvot jokaisen rivin lohkojen välissä, eikä rivejä voi muokata;
- Logiikkalohkoissa ohjelmaa voi edelleen muokata, joten voit hienosäätää sitä lennosta.

## Puhelimessa tai tabletissa {#on-a-phone-or-tablet}

Profiilin avaaminen siirtää puhelimen vaakasuuntaan ja koko näytön tilaan, jotta kojelauta saa koko näytön. Ota Asetuksissa käyttöön **Pidä näyttö päällä**, jotta näyttö ei pimene ajaessasi. Katso [Asetukset](/docs/Application/Account/Settings).

## Ennen kuin painat Suorita {#before-you-press-run}

- Kytke hubit päälle ja tarkista kohdassa **Omat hubit**, että ne on yhdistetty (painikkeen merkki näyttää, montako on yhdistetty).
- Tarkista Pikalinkeissä **Ongelmat**-painike: punainen ”!” tarkoittaa, että joitakin rivejä ei voi suorittaa. Katso [Suorittaminen ja ongelmien korjaaminen](/docs/Application/Links/Problems).
- Nosta malli ensimmäisellä kokeilukerralla telineelle tai pidä se kaukana pöydän reunasta.

## Kun ohjelma pysähtyy {#when-the-program-stops}

- **Pikalinkit** pysäyttää kaikki rivien käyttämät moottorit ja nollaa lähdöt (LED-matriisi tyhjennetään, porttien värit ja anturien valot sammutetaan).
- **Logiikkalohkot** pysäyttää hubin portit, jos **Pysäytä hubin portit, kun ohjelma pysähtyy** on käytössä Editorin asetuksissa.
- Jos hubin yhteys katkeaa ohjelman ollessa käynnissä, sen moottorit pysähtyvät. Pikalinkeissä hubin ”Yhdistetty”-syöte voi näyttää tämän kojelaudalla.
- Etäohjauksessa, jos kauko-ohjaimen ja hub-laitteen välinen yhteys on poikki noin 4 sekuntia, hub-laite pysäyttää profiilin ja kaikki moottorit.

## Aja toiselta laitteelta {#drive-from-another-device}

[MocPilot Prolla](/docs/Application/Account/Pro) voit suorittaa profiilia yhdellä laitteella (hub-laitteella, joka yhdistää hubit) ja ohjata sitä toiselta laitteelta tai verkkoeditorista. Katso [Etäohjaus](/docs/Application/Profiles/RemoteControl).
