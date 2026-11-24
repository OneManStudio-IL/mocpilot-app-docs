---
id: Movement
title: Mișcare
description: "Blocurile de mișcare conduc un robot cu două motoare pe hubul MINDSTORMS Robot Inventor sau SPIKE: deplasare, virare, condus tip tanc, viteză, accelerație și oprire."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mișcare

Blocurile de mișcare conduc ca pe o singură unitate un robot cu două roți, fiecare rotită de propriul motor: „mișcă înainte 10 cm”, „rotește în sens orar 1 rotație”, „virează 30 la dreapta”. Sunt aceleași blocuri de mișcare ca în aplicația LEGO® MINDSTORMS® Robot Inventor. Categoria apare prima în paletă când profilul are un [hub Robot Inventor sau SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Toate blocurile ei poartă pictograma alb-negru a hubului.

## Cum funcționează mișcarea {#how-movement-works}

- **Motoarele de mișcare.** Implicit, roata stângă este pe portul **A**, iar roata dreaptă pe portul **B**. Folosește [setează motoarele de mișcare la](#block_ri_move_set_pair) ca să alegi alte porturi. Pe un robot, cele două motoare stau față în față, așa că MOCPilot îl rotește pe cel din dreapta invers: o viteză pozitivă duce întotdeauna robotul înainte.
- **Viteza de mișcare.** Blocurile fără viteză proprie folosesc viteza de mișcare: **50 %**, până când [setează viteza de mișcare la](#block_ri_move_set_speed) o schimbă.
- **Virarea** este un număr de la −100 la 100. **0** merge drept. Valorile pozitive virează la dreapta, cele negative la stânga: roata din interior încetinește cu atât mai mult cu cât virarea se apropie de ±100 (la 50 se rotește cu jumătate din viteză). La **100** sau **−100** roțile se rotesc în sensuri opuse și robotul se întoarce pe loc.
- **Unități.** Distanțele pot fi în `cm`, `inci`, `rotații` sau `grade` ale motoarelor, iar multe blocuri acceptă și `secunde`. Centimetrii și incii folosesc distanța parcursă la o rotație a motorului: implicit **17,5 cm** (roata Robot Inventor), schimbată cu [setează 1 rotație a motorului la](#block_ri_move_set_distance). O distanță negativă duce robotul în sens invers.
- **Așteptare.** Blocurile cu distanță (`mișcă … pe …`) așteaptă până când robotul a parcurs distanța. Blocurile care încep cu **pornește mișcarea** trec imediat mai departe: robotul merge în continuare până la **oprește mișcarea** sau un alt bloc de mișcare.

## Setările mișcării {#movement-settings}

### `setează motoarele de mișcare la … …` (Începător) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Alege porturile motorului roții stângi și ale motorului roții drepte. Implicit: **A** și **B**. Cele două porturi trebuie să fie diferite.

### `setează viteza de mișcare la … %` (Începător) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Setează viteza, de la −100 la 100 %, a blocurilor de mișcare care nu au viteză proprie. Implicit: 50 %. Nu pornește motoarele.

### `setează 1 rotație a motorului la … cm / inci parcurși` (Avansat) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Îi spune lui MOCPilot cât parcurge robotul la o rotație a motorului, ca distanțele în centimetri și inci să iasă corect. Implicit: 17,5 cm. Măsoară-ți robotul: pune-l să se **miște înainte 1 rotație** și măsoară distanța. Valoarea 0 este ignorată.

### `setează accelerația mișcării la …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Cât de repede accelerează și încetinesc motoarele de mișcare.

- Opțiuni: `implicit`, `rapid` (0,1 s), `echilibrat` (0,35 s), `neted` (adică lin, 0,8 s), `încet` (1,2 s), `foarte încet` (2 s): timpul de la oprire până la viteza maximă.

### `setează motoarele de mișcare la … la oprire` (Avansat) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Ce fac motoarele când robotul se oprește.

- `rulare liberă`: motoarele se rotesc liber, iar robotul rulează până se oprește.
- `frână` (implicit): motoarele frânează.
- `menține poziția`: motoarele își mențin activ poziția, chiar dacă împingi robotul.

## Deplasare {#moving}

### `mișcă … pe …` (Începător) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Mișcă robotul cu viteza de mișcare și așteaptă până termină.

- Direcție: `înainte`, `înapoi`, `în sens orar`, `în sens antiorar` (ultimele două rotesc robotul pe loc).
- Unități: `cm`, `inci`, `rotații`, `grade`, `secunde`. Implicit: 10 cm.

### `mișcă … pe …` (cu virare) (Începător) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Mișcă robotul cu virarea dată (−100 până la 100) și cu viteza de mișcare și așteaptă până termină. Cu virarea 30, robotul descrie o curbă spre dreapta.

- Unități: `cm`, `inci`, `rotații`, `grade`, `secunde`.

### `mișcă … pe … la … % viteză` (Avansat) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
La fel, dar cu viteză proprie în locul vitezei de mișcare.

- Unități: `cm`, `inci`, `rotații`, `grade`.

### `mișcă … la … … % viteză` (Avansat) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Condus tip tanc pe o distanță: setează separat viteza roții stângi și a celei drepte (−100 până la 100 % fiecare) și așteaptă până când robotul a parcurs distanța.

- Unități: `cm`, `inci`, `rotații`, `grade`, `secunde`.

### `pornește mișcarea …` (Începător) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Pornește mișcarea cu virarea dată și cu viteza de mișcare și trece imediat la blocul următor.

### `pornește mișcarea … la … % viteză` (Avansat) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Pornește mișcarea cu virarea și viteza date.

- Utilizare tipică: pune un slider de pe tabloul de bord în câmpul virării și o pedală în câmpul vitezei.

### `pornește mișcarea … la … % putere` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Ca blocul de mai sus, dar setează **puterea** motoarelor în locul unei viteze reglate: motoarele nu încearcă să mențină viteza când robotul urcă sau duce o sarcină.

### `pornește mișcarea la … … % viteză` (Avansat) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Condus tip tanc: pornește roata stângă și cea dreaptă, fiecare cu viteza ei.

### `pornește mișcarea la … … % putere` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Condus tip tanc cu puterea motorului fiecărei roți în locul unei viteze reglate.

### `oprește mișcarea` (Începător) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Oprește ambele motoare de mișcare așa cum spune **setează motoarele de mișcare la … la oprire** (implicit cu frână).

### `a fost întreruptă mișcarea?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` dacă ultima mișcare nu s-a terminat: un alt bloc de mișcare sau **oprește mișcarea** a întrerupt-o.
