---
id: Inputs
title: Vstupy
description: "Vstupy Rychlých propojení: ovládací prvky panelu, simulované vozidlo, gamepad, tlačítka hubu a senzory hubu."
---

import Screenshot from '@site/src/components/Screenshot';

# Vstupy {#inputs}

Každý řádek začíná vstupem. Karta **Vstupy** v paletě obsahuje:

- jeden blok pro každý **ovládací prvek panelu**; prvky s více kanály (osy joysticku a D-padu, volant, pedály, řadicí páka, ruční brzda, blinkry) mají jeden blok pro každý kanál;
- bloky **Vozidlo**, když má panel pedály, řadicí páku nebo ruční brzdu;
- blok **Herní ovladač**, když jsou zapnuté bloky gamepadu;
- jeden blok **Hub** pro každý hub profilu (kromě Mould King, který nemá tlačítka ani senzory).

Pokud je karta prázdná, hlásí „Přidejte ovladače na panel nebo huby v Moje huby: objeví se tady“.

<Screenshot name="links-palette-inputs" alt="Karta Vstupy v paletě Rychlých propojení" width={900} />

Všechna nastavení a hodnoty každého vstupu najdete v přehledu [Vstupní bloky](/docs/Application/Links/Blocks/InputBlocks).

## Ovládací prvky panelu {#dashboard-controls}

Blok [Ovladač](/docs/Application/Links/Blocks/InputBlocks#src-controller) vezme ovládací prvek z panelu podle jeho názvu (**JOY1**, **SLDR1**, **BTN2**…) a pokud jich prvek má víc, také požadovaný **Kanál**:

| Ovládací prvek | Co řádek dostane |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Osa X** nebo **Osa Y**, −1…1 |
| [Posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [jízdní kontrolér](/docs/Application/Links/Blocks/InputBlocks#controller-train), [otočný ovladač](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | jeho polohu |
| [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Úhel řízení** −1…1 nebo **Klakson** |
| [Pedály](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Plynový pedál** nebo **Brzdový pedál**, 0…1 |
| [Řadicí páka](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Převod** nebo **Směr (R − / vpřed +)** |
| [Ruční brzda](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Ruční brzda zajištěna** (zapnuto/vypnuto) nebo **Síla ruční brzdy** |
| [Blinkry](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Blinkry (vlevo − / vpravo +)**, **Levý blinkr**, **Pravý blinkr** nebo **Světlo** |
| [Rozdělovací převodovka](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) | **Pohon všech kol**, **Redukce**, **Uzávěrka předního diferenciálu**, **Uzávěrka středového diferenciálu** nebo **Uzávěrka zadního diferenciálu** (zapnuto/vypnuto) |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Nahoru / dolů** nebo **Vlevo / vpravo**: −1, 0 nebo +1 |
| [Tlačítko](/docs/Application/Links/Blocks/InputBlocks#controller-button) | zapnuto, dokud je stisknuté |
| [Spínač](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | zapnuto / vypnuto |
| [Krokový spínač](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | aktuální krok |

Když na panelu přidáte, přejmenujete nebo změníte ovládací prvek, paleta i řádky se automaticky přizpůsobí. Pokud joystick nastavíte na **Pouze vodorovně**, řádky, které používají jeho osu Y, hlásí „… se v této ose nepohybuje“.

## Řízení jako ve skutečném autě {#drive-like-a-real-car}

Volant, pedály, řadicí páka a ruční brzda dávají své surové polohy: řádek s pedálem pohání motor přesně tak, jak hluboko je pedál sešlápnutý. Pro model, který se chová jako auto (zrychluje se setrvačností, dojíždí, brzdí a v R couvá), použijte místo toho vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Čte pedály, řadicí páku a ruční brzdu najednou a dává **Rychlost**, **Otáčky motoru (ot/min)**, **Brzdění** nebo **Na ruční brzdě** vozidla:

- *Vozidlo (Rychlost)* → *Motor* → hnací motory;
- *Volant (Úhel řízení)* → *Servo* → řízení;
- *Vozidlo (Brzdění)* → *Světlo* → brzdová světla;
- *Blinkry (Levý blinkr)* → *Světlo* → levá směrová světla.

## Gamepad {#gamepad}

Jeden blok [Herní ovladač](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) pokrývá celý ovladač; páčku, spoušť nebo tlačítko zvolíte v poli **Vstup**. Nejprve zapněte **Povolit bloky gamepadu** na [stránce Herní ovladač](/docs/Application/Dashboard/Gamepad). Popisky se řídí nastavením **Rozložení tlačítek gamepadu** (Xbox nebo PlayStation).

## Tlačítka a senzory hubu {#hub-buttons-and-sensors}

Vstup [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) čte tlačítko hubu nebo některý z jeho senzorů: baterii, náklon, zrychlení, rychlost a polohu motoru, senzory vzdálenosti a barev na portech a další. Seznam ukazuje jen to, co daný hub umí hlásit. U náklonu a zrychlení nastavte **Orientace hubu** podle toho, jak hub v modelu sedí.

Hodnota putuje řádkem přepočtená na −1…1. Textový **Monitor** hned za senzorem ukazuje skutečnou hodnotu s jednotkou, například „7,85 V“ nebo „−12°“.

Typické použití:

- *Baterie* → *Indikátor* (úroveň baterie);
- *Senzor vzdálenosti* → *Práh* (Pod, 20 %) → *Motor na dobu*: couvnout, když se něco přiblíží;
- *Tlačítko 1* (ovladač Powered Up) → *Motor*: jízda s fyzickým ovladačem.
