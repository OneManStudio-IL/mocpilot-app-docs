---
id: Motors
title: Motoare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motoare {#motors}

Blocurile pentru motoare pornesc, opresc și poziționează motoarele conectate la porturile hubului și reglează felul în care se mișcă. Categoria apare când un hub din profil are porturi pentru motoare. În fiecare bloc alegi hubul și unul sau mai multe porturi.

Unele blocuri au nevoie de un motor cu senzor de rotație încorporat (encoder), cum sunt motoarele unghiulare Technic, și de un hub care îl poate controla. Aceste blocuri sunt marcate „motoare cu encoder”. Ele nu sunt disponibile pentru huburile SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 și Mould King. Technic Move Hub are propriul set de blocuri, la sfârșitul acestei pagini.

## Acționarea motoarelor {#running-motors}

### `setează viteza la …` (Avansat) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Setează viteza (de la −100 la 100 %) pe care o folosesc **pornește motorul** și **rulează … pentru** pe aceste porturi. Blocul nu pornește singur motorul.

### `pornește motorul …` (Începător) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Pornește motorul în sensul selectat, cu viteza setată de **setează viteza la**.

- Sens: în sens orar sau în sens antiorar

### `pornește motorul la … % viteză` (Începător) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Pornește motorul cu viteza dată, de la −100 la 100 %. O viteză negativă îl rotește în sens invers.

- Utilizare tipică: condusul cu un joystick sau un slider: pune valoarea comenzii în câmpul vitezei.

### `oprește motorul` (Începător) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Oprește motorul.

### `rulează … pentru …` (Avansat) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Rotește motorul în sensul selectat un număr de rotații, grade sau secunde.

- Sens: în sens orar sau în sens antiorar
- Unități: `rotații`, `grade`, `secunde`
- Doar motoare cu encoder.

### `rulează pentru … la … % viteză` (Avansat) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Rotește motorul un număr de rotații, grade sau secunde, cu viteza dată.

- Unități: `rotații`, `grade`, `secunde`
- Doar motoare cu encoder.

## Poziție {#position}

### `mergi … la poziție …` (Avansat) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Rotește motorul într-o poziție absolută (marcajul de zero propriu al motorului).

- Traseu: `cea mai scurtă cale`, `în sens orar`, `în sens antiorar`
- Doar motoare cu encoder.

### `mergi la poziție relativă … la … % viteză` (Începător) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Rotește motorul într-o poziție, în grade, măsurată de la punctul setat cu **setează poziția relativă**.

- Utilizare tipică: virarea cu un servo, unde valoarea joystickului dă unghiul.
- Doar motoare cu encoder; pe BuWizz 3 folosește blocul de mai jos.

### `mergi la poziție relativă …` (BuWizz 3) (Începător) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Versiunea pentru BuWizz 3 a blocului de mai sus, fără intrarea pentru viteză.

- Huburi: BuWizz 3, cu motoare cu encoder.

### `setează poziția relativă …` (Începător) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Declară că poziția curentă a motorului are valoarea dată. Pozițiile relative se măsoară de la ea.

- Doar motoare cu encoder.

### `calibrare cremalieră … centru … grade …` (Începător) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Găsește centrul și cursa unei cremaliere de direcție.

- Motorul rotește cremaliera până la ambele capete, măsoară cât de departe poate merge și pune rezultatul în cele două variabile pe care le pui în câmpuri: poziția centrului și intervalul în grade. Cremaliera se oprește la mijloc, dar poziția ei relativă acolo este egală cu valoarea centrului, nu cu 0, așa că adaugă **setează poziția relativă** 0 imediat după acest bloc; apoi virează cu `interval × joystick / 100`.
- Direcția trebuie să aibă opritoare mecanice ferme la ambele capete (capătul cremalierei sau al angrenajului).
- Doar motoare cu encoder.

## Setările motorului {#motor-settings}

### `setează motorul la … la oprire` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Alege ce face motorul când se oprește.

- `frână`: se oprește rapid.
- `menține poziția`: își menține activ poziția (util pentru direcție).
- `rulare liberă`: se oprește liber, din inerție.
- Doar motoare cu encoder.

### `activați detectarea blocajului …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Activează sau dezactivează detectarea blocării. Când este activată, un motor care se blochează renunță în loc să continue să împingă, așa că un bloc care așteaptă motorul se poate termina.

- Huburi: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blocul poartă pictograma hubului).

### `setează accelerația la …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Alege cât de repede accelerează motorul.

- Opțiuni: `implicit`, `rapid`, `echilibrat`, `neted`, `încet`, `foarte încet`
- Doar motoare cu encoder.

### `setează decelerarea la …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Alege cât de repede încetinește motorul.

- Opțiuni: `implicit`, `rapid`, `echilibrat`, `neted`, `încet`, `foarte încet`
- Doar motoare cu encoder.

## Valorile motorului {#motor-values}

### `poziție` (Începător) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returnează poziția absolută a motorului.

- Doar motoare cu encoder.

### `poziție relativă` (Începător) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returnează poziția relativă a motorului, în grade.

- Doar motoare cu encoder.

### `viteză` (Începător) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returnează viteza curentă a motorului.

### `putere` (Avansat) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returnează puterea curentă a motorului.

- Huburi: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blocul poartă pictograma hubului).

## Robot Inventor {#robot-inventor-motors}

Aceste blocuri vin din aplicația Robot Inventor și funcționează doar cu [huburile MINDSTORMS Robot Inventor și SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ele poartă pictograma hubului. Ca să conduci un robot cu două roți, vezi blocurile de [Mișcare](/docs/Application/BlockBuilder/Blocks/Movement).

### `pornește motorul la … % putere` (Avansat) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Pornește motoarele de pe porturile selectate cu puterea dată, de la −100 la 100 % (implicit 75 %). Spre deosebire de **pornește motorul la … % viteză**, motorul nu menține o viteză reglată: sub sarcină încetinește, ca un motor fără encoder.

### `a fost întrerupt motorul?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` dacă ultima comandă a motorului de pe acest port nu s-a terminat pentru că un alt bloc de motor pe același port a întrerupt-o.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub își acționează motoarele încorporate cu aceste blocuri, în locul blocurilor pentru porturi de mai sus.

### `porni motoarele la … % viteză` (Începător) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Pornește motoarele de tracțiune cu viteza dată.

### `impuls de putere` (Începător) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Trimite un impuls de putere către motoarele de tracțiune.

- Utilizare tipică: un scurt boost înaintea blocurilor următoare.

### `oprește motoarele` (Începător) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Oprește motoarele de tracțiune.

### `setează frâna motoarelor …` (Începător) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Activează sau dezactivează frâna motoarelor de tracțiune.

- Opțiuni: `oprit`, `pornit`

### `setați axul direcției la …` (Începător) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Rotește direcția în poziția dată.

### `calibrează axul direcției` (Începător) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibrează direcția cu algoritmul propriu al hubului, care găsește automat intervalul de virare.

- Direcția trebuie să aibă opritoare mecanice ferme (de exemplu, capetele cremalierei de direcție).
