---
id: FirstCarBlocks
title: Den samme bil i Logikblokke
description: "Trin for trin: programmér en fjernstyret LEGO-bil med fremdrift, servostyring, lys og blinklys i Logikblokke."
---

import Screenshot from '@site/src/components/Screenshot';

# Den samme bil i Logikblokke {#the-same-car-in-logic-blocks}

I denne vejledning bygger du bilen fra [Din første fjernstyrede bil med Hurtige forbindelser](/docs/Tutorials/FirstCarLinks) igen, denne gang i [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du får det samme resultat, et joystick der kører og styrer og en knap til lyset, og undervejs lærer du det grundlæggende i blokprogrammering: hændelser, løkker, variabler og Monitor. Til sidst kan du tilføje blinklys med tikkende lyd.

**Det skal du bruge**: den samme model som i vejledningen til Hurtige forbindelser:

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styremotor med encoder på **port B** (en Technic L- eller XL-motor eller en hvilken som helst Technic-vinkelmotor);
- LEGO®-lys på **port C** (valgfrit).

Med en City Hub bruger du portene **A** og **B** og udelader lyset.

**Resultatet**:

```text
når programmet starter
sæt (lys) til 0
indstil relativ position 0  (Hub 1, port B)
gentag altid
    sæt (gas) til (joystick JOY1 Y-akse)
    start motor ved (gas) % hastighed  (Hub 1, port A)
    gå til relativ position (joystick JOY1 X-akse × 0.9) ved 100 % hastighed  (Hub 1, port B)

når knappen BTN1 trykket
    hvis (lys) = 0 så
        tænde på 100 % lysstyrke  (Hub 1, port C)
        sæt (lys) til 1
    ellers
        sluk  (Hub 1, port C)
        sæt (lys) til 0
```

Sådan læser du listerne: hver linje er én blok, som appen viser den. Værdier i parentes er den hub og port, du vælger i blokken, eller en blok eller variabel, som du slipper i et felt. Indrykkede linjer ligger inde i C-blokken over dem.

## 1. Opret profilen {#create-the-profile}

1. På **Mine profiler** starter du en ny profil (**+** → **Ny profil** på en telefon, **Ny profil** på en tablet, **Fil → Ny profil** på en computer).
2. Vælg feltet **Logikblokke**.
3. Indtast et **Navn**, og sæt **Blokniveau** til **Avanceret**. Løkken **gentag altid** og **hvis … så … ellers**, som bruges her, er avancerede blokke; paletten **Begynder** viser dem ikke.
4. Tryk på **Opret**.

Du kan ændre niveauet senere under **Editorindstillinger** → **Vælg blokniveau**. Se [Opret en profil](/docs/Application/Profiles/CreateProfile) og [Blokniveauer](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Tilføj hubben og kontrollerne {#hub-and-dashboard}

Gør det præcis som i vejledningen til Hurtige forbindelser:

1. [Tilføj og forbind hubben](/docs/Tutorials/FirstCarLinks#add-the-hub) under **Mine hubs**.
2. [Sæt kontrollerne på dashboardet](/docs/Tutorials/FirstCarLinks#dashboard): en **Joystick** (**JOY1**) til venstre og en **Knap** (**BTN1**) til højre.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard med joysticket JOY1 til venstre og knappen BTN1 til højre" width={900} />

Når hubben er i profilen, viser paletten kategorierne **Motorer** og **Lys**; kontrollerne vises under **Skærmkontrollere**.

## 3. Hændelser eller en løkke? {#events-or-loop}

Et script starter med en **hændelsesblok** og kører blokkene under den fra top til bund. Flere scripts kører samtidig.

- En hændelsesblok som [når knappen … trykket](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) kører sit script én gang, hver gang hændelsen sker. Hændelser passer til ting, der sker på et bestemt tidspunkt: et tryk på en knap, en kontakt, et blinklys.
- Et joystick ændrer sig hele tiden. Den enkleste måde at følge det på er et script, der starter med [når programmet starter](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) og bliver ved med at læse stikket i en løkke [gentag altid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Denne bil bruger begge dele: en løkke til kørsel og styring og en hændelse til lyset.

## 4. Kørsel {#drive}

1. Træk [når programmet starter](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) fra **Begivenheder** ind i programområdet.
2. Sæt [gentag altid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) fra **Kontrol** fast under den.
3. Slip [start motor ved … % hastighed](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) fra **Motorer** inde i **gentag altid**. Vælg hubben og port **A**.
4. Træk værdiblokken [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) fra **Skærmkontrollere** ind i hastighedsfeltet. Vælg **JOY1** og **Y-akse**.

```text
når programmet starter
gentag altid
    start motor ved (joystick JOY1 Y-akse) % hastighed  (Hub 1, port A)
```

Sæt bilen på en stander, tryk på **Kør**, og skub joysticket: joysticket giver −100 til 100, hvilket præcis er motorens hastighed i procent. Tryk på **Stop**, når du er færdig.

**Kører den baglæns, når du skubber op?** Brug [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) fra **Operator**: `(joystick JOY1 Y-akse × -1)`. **For hurtig?** Gang i stedet med 0,5.

## 5. Styring {#steer}

Styremotoren følger joystickets X-akse med [gå til relativ position … ved … % hastighed](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relative positioner regnes fra det punkt, du sætter med [indstil relativ position …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Sæt **indstil relativ position** fast lige under **når programmet starter**, over **gentag altid**. Lad værdien stå på 0, og vælg port **B**.
2. Inde i **gentag altid**, under motorblokken, tilføjer du **gå til relativ position … ved … % hastighed** med port **B**.
3. Slip **… × …** i dens positionsfelt med joystickets **X-akse** til venstre og `0.9` til højre. Det gør −100…100 til −90…90 grader.
4. Sæt hastigheden til 100.

```text
når programmet starter
indstil relativ position 0  (Hub 1, port B)
gentag altid
    start motor ved (joystick JOY1 Y-akse) % hastighed  (Hub 1, port A)
    gå til relativ position (joystick JOY1 X-akse × 0.9) ved 100 % hastighed  (Hub 1, port B)
```

Før hvert **Kør** drejer du hjulene lige med hånden: den position bliver centrum. Hvis hjulene drejer for langt, så brug et mindre tal end 0,9; hvis de styrer den forkerte vej, så brug −0,9.

### Mulighed: kalibrér styringen automatisk {#calibrate-rack}

Hvis styringen har endestop, finder [kalibrer tandstang … center … grader …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) centrum og vandringen for dig. Opret først to variabler (**Variable** → **Opret en variabel**), for eksempel `center` og `vandring`, og slip dem i blokkens felter. Blokken drejer tandstangen til begge ender, stopper i midten og skriver resultaterne i variablerne; scriptet fortsætter, når kalibreringen er færdig.

```text
når programmet starter
kalibrer tandstang (center) center (vandring) grader  (Hub 1, port B)
indstil relativ position 0  (Hub 1, port B)
gentag altid
    start motor ved (joystick JOY1 Y-akse) % hastighed  (Hub 1, port A)
    gå til relativ position ((vandring × joystick JOY1 X-akse) ÷ 100) ved 100 % hastighed  (Hub 1, port B)
```

**indstil relativ position 0** lige efter kalibreringen gør midten til nulpunktet, så fuldt udslag på stikket drejer hjulene den målte vandring.

## 6. Lys på en knap {#lights}

Hurtige forbindelser har en færdig blok Skift. I Logikblokke husker en [variabel](/docs/Application/BlockBuilder/Blocks/Variables), om lyset er tændt.

1. Under **Variable** trykker du på **Opret en variabel** og kalder den `lys`.
2. Tilføj [sæt … til …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) i starten af hovedscriptet: `sæt (lys) til 0`.
3. Træk [når knappen … trykket](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) fra **Skærmkontrollere** til et tomt sted, og vælg **BTN1**.
4. Tilføj under den [hvis … så … ellers](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) med betingelsen [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lys) = 0`.
5. I den første gren tilføjer du [tænde på … % lysstyrke](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) og `sæt (lys) til 1`. I den anden gren tilføjer du [sluk](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) og `sæt (lys) til 0`.

```text
når knappen BTN1 trykket
    hvis (lys) = 0 så
        tænde på 100 % lysstyrke  (Hub 1, port C)
        sæt (lys) til 1
    ellers
        sluk  (Hub 1, port C)
        sæt (lys) til 0
```

Med en **Kontakt** i stedet for knappen er det endnu enklere: *når kontakt … er omstillet til / fra*; se [eksemplerne](/docs/Application/BlockBuilder/Examples).

## 7. Kør, og hold øje med Monitor {#monitor}

Når noget ikke virker som forventet, så se på værdierne. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) (i topbjælken på en computer, under **Mere** på en telefon eller tablet) viser alle variabler, mens programmet kører.

1. Opret en variabel `gas`.
2. Gem joystickets værdi i den i løkken, og brug variablen som motorhastighed:

```text
gentag altid
    sæt (gas) til (joystick JOY1 Y-akse)
    start motor ved (gas) % hastighed  (Hub 1, port A)
    gå til relativ position (joystick JOY1 X-akse × 0.9) ved 100 % hastighed  (Hub 1, port B)
```

3. Tryk på **Kør**, og åbn **Monitor**. Bevæg joysticket, og tryk på BTN1: `gas` følger stikket, og `lys` skifter mellem 0 og 1.

<Screenshot name="blocks-monitor" alt="Monitor, der viser variabler og en liste, mens programmet kører" width={900} />

- `gas` ændrer sig, men motoren drejer ikke: tjek hubforbindelsen under **Mine hubs** og porten i blokken.
- `gas` bliver på 0: tjek, at blokken læser **JOY1** og den rigtige akse.

I Logikblokke kan programmet redigeres, mens det kører, så du kan ændre et tal og se virkningen med det samme. Her er hele programmet:

<Screenshot name="tutorial-car-blocks-program" alt="Det færdige bilprogram: hovedscriptet med løkken gentag altid og lysscriptet for BTN1" width={900} />

Mere hjælp: [Fejlfinding](/docs/Help/Troubleshooting).

## 8. Valgfrit: blinklys med lyd {#turn-signals}

Tilføj [specialkontrollen](/docs/Application/Dashboard/SpecialControls#turn-signals) **Blinklys** (**STALK1**) til dashboardet, og sæt et lys i **port D**. Træk armen op for venstre blinklys og ned for højre.

```text
når blinklys STALK1 venstre blinklys tændes
    lyd Blinklys afspil
    gentag, indtil ikke (blinklys STALK1 venstre blinklys er tændt ?)
        tænde på 100 % lysstyrke  (Hub 1, port D)
        vent 0.5 sekunder
        sluk  (Hub 1, port D)
        vent 0.5 sekunder
    stop lyd Blinklys
```

Blokkene: [når blinklys …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) og [blinklys … er tændt ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) under **Skærmkontrollere**; [lyd … afspil](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) og [stop lyd …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) under **Lyde**; [gentag, indtil …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) og [vent … sekunder](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) under **Kontrol**; [ikke …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) under **Operator**.

Lyden **Blinklys** gentager sig selv, indtil du stopper den. Lyden afspilles på din telefon, tablet eller computer.

Dupliker scriptet (tryk længe eller højreklik → **Dupliker**), og vælg **højre blinklys** i begge blokke. Begge blinklys blinker så med det samme lys på port D; til separate venstre og højre lygter skal du bruge to ledige porte, for eksempel på en ekstra hub.

## Hurtige forbindelser eller Logikblokke: hvad skal du vælge? {#which-to-choose}

| | Hurtige forbindelser | Logikblokke |
|---|---|---|
| Denne bil | 3 rækker | 2 scripts, 2 variabler |
| Blød start, dødzone, begrænsning | færdige blokke | gang og regn selv |
| Servostyring | blokken Servo med Auto-kalibrering | blokke til relativ position eller kalibrer tandstang |
| Lys på en knap | blokken Skift | en variabel og *hvis … så … ellers* |
| Lyde, sekvenser, betingelser | nej | ja |
| Live-værdier | på hver samling i en række | Monitor og monitorer på dashboardet |
| Redigering under kørsel | nej | ja |

Vælg **Hurtige forbindelser**, når hver kontrol blot bevæger noget: biler, lastbiler, tog, kraner. Vælg **Logikblokke**, når du har brug for logik: lyde, blinkmønstre, sekvenser, reaktioner på sensorer, spil. Programtypen kan ikke ændres, men du kan lave en profil mere til den samme model. Mere i [Opret en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Næste skridt {#next-steps}

- Vis batteriet på en **Monitor** på dashboardet, og advar, når det er ved at være fladt: [Eksempler](/docs/Application/BlockBuilder/Examples#battery-warning).
- Kør med en gamepad: [Gamepad-blokke](/docs/Application/BlockBuilder/Blocks/Gamepad) og [gamepad-eksemplet](/docs/Application/BlockBuilder/Examples#gamepad).
- Få bilen til at føles ægte med pedaler, gearkasse og inerti: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Lær editoren at kende: [Arbejde i editoren](/docs/Application/BlockBuilder/Editor).
