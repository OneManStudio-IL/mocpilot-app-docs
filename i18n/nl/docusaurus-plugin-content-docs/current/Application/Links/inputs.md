---
id: Inputs
title: Invoer
description: "Invoer in Snelle koppelingen: dashboardbedieningen, het gesimuleerde voertuig, de gamepad, hubknoppen en hubsensoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Invoer {#inputs}

Elke rij begint met een invoer. Het tabblad **Invoer** van het palet bevat:

- één blok per **dashboardbediening**; bedieningen met meerdere kanalen (joystick- en richtingspadassen, stuur, pedalen, versnellingspook, handrem, richtingaanwijzers) krijgen één blok per kanaal;
- de blokken **Voertuig**, als het dashboard pedalen, een versnellingspook of een handrem heeft;
- het blok **Gamepad**, als gamepadblokken zijn ingeschakeld;
- één blok **Hub** per hub van het profiel (behalve Mould King, die geen knoppen of sensoren heeft).

Is het tabblad leeg, dan staat er “Voeg controllers toe op het dashboard of hubs in Mijn hubs: ze verschijnen hier”.

<Screenshot name="links-palette-inputs" alt="Het tabblad Invoer van het palet in Snelle koppelingen" width={900} />

Alle instellingen en waarden van elke invoer staan in het overzicht [Invoerblokken](/docs/Application/Links/Blocks/InputBlocks).

## Dashboardbedieningen {#dashboard-controls}

Een blok [Controller](/docs/Application/Links/Blocks/InputBlocks#src-controller) neemt een bediening van je dashboard op basis van de naam (**JOY1**, **SLDR1**, **BTN2**…) en, als de bediening er meerdere heeft, het gewenste **Kanaal**:

| Bediening | Wat de rij krijgt |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-as** of **Y-as**, −1…1 |
| [Schuifregelaar](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [rijschakelaar](/docs/Application/Links/Blocks/InputBlocks#controller-train), [draaiknop](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | de positie |
| [Stuur](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Stuurhoek** −1…1 of **Claxon** |
| [Pedalen](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Gaspedaal** of **Rempedaal**, 0…1 |
| [Versnellingspook](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Versnelling** of **Richting (R − / vooruit +)** |
| [Handrem](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Handrem aangetrokken** (aan/uit) of **Handremkracht** |
| [Richtingaanwijzers](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Richtingaanwijzers (links − / rechts +)**, **Linker richtingaanwijzer**, **Rechter richtingaanwijzer** of **Licht** |
| [Richtingspad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Omhoog / omlaag** of **Links / rechts**: −1, 0 of +1 |
| [Knop](/docs/Application/Links/Blocks/InputBlocks#controller-button) | aan zolang ingedrukt |
| [Schakelaar](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | aan / uit |
| [Stappenschakelaar](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | de huidige stap |

Als je een bediening op het dashboard toevoegt, hernoemt of wijzigt, volgen het palet en de rijen automatisch. Stel je een joystick in op **Alleen horizontaal**, dan melden rijen die de Y-as gebruiken “… beweegt niet langs deze as”.

## Rijden als een echte auto {#drive-like-a-real-car}

Het stuur, de pedalen, de versnellingspook en de handrem geven hun ruwe positie door: een pedaalrij laat de motor precies zo ver draaien als het pedaal is ingetrapt. Voor een model dat zich als een auto gedraagt (het trekt op met traagheid, rolt uit, remt en rijdt achteruit in R), gebruik je in plaats daarvan de invoer [Voertuig](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Die leest de pedalen, de versnellingspook en de handrem samen uit en geeft de **Snelheid**, het **Toerental (tpm)**, **Remmen** of **Op de handrem** van het voertuig:

- *Voertuig (Snelheid)* → *Motor* → aandrijfmotoren;
- *Stuur (Stuurhoek)* → *Servo* → besturing;
- *Voertuig (Remmen)* → *Licht* → remlichten;
- *Richtingaanwijzers (Linker richtingaanwijzer)* → *Licht* → linker knipperlicht.

## Gamepad {#gamepad}

Eén blok [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) dekt de hele controller; kies een stick, trigger of knop bij **Invoer**. Schakel eerst **Gamepad-blokken inschakelen** in op de [Gamepad-pagina](/docs/Application/Dashboard/Gamepad). De labels volgen de **Gamepad-knoppenindeling** (Xbox of PlayStation).

## Hubknoppen en -sensoren {#hub-buttons-and-sensors}

Een invoer [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) leest een knop van een hub of een van de sensoren: batterij, kanteling, versnelling, motorsnelheid en -positie, afstands- en kleursensoren op de poorten, en meer. De lijst toont alleen wat die hub kan melden. Stel voor kanteling en versnelling **Oriëntatie van de hub** zo in dat het overeenkomt met hoe de hub in het model zit.

De waarde gaat geschaald naar −1…1 door de rij. Een tekst-**Monitor** direct na een sensor toont de echte waarde met eenheid, zoals “7,85 V” of “−12°”.

Gebruikelijke toepassingen:

- *Batterij* → *Indicator* (batterijniveau);
- *Afstandssensor* → *Drempel* (Onder, 20 %) → *Motor voor tijd*: achteruit als er iets dichtbij komt;
- *Knop 1* (Powered Up-afstandsbediening) → *Motor*: rijden met de fysieke afstandsbediening.
