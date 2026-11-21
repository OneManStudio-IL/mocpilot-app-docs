---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables

Les variables stockent des valeurs que tous les scripts du programme peuvent lire et modifier. Créez, renommez et supprimez-les avec **Créer une variable**, **Renommer la variable** et **Supprimer la variable** en haut de la catégorie. Les blocs ci-dessous apparaissent dès que le programme contient au moins une variable.

## Modifier une variable {#changing-a-variable}

### `définir … à …` (Débutant) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Donne une valeur à la variable sélectionnée.

- Utilisation type : définir une valeur de départ, remplacer la valeur précédente.

### `changer … par …` (Avancé) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Ajoute un nombre à la variable sélectionnée. Utilisez un nombre négatif pour soustraire.

- Utilisation type : compteurs, scores, cumul de distance ou de temps.

## Lire une variable {#reading-a-variable}

### Variable (Débutant) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Chaque variable possède son propre bloc rapporteur, à son nom. Il renvoie la valeur actuelle de la variable.

- Utilisation type : placer la valeur dans des opérateurs, des conditions et les entrées d’autres blocs.
- Le [Moniteur](/docs/Application/BlockBuilder/Editor#monitor) affiche les valeurs de toutes les variables pendant l’exécution du programme.
