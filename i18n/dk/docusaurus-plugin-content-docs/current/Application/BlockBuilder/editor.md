---
id: Editor
title: Arbejd i editoren
description: "Topbjælken, paletten, træk af blokke, zoom, kontekstmenuer, fortryd, Monitor, Rygsæk, Editorindstillinger og AI-byggeren i Logikblokke."
---

import Screenshot from '@site/src/components/Screenshot';

# Arbejd i editoren {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editoren i Logikblokke" width={900} />

## Topbjælke {#top-bar}

- **Computer og webeditor**: **Hjem** og menuerne til venstre med **Fortryd** og **Gentag** ved siden af. I midten: profilens navn samt **Dashboard**, **Hubs** og **Spilcontroller**. Til højre: **AI-bygger**, [**Rygsæk**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Mere** (⋯), **Fjernstyring** og den orange knap **Kør**. I et smalt vindue flytter de knapper, der ikke er plads til, ind under **Mere**; der finder du altid **Editorindstillinger…**.
- **Telefon og tablet**: **Hjem** til venstre; til højre **Fortryd**, **Gentag**, **Dashboard**, **Mine hubs**, **Fjernstyring**, **Mere** og **Kør / Stop**. Under **Mere** ligger **AI-bygger**, **Rygsæk**, **Monitor**, **Spilcontroller** og **Editorindstillinger**.

Se [Telefon, tablet og computer](/docs/Introducing/Layouts#editor-top-bar) for, hvordan bjælken foldes sammen i et smalt vindue.

## Palet og programområde {#palette-and-program-area}

- Vis eller skjul paletten med **Vis → Blokpalet** (⌘P / Ctrl+P).
- Vælg en kategori, træk en blok ind i programområdet, og slip den under en anden blok for at sætte den fast. En forhåndsvisning viser, hvor den klikker fast.
- Træk en hel stak i dens øverste blok; træk en blok i midten for at tage den og alt under den.
- Du sletter blokke ved at trække dem tilbage til paletten.
- Variabler, lister, beskeder og Mine blokke oprettes med knapperne i deres kategorier (**Opret en variabel**, **Opret en liste**, **Tilføj besked**, **Opret blok**) eller via **Rediger → Ny variabel… / Ny liste… / Ny besked… / Ny blok…**. Lyde og køretøjer har også deres egne knapper: **Tilføj lyd** under [Lyde](/docs/Application/BlockBuilder/Blocks/Sounds) og **Opret køretøj** under [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom og rulning {#zoom-and-scroll}

- Knib (på en berøringsskærm), eller brug **Vis → Zoom ind / Zoom ud / Faktisk størrelse** (⌘+ / ⌘− / ⌘0).
- Træk i et tomt område for at flytte rundt.
- Kontekstmenuen for et tomt område har **Zoom ind**, **Zoom ud**, **Nulstil zoom** og **Slet N blokke**.

## Blokmenu {#block-menu}

Tryk længe (på en berøringsskærm), eller højreklik på en blok:

- **Rediger**: ændr dens værdier;
- **Duplikat**;
- **Slet blok** / **Slet N blokke**;
- **Læg i rygsækken**: gem blokken og alt, hvad der hænger ved den, i [rygsækken](/docs/Application/BlockBuilder/Backpack);
- **Om blokken**: åbner blokkens beskrivelse i denne dokumentation;
- **Eksportér blok som SVG** / **Eksportér alle blokke som SVG**: gem et billede til en vejledning eller et forumindlæg.

<Screenshot name="blocks-block-menu" alt="Kontekstmenuen for en blok i Logikblokke" width={900} />

En blok, der er knyttet til en kontrol på dashboardet, kan først slettes, når du har frigjort den fra kontrollen.

## Fortryd og gentag {#undo-and-redo}

Brug **Rediger → Fortryd / Gentag** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) eller knapperne **Fortryd** og **Gentag** i topbjælken (ved siden af menuerne på en computer).

- Ét træk er ét trin; hurtige ændringer af samme værdi slås sammen til ét trin.
- Fortryd virker også, mens programmet kører.
- Oprettelse eller sletning af variabler, lister, beskeder eller Mine blokke er også et trin; fortryder du det, stopper et kørende program.
- Værdier, der er gemt i variabler og lister, fortrydes ikke.
- Dashboardet har sin egen fortrydelseshistorik.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Vis → Monitor**) viser variablernes og listernes aktuelle værdier, mens programmet kører. Knappen sidder i topbjælken på en computer og under **Mere** på en telefon eller tablet. På en computer kan du åbne den i et separat vindue. Den er en stor hjælp, når du leder efter en fejl.

<Screenshot name="blocks-monitor" alt="Monitor, der viser variabler og en liste, mens programmet kører" width={900} />

## Rygsæk {#backpack}

**Rygsæk** (⇧⌘B / Ctrl+Shift+B, **Vis → Rygsæk**) gemmer blokstakke, som du kan genbruge i alle profiler: Vælg **Læg i rygsækken** i en bloks menu, og tryk derefter på elementet, eller træk det, for at indsætte det i et program. Knappen sidder ved siden af **Monitor** i topbjælken eller under **Mere**. Se [Rygsæk](/docs/Application/BlockBuilder/Backpack).

## Editorindstillinger {#editor-settings}

Du åbner dem via **Mere → Editorindstillinger** i topbjælken (på en computer også via **Program → Editorindstillinger…**).

- **Start blok ved klik**: Et klik på en blok kører den, så du kan teste den alene; er programmet stoppet, startes det også.
- **Åbn programmet i midten**: Når du åbner en profil, vises programmet i 100 % midt på lærredet (eller fra dets øverste venstre hjørne, hvis det er større), uanset hvor du forlod det under redigeringen. Dette gælder alle profiler på denne enhed.
- **Stop hub-porte, når programmet stopper**: stopper alle motorer og slukker alle lys, når du trykker på **Stop**. Lad den være slået til, medmindre motorerne skal bevare deres tilstand.
- **Vælg blokniveau**: Begynder, Avanceret eller Guru.

<Screenshot name="blocks-editor-settings" alt="Panelet Editorindstillinger i Logikblokke" width={900} />

## Blokniveauer {#block-levels}

| Niveau | Viser |
|---|---|
| **Begynder** | de enkleste blokke; en overskuelig palet til børn og første skridt |
| **Avanceret** | de almindelige logik- og enhedsblokke |
| **Guru** | hele sættet af blokke |

Niveauet gemmes i profilen. Blokke, der allerede er i programmet, virker fortsat, når du sænker niveauet.

## AI-bygger {#ai-builder}

Med [MocPilot Pro](/docs/Application/Account/Pro) opsætter **AI-byggeren** (knappen med gnisterne i topbjælken, **Mere → AI-bygger** på en telefon eller tablet, ⇧⌘I / Ctrl+Shift+I) hubbene, dashboardet og programmet ud fra en beskrivelse, som du skriver eller indtaler, og ændrer derefter profilen, som du beder om. Den virker i profiler med Logikblokke og Hurtige forbindelser. Se [AI-bygger](/docs/Application/Profiles/AiBuilder).

### Sådan får du et godt resultat {#ai-builder-tips}

Nævn hubben, fortæl, hvad der er tilsluttet hver port, og hvad det skal gøre, samt hvordan du vil styre det. Se [Skriv en god forespørgsel](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menuer på computer {#desktop-menus}

| Menu | Punkter |
|---|---|
| Fil | Luk profil (⌘W) |
| Rediger | Fortryd, Gentag, Ny variabel…, Ny liste…, Ny besked…, Ny blok… |
| Vis | Blokpalet (⌘P), [Rygsæk](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Zoom ind, Zoom ud, Faktisk størrelse |
| Program | Kør (⌘R), Stop (⌘.), Editorindstillinger… |

På Windows bruger du Ctrl i stedet for ⌘ og Shift i stedet for ⇧.
