---
id: Processing
title: Behandling
description: "Behandlingsblokke i Hurtige forbindelser: Inverter, Begrænsning, Dødzone, Tærskel, Blød og Skift."
---

# Behandling {#processing}

Behandlingsblokke sidder mellem inputtet og handlingen og ændrer værdien undervejs. En række kan have ingen, én eller flere i vilkårlig rækkefølge. Indstillinger og tilladte værdier: [Behandlingsblokke](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blok | Hvad den gør |
|---|---|
| [Inverter](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | vender retningen eller bytter om på til og fra |
| [Begrænsning](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | sætter et loft over værdien |
| [Dødzone](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignorerer små bevægelser omkring nul |
| [Tærskel](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | gør en værdi til til/fra |
| [Blød](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | accelererer og bremser gradvist |
| [Skift](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | tryk én gang for til, igen for fra |

## Inverter {#invert}

Drejer motoren den forkerte vej? Tilføj **Inverter** i stedet for at bygge modellen om. Til to motorer, der skal dreje i hver sin retning (venstre og højre bælte, to sider af en gearkasse), laver du to rækker med samme input og sætter Inverter i den ene.

## Begrænsning {#limit}

Gør modellen langsommere og lettere at styre: Med **Maksimum** 50 % giver fuldt udslag på sticken halv fart. Godt til børn, kørsel indendørs og følsomme mekanismer.

## Dødzone {#dead-zone}

Et joystick hviler sjældent præcis på nul, så en motor kan brumme eller krybe. **Dødzone** behandler små værdier som nul. 10 % er et godt udgangspunkt.

## Tærskel {#threshold}

Gør en værdi til til/fra: »Tændt, når værdien er **Over** 20 %«. Med en sensor er *Afstandssensor* → *Tærskel* (Under, 20 %) til, når noget er tæt på. Tærskel har en lille hysterese, så den ikke flimrer ved grænsen.

## Blød {#smooth}

Starter og stopper gradvist som et rigtigt køretøj. Acceleration og deceleration indstilles hver for sig: En tung lastbil kan bruge 2 s på at komme op i fart og 0,5 s på at stoppe. På et lys får Blød lyset til at tone ind og ud.

## Skift {#toggle}

Gør en knap til en kontakt: Tryk én gang for til, og tryk igen for fra. *Knap* → *Skift* → *Lys*.

## Tips {#tips}

- Rækkefølgen betyder noget: *Dødzone → Begrænsning → Blød* er en god kæde til kørsel.
- En blok, der ikke passer til signalet, klikker ikke fast: Skift kræver et til/fra-input; Dødzone og Tærskel kræver en værdi.
- Hold øje med de aktuelle værdier, mens programmet kører, så du kan se, hvad hver blok gør.
