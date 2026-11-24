---
id: Sounds
title: Sons
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sons

Les blocs de son jouent des sons sur le téléphone, la tablette ou l’ordinateur sur lequel tourne MOCPilot : bips, signaux, klaxons, effets et vos propres enregistrements. Le hub Robot Inventor possède aussi son propre haut-parleur, voir [Haut-parleur du hub Robot Inventor](#robot-inventor-sounds).

## Quels sons vous pouvez jouer {#which-sounds-you-can-play}

La liste des sons dans les blocs comporte deux parties :

- **La bibliothèque intégrée** : bips courts, gazouillis, bip de recul, sirène, alarme, signaux de réussite et d’erreur, klaxons de voiture, de camion et de train, sonnette de vélo, clignotant et quelques effets (clic, pop, laser, pièce, mise sous tension, mise hors tension).
- **Vos propres sons** : appuyez sur **Ajouter un son** en haut de la catégorie et choisissez un fichier audio. L’application le convertit et l’enregistre dans le profil : il accompagne ainsi le profil sur vos autres appareils et dans le catalogue. Un profil peut contenir jusqu’à 30 sons ; un fichier plus long est coupé à 15 secondes. Utilisez **Renommer le son** et **Supprimer le son** pour les gérer ; les blocs qui jouaient un son supprimé deviennent muets.

<Screenshot name="blocks-add-sound" alt="La boîte de dialogue Ajouter un son dans Blocs logiques" width={900} />

## Blocs {#blocks}

### `son … jouer / jouer jusqu'au bout / répéter` (Débutant) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Joue le son sélectionné.

- `jouer` : lance le son et passe aussitôt au bloc suivant. Les sons prévus pour tourner en boucle (comme la sirène ou le bip de recul) se répètent.
- `jouer jusqu'au bout` : joue le son une fois et attend qu’il se termine.
- `répéter` : joue le son en boucle jusqu’à ce que vous l’arrêtiez.
- Lancer un son déjà en cours le fait redémarrer.
- Vous pouvez placer un rapporteur **son** (ou une variable qui en contient un) dans l’emplacement au lieu de choisir dans la liste.

### `bip … Hz pendant … s` (Débutant) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Joue une tonalité de la hauteur et de la durée indiquées et attend qu’elle se termine.

- Hauteur : de 50 à 8000 Hz (440 par défaut).
- Durée : de 0,02 à 10 secondes (0,2 par défaut).

### `arrêter le son …` (Débutant) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Arrête le son sélectionné.

### `arrêter tous les sons` (Débutant) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Arrête tous les sons en cours de lecture.

### `mettre le volume du son à … %` (Avancé) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Règle le volume de tous les sons du programme, de 0 à 100 %. À l’arrêt du programme, le volume revient à 100 %.

### `volume du son` (Avancé) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Renvoie le volume sonore actuel, de 0 à 100.

### `son …` (Avancé) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Renvoie le son sélectionné sous forme de valeur.

- Utilisation type : conserver un son dans une variable ou une liste, ou le transmettre à l’un de [Mes blocs](/docs/Application/BlockBuilder/Blocks/MyBlocks), puis le jouer avec **son … jouer**.

## Haut-parleur du hub Robot Inventor {#robot-inventor-sounds}

Ces blocs proviennent de l’application Robot Inventor et jouent des sons sur le haut-parleur du [hub MINDSTORMS Robot Inventor ou SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), et non sur votre appareil. Ils portent l’icône du hub. Les notes sont des numéros de note MIDI : 60 est le do central, chaque pas vaut un demi-ton (de 0 à 132).

### `jouer le bip … pendant … secondes` (Débutant) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Joue un bip de la note indiquée (60 par défaut) pendant la durée indiquée (0,2 s par défaut) et attend qu’il se termine.

### `démarrer le bip …` (Avancé) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Démarre un bip de la note indiquée et continue aussitôt. Le bip retentit jusqu’à **arrêter tous les sons** ou un autre son du hub.

### `jouer le son … jusqu'à la fin` (Débutant) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Joue l’un des sons de robot enregistrés sur le hub (Affirmative, Laser, Hello, Tadaa et 80 autres) et attend qu’il se termine. Les sons sont fournis avec le logiciel du hub ; si le hub reste muet, voir [Si le hub ne démarre pas](/docs/Application/Hubs/RobotInventorHub#restore).

### `démarrer le son …` (Débutant) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Démarre un son de robot du hub et continue aussitôt.

### `arrêter tous les sons` (hub) (Débutant) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Arrête le son et le bip sur le hub. Le bloc du même nom sans l’icône du hub arrête les sons de votre appareil.

### `définir le volume du hub à … %` (Avancé) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Règle le volume des bips, des sons et des notes du hub, de 0 à 100 % (100 % tant que vous ne le modifiez pas).

### `modifier le volume du hub de …` (Avancé) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Rend le hub plus fort ou plus faible de la valeur indiquée (−10 par défaut) ; le volume reste entre 0 et 100 %.

### `volume du hub` (Avancé) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Renvoie le volume du hub, de 0 à 100.

### `définir … effet à …` (Avancé) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Définit un effet sonore pour les sons de robot qui démarrent ensuite.

- `hauteur` : de −360 à 360 ; les valeurs positives rendent les sons plus aigus et plus rapides, les négatives plus graves et plus lents. 0 est la valeur normale.
- `stéréo gauche/droite` : de −100 à 100. Le hub n’a qu’un seul haut-parleur, vous ne l’entendrez donc pas ; la valeur est conservée pour les programmes créés dans l’application Robot Inventor.

### `changer … effet de …` (Avancé) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Modifie l’effet de hauteur ou de stéréo de la valeur indiquée (10 par défaut), dans les mêmes limites.

### `annuler tous les effets sonores` (Avancé) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Remet la hauteur et la stéréo à 0.

### Musique {#robot-inventor-music}

Les blocs de musique comptent le temps en **temps** (battements) : au tempo de 60 temps par minute (par défaut), un temps dure une seconde. Pendant que le programme s’exécute dans MOCPilot, les notes sont jouées comme des bips du hub de la bonne hauteur et de la bonne durée, et les percussions comme de courts bips ; l’instrument ne change pas encore le son.

#### `jouer la note … pendant … temps` (Avancé) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Joue une note (60 par défaut) pendant le nombre de temps indiqué (0,25 par défaut) et attend.

#### `jouer du tambour … pendant … temps` (Avancé) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Joue l’une des 18 percussions (caisse claire, grosse caisse, charleston, cloche de vache et autres) et attend le nombre de temps indiqué.

#### `faire une pause pendant … temps` (Avancé) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Attend le nombre de temps indiqué sans rien jouer.

#### `choisir l'instrument …` (Gourou) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Choisit l’un des 21 instruments (piano, orgue, guitare, flûte, chœur, synthé et autres) pour les notes qui suivent.

#### `mettre le tempo à …` (Avancé) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Règle le tempo en temps par minute, de 20 à 500 (60 par défaut).

#### `ajouter au tempo …` (Avancé) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Accélère ou ralentit la musique du nombre de temps par minute indiqué (20 par défaut).

#### `tempo` (Avancé) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Renvoie le tempo actuel en temps par minute.
