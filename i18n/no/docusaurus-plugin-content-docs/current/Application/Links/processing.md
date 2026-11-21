---
id: Processing
title: Behandling
description: "Behandlingsblokker i Hurtigkoblinger: Inverter, Begrens, Dødsone, Terskel, Myk og Veksle."
---

# Behandling {#processing}

Behandlingsblokker står mellom inngangen og handlingen og endrer verdien underveis. En rad kan ha ingen, én eller flere, i hvilken som helst rekkefølge. Innstillinger og tillatte verdier: [Behandlingsblokker](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blokk | Hva den gjør |
|---|---|
| [Inverter](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | snur retningen, eller bytter om av og på |
| [Begrens](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | begrenser verdien |
| [Dødsone](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignorerer små bevegelser rundt null |
| [Terskel](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | gjør en verdi om til av/på |
| [Myk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | øker og senker farten gradvis |
| [Veksle](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | trykk én gang for på, en gang til for av |

## Inverter {#invert}

Går motoren feil vei? Legg til **Inverter** i stedet for å bygge om modellen. For to motorer som må gå hver sin vei (venstre og høyre belte, to sider av en girkasse), lager du to rader fra samme inngang og setter Inverter i den ene.

## Begrens {#limit}

Gjør modellen langsommere og lettere å styre: med **Maksimum** 50 % gir full spak halv fart. Fint for barn, kjøring innendørs og ømfintlige mekanismer.

## Dødsone {#dead-zone}

En joystick hviler sjelden nøyaktig på null, så en motor kan summe eller krype. **Dødsone** behandler små verdier som null. 10 % er et godt utgangspunkt.

## Terskel {#threshold}

Gjør en verdi om til av/på: «på når verdien er **Over** 20 %». Med en sensor er *Avstandssensor* → *Terskel* (Under, 20 %) på når noe er nær. Terskel har litt hysterese, så den flimrer ikke ved grensen.

## Myk {#smooth}

Starter og stopper gradvis, som et ekte kjøretøy. Akselerasjon og retardasjon stilles inn hver for seg: en tung lastebil kan bruke 2 s på å få opp farten og 0,5 s på å stoppe. På et lys tones det inn og ut med Myk.

## Veksle {#toggle}

Gjør en knapp om til en bryter: trykk én gang for på, trykk igjen for av. *Knapp* → *Veksle* → *Lys*.

## Tips {#tips}

- Rekkefølgen betyr noe: *Dødsone → Begrens → Myk* er en god kjede for kjøring.
- En blokk som ikke passer til signalet, klikker ikke på plass: Veksle trenger en av/på-inngang; Dødsone og Terskel trenger en verdi.
- Følg sanntidsverdiene mens programmet kjører, så ser du hva hver blokk gjør.
