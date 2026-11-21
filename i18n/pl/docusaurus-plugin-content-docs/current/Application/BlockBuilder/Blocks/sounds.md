---
id: Sounds
title: Dźwięki
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Dźwięki

Bloki dźwięku odtwarzają dźwięki na telefonie, tablecie lub komputerze, na którym działa MOCPilot: piknięcia, sygnały, klaksony, efekty i Twoje własne nagrania.

## Jakie dźwięki można odtwarzać {#which-sounds-you-can-play}

Lista dźwięków w blokach ma dwie części:

- **Wbudowana biblioteka**: krótkie piknięcia, ćwierknięcia, sygnał cofania, syrena, alarm, sygnały sukcesu i błędu, klaksony samochodu, ciężarówki i pociągu, dzwonek rowerowy, kierunkowskaz i kilka efektów (kliknięcie, pyknięcie, laser, moneta, włączanie zasilania, wyłączanie zasilania).
- **Własne dźwięki**: naciśnij **Dodaj dźwięk** na górze kategorii i wybierz plik audio. Aplikacja go konwertuje i zapisuje w profilu, więc dźwięk trafia razem z profilem na Twoje inne urządzenia i do katalogu. Profil może zawierać do 30 dźwięków; dłuższy plik jest przycinany do 15 sekund. Do zarządzania nimi służą **Zmień nazwę dźwięku** i **Usuń dźwięk**; bloki, które odtwarzały usunięty dźwięk, ucichną.

<Screenshot name="blocks-add-sound" alt="Okno „Dodaj dźwięk” w Blokach logicznych" width={900} />

## Bloki {#blocks}

### `dźwięk … odtwórz / odtwórz do końca / powtarzaj` (Początkujący) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Odtwarza wybrany dźwięk.

- `odtwórz`: uruchamia dźwięk i od razu przechodzi do następnego bloku. Dźwięki przeznaczone do zapętlania (jak syrena czy sygnał cofania) powtarzają się dalej.
- `odtwórz do końca`: odtwarza dźwięk raz i czeka, aż się skończy.
- `powtarzaj`: odtwarza dźwięk w pętli, dopóki go nie zatrzymasz.
- Uruchomienie dźwięku, który już gra, odtwarza go od początku.
- Zamiast wybierać z listy, możesz wstawić do pola blok raportujący **dźwięk** (lub zmienną, która go przechowuje).

### `sygnał … Hz przez … s` (Początkujący) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Odtwarza ton o podanej wysokości i długości i czeka, aż się skończy.

- Wysokość: od 50 do 8000 Hz (domyślnie 440).
- Długość: od 0,02 do 10 sekund (domyślnie 0,2).

### `zatrzymaj dźwięk …` (Początkujący) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Zatrzymuje wybrany dźwięk.

### `zatrzymaj wszystkie dźwięki` (Początkujący) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Zatrzymuje wszystkie odtwarzane dźwięki.

### `ustaw głośność dźwięku na … %` (Zaawansowany) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Ustawia głośność wszystkich dźwięków programu, od 0 do 100 %. Po zatrzymaniu programu głośność wraca do 100 %.

### `głośność dźwięku` (Zaawansowany) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Zwraca bieżącą głośność dźwięku, od 0 do 100.

### `dźwięk …` (Zaawansowany) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Zwraca wybrany dźwięk jako wartość.

- Typowe zastosowanie: przechowywanie dźwięku w zmiennej lub liście albo przekazanie go do jednego z [Moich bloków](/docs/Application/BlockBuilder/Blocks/MyBlocks), a potem odtworzenie go blokiem **dźwięk … odtwórz**.
