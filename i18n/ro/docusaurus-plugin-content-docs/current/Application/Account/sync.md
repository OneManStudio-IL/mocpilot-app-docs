---
id: Sync
title: Sincronizarea între dispozitive
description: "Păstrează profilurile și setările MOCPilot sincronizate pe telefoane, tablete, computere și în editorul web și lucrează offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Sincronizarea între dispozitive {#sync-between-devices}

Când ești conectat, MOCPilot păstrează profilurile și setările tale la fel pe fiecare dispozitiv: telefon, tabletă, computer și [editorul web](/docs/Introducing/WebEditor). Nu trebuie să activezi nimic: sincronizarea este mereu activă pentru un cont.

## Cum funcționează {#how-it-works}

- Modificările se salvează mai întâi pe dispozitiv și se încarcă atunci când ești online („Sincronizarea profilurilor…”).
- Celelalte dispozitive descarcă noua versiune când sunt online.
- Achizițiile nu se sincronizează ca fișiere; ele aparțin contului tău și sunt disponibile oriunde te conectezi.
- Profilurile adăugate pe site (**Adaugă în contul meu** în catalog) sau editate în editorul web ajung prin sincronizare.
- În modul invitat nu se sincronizează nimic: profilurile rămân doar pe acest dispozitiv.

## Conflicte {#conflicts}

Dacă același profil a fost modificat pe două dispozitive înainte ca acestea să se sincronizeze, câștigă versiunea din contul tău, iar versiunea ta de pe acest dispozitiv se salvează ca o copie (la nume se adaugă „(copie)”). MOCPilot te anunță printr-un mesaj **Sincronizarea profilurilor**. Același lucru se întâmplă dacă un profil pe care l-ai modificat aici a fost șters pe alt dispozitiv.

Dacă deschizi un profil care este editat chiar acum pe alt dispozitiv, poți alege **Doar vizualizare** (modificările nu se salvează) sau **Preia editarea**.

## Lucrul offline {#working-offline}

Huburile, profilurile tale și temele descărcate funcționează fără internet.

- Dacă MOCPilot nu poate contacta serverul la pornire, afișează **Nu există conexiune la internet** cu **Lucrează offline** și **Reîncearcă**.
- Cât timp ești offline, în partea de sus apare eticheta **Offline**. Funcțiile care au nevoie de server (catalogul și publicarea, constructorul AI, controlul de la distanță, notificările, achizițiile, mesajele către asistență) îți spun că au nevoie de conexiune la internet.
- Modificările făcute offline se încarcă atunci când revine conexiunea. Când aplicația vede din nou serverul, afișează **Conexiunea a revenit** cu **Treci online**.

<Screenshot name="offline-prompt" alt="Mesajul Nu există conexiune la internet cu butoanele Lucrează offline și Reîncearcă" width={900} />

## Deconectarea {#signing-out}

Deconectarea elimină profilurile și setările tale de pe acest dispozitiv; ele rămân în contul tău și revin când te conectezi din nou. Dacă unele modificări nu au fost încă încărcate, MOCPilot te avertizează mai întâi și enumeră profilurile: conectează-te la internet și lasă sincronizarea să se termine sau alege **Deconectează-te oricum** (o copie se păstrează în dosarul Backup al aplicației).

## Sfaturi {#tips}

- Înainte să publici un profil în catalog, asigură-te că este sincronizat: catalogul îl preia din contul tău.
- Ca să muți profiluri pe un dispozitiv fără cont, folosește **Partajează** și **Importă profil…** cu fișiere `.dat`. Vezi [Gestionarea profilurilor](/docs/Application/Profiles/ManageProfiles).
