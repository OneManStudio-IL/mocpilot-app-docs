---
id: SpecialControls
title: Specialkontroller
description: "Rat, pedaler, gearstang, håndbremse, blinklys og togkontrol: sådan bruger du dem, deres indstillinger, udseender, værdier og blokke."
---

import Screenshot from '@site/src/components/Screenshot';

# Specialkontroller {#special-controls}

Specialkontroller ser ud og virker som den ægte vare: et rat, pedaler, en gearstang, en håndbremse, en blinklysarm, en fordelergearkasse og en lokomotivkontrol. Hver af dem er et separat produkt: køb dem, du har brug for, eller få dem alle med [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Et dashboard med rat, pedaler, gearstang, håndbremse, blinklys og togkontrol" width={900} />

| Kontrol | Produkt | Navn på dashboardet | Giver programmet |
|---|---|---|---|
| [Rat](#steering-wheel) | Rat | STWHEEL | styrevinkel, horn |
| [Pedaler](#pedals) | Pedaler | PDLS | speeder og bremse |
| [Manuel gearkasse](#gear-shifter) | Gearstang | GEAR | gear: R, N, 1…6 |
| [Automatisk gearkasse](#gear-shifter) | Gearstang | GEARA | gearvælger: P, R, N, D |
| [Håndbremse](#handbrake) | Håndbremse | HBRK | kraft, låst |
| [Blinklys](#turn-signals) | Blinklys | STALK | venstre blinklys, højre blinklys, lys |
| [Fordelergearkasse](#transfer-case) | Fordelergearkasse | XFER | køremodus: 2H, 4H, N, 4L; differentialespærrer |
| [Togkontrol](#train-controller) | Togkontrol | TRTHR | køretrin, retning, trækkraft |

**Drejeknap** er ikke et separat produkt: den følger med alle betalte temaer. Se [Kontroltyper](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Tilføj en specialkontrol {#add-a-special-control}

1. Åbn dashboardet, og tryk på **+** (**Tilføj controller**; på en computer **+ Controller**).
2. Rul ned til **Køretøj og special** på listen over kontroltyper, og vælg en kontrol.
3. Striben med udseender viser alle dens udseender. Vælg et, og indstil derefter kontrollen under **Konfigurer**.
4. Tryk på **Føj til dashboard**. For en kontrol, du ikke ejer endnu, trykker du på **Køb** eller **Alt med MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paletten Tilføj controller med rattet valgt og dets udseender i striben med udseender" width={900} />

## Udseender {#looks}

Alle specialkontroller findes i mange **udseender**. De fleste af dem passer til et betalt tema (Racing, Aura, Klassisk, Hologram og så videre), så rattet, gearstangen og håndbremsen kan passe til resten af dit dashboard. Du kan til enhver tid skifte udseende: vælg kontrollen, og vælg et andet under **Udseende** på fanen **Stil**. Udseendet ændrer kun billedet: værdierne, blokkene og programmet forbliver de samme.

Nogle udseender sætter også accentfarven, så den passer, når du vælger dem.

## Indstillinger for alle specialkontroller {#settings-of-all-special-controls}

- **Udseende** (fanen Stil): se ovenfor.
- **Accentfarve** (fanen Stil): gearstang, håndbremse, blinklys, fordelergearkasse og togkontrol.
- **Lås controlleren** og **Interaktivitet** (fanen Indstillinger), som på alle kontroller. Se [Kontrollens egenskaber](/docs/Application/Dashboard/ControlProperties).

## Rat {#steering-wheel}

Sæt en finger på rattet, og drej det rundt om midten. Når du slipper, fjedrer det tilbage til midten. Tryk på midten af rattet for at dytte i hornet: det drejer ikke rattet.

**Indstillinger**

- **Ratvinkel** (20–120°, standard 60°): hvor langt du skal dreje rattet for at nå fuldt udslag. Det ændrer ikke de værdier, programmet får.
- **Lydeffekter**: hornets lyd og de lyde, programmet afspiller fra rattet. Appens lyd skal være slået til.

**Værdier**: styrevinklen fra −100 (helt til venstre) over 0 til 100 (helt til højre); hornet er 100, mens du holder det, ellers 0.

**Udseender**: Off-road køretøj, Tung lastbil, Superbil, Retro træ, Racerrat, Rally ruskind, Off-road brugs, Koncept glød, Lastvogn, Familiesedan, Bybil, Klitbuggy, Klassisk 4x4, Byggeteknologi, Hi-Fi lyd, Aura, Klodser, Kredsløbskerne, Dybt rum, Tungtransport, Neo Orbit, Terrængående førerhus, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgang, Miami, Hi-tech, Hologram.

**Lyde** til programmet: Bilhorn, Lastbilhorn, Sportsvognshorn.

**Hurtige forbindelser**: inputtet [Rat](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) med kanalerne **Styrevinkel** og **Horn**.

## Pedaler {#pedals}

Bremsepedalen er til venstre, speederen til højre. Tryk på en pedal med en finger: jo højere oppe på pedalen din finger er, jo hårdere er den trykket ned. Nær bunden er den trykket let; nær toppen helt. Slip, og pedalen kommer op igen. Du kan trykke på begge pedaler på én gang.

**Indstillinger**: **Lydeffekter**: lader programmet afspille pedallydene. Appens lyd skal være slået til.

**Værdier**: speeder og bremse, hver fra 0 til 100.

**Udseender**: Off-road køretøj, Tung lastbil, Superbil, Retro krom, Kulfiber & rød, Race boret, Off-road greb, Koncept glød, Lastvogn, Familiesedan, Bybil, Klitbuggy, Klassisk 4x4, Byggeteknologi, Hi-Fi lyd, Aura, Klodser, Kredsløbskerne, Dybt rum, Tungtransport, Neo Orbit, Terrængående førerhus, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgang, Miami, Hi-tech, Hologram.

**Lyde** til programmet: Bilbremse, Sportsvognsbremse, Lastbilens luftbremse, Bakalarm.

**Hurtige forbindelser**: inputtet [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) med kanalerne **Speederpedal** og **Bremsepedal**.

:::tip Pedaler alene gør ikke en bil
Pedalerne giver kun, hvor hårdt hver af dem er trykket ned. Hvis en række sender speederen direkte til en motor, kører motoren præcis så meget, som pedalen er trykket ned. For at få en model, der accelererer gradvist, triller, bremser og bakker, skal du bruge [køretøjssimulatoren](#vehicle-simulator).
:::

## Gearstang {#gear-shifter}

Produktet **Gearstang** har to kontroller: en **Manuel gearkasse** og en **Automatisk gearkasse**.

### Manuel gearkasse {#manual-gearbox}

En H-kulisse med bakgear og op til seks fremadgear. Træk knoppen langs den midterste række og op eller ned i et gear. Når du slipper, klikker knoppen på plads i det nærmeste gear eller tilbage i frigear.

- **Antal gear** (2–6, standard 6, fanen Indstillinger): kulissen ændrer sig med det. Bakgearet er altid i kolonnen længst til venstre, frigear i midten.
- **Værdier**: −1 = bakgear (R), 0 = frigear (N), 1…6 = fremadgear.

### Automatisk gearkasse {#automatic-gearbox}

En gearvælger med fire positioner: **P** (parkering), **R** (bak), **N** (neutral) og **D** (kør). Hvordan du betjener den, afhænger af udseendet:

| Gearvælger | Sådan bruger du den | Udseender |
|---|---|---|
| Håndtag | skub håndtaget langs sporet; det stopper ved den nærmeste position | Hi-tech |
| Drejeknap | drej knappen med en finger; den klikker ind på P, R, N eller D | Klassisk, Dybt rum, Taktisk, Byggeteknologi, Hi-Fi lyd, Aura, Kredsløbskerne, Rock Crawler, Terrængående førerhus, Neo Orbit, Terrængående, Arbejdshest, Koncept, Sedan, Bybil, Klassisk 4x4 |
| Knapper | tryk på P, R, N eller D | Racing, Tungtransport, Klodser, Tung lastbil, Retro, Rally, Superbil, Formel, Langturslastbil, Buggy, Solnedgang, Miami, Hologram |

- **Antal gear** (2–8, standard 6, fanen Indstillinger): hvor mange gear [køretøjssimulatoren](#vehicle-simulator) skifter igennem i D. Når simulatoren vælger et gear, viser gearvælgeren det, for eksempel **D3**.
- **Værdier**: −2 = P, −1 = R, 0 = N, 1 = D. Alle tre gearvælgere giver de samme værdier, så programmet virker med ethvert udseende.

Begge gearkasser har de samme udseender: Klassisk, Racing, Dybt rum, Taktisk, Tungtransport, Byggeteknologi, Hi-Fi lyd, Aura, Kredsløbskerne, Rock Crawler, Terrængående førerhus, Klodser, Neo Orbit, Tung lastbil, Retro, Rally, Terrængående, Superbil, Formel, Arbejdshest, Koncept, Langturslastbil, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Hi-tech, Hologram.

**Hurtige forbindelser**: inputtet [Gearstang](/docs/Application/Links/Blocks/InputBlocks#controller-gear) med kanalerne **Gear** (manuel: gearet i forhold til antallet af gear, bakgear negativt; automatisk: retningen) og **Retning (R − / frem +)**: −1 i bakgear, 0 i frigear og parkering, +1 i ethvert fremadgear.

## Håndbremse {#handbrake}

Et håndbremsehåndtag. Tag fat i håndtagets greb, og træk det ned. Bremsekraften følger, hvor langt du trækker. Slip, og håndtaget fjedrer tilbage.

For at **låse** det trækker du håndtaget helt ned og lader derefter fingeren glide langs håndtaget mod dets fod: grebet glider ned, og håndtaget forbliver låst. For at **udløse** et låst håndtag trykker du på kontrollen eller trækker håndtaget tilbage.

**Værdier**: kraften fra 0 til 100, og om håndtaget er låst.

**Udseender**: Klassisk, Rally, Tung lastbil, Retro, Dybt rum, Taktisk, Aura, Tungtransport, Byggeteknologi, Hi-Fi lyd, Neo Orbit, Terrængående førerhus, Racing, Klodser, Kredsløbskerne, Rock Crawler, Terrængående, Superbil, Formel, Arbejdshest, Koncept, Langturslastbil, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Hi-tech, Hologram.

**Hurtige forbindelser**: inputtet [Håndbremse](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) med kanalerne **Håndbremse låst** (til/fra, som en kontakt) og **Håndbremsekraft**.

## Blinklys {#turn-signals}

En blinklysarm med lyskontakt.

- Træk armen **op** for venstre blinklys og **ned** for højre blinklys. Den bliver, hvor du efterlader den; træk den tilbage til midten for at slukke blinklyset.
- **Tryk** på armen eller forlygteknappen for at tænde eller slukke lyset. Det flytter ikke armen.

**Indstillinger**

- **Ikon: venstre**, **Ikon: lys**, **Ikon: højre** (fanen Stil): ikonerne for kontrollamperne.
- **Blinklysudgange blinker** (fanen Indstillinger, slået til som standard): blinklysudgangene blinker sammen med lampen på armen, så et lys, der er forbundet til dem, blinker af sig selv. Når indstillingen er slået fra, lyser udgangene konstant, mens blinklyset er tændt. Blokkene ser altid den konstante tilstand.

**Værdier**: venstre blinklys, højre blinklys og lys, hver tændt eller slukket.

**Udseender**: Klassisk, Racing, Dybt rum, Taktisk, Tungtransport, Byggeteknologi, Hi-Fi lyd, Aura, Kredsløbskerne, Rock Crawler, Terrængående førerhus, Klodser, Neo Orbit, Tung lastbil, Retro, Rally, Terrængående, Superbil, Formel, Arbejdshest, Koncept, Langturslastbil, Sedan, Bybil, Buggy, Solnedgang, Klassisk 4x4, Miami, Hi-tech, Hologram.

**Hurtige forbindelser**: inputtet [Blinklys](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) med kanalerne **Blinklys (venstre − / højre +)** (to lys med modsat polaritet på én port), **Venstre blinklys**, **Højre blinklys** og **Lys**.

## Fordelergearkasse {#transfer-case}

Fordelergearkassen i en terrængående bil bestemmer, hvilke hjul motoren trækker. Kontrollen har en vælger med fire positioner og kontakter til differentialespærrerne:

| Position | Betydning |
|---|---|
| **2H** | tohjulstræk: kun baghjulene trækker, til almindelig vej |
| **4H** | firehjulstræk: alle hjul trækker, til mudder, sand og sne |
| **N** | neutral: motoren er koblet fra hjulene |
| **4L** | firehjulstræk med **lavgear**: langsomt og kraftigt, til stejle stigninger og rock crawling |

**Differentialespærrer** får hjulene på en aksel (**for**, **bag**) eller de to aksler (**center**) til at dreje sammen, så et hjul, der har mistet grebet, ikke bare spinner.

<Screenshot name="transfer-case-dashboard" alt="Fordelergearkassen på et dashboard: vælgeren, spærrekontakterne og displayet" width={700} />

### Sådan bruger du den {#transfer-case-use}

- **Vælger**: positioner oppefra og ned: 2H, 4H, N, 4L. Afhængigt af udseendet er det en **skyder** (en riflet knap i et spor: skub den langs sporet; når du slipper, springer den til den nærmeste position) eller en **drejeknap** (drej den; den klikker på plads i positionerne). Sporet er lige, så fra 4H kommer du kun til 4L gennem N, som i en rigtig fordelergearkasse med håndtag.
- **Spærrer**: en række kontakter til for-, center- og bagspærren: vippekontakter med lampe eller låsende knapper, hvis ring lyser i accentfarven, afhængigt af udseendet. Tryk på en kontakt for at slå spærren til, og tryk igen for at slå den fra.
- **Display**: mærkaterne 2H, 4H, N og 4L ved vælgeren ændrer sig ikke; displayet viser den valgte position og de spærrer, der er slået til (**F**, **C**, **R**), i accentfarven.

### Indstillinger {#transfer-case-settings}

På fanen **Indstillinger**:

- **Neutral (N)** (slået til som standard): slå den fra for en vælger med kun 2H, 4H og 4L.
- **Fordifferentialespærre** (til), **Centerdifferentialespærre** (fra), **Bagdifferentialespærre** (til): hvilke spærrekontakter kontrollen viser. Er der færre end tre, rykker de ind mod midten af rækken.
- **For- og centerspærre kun i 4WD** (til): for- og centerspærren virker kun i 4H og 4L, som i en rigtig bil. I 2H bliver et tryk på dem afvist (kontakten blinker rødt), og et skift til 2H slår dem fra. N lader dem være, som de er. Bagspærren virker i alle positioner.

### Værdier {#transfer-case-values}

- **Positionen**: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L.
- **Firehjulstræk**: til i 4H og 4L. **Lavgear**: til i 4L.
- Hver spærre: til eller fra.

**Udseender**: der er et udseende til hvert tema, opkaldt efter det: Klassisk, Klassisk 4x4, Terrængående og et til hvert betalt tema. Nogle udseender har en skyder, andre en drejeknap. **Hologram** tegner hele kontrollen som en ensfarvet kontur i accentfarven.

**Hurtige forbindelser**: inputtet [Fordelergearkasse](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) med kanalerne **Firehjulstræk**, **Lavgear**, **Fordifferentialespærre**, **Centerdifferentialespærre** og **Bagdifferentialespærre** (hver til/fra, som en kontakt). Inputtet [Køretøj](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) tager hele fordelergearkassen i sin indstilling **Fordelergearkasse**.

## Togkontrol {#train-controller}

En lokomotivkontrol med et regulatorhåndtag og en retningsvælger.

- **Regulator**: træk håndtaget op eller ned. Det har 8 køretrin (0–8) og bliver på det trin, hvor du efterlader det.
- **Retningsvælger**: træk knoppen op for **fremad** eller ned for **bak**; midten er **neutral**. Knoppen springer fra position til position og stopper aldrig midt imellem. Som i et rigtigt førerhus bevæger den sig kun, når regulatoren står på 0.

**Værdier**: køretrinnet (0–8), retningsvælgeren (1 = fremad, 0 = neutral, −1 = bak) og **trækkraften**: trin ÷ 8 × 100 med retningens fortegn, fra −100 til 100. Trækkraften kan styre en togmotor direkte.

**Udseender**: Original, Byggeteknologi, Hi-Fi lyd, Aura, Klodser, Buggy, Kredsløbskerne, Bybil, Klassisk, Koncept, Dybt rum, Terrængående, Tungtransport, Klassisk 4x4, Tung lastbil, Miami, Neo Orbit, Superbil, Arbejdshest, Terrængående førerhus, Racing, Rally, Rock Crawler, Sedan, Solnedgang, Taktisk, Langturslastbil, Retro, Formel, Hi-tech, Hologram.

**Hurtige forbindelser**: inputtet [Skyder](/docs/Application/Links/Blocks/InputBlocks#controller-train); det giver trækkraften.

## Blokke {#blocks}

Hver specialkontrol tilføjer sine egne blokke til kategorien **Skærmkontrollere** i Logikblokke:

| Kontrol | Hændelser | Værdier |
|---|---|---|
| Rat | *når rat … flyttet / trykket / sluppet* | *rat …*, *rat … trykket / sluppet?* |
| Pedaler | *når pedaler … enhver / bremse / acceleration flyttet / trykket / sluppet* | *pedaler … acceleration / bremse*, *pedal … trykket / sluppet?* |
| Gearkasser | *når gearkasse … skifter gear / skifter op / skifter ned / skifter til frigear / bakgear / parkering* | *gear …*, *er gearkasse … i frigear / i bakgear / i et fremadgear / i parkering?*, *gear af …* |
| Håndbremse | *når håndbremse … trukket / låst / udløst / sluppet* | *håndbremsekraft …*, *er håndbremse … låst / udløst / trukket?* |
| Blinklys | *når blinklys … venstre blinklys / højre blinklys / lys tændes / slukkes* | *blinklys … venstre blinklys / højre blinklys / lys er tændt?* |
| Fordelergearkasse | *når fordelergearkasse … 2H / 4H / N / 4L / firehjulstræk / lavgear / forreste spærre / centerspærre / bageste spærre slås til / slås fra* | *fordelergearkasse … [det samme] er slået til?*, *fordelergearkassens position …* |
| Togkontrol | *når køreregulator … trin ændret / hævet / sænket, regulator lukket, retningsvælger flyttet, håndtag sluppet* | *køreregulator … trækkraft / køretrin / retningsvælger*, *er køreregulator … i fremad / i bak / i neutral / på trin 0?* |

Rattet og pedalerne har også blokken *lyd … af …*: den vælger en af deres lyde til blokkene under **Lyde**. Detaljer: [Skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Køretøjssimulator {#vehicle-simulator}

Specialkontroller giver kun rå input. **Køretøjssimulatoren** gør pedalerne, gearstangen og håndbremsen til en model, der kører som en bil: den accelererer med inerti, triller, bremser, bakker, skifter gear i D og holder stille på håndbremsen.

- **Hurtige forbindelser**: brug inputtet [Køretøj](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Vælg **Pedaler**, **Gearstang**, **Håndbremse** og **Fordelergearkasse** fra dit dashboard, **Køretøjstype** (Bil, Terrængående køretøj, Sportsvogn, Lastbil) og **Output**: **Hastighed**, **Motoromdrejninger (rpm)**, **Bremser** eller **På håndbremsen**.
- **Logikblokke**: når dashboardet har pedaler, en gearstang eller en håndbremse, vises kategorien **Simulator**. Opret et køretøj der (**Opret køretøj**), og sæt blokken *kør* under en hændelse. Sæt værdier i dens stik: *speeder*, *bremse*, *gear*, *af* (antal gear; blokken *gear af …* passer her), *håndbremse*, *låst* og *fordelergearkasse* (blokken *fordelergearkassens position …* passer her; lad stikket være tomt, hvis modellen ikke har en fordelergearkasse). Andre Simulator-blokke sætter køretøjstypen, motorens inerti og bakhastigheden, læser hastigheden, motoromdrejningerne og gearet og reagerer, når køretøjet starter, stopper, bremser eller skifter gear.

Sådan kører simulatoren:

- **Speederen** får modellen til at accelerere med inerti; slip den, og modellen triller. **Bremsen** sænker farten.
- **Uden gearkasse** begynder modellen at bakke, hvis du holder bremsen, når den er stoppet.
- **Manuel gearkasse**: R bakker, N kører ikke. Hvert gear kan eventuelt begrænse topfarten.
- **Automatisk gearkasse**: R bakker, N kører ikke, P holder modellen som en låst håndbremse. I D skifter simulatoren selv op og ned og viser gearet på gearvælgeren.
- **Håndbremse**: dens kraft lægges til bremsningen; en låst håndbremse kan holde modellen.
- **Fordelergearkasse**: 2H og 4H kører som uden fordelergearkasse. **N** kører ikke: modellen triller, og bremsen sænker kun farten uden at bakke. **4L** begrænser farten til 40 % fremad og i bak, med tilsvarende højere motoromdrejninger; en model, der kører hurtigere, sænker farten til grænsen, når du skifter til 4L. Differentialespærrerne ændrer ikke, hvordan simulatoren kører: de er kun output fra kontrollen.
- **Køretøjstype**: en lastbil er tungere (mere inerti) og har luftbremse; en sportsvogn reagerer hurtigt og bakker hurtigere.

De sidste pedaler, den sidste gearstang eller håndbremse kan ikke slettes, mens programmet bruger Simulator-blokke.
