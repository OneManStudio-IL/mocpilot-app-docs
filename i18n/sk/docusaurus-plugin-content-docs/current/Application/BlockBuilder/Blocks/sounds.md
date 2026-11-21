---
id: Sounds
title: Zvuky
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Zvuky {#sounds}

Bloky zvukov prehrávajú zvuky v telefóne, tablete alebo počítači, na ktorom beží MOCPilot: pípnutia, signály, klaksóny, efekty a vaše vlastné nahrávky.

## Aké zvuky môžete prehrať {#which-sounds-you-can-play}

Zoznam zvukov v blokoch má dve časti:

- **Vstavaná knižnica**: krátke pípnutia, čvirikanie, cúvací pípač, siréna, alarm, signály úspechu a chyby, klaksóny auta, nákladiaku a vlaku, zvonček na bicykel, smerovka a niekoľko efektov (kliknutie, puknutie, laser, minca, zapnutie, vypnutie).
- **Vaše vlastné zvuky**: stlačte **Pridať zvuk** hore v kategórii a vyberte zvukový súbor. Aplikácia ho prevedie a uloží do profilu, takže putuje s profilom na vaše ďalšie zariadenia aj do katalógu. Profil môže obsahovať až 30 zvukov; dlhší súbor sa skráti na 15 sekúnd. Na ich správu slúžia **Premenovať zvuk** a **Odstrániť zvuk**; bloky, ktoré prehrávali odstránený zvuk, stíchnu.

<Screenshot name="blocks-add-sound" alt="Dialóg Pridať zvuk v Logických blokoch" width={900} />

## Bloky {#blocks}

### `zvuk … prehrať / prehrať do konca / opakovať` (Začiatočník) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Prehrá vybraný zvuk.

- `prehrať`: spustí zvuk a hneď prejde na ďalší blok. Zvuky určené na opakovanie (napríklad siréna alebo cúvací pípač) sa opakujú ďalej.
- `prehrať do konca`: prehrá zvuk raz a počká, kým skončí.
- `opakovať`: prehráva zvuk dokola, kým ho nezastavíte.
- Spustenie zvuku, ktorý už hrá, ho spustí odznova.
- Namiesto výberu zo zoznamu môžete do políčka vložiť hlásiaci blok **zvuk** (alebo premennú, ktorá ho obsahuje).

### `pípnuť … Hz na … s` (Začiatočník) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Prehrá tón zadanej výšky a dĺžky a počká, kým skončí.

- Výška: od 50 do 8000 Hz (predvolene 440).
- Dĺžka: od 0,02 do 10 sekúnd (predvolene 0,2).

### `zastaviť zvuk …` (Začiatočník) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Zastaví vybraný zvuk.

### `zastaviť všetky zvuky` (Začiatočník) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Zastaví všetky hrajúce zvuky.

### `nastaviť hlasitosť zvuku na … %` (Pokročilý) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Nastaví hlasitosť všetkých zvukov programu od 0 do 100 %. Po zastavení programu sa hlasitosť vráti na 100 %.

### `hlasitosť zvuku` (Pokročilý) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Vráti aktuálnu hlasitosť zvuku od 0 do 100.

### `zvuk …` (Pokročilý) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Vráti vybraný zvuk ako hodnotu.

- Typické použitie: uložiť zvuk do premennej alebo zoznamu, prípadne ho odovzdať niektorému z [Mojich blokov](/docs/Application/BlockBuilder/Blocks/MyBlocks), a potom ho prehrať blokom **zvuk … prehrať**.
