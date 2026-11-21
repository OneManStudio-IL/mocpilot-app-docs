---
id: ProfilesOverview
title: Profiler
description: "Hvad en profil er, profillisten, søgning, sortering og favoritter."
---

import Screenshot from '@site/src/components/Screenshot';

# Profiler {#profiles}

En **profil** er alt, hvad MOCPilot ved om én model: dens hubs, dens dashboard og dens program. Du har én profil pr. model.

<Screenshot name="profiles-desktop" alt="Listen Mine profiler" width={900} />

## Hvor profiler kommer fra {#where-profiles-come-from}

- **Dine egne profiler**, oprettet med **Ny profil**. Se [Opret en profil](/docs/Application/Profiles/CreateProfile).
- **Profiler fra kataloget**: officielle profiler til LEGO®-sæt lavet af MOCPilot-teamet og profiler fra fællesskabet lavet af andre byggere. Når du installerer en, får du din egen kopi på listen. Se [Katalog og udgivelse](/docs/Application/Profiles/Catalog).
- **Importerede profiler**: `.dat`-filer, som nogen har delt med dig. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles#import-a-profile).

De ligger alle på den samme liste.

## Profillisten {#the-profile-list}

Siden hedder **Mine profiler**.

- **Søg** finder profiler efter navn, hashtag, forfatter, hub, sætnummer eller år.
- **Sortér og filtrér** sorterer efter **Nyeste sæt**, **Ældste sæt**, **Navn (A–Z)**, **Navn (Z–A)**, **Forfatter (A–Z)**, **Forfatter (Z–A)** eller **Brugte hubs**. **Kun mine profiler** skjuler profiler, der er installeret fra kataloget.
- **Filtrér efter hashtags** (tablet og computer) viser kun profiler med de hashtags, du vælger.
- **Favorit**-profiler kommer altid først.

Et kort viser profilens billede og navn og, når de er kendt, sætnummer, udgivelsesår og antal dele. **Opdatering tilgængelig** betyder, at du kan installere en ny version af en profil fra kataloget.

## Handlinger med profiler {#profile-actions}

| Handling | Telefon | Tablet | Computer |
|---|---|---|---|
| Åbn (start) | **Start** på kortet | dobbelttryk på kortet, eller vælg det, og tryk på **Start** | dobbeltklik på kortet, eller **Start** |
| Rediger navn, billede, hashtags, beskrivelse | **Rediger** på kortet | **Rediger** | **Rediger…** |
| Føj til favoritter | i **Rediger profil** | **Føj til favoritter** | **Føj til favoritter** |
| Del som fil | **Del** på kortet | **Del** | **Del…** |
| Opdater fra kataloget | **Opdater** | **Opdater** | **Opdater** |
| Send til kataloget | i **Rediger profil** | i **Rediger profil** | i **Rediger profil** |
| Slet | **Skub for at slette profilen** i **Rediger profil** | det samme, eller **Slet profil** i kortets menu | **Slet profil** i **Rediger profil** eller i kortets menu |

## To slags programmer {#two-kinds-of-programs}

Hver profil bruger en af to programeditorer, som vælges, når du opretter den:

- **Hurtige forbindelser**: rækker, der forbinder kontroller med motorer og lys, uden kode. Se [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing).
- **Logikblokke**: et blokprogram med hændelser, løkker, betingelser og variabler. Se [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
En profil, der er lavet i en nyere version af MOCPilot, kan muligvis ikke åbnes i en ældre ("Profilen er ikke kompatibel"). Opdater appen på den enhed.
:::
