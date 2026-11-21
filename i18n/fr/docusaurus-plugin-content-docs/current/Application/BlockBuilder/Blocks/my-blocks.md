---
id: MyBlocks
title: Mes blocs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mes blocs

Mes blocs vous permet de créer vos propres blocs réutilisables.
Cela fonctionne comme une fonction en programmation classique : vous décrivez le comportement une fois et vous l’utilisez à autant d’endroits que vous le souhaitez.

## Les blocs {#the-blocks}

### `définir …` (Gourou) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Appuyez sur **Créer un bloc** en haut de la catégorie pour créer un nouveau bloc. La zone de programme reçoit alors un bloc chapeau `définir` au nom de votre bloc : les blocs que vous accrochez en dessous constituent ce que fait votre bloc.

- Utilisation type : regrouper une logique répétée dans un seul bloc au nom explicite.

### Votre bloc (Gourou) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Chaque bloc que vous créez apparaît dans la palette sous son nom. L’utiliser exécute les blocs accrochés à son bloc `définir`.

- Type : bloc d’empilement
- Utilisation type : utiliser la même logique à plusieurs endroits sans copier de piles.

## Exemples avec différentes entrées {#examples-with-different-inputs}

Des blocs personnalisés avec différents jeux d’entrées :

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Utiliser un bloc personnalisé dans un programme {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Ici, le bloc personnalisé est utilisé sous `lorsque le programme commence`, et la pile `définir` contient la logique moteur qu’il exécute.

- Schéma habituel : utiliser vos blocs dans des scripts d’événements.
- Avantage : une seule définition, de nombreux endroits qui l’utilisent.

## L’éditeur de blocs {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Dans l’éditeur **Créer un bloc**, vous dessinez l’apparence de votre bloc : ajoutez des étiquettes (**Ajouter une étiquette**) et des entrées (**Ajouter une entrée** : *nombre ou texte* ou *booléen*). Dans la pile `définir`, les entrées fonctionnent comme des variables qui contiennent les valeurs transmises au bloc.

## Pourquoi utiliser Mes blocs {#why-use-my-blocks}

- Réutilisation : écrire une fois, utiliser souvent.
- Lisibilité : un nom parlant au lieu de longues piles répétées.
- Modifications faciles : corriger la logique à un seul endroit plutôt que dans chaque copie.
- Structure : découper un gros programme en petites parties logiques.

## Remarques {#notes}

- Les blocs personnalisés appartiennent au profil et peuvent être utilisés partout dans son programme.
- Donnez aux blocs des noms qui disent ce qu’ils font, pas comment ils le font.
- Un bloc qui s’appelle lui-même peut tourner en boucle à l’infini ; l’éditeur vous en avertit.
