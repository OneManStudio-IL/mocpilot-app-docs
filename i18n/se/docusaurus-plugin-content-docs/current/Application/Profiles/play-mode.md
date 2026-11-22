---
id: PlayMode
title: Köra en modell (Kör)
description: "Kör en profil, styr modellen, stoppa den och vad som händer när den stannar eller en anslutning bryts."
---

import Screenshot from '@site/src/components/Screenshot';

# Köra en modell (Kör)

En profil har två lägen:

- **Redigera**: du ändrar hubbarna, instrumentpanelen och programmet.
- **Kör**: programmet körs och kontrollerna på instrumentpanelen styr modellen.

## Starta och stoppa {#start-and-stop}

Tryck på **Kör** (▶) längst till höger i redigerarens övre fält; på en telefon eller surfplatta finns den även på instrumentpanelen. På en dator är **Kör** den orange knappen i redigeraren (även **Program → Kör**, ⌘R / Ctrl+R). Tryck på **Stoppa** (■) för att gå tillbaka till redigeringen (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Instrumentpanelen medan programmet körs" width={900} />

Medan programmet körs:

- döljs rutnätets punkter på instrumentpanelen, och likaså dess redigeringsknappar (på en dator är de inte tillgängliga);
- reagerar kontrollerna på beröring och på handkontrollen;
- visar monitorer och indikatorer aktuella värden;
- visar redigeraren i Snabbkopplingar aktuella värden mellan blocken på varje rad, och raderna kan inte redigeras;
- förblir programmet redigerbart i Logikblock, så att du kan finjustera det medan det körs.

## På en telefon eller surfplatta {#on-a-phone-or-tablet}

När du öppnar en profil växlar telefonen till liggande läge i helskärm, så att instrumentpanelen får hela skärmen. Slå på **Håll skärmen på** i Inställningar så att skärmen inte släcks medan du kör. Se [Inställningar](/docs/Application/Account/Settings).

## Innan du trycker på Kör {#before-you-press-run}

- Slå på hubbarna och kontrollera under **Mina hubbar** att de är anslutna (siffran på knappen **Mina hubbar**, **Hubbar** på en dator, visar hur många som är det).
- I Snabbkopplingar kontrollerar du knappen **Problem**: ett rött ”!” betyder att vissa rader inte kan köras. Se [Köra och åtgärda problem](/docs/Application/Links/Problems).
- Första gången ställer du modellen på ett stöd eller håller den borta från bordskanten.

## När programmet stoppas {#when-the-program-stops}

- **Snabbkopplingar** stoppar alla motorer som raderna använder och återställer utgångarna (LED-matrisen töms, portfärger och sensorlampor släcks).
- **Logikblock** stoppar hubbens portar om **Stoppa hubbportar när programmet stoppar** är påslaget i Redigerarens inställningar.
- Om en hubb kopplas från medan programmet körs stannar dess motorer. I Snabbkopplingar kan en hubbingång av typen ”Ansluten” visa detta på instrumentpanelen.
- Med fjärrstyrning stoppar hubenheten profilen och alla motorer om anslutningen mellan fjärrkontrollen och hubenheten bryts i ungefär 4 sekunder.

## Kör från en annan enhet {#drive-from-another-device}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan du köra profilen på en enhet (hubenheten, som ansluter hubbarna) och styra den från en annan enhet eller från webbredigeraren. Se [Fjärrstyrning](/docs/Application/Profiles/RemoteControl).
