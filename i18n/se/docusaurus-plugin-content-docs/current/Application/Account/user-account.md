---
id: UserAccount
title: Konto
description: "Logga in, skapa ett konto, gästläge, återställ köp från Microsoft Store, region, lösenord, logga ut och ta bort kontot."
---

import Screenshot from '@site/src/components/Screenshot';

# Konto

Ett MOCPilot-konto håller dina profiler, inställningar och köp säkra och tillgängliga på alla dina enheter.

## Varför ha ett konto {#why-have-an-account}

- Profiler och inställningar sparas på servern och synkroniseras mellan dina enheter.
- Du kan få tillbaka allt om du byter ut eller tappar bort en enhet.
- Köp och MocPilot Pro fungerar på alla dina enheter och i webbredigeraren.
- Du kan publicera profiler i katalogen och få aviseringar.

## Logga in {#sign-in}

På inloggningsskärmen anger du **E-post eller inloggning** och **Lösenord**, eller använder **Logga in med Google** / **Logga in med Apple-ID**.

<Screenshot name="sign-in" alt="Inloggningsskärmen i MOCPilot" width={900} />

**Logga in med QR-kod** loggar in dig på den här enheten genom att du skannar koden med telefonen och bekräftar med Face ID eller fingeravtryck. Det kräver en nyckel (passkey) på telefonen: lägg till en en gång på mocpilot.com under **Konto → Inställningar → Nycklar**.

## Skapa ett konto {#create-an-account}

Tryck på **Skapa konto**: ange din e-postadress två gånger, ett användarnamn och ett lösenord (två gånger), och bekräfta din region. Eller använd **Fortsätt med Google** / **Fortsätt med Apple-ID**. Bekräfta din e-postadress via aktiveringsmejlet; vissa funktioner är avstängda tills kontot är verifierat (tryck på **Skicka aktiveringsmail på nytt** om det inte har kommit fram).

## Glömt lösenordet {#forgot-your-password}

Tryck på **Återställ** bredvid ”Glömt lösenord?”, ange din e-postadress och skriv in koden från mejlet för att ange ett nytt lösenord.

## Gästläge {#guest-mode}

**Fortsätt utan konto** på inloggningsskärmen öppnar en kort skärm som listar vad ett konto ger dig. Tryck på **Fortsätt utan konto** där igen för att börja använda appen direkt. Allt stannar bara på den här enheten och försvinner om du tar bort appen eller tappar bort enheten.

Du kan logga in senare: på en telefon trycker du på **Skapa ett konto eller logga in** högst upp i **Inställningar**; på en surfplatta eller dator öppnar du **Konto** (**Logga in** i gästläge), som visar samma skärm med **Skapa konto** och **Har du redan ett konto?**.

### Återställ köp från Microsoft Store {#restore-microsoft-store-purchases}

I Windows har gästskärmen också **Återställ köp från Microsoft Store**. Köp i Microsoft Store hör till det Microsoft-konto du använder i Windows, så du behöver inget MOCPilot-konto för att få tillbaka dem: klicka på knappen (appen behöver internet), så kontrollerar appen Microsoft Store (**Kontrollerar Microsoft Store...**) och låser upp på den här datorn det som Microsoft-kontot har köpt, inklusive en prenumeration på MocPilot Pro.

<Screenshot name="guest-mode-windows" alt="Gästskärmen i Windows med Återställ köp från Microsoft Store" width={900} />

## Region {#region}

Om ditt konto skapades innan MOCPilot började fråga efter region frågar appen en gång på varje enhet, några sekunder efter att du har loggat in: **Ange din region**. Regionen hjälper appen att erbjuda rätt butik och priser. Tryck på **Välj** för att välja ditt land under **Kontouppgifter**, eller **Inte nu** för att hoppa över. Du kan när som helst ändra regionen under **Kontouppgifter**.

## Kontosidan {#account-page}

Telefon: **Inställningar → Konto**. Surfplatta: ditt konto längst ned i sidofältet. Dator: knappen **Konto** i det övre fältet.

- **Kontouppgifter**: inloggningsnamn, e-post, region och konto-ID (tryck på en uppgift för att kopiera den).
- **Köp**: se [MocPilot Pro och köp](/docs/Application/Account/Pro#purchases).
- **Byt lösenord**.
- **Logga ut**: se [Logga ut](/docs/Application/Account/Sync#signing-out).
- **Ta bort konto**.

## Ta bort ditt konto {#delete-your-account}

**Ta bort konto** raderar dina kontodata permanent: personuppgifter, inställningar, historik och profilerna som sparats på servern. Du förlorar också åtkomsten till allt köpt innehåll och prenumerationsinnehåll som är kopplat till kontot. Det går inte att ångra.

Ange ditt nuvarande lösenord och bekräfta med **Svep för att ta bort konto** (pekskärmar) eller **Ta bort konto** (dator).

En aktiv prenumeration hanteras av butiken: avsluta den där innan du tar bort kontot.

## Aviseringar {#notifications}

**Aviseringar** (klockan på en dator; fliken **Aviseringar** på en telefon och surfplatta) visar granskningsresultaten för profiler som du publicerar, svar på dina supportärenden och nyheter från MOCPilot-teamet. Du kan markera dem som lästa, välja dem och ta bort dem. Aviseringar kräver ett konto.
