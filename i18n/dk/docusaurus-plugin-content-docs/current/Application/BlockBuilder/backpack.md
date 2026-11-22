---
id: Backpack
title: Rygsæk
description: "Gem dele af dine Logikblokke-programmer i rygsækken, og indsæt dem i en hvilken som helst profil på alle dine enheder."
---

import Screenshot from '@site/src/components/Screenshot';

# Rygsæk {#backpack}

**Rygsæk** er stedet, hvor du gemmer dele af dine blokprogrammer for at genbruge dem i andre profiler: en styrerutine, et lysshow, en egen blok, som du har skrevet én gang og vil have alle vegne. Læg en stak blokke i rygsækken i én profil, og indsæt den derefter i en hvilken som helst anden profil, på denne enhed eller på enhver enhed, hvor du er logget ind.

Rygsækken er en del af editoren til [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profiler med Hurtige forbindelser har den ikke.

<Screenshot name="backpack-panel" alt="Panelet Rygsæk ved siden af et blokprogram" width={900} />

## Hvad rygsækken gemmer {#what-the-backpack-keeps}

Hvert element i rygsækken er en **kopi** af de blokke, du har gemt:

- **En stak**: den valgte blok sammen med alt, hvad der hænger under og inden i den, præcis som **Dupliker** kopierer den.
- **En egen blok**: Hvis du gemmer `definere …`-blokken for en blok fra [Mine blokke](/docs/Application/BlockBuilder/Blocks/MyBlocks), gemmer rygsækken hele definitionen. Sådanne elementer er markeret med **Min blok**.

Elementet husker også de egne blokke, som dine blokke bruger (også via andre egne blokke), og navnene på de variabler, lister, beskeder, køretøjer og lyde, de henviser til, så blokkene virker, når du indsætter dem et andet sted.

Indsatte blokke bliver en helt almindelig del af profilens program. Intet i profilen afhænger af rygsækken: Hvis du sletter eller omdøber et element, ændres de programmer, du har indsat det i, ikke. Elementer kan ikke redigeres i rygsækken. Vil du ændre et, så indsæt det, rediger blokkene i programmet, og gem dem i rygsækken igen som et nyt element.

## Gem blokke i rygsækken {#save-blocks}

1. Højreklik på en blok i programmet (computer), eller tryk og hold på den (telefon, tablet).
2. Vælg **Læg i rygsækken**.
3. Skriv et navn i **Navn på blokkene**, og tryk på **Gem**.

Blokken og alt, hvad der hænger ved den, kommer i rygsækken. Vil du gemme definitionen af en egen blok, skal du åbne menuen på dens `definere …`-blok.

<Screenshot name="backpack-add" alt="Blokmenuen med Læg i rygsækken og vinduet til navnet" width={900} />

## Åbn rygsækken {#open}

- **Computer og webeditor**: knappen **Rygsæk** i editorens topbjælke, **Vis → Rygsæk** i menuen eller **Ctrl+Shift+B** (**⌘⇧B** på en Mac). Er vinduet smalt, ligger knappen i menuen **Mere**. Rygsækken åbnes som et panel i højre side af editoren, ved siden af [Monitor](/docs/Application/BlockBuilder/Editor#monitor), hvis den også er åben.
- **Telefon og tablet**: **Mere → Rygsæk** i editorens topbjælke. Rygsækken åbnes som et panel oven på editoren.

Knappen er fremhævet, mens rygsækken er åben. Tryk på den igen for at lukke rygsækken.

Hvert element viser sit billede, sit navn og antallet af blokke i det (**Blokke: N**). Teksten nederst i panelet fortæller, hvor rygsækken gemmes (se [nedenfor](#where-it-is-kept)).

## Indsæt blokke i et program {#insert}

- **Tryk på et element**: Dets blokke vises i den synlige del af programmet.
- **Træk et element ind på programmet**: Blokkene havner, hvor du slipper dem. Træk til siden, mod programmet; træk op eller ned ruller listen.
- **Elementets menu (⋯)**: **Indsæt**, **Omdøb…** eller **Slet**.

På telefoner og tablets lukker rygsækken efter indsættelsen, så du kan se blokkene. Én gang **Fortryd** fjerner alt, hvad der blev indsat.

### Hvad der sker, når du indsætter {#what-happens}

- **Mine blokke**: En egen blok, som profilen allerede har med samme indhold, bliver genbrugt, så indsætter du de samme blokke igen, opstår der ikke kopier af den. Bruger en anden egen blok i profilen det samme navn internt, får den indsatte sin egen. Indsætter du et element med en egen blok, der allerede findes i profilen, sker der ingenting, og appen viser **Findes allerede**: Find blokken under **Mine blokke**.
- **Variabler, lister, beskeder og køretøjer**: Har profilen en med samme navn, bruger blokkene den; ellers oprettes den. Variablers værdier og listers indhold kopieres ikke. Er navnet optaget af noget andet, får du en besked som *Variablen "speed" kunne ikke oprettes: navnet er optaget*.
- **Lyde**: Dine egne lyde er filer i profilen og gemmes ikke i rygsækken. Har profilen ingen lyd med det navn, ser du *Lyden "…" findes ikke i denne profil: vælg en lyd i blokkene*. Indbyggede lyde virker overalt.
- **Hub- og dashboardblokke**: Blokke til en hub, en dashboardkontrol eller en spilcontroller, som denne profil ikke har, kan ikke indsættes. Før noget ændres, viser appen **Nogle blokke kan ikke indsættes** med en liste over disse blokke og hvor mange der udelades, og spørger, om de øvrige skal indsættes. Tilføj først hubben eller dashboardkontrollen, hvis du vil beholde dem. Passer ingen af blokkene til profilen, indsættes der ingenting.

## Omdøb og slet {#rename-delete}

Åbn elementets menu (⋯):

- **Omdøb…** ændrer elementets navn.
- **Slet** fjerner det, når du har bekræftet (**Slet fra rygsækken?**). Programmer, du har indsat det i, beholder deres blokke.

Rygsækken fjerner aldrig elementer af sig selv: Slet det, du ikke længere har brug for.

## Hvor rygsækken gemmes {#where-it-is-kept}

- **Uden konto (gæst)**: kun på denne enhed. I panelet står der *Gemt på denne enhed. Log ind for at have rygsækken på alle dine enheder.*
- **Logget ind**: også på din konto, så du har den samme rygsæk på alle dine enheder, også i [webeditoren](/docs/Introducing/WebEditor). I panelet står der *Gemt på din konto: den samme rygsæk på alle dine enheder.* Ændringer på én enhed vises på de andre.
- **Første login**: Elementer, du har gemt som gæst på denne enhed, flyttes til din konto.

Du kan bruge rygsækken offline. Ændringer gemmes på enheden og sendes til din konto, når forbindelsen er tilbage (imens viser panelet **Synkroniserer…**). Et element, der stadig hentes fra din konto, kan ikke indsættes endnu: Appen siger **Ikke klar endnu**, så prøv igen om et øjeblik.

## Begrænsninger {#limits}

| | Grænse |
|---|---|
| Elementer i rygsækken | 200 |
| Størrelse på ét element | ca. 512 KB (en meget stor programdel passer måske ikke: gem en mindre del) |
| Elementets navn | op til 100 tegn |

Er rygsækken på din konto fuld, eller er et element for stort til den, bliver elementet kun på denne enhed, og appen fortæller dig det. Elementer, der er gemt med en nyere version af appen, kan først indsættes, når du har opdateret appen.

## Fejlfinding {#troubleshooting}

| Besked | Hvad du skal gøre |
|---|---|
| **Rygsækken er fuld (200 elementer). Slet noget, du ikke har brug for.** | Slet elementer, du ikke længere bruger. |
| **For mange blokke til rygsækken. Gem en mindre del.** | Gem en mindre stak, eller del programmet op i flere elementer. |
| **Nogle blokke kan ikke indsættes** | Profilen mangler en hub, en dashboardkontrol eller en spilcontroller, som blokkene skal bruge. Tilføj den, og indsæt igen, eller indsæt de øvrige blokke. |
| **Findes allerede** | Blokken findes allerede i denne profil: Find den under **Mine blokke**. |
| **Ikke klar endnu** | Elementet hentes stadig fra din konto. Vent et øjeblik, og prøv igen. |
| **Disse blokke er gemt med en nyere version af appen. Opdater appen for at bruge dem.** | Opdater MOCPilot på denne enhed. |
