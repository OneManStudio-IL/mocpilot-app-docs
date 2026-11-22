---
id: Editor
title: Werken in de editor
description: "Bovenbalk, palet, blokken slepen, zoomen, contextmenu's, ongedaan maken, Monitor, Rugzak, editorinstellingen en de AI-bouwer in Logicablokken."
---

import Screenshot from '@site/src/components/Screenshot';

# Werken in de editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor van Logicablokken" width={900} />

## Bovenbalk {#top-bar}

- **Computer en webeditor**: links **Home** en de menu's, met **Ongedaan maken** en **Opnieuw** ernaast. In het midden: de profielnaam en **Dashboard**, **Hubs** en **Gamepad**. Rechts: **AI-bouwer**, [**Rugzak**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Meer** (⋯), **Afstandsbediening** en de oranje knop **Start**. In een smal venster gaan de knoppen die niet passen naar **Meer**; daar staat altijd **Editorinstellingen…**.
- **Telefoon en tablet**: **Home** links; rechts **Ongedaan maken**, **Opnieuw**, **Dashboard**, **Mijn hubs**, **Afstandsbediening**, **Meer** en **Start / Stop**. In **Meer** staan **AI-bouwer**, **Rugzak**, **Monitor**, **Gamepad** en **Editorinstellingen**.

