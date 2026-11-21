---
id: Sounds
title: Sons
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sons

Les blocs de son jouent des sons sur le téléphone, la tablette ou l’ordinateur sur lequel tourne MOCPilot : bips, signaux, klaxons, effets et vos propres enregistrements.

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
