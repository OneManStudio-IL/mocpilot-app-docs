---
id: Inputs
title: Vstupy
description: "Vstupy Rýchlych prepojení: ovládače panela, simulované vozidlo, herný ovládač, tlačidlá a senzory hubov."
---

import Screenshot from '@site/src/components/Screenshot';

# Vstupy {#inputs}

Každý riadok začína vstupom. Karta palety **Vstupy** obsahuje:

- jeden blok pre každý **ovládač panela**; ovládače s viacerými kanálmi (osi joysticku a D-padu, volant, pedále, radiaca páka, ručná brzda, smerovky) majú jeden blok pre každý kanál;
- bloky **Vozidlo**, keď sú na paneli pedále, radiaca páka alebo ručná brzda;
- blok **Herný ovládač**, keď sú zapnuté bloky gamepadu;
- jeden blok **Hub** pre každý hub profilu (okrem Mould King, ktorý nemá tlačidlá ani senzory).

Ak je karta prázdna, hlási „Pridajte ovládače na panel alebo huby v časti Moje huby: zobrazia sa tu“.

<Screenshot name="links-palette-inputs" alt="Karta Vstupy v palete Rýchlych prepojení" width={900} />

Všetky nastavenia a hodnoty každého vstupu nájdete v prehľade [Vstupné bloky](/docs/Application/Links/Blocks/InputBlocks).

## Ovládače panela {#dashboard-controls}

Blok [Ovládač](/docs/Application/Links/Blocks/InputBlocks#src-controller) berie ovládač z vášho panela podľa jeho názvu (**JOY1**, **SLDR1**, **BTN2**…) a ak ich ovládač má viac, aj požadovaný **Kanál**:

| Ovládač | Čo riadok dostane |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Os X** alebo **Os Y**, −1…1 |
| [Posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [ovládač vlaku](/docs/Application/Links/Blocks/InputBlocks#controller-train), [otočný gombík](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | jeho polohu |
| [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Uhol natočenia volantu** −1…1 alebo **Klaksón** |
| [Pedále](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Plynový pedál** alebo **Brzdový pedál**, 0…1 |
| [Radiaca páka](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Prevodový stupeň** alebo **Smer (R − / dopredu +)** |
| [Ručná brzda](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Ručná brzda zatiahnutá** (zap./vyp.) alebo **Sila ručnej brzdy** |
| [Smerovky](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Smerovky (ľavá − / pravá +)**, **Ľavá smerovka**, **Pravá smerovka** alebo **Svetlo** |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Hore / dole** alebo **Vľavo / vpravo**: −1, 0 alebo +1 |
| [Tlačidlo](/docs/Application/Links/Blocks/InputBlocks#controller-button) | zapnuté, kým je stlačené |
| [Spínač](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | zap. / vyp. |
| [Krokový spínač](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | aktuálny krok |

Keď na paneli ovládač pridáte, premenujete alebo zmeníte, paleta aj riadky sa automaticky prispôsobia. Ak joystick nastavíte na **Iba horizontálne**, riadky, ktoré používajú jeho os Y, hlásia „… sa v tejto osi nepohybuje“.

## Jazda ako v skutočnom aute {#drive-like-a-real-car}

Volant, pedále, radiaca páka a ručná brzda dávajú svoje surové polohy: riadok s pedálom poháňa motor presne tak, ako hlboko je pedál stlačený. Pre model, ktorý sa správa ako auto (zrýchľuje so zotrvačnosťou, dobieha, brzdí a v R cúva), použite radšej vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Číta pedále, radiacu páku a ručnú brzdu naraz a dáva **Rýchlosť** vozidla, **Otáčky motora (ot/min)**, **Brzdenie** alebo **Na ručnej brzde**:

- *Vozidlo (Rýchlosť)* → *Motor* → hnacie motory;
- *Volant (Uhol natočenia volantu)* → *Servo* → riadenie;
- *Vozidlo (Brzdenie)* → *Svetlo* → brzdové svetlá;
- *Smerovky (Ľavá smerovka)* → *Svetlo* → ľavá smerovka.

## Herný ovládač {#gamepad}

Jeden blok [Herný ovládač](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) pokrýva celý ovládač; páčku, spúšť alebo tlačidlo vyberiete vo **Vstup**. Najprv zapnite **Povoliť bloky gamepadu** na [stránke Herný ovládač](/docs/Application/Dashboard/Gamepad). Popisy sa riadia nastavením **Rozloženie tlačidiel gamepadu** (Xbox alebo PlayStation).

## Tlačidlá a senzory hubov {#hub-buttons-and-sensors}

Vstup [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) číta tlačidlo hubu alebo jeden z jeho senzorov: batériu, náklon, zrýchlenie, rýchlosť a polohu motora, senzory vzdialenosti a farby na portoch a ďalšie. Zoznam ukazuje iba to, čo daný hub dokáže hlásiť. Pri náklone a zrýchlení nastavte **Orientácia hubu** podľa toho, ako hub sedí v modeli.

Hodnota putuje riadkom prepočítaná na −1…1. Textový **Monitor** hneď za senzorom ukazuje skutočnú hodnotu s jednotkou, napríklad „7,85 V“ alebo „−12°“.

Typické použitie:

- *Batéria* → *Indikátor* (úroveň batérie);
- *Senzor vzdialenosti* → *Prah* (Pod, 20 %) → *Motor na čas*: cúvnuť, keď sa niečo priblíži;
- *Tlačidlo 1* (diaľkový ovládač Powered Up) → *Motor*: jazda s fyzickým ovládačom.
