---
id: Gamepad
title: Herní ovladač
description: "Řiďte svůj model herním ovladačem ve stylu Xbox nebo PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Herní ovladač {#gamepad}

Fyzický herní ovladač bývá příjemnější než dotyková obrazovka: skutečné páčky, spouště a tlačítka. MOCPilot funguje s bluetoothovými a USB herními ovladači, které podporuje systém zařízení (ovladače ve stylu Xbox a PlayStation na iPhonu, iPadu, Androidu, Macu a ve Windows).

Herní ovladač funguje společně s panelem; obojí můžete používat současně.

## Připojení herního ovladače {#connect-a-gamepad}

1. Spárujte herní ovladač s telefonem, tabletem nebo počítačem v systémovém nastavení Bluetooth (nebo ho připojte přes USB).
2. Otevřete profil a v editoru klepněte na **Herní ovladač**.
3. V záhlaví stránky se zobrazí **Gamepad: (název)**. „Gamepad is not connected“ znamená, že ho systém zatím nevidí.

<Screenshot name="gamepad" alt="Stránka Herní ovladač" width={900} />

## Stránka Herní ovladač {#gamepad-page}

- **Povolit bloky gamepadu**: zapne vstupy herního ovladače pro tento profil. Bez toho řádky Rychlých propojení se vstupem Herní ovladač hlásí „Zapněte bloky herního ovladače na stránce Herní ovladač (horní lišta)“ a Logické bloky nezobrazují kategorii Herní ovladač.
- **Rozložení tlačítek gamepadu**: **Xbox** (A, B, X, Y, LB, RB, LT, RT), nebo **Sony PS** (Křížek, Kolečko, Čtverec, Trojúhelník, L1, R1, L2, R2). Editory označují tlačítka podle této volby.
- **Rozsah hodnot herního ovladače** (Logické bloky): páčky dávají **-1..1**, nebo **-100..100**.
- **Vybrat gamepad**: když je připojeno víc herních ovladačů.
- **Otestovat gamepad** → **Test**: živý tester, který ukazuje tlačítka, spouště, páčky a směrový ovladač, takže si vše můžete ověřit před použitím.

Nastavení se ukládají do profilu.

## Herní ovladač v Rychlých propojeních {#use-the-gamepad-in-quick-links}

Přetáhněte vstup **Herní ovladač** do řádku a zvolte jeho **Vstup**:

- páčky: Levá páčka Y, Levá páčka X, Pravá páčka Y, Pravá páčka X;
- spouště: RT / LT (R2 / L2);
- hlavní tlačítka: A, B, X, Y (Křížek, Kolečko, Čtverec, Trojúhelník);
- přední tlačítka: LB / RB (L1 / R1);
- směrový ovladač: Nahoru, Dolů, Vlevo, Vpravo.

Příklad: *Herní ovladač* (Levá páčka Y) → *Plynule* → *Motor* → *Hub* (port A). Viz [Vstupy](/docs/Application/Links/Inputs#gamepad).

## Herní ovladač v Logických blocích {#use-the-gamepad-in-logic-blocks}

Kategorie **Herní ovladač** obsahuje bloky událostí (*když tlačítko gamepadu je …*, *když směrový ovladač gamepadu je …*, *když páčka gamepadu je …*) a bloky hodnot (tlačítko, směrový ovladač, páčka, tlak na spoušť). Viz [Bloky herního ovladače](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profily pro publikování {#profiles-for-publishing}

Profil lze publikovat do katalogu jen s herním ovladačem, bez ovládacích prvků na panelu: požadavek zní „ovládací prvek na panelu nebo herní ovladač“.
