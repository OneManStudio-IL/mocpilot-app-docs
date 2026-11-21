---
id: Sync
title: Synkronisering mellem enheder
description: "Hold MOCPilot-profiler og -indstillinger synkroniseret mellem telefoner, tablets, computere og webeditoren, og arbejd offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synkronisering mellem enheder {#sync-between-devices}

Når du er logget ind, holder MOCPilot dine profiler og indstillinger ens på alle enheder: telefon, tablet, computer og [webeditoren](/docs/Introducing/WebEditor). Der er intet at slå til: synkronisering er altid slået til for en konto.

## Sådan fungerer det {#how-it-works}

- Ændringer gemmes først på enheden og uploades, når du er online ("Synkroniserer profiler…").
- Andre enheder downloader den nye version, når de er online.
- Køb synkroniseres ikke som filer; de hører til din konto og er tilgængelige overalt, hvor du logger ind.
- Profiler, der er tilføjet på webstedet (**Føj til min konto** i kataloget) eller redigeret i webeditoren, kommer frem via synkronisering.
- I gæstetilstand synkroniseres intet: profilerne bliver kun på denne enhed.

## Konflikter {#conflicts}

Hvis den samme profil er blevet ændret på to enheder, før de nåede at synkronisere, vinder versionen fra din konto, og din version på denne enhed gemmes som en kopi ("(kopi)" tilføjes til navnet). MOCPilot fortæller dig om det i en meddelelse **Profilsynkronisering**. Det samme sker, hvis en profil, du har ændret her, er blevet slettet på en anden enhed.

Hvis du åbner en profil, der lige nu bliver redigeret på en anden enhed, kan du vælge **Kun visning** (ændringer gemmes ikke) eller **Overtag redigering**.

## Arbejde offline {#working-offline}

Hubs, dine profiler og downloadede temaer virker uden internet.

- Hvis MOCPilot ikke kan nå serveren ved start, viser den **Ingen internetforbindelse** med **Arbejd offline** og **Prøv igen**.
- Mens du er offline, vises mærket **Offline** øverst. Funktioner, der kræver serveren (kataloget og udgivelse, AI-byggeren, fjernstyring, notifikationer, køb, supportbeskeder), fortæller dig, at de kræver en internetforbindelse.
- Ændringer, du laver offline, uploades, når forbindelsen er tilbage. Når appen kan se serveren igen, viser den **Forbindelsen er tilbage** med **Gå online**.

<Screenshot name="offline-prompt" alt="Meddelelsen Ingen internetforbindelse med knapperne Arbejd offline og Prøv igen" width={900} />

## Log ud {#signing-out}

Når du logger ud, fjernes dine profiler og indstillinger fra denne enhed; de bliver på din konto og kommer tilbage, når du logger ind igen. Hvis nogle ændringer endnu ikke er uploadet, advarer MOCPilot dig først og viser profilerne: opret forbindelse til internettet, og lad synkroniseringen blive færdig, eller vælg **Log ud alligevel** (en kopi gemmes i appens Backup-mappe).

## Tips {#tips}

- Før du udgiver en profil i kataloget, skal du sikre dig, at den er synkroniseret: kataloget henter den fra din konto.
- For at flytte profiler til en enhed uden konto bruger du **Del** og **Importér profil…** med `.dat`-filer. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles).
