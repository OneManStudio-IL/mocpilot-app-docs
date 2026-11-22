---
id: FirstCarBlocks
title: La même voiture en Blocs logiques
description: "Pas à pas : programmez une voiture LEGO télécommandée avec propulsion, direction par servo, phares et clignotants en Blocs logiques."
---

import Screenshot from '@site/src/components/Screenshot';

# La même voiture en Blocs logiques {#the-same-car-in-logic-blocks}

Ce tutoriel reconstruit la voiture de [Votre première voiture RC avec Liens rapides](/docs/Tutorials/FirstCarLinks), cette fois en [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Vous obtenez le même résultat, un joystick pour avancer et tourner et un bouton pour les phares, et vous apprenez au passage les bases de la programmation par blocs : événements, boucles, variables et Moniteur. Pour finir, vous pourrez ajouter des clignotants avec un tic-tac sonore.

**Ce qu'il vous faut** : le même modèle que dans le tutoriel Liens rapides :

- un LEGO® Technic™ Hub (88012) ;
- un moteur de propulsion sur le **port A** ;
- un moteur de direction avec encodeur sur le **port B** (un moteur Technic L ou XL ou n'importe quel moteur angulaire Technic) ;
- des lumières LEGO® sur le **port C** (facultatif).

Avec un City Hub, utilisez les ports **A** et **B** et laissez de côté les lumières.

**Le résultat** :

```text
lorsque le programme commence
définir (phares) à 0
définir la position relative 0  (Hub 1, port B)
répéter toujours
    définir (gaz) à (joystick JOY1 axe Y)
    démarrer le moteur à (gaz) % vitesse  (Hub 1, port A)
    aller à la position relative (joystick JOY1 axe X × 0.9) à 100 % vitesse  (Hub 1, port B)

lorsque le bouton BTN1 est pressé
    si (phares) = 0 alors
        allumer à 100 % luminosité  (Hub 1, port C)
        définir (phares) à 1
    autre
        éteindre  (Hub 1, port C)
        définir (phares) à 0
```

Comment lire ces listings : chaque ligne correspond à un bloc, tel que l'application l'affiche. Les valeurs entre parenthèses sont le hub et le port que vous choisissez dans le bloc, ou un bloc ou une variable que vous déposez dans un emplacement. Les lignes en retrait vont à l'intérieur du bloc en C situé au-dessus.

## 1. Créez le profil {#create-the-profile}

1. Dans **Mes profils**, commencez un nouveau profil (**+** → **Nouveau profil** sur un téléphone, **Nouveau profil** sur une tablette, **Fichier → Nouveau profil** sur un ordinateur).
2. Choisissez la vignette **Blocs logiques**.
3. Saisissez un **Nom** et réglez **Niveau des blocs** sur **Avancé**. La boucle **répéter toujours** et le bloc **si … alors … autre** utilisés ici sont des blocs du niveau Avancé ; la palette **Débutant** ne les affiche pas.
4. Touchez **Créer**.

Vous pourrez changer de niveau plus tard dans **Paramètres de l'éditeur** → **Sélectionner le niveau des blocs**. Voir [Créer un profil](/docs/Application/Profiles/CreateProfile) et [Niveaux de blocs](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Ajoutez le hub et les commandes {#hub-and-dashboard}

Procédez exactement comme dans le tutoriel Liens rapides :

1. [Ajoutez et connectez le hub](/docs/Tutorials/FirstCarLinks#add-the-hub) dans **Mes hubs**.
2. [Placez les commandes sur le tableau de bord](/docs/Tutorials/FirstCarLinks#dashboard) : un **Joystick** (**JOY1**) à gauche et un **Bouton** (**BTN1**) à droite.

<Screenshot name="tutorial-car-dashboard" alt="Tableau de bord avec le joystick JOY1 à gauche et le bouton BTN1 à droite" width={900} />

Une fois le hub ajouté au profil, la palette affiche les catégories **Moteurs** et **Lumière** ; les commandes apparaissent dans **Contrôleurs à l'écran**.

## 3. Événements ou boucle ? {#events-or-loop}

Un script commence par un bloc d'**événement** et exécute les blocs situés en dessous, de haut en bas. Plusieurs scripts s'exécutent en même temps.

- Un bloc d'événement comme [lorsque le bouton … est pressé](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) exécute son script une fois à chaque fois que l'événement se produit. Les événements conviennent à ce qui arrive à un instant précis : appui sur un bouton, interrupteur, clignotant.
- Un joystick change sans arrêt. Le plus simple pour le suivre est un script qui commence par [lorsque le programme commence](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) et qui lit le stick en continu dans une boucle [répéter toujours](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Cette voiture utilise les deux : une boucle pour la propulsion et la direction, et un événement pour les phares.

## 4. Propulsion {#drive}

1. Depuis **Événements**, faites glisser [lorsque le programme commence](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) dans la zone du programme.
2. Depuis **Contrôle**, accrochez [répéter toujours](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) en dessous.
3. Depuis **Moteurs**, déposez [démarrer le moteur à … % vitesse](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) dans **répéter toujours**. Choisissez le hub et le port **A**.
4. Depuis **Contrôleurs à l'écran**, faites glisser le bloc de valeur du [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) dans l'emplacement de la vitesse. Choisissez **JOY1** et **axe Y**.

```text
lorsque le programme commence
répéter toujours
    démarrer le moteur à (joystick JOY1 axe Y) % vitesse  (Hub 1, port A)
```

Posez la voiture sur un support, appuyez sur **Lancer** et poussez le joystick : le joystick donne de −100 à 100, soit exactement la vitesse du moteur en pourcentage. Appuyez sur **Arrêter** quand vous avez terminé.

**La voiture recule quand vous poussez vers le haut ?** Utilisez [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) depuis **Opérateur** : `(joystick JOY1 axe Y × -1)`. **Trop rapide ?** Multipliez plutôt par 0.5.

## 5. Direction {#steer}

Le moteur de direction suit l'axe X du joystick grâce à [aller à la position relative … à … % vitesse](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Les positions relatives sont comptées à partir du point défini avec [définir la position relative …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Accrochez **définir la position relative** juste sous **lorsque le programme commence**, au-dessus de **répéter toujours**. Laissez la valeur à 0 et choisissez le port **B**.
2. Dans **répéter toujours**, sous le bloc moteur, ajoutez **aller à la position relative … à … % vitesse** avec le port **B**.
3. Dans son emplacement de position, déposez **… × …**, avec l'**axe X** du joystick à gauche et `0.9` à droite. Cela transforme −100…100 en −90…90 degrés.
4. Réglez la vitesse sur 100.

```text
lorsque le programme commence
définir la position relative 0  (Hub 1, port B)
répéter toujours
    démarrer le moteur à (joystick JOY1 axe Y) % vitesse  (Hub 1, port A)
    aller à la position relative (joystick JOY1 axe X × 0.9) à 100 % vitesse  (Hub 1, port B)
```

Avant chaque **Lancer**, remettez les roues droites à la main : cette position devient le centre. Si les roues tournent trop, utilisez un nombre plus petit que 0.9 ; si elles tournent dans le mauvais sens, utilisez −0.9.

### Option : étalonner la direction automatiquement {#calibrate-rack}

Si la direction a des butées, [étalonner la crémaillère … centre … degrés …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) trouve le centre et la course à votre place. Créez d'abord deux variables (**Variables** → **Créer une variable**), par exemple `centre` et `course`, et déposez-les dans les emplacements du bloc. Le bloc tourne la crémaillère jusqu'aux deux butées, s'arrête au milieu et écrit les résultats dans les variables ; le script continue une fois l'étalonnage terminé.

```text
lorsque le programme commence
étalonner la crémaillère (centre) centre (course) degrés  (Hub 1, port B)
définir la position relative 0  (Hub 1, port B)
répéter toujours
    démarrer le moteur à (joystick JOY1 axe Y) % vitesse  (Hub 1, port A)
    aller à la position relative ((course × joystick JOY1 axe X) ÷ 100) à 100 % vitesse  (Hub 1, port B)
```

**définir la position relative 0** juste après l'étalonnage fait du milieu le zéro : le stick poussé à fond tourne alors les roues de toute la course mesurée.

## 6. Phares sur un bouton {#lights}

Liens rapides dispose d'un bloc Bascule tout prêt. En Blocs logiques, une [variable](/docs/Application/BlockBuilder/Blocks/Variables) mémorise si les phares sont allumés.

1. Dans **Variables**, touchez **Créer une variable** et nommez-la `phares`.
2. Ajoutez [définir … à …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) au début du script principal : `définir (phares) à 0`.
3. Depuis **Contrôleurs à l'écran**, faites glisser [lorsque le bouton … est pressé](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) sur un espace vide et choisissez **BTN1**.
4. En dessous, ajoutez [si … alors … autre](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) avec la condition [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal) : `(phares) = 0`.
5. Dans la première branche, ajoutez [allumer à … % luminosité](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) et `définir (phares) à 1`. Dans la seconde, ajoutez [éteindre](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) et `définir (phares) à 0`.

```text
lorsque le bouton BTN1 est pressé
    si (phares) = 0 alors
        allumer à 100 % luminosité  (Hub 1, port C)
        définir (phares) à 1
    autre
        éteindre  (Hub 1, port C)
        définir (phares) à 0
```

Avec un **Interrupteur** à la place du bouton, c'est encore plus simple : *lorsque l'interrupteur … est activé / désactivé* ; voir les [exemples](/docs/Application/BlockBuilder/Examples).

## 7. Lancez et observez le Moniteur {#monitor}

Quand quelque chose ne fonctionne pas comme prévu, regardez les valeurs. Le [Moniteur](/docs/Application/BlockBuilder/Editor#monitor) (dans la barre supérieure sur un ordinateur, dans **Plus** sur un téléphone ou une tablette) affiche toutes les variables pendant l'exécution du programme.

1. Créez une variable `gaz`.
2. Dans la boucle, enregistrez-y la valeur du joystick et utilisez la variable comme vitesse du moteur :

```text
répéter toujours
    définir (gaz) à (joystick JOY1 axe Y)
    démarrer le moteur à (gaz) % vitesse  (Hub 1, port A)
    aller à la position relative (joystick JOY1 axe X × 0.9) à 100 % vitesse  (Hub 1, port B)
```

3. Appuyez sur **Lancer** et ouvrez **Moniteur**. Bougez le joystick et appuyez sur BTN1 : `gaz` suit le stick, et `phares` passe de 0 à 1 et inversement.

<Screenshot name="blocks-monitor" alt="Le Moniteur affichant des variables et une liste pendant l'exécution du programme" width={900} />

- `gaz` change mais le moteur ne tourne pas : vérifiez la connexion du hub dans **Mes hubs** et le port dans le bloc.
- `gaz` reste à 0 : vérifiez que le bloc lit bien **JOY1** et le bon axe.

En Blocs logiques, le programme reste modifiable pendant son exécution : vous pouvez changer un nombre et voir l'effet immédiatement. Voici le programme complet :

<Screenshot name="tutorial-car-blocks-program" alt="Le programme terminé de la voiture : le script principal avec la boucle répéter toujours et le script des phares sur BTN1" width={900} />

Plus d'aide : [Dépannage](/docs/Help/Troubleshooting).

## 8. Facultatif : clignotants avec son {#turn-signals}

Ajoutez la [commande spéciale](/docs/Application/Dashboard/SpecialControls#turn-signals) **Clignotants** (**STALK1**) au tableau de bord et branchez une lumière sur le **port D**. Poussez le commodo vers le haut pour le clignotant gauche et vers le bas pour le droit.

```text
quand clignotants STALK1 clignotant gauche s'allume
    son Clignotant jouer
    répéter tant que pas (clignotants STALK1 clignotant gauche est allumé ?)
        allumer à 100 % luminosité  (Hub 1, port D)
        attendre 0.5 secondes
        éteindre  (Hub 1, port D)
        attendre 0.5 secondes
    arrêter le son Clignotant
```

Les blocs : [quand clignotants …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) et [clignotants … est allumé ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) dans **Contrôleurs à l'écran** ; [son … jouer](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) et [arrêter le son …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) dans **Sons** ; [répéter tant que …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) et [attendre … secondes](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) dans **Contrôle** ; [pas …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) dans **Opérateur**.

Le son **Clignotant** se répète tout seul jusqu'à ce que vous l'arrêtiez. Il est joué sur votre téléphone, votre tablette ou votre ordinateur.

Dupliquez le script (appui long ou clic droit → **Dupliquer**) et choisissez **clignotant droit** dans les deux blocs. Les deux clignotants font alors clignoter la même lumière sur le port D ; pour avoir des feux gauche et droit séparés, il vous faut deux ports libres, par exemple sur un second hub.

## Liens rapides ou Blocs logiques : que choisir ? {#which-to-choose}

| | Liens rapides | Blocs logiques |
|---|---|---|
| Cette voiture | 3 lignes | 2 scripts, 2 variables |
| Démarrage progressif, zone morte, limite | blocs tout prêts | multiplier et calculer soi-même |
| Direction par servo | bloc Servo avec étalonnage Auto | blocs de position relative ou étalonnage de la crémaillère |
| Phares sur un bouton | bloc Bascule | une variable et *si … alors … autre* |
| Sons, séquences, conditions | non | oui |
| Valeurs en direct | sur chaque jonction d'une ligne | le Moniteur et les moniteurs du tableau de bord |
| Modification pendant l'exécution | non | oui |

Choisissez **Liens rapides** quand chaque commande se contente de faire bouger quelque chose : voitures, camions, trains, grues. Choisissez **Blocs logiques** quand il vous faut de la logique : sons, séquences de clignotement, enchaînements, réactions aux capteurs, jeux. Le type de programme ne peut pas être changé, mais vous pouvez créer un second profil pour le même modèle. Pour en savoir plus, voir [Créer un profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Et ensuite ? {#next-steps}

- Affichez la batterie sur un **Moniteur** du tableau de bord et soyez averti quand elle faiblit : [Exemples](/docs/Application/BlockBuilder/Examples#battery-warning).
- Pilotez avec une manette : [Blocs de manette](/docs/Application/BlockBuilder/Blocks/Gamepad) et l'[exemple avec manette](/docs/Application/BlockBuilder/Examples#gamepad).
- Rendez la conduite réaliste avec des pédales, une boîte de vitesses et de l'inertie : [Simulateur](/docs/Application/BlockBuilder/Blocks/Simulator).
- Apprenez à utiliser l'éditeur : [Travailler dans l'éditeur](/docs/Application/BlockBuilder/Editor).
