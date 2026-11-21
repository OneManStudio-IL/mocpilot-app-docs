---
id: RecoveryHubFirmware
title: Récupération du firmware du hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Récupération du firmware du hub

La récupération du firmware remet en état un hub qui ne démarre plus normalement après une mise à jour du firmware interrompue ou ratée.

MOCPilot transfère un firmware fonctionnel vers le hub pour qu’il puisse de nouveau fonctionner et être mis à jour. N’utilisez la récupération que si le hub ne répond pas normalement, si MOCPilot indique que le hub est en mode de récupération, ou après l’échec d’une mise à jour.

:::warning Important
Laissez le hub allumé et votre appareil près de lui pendant toute la récupération. Désactiver le Bluetooth, fermer MOCPilot, retirer les piles ou éteindre le hub pendant le transfert peut faire échouer la récupération.
:::

## Quand une récupération est nécessaire {#when-recovery-is-required}

Une récupération peut être nécessaire si :

- Une mise à jour du firmware ne s’est pas terminée correctement.
- Le hub ne se connecte plus comme un hub normal.
- Le hub apparaît sous le nom **LEGO Bootloader** dans MOCPilot.
- MOCPilot détecte que le hub est connecté en mode de récupération du firmware.

Avant de commencer, vérifiez que le hub a suffisamment de batterie, que votre téléphone, tablette ou ordinateur est chargé et que le Bluetooth est activé.

## Hubs pris en charge {#supported-hubs}

La récupération fonctionne avec les mêmes hubs que la mise à jour du firmware :

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

## Mettre un Technic Hub, Boost Hub ou City Hub en mode de récupération {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Ces hubs se connectent via leur bootloader :

1. Éteignez le hub.
2. Appuyez sur le bouton vert et maintenez-le enfoncé.
3. Maintenez le bouton jusqu’à ce que la LED du hub se mette à clignoter en violet.
4. Ne relâchez pas le bouton tant que la LED clignote en violet.
5. Tout en maintenant le bouton, ouvrez **Mes hubs Bluetooth** dans MOCPilot et connectez-vous au hub.
6. Une fois le hub connecté en mode bootloader, vous pouvez relâcher le bouton.

En mode de récupération, le hub peut apparaître sous le nom **LEGO Bootloader** au lieu de son nom habituel.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader dans la liste des hubs avec l’action de récupération du firmware" />

## Mettre un Technic Move Hub en mode de récupération {#put-a-technic-move-hub-into-recovery-mode}

La récupération du Technic Move Hub se fait autrement : il ne se connecte pas sous le nom **LEGO Bootloader**. La séquence de bouton ci-dessous charge plutôt le firmware d’usine **1.2.3**, qui n’est pas prévu pour un usage quotidien.

Pour restaurer son firmware :

1. Éteignez le hub.
2. Appuyez sur le bouton vert et maintenez-le enfoncé.
3. Maintenez le bouton vert pendant environ une minute.
4. Relâchez le bouton.
5. Attendez que la LED du hub se mette à clignoter en blanc.
6. Ouvrez **Mes hubs Bluetooth** dans MOCPilot et connectez-vous au hub.

Lorsque le hub se connecte, MOCPilot détecte le firmware d’usine et propose de le mettre à jour vers la dernière version. Lancez la mise à jour et attendez qu’elle se termine.

## Lancer la récupération depuis la boîte de dialogue {#start-recovery-from-the-dialog}

Lorsque MOCPilot détecte un hub connecté en mode de récupération, il affiche une boîte de dialogue de récupération.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Boîte de dialogue Mode de récupération du hub détecté" />

Sélectionnez **Récupérer** pour lancer le transfert du firmware vers le hub.

Si vous n’êtes pas prêt, sélectionnez **Annuler**. Vous pourrez lancer la récupération plus tard depuis le menu du hub.

## Lancer la récupération depuis le menu du hub {#start-recovery-from-the-hub-menu}

Pour lancer la récupération vous-même :

1. Ouvrez **Mes hubs Bluetooth**.
2. Repérez le hub affiché sous le nom **LEGO Bootloader**.
3. Ouvrez le menu du hub.
4. Sélectionnez **Récupérer le firmware du hub**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Action Récupérer le firmware du hub dans le menu contextuel du hub" />

## Pendant la récupération du firmware {#during-firmware-recovery}

MOCPilot transfère le firmware vers le hub et affiche la progression.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Écran de progression de la récupération du firmware" />

Attendez la fin de l’opération. N’éloignez pas le hub de votre appareil, ne fermez pas l’application, ne désactivez pas le Bluetooth et ne coupez pas l’alimentation du hub.

Le hub peut redémarrer ou se reconnecter plusieurs fois. C’est normal : laissez MOCPilot ouvert et patientez.

## Terminer la récupération {#finish-recovery}

Une fois la récupération terminée, MOCPilot affiche une confirmation.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Boîte de dialogue de fin de récupération du firmware" />

Sélectionnez **OK**. Le hub doit redémarrer et se reconnecter comme un hub normal, et non plus sous le nom **LEGO Bootloader**.

Vérifiez ensuite le hub dans **Mes hubs Bluetooth**. Si MOCPilot demande encore une mise à jour du firmware, effectuez une [mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating/) normale.

## En cas d’échec de la récupération {#if-recovery-fails}

Si la récupération échoue :

1. Gardez le hub près de votre appareil.
2. Éteignez puis rallumez le hub.
3. Remettez le hub en mode de récupération.
4. Connectez-vous à **LEGO Bootloader** dans MOCPilot.
5. Relancez **Récupérer le firmware du hub**.

Si l’erreur se reproduit, recommencez toute la procédure. Si plusieurs tentatives échouent, remplacez ou rechargez les piles et réessayez.
