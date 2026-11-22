---
id: FirstCarBlocks
title: Stejné auto v Logických blocích
description: "Krok za krokem: naprogramujte dálkově ovládané auto LEGO s pohonem, servo řízením, světly a blinkry v Logických blocích."
---

import Screenshot from '@site/src/components/Screenshot';

# Stejné auto v Logických blocích {#the-same-car-in-logic-blocks}

V tomto návodu postavíte auto z návodu [Vaše první RC auto s Rychlými propojeními](/docs/Tutorials/FirstCarLinks) znovu, tentokrát v [Logických blocích](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Výsledek bude stejný, joystick, který jezdí a zatáčí, a tlačítko pro světla, a cestou se naučíte základy programování bloky: události, cykly, proměnné a Monitor. Nakonec můžete přidat blinkry s tikajícím zvukem.

**Co potřebujete**: stejný model jako v návodu k Rychlým propojením:

- LEGO® Technic™ Hub (88012);
- motor pohonu na **portu A**;
- motor řízení s enkodérem na **portu B** (motor Technic L nebo XL nebo libovolný úhlový motor Technic);
- světla LEGO® na **portu C** (volitelné).

S City Hubem použijte porty **A** a **B** a světla vynechte.

**Výsledek**:

```text
když program začne
nastavit (světla) na 0
nastavit relativní polohu 0  (Hub 1, port B)
opakovat vždy
    nastavit (plyn) na (joystick JOY1 osa Y)
    spustit motor na (plyn) % rychlost  (Hub 1, port A)
    jít na relativní polohu (joystick JOY1 osa X × 0.9) na 100 % rychlost  (Hub 1, port B)

když tlačítko BTN1 stisknuto
    pokud (světla) = 0 pak
        zapnout na 100 % jas  (Hub 1, port C)
        nastavit (světla) na 1
    jinak
        vypnout  (Hub 1, port C)
        nastavit (světla) na 0
```

Jak výpisy číst: každý řádek je jeden blok, tak jak ho ukazuje aplikace. Hodnoty v závorkách jsou hub a port, které v bloku zvolíte, nebo blok či proměnná, které vložíte do vstupu. Odsazené řádky patří dovnitř bloku ve tvaru C nad nimi.

## 1. Vytvořte profil {#create-the-profile}

1. Na stránce **Moje profily** začněte nový profil (**+** → **Nový profil** na telefonu, **Nový profil** na tabletu, **Soubor → Nový profil** na počítači).
2. Zvolte dlaždici **Logické bloky**.
3. Zadejte **Název** a nastavte **Úroveň bloků** na **Pokročilý**. Cyklus **opakovat vždy** a blok **pokud … pak … jinak**, které zde používáme, jsou bloky úrovně Pokročilý; paleta **Začátečník** je nezobrazuje.
4. Klepněte na **Vytvořit**.

Úroveň můžete později změnit v **Nastavení editoru** → **Vybrat úroveň bloků**. Viz [Vytvoření profilu](/docs/Application/Profiles/CreateProfile) a [Úrovně bloků](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Přidejte hub a ovládací prvky {#hub-and-dashboard}

Postupujte přesně jako v návodu k Rychlým propojením:

1. [Přidejte a připojte hub](/docs/Tutorials/FirstCarLinks#add-the-hub) v **Moje huby**.
2. [Umístěte ovládací prvky na panel](/docs/Tutorials/FirstCarLinks#dashboard): **Joystick** (**JOY1**) vlevo a **Tlačítko** (**BTN1**) vpravo.

<Screenshot name="tutorial-car-dashboard" alt="Panel s joystickem JOY1 vlevo a tlačítkem BTN1 vpravo" width={900} />

Jakmile je hub v profilu, paleta ukáže kategorie **Motory** a **Světlo**; ovládací prvky se objeví v kategorii **Ovladače na obrazovce**.

## 3. Události, nebo cyklus? {#events-or-loop}

Skript začíná blokem **události** a provádí bloky pod ním shora dolů. Několik skriptů běží současně.

- Blok události jako [když tlačítko … stisknuto](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) spustí svůj skript jednou pokaždé, když událost nastane. Události se hodí pro věci, které se stanou v určitém okamžiku: stisknutí tlačítka, přepnutí, blinkr.
- Joystick se mění neustále. Nejjednodušší způsob, jak ho sledovat, je skript, který začíná blokem [když program začne](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) a páčku stále čte v cyklu [opakovat vždy](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Toto auto používá obojí: cyklus pro jízdu a řízení a událost pro světla.

## 4. Jízda {#drive}

1. Z kategorie **Události** přetáhněte do programové plochy blok [když program začne](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started).
2. Z kategorie **Ovládání** pod něj připojte [opakovat vždy](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).
3. Z kategorie **Motory** vložte dovnitř **opakovat vždy** blok [spustit motor na … % rychlost](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed). Zvolte hub a port **A**.
4. Z kategorie **Ovladače na obrazovce** přetáhněte do vstupu rychlosti hodnotový blok [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float). Zvolte **JOY1** a **osa Y**.

```text
když program začne
opakovat vždy
    spustit motor na (joystick JOY1 osa Y) % rychlost  (Hub 1, port A)
```

Postavte auto na stojan, stiskněte **Spustit** a pohněte joystickem: joystick dává −100 až 100, což je přesně rychlost motoru v procentech. Až skončíte, stiskněte **Zastavit**.

**Jede vzad, když joystick tlačíte nahoru?** Použijte blok [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) z kategorie **Operátor**: `(joystick JOY1 osa Y × -1)`. **Příliš rychlé?** Násobte místo toho 0.5.

## 5. Řízení {#steer}

Motor řízení sleduje osu X joysticku pomocí bloku [jít na relativní polohu … na … % rychlost](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relativní polohy se počítají od bodu, který nastavíte blokem [nastavit relativní polohu …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Připojte **nastavit relativní polohu** hned pod **když program začne**, nad **opakovat vždy**. Hodnotu nechte 0 a zvolte port **B**.
2. Dovnitř **opakovat vždy** pod blok motoru přidejte **jít na relativní polohu … na … % rychlost** s portem **B**.
3. Do jeho vstupu polohy vložte **… × …** s hodnotou **osa X** joysticku vlevo a `0.9` vpravo. Tím se z −100…100 stane −90…90 stupňů.
4. Rychlost nastavte na 100.

```text
když program začne
nastavit relativní polohu 0  (Hub 1, port B)
opakovat vždy
    spustit motor na (joystick JOY1 osa Y) % rychlost  (Hub 1, port A)
    jít na relativní polohu (joystick JOY1 osa X × 0.9) na 100 % rychlost  (Hub 1, port B)
```

Před každým **Spustit** natočte kola rukou rovně: tato poloha se stane středem. Pokud se kola natáčejí příliš, použijte menší číslo než 0.9; pokud zatáčejí opačně, použijte −0.9.

### Možnost: automatická kalibrace řízení {#calibrate-rack}

Pokud má řízení koncové dorazy, najde blok [kalibrovat ozubený hřeben … střed … stupně …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) střed a rozsah za vás. Nejprve vytvořte dvě proměnné (**Proměnné** → **Vytvořit proměnnou**), například `střed` a `rozsah`, a vložte je do vstupů bloku. Blok natočí hřeben k oběma koncům, zastaví se uprostřed a výsledky zapíše do proměnných; skript pokračuje, až je kalibrace hotová.

```text
když program začne
kalibrovat ozubený hřeben (střed) střed (rozsah) stupně  (Hub 1, port B)
nastavit relativní polohu 0  (Hub 1, port B)
opakovat vždy
    spustit motor na (joystick JOY1 osa Y) % rychlost  (Hub 1, port A)
    jít na relativní polohu ((rozsah × joystick JOY1 osa X) ÷ 100) na 100 % rychlost  (Hub 1, port B)
```

**nastavit relativní polohu 0** hned po kalibraci udělá ze středu nulu, takže plná výchylka páčky natočí kola o změřený rozsah.

## 6. Světla na tlačítku {#lights}

Rychlá propojení mají hotový blok Přepínač. V Logických blocích si [proměnná](/docs/Application/BlockBuilder/Blocks/Variables) pamatuje, jestli světla svítí.

1. V kategorii **Proměnné** klepněte na **Vytvořit proměnnou** a pojmenujte ji `světla`.
2. Na začátek hlavního skriptu přidejte [nastavit … na …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to): `nastavit (světla) na 0`.
3. Z kategorie **Ovladače na obrazovce** přetáhněte na volné místo blok [když tlačítko … stisknuto](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) a zvolte **BTN1**.
4. Pod něj přidejte [pokud … pak … jinak](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) s podmínkou [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(světla) = 0`.
5. Do první větve přidejte [zapnout na … % jas](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) a `nastavit (světla) na 1`. Do druhé větve přidejte [vypnout](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) a `nastavit (světla) na 0`.

```text
když tlačítko BTN1 stisknuto
    pokud (světla) = 0 pak
        zapnout na 100 % jas  (Hub 1, port C)
        nastavit (světla) na 1
    jinak
        vypnout  (Hub 1, port C)
        nastavit (světla) na 0
```

S **Přepínačem** místo tlačítka je to ještě jednodušší: *když přepínač … zapnut / vypnut*; viz [příklady](/docs/Application/BlockBuilder/Examples).

## 7. Spusťte program a sledujte Monitor {#monitor}

Když něco nefunguje podle očekávání, podívejte se na hodnoty. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) (na počítači na horní liště, na telefonu nebo tabletu v nabídce **Více**) ukazuje za běhu programu každou proměnnou.

1. Vytvořte proměnnou `plyn`.
2. V cyklu do ní ukládejte hodnotu joysticku a proměnnou použijte jako rychlost motoru:

```text
opakovat vždy
    nastavit (plyn) na (joystick JOY1 osa Y)
    spustit motor na (plyn) % rychlost  (Hub 1, port A)
    jít na relativní polohu (joystick JOY1 osa X × 0.9) na 100 % rychlost  (Hub 1, port B)
```

3. Stiskněte **Spustit** a otevřete **Monitor**. Pohybujte joystickem a stiskněte BTN1: `plyn` sleduje páčku a `světla` se přepíná mezi 0 a 1.

<Screenshot name="blocks-monitor" alt="Monitor zobrazující proměnné a seznam za běhu programu" width={900} />

- `plyn` se mění, ale motor se netočí: zkontrolujte připojení hubu v **Moje huby** a port v bloku.
- `plyn` zůstává na 0: zkontrolujte, že blok čte **JOY1** a správnou osu.

V Logických blocích zůstává program za běhu upravitelný, takže můžete změnit číslo a hned vidět výsledek. Tady je celý program:

<Screenshot name="tutorial-car-blocks-program" alt="Hotový program auta: hlavní skript s cyklem opakovat vždy a skript světel BTN1" width={900} />

Další pomoc: [Řešení problémů](/docs/Help/Troubleshooting).

## 8. Volitelně: blinkry se zvukem {#turn-signals}

Přidejte na panel [speciální ovládací prvek](/docs/Application/Dashboard/SpecialControls#turn-signals) **Blinkry** (**STALK1**) a zapojte světlo do **portu D**. Páčku táhněte nahoru pro levý blinkr a dolů pro pravý.

```text
když blinkry STALK1 levý blinkr se zapne
    zvuk Blinkr přehrát
    opakovat, dokud ne (blinkry STALK1 levý blinkr je zapnutý ?)
        zapnout na 100 % jas  (Hub 1, port D)
        čekat 0.5 sekundy
        vypnout  (Hub 1, port D)
        čekat 0.5 sekundy
    zastavit zvuk Blinkr
```

Bloky: [když blinkry …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) a [blinkry … je zapnutý ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) v kategorii **Ovladače na obrazovce**; [zvuk … přehrát](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) a [zastavit zvuk …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) v kategorii **Zvuky**; [opakovat, dokud …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) a [čekat … sekundy](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) v kategorii **Ovládání**; [ne …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) v kategorii **Operátor**.

Zvuk **Blinkr** se opakuje sám, dokud ho nezastavíte. Zvuk hraje na vašem telefonu, tabletu nebo počítači.

Skript duplikujte (dlouhé stisknutí nebo kliknutí pravým tlačítkem → **Duplikovat**) a v obou blocích zvolte **pravý blinkr**. Oba blinkry pak blikají stejným světlem na portu D; pro samostatná levá a pravá světla potřebujete dva volné porty, například na druhém hubu.

## Rychlá propojení, nebo Logické bloky: co zvolit? {#which-to-choose}

| | Rychlá propojení | Logické bloky |
|---|---|---|
| Toto auto | 3 řádky | 2 skripty, 2 proměnné |
| Plynulý rozjezd, mrtvá zóna, omezení | hotové bloky | násobení a výpočty vlastními silami |
| Servo řízení | blok Servo s kalibrací Auto | bloky relativní polohy nebo kalibrace hřebenu |
| Světla na tlačítku | blok Přepínač | proměnná a *pokud … pak … jinak* |
| Zvuky, sekvence, podmínky | ne | ano |
| Aktuální hodnoty | na každém spoji řádku | Monitor a monitory na panelu |
| Úpravy za běhu | ne | ano |

**Rychlá propojení** zvolte, když každý ovládací prvek prostě něčím pohybuje: auta, nákladní vozy, vlaky, jeřáby. **Logické bloky** zvolte, když potřebujete logiku: zvuky, vzory blikání, sekvence, reakce na senzory, hry. Typ programu změnit nelze, ale pro stejný model můžete vytvořit druhý profil. Více v článku [Vytvoření profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Další kroky {#next-steps}

- Zobrazte baterii na **Monitoru** na panelu a upozorněte, když dochází: [Příklady](/docs/Application/BlockBuilder/Examples#battery-warning).
- Jezděte s herním ovladačem: [Bloky herního ovladače](/docs/Application/BlockBuilder/Blocks/Gamepad) a [příklad s herním ovladačem](/docs/Application/BlockBuilder/Examples#gamepad).
- Dodejte autu realističnost pomocí pedálů, převodovky a setrvačnosti: [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).
- Naučte se editor: [Práce v editoru](/docs/Application/BlockBuilder/Editor).
