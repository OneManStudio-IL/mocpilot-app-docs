---
id: Examples
title: "Esimerkit: auto, panssarivaunu, nosturi, juna"
description: "Valmiita Pikalinkit-reseptejä autolle, panssarivaunulle, nosturille ja junalle."
---

# Esimerkit {#examples}

Valmiita reseptejä. Lisää ensin ohjaimet kojelaudalle ja hubit Omiin hubeihin ja rakenna sitten rivit.

## Auto servo-ohjauksella {#car-with-servo-steering}

Kojelauta: **JOY1** (Vain pystysuunta) vasemmalla, **JOY2** (Vain vaakasuunta) oikealla, **BTN1** ja **Akun taso** -näyttö.

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | JOY1, Y-akseli | Kuollut alue 10 %, Pehmeä 0,5 s | Moottori | Technic Hub, portit A + B |
| 2 | JOY2, X-akseli | | Servo (Auto, ±90°) | Technic Hub, portti D |
| 3 | BTN1 | Vaihto | Valo | Technic Hub, portti C |
| 4 | Hubi: Akku | | | Ilmaisin: Akun taso |

Jos toinen ajomoottori pyörii väärään suuntaan, jaa rivi 1 kahdeksi riviksi ja lisää toiseen **Käännä**.

## Auto ohjauspyörällä, polkimilla ja vaihteistolla {#car-with-a-wheel-pedals-and-a-gearbox}

Kojelauta: **Ohjauspyörä**, **Polkimet**, **Vaihdekeppi**, **Käsijarru** ja **Suuntavilkut**. [Ajoneuvo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)-syöte muuttaa polkimet, vaihteiston ja käsijarrun nopeudeksi, joka kasvaa ja hiipuu kuin oikealla autolla.

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | Ajoneuvo: Nopeus | | Moottori | Technic Hub, portit A + B |
| 2 | Ohjauspyörä: Ohjauskulma | | Servo (Auto) | Technic Hub, portti D |
| 3 | Ajoneuvo: Jarruttaa | | Valo | Technic Hub, portti C (jarruvalot) |
| 4 | Suuntavilkut: Vasen suuntavilkku | | Valo | City Hub, portti A |
| 5 | Suuntavilkut: Oikea suuntavilkku | | Valo | City Hub, portti B |

## Panssarivaunu (kaksi telaa) {#tank-two-tracks}

Kojelauta: kaksi pystysuuntaista liukusäädintä **VSLDR1** ja **VSLDR2**, joissa **Palautus nollaan** ja **Negatiiviset arvot** ovat käytössä.

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | VSLDR1 | Pehmeä 0,25 s | Moottori | Hubi, portti A |
| 2 | VSLDR2 | Käännä, Pehmeä 0,25 s | Moottori | Hubi, portti B |

Peliohjaimella käytä riville 1 vasemman sauvan Y-akselia ja riville 2 oikean sauvan Y-akselia.

## Nosturi {#crane}

Kojelauta: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | DPAD1, Vasen / oikea | Rajoitus 50 % | Moottori | Hubi, portti A (kääntö) |
| 2 | DPAD1, Ylös / alas | | Moottori | Hubi, portti B (koukun vinssi) |
| 3 | SLDR1 | Kuollut alue 10 % | Moottori | Hubi, portti C (puomi) |
| 4 | SWCH1 | | Valo (vilkku 0,5 s) | Hubi, portti D (majakka) |

## Juna {#train}

Kojelauta: **Askelkytkin** **STPR1**, jossa **Negatiiviset arvot** (nopeustasot eteen ja taakse), ja **BTN1** valoille.

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | STPR1 | Pehmeä 2 s | Moottori | City Hub, portti A |
| 2 | BTN1 | Vaihto | Valo | City Hub, portti B |
| 3 | Hubi: Akku | | | Ilmaisin: Näyttö |

Pehmeä-lohko saa junan lähtemään liikkeelle ja pysähtymään kuin oikea juna. Jos kojelaudalla on **ajokytkin**, käytä sitä rivillä 1 STPR1:n sijaan: se antaa vivun asennon, peruuttaessa negatiivisena.

## Technic Move -auto {#technic-move-car}

| # | Syöte | Käsittely | Toiminto | Lähtö |
|---|---|---|---|---|
| 1 | Ajoneuvo: Nopeus | | Moottori | Technic Move (ajo) |
| 2 | Ohjauspyörä: Ohjauskulma | | Servo | Technic Move (ohjaus) |
| 3 | BTN1 | Vaihto | Valo | Technic Move (valot) |
| 4 | BTN2 | | Boost | Technic Move |

Jos kojelaudalla ei ole vaihdekeppiä, auto peruuttaa, kun pidät jarrupoljinta painettuna paikallaan seistessä.

## Kokeile selaimessa {#try-it-in-the-browser}

[mocpilot.com](https://mocpilot.com)-sivuston Pikalinkit-demossa on esimerkkiprofiili, jossa on tällaisia rivejä; katso [Verkkoeditori](/docs/Introducing/WebEditor).
