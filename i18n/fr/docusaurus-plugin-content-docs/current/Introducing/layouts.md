---
id: Layouts
title: Téléphone, tablette et ordinateur
description: "Où se trouve chaque élément dans les interfaces téléphone, tablette et ordinateur de MOCPilot, ainsi que les menus et raccourcis clavier sur ordinateur."
---

import Screenshot from '@site/src/components/Screenshot';

# Téléphone, tablette et ordinateur {#phone-tablet-and-desktop}

MOCPilot propose trois interfaces, et l'application choisit automatiquement la bonne :

- **Téléphone** : iPhone et téléphones Android.
- **Tablette** : iPad et tablettes Android (à partir de 7 pouces).
- **Ordinateur** : Mac et Windows. L'[éditeur web](/docs/Introducing/WebEditor) dans un navigateur utilise lui aussi l'éditeur de l'interface ordinateur.

Les profils, les éditeurs et le tableau de bord sont les mêmes partout ; seule la navigation change.

## Téléphone {#phone}

<Screenshot name="profiles-phone" alt="Page Mes profils sur un téléphone avec la barre du bas" width={360} />

- La **barre du bas** contient **Profils**, **Paramètres** et **Aide**, ainsi que **Notifications** lorsque vous êtes connecté.
- **Compte** se trouve en haut des **Paramètres**.
- L'en-tête de **Mes profils** contient **Trier et filtrer**, **Connecter une télécommande** (l'icône de télécommande), **+** (Nouveau profil, Importer un profil…, Rechercher en ligne) et le champ de recherche.
- Les écrans principaux s'affichent en portrait. Quand vous ouvrez un profil, l'application passe en **paysage, en plein écran**, pour que l'éditeur et le tableau de bord disposent de tout l'écran. Fermer le profil rétablit le mode portrait.
- Dans l'éditeur, **Accueil** se trouve à gauche de la barre supérieure. À droite se trouvent **Annuler** et **Rétablir**, **Tableau de bord**, **Mes hubs** (avec le nombre de hubs connectés), **Problèmes** (Liens rapides), **Contrôle à distance**, **Plus** (⋯) et **Lancer / Arrêter**. **Plus** contient l'**Assistant IA**, le [**Sac à dos**](/docs/Application/BlockBuilder/Backpack) et le **Moniteur** (Blocs logiques), la **Manette de jeu** et les **Paramètres de l'éditeur**. Sur un écran étroit, Tableau de bord et Mes hubs passent eux aussi dans **Plus**, pour que les boutons gardent une taille adaptée aux doigts.

<Screenshot name="editor-phone" alt="Éditeur de profil sur un téléphone avec sa barre supérieure" width={900} />

## Tablette {#tablet}

<Screenshot name="profiles-tablet" alt="Page Mes profils sur une tablette avec la barre latérale" width={900} />

- La **barre latérale** à gauche contient **Profils**, **Catalogue de profils**, **Notifications**, **Paramètres** et **Aide**. En dessous se trouvent la carte **MocPilot Pro** et votre compte (**Se connecter** en mode invité). Vous pouvez réduire la barre latérale à ses icônes.
- L'en-tête de **Mes profils** contient **Nouveau profil** (son menu propose aussi Importer un profil…, Connecter une télécommande et Rechercher en ligne), **Trier et filtrer**, **Filtrer par hashtags**, **Connecter une télécommande** et le champ de recherche.
- Touchez la carte d'un profil pour le sélectionner : la barre du bas affiche **Partager**, **Modifier**, **Ajouter aux favoris** et **Lancer**. Touchez deux fois une carte pour lancer le profil. Un appui long sur une carte ouvre son menu, qui contient aussi **Supprimer le profil**.
- Sur les écrans larges, Paramètres et Aide s'ouvrent à côté de la liste.
- Un profil s'ouvre en paysage, et l'éditeur a la même barre supérieure que sur un téléphone.

## Ordinateur (Mac et Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Mes profils sur un ordinateur" width={900} />

