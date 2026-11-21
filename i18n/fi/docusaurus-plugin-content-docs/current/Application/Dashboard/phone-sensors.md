---
id: PhoneSensors
title: Puhelimen anturit
description: "Ohjaa mallia puhelimen tai tabletin kallistuksella ja kiihtyvyydellä."
---

# Puhelimen anturit {#phone-sensors}

Puhelimessasi tai tabletissasi on liikeantureita. MOCPilot voi käyttää niitä syötteenä: kallista puhelinta ohjataksesi, ravista sitä käynnistääksesi jotain tai näytä puhelimen akun varaus kojelaudalla.

Puhelimen anturit ovat käytettävissä **Logiikkalohkoissa** (luokka **Anturit**). Pikalinkit käyttävät syötteinä kojelaudan ohjaimia, peliohjainta ja hubien antureita.

## Anturilohkot {#sensor-blocks}

| Lohko | Antaa |
|---|---|
| `laite kallistus` (kallistus, pyörintä) | laitteen kallistuksen asteina |
| `laite kiihtyvyys` (x, y, z) | laitteen kiihtyvyyden, m/s² |
| `laite kiihtyvyysanturi` (x, y, z) | kiihtyvyysanturin raaka-arvot, m/s² |
| `laite % akku` | laitteen akun varaustason |

Lisätietoja: [Anturit](/docs/Application/BlockBuilder/Blocks/Sensors).

## Esimerkki: ohjaus puhelinta kallistamalla {#example-steer-by-tilting-the-phone}

```text
kun ohjelma käynnistyy
toistaa aina
    Siirry asentoon  (Hubi 1, portti B)  ←  laite kallistus (pyörintä) × 2
```

Käytä ohjauksessa moottoria, jolla on absoluuttinen asento (kulmamoottori).

Pidä puhelinta vaakasuunnassa kuin ohjauspyörää. Rajoita arvoa *on välillä*- tai *min/max*-operaattoreilla, jotta ohjaus ei osu rajoittimiinsa.

## Vinkkejä {#tips}

- Lukitse laitteen näytön kierto, muuten järjestelmä voi kääntää näytön kallistaessasi.
- Tietokoneissa ei ole liikeantureita; lohkot antavat niissä nollan.
- Jos haluat näyttää kallistuksen kojelaudalla, lähetä kulmat **Kallistusnäytölle** (maksulliset teemat). Katso [Ilmaisimet ja näytöt](/docs/Application/Dashboard/Indicators).
- Myös hubeissa on omat kallistusanturinsa: katso hubin anturilohkot ja Pikalinkkien **Hubi**-syöte.
