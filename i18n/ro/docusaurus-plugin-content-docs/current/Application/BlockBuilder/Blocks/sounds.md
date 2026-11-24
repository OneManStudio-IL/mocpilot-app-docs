---
id: Sounds
title: Sunete
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sunete {#sounds}

Blocurile de sunet redau sunete pe telefonul, tableta sau computerul pe care rulează MOCPilot: bipuri, semnale, claxoane, efecte și propriile înregistrări. Hubul Robot Inventor are și propriul difuzor, vezi [Difuzorul hubului Robot Inventor](#robot-inventor-sounds).

## Ce sunete poți reda {#which-sounds-you-can-play}

Lista de sunete din blocuri are două părți:

- **Biblioteca încorporată**: bipuri scurte, ciripituri, un avertizor de mers înapoi, o sirenă, o alarmă, semnale de reușită și de eroare, claxoane de mașină, camion și tren, o sonerie de bicicletă, o semnalizare și câteva efecte (clic, pocnet, laser, monedă, pornire, oprire).
- **Sunetele tale**: apasă **Adaugă un sunet** din partea de sus a categoriei și alege un fișier audio. Aplicația îl convertește și îl stochează în profil, așa că ajunge împreună cu profilul pe celelalte dispozitive și în catalog. Un profil poate conține până la 30 de sunete; un fișier mai lung este tăiat la 15 secunde. Folosește **Redenumește sunetul** și **Șterge sunetul** pentru a le gestiona; blocurile care redau un sunet șters rămân mute.

<Screenshot name="blocks-add-sound" alt="Dialogul Adaugă un sunet în Blocuri logice" width={900} />

## Blocuri {#blocks}

### `sunetul … redă / redă până la final / repetă` (Începător) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Redă sunetul selectat.

- `redă`: pornește sunetul și trece imediat la blocul următor. Sunetele gândite să se repete (cum sunt sirena sau avertizorul de mers înapoi) se repetă în continuare.
- `redă până la final`: redă sunetul o dată și așteaptă până se termină.
- `repetă`: redă sunetul în buclă până când îl oprești.
- Pornirea unui sunet care deja se redă îl repornește.
- În câmp poți pune un raportor **sunet** (sau o variabilă care conține unul) în loc să alegi din listă.

### `bip … Hz timp de … s` (Începător) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Redă un ton cu înălțimea și durata date și așteaptă până se termină.

- Înălțime: de la 50 la 8000 Hz (implicit 440).
- Durată: de la 0,02 la 10 secunde (implicit 0,2).

### `oprește sunetul …` (Începător) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Oprește sunetul selectat.

### `oprește toate sunetele` (Începător) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Oprește toate sunetele care se redau.

### `setează volumul sunetului la … %` (Avansat) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Setează volumul tuturor sunetelor programului, de la 0 la 100 %. Când programul se oprește, volumul revine la 100 %.

### `volumul sunetului` (Avansat) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returnează volumul curent al sunetului, de la 0 la 100.

### `sunet …` (Avansat) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returnează sunetul selectat ca valoare.

- Utilizare tipică: păstrează un sunet într-o variabilă sau într-o listă ori transmite-l unuia dintre [Blocurile mele](/docs/Application/BlockBuilder/Blocks/MyBlocks), apoi redă-l cu **sunetul … redă**.

## Difuzorul hubului Robot Inventor {#robot-inventor-sounds}

Aceste blocuri vin din aplicația Robot Inventor și redau sunete pe difuzorul [hubului MINDSTORMS Robot Inventor sau SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), nu pe dispozitivul tău. Ele poartă pictograma hubului. Notele sunt numere de note MIDI: 60 este do central, iar fiecare pas este un semiton (de la 0 la 132).

### `redă bip … pentru … secunde` (Începător) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Redă un bip cu nota dată (implicit 60) pentru timpul dat (implicit 0,2 s) și așteaptă până se termină.

### `pornește bipul …` (Avansat) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Pornește un bip cu nota dată și merge imediat mai departe. Bipul sună până la **oprește toate sunetele** sau un alt sunet al hubului.

### `redă sunetul … până la final` (Începător) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Redă unul dintre sunetele de robot stocate pe hub (Affirmative, Laser, Hello, Tadaa și încă 80) și așteaptă până se termină. Sunetele vin cu software-ul hubului; dacă hubul tace, vezi [Dacă hubul nu pornește](/docs/Application/Hubs/RobotInventorHub#restore).

### `pornește sunetul …` (Începător) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Pornește un sunet de robot al hubului și merge imediat mai departe.

### `oprește toate sunetele` (hub) (Începător) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Oprește sunetul și bipul pe hub. Blocul cu același nume, fără pictograma hubului, oprește sunetele dispozitivului tău.

### `setează volumul hubului la … %` (Avansat) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Setează volumul bipurilor, sunetelor și notelor hubului, de la 0 la 100 % (100 % până îl schimbi).

### `modifică volumul hubului cu …` (Avansat) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Face hubul mai tare sau mai încet cu valoarea dată (implicit −10); volumul rămâne între 0 și 100 %.

### `volumul hubului` (Avansat) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Returnează volumul hubului, de la 0 la 100.

### `setează … efectul la …` (Avansat) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Setează un efect sonor pentru sunetele de robot care pornesc după el.

- `înălțime`: de la −360 la 360; valorile pozitive fac sunetele mai înalte și mai rapide, cele negative mai joase și mai lente. 0 este normal.
- `balans stânga/dreapta`: de la −100 la 100. Hubul are un singur difuzor, așa că nu vei auzi diferența; valoarea este păstrată pentru programele făcute în aplicația Robot Inventor.

### `schimbă … efectul cu …` (Avansat) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Schimbă efectul de înălțime sau de balans cu valoarea dată (implicit 10), în aceleași limite.

### `elimină efectele sonore` (Avansat) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Readuce înălțimea și balansul la 0.

### Muzică {#robot-inventor-music}

Blocurile de muzică măsoară timpul în **bătăi**: la tempoul de 60 de bătăi pe minut (implicit), o bătaie durează o secundă. Cât timp programul rulează în MOCPilot, notele sună ca bipuri ale hubului cu înălțimea și durata potrivite, iar tobele ca bipuri scurte; instrumentul nu schimbă încă sunetul.

#### `cântă nota … pentru … bătăi` (Avansat) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Cântă o notă (implicit 60) pentru numărul dat de bătăi (implicit 0,25) și așteaptă.

#### `cântă la tobă … pentru … bătăi` (Avansat) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Cântă la una dintre cele 18 tobe (tobă mică, tobă mare, hi-hat, talangă și altele) și așteaptă numărul dat de bătăi.

#### `pauză pentru … bătăi` (Avansat) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Așteaptă numărul dat de bătăi fără să cânte nimic.

#### `setează instrumentul la …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Alege unul dintre cele 21 de instrumente (pian, orgă, chitară, flaut, cor, sintetizator și altele) pentru notele care urmează.

#### `setează tempoul la …` (Avansat) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Setează tempoul în bătăi pe minut, de la 20 la 500 (implicit 60).

#### `modifică tempoul cu …` (Avansat) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Face muzica mai rapidă sau mai lentă cu numărul dat de bătăi pe minut (implicit 20).

#### `tempo` (Avansat) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Returnează tempoul curent în bătăi pe minut.
