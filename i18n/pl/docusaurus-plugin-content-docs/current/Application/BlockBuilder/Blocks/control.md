---
id: Control
title: Kontrola
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrola

Bloki kontroli decydują o przebiegu skryptu: oczekiwanie, pętle, rozgałęzienia i zatrzymywanie. Gdy profil ma huby, w tej kategorii są też bloki, które łączą huby i zmieniają ich ustawienia.

## Bloki oczekiwania {#wait-blocks}

### `czekać … sekundy` (Początkujący) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Wstrzymuje skrypt na podaną liczbę sekund.

### `czekać aż …` (Zaawansowany) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Wstrzymuje skrypt, dopóki warunek nie stanie się prawdziwy.

## Pętle {#loops}

### `powtórzyć …` (Zaawansowany) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Wykonuje bloki w swoim wnętrzu podaną liczbę razy (domyślnie 10).

### `powtarzać, dopóki …` (Zaawansowany) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Wykonuje bloki w swoim wnętrzu raz za razem, dopóki warunek nie stanie się prawdziwy.

### `powtarzać zawsze` (Zaawansowany) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Wykonuje bloki w swoim wnętrzu w kółko, aż skrypt lub program się zatrzyma. Pod nim nie można niczego dołączyć.

## Rozgałęzienia {#branches}

### `jeśli … wtedy` (Początkujący) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Wykonuje bloki w swoim wnętrzu tylko wtedy, gdy warunek jest prawdziwy.

### `jeśli … wtedy … inne` (Zaawansowany) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Wykonuje pierwszą gałąź, gdy warunek jest prawdziwy, a w przeciwnym razie drugą.

### `zrób to … i to` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Wykonuje pierwszą grupę bloków, potem drugą i dopiero wtedy przechodzi do bloków pod nim.

## Zatrzymywanie {#stopping}

### `zatrzymać …` (Początkujący) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Zatrzymuje skrypty; co dokładnie zatrzymuje, zależy od opcji.

- `wszystkie`: zatrzymuje wszystkie skrypty.
- `ten stos`: zatrzymuje tylko ten skrypt.
- `i zakończ program`: zatrzymuje program.

### `zatrzymać inne stosy` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Zatrzymuje wszystkie inne działające skrypty; ten działa dalej.

## Bloki hubów {#hub-blocks}

### `połącz / rozłącz …` (Początkujący) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Łączy wybrany hub z programem lub go rozłącza.

- Opcje: `połącz`, `rozłącz`
- Huby: wszystkie.

### `… połączony` (Początkujący) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Zwraca `true`, gdy wybrany hub jest połączony.

- Typ: blok logiczny
- Huby: wszystkie.

### `ustawić … konfigurację na …` (Zaawansowany) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Przełącza hub na jedną z jego konfiguracji.

- Huby: Technic Move Hub (obecnie jedyny hub z konfiguracjami).
- Typowe zastosowanie: przełączenie huba na inną konfigurację przed wykonaniem kolejnych bloków.

### `pobierz … konfiguracja jako …` (Zaawansowany) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Zwraca bieżącą konfigurację huba.

- Typ: blok raportujący
- Wynik: `tekst` lub `indeks`
- Huby: Technic Move Hub.
- Zwraca `NaN`, gdy hub nie jest połączony lub nie ma konfiguracji.

### `ustawić … tryb zasilania na …` (Początkujący) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Ustawia tryb mocy BuWizz 2.

- Tryby: `Wolno`, `Normalny`, `Szybko`, `Ludicrous`
- Huby: BuWizz 2.

### `pobierz … tryb zasilania jako …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Zwraca bieżący tryb mocy BuWizz 2.

- Wynik: `tekst` lub `indeks`
- Huby: BuWizz 2.

### `ustawić … kanał sterowania do …` (Zaawansowany) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Ustawia kanał sterowania huba Mould King.

- Kanały: `A`, `B`, `C`
- Huby: Mould King 4.0 i 6.0.

### `pobierz … kanał sterowania jako …` (Zaawansowany) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Zwraca bieżący kanał sterowania huba Mould King.

- Wynik: `tekst` lub `indeks`
- Huby: Mould King 4.0 i 6.0.
