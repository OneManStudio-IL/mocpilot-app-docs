---
id: InputBlocks
title: Vstupné bloky
description: "Prehľad všetkých vstupov Rýchlych prepojení: ovládače panela a ich kanály, vozidlo, herný ovládač, tlačidlá a senzory hubov."
---

import Screenshot from '@site/src/components/Screenshot';

# Vstupné bloky {#input-blocks}

Každý riadok začína vstupom. Karta palety **Vstupy** ukazuje bloky, ktoré môže váš profil práve teraz použiť: jeden blok pre každý ovládač panela (pri ovládačoch s viacerými kanálmi jeden pre každý kanál), bloky **Vozidlo**, blok **Herný ovládač** a jeden blok **Hub** pre každý hub. Ako ich používať: [Vstupy](/docs/Application/Links/Inputs).

Každý vstup posiela riadkom jeden z dvoch signálov:

- **hodnota**: číslo od −1 do 1 (0…1 pri ovládačoch, ktoré nemajú zápornú stranu);
- **zap./vyp.**: 1 alebo 0.

Bloky spracovania a operácie prijímajú iba signály, s ktorými vedia pracovať; pozrite si [Bloky spracovania](/docs/Application/Links/Blocks/ProcessingBlocks).

## Ovládač {#src-controller}

Ovládač z vášho panela, zobrazený podľa svojho názvu (**JOY1**, **SLDR1**, **BTN2**…).

- **Ovládač**: ktorýkoľvek ovládač panela uvedený nižšie. Monitory sú výstupy, nie vstupy.
- **Kanál**: čo ovládač dáva, pri ovládačoch s viacerými kanálmi. Paleta ponúka jeden blok pre každý kanál.

Volant, pedále, radiaca páka, ručná brzda, smerovky, rozdeľovacia prevodovka a ovládač vlaku sú opísané na stránke [Špeciálne ovládače](/docs/Application/Dashboard/SpecialControls).

Ak ovládač z panela odstránite, riadok hlási „Vyberte ovládač na paneli“. Ak jeho kanál už neexistuje, hlási „Vyberte, čo dáva …“ (pri joysticku: „… sa v tejto osi nepohybuje“).

### Joystick {#controller-joystick}

- **Kanál**: **Os X** alebo **Os Y**. Joystick nastavený na **Iba horizontálne (X)** alebo **Iba vertikálne (Y)** ponúka iba danú os.
- Dáva: hodnotu −1…1, v strede 0.

### Posuvník, zvislý posuvník {#controller-slider}

- Bez kanála.
- Dáva: hodnotu 0…1 alebo −1…1, keď je zapnutá voľba **Záporné hodnoty**.

### Ovládač vlaku {#controller-train}

Ovládač vlaku (špeciálny ovládač) funguje v Rýchlych prepojeniach ako posuvník.

- Bez kanála.
- Dáva: hodnotu −1…1: polohu páky ako podiel zo všetkých stupňov, zápornú, keď je reverzácia v polohe vzad, 0 v neutráli.

### Otočný gombík {#controller-knob}

Otočný gombík z platených tém funguje v Rýchlych prepojeniach ako posuvník.

- Bez kanála.
- Dáva: hodnotu 0…1 alebo −1…1, keď má gombík nulu v strede.

### Volant {#controller-wheel}

- **Kanál**: **Uhol natočenia volantu** (predvolené) alebo **Klaksón**.
- Uhol natočenia volantu dáva: hodnotu −1…1, pri jazde rovno 0.
- Klaksón dáva: hodnotu 1, kým je stlačená plocha klaksónu, inak 0.

### Pedále {#controller-pedals}

