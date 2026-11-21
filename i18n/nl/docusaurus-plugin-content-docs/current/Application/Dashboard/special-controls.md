---
id: SpecialControls
title: Speciale bedieningselementen
description: "Stuurwiel, pedalen, versnellingspook, handrem, richtingaanwijzers en treinregelaar: hoe je ze gebruikt, hun instellingen, stijlen, waarden en blokken."
---

import Screenshot from '@site/src/components/Screenshot';

# Speciale bedieningselementen {#special-controls}

Speciale bedieningselementen zien eruit en werken als het echte ding: een stuurwiel, pedalen, een versnellingspook, een handrem, een richtingaanwijzerhendel en een rijschakelaar van een locomotief. Elk is een apart product: koop de bedieningselementen die je nodig hebt of krijg ze allemaal met [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Een dashboard met een stuurwiel, pedalen, een versnellingspook, een handrem, richtingaanwijzers en een treinregelaar" width={900} />

| Bedieningselement | Product | Naam op het dashboard | Geeft het programma |
|---|---|---|---|
| [Stuurwiel](#steering-wheel) | Stuurwiel | STWHEEL | stuurhoek, claxon |
| [Pedalen](#pedals) | Pedalen | PDLS | gaspedaal en rem |
| [Handgeschakelde bak](#gear-shifter) | Versnellingspook | GEAR | versnelling: R, N, 1…6 |
| [Automatische bak](#gear-shifter) | Versnellingspook | GEARA | keuzehendel: P, R, N, D |
| [Handrem](#handbrake) | Handrem | HBRK | kracht, aangetrokken |
| [Richtingaanwijzers](#turn-signals) | Richtingaanwijzers | STALK | linker richtingaanwijzer, rechter richtingaanwijzer, licht |
| [Treinregelaar](#train-controller) | Treinregelaar | TRTHR | rijstand, richting, trekkracht |

De **Draaiknop** is geen apart product: die hoort bij elk betaald thema. Zie [Soorten bedieningselementen](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Een speciaal bedieningselement toevoegen {#add-a-special-control}

1. Open het dashboard en tik op **+** (**Controller toevoegen**).
2. Scrol in de lijst met soorten bedieningselementen naar **Voertuig & speciaal** en selecteer een bedieningselement.
3. De strook met stijlen toont alle stijlen ervan. Kies er een en stel het bedieningselement in bij **Configureren**.
4. Tik op **Toevoegen aan dashboard**. Bij een bedieningselement dat je nog niet bezit, tik je op **Kopen** of **Alles met MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Het palet Controller toevoegen met het stuurwiel geselecteerd en de stijlen ervan in de strook met stijlen" width={900} />

## Stijlen {#looks}

Elk speciaal bedieningselement is er in veel **stijlen**. De meeste passen bij een betaald thema (Racen, Aura, Klassiek, Hologram enzovoort), zodat het stuurwiel, de versnellingspook en de handrem bij de rest van je dashboard passen. Je kunt de stijl altijd wijzigen: selecteer het bedieningselement en kies een andere bij **Uiterlijk** op het tabblad **Stijl**. De stijl verandert alleen de afbeelding: de waarden, de blokken en het programma blijven hetzelfde.

Sommige stijlen stellen ook de accentkleur passend in als je ze kiest.

## Instellingen van alle speciale bedieningselementen {#settings-of-all-special-controls}

- **Uiterlijk** (tabblad Stijl): zie hierboven.
- **Accentkleur** (tabblad Stijl): versnellingspook, handrem, richtingaanwijzers en treinregelaar.
- **Lock de controller** en **Interactiviteit** (tabblad Instellingen), zoals bij elk bedieningselement. Zie [Eigenschappen van bedieningselementen](/docs/Application/Dashboard/ControlProperties).

## Stuurwiel {#steering-wheel}

Zet een vinger op het stuur en draai het rond het midden. Als je loslaat, veert het terug naar het midden. Druk op het midden van het stuur om te claxonneren: dan draait het stuur niet.

**Instellingen**

- **Stuurhoek** (20–120°, standaard 60°): hoe ver je het stuur draait tot de volle uitslag. Dit verandert de waarden die het programma krijgt niet.
- **Geluidseffecten**: het claxongeluid en de geluiden die het programma via het stuur afspeelt. Het geluid van de app moet aan staan.

**Waarden**: de stuurhoek van −100 (volledig links) via 0 tot 100 (volledig rechts); de claxon is 100 zolang je hem vasthoudt, anders 0.

**Stijlen**: Off-road voertuig, Zware vrachtwagen, Supercar, Vintage hout, Race-stuur, Rally suède, Off-road werkpaard, Concept gloed, Vrachtwagen, Gezinssedan, Stadsauto, Strandbuggy, Klassieke 4x4, Bouwmachines, Hi-Fi Audio, Aura, Bouwstenen, Circuitkern, Diepe ruimte, Zwaar transport, Neo Orbit, Terreinwagencabine, Racen, Rock Crawler, Tactisch, Klassiek, Zonsondergang, Miami, Hightech, Hologram.

**Geluiden** voor het programma: Autoclaxon, Vrachtwagenhoorn, Sportwagentoeter.

**Snelle koppelingen**: de invoer [Stuur](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) met de kanalen **Stuurhoek** en **Claxon**.

## Pedalen {#pedals}

Het rempedaal zit links, het gaspedaal rechts. Druk met een vinger op een pedaal: hoe hoger je vinger op het pedaal staat, hoe verder het is ingetrapt. Onderaan is het licht ingetrapt, bovenaan volledig. Laat los en het pedaal komt weer omhoog. Je kunt beide pedalen tegelijk indrukken.

**Instellingen**: **Geluidseffecten**: laat het programma de pedaalgeluiden afspelen. Het geluid van de app moet aan staan.

**Waarden**: het gaspedaal en de rem, elk van 0 tot 100.

**Stijlen**: Off-road voertuig, Zware vrachtwagen, Supercar, Vintage chroom, Carbon & rood, Race geperforeerd, Off-road grip, Concept gloed, Vrachtwagen, Gezinssedan, Stadsauto, Strandbuggy, Klassieke 4x4, Bouwmachines, Hi-Fi Audio, Aura, Bouwstenen, Circuitkern, Diepe ruimte, Zwaar transport, Neo Orbit, Terreinwagencabine, Racen, Rock Crawler, Tactisch, Klassiek, Zonsondergang, Miami, Hightech, Hologram.

**Geluiden** voor het programma: Autorem, Sportwagenrem, Luchtrem van vrachtwagen, Achteruitrijsignaal.

**Snelle koppelingen**: de invoer [Pedalen](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) met de kanalen **Gaspedaal** en **Rempedaal**.

:::tip Pedalen alleen maken nog geen auto
De pedalen geven alleen aan hoe ver elk pedaal is ingetrapt. Stuurt een rij het gaspedaal rechtstreeks naar een motor, dan draait de motor precies zo hard als het pedaal is ingetrapt. Wil je een model dat geleidelijk optrekt, uitrolt, remt en achteruitrijdt, gebruik dan de [voertuigsimulator](#vehicle-simulator).
:::

## Versnellingspook {#gear-shifter}

Het product **Versnellingspook** heeft twee bedieningselementen: een **Handgeschakelde bak** en een **Automatische bak**.

### Handgeschakelde bak {#manual-gearbox}

Een H-schakelpatroon met achteruit en maximaal zes vooruitversnellingen. Sleep de pookknop langs de middelste rij en omhoog of omlaag in een versnelling. Als je loslaat, klikt de knop in de dichtstbijzijnde versnelling of terug in neutraal.

- **Aantal versnellingen** (2–6, standaard 6, tabblad Instellingen): het schakelpatroon past zich aan. Achteruit zit altijd in de meest linkse kolom, neutraal in het midden.
- **Waarden**: −1 = achteruit (R), 0 = neutraal (N), 1…6 = vooruitversnellingen.

### Automatische bak {#automatic-gearbox}

Een keuzehendel met vier standen: **P** (parkeren), **R** (achteruit), **N** (neutraal) en **D** (rijden). Hoe je hem bedient, hangt af van de stijl:

| Keuzehendel | Zo gebruik je hem | Stijlen |
|---|---|---|
| Hendel | schuif de hendel langs de sleuf; hij stopt bij de dichtstbijzijnde stand | Hightech |
| Draaiknop | draai de knop met een vinger; hij klikt in P, R, N of D | Klassiek, Diepe ruimte, Tactisch, Bouwmachines, Hi-Fi Audio, Aura, Circuitkern, Rock Crawler, Terreinwagencabine, Neo Orbit, Terreinwagen, Werkpaard, Concept, Sedan, Stadsauto, Klassieke 4x4 |
| Knoppen | tik op P, R, N of D | Racen, Zwaar transport, Bouwstenen, Zware vrachtwagen, Retro, Rally, Supercar, Formule, Langeafstand, Buggy, Zonsondergang, Miami, Hologram |

- **Aantal versnellingen** (2–8, standaard 6, tabblad Instellingen): door hoeveel versnellingen de [voertuigsimulator](#vehicle-simulator) in D schakelt. Kiest de simulator een versnelling, dan toont de keuzehendel die, bijvoorbeeld **D3**.
- **Waarden**: −2 = P, −1 = R, 0 = N, 1 = D. Alle drie de keuzehendels geven dezelfde waarden, dus het programma werkt met elke stijl.

Beide versnellingsbakken hebben dezelfde stijlen: Klassiek, Racen, Diepe ruimte, Tactisch, Zwaar transport, Bouwmachines, Hi-Fi Audio, Aura, Circuitkern, Rock Crawler, Terreinwagencabine, Bouwstenen, Neo Orbit, Zware vrachtwagen, Retro, Rally, Terreinwagen, Supercar, Formule, Werkpaard, Concept, Langeafstand, Sedan, Stadsauto, Buggy, Zonsondergang, Klassieke 4x4, Miami, Hightech, Hologram.

**Snelle koppelingen**: de invoer [Versnellingspook](/docs/Application/Links/Blocks/InputBlocks#controller-gear) met de kanalen **Versnelling** (handgeschakeld: de versnelling ten opzichte van het aantal versnellingen, achteruit negatief; automatisch: de richting) en **Richting (R − / vooruit +)**: −1 in achteruit, 0 in neutraal en parkeren, +1 in elke vooruitversnelling.

## Handrem {#handbrake}

Een handremhendel. Pak de hendel bij de greep en trek hem omlaag. De remkracht volgt hoe ver je trekt. Laat los en de hendel veert terug.

Om hem te **vergrendelen** trek je de hendel helemaal aan en schuif je je vinger langs de hendel naar de voet: de greep schuift omlaag en de hendel blijft vergrendeld. Om een vergrendelde hendel te **ontgrendelen**, tik je op het bedieningselement of sleep je de hendel terug.

**Waarden**: de kracht van 0 tot 100, en of de hendel vergrendeld is.

**Stijlen**: Klassiek, Rally, Zware vrachtwagen, Retro, Diepe ruimte, Tactisch, Aura, Zwaar transport, Bouwmachines, Hi-Fi Audio, Neo Orbit, Terreinwagencabine, Racen, Bouwstenen, Circuitkern, Rock Crawler, Terreinwagen, Supercar, Formule, Werkpaard, Concept, Langeafstand, Sedan, Stadsauto, Buggy, Zonsondergang, Klassieke 4x4, Miami, Hightech, Hologram.

**Snelle koppelingen**: de invoer [Handrem](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) met de kanalen **Handrem aangetrokken** (aan/uit, als een schakelaar) en **Handremkracht**.

## Richtingaanwijzers {#turn-signals}

Een richtingaanwijzerhendel met een lichtschakelaar.

- Sleep de hendel **omhoog** voor de linker richtingaanwijzer en **omlaag** voor de rechter. Hij blijft staan waar je hem laat; sleep hem terug naar het midden om de richtingaanwijzer uit te zetten.
- **Tik** op de hendel of op de koplampknop om het licht aan of uit te zetten. De hendel beweegt daarbij niet.

**Instellingen**

- **Pictogram: left**, **Pictogram: light**, **Pictogram: right** (tabblad Stijl): de pictogrammen van de controlelampjes.
- **Uitgangen van de richtingaanwijzers knipperen** (tabblad Instellingen, standaard aan): de uitgangen van de richtingaanwijzers knipperen samen met het lampje op de hendel, zodat een lamp die erop is aangesloten vanzelf knippert. Staat deze optie uit, dan blijven de uitgangen constant aan zolang de richtingaanwijzer aan staat. De blokken zien altijd de constante toestand.

**Waarden**: linker richtingaanwijzer, rechter richtingaanwijzer en licht, elk aan of uit.

**Stijlen**: Klassiek, Racen, Diepe ruimte, Tactisch, Zwaar transport, Bouwmachines, Hi-Fi Audio, Aura, Circuitkern, Rock Crawler, Terreinwagencabine, Bouwstenen, Neo Orbit, Zware vrachtwagen, Retro, Rally, Terreinwagen, Supercar, Formule, Werkpaard, Concept, Langeafstand, Sedan, Stadsauto, Buggy, Zonsondergang, Klassieke 4x4, Miami, Hightech, Hologram.

**Snelle koppelingen**: de invoer [Richtingaanwijzers](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) met de kanalen **Richtingaanwijzers (links − / rechts +)** (twee lampen met tegengestelde polariteit op één poort), **Linker richtingaanwijzer**, **Rechter richtingaanwijzer** en **Licht**.

## Treinregelaar {#train-controller}

Een rijschakelaar van een locomotief met een gashendel en een rijrichtingschakelaar.

- **Gashendel**: sleep de hendel omhoog of omlaag. Hij heeft 8 rijstanden (0–8) en blijft staan op de rijstand waar je hem laat.
- **Rijrichtingschakelaar**: sleep de knop omhoog voor **vooruit** of omlaag voor **achteruit**; het midden is **neutraal**. De knop springt van stand naar stand en blijft nooit daartussen staan. Net als in een echte cabine beweegt hij alleen als de gashendel op 0 staat.

**Waarden**: de rijstand (0–8), de rijrichtingschakelaar (1 = vooruit, 0 = neutraal, −1 = achteruit) en de **trekkracht**: rijstand ÷ 8 × 100 met het teken van de richting, van −100 tot 100. Met de trekkracht kun je een treinmotor rechtstreeks aansturen.

**Stijlen**: Origineel, Bouwmachines, Hi-Fi Audio, Aura, Bouwstenen, Buggy, Circuitkern, Stadsauto, Klassiek, Concept, Diepe ruimte, Terreinwagen, Zwaar transport, Klassieke 4x4, Zware vrachtwagen, Miami, Neo Orbit, Supercar, Werkpaard, Terreinwagencabine, Racen, Rally, Rock Crawler, Sedan, Zonsondergang, Tactisch, Langeafstand, Retro, Formule, Hightech, Hologram.

**Snelle koppelingen**: de invoer [Schuifregelaar](/docs/Application/Links/Blocks/InputBlocks#controller-train); die geeft de trekkracht.

## Blokken {#blocks}

Elk speciaal bedieningselement voegt eigen blokken toe aan de categorie **Dashboardbedieningselementen** bij Logicablokken:

| Bedieningselement | Gebeurtenissen | Waarden |
|---|---|---|
| Stuurwiel | *wanneer het stuur … is bewogen / ingedrukt / vrijgegeven* | *stuurwiel …*, *is stuurwiel … ingedrukt / vrijgegeven?* |
| Pedalen | *wanneer de pedalen … elke / rem / versnelling is bewogen / ingedrukt / vrijgegeven* | *pedalen … versnelling / rem*, *is pedaal … ingedrukt / vrijgegeven?* |
| Versnellingsbakken | *wanneer versnellingsbak … schakelt / schakelt op / schakelt terug / schakelt naar neutraal / schakelt in zijn achteruit / schakelt naar parkeren* | *versnelling …*, *is versnellingsbak … in neutraal / in zijn achteruit / in een vooruitversnelling / in parkeerstand?*, *versnellingen van …* |
| Handrem | *wanneer handrem … is getrokken / vergrendeld / ontgrendeld / losgelaten* | *handremkracht …*, *is handrem … vergrendeld / ontgrendeld / getrokken?* |
| Richtingaanwijzers | *wanneer richtingaanwijzers … linker richtingaanwijzer / rechter richtingaanwijzer / licht gaat aan / gaat uit* | *richtingaanwijzers … linker richtingaanwijzer / rechter richtingaanwijzer / licht is aan?* |
| Treinregelaar | *wanneer rijschakelaar … rijstand gewijzigd / rijstand verhoogd / rijstand verlaagd, rijschakelaar op nul, rijrichtingschakelaar verzet, hendel losgelaten* | *rijschakelaar … trekkracht / rijstand / rijrichtingschakelaar*, *is rijschakelaar … vooruit / achteruit / in neutraal / op rijstand 0?* |

Het stuurwiel en de pedalen hebben ook het blok *geluid … van …*: dat kiest een van hun geluiden voor de blokken in **Geluiden**. Details: [Dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Voertuigsimulator {#vehicle-simulator}

Speciale bedieningselementen geven alleen ruwe invoer. De **voertuigsimulator** maakt van de pedalen, de versnellingspook en de handrem een model dat rijdt als een auto: het trekt op met traagheid, rolt uit, remt, rijdt achteruit, schakelt in D en blijft staan op de handrem.

- **Snelle koppelingen**: gebruik de invoer [Voertuig](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Kies de **Pedalen**, de **Versnellingspook** en de **Handrem** van je dashboard, het **Voertuigtype** (Auto, Terreinwagen, Sportwagen, Vrachtwagen) en de **Uitvoer**: **Snelheid**, **Toerental (tpm)**, **Remmen** of **Op de handrem**.
- **Logicablokken**: als het dashboard pedalen, een versnellingspook of een handrem heeft, verschijnt de categorie **Simulator**. Maak daar een voertuig (**Voertuig aanmaken**) en zet het blok *rijden* onder een gebeurtenis. Zet waarden in de vakken ervan: *gas*, *rem*, *versnelling*, *van* (aantal versnellingen; het blok *versnellingen van …* past hier), *handrem* en *aangetrokken*. Met andere Simulator-blokken stel je het voertuigtype, de motortraagheid en de achteruitsnelheid in, lees je de snelheid, het toerental en de versnelling uit, en reageer je als het voertuig wegrijdt, stopt, remt of schakelt.

Zo rijdt de simulator:

- **Gaspedaal** laat het model met traagheid optrekken; laat je los, dan rolt het model uit. **Rem** remt het af.
- **Zonder versnellingsbak** gaat het model achteruitrijden als je de rem ingedrukt houdt terwijl het stilstaat.
- **Handgeschakelde bak**: R rijdt achteruit, N rijdt niet. Optioneel begrenst elke versnelling de topsnelheid.
- **Automatische bak**: R rijdt achteruit, N rijdt niet, P houdt het model vast als een aangetrokken handrem. In D schakelt de simulator zelf op en terug en toont hij de versnelling op de keuzehendel.
- **Handrem**: de kracht ervan komt bij het remmen; een aangetrokken handrem kan het model vasthouden.
- **Voertuigtype**: een vrachtwagen is zwaarder (meer traagheid) en heeft een luchtrem; een sportwagen reageert snel en rijdt sneller achteruit.

De laatste pedalen, versnellingspook of handrem kunnen niet worden verwijderd zolang het programma Simulator-blokken gebruikt.
