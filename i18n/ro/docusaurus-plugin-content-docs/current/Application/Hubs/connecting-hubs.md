---
id: ConnectingHubs
title: Adăugarea și conectarea unui hub
description: "Adaugă un hub într-un slot al profilului, conectează-l, redenumește-l și urmărește-i senzorii în monitorul hubului."
---

import Screenshot from '@site/src/components/Screenshot';

# Adăugarea și conectarea unui hub {#add-and-connect-a-hub}

Un hub se adaugă o singură dată într-un profil. După aceea, MOCPilot se conectează la el de fiecare dată când deschizi profilul.

## Adaugă un hub {#add-a-hub}

1. Deschide profilul și atinge **Huburile mele** (pe computer, **Huburi** în bara de sus sau ⇧⌘H / Ctrl+Shift+H). Pagina **Huburile mele Bluetooth** afișează sloturile.
2. Atinge **Adaugă un nou hub** într-un slot liber.
3. Alege hubul din listă. Filtrul din partea de sus afișează **Toate**, **LEGO**, **SBrick**, **BuWizz** sau **Mould King**. Atinge **Adaugă**.
4. Urmează pașii de pe ecran: **Apasă butonul de pe hub** și **Așteaptă ca scanarea să găsească hubul**. Atinge **Pornește scanarea** pentru a căuta din nou.

<Screenshot name="add-hub" alt="Alegerea hubului de adăugat" width={900} />

După ce hubul este găsit, se conectează și rămâne în slot.

<Screenshot name="my-hubs" alt="Huburile mele Bluetooth cu huburi conectate și sloturi libere" width={900} />

## Meniul slotului {#the-slot-menu}

Butonul **Conectează** de pe un slot conectează hubul. Meniul slotului conține:

- **Deconectează**;
- **Redenumește hubul**: salvează un nume nou în hubul însuși (pentru huburile conectate care acceptă acest lucru);
- **Actualizează firmware-ul**: când este disponibil un firmware mai nou; consultă [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating);
- **Recuperează firmware-ul hubului**: când hubul este conectat în modul de recuperare; consultă [Recuperarea firmware-ului](/docs/Application/Hubs/RecoveryHubFirmware);
- **Selectează configurația**: configurațiile Technic Move; consultă [Configurațiile Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Selectează canalul: A / B / C**: canalul de control Mould King;
- **Șterge hub-ul**: elimină hubul din profil.

Butonul **Huburile mele** din editor (**Huburi** pe computer) arată câte huburi sunt conectate.

## Monitorul hubului {#hub-monitor}

Deschide un hub conectat pentru a vedea **Monitor hub**:

- hubul: model, nume, firmware, baterie, încărcare, temperatura plăcii, configurație, orientare, înclinare (pitch, roll, yaw) și accelerometru;
- fiecare port: dispozitivul conectat și viteza, poziția, poziția relativă, culoarea, lumina reflectată și ambientală sau distanța.

Folosește-l ca să verifici ce motor este pe ce port și în ce sens se rotește, înainte de a construi programul.

<Screenshot name="hub-monitor" alt="Monitorul hubului pentru un Technic Hub conectat" width={900} />

## Sfaturi pentru conectare {#connection-tips}

- Pornește hubul chiar înainte de conectare: multe huburi se opresc singure după câteva minute fără conexiune.
- Ține telefonul aproape de hub; pereții și metalul reduc raza de acțiune.
- Un hub poate fi conectat la un singur dispozitiv odată. Închide alte aplicații care îl folosesc (aplicațiile LEGO®, alte telecomenzi).
- **Bluetooth este oprit**: pornește Bluetooth și permite-i lui MOCPilot să-l folosească din setările sistemului.
- **Hubul nu a fost găsit**: apasă din nou butonul hubului, repornește scanarea sau schimbă bateriile.
- Huburile **Mould King** nu se „conectează” de fapt: MOCPilot le trimite comenzi prin Bluetooth advertising. Dacă hubul nu reacționează, atinge **Conectează din nou** și verifică canalul.

Mai multe în [Depanare](/docs/Help/Troubleshooting#hubs).
