---
id: FirmwareUpdating
title: Mise à jour du firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mise à jour du firmware

MOCPilot peut mettre à jour le firmware des hubs LEGO® Powered Up pris en charge lorsqu’une version compatible plus récente est disponible.

Certains hubs ont besoin d’une mise à jour avant de fonctionner correctement avec MOCPilot : un firmware plus récent corrige des bugs du hub et ajoute les fonctions dont l’application a besoin.

## Hubs pris en charge {#supported-hubs}

MOCPilot peut mettre à jour ces hubs :

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Avant de commencer {#before-you-start}

Vérifiez que le hub et votre téléphone, tablette ou ordinateur ont suffisamment de batterie.

Laissez le hub allumé pendant toute la mise à jour et gardez votre appareil près de lui pour que la connexion Bluetooth reste stable. Ne fermez pas MOCPilot, ne désactivez pas le Bluetooth et n’éteignez pas le hub pendant le transfert du firmware.

:::warning Important
Une mise à jour interrompue peut laisser le hub avec un firmware incomplet. Il faudra alors peut-être récupérer le firmware avant de pouvoir réutiliser le hub.
:::

## Lancer la mise à jour {#starting-the-update}

Lorsque vous connectez un hub, MOCPilot vérifie la version de son firmware. Si une version plus récente est requise, l’application affiche la boîte de dialogue **Mise à jour du firmware requise**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Boîte de dialogue Mise à jour du firmware requise" />

Sélectionnez **Mettre à jour** pour lancer la mise à jour du firmware immédiatement.

Pour la faire plus tard, sélectionnez **Annuler**. Vous pouvez lancer la mise à jour depuis le menu du hub à tout moment.

## Mettre à jour plus tard depuis le menu du hub {#updating-later-from-the-hub-menu}

Pour lancer la mise à jour vous-même :

1. Ouvrez **Mes hubs Bluetooth**.
2. Repérez le hub à mettre à jour.
3. Ouvrez le menu du hub.
4. Sélectionnez **Mettre à jour le firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Action Mettre à jour le firmware dans le menu contextuel du hub" />

## Pendant la mise à jour du firmware {#during-the-firmware-update}

MOCPilot transfère le firmware vers le hub et affiche la progression.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Écran de progression de la mise à jour du firmware" />

Attendez la fin du transfert. Le hub peut redémarrer ou se déconnecter un instant pendant l’application du nouveau firmware.

MOCPilot recherche ensuite à nouveau le hub. Gardez le hub à proximité et attendez que l’application se reconnecte.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware transféré, recherche du hub en cours" />

## Terminer la mise à jour {#finishing-the-update}

Une fois la mise à jour terminée, MOCPilot affiche une confirmation.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Boîte de dialogue de fin de mise à jour du firmware" />

Sélectionnez **OK**. Le hub se reconnecte et sa carte affiche la nouvelle version du firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Carte du hub affichant la version mise à jour du firmware" />

Vous pouvez maintenant continuer à utiliser le hub avec MOCPilot.

## En cas d’échec de la mise à jour {#if-the-update-fails}

Si la mise à jour échoue, MOCPilot affiche un message d’erreur.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Boîte de dialogue d’échec de la mise à jour du firmware" />

Commencez par éteindre puis rallumer le hub, et relancez la mise à jour :

1. Éteignez le hub.
2. Rallumez-le.
3. Gardez le hub près de votre appareil.
4. Connectez-vous au hub dans MOCPilot.
5. Relancez la mise à jour du firmware.

Si le hub ne répond toujours pas normalement, il a peut-être besoin d’une récupération du firmware : voir [Récupération du firmware du hub](/docs/Application/Hubs/RecoveryHubFirmware/).
