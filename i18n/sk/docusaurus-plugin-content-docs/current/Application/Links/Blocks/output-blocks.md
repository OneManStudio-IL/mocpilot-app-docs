---
id: OutputBlocks
title: Bloky operácií a výstupov
description: "Prehľad všetkých operácií a výstupov Rýchlych prepojení: Motor, Servo, Svetlo, operácie Technic Move, BuWizz a Mould King, Hub, Indikátor, LED hubu, LED matica, Kalibrovať servá."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloky operácií a výstupov {#operation-and-output-blocks}

Karta palety **Výstupy** obsahuje operácie a výstupy. Ako ich používať: [Operácie a výstupy](/docs/Application/Links/Operations).

- **Operácia** hovorí, čo sa má urobiť. Musí za ňou nasledovať výstup [Hub](#hub-out), ktorý hovorí kde.
- **Priamy výstup** ([Indikátor](#dash-indicator), [LED hubu](#hub-led), [LED matica](#hub-matrix), [Kalibrovať servá](#cmd-calibrate)) ukončí riadok sám; riadok nesmie mať operáciu.

**Motor**, **Servo**, **Motor na čas** a **Svetlo** sú v palete vždy. Ostatné operácie sa zobrazia iba vtedy, keď ich dokáže vykonať niektorý hub profilu.

„Zapnuté“ nižšie znamená signál zap./vyp., ktorý je zapnutý, alebo hodnotu aspoň 0,5 (s ľubovoľným znamienkom).

## Operácie pre porty {#operations-for-ports}

### Motor {#op-motor}

Poháňa motor hodnotou vstupu: čím viac zatlačíte, tým rýchlejšie; 0 ho zastaví.

- Prijíma: hodnotu alebo zap./vyp. (zapnuté = plná rýchlosť).
- **Pri zastavení**: **Predvolené hubom** (predvolené), **Dobeh**, **Brzda** alebo **Držať polohu**.
- **Zrýchlenie hubu**: **Predvolené hubom** (predvolené), **Rýchlo**, **Vyvážene**, **Plynulo**, **Pomaly** alebo **Veľmi pomaly**: vlastná rampa hubu. Pre vlastnú rampu použite [Plynulo](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Detekcia zaseknutia**: **Predvolené hubom** (predvolené), **Zap.** alebo **Vyp.**
- Huby: ktorýkoľvek hub s portami. **Pri zastavení** a **Zrýchlenie hubu** vyžadujú hub s riadením polohy (nie SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King); **Detekcia zaseknutia** vyžaduje Robot Inventor. Na Technic Move Hube Motor poháňa auto.

### Servo {#op-servo}

Riadi pomocou motora s enkodérom: vstup −1…1 natočí motor na *stred + hodnota × uhol* a 0 ho vráti do stredu.

- Prijíma: hodnotu alebo zap./vyp.
- **Kalibrácia**: **Ručne** (predvolené) alebo **Auto**.
- **Uhol**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 otáčka, ±2 otáčky, ±3 otáčky alebo ±5 otáčok (predvolené ±90°). Iba v režime Ručne.
- **Stred**: −20°, −10°, −5°, 0°, +5°, +10° alebo +20° (predvolené 0°). Iba v režime Ručne.
- **Rýchlosť otáčania**: 25, 50, 75 alebo 100 % (predvolené 100 %).
- Ručne: nula je tam, kde bol motor pri zapnutí, alebo poloha, ktorú nastavíte tlačidlom **Nastaviť ako nulu** (najprv ju doladíte tlačidlami **◀ 5°** / **5° ▶**).
- Auto: pri každom spustení sa motor otočí k obom koncovým dorazom; stred sa stane nulou a rozsah pohybu uhlom. **Kalibrovať teraz** to spustí okamžite. Riadenie musí mať koncové dorazy.
- Huby a porty: motor s enkodérom na hube s riadením polohy (nie SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King). Na Technic Move Hube Servo otáča hrebeňom riadenia hubu, ktorý si hub kalibruje sám.

<Screenshot name="links-servo-settings" alt="Nastavenia bloku Servo" width={900} />

### Motor na čas {#op-timed}

Pri každom zapnutí vstupu poháňa motor nastavený čas. Rýchlosť a smer sa berú z hodnoty vstupu v danom okamihu.

- Prijíma: hodnotu alebo zap./vyp.
- **Čas**: 0,5, 1, 2, 3, 5 alebo 10 s (predvolené 1 s).
- Huby: ktorýkoľvek hub s portami; na Technic Move Hube poháňa auto.

### Otočiť o stupne {#op-degrees}

Pri každom zapnutí vstupu otočí motor o nastavený uhol. Záporný vstup ho otočí opačne.

- Prijíma: hodnotu alebo zap./vyp.
- **Stupne**: 45°, 90°, 180°, 1 otáčka, 2 otáčky, 3 otáčky, 5 otáčok alebo 10 otáčok (predvolené 1 otáčka).
- **Rýchlosť**: 25, 50, 75 alebo 100 % (predvolené 50 %).
- Huby a porty: motor s enkodérom na hube s riadením polohy.

### Ísť do polohy {#op-goto}

Pri zapnutí vstupu natočí motor do absolútnej polohy a pri vypnutí do inej. Ide najkratšou cestou.

- Prijíma: hodnotu alebo zap./vyp.
- **Poloha pri zap.**: 0°, 45°, 90°, 135°, 180°, 225°, 270° alebo 315° (predvolené 90°).
- **Poloha pri vyp.**: **Zostať** alebo jedna z rovnakých polôh (predvolené 0°).
- **Rýchlosť**: 25, 50, 75 alebo 100 % (predvolené 50 %).
- Huby a porty: uhlový motor (absolútna poloha) na hube s riadením polohy.

### Svetlo {#op-light}

Ovláda svetlá LEGO® na porte.

- Prijíma: hodnotu alebo zap./vyp. Pri hodnote ju jas sleduje (−1 aj 1 znamenajú plný jas).
- **Jas**: 25, 50, 75 alebo 100 % (predvolené 100 %).
- **Blikanie: zap.**: **Bez blikania** (predvolené), 0,25, 0,5, 1 alebo 2 s: ako dlho svetlo pri každom bliknutí svieti.
- **Blikanie: vyp.**: **Rovnako ako zap.** (predvolené), 0,25, 0,5, 1 alebo 2 s: ako dlho je zhasnuté.
- Huby: ktorýkoľvek hub s portami okrem WeDo 2.0. Na Technic Move Hube Svetlo zapína svetlá auta.

### Farba portu {#op-portcolor}

Nastaví farbu LED portov hubu BuWizz 3.0 Pro.

- Prijíma: hodnotu alebo zap./vyp.
- **Farba**: **Zo zoznamu** (predvolené) alebo **RGB**.
- **Farba pri zap.** (predvolená Červená) a **Farba pri vyp.** (predvolené Vyp.): Vyp., Ružová, Fialová, Modrá, Svetlomodrá, Svetlozelená, Zelená, Žltá, Oranžová, Červená, Biela.
- **Červená**, **Zelená**, **Modrá** (RGB): 0, 32, 64, 128, 192 alebo 255 (predvolené 255, 0, 0).
- Huby a porty: BuWizz 3.0 Pro, porty 1–4. Po zastavení programu LED zhasnú.

### Svetlá senzora {#op-sensorlights}

Kým je vstup zapnutý, rozsvieti štyri segmenty okolo „očí“ senzora vzdialenosti Technic.

- Prijíma: hodnotu alebo zap./vyp.
- **Svetlá**: **Všetky** (predvolené), **Hore**, **Dole**, **Vľavo**, **Vpravo** alebo **Uhlopriečne**.
- **Jas**: 25, 50, 75 alebo 100 % (predvolené 100 %).
- Huby a porty: Robot Inventor, jeden port so senzorom vzdialenosti. Po zastavení programu svetlá zhasnú.

## Operácie pre celý hub {#operations-for-the-whole-hub}

Blok Hub za týmito operáciami neberie žiadne porty.

### Brzda {#op-brake}

Brzdí auto, kým je vstup zapnutý.

- Prijíma: hodnotu alebo zap./vyp. Bez nastavení.
- Huby: Technic Move.

### Boost {#op-boost}

Kým je vstup zapnutý, prepne hub do výkonového režimu boost a po vypnutí späť do normálneho.

- Prijíma: hodnotu alebo zap./vyp. Bez nastavení.
- Huby: Technic Move.

### Výkonový impulz {#op-pulse}

Pri každom zapnutí vstupu pošle jeden výkonový impulz: motory bežia asi dve sekundy na maximálny výkon.

- Prijíma: hodnotu alebo zap./vyp. Bez nastavení.
- Huby: Technic Move s konfiguráciou **Batmobile™ Tumbler**; pozrite si [Konfigurácie Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Režim výkonu {#op-powermode}

Nastaví režim výkonu hubu BuWizz 2.0 pri zapnutí vstupu a, ak ho vyberiete, aj pri vypnutí.

- Prijíma: hodnotu alebo zap./vyp.
- **Režim pri zap.**: **Pomaly**, **Normálny** (predvolené), **Rýchlo** alebo **Ludicrous**.
- **Režim pri vyp.**: **Ponechať** (predvolené) alebo jeden z režimov.
- Huby: BuWizz 2.0.

### Kanál {#op-channel}

Prepne ovládací kanál hubu Mould King pri zapnutí vstupu a, ak ho vyberiete, aj pri vypnutí.

- Prijíma: hodnotu alebo zap./vyp.
- **Kanál pri zap.**: **A** (predvolené), **B** alebo **C**.
- **Kanál pri vyp.**: **Ponechať** (predvolené), **A**, **B** alebo **C**.
- Huby: Mould King 4.0 a 6.0.

## Výstupy {#outputs}

### Hub {#hub-out}

Kde sa operácia vykoná: hub a jeho porty. Pre každý hub profilu existuje jeden blok Hub.

- **Hub**: hub profilu.
- **Porty**: jeden alebo viac portov daného hubu (A–D na väčšine hubov a na SBrick, A–F na Robot Inventor a Mould King 6.0, 1–4 na BuWizz 2.0, 1–4 a navyše A a B na BuWizz 3.0 Pro). Port môže patriť iba jednému riadku.
- Prijíma: operáciu. Technic Move Huby a operácie pre celý hub neberú žiadne porty.
- Viac: [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).

### Indikátor {#dash-indicator}

Zobrazí hodnotu na monitore panela tak, ako je.

- Prijíma: hodnotu alebo zap./vyp., bez operácie pred ním.
- **Indikátor na paneli**: **Textový monitor** (Monitor), **Monitor hodnoty** (Úroveň batérie, Rýchlomer) alebo **Monitor náklonu** na paneli.
- **Os**: **Náklon X** alebo **Náklon Y**, iba pre Monitor náklonu (jeden riadok na os).
- Textový monitor hneď za senzorom hubu ukazuje skutočnú hodnotu s jednotkou.

### LED hubu {#hub-led}

Farebné stavové svetlo hubu: jedna farba, kým je vstup zapnutý, a iná, kým je vypnutý.

- Prijíma: hodnotu alebo zap./vyp., bez operácie pred ním.
- **Hub**: hub s farebnou LED.
- **Farba**: **Zo zoznamu** (predvolené) alebo **RGB**.
- **Farba pri zap.** (predvolená Červená) a **Farba pri vyp.** (predvolené Vyp.): Vyp., Ružová, Fialová, Modrá, Svetlomodrá, Svetlozelená, Zelená, Žltá, Oranžová, Červená, Biela.
- **Červená**, **Zelená**, **Modrá** (RGB): 0, 32, 64, 128, 192 alebo 255 (predvolené 255, 0, 0).
- Huby: huby LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, diaľkový ovládač Powered Up); nie BuWizz, SBrick ani Mould King.

### LED matica {#hub-matrix}

Svetelná matica hubu.

- Prijíma: hodnotu alebo zap./vyp., bez operácie pred ním.
- **Hub**: hub s LED maticou.
- **Zobraziť**: **Stĺpec úrovne** (predvolené; riadky sa rozsvecujú odspodu podľa hodnoty), **Číslo** (hodnota od −100 do 100) alebo **Obrázok pri zap.**
- **Obrázok**: **Srdce** (predvolené), **Úsmev**, **Smutný**, **Fajka**, **Krížik**, **Šípka hore**, **Šípka dole**, **Šípka vľavo**, **Šípka vpravo** alebo **Všetko svieti**.
- **Orientácia**: **Ponechať** (predvolené), **Normálne**, **Hore nohami**, **Vľavo** alebo **Vpravo**.
- Huby: Robot Inventor. Po zastavení programu sa matica vymaže.

### Kalibrovať servá {#cmd-calibrate}

Pri každom zapnutí vstupu sa znova nakalibruje každé [Servo](#op-servo) v programe, ktoré je v režime **Auto**.

- Prijíma: hodnotu alebo zap./vyp., bez operácie pred ním. Bez nastavení.
- Program musí mať pripravený riadok so Servom v režime Auto, inak riadok hlási „V tomto programe nie je žiadne servo v režime automatickej kalibrácie“.
