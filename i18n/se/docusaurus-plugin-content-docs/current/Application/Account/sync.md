---
id: Sync
title: Synkronisering mellan enheter
description: "Håll MOCPilot-profiler och inställningar synkroniserade mellan telefoner, surfplattor, datorer och webbredigeraren, och arbeta offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synkronisering mellan enheter

När du är inloggad håller MOCPilot dina profiler och inställningar likadana på alla enheter: telefon, surfplatta, dator och [webbredigeraren](/docs/Introducing/WebEditor). Det finns inget att slå på: synkroniseringen är alltid på för ett konto.

## Så fungerar det {#how-it-works}

- Ändringar sparas först på enheten och laddas upp när du är online (”Synkroniserar profiler…”).
- Andra enheter laddar ned den nya versionen när de är online.
- Köp synkroniseras inte som filer; de hör till ditt konto och finns tillgängliga överallt där du loggar in.
- Profiler som läggs till på webbplatsen (**Lägg till i mitt konto** i katalogen) eller redigeras i webbredigeraren kommer fram via synkroniseringen.
- I gästläge synkroniseras ingenting: profilerna stannar bara på den här enheten.

## Konflikter {#conflicts}

Om samma profil har ändrats på två enheter innan de hann synkroniseras vinner versionen från ditt konto, och din version på den här enheten sparas som en kopia (”(kopia)” läggs till i namnet). MOCPilot meddelar dig om det i ett meddelande om **Profilsynkronisering**. Samma sak händer om en profil som du har ändrat här har tagits bort på en annan enhet.

Om du öppnar en profil som just nu redigeras på en annan enhet kan du välja **Endast visning** (ändringar sparas inte) eller **Ta över redigeringen**.

## Arbeta offline {#working-offline}

Hubbar, dina profiler och nedladdade teman fungerar utan internet.

- Om MOCPilot inte når servern vid start visas **Ingen internetanslutning** med **Arbeta offline** och **Försök igen**.
- Medan du är offline visas etiketten **Offline** högst upp. Funktioner som kräver servern (katalogen och publicering, AI-byggaren, fjärrstyrning, aviseringar, köp, supportmeddelanden) talar om att de behöver en internetanslutning.
- Ändringar som du gör offline laddas upp när anslutningen är tillbaka. När appen når servern igen visas **Anslutningen är tillbaka** med **Gå online**.

<Screenshot name="offline-prompt" alt="Meddelandet Ingen internetanslutning med knapparna Arbeta offline och Försök igen" width={900} />

## Logga ut {#signing-out}

När du loggar ut tas dina profiler och inställningar bort från den här enheten; de finns kvar i ditt konto och kommer tillbaka när du loggar in igen. Om vissa ändringar ännu inte har laddats upp varnar MOCPilot dig först och listar profilerna: anslut till internet och låt synkroniseringen bli klar, eller välj **Logga ut ändå** (en kopia sparas i appens mapp Backup).

## Tips {#tips}

- Innan du publicerar en profil i katalogen ska du se till att den är synkroniserad: katalogen hämtar den från ditt konto.
- För att flytta profiler till en enhet utan konto använder du **Dela** och **Importera profil…** med `.dat`-filer. Se [Hantera profiler](/docs/Application/Profiles/ManageProfiles).
