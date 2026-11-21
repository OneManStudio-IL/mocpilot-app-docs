---
id: Sounds
title: Töne
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Töne {#sounds}

Tonblöcke spielen Töne auf dem Telefon, Tablet oder Computer ab, auf dem MOCPilot läuft: Pieptöne, Signale, Hupen, Effekte und Ihre eigenen Aufnahmen.

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
