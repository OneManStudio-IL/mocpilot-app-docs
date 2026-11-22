---
id: FirstCarLinks
title: Votre première voiture RC avec Liens rapides
description: "Pas à pas : construisez une voiture LEGO télécommandée avec propulsion, direction par servo et phares en Liens rapides, sans code."
---

import Screenshot from '@site/src/components/Screenshot';

# Votre première voiture RC avec Liens rapides {#your-first-rc-car-with-quick-links}

Dans ce tutoriel, vous construisez une voiture télécommandée complète en [Liens rapides](/docs/Application/Links/LinksIntroducing) : un joystick fait avancer et tourner la voiture, et un bouton allume et éteint les phares. Comptez environ 15 minutes, sans écrire la moindre ligne de code.

**Ce qu'il vous faut**

- un LEGO® Technic™ Hub (88012) ;
- un moteur de propulsion sur le **port A** ;
- un moteur de direction avec capteur de position (encodeur) sur le **port B**, par exemple un moteur Technic L ou XL ou n'importe quel moteur angulaire Technic. La direction doit avoir des butées : les roues ne peuvent tourner que jusqu'à un certain point à gauche et à droite ;
- des lumières LEGO® sur le **port C** (facultatif) ;
- MOCPilot sur un téléphone, une tablette ou un ordinateur avec Bluetooth.

:::note City Hub
Un City Hub (88009) n'a que deux ports. Branchez le moteur de propulsion sur **A** et le moteur de direction sur **B**, et laissez de côté les lumières, ou ajoutez un second hub pour elles. Tout le reste fonctionne de la même façon.
:::

**Le résultat** : un profil de trois lignes :

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | JOY1, Axe Y | Progressif | Moteur | Technic Hub, port A |
| 2 | JOY1, Axe X | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Bascule | Lumière | Technic Hub, port C |

## 1. Créez le profil {#create-the-profile}

1. Allez dans **Mes profils** et commencez un nouveau profil : sur un téléphone, touchez **+** → **Nouveau profil** ; sur une tablette, touchez **Nouveau profil** dans l'en-tête ; sur un ordinateur, choisissez **Fichier → Nouveau profil**.
2. Choisissez la vignette **Liens rapides**.
3. Saisissez un **Nom**, par exemple « Ma première voiture ». L'image et les hashtags sont facultatifs pour l'instant.
4. Touchez **Créer**. Le profil s'ouvre dans l'éditeur Liens rapides avec une ligne vide.

Le type de programme ne pourra plus être changé ensuite. Pour en savoir plus, voir [Créer un profil](/docs/Application/Profiles/CreateProfile).

## 2. Ajoutez et connectez le hub {#add-the-hub}

1. Dans l'éditeur, touchez **Mes hubs** (**Hubs** dans la barre supérieure sur un ordinateur).
2. Touchez **Ajouter un nouveau hub** dans un emplacement libre, choisissez le Technic Hub dans la liste et touchez **Ajouter**.
3. Allumez le hub et appuyez sur son bouton. MOCPilot le trouve et s'y connecte ; le hub reste dans l'emplacement.
4. Si la fenêtre **Mise à jour du firmware requise** s'affiche, touchez **Mettre à jour** et gardez le hub allumé et à proximité jusqu'à la fin de la mise à jour. Voir [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating).

