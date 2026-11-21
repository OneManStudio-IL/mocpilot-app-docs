---
id: Control
title: Contrôle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Contrôle

Les blocs de contrôle déterminent le déroulement d’un script : attentes, boucles, branches et arrêt. Lorsque le profil comporte des hubs, cette catégorie contient aussi des blocs qui connectent les hubs et modifient leurs réglages.

## Blocs d’attente {#wait-blocks}

### `attendre … secondes` (Débutant) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Met le script en pause pendant le nombre de secondes indiqué.

### `attendre jusqu'à …` (Avancé) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Met le script en pause jusqu’à ce que la condition devienne vraie.

## Boucles {#loops}

### `répéter …` (Avancé) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Exécute les blocs qu’il contient le nombre de fois indiqué (10 par défaut).

### `répéter tant que …` (Avancé) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Exécute en boucle les blocs qu’il contient jusqu’à ce que la condition devienne vraie.

### `répéter toujours` (Avancé) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Exécute en boucle les blocs qu’il contient jusqu’à l’arrêt du script ou du programme. Rien ne peut être accroché en dessous.

## Branches {#branches}

### `si … alors` (Débutant) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Exécute les blocs qu’il contient uniquement si la condition est vraie.

### `si … alors … autre` (Avancé) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Exécute la première branche si la condition est vraie, et la seconde dans le cas contraire.

### `fais ça … et ça` (Gourou) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Exécute le premier groupe de blocs, puis le second, et seulement ensuite les blocs placés en dessous.

## Arrêt {#stopping}

### `arrêter …` (Débutant) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Arrête des scripts ; ce qui est arrêté dépend de l’option choisie.

- `tout` : arrête tous les scripts.
- `cette pile` : arrête uniquement ce script.
- `et quitter le programme` : arrête le programme.

### `arrêter les autres piles` (Gourou) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Arrête tous les autres scripts en cours ; celui-ci continue.

## Blocs de hub {#hub-blocks}

### `connecter / déconnecter …` (Débutant) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Connecte ou déconnecte le hub sélectionné du programme.

- Options : `connecter`, `déconnecter`
- Hubs : tous.

### `… connecté` (Débutant) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Renvoie `true` lorsque le hub sélectionné est connecté.

- Type : bloc booléen
- Hubs : tous.

### `définir … configuration vers …` (Avancé) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Fait passer le hub dans l’une de ses configurations.

- Hubs : Technic Move Hub (le seul hub doté de configurations à ce jour).
- Utilisation type : passer le hub dans une autre configuration avant l’exécution des blocs suivants.

### `obtenir … configuration en …` (Avancé) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Renvoie la configuration actuelle du hub.

- Type : bloc rapporteur
- Sortie : `texte` ou `index`
- Hubs : Technic Move Hub.
- Renvoie `NaN` lorsque le hub n’est pas connecté ou n’a pas de configuration.

### `définir … mode d'alimentation sur …` (Débutant) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Règle le mode de puissance d’un BuWizz 2.

- Modes : `Lente`, `Normal`, `Rapide`, `Ludicrous`
- Hubs : BuWizz 2.

### `obtenir … mode de puissance comme …` (Gourou) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Renvoie le mode de puissance actuel d’un BuWizz 2.

- Sortie : `texte` ou `index`
- Hubs : BuWizz 2.

### `définir … canal de contrôle vers …` (Avancé) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Règle le canal de contrôle d’un hub Mould King.

- Canaux : `A`, `B`, `C`
- Hubs : Mould King 4.0 et 6.0.

### `obtenir … canal de contrôle comme …` (Avancé) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Renvoie le canal de contrôle actuel d’un hub Mould King.

- Sortie : `texte` ou `index`
- Hubs : Mould King 4.0 et 6.0.
