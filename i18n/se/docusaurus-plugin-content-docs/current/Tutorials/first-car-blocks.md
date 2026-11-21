---
id: FirstCarBlocks
title: Samma bil i Logikblock
description: "Steg för steg: programmera en fjärrstyrd LEGO-bil med drivning, servostyrning, lampor och blinkers i Logikblock."
---

import Screenshot from '@site/src/components/Screenshot';

# Samma bil i Logikblock

I den här guiden bygger du bilen från [Din första radiostyrda bil med Snabbkopplingar](/docs/Tutorials/FirstCarLinks) igen, den här gången i [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du får samma resultat, en joystick som kör och styr och en knapp för lamporna, och på vägen lär du dig grunderna i blockprogrammering: händelser, loopar, variabler och Monitor. Till sist kan du lägga till blinkers med tickande ljud.

**Det här behöver du**: samma modell som i guiden för Snabbkopplingar:

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styrmotor med pulsgivare på **port B** (en Technic L- eller XL-motor eller valfri Technic-vinkelmotor);
- LEGO®-lampor på **port C** (valfritt).

Med en City Hub använder du portarna **A** och **B** och hoppar över lamporna.

**Resultatet**:

```text
när programmet startar
ställ in (lampor) till 0
ställ in relativ position 0  (Hubb 1, port B)
upprepa alltid
    ställ in (gas) till (joystick JOY1 Y-axel)
    starta motor vid (gas) % hastighet  (Hubb 1, port A)
    gå till relativ position (joystick JOY1 X-axel × 0.9) vid 100 % hastighet  (Hubb 1, port B)

när knappen BTN1 tryckt
    om (lampor) = 0 då
        slå på vid 100 % ljusstyrka  (Hubb 1, port C)
        ställ in (lampor) till 1
    annars
        stäng av  (Hubb 1, port C)
        ställ in (lampor) till 0
```

Så läser du listorna: varje rad är ett block, så som appen visar det. Värden inom parentes är hubben och porten du väljer i blocket, eller ett block eller en variabel som du släpper i en plats. Indragna rader ligger inuti C-blocket ovanför dem.

## 1. Skapa profilen {#create-the-profile}

1. Starta en ny profil under **Mina profiler** (**+** → **Ny profil** på en telefon, **Ny profil** på en surfplatta, **Fil → Ny profil** på en dator).
2. Välj rutan **Logikblock**.
3. Ange ett **Namn** och ställ in **Blocknivå** på **Avancerad**. Loopen **upprepa alltid** och **om … då … annars** som används här är avancerade block; paletten **Nybörjare** visar dem inte.
4. Tryck på **Skapa**.

Du kan ändra nivån senare under **Redigerarens inställningar** → **Välj blocknivå**. Se [Skapa en profil](/docs/Application/Profiles/CreateProfile) och [Blocknivåer](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Lägg till hubben och kontrollerna {#hub-and-dashboard}

Gör precis som i guiden för Snabbkopplingar:

1. [Lägg till och anslut hubben](/docs/Tutorials/FirstCarLinks#add-the-hub) under **Mina hubbar**.
2. [Placera kontrollerna på instrumentpanelen](/docs/Tutorials/FirstCarLinks#dashboard): en **Joystick** (**JOY1**) till vänster och en **Knapp** (**BTN1**) till höger.

<Screenshot name="tutorial-car-dashboard" alt="Instrumentpanel med joysticken JOY1 till vänster och knappen BTN1 till höger" width={900} />

När hubben finns i profilen visar paletten kategorierna **Motorer** och **Ljus**; kontrollerna visas under **Skärmkontroller**.

## 3. Händelser eller en loop? {#events-or-loop}

Ett skript börjar med ett **händelseblock** och kör blocken under det uppifrån och ned. Flera skript körs samtidigt.

- Ett händelseblock som [när knappen … tryckt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) kör sitt skript en gång varje gång händelsen inträffar. Händelser passar för sådant som sker vid ett visst ögonblick: ett knapptryck, en brytare, en blinker.
- En joystick ändras hela tiden. Det enklaste sättet att följa den är ett skript som börjar med [när programmet startar](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) och läser av spaken om och om igen i en loop [upprepa alltid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Den här bilen använder båda: en loop för drivning och styrning, och en händelse för lamporna.

## 4. Kör {#drive}

1. Dra [när programmet startar](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) från **Händelser** till programområdet.
2. Fäst [upprepa alltid](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) från **Kontroll** under det.
3. Släpp [starta motor vid … % hastighet](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) från **Motorer** inuti **upprepa alltid**. Välj hubben och port **A**.
4. Dra värdeblocket [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) från **Skärmkontroller** till hastighetsplatsen. Välj **JOY1** och **Y-axel**.

```text
när programmet startar
upprepa alltid
    starta motor vid (joystick JOY1 Y-axel) % hastighet  (Hubb 1, port A)
```

Ställ bilen på ett stöd, tryck på **Kör** och för joysticken: joysticken ger −100 till 100, vilket är exakt motorns hastighet i procent. Tryck på **Stoppa** när du är klar.

**Kör bilen bakåt när du trycker uppåt?** Använd [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) från **Operator**: `(joystick JOY1 Y-axel × -1)`. **För snabb?** Multiplicera med 0,5 i stället.

## 5. Styr {#steer}

Styrmotorn följer joystickens X-axel med [gå till relativ position … vid … % hastighet](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relativa positioner räknas från den punkt du ställer in med [ställ in relativ position …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Fäst **ställ in relativ position** direkt under **när programmet startar**, ovanför **upprepa alltid**. Låt värdet vara 0 och välj port **B**.
2. Lägg till **gå till relativ position … vid … % hastighet** med port **B** inuti **upprepa alltid**, under motorblocket.
3. Släpp **… × …** i dess positionsplats, med joystickens **X-axel** till vänster och `0.9` till höger. Det gör om −100…100 till −90…90 grader.
4. Ställ in hastigheten på 100.

```text
när programmet startar
ställ in relativ position 0  (Hubb 1, port B)
upprepa alltid
    starta motor vid (joystick JOY1 Y-axel) % hastighet  (Hubb 1, port A)
    gå till relativ position (joystick JOY1 X-axel × 0.9) vid 100 % hastighet  (Hubb 1, port B)
```

Ställ hjulen rakt för hand före varje **Kör**: den positionen blir mittläget. Om hjulen svänger för mycket använder du ett mindre tal än 0,9; om de svänger åt fel håll använder du −0,9.

### Alternativ: kalibrera styrningen automatiskt {#calibrate-rack}

Om styrningen har ändlägen hittar [kalibrera kuggstång … centrum … grader …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) mittläget och rörelseomfånget åt dig. Skapa först två variabler (**Variabler** → **Skapa en variabel**), till exempel `mitt` och `omfång`, och släpp dem i blockets platser. Blocket vrider kuggstången till båda ändarna, stannar i mitten och skriver resultaten till variablerna; skriptet fortsätter när kalibreringen är klar.

```text
när programmet startar
kalibrera kuggstång (mitt) centrum (omfång) grader  (Hubb 1, port B)
ställ in relativ position 0  (Hubb 1, port B)
upprepa alltid
    starta motor vid (joystick JOY1 Y-axel) % hastighet  (Hubb 1, port A)
    gå till relativ position ((omfång × joystick JOY1 X-axel) ÷ 100) vid 100 % hastighet  (Hubb 1, port B)
```

**ställ in relativ position 0** direkt efter kalibreringen gör mitten till noll, så att fullt spakutslag vrider hjulen med det uppmätta rörelseomfånget.

## 6. Lampor på en knapp {#lights}

Snabbkopplingar har ett färdigt Växla-block. I Logikblock kommer en [variabel](/docs/Application/BlockBuilder/Blocks/Variables) ihåg om lamporna är tända.

1. Tryck på **Skapa en variabel** under **Variabler** och ge den namnet `lampor`.
2. Lägg till [ställ in … till …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) i början av huvudskriptet: `ställ in (lampor) till 0`.
3. Dra [när knappen … tryckt](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) från **Skärmkontroller** till en tom plats och välj **BTN1**.
4. Lägg till [om … då … annars](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) under det, med villkoret [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lampor) = 0`.
5. I den första grenen lägger du till [slå på vid … % ljusstyrka](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) och `ställ in (lampor) till 1`. I den andra grenen lägger du till [stäng av](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) och `ställ in (lampor) till 0`.

```text
när knappen BTN1 tryckt
    om (lampor) = 0 då
        slå på vid 100 % ljusstyrka  (Hubb 1, port C)
        ställ in (lampor) till 1
    annars
        stäng av  (Hubb 1, port C)
        ställ in (lampor) till 0
```

Med en **Brytare** i stället för knappen blir det ännu enklare: *när switch … är växlad på / av*; se [exemplen](/docs/Application/BlockBuilder/Examples).

## 7. Kör och titta i Monitor {#monitor}

När något inte fungerar som väntat ska du titta på värdena. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) i det övre fältet visar alla variabler medan programmet körs.

1. Skapa en variabel `gas`.
2. Spara joystickens värde i den i loopen och använd variabeln som motorns hastighet:

```text
upprepa alltid
    ställ in (gas) till (joystick JOY1 Y-axel)
    starta motor vid (gas) % hastighet  (Hubb 1, port A)
    gå till relativ position (joystick JOY1 X-axel × 0.9) vid 100 % hastighet  (Hubb 1, port B)
```

3. Tryck på **Kör** och öppna **Monitor**. För joysticken och tryck på BTN1: `gas` följer spaken, och `lampor` växlar mellan 0 och 1.

<Screenshot name="blocks-monitor" alt="Monitor som visar variabler och en lista medan programmet körs" width={900} />

- `gas` ändras men motorn snurrar inte: kontrollera hubbens anslutning under **Mina hubbar** och porten i blocket.
- `gas` står kvar på 0: kontrollera att blocket läser **JOY1** och rätt axel.

I Logikblock går programmet att redigera medan det körs, så du kan ändra ett tal och se effekten direkt. Här är hela programmet:

<Screenshot name="tutorial-car-blocks-program" alt="Det färdiga bilprogrammet: huvudskriptet med loopen upprepa alltid och lampskriptet för BTN1" width={900} />

Mer hjälp: [Felsökning](/docs/Help/Troubleshooting).

## 8. Valfritt: blinkers med ljud {#turn-signals}

Lägg till [specialkontrollen](/docs/Application/Dashboard/SpecialControls#turn-signals) **Blinkers** (**STALK1**) på instrumentpanelen och anslut en lampa till **port D**. Dra spaken uppåt för vänster blinker och nedåt för höger.

```text
när blinkers STALK1 vänster blinker tänds
    ljud Blinker spela
    upprepa så länge inte (blinkers STALK1 vänster blinker är på ?)
        slå på vid 100 % ljusstyrka  (Hubb 1, port D)
        vänta 0.5 sekunder
        stäng av  (Hubb 1, port D)
        vänta 0.5 sekunder
    stoppa ljudet Blinker
```

Blocken: [när blinkers …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) och [blinkers … är på ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) under **Skärmkontroller**; [ljud … spela](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) och [stoppa ljudet …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) under **Ljud**; [upprepa så länge …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) och [vänta … sekunder](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) under **Kontroll**; [inte …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) under **Operator**.

Ljudet **Blinker** upprepas av sig självt tills du stoppar det. Ljudet spelas upp på din telefon, surfplatta eller dator.

Duplicera skriptet (tryck länge eller högerklicka → **Duplicera**) och välj **höger blinker** i båda blocken. Då blinkar båda blinkersen med samma lampa på port D; för separata vänster- och högerlampor behöver du två lediga portar, till exempel på en andra hubb.

## Snabbkopplingar eller Logikblock: vad ska du välja? {#which-to-choose}

| | Snabbkopplingar | Logikblock |
|---|---|---|
| Den här bilen | 3 rader | 2 skript, 2 variabler |
| Mjuk start, dödzon, begränsning | färdiga block | multiplicera och räkna själv |
| Servostyrning | Servo-block med automatisk kalibrering | block för relativ position eller kalibrera kuggstång |
| Lampor på en knapp | Växla-block | en variabel och *om … då … annars* |
| Ljud, sekvenser, villkor | nej | ja |
| Aktuella värden | på varje fog i en rad | Monitor och monitorer på instrumentpanelen |
| Redigera medan programmet körs | nej | ja |

Välj **Snabbkopplingar** när varje kontroll bara ska röra något: bilar, lastbilar, tåg, kranar. Välj **Logikblock** när du behöver logik: ljud, blinkmönster, sekvenser, reaktioner på sensorer, spel. Programtypen kan inte ändras, men du kan skapa en andra profil för samma modell. Mer om detta i [Skapa en profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Nästa steg {#next-steps}

- Visa batteriet på en **Monitor** på instrumentpanelen och varna när det börjar ta slut: [Exempel](/docs/Application/BlockBuilder/Examples#battery-warning).
- Kör med handkontroll: [Gamepad-block](/docs/Application/BlockBuilder/Blocks/Gamepad) och [exemplet med handkontroll](/docs/Application/BlockBuilder/Examples#gamepad).
- Få bilen att kännas verklig med pedaler, växellåda och tröghet: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Lär dig redigeraren: [Arbeta i redigeraren](/docs/Application/BlockBuilder/Editor).
