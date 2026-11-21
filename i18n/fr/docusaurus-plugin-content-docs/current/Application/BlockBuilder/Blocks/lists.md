---
id: Lists
title: Listes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listes

Une liste stocke plusieurs valeurs dans un ordre donné. Créez, renommez et supprimez des listes avec **Créer une liste**, **Renommer la liste** et **Supprimer la liste** en haut de la catégorie. Les blocs ci-dessous apparaissent dès que le programme contient au moins une liste. Les éléments sont numérotés à partir de 1.

## Modifier une liste {#changing-a-list}

### `ajouter … à …` (Avancé) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Ajoute une valeur à la fin de la liste.

### `insérer … à … de …` (Gourou) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Insère une valeur à la position indiquée ; les éléments suivants descendent d’un rang.

### `remplacer élément … de … avec …` (Gourou) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Remplace l’élément situé à la position indiquée par une nouvelle valeur.

### `supprimer … de …` (Avancé) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Supprime l’élément situé à la position indiquée.

### `effacer …` (Avancé) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Retire tous les éléments de la liste.

## Lire une liste {#reading-a-list}

### `élément … de …` (Avancé) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Renvoie l’élément situé à la position indiquée.

### `index de … dans …` (Gourou) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Renvoie la position du premier élément égal à la valeur, ou `0` s’il n’y en a aucun.

### `… contient …` (Gourou) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Renvoie `true` lorsque la liste contient la valeur.

### `taille de …` (Avancé) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Renvoie le nombre d’éléments de la liste.

### Liste (Avancé) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Chaque liste possède son propre bloc rapporteur, à son nom. Il renvoie toute la liste sous forme de texte.

- Exemple de sortie : `[item1,item2,item3]` ; une liste vide donne un texte vide.
- Utilisation type : afficher la liste sur un moniteur, ou la transmettre aux blocs qui acceptent une liste (par exemple **allumer** pour les lumières du capteur de distance).
