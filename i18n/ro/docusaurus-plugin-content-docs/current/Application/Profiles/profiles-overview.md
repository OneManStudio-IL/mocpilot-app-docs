---
id: ProfilesOverview
title: Profiluri
description: "Ce este un profil, lista de profiluri, căutarea, sortarea și preferatele."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiluri {#profiles}

Un **profil** reprezintă tot ce știe MOCPilot despre un model: huburile, tabloul de bord și programul lui. Păstrezi câte un profil pentru fiecare model.

<Screenshot name="profiles-desktop" alt="Lista Profilurile mele" width={900} />

## De unde vin profilurile {#where-profiles-come-from}

- **Profilurile tale**, create cu **Profil nou**. Vezi [Creează un profil](/docs/Application/Profiles/CreateProfile).
- **Profilurile din catalog**: profiluri oficiale pentru seturi LEGO®, create de echipa MOCPilot, și profiluri ale comunității, de la alți constructori. Când instalezi unul, în listă se adaugă copia ta. Vezi [Catalog și publicare](/docs/Application/Profiles/Catalog).
- **Profilurile importate**: fișiere `.dat` pe care cineva le-a partajat cu tine. Vezi [Gestionarea profilurilor](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Toate se află în aceeași listă.

## Lista de profiluri {#the-profile-list}

Pagina se numește **Profilurile mele**.

- **Căutare** găsește profiluri după nume, hashtag, autor, hub, numărul setului sau an.
- **Sortare și filtrare** sortează după **Cele mai noi seturi**, **Cele mai vechi seturi**, **Nume (A–Z)**, **Nume (Z–A)**, **Autor (A–Z)**, **Autor (Z–A)** sau **Huburi folosite**. **Doar profilurile mele** ascunde profilurile instalate din catalog.
- **Filtrează după hashtaguri** (tabletă și computer) afișează doar profilurile cu hashtagurile alese.
- Profilurile **Preferat** apar întotdeauna primele.

Un card afișează imaginea și numele profilului și, când sunt cunoscute, numărul setului, anul lansării și numărul de piese. **Actualizare disponibilă** înseamnă că poți instala o versiune nouă a unui profil din catalog.

## Acțiuni pentru profiluri {#profile-actions}

| Acțiune | Telefon | Tabletă | Computer |
|---|---|---|---|
| Deschidere (lansare) | **Lansează** pe card | atinge de două ori cardul sau selectează-l și atinge **Lansează** | dublu clic pe card sau **Lansează** |
| Editarea numelui, imaginii, hashtagurilor, descrierii | **Editează** pe card | **Editează** | **Editează…** |
| Adăugare la favorite | în **Editează profilul** | **Adaugă la favorite** | **Adaugă la favorite** |
| Partajare ca fișier | **Partajează** pe card | **Partajează** | **Partajează…** |
| Actualizare din catalog | **Actualizează** | **Actualizează** | **Actualizează** |
| Trimitere în catalog | în **Editează profilul** | în **Editează profilul** | în **Editează profilul** |
| Ștergere | **Glisați pentru a șterge profilul** în **Editează profilul** | la fel sau **Șterge profilul** în meniul cardului | **Șterge profilul** în **Editează profilul** sau în meniul cardului |

## Două tipuri de programe {#two-kinds-of-programs}

Fiecare profil folosește unul dintre cele două editoare de programe, ales la crearea lui:

- **Legături rapide**: rânduri care leagă comenzile de motoare și lumini, fără cod. Vezi [Legături rapide](/docs/Application/Links/LinksIntroducing).
- **Blocuri logice**: un program din blocuri cu evenimente, bucle, condiții și variabile. Vezi [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
Un profil creat într-o versiune mai nouă de MOCPilot s-ar putea să nu se deschidă într-una mai veche („Profilul nu este compatibil”). Actualizează aplicația pe acel dispozitiv.
:::
