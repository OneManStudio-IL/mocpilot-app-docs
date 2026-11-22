---
id: ArrangingControls
title: Bedieningselementen toevoegen en schikken
description: "Voeg bedieningselementen toe uit het palet, verplaats ze, wijzig de grootte, dupliceer, vergrendel en verwijder ze."
---

import Screenshot from '@site/src/components/Screenshot';

# Bedieningselementen toevoegen en schikken {#add-and-arrange-controls}

## Een bedieningselement toevoegen {#add-a-control}

1. Tik op het dashboard op **+** (**Controller toevoegen**); klik op een computer op **+ Controller** rechts in de bovenbalk. Op een computer opent het palet in een eigen venster, met **Controller toevoegen** in het midden van de bovenbalk.
2. Kies een soort bedieningselement in de lijst. De soorten zijn gegroepeerd: **Joysticks**, **Schuifregelaars**, **Knoppen en schakelaars**, **Monitoren**, daarna **Voertuig & speciaal** voor de [speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls) en **Mijn ontwerpen** voor de ontwerpen die je hebt opgeslagen. Typ in **Bedieningen zoeken** om snel een bedieningselement te vinden.
3. De strook met stijlen toont de gekozen soort in elk [thema](/docs/Application/Themes/ThemesOverview) (bij een speciaal bedieningselement alle stijlen daarvan). Tik op een stijl om hem in het grote voorbeeld te zien; je kunt hem daar meteen uitproberen.
4. Stel het bedieningselement in bij **Configureren**: de tabbladen **Stijl** en **Instellingen** en de grootte.
5. Tik op **Toevoegen aan dashboard** (op een computer de oranje knop rechts in de bovenbalk van het palet). Op een computer kun je meerdere bedieningselementen achter elkaar toevoegen.

<Screenshot name="controller-palette" alt="Het palet Controller toevoegen" width={900} />

Het bedieningselement komt op de eerste vrije plek en krijgt een badge **NIEUW**. Is er geen ruimte, dan meldt MOCPilot dat: maak wat ruimte vrij of kies een kleinere grootte.

Bedieningselementen van thema's die je niet bezit, tonen **Kopen** en **Alles met MocPilot Pro** in plaats van **Toevoegen aan dashboard**. Zie [Thema's krijgen, kopen en bijwerken](/docs/Application/Themes/GettingThemes).

## Verplaatsen {#move}

Houd in de bewerkingsmodus een bedieningselement ingedrukt en sleep het. Als je het loslaat, klikt het vast op de dichtstbijzijnde rastercel. Zou het een ander bedieningselement overlappen, dan springt het terug.

## Grootten {#sizes}

Elk bedieningselement heeft drie grootten: **S**, **M** en **L**. Wijzig die met **Grootte** in de eigenschappen van het bedieningselement. Grootten in rastercellen (breedte × hoogte):

| Bedieningselement | S | M | L |
|---|---|---|---|
| Joystick, Richtingspad | 7×7 | 10×10 | 13×13 |
| Schuifregelaar | 10×3 | 14×4 | 18×5 |
| Ver. schuifregelaar | 3×10 | 4×14 | 5×18 |
| Draaiknop | 6×6 | 8×8 | 10×10 |
| Knop, Schakelaar | 3×3 | 4×4 | 5×5 |
| Stappenschakelaar | 8×3 | 12×4 | 16×5 |
| Ver. stappenschakelaar | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Batterijniveau, Snelheidsmeter | 6×6 | 8×8 | 10×10 |
| Kantelmonitor | 8×4 | 12×6 | 16×8 |
| Stuurwiel | 8×8 | 12×12 | 16×16 |
| Pedalen | 11×8 | 16×12 | 21×16 |
| Handgeschakelde bak, Automatische bak | 8×8 | 10×10 | 12×12 |
| Handrem | 4×7 | 6×10 | 8×13 |
| Richtingaanwijzers | 8×5 | 10×6 | 14×8 |
| Treinregelaar | 6×8 | 8×10 | 10×13 |

Het hele veld is 40 × 20 cellen. Past een grotere grootte niet, verplaats dan eerst de buren.

## Selecteren en bewerken {#select-and-edit}

Tik (klik) op een bedieningselement om het te selecteren en de **eigenschappen** te openen. Zie [Eigenschappen van bedieningselementen](/docs/Application/Dashboard/ControlProperties).

## Contextmenu {#context-menu}

Houd een bedieningselement ingedrukt (touchscreen) of klik er met de rechtermuisknop op (computer):

- **Vergrendelen** / **Ontgrendelen**
- **Eigenschappen**
- **Thema wijzigen**: zet het bedieningselement over op een ander thema dat je bezit en dat dezelfde soort bedieningselement heeft
- **Dupliceren**: een kopie met dezelfde eigenschappen
- **Dupliceren (alleen type)**: een nieuw bedieningselement van dezelfde soort met standaardeigenschappen
- **Verwijderen**

Houd een leeg deel van het veld ingedrukt of klik er met de rechtermuisknop op:

- **Alles vergrendelen** / **Ontgrendel alles**
- **N controllers verwijderen**: verwijdert alle niet-vergrendelde bedieningselementen

Op een computer met het eigenschappenpaneel open: **Esc** sluit het, **Delete** / **Backspace** verwijdert het bedieningselement, **⌘D / Ctrl+D** dupliceert het.

## Bedieningselementen vergrendelen {#lock-controls}

Een **vergrendeld** bedieningselement kan niet worden verplaatst of verwijderd, zodat je het tijdens het rijden of bewerken niet per ongeluk verschuift. Het toont een slotpictogram. Vergrendel één bedieningselement via het menu ervan of met **Lock de controller** in de instellingen, of vergrendel alles met **Alles vergrendelen**.

## Namen van bedieningselementen {#control-names}

Elk bedieningselement heeft een korte naam die in de bewerkingsmodus op het kader staat, zoals **JOY1**, **SLDR2** of **BTN1**. Het programma verwijst met deze namen naar bedieningselementen: bij Snelle koppelingen staat in het invoerblok *JOY1*, en bij Logicablokken kies je *JOY1* in het menu van het blok.

## Verwijderen {#delete}

Gebruik **Verwijderen** in het menu of de prullenbakknop in de eigenschappen. Vergrendelde bedieningselementen kunnen niet worden verwijderd. Een bedieningselement dat het programma gebruikt, kun je pas verwijderen als je de bijbehorende rijen of blokken hebt verwijderd.
