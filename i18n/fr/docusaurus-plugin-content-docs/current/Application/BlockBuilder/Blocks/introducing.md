---
id: BlocksIntroducing
title: Présentation des Blocs logiques
description: "Blocs logiques est l’éditeur de programmation visuelle par blocs de MOCPilot : événements, boucles, conditions, variables, capteurs et sons."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Blocs logiques

**Blocs logiques** est l’éditeur de programmation par blocs de MOCPilot. Vous construisez des programmes en emboîtant des blocs, un peu comme dans Scratch : événements, boucles, conditions, variables, listes, vos propres blocs, sons, et blocs pour les moteurs, les lumières, les capteurs, les commandes du tableau de bord et la manette.

Choisissez Blocs logiques lorsque votre modèle a besoin de logique : robots, séquences automatiques, réactions aux capteurs, vérifications au démarrage, jeux. Si vous voulez seulement relier des commandes à des moteurs, [Liens rapides](/docs/Application/Links/LinksIntroducing) est plus rapide.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programme en Blocs logiques" style={{width: '100%', maxWidth: 720}} />

:::warning Ce n’est pas Scratch
Blocs logiques possède ses propres blocs et son propre comportement. Vous ne pouvez pas importer des programmes MOCPilot dans Scratch, ni des projets Scratch dans MOCPilot.
:::

## L’éditeur en bref {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Éditeur Blocs logiques avec la palette et un programme" width={900} />

