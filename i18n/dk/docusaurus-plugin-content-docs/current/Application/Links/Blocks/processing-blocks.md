---
id: ProcessingBlocks
title: Behandlingsblokke
description: "Oversigt over alle behandlingsblokke i Hurtige forbindelser: Inverter, Begrænsning, Dødzone, Tærskel, Blød og Skift."
---

# Behandlingsblokke {#processing-blocks}

Behandlingsblokke sidder mellem inputtet og handlingen (eller indikatoren) og ændrer signalet undervejs. En række kan have et vilkårligt antal af dem i vilkårlig rækkefølge. En blok, der ikke kan modtage det indkommende signal, klikker ikke fast; i en fil meldes det som »… virker ikke med denne controller«. Sådan bruger du dem: [Behandling](/docs/Application/Links/Processing).

## Inverter {#mod-invert}

Vender signalet.

- Ingen indstillinger.
- Modtager: værdi eller til/fra. Giver: samme slags.
- Værdi: skifter fortegn (0,7 bliver −0,7). Til/fra: til bliver fra, og fra bliver til.

## Begrænsning {#mod-limit}

Skalerer værdien ned, så fuldt udslag ikke giver mere end maksimum.

- **Maksimum**: 20, 30, 40, 50, 60, 70, 80 eller 90 % (standard 50 %).
- Modtager: værdi eller til/fra. Giver: værdi (en begrænset knap giver 0 eller maksimum).

## Dødzone {#mod-deadzone}

Behandler små værdier omkring nul som nul; resten strækkes ud til hele området igen, så fuldt udslag stadig giver 1.

- **Zone**: 5, 10, 15, 20 eller 30 % (standard 10 %).
- Modtager: værdi. Giver: værdi.

## Tærskel {#mod-threshold}

Gør en værdi til til/fra.

- **Tændt, når værdien er**: **Over** (standard) eller **Under**.
- **Niveau (af fuld skala)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 eller 90 % (standard 20 %).
- Modtager: værdi. Giver: til/fra.
- En lille hysterese (2 % af fuld skala) forhindrer outputtet i at flimre, når værdien svæver omkring niveauet.

## Blød {#mod-smooth}

Bevæger sig gradvist hen mod den indkommende værdi i stedet for at springe.

- **Acceleration (til fuld fart)**: **Øjeblikkelig**, 0,25, 0,5, 1, 2 eller 3 s (standard 0,5 s): tiden fra 0 til fuldt udslag væk fra nul.
- **Deceleration (til stop)**: de samme valg (standard 0,5 s): tiden fra fuldt udslag tilbage til 0.
- Modtager: værdi eller til/fra. Giver: værdi (en udjævnet knap stiger og falder gradvist).

## Skift {#mod-toggle}

Gør en trykknap til en kontakt: Hvert tryk skifter outputtet mellem til og fra. Outputtet starter som fra.

- Ingen indstillinger.
- Modtager: til/fra. Giver: til/fra.
