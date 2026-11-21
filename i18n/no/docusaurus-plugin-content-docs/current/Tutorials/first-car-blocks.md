---
id: FirstCarBlocks
title: Den samme bilen i Logikkblokker
description: "Steg for steg: programmer en fjernstyrt LEGO-bil med fremdrift, servostyring, lys og blinklys i Logikkblokker."
---

import Screenshot from '@site/src/components/Screenshot';

# Den samme bilen i Logikkblokker {#the-same-car-in-logic-blocks}

I denne veiledningen bygger du bilen fra [Din første radiostyrte bil med Hurtigkoblinger](/docs/Tutorials/FirstCarLinks) på nytt, denne gangen i [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du får samme resultat, en joystick som kjører og styrer og en knapp for lysene, og underveis lærer du det grunnleggende i blokkprogrammering: hendelser, løkker, variabler og Monitor. Til slutt kan du legge til blinklys med tikkelyd.

**Dette trenger du**: den samme modellen som i veiledningen for Hurtigkoblinger:

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styremotor med enkoder på **port B** (en Technic L- eller XL-motor eller en hvilken som helst Technic-vinkelmotor);
- LEGO®-lys på **port C** (valgfritt).

Med en City Hub bruker du portene **A** og **B** og dropper lysene.

**Resultatet**:

```text
når programmet starter
sett (lys) til 0
sett relativ posisjon 0  (Hub 1, port B)
gjenta alltid
    sett (gass) til (joystick JOY1 Y-akse)
    start motor på (gass) % hastighet  (Hub 1, port A)
    gå til relativ posisjon (joystick JOY1 X-akse × 0.9) på 100 % hastighet  (Hub 1, port B)

når knappen BTN1 er trykt
    hvis (lys) = 0 så
        skru på ved 100 % lysstyrke  (Hub 1, port C)
        sett (lys) til 1
    ellers
        skru av  (Hub 1, port C)
        sett (lys) til 0
```

Slik leser du listingene: hver linje er én blokk, slik appen viser den. Verdier i parentes er huben og porten du velger i blokken, eller en blokk eller variabel du slipper inn i en åpning. Innrykkede linjer ligger inne i C-blokken over dem.

## 1. Opprett profilen {#create-the-profile}

1. På **Mine profiler** starter du en ny profil (**+** → **Ny profil** på en telefon, **Ny profil** på et nettbrett, **Fil → Ny profil** på en datamaskin).
2. Velg flisen **Logikkblokker**.
3. Skriv inn et **Namn** og sett **Blokknivå** til **Avansert**. Løkken **gjenta alltid** og **hvis … så … ellers** som brukes her, er avanserte blokker; paletten **Nybegynner** viser dem ikke.
4. Trykk **Opprett**.

Du kan endre nivået senere under **Editorinnstillinger** → **Velg blokknivå**. Se [Opprett en profil](/docs/Application/Profiles/CreateProfile) og [Blokknivåer](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Legg til huben og kontrollene {#hub-and-dashboard}

Gjør det nøyaktig som i veiledningen for Hurtigkoblinger:

1. [Legg til og koble til huben](/docs/Tutorials/FirstCarLinks#add-the-hub) i **Mine hubber**.
2. [Sett kontrollene på dashboardet](/docs/Tutorials/FirstCarLinks#dashboard): en **Joystick** (**JOY1**) til venstre og en **Knapp** (**BTN1**) til høyre.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard med joysticken JOY1 til venstre og knappen BTN1 til høyre" width={900} />

Når huben er i profilen, viser paletten kategoriene **Motorer** og **Lys**; kontrollene dukker opp under **Skjermkontrollere**.

## 3. Hendelser eller løkke? {#events-or-loop}

Et skript begynner med en **hendelsesblokk** og kjører blokkene under den ovenfra og ned. Flere skript kjører samtidig.

- En hendelsesblokk som [når knappen … er trykt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) kjører skriptet sitt én gang hver gang hendelsen skjer. Hendelser passer for ting som skjer i et bestemt øyeblikk: et knappetrykk, en bryter, et blinklys.
- En joystick endrer seg hele tiden. Den enkleste måten å følge den på er et skript som begynner med [når programmet starter](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) og leser stikken hele tiden i en [gjenta alltid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever)-løkke.

Denne bilen bruker begge deler: en løkke for kjøring og styring, og en hendelse for lysene.

## 4. Fremdrift {#drive}

1. Fra **Hendelser** drar du [når programmet starter](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) inn i programområdet.
2. Fra **Kontroll** fester du [gjenta alltid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) under den.
3. Fra **Motorer** slipper du [start motor på … % hastighet](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) inne i **gjenta alltid**. Velg huben og port **A**.
4. Fra **Skjermkontrollere** drar du verdiblokken [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) inn i hastighetsåpningen. Velg **JOY1** og **Y-akse**.

```text
når programmet starter
gjenta alltid
    start motor på (joystick JOY1 Y-akse) % hastighet  (Hub 1, port A)
```

Sett bilen på et stativ, trykk **Kjør** og skyv på joysticken: joysticken gir −100 til 100, som er nøyaktig motorhastigheten i prosent. Trykk **Stopp** når du er ferdig.

**Kjører bakover når du skyver opp?** Bruk [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) fra **Operatør**: `(joystick JOY1 Y-akse × -1)`. **For fort?** Gang med 0.5 i stedet.

## 5. Styring {#steer}

Styremotoren følger joystickens X-akse med [gå til relativ posisjon … på … % hastighet](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relative posisjoner regnes fra punktet du setter med [sett relativ posisjon …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Fest **sett relativ posisjon** rett under **når programmet starter**, over **gjenta alltid**. La verdien stå på 0 og velg port **B**.
2. Inne i **gjenta alltid**, under motorblokken, legger du til **gå til relativ posisjon … på … % hastighet** med port **B**.
3. Slipp **… × …** inn i posisjonsåpningen, med joystickens **X-akse** til venstre og `0.9` til høyre. Dette gjør −100…100 om til −90…90 grader.
4. Sett hastigheten til 100.

```text
når programmet starter
sett relativ posisjon 0  (Hub 1, port B)
gjenta alltid
    start motor på (joystick JOY1 Y-akse) % hastighet  (Hub 1, port A)
    gå til relativ posisjon (joystick JOY1 X-akse × 0.9) på 100 % hastighet  (Hub 1, port B)
```

Før hver **Kjør** setter du hjulene rett med hånden: den posisjonen blir senter. Hvis hjulene svinger for langt, bruker du et mindre tall enn 0.9; hvis de svinger feil vei, bruker du −0.9.

### Alternativ: kalibrer styringen automatisk {#calibrate-rack}

Hvis styringen har endestopp, finner [kalibrer tannstang … senter … grader …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) senteret og vandringen for deg. Lag først to variabler (**Variabler** → **Lag en variabel**), for eksempel `midt` og `utslag`, og slipp dem inn i blokkens åpninger. Blokken dreier tannstangen til begge ender, stopper på midten og skriver resultatene inn i variablene; skriptet fortsetter når kalibreringen er ferdig.

```text
når programmet starter
kalibrer tannstang (midt) senter (utslag) grader  (Hub 1, port B)
sett relativ posisjon 0  (Hub 1, port B)
gjenta alltid
    start motor på (joystick JOY1 Y-akse) % hastighet  (Hub 1, port A)
    gå til relativ posisjon ((utslag × joystick JOY1 X-akse) ÷ 100) på 100 % hastighet  (Hub 1, port B)
```

**sett relativ posisjon 0** rett etter kalibreringen gjør midten til null, så full stikke svinger hjulene med den målte vandringen.

## 6. Lys på en knapp {#lights}

Hurtigkoblinger har en ferdig Veksle-blokk. I Logikkblokker husker en [variabel](/docs/Application/BlockBuilder/Blocks/Variables) om lysene er på.

1. Under **Variabler** trykker du **Lag en variabel** og kaller den `lys`.
2. Legg til [sett … til …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) i starten av hovedskriptet: `sett (lys) til 0`.
3. Fra **Skjermkontrollere** drar du [når knappen … er trykt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) til et tomt sted og velger **BTN1**.
4. Under den legger du til [hvis … så … ellers](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) med betingelsen [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lys) = 0`.
5. I den første grenen legger du til [skru på ved … % lysstyrke](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) og `sett (lys) til 1`. I den andre grenen legger du til [skru av](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) og `sett (lys) til 0`.

```text
når knappen BTN1 er trykt
    hvis (lys) = 0 så
        skru på ved 100 % lysstyrke  (Hub 1, port C)
        sett (lys) til 1
    ellers
        skru av  (Hub 1, port C)
        sett (lys) til 0
```

Med en **Bryter** i stedet for knappen blir det enda enklere: *når bryter … er byttet på / av*; se [eksemplene](/docs/Application/BlockBuilder/Examples).

## 7. Kjør og følg med i Monitor {#monitor}

Når noe ikke fungerer som forventet, ser du på verdiene. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) i topplinjen viser alle variabler mens programmet kjører.

1. Lag en variabel `gass`.
2. I løkken lagrer du joystickverdien i den og bruker variabelen som motorhastighet:

```text
gjenta alltid
    sett (gass) til (joystick JOY1 Y-akse)
    start motor på (gass) % hastighet  (Hub 1, port A)
    gå til relativ posisjon (joystick JOY1 X-akse × 0.9) på 100 % hastighet  (Hub 1, port B)
```

3. Trykk **Kjør** og åpne **Monitor**. Beveg joysticken og trykk BTN1: `gass` følger stikken, og `lys` veksler mellom 0 og 1.

<Screenshot name="blocks-monitor" alt="Monitor som viser variabler og en liste mens programmet kjører" width={900} />

- `gass` endrer seg, men motoren går ikke: sjekk hubtilkoblingen i **Mine hubber** og porten i blokken.
- `gass` blir stående på 0: sjekk at blokken leser **JOY1** og riktig akse.

I Logikkblokker kan programmet redigeres mens det kjører, så du kan endre et tall og se virkningen med en gang. Her er hele programmet:

<Screenshot name="tutorial-car-blocks-program" alt="Det ferdige bilprogrammet: hovedskriptet med gjenta alltid-løkken og lysskriptet for BTN1" width={900} />

Mer hjelp: [Feilsøking](/docs/Help/Troubleshooting).

## 8. Valgfritt: blinklys med lyd {#turn-signals}

Legg [spesialkontrollen](/docs/Application/Dashboard/SpecialControls#turn-signals) **Blinklys** (**STALK1**) til dashboardet og koble et lys til **port D**. Dra spaken opp for venstre blinklys og ned for høyre.

```text
når blinklys STALK1 venstre blinklys slås på
    lyd Blinklys spill
    gjenta så lenge ikke (blinklys STALK1 venstre blinklys er på ?)
        skru på ved 100 % lysstyrke  (Hub 1, port D)
        vent 0.5 sekunder
        skru av  (Hub 1, port D)
        vent 0.5 sekunder
    stopp lyd Blinklys
```

Blokkene: [når blinklys …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) og [blinklys … er på ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) under **Skjermkontrollere**; [lyd … spill](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) og [stopp lyd …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) under **Lyder**; [gjenta så lenge …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) og [vent … sekunder](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) under **Kontroll**; [ikke …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) under **Operatør**.

Lyden **Blinklys** gjentas av seg selv til du stopper den. Lyden spilles på telefonen, nettbrettet eller datamaskinen din.

Dupliser skriptet (hold fingeren på det eller høyreklikk → **Dupliser**) og velg **høyre blinklys** i begge blokkene. Begge blinklysene blinker da med det samme lyset på port D; for separate lamper til venstre og høyre trenger du to ledige porter, for eksempel på en hub nummer to.

## Hurtigkoblinger eller Logikkblokker: hva skal du velge? {#which-to-choose}

| | Hurtigkoblinger | Logikkblokker |
|---|---|---|
| Denne bilen | 3 rader | 2 skript, 2 variabler |
| Myk start, dødsone, begrensning | ferdige blokker | gang og regn ut selv |
| Servostyring | Servo-blokk med Auto-kalibrering | blokker for relativ posisjon eller kalibrer tannstang |
| Lys på en knapp | Veksle-blokk | en variabel og *hvis … så … ellers* |
| Lyder, sekvenser, betingelser | nei | ja |
| Sanntidsverdier | på hvert ledd i en rad | Monitor og monitorer på dashboardet |
| Redigering mens programmet kjører | nei | ja |

Velg **Hurtigkoblinger** når hver kontroll bare skal bevege noe: biler, lastebiler, tog, kraner. Velg **Logikkblokker** når du trenger logikk: lyder, blinkemønstre, sekvenser, reaksjoner på sensorer, spill. Programtypen kan ikke endres, men du kan lage en profil nummer to for den samme modellen. Mer i [Opprett en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Neste steg {#next-steps}

- Vis batteriet på en **Monitor** på dashboardet og få en advarsel når det blir lavt: [Eksempler](/docs/Application/BlockBuilder/Examples#battery-warning).
- Kjør med spillkontroller: [Gamepad-blokker](/docs/Application/BlockBuilder/Blocks/Gamepad) og [eksemplet med spillkontroller](/docs/Application/BlockBuilder/Examples#gamepad).
- Få bilen til å føles ekte med pedaler, girkasse og treghet: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Lær editoren: [Arbeide i editoren](/docs/Application/BlockBuilder/Editor).
