---
id: Operations
title: Åtgärder och utgångar
description: "Åtgärder i Snabbkopplingar (Motor, Servo, Ljus med flera) och utgångar (Hubb, Indikator, Hubbens LED, LED-matris, Kalibrera servon)."
---

import Screenshot from '@site/src/components/Screenshot';

# Åtgärder och utgångar {#operations-and-outputs}

Fliken **Utgångar** i paletten innehåller åtgärder och utgångar.

- En **åtgärd** talar om *vad* som ska göras (snurra en motor, styra, blinka med en lampa). En **Hubb**-utgång kommer alltid efter den och talar om *var*: vilken hubb och vilka portar.
- En **direktutgång** (Indikator, Hubbens LED, LED-matris, Kalibrera servon) avslutar raden på egen hand, utan åtgärd.

De vanliga åtgärderna (Motor, Servo, Motor i tid, Ljus) finns alltid. Hubbspecifika åtgärder visas bara när någon hubb i profilen stöder dem. Alla inställningar med värden och standardvärden: [Åtgärds- och utgångsblock](/docs/Application/Links/Blocks/OutputBlocks).

## Motorer och lampor {#motors-and-lights}

| Åtgärd | Vad den gör | Typisk användning |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | kör motorn med ingångens värde; 0 stoppar den | körning, vinschar |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | vrider en motor med pulsgivare till en position som följer ingången | styrning |
| [Motor i tid](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | kör motorn en bestämd tid vid varje tryck | dörrar, tippflak |
| [Kör ett antal grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | vrider motorn en bestämd vinkel vid varje tryck | stegning, vändskivor |
| [Gå till position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | skickar en vinkelmotor till ett läge när den är på och ett annat när den är av | luckor, växelväljare |
| [Ljus](/docs/Application/Links/Blocks/OutputBlocks#op-light) | tänder LEGO®-lampor, med fast sken eller blinkande | strålkastare, varningsljus, blinkers |
| [Portfärg](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | färgar portlysdioderna på en BuWizz 3.0 Pro | statusfärger |
| [Sensorlampor](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | tänder ”ögonen” på Technic-avståndssensorn (Robot Inventor) | robotansikten |

### Styrning med Servo {#steering-with-servo}

Servo behöver en motor med pulsgivare och en styrmekanism som du antingen centrerar för hand eller som har ändstopp.

- **Manuell**: vrid axeln till mitten och tryck på **Ställ in som noll**; finjustera med **◀ 5°** / **5° ▶**. Välj sedan **Vinkel** och, om hjulen fortfarande drar åt ena sidan, **Mitt**.
- **Auto**: vid varje start vrider motorn till båda ändstoppen, mitten blir noll och slaglängden blir vinkeln. **Kalibrera nu** kör det direkt. Meddelanden: ”Kalibrerar: motorn vrider till båda ändstoppen…”, ”Kalibrerat: servot vrider ±…°, mitten är noll”, ”Kalibreringen misslyckades: kontrollera hubben, motorn och att axeln har ändstopp”.

På en **Technic Move Hub** styr och kalibrerar hubben sin egen kuggstång; bara kalibreringsläget gäller.

<Screenshot name="links-servo-settings" alt="Inställningar för ett Servo-block" width={900} />

## Åtgärder för hela hubben {#operations-for-the-whole-hub}

Dessa styr hubben som helhet, så Hubb-blocket efter dem har inga portar.

| Åtgärd | Hubb | Vad den gör |
|---|---|---|
| [Broms](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | bromsar medan ingången är på |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | effektläget boost när den är på, normalt när den är av |
| [Effektpuls](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | en effektpuls per tryck (endast med konfigurationen Batmobile™ Tumbler) |
| [Effektläge](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | byter effektläge: Långsam, Normal, Snabb, Ludicrous |
| [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | byter styrkanal: A, B, C |

## Utgångar {#indicator}

- [Hubb](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hubben och dess portar. Se [Hubbblocket och portar](/docs/Application/Links/HubsAndPorts).
- [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): visar värdet på en monitor på instrumentpanelen (textmonitor, Batterinivå, Hastighetsmätare, lutningsmonitor). Direkt efter en hubbsensor visar en textmonitor det verkliga värdet med enhet. Indikatorn visar värdet som det är, så raden har ingen åtgärd. Se [Indikatorer och monitorer](/docs/Application/Dashboard/Indicators).
- [Hubbens LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): färglampan på en LEGO®-hubb, en färg medan ingången är på och en annan medan den är av.
- [LED-matris](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): ljusmatrisen på Robot Inventor-hubben: en nivåstapel, ett tal eller en bild.
- [Kalibrera servon](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): kalibrerar om alla servon i läget **Auto**. Lägg den på en knapp på instrumentpanelen: *BTN3* → *Kalibrera servon*.

## När programmet stoppas {#when-the-program-stops}

Motorerna stannar, LED-matrisen töms och portfärger och sensorlampor släcks.
