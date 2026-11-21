---
id: CreateProfile
title: Créer un profil
description: "Créez un profil et choisissez entre les éditeurs de programme Blocs logiques et Liens rapides."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Créer un profil {#create-a-profile}

1. Allez dans **Mes profils**.
   - Téléphone : touchez **+** → **Nouveau profil**.
   - Tablette : **Nouveau profil** dans l'en-tête.
   - Ordinateur : **Fichier → Nouveau profil** (⌘N / Ctrl+N).
2. Choisissez le **type de programme** (voir ci-dessous).
3. Renseignez les informations du profil.
4. Touchez **Créer**. Le profil s'ouvre dans l'éditeur.

<Screenshot name="create-profile-tiles" alt="Page Nouveau profil" width={900} />

## Choisir le type de programme {#choose-the-program-type}

Le type de programme détermine l'éditeur utilisé par le profil. **Vous ne pourrez plus le changer ensuite.** Pour essayer l'autre éditeur, créez un second profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Liens rapides" style={{width: '100%', maxWidth: 320}} />
    <h3>Liens rapides</h3>
    <p><em>Un schéma simplifié, comme dans Controlz.</em> Reliez les commandes du tableau de bord aux moteurs et aux lumières des hubs, ligne par ligne : entrée, traitement, opération, hub. Prêt en quelques minutes.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Blocs logiques" style={{width: '100%', maxWidth: 320}} />
    <h3>Blocs logiques</h3>
    <p><em>Robotique, algorithmes et scénarios avancés.</em> Programmez le modèle avec des blocs : événements, boucles, conditions, variables et données de capteurs. Pour les robots et l'automatisation.</p>
  </div>
</div>

| | Liens rapides | Blocs logiques |
|---|---|---|
| Comment on construit | Lignes : entrée → traitement → opération → hub | Blocs emboîtés en scripts |
| Temps d'apprentissage | Quelques minutes | Plus long ; plus de possibilités |
| Idéal pour | Voitures, camions, trains, grues : « cette commande fait bouger ce moteur » | Robots, séquences automatiques, logique de capteurs, jeux |
| Logique (si, boucles, variables) | Non (seulement seuils et bascules) | Oui |
| Capteurs | Capteurs des hubs comme entrées ; valeurs vers des indicateurs | Tous les capteurs des hubs et du téléphone, n'importe quel calcul |
| Démarrage progressif, limites, zone morte | Blocs tout prêts | Construits avec des blocs |
| Direction par servo avec étalonnage | Bloc tout prêt | Blocs |
| Manette de jeu | Oui | Oui |
| Plusieurs hubs | Oui | Oui |

**Vous hésitez ?** Commencez par Liens rapides. Si vous avez besoin de logique plus tard, créez un profil Blocs logiques pour le modèle.

Si vous touchez **Créer** sans avoir choisi de type, les vignettes sont mises en évidence. Chaque vignette a un lien **Documentation ↗** vers la partie correspondante de cette documentation.

## Informations du profil {#profile-details}

- **Image** : cliquez sur la zone de l'image (appui long sur un écran tactile) pour choisir une image. Faites glisser l'image vers le haut ou vers le bas pour choisir la partie visible. **Mettre à jour l'image** et **Supprimer** permettent de la changer plus tard.
- **Nom** : obligatoire et unique : « Un profil avec le nom … existe déjà » signifie que vous en avez déjà un portant ce nom.
- **Niveau des blocs** (Blocs logiques uniquement) : **Débutant**, **Avancé** ou **Gourou**. Il détermine les blocs que la palette affiche pour ce profil. Vous pourrez le modifier plus tard dans les Paramètres de l'éditeur. Voir [Travailler dans l'éditeur](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags** : ils décrivent le profil et aident les autres à le trouver. Les hashtags proviennent d'une liste commune, qui se charge lorsque vous êtes en ligne.

Tout, sauf le type de programme, peut être modifié plus tard dans **Modifier le profil**, où vous pouvez aussi ajouter une description et marquer le profil comme **Favori**.

## Et ensuite ? {#next-steps}

1. Ajoutez des hubs : [Ajouter et connecter un hub](/docs/Application/Hubs/ConnectingHubs).
2. Placez des commandes : [Tableau de bord](/docs/Application/Dashboard/DashboardOverview).
3. Écrivez le programme : [Liens rapides](/docs/Application/Links/LinksIntroducing) ou [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Assistant IA
Avec [MocPilot Pro](/docs/Application/Account/Pro), vous pouvez décrire votre modèle par écrit ou à la voix et laisser l'Assistant IA créer les hubs, le tableau de bord et le programme (Blocs logiques ou Liens rapides). Indiquez le hub utilisé, ce qui est branché sur chaque port et ce que chaque élément doit faire. Voir [Comment obtenir un bon résultat](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
