---
id: LinksIntroducing
title: Introduktion till Snabbkopplingar
description: "Snabbkopplingar kopplar kontrollerna på instrumentpanelen till hubbens motorer och lampor rad för rad, helt utan kod."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Snabbkopplingar {#quick-links}

**Snabbkopplingar** är MOCPilots programredigerare utan kod. Du kopplar kontroller på instrumentpanelen, handkontrollen eller hubbens sensorer till motorer, lampor och indikatorer, **en rad i taget**. Om du har använt den klassiska appen Controlz känner du dig snabbt hemma.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Rader i Snabbkopplingar" style={{width: '100%', maxWidth: 720}} />

## En rad läses som en mening {#a-row-reads-like-a-sentence}

Varje rad går från vänster till höger:

**Ingång → Bearbetning (valfritt) → Åtgärd → Utgång**

> *Joystick 1, Y-axel* → *Mjuk* → *Motor* → *Technic Hub, port A*
>
> ”När jag för joysticken upp och ner snurrar motorn på port A, och den startar och stannar mjukt.”

| Del | Vad det är | Exempel |
|---|---|---|
| **Ingång** | var värdet kommer ifrån | en kontroll på instrumentpanelen, det simulerade fordonet, handkontrollen, en knapp eller sensor på hubben |
| **Bearbetning** | ändrar värdet på vägen (inget, ett eller flera block) | Invertera, Begränsa, Dödzon, Tröskel, Mjuk, Växla |
| **Åtgärd** | vad hubben ska göra | Motor, Servo, Motor i tid, Ljus, Kör ett antal grader, Gå till position … |
| **Utgång** | var det händer | en **Hubb** med dess portar, eller en direktutgång: Indikator, Hubbens LED, LED-matris, Kalibrera servon |

Direktutgångar (Indikator, Hubbens LED, LED-matris, Kalibrera servon) behöver ingen åtgärd: *Hubbens batteri → Indikator*.

## Redigeraren {#the-editor}

<Screenshot name="links-editor" alt="Redigeraren för Snabbkopplingar med rader och paletten" width={900} />

- **Raderna** fyller skärmen och rullar vertikalt. Nya rader börjar i den sista, tomma raden (”Ny rad: ingång”).
- **Paletten** längst ner har tre flikar: **Ingångar**, **Bearbetning** och **Utgångar**. Den byggs utifrån din profil: alla kontroller på instrumentpanelen och alla hubbar under Mina hubbar visas automatiskt, handkontrollen visas när handkontrollsblocken är aktiverade, och en åtgärd visas bara om någon hubb i profilen kan utföra den.
- Radernas status i det övre fältet, precis före **Kör**, visar en grön bock när alla rader är klara, eller ett rött ”!” med antalet problem. På en dator står det också **Alla rader är klara** eller **Problem: N**.

## Bygg en rad {#build-a-row}

1. Dra en ingång från **Ingångar** till den tomma raden. En ny rad skapas.
2. Dra vid behov bearbetningsblock från **Bearbetning** efter ingången.
3. Dra en åtgärd (till exempel **Motor**) från **Utgångar**.
4. Dra utgången **Hubb** efter åtgärden och tryck på de portar som ska användas.
5. Tryck på ett block för att ändra dess inställningar: du väljer bland knappar, utan att skriva något.

Blocken passar ihop som pusselbitar. Formen på varje fog visar vilken sorts signal det gäller, så block som inte kan fungera tillsammans fäster inte:

- ett **värde** från −1 till 1 (joystickaxlar, skjutreglage, pedaler, sensorer);
- **på/av** (knappar, brytare, trösklar);
- fogen **åtgärd → hubb**, så att en hubb bara kan komma efter en åtgärd.

Du tar bort ett block genom att dra tillbaka det till paletten (”Släpp här för att ta bort”) eller trycka på det och välja **Ta bort block**.

## Rader {#rows}

Tryck på radnumret för att öppna radmenyn:

- **Stäng av** / **Slå på**: en avstängd rad finns kvar i programmet men körs inte. Praktiskt när du experimenterar.
- **Ta bort rad**.

Du kan lägga till hur många rader du vill.

## Köra {#run}

Tryck på **Kör**. Medan programmet körs visar varje fog det **aktuella värdet** som passerar genom den, så att du kan se exakt var en signal tar stopp. Du kan inte redigera medan programmet körs; tryck på **Stoppa** för att redigera igen. Se [Köra och åtgärda problem](/docs/Application/Links/Problems).

## Ångra {#undo}

**Ångra** och **Gör om** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z eller knapparna i det övre fältet) går tillbaka upp till 100 steg. De är inte tillgängliga medan programmet körs.

## Läs mer {#read-more}

- [Ingångar](/docs/Application/Links/Inputs): kontroller, fordonet, handkontrollen, hubbens knappar och sensorer
- [Bearbetning](/docs/Application/Links/Processing): Invertera, Begränsa, Dödzon, Tröskel, Mjuk, Växla
- [Åtgärder och utgångar](/docs/Application/Links/Operations)
- [Hubbblocket och portar](/docs/Application/Links/HubsAndPorts)
- [Köra och åtgärda problem](/docs/Application/Links/Problems)
- [Exempel: bil, stridsvagn, kran, tåg](/docs/Application/Links/Examples)
- Blockreferens: [ingångar](/docs/Application/Links/Blocks/InputBlocks), [bearbetning](/docs/Application/Links/Blocks/ProcessingBlocks), [åtgärder och utgångar](/docs/Application/Links/Blocks/OutputBlocks)

## Snabbkopplingar eller Logikblock? {#quick-links-or-logic-blocks}

Snabbkopplingar passar perfekt när varje kontroll helt enkelt ska röra något. När du behöver logik (sekvenser, villkor, variabler eller en reaktion i flera steg på en sensor) använder du [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du väljer programtyp när du skapar profilen; se [jämförelsen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
