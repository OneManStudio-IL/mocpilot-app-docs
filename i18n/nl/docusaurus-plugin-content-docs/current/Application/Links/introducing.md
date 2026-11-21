---
id: LinksIntroducing
title: Kennismaken met Snelle koppelingen
description: "Snelle koppelingen verbindt dashboardbedieningen rij voor rij met motoren en lampen van de hub, zonder code."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Snelle koppelingen {#quick-links}

**Snelle koppelingen** is de programma-editor van MOCPilot waarvoor je geen code nodig hebt. Je verbindt dashboardbedieningen, de gamepad of hubsensoren met motoren, lampen en indicatoren, **één rij tegelijk**. Heb je de klassieke Controlz-app gebruikt, dan voel je je meteen thuis.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Rijen in Snelle koppelingen" style={{width: '100%', maxWidth: 720}} />

## Een rij leest als een zin {#a-row-reads-like-a-sentence}

Elke rij loopt van links naar rechts:

**Invoer → Verwerking (optioneel) → Bewerking → Uitvoer**

> *Joystick 1, Y-as* → *Geleidelijk* → *Motor* → *Technic Hub, poort A*
>
> “Als ik de joystick op en neer beweeg, draait de motor op poort A en start en stopt hij geleidelijk.”

| Onderdeel | Wat het is | Voorbeelden |
|---|---|---|
| **Invoer** | waar de waarde vandaan komt | een dashboardbediening, het gesimuleerde voertuig, de gamepad, een hubknop of -sensor |
| **Verwerking** | past de waarde onderweg aan (geen, één of meerdere blokken) | Omkeren, Begrenzing, Dode zone, Drempel, Geleidelijk, Wisselen |
| **Bewerking** | wat de hub moet doen | Motor, Servo, Motor voor tijd, Licht, Draaien met graden, Naar positie gaan… |
| **Uitvoer** | waar het gebeurt | een **Hub** met zijn poorten, of een directe uitvoer: Indicator, Hub-LED, LED-matrix, Servo's kalibreren |

Directe uitvoer (Indicator, Hub-LED, LED-matrix, Servo's kalibreren) heeft geen bewerking nodig: *Hubbatterij → Indicator*.

## De editor {#the-editor}

<Screenshot name="links-editor" alt="Editor van Snelle koppelingen met rijen en het palet" width={900} />

- **Rijen** vullen het scherm en scrollen verticaal. Nieuwe rijen begin je in de laatste, lege rij (“Nieuwe rij: invoer”).
- Het **palet** onderaan heeft drie tabbladen: **Invoer**, **Verwerking** en **Uitvoer**. Het wordt opgebouwd uit je profiel: elke dashboardbediening en elke hub in Mijn hubs verschijnt automatisch, de gamepad verschijnt als gamepadblokken aan staan, en een bewerking verschijnt alleen als een hub van het profiel die kan uitvoeren.
- De knop **Problemen** in de bovenbalk toont een groen vinkje als elke rij klaar is, of een rood “!” met het aantal problemen.

## Een rij bouwen {#build-a-row}

1. Sleep een invoer uit **Invoer** naar de lege rij. Er wordt een nieuwe rij gemaakt.
2. Sleep zo nodig verwerkingsblokken uit **Verwerking** achter de invoer.
3. Sleep een bewerking (bijvoorbeeld **Motor**) uit **Uitvoer**.
4. Sleep de uitvoer **Hub** achter de bewerking en tik op de poorten die je wilt gebruiken.
5. Tik op een blok om de instellingen te wijzigen: je kiest uit chips, typen is niet nodig.

Blokken passen in elkaar als puzzelstukjes. De vorm van elke verbinding toont het soort signaal, zodat blokken die niet samen kunnen werken niet aan elkaar klikken:

- een **waarde** van −1 tot 1 (joystickassen, schuifregelaars, pedalen, sensoren);
- **aan/uit** (knoppen, schakelaars, drempels);
- de verbinding **bewerking → hub**, zodat een hub alleen na een bewerking kan komen.

Om een blok te verwijderen sleep je het terug naar het palet (“Hier neerzetten om te verwijderen”), of tik je erop en kies je **Blok verwijderen**.

## Rijen {#rows}

Tik op het rijnummer om het rijmenu te openen:

- **Uitschakelen** / **Inschakelen**: een uitgeschakelde rij blijft in het programma, maar draait niet. Handig om te experimenteren.
- **Rij verwijderen**.

Je kunt zoveel rijen toevoegen als je wilt.

## Uitvoeren {#run}

Druk op **Start**. Terwijl het programma draait, toont elke verbinding de **live waarde** die erdoorheen gaat, zodat je precies ziet waar een signaal stopt. Tijdens het draaien kun je niet bewerken; druk op **Stop** om weer te bewerken. Zie [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems).

## Ongedaan maken {#undo}

**Ongedaan maken** en **Opnieuw** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z, of de zwevende knoppen) gaan tot 100 stappen terug. Ze zijn niet beschikbaar terwijl het programma draait.

## Meer lezen {#read-more}

- [Invoer](/docs/Application/Links/Inputs): bedieningen, het voertuig, de gamepad, hubknoppen en sensoren
- [Verwerking](/docs/Application/Links/Processing): Omkeren, Begrenzing, Dode zone, Drempel, Geleidelijk, Wisselen
- [Bewerkingen en uitvoer](/docs/Application/Links/Operations)
- [Hub-blok en poorten](/docs/Application/Links/HubsAndPorts)
- [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems)
- [Voorbeelden: auto, tank, kraan, trein](/docs/Application/Links/Examples)
- Blokkenoverzicht: [invoer](/docs/Application/Links/Blocks/InputBlocks), [verwerking](/docs/Application/Links/Blocks/ProcessingBlocks), [bewerkingen en uitvoer](/docs/Application/Links/Blocks/OutputBlocks)

## Snelle koppelingen of Logicablokken? {#quick-links-or-logic-blocks}

Snelle koppelingen is ideaal als elke bediening gewoon iets beweegt. Heb je logica nodig (reeksen, voorwaarden, variabelen of een reactie in meerdere stappen op een sensor), gebruik dan [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Het programmatype kies je wanneer je het profiel maakt; zie de [vergelijking](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
