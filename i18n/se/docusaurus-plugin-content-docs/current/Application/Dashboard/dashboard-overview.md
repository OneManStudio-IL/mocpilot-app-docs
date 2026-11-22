---
id: DashboardOverview
title: Redigera instrumentpanelen
description: "Instrumentpanelen i MOCPilot: fältet, rutnätet, det övre fältet, bakgrunden och ångra."
---

import Screenshot from '@site/src/components/Screenshot';

# Redigera instrumentpanelen

**Instrumentpanelen** är skärmen du kör modellen från: joystickar, skjutreglage, knappar, monitorer och andra kontroller. Varje profil har en instrumentpanel.

Öppna den med knappen **Instrumentpanel** i redigerarens övre fält (⌘2 / Ctrl+2 på en dator). På en telefon med smal skärm finns den under **Mer**.

- **Telefon och surfplatta**: instrumentpanelen öppnas i helskärm ovanpå redigeraren.
- **Dator**: instrumentpanelen öppnas i ett eget fönster, **Instrumentpanel**, så att du kan ha den bredvid programmet.
- **Webbredigerare**: en flytande panel som du kan dra och ändra storlek på.

<Screenshot name="dashboard-edit" alt="Instrumentpanelen i redigeringsläge med punktrutnätet" width={900} />

## Fältet och rutnätet {#the-field-and-the-grid}

- Fältet har alltid formatet **2:1** och anpassas till skärmen, så en instrumentpanel ser likadan ut på en telefon, en surfplatta och en dator.
- I redigeringsläget visas ett **punktrutnät** med 40 × 20 rutor. Kontrollerna fäster mot rutnätet.
- Kontroller kan inte överlappa varandra. Om en kontroll inte får plats hoppar den tillbaka dit den var.

## Övre fältet {#toolbar}

**Telefon och surfplatta**

| Knapp | Vad den gör |
|---|---|
| ← | tillbaka till programredigeraren |
| Ångra / Gör om | ångrar och gör om ändringar på instrumentpanelen |
| **Välj** | markera flera kontroller och lås, lås upp, ta bort eller redigera dem tillsammans; **Klar** avslutar läget |
| ⚙ (Instrumentpanelsinställningar) | alternativ för bakgrund och rutnät (se nedan) |
| **+** (Lägg till kontroll, med en orange ring) | öppnar kontrollpaletten; se [Lägga till och ordna kontroller](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Kör** / **Stoppa**: startar och stoppar programmet |

Medan programmet körs är redigeringsknapparna dolda.

**Dator och webbredigerare**

Det övre fältet ser ut som redigerarens:

- **Vänster**: **Hem** (stänger profilen), menyerna **Fil**, **Redigera** och **Visa**, sedan **Ångra** och **Gör om**.
- **Mitten**: profilens namn och **Block** (eller **Kopplingar** i en profil med Snabbkopplingar, ⌘1 / Ctrl+1) för att gå tillbaka till programmet. Instrumentpanelen har ingen egen knapp här: det är sidan du är på.
- **Höger**: **Välj**, **Instrumentpanelsinställningar** (⚙) och den orange knappen **+ Kontroll** (Lägg till kontroll). I ett smalt fönster döljs profilens namn och knappen **Block**, och **+ Kontroll** behåller bara sitt **+**.

På en dator finns ingen **Kör** i instrumentpanelens fält: kör och stoppa programmet från redigeraren (⌘R / Ctrl+R, ⌘. / Ctrl+.). Medan programmet körs är **Välj**, **Instrumentpanelsinställningar** och **+ Kontroll** inte tillgängliga.

Menyer: **Fil** (Stäng profil, Öppna i separat fönster), **Redigera** (Ångra, Gör om) och **Visa** (Block ⌘1, Instrumentpanel ⌘2). I det separata fönstret Instrumentpanel visar fältet fönstrets titel i stället för **Hem**, **Fil** har **Stäng fönster**, och det finns ingen meny **Visa** och ingen knapp **Block**.

## Ångra och gör om {#undo-and-redo}

Instrumentpanelen har en egen historik, separat från programmets. Du kan ångra varje flytt, storleksändring, egenskapsändring, tillägg och borttagning.

## Instrumentpanelsinställningar {#dashboard-settings}

**Bakgrundsbild**: tryck på **Ändra** och välj:

- **Välj färdig**: en färdig bakgrund som följer med ett tema. Galleriet visar bakgrunderna från de teman vars kontroller finns på den här instrumentpanelen. En färdig bakgrund fyller alltid skärmen runt fältet, så alternativen nedan gäller inte för den.
- **Ladda upp egen**: valfri bild från din enhet. Den sparas i profilen.

**Ta bort** tar bort bakgrunden.

<Screenshot name="dashboard-backgrounds" alt="Instrumentpanelsinställningar med galleriet av färdiga bakgrunder" width={900} />

För en egen bild kan du också ställa in:

- **Bildens fyllnadsläge**: Sträck, Behåll proportioner och anpassa, Behåll proportioner och beskär, Sida vid sida, Sida vid sida vertikalt, Sida vid sida horisontellt eller Fyll ut.
- **Bildens överordnade område**: **Arbetsyta** (bara fältet) eller **Hela skärmen**.
- **Bildopacitet**, **Aktivera bildoskärpa** och **Oskärpevärde**: gör bakgrunden lugnare så att kontrollerna syns bättre.

**Dölj punkter**: döljer rutnätets punkter medan profilen körs. I redigeringsläget syns punkterna fortfarande, så att du kan rada upp kontrollerna.

## Kontrollerna och programmet {#controls-and-the-program}

En kontroll ger värden; programmet bestämmer vad de gör. En kontroll som programmet använder kan inte tas bort förrän programmet slutar använda den. I Snabbkopplingar tar du bort raderna som använder den; i Logikblock tar du bort dess block.

## Läs mer {#read-more}

- [Lägga till och ordna kontroller](/docs/Application/Dashboard/ArrangingControls): lägga till, flytta, storlekar, låsa
- [Kontrolltyper](/docs/Application/Dashboard/ControlTypes)
- [Specialkontroller](/docs/Application/Dashboard/SpecialControls): ratt, pedaler, växelspak, handbroms, blinkers, tågreglage
- [Kontrollens egenskaper](/docs/Application/Dashboard/ControlProperties)
- [Indikatorer och monitorer](/docs/Application/Dashboard/Indicators)
