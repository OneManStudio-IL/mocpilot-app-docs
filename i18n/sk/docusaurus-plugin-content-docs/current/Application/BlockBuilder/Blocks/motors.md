---
id: Motors
title: Motory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motory {#motors}

Bloky motorov spúšťajú, zastavujú a polohujú motory pripojené k portom hubu a ladia ich pohyb. Kategória sa zobrazí, keď má niektorý hub v profile porty pre motory. V každom bloku vyberáte hub a jeden alebo viac portov.

Niektoré bloky potrebujú motor so vstavaným senzorom otáčania (enkodérom), napríklad uhlové motory Technic, a hub, ktorý ho dokáže riadiť. Tieto bloky sú označené „motory s enkodérom“. Nie sú k dispozícii pre huby SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 a Mould King. Technic Move Hub má vlastnú sadu blokov na konci tejto stránky.

## Spúšťanie motorov {#running-motors}

### `nastaviť rýchlosť na …` (Pokročilý) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Nastaví rýchlosť (od −100 do 100 %), ktorú na týchto portoch používajú bloky **spustiť motor** a **spustiť … na**. Samotný blok motor nespustí.

### `spustiť motor …` (Začiatočník) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Spustí motor vo vybranom smere rýchlosťou nastavenou blokom **nastaviť rýchlosť na**.

- Smer: v smere alebo proti smeru hodinových ručičiek

### `spustiť motor na … % rýchlosť` (Začiatočník) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Spustí motor zadanou rýchlosťou od −100 do 100 %. Záporná rýchlosť ho točí opačne.

- Typické použitie: jazda joystickom alebo posuvníkom: hodnotu ovládača vložte do políčka rýchlosti.

### `zastaviť motor` (Začiatočník) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Zastaví motor.

### `spustiť … na …` (Pokročilý) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Točí motor vo vybranom smere zadaný počet otáčok, stupňov alebo sekúnd.

- Smer: v smere alebo proti smeru hodinových ručičiek
- Jednotky: `otáčky`, `stupne`, `sekundy`
- Iba motory s enkodérom.

### `spustiť na … na … % rýchlosť` (Pokročilý) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Točí motor zadaný počet otáčok, stupňov alebo sekúnd zadanou rýchlosťou.

- Jednotky: `otáčky`, `stupne`, `sekundy`
- Iba motory s enkodérom.

## Poloha {#position}

### `ísť … na pozíciu …` (Pokročilý) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Natočí motor do absolútnej polohy (vlastnej nulovej značky motora).

- Dráha: `najkratšia cesta`, `v smere hodinových ručičiek`, `proti smeru hodinových ručičiek`
- Iba motory s enkodérom.

### `ísť na relatívnu pozíciu … na … % rýchlosť` (Začiatočník) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Natočí motor do polohy v stupňoch, počítanej od bodu nastaveného blokom **nastaviť relatívnu polohu**.

- Typické použitie: riadenie servom, pri ktorom hodnota joysticku určuje uhol.
- Iba motory s enkodérom; na BuWizz 3 použite blok nižšie.

### `ísť na relatívnu pozíciu …` (BuWizz 3) (Začiatočník) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Verzia predchádzajúceho bloku pre BuWizz 3, bez vstupu rýchlosti.

- Huby: BuWizz 3, s motormi s enkodérom.

### `nastaviť relatívnu polohu …` (Začiatočník) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Vyhlási aktuálnu polohu motora za zadanú hodnotu. Relatívne polohy sa počítajú od nej.

- Iba motory s enkodérom.

### `kalibrovať hrebeň … stred … stupne …` (Začiatočník) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Zistí stred a rozsah pohybu hrebeňa riadenia.

- Motor otočí hrebeň k obom koncom, zmeria, kam až dosiahne, a výsledok uloží do dvoch premenných, ktoré vložíte do políčok: polohu stredu a rozsah v stupňoch. Hrebeň zastaví v strede, jeho relatívna poloha tam však zodpovedá hodnote stredu, nie 0, preto hneď za tento blok pridajte **nastaviť relatívnu polohu** 0; potom riaďte pomocou `rozsah × joystick / 100`.
- Riadenie musí mať na oboch koncoch pevné mechanické dorazy (koniec hrebeňa alebo prevodu).
- Iba motory s enkodérom.

## Nastavenia motora {#motor-settings}

### `nastaviť motor na … pri zastavení` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Určí, čo motor urobí, keď sa zastaví.

- `brzda`: rýchlo zastaví.
- `držať polohu`: aktívne drží svoju polohu (užitočné pri riadení).
- `dobeh`: voľne dobehne.
- Iba motory s enkodérom.

### `zapnúť detekciu zaseknutia …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Zapne alebo vypne detekciu zaseknutia.

- Huby: MINDSTORMS Robot Inventor.

### `nastaviť zrýchlenie na …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Určí, ako rýchlo motor zrýchľuje.

- Možnosti: `predvolený`, `rýchly`, `vyvážený`, `hladký`, `pomalý`, `veľmi pomalý`
- Iba motory s enkodérom.

### `nastaviť spomalenie na …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Určí, ako rýchlo motor spomaľuje.

- Možnosti: `predvolený`, `rýchly`, `vyvážený`, `hladký`, `pomalý`, `veľmi pomalý`
- Iba motory s enkodérom.

## Hodnoty motora {#motor-values}

### `poloha` (Začiatočník) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Vráti absolútnu polohu motora.

- Iba motory s enkodérom.

### `relatívna poloha` (Začiatočník) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Vráti relatívnu polohu motora v stupňoch.

- Iba motory s enkodérom.

### `rýchlosť` (Začiatočník) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Vráti aktuálnu rýchlosť motora.

### `výkon` (Pokročilý) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Vráti aktuálny výkon motora.

- Huby: MINDSTORMS Robot Inventor.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub poháňa svoje vstavané motory týmito blokmi namiesto vyššie uvedených blokov pre porty.

### `spustiť motory pri … % rýchlosť` (Začiatočník) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Spustí hnacie motory zadanou rýchlosťou.

### `výkonový impulz` (Začiatočník) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Pošle hnacím motorom výkonový impulz.

- Typické použitie: krátke zosilnenie pred ďalšími blokmi.

### `zastaviť motory` (Začiatočník) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Zastaví hnacie motory.

### `nastaviť brzdu motorov …` (Začiatočník) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Zapne alebo vypne brzdu hnacích motorov.

- Možnosti: `vyp.`, `zap.`

### `nastaviť riadiaci rám na …` (Začiatočník) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Natočí riadenie do zadanej polohy.

### `kalibrovať riadiaci rám` (Začiatočník) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibruje riadenie vlastným algoritmom hubu, ktorý automaticky nájde rozsah riadenia.

- Riadenie musí mať pevné mechanické dorazy (napríklad konce hrebeňa riadenia).
