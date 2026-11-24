---
id: Sounds
title: Töne
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Töne {#sounds}

Tonblöcke spielen Töne auf dem Telefon, Tablet oder Computer ab, auf dem MOCPilot läuft: Pieptöne, Signale, Hupen, Effekte und Ihre eigenen Aufnahmen. Der Robot-Inventor-Hub hat außerdem einen eigenen Lautsprecher, siehe [Lautsprecher des Robot-Inventor-Hubs](#robot-inventor-sounds).

## Welche Töne Sie abspielen können {#which-sounds-you-can-play}

Die Tonliste in den Blöcken besteht aus zwei Teilen:

- **Die eingebaute Bibliothek**: kurze Pieptöne, Zwitschern, ein Rückfahrwarner, eine Sirene, ein Alarm, Erfolgs- und Fehlersignale, Auto-, Lkw- und Zughupen, eine Fahrradklingel, ein Blinker und einige Effekte (Klick, Plopp, Laser, Münze, Power-up, Power-down).
- **Ihre eigenen Töne**: Drücken Sie oben in der Kategorie auf **Ton hinzufügen** und wählen Sie eine Audiodatei. Die App wandelt sie um und speichert sie im Profil, sodass sie mit dem Profil auf Ihre anderen Geräte und in den Katalog gelangt. Ein Profil kann bis zu 30 Töne enthalten; eine längere Datei wird auf 15 Sekunden gekürzt. Mit **Ton umbenennen** und **Ton löschen** verwalten Sie sie; Blöcke, die einen gelöschten Ton abgespielt haben, bleiben stumm.

<Screenshot name="blocks-add-sound" alt="Der Dialog „Ton hinzufügen“ in den Logikblöcken" width={900} />

## Blöcke {#blocks}

### `Ton … spiele / spiele bis zum Ende / wiederholen` (Anfänger) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Spielt den ausgewählten Ton ab.

- `spiele`: startet den Ton und geht sofort zum nächsten Block über. Töne, die als Schleife gedacht sind (etwa die Sirene oder der Rückfahrwarner), wiederholen sich ständig.
- `spiele bis zum Ende`: spielt den Ton einmal ab und wartet, bis er zu Ende ist.
- `wiederholen`: spielt den Ton in einer Schleife, bis Sie ihn stoppen.
- Wird ein Ton gestartet, der bereits läuft, beginnt er von vorn.
- Statt aus der Liste zu wählen, können Sie einen **Ton**-Werteblock (oder eine Variable, die einen enthält) in das Eingabefeld setzen.

### `piepe … Hz für … s` (Anfänger) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Spielt einen Ton der angegebenen Höhe und Länge ab und wartet, bis er zu Ende ist.

- Tonhöhe: von 50 bis 8000 Hz (standardmäßig 440).
- Länge: von 0,02 bis 10 Sekunden (standardmäßig 0,2).

### `stoppe Ton …` (Anfänger) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stoppt den ausgewählten Ton.

### `stoppe alle Töne` (Anfänger) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stoppt alle Töne, die gerade laufen.

### `setze Lautstärke auf … %` (Fortgeschritten) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Stellt die Lautstärke aller Töne des Programms ein, von 0 bis 100 %. Wenn das Programm stoppt, springt die Lautstärke zurück auf 100 %.

### `Lautstärke` (Fortgeschritten) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Liefert die aktuelle Lautstärke, von 0 bis 100.

### `Ton …` (Fortgeschritten) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Liefert den ausgewählten Ton als Wert.

- Typische Verwendung: einen Ton in einer Variablen oder Liste speichern oder an einen Ihrer [Meine Blöcke](/docs/Application/BlockBuilder/Blocks/MyBlocks) übergeben und ihn dann mit **Ton … spiele** abspielen.

## Lautsprecher des Robot-Inventor-Hubs {#robot-inventor-sounds}

Diese Blöcke stammen aus der Robot-Inventor-App und spielen Töne über den Lautsprecher des [Hubs von MINDSTORMS Robot Inventor oder SPIKE Prime](/docs/Application/Hubs/RobotInventorHub) ab, nicht auf Ihrem Gerät. Sie tragen das Hub-Symbol. Noten sind MIDI-Notennummern: 60 ist das mittlere C, jeder Schritt ist ein Halbton (0 bis 132).

### `Piepton spielen … für … sekunden` (Anfänger) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Spielt einen Piepton der angegebenen Note (standardmäßig 60) für die angegebene Zeit (standardmäßig 0,2 s) und wartet, bis er endet.

### `Piepton starten …` (Fortgeschritten) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Startet einen Piepton der angegebenen Note und geht sofort weiter. Der Piepton klingt bis **alle Klänge stoppen** oder bis zu einem anderen Hub-Klang.

### `Klang abspielen … bis zum Ende` (Anfänger) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Spielt einen der auf dem Hub gespeicherten Roboterklänge ab (Affirmative, Laser, Hello, Tadaa und 80 weitere) und wartet, bis er endet. Die Klänge gehören zur Hub-Software; bleibt der Hub stumm, siehe [Wenn der Hub nicht startet](/docs/Application/Hubs/RobotInventorHub#restore).

### `Klang starten …` (Anfänger) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Startet einen Roboterklang des Hubs und geht sofort weiter.

### `alle Klänge stoppen` (Hub) (Anfänger) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stoppt den Klang und den Piepton auf dem Hub. Der Block **stoppe alle Töne** ohne Hub-Symbol stoppt die Töne Ihres Geräts.

### `Hub-Lautstärke einstellen auf … %` (Fortgeschritten) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Stellt die Lautstärke der Pieptöne, Klänge und Noten des Hubs ein, von 0 bis 100 % (100 %, bis Sie sie ändern).

### `Hub-Lautstärke ändern um …` (Fortgeschritten) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Macht den Hub um den angegebenen Betrag lauter oder leiser (standardmäßig −10); die Lautstärke bleibt zwischen 0 und 100 %.

### `Hub-Lautstärke` (Fortgeschritten) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Liefert die Hub-Lautstärke, von 0 bis 100.

### `setzen … Effekt auf …` (Fortgeschritten) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Legt einen Klangeffekt für die Roboterklänge fest, die danach starten.

- `Tonhöhe`: von −360 bis 360; positive Werte machen die Klänge höher und schneller, negative tiefer und langsamer. 0 ist normal.
- `Panorama links/rechts`: von −100 bis 100. Der Hub hat nur einen Lautsprecher, daher hören Sie es nicht; der Wert bleibt für Programme aus der Robot-Inventor-App erhalten.

### `ändern … Effekt um …` (Fortgeschritten) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Ändert den Tonhöhen- oder Panorama-Effekt um den angegebenen Betrag (standardmäßig 10), in denselben Grenzen.

### `Klangeffekte aufheben` (Fortgeschritten) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Setzt Tonhöhe und Panorama auf 0 zurück.

### Musik {#robot-inventor-music}

Die Musikblöcke zählen die Zeit in **Schlägen**: Beim Tempo von 60 Schlägen pro Minute (Standard) dauert ein Schlag eine Sekunde. Während das Programm in MOCPilot läuft, klingen Noten als Hub-Pieptöne in der richtigen Höhe und Länge und Trommeln als kurze Pieptöne; das Instrument ändert den Klang noch nicht.

#### `Note spielen … für … Schläge` (Fortgeschritten) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Spielt eine Note (standardmäßig 60) für die angegebene Anzahl Schläge (standardmäßig 0,25) und wartet.

#### `Trommel spielen … für … Schläge` (Fortgeschritten) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Spielt eine von 18 Trommeln (Snare-Trommel, Bass-Trommel, Hi-Hat, Kuhglocke und weitere) und wartet die angegebene Anzahl Schläge.

#### `pausieren für … Schläge` (Fortgeschritten) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Wartet die angegebene Anzahl Schläge, ohne etwas zu spielen.

#### `Instrument einstellen auf …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Wählt eines von 21 Instrumenten (Klavier, Orgel, Gitarre, Flöte, Chor, Synthesizer und weitere) für die folgenden Noten.

#### `Tempo einstellen auf …` (Fortgeschritten) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Stellt das Tempo in Schlägen pro Minute ein, von 20 bis 500 (standardmäßig 60).

#### `Tempo ändern um …` (Fortgeschritten) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Macht die Musik um die angegebene Anzahl Schläge pro Minute schneller oder langsamer (standardmäßig 20).

#### `Tempo` (Fortgeschritten) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Liefert das aktuelle Tempo in Schlägen pro Minute.
