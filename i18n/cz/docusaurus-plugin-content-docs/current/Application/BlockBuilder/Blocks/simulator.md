---
id: Simulator
title: Simulátor
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulátor {#simulator}

**Simulátor** promění pedály, převodovku a ruční brzdu z panelu v auto, které se chová jako skutečné: zrychluje se setrvačností, dojíždí, brzdí, couvá a řadí. Ovládací prvky dávají jen své surové hodnoty; program z nich sestaví auto a posílá jeho rychlost motorům.

Kategorie se objeví, dokud má panel pedály, převodovku nebo ruční brzdu. Bloky, které tyto prvky čtou, najdete v části [Ovladače na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Vozidla {#vehicles}

Stiskněte **Vytvořit vozidlo** v horní části kategorie a pojmenujte ho (například „Vozidlo 1“). Bloky se objeví, jakmile má program alespoň jedno vozidlo, a v každém bloku zvolíte, se kterým vozidlem pracuje. Ke správě slouží **Přejmenovat vozidlo** a **Smazat vozidlo**; vozidlo nelze smazat, dokud jsou jeho bloky v programu, a poslední pedály, převodovku nebo ruční brzdu nelze z panelu odebrat, dokud se používají bloky Simulátoru.

<Screenshot name="blocks-simulator" alt="Kategorie Simulátor s blokem jízdy navěšeným na událost pedálů" width={900} />

Typické auto: navěste blok **jízda** na událost pedálů, připojte pedály k `plyn` a `brzda` a uvnitř spusťte hnací motor na `rychlost` vozidla:

```text
když pedály PDL1 jakýkoli je pohnut
    Vozidlo 1  jízda  plyn (pedály PDL1 zrychlení)  brzda (pedály PDL1 brzda)
        spustit motor na (rychlost z Vozidlo 1) % rychlost  (Hub 1, port A)
```

Cyklus `opakovat vždy` není potřeba: **jízda** běží sama, dokud se auto nezastaví.

## Bloky {#blocks}

### `… jízda plyn … brzda … převod … z … ruční brzda … zajištěna … rozdělovací převodovka …` (Začátečník) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Srdce simulátoru. Blok ve tvaru C, který řídí vozidlo: každých 0,1 s přečte své vstupy, posune auto o jeden krok a spustí bloky uvnitř (tam patří bloky motorů). Skončí, když auto stojí a nic není stisknuté; bloky uvnitř proběhnou naposledy, aby motor dostal konečnou hodnotu.

- `plyn` a `brzda`: jak hluboko je každý pedál sešlápnutý, 0 až 100.
- `převod`: zvolený rychlostní stupeň: `-1` zpátečka, `0` neutrál, `1` a výš vpřed. S ovládacím prvkem automatické převodovky v tomto slotu se místo toho použije poloha voliče (P, R, N, D) a v D si auto volí stupeň samo.
- `z`: kolik stupňů má převodovka (výchozí 6).
- `ruční brzda`: jak silně je ruční brzda zatažená, 0 až 100; `zajištěna`: zda je zajištěná.
- `rozdělovací převodovka` (volitelné): poloha [rozdělovací převodovky](/docs/Application/Dashboard/SpecialControls#transfer-case), obvykle blok [poloha rozdělovací převodovky](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. Ve 2H a 4H auto jezdí, jako by tam nebyla; v N nejede (jede setrvačností a brzda ho jen zpomaluje, aniž by couvalo); ve 4L je jeho rychlost omezena na 40 %. Pokud model rozdělovací převodovku nemá, nechte vstup prázdný.
- Vstup se počítá, jen když je do něj vložený blok; samotné číslo v prázdném slotu se ignoruje (kromě `z`).
- Vozidlo může najednou řídit jen jeden blok **jízda**; druhý pro stejné vozidlo své vnitřní bloky přeskočí.

### `nastavit … typ na …` (Začátečník) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Vyladí motor vozidla pro určitý druh vozidla: jak dlouho se valí (setrvačnost), jeho nejvyšší rychlost couvání a zda má vzduchovou brzdu.

- Typy: `osobní auto`, `terénní vozidlo`, `sportovní auto`, `nákladní auto` (nákladní auto má vzduchovou brzdu)

### `nastavit … … na … %` (Pokročilý) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Změní jedno nastavení motoru.

- `setrvačnost motoru`: čím vyšší, tím déle se auto bez plynu valí (0 znamená žádnou setrvačnost).
- `rychlost couvání`: nejvyšší rychlost při couvání.

### `nastavit … … na …` (Pokročilý) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Zapne nebo vypne jednu volbu vozidla.

- `couvání brzdou`: jen s pedály – držení brzdy ve stoji rozjede auto dozadu.
- `převody omezují rychlost`: každý stupeň má vlastní nejvyšší rychlost.
- `ruční brzda drží`: zajištěná ruční brzda drží auto na místě.
- `vzduchová brzda`: vzduchová brzda nákladního auta (dává událost „vypustí vzduch“).
- `automatická převodovka`: vstup `převod` se bere jako volič automatické převodovky.

### `resetovat …` (Pokročilý) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Zastaví vozidlo tam, kde je, a zapomene jeho stav.

### `… z …` (Začátečník) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Vrací jednu z hodnot vozidla.

- `rychlost`: od −100 do 100 (při couvání záporná), připravená pro slot rychlosti motoru.
- `otáčky motoru`: od 0 do 100, pro otáčkoměr nebo zvuk motoru.
- `převod`: aktuální stupeň (`-1` zpátečka, `0` neutrál, pak `1`, `2`…).

### `je … … ?` (Začátečník) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Vrací `true`, když je vozidlo ve vybraném stavu.

- Stavy: `v pohybu`, `brzdí`, `na ruční brzdě`

### `když … …` (Začátečník) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Spustí svůj skript, když se s vozidlem něco stane.

- Události: `se rozjede`, `zastaví`, `začne brzdit`, `přestane brzdit`, `prudce brzdí`, `vypustí vzduch`, `přeřadí`
- Typické použití: přehrát zvuk, například syčení vzduchové brzdy při `vypustí vzduch` nebo skřípění při `prudce brzdí` (viz [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds)).
