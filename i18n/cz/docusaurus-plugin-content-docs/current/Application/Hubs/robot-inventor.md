---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Připojte hub LEGO MINDSTORMS Robot Inventor (51515) nebo SPIKE Prime přes Bluetooth nebo USB, používejte jeho bloky a zprovozněte hub znovu, když přestane fungovat."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor {#mindstorms-robot-inventor-hub}

Hub sady LEGO® MINDSTORMS® Robot Inventor (51515) je **LEGO® Technic™ Large Hub** (88016): šest portů A–F, světelná matice 5×5, reproduktor, gyroskop a akcelerometr. MOCPilot ho ovládá stejnými bloky jako aplikace Robot Inventor a přidává k tomu vše, co nabízí sám: panel, herní ovladač a další huby profilu.

**Hub SPIKE™ Prime** (45601) je stejný hardware s firmwarem LEGO® Education. MOCPilot ho podporuje s firmwarem **SPIKE Legacy** (beta); viz [Firmware](#firmware).

## Co umí {#features}

- **Logické bloky**: všechny bloky aplikace Robot Inventor, viz [Bloky Robot Inventor](#blocks).
- **Rychlá propojení**: motory, senzory, [světelná matice](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) a [světla senzoru vzdálenosti](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor hubu**: baterie, orientace, náklon a zařízení na portech, viz [Monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Program z bloků může běžet dvěma způsoby: **streamování**, kdy ho spouští MOCPilot a posílá hubu příkazy (zařízení musí zůstat připojené), nebo **nahrání**, kdy ho MOCPilot zapíše do jednoho z programových slotů hubu a hub ho spouští sám. Viz [Spuštění programu v hubu](#download).

## Připojení hubu {#connect}

Přidejte hub jako obvykle ([Přidání a připojení hubu](/docs/Application/Hubs/ConnectingHubs)) a vyberte **Lego® Large Hub** (nebo **LEGO® SPIKE™ Prime Hub**). Na počítači je nahoře na stránce připojení přepínač **Bluetooth / USB**. MOCPilot si vaši volbu pro tento model hubu zapamatuje.

### Přes Bluetooth {#bluetooth}

Hub používá klasické Bluetooth, ne Bluetooth Low Energy: funguje na Androidu, Macu a Windows, ale ne na iPhonu a iPadu.

1. Zapněte hub.
2. Spárujte ho v nastavení Bluetooth zařízení jako běžné zařízení Bluetooth (ve Windows: **Nastavení → Bluetooth a zařízení → Přidat zařízení**). Stiskněte na hubu tlačítko Bluetooth, aby ho bylo možné najít.
3. V MOCPilotu klepněte na **Skenovat**.

### Kabelem USB {#usb}

Ve Windows a na Macu můžete hub místo toho připojit jeho kabelem USB. Ovladač LEGO instalovat nemusíte.

1. Připojte hub k počítači kabelem USB a zapněte ho.
2. Klepněte na **Připojit**.

Pokud MOCPilot hlásí **Na USB není žádný hub**, zkontrolujte kabel (některé kabely jen nabíjejí) a jestli je hub zapnutý.

<Screenshot name="robot-inventor-connect" alt="Připojení hubu Robot Inventor: přepínač Bluetooth / USB" width={900} />

### Nejprve zavřete aplikaci LEGO {#close-lego-app}

Hub přijímá jen jedno připojení. Pokud je otevřená aplikace MINDSTORMS nebo SPIKE a drží hub, MOCPilot hlásí **Hub je zaneprázdněn: používá ho jiná aplikace (LEGO MINDSTORMS nebo SPIKE). Zavřete ji a zkuste to znovu.** Zavřete aplikaci LEGO a připojte se znovu.

## Bloky Robot Inventor {#blocks}

Když má profil hub Robot Inventor nebo SPIKE Prime, paleta Logických bloků dostane bloky aplikace Robot Inventor. Bloky, které umí spustit jen tento hub, nesou černobílou **ikonu hubu**.

| Kategorie | Bloky Robot Inventor |
|---|---|
| [Pohyb](/docs/Application/BlockBuilder/Blocks/Movement) (nová kategorie) | pohybové motory, rychlost, dráha na otáčku, jízda, zatáčení, tankové řízení, zrychlení, zastavení, „byl pohyb přerušen?“ |
| [Motory](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | spuštění na výkon, „byl motor přerušen?“, k tomu výkon motoru a detekce zablokování |
| [Světlo](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | obrázek na několik sekund, animace s editorem snímků, jas pixelů, k tomu světla senzoru vzdálenosti |
| [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | pípnutí, zvuky robota v hubu, hlasitost, zvukové efekty, hudba: noty, bubny, pauzy, nástroj, tempo |
| [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | senzor síly, gesta, orientace, stáčení / klopení / klonění, vynulování stáčení, úhlová rychlost, zrychlení, náklon, rádio mezi huby |
| [Události](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | když hubem zatřesete nebo na něj poklepete, když leží na některé straně, když je nakloněný, když je stisknut senzor síly, když dorazí rádiový signál |

Bloky ovládání, operátorů, proměnných, seznamů a Mých bloků z aplikace Robot Inventor jsou stejné jako [základní bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) MOCPilotu. Bloky, které už pokrývají obecné bloky hubů (rychlost a poloha motoru, senzory barev a vzdálenosti, světelná matice, tlačítko hubu, časovač), jsou ve svých obvyklých kategoriích.

## Spuštění programu v hubu {#download}

Stejně jako aplikace Robot Inventor umí MOCPilot zapsat program z Logických bloků do jednoho z 20 programových slotů hubu (0–19). Hub ho pak spouští bez aplikace: telefon nebo počítač můžete odpojit a program později spustit znovu tlačítky samotného hubu.

### Tlačítko a karta slotu {#slot-card}

Když je k profilu s Logickými bloky připojený hub Robot Inventor nebo SPIKE Prime, objeví se v pravém dolním rohu editoru, vedle přiblížení, tlačítko. Ukazuje číslo vybraného slotu na malé matici 5×5, nebo značku streamování. Klepnutím na něj otevřete kartu:

- hub s vybraným slotem; **‹** a **›** vybírají slot 0–19;
- **Nahrát / Streamování**: jak pro tento hub funguje **Spustit**;
- tlačítko **nahrání** (⤓): zapíše program do slotu, ale nespustí ho;
- stavový řádek: průběh, *Slot 3: program je v hubu* nebo co se pokazilo.

Když je připojeno několik hubů Robot Inventor nebo SPIKE Prime, má karta i tlačítko hubu: klepnutím na něj vyberete, který hub program dostane. MOCPilot si režim a slot na tomto zařízení zapamatuje.

<Screenshot name="robot-inventor-slot-card" alt="Karta slotu: hub, šipky slotu, přepínač Nahrát / Streamování a tlačítko nahrání" width={500} />

### Nahrání {#download-mode}

V režimu **Nahrát** promění **Spustit** program z bloků v program pro hub, zapíše ho do vybraného slotu a spustí ho v hubu. Zápis trvá několik sekund; pak program běží v hubu sám.

- Chcete-li ho později spustit znovu bez aplikace, vyberte slot levým a pravým tlačítkem hubu a stiskněte prostřední tlačítko.
- **Prostřední tlačítko** hubu program zastaví.
- Chcete-li se vrátit ke spouštění programů z MOCPilotu, přepněte kartu na **Streamování**.

### Co může běžet v hubu {#download-blocks}

Do hubu může jít většina bloků:

- události: spuštění programu, zprávy, podmínky, časovač, tlačítka hubu, senzory, gesta, orientace, náklon a rádiové signály;
- ovládání, operátory, proměnné, seznamy a Moje bloky;
- všechny bloky Robot Inventor a bloky motorů, světla a senzorů tohoto hubu.

Některé bloky potřebují aplikaci a samotné v hubu běžet nemohou: bloky panelu a herního ovladače, bloky jiných hubů, událost **prostředního tlačítka** (v hubu toto tlačítko program zastavuje), události baterie a připojení, teplota a kalibrace hřebenu řízení. Pokud program obsahuje některý z nich, nic se nezapíše: karta ukáže **Tyto bloky nemohou běžet v hubu bez aplikace** a vypíše je. Tyto bloky odeberte, nebo použijte **Streamování**.

Pokud zápis selže, stavový řádek řekne proč, například **V hubu není dost místa** nebo **Hub neodpověděl**. Zkuste to znovu, a pokud chyba přetrvává, restartujte hub.

## Firmware {#firmware}

MOCPilot pracuje s vlastním firmwarem LEGO v hubu a nenahrazuje ho:

- **Hub Robot Inventor**: firmware aplikace MINDSTORMS Robot Inventor. Poslední verze je firmware 1.5.6 se softwarem hubu 3.2.36.
- **Hub SPIKE Prime**: firmware **SPIKE Legacy** (ten z aplikace SPIKE 2). Novější firmware **SPIKE App 3** podporován není: MOCPilot vás na to upozorní, když takový hub najde. Nainstalujte firmware SPIKE Legacy aplikací LEGO® Education SPIKE™ Legacy a pak se připojte znovu.

Když je hub připravený, ukazuje na světelné matici číslo programového slotu.

## Když hub nenaběhne {#restore}

Pokud hub nenaběhne, zůstane tmavý, neukazuje číslo slotu nebo byl přepnut na firmware SPIKE App 3, obnovte ho nejprve oficiální aplikací:

1. Otevřete aplikaci MINDSTORMS Robot Inventor (u hubu SPIKE Prime aplikaci SPIKE Legacy) a připojte hub kabelem USB.
2. Spusťte aktualizaci hubu (**Update hub firmware**). Přepíše firmware, software hubu i zvuky robota a trvá asi 6 minut. Během ní hub neodpojujte.
3. Zavřete aplikaci LEGO a připojte hub v MOCPilotu.

### Režim obnovy (DFU) {#dfu}

Jen pokud oficiální aplikace hub vůbec nevidí, můžete firmware zapsat přes režim obnovy hubu (DFU). Je to pro zkušené uživatele:

1. Vypněte hub a odpojte ho. Podržte **tlačítko Bluetooth** a zapojte kabel USB; držte ho, dokud světlo tlačítka nezačne blikat červeně, zeleně a modře. Počítač teď vidí „LEGO Technic Large Hub in DFU Mode“.
2. Ve Windows pro toto zařízení jednou nainstalujte ovladač WinUSB, například pomocí Zadig. Mac a Linux ovladač nepotřebují.
3. Zapište obraz firmwaru aplikace Robot Inventor (1.5.6) nástrojem `dfu-util` na adresu `0x08008000`. Po dokončení se hub sám restartuje. Během zápisu ho neodpojujte.
4. Pak v aplikaci Robot Inventor spusťte **Update hub firmware** (viz výše), abyste obnovili software hubu a zvuky.

DFU zapisuje jen firmware. Samotný zavaděč obnovy přepsat nejde, takže to můžete vždy zkusit znovu.
