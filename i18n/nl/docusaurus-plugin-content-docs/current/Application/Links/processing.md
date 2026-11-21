---
id: Processing
title: Verwerking
description: "Verwerkingsblokken in Snelle koppelingen: Omkeren, Begrenzing, Dode zone, Drempel, Geleidelijk en Wisselen."
---

# Verwerking {#processing}

Verwerkingsblokken zitten tussen de invoer en de bewerking en passen de waarde onderweg aan. Een rij kan er geen, één of meerdere hebben, in willekeurige volgorde. Instellingen en toegestane waarden: [Verwerkingsblokken](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blok | Wat het doet |
|---|---|
| [Omkeren](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | draait de richting om, of wisselt aan en uit |
| [Begrenzing](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | begrenst de waarde |
| [Dode zone](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | negeert kleine bewegingen rond nul |
| [Drempel](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | maakt van een waarde aan/uit |
| [Geleidelijk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | versnelt en vertraagt geleidelijk |
| [Wisselen](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | één keer drukken voor aan, nog een keer voor uit |

## Omkeren {#invert}

Draait de motor de verkeerde kant op? Voeg **Omkeren** toe in plaats van het model om te bouwen. Voor twee motoren die tegengesteld moeten draaien (linker en rechter rupsband, twee kanten van een tandwielkast) maak je twee rijen met dezelfde invoer en zet je Omkeren in een ervan.

## Begrenzing {#limit}

Maakt het model langzamer en makkelijker te besturen: met **Maximum** 50 % geeft de stick in de uiterste stand halve snelheid. Handig voor kinderen, rijden binnenshuis en kwetsbare mechanismen.

## Dode zone {#dead-zone}

Een joystick staat zelden precies op nul, waardoor een motor kan zoemen of langzaam kan kruipen. **Dode zone** behandelt kleine waarden als nul. 10 % is een goed begin.

## Drempel {#threshold}

Maakt van een waarde aan/uit: “aan als de waarde **Boven** 20 % is”. Met een sensor is *Afstandssensor* → *Drempel* (Onder, 20 %) aan als er iets dichtbij is. Drempel heeft een kleine hysterese, zodat het aan de grens niet flikkert.

## Geleidelijk {#smooth}

Start en stopt geleidelijk, zoals een echt voertuig. Versnelling en vertraging stel je apart in: een zware vrachtwagen kan er 2 s over doen om op snelheid te komen en 0,5 s om te stoppen. Bij een lamp laat Geleidelijk het licht in- en uitfaden.

## Wisselen {#toggle}

Maakt van een knop een schakelaar: één keer drukken voor aan, nog een keer voor uit. *Knop* → *Wisselen* → *Licht*.

## Tips {#tips}

- De volgorde telt: *Dode zone → Begrenzing → Geleidelijk* is een goede keten om te rijden.
- Een blok dat niet bij het signaal past, klikt niet vast: Wisselen heeft een aan/uit-invoer nodig; Dode zone en Drempel hebben een waarde nodig.
- Kijk naar de live waarden terwijl het programma draait, om te zien wat elk blok doet.
