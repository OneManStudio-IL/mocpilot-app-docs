---
id: ProfilesOverview
title: Profiler
description: "Vad en profil är, profillistan, sökning, sortering och favoriter."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiler

En **profil** är allt som MOCPilot vet om en modell: dess hubbar, dess instrumentpanel och dess program. Du har en profil per modell.

<Screenshot name="profiles-desktop" alt="Listan Mina profiler" width={900} />

## Var profilerna kommer ifrån {#where-profiles-come-from}

- **Dina egna profiler**, skapade med **Ny profil**. Se [Skapa en profil](/docs/Application/Profiles/CreateProfile).
- **Profiler från katalogen**: officiella profiler för LEGO®-set som MOCPilot-teamet har gjort och communityprofiler från andra byggare. När du installerar en läggs en egen kopia till i listan. Se [Katalog och publicering](/docs/Application/Profiles/Catalog).
- **Importerade profiler**: `.dat`-filer som någon har delat med dig. Se [Hantera profiler](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Alla finns i samma lista.

## Profillistan {#the-profile-list}

Sidan heter **Mina profiler**.

- **Sök** hittar profiler efter namn, hashtagg, författare, hubb, setnummer eller år.
- **Sortera och filtrera** sorterar efter **Nyaste set**, **Äldsta set**, **Namn (A–Ö)**, **Namn (Ö–A)**, **Författare (A–Ö)**, **Författare (Ö–A)** eller **Använda hubbar**. **Bara mina profiler** döljer profiler som installerats från katalogen.
- **Filtrera efter hashtaggar** (surfplatta och dator) visar bara profiler med de hashtaggar du väljer.
- **Favorit**-profiler kommer alltid först.

Ett kort visar profilens bild och namn och, när de är kända, setnummer, utgivningsår och antal delar. **Uppdatering tillgänglig** betyder att du kan installera en ny version av en katalogprofil.

## Åtgärder för profiler {#profile-actions}

| Åtgärd | Telefon | Surfplatta | Dator |
|---|---|---|---|
| Öppna (starta) | **Starta** på kortet | dubbeltryck på kortet, eller markera det och tryck på **Starta** | dubbelklicka på kortet, eller **Starta** |
| Redigera namn, bild, hashtaggar, beskrivning | **Redigera** på kortet | **Redigera** | **Redigera…** |
| Lägg till i favoriter | i **Redigera profil** | **Lägg till i favoriter** | **Lägg till i favoriter** |
| Dela som fil | **Dela** på kortet | **Dela** | **Dela…** |
| Uppdatera från katalogen | **Uppdatera** | **Uppdatera** | **Uppdatera** |
| Skicka till katalogen | i **Redigera profil** | i **Redigera profil** | i **Redigera profil** |
| Ta bort | **Svep för att radera profilen** i **Redigera profil** | samma sak, eller **Ta bort profil** i kortets meny | **Ta bort profil** i **Redigera profil** eller i kortets meny |

## Två sorters program {#two-kinds-of-programs}

Varje profil använder en av två programredigerare, som du väljer när du skapar den:

- **Snabbkopplingar**: rader som kopplar kontroller till motorer och lampor, utan kod. Se [Snabbkopplingar](/docs/Application/Links/LinksIntroducing).
- **Logikblock**: ett blockprogram med händelser, loopar, villkor och variabler. Se [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
En profil som har skapats i en nyare version av MOCPilot kanske inte öppnas i en äldre (”Profilen är inte kompatibel”). Uppdatera appen på den enheten.
:::
