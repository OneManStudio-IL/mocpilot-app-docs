---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

**Simulator** transformă pedalele, cutia de viteze și frâna de mână din tabloul de bord într-o mașină care se comportă ca una adevărată: accelerează cu inerție, rulează liber, frânează, merge înapoi și schimbă treptele. Comenzile dau doar valorile lor brute; programul construiește mașina din ele și trimite viteza ei la motoare.

Categoria apare cât timp tabloul de bord are pedale, cutie de viteze sau frână de mână. Blocurile care citesc aceste comenzi sunt descrise la [Controlere pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Vehicule {#vehicles}

Apasă **Creează vehicul** din partea de sus a categoriei și dă-i un nume (de exemplu, „Vehicul 1”). Blocurile apar de îndată ce programul are cel puțin un vehicul, iar în fiecare bloc alegi cu ce vehicul lucrează. **Redenumește vehiculul** și **Șterge vehiculul** le gestionează; nu poți șterge un vehicul cât timp blocurile lui sunt în program, iar ultimele pedale, cutia de viteze sau frâna de mână nu pot fi eliminate din tabloul de bord cât timp se folosesc blocuri Simulator.

<Screenshot name="blocks-simulator" alt="Categoria Simulator cu un bloc conduce atașat la evenimentul pedalelor" width={900} />

O mașină tipică: atașează **conduce** la evenimentul pedalelor, conectează pedalele la `accelerație` și `frână`, iar în interior pornește motorul de tracțiune la `viteza` vehiculului:

```text
când pedalele PDL1 orice este mutat
    Vehicul 1  conduce  accelerație (pedale PDL1 accelerație)  frână (pedale PDL1 frână)
        pornește motorul la (viteza de Vehicul 1) % viteză  (Hub 1, portul A)
```

Nu este nevoie de o buclă `repeta mereu`: **conduce** rulează singur până când mașina se oprește.

## Blocuri {#blocks}

### `… conduce accelerație … frână … treaptă … din … frână de mână … blocată …` (Începător) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Inima simulatorului. Un bloc C care conduce vehiculul: la fiecare 0,1 s își citește intrările, mișcă mașina cu un pas și rulează blocurile din interior (pune acolo blocurile pentru motoare). Se încheie când mașina stă pe loc și nu este apăsat nimic; blocurile din interior rulează o ultimă dată, ca motorul să primească valoarea finală.

- `accelerație` și `frână`: cât de mult este apăsată fiecare pedală, de la 0 la 100.
- `treaptă`: treapta selectată: `-1` marșarier, `0` neutru, `1` și mai sus înainte. Cu o comandă de cutie automată în acest câmp, se folosește în schimb poziția selectorului ei (P, R, N, D), iar în D mașina își alege singură treapta.
- `din`: câte trepte are cutia de viteze (implicit 6).
- `frână de mână`: cât de tare este trasă frâna de mână, de la 0 la 100; `blocată`: dacă este blocată.
- O intrare contează doar când în ea este pus un bloc; un număr simplu într-un câmp gol este ignorat (cu excepția lui `din`).
- Un singur bloc **conduce** poate conduce un vehicul la un moment dat; un al doilea pentru același vehicul își sare blocurile interioare.

### `seta … tipul la …` (Începător) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Reglează motorul vehiculului pentru un anumit tip de vehicul: cât timp continuă să ruleze (inerția), viteza maximă la mersul înapoi și dacă are frână pneumatică.

- Tipuri: `autoturism`, `vehicul off-road`, `mașină sport`, `camion` (camionul are frână pneumatică)

### `seta … … la … %` (Avansat) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Modifică o setare a motorului.

- `inerția motorului`: cu cât este mai mare, cu atât mașina rulează mai mult fără accelerație (0 înseamnă fără inerție).
- `viteza de marșarier`: viteza maximă la mersul înapoi.

### `seta … … la …` (Avansat) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Activează sau dezactivează o opțiune a vehiculului.

- `marșarier cu frâna`: doar cu pedale, ținerea frânei apăsate pe loc face vehiculul să meargă înapoi.
- `treptele limitează viteza`: fiecare treaptă are propria viteză maximă.
- `frâna de mână ține`: o frână de mână blocată ține mașina pe loc.
- `frână pneumatică`: frâna pneumatică a camionului (generează evenimentul „eliberează aer”).
- `cutie automată`: intrarea `treaptă` este tratată ca un selector automat.

### `resetare …` (Avansat) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Oprește vehiculul pe loc și îi uită starea.

### `… de …` (Începător) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Returnează una dintre valorile vehiculului.

- `viteza`: de la −100 la 100 (negativă la mersul înapoi), gata pentru câmpul de viteză al unui motor.
- `turația motorului`: de la 0 la 100, pentru un turometru sau sunetul motorului.
- `treapta`: treapta curentă (`-1` marșarier, `0` neutru, apoi `1`, `2`…).

### `este … … ?` (Începător) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Returnează `true` când vehiculul este în starea selectată.

- Stări: `în mișcare`, `în frânare`, `pe frâna de mână`

### `când … …` (Începător) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Rulează scriptul când i se întâmplă ceva vehiculului.

- Evenimente: `pornește`, `se oprește`, `începe să frâneze`, `încetează să frâneze`, `frânează brusc`, `eliberează aer`, `schimbă treapta`
- Utilizare tipică: redarea unui sunet, de exemplu șuieratul frânei pneumatice la `eliberează aer` sau un scârțâit la `frânează brusc` (consultă [Sunete](/docs/Application/BlockBuilder/Blocks/Sounds)).
