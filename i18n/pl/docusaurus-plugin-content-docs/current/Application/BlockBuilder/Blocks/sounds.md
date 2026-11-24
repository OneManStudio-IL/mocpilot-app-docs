---
id: Sounds
title: Dźwięki
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Dźwięki

Bloki dźwięku odtwarzają dźwięki na telefonie, tablecie lub komputerze, na którym działa MOCPilot: piknięcia, sygnały, klaksony, efekty i Twoje własne nagrania. Hub Robot Inventor ma też własny głośnik, zobacz [Głośnik huba Robot Inventor](#robot-inventor-sounds).

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

## Głośnik huba Robot Inventor {#robot-inventor-sounds}

Te bloki pochodzą z aplikacji Robot Inventor i odtwarzają dźwięki na głośniku [huba MINDSTORMS Robot Inventor lub SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), a nie na Twoim urządzeniu. Mają ikonę huba. Nuty to numery nut MIDI: 60 to środkowe C, a każdy krok to półton (od 0 do 132).

### `zagraj sygnał … przez … sekundy` (Początkujący) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Odtwarza sygnał o podanej nucie (domyślnie 60) przez podany czas (domyślnie 0,2 s) i czeka, aż się skończy.

### `uruchom sygnał …` (Zaawansowany) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Uruchamia sygnał o podanej nucie i od razu przechodzi dalej. Sygnał brzmi do bloku **zatrzymaj wszystkie dźwięki** albo do innego dźwięku huba.

### `zagraj dźwięk … do końca` (Początkujący) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Odtwarza jeden z dźwięków robota zapisanych w hubie (Affirmative, Laser, Hello, Tadaa i 80 innych) i czeka, aż się skończy. Dźwięki są częścią oprogramowania huba; jeśli hub milczy, zobacz [Jeśli hub się nie uruchamia](/docs/Application/Hubs/RobotInventorHub#restore).

### `uruchom dźwięk …` (Początkujący) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Uruchamia dźwięk robota w hubie i od razu przechodzi dalej.

### `zatrzymaj wszystkie dźwięki` (hub) (Początkujący) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Zatrzymuje dźwięk i sygnał na hubie. Blok o tej samej nazwie bez ikony huba zatrzymuje dźwięki Twojego urządzenia.

### `ustaw głośność huba na … %` (Zaawansowany) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Ustawia głośność sygnałów, dźwięków i nut huba, od 0 do 100 % (100 %, dopóki jej nie zmienisz).

### `zmień głośność huba o …` (Zaawansowany) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Robi hub głośniejszym lub cichszym o podaną wartość (domyślnie −10); głośność pozostaje w zakresie od 0 do 100 %.

### `głośność huba` (Zaawansowany) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Zwraca głośność huba, od 0 do 100.

### `ustawić … efekt na …` (Zaawansowany) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Ustawia efekt dźwiękowy dla dźwięków robota uruchamianych po nim.

- `wysokość dźwięku`: od −360 do 360; wartości dodatnie sprawiają, że dźwięki są wyższe i szybsze, ujemne – niższe i wolniejsze. 0 to brzmienie normalne.
- `balans lewo/prawo`: od −100 do 100. Hub ma jeden głośnik, więc tego nie usłyszysz; wartość jest zachowywana dla programów utworzonych w aplikacji Robot Inventor.

### `zmienić … efekt o …` (Zaawansowany) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Zmienia efekt wysokości dźwięku lub balansu o podaną wartość (domyślnie 10), w tych samych granicach.

### `wyczyść efekty dźwiękowe` (Zaawansowany) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Przywraca wysokość dźwięku i balans do 0.

### Muzyka {#robot-inventor-music}

Bloki muzyczne liczą czas w uderzeniach (miarach), które bloki nazywają **taktami** (`taktów`): przy tempie 60 uderzeń na minutę (domyślnie) jedno uderzenie trwa sekundę. Gdy program działa w MOCPilot, nuty brzmią jako sygnały huba o właściwej wysokości i długości, a bębny jako krótkie sygnały; instrument na razie nie zmienia brzmienia.

#### `zagraj nutę … przez … taktów` (Zaawansowany) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Gra nutę (domyślnie 60) przez podaną liczbę uderzeń (domyślnie 0,25) i czeka.

#### `zagraj na bębnie … przez … taktów` (Zaawansowany) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Gra na jednym z 18 bębnów (werbel, bęben basowy, hi-hat, krowi dzwonek i inne) i czeka przez podaną liczbę uderzeń.

#### `pauza przez … taktów` (Zaawansowany) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Czeka przez podaną liczbę uderzeń, nic nie grając.

#### `ustaw instrument na …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Wybiera jeden z 21 instrumentów (fortepian, organy, gitara, flet, chór, syntezator i inne) dla kolejnych nut.

#### `ustaw tempo na …` (Zaawansowany) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Ustawia tempo w uderzeniach na minutę, od 20 do 500 (domyślnie 60).

#### `zmień tempo o …` (Zaawansowany) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Przyspiesza lub zwalnia muzykę o podaną liczbę uderzeń na minutę (domyślnie 20).

#### `tempo` (Zaawansowany) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Zwraca bieżące tempo w uderzeniach na minutę.
