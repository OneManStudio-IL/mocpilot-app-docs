---
id: OutputBlocks
title: Bloky operací a výstupů
description: "Přehled všech operací a výstupů Rychlých propojení: Motor, Servo, Světlo, operace Technic Move, BuWizz a Mould King, Hub, Indikátor, LED hubu, LED matice, Kalibrovat serva."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloky operací a výstupů {#operation-and-output-blocks}

Karta **Výstupy** v paletě obsahuje operace a výstupy. Jak je používat: [Operace a výstupy](/docs/Application/Links/Operations).

- **Operace** říká, co se má udělat. Musí za ní následovat výstup [Hub](#hub-out), který říká kde.
- **Přímý výstup** ([Indikátor](#dash-indicator), [LED hubu](#hub-led), [LED matice](#hub-matrix), [Kalibrovat serva](#cmd-calibrate)) ukončuje řádek sám; řádek nesmí mít operaci.

**Motor**, **Servo**, **Motor na dobu** a **Světlo** jsou v paletě vždy. Ostatní operace se objeví, jen když je některý hub profilu umí.

„Zapnuto“ níže znamená signál zapnuto/vypnuto ve stavu zapnuto nebo hodnotu alespoň 0,5 (s libovolným znaménkem).

## Operace pro porty {#operations-for-ports}

### Motor {#op-motor}

Pohání motor hodnotou vstupu: čím víc zatlačíte, tím rychleji; 0 ho zastaví.

- Přijímá: hodnotu nebo zapnuto/vypnuto (zapnuto = plná rychlost).
- **Při zastavení**: **Výchozí hubu** (výchozí), **Volnoběh**, **Brzda** nebo **Držet polohu**.
- **Zrychlení hubu**: **Výchozí hubu** (výchozí), **Rychlé**, **Vyvážené**, **Plynule**, **Pomalé** nebo **Velmi pomalé**: vlastní rampa hubu. Pro vlastní rampu použijte [Plynule](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Detekce zablokování**: **Výchozí hubu** (výchozí), **Zapnuto** nebo **Vypnuto**.
- Huby: libovolný hub s porty. **Při zastavení** a **Zrychlení hubu** vyžadují hub s řízením polohy (ne SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King); **Detekce zablokování** vyžaduje Robot Inventor. U Technic Move Hubu Motor v režimu **Profil auta** pohání auto a v režimu **Porty** motory `A`–`C` ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Řídí motorem s enkodérem: vstup −1…1 natočí motor na *střed + hodnota × úhel* a 0 ho vrátí do středu.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Kalibrace**: **Ručně** (výchozí) nebo **Auto**.
- **Úhel**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 otáčka, ±2 otáčky, ±3 otáčky nebo ±5 otáček (výchozí ±90°). Jen v režimu Ručně.
- **Střed**: −20°, −10°, −5°, 0°, +5°, +10° nebo +20° (výchozí 0°). Jen v režimu Ručně.
- **Rychlost otáčení**: 25, 50, 75 nebo 100 % (výchozí 100 %).
- Ručně: nula je tam, kde byl motor při zapnutí, nebo poloha, kterou nastavíte tlačítkem **Nastavit jako nulu** (předtím dolaďte tlačítky **◀ 5°** / **5° ▶**).
- Auto: při každém spuštění se motor otočí k oběma dorazům; střed se stane nulou a rozsah pohybu úhlem. **Kalibrovat teď** to spustí okamžitě. Řízení musí mít koncové dorazy.
- Huby a porty: motor s enkodérem na hubu s řízením polohy (ne SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King). U Technic Move Hubu v režimu **Profil auta** Servo natáčí hřeben řízení hubu, který si hub kalibruje sám; v režimu **Porty** použijte port `C` s kalibrací **Auto**.

<Screenshot name="links-servo-settings" alt="Nastavení bloku Servo" width={900} />

### Motor na dobu {#op-timed}

Pokaždé, když se vstup zapne, pohání motor nastavenou dobu. Rychlost a směr určuje hodnota vstupu v daném okamžiku.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Doba**: 0,5, 1, 2, 3, 5 nebo 10 s (výchozí 1 s).
- Huby: libovolný hub s porty; u Technic Move Hubu v režimu **Profil auta** pohání auto.

### Otočit o stupně {#op-degrees}

Pokaždé, když se vstup zapne, otočí motorem o nastavený úhel. Záporný vstup ho otočí opačně.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Stupně**: 45°, 90°, 180°, 1 otáčka, 2 otáčky, 3 otáčky, 5 otáček nebo 10 otáček (výchozí 1 otáčka).
- **Rychlost**: 25, 50, 75 nebo 100 % (výchozí 50 %).
- Huby a porty: motor s enkodérem na hubu s řízením polohy.

### Jet do polohy {#op-goto}

Když se vstup zapne, natočí motor do absolutní polohy, a když se vypne, do jiné. Volí nejkratší cestu.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Poloha při zapnutí**: 0°, 45°, 90°, 135°, 180°, 225°, 270° nebo 315° (výchozí 90°).
- **Poloha při vypnutí**: **Zůstat** nebo jedna ze stejných poloh (výchozí 0°).
- **Rychlost**: 25, 50, 75 nebo 100 % (výchozí 50 %).
- Huby a porty: úhlový motor (absolutní poloha) na hubu s řízením polohy.

### Světlo {#op-light}

Ovládá světla LEGO® na portu.

- Přijímá: hodnotu nebo zapnuto/vypnuto. S hodnotou se jas řídí podle ní (−1 i 1 znamenají plný jas).
- **Jas**: 25, 50, 75 nebo 100 % (výchozí 100 %).
- **Blikání: zapnuto**: **Bez blikání** (výchozí), 0,25, 0,5, 1 nebo 2 s: jak dlouho světlo při každém bliknutí svítí.
- **Blikání: vypnuto**: **Stejné jako zapnuto** (výchozí), 0,25, 0,5, 1 nebo 2 s: jak dlouho je zhasnuté.
- Huby: libovolný hub s porty kromě WeDo 2.0. U Technic Move Hubu Světlo v režimu **Profil auta** zapíná světla auta a v režimu **Porty** jednotlivě světla `1`–`6`.

### Barva portu {#op-portcolor}

Nastaví barvu LED portů BuWizz 3.0 Pro.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Barva**: **Ze seznamu** (výchozí) nebo **RGB**.
- **Barva při zapnutí** (výchozí Červená) a **Barva při vypnutí** (výchozí Vypnuto): Vypnuto, Růžová, Fialová, Modrá, Světle modrá, Světle zelená, Zelená, Žlutá, Oranžová, Červená, Bílá.
- **Červená**, **Zelená**, **Modrá** (RGB): 0, 32, 64, 128, 192 nebo 255 (výchozí 255, 0, 0).
- Huby a porty: BuWizz 3.0 Pro, porty 1–4. LED zhasnou, když se program zastaví.

### Světla senzoru {#op-sensorlights}

Dokud je vstup zapnutý, rozsvítí čtyři segmenty kolem „očí“ senzoru vzdálenosti Technic.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Světla**: **Všechna** (výchozí), **Horní**, **Dolní**, **Vlevo**, **Vpravo** nebo **Úhlopříčně**.
- **Jas**: 25, 50, 75 nebo 100 % (výchozí 100 %).
- Huby a porty: Robot Inventor, SPIKE Prime a Technic Hub, jeden port se senzorem vzdálenosti. Světla zhasnou, když se program zastaví.

### Světla senzoru barev {#op-colorlights}

Rozsvítí tři světla kolem čočky senzoru barev Technic (senzoru barev SPIKE), dokud je vstup zapnutý.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Světla**: **Všechna** (výchozí), 1, 2, 3, 1 + 2, 2 + 3 nebo 1 + 3.
- **Jas**: 25, 50, 75 nebo 100 % (výchozí 100 %).
- Huby a porty: Technic Hub, port se senzorem barev.
- Dokud jeho světla svítí, senzor nic neměří. Když se vstup vypne nebo se program zastaví, světla zhasnou a senzor zase měří barvy. Řádek, který čte senzor barev na portu, jejž rozsvěcuje jiný řádek, je problém („Řádek 2 rozsvěcuje senzor barev na portu A: svítící senzor nic neměří“).

## Operace pro celý hub {#operations-for-the-whole-hub}

Blok Hub za těmito operacemi nebere žádné porty.

### Brzda {#op-brake}

Brzdí auto, dokud je vstup zapnutý.

- Přijímá: hodnotu nebo zapnuto/vypnuto. Bez nastavení.
- Huby: Technic Move.

### Boost {#op-boost}

Dokud je vstup zapnutý, přepne hub do režimu výkonu boost, a když se vypne, zpět na normální.

- Přijímá: hodnotu nebo zapnuto/vypnuto. Bez nastavení.
- Huby: Technic Move.

### Výkonový pulz {#op-pulse}

Pokaždé, když se vstup zapne, pošle jeden výkonový pulz: motory běží asi dvě sekundy na maximální výkon.

- Přijímá: hodnotu nebo zapnuto/vypnuto. Bez nastavení.
- Huby: Technic Move s konfigurací **Batmobile™ Tumbler**; viz [Konfigurace Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Režim výkonu {#op-powermode}

Nastaví režim výkonu BuWizz 2.0, když se vstup zapne, a pokud nějaký zvolíte, i když se vypne.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Režim při zapnutí**: **Pomalé**, **Normální** (výchozí), **Rychlé** nebo **Ludicrous**.
- **Režim při vypnutí**: **Ponechat** (výchozí) nebo jeden z režimů.
- Huby: BuWizz 2.0.

### Kanál {#op-channel}

Přepne řídicí kanál hubu Mould King, když se vstup zapne, a pokud nějaký zvolíte, i když se vypne.

- Přijímá: hodnotu nebo zapnuto/vypnuto.
- **Kanál při zapnutí**: **A** (výchozí), **B** nebo **C**.
- **Kanál při vypnutí**: **Ponechat** (výchozí), **A**, **B** nebo **C**.
- Huby: Mould King 4.0 a 6.0.

## Výstupy {#outputs}

### Hub {#hub-out}

Kde se operace provede: hub a jeho porty. Pro každý hub profilu existuje jeden blok Hub.

- **Hub**: hub profilu.
- **Porty**: jeden nebo více portů daného hubu (A–D u většiny hubů a u SBrick, A–F u Robot Inventor a Mould King 6.0, 1–4 u BuWizz 2.0, 1–4 a navíc A a B u BuWizz 3.0 Pro). Port může patřit jen jednomu řádku.
- Přijímá: operaci. Technic Move Huby v režimu **Profil auta** a operace pro celý hub neberou porty. V režimu **Porty** má Technic Move Hub porty A–C a pro **Světlo** světla 1–6.
- Více: [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).

### Indikátor {#dash-indicator}

Zobrazí hodnotu na monitoru panelu tak, jak je.

- Přijímá: hodnotu nebo zapnuto/vypnuto, bez operace před sebou.
- **Indikátor na panelu**: **Textový monitor** (Monitor), **Monitor hodnoty** (Úroveň baterie, Rychloměr) nebo **Monitor náklonu** na panelu.
- **Osa**: **Náklon X** nebo **Náklon Y**, jen pro Monitor náklonu (jeden řádek pro každou osu).
- Textový monitor hned za senzorem hubu ukazuje skutečnou hodnotu s jednotkou.

### LED hubu {#hub-led}

Barevné stavové světlo hubu: jedna barva, dokud je vstup zapnutý, jiná, dokud je vypnutý.

- Přijímá: hodnotu nebo zapnuto/vypnuto, bez operace před sebou.
- **Hub**: hub s barevnou LED.
- **Barva**: **Ze seznamu** (výchozí) nebo **RGB**.
- **Barva při zapnutí** (výchozí Červená) a **Barva při vypnutí** (výchozí Vypnuto): Vypnuto, Růžová, Fialová, Modrá, Světle modrá, Světle zelená, Zelená, Žlutá, Oranžová, Červená, Bílá.
- **Červená**, **Zelená**, **Modrá** (RGB): 0, 32, 64, 128, 192 nebo 255 (výchozí 255, 0, 0).
- Huby: huby LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, ovladač Powered Up); ne BuWizz, SBrick ani Mould King.

### LED matice {#hub-matrix}

Světelná matice hubu.

- Přijímá: hodnotu nebo zapnuto/vypnuto, bez operace před sebou.
- **Hub**: hub s LED maticí.
- **Zobrazit**: **Ukazatel úrovně** (výchozí; řádky se rozsvěcují odspodu podle hodnoty), **Číslo** (hodnota od −100 do 100) nebo **Obrázek při zapnutí**.
- **Obrázek**: **Srdce** (výchozí), **Úsměv**, **Smutek**, **Fajfka**, **Křížek**, **Šipka nahoru**, **Šipka dolů**, **Šipka vlevo**, **Šipka vpravo** nebo **Vše svítí**.
- **Orientace**: **Ponechat** (výchozí), **Na výšku**, **Vzhůru nohama**, **Vlevo** nebo **Vpravo**.
- Huby: Robot Inventor. Matice se vymaže, když se program zastaví.

### Kalibrovat serva {#cmd-calibrate}

Pokaždé, když se vstup zapne, se každé [Servo](#op-servo) v programu v režimu **Auto** znovu zkalibruje.

- Přijímá: hodnotu nebo zapnuto/vypnuto, bez operace před sebou. Bez nastavení.
- Program musí mít připravený řádek se Servem v režimu Auto, jinak řádek hlásí „V tomto programu není žádné servo v režimu kalibrace Auto“.
