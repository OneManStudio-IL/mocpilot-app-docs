---
id: OutputBlocks
title: Toiminto- ja lähtölohkot
description: "Kaikkien Pikalinkkien toimintojen ja lähtöjen hakemisto: Moottori, Servo, Valo, Technic Move-, BuWizz- ja Mould King -toiminnot, Hubi, Ilmaisin, Hubin LED, LED-matriisi, Kalibroi servot."
---

import Screenshot from '@site/src/components/Screenshot';

# Toiminto- ja lähtölohkot {#operation-and-output-blocks}

Paletin **Lähdöt**-välilehdellä ovat toiminnot ja lähdöt. Käyttöohjeet: [Toiminnot ja lähdöt](/docs/Application/Links/Operations).

- **Toiminto** kertoo, mitä tehdään. Sen perään täytyy tulla [Hubi](#hub-out)-lähtö, joka kertoo, missä.
- **Suora lähtö** ([Ilmaisin](#dash-indicator), [Hubin LED](#hub-led), [LED-matriisi](#hub-matrix), [Kalibroi servot](#cmd-calibrate)) päättää rivin yksinään; rivillä ei saa olla toimintoa.

**Moottori**, **Servo**, **Moottori ajan** ja **Valo** ovat aina paletissa. Muut toiminnot näkyvät vain, kun jokin profiilin hubeista osaa ne.

”Päällä” tarkoittaa alla päällä/pois-signaalia, joka on päällä, tai arvoa, joka on vähintään 0,5 (kumpaan suuntaan tahansa).

## Porttien toiminnot {#operations-for-ports}

### Moottori {#op-motor}

Pyörittää moottoria syötteen arvolla: mitä pidemmälle työnnät, sitä nopeammin; 0 pysäyttää sen.

- Ottaa: arvon tai päällä/pois (päällä = täysi nopeus).
- **Pysähtyessä**: **Hubin oletus** (oletus), **Vapaa rullaus**, **Jarru** tai **Pidä asento**.
- **Hubin kiihdytys**: **Hubin oletus** (oletus), **Nopea**, **Tasapainoinen**, **Pehmeä**, **Hidas** tai **Erittäin hidas**: hubin oma ramppi. Oman rampin saat [Pehmeä](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth)-lohkolla.
- **Jumiutumisen tunnistus**: **Hubin oletus** (oletus), **Päällä** tai **Pois**.
- Hubit: mikä tahansa hubi, jossa on portteja. **Pysähtyessä** ja **Hubin kiihdytys** vaativat hubin, jossa on asennon ohjaus (ei SBrick, BuWizz 2.0, WeDo 2.0 eikä Mould King); **Jumiutumisen tunnistus** vaatii Robot Inventorin. Technic Move Hubissa Moottori ajaa autoa.

### Servo {#op-servo}

Ohjaa kulma-anturillisella moottorilla: syöte −1…1 kääntää moottorin asentoon *keskikohta + arvo × kulma*, ja 0 palauttaa sen keskelle.

- Ottaa: arvon tai päällä/pois.
- **Kalibrointi**: **Manuaalinen** (oletus) tai **Auto**.
- **Kulma**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 kierros, ±2 kierrosta, ±3 kierrosta tai ±5 kierrosta (oletus ±90°). Vain manuaalinen.
- **Keskikohta**: −20°, −10°, −5°, 0°, +5°, +10° tai +20° (oletus 0°). Vain manuaalinen.
- **Kääntönopeus**: 25, 50, 75 tai 100 % (oletus 100 %).
- Manuaalinen: nollakohta on se, missä moottori oli virran kytkeytyessä, tai asento, jonka asetat **Aseta nollaksi** -painikkeella (siirrä ensin painikkeilla **◀ 5°** / **5° ▶**).
- Auto: jokaisella käynnistyksellä moottori kääntyy molempiin päätyrajoittimiin; keskikohdasta tulee nolla ja liikeradasta kulma. **Kalibroi nyt** suorittaa kalibroinnin heti. Ohjauksessa täytyy olla päätyrajoittimet.
- Hubit ja portit: kulma-anturillinen moottori hubissa, jossa on asennon ohjaus (ei SBrick, BuWizz 2.0, WeDo 2.0 eikä Mould King). Technic Move Hubissa Servo kääntää hubin ohjaustankoa, jonka hubi kalibroi itse.

<Screenshot name="links-servo-settings" alt="Servo-lohkon asetukset" width={900} />

### Moottori ajan {#op-timed}

Pyörittää moottoria asetetun ajan aina, kun syöte kytkeytyy päälle. Nopeus ja suunta tulevat syötteen sen hetkisestä arvosta.

- Ottaa: arvon tai päällä/pois.
- **Aika**: 0,5, 1, 2, 3, 5 tai 10 s (oletus 1 s).
- Hubit: mikä tahansa hubi, jossa on portteja; Technic Move Hubissa se ajaa autoa.

### Pyöritä asteina {#op-degrees}

Kääntää moottoria asetetun kulman aina, kun syöte kytkeytyy päälle. Negatiivinen syöte kääntää sitä toiseen suuntaan.

- Ottaa: arvon tai päällä/pois.
- **Asteet**: 45°, 90°, 180°, 1 kierros, 2 kierrosta, 3 kierrosta, 5 kierrosta tai 10 kierrosta (oletus 1 kierros).
- **Nopeus**: 25, 50, 75 tai 100 % (oletus 50 %).
- Hubit ja portit: kulma-anturillinen moottori hubissa, jossa on asennon ohjaus.

### Siirry asentoon {#op-goto}

Kääntää moottorin absoluuttiseen asentoon, kun syöte kytkeytyy päälle, ja toiseen asentoon, kun se kytkeytyy pois. Moottori kulkee lyhintä reittiä.

- Ottaa: arvon tai päällä/pois.
- **Asento päällä**: 0°, 45°, 90°, 135°, 180°, 225°, 270° tai 315° (oletus 90°).
- **Asento pois**: **Pysy** tai jokin samoista asennoista (oletus 0°).
- **Nopeus**: 25, 50, 75 tai 100 % (oletus 50 %).
- Hubit ja portit: kulmamoottori (absoluuttinen asento) hubissa, jossa on asennon ohjaus.

### Valo {#op-light}

Ohjaa porttiin kytkettyjä LEGO®-valoja.

- Ottaa: arvon tai päällä/pois. Arvon kanssa kirkkaus seuraa sitä (−1 ja 1 ovat molemmat täysi kirkkaus).
- **Kirkkaus**: 25, 50, 75 tai 100 % (oletus 100 %).
- **Vilkku: päällä**: **Ei vilkkua** (oletus), 0,25, 0,5, 1 tai 2 s: kuinka kauan valo palaa kussakin vilkahduksessa.
- **Vilkku: pois**: **Sama kuin päällä** (oletus), 0,25, 0,5, 1 tai 2 s: kuinka kauan se on sammuksissa.
- Hubit: mikä tahansa hubi, jossa on portteja, paitsi WeDo 2.0. Technic Move Hubissa Valo kytkee auton valot.

### Portin väri {#op-portcolor}

Asettaa BuWizz 3.0 Pron porttien LEDien värin.

- Ottaa: arvon tai päällä/pois.
- **Väri**: **Listasta** (oletus) tai **RGB**.
- **Väri päällä** (oletus Punainen) ja **Väri pois** (oletus Pois): Pois, Vaaleanpunainen, Violetti, Sininen, Vaaleansininen, Vaaleanvihreä, Vihreä, Keltainen, Oranssi, Punainen, Valkoinen.
- **Punainen**, **Vihreä**, **Sininen** (RGB): 0, 32, 64, 128, 192 tai 255 (oletus 255, 0, 0).
- Hubit ja portit: BuWizz 3.0 Pro, portit 1–4. LEDit sammuvat, kun ohjelma pysähtyy.

### Anturin valot {#op-sensorlights}

Sytyttää Technic-etäisyysanturin ”silmien” ympärillä olevat neljä segmenttiä, kun syöte on päällä.

- Ottaa: arvon tai päällä/pois.
- **Valot**: **Kaikki** (oletus), **Yläosa**, **Pohja**, **Vasen**, **Oikea** tai **Vinottain**.
- **Kirkkaus**: 25, 50, 75 tai 100 % (oletus 100 %).
- Hubit ja portit: Robot Inventor, yksi portti, jossa on etäisyysanturi. Valot sammuvat, kun ohjelma pysähtyy.

## Koko hubin toiminnot {#operations-for-the-whole-hub}

Näiden toimintojen perässä oleva Hubi-lohko ei ota portteja.

### Jarru {#op-brake}

Jarruttaa autoa, kun syöte on päällä.

- Ottaa: arvon tai päällä/pois. Ei asetuksia.
- Hubit: Technic Move.

### Boost {#op-boost}

Kytkee hubin boost-tehotilaan, kun syöte on päällä, ja takaisin normaaliin, kun se kytkeytyy pois.

- Ottaa: arvon tai päällä/pois. Ei asetuksia.
- Hubit: Technic Move.

### Tehopulssi {#op-pulse}

Lähettää yhden tehopulssin aina, kun syöte kytkeytyy päälle: moottorit käyvät täydellä teholla noin kahden sekunnin ajan.

- Ottaa: arvon tai päällä/pois. Ei asetuksia.
- Hubit: Technic Move **Batmobile™ Tumbler** -kokoonpanolla; katso [Technic Move Hubin kokoonpanot](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Tehotila {#op-powermode}

Asettaa BuWizz 2.0:n tehotilan, kun syöte kytkeytyy päälle, ja halutessasi myös, kun se kytkeytyy pois.

- Ottaa: arvon tai päällä/pois.
- **Tila päällä**: **Hidas**, **Normaali** (oletus), **Nopea** tai **Ludicrous**.
- **Tila pois**: **Säilytä** (oletus) tai jokin tiloista.
- Hubit: BuWizz 2.0.

### Kanava {#op-channel}

Vaihtaa Mould King -hubin ohjauskanavan, kun syöte kytkeytyy päälle, ja halutessasi myös, kun se kytkeytyy pois.

- Ottaa: arvon tai päällä/pois.
- **Kanava päällä**: **A** (oletus), **B** tai **C**.
- **Kanava pois**: **Säilytä** (oletus), **A**, **B** tai **C**.
- Hubit: Mould King 4.0 ja 6.0.

## Lähdöt {#outputs}

### Hubi {#hub-out}

Missä toiminto tapahtuu: hubi ja sen portit. Jokaista profiilin hubia kohden on yksi Hubi-lohko.

- **Hubi**: profiilin hubi.
- **Portit**: yksi tai useampi kyseisen hubin portti (A–D useimmissa hubeissa ja SBrickissä, A–F Robot Inventorissa ja Mould King 6.0:ssa, 1–4 BuWizz 2.0:ssa, 1–4 sekä A ja B BuWizz 3.0 Prossa). Portti voi kuulua vain yhdelle riville.
- Ottaa: toiminnon. Technic Move -hubit ja koko hubin toiminnot eivät ota portteja.
- Lisää: [Hubi-lohko ja portit](/docs/Application/Links/HubsAndPorts).

### Ilmaisin {#dash-indicator}

Näyttää arvon sellaisenaan kojelaudan näytössä.

- Ottaa: arvon tai päällä/pois ilman edeltävää toimintoa.
- **Kojelaudan ilmaisin**: kojelaudan **Tekstinäyttö** (näyttö), **Arvonäyttö** (akun taso, nopeusmittari) tai **Kallistusnäyttö**.
- **Akseli**: **Kallistus X** tai **Kallistus Y**, vain Kallistusnäytölle (yksi rivi akselia kohden).
- Heti hubin anturin perässä tekstinäyttö näyttää todellisen arvon yksikköineen.

### Hubin LED {#hub-led}

Hubin värillinen tilavalo: yksi väri syötteen ollessa päällä, toinen sen ollessa pois.

- Ottaa: arvon tai päällä/pois ilman edeltävää toimintoa.
- **Hubi**: hubi, jossa on väri-LED.
- **Väri**: **Listasta** (oletus) tai **RGB**.
- **Väri päällä** (oletus Punainen) ja **Väri pois** (oletus Pois): Pois, Vaaleanpunainen, Violetti, Sininen, Vaaleansininen, Vaaleanvihreä, Vihreä, Keltainen, Oranssi, Punainen, Valkoinen.
- **Punainen**, **Vihreä**, **Sininen** (RGB): 0, 32, 64, 128, 192 tai 255 (oletus 255, 0, 0).
- Hubit: LEGO®-hubit (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, Powered Up -kaukosäädin); ei BuWizz, SBrick eikä Mould King.

### LED-matriisi {#hub-matrix}

Hubin valomatriisi.

- Ottaa: arvon tai päällä/pois ilman edeltävää toimintoa.
- **Hubi**: hubi, jossa on LED-matriisi.
- **Näytä**: **Tasopalkki** (oletus; rivit syttyvät alhaalta ylöspäin arvon mukaan), **Luku** (arvo väliltä −100…100) tai **Kuva päällä**.
- **Kuva**: **Sydän** (oletus), **Hymy**, **Surullinen**, **Rasti**, **Risti**, **Nuoli ylös**, **Nuoli alas**, **Nuoli vasemmalle**, **Nuoli oikealle** tai **Kaikki päällä**.
- **Suunta**: **Säilytä** (oletus), **Pystyssä**, **Ylösalaisin**, **Vasen** tai **Oikea**.
- Hubit: Robot Inventor. Matriisi tyhjennetään, kun ohjelma pysähtyy.

### Kalibroi servot {#cmd-calibrate}

Aina kun syöte kytkeytyy päälle, jokainen ohjelman **Auto**-tilassa oleva [Servo](#op-servo) kalibroituu uudelleen.

- Ottaa: arvon tai päällä/pois ilman edeltävää toimintoa. Ei asetuksia.
- Ohjelmassa täytyy olla valmis Servo-rivi Auto-tilassa, muuten rivi ilmoittaa ”Tässä ohjelmassa ei ole servoa automaattisessa kalibrointitilassa”.
