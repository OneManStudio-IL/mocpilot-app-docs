---
id: HubFunctions
title: Hubikohtaiset toiminnot
description: "Technic Moven, BuWizzin, SBrickin, Mould Kingin, Robot Inventorin ja muiden hubien erikoistoiminnot molemmissa editoreissa."
---

# Hubikohtaiset toiminnot {#hub-specific-functions}

Jokainen hubi, jossa on portteja, pystyy käyttämään moottoreita ja valoja. Jotkin hubit osaavat enemmän. **Pikalinkeissä** nämä toiminnot näkyvät paletissa vain, kun profiilissa on tällainen hubi; **Logiikkalohkoissa** ne ovat hubikohtaisia lohkoja.

## Kulma-anturilliset moottorit (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Toiminto | Pikalinkit | Logiikkalohkot |
|---|---|---|
| Nopeuden ohjaus | [Moottori](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | aseta nopeus, käynnistä moottori … % nopeus |
| Ohjausservo kalibroinnilla | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuaalinen / Auto) | mene suhteelliseen asentoon, kalibroi hammasratas |
| Kääntö tietyn kulman verran | [Pyöritä asteina](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | aja … ajaksi |
| Absoluuttinen asento (kulmamoottorit) | [Siirry asentoon](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | mene … asemaan |
| Toiminta pysähtyessä: vapaa rullaus, jarru, pidä asento | Moottori → **Pysähtyessä** | aseta moottori … pysähdyksissä |
| Hubin kiihdytyksen esiasetukset | Moottori → **Hubin kiihdytys** | aseta kiihtyvyys, aseta hidastuvuus |
| Nopeus, asento, teho, virta syötteenä | [Hubi-syöte](/docs/Application/Links/Blocks/InputBlocks#src-hub) | nopeus, sijainti, suhteellinen sijainti, teho |

## Technic Move Hub {#technic-move-hub}

LEGO® Technic -kauko-ohjattavien autojen (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler) hubi.

- Ajoa, ohjausta ja valoja ohjataan toiminnoittain, ei porteittain.
- **Ohjaus** kalibroi oman hammastankonsa.
- **Jarru**, **Boost** (tehotila) ja **Tehopulssi** (vain Batmobile™ Tumbler -kokoonpanolla).
- **Hubin kokoonpanot**: lataa auton profiili hubiin kohdasta **Omat hubit → Valitse kokoonpano**. Katso [Technic Move Hubin kokoonpanot](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logiikkalohkot: autoprofiilin lohkot (*käynnistä moottorit*, *aseta ohjausrata*, *aseta moottorien jarru*, *tehopulssi*, *kytke valot päälle*, *aseta virta-asetus*) tai tavalliset porttilohkot: moottorit `A`, `B` (ajo) ja `C` (ohjaus; *kalibroi hammasratas* `C`:lle, sitten *mene suhteelliseen asentoon*), valot `1`–`6` yksitellen, kallistus, kiihtyvyys ja suunta. Käytä yhtä tapaa hubia kohden: molemmat ohjaavat samoja moottoreita ja valoja. Katso [Moottorit → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Pikalinkit: hubin omat rivit (ajo, ohjaus, valot); [Hubi-syöte](/docs/Application/Links/Blocks/InputBlocks#src-hub) voi myös lukea sen kallistuksen ja kiihtyvyyden.

## BuWizz 2.0 {#buwizz-20}

- **Tehotila**: Hidas, Normaali, Nopea, Ludicrous. Pikalinkit: [Tehotila](/docs/Application/Links/Blocks/OutputBlocks#op-powermode)-toiminto; Logiikkalohkot: *virta-asetus tilaksi* (BuWizz 2).
- Nykyinen tehotila, **lähtöjännite** ja moottorin virta syötteinä.
- Yksinkertainen nopeuden ohjaus porteissa 1–4: ei asennon ohjausta.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Portin väri** -LEDit porteissa 1–4: luettelosta tai RGB:nä ([Portin väri](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *aseta portin LED-väri*).
- Moottorin virta syötteenä, suhteelliset asennot.

## SBrick ja SBrick Plus {#sbrick-and-sbrick-plus}

- Moottorit ja valot nopeuden ohjauksella.
- Ei asennon ohjausta: Servo, Pyöritä asteina ja Siirry asentoon eivät ole käytettävissä.

## Mould King 4.0 ja 6.0 {#mould-king-40-and-60}

- Vain komennot: ei antureita, ei painikkeita, ei yhteyspalautetta.
- **Ohjauskanava** A, B tai C: Pikalinkkien [Kanava](/docs/Application/Links/Blocks/OutputBlocks#op-channel)-toiminto, Logiikkalohkojen *ohjauskanava kohteeseen* -lohko (Mould King) tai **Valitse kanava** Omissa hubeissa.
- Enintään 3 Mould King 4.0:aa tai 1 Mould King 6.0 profiilia kohden ja vain yksi Mould King -tyyppi profiilissa.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Kaikki yhdistämisestä, laiteohjelmistosta ja lohkoista: [MINDSTORMS Robot Inventor -hubi](/docs/Application/Hubs/RobotInventorHub).

- **LED-matriisi**: tasopalkki, luku tai kuva Pikalinkeissä; teksti ja pikselit Logiikkalohkoissa.
- **Etäisyysanturin valot** (anturin ”silmät”).
- **Jumiutumisen tunnistus** ja moottorin teho.
- Kaikki Robot Inventor -sovelluksen lohkot: [Liike](/docs/Application/BlockBuilder/Blocks/Movement), hubin äänet ja musiikki, eleet, kääntökulma, voima-anturi, hubien välinen radio.
- Klassinen Bluetooth (ei käytettävissä iPhonessa eikä iPadissa) tai USB-kaapeli Windowsissa ja Macissa.

## LEGO®-hubit, joissa on väri-LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor ja kaukosäädin: hubin LEDin värin voi asettaa luettelosta tai RGB:nä (Pikalinkkien [Hubin LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led), Logiikkalohkojen *aseta LED-väri*).

## LEGO® Powered Up -kaukosäädin {#lego-powered-up-remote-control}

Sen painikkeet ovat syötteitä, joten voit ohjata mallia fyysisellä kaukosäätimellä MOCPilotin kautta (Pikalinkit: **Hubi**-syöte → Painike; Logiikkalohkot: hubin painiketapahtumat).

## Sisäänrakennetut anturit {#built-in-sensors}

Akun taso ja jännite, piirilevyn lämpötila, kallistus (pituus-, sivu- ja kiertosuunta), kiihtyvyys ja suunta ovat käytettävissä hubeissa, joissa niitä on. Aseta **Hubin suunta** (Pikalinkit) tai *kallistuksen suuntaan* (Logiikkalohkot) vastaamaan sitä, miten hubi on asennettu.
