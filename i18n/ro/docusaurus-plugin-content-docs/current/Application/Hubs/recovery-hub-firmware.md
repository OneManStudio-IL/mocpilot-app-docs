---
id: RecoveryHubFirmware
title: Recuperarea firmware-ului hubului
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Recuperarea firmware-ului hubului {#hub-firmware-recovery}

Recuperarea firmware-ului readuce la viață un hub care nu mai pornește normal după o actualizare de firmware întreruptă sau eșuată.

MOCPilot încarcă în hub un firmware funcțional, ca hubul să poată rula și să poată fi actualizat din nou. Folosește recuperarea doar când hubul nu răspunde normal, când MOCPilot arată că hubul este în modul de recuperare sau după o actualizare eșuată.

:::warning Important
Ține hubul pornit și dispozitivul aproape de el pe toată durata recuperării. Dezactivarea Bluetooth, închiderea MOCPilot, scoaterea bateriilor sau oprirea hubului în timpul încărcării pot face ca recuperarea să eșueze.
:::

## Când este necesară recuperarea {#when-recovery-is-required}

Este posibil să ai nevoie de recuperare dacă:

- O actualizare de firmware nu s-a încheiat cu succes.
- Hubul nu se mai conectează ca un hub obișnuit.
- Hubul apare ca **LEGO Bootloader** în MOCPilot.
- MOCPilot detectează că hubul este conectat în modul de recuperare a firmware-ului.

Înainte de a începe, asigură-te că hubul are suficientă baterie, că telefonul, tableta sau computerul este încărcat și că Bluetooth este pornit.

## Huburi acceptate {#supported-hubs}

Recuperarea funcționează pentru aceleași huburi ca actualizarea firmware-ului:

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

## Trecerea unui Technic Hub, Boost Hub sau City Hub în modul de recuperare {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Aceste huburi se conectează prin bootloader:

1. Oprește hubul.
2. Apasă și ține apăsat butonul verde.
3. Ține butonul apăsat până când LED-ul hubului începe să clipească mov.
4. Nu elibera butonul cât timp LED-ul clipește mov.
5. Ținând în continuare butonul apăsat, deschide **Huburile mele Bluetooth** în MOCPilot și conectează-te la hub.
6. După ce hubul s-a conectat în modul bootloader, poți elibera butonul.

Când hubul este în modul de recuperare, poate apărea ca **LEGO Bootloader** în loc de numele său obișnuit.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hubul LEGO Bootloader în lista de huburi, cu acțiunea de recuperare a firmware-ului" />

## Trecerea unui Technic Move Hub în modul de recuperare {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub se recuperează altfel: nu se conectează ca **LEGO Bootloader**. În schimb, secvența de mai jos încarcă firmware-ul de fabrică **1.2.3**, care nu este destinat utilizării obișnuite.

Pentru a-i restaura firmware-ul:

1. Oprește hubul.
2. Apasă și ține apăsat butonul verde.
3. Ține butonul verde apăsat aproximativ un minut.
4. Eliberează butonul.
5. Așteaptă până când LED-ul hubului începe să clipească alb.
6. Deschide **Huburile mele Bluetooth** în MOCPilot și conectează-te la hub.

Când hubul se conectează, MOCPilot detectează firmware-ul de fabrică și se oferă să-l actualizeze la cea mai nouă versiune. Pornește actualizarea și așteaptă să se termine.

## Pornirea recuperării din dialog {#start-recovery-from-the-dialog}

Când MOCPilot detectează un hub conectat în modul de recuperare, afișează un dialog de recuperare.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialogul de detectare a modului de recuperare a hubului" />

Selectează **Recuperează** pentru a începe încărcarea firmware-ului în hub.

Dacă nu ești pregătit, selectează **Anulează**. Poți porni recuperarea mai târziu din meniul hubului.

## Pornirea recuperării din meniul hubului {#start-recovery-from-the-hub-menu}

Pentru a porni singur recuperarea:

1. Deschide **Huburile mele Bluetooth**.
2. Găsește hubul afișat ca **LEGO Bootloader**.
3. Deschide meniul hubului.
4. Selectează **Recuperează firmware-ul hubului**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Acțiunea Recuperează firmware-ul hubului din meniul contextual al hubului" />

## În timpul recuperării firmware-ului {#during-firmware-recovery}

MOCPilot încarcă firmware-ul în hub și afișează progresul.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Ecranul de progres al recuperării firmware-ului" />

Așteaptă până se termină. Nu îndepărta hubul de dispozitiv, nu închide aplicația, nu dezactiva Bluetooth și nu întrerupe alimentarea hubului.

Hubul se poate reporni sau reconecta de mai multe ori. Este normal: lasă MOCPilot deschis și așteaptă.

## Finalizarea recuperării {#finish-recovery}

Când recuperarea s-a încheiat, MOCPilot afișează o confirmare.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialogul de finalizare a recuperării firmware-ului" />

Selectează **OK**. Hubul ar trebui să se repornească și să se reconecteze ca hub obișnuit, nu ca **LEGO Bootloader**.

Apoi verifică hubul în **Huburile mele Bluetooth**. Dacă MOCPilot cere în continuare o actualizare de firmware, efectuează o [actualizare de firmware](/docs/Application/Hubs/FirmwareUpdating/) obișnuită.

## Dacă recuperarea eșuează {#if-recovery-fails}

Dacă recuperarea eșuează:

1. Ține hubul aproape de dispozitiv.
2. Oprește și pornește hubul.
3. Treci din nou hubul în modul de recuperare.
4. Conectează-te la **LEGO Bootloader** în MOCPilot.
5. Pornește din nou **Recuperează firmware-ul hubului**.

Dacă eroarea apare din nou, repetă întreaga procedură. Dacă mai multe încercări eșuează, înlocuiește sau reîncarcă bateriile și încearcă din nou.