- À droite de la barre supérieure : **Compte** (**Se connecter** en mode invité), **Notifications** (lorsque vous êtes connecté), **Connecter une télécommande** (l'icône de télécommande) et **Paramètres** (la roue dentée).
- Paramètres, Aide, Compte, Nouveau profil, Modifier le profil, le Catalogue de profils et les autres pages s'ouvrent dans des **fenêtres** au-dessus de la liste des profils.
- Cliquez sur la carte d'un profil pour voir ce que vous pouvez en faire (**Partager…**, **Modifier…**, **Ajouter aux favoris**, **Lancer**) ; un double-clic le lance. Un clic droit sur une carte ouvre son menu, qui contient aussi **Supprimer le profil**.
- Dans l'éditeur, le **Tableau de bord** s'ouvre dans **sa propre fenêtre**, ce qui vous permet de voir le programme et le tableau de bord côte à côte.

### La barre supérieure de l'éditeur {#editor-top-bar}

- **À gauche** : **Accueil** (ferme le profil), les menus **Fichier**, **Édition**, **Affichage** et **Programme**, puis **Annuler** et **Rétablir**.
- **Au milieu** : le nom du profil et les boutons des autres sections du profil : **Tableau de bord**, **Hubs** (avec le nombre de hubs connectés) et **Manette de jeu**. La page sur laquelle vous êtes n'a pas de bouton à elle.
- **À droite** : les panneaux latéraux **Assistant IA**, [**Sac à dos**](/docs/Application/BlockBuilder/Backpack) et **Moniteur** (les deux derniers uniquement en Blocs logiques), **Plus** (⋯), puis l'état des lignes en Liens rapides (**Toutes les lignes sont prêtes** ou **Problèmes : N**), **Contrôle à distance** et le bouton orange **Lancer** (**Arrêter** pendant l'exécution du programme).

**Plus** contient toujours **Paramètres de l'éditeur…**. Quand la fenêtre devient étroite, la barre se replie étape par étape au lieu de comprimer les boutons : le nom du profil se masque d'abord, puis **Moniteur**, **Sac à dos** et l'**Assistant IA** passent dans **Plus**, ensuite **Lancer** ne garde que son icône (et l'état de Liens rapides seulement son icône et le nombre), et enfin **Manette de jeu**, **Tableau de bord** et **Hubs** passent eux aussi dans **Plus**. Si un panneau latéral qui se trouve dans **Plus** est ouvert, le bouton **Plus** est teinté.

