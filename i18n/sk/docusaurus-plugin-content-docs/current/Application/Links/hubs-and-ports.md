---
id: HubsAndPorts
title: Blok Hub a porty
description: "Blok Hub v Rýchlych prepojeniach, výber portov, kontroly portov a otázka na už použitý port."
---

import Screenshot from '@site/src/components/Screenshot';

# Blok Hub a porty {#hub-block-and-ports}

Výstup [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) ukončuje riadok za operáciou. Pre každý hub v **Moje huby** existuje jeden blok Hub, preto tam najprv pridajte svoje huby. Kým to neurobíte, karta hlási „Pridajte huby v časti Moje huby alebo indikátory na panel: zobrazia sa tu“.

## Čo blok Hub zobrazuje {#what-the-hub-block-shows}

- názov hubu a **bodku pripojenia** (pripojený alebo nie);
- **porty** ako čipy: A, B, C, D… na huboch LEGO® a SBrick (A–F na Robot Inventor a Mould King 6.0), 1–4 na BuWizz 2.0, 1–4 a navyše A a B na BuWizz 3.0 Pro;
- podnadpis: „porty A, B“, „vyberte porty“, „celý hub“ (po operácii pre celý hub) alebo „pohon, riadenie, svetlá“ (Technic Move).

## Výber portov {#choose-ports}

Ťuknutím na čip portu ho použijete; ďalším ťuknutím ho uvoľníte. Jeden riadok môže naraz ovládať **viac portov**, napríklad dva hnacie motory na A a B.

Potrebujete, aby sa dva motory točili opačným smerom? Vytvorte dva riadky s rovnakým vstupom a do jedného z nich pridajte **Invertovať**.

## Jeden port, jeden riadok {#one-port-one-row}

Port patrí jednému riadku. Ak vyberiete port, ktorý už používa iný riadok, MOCPilot sa opýta:

> **Port sa už používa**: Na „Technic Hub“: port A sa používa v riadku 2 (Motor). Použiť ho v tomto riadku? Druhý riadok tento port stratí a prestane ho ovládať.

**Použiť v tomto riadku** port presunie; **Zrušiť** ho nechá tam, kde bol. Port, ktorý používajú dva riadky (napríklad v starom súbore), sa hlási ako problém: „Port A sa používa aj v riadku 2“.

<Screenshot name="port-in-use" alt="Dialóg Port sa už používa" width={700} />

## Kontroly portov {#port-checks}

Keď je hub pripojený, MOCPilot vie, čo je zapojené v každom porte, a kontroluje, či sa operácia hodí:

| Problém | Význam |
|---|---|
| „Port A: toto zariadenie nemôže fungovať ako servo (je potrebný motor s enkodérom)“ | Servo a Otočiť o stupne potrebujú motor s enkodérom |
| „Port A: motor nemá absolútnu polohu (iba uhlové motory)“ | Ísť do polohy potrebuje uhlový motor |
| „Na porte A je senzor, nie motor“ | zariadenie na porte je senzor |
| „Port A prijíma iba jednoduché príkazy rýchlosti: bez riadenia polohy“ | tento port nedokáže riadiť polohu |
| „Port A nemá LED: použite porty 1-4“ | Farba portu funguje iba na portoch 1–4 hubu BuWizz 3.0 Pro |
| „Svetlá senzora: vyberte jeden port, ten so senzorom vzdialenosti“ | Svetlá senzora berú presne jeden port |

Operácie, ktoré hub nedokáže vykonať, sa preň neponúkajú. Ak riadok prepnete na iný hub, riadok oznámi, ktorá operácia sa nehodí, napríklad „Brzda: iba Technic Move (… nemá príkaz brzdy)“.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (v diaľkovo ovládaných autách LEGO® Technic) sa ovláda podľa funkcie, nie podľa portu: jeho blok Hub zobrazuje **pohon, riadenie, svetlá** a neberie žiadne porty. Na jazdu použite **Motor** alebo **Motor na čas**, na zatáčanie **Servo**, na svetlá **Svetlo** a na špeciálne funkcie **Brzda**, **Boost** a **Výkonový impulz**.

Pohon, riadenie, svetlá, brzdu a boost môže používať vždy iba jeden riadok („Riadok 2 už ovláda túto funkciu Technic Move: pohon“).

Ak chcete do hubu nahrať konfiguráciu auta (Porsche, Lamborghini, Batmobile), použite **Moje huby → Vybrať konfiguráciu**. Pozrite si [Konfigurácie Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Huby Mould King iba prijímajú príkazy, preto nemajú vstupy a neposkytujú spätnú väzbu o pripojení. Ovládací kanál hubu prepnete operáciou [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
