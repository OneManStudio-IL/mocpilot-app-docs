---
id: HubsAndPorts
title: Hubi-lohko ja portit
description: "Pikalinkkien Hubi-lohko, porttien valinta, porttitarkistukset ja kysymys jo käytössä olevasta portista."
---

import Screenshot from '@site/src/components/Screenshot';

# Hubi-lohko ja portit {#hub-block-and-ports}

[Hubi](/docs/Application/Links/Blocks/OutputBlocks#hub-out)-lähtö päättää rivin toiminnon jälkeen. Jokaista **Omat hubit** -luettelon hubia kohden on yksi Hubi-lohko, joten lisää hubisi sinne ensin. Siihen asti välilehdellä lukee ”Lisää hubeja kohdassa Omat hubit tai ilmaisimia kojelautaan: ne näkyvät tässä”.

## Mitä Hubi-lohko näyttää {#what-the-hub-block-shows}

- hubin nimen ja **yhteyspisteen** (yhdistetty vai ei);
- **portit** valintapaloina: A, B, C, D… LEGO®-hubeissa ja SBrickissä (A–F Robot Inventorissa ja Mould King 6.0:ssa), 1–4 BuWizz 2.0:ssa, 1–4 sekä A ja B BuWizz 3.0 Prossa;
- alaotsikon: ”portit A, B”, ”valitse portit”, ”koko hubi” (koko hubin toiminnon jälkeen) tai ”ajo, ohjaus, valot” (Technic Move).

## Valitse portit {#choose-ports}

Ota portti käyttöön napauttamalla sen valintapalaa; napauta uudelleen vapauttaaksesi sen. Yksi rivi voi ohjata **useita portteja** kerralla, esimerkiksi kahta ajomoottoria porteissa A ja B.

Pitääkö kahden moottorin pyöriä vastakkaisiin suuntiin? Tee samasta syötteestä kaksi riviä ja lisää toiseen **Käännä**.

## Yksi portti, yksi rivi {#one-port-one-row}

Portti kuuluu yhdelle riville. Jos valitset portin, jota toinen rivi jo käyttää, MOCPilot kysyy:

> **Portti on jo käytössä**: hubin ”Technic Hub” porttia A käytetään rivillä 2 (Moottori). Käytetäänkö sitä tällä rivillä? Toinen rivi menettää portin eikä enää ohjaa sitä.

**Käytä tällä rivillä** siirtää portin; **Peruuta** jättää sen ennalleen. Kahden rivin käyttämä portti (esimerkiksi vanhassa tiedostossa) ilmoitetaan ongelmana: ”Porttia A käytetään myös rivillä 2”.

<Screenshot name="port-in-use" alt="Portti on jo käytössä -ikkuna" width={700} />

## Porttitarkistukset {#port-checks}

Kun hubi on yhdistetty, MOCPilot tietää, mitä kuhunkin porttiin on kytketty, ja tarkistaa, että toiminto sopii siihen:

| Ongelma | Merkitys |
|---|---|
| ”Portti A: tämä laite ei voi toimia servona (tarvitaan anturoitu moottori)” | Servo ja Pyöritä asteina tarvitsevat moottorin, jossa on kulma-anturi |
| ”Portti A: moottorilla ei ole absoluuttista asentoa (vain kulmamoottorit)” | Siirry asentoon tarvitsee kulmamoottorin |
| ”Portissa A on anturi, ei moottori” | portin laite on anturi |
| ”Portti A ottaa vastaan vain yksinkertaisia nopeuskomentoja: ei asennon ohjausta” | tämä portti ei pysty ohjaamaan asentoa |
| ”Portissa A ei ole LEDiä: käytä portteja 1-4” | Portin väri toimii vain BuWizz 3.0 Pron porteissa 1–4 |
| ”Anturin valot: valitse yksi portti, se jossa on etäisyysanturi” | Anturin valot ottaa täsmälleen yhden portin |

Toimintoja, joihin hubi ei pysty, ei tarjota sille. Jos vaihdat rivin toiseen hubiin, rivi kertoo, mikä toiminto ei sovi, esimerkiksi ”Jarru: vain Technic Move (…: ei jarrukomentoa)”.

## Technic Move Hub {#technic-move-hub}

Technic Move Hubia (LEGO® Technic -kauko-ohjattavissa autoissa) ohjataan toiminnoittain, ei porteittain: sen Hubi-lohkossa lukee **ajo, ohjaus, valot**, eikä se ota portteja. Aja **Moottori**- tai **Moottori ajan** -toiminnolla, ohjaa **Servolla**, sytytä valot **Valolla** ja käytä erikoistoimintoihin **Jarrua**, **Boostia** ja **Tehopulssia**.

Ajoa, ohjausta, valoja, jarrua ja boostia voi kutakin käyttää vain yksi rivi (”Rivi 2 ohjaa jo tämän Technic Moven toimintoa: ajo”).

Auton kokoonpanon (Porsche, Lamborghini, Batmobile) voi ladata hubiin kohdasta **Omat hubit → Valitse kokoonpano**. Katso [Technic Move Hubin kokoonpanot](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould King -hubit vain vastaanottavat komentoja, joten niillä ei ole syötteitä eivätkä ne anna yhteyspalautetta. Hubin ohjauskanavan voi vaihtaa [Kanava](/docs/Application/Links/Blocks/OutputBlocks#op-channel)-toiminnolla.
