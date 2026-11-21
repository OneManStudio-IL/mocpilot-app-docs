---
id: Operators
title: Opérateurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Opérateurs

Les opérateurs sont des blocs rapporteurs et booléens pour les calculs, les comparaisons, la logique et le texte.

## Calculs {#math}

### `… + …` (Débutant) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Renvoie la somme de deux nombres.

### `… − …` (Débutant) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Soustrait le second nombre du premier.

### `… × …` (Débutant) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Renvoie le produit de deux nombres.

### `… ÷ …` (Débutant) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Divise le premier nombre par le second.

### `… par modulo …` (Gourou) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Renvoie le reste de la division du premier nombre par le second.

### `arrondir …` (Gourou) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Arrondit un nombre à l’entier le plus proche (par exemple, `2.6` devient `3`).

### `… de …` (Gourou) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Applique une fonction à un nombre. Les angles sont en degrés.

- `valeur absolue` : valeur absolue
- `entier inférieur` : arrondi à l’entier inférieur
- `entier supérieur` : arrondi à l’entier supérieur
- `racine carrée` : racine carrée
- `sin`, `cos`, `tan` : sinus, cosinus et tangente d’un angle
- `asin`, `acos`, `atan` : les fonctions réciproques ; elles renvoient un angle
- `ln` : logarithme népérien (base `e`)
- `log` : logarithme décimal (base 10)
- `e^` : `e` élevé à la puissance du nombre
- `10^` : `10` élevé à la puissance du nombre

### `… de … et …` (Gourou) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Applique une fonction à deux nombres.

- `min` : le plus petit des deux
- `max` : le plus grand des deux
- `puissance` : le premier nombre élevé à la puissance du second
- `atan2` : l’angle du point défini par les deux nombres
- `hypot` : la longueur de l’hypoténuse ayant ces deux côtés
- `copysign` : le premier nombre avec le signe du second

### `choisir au hasard … à …` (Gourou) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Renvoie un nombre aléatoire compris entre les deux valeurs.

## Comparaison {#comparison}

### `… = …` (Débutant) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Renvoie `true` lorsque les deux valeurs sont égales.

### `… ≠ …` (Avancé) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Renvoie `true` lorsque les deux valeurs sont différentes.

### `… > …` (Débutant) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Renvoie `true` lorsque la valeur de gauche est supérieure à celle de droite.

### `… < …` (Débutant) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Renvoie `true` lorsque la valeur de gauche est inférieure à celle de droite.

### `est-ce que … entre … et …` (Avancé) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Renvoie `true` lorsque le nombre se situe entre les deux limites.

## Logique {#logic}

### `… et …` (Avancé) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Renvoie `true` uniquement si les deux conditions sont vraies.

### `… ou …` (Avancé) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Renvoie `true` lorsqu’au moins une des conditions est vraie.

### `pas …` (Avancé) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Transforme `true` en `false` et `false` en `true`.

## Texte {#text}

### `joindre … …` (Avancé) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Assemble deux morceaux de texte en un seul.

### `lettre … de …` (Gourou) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Renvoie la lettre située à la position indiquée dans le texte. La première lettre porte le numéro 1.

### `longueur de …` (Avancé) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Renvoie le nombre de caractères du texte.

### `… contient …` (Gourou) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Renvoie `true` lorsque le premier texte contient le second.
