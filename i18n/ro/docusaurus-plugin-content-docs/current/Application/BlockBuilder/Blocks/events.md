---
id: Events
title: Evenimente
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Evenimente {#events}

Categoria **Evenimente** conține blocurile care pornesc scripturi când se întâmplă ceva, plus blocurile care trimit mesaje între scripturi. Folosește **Adaugă mesaj** și **Șterge mesajul** din partea de sus a categoriei pentru a gestiona mesajele.

## Evenimente de bază {#core-events}

### `când începe programul` (Începător) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Rulează scriptul o singură dată, la pornirea programului.

- Utilizare tipică: setează valorile inițiale ale variabilelor, adu motoarele în starea inițială, afișează un mesaj „gata”.

### `când …` (Avansat) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Rulează scriptul când condiția din câmp trece de la fals la adevărat. Cât timp scriptul rulează, blocul așteaptă; se declanșează din nou doar după ce condiția a devenit falsă și apoi încă o dată adevărată.

- Utilizare tipică: reacția la o stare, de exemplu `când cronometrul > 5 și comutatorul este activat`.

### `când cronometrul > …` (Avansat) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Rulează scriptul când cronometrul programului depășește valoarea (în secunde).

- Utilizare tipică: acțiuni întârziate, faze temporizate. Resetează cronometrul cu **resetați cronometrul** (Senzori).

### `când primesc …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Rulează scriptul când este transmis mesajul selectat.

- Utilizare tipică: coordonarea mai multor scripturi.

### `transmite …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Trimite un mesaj tuturor scripturilor care încep cu **când primesc** pentru acel mesaj și continuă imediat.

- Utilizare tipică: spune altor scripturi să pornească fără a le aștepta.

### `transmite … și așteptați` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Trimite un mesaj și întrerupe acest script până când toate scripturile care l-au primit s-au terminat.

- Utilizare tipică: secvențe pas cu pas în care ordinea contează.

## Evenimente ale hubului {#hub-events}

Aceste blocuri apar când un hub din profil le acceptă. Nu există pentru huburile Mould King.

### `când … … buton …` (Începător) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Rulează când un buton al hubului este apăsat sau eliberat.

- Opțiuni de stare: `apăsat`, `eliberat`, `schimbat`
- Huburi: huburile LEGO Powered Up, WeDo 2.0 și Robot Inventor. Lista butoanelor depinde de hub.

### `când … este conectat / deconectat` (Începător) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Rulează când hubul se conectează sau se deconectează.

- Utilizare tipică: oprește modelul în siguranță când se pierde conexiunea și restabilește-i starea când revine.

### `când … % baterie modificată` (Începător) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Rulează când nivelul bateriei raportat de hub se schimbă.

- Huburi: cele care își raportează nivelul bateriei.
- Utilizare tipică: o avertizare de baterie descărcată, trecerea într-un mod de economisire a energiei.

### `când … datele accelerometrului au fost modificate` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Rulează când valorile accelerometrului hubului se schimbă.

- Huburi: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `când … înclinare … unghiul a fost modificat` (Începător) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Rulează când unghiul de înclinare al hubului se schimbă.

- Opțiuni de unghi: `orice`, `înclinare`, `rotire`, `derapaj`
- Huburi: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `derapaj` este disponibil doar pe Technic Hub și Robot Inventor.

### `când … orientarea a fost modificată` (Începător) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Rulează când orientarea hubului se schimbă, adică atunci când o altă față a hubului este îndreptată în sus.

- Huburi: aceleași ca pentru evenimentul de înclinare.

## Evenimente ale senzorilor {#sensor-events}

Aceste evenimente citesc un senzor conectat la un port al hubului. Huburi: City Hub, Technic Hub, BOOST Move Hub și hubul MINDSTORMS Robot Inventor (nu SBrick, BuWizz, WeDo 2.0 sau Mould King).

### Senzor Technic: `când culoarea este …` (Începător) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Rulează când senzorul de culoare Technic vede culoarea selectată.

### Senzor Technic: `când … mai aproape decât / mai departe decât / exact la …` (Începător) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Rulează când distanța măsurată de senzorul de distanță Technic îndeplinește condiția.

- Opțiuni de comparare: `mai aproape decât`, `mai departe decât`, `exact la`
- Unități: `mm`, `cm`, `inci`, `%`

### Senzor BOOST: `când … mai aproape decât / mai departe decât / exact la …` (Începător) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Rulează când distanța măsurată de senzorul de culoare și distanță BOOST îndeplinește condiția.

- Opțiuni de comparare: `mai aproape decât`, `mai departe decât`, `exact la`
- Unități: `%`, `cm`, `inci`

### Senzor BOOST: `când culoarea este …` (Începător) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Rulează când senzorul de culoare și distanță BOOST vede culoarea selectată.

## Evenimente Robot Inventor {#robot-inventor-events}

Aceste evenimente vin din aplicația Robot Inventor și funcționează doar cu [huburile MINDSTORMS Robot Inventor și SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ele poartă pictograma hubului. Valorile corespunzătoare se află pe pagina [Senzori](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `când hubul este …` (Începător) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Rulează o dată de fiecare dată când hubul este `atins`, `atins de două ori`, `scuturat` (implicit) sau este `în cădere`.

### `când … este sus` (Începător) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Rulează când partea selectată a hubului ajunge cu fața în sus: `față` (matricea de lumini, implicit), `partea de sus`, `partea dreaptă`, `spate`, `partea de jos` sau `partea stângă`.

### `când hubul este înclinat …` (Avansat) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Rulează când hubul este înclinat `în sus`, `în jos`, `la stânga`, `la dreapta` sau în `orice` direcție (implicit), cu aproximativ 12° sau mai mult.

### `când … apăsat / apăsat tare / eliberat` (Începător) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Rulează când senzorul de forță de pe portul selectat este apăsat, apăsat tare (cu mai mult de 5 newtoni) sau eliberat.

### `când hubul primește semnalul …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Rulează când acest hub primește de la alt hub semnalul radio cu acest nume. Citește-i valoarea cu [semnal primit … valoare](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