- **Kanál**: **Plynový pedál** (predvolené) alebo **Brzdový pedál**.
- Dáva: hodnotu 0…1, ako hlboko je pedál stlačený.
- Pedále dávajú surovú polohu pedálu. Pre auto, ktoré samo zrýchľuje, spomaľuje a cúva, použite vstup [Vozidlo](#src-vehicle).

### Radiaca páka {#controller-gear}

Manuálna aj automatická radiaca páka (špeciálny ovládač).

- **Kanál**: **Prevodový stupeň** (predvolené) alebo **Smer (R − / dopredu +)**.
- Prevodový stupeň, manuálna prevodovka: zaradený stupeň vydelený počtom stupňov dopredu: najvyšší stupeň 1, neutrál 0, spiatočka záporná. So 4 stupňami dáva 2. stupeň 0,5.
- Prevodový stupeň, automatická prevodovka: rovnako ako Smer.
- Smer dáva: −1 v R, 0 v N (aj P), +1 v ktoromkoľvek stupni dopredu alebo v D.

### Ručná brzda {#controller-handbrake}

- **Kanál**: **Ručná brzda zatiahnutá** (predvolené) alebo **Sila ručnej brzdy**.
- Ručná brzda zatiahnutá dáva: zap./vyp., zapnuté, kým je páka zaistená.
- Sila ručnej brzdy dáva: hodnotu 0…1, ako veľmi je páka potiahnutá.

### Smerovky {#controller-turnsignals}

Páčka smeroviek (špeciálny ovládač).

- **Kanál**: **Smerovky (ľavá − / pravá +)** (predvolené), **Ľavá smerovka**, **Pravá smerovka** alebo **Svetlo**.
- Smerovky dávajú: hodnotu −1 (vľavo), 0 (vypnuté) alebo +1 (vpravo).
- Ľavá smerovka a Pravá smerovka dávajú: hodnotu 1, kým je daná smerovka zapnutá (bliká spolu so žiarovkou, keď je v ovládači zapnuté blikanie), inak 0.
- Svetlo dáva: hodnotu 1, kým svieti svetlo, inak 0.

### Rozdeľovacia prevodovka {#controller-transfercase}

[Rozdeľovacia prevodovka](/docs/Application/Dashboard/SpecialControls#transfer-case) (špeciálny ovládač).

- **Kanál**: **Pohon všetkých kolies** (predvolené), **Redukcia**, **Uzávierka predného diferenciálu**, **Uzávierka stredového diferenciálu** alebo **Uzávierka zadného diferenciálu**.
- Pohon všetkých kolies dáva: zapnuté/vypnuté, zapnuté v 4H a 4L.
- Redukcia dáva: zapnuté/vypnuté, zapnuté v 4L.
- Každá uzávierka diferenciálu dáva: zapnuté/vypnuté, zapnuté, kým je daná uzávierka zapnutá.
- Samotná poloha (2H, 4H, N, 4L) ide do simulátora cez nastavenie **Rozdeľovacia prevodovka** vstupu [Vozidlo](#src-vehicle).

### D-pad {#controller-dpad}

- **Kanál**: **Hore / dole** alebo **Vľavo / vpravo**.
- Dáva: hodnotu +1 (hore alebo vpravo), −1 (dole alebo vľavo) alebo 0.

### Tlačidlo {#controller-button}

- Bez kanála.
- Dáva: zap./vyp., zapnuté, kým je stlačené.

### Spínač {#controller-switch}

- Bez kanála.
- Dáva: zap./vyp.

### Krokový spínač {#controller-stepper}

- Bez kanála.
- Dáva: hodnotu: aktuálny krok vydelený hodnotou **Počet krokov**, takže posledný krok je 1 (−1 pre posledný záporný krok).

## Vozidlo {#src-vehicle}

Simulované auto ovládané pedálmi, radiacou pákou, ručnou brzdou a rozdeľovacou prevodovkou z panela: zrýchľuje, brzdí, dobieha a cúva ako skutočné vozidlo a riadok dostáva jeho rýchlosť alebo otáčky motora. Paleta zobrazuje bloky Vozidlo, keď sú na paneli pedále, radiaca páka alebo ručná brzda, jeden blok pre každý výstup, už prepojený s prvým ovládačom každého druhu.

- **Pedále**: pedále na paneli, ktoré vozidlo poháňajú (povinné).
- **Radiaca páka**: **žiadne** alebo radiaca páka na paneli. Bez nej sa vozidlo rozbehne dozadu, keď v stoji držíte brzdový pedál.
- **Ručná brzda**: **žiadne** alebo ručná brzda na paneli.
- **Rozdeľovacia prevodovka**: **žiadne** alebo rozdeľovacia prevodovka na paneli. V 2H a 4H vozidlo jazdí, akoby tam nebola, v N nejazdí (ide voľnobehom), v 4L je jeho rýchlosť obmedzená na 40 %.
- **Typ vozidla**: **Osobné auto** (predvolené), **Terénne vozidlo**, **Športové auto** alebo **Nákladné auto**. Typy sa líšia zotrvačnosťou a rýchlosťou cúvania; nákladné auto má navyše vzduchovú brzdu.
- **Výstup**:
  - **Rýchlosť** (predvolené): hodnota −1…1, pri cúvaní záporná;
  - **Otáčky motora (ot/min)**: hodnota 0…1;
  - **Brzdenie**: zap./vyp., zapnuté, kým vozidlo brzdí;
  - **Na ručnej brzde**: zap./vyp.

Problémy: „Vyberte pedále vozidla“, „… nie je na paneli“.

<Screenshot name="links-vehicle-settings" alt="Nastavenia vstupného bloku Vozidlo" width={900} />

## Herný ovládač {#src-gamepad}

Herný ovládač pripojený k vášmu zariadeniu. Blok je v palete, iba kým je zapnutá voľba **Povoliť bloky gamepadu** (stránka **Herný ovládač** na hornej lište); inak riadok hlási „Zapnite bloky herného ovládača na stránke Herný ovládač (horná lišta)“.

- **Vstup** (predvolené **Ľavá páčka Y**). Popisy sa riadia nastavením **Rozloženie tlačidiel gamepadu** (Xbox / PlayStation):
  - **Ľavá páčka Y**, **Ľavá páčka X**, **Pravá páčka Y**, **Pravá páčka X**: hodnota −1…1;
  - **RT** / **R2**, **LT** / **L2** (spúšte): hodnota;
  - **A**, **B**, **X**, **Y** / **Krížik**, **Kruh**, **Štvorec**, **Trojuholník**: zap./vyp.;
  - **LB** / **L1**, **RB** / **R1** (bočné tlačidlá): zap./vyp.;
  - **Hore**, **Dole**, **Vľavo**, **Vpravo** (D-pad): zap./vyp.

## Hub {#src-hub}

Vlastné tlačidlo hubu alebo senzor: na hube alebo na jednom z jeho portov. Pre každý hub profilu existuje jeden vstup Hub, okrem hubov Mould King, ktoré iba prijímajú príkazy.

- **Hub**: hub profilu.
- **Tlačidlo alebo senzor**: iba to, čo tento hub dokáže hlásiť (zoznam nižšie).
- **Port**: pre senzory na porte (hodnoty motora, senzory na portoch).
- **Orientácia hubu**: pre náklon a zrýchlenie na huboch, ktoré ju dokážu zmeniť: **Ponechať** (predvolené) alebo spôsob, akým je hub v modeli namontovaný.

Hodnota senzora putuje riadkom vydelená svojím plným rozsahom a obmedzená na −1…1: batéria na 50 % dáva 0,5. Textový **Monitor** hneď za senzorom ukazuje skutočnú hodnotu s jednotkou.

| Tlačidlo alebo senzor | Signál | Jednotka, plný rozsah | Huby |
|---|---|---|---|
| **Tlačidlo 1, 2…** | zap./vyp. | | huby s tlačidlom; tlačidlá diaľkového ovládača LEGO® Powered Up |
| **Batéria** | hodnota | %, 100 | huby, ktoré ju hlásia |
| **Napätie batérie** | hodnota | V, 12 | huby, ktoré ho hlásia |
| **Výstupné napätie** | hodnota | V, 12 | BuWizz 2.0 |
| **Teplota** | hodnota | °C, 100 | huby, ktoré ju hlásia |
| **Náklon dopredu** | hodnota | °, 90 | huby so senzorom náklonu |
| **Náklon do strany** | hodnota | °, 180 | huby so senzorom náklonu |
| **Otočenie (yaw)** | hodnota | °, 180 | huby s osou yaw |
| **Zrýchlenie X / Y / Z** | hodnota | m/s², 19,6 | huby s akcelerometrom |
| **Rýchlosť otáčania X / Y / Z** | hodnota | °/s, 360 | huby s gyroskopom: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Prúd hubu** | hodnota | mA, 3000 | Technic Hub |
| **Rýchlosť motora** | hodnota | %, 100 | port; všetky huby s portami |
| **Uhol motora** | hodnota | °, 360 (relatívny) | port; motory s enkodérom; nie SBrick, BuWizz 2.0, WeDo 2.0 |
| **Poloha motora** | hodnota | °, 180 (absolútna) | port; uhlové motory |
| **Výkon motora** | hodnota | %, 100 | port; Robot Inventor |
| **Prúd motora** | hodnota | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Senzor vzdialenosti** | hodnota | 250 | port; nie SBrick ani BuWizz |
| **Farebný senzor** | hodnota | číslo farby, 10 | port; nie SBrick, BuWizz ani WeDo 2.0 |
| **Odrazené svetlo**, **Okolité svetlo** | hodnota | %, 100 | port; nie SBrick, BuWizz ani WeDo 2.0 |
| **Farebný tón** | hodnota | °, 360 | port; farebný senzor Technic alebo senzor farieb a vzdialenosti BOOST; nie SBrick, BuWizz ani WeDo 2.0 |
| **Sýtosť farby**, **Jas farby** | hodnota | %, 100 | port; ako Farebný tón |
| **Senzor náklonu: dopredu / do strany** | hodnota | °, 45 | port; senzor náklonu WeDo 2.0 / BOOST; nie SBrick ani BuWizz |
| **Režim výkonu** | hodnota | 1–4, 4 | BuWizz 2.0 |
| **Pripojené** | zap./vyp. | | všetky huby |

Keď je hub pripojený, MOCPilot kontroluje aj zariadenie na porte: „Port A: nie je tam motor“, „Port A: motor nemá enkodér“, „Port A: nie je tam senzor vzdialenosti“ a podobne.
