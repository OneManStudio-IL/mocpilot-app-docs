---
id: ManageProfiles
title: Administrer profiler
description: "Rediger, del, importer, eksporter og slett MOCPilot-profiler."
---

import Screenshot from '@site/src/components/Screenshot';

# Administrer profiler {#manage-profiles}

## Rediger opplysningene om profilen {#edit-profile-details}

Trykk **Rediger** (telefon, nettbrett) eller klikk **Rediger…** (datamaskin) på en profil. I **Rediger profil** kan du endre:

- **bilde** og **namn**;
- **beskrivelse** (hva profilen gjør, hvilken modell den er for, hvordan den kjøres);
- **blokknivå** (Logikkblokker);
- **emneknagger**;
- **Favoritt** (telefon, nettbrett): en favorittprofil flyttes til toppen av listen. På en datamaskin ligger **Favoritt** i bunnlinjen på profilsiden.

<Screenshot name="edit-profile" alt="Vinduet Rediger profil med bilde, namn, beskrivelse og emneknagger" width={900} />

Det er også her du sletter profilen og, når du er logget inn, sender den til katalogen.

Programtypen kan ikke endres. For å flytte en modell til den andre editoren oppretter du en ny profil.

## Del (eksporter) en profil {#share-export-a-profile}

**Del…** pakker profilen inn i én enkelt `.dat`-fil (med navn som `Technic Buggy_<id>.dat`) og åpner systemets delingsark. Send den i en melding eller på e-post, eller lagre den i filene dine.

Filen inneholder hubbene, dashboardet og programmet. Den inneholder ikke kjøp: temaer og spesialkontroller mottakeren ikke eier, blir erstattet eller låst når vedkommende redigerer profilen (se [nedenfor](#paid-themes-in-shared-profiles)).

## Importer en profil {#import-a-profile}

1. På **Mine profiler** velger du **Importer profil…** (telefon: **+** → **Importer profil…**; nettbrett: menyen **Ny profil**; datamaskin: **Fil → Importer profil…**, ⌘O / Ctrl+O).
2. Velg en `.dat`-fil.

Hvis du allerede har denne profilen:

- en annen versjon: velg **Erstatt**, **Lagre som kopi** (legger til «(kopi)» i navnet) eller **Avbryt**;
- nøyaktig den samme filen: den lastes ikke inn på nytt.

En fil som ikke er en profil, blir avvist.

:::tip Dupliser en profil
Det finnes ingen egen «dupliser»-kommando. For å få en kopi deler du profilen til en fil og importerer den med **Lagre som kopi**.
:::

## Slett en profil {#delete-a-profile}

Åpne **Rediger profil**:

- telefon og nettbrett: **Sveip for å slette profilen**;
- datamaskin: **Slett profil**, og bekreft. **Slett profil** finnes også i menyen på profilkortet.

Profilen slettes fra denne enheten og fra kontoen din, så den forsvinner også fra de andre enhetene dine. Dette kan ikke angres; del profilen til en fil først hvis du kanskje trenger den igjen.

## Profiler fra katalogen {#profiles-from-the-catalog}

En profil som er installert fra [Profilkatalogen](/docs/Application/Profiles/Catalog), er din egen kopi:

- så lenge du ikke endrer den, kjører den nøyaktig slik den ble publisert, og **Oppdater** installerer en ny versjon når forfatteren gir ut en (**Oppdater fra katalogen** i **Rediger profil** gjør det samme);
- den første endringen viser en advarsel: etter den får profilen ikke lenger oppdateringer fra katalogen.

## Betalte temaer i delte profiler {#paid-themes-in-shared-profiles}

Profiler kan bruke betalte [temaer](/docs/Application/Themes/ThemesOverview) og spesialkontroller (ratt, pedaler, girkasse og andre). Når du redigerer en profil som bruker produkter du ikke eier:

- kontroller fra temaer du ikke eier, bytter til det gratis temaet **Grunnleggende**;
- spesialkontroller uten gratis motstykke låses til du kjøper dem;
- produkter du eier, blir som de er.

En uendret katalogprofil kjører med alle produktene sine, også dem du ikke eier.

## Synkronisering {#sync}

Når du er logget inn, lastes hver endring opp og vises på de andre enhetene dine. Se [Synkronisering mellom enheter](/docs/Application/Account/Sync).

Hvis du åpner en profil som allerede redigeres på en annen enhet, ber MOCPilot deg velge: **Bare visning** (endringer lagres ikke) eller **Overta redigeringen**.
