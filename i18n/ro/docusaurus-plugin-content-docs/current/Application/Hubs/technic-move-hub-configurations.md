---
id: TechnicMoveHubConfigurations
title: Configurațiile Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configurațiile Technic Move Hub {#technic-move-hub-configurations}

## Prezentare generală {#overview}

Spre deosebire de alte huburi LEGO® Powered Up, Technic Move Hub se comportă diferit în funcție de configurația încărcată în el.

MOCPilot poate schimba această configurație, astfel încât hubul să corespundă setului LEGO oficial pe care vrei să-l controlezi.

## Configurații acceptate {#supported-configurations}

MOCPilot cunoaște aceste configurații:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Opțiunile de configurație Technic Move Hub în blocul de setare a configurației hubului" />

## Schimbarea configurației din Huburile mele Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Pentru a schimba configurația pe pagina **Huburile mele Bluetooth**:

1. Deschide **Huburile mele Bluetooth**.
2. Găsește Technic Move Hub.
3. Deschide meniul hubului.
4. Selectează **Selectează configurația**.
5. Alege configurația.
6. Confirmă în dialog.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Meniul contextual al Technic Move Hub cu acțiunea Selectează configurația" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Submeniul de configurații al Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Dialogul de confirmare a reconfigurării Technic Move Hub" />

:::warning Important
Schimbarea configurației scrie un program în hub, la fel ca o actualizare de firmware.

Ține hubul pornit pe toată durata procesului, iar telefonul, tableta sau computerul pornit și aproape de hub, ca legătura Bluetooth să rămână stabilă. Nu închide MOCPilot, nu dezactiva Bluetooth și nu opri hubul cât timp se schimbă configurația.

O schimbare întreruptă poate deteriora firmware-ul hubului. În acest caz, hubul poate avea nevoie de [recuperarea firmware-ului](/docs/Application/Hubs/RecoveryHubFirmware/) înainte de a-l putea folosi din nou.
:::

Cât timp se schimbă configurația, hubul ignoră comenzile obișnuite, iar LED-ul său trece prin mai multe culori. Când noua configurație este instalată, hubul se repornește.

## Blocuri de configurație {#configuration-blocks}

Blocurile logice pot citi și schimba configurația în timp ce un program rulează.

### Setarea configurației hubului {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blocul de setare a configurației hubului" />

Blocul **Setează configurația hubului** încarcă în hubul selectat una dintre configurațiile acceptate.

- Selectorul de hub: alege hubul de reconfigurat.
- Selectorul de configurație: alege configurația dorită.
- Configurații disponibile pentru Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** și **Batmobile™ Tumbler**.

Consultă [documentația blocului de setare a configurației hubului](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Configurația hubului {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Blocul raportor al configurației hubului" />

Blocul **Configurația hubului** raportează configurația curentă a hubului selectat.

- Selectorul de hub: alege hubul de citit.
- Formatul de ieșire: **text** returnează numele configurației.
- Formatul de ieșire: **index** returnează indexul configurației, util pentru comparații în condiții.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opțiunile formatului de ieșire ale blocului de configurație a hubului" />

Consultă [documentația blocului de configurație a hubului](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Impulsul de putere {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blocul de impuls de putere al Technic Move Hub" />

Blocul **Impuls de putere** trimite un impuls de putere către Technic Move Hub selectat. Funcționează doar cu configurația **Batmobile™ Tumbler**.

Hubul acționează apoi motoarele la putere și viteză maximă pentru scurt timp, aproximativ 1–2 secunde. În Legături rapide, aceeași funcție este operația [Impuls de putere](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Consultă [documentația blocului de impuls de putere](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Schimbarea configurației în timpul rulării programului {#change-configuration-during-program-runtime}

Un program poate schimba configurația și în timp ce rulează. O abordare tipică:

1. Citește configurația curentă a hubului.
2. Compară-o cu configurația cerută de profil.
3. Dacă este diferită, setează configurația necesară.
4. Citește din nou configurația după reconfigurare.
5. Continuă doar când hubul raportează configurația așteptată.
6. Deconectează sau oprește programul dacă configurația necesară nu a fost aplicată.

Profilul gata făcut pentru acest hub arată cum se face.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Exemplu de blocuri pentru schimbarea configurației Technic Move Hub în timpul rulării" />
