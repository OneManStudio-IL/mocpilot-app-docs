---
id: Control
title: Steuerung
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Steuerung {#control}

Steuerungsblöcke legen fest, wie ein Skript abläuft: Warten, Schleifen, Verzweigungen und Stoppen. Wenn das Profil Hubs enthält, finden Sie in dieser Kategorie auch Blöcke, die Hubs verbinden und ihre Einstellungen ändern.

## Warteblöcke {#wait-blocks}

### `warten … Sekunden` (Anfänger) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Hält das Skript für die angegebene Anzahl Sekunden an.

### `warten bis …` (Fortgeschritten) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Hält das Skript an, bis die Bedingung wahr wird.

## Schleifen {#loops}

### `wiederholen …` (Fortgeschritten) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Führt die Blöcke darin so oft aus wie angegeben (standardmäßig 10-mal).

### `wiederholen, solange …` (Fortgeschritten) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Führt die Blöcke darin immer wieder aus, bis die Bedingung wahr wird.

### `immer wiederholen` (Fortgeschritten) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Führt die Blöcke darin immer wieder aus, bis das Skript oder das Programm stoppt. Darunter lässt sich nichts anhängen.

## Verzweigungen {#branches}

### `wenn … dann` (Anfänger) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Führt die Blöcke darin nur aus, wenn die Bedingung wahr ist.

### `wenn … dann … sonst` (Fortgeschritten) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Führt den ersten Zweig aus, wenn die Bedingung wahr ist, andernfalls den zweiten.

### `mach das … und das` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Führt die erste Blockgruppe aus, dann die zweite, und erst danach geht es mit den Blöcken darunter weiter.

## Stoppen {#stopping}

### `anhalten …` (Anfänger) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stoppt Skripte; was genau gestoppt wird, hängt von der Option ab.

- `alle`: stoppt alle Skripte.
- `dieser Stapel`: stoppt nur dieses Skript.
- `und Programm beenden`: stoppt das Programm.

### `andere Stapel stoppen` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stoppt alle anderen laufenden Skripte; dieses läuft weiter.

## Hub-Blöcke {#hub-blocks}

### `verbinden / trennen …` (Anfänger) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Verbindet den ausgewählten Hub mit dem Programm oder trennt ihn.

- Optionen: `verbinden`, `trennen`
- Hubs: alle.

### `… verbunden` (Anfänger) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Liefert `true`, wenn der ausgewählte Hub verbunden ist.

- Typ: boolescher Block
- Hubs: alle.

### `setzen … Konfiguration auf …` (Fortgeschritten) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Schaltet den Hub auf eine seiner Konfigurationen um.

- Hubs: Technic Move Hub (derzeit der einzige Hub mit Konfigurationen).
- Typische Verwendung: den Hub auf eine andere Konfiguration umschalten, bevor die nächsten Blöcke laufen.

### `holen … Konfiguration als …` (Fortgeschritten) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Liefert die aktuelle Konfiguration des Hubs.

- Typ: Werteblock
- Ausgabe: `Text` oder `index`
- Hubs: Technic Move Hub.
- Liefert `NaN`, wenn der Hub nicht verbunden ist oder keine Konfiguration hat.

### `setzen … Stromversorgungsmodus auf …` (Anfänger) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Stellt den Leistungsmodus eines BuWizz 2 ein.

- Modi: `Langsam`, `Normal`, `Schnell`, `Ludicrous`
- Hubs: BuWizz 2.

### `holen … Leistungsmodus als …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Liefert den aktuellen Leistungsmodus eines BuWizz 2.

- Ausgabe: `Text` oder `index`
- Hubs: BuWizz 2.

### `setzen … Steuerkanal zu …` (Fortgeschritten) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Stellt den Steuerkanal eines Mould-King-Hubs ein.

- Kanäle: `A`, `B`, `C`
- Hubs: Mould King 4.0 und 6.0.

### `holen … Steuerkanal als …` (Fortgeschritten) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Liefert den aktuellen Steuerkanal eines Mould-King-Hubs.

- Ausgabe: `Text` oder `index`
- Hubs: Mould King 4.0 und 6.0.
