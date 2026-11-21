---
id: AiBuilder
title: AI-byggare
description: "Beskriv din modell i ord eller med rösten, så ställer AI-byggaren in hubbarna, instrumentpanelen och programmet i en Logikblock- eller Snabbkopplingar-profil."
---

import Screenshot from '@site/src/components/Screenshot';

# AI-byggare

Beskriv din modell med egna ord, skrivna eller talade, så ställer **AI-byggaren** in profilen åt dig: hubbarna och portarna, kontrollerna på instrumentpanelen och programmet. Den fungerar i båda redigerarna: i en [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)-profil bygger den block, i en [Snabbkopplingar](/docs/Application/Links/LinksIntroducing)-profil bygger den rader. Sedan fortsätter du att prata med den för att ändra profilen, eller så redigerar du den själv.

AI-byggaren ingår i [MocPilot Pro](/docs/Application/Account/Pro) och fungerar i appen och i [webbredigeraren](/docs/Introducing/WebEditor). Den kräver internetanslutning.

<Screenshot name="blocks-ai-builder" alt="Panelen AI-byggare bredvid programmet" width={900} />

## Öppna AI-byggaren {#open-the-ai-builder}

1. Öppna en profil för redigering.
2. Tryck på knappen **AI-byggare** (ikonen med gnistor) i det övre fältet. På en dator kan du också trycka på ⇧⌘I / Ctrl+Skift+I.
3. Skriv din förfrågan i **Vad ska AI bygga eller ändra?** och tryck på **Skicka** (eller Enter; Skift+Enter ger en ny rad).

Utan MocPilot Pro visar knappen vad AI-byggaren gör, med **Skaffa MocPilot Pro** och **Inte nu**.

Var panelen öppnas:

- **Telefon**: en helskärmssida ovanpå redigeraren.
- **Surfplatta**: ett flytande kort; dra det i sidhuvudet till vänster eller höger sida.
- **Dator**: ett kort till höger. I appen (inte i webbläsaren) kan du trycka på **Öppna i ett separat fönster** i dess sidhuvud och placera fönstret bredvid redigeraren.

Medan AI:n arbetar visar panelen vad den gör (**Funderar på din modell…**, **Kontrollerar profilen…** och så vidare). Ändringarna visas i redigeraren så snart den är klar, tillsammans med en kort sammanfattning av vad som ändrats. När panelen är tom föreslår den några exempel på förfrågningar: tryck på ett för att lägga det i textfältet och skicka det sedan som det är eller ändra det först.

Konversationen sparas för varje profil, så du kan stänga panelen och komma tillbaka till den senare.

## Skriv en bra förfrågan {#ai-builder-tips}

:::tip Ange vilken hubb du använder, vad som är anslutet till varje port och vad det ska göra
En förfrågan på en rad som ”en bil med lampor” räcker inte: AI:n måste gissa hubben, portarna och vad varje motor gör, och resultatet behöver troligen rättas till. Ta med:

- **Hubben**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Vad som finns på varje port**: en drivmotor, en styrmotor (servo), lampor, en sensor.
- **Vad varje del ska göra**: köra, styra med kalibrering, slås på och av, en hastighetsbegränsning.
- **Hur du vill styra den**: joystickar, skjutreglage, knappar, en handkontroll.
:::

Säg det som du skulle förklara det för en vän. Du kan skriva på ditt eget språk.

Om något fortfarande inte blir rätt säger du till AI:n vad som ska ändras i stället för att börja om.

## Exempel på förfrågningar {#example-requests}

**En bil**: ”En bil med en Technic Hub: drivmotorn sitter på port A, styrmotorn på port C fungerar som servo, lamporna sitter på port D. Joystick för styrning till vänster, gas till höger, en knapp som tänder och släcker lamporna.”

**En kran**: ”En kran med en Technic Hub: rotationsmotorn sitter på port A, bommotorn på port B, krokvinschen på port C. Ett skjutreglage för rotation, upp/ned-knappar för bommen, en joystick för kroken, bommens hastighet begränsad till 50 %.”

**Ett tåg**: ”Ett City-tåg med en City Hub: tågmotorn sitter på port A, lamporna på port B. En stegomkopplare för hastigheten, en hastighetsmätare och en knapp för lamporna.”

## Ändra en befintlig profil {#change-an-existing-profile}

Öppna AI-byggaren i en profil du redan har, även en som du byggt för hand, och säg vad som ska ändras. AI:n ser de aktuella hubbarna, instrumentpanelen och programmet och redigerar dem:

- ”Gör styrningen långsammare.”
- ”Lägg till en stoppknapp.”
- ”Kopiera kontrollerna till min handkontroll.”
- ”Begränsa bommens hastighet till 50 %.”

Du kan också fråga om profilen, till exempel ”Vilken port sitter lamporna på?”. AI:n svarar i panelen och lämnar profilen som den är.

## Vad som händer med din profil {#what-happens-to-your-profile}

- AI:n ändrar den öppna profilen direkt: hubbar, instrumentpanel och program uppdateras på en gång. Om programmet körs stoppas det.
- AI:n arbetar med profilens programtyp: i en Logikblock-profil skriver den block, i en Snabbkopplingar-profil skriver den rader. Den gör aldrig om den ena till den andra. Om en förfrågan kräver något som rader i Snabbkopplingar inte klarar talar AI:n om att det behövs en Logikblock-profil.
- Delar av profilen som AI:n inte behöver ändra förblir som de är.
- **Ångra den senaste AI-ändringen** (ångraknappen i panelens sidhuvud) återställer profilen till hur den var före den senaste AI-ändringen. Tryck igen för att gå längre tillbaka, upp till 10 ändringar. Ångrahistoriken rensas när du öppnar en annan profil.
- Du kan fortsätta att redigera profilen själv när som helst.

