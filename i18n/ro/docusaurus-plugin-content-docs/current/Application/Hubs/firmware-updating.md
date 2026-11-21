---
id: FirmwareUpdating
title: Actualizarea firmware-ului
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Actualizarea firmware-ului {#firmware-updating}

MOCPilot poate actualiza firmware-ul huburilor LEGO® Powered Up acceptate atunci când este disponibilă o versiune compatibilă mai nouă.

Unele huburi au nevoie de o actualizare înainte de a funcționa corect cu MOCPilot: firmware-ul mai nou corectează erori ale hubului și adaugă funcțiile pe care se bazează aplicația.

## Huburi acceptate {#supported-hubs}

MOCPilot poate actualiza aceste huburi:

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

## Înainte de a începe {#before-you-start}

Asigură-te că hubul și telefonul, tableta sau computerul au suficientă baterie.

Ține hubul pornit pe toată durata actualizării și păstrează dispozitivul aproape de el, ca legătura Bluetooth să rămână stabilă. Nu închide MOCPilot, nu dezactiva Bluetooth și nu opri hubul cât timp se încarcă firmware-ul.

:::warning Important
O actualizare întreruptă poate lăsa hubul cu firmware incomplet. În acest caz, hubul poate avea nevoie de recuperarea firmware-ului înainte de a-l putea folosi din nou.
:::

## Pornirea actualizării {#starting-the-update}

Când conectezi un hub, MOCPilot îi verifică versiunea de firmware. Dacă este necesară o versiune mai nouă, aplicația afișează dialogul **Este necesară actualizarea firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialogul Este necesară actualizarea firmware" />

Selectează **Actualizează** pentru a porni imediat actualizarea firmware-ului.

Pentru a actualiza mai târziu, selectează **Anulează**. Poți porni actualizarea oricând din meniul hubului.

## Actualizarea ulterioară din meniul hubului {#updating-later-from-the-hub-menu}

Pentru a porni singur actualizarea:

1. Deschide **Huburile mele Bluetooth**.
2. Găsește hubul care trebuie actualizat.
3. Deschide meniul hubului.
4. Selectează **Actualizează firmware-ul**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Acțiunea Actualizează firmware-ul din meniul contextual al hubului" />

## În timpul actualizării firmware-ului {#during-the-firmware-update}

MOCPilot încarcă firmware-ul în hub și afișează progresul.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Ecranul de progres al actualizării firmware-ului" />

Așteaptă să se termine încărcarea. Hubul se poate reporni sau deconecta pentru scurt timp în timp ce se aplică noul firmware.

Apoi MOCPilot caută din nou hubul. Ține hubul în apropiere și așteaptă ca aplicația să se reconecteze.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware încărcat, căutarea hubului" />

## Finalizarea actualizării {#finishing-the-update}

Când actualizarea s-a încheiat, MOCPilot afișează o confirmare.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialogul de finalizare a actualizării firmware-ului" />

Selectează **OK**. Hubul se reconectează, iar cardul lui arată noua versiune de firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Cardul hubului cu versiunea de firmware actualizată" />

Acum poți folosi în continuare hubul cu MOCPilot.

## Dacă actualizarea eșuează {#if-the-update-fails}

Dacă actualizarea eșuează, MOCPilot afișează un mesaj de eroare.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialogul de eșec al actualizării firmware-ului" />

Mai întâi, oprește și pornește hubul, apoi rulează din nou actualizarea:

1. Oprește hubul.
2. Pornește din nou hubul.
3. Ține hubul aproape de dispozitiv.
4. Conectează-te la hub în MOCPilot.
5. Pornește din nou actualizarea firmware-ului.

Dacă hubul tot nu răspunde normal, poate avea nevoie de recuperarea firmware-ului: consultă [Recuperarea firmware-ului hubului](/docs/Application/Hubs/RecoveryHubFirmware/).