Zie [Telefoon, tablet en desktop](/docs/Introducing/Layouts#editor-top-bar) voor hoe de balk zich in een smal venster opvouwt.

## Palet en programmagebied {#palette-and-program-area}

- Toon of verberg het palet met **Weergave → Blokkenpalet** (⌘P / Ctrl+P).
- Kies een categorie, sleep een blok naar het programmagebied en zet het onder een ander blok neer om het eraan vast te maken. Een voorbeeld laat zien waar het vastklikt.
- Sleep een hele stapel aan het bovenste blok; sleep een blok uit het midden om dat blok en alles eronder mee te nemen.
- Om blokken te verwijderen sleep je ze terug naar het palet.
- Variabelen, lijsten, berichten en Mijn blokken maak je met de knoppen in hun categorieën (**Maak een variabele**, **Maak een lijst**, **Bericht toevoegen**, **Maak een blok**) of via **Bewerken → Nieuwe variabele… / Nieuwe lijst… / Nieuw bericht… / Nieuw blok…**. Geluiden en voertuigen hebben ook eigen knoppen: **Geluid toevoegen** in [Geluiden](/docs/Application/BlockBuilder/Blocks/Sounds) en **Voertuig aanmaken** in [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoomen en scrollen {#zoom-and-scroll}

- Knijp (op een touchscreen) of gebruik **Weergave → Inzoomen / Uitzoomen / Werkelijke grootte** (⌘+ / ⌘− / ⌘0).
- Sleep op een lege plek om je te verplaatsen.
- Het contextmenu van een lege plek bevat **Inzoomen**, **Uitzoomen**, **Zoom resetten** en **Verwijder N blokken**.

## Blokmenu {#block-menu}

Houd een blok lang ingedrukt (op een touchscreen) of klik er met de rechtermuisknop op:

- **Bewerken**: de waarden wijzigen;
- **Dupliceren**;
- **Blok verwijderen** / **Verwijder N blokken**;
- **Aan rugzak toevoegen**: bewaar het blok en alles wat eraan vastzit in de [rugzak](/docs/Application/BlockBuilder/Backpack);
- **Over het blok**: opent de beschrijving van het blok in deze documentatie;
- **Blok exporteren als SVG** / **Alle blokken exporteren als SVG**: sla een afbeelding op voor een handleiding of een forumbericht.

<Screenshot name="blocks-block-menu" alt="Contextmenu van een blok in Logicablokken" width={900} />

Een blok dat aan een dashboardbediening gekoppeld is, kun je pas verwijderen nadat je het van die bediening hebt losgemaakt.

## Ongedaan maken en opnieuw {#undo-and-redo}

Gebruik **Bewerken → Ongedaan maken / Opnieuw** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) of de knoppen **Ongedaan maken** en **Opnieuw** in de bovenbalk (op een computer naast de menu's).

- Eén keer slepen is één stap; snelle wijzigingen van dezelfde waarde worden samengevoegd tot één stap.
- Ongedaan maken werkt ook terwijl het programma draait.
- Het maken of verwijderen van variabelen, lijsten, berichten of Mijn blokken is ook een stap; als je dat ongedaan maakt, stopt een draaiend programma.
- Waarden die in variabelen en lijsten zijn opgeslagen, worden niet ongedaan gemaakt.
- Het dashboard heeft een eigen geschiedenis voor ongedaan maken.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Weergave → Monitor**) toont de huidige waarden van variabelen en lijsten terwijl het programma draait. De knop staat op een computer in de bovenbalk en op een telefoon of tablet in **Meer**. Op een computer kun je hem in een apart venster openen. Een grote hulp als je een fout zoekt.

<Screenshot name="blocks-monitor" alt="Monitor met variabelen en een lijst terwijl het programma draait" width={900} />

## Rugzak {#backpack}

De **Rugzak** (⇧⌘B / Ctrl+Shift+B, **Weergave → Rugzak**) bewaart blokstapels om ze in elk profiel opnieuw te gebruiken: kies **Aan rugzak toevoegen** in het menu van een blok en tik daarna op het item of sleep het om het in een programma in te voegen. De knop staat naast **Monitor** in de bovenbalk, of in **Meer**. Zie [Rugzak](/docs/Application/BlockBuilder/Backpack).

## Editorinstellingen {#editor-settings}

Open ze via **Meer → Editorinstellingen** in de bovenbalk (op een computer ook via **Programma → Editorinstellingen…**).

- **Blok starten door te klikken**: als je op een blok klikt, wordt het uitgevoerd, zodat je het los kunt testen; staat het programma stil, dan start het daarmee ook.
- **Programma in het midden openen**: als je een profiel opent, wordt het programma op 100% in het midden van het canvas getoond (of vanaf de linkerbovenhoek als het groter is), waar je het tijdens het bewerken ook achterliet. Dit geldt voor alle profielen op dit apparaat.
- **Hubpoorten stoppen wanneer programma stopt**: stopt alle motoren en zet alle lampen uit als je op **Stop** drukt. Laat dit aan staan, tenzij de motoren hun toestand moeten behouden.
- **Blokniveau selecteren**: Beginner, Gevorderd of Guru.

<Screenshot name="blocks-editor-settings" alt="Paneel Editorinstellingen in Logicablokken" width={900} />

## Blokniveaus {#block-levels}

| Niveau | Toont |
|---|---|
| **Beginner** | de eenvoudigste blokken; een overzichtelijk palet voor kinderen en eerste stappen |
| **Gevorderd** | de gangbare logica- en apparaatblokken |
| **Guru** | de complete set blokken |

Het niveau wordt in het profiel opgeslagen. Blokken die al in het programma staan, blijven werken als je het niveau verlaagt.

## AI-bouwer {#ai-builder}

Met [MocPilot Pro](/docs/Application/Account/Pro) stelt de **AI-bouwer** (de knop met de sterretjes in de bovenbalk, **Meer → AI-bouwer** op een telefoon of tablet, ⇧⌘I / Ctrl+Shift+I) de hubs, het dashboard en het programma in op basis van een beschrijving die je typt of uitspreekt, en past daarna het profiel aan zoals je vraagt. Hij werkt in profielen met Logicablokken en met Snelle koppelingen. Zie [AI-bouwer](/docs/Application/Profiles/AiBuilder).

### Zo krijg je een goed resultaat {#ai-builder-tips}

Noem de hub, vertel wat er op elke poort is aangesloten en wat het moet doen, en hoe je het wilt besturen. Zie [Een goede opdracht schrijven](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Desktopmenu's {#desktop-menus}

| Menu | Items |
|---|---|
| Bestand | Profiel sluiten (⌘W) |
| Bewerken | Ongedaan maken, Opnieuw, Nieuwe variabele…, Nieuwe lijst…, Nieuw bericht…, Nieuw blok… |
| Weergave | Blokkenpalet (⌘P), [Rugzak](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Inzoomen, Uitzoomen, Werkelijke grootte |
| Programma | Start (⌘R), Stop (⌘.), Editorinstellingen… |

Gebruik op Windows Ctrl in plaats van ⌘ en Shift in plaats van ⇧.
