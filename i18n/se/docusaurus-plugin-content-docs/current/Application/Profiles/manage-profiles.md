---
id: ManageProfiles
title: Hantera profiler
description: "Redigera, dela, importera, exportera och ta bort MOCPilot-profiler."
---

import Screenshot from '@site/src/components/Screenshot';

# Hantera profiler

## Redigera profilens uppgifter {#edit-profile-details}

Tryck på **Redigera** (telefon, surfplatta) eller klicka på **Redigera…** (dator) på en profil. I **Redigera profil** kan du ändra:

- **bilden** och **namnet**;
- **beskrivningen** (vad profilen gör, vilken modell den är till för, hur man kör den);
- **blocknivån** (Logikblock);
- **hashtaggar**;
- **Favorit** (telefon, surfplatta): en favoritprofil flyttas högst upp i listan. På en dator finns **Favorit** i det nedre fältet på profilsidan.

<Screenshot name="edit-profile" alt="Fönstret Redigera profil med bild, namn, beskrivning och hashtaggar" width={900} />

Här tar du också bort profilen och, när du är inloggad, skickar den till katalogen.

Programtypen kan inte ändras. Om du vill flytta en modell till den andra redigeraren skapar du en ny profil.

## Dela (exportera) en profil {#share-export-a-profile}

**Dela…** packar profilen i en enda `.dat`-fil (med ett namn som `Technic Buggy_<id>.dat`) och öppnar systemets delningsmeny. Skicka den i ett meddelande eller via e-post, eller spara den bland dina filer.

Filen innehåller hubbarna, instrumentpanelen och programmet. Den innehåller inga köp: teman och specialkontroller som mottagaren inte äger ersätts eller låses när hen redigerar profilen (se [nedan](#paid-themes-in-shared-profiles)).

## Importera en profil {#import-a-profile}

1. Välj **Importera profil…** på **Mina profiler** (telefon: **+** → **Importera profil…**; surfplatta: menyn **Ny profil**; dator: **Fil → Importera profil…**, ⌘O / Ctrl+O).
2. Välj en `.dat`-fil.

Om du redan har profilen:

- en annan version: välj **Ersätt**, **Spara som kopia** (lägger till ”(kopia)” i namnet) eller **Avbryt**;
- exakt samma fil: den läses inte in igen.

En fil som inte är en profil avvisas.

:::tip Duplicera en profil
Det finns inget separat kommando för att duplicera. Om du vill ha en kopia delar du profilen till en fil och importerar den med **Spara som kopia**.
:::

## Ta bort en profil {#delete-a-profile}

Öppna **Redigera profil**:

- telefon och surfplatta: **Svep för att radera profilen**;
- dator: **Ta bort profil** och bekräfta. **Ta bort profil** finns också i profilkortets meny.

Profilen tas bort från den här enheten och från ditt konto, så den försvinner även från dina andra enheter. Det går inte att ångra; dela profilen till en fil först om du kan komma att behöva den igen.

## Profiler från katalogen {#profiles-from-the-catalog}

En profil som installerats från [Profilkatalogen](/docs/Application/Profiles/Catalog) är din egen kopia:

- så länge du inte ändrar den körs den exakt som den publicerades, och **Uppdatera** installerar en ny version när författaren släpper en (**Uppdatera från katalogen** i **Redigera profil** gör samma sak);
- vid den första ändringen visas en varning: därefter får profilen inte längre uppdateringar från katalogen.

## Betalda teman i delade profiler {#paid-themes-in-shared-profiles}

Profiler kan använda betalda [teman](/docs/Application/Themes/ThemesOverview) och specialkontroller (ratt, pedaler, växellåda med flera). När du redigerar en profil som använder produkter du inte äger:

- kontroller med teman du inte äger byter till det kostnadsfria temat **Grundläggande**;
- specialkontroller utan kostnadsfri motsvarighet låses tills du köper dem;
- produkter du äger förblir som de är.

En oförändrad katalogprofil körs med alla sina produkter, även de du inte äger.

## Synkronisering {#sync}

När du är inloggad laddas varje ändring upp och visas på dina andra enheter. Se [Synkronisering mellan enheter](/docs/Application/Account/Sync).

Om du öppnar en profil som redan redigeras på en annan enhet ber MOCPilot dig att välja: **Endast visning** (ändringar sparas inte) eller **Ta över redigeringen**.