La barre supérieure du Tableau de bord est construite de la même façon : **Accueil**, **Fichier**, **Édition** et **Affichage**, **Annuler** et **Rétablir** à gauche ; le nom du profil et **Blocs** (ou **Liens**) pour revenir au programme au milieu ; **Sélectionner**, **Paramètres du tableau de bord** et **+ Contrôleur** à droite. Voir [Éditeur du tableau de bord](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Menus {#menus}

Sous Windows, les menus se trouvent à gauche de la barre supérieure de l'application. Sur Mac, ils sont dans la barre des menus du système, en haut de l'écran.

| Menu | Windows | Mac |
|---|---|---|
| **MOCPilot** (menu de l'application) | — | À propos de MOCPilot, Paramètres…, Quitter |
| **Fichier** | Nouveau profil, Importer un profil…, Rechercher en ligne, Quitter | Nouveau profil, Importer un profil…, Rechercher en ligne, Connecter une télécommande… |
| **Affichage** | Plein écran | Plein écran / Quitter le plein écran |
| **Fenêtre** | Réduire, Agrandir / Restaurer | Réduire |
| **Aide** | Aide MOCPilot, Poser une question, Signaler un bug, À propos de MOCPilot | Aide MOCPilot, Poser une question, Signaler un bug |

Quand un profil est ouvert, l'éditeur a ses propres menus **Fichier**, **Édition**, **Affichage** et **Programme** (voir [Menus sur ordinateur](/docs/Application/BlockBuilder/Editor#desktop-menus)), et la fenêtre du Tableau de bord a **Fichier**, **Édition** et **Affichage** (voir [Tableau de bord](/docs/Application/Dashboard/DashboardOverview)).

### Raccourcis clavier {#keyboard-shortcuts}

Sur Mac, ⌘ (Commande) fait ce que fait Ctrl sous Windows ; ⇧ correspond à Maj et ⌃ à Contrôle.

**Partout**

| Action | Windows | Mac |
|---|---|---|
| Paramètres | Ctrl+2 | ⌘, |
| Passer en plein écran / quitter le plein écran | F11 ou Alt+Entrée | ⌃⌘F |
| Réduire la fenêtre | — | ⌘M |
| Quitter | Alt+F4 | ⌘Q |

**Mes profils** (aucun profil ouvert)

| Action | Windows | Mac |
|---|---|---|
| Nouveau profil | Ctrl+N | ⌘N |
| Importer un profil | Ctrl+O | ⌘O |
| Rechercher des profils | Ctrl+F | — |
| Profils / Paramètres / Aide / Compte | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Éditeur de profil**

| Action | Windows | Mac |
|---|---|---|
| Fermer le profil | Ctrl+W | ⌘W |
| Lancer / Arrêter | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Annuler / Rétablir | Ctrl+Z / Ctrl+Maj+Z ou Ctrl+Y | ⌘Z / ⇧⌘Z |
| Afficher le tableau de bord | Ctrl+2 | ⌘2 |
| Mes hubs | Ctrl+Maj+H | ⇧⌘H |
| Assistant IA | Ctrl+Maj+I | ⇧⌘I |
| Afficher / masquer la palette de blocs (Blocs logiques) | Ctrl+P | ⌘P |
| Rechercher dans la palette de blocs (Blocs logiques) | Ctrl+F | ⌘F |
| Moniteur (Blocs logiques) | Ctrl+Maj+M | ⇧⌘M |
| [Sac à dos](/docs/Application/BlockBuilder/Backpack) (Blocs logiques) | Ctrl+Maj+B | ⇧⌘B |
| Zoom avant / arrière / taille réelle (Blocs logiques) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Tableau de bord**

| Action | Windows | Mac |
|---|---|---|
| Annuler / Rétablir | Ctrl+Z / Ctrl+Maj+Z ou Ctrl+Y | ⌘Z / ⇧⌘Z |
| Revenir au programme (quand le tableau de bord est dans la fenêtre principale) | Ctrl+1 | ⌘1 |
| Fermer la fenêtre du Tableau de bord | — | ⌘W |
| Quitter le mode **Sélectionner** ou fermer le panneau des propriétés | Échap | Échap |
| Supprimer la commande (panneau des propriétés ouvert) | Suppr ou Retour arrière | Suppr ou Retour arrière |
| Dupliquer la commande (panneau des propriétés ouvert) | Ctrl+D | ⌘D |

Sur une tablette avec clavier, Ctrl+B (⌘B sur iPad) affiche ou masque la barre latérale.

## L'éditeur de profil dans chaque interface {#the-profile-editor-on-every-layout}

L'éditeur n'a pas d'onglets. Le **programme** (lignes Liens rapides ou Blocs logiques) occupe l'écran, et les boutons de la barre supérieure ouvrent tout le reste. Certains se trouvent dans **Plus** (⋯) : sur téléphone ou tablette, l'Assistant IA, le Sac à dos, le Moniteur, la Manette de jeu et les Paramètres de l'éditeur ; sur ordinateur, les Paramètres de l'éditeur et tout ce qui ne tient pas dans une fenêtre étroite :

| Bouton | Ouvre |
|---|---|
| **Mes hubs** (**Hubs** sur un ordinateur) | les [emplacements de hub](/docs/Application/Hubs/ConnectingHubs) du profil |
| **Tableau de bord** | le [tableau de bord](/docs/Application/Dashboard/DashboardOverview) |
| **Manette de jeu** | les [réglages de la manette](/docs/Application/Dashboard/Gamepad) |
| **Moniteur** | les valeurs des variables et des listes (Blocs logiques uniquement) |
| **Sac à dos** | les piles de blocs enregistrées pour être réutilisées dans n'importe quel profil (Blocs logiques uniquement) ; voir [Sac à dos](/docs/Application/BlockBuilder/Backpack) |
| **Paramètres de l'éditeur** | les [options de l'éditeur](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **Assistant IA** | l'[Assistant IA](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problèmes** | les lignes qui ne peuvent pas s'exécuter (Liens rapides uniquement) |
| **Contrôle à distance** | exécuter le profil sur un autre appareil et le piloter d'ici (MocPilot Pro) ; voir [Contrôle à distance](/docs/Application/Profiles/RemoteControl) |
| **Lancer / Arrêter** | démarre et arrête le programme (sur un ordinateur, le bouton orange **Lancer** à l'extrémité droite) |
