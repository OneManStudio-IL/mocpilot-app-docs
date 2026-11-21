---
id: AiBuilder
title: AI-bouwer
description: "Beschrijf je model in woorden of met je stem, en de AI-bouwer stelt de hubs, het dashboard en het programma van een profiel met Logicablokken of Snelle koppelingen in."
---

import Screenshot from '@site/src/components/Screenshot';

# AI-bouwer {#ai-builder}

Beschrijf je model in je eigen woorden, getypt of gesproken, en de **AI-bouwer** stelt het profiel voor je in: de hubs en poorten, de bedieningselementen op het dashboard en het programma. Hij werkt in beide editors: in een profiel met [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) bouwt hij blokken, in een profiel met [Snelle koppelingen](/docs/Application/Links/LinksIntroducing) bouwt hij rijen. Daarna praat je verder met hem om het profiel aan te passen, of bewerk je het zelf.

De AI-bouwer is onderdeel van [MocPilot Pro](/docs/Application/Account/Pro) en werkt in de app en in de [webeditor](/docs/Introducing/WebEditor). Hij heeft een internetverbinding nodig.

<Screenshot name="blocks-ai-builder" alt="Het paneel van de AI-bouwer naast het programma" width={900} />

## De AI-bouwer openen {#open-the-ai-builder}

1. Open een profiel om te bewerken.
2. Druk op de knop **AI-bouwer** (het pictogram met de sterretjes) in de bovenbalk. Op een computer kun je ook op ⇧⌘I / Ctrl+Shift+I drukken.
3. Typ je verzoek in **Wat moet de AI bouwen of wijzigen?** en druk op **Verzenden** (of Enter; met Shift+Enter begin je een nieuwe regel).

Zonder MocPilot Pro laat de knop zien wat de AI-bouwer doet, met **MocPilot Pro nemen** en **Niet nu**.

Waar het paneel opent:

- **Telefoon**: een schermvullende pagina over de editor.
- **Tablet**: een zwevende kaart; sleep hem aan de kop naar de linker- of rechterkant.
- **Computer**: een kaart aan de rechterkant. In de app (niet in de browser) kun je in de kop op **Openen in een apart venster** drukken en het venster naast de editor zetten.

Terwijl de AI werkt, toont het paneel waar hij mee bezig is (**Nadenken over je model…**, **Het profiel controleren…** enzovoort). Zodra hij klaar is, verschijnen de wijzigingen in de editor, samen met een korte samenvatting van wat er is veranderd. Als het paneel leeg is, stelt het een paar voorbeeldverzoeken voor: tik op een ervan om het in het tekstveld te zetten en verstuur het zoals het is of pas het eerst aan.

Het gesprek wordt per profiel bewaard, dus je kunt het paneel sluiten en er later op terugkomen.

## Een goed verzoek schrijven {#ai-builder-tips}

:::tip Vertel welke hub je gebruikt, wat er op elke poort zit en wat het moet doen
Een verzoek van één regel zoals “een auto met lampen” is niet genoeg: de AI moet dan de hub, de poorten en de taak van elke motor raden, en het resultaat moet waarschijnlijk nog worden aangepast. Vermeld:

- **De hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Wat er op elke poort zit**: een aandrijfmotor, een stuurmotor (servo), lampen, een sensor.
- **Wat elk onderdeel moet doen**: rijden, sturen met kalibratie, aan- en uitschakelen, een snelheidsbegrenzing.
- **Hoe je het wilt besturen**: joysticks, schuifregelaars, knoppen, een gamepad.
:::

Zeg het zoals je het aan een vriend zou uitleggen. Je kunt in je eigen taal schrijven.

Klopt er nog iets niet, vertel de AI dan wat er anders moet in plaats van opnieuw te beginnen.

## Voorbeeldverzoeken {#example-requests}

**Een auto**: “Een auto met een Technic Hub: de aandrijfmotor zit op poort A, de stuurmotor op poort C werkt als servo, de lampen zitten op poort D. Stuurjoystick links, gas rechts, een knop die de lampen schakelt.”

