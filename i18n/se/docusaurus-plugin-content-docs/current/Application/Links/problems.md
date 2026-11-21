---
id: Problems
title: Köra och åtgärda problem
description: "Problempanelen, röda ramar, aktuella värden och vanliga meddelanden i Snabbkopplingar."
---

import Screenshot from '@site/src/components/Screenshot';

# Köra och åtgärda problem {#running-and-fixing-problems}

## Är allt klart? {#is-everything-ready}

Knappen **Problem** i redigerarens övre fält visar:

- en **grön bock**: ”Alla rader är klara”;
- ett **rött ”!”**: ”Problem: N”.

Tryck på den för att öppna problempanelen (en sidopanel på telefon, en meny på surfplatta eller dator). Den listar ”Rad N — orsak”; tryck på en post för att hoppa till den raden. Blocket som orsakar problemet har en **röd ram**. När allt är i ordning står det i panelen ”Varje påslagen rad kan köras.”

<Screenshot name="links-problems" alt="Problempanelen med en rad som inte är klar" width={900} />

Rader med problem körs inte; de andra raderna körs.

## Vanliga meddelanden {#common-messages}

| Meddelande | Vad du gör |
|---|---|
| Dra en ingång och en utgång (en hubb eller en indikator på instrumentpanelen) till raden | raden är tom |
| Lägg till en ingång i början av raden | dra först in en kontroll, fordonet, handkontrollen eller en hubbingång |
| Lägg till en utgång: en hubb eller en indikator på instrumentpanelen | avsluta raden med en utgång |
| Lägg till en åtgärd före hubben: motor, servo, ljus | en Hubb-utgång behöver en åtgärd före sig |
| Välj minst en port på hubben | tryck på en portknapp på Hubb-blocket |
| Välj en kontroll på instrumentpanelen | tryck på ingångsblocket och välj en kontroll |
| … rör sig inte längs den här axeln | joysticken har bara en axel: välj den andra axeln eller ändra joysticken |
| Välj vad … ger | kontrollen har inte längre den här kanalen: välj en |
| Välj fordonets pedaler | ingången Fordon behöver pedaler på instrumentpanelen |
| … finns inte på instrumentpanelen | växelspaken eller handbromsen som valts för Fordon har tagits bort |
| ”…” fungerar inte med den här kontrollen | det här bearbetningsblocket passar inte signalen |
| Port A: den här enheten kan inte fungera som servo (en motor med pulsgivare behövs) | använd en motor med pulsgivare eller en annan åtgärd |
| Port A har en sensor, inte en motor | kontrollera vad som sitter i porten |
| Port A används också på rad 2 | varje port kan bara höra till en rad |
| Aktivera handkontrollsblock på sidan Handkontroll (övre fältet) | öppna **Handkontroll** och slå på **Aktivera gamepad-block** |
| Indikatorn visar värdet som det är: ta bort åtgärden | en Indikator-rad har ingen åtgärd |
| Kalibrering behöver ingen åtgärd: ta bort den | en rad med Kalibrera servon har ingen åtgärd |
| Välj en hubb med färg-LED (LEGO-hubbar) | Hubbens LED fungerar bara på LEGO®-hubbar |
| Portfärger finns bara på BuWizz 3 | Portfärg kräver en BuWizz 3.0 Pro |
| Inget servo i automatiskt kalibreringsläge i det här programmet | Kalibrera servon kräver ett Servo i läget Auto |
| Det här blocket kräver en nyare version av appen | profilen skapades i en nyare version: uppdatera MOCPilot |
| Raden är avstängd | slå på den i radmenyn |

## Aktuella värden {#live-values}

Medan programmet körs visar varje fog mellan blocken det värde som passerar genom den. Rör en kontroll och följ värdet längs raden:

- inget ändras vid ingången: kontrollen eller handkontrollen skickar ingenting; kontrollera kanalen eller axeln;
- värdet ändras men motorn rör sig inte: kontrollera hubbens anslutningsprick och porten;
- värdet är litet efter **Begränsa** eller **Dödzon**: justera deras inställningar.

<Screenshot name="links-live-values" alt="Ett Snabbkopplingar-program som körs, med aktuella värden på fogarna" width={900} />

## Modellen rör sig inte {#the-model-does-not-move}

1. Är hubben ansluten? Kontrollera **Mina hubbar** och anslutningspricken på Hubb-blocket.
2. Är rätt port vald? Sitter motorerna där du tror?
3. Är raden påslagen, utan röd ram?
4. Körs programmet (**Kör**)?
5. Är batteriet laddat? Lägg till en rad *Batteri → Indikator* för att hålla koll på det.

Mer i [Felsökning](/docs/Help/Troubleshooting).
