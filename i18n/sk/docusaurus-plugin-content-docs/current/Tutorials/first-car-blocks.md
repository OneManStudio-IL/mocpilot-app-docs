---
id: FirstCarBlocks
title: To isté auto v Logických blokoch
description: "Krok za krokom: naprogramujte diaľkovo ovládané auto LEGO s pohonom, riadením servom, svetlami a smerovkami v Logických blokoch."
---

import Screenshot from '@site/src/components/Screenshot';

# To isté auto v Logických blokoch {#the-same-car-in-logic-blocks}

V tomto návode znova postavíte auto z návodu [Vaše prvé RC auto s Rýchlymi prepojeniami](/docs/Tutorials/FirstCarLinks), tentoraz v [Logických blokoch](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Výsledok je rovnaký, joystick na jazdu a riadenie a tlačidlo na svetlá, a popritom sa naučíte základy programovania blokmi: udalosti, cykly, premenné a Monitor. Na záver môžete pridať smerovky s tikajúcim zvukom.

**Čo potrebujete**: rovnaký model ako v návode pre Rýchle prepojenia:

- LEGO® Technic™ Hub (88012);
- hnací motor na **porte A**;
- motor riadenia s enkodérom na **porte B** (motor Technic L alebo XL alebo ľubovoľný uhlový motor Technic);
- svetlá LEGO® na **porte C** (voliteľné).

S City Hubom použite porty **A** a **B** a svetlá vynechajte.

**Výsledok**:

```text
keď program začne
nastaviť (svetla) na 0
nastaviť relatívnu polohu 0  (Hub 1, port B)
zopakovať vždy
    nastaviť (plyn) na (joystick JOY1 os Y)
    spustiť motor na (plyn) % rýchlosť  (Hub 1, port A)
    ísť na relatívnu pozíciu (joystick JOY1 os X × 0.9) na 100 % rýchlosť  (Hub 1, port B)

keď tlačidlo BTN1 je stlačené
    ak (svetla) = 0 potom
        zapnúť na 100 % jas  (Hub 1, port C)
        nastaviť (svetla) na 1
    iné
        vypnúť  (Hub 1, port C)
        nastaviť (svetla) na 0
```

Ako čítať výpisy: každý riadok je jeden blok tak, ako ho zobrazuje aplikácia. Hodnoty v zátvorkách sú hub a port, ktoré v bloku zvolíte, alebo blok či premenná, ktorú vložíte do otvoru. Odsadené riadky patria do bloku v tvare C nad nimi.

## 1. Vytvorte profil {#create-the-profile}

1. Na stránke **Moje profily** začnite nový profil (**+** → **Nový profil** na telefóne, **Nový profil** na tablete, **Súbor → Nový profil** na počítači).
2. Vyberte dlaždicu **Logické bloky**.
3. Zadajte **Názov** a nastavte **Úroveň blokov** na **Pokročilý**. Cyklus **zopakovať vždy** a blok **ak … potom … iné**, ktoré tu použijeme, sú pokročilé bloky; paleta **Začiatočník** ich nezobrazuje.
4. Ťuknite na **Vytvoriť**.

Úroveň môžete neskôr zmeniť v **Nastavenia editora** → **Vybrať úroveň blokov**. Pozrite si [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile) a [Úrovne blokov](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Pridajte hub a ovládacie prvky {#hub-and-dashboard}

Postupujte presne ako v návode pre Rýchle prepojenia:

1. [Pridajte a pripojte hub](/docs/Tutorials/FirstCarLinks#add-the-hub) v **Moje huby**.
2. [Umiestnite ovládacie prvky na panel](/docs/Tutorials/FirstCarLinks#dashboard): **Joystick** (**JOY1**) vľavo a **Tlačidlo** (**BTN1**) vpravo.

<Screenshot name="tutorial-car-dashboard" alt="Panel s joystickom JOY1 vľavo a tlačidlom BTN1 vpravo" width={900} />

Keď je hub v profile, paleta zobrazuje kategórie **Motory** a **Svetlo**; ovládacie prvky sa objavia v kategórii **Ovládače na obrazovke**.

## 3. Udalosti, alebo cyklus? {#events-or-loop}

Skript začína blokom **udalosti** a vykonáva bloky pod ním zhora nadol. Viacero skriptov beží súčasne.

- Blok udalosti, napríklad [keď tlačidlo … je stlačené](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event), spustí svoj skript raz pri každom výskyte udalosti. Udalosti sa hodia na veci, ktoré sa stanú v určitom okamihu: stlačenie tlačidla, prepnutie prepínača, smerovka.
- Joystick sa mení neustále. Najjednoduchší spôsob, ako ho sledovať, je skript, ktorý začína blokom [keď program začne](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) a páčku neustále číta v cykle [zopakovať vždy](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Toto auto používa oboje: cyklus na jazdu a riadenie a udalosť na svetlá.

## 4. Jazda {#drive}

1. Z kategórie **Udalosti** presuňte [keď program začne](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) do programovej plochy.
2. Z kategórie **Kontrola** pripojte pod neho [zopakovať vždy](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).
3. Z kategórie **Motory** vložte do **zopakovať vždy** blok [spustiť motor na … % rýchlosť](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed). Zvoľte hub a port **A**.
4. Z kategórie **Ovládače na obrazovke** presuňte blok hodnoty [joysticku](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) do otvoru pre rýchlosť. Zvoľte **JOY1** a **os Y**.

```text
keď program začne
zopakovať vždy
    spustiť motor na (joystick JOY1 os Y) % rýchlosť  (Hub 1, port A)
```

Postavte auto na podstavec, stlačte **Spustiť** a pohnite joystickom: joystick dáva hodnoty −100 až 100, čo je presne rýchlosť motora v percentách. Keď skončíte, stlačte **Zastaviť**.

**Ide dozadu, keď tlačíte hore?** Použite [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) z kategórie **Operátor**: `(joystick JOY1 os Y × -1)`. **Príliš rýchle?** Namiesto toho násobte 0.5.

## 5. Riadenie {#steer}

Motor riadenia sleduje os X joysticku pomocou bloku [ísť na relatívnu pozíciu … na … % rýchlosť](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relatívne polohy sa počítajú od bodu, ktorý nastavíte blokom [nastaviť relatívnu polohu …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Pripojte **nastaviť relatívnu polohu** hneď pod **keď program začne**, nad **zopakovať vždy**. Hodnotu nechajte na 0 a zvoľte port **B**.
2. Do **zopakovať vždy** pod blok motora pridajte **ísť na relatívnu pozíciu … na … % rýchlosť** s portom **B**.
3. Do otvoru pre polohu vložte **… × …**, s **os X** joysticku vľavo a `0.9` vpravo. Tým sa −100…100 zmení na −90…90 stupňov.
4. Rýchlosť nastavte na 100.

```text
keď program začne
nastaviť relatívnu polohu 0  (Hub 1, port B)
zopakovať vždy
    spustiť motor na (joystick JOY1 os Y) % rýchlosť  (Hub 1, port A)
    ísť na relatívnu pozíciu (joystick JOY1 os X × 0.9) na 100 % rýchlosť  (Hub 1, port B)
```

Pred každým **Spustiť** natočte kolesá rukou rovno: táto poloha sa stane stredom. Ak kolesá zatáčajú príliš, použite menšie číslo ako 0.9; ak zatáčajú opačne, použite −0.9.

### Možnosť: automatická kalibrácia riadenia {#calibrate-rack}

Ak má riadenie dorazy, blok [kalibrovať hrebeň … stred … stupne …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) nájde stred a rozsah pohybu za vás. Najprv vytvorte dve premenné (**Premenné** → **Vytvoriť premennú**), napríklad `centrum` a `rozsah`, a vložte ich do otvorov bloku. Blok otočí hrebeň k obom koncom, zastaví v strede a výsledky zapíše do premenných; skript pokračuje po dokončení kalibrácie.

```text
keď program začne
kalibrovať hrebeň (centrum) stred (rozsah) stupne  (Hub 1, port B)
nastaviť relatívnu polohu 0  (Hub 1, port B)
zopakovať vždy
    spustiť motor na (joystick JOY1 os Y) % rýchlosť  (Hub 1, port A)
    ísť na relatívnu pozíciu ((rozsah × joystick JOY1 os X) ÷ 100) na 100 % rýchlosť  (Hub 1, port B)
```

**nastaviť relatívnu polohu 0** hneď po kalibrácii urobí zo stredu nulu, takže páčka vychýlená naplno natočí kolesá o nameraný rozsah.

## 6. Svetlá na tlačidle {#lights}

Rýchle prepojenia majú hotový blok Prepínač. V Logických blokoch si to, či svietia svetlá, pamätá [premenná](/docs/Application/BlockBuilder/Blocks/Variables).

1. V kategórii **Premenné** ťuknite na **Vytvoriť premennú** a pomenujte ju `svetla`.
2. Na začiatok hlavného skriptu pridajte [nastaviť … na …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to): `nastaviť (svetla) na 0`.
3. Z kategórie **Ovládače na obrazovke** presuňte [keď tlačidlo … je stlačené](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) na voľné miesto a zvoľte **BTN1**.
4. Pod neho pridajte [ak … potom … iné](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) s podmienkou [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(svetla) = 0`.
5. Do prvej vetvy pridajte [zapnúť na … % jas](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) a `nastaviť (svetla) na 1`. Do druhej vetvy pridajte [vypnúť](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) a `nastaviť (svetla) na 0`.

```text
keď tlačidlo BTN1 je stlačené
    ak (svetla) = 0 potom
        zapnúť na 100 % jas  (Hub 1, port C)
        nastaviť (svetla) na 1
    iné
        vypnúť  (Hub 1, port C)
        nastaviť (svetla) na 0
```

S **Spínač** namiesto tlačidla je to ešte jednoduchšie: *keď prepínač … je prehodený zap / vyp*; pozrite si [príklady](/docs/Application/BlockBuilder/Examples).

## 7. Spustite a sledujte Monitor {#monitor}

Keď niečo nefunguje podľa očakávania, pozrite sa na hodnoty. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) na hornej lište ukazuje počas behu programu každú premennú.

1. Vytvorte premennú `plyn`.
2. V cykle do nej ukladajte hodnotu joysticku a premennú použite ako rýchlosť motora:

```text
zopakovať vždy
    nastaviť (plyn) na (joystick JOY1 os Y)
    spustiť motor na (plyn) % rýchlosť  (Hub 1, port A)
    ísť na relatívnu pozíciu (joystick JOY1 os X × 0.9) na 100 % rýchlosť  (Hub 1, port B)
```

3. Stlačte **Spustiť** a otvorte **Monitor**. Pohnite joystickom a stlačte BTN1: `plyn` sleduje páčku a `svetla` sa prepína medzi 0 a 1.

<Screenshot name="blocks-monitor" alt="Monitor zobrazujúci premenné a zoznam počas behu programu" width={900} />

- `plyn` sa mení, ale motor sa netočí: skontrolujte pripojenie hubu v **Moje huby** a port v bloku.
- `plyn` zostáva na 0: skontrolujte, či blok číta **JOY1** a správnu os.

V Logických blokoch zostáva program počas behu upraviteľný, takže môžete zmeniť číslo a hneď vidieť účinok. Tu je celý program:

<Screenshot name="tutorial-car-blocks-program" alt="Hotový program auta: hlavný skript s cyklom zopakovať vždy a skript svetiel pre BTN1" width={900} />

Ďalšia pomoc: [Riešenie problémov](/docs/Help/Troubleshooting).

## 8. Voliteľne: smerovky so zvukom {#turn-signals}

Pridajte na panel [špeciálny ovládací prvok](/docs/Application/Dashboard/SpecialControls#turn-signals) **Smerovky** (**STALK1**) a do **portu D** zapojte svetlo. Potiahnutím páčky hore zapnete ľavú smerovku, potiahnutím dole pravú.

```text
keď smerovky STALK1 ľavá smerovka sa zapne
    zvuk Smerovka prehrať
    zopakovať, kým nie (smerovky STALK1 ľavá smerovka je zapnutý ?)
        zapnúť na 100 % jas  (Hub 1, port D)
        čakať 0.5 sekundy
        vypnúť  (Hub 1, port D)
        čakať 0.5 sekundy
    zastaviť zvuk Smerovka
```

Bloky: [keď smerovky …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) a [smerovky … je zapnutý ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) v kategórii **Ovládače na obrazovke**; [zvuk … prehrať](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) a [zastaviť zvuk …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) v kategórii **Zvuky**; [zopakovať, kým …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) a [čakať … sekundy](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) v kategórii **Kontrola**; [nie …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) v kategórii **Operátor**.

Zvuk **Smerovka** sa opakuje sám, kým ho nezastavíte. Zvuk sa prehráva na vašom telefóne, tablete alebo počítači.

Skript duplikujte (dlhé stlačenie alebo pravé tlačidlo → **Duplikovať**) a v oboch blokoch zvoľte **pravá smerovka**. Obe smerovky potom blikajú tým istým svetlom na porte D; pre samostatné ľavé a pravé svetlo potrebujete dva voľné porty, napríklad na druhom hube.

## Rýchle prepojenia, alebo Logické bloky: čo si vybrať? {#which-to-choose}

| | Rýchle prepojenia | Logické bloky |
|---|---|---|
| Toto auto | 3 riadky | 2 skripty, 2 premenné |
| Plynulý rozbeh, mŕtva zóna, obmedzenie | hotové bloky | násobíte a počítate sami |
| Riadenie servom | blok Servo s kalibráciou Auto | bloky relatívnej polohy alebo kalibrovať hrebeň |
| Svetlá na tlačidle | blok Prepínač | premenná a *ak … potom … iné* |
| Zvuky, sekvencie, podmienky | nie | áno |
| Živé hodnoty | na každom spoji riadka | Monitor a monitory na paneli |
| Úpravy počas behu | nie | áno |

**Rýchle prepojenia** si vyberte, keď každý ovládací prvok jednoducho niečím hýbe: autá, nákladiaky, vlaky, žeriavy. **Logické bloky** si vyberte, keď potrebujete logiku: zvuky, vzory blikania, sekvencie, reakcie na senzory, hry. Typ programu sa nedá zmeniť, ale pre ten istý model si môžete vytvoriť druhý profil. Viac v časti [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Ďalšie kroky {#next-steps}

- Zobrazte batériu na **Monitor** na paneli a upozornite, keď je takmer vybitá: [Príklady](/docs/Application/BlockBuilder/Examples#battery-warning).
- Jazdite s herným ovládačom: [Bloky herného ovládača](/docs/Application/BlockBuilder/Blocks/Gamepad) a [príklad s herným ovládačom](/docs/Application/BlockBuilder/Examples#gamepad).
- Dodajte autu realistický pocit s pedálmi, prevodovkou a zotrvačnosťou: [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).
- Spoznajte editor: [Práca v editore](/docs/Application/BlockBuilder/Editor).
