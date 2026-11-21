---
id: ManageProfiles
title: Gestionarea profilurilor
description: "Editează, partajează, importă, exportă și șterge profiluri MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Gestionarea profilurilor {#manage-profiles}

## Editează detaliile profilului {#edit-profile-details}

Atinge **Editează** (telefon, tabletă) sau dă clic pe **Editează…** (computer) la un profil. În **Editează profilul** poți schimba:

- **imaginea** și **numele**;
- **descrierea** (ce face profilul, pentru ce model este, cum se conduce);
- **nivelul blocurilor** (Blocuri logice);
- **hashtagurile**;
- **Preferat** (telefon, tabletă): un profil preferat urcă în capul listei. Pe computer, **Preferat** se află în bara de jos a paginii de profiluri.

<Screenshot name="edit-profile" alt="Fereastra Editează profilul cu imaginea, numele, descrierea și hashtagurile" width={900} />

Tot aici ștergi profilul și, după ce te conectezi, îl trimiți în catalog.

Tipul de program nu poate fi schimbat. Ca să muți un model în celălalt editor, creează un profil nou.

## Partajează (exportă) un profil {#share-export-a-profile}

**Partajează…** împachetează profilul într-un singur fișier `.dat` (cu un nume ca `Technic Buggy_<id>.dat`) și deschide meniul de partajare al sistemului. Trimite-l într-un mesaj sau prin e-mail ori salvează-l în fișierele tale.

Fișierul conține huburile, tabloul de bord și programul. Nu conține achiziții: temele și comenzile speciale pe care destinatarul nu le deține sunt înlocuite sau blocate când acesta editează profilul (vezi [mai jos](#paid-themes-in-shared-profiles)).

## Importă un profil {#import-a-profile}

1. În **Profilurile mele**, alege **Importă profil…** (telefon: **+** → **Importă profil…**; tabletă: meniul **Profil nou**; computer: **Fișier → Importă profil…**, ⌘O / Ctrl+O).
2. Alege un fișier `.dat`.

Dacă ai deja acest profil:

- o versiune diferită: alege **Înlocuiește**, **Salvează ca o copie** (adaugă „(copie)” la nume) sau **Anulează**;
- exact același fișier: nu se mai încarcă o dată.

Un fișier care nu este un profil este respins.

:::tip Duplică un profil
Nu există o comandă separată de duplicare. Ca să obții o copie, partajează profilul într-un fișier și importă-l cu **Salvează ca o copie**.
:::

## Șterge un profil {#delete-a-profile}

Deschide **Editează profilul**:

- telefon și tabletă: **Glisați pentru a șterge profilul**;
- computer: **Șterge profilul**, apoi confirmă. **Șterge profilul** se află și în meniul cardului profilului.

Profilul este șters de pe acest dispozitiv și din contul tău, așa că dispare și de pe celelalte dispozitive. Acțiunea nu poate fi anulată; dacă s-ar putea să mai ai nevoie de profil, partajează-l mai întâi într-un fișier.

## Profilurile din catalog {#profiles-from-the-catalog}

Un profil instalat din [Catalogul de profiluri](/docs/Application/Profiles/Catalog) este copia ta:

- cât timp nu îl modifici, rulează exact așa cum a fost publicat, iar **Actualizează** instalează o versiune nouă când autorul o lansează (**Actualizează din catalog** din **Editează profilul** face același lucru);
- prima modificare afișează un avertisment: după ea, profilul nu mai primește actualizări din catalog.

## Teme plătite în profilurile partajate {#paid-themes-in-shared-profiles}

Profilurile pot folosi [teme](/docs/Application/Themes/ThemesOverview) plătite și comenzi speciale (volan, pedale, cutie de viteze și altele). Când editezi un profil care folosește produse pe care nu le deții:

- comenzile din temele pe care nu le deții trec la tema gratuită **De bază**;
- comenzile speciale fără echivalent gratuit sunt blocate până le cumperi;
- produsele pe care le deții rămân așa cum sunt.

Un profil din catalog nemodificat rulează cu toate produsele lui, chiar și cu cele pe care nu le deții.

## Sincronizarea {#sync}

Când ești conectat, fiecare modificare este încărcată și apare pe celelalte dispozitive. Vezi [Sincronizarea între dispozitive](/docs/Application/Account/Sync).

Dacă deschizi un profil care este deja editat pe alt dispozitiv, MOCPilot îți cere să alegi: **Doar vizualizare** (modificările nu se salvează) sau **Preia editarea**.
