---
id: ManageProfiles
title: Administrer profiler
description: "Rediger, del, importér, eksportér og slet MOCPilot-profiler."
---

import Screenshot from '@site/src/components/Screenshot';

# Administrer profiler {#manage-profiles}

## Rediger profilens oplysninger {#edit-profile-details}

Tryk på **Rediger** (telefon, tablet), eller klik på **Rediger…** (computer) ved en profil. I **Rediger profil** kan du ændre:

- **billedet** og **navnet**;
- **beskrivelsen** (hvad profilen gør, hvilken model den er til, hvordan den køres);
- **blokniveauet** (Logikblokke);
- **hashtags**;
- **Favorit** (telefon, tablet): en favoritprofil flytter op øverst på din liste. På en computer findes **Favorit** i bundbjælken på profilsiden.

<Screenshot name="edit-profile" alt="Vinduet Rediger profil med billede, navn, beskrivelse og hashtags" width={900} />

Det er også her, du sletter profilen og, når du er logget ind, sender den til kataloget.

Programtypen kan ikke ændres. Hvis du vil flytte en model til den anden editor, så opret en ny profil.

## Del (eksportér) en profil {#share-export-a-profile}

**Del…** pakker profilen i en enkelt `.dat`-fil (med et navn som `Technic Buggy_<id>.dat`) og åbner systemets delingsmenu. Send den i en besked eller via e-mail, eller gem den i dine filer.

Filen indeholder hubs, dashboard og program. Den indeholder ikke køb: temaer og specialkontroller, som modtageren ikke ejer, erstattes eller låses, når vedkommende redigerer profilen (se [nedenfor](#paid-themes-in-shared-profiles)).

## Importér en profil {#import-a-profile}

1. På **Mine profiler** vælger du **Importér profil…** (telefon: **+** → **Importér profil…**; tablet: menuen **Ny profil**; computer: **Fil → Importér profil…**, ⌘O / Ctrl+O).
2. Vælg en `.dat`-fil.

Hvis du allerede har denne profil:

- en anden version: vælg **Erstat**, **Gem som kopi** (tilføjer "(kopi)" til navnet) eller **Annuller**;
- præcis den samme fil: den indlæses ikke igen.

En fil, der ikke er en profil, afvises.

:::tip Dupliker en profil
Der er ingen særskilt kommando til at duplikere. For at få en kopi deler du profilen til en fil og importerer den med **Gem som kopi**.
:::

## Slet en profil {#delete-a-profile}

Åbn **Rediger profil**:

- telefon og tablet: **Skub for at slette profilen**;
- computer: **Slet profil**, og bekræft derefter. **Slet profil** findes også i profilkortets menu.

Profilen slettes fra denne enhed og fra din konto, så den forsvinder også fra dine andre enheder. Det kan ikke fortrydes; del profilen til en fil først, hvis du måske får brug for den igen.

## Profiler fra kataloget {#profiles-from-the-catalog}

En profil, der er installeret fra [Profilkatalog](/docs/Application/Profiles/Catalog), er din egen kopi:

- så længe du ikke ændrer den, kører den præcis som udgivet, og **Opdater** installerer en ny version, når forfatteren udgiver en (**Opdater fra kataloget** i **Rediger profil** gør det samme);
- den første ændring viser en advarsel: derefter får profilen ikke længere opdateringer fra kataloget.

## Betalte temaer i delte profiler {#paid-themes-in-shared-profiles}

Profiler kan bruge betalte [temaer](/docs/Application/Themes/ThemesOverview) og specialkontroller (rat, pedaler, gearkasse og andre). Når du redigerer en profil, der bruger produkter, du ikke ejer:

- skifter kontroller fra temaer, du ikke ejer, til det gratis tema **Grundlæggende**;
- låses specialkontroller uden et gratis alternativ, indtil du køber dem;
- forbliver produkter, du ejer, som de er.

En uændret profil fra kataloget kører med alle sine produkter, også dem, du ikke ejer.

## Synkronisering {#sync}

Når du er logget ind, uploades hver ændring og vises på dine andre enheder. Se [Synkronisering mellem enheder](/docs/Application/Account/Sync).

Hvis du åbner en profil, der allerede bliver redigeret på en anden enhed, beder MOCPilot dig vælge: **Kun visning** (ændringer gemmes ikke) eller **Overtag redigering**.
