---
id: Examples
title: Exemples
description: "Exemples de programmes en Blocs logiques pour la conduite, la direction, les lumières, les sons, les alertes de batterie et les capteurs."
---

# Exemples

De courts programmes pour démarrer. Les noms des blocs suivent la [référence des blocs](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference) ; les valeurs entre parenthèses sont le hub, le port ou un bloc rapporteur placé dans un emplacement. Les lignes en retrait vont à l’intérieur d’un bloc en C.

## Conduire avec un joystick {#drive-with-a-joystick}

Tableau de bord : joystick **JOY1**. Moteur de propulsion sur le port A.

```text
lorsque le programme commence
répéter toujours
    démarrer le moteur à (joystick JOY1 axe Y) % vitesse  (Hub 1, port A)
```

## Diriger avec un servo {#steer-with-a-servo}

Moteur de direction (un moteur angulaire) sur le port B. Définissez sa position actuelle comme centre, puis suivez le joystick : `× 0.9` transforme les −100…100 du joystick en −90…90 degrés.

```text
lorsque le programme commence
définir la position relative 0  (Hub 1, port B)
répéter toujours
    aller à la position relative (joystick JOY1 axe X × 0.9) à 100 % vitesse  (Hub 1, port B)
```

Pour une crémaillère de direction avec butées, étalonnez-la d’abord (voir [Moteurs](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `centre` et `plage` sont des variables. Après l’étalonnage, la crémaillère est au milieu, mais sa position relative à cet endroit vaut la valeur du centre et non 0 : remettez-la donc à 0 avant de diriger :

```text
lorsque le programme commence
étalonner la crémaillère (centre) centre (plage) degrés  (Hub 1, port B)
définir la position relative 0  (Hub 1, port B)
répéter toujours
    aller à la position relative ((plage × joystick JOY1 axe X) ÷ 100) à 100 % vitesse  (Hub 1, port B)
```

## Lumières sur un interrupteur {#lights-on-a-switch}

```text
lorsque l'interrupteur SWCH1 est basculé activé
    allumer à 100 % luminosité  (Hub 1, port C)
lorsque l'interrupteur SWCH1 est basculé désactivé
    éteindre  (Hub 1, port C)
```

## Bouton de klaxon {#horn-button}

```text
lorsque le bouton BTN1 est appuyé
    son Klaxon de voiture jouer jusqu'au bout
```

## Alerte de batterie {#battery-warning}

Moniteur **MNTR1** ; le bouton devient rouge quand la batterie est faible.

```text
lorsque le programme commence
répéter toujours
    afficher (Hub 1 % batterie) sur MNTR1 moniteur
    si (Hub 1 % batterie) < 20 alors
        définir BTN1 couleur à rouge
    attendre 5 secondes
```

## S’arrêter devant un obstacle {#stop-before-an-obstacle}

Capteur de distance Technic sur le port D, moteur de propulsion sur le port A.

```text
lorsque le programme commence
répéter toujours
    si (distance cm  (Hub 1, port D)) < 10 alors
        arrêter le moteur  (Hub 1, port A)
        définir la couleur LED sur rouge  (Hub 1)
    autre
        démarrer le moteur à (curseur SLDR1) % vitesse  (Hub 1, port A)
        définir la couleur LED sur vert  (Hub 1)
```

## Limite de vitesse sur un interrupteur à étapes {#speed-limit-on-a-stepper}

L’interrupteur à étapes **STPR1** à 4 étapes limite la vitesse maximale.

```text
lorsque le programme commence
répéter toujours
    définir (limite de vitesse) à (interrupteur à étape STPR1 × 25)
    démarrer le moteur à (joystick JOY1 axe Y × limite de vitesse / 100) % vitesse  (Hub 1, port A)
```

`limite de vitesse` est une variable (**Variables → Créer une variable**).

## Vérification au démarrage {#startup-check}

Bloquer l’accélérateur tant que les deux hubs ne sont pas connectés.

```text
lorsque le programme commence
désactiver JOY1 interactivité
attendre jusqu'à (Hub 1 connecté) et (Hub 2 connecté)
afficher "Prêt" sur MNTR1 moniteur
activer JOY1 interactivité
```

## Manette de jeu {#gamepad}

Réglez **Plage de valeurs de la manette** sur −100…100 sur la [page Manette de jeu](/docs/Application/Dashboard/Gamepad) et activez **Activer les blocs de manette**.

```text
lorsque le programme commence
répéter toujours
    démarrer le moteur à (joystick gauche axe Y) % vitesse  (Hub 1, port A)
    aller à la position relative (joystick droite axe X × 0.9) à 100 % vitesse  (Hub 1, port B)
```

## Voiture avec pédales {#car-with-pedals}

Pour une voiture pilotée avec des pédales, une boîte de vitesses et un frein à main, voir le [Simulateur](/docs/Application/BlockBuilder/Blocks/Simulator).

## Pour aller plus loin {#more}

- Installez des profils officiels depuis le [catalogue](/docs/Application/Profiles/Catalog) et étudiez leurs programmes.
- Essayez la démo Blocs logiques sur [mocpilot.com](https://mocpilot.com).
