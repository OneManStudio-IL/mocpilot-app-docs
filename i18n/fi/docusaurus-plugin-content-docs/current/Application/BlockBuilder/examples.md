---
id: Examples
title: Esimerkit
description: "Logiikkalohkojen esimerkkiohjelmia ajamiseen, ohjaukseen, valoihin, ääniin, akkuvaroituksiin ja antureihin."
---

# Esimerkit {#examples}

Lyhyitä ohjelmia aloittamiseen. Lohkojen nimet noudattavat [lohkohakemistoa](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); suluissa olevat arvot ovat hubi, portti tai paikkaan sijoitettu raportointilohko. Sisennetyt rivit menevät C-lohkon sisään.

## Aja ohjainsauvalla {#drive-with-a-joystick}

Kojelauta: ohjainsauva **JOY1**. Ajomoottori portissa A.

```text
kun ohjelma käynnistyy
toistaa aina
    käynnistä moottori (ohjainsauva JOY1 Y-akseli) % nopeus  (Hubi 1, portti A)
```

## Ohjaa servolla {#steer-with-a-servo}

Ohjausmoottori (kulmamoottori) portissa B. Aseta sen nykyinen asento keskikohdaksi ja seuraa sitten ohjainsauvaa: `× 0.9` muuttaa ohjainsauvan arvot −100…100 asteiksi −90…90.

```text
kun ohjelma käynnistyy
aseta suhteellinen sijainti 0  (Hubi 1, portti B)
toistaa aina
    mene suhteelliseen asentoon (ohjainsauva JOY1 X-akseli × 0.9) 100 % nopeus  (Hubi 1, portti B)
```

Jos ohjaustangossa on päätyrajoittimet, kalibroi se ensin (katso [Moottorit](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `keskikohta` ja `alue` ovat muuttujia. Kalibroinnin jälkeen tanko on keskellä, mutta sen suhteellinen asento siinä on keskikohdan arvo eikä 0, joten aseta se nollaksi ennen ohjaamista:

```text
kun ohjelma käynnistyy
kalibroi hammasratas (keskikohta) keskusta (alue) astetta  (Hubi 1, portti B)
aseta suhteellinen sijainti 0  (Hubi 1, portti B)
toistaa aina
    mene suhteelliseen asentoon ((alue × ohjainsauva JOY1 X-akseli) ÷ 100) 100 % nopeus  (Hubi 1, portti B)
```

## Valot kytkimellä {#lights-on-a-switch}

```text
kun kytkin SWCH1 on käännetty käytössä
    käynnistä kohdassa 100 % kirkkaus  (Hubi 1, portti C)
kun kytkin SWCH1 on käännetty pois
    sammuta  (Hubi 1, portti C)
```

## Äänitorvipainike {#horn-button}

```text
kun nappia painetaan BTN1 painettu
    ääni Car horn soita loppuun
```

## Akkuvaroitus {#battery-warning}

Näyttö **MNTR1**; painike muuttuu punaiseksi, kun akku on vähissä.

```text
kun ohjelma käynnistyy
toistaa aina
    näytä (Hubi 1 % akku) päällä MNTR1 näyttö
    jos (Hubi 1 % akku) < 20 sitten
        aseta BTN1 väri punainen
    odota 5 sekunnit
```

## Pysähdy ennen estettä {#stop-before-an-obstacle}

Technic-etäisyysanturi portissa D, ajomoottori portissa A.

```text
kun ohjelma käynnistyy
toistaa aina
    jos (etäisyys cm  (Hubi 1, portti D)) < 10 sitten
        pysäytä moottori  (Hubi 1, portti A)
        aseta LED-väri punainen  (Hubi 1)
    muu
        käynnistä moottori (liukusäädin SLDR1) % nopeus  (Hubi 1, portti A)
        aseta LED-väri vihreä  (Hubi 1)
```

## Nopeusraja askelkytkimellä {#speed-limit-on-a-stepper}

Neljän askeleen askelkytkin **STPR1** rajoittaa huippunopeutta.

```text
kun ohjelma käynnistyy
toistaa aina
    asettaa (nopeusraja) arvoon (askelkytkin STPR1 × 25)
    käynnistä moottori (ohjainsauva JOY1 Y-akseli × nopeusraja / 100) % nopeus  (Hubi 1, portti A)
```

`nopeusraja` on muuttuja (**Muuttujat → Luo muuttuja**).

## Käynnistystarkistus {#startup-check}

Lukitse kaasu, kunnes molemmat hubit on yhdistetty.

```text
kun ohjelma käynnistyy
aseta JOY1 interaktiivisuus poista käytöstä
odota kunnes (Hubi 1 yhdistetty) ja (Hubi 2 yhdistetty)
näytä "Valmis" päällä MNTR1 näyttö
aseta JOY1 interaktiivisuus ota käyttöön
```

## Peliohjain {#gamepad}

Aseta **Peliohjaimen arvoalue** välille −100…100 [Peliohjain-sivulla](/docs/Application/Dashboard/Gamepad) ja ota **Ota peliohjaimen lohkot käyttöön** päälle.

```text
kun ohjelma käynnistyy
toistaa aina
    käynnistä moottori (ohjain vasen Y-akseli) % nopeus  (Hubi 1, portti A)
    mene suhteelliseen asentoon (ohjain oikea X-akseli × 0.9) 100 % nopeus  (Hubi 1, portti B)
```

## Auto polkimilla {#car-with-pedals}

Polkimilla, vaihteistolla ja käsijarrulla ajettava auto: katso [Simulaattori](/docs/Application/BlockBuilder/Blocks/Simulator).

## Lisää {#more}

- Asenna virallisia profiileja [katalogista](/docs/Application/Profiles/Catalog) ja tutki niiden ohjelmia.
- Kokeile Logiikkalohkojen demoa sivustolla [mocpilot.com](https://mocpilot.com).
