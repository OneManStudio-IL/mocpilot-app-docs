---
id: Movement
title: Pohyb
description: "Bloky pohybu řídí robota se dvěma motory na hubu MINDSTORMS Robot Inventor nebo SPIKE: jízda, zatáčení, tankové řízení, rychlost, zrychlení a zastavení."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Pohyb {#movement}

Bloky pohybu řídí robota se dvěma koly, z nichž každé pohání vlastní motor, jako jeden celek: „jeď vpřed 10 cm“, „otoč se ve směru hodinových ručiček o 1 otáčku“, „zatáčej o 30 doprava“. Jsou to stejné bloky pohybu jako v aplikaci LEGO® MINDSTORMS® Robot Inventor. Kategorie se v paletě objeví jako první, když má profil [hub Robot Inventor nebo SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Všechny její bloky nesou černobílou ikonu hubu.

## Jak pohyb funguje {#how-movement-works}

- **Pohybové motory.** Ve výchozím stavu je levé kolo na portu **A** a pravé na portu **B**. Jiné porty vyberete blokem [nastavit pohybové motory na](#block_ri_move_set_pair). Na robotovi jsou oba motory otočené proti sobě, proto MOCPilot točí pravým opačně: kladná rychlost robota vždy veze vpřed.
- **Rychlost pohybu.** Bloky bez vlastní rychlosti používají rychlost pohybu: **50 %**, dokud ji nezmění blok [nastavit rychlost pohybu na](#block_ri_move_set_speed).
- **Zatáčení** je číslo od −100 do 100. **0** jede rovně. Kladné hodnoty zatáčejí doprava, záporné doleva: vnitřní kolo zpomalí, a to tím víc, čím blíž je zatáčení k ±100 (při 50 se točí poloviční rychlostí). Při **100** nebo **−100** se kola točí opačně a robot se otáčí na místě.
- **Jednotky.** Vzdálenost může být v `cm`, `palce`, `otáčky` nebo `stupně` motorů a mnoho bloků přijímá i `sekundy`. Centimetry a palce se počítají z dráhy na jednu otáčku motoru: ve výchozím stavu **17,5 cm** (kolo Robot Inventor), mění se blokem [nastavit 1 otáčku motoru na](#block_ri_move_set_distance). Záporná vzdálenost veze robota opačně.
- **Čekání.** Bloky se vzdáleností (`jet … o …`) čekají, dokud robot neujede celou vzdálenost. Bloky začínající **začít jet** se vrátí hned: robot jede dál, dokud nepřijde **zastavit pohyb** nebo jiný blok pohybu.

## Nastavení pohybu {#movement-settings}

### `nastavit pohybové motory na … …` (Začátečník) {#block_ri_move_set_pair}

<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />

Vybere porty motoru levého a pravého kola. Výchozí: **A** a **B**. Oba porty musí být různé.

### `nastavit rychlost pohybu na … %` (Začátečník) {#block_ri_move_set_speed}

<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />

Nastaví rychlost, od −100 do 100 %, pro bloky pohybu, které nemají vlastní rychlost. Výchozí: 50 %. Motory nespustí.

### `nastavit 1 otáčku motoru na … cm / palce dráhy` (Pokročilý) {#block_ri_move_set_distance}

<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />

Řekne MOCPilotu, kolik robot ujede za jednu otáčku motoru, aby vzdálenosti v centimetrech a palcích vycházely správně. Výchozí: 17,5 cm. Změřte svého robota: nechte ho **jet vpřed o 1 otáčku** a změřte ujetou vzdálenost. Hodnota 0 se ignoruje.

### `nastavit zrychlení pohybu na …` (Guru) {#block_ri_move_set_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />

Jak rychle se pohybové motory rozjíždějí a zpomalují.

- Volby: `výchozí`, `rychlý` (0,1 s), `vyvážený` (0,35 s), `hladký` (0,8 s), `pomalý` (1,2 s), `velmi pomalý` (2 s): doba od klidu po plnou rychlost.

### `nastavit pohybové motory na … při zastavení` (Pokročilý) {#block_ri_move_set_stop}

<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />

Co motory udělají, když robot zastaví.

- `plachtění`: motory se volně protáčejí a robot dojede setrvačností.
- `brzda` (výchozí): motory brzdí.
- `udržet pozici`: motory aktivně drží svou polohu, i když do robota strčíte.

## Jízda {#moving}

### `jet … o …` (Začátečník) {#block_ri_move}

<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />

Pohne robotem rychlostí pohybu a čeká, dokud pohyb neskončí.

- Směr: `vpřed`, `vzad`, `ve směru hodinových ručiček`, `proti směru hodinových ručiček` (poslední dva otáčejí robotem na místě).
- Jednotky: `cm`, `palce`, `otáčky`, `stupně`, `sekundy`. Výchozí: 10 cm.

### `jet … o …` (se zatáčením) (Začátečník) {#block_ri_move_steer}

<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />

Pohne robotem se zadaným zatáčením (−100 až 100) rychlostí pohybu a čeká, dokud pohyb neskončí. Se zatáčením 30 jede robot obloukem doprava.

- Jednotky: `cm`, `palce`, `otáčky`, `stupně`, `sekundy`.

### `jet … o … na … % rychlost` (Pokročilý) {#block_ri_move_steer_distance_speed}

<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />

Totéž s vlastní rychlostí místo rychlosti pohybu.

- Jednotky: `cm`, `palce`, `otáčky`, `stupně`.

### `jet … na … … % rychlost` (Pokročilý) {#block_ri_move_distance_dual_speed}

<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />

Tankové řízení na vzdálenost: nastaví rychlost levého a pravého kola zvlášť (každou od −100 do 100 %) a čeká, dokud robot neujede celou vzdálenost.

- Jednotky: `cm`, `palce`, `otáčky`, `stupně`, `sekundy`.

### `začít jet …` (Začátečník) {#block_ri_move_start_steer}

<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />

Rozjede robota se zadaným zatáčením rychlostí pohybu a hned pokračuje dalším blokem.

### `začít jet … na … % rychlost` (Pokročilý) {#block_ri_move_start_steer_speed}

<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />

Rozjede robota se zadaným zatáčením a rychlostí.

- Typické použití: do slotu zatáčení vložte posuvník z panelu a do slotu rychlosti pedál.

### `začít jet … na … % výkon` (Guru) {#block_ri_move_start_steer_power}

<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />

Jako blok výše, ale místo regulované rychlosti nastavuje **výkon** motorů: motory se nesnaží udržet rychlost, když robot stoupá do kopce nebo veze náklad.

### `začít jet … … % rychlost` (Pokročilý) {#block_ri_move_start_dual_speed}

<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />

Tankové řízení: rozjede levé a pravé kolo každé vlastní rychlostí.

### `začít jet … … % výkon` (Guru) {#block_ri_move_start_dual_power}

<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />

Tankové řízení s výkonem motoru každého kola místo regulované rychlosti.

### `zastavit pohyb` (Začátečník) {#block_ri_move_stop}

<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />

Zastaví oba pohybové motory tak, jak určuje blok **nastavit pohybové motory na … při zastavení** (ve výchozím stavu brzdou).

### `byl pohyb přerušen?` (Guru) {#block_ri_move_was_interrupted}

<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />

`true`, pokud poslední pohyb nedoběhl do konce: přerušil ho jiný blok pohybu nebo **zastavit pohyb**.
