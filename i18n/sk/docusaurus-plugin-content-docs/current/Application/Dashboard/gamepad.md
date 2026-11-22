---
id: Gamepad
title: Herný ovládač
description: "Riaďte model herným ovládačom v štýle Xbox alebo PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Herný ovládač {#gamepad}

Fyzický herný ovládač je často príjemnejší ako dotyková obrazovka: skutočné páčky, spúšte a tlačidlá. MOCPilot funguje s Bluetooth a USB hernými ovládačmi, ktoré podporuje systém zariadenia (ovládače v štýle Xbox a PlayStation na iPhone, iPade, Androide, Macu a Windows).

Herný ovládač funguje spolu s panelom; oba môžete používať naraz.

## Pripojenie herného ovládača {#connect-a-gamepad}

1. Spárujte herný ovládač s telefónom, tabletom alebo počítačom v systémových nastaveniach Bluetooth (alebo ho pripojte cez USB).
2. Otvorte profil a prejdite na **Herný ovládač**: na počítači na hornej lište editora, na telefóne alebo tablete v ponuke **Viac** (keď systém herný ovládač vidí, položka znie **Herný ovládač (pripojený)**).
3. Hlavička stránky ukazuje **Herný ovládač: (názov)**. „Herný ovládač nie je pripojený“ znamená, že ho systém zatiaľ nevidí.

<Screenshot name="gamepad" alt="Stránka Herný ovládač" width={900} />

## Stránka Herný ovládač {#gamepad-page}

- **Povoliť bloky gamepadu**: zapne vstupy herného ovládača pre tento profil. Bez toho riadky Rýchlych prepojení so vstupom Herný ovládač hlásia „Zapnite bloky herného ovládača na stránke Herný ovládač (horná lišta)“ a Logické bloky nezobrazujú kategóriu Herný ovládač.
- **Rozloženie tlačidiel gamepadu**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) alebo **Sony PS** (Krížik, Kruh, Štvorec, Trojuholník, L1, R1, L2, R2). Editory označujú tlačidlá podľa tejto voľby.
- **Rozsah hodnôt gamepadu** (Logické bloky): páčky dávajú **-1..1** alebo **-100..100**.
- **Vybrať gamepad**: keď je pripojených viac herných ovládačov.
- **Otestovať gamepad** → **Test**: živý tester, ktorý ukazuje tlačidlá, spúšte, páčky a D-pad, takže všetko skontrolujete ešte pred použitím.

Nastavenia sa ukladajú do profilu.

## Herný ovládač v Rýchlych prepojeniach {#use-the-gamepad-in-quick-links}

Presuňte do riadka vstup **Herný ovládač** a zvoľte jeho **Vstup**:

- páčky: Ľavá páčka Y, Ľavá páčka X, Pravá páčka Y, Pravá páčka X;
- spúšte: RT / LT (R2 / L2);
- hlavné tlačidlá: A, B, X, Y (Krížik, Kruh, Štvorec, Trojuholník);
- bočné tlačidlá: LB / RB (L1 / R1);
- D-pad: Hore, Dole, Vľavo, Vpravo.

Príklad: *Herný ovládač* (Ľavá páčka Y) → *Plynulo* → *Motor* → *Hub* (port A). Pozrite si [Vstupy](/docs/Application/Links/Inputs#gamepad).

## Herný ovládač v Logických blokoch {#use-the-gamepad-in-logic-blocks}

Kategória **Herný ovládač** obsahuje bloky udalostí (*keď tlačidlo herného ovládača je …*, *keď D-pad herného ovládača je …*, *keď páčka herného ovládača je …*) a bloky hodnôt (tlačidlo, D-pad, páčka, tlak spúšte). Pozrite si [Bloky herného ovládača](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profily na zverejnenie {#profiles-for-publishing}

Profil môžete zverejniť v katalógu aj iba s herným ovládačom a bez ovládacích prvkov na paneli: požiadavka znie „ovládač na paneli alebo herný ovládač“.
