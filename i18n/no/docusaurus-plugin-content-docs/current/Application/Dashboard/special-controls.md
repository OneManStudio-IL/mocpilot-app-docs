---
id: SpecialControls
title: Spesialkontroller
description: "Ratt, pedaler, girspak, håndbrekk, blinklys og togkontroll: slik bruker du dem, innstillinger, utseender, verdier og blokker."
---

import Screenshot from '@site/src/components/Screenshot';

# Spesialkontroller {#special-controls}

Spesialkontroller ser ut og fungerer som den ekte varen: et ratt, pedaler, en girspak, et håndbrekk, en blinklysspak og en lokomotivkontroller. Hver av dem er et eget produkt: kjøp dem du trenger, eller få alle med [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Et dashboard med ratt, pedaler, girspak, håndbrekk, blinklys og togkontroll" width={900} />

| Kontroll | Produkt | Navn på dashboardet | Gir programmet |
|---|---|---|---|
| [Ratt](#steering-wheel) | Ratt | STWHEEL | rattvinkel, horn |
| [Pedaler](#pedals) | Pedaler | PDLS | gass og brems |
| [Manuell girkasse](#gear-shifter) | Girspak | GEAR | gir: R, N, 1…6 |
| [Automatisk girkasse](#gear-shifter) | Girspak | GEARA | velger: P, R, N, D |
| [Handbrekk](#handbrake) | Handbrekk | HBRK | kraft, låst |
| [Blinklys](#turn-signals) | Blinklys | STALK | venstre blinklys, høyre blinklys, lys |
| [Togkontroll](#train-controller) | Togkontroll | TRTHR | kjøretrinn, retning, trekkraft |

**Dreieknapp** er ikke et eget produkt: den følger med alle betalte temaer. Se [Kontrolltyper](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Legg til en spesialkontroll {#add-a-special-control}

1. Åpne dashboardet og trykk **+** (**Legg til kontroller**).
2. I listen over kontrolltyper blar du ned til **Kjøretøy og spesial** og velger en kontroll.
3. Utseendestripen viser alle utseendene. Velg ett, og sett deretter opp kontrollen under **Konfigurer**.
4. Trykk **Legg til på dashboard**. For en kontroll du ikke eier ennå, trykker du **Kjøp** eller **Alt med MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paletten Legg til kontroller med rattet valgt og utseendene i utseendestripen" width={900} />

## Utseender {#looks}

Hver spesialkontroll finnes i mange **utseender**. De fleste passer til et betalt tema (Racing, Aura, Klassisk, Hologram og så videre), slik at rattet, girspaken og håndbrekket kan passe til resten av dashboardet. Du kan bytte utseende når som helst: velg kontrollen og velg et annet under **Utsjånad** på fanen **Stil**. Utseendet endrer bare bildet: verdiene, blokkene og programmet blir de samme.

Noen utseender setter også en passende aksentfarge når du velger dem.

## Innstillinger for alle spesialkontroller {#settings-of-all-special-controls}

- **Utsjånad** (fanen Stil): se ovenfor.
- **Aksentfarge** (fanen Stil): girspak, håndbrekk, blinklys og togkontroll.
- **Lås kontrolleren** og **Interaktivitet** (fanen Innstillinger), som på alle kontroller. Se [Kontrollegenskaper](/docs/Application/Dashboard/ControlProperties).

## Ratt {#steering-wheel}

Sett en finger på rattet og drei det rundt midten. Når du slipper, fjærer det tilbake til midten. Trykk på midten av rattet for å tute: da dreier ikke rattet.

**Innstillinger**

- **Rattvinkel** (20–120°, standard 60°): hvor langt du dreier rattet for å nå fullt utslag. Det endrer ikke verdiene programmet får.
- **Lydeffekter**: tutelyden og lydene programmet spiller fra rattet. Lyden i appen må være slått på.

**Verdier**: rattvinkelen fra −100 (fullt venstre) via 0 til 100 (fullt høyre); hornet er 100 mens du holder det, ellers 0.

**Utseender**: Terrengkjøretøy, Tung lastebil, Superbil, Retro tre, Racerratt, Rally semsket, Terreng bruks, Konsept glød, Trekkvogn, Familiesedan, Bybil, Sandbuggy, Klassisk 4x4, Byggmaskiner, Hi-Fi lyd, Aura, Klosser, Krinskjerne, Djupt rom, Tungtransport, Neo Orbit, Terrengførarhus, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgang, Miami, Høgteknologi, Hologram.

**Lyder** for programmet: Bilhorn, Lastebilhorn, Sportsbilhorn.

**Hurtigkoblinger**: inngangen [Ratt](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) med kanalene **Rattvinkel** og **Horn**.

## Pedaler {#pedals}

Bremsepedalen er til venstre, gasspedalen til høyre. Trykk på en pedal med en finger: jo høyere opp på pedalen fingeren er, desto hardere er den trykt inn. Nær bunnen er den lett trykt; nær toppen helt inne. Slipp, så kommer pedalen opp igjen. Du kan trykke på begge pedalene samtidig.

**Innstillinger**: **Lydeffekter**: lar programmet spille pedallydene. Lyden i appen må være slått på.

**Verdier**: gass og brems, hver fra 0 til 100.

**Utseender**: Terrengkjøretøy, Tung lastebil, Superbil, Retro krom, Karbon & raud, Race bora, Terreng grep, Konsept glød, Trekkvogn, Familiesedan, Bybil, Sandbuggy, Klassisk 4x4, Byggmaskiner, Hi-Fi lyd, Aura, Klosser, Krinskjerne, Djupt rom, Tungtransport, Neo Orbit, Terrengførarhus, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgang, Miami, Høgteknologi, Hologram.

**Lyder** for programmet: Bilbrems, Sportsbilbrems, Lastebilens luftbrems, Ryggealarm.

**Hurtigkoblinger**: inngangen [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) med kanalene **Gasspedal** og **Bremsepedal**.

:::tip Pedaler alene gjør ingen bil
Pedalene gir bare hvor hardt hver av dem er trykt inn. Hvis en rad sender gasspedalen rett til en motor, går motoren nøyaktig så mye som pedalen er trykt inn. For å få en modell som akselererer gradvis, triller, bremser og rygger, bruker du [kjøretøysimulatoren](#vehicle-simulator).
:::

## Girspak {#gear-shifter}

Produktet **Girspak** har to kontroller: en **Manuell girkasse** og en **Automatisk girkasse**.

### Manuell girkasse {#manual-gearbox}

En H-kulisse med revers og opptil seks forovergir. Dra knotten langs den midterste raden og opp eller ned i et gir. Når du slipper, smetter knotten inn i nærmeste gir eller tilbake til fri.

- **Antall gir** (2–6, standard 6, fanen Innstillinger): kulissen endres tilsvarende. Revers er alltid i kolonnen lengst til venstre, fri i midten.
- **Verdier**: −1 = revers (R), 0 = fri (N), 1…6 = forovergir.

### Automatisk girkasse {#automatic-gearbox}

En velger med fire posisjoner: **P** (parkering), **R** (revers), **N** (fri) og **D** (kjør). Hvordan du betjener den, avhenger av utseendet:

| Velger | Slik bruker du den | Utseender |
|---|---|---|
| Spak | skyv håndtaket langs sporet; det stopper i nærmeste posisjon | Høgteknologi |
| Dreiehjul | drei hjulet med en finger; det klikker inn i P, R, N eller D | Klassisk, Djupt rom, Taktisk, Byggmaskiner, Hi-Fi lyd, Aura, Krinskjerne, Rock Crawler, Terrengførarhus, Neo Orbit, Terrengbil, Arbeidshest, Konsept, Sedan, Bybil, Klassisk 4x4 |
| Knapper | trykk på P, R, N eller D | Racing, Tungtransport, Klosser, Tung lastebil, Retro, Rally, Superbil, Formel, Langtransport, Buggy, Solnedgang, Miami, Hologram |

- **Antall gir** (2–8, standard 6, fanen Innstillinger): hvor mange gir [kjøretøysimulatoren](#vehicle-simulator) skifter gjennom i D. Når simulatoren velger et gir, viser velgeren det, for eksempel **D3**.
- **Verdier**: −2 = P, −1 = R, 0 = N, 1 = D. Alle tre velgerne gir de samme verdiene, så programmet fungerer med alle utseender.

Begge girkassene har de samme utseendene: Klassisk, Racing, Djupt rom, Taktisk, Tungtransport, Byggmaskiner, Hi-Fi lyd, Aura, Krinskjerne, Rock Crawler, Terrengførarhus, Klosser, Neo Orbit, Tung lastebil, Retro, Rally, Terrengbil, Superbil, Formel, Arbeidshest, Konsept, Langtransport, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Høgteknologi, Hologram.

**Hurtigkoblinger**: inngangen [Girspak](/docs/Application/Links/Blocks/InputBlocks#controller-gear) med kanalene **Gir** (manuell: giret i forhold til antall gir, revers negativ; automatisk: retningen) og **Retning (R − / forover +)**: −1 i revers, 0 i fri og parkering, +1 i alle forovergir.

## Handbrekk {#handbrake}

En håndbrekkspak. Ta tak i spaken etter håndtaket og trekk den ned. Bremsekraften følger hvor langt du trekker. Slipp, så fjærer spaken tilbake.

For å **låse** den trekker du spaken helt ned og fører deretter fingeren langs spaken mot foten: håndtaket glir ned, og spaken blir stående låst. For å **løse ut** en låst spak trykker du på kontrollen eller drar spaken tilbake.

**Verdier**: kraften fra 0 til 100, og om spaken er låst.

**Utseender**: Klassisk, Rally, Tung lastebil, Retro, Djupt rom, Taktisk, Aura, Tungtransport, Byggmaskiner, Hi-Fi lyd, Neo Orbit, Terrengførarhus, Racing, Klosser, Krinskjerne, Rock Crawler, Terrengbil, Superbil, Formel, Arbeidshest, Konsept, Langtransport, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Høgteknologi, Hologram.

**Hurtigkoblinger**: inngangen [Handbrekk](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) med kanalene **Handbrekk låst** (på/av, som en bryter) og **Handbrekkraft**.

## Blinklys {#turn-signals}

En blinklysspak med lysbryter.

- Dra spaken **opp** for venstre blinklys og **ned** for høyre blinklys. Den blir stående der du slipper den; dra den tilbake til midten for å slå av blinklyset.
- **Trykk** på spaken eller frontlysknappen for å slå lyset av eller på. Dette flytter ikke spaken.

**Innstillinger**

- **Ikon: left**, **Ikon: light**, **Ikon: right** (fanen Stil): ikonene på varsellampene.
- **Blinklysutgangane blinkar** (fanen Innstillinger, på som standard): blinklysutgangene blinker i takt med lampen på spaken, så et lys som er koblet til dem, blinker av seg selv. Når den er av, lyser utgangene jevnt mens blinklyset er på. Blokkene ser alltid den jevne tilstanden.

**Verdier**: venstre blinklys, høyre blinklys og lys, hver av eller på.

**Utseender**: Klassisk, Racing, Djupt rom, Taktisk, Tungtransport, Byggmaskiner, Hi-Fi lyd, Aura, Krinskjerne, Rock Crawler, Terrengførarhus, Klosser, Neo Orbit, Tung lastebil, Retro, Rally, Terrengbil, Superbil, Formel, Arbeidshest, Konsept, Langtransport, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Høgteknologi, Hologram.

**Hurtigkoblinger**: inngangen [Blinklys](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) med kanalene **Blinklys (venstre − / høyre +)** (to lys med motsatt polaritet på én port), **Venstre blinklys**, **Høyre blinklys** og **Lys**.

## Togkontroll {#train-controller}

En lokomotivkontroller med kjørespak og retningsvelger.

- **Kjørespak**: dra spaken opp eller ned. Den har 8 kjøretrinn (0–8) og blir stående på trinnet der du slipper den.
- **Retningsvelger**: dra knotten opp for **forover** eller ned for **revers**; midten er **nøytral**. Knotten hopper fra posisjon til posisjon og stopper aldri imellom. Som i en ekte førerhytte flytter den seg bare når kjørespaken står på 0.

**Verdier**: kjøretrinnet (0–8), retningsvelgeren (1 = forover, 0 = nøytral, −1 = revers) og **trekkraften**: trinn ÷ 8 × 100 med fortegnet til retningen, fra −100 til 100. Trekkraften kan styre en togmotor direkte.

**Utseender**: Original, Byggmaskiner, Hi-Fi lyd, Aura, Klosser, Buggy, Krinskjerne, Bybil, Klassisk, Konsept, Djupt rom, Terrengbil, Tungtransport, Klassisk 4x4, Tung lastebil, Miami, Neo Orbit, Superbil, Arbeidshest, Terrengførarhus, Racing, Rally, Rock Crawler, Sedan, Solnedgang, Taktisk, Langtransport, Retro, Formel, Høgteknologi, Hologram.

**Hurtigkoblinger**: inngangen [Skyveknapp](/docs/Application/Links/Blocks/InputBlocks#controller-train); den gir trekkraften.

## Blokker {#blocks}

Hver spesialkontroll legger til egne blokker i kategorien **Skjermkontrollere** i Logikkblokker:

| Kontroll | Hendelser | Verdier |
|---|---|---|
| Ratt | *når rattet … flyttet / trykt / sleppt* | *ratt …*, *ratt … trykt / sleppt?* |
| Pedaler | *når pedalene … hvilken som helst / brems / akselerasjon flyttet / trykt / sleppt* | *pedaler … akselerasjon / brems*, *pedal … trykt / sleppt?* |
| Girkasser | *når girkasse … skifter gir / girer opp / girer ned / går i fri / revers / parkering* | *gir …*, *er girkasse … i fri / i revers / i et forovergir / i parkering?*, *gir for …* |
| Handbrekk | *når handbrekk … trekt / låst / løyst / sleppt* | *handbrekkraft …*, *er handbrekk … låst / løyst / trekt?* |
| Blinklys | *når blinklys … venstre blinklys / høyre blinklys / lys slås på / av* | *blinklys … venstre blinklys / høyre blinklys / lys er på?* |
| Togkontroll | *når kjørekontroller … trinn endret / økt / senket, kontroller på null, retningsvelger flyttet, spak sluppet* | *kjørekontroller … trekkraft / kjøretrinn / retningsvelger*, *er kjørekontroller … i forover / i revers / i fri / på trinn 0?* |

Rattet og pedalene har også blokken *lyd … av …*: den velger en av lydene deres for blokkene under **Lyder**. Detaljer: [Skjermkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Kjøretøysimulator {#vehicle-simulator}

Spesialkontroller gir bare rå inndata. **Kjøretøysimulatoren** gjør pedalene, girspaken og håndbrekket om til en modell som kjører som en bil: den akselererer med treghet, triller, bremser, rygger, skifter gir i D og holdes igjen av håndbrekket.

- **Hurtigkoblinger**: bruk inngangen [Kjøretøy](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Velg **Pedaler**, **Girspak** og **Handbrekk** fra dashboardet, **Kjøretøytype** (Bil, Terrengkjøretøy, Sportsbil, Lastebil) og **Utgang**: **Hastighet**, **Turtall (o/min)**, **Bremser** eller **På handbrekket**.
- **Logikkblokker**: når dashboardet har pedaler, girspak eller håndbrekk, dukker kategorien **Simulator** opp. Opprett et kjøretøy der (**Opprett kjøretøy**) og sett blokken *kjør* under en hendelse. Koble verdier til åpningene: *gass*, *brems*, *gir*, *av* (antall gir; blokken *gir for …* passer her), *handbrekk* og *låst*. Andre Simulator-blokker setter kjøretøytype, motortreghet og ryggehastighet, leser hastighet, turtall og gir, og reagerer når kjøretøyet starter, stopper, bremser eller skifter gir.

Slik kjører simulatoren:

- **Gass** får modellen til å akselerere med treghet; slipp, så triller modellen. **Brems** bremser den ned.
- **Uten girkasse** rygger modellen hvis du holder bremsen inne når den har stoppet.
- **Manuell girkasse**: R rygger, N kjører ikke. Hvert gir kan eventuelt begrense toppfarten.
- **Automatisk girkasse**: R rygger, N kjører ikke, P holder modellen som et låst håndbrekk. I D skifter simulatoren opp og ned av seg selv og viser giret på velgeren.
- **Handbrekk**: kraften legges til bremsingen; et låst håndbrekk kan holde modellen.
- **Kjøretøytype**: en lastebil er tyngre (mer treghet) og har luftbrems; en sportsbil reagerer raskt og rygger fortere.

De siste pedalene, girspaken eller håndbrekket kan ikke slettes så lenge programmet bruker Simulator-blokker.
