---
id: ArrangingControls
title: Lägga till och ordna kontroller
description: "Lägg till kontroller från paletten, flytta dem och ändra storlek, duplicera, lås och ta bort dem."
---

import Screenshot from '@site/src/components/Screenshot';

# Lägga till och ordna kontroller

## Lägga till en kontroll {#add-a-control}

1. Tryck på **+** (**Lägg till kontroll**) på instrumentpanelen. På en dator öppnas paletten i ett eget fönster.
2. Välj en kontrolltyp i listan. Typerna är grupperade: **Joysticks**, **Reglage**, **Knappar och växlar**, **Skärmar**, sedan **Fordon och special** för [specialkontrollerna](/docs/Application/Dashboard/SpecialControls) och **Mina designer** för designer du har sparat. Skriv i **Sök kontroller** för att snabbt hitta en kontroll.
3. Raden med utseenden visar den valda typen i alla [teman](/docs/Application/Themes/ThemesOverview) (för en specialkontroll alla dess utseenden). Tryck på ett utseende för att se det i den stora förhandsvisningen; du kan prova det direkt där.
4. Ställ in kontrollen under **Konfigurera**: flikarna **Stil** och **Inställningar** samt storleken.
5. Tryck på **Lägg till på instrumentpanelen**. På en dator kan du lägga till flera kontroller i följd.

<Screenshot name="controller-palette" alt="Paletten Lägg till kontroll" width={900} />

Kontrollen hamnar på första lediga yta och får märket **NY**. Om det inte finns plats säger MOCPilot till: frigör lite utrymme eller välj en mindre storlek.

Kontroller från teman som du inte äger visar **Köp** och **Allt med MocPilot Pro** i stället för **Lägg till på instrumentpanelen**. Se [Skaffa, köpa och uppdatera teman](/docs/Application/Themes/GettingThemes).

## Flytta {#move}

I redigeringsläget trycker du på en kontroll och drar den. När du släpper den fäster den mot närmaste ruta i rutnätet. Om den skulle överlappa en annan kontroll hoppar den tillbaka.

## Storlekar {#sizes}

Varje kontroll har tre storlekar: **S**, **M** och **L**. Ändra den med **Storlek** i kontrollens egenskaper. Storlekar i rutor (bredd × höjd):

| Kontroll | S | M | L |
|---|---|---|---|
| Joystick, Riktad pad | 7×7 | 10×10 | 13×13 |
| Skjutreglage | 10×3 | 14×4 | 18×5 |
| Ver. reglage | 3×10 | 4×14 | 5×18 |
| Vridratt | 6×6 | 8×8 | 10×10 |
| Knapp, Brytare | 3×3 | 4×4 | 5×5 |
| Stegswitch | 8×3 | 12×4 | 16×5 |
| Ver. stegswitch | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Batterinivå, Hastighetsmätare | 6×6 | 8×8 | 10×10 |
| Lutningsmonitor | 8×4 | 12×6 | 16×8 |
| Ratt | 8×8 | 12×12 | 16×16 |
| Pedaler | 11×8 | 16×12 | 21×16 |
| Manuell växellåda, Automatisk växellåda | 8×8 | 10×10 | 12×12 |
| Handbroms | 4×7 | 6×10 | 8×13 |
| Blinkers | 8×5 | 10×6 | 14×8 |
| Tågreglage | 6×8 | 8×10 | 10×13 |

Hela fältet är 40 × 20 rutor. Om en större storlek inte får plats flyttar du först grannarna.

## Markera och redigera {#select-and-edit}

Tryck (klicka) på en kontroll för att markera den och öppna dess **egenskaper**. Se [Kontrollens egenskaper](/docs/Application/Dashboard/ControlProperties).

## Snabbmeny {#context-menu}

Tryck länge (pekskärm) eller högerklicka (dator) på en kontroll:

- **Lås** / **Lås upp**
- **Egenskaper**
- **Ändra tema**: byter kontrollen till ett annat tema som du äger och som har samma kontrolltyp
- **Duplicera**: en kopia med samma egenskaper
- **Duplicera (bara typ)**: en ny kontroll av samma typ med standardegenskaper
- **Ta bort**

Tryck länge eller högerklicka på en tom del av fältet:

- **Lås allt** / **Lås upp allt**
- **Ta bort N kontroller**: tar bort alla olåsta kontroller

På en dator, med egenskapspanelen öppen: **Esc** stänger den, **Delete** / **Backsteg** tar bort kontrollen, **⌘D / Ctrl+D** duplicerar den.

## Låsa kontroller {#lock-controls}

En **låst** kontroll kan inte flyttas eller tas bort, så du råkar inte rubba den när du kör eller redigerar. Den visar en låsikon. Lås en kontroll från dess meny eller med **Lås kontrollern** i dess inställningar, eller lås allt med **Lås allt**.

## Kontrollnamn {#control-names}

Varje kontroll har ett kort namn som visas på dess ram i redigeringsläget, till exempel **JOY1**, **SLDR2** eller **BTN1**. Programmet hänvisar till kontrollerna med de här namnen: i Snabbkopplingar står det *JOY1* på ingångsblocket, och i Logikblock väljer du *JOY1* i blockets meny.

## Ta bort {#delete}

Använd **Ta bort** i menyn eller papperskorgsknappen i egenskaperna. Låsta kontroller kan inte tas bort. En kontroll som programmet använder kan inte tas bort förrän du tar bort dess rader eller block.