**Een kraan**: “Een kraan met een Technic Hub: de draaimotor zit op poort A, de giekmotor op poort B, de lier van de haak op poort C. Een schuifregelaar voor het draaien, knoppen omhoog/omlaag voor de giek, een joystick voor de haak, de snelheid van de giek begrensd op 50%.”

**Een trein**: “Een City-trein met een City Hub: de treinmotor zit op poort A, de lampen op poort B. Een stappenschakelaar voor de snelheid, een snelheidsmeter en een knop voor de lampen.”

## Een bestaand profiel aanpassen {#change-an-existing-profile}

Open de AI-bouwer in een profiel dat je al hebt, ook een dat je met de hand hebt gebouwd, en zeg wat er moet veranderen. De AI ziet de huidige hubs, het dashboard en het programma en bewerkt ze:

- “Maak het sturen langzamer.”
- “Voeg een stopknop toe.”
- “Kopieer de bediening naar mijn gamepad.”
- “Begrens de snelheid van de giek op 50%.”

Je kunt ook vragen stellen over het profiel, bijvoorbeeld “Op welke poort zitten de lampen?”. De AI antwoordt in het paneel en laat het profiel ongewijzigd.

## Wat er met je profiel gebeurt {#what-happens-to-your-profile}

- De AI wijzigt het geopende profiel direct: hubs, dashboard en programma worden in één keer bijgewerkt. Als het programma loopt, stopt het.
- De AI werkt met het programmatype van het profiel: in een profiel met Logicablokken schrijft hij blokken, in een profiel met Snelle koppelingen schrijft hij rijen. Hij zet het ene nooit om in het andere. Vraagt een verzoek iets wat rijen van Snelle koppelingen niet kunnen, dan vertelt de AI je dat er een profiel met Logicablokken nodig is.
- Delen van het profiel die de AI niet hoeft te wijzigen, blijven zoals ze zijn.
- **Laatste AI-wijziging ongedaan maken** (de knop voor ongedaan maken in de kop van het paneel) zet het profiel terug zoals het was vóór de laatste AI-wijziging. Druk er nog een keer op om verder terug te gaan, tot 10 wijzigingen. De geschiedenis voor ongedaan maken wordt gewist als je een ander profiel opent.
- Je kunt het profiel op elk moment zelf verder bewerken.

## Spraakinvoer {#voice-input}

Druk op **Dicteren** (de microfoonknop) en spreek je verzoek in; de tekst verschijnt in het veld en je kunt hem corrigeren voordat je hem verstuurt. Druk nog een keer op de knop om te stoppen. Zijn er meerdere talen beschikbaar, dan wisselt de kleine taalknop naast de microfoon de dicteertaal; de app onthoudt je keuze.

| Waar | Hoe |
|---|---|
| iPhone, iPad, Mac | **Dicteren**; geef de eerste keer toegang tot de microfoon en spraakherkenning |
| Android | **Dicteren**; geef de eerste keer toegang tot de microfoon |
| Windows | druk op **Win+H** om te dicteren met spraaktypen van Windows (de microfoonknop herinnert je eraan) |
| Webeditor | **Dicteren** in Chrome, Edge en Safari; geef de site toegang tot de microfoon. Firefox heeft geen dicteerfunctie |

Meldingen bij spraakinvoer:

| Melding | Wat je moet doen |
|---|---|
| **Geef MOCPilot toegang tot de microfoon in de systeeminstellingen** | Zet toegang tot de microfoon voor MOCPilot aan in de systeeminstellingen |
| **Sta spraakherkenning voor MOCPilot toe in de systeeminstellingen** | Zet op een Apple-apparaat spraakherkenning voor MOCPilot aan in de systeeminstellingen |
| **Geef deze site toegang tot de microfoon in de browser** | Sta de microfoon toe in de site-instellingen van de browser |
| **Er werd niets gehoord** | Druk op **Dicteren** en spreek opnieuw |
| **Spraakinvoer heeft een verbinding nodig** | Maak verbinding met internet, of typ het verzoek |
| **Spraakherkenning is momenteel niet beschikbaar voor deze taal** | Kies een andere dicteertaal of typ het verzoek |
| **Geen microfoon gevonden** / **Spraakinvoer is niet beschikbaar op dit apparaat** | Typ het verzoek |

