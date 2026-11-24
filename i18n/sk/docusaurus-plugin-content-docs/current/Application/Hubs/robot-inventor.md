---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Pripojte hub LEGO MINDSTORMS Robot Inventor (51515) alebo SPIKE Prime cez Bluetooth alebo USB, používajte jeho bloky a znova ho sprevádzkujte, keď prestane fungovať."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor {#mindstorms-robot-inventor-hub}

Hub súpravy LEGO® MINDSTORMS® Robot Inventor (51515) je **LEGO® Technic™ Large Hub** (88016): šesť portov A–F, svetelná matica 5×5, reproduktor, gyroskop a akcelerometer. MOCPilot ho ovláda rovnakými blokmi ako aplikácia Robot Inventor a pridáva všetko, čo ponúka sám: panel, herný ovládač a ďalšie huby profilu.

**Hub SPIKE™ Prime** (45601) je rovnaký hardvér s firmvérom LEGO® Education. MOCPilot ho podporuje s firmvérom **SPIKE Legacy** (beta); pozrite [Firmvér](#firmware).

## Čo dokáže {#features}

- **Logické bloky**: všetky bloky aplikácie Robot Inventor, pozrite [Bloky Robot Inventor](#blocks).
- **Rýchle prepojenia**: motory, senzory, [svetelná matica](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) a [svetlá senzora vzdialenosti](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor hubu**: batéria, orientácia, náklon a zariadenia na portoch, pozrite [Monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Program z blokov môže bežať dvoma spôsobmi: **streamovanie**, keď ho spúšťa MOCPilot a posiela hubu príkazy (zariadenie musí zostať pripojené), alebo **nahratie**, keď ho MOCPilot zapíše do jedného z programových slotov hubu a hub ho spúšťa sám. Pozrite [Spustenie programu v hube](#download).

## Pripojenie hubu {#connect}

Pridajte hub ako zvyčajne ([Pridanie a pripojenie hubu](/docs/Application/Hubs/ConnectingHubs)) a vyberte **Lego® Large Hub** (alebo **LEGO® SPIKE™ Prime Hub**). Na počítači je hore na stránke pripojenia prepínač **Bluetooth / USB**. MOCPilot si vašu voľbu pre tento model hubu zapamätá.

### Cez Bluetooth {#bluetooth}

Hub používa klasický Bluetooth, nie Bluetooth Low Energy: funguje na Androide, Macu a Windows, ale nie na iPhone a iPade.

1. Zapnite hub.
2. Spárujte ho v nastaveniach Bluetooth zariadenia ako bežné zariadenie Bluetooth (vo Windows: **Nastavenia → Bluetooth a zariadenia → Pridať zariadenie**). Stlačte na hube tlačidlo Bluetooth, aby sa dal nájsť.
3. V MOCPilote ťuknite na **Skenovať**.

### Káblom USB {#usb}

Vo Windows a na Macu môžete hub namiesto toho pripojiť jeho káblom USB. Ovládač LEGO inštalovať nemusíte.

1. Pripojte hub k počítaču káblom USB a zapnite ho.
2. Ťuknite na **Pripojiť**.

Ak MOCPilot hlási **Na USB nie je žiadny hub**, skontrolujte kábel (niektoré káble iba nabíjajú) a či je hub zapnutý.

<Screenshot name="robot-inventor-connect" alt="Pripojenie hubu Robot Inventor: prepínač Bluetooth / USB" width={900} />

### Najprv zatvorte aplikáciu LEGO {#close-lego-app}

Hub prijíma iba jedno pripojenie. Ak je otvorená aplikácia MINDSTORMS alebo SPIKE a drží hub, MOCPilot hlási **Hub je zaneprázdnený: používa ho iná aplikácia (LEGO MINDSTORMS alebo SPIKE). Zatvorte ju a skúste to znova.** Zatvorte aplikáciu LEGO a pripojte sa znova.

## Bloky Robot Inventor {#blocks}

Keď má profil hub Robot Inventor alebo SPIKE Prime, paleta Logických blokov dostane bloky aplikácie Robot Inventor. Bloky, ktoré dokáže spustiť iba tento hub, nesú čiernobielu **ikonu hubu**.

| Kategória | Bloky Robot Inventor |
|---|---|
| [Pohyb](/docs/Application/BlockBuilder/Blocks/Movement) (nová kategória) | pohybové motory, rýchlosť, dráha na otáčku, jazda, zatáčanie, tankové riadenie, zrýchlenie, zastavenie, „bol pohyb prerušený?“ |
| [Motory](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | spustenie na výkon, „bol motor prerušený?“, k tomu výkon motora a detekcia zaseknutia |
| [Svetlo](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | obrázok na niekoľko sekúnd, animácie s editorom snímok, jas pixelov, k tomu svetlá senzora vzdialenosti |
| [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pípnutia, zvuky robota v hube, hlasitosť, zvukové efekty, hudba: noty, bubny, pauzy, nástroj, tempo |
| [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | senzor sily, gestá, orientácia, vybočenie / náklon / klonenie, vynulovanie vybočenia, uhlová rýchlosť, zrýchlenie, naklonenie, rádio medzi hubmi |
| [Udalosti](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | keď hubom zatrasiete alebo naň poklepete, keď leží na niektorej strane, keď je naklonený, keď je stlačený senzor sily, keď príde rádiový signál |

Bloky kontroly, operátorov, premenných, zoznamov a Mojich blokov z aplikácie Robot Inventor sú rovnaké ako [základné bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) MOCPilotu. Bloky, ktoré už pokrývajú všeobecné bloky hubov (rýchlosť a poloha motora, senzory farby a vzdialenosti, svetelná matica, tlačidlo hubu, časovač), sú vo svojich obvyklých kategóriách.

## Spustenie programu v hube {#download}

Rovnako ako aplikácia Robot Inventor dokáže MOCPilot zapísať program z Logických blokov do jedného z 20 programových slotov hubu (0–19). Hub ho potom spúšťa bez aplikácie: telefón alebo počítač môžete odpojiť a program neskôr spustiť znova tlačidlami samotného hubu.

### Tlačidlo a karta slotu {#slot-card}

Keď je k profilu s Logickými blokmi pripojený hub Robot Inventor alebo SPIKE Prime, v pravom dolnom rohu editora, vedľa priblíženia, sa objaví tlačidlo. Ukazuje číslo vybraného slotu na malej matici 5×5 alebo značku streamovania. Ťuknutím naň otvoríte kartu:

- hub s vybraným slotom; **‹** a **›** vyberajú slot 0–19;
- **Nahrať / Streamovanie**: ako pre tento hub funguje **Spustiť**;
- tlačidlo **nahratia** (⤓): zapíše program do slotu, ale nespustí ho;
- stavový riadok: priebeh, *Slot 3: program je v hube* alebo čo sa pokazilo.

Keď je pripojených niekoľko hubov Robot Inventor alebo SPIKE Prime, karta má aj tlačidlo hubu: ťuknutím naň vyberiete, ktorý hub program dostane. MOCPilot si režim a slot na tomto zariadení zapamätá.

<Screenshot name="robot-inventor-slot-card" alt="Karta slotu: hub, šípky slotu, prepínač Nahrať / Streamovanie a tlačidlo nahratia" width={500} />

### Nahratie {#download-mode}

V režime **Nahrať** premení **Spustiť** program z blokov na program pre hub, zapíše ho do vybraného slotu a spustí ho v hube. Zápis trvá niekoľko sekúnd; potom program beží v hube sám.

- Ak ho chcete neskôr spustiť znova bez aplikácie, vyberte slot ľavým a pravým tlačidlom hubu a stlačte stredné tlačidlo.
- **Stredné tlačidlo** hubu program zastaví.
- Ak sa chcete vrátiť k spúšťaniu programov z MOCPilotu, prepnite kartu na **Streamovanie**.

### Čo môže bežať v hube {#download-blocks}

Do hubu môže ísť väčšina blokov:

- udalosti: spustenie programu, správy, podmienky, časovač, tlačidlá hubu, senzory, gestá, orientácia, naklonenie a rádiové signály;
- kontrola, operátory, premenné, zoznamy a Moje bloky;
- všetky bloky Robot Inventor a bloky motorov, svetla a senzorov tohto hubu.

Niektoré bloky potrebujú aplikáciu a samy v hube bežať nemôžu: bloky panela a herného ovládača, bloky iných hubov, udalosť **stredného tlačidla** (v hube toto tlačidlo program zastavuje), udalosti batérie a pripojenia, teplota a kalibrácia hrebeňa riadenia. Ak program obsahuje niektorý z nich, nič sa nezapíše: karta ukáže **Tieto bloky nemôžu bežať v hube bez aplikácie** a vypíše ich. Tieto bloky odstráňte alebo použite **Streamovanie**.

Ak zápis zlyhá, stavový riadok povie prečo, napríklad **V hube nie je dosť miesta** alebo **Hub neodpovedal**. Skúste to znova, a ak chyba pretrváva, reštartujte hub.

## Firmvér {#firmware}

MOCPilot pracuje s vlastným firmvérom LEGO v hube a nenahrádza ho:

- **Hub Robot Inventor**: firmvér aplikácie MINDSTORMS Robot Inventor. Posledná verzia je firmvér 1.5.6 so softvérom hubu 3.2.36.
- **Hub SPIKE Prime**: firmvér **SPIKE Legacy** (ten z aplikácie SPIKE 2). Novší firmvér **SPIKE App 3** nie je podporovaný: MOCPilot vás na to upozorní, keď taký hub nájde. Nainštalujte firmvér SPIKE Legacy aplikáciou LEGO® Education SPIKE™ Legacy a potom sa pripojte znova.

Keď je hub pripravený, ukazuje na svetelnej matici číslo programového slotu.

## Keď sa hub nespustí {#restore}

Ak sa hub nespustí, zostane tmavý, neukazuje číslo slotu alebo bol prepnutý na firmvér SPIKE App 3, obnovte ho najprv oficiálnou aplikáciou:

1. Otvorte aplikáciu MINDSTORMS Robot Inventor (pri hube SPIKE Prime aplikáciu SPIKE Legacy) a pripojte hub káblom USB.
2. Spustite aktualizáciu hubu (**Update hub firmware**). Prepíše firmvér, softvér hubu aj zvuky robota a trvá asi 6 minút. Počas nej hub neodpájajte.
3. Zatvorte aplikáciu LEGO a pripojte hub v MOCPilote.

### Režim obnovy (DFU) {#dfu}

Iba ak oficiálna aplikácia hub vôbec nevidí, môžete firmvér zapísať cez režim obnovy hubu (DFU). Je to pre skúsených používateľov:

1. Vypnite hub a odpojte ho. Podržte **tlačidlo Bluetooth** a zapojte kábel USB; držte ho, kým svetlo tlačidla nezačne blikať načerveno, nazeleno a namodro. Počítač teraz vidí „LEGO Technic Large Hub in DFU Mode“.
2. Vo Windows pre toto zariadenie raz nainštalujte ovládač WinUSB, napríklad pomocou Zadig. Mac a Linux ovládač nepotrebujú.
3. Zapíšte obraz firmvéru aplikácie Robot Inventor (1.5.6) nástrojom `dfu-util` na adresu `0x08008000`. Po dokončení sa hub sám reštartuje. Počas zápisu ho neodpájajte.
4. Potom v aplikácii Robot Inventor spustite **Update hub firmware** (pozrite vyššie), aby ste obnovili softvér hubu a zvuky.

DFU zapisuje iba firmvér. Samotný zavádzač obnovy sa prepísať nedá, takže to môžete vždy skúsiť znova.
