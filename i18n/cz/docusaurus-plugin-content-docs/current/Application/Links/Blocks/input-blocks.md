---
id: InputBlocks
title: Vstupní bloky
description: "Přehled všech vstupů Rychlých propojení: ovládací prvky panelu a jejich kanály, vozidlo, gamepad, tlačítka a senzory hubu."
---

import Screenshot from '@site/src/components/Screenshot';

# Vstupní bloky {#input-blocks}

Každý řádek začíná vstupem. Karta **Vstupy** v paletě ukazuje bloky, které váš profil může právě teď použít: jeden blok pro každý ovládací prvek panelu (u prvků s více kanály jeden pro každý kanál), bloky **Vozidlo**, blok **Herní ovladač** a jeden blok **Hub** pro každý hub. Jak je používat: [Vstupy](/docs/Application/Links/Inputs).

Každý vstup posílá řádkem jeden ze dvou signálů:

- **hodnota**: číslo od −1 do 1 (0…1 u prvků, které nemají zápornou stranu);
- **zapnuto/vypnuto**: 1 nebo 0.

Bloky zpracování a operace přijímají jen signály, se kterými umí pracovat; viz [Bloky zpracování](/docs/Application/Links/Blocks/ProcessingBlocks).

## Ovladač {#src-controller}

Ovládací prvek z vašeho panelu, zobrazený svým názvem (**JOY1**, **SLDR1**, **BTN2**…).

- **Ovladač**: kterýkoli ovládací prvek panelu z níže uvedeného seznamu. Monitory jsou výstupy, ne vstupy.
- **Kanál**: co prvek dává, u prvků s více kanály. Paleta nabízí jeden blok pro každý kanál.

Volant, pedály, řadicí páka, ruční brzda, blinkry, rozdělovací převodovka a jízdní kontrolér jsou popsány na stránce [Speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls).

Pokud je prvek z panelu odebrán, řádek hlásí „Vyberte ovladač na panelu“. Pokud jeho kanál už neexistuje, hlásí „Zvolte, co dává …“ (u joysticku: „… se v této ose nepohybuje“).

### Joystick {#controller-joystick}

- **Kanál**: **Osa X** nebo **Osa Y**. Joystick nastavený na **Pouze vodorovně (X)** nebo **Pouze svisle (Y)** nabízí jen tuto osu.
- Dává: hodnotu −1…1, uprostřed 0.

### Posuvník, svislý posuvník {#controller-slider}

- Bez kanálu.
- Dává: hodnotu 0…1, nebo −1…1, když je zapnuté **Záporné hodnoty**.

### Jízdní kontrolér {#controller-train}

Jízdní kontrolér (speciální ovládací prvek) funguje v Rychlých propojeních jako posuvník.

- Bez kanálu.
- Dává: hodnotu −1…1: polohu páky jako podíl všech stupňů, zápornou při zařazené zpátečce, 0 v neutrálu.

### Otočný ovladač {#controller-knob}

Otočný ovladač z placených motivů funguje v Rychlých propojeních jako posuvník.

- Bez kanálu.
- Dává: hodnotu 0…1, nebo −1…1, když má ovladač nulu uprostřed.

### Volant {#controller-wheel}

- **Kanál**: **Úhel řízení** (výchozí) nebo **Klakson**.
- Úhel řízení dává: hodnotu −1…1, při jízdě rovně 0.
- Klakson dává: hodnotu 1, dokud je stisknutá oblast klaksonu, jinak 0.

### Pedály {#controller-pedals}

