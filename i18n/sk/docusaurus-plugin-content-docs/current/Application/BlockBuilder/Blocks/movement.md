---
id: Movement
title: Pohyb
description: "Bloky pohybu riadia robota s dvoma motormi na hube MINDSTORMS Robot Inventor alebo SPIKE: jazda, zatáčanie, tankové riadenie, rýchlosť, zrýchlenie a zastavenie."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Pohyb {#movement}

Bloky pohybu riadia robota s dvoma kolesami, z ktorých každé poháňa vlastný motor, ako jeden celok: „choď dopredu 10 cm“, „otoč sa v smere hodinových ručičiek o 1 otáčku“, „zatáčaj o 30 doprava“. Sú to rovnaké bloky pohybu ako v aplikácii LEGO® MINDSTORMS® Robot Inventor. Kategória sa v palete zobrazí ako prvá, keď má profil [hub Robot Inventor alebo SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Všetky jej bloky nesú čiernobielu ikonu hubu.

## Ako funguje pohyb {#how-movement-works}

- **Pohybové motory.** Predvolene je ľavé koleso na porte **A** a pravé na porte **B**. Iné porty vyberiete blokom [nastaviť pohybové motory na](#block_ri_move_set_pair). Na robotovi sú oba motory otočené proti sebe, preto MOCPilot točí pravým opačne: kladná rýchlosť vezie robota vždy dopredu.
- **Rýchlosť pohybu.** Bloky bez vlastnej rýchlosti používajú rýchlosť pohybu: **50 %**, kým ju nezmení blok [nastaviť rýchlosť pohybu na](#block_ri_move_set_speed).
- **Zatáčanie** je číslo od −100 do 100. **0** ide rovno. Kladné hodnoty zatáčajú doprava, záporné doľava: vnútorné koleso spomalí, a to tým viac, čím bližšie je zatáčanie k ±100 (pri 50 sa točí polovičnou rýchlosťou). Pri **100** alebo **−100** sa kolesá točia opačne a robot sa otáča na mieste.
- **Jednotky.** Vzdialenosť môže byť v `cm`, `palce`, `otáčky` alebo `stupne` motorov a mnohé bloky prijímajú aj `sekundy`. Centimetre a palce sa počítajú z dráhy na jednu otáčku motora: predvolene **17,5 cm** (koleso Robot Inventor), mení sa blokom [nastaviť 1 otáčku motora na](#block_ri_move_set_distance). Záporná vzdialenosť vezie robota opačne.
- **Čakanie.** Bloky so vzdialenosťou (`ísť … o …`) čakajú, kým robot neprejde celú vzdialenosť. Bloky začínajúce **začať ísť** sa vrátia hneď: robot ide ďalej, kým nepríde **zastaviť pohyb** alebo iný blok pohybu.

## Nastavenia pohybu {#movement-settings}

### `nastaviť pohybové motory na … …` (Začiatočník) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Vyberie porty motora ľavého a pravého kolesa. Predvolené: **A** a **B**. Oba porty musia byť rôzne.

### `nastaviť rýchlosť pohybu na … %` (Začiatočník) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Nastaví rýchlosť, od −100 do 100 %, pre bloky pohybu, ktoré nemajú vlastnú rýchlosť. Predvolené: 50 %. Motory nespustí.

### `nastaviť 1 otáčku motora na … cm / palce dráhy` (Pokročilý) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Povie MOCPilotu, koľko robot prejde za jednu otáčku motora, aby vzdialenosti v centimetroch a palcoch vychádzali správne. Predvolené: 17,5 cm. Zmerajte svojho robota: nechajte ho **ísť dopredu o 1 otáčku** a zmerajte prejdenú vzdialenosť. Hodnota 0 sa ignoruje.

### `nastaviť zrýchlenie pohybu na …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Ako rýchlo sa pohybové motory rozbiehajú a spomaľujú.

- Možnosti: `predvolený`, `rýchly` (0,1 s), `vyvážený` (0,35 s), `hladký` (0,8 s), `pomalý` (1,2 s), `veľmi pomalý` (2 s): čas od pokoja po plnú rýchlosť.

### `nastaviť pohybové motory na … pri zastavení` (Pokročilý) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Čo motory urobia, keď robot zastaví.

- `dobeh`: motory sa voľne pretáčajú a robot dobehne zotrvačnosťou.
- `brzda` (predvolené): motory brzdia.
- `udržať pozíciu`: motory aktívne držia svoju polohu, aj keď do robota strčíte.

## Jazda {#moving}

### `ísť … o …` (Začiatočník) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Pohne robotom rýchlosťou pohybu a čaká, kým pohyb neskončí.

- Smer: `dopredu`, `dozadu`, `v smere hodinových ručičiek`, `proti smeru hodinových ručičiek` (posledné dva otáčajú robota na mieste).
- Jednotky: `cm`, `palce`, `otáčky`, `stupne`, `sekundy`. Predvolené: 10 cm.

### `ísť … o …` (so zatáčaním) (Začiatočník) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Pohne robotom so zadaným zatáčaním (−100 až 100) rýchlosťou pohybu a čaká, kým pohyb neskončí. So zatáčaním 30 ide robot oblúkom doprava.

- Jednotky: `cm`, `palce`, `otáčky`, `stupne`, `sekundy`.

### `ísť … o … na … % rýchlosť` (Pokročilý) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
To isté s vlastnou rýchlosťou namiesto rýchlosti pohybu.

- Jednotky: `cm`, `palce`, `otáčky`, `stupne`.

### `ísť … na … … % rýchlosť` (Pokročilý) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Tankové riadenie na vzdialenosť: nastaví rýchlosť ľavého a pravého kolesa zvlášť (každú od −100 do 100 %) a čaká, kým robot neprejde celú vzdialenosť.

- Jednotky: `cm`, `palce`, `otáčky`, `stupne`, `sekundy`.

### `začať ísť …` (Začiatočník) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Rozbehne robota so zadaným zatáčaním rýchlosťou pohybu a hneď pokračuje ďalším blokom.

### `začať ísť … na … % rýchlosť` (Pokročilý) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Rozbehne robota so zadaným zatáčaním a rýchlosťou.

- Typické použitie: do políčka zatáčania vložte posuvník z panela a do políčka rýchlosti pedál.

### `začať ísť … na … % výkon` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Ako blok vyššie, ale namiesto regulovanej rýchlosti nastavuje **výkon** motorov: motory sa nesnažia udržať rýchlosť, keď robot ide do kopca alebo vezie náklad.

### `začať ísť … … % rýchlosť` (Pokročilý) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Tankové riadenie: rozbehne ľavé a pravé koleso, každé vlastnou rýchlosťou.

### `začať ísť … … % výkon` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Tankové riadenie s výkonom motora každého kolesa namiesto regulovanej rýchlosti.

### `zastaviť pohyb` (Začiatočník) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Zastaví oba pohybové motory tak, ako určuje blok **nastaviť pohybové motory na … pri zastavení** (predvolene brzdou).

### `bol pohyb prerušený?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true`, ak posledný pohyb nedobehol do konca: prerušil ho iný blok pohybu alebo **zastaviť pohyb**.
