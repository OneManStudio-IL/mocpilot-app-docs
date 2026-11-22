---
id: SpecialControls
title: Commandes spéciales
description: "Volant, pédales, levier de vitesses, frein à main, clignotants et manipulateur de train : comment les utiliser, leurs réglages, apparences, valeurs et blocs."
---

import Screenshot from '@site/src/components/Screenshot';

# Commandes spéciales {#special-controls}

Les commandes spéciales ressemblent aux vraies et fonctionnent comme elles : un volant, des pédales, un levier de vitesses, un frein à main, un commodo de clignotants et un manipulateur de locomotive. Chacune est un produit à part : achetez celles dont vous avez besoin ou obtenez-les toutes avec [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Un tableau de bord avec un volant, des pédales, un levier de vitesses, un frein à main, des clignotants et un manipulateur de train" width={900} />

| Commande | Produit | Nom sur le tableau de bord | Ce qu'elle transmet au programme |
|---|---|---|---|
| [Volant](#steering-wheel) | Volant | STWHEEL | angle de braquage, klaxon |
| [Pédales](#pedals) | Pédales | PDLS | accélérateur et frein |
| [Boîte manuelle](#gear-shifter) | Levier de vitesses | GEAR | rapport : R, N, 1…6 |
| [Boîte automatique](#gear-shifter) | Levier de vitesses | GEARA | sélecteur : P, R, N, D |
| [Frein à main](#handbrake) | Frein à main | HBRK | force, serré |
| [Clignotants](#turn-signals) | Clignotants | STALK | clignotant gauche, clignotant droit, lumière |
| [Manipulateur de train](#train-controller) | Manipulateur de train | TRTHR | cran de puissance, sens, traction |

Le **Bouton rotatif** n'est pas un produit à part : il est fourni avec chaque thème payant. Voir [Types de commandes](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Ajouter une commande spéciale {#add-a-special-control}

1. Ouvrez le tableau de bord et touchez **+** (**Ajouter un contrôleur** ; sur un ordinateur, **+ Contrôleur**).
2. Dans la liste des types de commandes, faites défiler jusqu'à **Véhicule et spéciaux** et sélectionnez une commande.
3. Le bandeau des apparences affiche toutes ses apparences. Choisissez-en une, puis réglez la commande dans **Configurer**.
4. Touchez **Ajouter au tableau de bord**. Pour une commande que vous ne possédez pas encore, touchez **Acheter** ou **Tout avec MocPilot Pro**.

<Screenshot name="special-control-looks" alt="La palette Ajouter un contrôleur avec le volant sélectionné et ses apparences dans le bandeau" width={900} />

## Apparences {#looks}

Chaque commande spéciale existe dans de nombreuses **apparences**. La plupart correspondent à un thème payant (Course, Aura, Classique, Hologramme, etc.) : le volant, le levier de vitesses et le frein à main peuvent ainsi s'accorder avec le reste de votre tableau de bord. Vous pouvez changer d'apparence à tout moment : sélectionnez la commande et choisissez-en une autre dans **Apparence**, dans l'onglet **Style**. L'apparence ne change que l'image : les valeurs, les blocs et le programme restent les mêmes.

Certaines apparences règlent aussi la couleur d'accent qui leur convient quand vous les choisissez.

## Réglages communs à toutes les commandes spéciales {#settings-of-all-special-controls}

- **Apparence** (onglet Style) : voir ci-dessus.
- **Couleur d'accent** (onglet Style) : levier de vitesses, frein à main, clignotants et manipulateur de train.
- **Verrouiller le contrôleur** et **Interactivité** (onglet Paramètres), comme pour toutes les commandes. Voir [Propriétés des commandes](/docs/Application/Dashboard/ControlProperties).

## Volant {#steering-wheel}

Posez un doigt sur le volant et faites-le tourner autour de son centre. Quand vous le lâchez, il revient au centre. Appuyez au centre du volant pour klaxonner : cela ne fait pas tourner le volant.

**Réglages**

- **Angle du volant** (20–120°, 60° par défaut) : de combien vous devez tourner le volant pour braquer à fond. Cela ne change pas les valeurs que reçoit le programme.
- **Effets sonores** : le son du klaxon et les sons que le programme joue depuis le volant. Le son de l'application doit être activé.

**Valeurs** : l'angle de braquage, de −100 (à fond à gauche) à 100 (à fond à droite) en passant par 0 ; le klaxon vaut 100 tant que vous appuyez, 0 sinon.

**Apparences** : Véhicule tout-terrain, Camion lourd, Supercar, Bois vintage, Volant de course, Rallye suédine, Tout-terrain utilitaire, Concept lumineux, Poids lourd, Berline familiale, Citadine, Buggy des dunes, 4x4 classique, Machines de construction, Audio Hi-Fi, Aura, Briques, Cœur de circuit, Espace lointain, Convoi lourd, Néo Orbite, Cabine tout-terrain, Course, Rock Crawler, Tactique, Classique, Coucher de soleil, Miami, High-tech, Hologramme.

**Sons** pour le programme : Klaxon de voiture, Klaxon de camion, Klaxon de voiture de sport.

**Liens rapides** : l'entrée [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) avec les canaux **Angle de braquage** et **Klaxon**.

## Pédales {#pedals}

La pédale de frein est à gauche, l'accélérateur à droite. Appuyez sur une pédale avec un doigt : plus votre doigt est haut sur la pédale, plus elle est enfoncée. Près du bas, elle est enfoncée légèrement ; près du haut, à fond. Lâchez-la et la pédale remonte. Vous pouvez appuyer sur les deux pédales à la fois.

**Réglages** : **Effets sonores** : permet au programme de jouer les sons des pédales. Le son de l'application doit être activé.

**Valeurs** : l'accélérateur et le frein, chacun de 0 à 100.

**Apparences** : Véhicule tout-terrain, Camion lourd, Supercar, Chrome vintage, Carbone & rouge, Course percé, Grip tout-terrain, Concept lumineux, Poids lourd, Berline familiale, Citadine, Buggy des dunes, 4x4 classique, Machines de construction, Audio Hi-Fi, Aura, Briques, Cœur de circuit, Espace lointain, Convoi lourd, Néo Orbite, Cabine tout-terrain, Course, Rock Crawler, Tactique, Classique, Coucher de soleil, Miami, High-tech, Hologramme.

**Sons** pour le programme : Frein de voiture, Frein de voiture de sport, Frein à air de camion, Bip de recul.

**Liens rapides** : l'entrée [Pédales](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) avec les canaux **Pédale d'accélérateur** et **Pédale de frein**.

:::tip Des pédales seules ne font pas une voiture
Les pédales indiquent seulement à quel point chacune est enfoncée. Si une ligne envoie l'accélérateur directement à un moteur, le moteur tourne exactement autant que la pédale est enfoncée. Pour obtenir un modèle qui accélère progressivement, roule en roue libre, freine et recule, utilisez le [simulateur de véhicule](#vehicle-simulator).
:::

## Levier de vitesses {#gear-shifter}

Le produit **Levier de vitesses** comprend deux commandes : une **Boîte manuelle** et une **Boîte automatique**.

### Boîte manuelle {#manual-gearbox}

Une grille en H avec la marche arrière et jusqu'à six rapports avant. Faites glisser le pommeau le long de la rangée du milieu, puis vers le haut ou vers le bas dans un rapport. Quand vous le lâchez, le pommeau s'enclenche dans le rapport le plus proche ou revient au point mort.

- **Nombre de rapports** (2–6, 6 par défaut, onglet Paramètres) : la grille change en conséquence. La marche arrière est toujours dans la colonne la plus à gauche, le point mort au milieu.
- **Valeurs** : −1 = marche arrière (R), 0 = point mort (N), 1…6 = rapports avant.

### Boîte automatique {#automatic-gearbox}

Un sélecteur à quatre positions : **P** (parking), **R** (marche arrière), **N** (point mort) et **D** (marche avant). Son maniement dépend de l'apparence :

| Sélecteur | Utilisation | Apparences |
|---|---|---|
| Levier | faites glisser la poignée le long de la fente ; elle s'arrête sur la position la plus proche | High-tech |
| Molette | tournez la molette avec un doigt ; elle s'enclenche sur P, R, N ou D | Classique, Espace lointain, Tactique, Machines de construction, Audio Hi-Fi, Aura, Cœur de circuit, Rock Crawler, Cabine tout-terrain, Néo Orbite, Tout-terrain, Bête de somme, Concept, Berline, Citadine, 4x4 classique |
| Boutons | touchez P, R, N ou D | Course, Convoi lourd, Briques, Camion lourd, Rétro, Rallye, Supercar, Formule, Long-courrier, Buggy, Coucher de soleil, Miami, Hologramme |

- **Nombre de rapports** (2–8, 6 par défaut, onglet Paramètres) : le nombre de rapports que le [simulateur de véhicule](#vehicle-simulator) passe en D. Quand le simulateur choisit un rapport, le sélecteur l'affiche, par exemple **D3**.
- **Valeurs** : −2 = P, −1 = R, 0 = N, 1 = D. Les trois sélecteurs donnent les mêmes valeurs : le programme fonctionne avec n'importe quelle apparence.

Les deux boîtes ont les mêmes apparences : Classique, Course, Espace lointain, Tactique, Convoi lourd, Machines de construction, Audio Hi-Fi, Aura, Cœur de circuit, Rock Crawler, Cabine tout-terrain, Briques, Néo Orbite, Camion lourd, Rétro, Rallye, Tout-terrain, Supercar, Formule, Bête de somme, Concept, Long-courrier, Berline, Citadine, Buggy, Coucher de soleil, 4x4 classique, Miami, High-tech, Hologramme.

**Liens rapides** : l'entrée [Levier de vitesses](/docs/Application/Links/Blocks/InputBlocks#controller-gear) avec les canaux **Rapport** (manuelle : le rapport rapporté au nombre de rapports, marche arrière négative ; automatique : le sens) et **Sens (R − / avant +)** : −1 en marche arrière, 0 au point mort et en parking, +1 sur n'importe quel rapport avant.

## Frein à main {#handbrake}

Un levier de frein à main. Saisissez le levier par sa poignée et tirez-le vers le bas. La force de freinage suit la distance sur laquelle vous tirez. Lâchez-le et le levier revient en place.

Pour le **serrer**, tirez le levier jusqu'au bout, puis faites glisser votre doigt le long du levier vers sa base : la poignée descend et le levier reste serré. Pour **desserrer** un levier serré, touchez la commande ou ramenez le levier.

**Valeurs** : la force de 0 à 100, et l'état serré ou non du levier.

**Apparences** : Classique, Rallye, Camion lourd, Rétro, Espace lointain, Tactique, Aura, Convoi lourd, Machines de construction, Audio Hi-Fi, Néo Orbite, Cabine tout-terrain, Course, Briques, Cœur de circuit, Rock Crawler, Tout-terrain, Supercar, Formule, Bête de somme, Concept, Long-courrier, Berline, Citadine, Buggy, Coucher de soleil, 4x4 classique, Miami, High-tech, Hologramme.

**Liens rapides** : l'entrée [Frein à main](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) avec les canaux **Frein à main serré** (activé/désactivé, comme un interrupteur) et **Force du frein à main**.

## Clignotants {#turn-signals}

Un commodo de clignotants avec un interrupteur d'éclairage.

- Poussez le commodo **vers le haut** pour le clignotant gauche et **vers le bas** pour le clignotant droit. Il reste là où vous le laissez ; ramenez-le au milieu pour couper le clignotant.
- **Touchez** le commodo ou le bouton des phares pour allumer ou éteindre la lumière. Cela ne fait pas bouger le commodo.

**Réglages**

- **Icône: left**, **Icône: light**, **Icône: right** (onglet Style) : les icônes des témoins lumineux.
- **Les sorties des clignotants clignotent** (onglet Paramètres, activé par défaut) : les sorties des clignotants clignotent en même temps que le témoin du commodo, si bien qu'une lumière qui leur est reliée clignote toute seule. Quand l'option est désactivée, les sorties restent allumées en continu tant que le clignotant est actif. Les blocs voient toujours l'état continu.

**Valeurs** : clignotant gauche, clignotant droit et lumière, chacun activé ou désactivé.

**Apparences** : Classique, Course, Espace lointain, Tactique, Convoi lourd, Machines de construction, Audio Hi-Fi, Aura, Cœur de circuit, Rock Crawler, Cabine tout-terrain, Briques, Néo Orbite, Camion lourd, Rétro, Rallye, Tout-terrain, Supercar, Formule, Bête de somme, Concept, Long-courrier, Berline, Citadine, Buggy, Coucher de soleil, 4x4 classique, Miami, High-tech, Hologramme.

**Liens rapides** : l'entrée [Clignotants](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) avec les canaux **Clignotants (gauche − / droite +)** (deux lumières de polarité opposée sur un même port), **Clignotant gauche**, **Clignotant droit** et **Lumière**.

## Manipulateur de train {#train-controller}

Un manipulateur de locomotive avec un levier de traction et un inverseur.

- **Levier de traction** : faites glisser le levier vers le haut ou vers le bas. Il a 8 crans de puissance (0–8) et reste sur le cran où vous le laissez.
- **Inverseur** : faites glisser son bouton vers le haut pour la **marche avant** ou vers le bas pour la **marche arrière** ; le milieu correspond au **neutre**. Le bouton saute d'une position à l'autre et ne s'arrête jamais entre deux. Comme dans une vraie cabine, il ne bouge que si le levier de traction est sur 0.

**Valeurs** : le cran de puissance (0–8), l'inverseur (1 = marche avant, 0 = neutre, −1 = marche arrière) et la **traction** : cran ÷ 8 × 100 avec le signe du sens de marche, de −100 à 100. La traction peut piloter directement un moteur de train.

**Apparences** : Original, Machines de construction, Audio Hi-Fi, Aura, Briques, Buggy, Cœur de circuit, Citadine, Classique, Concept, Espace lointain, Tout-terrain, Convoi lourd, 4x4 classique, Camion lourd, Miami, Néo Orbite, Supercar, Bête de somme, Cabine tout-terrain, Course, Rallye, Rock Crawler, Berline, Coucher de soleil, Tactique, Long-courrier, Rétro, Formule, High-tech, Hologramme.

**Liens rapides** : l'entrée [Curseur](/docs/Application/Links/Blocks/InputBlocks#controller-train) ; elle donne la traction.

## Blocs {#blocks}

Chaque commande spéciale ajoute ses propres blocs à la catégorie **Contrôleurs à l'écran** des Blocs logiques :

| Commande | Événements | Valeurs |
|---|---|---|
| Volant | *quand le volant … est tourné / appuyé / relâché* | *volant …*, *le volant … est-il appuyé / relâché ?* |
| Pédales | *quand les pédales … n'importe laquelle / frein / accélérateur est actionnée / appuyée / relâchée* | *pédales … accélérateur / frein*, *la pédale … est-elle appuyée / relâchée ?* |
| Boîtes de vitesses | *quand la boîte de vitesses … change de rapport / monte un rapport / descend un rapport / passe au point mort / en marche arrière / en parking* | *rapport …*, *la boîte de vitesses … est-elle au point mort / en marche arrière / sur un rapport avant / en parking ?*, *rapports de …* |
| Frein à main | *quand le frein à main … est tiré / serré / desserré / relâché* | *force du frein à main …*, *le frein à main … est-il serré / desserré / tiré ?* |
| Clignotants | *quand clignotants … clignotant gauche / clignotant droit / lumière s'allume / s'éteint* | *clignotants … clignotant gauche / clignotant droit / lumière est allumé ?* |
| Manipulateur de train | *quand manipulateur de traction … cran modifié / relevé / abaissé, traction coupée, inverseur déplacé, levier relâché* | *manipulateur de traction … traction / cran de puissance / inverseur*, *le manipulateur de traction … est-il en marche avant / en marche arrière / au neutre / au cran 0 ?* |

Le volant et les pédales disposent aussi du bloc *son … de …* : il choisit l'un de leurs sons pour les blocs **Sons**. Détails : [Contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulateur de véhicule {#vehicle-simulator}

Les commandes spéciales ne fournissent que des valeurs brutes. Le **simulateur de véhicule** transforme les pédales, le levier de vitesses et le frein à main en un modèle qui roule comme une voiture : il accélère avec de l'inertie, roule en roue libre, freine, recule, passe les rapports en D et reste immobile sur le frein à main.

- **Liens rapides** : utilisez l'entrée [Véhicule](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Choisissez les **Pédales**, le **Levier de vitesses** et le **Frein à main** de votre tableau de bord, le **Type de véhicule** (Voiture, Véhicule tout-terrain, Voiture de sport, Camion) et la **Sortie** : **Vitesse**, **Régime moteur (tr/min)**, **Freinage** ou **Sur le frein à main**.
- **Blocs logiques** : quand le tableau de bord comporte des pédales, un levier de vitesses ou un frein à main, la catégorie **Simulateur** apparaît. Créez-y un véhicule (**Créer un véhicule**) et placez le bloc *conduire* sous un événement. Branchez des valeurs dans ses emplacements : *accélérateur*, *frein*, *rapport*, *de* (nombre de rapports ; le bloc *rapports de …* s'y insère), *frein à main* et *serré*. Les autres blocs Simulateur règlent le type de véhicule, l'inertie du moteur et la vitesse de marche arrière, lisent la vitesse, le régime moteur et le rapport, et réagissent quand le véhicule démarre, s'arrête, freine ou change de rapport.

Comment le simulateur conduit :

- L'**accélérateur** fait accélérer le modèle avec de l'inertie ; relâchez-le et le modèle roule en roue libre. Le **frein** le ralentit.
- **Sans boîte de vitesses**, maintenir le frein une fois le modèle arrêté le fait reculer.
- **Boîte manuelle** : R fait reculer, N n'avance pas. En option, chaque rapport limite la vitesse maximale.
- **Boîte automatique** : R fait reculer, N n'avance pas, P immobilise le modèle comme un frein à main serré. En D, le simulateur monte et descend les rapports tout seul et affiche le rapport sur le sélecteur.
- **Frein à main** : sa force s'ajoute au freinage ; un frein à main serré peut immobiliser le modèle.
- **Type de véhicule** : un camion est plus lourd (plus d'inertie) et dispose d'un frein à air ; une voiture de sport réagit vite et recule plus rapidement.

Les dernières pédales, le dernier levier de vitesses ou le dernier frein à main ne peuvent pas être supprimés tant que le programme utilise des blocs Simulateur.
