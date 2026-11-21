---
id: Editor
title: Arbeta i redigeraren
description: "Palett, dra block, zoom, snabbmenyer, ångra, Monitor, Redigerarens inställningar och AI-byggaren i Logikblock."
---

import Screenshot from '@site/src/components/Screenshot';

# Arbeta i redigeraren {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Redigeraren för Logikblock" width={900} />

## Palett och programområde {#palette-and-program-area}

- Visa eller dölj paletten med **Visa → Blockpalett** (⌘P / Ctrl+P).
- Välj en kategori, dra ett block till programområdet och släpp det under ett annat block för att fästa det. En förhandsvisning visar var det kommer att fästa.
- Dra en hel hög i dess översta block; dra ett block från mitten för att ta med det och allt under det.
- Ta bort block genom att dra tillbaka dem till paletten.
- Variabler, listor, meddelanden och Mina block skapas med knapparna i respektive kategori (**Skapa en variabel**, **Skapa en lista**, **Lägg till meddelande**, **Skapa ett block**) eller via **Redigera → Ny variabel… / Ny lista… / Nytt meddelande… / Nytt block…**. Ljud och fordon har också egna knappar: **Lägg till ljud** i [Ljud](/docs/Application/BlockBuilder/Blocks/Sounds) och **Skapa fordon** i [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zooma och rulla {#zoom-and-scroll}

- Nyp (på en pekskärm) eller använd **Visa → Zooma in / Zooma ut / Verklig storlek** (⌘+ / ⌘− / ⌘0).
- Dra på en tom yta för att flytta dig runt.
- Snabbmenyn för en tom yta har **Zooma in**, **Zooma ut**, **Återställ zoom** och **Ta bort N block**.

## Blockmenyn {#block-menu}

Tryck länge (på en pekskärm) eller högerklicka på ett block:

- **Redigera**: ändra dess värden;
- **Duplicera**;
- **Ta bort block** / **Ta bort N block**;
- **Om blocket**: öppnar blockets beskrivning i den här dokumentationen;
- **Exportera block som SVG** / **Exportera alla block som SVG**: spara en bild till en guide eller ett foruminlägg.

<Screenshot name="blocks-block-menu" alt="Snabbmenyn för ett block i Logikblock" width={900} />

Ett block som är kopplat till en kontroll på instrumentpanelen kan tas bort först när du har frigjort det från kontrollen.

## Ångra och gör om {#undo-and-redo}

Använd **Redigera → Ångra / Gör om** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) eller de flytande knapparna.

- En dragning är ett steg; snabba ändringar av samma värde slås ihop till ett steg.
- Ångra fungerar även medan programmet körs.
- Att skapa eller ta bort variabler, listor, meddelanden eller Mina block är också ett steg; om du ångrar det stoppas ett program som körs.
- Värden som lagrats i variabler och listor ångras inte.
- Instrumentpanelen har sin egen ångrahistorik.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) visar de aktuella värdena för variabler och listor medan programmet körs. På en dator kan du öppna den i ett separat fönster. Den är till stor hjälp när du letar efter ett fel.

<Screenshot name="blocks-monitor" alt="Monitor som visar variabler och en lista medan programmet körs" width={900} />

## Redigerarens inställningar {#editor-settings}

- **Starta block genom klick**: när du klickar på ett block körs det, så att du kan testa det för sig; om programmet är stoppat startas det också.
- **Öppna programmet i mitten**: när du öppnar en profil visas programmet i 100 % mitt på arbetsytan (eller från dess övre vänstra hörn om det är större), oavsett var du lämnade det när du redigerade. Det gäller alla profiler på den här enheten.
- **Stoppa hubbportar när programmet stoppar**: stoppar alla motorer och släcker alla lampor när du trycker på **Stoppa**. Låt den vara påslagen om inte motorerna behöver behålla sitt tillstånd.
- **Välj blocknivå**: Nybörjare, Avancerad eller Guru.

<Screenshot name="blocks-editor-settings" alt="Panelen Redigerarens inställningar i Logikblock" width={900} />

## Blocknivåer {#block-levels}

| Nivå | Visar |
|---|---|
| **Nybörjare** | de enklaste blocken; en luftig palett för barn och första stegen |
| **Avancerad** | de vanliga logik- och enhetsblocken |
| **Guru** | hela uppsättningen block |

Nivån sparas i profilen. Block som redan finns i programmet fortsätter att fungera när du sänker nivån.

## AI-byggare {#ai-builder}

Med [MocPilot Pro](/docs/Application/Account/Pro) konfigurerar **AI-byggare** (knappen med gnistor, ⇧⌘I / Ctrl+Shift+I) hubbarna, instrumentpanelen och programmet utifrån en beskrivning som du skriver eller säger, och ändrar sedan profilen efter dina önskemål. Den fungerar i profiler med Logikblock och Snabbkopplingar. Se [AI-byggare](/docs/Application/Profiles/AiBuilder).

### Så får du ett bra resultat {#ai-builder-tips}

Ange hubben, vad som är anslutet till varje port och vad det ska göra, och hur du vill styra det. Se [Skriv en bra förfrågan](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menyer på datorn {#desktop-menus}

| Meny | Alternativ |
|---|---|
| Fil | Stäng profil (⌘W) |
| Redigera | Ångra, Gör om, Ny variabel…, Ny lista…, Nytt meddelande…, Nytt block… |
| Visa | Blockpalett, Zooma in, Zooma ut, Verklig storlek |
| Program | Kör (⌘R), Stoppa (⌘.) |
