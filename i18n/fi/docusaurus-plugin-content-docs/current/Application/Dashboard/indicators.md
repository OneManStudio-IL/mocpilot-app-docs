---
id: Indicators
title: Ilmaisimet ja näytöt
description: "Näytä akun varaus, nopeus, kallistus, anturien arvot ja tekstiä kojelaudalla."
---

# Ilmaisimet ja näytöt {#indicators-and-monitors}

Näytöt näyttävät tietoa kojelaudalla ajaessasi: akun varauksen, nopeuden, kallistuksen, etäisyyden esteeseen, nykyisen vaihteen tai tilan.

| Näyttö | Näyttää | Teema |
|---|---|---|
| **Seuranta** | tekstiä tai luvun | kaikki teemat |
| **Akun varaus** | tasomittarin | maksulliset teemat |
| **Nopeusmittari** | nopeusmittarin | maksulliset teemat |
| **Kallistusnäyttö** | mallin nyökkäyksen ja kallistuman | maksulliset teemat |

Näytöt vain näyttävät tietoa; niillä ei voi ajaa. Ohjelma päättää, mitä ne näyttävät.

## Pikalinkeissä {#in-quick-links}

Käytä **Ilmaisin**-lähtöä. Rivi päättyy ilmaisimeen hubin sijaan:

- *Hubi* (Akku) → *Ilmaisin* (Akun varaus): hubin akku mittarissa.
- *Hubi* (Moottorin nopeus, portti A) → *Ilmaisin* (Nopeusmittari).
- *Hubi* (Kallistus pituussuunnassa) → *Ilmaisin* (Kallistusnäyttö, Kallistus X) ja toinen rivi: Kallistus sivusuunnassa → Kallistus Y.
- *Hubi* (Akun jännite) → *Ilmaisin* (Seuranta): näyttää arvon yksikköineen, esimerkiksi ”7.85 V”.

Ilmaisin näyttää arvon sellaisenaan, joten rivillä ei ole toimintoa. Katso [Ilmaisin](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## Logiikkalohkoissa {#in-logic-blocks}

Käytä kojelaudan ohjainten lohkoja:

- *näytä … näytössä …* Seurannalle;
- *aseta … arvoon … näyttö* Akun varaukselle ja Nopeusmittarille;
- *aseta … arvoon … nyökkäys / kallistus -näyttö* Kallistusnäytölle.

Voit näyttää mitä tahansa, minkä voit laskea: anturin arvon, muuttujan tai tekstiä, kuten ”Vaihde 2”. Katso [Näytön ohjaimet](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Vinkkejä {#tips}

- Sijoita akkunäyttö nurkkaan, jossa sormesi eivät peitä sitä.
- Käytä pidemmille viesteille monirivistä Seurantaa, jonka ylivuototapa on **Juokseva teksti** tai **Vieritä**.
- Ohjelma voi muuttaa useimpien ohjainten väriä, esimerkiksi muuttaa painikkeen punaiseksi, kun akku on vähissä.
