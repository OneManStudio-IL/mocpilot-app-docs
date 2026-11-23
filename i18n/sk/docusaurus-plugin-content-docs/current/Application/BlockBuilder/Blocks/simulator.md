---
id: Simulator
title: Simulátor
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulátor {#simulator}

**Simulátor** premení pedále, prevodovku a ručnú brzdu z panela na auto, ktoré sa správa ako skutočné: zrýchľuje so zotrvačnosťou, dobieha, brzdí, cúva a radí prevodové stupne. Ovládače dávajú iba svoje surové hodnoty; program z nich zostaví auto a jeho rýchlosť posiela motorom.

Kategória sa zobrazí, kým sú na paneli pedále, prevodovka alebo ručná brzda. Bloky, ktoré tieto ovládače čítajú, nájdete v časti [Ovládače na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Vozidlá {#vehicles}

Stlačte **Vytvoriť vozidlo** hore v kategórii a pomenujte ho (napríklad „Vozidlo 1“). Bloky sa zobrazia, keď má program aspoň jedno vozidlo, a v každom bloku vyberiete, s ktorým vozidlom pracuje. Na ich správu slúžia **Premenovať vozidlo** a **Odstrániť vozidlo**; vozidlo nemôžete odstrániť, kým sú jeho bloky v programe, a posledné pedále, prevodovku či ručnú brzdu nemožno z panela odstrániť, kým sa používajú bloky Simulátora.

<Screenshot name="blocks-simulator" alt="Kategória Simulátor s blokom jazdy zaveseným na udalosti pedálov" width={900} />

Typické auto: blok **jazdiť** zaveste na udalosť pedálov, pedále pripojte k `plyn` a `brzda` a vo vnútri spustite hnací motor rýchlosťou vozidla `rýchlosť`:

```text
keď pedále PDL1 akýkoľvek pohnuté
    Vozidlo 1  jazdiť  plyn (pedále PDL1 zrýchlenie)  brzda (pedále PDL1 brzda)
        spustiť motor na (rýchlosť z Vozidlo 1) % rýchlosť  (Hub 1, port A)
```

Cyklus `zopakovať vždy` nie je potrebný: blok **jazdiť** beží sám, kým auto nezastaví.

## Bloky {#blocks}

### `… jazdiť plyn … brzda … stupeň … z … ručná brzda … zaistená … rozdeľovacia prevodovka …` (Začiatočník) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Srdce simulátora. Blok v tvare C, ktorý riadi vozidlo: každých 0,1 s prečíta svoje vstupy, posunie auto o jeden krok a vykoná bloky vo svojom vnútri (vložte tam bloky motorov). Skončí, keď auto stojí a nič nie je stlačené; bloky vo vnútri sa vykonajú ešte raz, aby motor dostal konečnú hodnotu.

- `plyn` a `brzda`: ako hlboko je každý pedál stlačený, 0 až 100.
- `stupeň`: zvolený prevodový stupeň: `-1` spiatočka, `0` neutrál, `1` a vyššie dopredu. Ak je v tomto políčku ovládač automatickej prevodovky, použije sa namiesto toho poloha jeho voliča (P, R, N, D) a v D si auto stupeň vyberá samo.
- `z`: koľko stupňov má prevodovka (predvolene 6).
- `ručná brzda`: ako silno je ručná brzda potiahnutá, 0 až 100; `zaistená`: či je zaistená.
- `rozdeľovacia prevodovka` (voliteľné): poloha [rozdeľovacej prevodovky](/docs/Application/Dashboard/SpecialControls#transfer-case), zvyčajne blok [poloha rozdeľovacej prevodovky](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. V 2H a 4H auto jazdí, akoby tam nebola; v N nejazdí (ide voľnobehom a brzda ho iba spomaľuje, bez cúvania); v 4L je jeho rýchlosť obmedzená na 40 %. Ak model rozdeľovaciu prevodovku nemá, nechajte vstup prázdny.
- Vstup sa berie do úvahy, iba keď je v ňom vložený blok; samotné číslo v prázdnom políčku sa ignoruje (okrem `z`).
- Vozidlo môže naraz riadiť iba jeden blok **jazdiť**; druhý pre to isté vozidlo svoje vnútorné bloky preskočí.

### `nastaviť … typ na …` (Začiatočník) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Naladí motor vozidla pre určitý druh vozidla: ako dlho sa ešte kotúľa (zotrvačnosť), jeho najvyššiu rýchlosť cúvania a či má vzduchovú brzdu.

- Typy: `osobné auto`, `terénne vozidlo`, `športové auto`, `nákladné auto` (nákladné auto má vzduchovú brzdu)

### `nastaviť … … na … %` (Pokročilý) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Zmení jedno nastavenie motora.

- `zotrvačnosť motora`: čím je vyššia, tým dlhšie sa auto bez plynu kotúľa (0 znamená bez zotrvačnosti).
- `rýchlosť cúvania`: najvyššia rýchlosť pri cúvaní.

### `nastaviť … … na …` (Pokročilý) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Zapne alebo vypne jednu voľbu vozidla.

- `cúvanie brzdou`: iba s pedálmi; držanie brzdy v stoji rozbehne vozidlo dozadu.
- `stupne obmedzujú rýchlosť`: každý stupeň má vlastnú najvyššiu rýchlosť.
- `ručná brzda drží`: zaistená ručná brzda drží auto na mieste.
- `vzduchová brzda`: vzduchová brzda nákladného auta (poskytuje udalosť „vypustí vzduch“).
- `automatická prevodovka`: vstup `stupeň` sa berie ako volič automatickej prevodovky.

### `resetovať …` (Pokročilý) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Zastaví vozidlo tam, kde je, a zabudne jeho stav.

### `… z …` (Začiatočník) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Vráti jednu z hodnôt vozidla.

- `rýchlosť`: od −100 do 100 (pri cúvaní záporná), pripravená pre políčko rýchlosti motora.
- `otáčky motora`: od 0 do 100, pre otáčkomer alebo zvuk motora.
- `stupeň`: aktuálny prevodový stupeň (`-1` spiatočka, `0` neutrál, potom `1`, `2`…).

### `je … … ?` (Začiatočník) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Vráti `true`, keď je vozidlo vo vybranom stave.

- Stavy: `v pohybe`, `pri brzdení`, `na ručnej brzde`

### `keď … …` (Začiatočník) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Spustí svoj skript, keď sa s vozidlom niečo stane.

- Udalosti: `sa rozbehne`, `zastaví`, `začne brzdiť`, `prestane brzdiť`, `prudko brzdí`, `vypustí vzduch`, `preradí`
- Typické použitie: prehrať zvuk, napríklad syčanie vzduchovej brzdy pri `vypustí vzduch` alebo škrípanie pri `prudko brzdí` (pozrite si [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds)).
