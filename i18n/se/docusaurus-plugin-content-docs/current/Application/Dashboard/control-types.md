---
id: ControlTypes
title: Kontrolltyper
description: "Joystick, riktad pad, skjutreglage, vridratt, knappar, brytare, stegswitchar, monitorer och specialkontroller."
---

# Kontrolltyper

Varje [tema](/docs/Application/Themes/ThemesOverview) ritar samma uppsättning kontrolltyper i sin egen stil. Det kostnadsfria temat **Grundläggande** har nio av dem; varje betalt tema lägger till **Vridratt** och tre grafiska monitorer. Rattar, pedaler, växelspakar och de andra [specialkontrollerna](/docs/Application/Dashboard/SpecialControls) är separata produkter.

| Kontroll | Namn på instrumentpanelen | Ger programmet | Finns i |
|---|---|---|---|
| Joystick | JOY | X- och Y-axel | alla teman |
| Riktad pad | DPAD | knappar upp / ner / vänster / höger | alla teman |
| Skjutreglage | SLDR | ett värde | alla teman |
| Ver. reglage | VSLDR | ett värde | alla teman |
| Vridratt | DIAL | ett värde | betalda teman |
| Knapp | BTN | intryckt / släppt | alla teman |
| Brytare | SWCH | på / av | alla teman |
| Stegswitch | STPR | ett stegnummer | alla teman |
| Ver. stegswitch | VSTPR | ett stegnummer | alla teman |
| Monitor | MNTR | visar text eller ett värde | alla teman |
| Batterinivå | MNTBT | visar en nivå | betalda teman |
| Hastighetsmätare | MNTSP | visar en hastighet | betalda teman |
| Lutningsmonitor | MNTLT | visar lutning framåt och i sidled | betalda teman |
| Ratt, pedaler, växellådor, handbroms, blinkers, tågreglage | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | se [Specialkontroller](/docs/Application/Dashboard/SpecialControls) | specialprodukter |

Namnet på instrumentpanelen får ett nummer: den första joysticken heter **JOY1**, den andra **JOY2**.

## Joystick {#joystick}

En spak som fjädrar tillbaka till mitten. Den ger ett **X**-värde (vänster/höger) och ett **Y**-värde (upp/ner); mitten är noll.

- **Axeltyp**: **Båda axlarna (X, Y)**, **Endast horisontellt (X)** eller **Endast vertikalt (Y)**. En joystick med en axel är enklare att använda när den bara kör eller bara styr.
- Typisk användning: Y för att köra och X för att styra, eller en joystick per band på en stridsvagn.

## Riktad pad {#directional-pad}

Fyra knappar: upp, ner, vänster och höger. Var och en är antingen intryckt eller släppt. I Snabbkopplingar ger en D-pad-axel −1, 0 eller +1 (**Upp / ner** eller **Vänster / höger**), vilket är praktiskt för stegvisa rörelser som en krankrok.

## Skjutreglage och Ver. reglage {#slider-and-ver-slider}

Ett handtag som rör sig längs en vågrät eller lodrät skena.

- **Återställ till noll**: handtaget fjädrar tillbaka när du släpper (som en gaspedal) i stället för att stanna där du lämnar det (som hastighetsinställningen på ett tåg).
- **Negativa värden**: noll ligger i mitten, så reglaget ger negativa och positiva värden (bakåt och framåt).
- **Stegvärde**: reglaget rör sig i steg.

## Vridratt {#rotary-knob}

En rund ratt, som en volymkontroll, i gruppen **Reglage** i varje betalt tema. Vrid den med ett finger runt mitten: den vrids cirka 135° åt varje håll och stannar där du lämnar den.

- **Klicksteg (0 = steglöst)** (0–24): med steg klickar ratten från ett läge till nästa.
- **Noll i mitten (-100..100)**: ratten ger −100 till 100 med noll i mitten, i stället för 0 till 100.
- Block: *när vridratt … vrids / trycks / släpps / vrids till minimum / vrids till maximum*, *vridrattens värde …*, *är vridratt … intryckt / på minimum / på maximum?* Se [Instrumentpanelens kontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- I Snabbkopplingar fungerar ratten som ett [skjutreglage](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Temat Grundläggande har ingen vridratt. Eftersom varje betalt tema har en, byter **Ändra tema** ratten till utseendet i ett annat tema.

## Knapp {#button}

Intryckt medan du håller den, släppt när du släpper. Använd den för ett signalhorn eller en kort rörelse, eller med blocket **Växla** i Snabbkopplingar för att slå på och av något.

## Brytare {#switch}

Förblir på eller av: tryck för att ändra. Använd den för lampor, lägen eller en vinschspärr.

## Stegswitch och Ver. stegswitch {#step-switch-and-ver-step-switch}

En **−** / **+**-kontroll som räknar steg, som växlar eller hastighetsnivåerna på ett tåg.

- **Antal steg**: 1 till 100 (standard 10).
- **Negativa värden**: tillåter steg under noll (backnivåer).
- **Aktivera återställning**: ett tryck på värdet återställer det till noll.

## Monitor {#monitor}

Visar text eller ett tal från programmet: hastighet, batteri, namnet på ett läge, ett sensorvärde.

- **Textlayout** (en eller flera rader), **Textöverflöd** (Klipp, Radbryt, Rullande text, Rulla), **Max antal rader**, rullningsalternativ, **Textjustering** och **Textskala**.

## Batterinivå, Hastighetsmätare, Lutningsmonitor {#battery-level-speedometer-tilt-monitor}

Grafiska indikatorer i de betalda temana. Programmet ställer in deras värde: en hubbs batteri, en motors hastighet, en hubbs lutning. **Lutningsmonitor** har **Invertiera lutning** och **Invertiera rullning**. Se [Indikatorer och monitorer](/docs/Application/Dashboard/Indicators).

## Specialkontroller {#special-controls}

En ratt, pedaler, en manuell eller automatisk växellåda, en handbroms, en blinkersspak och ett tågreglage. Var och en är en separat produkt med många utseenden. Se [Specialkontroller](/docs/Application/Dashboard/SpecialControls).

## Interaktivitet {#interactivity}

Varje interaktiv kontroll har **Interaktivitet** (påslagen som standard). En icke-interaktiv kontroll reagerar inte på tryck. Programmet kan slå på och av interaktiviteten, till exempel för att spärra gasen tills en startkontroll är klar.
