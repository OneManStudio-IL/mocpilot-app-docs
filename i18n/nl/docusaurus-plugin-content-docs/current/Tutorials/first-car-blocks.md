---
id: FirstCarBlocks
title: Dezelfde auto met Logicablokken
description: "Stap voor stap: programmeer met Logicablokken een op afstand bestuurbare LEGO-auto met aandrijving, servobesturing, lampen en richtingaanwijzers."
---

import Screenshot from '@site/src/components/Screenshot';

# Dezelfde auto met Logicablokken {#the-same-car-in-logic-blocks}

In deze tutorial bouw je de auto uit [Je eerste RC-auto met Snelle koppelingen](/docs/Tutorials/FirstCarLinks) opnieuw, dit keer met [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Je krijgt hetzelfde resultaat, een joystick die rijdt en stuurt en een knop voor de lampen, en onderweg leer je de basis van programmeren met blokken: gebeurtenissen, lussen, variabelen en de Monitor. Aan het eind kun je richtingaanwijzers met een tikkend geluid toevoegen.

**Wat je nodig hebt**: hetzelfde model als in de tutorial over Snelle koppelingen:

- een LEGO® Technic™ Hub (88012);
- een aandrijfmotor op **poort A**;
- een stuurmotor met encoder op **poort B** (een Technic L- of XL-motor of een willekeurige Technic-hoekmotor);
- LEGO®-lampen op **poort C** (optioneel).

Met een City Hub gebruik je de poorten **A** en **B** en laat je de lampen weg.

**Het resultaat**:

```text
wanneer het programma start
instellen (lichten) naar 0
stel relatieve positie in 0  (Hub 1, poort B)
altijd herhalen
    instellen (gas) naar (joystick JOY1 Y-as)
    start motor op (gas) % snelheid  (Hub 1, poort A)
    ga naar relatieve positie (joystick JOY1 X-as × 0.9) bij 100 % snelheid  (Hub 1, poort B)

wanneer de knop BTN1 is ingedrukt
    als (lichten) = 0 dan
        inschakelen bij 100 % helderheid  (Hub 1, poort C)
        instellen (lichten) naar 1
    anders
        uitzetten  (Hub 1, poort C)
        instellen (lichten) naar 0
```

Zo lees je de overzichten: elke regel is één blok, zoals de app het toont. Waarden tussen haakjes zijn de hub en poort die je in het blok kiest, of een blok of variabele die je in een vak zet. Ingesprongen regels horen in het C-blok erboven.

## 1. Maak het profiel {#create-the-profile}

1. Begin op **Mijn profielen** een nieuw profiel (**+** → **Nieuw profiel** op een telefoon, **Nieuw profiel** op een tablet, **Bestand → Nieuw profiel** op een computer).
2. Kies de tegel **Logicablokken**.
3. Vul een **Naam** in en zet **Blokniveau** op **Gevorderd**. De lus **altijd herhalen** en **als … dan … anders**, die hier worden gebruikt, zijn blokken van het niveau Gevorderd; het palet **Beginner** toont ze niet.
4. Tik op **Maken**.

Je kunt het niveau later wijzigen via **Editorinstellingen** → **Blokniveau selecteren**. Zie [Een profiel maken](/docs/Application/Profiles/CreateProfile) en [Blokniveaus](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Voeg de hub en de bedieningselementen toe {#hub-and-dashboard}

Doe het precies zoals in de tutorial over Snelle koppelingen:

1. [Voeg de hub toe en verbind hem](/docs/Tutorials/FirstCarLinks#add-the-hub) in **Mijn hubs**.
2. [Zet de bedieningselementen op het dashboard](/docs/Tutorials/FirstCarLinks#dashboard): een **Joystick** (**JOY1**) links en een **Knop** (**BTN1**) rechts.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard met de joystick JOY1 links en de knop BTN1 rechts" width={900} />

Zodra de hub in het profiel staat, toont het palet de categorieën **Motoren** en **Licht**; de bedieningselementen verschijnen in **Dashboardbedieningselementen**.

## 3. Gebeurtenissen of een lus? {#events-or-loop}

Een script begint met een **gebeurtenisblok** en voert de blokken eronder van boven naar beneden uit. Meerdere scripts lopen tegelijk.

- Een gebeurtenisblok zoals [wanneer de knop … is ingedrukt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) voert zijn script één keer uit, elke keer dat de gebeurtenis plaatsvindt. Gebeurtenissen passen bij dingen die op een bepaald moment gebeuren: een druk op een knop, een schakelaar, een richtingaanwijzer.
- Een joystick verandert voortdurend. De eenvoudigste manier om hem te volgen is een script dat begint met [wanneer het programma start](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) en de stick steeds opnieuw uitleest in een lus [altijd herhalen](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Deze auto gebruikt beide: een lus voor rijden en sturen, en een gebeurtenis voor de lampen.

## 4. Rijden {#drive}

1. Sleep uit **Gebeurtenissen** het blok [wanneer het programma start](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) naar het programmagebied.
2. Koppel er uit **Besturing** het blok [altijd herhalen](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) onder.
3. Zet uit **Motoren** het blok [start motor op … % snelheid](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) in **altijd herhalen**. Kies de hub en poort **A**.
4. Sleep uit **Dashboardbedieningselementen** het waardeblok [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) naar het snelheidsvak. Kies **JOY1** en **Y-as**.

```text
wanneer het programma start
altijd herhalen
    start motor op (joystick JOY1 Y-as) % snelheid  (Hub 1, poort A)
```

Zet de auto op een standaard, druk op **Start** en duw de joystick: de joystick geeft −100 tot 100, precies de motorsnelheid in procenten. Druk op **Stop** als je klaar bent.

**Rijdt hij achteruit als je omhoog duwt?** Gebruik [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) uit **Operator**: `(joystick JOY1 Y-as × -1)`. **Te snel?** Vermenigvuldig dan met 0.5.

## 5. Sturen {#steer}

De stuurmotor volgt de X-as van de joystick met [ga naar relatieve positie … bij … % snelheid](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relatieve posities worden geteld vanaf het punt dat je instelt met [stel relatieve positie in …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Koppel **stel relatieve positie in** direct onder **wanneer het programma start**, boven **altijd herhalen**. Laat de waarde op 0 staan en kies poort **B**.
2. Voeg in **altijd herhalen**, onder het motorblok, **ga naar relatieve positie … bij … % snelheid** toe met poort **B**.
3. Zet in het positievak een blok **… × …**, met de **X-as** van de joystick links en `0.9` rechts. Zo wordt −100…100 omgezet in −90…90 graden.
4. Zet de snelheid op 100.

```text
wanneer het programma start
stel relatieve positie in 0  (Hub 1, poort B)
altijd herhalen
    start motor op (joystick JOY1 Y-as) % snelheid  (Hub 1, poort A)
    ga naar relatieve positie (joystick JOY1 X-as × 0.9) bij 100 % snelheid  (Hub 1, poort B)
```

Zet de wielen vóór elke **Start** met de hand recht: die stand wordt het midden. Draaien de wielen te ver, gebruik dan een kleiner getal dan 0.9; sturen ze de verkeerde kant op, gebruik dan −0.9.

### Optie: de besturing automatisch kalibreren {#calibrate-rack}

Heeft de besturing eindaanslagen, dan vindt [rek kalibreren … midden … graden …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) het midden en de slag voor je. Maak eerst twee variabelen (**Variabelen** → **Maak een variabele**), bijvoorbeeld `midden` en `bereik`, en zet ze in de vakken van het blok. Het blok draait de stuurstang naar beide uiteinden, stopt in het midden en schrijft de resultaten in de variabelen; het script gaat verder zodra de kalibratie klaar is.

```text
wanneer het programma start
rek kalibreren (midden) midden (bereik) graden  (Hub 1, poort B)
stel relatieve positie in 0  (Hub 1, poort B)
altijd herhalen
    start motor op (joystick JOY1 Y-as) % snelheid  (Hub 1, poort A)
    ga naar relatieve positie ((bereik × joystick JOY1 X-as) ÷ 100) bij 100 % snelheid  (Hub 1, poort B)
```

**stel relatieve positie in 0** direct na de kalibratie maakt het midden tot nulpunt, zodat de wielen bij een volle stickuitslag precies de gemeten slag draaien.

## 6. Lampen op een knop {#lights}

Snelle koppelingen heeft een kant-en-klaar blok Wisselen. Bij Logicablokken onthoudt een [variabele](/docs/Application/BlockBuilder/Blocks/Variables) of de lampen aan zijn.

1. Tik in **Variabelen** op **Maak een variabele** en noem hem `lichten`.
2. Voeg [instellen … naar …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) toe aan het begin van het hoofdscript: `instellen (lichten) naar 0`.
3. Sleep uit **Dashboardbedieningselementen** het blok [wanneer de knop … is ingedrukt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) naar een lege plek en kies **BTN1**.
4. Voeg eronder [als … dan … anders](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) toe met de voorwaarde [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lichten) = 0`.
5. Voeg in de eerste tak [inschakelen bij … % helderheid](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (poort **C**) en `instellen (lichten) naar 1` toe. Voeg in de tweede tak [uitzetten](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (poort **C**) en `instellen (lichten) naar 0` toe.

```text
wanneer de knop BTN1 is ingedrukt
    als (lichten) = 0 dan
        inschakelen bij 100 % helderheid  (Hub 1, poort C)
        instellen (lichten) naar 1
    anders
        uitzetten  (Hub 1, poort C)
        instellen (lichten) naar 0
```

Met een **Schakelaar** in plaats van de knop is het nog eenvoudiger: *wanneer schakelaar … is omgeschakeld aan / uit*; zie de [voorbeelden](/docs/Application/BlockBuilder/Examples).

## 7. Starten en de Monitor bekijken {#monitor}

Werkt iets niet zoals verwacht, kijk dan naar de waarden. De [Monitor](/docs/Application/BlockBuilder/Editor#monitor) (in de bovenbalk op een computer, in **Meer** op een telefoon of tablet) toont elke variabele terwijl het programma loopt.

1. Maak een variabele `gas`.
2. Sla in de lus de waarde van de joystick erin op en gebruik de variabele voor de motorsnelheid:

```text
altijd herhalen
    instellen (gas) naar (joystick JOY1 Y-as)
    start motor op (gas) % snelheid  (Hub 1, poort A)
    ga naar relatieve positie (joystick JOY1 X-as × 0.9) bij 100 % snelheid  (Hub 1, poort B)
```

3. Druk op **Start** en open **Monitor**. Beweeg de joystick en druk op BTN1: `gas` volgt de stick, en `lichten` wisselt tussen 0 en 1.

<Screenshot name="blocks-monitor" alt="De Monitor met variabelen en een lijst terwijl het programma loopt" width={900} />

- `gas` verandert, maar de motor draait niet: controleer de hubverbinding in **Mijn hubs** en de poort in het blok.
- `gas` blijft op 0: controleer of het blok **JOY1** en de juiste as uitleest.

Bij Logicablokken blijft het programma bewerkbaar terwijl het loopt, dus je kunt een getal wijzigen en meteen het effect zien. Dit is het hele programma:

<Screenshot name="tutorial-car-blocks-program" alt="Het voltooide autoprogramma: het hoofdscript met de lus altijd herhalen en het lampenscript van BTN1" width={900} />

Meer hulp: [Problemen oplossen](/docs/Help/Troubleshooting).

## 8. Optioneel: richtingaanwijzers met geluid {#turn-signals}

Voeg het [speciale bedieningselement](/docs/Application/Dashboard/SpecialControls#turn-signals) **Richtingaanwijzers** (**STALK1**) toe aan het dashboard en sluit een lamp aan op **poort D**. Sleep de hendel omhoog voor de linker richtingaanwijzer en omlaag voor de rechter.

```text
wanneer richtingaanwijzers STALK1 linker richtingaanwijzer gaat aan
    geluid Knipperlicht speel
    herhalen zolang niet (richtingaanwijzers STALK1 linker richtingaanwijzer is aan ?)
        inschakelen bij 100 % helderheid  (Hub 1, poort D)
        wachten 0.5 seconden
        uitzetten  (Hub 1, poort D)
        wachten 0.5 seconden
    stop geluid Knipperlicht
```

De blokken: [wanneer richtingaanwijzers …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) en [richtingaanwijzers … is aan ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) in **Dashboardbedieningselementen**; [geluid … speel](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) en [stop geluid …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) in **Geluiden**; [herhalen zolang …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) en [wachten … seconden](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) in **Besturing**; [niet …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) in **Operator**.

Het geluid **Knipperlicht** herhaalt zichzelf tot je het stopt. Het geluid speelt af op je telefoon, tablet of computer.

Dupliceer het script (lang indrukken of rechtsklikken → **Dupliceren**) en kies in beide blokken **rechter richtingaanwijzer**. Beide richtingaanwijzers laten dan dezelfde lamp op poort D knipperen; voor aparte lampen links en rechts heb je twee vrije poorten nodig, bijvoorbeeld op een tweede hub.

## Snelle koppelingen of Logicablokken: wat kies je? {#which-to-choose}

| | Snelle koppelingen | Logicablokken |
|---|---|---|
| Deze auto | 3 rijen | 2 scripts, 2 variabelen |
| Soepel optrekken, dode zone, begrenzing | kant-en-klare blokken | zelf vermenigvuldigen en berekenen |
| Servobesturing | Servo-blok met automatische kalibratie | blokken voor relatieve positie of rek kalibreren |
| Lampen op een knop | blok Wisselen | een variabele en *als … dan … anders* |
| Geluiden, reeksen, voorwaarden | nee | ja |
| Live waarden | op elke verbinding van een rij | de Monitor en monitors op het dashboard |
| Bewerken tijdens het uitvoeren | nee | ja |

Kies **Snelle koppelingen** als elk bedieningselement gewoon iets beweegt: auto's, trucks, treinen, kranen. Kies **Logicablokken** als je logica nodig hebt: geluiden, knipperpatronen, reeksen, reacties op sensoren, spelletjes. Het programmatype kan niet worden gewijzigd, maar je kunt wel een tweede profiel voor hetzelfde model maken. Meer in [Een profiel maken](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Volgende stappen {#next-steps}

- Toon de batterij op een **Monitor** op het dashboard en waarschuw als hij bijna leeg is: [Voorbeelden](/docs/Application/BlockBuilder/Examples#battery-warning).
- Rijden met een gamepad: [Gamepad-blokken](/docs/Application/BlockBuilder/Blocks/Gamepad) en het [gamepadvoorbeeld](/docs/Application/BlockBuilder/Examples#gamepad).
- Laat de auto echt aanvoelen met pedalen, een versnellingsbak en traagheid: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Leer de editor kennen: [Werken in de editor](/docs/Application/BlockBuilder/Editor).
