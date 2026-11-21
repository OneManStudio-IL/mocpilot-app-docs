---
id: Sounds
title: Zvuky
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Zvuky {#sounds}

Zvukové bloky přehrávají zvuky na telefonu, tabletu nebo počítači, na kterém běží MOCPilot: pípnutí, signály, klaksony, efekty a vaše vlastní nahrávky.

## Jaké zvuky můžete přehrát {#which-sounds-you-can-play}

Seznam zvuků v blocích má dvě části:

- **Vestavěná knihovna**: krátká pípnutí, cvrlikání, couvací pípání, siréna, alarm, signály úspěchu a chyby, klaksony auta, nákladního auta a vlaku, zvonek na kolo, blinkr a několik efektů (cvaknutí, prasknutí, laser, mince, nabití, vybití).
- **Vlastní zvuky**: stiskněte **Přidat zvuk** v horní části kategorie a vyberte zvukový soubor. Aplikace ho převede a uloží do profilu, takže putuje s profilem na vaše další zařízení i do katalogu. Profil může obsahovat až 30 zvuků; delší soubor se zkrátí na 15 sekund. Ke správě slouží **Přejmenovat zvuk** a **Smazat zvuk**; bloky, které přehrávaly smazaný zvuk, ztichnou.

<Screenshot name="blocks-add-sound" alt="Dialog Přidat zvuk v Logických blocích" width={900} />

## Bloky {#blocks}

### `zvuk … přehrát / přehrát do konce / opakovat` (Začátečník) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Přehraje vybraný zvuk.

- `přehrát`: spustí zvuk a hned pokračuje dalším blokem. Zvuky určené ke smyčce (například siréna nebo couvací pípání) se stále opakují.
- `přehrát do konce`: přehraje zvuk jednou a počká, až skončí.
- `opakovat`: přehrává zvuk ve smyčce, dokud ho nezastavíte.
- Spuštění zvuku, který už hraje, ho začne přehrávat znovu od začátku.
- Místo výběru ze seznamu můžete do slotu vložit hodnotový blok **zvuk** (nebo proměnnou, která zvuk obsahuje).

### `pípnout … Hz po dobu … s` (Začátečník) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Přehraje tón zadané výšky a délky a počká, až skončí.

- Výška: od 50 do 8000 Hz (výchozí 440).
- Délka: od 0,02 do 10 sekund (výchozí 0,2).

### `zastavit zvuk …` (Začátečník) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Zastaví vybraný zvuk.

### `zastavit všechny zvuky` (Začátečník) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Zastaví všechny přehrávané zvuky.

### `nastavit hlasitost zvuku na … %` (Pokročilý) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Nastaví hlasitost všech zvuků programu, od 0 do 100 %. Když se program zastaví, hlasitost se vrátí na 100 %.

### `hlasitost zvuku` (Pokročilý) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Vrací aktuální hlasitost zvuku, od 0 do 100.

### `zvuk …` (Pokročilý) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Vrací vybraný zvuk jako hodnotu.

- Typické použití: uložit zvuk do proměnné nebo seznamu nebo ho předat některému z [Mých bloků](/docs/Application/BlockBuilder/Blocks/MyBlocks) a pak ho přehrát blokem **zvuk … přehrát**.
