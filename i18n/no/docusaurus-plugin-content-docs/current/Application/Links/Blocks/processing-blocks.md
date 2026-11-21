---
id: ProcessingBlocks
title: Behandlingsblokker
description: "Referanse for alle behandlingsblokker i Hurtigkoblinger: Inverter, Begrens, Dødsone, Terskel, Myk og Veksle."
---

# Behandlingsblokker {#processing-blocks}

Behandlingsblokker står mellom inngangen og handlingen (eller indikatoren) og endrer signalet underveis. En rad kan ha så mange du vil, i hvilken som helst rekkefølge. En blokk som ikke kan ta imot det innkommende signalet, klikker ikke på plass; i en fil rapporteres den som «… fungerer ikke med denne kontrolleren». Slik bruker du dem: [Behandling](/docs/Application/Links/Processing).

## Inverter {#mod-invert}

Snur signalet.

- Ingen innstillinger.
- Tar: verdi eller av/på. Gir: samme type.
- Verdi: bytter fortegn (0,7 blir −0,7). Av/på: på blir av og av blir på.

## Begrens {#mod-limit}

Skalerer verdien ned, slik at fullt utslag ikke gir mer enn maksimum.

- **Maksimum**: 20, 30, 40, 50, 60, 70, 80 eller 90 % (standard 50 %).
- Tar: verdi eller av/på. Gir: verdi (en begrenset knapp gir 0 eller maksimum).

## Dødsone {#mod-deadzone}

Behandler små verdier rundt null som null; resten strekkes tilbake til hele området, slik at fullt utslag fortsatt gir 1.

- **Sone**: 5, 10, 15, 20 eller 30 % (standard 10 %).
- Tar: verdi. Gir: verdi.

## Terskel {#mod-threshold}

Gjør en verdi om til av/på.

- **På når verdien er**: **Over** (standard) eller **Under**.
- **Nivå (av full skala)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 eller 90 % (standard 20 %).
- Tar: verdi. Gir: av/på.
- En liten hysterese (2 % av full skala) hindrer at utgangen flimrer når verdien ligger rundt nivået.

## Myk {#mod-smooth}

Beveger seg gradvis mot den innkommende verdien i stedet for å hoppe.

- **Akselerasjon (til full fart)**: **Umiddelbart**, 0,25, 0,5, 1, 2 eller 3 s (standard 0,5 s): tiden fra 0 til fullt utslag bort fra null.
- **Retardasjon (til stopp)**: de samme valgene (standard 0,5 s): tiden fra fullt utslag tilbake til 0.
- Tar: verdi eller av/på. Gir: verdi (en utjevnet knapp øker og avtar gradvis).

## Veksle {#mod-toggle}

Gjør en trykknapp om til en bryter: hvert trykk veksler utgangen mellom på og av. Utgangen starter som av.

- Ingen innstillinger.
- Tar: av/på. Gir: av/på.