Astuce : ouvrez le hub connecté pour afficher son [moniteur du hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Il indique quel appareil est branché sur chaque port, ce qui vous permet de vérifier les moteurs avant de construire les lignes.

Pour en savoir plus, voir [Ajouter et connecter un hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Placez les commandes sur le tableau de bord {#dashboard}

1. Ouvrez **Tableau de bord** et touchez **+** (**Ajouter un contrôleur** ; sur un ordinateur, **+ Contrôleur**).
2. Dans le groupe **Manettes**, choisissez **Manette** (le joystick) et touchez **Ajouter au tableau de bord**. Il s'appelle **JOY1**. Laissez **Type d'axes** sur **Les deux axes (X, Y)** : haut et bas serviront à avancer, gauche et droite à tourner.
3. Touchez à nouveau **+**. Dans **Boutons et interrupteurs**, choisissez **Bouton** et touchez **Ajouter au tableau de bord**. Il s'appelle **BTN1**.
4. Faites glisser le joystick sur le côté gauche et le bouton sur le côté droit, là où se trouveront vos pouces. Touchez une commande pour changer sa taille (**S**, **M** ou **L**) ou son apparence.

<Screenshot name="tutorial-car-dashboard" alt="Tableau de bord avec le joystick JOY1 à gauche et le bouton BTN1 à droite" width={900} />

Vous préférez avancer et tourner avec deux pouces différents ? Ajoutez plutôt deux joysticks : **JOY1** avec **Seulement vertical (Y)** et **JOY2** avec **Seulement horizontal (X)**, et utilisez JOY2 dans la ligne de direction.

Pour en savoir plus, voir [Ajouter et disposer des commandes](/docs/Application/Dashboard/ArrangingControls) et [Types de commandes](/docs/Application/Dashboard/ControlTypes).

### Option : volant et pédales {#wheel-and-pedals}

Si vous disposez des [commandes spéciales](/docs/Application/Dashboard/SpecialControls) **Volant** et **Pédales**, vous pouvez les utiliser à la place du joystick. À l'étape 4, construisez la ligne 1 avec l'entrée [Véhicule](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) et **Sortie** réglée sur **Vitesse** (elle accélère et ralentit comme une vraie voiture, Progressif est donc inutile), et la ligne 2 avec l'entrée **Volant** et le canal **Angle de braquage**.

## 4. Construisez les lignes {#rows}

Revenez au programme. La palette du bas a trois onglets : **Entrées**, **Traitement** et **Sorties**. Chaque ligne se lit de gauche à droite : entrée → traitement → opération → hub. Fonctionnement de l'éditeur : [Découvrir Liens rapides](/docs/Application/Links/LinksIntroducing).

### Ligne 1 : propulsion {#row-drive}

1. Dans **Entrées**, faites glisser **JOY1** avec le canal **Axe Y** dans la ligne vide (« Nouvelle ligne : entrée »). Une nouvelle ligne vide apparaît en dessous.
2. Dans **Traitement**, faites glisser **Progressif** après l'entrée. Les valeurs par défaut de 0,5 s pour **Accélération (jusqu'à pleine vitesse)** et **Décélération (jusqu'à l'arrêt)** sont un bon point de départ.
3. Dans **Sorties**, faites glisser **Moteur** après Progressif.
4. Faites glisser la sortie **Technic Hub** après Moteur et touchez la pastille du port **A**.

### Ligne 2 : direction {#row-steering}

1. Faites glisser **JOY1** avec le canal **Axe X** dans la ligne vide suivante.
2. Faites glisser **Servo** depuis **Sorties**.
3. Touchez le bloc Servo et réglez **Étalonnage** sur **Auto**.
4. Faites glisser la sortie **Technic Hub** après Servo et touchez **B**.

En mode **Auto**, à chaque démarrage du programme, le moteur de direction tourne jusqu'aux deux butées ; le milieu devient le centre et la course devient l'angle de braquage. Pour l'essayer tout de suite, touchez **Étalonner maintenant** dans les réglages du Servo pendant que le hub est connecté. Si l'étalonnage échoue, vérifiez le hub, le moteur et que la direction a bien des butées.

<Screenshot name="links-servo-settings" alt="Réglages d'un bloc Servo" width={900} />

Pas de butées ? Utilisez **Manuel** : remettez les roues droites à la main, touchez **Définir comme zéro** et choisissez l'**Angle**. Voir [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Ligne 3 : phares {#row-lights}

1. Faites glisser **BTN1** dans la ligne vide suivante.
2. Faites glisser **Bascule** depuis **Traitement**. Ce bloc transforme le bouton-poussoir en interrupteur : un appui pour allumer, un autre pour éteindre.
3. Faites glisser **Lumière** depuis **Sorties**.
4. Faites glisser la sortie **Technic Hub** après Lumière et touchez **C**.

<Screenshot name="tutorial-car-links-rows" alt="Les trois lignes terminées de la voiture : propulsion, direction et phares" width={900} />

Quand les trois lignes sont prêtes, le bouton **Problèmes** de la barre supérieure (juste avant **Lancer**) affiche une coche verte. Un « ! » rouge indique le nombre de problèmes restants ; touchez-le, puis touchez un problème pour accéder à la ligne concernée. Voir [Exécution et résolution des problèmes](/docs/Application/Links/Problems).

## 5. Lancez et testez {#run}

1. Posez la voiture sur un support ou tenez-la pour que les roues ne touchent pas la table.
2. Appuyez sur **Lancer**. Le moteur de direction s'étalonne : il tourne des deux côtés et revient au milieu.
3. Poussez le joystick vers le haut et vers le bas : la voiture avance et recule, en démarrant et en s'arrêtant en douceur. Bougez-le à gauche et à droite : les roues tournent.
4. Appuyez sur **BTN1** : les phares s'allument. Appuyez de nouveau : ils s'éteignent.
5. Appuyez sur **Arrêter** pour revenir à l'édition.

Pendant l'exécution du programme, chaque jonction entre deux blocs affiche la valeur qui la traverse : vous pouvez ainsi suivre un signal du joystick jusqu'au hub.

<Screenshot name="links-live-values" alt="Un programme Liens rapides en cours d'exécution avec les valeurs en direct sur les jonctions" width={900} />

Pour en savoir plus, voir [Piloter un modèle (Lancer)](/docs/Application/Profiles/PlayMode).

## 6. Affinez les réglages {#tune}

Appuyez d'abord sur **Arrêter** : les lignes ne sont pas modifiables pendant l'exécution du programme.

- **La voiture recule quand vous poussez vers le haut ?** Ajoutez **Inverser** à la ligne 1. Faites de même pour la ligne 2 si les roues tournent dans le mauvais sens.
- **Le moteur bourdonne ou avance tout doucement quand le joystick est relâché ?** Ajoutez **Zone morte** à la ligne 1, avant Progressif. La **Zone** par défaut de 10 % est un bon point de départ.
- **Trop rapide ?** Ajoutez **Limite** à la ligne 1, par exemple avec un **Maximum** de 50 %.
- **Trop mou ?** Touchez Progressif et choisissez une durée plus courte, ou **Instantané**.

Pour une ligne de propulsion, un bon ordre est *Zone morte → Limite → Progressif*. Tous les réglages : [Blocs de traitement](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Facultatif : pilotez avec une manette {#gamepad}

1. Associez une manette de type Xbox ou PlayStation à votre appareil dans les réglages Bluetooth du système.
2. Dans l'éditeur, ouvrez **Manette de jeu** et activez **Activer les blocs de manette**.
3. Dans chaque ligne, faites glisser l'entrée du tableau de bord vers la palette pour la retirer, et faites glisser l'entrée **Manette de jeu** à sa place. Réglez son **Entrée** : **Stick gauche Y** pour la ligne 1, **Stick droit X** pour la ligne 2 et **A** (**Croix** sur PlayStation) pour la ligne 3.

Chaque port ne peut appartenir qu'à une seule ligne : une ligne pilote donc un port soit depuis le tableau de bord, soit depuis la manette. Pour en savoir plus, voir [Manette de jeu](/docs/Application/Dashboard/Gamepad).

## Si rien ne bouge {#if-something-does-not-move}

1. Le hub est-il connecté ? Vérifiez **Mes hubs** et le point de connexion sur le bloc Hub.
2. Les moteurs sont-ils branchés sur les ports choisis dans les lignes ?
3. Le bouton **Problèmes** affiche-t-il une coche verte, et chaque ligne est-elle activée ?
4. Le programme est-il lancé ?
5. Lancez le programme et observez les valeurs en direct : si la valeur change à l'entrée mais que le moteur ne tourne pas, vérifiez le hub et le port.

Un message comme « Port B : cet appareil ne peut pas servir de servo (il faut un moteur avec encodeur) » signifie que le moteur branché sur ce port n'a pas d'encodeur. Autres messages et solutions : [Exécution et résolution des problèmes](/docs/Application/Links/Problems) et [Dépannage](/docs/Help/Troubleshooting).

## 8. Enregistrez et partagez {#save-and-share}

Il n'y a pas de bouton Enregistrer : le profil conserve vos modifications. Lorsque vous êtes connecté, il se [synchronise](/docs/Application/Account/Sync) aussi avec vos autres appareils.

- **Partager sous forme de fichier** : dans **Mes profils**, touchez **Partager** sur la carte du profil (**Partager…** sur un ordinateur). Vous obtenez un fichier `.dat` à envoyer à un ami. Voir [Gérer les profils](/docs/Application/Profiles/ManageProfiles).
- **Publier dans le catalogue** : ouvrez **Modifier le profil** et touchez **Envoyer au catalogue**. Ajoutez d'abord une image, une description et un hashtag. Voir [Catalogue et publication](/docs/Application/Profiles/Catalog).

## Et ensuite ? {#next-steps}

- Surveillez la batterie : ajoutez un **Niveau de la batterie** ou un **Moniteur** de texte au tableau de bord et une ligne *Technic Hub (Batterie) → Indicateur*. Voir [Indicateurs et moniteurs](/docs/Application/Dashboard/Indicators).
- Construisez la même voiture en Blocs logiques : [La même voiture en Blocs logiques](/docs/Tutorials/FirstCarBlocks).
- D'autres recettes : un char, une grue et un train dans les [Exemples](/docs/Application/Links/Examples).
- Donnez un nouveau look au tableau de bord avec les [thèmes](/docs/Application/Themes/ThemesOverview).