- La **palette** liste les catégories de blocs : **Événements**, **Contrôle**, **Capteurs**, **Sons**, **Opérateur**, **Variables**, **Listes** et **Mes blocs**. D’autres catégories apparaissent quand votre profil en a besoin : **Moteurs** et **Lumière** (quand un hub les prend en charge), **Mouvement** (avec un [hub Robot Inventor](/docs/Application/Hubs/RobotInventorHub)), **Simulateur** (quand le tableau de bord comporte des pédales, une boîte de vitesses ou un frein à main), **Contrôleurs à l'écran** et **Manette de jeu**.
- La **zone de programme** est l’endroit où vous faites glisser les blocs et construisez les scripts.
- La barre du haut contient **Annuler** et **Rétablir**, **Tableau de bord**, **Mes hubs**, **Manette de jeu**, les panneaux latéraux **Assistant IA**, [**Sac à dos**](/docs/Application/BlockBuilder/Backpack) et **Moniteur**, **Plus** (avec **Paramètres de l'éditeur**) et **Lancer/Arrêter**. Sur téléphone ou tablette, les panneaux latéraux et la Manette de jeu se trouvent dans **Plus**.

Pour plus de détails, voir [Travailler dans l’éditeur](/docs/Application/BlockBuilder/Editor).

## Comment un programme s’exécute {#how-a-program-runs}

- Un script commence par un bloc d’**événement** (un bloc chapeau) : *lorsque le programme commence*, *lorsque le bouton … est appuyé*, *quand je reçois …*, etc.
- Les blocs accrochés en dessous s’exécutent de haut en bas.
- Plusieurs scripts s’exécutent **en même temps**. Utilisez des messages (*transmettre*) pour les coordonner.
- Les **boucles** (*répéter toujours*, *répéter*, *répéter tant que*) font durer un script ; les **conditions** (*si*, *si … autre*, *attendre jusqu'à*) prennent des décisions.
- Les blocs **rapporteurs** (arrondis) renvoient des valeurs et s’insèrent dans les entrées d’autres blocs ; les blocs **booléens** (pointus) renvoient vrai ou faux pour les conditions.
- Les **variables** et les **listes** conservent des valeurs entre les blocs et les scripts.

## Formes des blocs {#block-shapes}

### Blocs chapeau {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Lancent un script lorsqu’il se passe quelque chose. On ne peut accrocher des blocs qu’en dessous.

---

### Blocs d’empilement {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Les principaux blocs de commande : chacun fait quelque chose.

---

### Blocs en C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Des blocs en forme de C qui contiennent d’autres blocs : boucles et conditions.

---

### Blocs rapporteurs {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Renvoient une valeur, par exemple un nombre ou du texte.

---

### Blocs booléens {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Ne renvoient que `true` ou `false`. On les utilise généralement dans les conditions.

---

### Blocs de fin {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Terminent un script : rien ne peut être accroché en dessous.

---

### Pile de blocs {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Une pile est un groupe de blocs reliés qui s’exécute comme un seul script, de haut en bas.
Une pile commence généralement par un bloc d’événement, suivi des blocs qui s’exécutent dans l’ordre.

---


## Hubs, ports et commandes {#hubs-ports-and-controls}

- Les blocs de moteurs et de lumières prennent un **Hub** et un **Port**. Les catégories Moteurs et Lumière n’apparaissent que si un hub du profil les prend en charge, et certains blocs n’existent que pour des hubs précis (par exemple les modes de puissance BuWizz ou les fonctions du Technic Move Hub). La description de chaque bloc indique avec quels hubs il fonctionne.
- Les blocs du tableau de bord désignent les commandes par leur nom (**JOY1**, **BTN2**). Vous ne pouvez pas supprimer une commande du tableau de bord tant que des blocs l’utilisent ; retirez d’abord ces blocs.
- Les blocs de manette apparaissent lorsque **Activer les blocs de manette** est activé sur la [page Manette de jeu](/docs/Application/Dashboard/Gamepad).

## Niveaux des blocs {#block-levels}

Chaque profil a un **Niveau des blocs** : **Débutant** affiche les blocs les plus simples, **Avancé** ajoute la logique courante et les blocs d’appareils, et **Gourou** affiche l’ensemble complet. Choisissez-le à la création du profil ou plus tard dans les Paramètres de l’éditeur. Cette référence indique le niveau de chaque bloc à côté de son nom.

## Méthode recommandée {#recommended-workflow}

1. Commencez par un bloc d’événement et un script court ; appuyez sur **Lancer** et vérifiez que cela fonctionne.
2. Vérifiez tôt le sens des moteurs et les plages de valeurs (un Moniteur aide).
3. Découpez le programme en petits scripts qui communiquent par messages ; placez la logique répétée dans [Mes blocs](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Ajoutez de la sécurité : limites, arrêts, vérification au démarrage et un plan pour le cas où un hub se déconnecte.

## Pièges courants {#common-pitfalls}

- Un script sans bloc d’événement ne démarre jamais.
- Le mauvais hub ou le mauvais port est sélectionné : rien de visible ne se passe.
- Mélanger texte, nombres et valeurs booléennes donne des résultats inattendus.
- Des événements très fréquents sans filtrage (par exemple un événement de capteur à chaque infime variation) peuvent surcharger le programme ; utilisez des seuils ou de courtes attentes.

## Référence des blocs {#block-reference}

- [Événements](/docs/Application/BlockBuilder/Blocks/Events) · [Contrôle](/docs/Application/BlockBuilder/Blocks/Control) · [Opérateurs](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variables](/docs/Application/BlockBuilder/Blocks/Variables) · [Listes](/docs/Application/BlockBuilder/Blocks/Lists) · [Mes blocs](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Mouvement](/docs/Application/BlockBuilder/Blocks/Movement) · [Moteurs](/docs/Application/BlockBuilder/Blocks/Motors) · [Lumière](/docs/Application/BlockBuilder/Blocks/Light) · [Capteurs](/docs/Application/BlockBuilder/Blocks/Sensors) · [Sons](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulateur](/docs/Application/BlockBuilder/Blocks/Simulator) · [Contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Manette de jeu](/docs/Application/BlockBuilder/Blocks/Gamepad)

Dans l’application, faites un appui long (ou un clic droit) sur un bloc et choisissez **À propos du bloc** pour ouvrir sa description ici.

Programmes prêts à l’emploi : [Exemples](/docs/Application/BlockBuilder/Examples).