## Röstinmatning {#voice-input}

Tryck på **Diktera** (mikrofonknappen) och säg din förfrågan; texten visas i fältet, och du kan rätta den innan du skickar. Tryck på knappen igen för att sluta. Om flera språk finns växlar den lilla språkknappen bredvid mikrofonen dikteringsspråk; appen kommer ihåg ditt val.

| Var | Hur |
|---|---|
| iPhone, iPad, Mac | **Diktera**; första gången tillåter du mikrofonåtkomst och taligenkänning |
| Android | **Diktera**; första gången tillåter du mikrofonåtkomst |
| Windows | tryck på **Win+H** för att diktera med röstinmatning i Windows (mikrofonknappen påminner dig) |
| Webbredigerare | **Diktera** i Chrome, Edge och Safari; tillåt mikrofonåtkomst för webbplatsen. Firefox har ingen diktering |

Meddelanden vid röstinmatning:

| Meddelande | Vad du gör |
|---|---|
| **Tillåt mikrofonåtkomst för MOCPilot i systeminställningarna** | Slå på mikrofonåtkomst för MOCPilot i systeminställningarna |
| **Tillåt taligenkänning för MOCPilot i systeminställningarna** | På en Apple-enhet slår du på taligenkänning för MOCPilot i systeminställningarna |
| **Tillåt mikrofonåtkomst för den här webbplatsen i webbläsaren** | Tillåt mikrofonen i webbläsarens webbplatsinställningar |
| **Inget hördes** | Tryck på **Diktera** och tala igen |
| **Röstinmatning kräver en anslutning** | Anslut till internet eller skriv förfrågan |
| **Taligenkänning är inte tillgänglig för det här språket just nu** | Byt dikteringsspråk eller skriv förfrågan |
| **Ingen mikrofon hittades** / **Röstinmatning är inte tillgänglig på den här enheten** | Skriv förfrågan |

## Begränsningar {#limits}

- Ungefär 30 förfrågningar per dag och en månadsgräns. Panelens sidhuvud visar hur mycket du har använt: **I dag 5/30 · Månad 12%**.
- Under den kostnadsfria provperioden är antalet AI-förfrågningar begränsat; de fortsätter när prenumerationen börjar.
- En förfrågan i taget: vänta på svaret innan du skickar nästa.
- AI-byggaren bygger och redigerar bara profiler. Den svarar inte på frågor om andra ämnen.

## Felmeddelanden {#error-messages}

| Meddelande | Vad du gör |
|---|---|
| **AI-byggaren är inte tillgänglig** / **Det gick inte att nå AI-tjänsten. Kontrollera internetanslutningen och försök igen.** | Kontrollera internetanslutningen och öppna panelen igen |
| **Ingen anslutning till AI-tjänsten. Kontrollera internetanslutningen och försök igen.** | Kontrollera anslutningen och skicka förfrågan igen |
| **Anslutningen till AI-tjänsten bröts…** | När du är online igen visas svaret i panelen, eller så skickar du förfrågan igen |
| **AI:n svarade inte i tid. Skicka begäran igen.** / **Förfrågan försvann, skicka den igen** | Skicka förfrågan igen |
| **AI:n kunde inte bygga en fungerande profil för den här förfrågan. Försök säga det på ett annat sätt.** | Formulera om förfrågan: ange hubben, portarna och vad var och en gör |
| **Profilen är för stor för att byggas på en gång. Be om färre saker åt gången.** | Dela upp förfrågan i mindre steg |
| **AI:n avböjde den här förfrågan.** | Formulera om förfrågan så att den handlar om profilen |
| **Du har nått dagens gräns för AI-förfrågningar. Försök igen i morgon.** | Vänta till i morgon eller redigera profilen själv |
| **Du har nått månadens AI-gräns.** | Gränsen nollställs nästa månad |
| **Du har använt alla AI-förfrågningar under den kostnadsfria provperioden. De fortsätter när prenumerationen börjar.** | Vänta tills prenumerationen börjar |
| **AI-byggaren bygger och redigerar bara profiler. För många förfrågningar om andra ämnen: försök igen om en timme.** | Vänta en timme och fråga bara om profilen |
| **För många AI-förfrågningar just nu. Försök igen om en minut.** | Försök igen om en minut |
| **Den föregående förfrågan pågår fortfarande.** | Vänta på svaret |
| **AI-tjänsten är tillfälligt otillgänglig. Försök igen senare.** / **Du har MocPilot Pro. AI-byggaren är inte tillgänglig just nu, försök igen senare.** | Försök igen senare |
| **Svaret gällde en annan profil** | Du öppnade en annan profil medan AI:n arbetade, så ändringen tillämpades inte. Öppna den första profilen igen och upprepa förfrågan |
| **Öppna först en profil för redigering** | Öppna profilen i redigeraren och skicka sedan förfrågan |
| **Profilen kunde inte uppdateras i redigeraren** / **Ändringen kunde inte ångras** | Försök igen; om det fortsätter att hända stänger du profilen och öppnar den igen |
