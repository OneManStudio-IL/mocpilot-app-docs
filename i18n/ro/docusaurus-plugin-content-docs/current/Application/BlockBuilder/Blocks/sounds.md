---
id: Sounds
title: Sunete
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sunete {#sounds}

Blocurile de sunet redau sunete pe telefonul, tableta sau computerul pe care rulează MOCPilot: bipuri, semnale, claxoane, efecte și propriile înregistrări.

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