- **Kanál**: **Plynový pedál** (výchozí) nebo **Brzdový pedál**.
- Dává: hodnotu 0…1, jak hluboko je pedál sešlápnutý.
- Pedály dávají surovou polohu pedálu. Pro auto, které samo zrychluje, zpomaluje a couvá, použijte vstup [Vozidlo](#src-vehicle).

### Řadicí páka {#controller-gear}

Manuální i automatická řadicí páka (speciální ovládací prvek).

- **Kanál**: **Převod** (výchozí) nebo **Směr (R − / vpřed +)**.
- Převod, manuální převodovka: zařazený rychlostní stupeň dělený počtem stupňů vpřed: nejvyšší stupeň 1, neutrál 0, zpátečka záporně. Se 4 stupni dává 2. stupeň 0,5.
- Převod, automatická převodovka: totéž co Směr.
- Směr dává: −1 v R, 0 v N (a P), +1 v libovolném stupni vpřed nebo v D.

### Ruční brzda {#controller-handbrake}

- **Kanál**: **Ruční brzda zajištěna** (výchozí) nebo **Síla ruční brzdy**.
- Ruční brzda zajištěna dává: zapnuto/vypnuto, zapnuto, dokud je páka zajištěná.
- Síla ruční brzdy dává: hodnotu 0…1, jak daleko je páka vytažená.

### Blinkry {#controller-turnsignals}

Páčka blinkrů (speciální ovládací prvek).

- **Kanál**: **Blinkry (vlevo − / vpravo +)** (výchozí), **Levý blinkr**, **Pravý blinkr** nebo **Světlo**.
- Blinkry dávají: hodnotu −1 (vlevo), 0 (vypnuto) nebo +1 (vpravo).
- Levý blinkr a Pravý blinkr dávají: hodnotu 1, dokud je daný blinkr zapnutý (bliká spolu se světlem, když má prvek zapnuté blikání), jinak 0.
- Světlo dává: hodnotu 1, dokud svítí světla, jinak 0.

### Rozdělovací převodovka {#controller-transfercase}

[Rozdělovací převodovka](/docs/Application/Dashboard/SpecialControls#transfer-case) (speciální ovládací prvek).

- **Kanál**: **Pohon všech kol** (výchozí), **Redukce**, **Uzávěrka předního diferenciálu**, **Uzávěrka středového diferenciálu** nebo **Uzávěrka zadního diferenciálu**.
- Pohon všech kol dává: zapnuto/vypnuto, zapnuto ve 4H a 4L.
- Redukce dává: zapnuto/vypnuto, zapnuto ve 4L.
- Každá uzávěrka diferenciálu dává: zapnuto/vypnuto, zapnuto, dokud je daná uzávěrka zapnutá.
- Samotná poloha (2H, 4H, N, 4L) jde do simulátoru přes nastavení **Rozdělovací převodovka** vstupu [Vozidlo](#src-vehicle).

### D-pad {#controller-dpad}

- **Kanál**: **Nahoru / dolů** nebo **Vlevo / vpravo**.
- Dává: hodnotu +1 (nahoru nebo vpravo), −1 (dolů nebo vlevo) nebo 0.

### Tlačítko {#controller-button}

- Bez kanálu.
- Dává: zapnuto/vypnuto, zapnuto, dokud je stisknuté.

### Spínač {#controller-switch}

- Bez kanálu.
- Dává: zapnuto/vypnuto.

### Krokový spínač {#controller-stepper}

- Bez kanálu.
- Dává: hodnotu: aktuální krok dělený hodnotou **Počet kroků**, takže poslední krok je 1 (−1 pro poslední záporný krok).

## Vozidlo {#src-vehicle}

Simulované auto ovládané pedály, řadicí pákou, ruční brzdou a rozdělovací převodovkou z panelu: zrychluje, brzdí, dojíždí a couvá jako skutečné vozidlo a řádek dostává jeho rychlost nebo otáčky motoru. Paleta ukazuje bloky Vozidlo, když má panel pedály, řadicí páku nebo ruční brzdu, a to jeden blok pro každý výstup, rovnou propojený s prvním prvkem každého druhu.

- **Pedály**: pedály z panelu, které vozidlo ovládají (povinné).
- **Řadicí páka**: **žádné** nebo řadicí páka na panelu. Bez ní vozidlo couvá, když ve stoji držíte brzdový pedál.
- **Ruční brzda**: **žádné** nebo ruční brzda na panelu.
- **Rozdělovací převodovka**: **žádné** nebo rozdělovací převodovka na panelu. Ve 2H a 4H vozidlo jezdí, jako by tam nebyla, v N nejede (jede setrvačností), ve 4L je jeho rychlost omezena na 40 %.
- **Typ vozidla**: **Osobní auto** (výchozí), **Terénní vozidlo**, **Sportovní auto** nebo **Nákladní auto**. Typy se liší setrvačností a rychlostí couvání; nákladní auto má navíc vzduchovou brzdu.
- **Výstup**:
  - **Rychlost** (výchozí): hodnota −1…1, při couvání záporná;
  - **Otáčky motoru (ot/min)**: hodnota 0…1;
  - **Brzdění**: zapnuto/vypnuto, zapnuto, dokud vozidlo brzdí;
  - **Na ruční brzdě**: zapnuto/vypnuto.

Problémy: „Vyberte pedály vozidla“, „… není na panelu“.

<Screenshot name="links-vehicle-settings" alt="Nastavení vstupního bloku Vozidlo" width={900} />

## Gamepad {#src-gamepad}

Herní ovladač připojený k vašemu zařízení. Blok je v paletě, jen dokud je zapnuté **Povolit bloky gamepadu** (stránka **Herní ovladač** v horní liště); jinak řádek hlásí „Zapněte bloky herního ovladače na stránce Herní ovladač (horní lišta)“.

- **Vstup** (výchozí **Levá páčka Y**). Popisky se řídí nastavením **Rozložení tlačítek gamepadu** (Xbox / PlayStation):
  - **Levá páčka Y**, **Levá páčka X**, **Pravá páčka Y**, **Pravá páčka X**: hodnota −1…1;
  - **RT** / **R2**, **LT** / **L2** (spouště): hodnota;
  - **A**, **B**, **X**, **Y** / **Křížek**, **Kolečko**, **Čtverec**, **Trojúhelník**: zapnuto/vypnuto;
  - **LB** / **L1**, **RB** / **R1** (horní tlačítka): zapnuto/vypnuto;
  - **Nahoru**, **Dolů**, **Vlevo**, **Vpravo** (D-pad): zapnuto/vypnuto.

## Hub {#src-hub}

Vlastní tlačítko hubu nebo senzor: na hubu nebo na některém z jeho portů. Pro každý hub profilu existuje jeden vstup Hub, kromě hubů Mould King, které jen přijímají příkazy.

- **Hub**: hub profilu.
- **Tlačítko nebo senzor**: jen to, co tento hub umí hlásit (seznam níže).
- **Port**: pro senzory na portu (hodnoty motoru, senzory na portech).
- **Orientace hubu**: pro náklon a zrychlení u hubů, které ji umí změnit: **Ponechat** (výchozí) nebo podle toho, jak je hub v modelu namontovaný.

Hodnota senzoru putuje řádkem dělená svým plným rozsahem a omezená na −1…1: baterie na 50 % dává 0,5. Textový **Monitor** hned za senzorem ukazuje skutečnou hodnotu s jednotkou.

| Tlačítko nebo senzor | Signál | Jednotka, plný rozsah | Huby |
|---|---|---|---|
| **Tlačítko 1, 2…** | zapnuto/vypnuto | | huby s tlačítkem; tlačítka ovladače LEGO® Powered Up |
| **Baterie** | hodnota | %, 100 | huby, které ji hlásí |
| **Napětí baterie** | hodnota | V, 12 | huby, které ho hlásí |
| **Výstupní napětí** | hodnota | V, 12 | BuWizz 2.0 |
| **Teplota** | hodnota | °C, 100 | huby, které ji hlásí |
| **Náklon: klopení** | hodnota | °, 90 | huby se senzorem náklonu |
| **Náklon: klonění** | hodnota | °, 180 | huby se senzorem náklonu |
| **Náklon: stáčení** | hodnota | °, 180 | huby s osou stáčení |
| **Zrychlení X / Y / Z** | hodnota | m/s², 19,6 | huby s akcelerometrem |
| **Rychlost otáčení X / Y / Z** | hodnota | °/s, 360 | huby s gyroskopem: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Proud hubu** | hodnota | mA, 3000 | Technic Hub |
| **Rychlost motoru** | hodnota | %, 100 | port; všechny huby s porty |
| **Úhel motoru** | hodnota | °, 360 (relativní) | port; motory s enkodérem; ne SBrick, BuWizz 2.0, WeDo 2.0 |
| **Poloha motoru** | hodnota | °, 180 (absolutní) | port; úhlové motory |
| **Výkon motoru** | hodnota | %, 100 | port; Robot Inventor |
| **Proud motoru** | hodnota | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Senzor vzdálenosti** | hodnota | 250 | port; ne SBrick ani BuWizz |
| **Senzor barev** | hodnota | číslo barvy, 10 | port; ne SBrick, BuWizz ani WeDo 2.0 |
| **Odražené světlo**, **Okolní světlo** | hodnota | %, 100 | port; ne SBrick, BuWizz ani WeDo 2.0 |
| **Barevný tón** | hodnota | °, 360 | port; senzor barev Technic nebo senzor barev a vzdálenosti BOOST; ne SBrick, BuWizz ani WeDo 2.0 |
| **Sytost barvy**, **Jas barvy** | hodnota | %, 100 | port; jako Barevný tón |
| **Senzor náklonu: klopení / klonění** | hodnota | °, 45 | port; senzor náklonu WeDo 2.0 / BOOST; ne SBrick ani BuWizz |
| **Režim výkonu** | hodnota | 1–4, 4 | BuWizz 2.0 |
| **Připojeno** | zapnuto/vypnuto | | všechny huby |

Když je hub připojený, MOCPilot kontroluje i zařízení na portu: „Port A: není tam žádný motor“, „Port A: motor nemá enkodér“, „Port A: není tam senzor vzdálenosti“ a tak dále.
