---
id: Operations
title: Toiminnot ja lähdöt
description: "Pikalinkkien toiminnot (Moottori, Servo, Valo ja muut) ja lähdöt (Hubi, Ilmaisin, Hubin LED, LED-matriisi, Kalibroi servot)."
---

import Screenshot from '@site/src/components/Screenshot';

# Toiminnot ja lähdöt {#operations-and-outputs}

Paletin **Lähdöt**-välilehdellä ovat toiminnot ja lähdöt.

- **Toiminto** kertoo, *mitä* tehdään (pyöritetään moottoria, ohjataan, vilkutetaan valoa). Sen perään tulee aina **Hubi**-lähtö, joka kertoo, *missä*: mikä hubi ja mitkä portit.
- **Suora lähtö** (Ilmaisin, Hubin LED, LED-matriisi, Kalibroi servot) päättää rivin yksinään, ilman toimintoa.

Yleiset toiminnot (Moottori, Servo, Moottori ajan, Valo) ovat aina tarjolla. Hubikohtaiset toiminnot näkyvät vain, kun jokin profiilin hubeista tukee niitä. Jokainen asetus arvoineen ja oletuksineen: [Toiminto- ja lähtölohkot](/docs/Application/Links/Blocks/OutputBlocks).

## Moottorit ja valot {#motors-and-lights}

| Toiminto | Mitä se tekee | Tyypillinen käyttö |
|---|---|---|
| [Moottori](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | pyörittää moottoria syötteen arvolla; 0 pysäyttää sen | ajaminen, vinssit |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | kääntää kulma-anturillisen moottorin syötettä seuraavaan asentoon | ohjaus |
| [Moottori ajan](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | pyörittää moottoria asetetun ajan jokaisella painalluksella | ovet, kippilavat |
| [Pyöritä asteina](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | kääntää moottoria asetetun kulman jokaisella painalluksella | askellus, kääntöpöydät |
| [Siirry asentoon](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | vie kulmamoottorin yhteen asentoon päällä ollessa ja toiseen pois ollessa | luukut, vaihteenvalitsimet |
| [Valo](/docs/Application/Links/Blocks/OutputBlocks#op-light) | sytyttää LEGO®-valot, palamaan tai vilkkumaan | ajovalot, majakat, suuntavilkut |
| [Portin väri](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | värittää BuWizz 3.0 Pron porttien LEDit | tilavärit |
| [Anturin valot](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | sytyttää Technic-etäisyysanturin ”silmät” (Robot Inventor) | robottien kasvot |

### Ohjaus Servolla {#steering-with-servo}

Servo tarvitsee kulma-anturillisen moottorin ja ohjausmekanismin, jonka joko keskität käsin tai jossa on päätyrajoittimet.

- **Manuaalinen**: käännä akseli keskelle ja napauta **Aseta nollaksi**; hienosäädä painikkeilla **◀ 5°** / **5° ▶**. Valitse sitten **Kulma** ja, jos pyörät vetävät yhä toiselle puolelle, **Keskikohta**.
- **Auto**: jokaisella käynnistyksellä moottori kääntyy molempiin päätyrajoittimiin, keskikohdasta tulee nolla ja liikeradasta kulma. **Kalibroi nyt** suorittaa kalibroinnin heti. Viestit: ”Kalibroidaan: moottori kääntyy molempiin päätyrajoittimiin…”, ”Kalibroitu: servo kääntyy ±…°, keskikohta on nolla”, ”Kalibrointi epäonnistui: tarkista hubi, moottori ja että akselilla on päätyrajoittimet”.

**Technic Move Hubissa** hubi ohjaa ja kalibroi oman hammastankonsa itse; vain kalibrointitila on käytössä.

<Screenshot name="links-servo-settings" alt="Servo-lohkon asetukset" width={900} />

## Koko hubin toiminnot {#operations-for-the-whole-hub}

Nämä ohjaavat hubia kokonaisuutena, joten niiden perässä olevassa Hubi-lohkossa ei ole portteja.

| Toiminto | Hubi | Mitä se tekee |
|---|---|---|
| [Jarru](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | jarruttaa, kun syöte on päällä |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | boost-tehotila päällä ollessa, normaali pois ollessa |
| [Tehopulssi](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | yksi tehopulssi painallusta kohden (vain Batmobile™ Tumbler -kokoonpano) |
| [Tehotila](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | vaihtaa tehotilaa: Hidas, Normaali, Nopea, Ludicrous |
| [Kanava](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | vaihtaa ohjauskanavaa: A, B, C |

## Lähdöt {#indicator}

- [Hubi](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hubi ja sen portit. Katso [Hubi-lohko ja portit](/docs/Application/Links/HubsAndPorts).
- [Ilmaisin](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): näyttää arvon kojelaudan näytössä (tekstinäyttö, akun taso, nopeusmittari, kallistusnäyttö). Heti hubin anturin perässä tekstinäyttö näyttää todellisen arvon yksikköineen. Ilmaisin näyttää arvon sellaisenaan, joten rivillä ei ole toimintoa. Katso [Ilmaisimet ja näytöt](/docs/Application/Dashboard/Indicators).
- [Hubin LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): LEGO®-hubin värivalo, yksi väri syötteen ollessa päällä ja toinen sen ollessa pois.
- [LED-matriisi](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): Robot Inventor -hubin valomatriisi: tasopalkki, luku tai kuva.
- [Kalibroi servot](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibroi uudelleen jokaisen **Auto**-tilassa olevan Servon. Liitä se kojelaudan painikkeeseen: *BTN3* → *Kalibroi servot*.

## Kun ohjelma pysähtyy {#when-the-program-stops}

Moottorit pysähtyvät, LED-matriisi tyhjenee ja porttien värit sekä anturien valot sammuvat.
