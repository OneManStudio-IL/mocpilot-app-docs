---
id: RecoveryHubFirmware
title: Gendannelse af hub-firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gendannelse af hub-firmware {#hub-firmware-recovery}

Gendannelse af firmware får en hub til at virke igen, når den ikke kan starte normalt efter en afbrudt eller mislykket firmwareopdatering.

MOCPilot uploader fungerende firmware til hubben, så den kan køre og opdateres igen. Brug kun gendannelse, når hubben ikke reagerer normalt, når MOCPilot viser, at hubben er i gendannelsestilstand, eller efter en mislykket opdatering.

:::warning Vigtigt
Hold hubben tændt og din enhed tæt på den under hele gendannelsen. Hvis du slår Bluetooth fra, lukker MOCPilot, tager batterierne ud eller slukker hubben under uploaden, kan gendannelsen mislykkes.
:::

## Hvornår der er brug for gendannelse {#when-recovery-is-required}

Du kan have brug for gendannelse, hvis:

- En firmwareopdatering ikke blev gennemført.
- Hubben ikke længere forbinder som en normal hub.
- Hubben vises som **LEGO Bootloader** i MOCPilot.
- MOCPilot registrerer, at hubben er forbundet i gendannelsestilstand.

Før du starter, skal du sørge for, at hubben har tilstrækkeligt med strøm, at din telefon, tablet eller computer er opladet, og at Bluetooth er slået til.

## Understøttede hubs {#supported-hubs}

Gendannelse virker for de samme hubs som firmwareopdatering:

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

## Sæt en Technic Hub, Boost Hub eller City Hub i gendannelsestilstand {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Disse hubs forbinder via deres bootloader:

1. Sluk hubben.
2. Tryk på den grønne knap, og hold den nede.
3. Bliv ved med at holde knappen nede, indtil hubbens LED begynder at blinke lilla.
4. Slip ikke knappen, mens LED'en blinker lilla.
5. Hold stadig knappen nede, åbn **Mine Bluetooth-hubs** i MOCPilot, og forbind til hubben.
6. Når hubben er forbundet i bootloader-tilstand, kan du slippe knappen.

Når hubben er i gendannelsestilstand, vises den muligvis som **LEGO Bootloader** i stedet for sit normale navn.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hubben LEGO Bootloader på hublisten med handlingen til gendannelse af firmware" />

## Sæt en Technic Move Hub i gendannelsestilstand {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub gendannes på en anden måde: Den forbinder ikke som **LEGO Bootloader**. I stedet indlæser knapsekvensen nedenfor fabriksfirmwaren **1.2.3**, som ikke er beregnet til daglig brug.

Sådan gendanner du dens firmware:

1. Sluk hubben.
2. Tryk på den grønne knap, og hold den nede.
3. Hold den grønne knap nede i cirka et minut.
4. Slip knappen.
5. Vent, til hubbens LED begynder at blinke hvidt.
6. Åbn **Mine Bluetooth-hubs** i MOCPilot, og forbind til hubben.

Når hubben forbinder, registrerer MOCPilot fabriksfirmwaren og tilbyder at opdatere den til den nyeste version. Start opdateringen, og vent, til den er færdig.

## Start gendannelsen fra dialogen {#start-recovery-from-the-dialog}

Når MOCPilot registrerer en hub, der er forbundet i gendannelsestilstand, vises en gendannelsesdialog.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialog om, at hubbens gendannelsestilstand er registreret" />

Vælg **Gendan** for at begynde at uploade firmware til hubben.

Er du ikke klar, så vælg **Annuller**. Du kan starte gendannelsen senere fra hubmenuen.

## Start gendannelsen fra hubmenuen {#start-recovery-from-the-hub-menu}

Sådan starter du selv gendannelsen:

1. Åbn **Mine Bluetooth-hubs**.
2. Find den hub, der vises som **LEGO Bootloader**.
3. Åbn hubmenuen.
4. Vælg **Gendan hub-firmware**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Handlingen Gendan hub-firmware i hubbens kontekstmenu" />

## Under gendannelsen af firmwaren {#during-firmware-recovery}

MOCPilot uploader firmwaren til hubben og viser fremskridtet.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Skærmen med fremskridt for gendannelsen af firmwaren" />

Vent, til den er færdig. Flyt ikke hubben væk fra din enhed, luk ikke appen, slå ikke Bluetooth fra, og afbryd ikke hubbens strøm.

Hubben kan genstarte eller forbinde igen flere gange. Det er normalt: Hold MOCPilot åben, og vent.

## Afslut gendannelsen {#finish-recovery}

Når gendannelsen er færdig, viser MOCPilot en bekræftelse.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialog om, at gendannelsen af firmwaren er færdig" />

Vælg **OK**. Hubben bør genstarte og forbinde igen som en normal hub i stedet for **LEGO Bootloader**.

Tjek derefter hubben under **Mine Bluetooth-hubs**. Beder MOCPilot stadig om en firmwareopdatering, så kør en almindelig [firmwareopdatering](/docs/Application/Hubs/FirmwareUpdating/).

## Hvis gendannelsen mislykkes {#if-recovery-fails}

Mislykkes gendannelsen:

1. Hold hubben tæt på din enhed.
2. Sluk og tænd hubben.
3. Sæt hubben i gendannelsestilstand igen.
4. Forbind til **LEGO Bootloader** i MOCPilot.
5. Start **Gendan hub-firmware** igen.

Vises fejlen igen, så gentag hele proceduren. Mislykkes flere forsøg, så skift eller genoplad batterierne, og prøv igen.