## Limieten {#limits}

- Ongeveer 30 verzoeken per dag en een maandlimiet. De kop van het paneel toont hoeveel je hebt gebruikt: **Vandaag 5/30 · Maand 12%**.
- Tijdens de gratis proefperiode is het aantal AI-verzoeken beperkt; ze gaan verder zodra het abonnement begint.
- Eén verzoek tegelijk: wacht op het antwoord voordat je het volgende verstuurt.
- De AI-bouwer bouwt en bewerkt alleen profielen. Hij beantwoordt geen vragen over andere onderwerpen.

## Foutmeldingen {#error-messages}

| Melding | Wat je moet doen |
|---|---|
| **AI-bouwer is niet beschikbaar** / **De AI-dienst is niet bereikbaar. Controleer je internetverbinding en probeer het opnieuw.** | Controleer je internetverbinding en open het paneel opnieuw |
| **Geen verbinding met de AI-dienst. Controleer je internetverbinding en probeer het opnieuw.** | Controleer de verbinding en verstuur het verzoek opnieuw |
| **De verbinding met de AI-dienst is verbroken…** | Zodra je weer online bent, verschijnt het antwoord in het paneel; of verstuur het verzoek opnieuw |
| **De AI heeft niet op tijd geantwoord. Stuur het verzoek opnieuw.** / **Het verzoek is verloren gegaan, stuur het opnieuw** | Verstuur het verzoek opnieuw |
| **De AI kon voor dit verzoek geen werkend profiel maken. Probeer het anders te zeggen.** | Formuleer het verzoek anders: noem de hub, de poorten en wat elk onderdeel doet |
| **Het profiel is te groot om in één keer te maken. Vraag minder tegelijk.** | Splits het verzoek op in kleinere stappen |
| **De AI heeft dit verzoek geweigerd.** | Formuleer het verzoek zo dat het over het profiel gaat |
| **Je hebt de daglimiet voor AI-verzoeken bereikt. Probeer het morgen opnieuw.** | Wacht tot morgen, of bewerk het profiel zelf |
| **Je hebt de AI-limiet van deze maand bereikt.** | De limiet wordt volgende maand opnieuw ingesteld |
| **Je hebt alle AI-verzoeken van de gratis proefperiode gebruikt. Ze gaan verder zodra het abonnement begint.** | Wacht tot het abonnement begint |
| **De AI-bouwer bouwt en bewerkt alleen profielen. Te veel verzoeken over andere onderwerpen: probeer het over een uur opnieuw.** | Wacht een uur en vraag alleen iets over het profiel |
| **Er zijn nu te veel AI-verzoeken. Probeer het over een minuut opnieuw.** | Probeer het over een minuut opnieuw |
| **Het vorige verzoek loopt nog.** | Wacht op het antwoord |
| **De AI-dienst is tijdelijk niet beschikbaar. Probeer het later opnieuw.** / **Je hebt MocPilot Pro. De AI-bouwer is nu niet beschikbaar, probeer het later opnieuw.** | Probeer het later opnieuw |
| **Het antwoord was voor een ander profiel** | Je hebt een ander profiel geopend terwijl de AI bezig was, dus de wijziging is niet toegepast. Open het eerste profiel opnieuw en herhaal het verzoek |
| **Open eerst een profiel om te bewerken** | Open het profiel in de editor en verstuur dan het verzoek |
| **Het profiel kon niet worden bijgewerkt in de editor** / **De wijziging kon niet ongedaan worden gemaakt** | Probeer het opnieuw; blijft het gebeuren, sluit het profiel dan en open het opnieuw |
