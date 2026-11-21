---
id: ProfilesOverview
title: Profiler
description: "Hva en profil er, profillisten, søk, sortering og favoritter."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiler {#profiles}

En **profil** er alt MOCPilot vet om én modell: hubbene, dashboardet og programmet. Du har én profil per modell.

<Screenshot name="profiles-desktop" alt="Listen Mine profiler" width={900} />

## Hvor profilene kommer fra {#where-profiles-come-from}

- **Dine egne profiler**, opprettet med **Ny profil**. Se [Opprett en profil](/docs/Application/Profiles/CreateProfile).
- **Profiler fra katalogen**: offisielle profiler for LEGO®-sett laget av MOCPilot-teamet, og profiler fra fellesskapet laget av andre byggere. Når du installerer en, legges din egen kopi til i listen. Se [Katalog og publisering](/docs/Application/Profiles/Catalog).
- **Importerte profiler**: `.dat`-filer noen har delt med deg. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Alle ligger i den samme listen.

## Profillisten {#the-profile-list}

Siden heter **Mine profiler**.

- **Søk** finner profiler etter navn, emneknagg, forfatter, hub, settnummer eller år.
- **Sorter og filtrer** sorterer etter **Nyeste sett**, **Eldste sett**, **Navn (A–Å)**, **Navn (Å–A)**, **Forfatter (A–Å)**, **Forfatter (Å–A)** eller **Brukte hubber**. **Bare mine profiler** skjuler profiler som er installert fra katalogen.
- **Filtrer etter emneknagger** (nettbrett og datamaskin) viser bare profiler med emneknaggene du velger.
- **Favoritt**-profiler kommer alltid først.

Et kort viser profilens bilde og navn og, når det er kjent, settnummer, utgivelsesår og antall deler. **Oppdatering tilgjengelig** betyr at du kan installere en ny versjon av en katalogprofil.

## Handlinger for profiler {#profile-actions}

| Handling | Telefon | Nettbrett | Datamaskin |
|---|---|---|---|
| Åpne (starte) | **Start** på kortet | dobbelttrykk på kortet, eller velg det og trykk **Start** | dobbeltklikk på kortet, eller **Start** |
| Rediger navn, bilde, emneknagger, beskrivelse | **Rediger** på kortet | **Rediger** | **Rediger…** |
| Legg til i favoritter | i **Rediger profil** | **Legg til i favoritter** | **Legg til i favoritter** |
| Del som fil | **Del** på kortet | **Del** | **Del…** |
| Oppdater fra katalogen | **Oppdater** | **Oppdater** | **Oppdater** |
| Send til katalogen | i **Rediger profil** | i **Rediger profil** | i **Rediger profil** |
| Slett | **Sveip for å slette profilen** i **Rediger profil** | det samme, eller **Slett profil** i menyen på kortet | **Slett profil** i **Rediger profil** eller i menyen på kortet |

## To typer programmer {#two-kinds-of-programs}

Hver profil bruker én av to programeditorer, som velges når du oppretter den:

- **Hurtigkoblinger**: rader som kobler kontroller til motorer og lys, uten kode. Se [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing).
- **Logikkblokker**: et blokkprogram med hendelser, løkker, betingelser og variabler. Se [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
En profil laget i en nyere versjon av MOCPilot åpnes kanskje ikke i en eldre («Profilen er ikke kompatibel»). Oppdater appen på den enheten.
:::
