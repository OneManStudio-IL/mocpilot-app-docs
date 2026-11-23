---
id: Simulator
title: Simulateur
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulateur

Le **Simulateur** transforme les pédales, la boîte de vitesses et le frein à main du tableau de bord en une voiture qui se comporte comme une vraie : elle accélère avec de l’inertie, roule sur son élan, freine, recule et change de rapport. Les commandes ne donnent que leurs valeurs brutes ; le programme construit la voiture à partir de celles-ci et envoie sa vitesse aux moteurs.

La catégorie apparaît tant que le tableau de bord comporte des pédales, une boîte de vitesses ou un frein à main. Voir [Contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers) pour les blocs qui lisent ces commandes.

## Véhicules {#vehicles}

Appuyez sur **Créer un véhicule** en haut de la catégorie et donnez-lui un nom (par exemple « Véhicule 1 »). Les blocs apparaissent dès que le programme contient au moins un véhicule, et dans chaque bloc vous choisissez le véhicule concerné. **Renommer le véhicule** et **Supprimer le véhicule** permettent de les gérer ; vous ne pouvez pas supprimer un véhicule tant que ses blocs sont dans le programme, et les dernières pédales, boîte de vitesses ou frein à main ne peuvent pas être retirés du tableau de bord tant que des blocs du Simulateur sont utilisés.

<Screenshot name="blocks-simulator" alt="Catégorie Simulateur avec un bloc conduire accroché à l’événement des pédales" width={900} />

Une voiture type : accrochez **conduire** à l’événement des pédales, reliez les pédales à `accélérateur` et `frein`, et à l’intérieur démarrez le moteur de propulsion à la `vitesse` du véhicule :

```text
lorsque les pédales PDL1 n'importe est déplacé
    Véhicule 1  conduire  accélérateur (pédales PDL1 accélération)  frein (pédales PDL1 frein)
        démarrer le moteur à (vitesse de Véhicule 1) % vitesse  (Hub 1, port A)
```

Aucune boucle `répéter toujours` n’est nécessaire : **conduire** continue de lui-même jusqu’à l’arrêt de la voiture.

## Blocs {#blocks}

### `… conduire accélérateur … frein … rapport … de … frein à main … serré … boîte de transfert …` (Débutant) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Le cœur du simulateur. Un bloc en C qui conduit le véhicule : toutes les 0,1 s, il lit ses entrées, fait avancer la voiture d’un pas et exécute les blocs qu’il contient (placez-y les blocs de moteur). Il se termine lorsque la voiture est à l’arrêt et que rien n’est enfoncé ; les blocs intérieurs s’exécutent une dernière fois pour que le moteur reçoive la valeur finale.

- `accélérateur` et `frein` : l’enfoncement de chaque pédale, de 0 à 100.
- `rapport` : le rapport choisi : `-1` marche arrière, `0` point mort, `1` et plus en marche avant. Avec une commande de boîte automatique dans cet emplacement, c’est la position de son sélecteur qui est utilisée (P, R, N, D) et la voiture choisit elle-même le rapport en D.
- `de` : le nombre de rapports de la boîte de vitesses (6 par défaut).
- `frein à main` : la force avec laquelle le frein à main est tiré, de 0 à 100 ; `serré` : s’il est verrouillé.
- `boîte de transfert` (facultatif) : la position de la [boîte de transfert](/docs/Application/Dashboard/SpecialControls#transfer-case), généralement le bloc [position de la boîte de transfert](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float) : `0` 2H, `1` 4H, `2` N, `3` 4L. En 2H et 4H, la voiture roule comme sans elle ; en N, elle n’avance pas (elle roule en roue libre, et le frein ne fait que la ralentir sans la faire reculer) ; en 4L, sa vitesse est limitée à 40 %. Laissez-le vide si le modèle n’a pas de boîte de transfert.
- Une entrée n’est prise en compte que si un bloc y est placé ; un simple nombre dans un emplacement vide est ignoré (sauf pour `de`).
- Un seul bloc **conduire** peut conduire un véhicule à la fois ; un second bloc pour le même véhicule saute ses blocs intérieurs.

### `définir … type sur …` (Débutant) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Règle le moteur du véhicule pour un type de véhicule : durée pendant laquelle il continue de rouler (inertie), vitesse maximale en marche arrière et présence d’un frein pneumatique.

- Types : `voiture`, `tout-terrain`, `voiture de sport`, `camion` (le camion a un frein pneumatique)

### `définir … … à … %` (Avancé) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Modifie un réglage du moteur.

- `inertie du moteur` : plus elle est élevée, plus la voiture roule longtemps sans accélérateur (0 signifie aucune inertie).
- `vitesse en marche arrière` : la vitesse maximale en marche arrière.

### `définir … … à …` (Avancé) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Active ou désactive une option du véhicule.

- `marche arrière avec le frein` : avec les pédales seules, maintenir le frein à l’arrêt fait reculer.
- `rapports limitent la vitesse` : chaque rapport a sa propre vitesse maximale.
- `frein à main bloque` : un frein à main serré immobilise la voiture.
- `frein pneumatique` : le frein pneumatique du camion (donne l’événement « relâche de l'air »).
- `boîte automatique` : traiter l’entrée `rapport` comme un sélecteur automatique.

### `réinitialiser …` (Avancé) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Arrête le véhicule là où il se trouve et oublie son état.

### `… de …` (Débutant) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Renvoie l’une des valeurs du véhicule.

- `vitesse` : de −100 à 100 (négative en marche arrière), prête pour l’emplacement de vitesse d’un moteur.
- `régime moteur` : de 0 à 100, pour un compte-tours ou un son de moteur.
- `rapport` : le rapport actuel (`-1` marche arrière, `0` point mort, puis `1`, `2`…).

### `est-ce que … … ?` (Débutant) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Renvoie `true` lorsque le véhicule est dans l’état sélectionné.

- États : `roule`, `freine`, `est au frein à main`

### `quand … …` (Débutant) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Exécute son script lorsqu’il arrive quelque chose au véhicule.

- Événements : `démarre`, `s'arrête`, `commence à freiner`, `arrête de freiner`, `freine fort`, `relâche de l'air`, `change de rapport`
- Utilisation type : jouer un son, par exemple le sifflement d’un frein pneumatique sur `relâche de l'air` ou un crissement sur `freine fort` (voir [Sons](/docs/Application/BlockBuilder/Blocks/Sounds)).
