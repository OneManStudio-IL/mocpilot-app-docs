---
id: AiBuilder
title: AI-bygger
description: "Beskriv din model med ord eller stemme, så sætter AI-byggeren hubs, dashboard og program op i en profil med Logikblokke eller Hurtige forbindelser."
---

import Screenshot from '@site/src/components/Screenshot';

# AI-bygger {#ai-builder}

Beskriv din model med dine egne ord, skrevet eller talt, så sætter **AI-byggeren** profilen op for dig: hubs og porte, dashboardets kontroller og programmet. Den virker i begge editorer: i en profil med [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) bygger den blokke, i en profil med [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing) bygger den rækker. Derefter kan du fortsætte samtalen for at ændre profilen, eller du kan redigere den selv.

AI-byggeren er en del af [MocPilot Pro](/docs/Application/Account/Pro) og virker i appen og i [webeditoren](/docs/Introducing/WebEditor). Den kræver en internetforbindelse.

<Screenshot name="blocks-ai-builder" alt="Panelet AI-bygger ved siden af programmet" width={900} />

## Åbn AI-byggeren {#open-the-ai-builder}

1. Åbn en profil til redigering.
2. På en computer trykker du på knappen **AI-bygger** (ikonet med gnister) i højre side af topbjælken eller på ⇧⌘I / Ctrl+Shift+I; i et smalt vindue ligger den under **Mere** (⋯). På en telefon eller tablet trykker du på **Mere** → **AI-bygger**.
3. Skriv din anmodning i **Hvad skal AI'en bygge eller ændre?**, og tryk på **Send** (eller Enter; Shift+Enter giver en ny linje).

Uden MocPilot Pro viser knappen, hvad AI-byggeren gør, med **Få MocPilot Pro** og **Ikke nu**.

Hvor panelet åbnes:

- **Telefon**: en fuldskærmsside over editoren.
- **Tablet**: et flydende kort; træk det i overskriften til venstre eller højre side.
- **Computer**: et kort til højre. I appen (ikke i browseren) kan du trykke på **Åbn i et separat vindue** i overskriften og placere vinduet ved siden af editoren.

Mens AI'en arbejder, viser panelet, hvad den laver (**Tænker over din model…**, **Tjekker profilen…** og så videre). Ændringerne vises i editoren, så snart den er færdig, sammen med et kort resumé af, hvad der er ændret. Når panelet er tomt, foreslår det et par eksempler på anmodninger: tryk på et for at sætte det i tekstfeltet, og send det som det er, eller ret det først.

Samtalen gemmes for hver profil, så du kan lukke panelet og vende tilbage til det senere.

## Skriv en god anmodning {#ai-builder-tips}

:::tip Fortæl, hvilken hub du bruger, hvad der sidder på hver port, og hvad det skal gøre
En anmodning på én linje som "en bil med lys" er ikke nok: AI'en må gætte hubben, portene og hvad hver motor gør, og resultatet skal sandsynligvis rettes. Tag med:

- **Hubben**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Hvad der sidder på hver port**: en drivmotor, en styremotor (servo), lys, en sensor.
- **Hvad hver af dem skal gøre**: køre, styre med kalibrering, tænde og slukke, en hastighedsgrænse.
- **Hvordan du vil styre det**: joysticks, skydere, knapper, en gamepad.
:::

Sig det, som du ville forklare det for en ven. Du kan skrive på dit eget sprog.

Hvis noget stadig ikke er rigtigt, så fortæl AI'en, hvad den skal ændre, i stedet for at starte forfra.

## Eksempler på anmodninger {#example-requests}

**En bil**: "En bil med Technic Hub: drivmotoren på port A, styremotoren på port C fungerer som servo, lygterne på port D. Styrejoystick til venstre, gas til højre, en knap der tænder lygterne."

**En kran**: "En kran med Technic Hub: drejemotoren på port A, bommotoren på port B, krogens spil på port C. En skyder til drejning, op/ned-knapper til bommen, et joystick til krogen, bommens hastighed begrænset til 50 %."

**Et tog**: "Et City-tog med City Hub: togmotoren på port A, lyset på port B. En trinkontakt til hastigheden, et speedometer og en knap til lyset."

## Ændr en eksisterende profil {#change-an-existing-profile}

Åbn AI-byggeren i en profil, du allerede har, også en du har bygget i hånden, og sig, hvad der skal ændres. AI'en ser de nuværende hubs, dashboardet og programmet og redigerer dem:

- "Gør styringen langsommere."
- "Tilføj en stopknap."
- "Kopiér kontrollerne til min gamepad."
- "Begræns bommens hastighed til 50 %."

Du kan også spørge om profilen, for eksempel "Hvilken port sidder lyset på?". AI'en svarer i panelet og lader profilen være, som den er.

## Hvad sker der med din profil {#what-happens-to-your-profile}

- AI'en ændrer den åbne profil direkte: hubs, dashboard og program opdateres med det samme. Hvis programmet kører, stopper det.
- AI'en arbejder med profilens programtype: i en profil med Logikblokke skriver den blokke, i en profil med Hurtige forbindelser skriver den rækker. Den laver aldrig den ene om til den anden. Hvis en anmodning kræver noget, som rækker i Hurtige forbindelser ikke kan, fortæller AI'en dig, at det kræver en profil med Logikblokke.
- Dele af profilen, som AI'en ikke behøver at ændre, forbliver uændrede.
- **Fortryd den seneste AI-ændring** (fortrydknappen i panelets overskrift) sætter profilen tilbage til, som den var før den seneste AI-ændring. Tryk igen for at gå længere tilbage, op til 10 ændringer. Fortrydhistorikken ryddes, når du åbner en anden profil.
- Du kan til enhver tid selv fortsætte med at redigere profilen.

## Stemmeinput {#voice-input}

Tryk på **Diktér** (mikrofonknappen), og sig din anmodning; teksten vises i feltet, og du kan rette den, før du sender. Tryk på knappen igen for at stoppe. Hvis flere sprog er tilgængelige, skifter den lille sprogknap ved siden af mikrofonen dikteringssproget; appen husker dit valg.

| Hvor | Sådan |
|---|---|
| iPhone, iPad, Mac | **Diktér**; første gang skal du give adgang til mikrofonen og talegenkendelse |
| Android | **Diktér**; første gang skal du give adgang til mikrofonen |
| Windows | tryk på **Win+H** for at diktere med Windows-stemmeindtastning (mikrofonknappen minder dig om det) |
| Webeditor | **Diktér** i Chrome, Edge og Safari; giv webstedet adgang til mikrofonen. Firefox har ikke diktering |

Meddelelser om stemmeinput:

| Meddelelse | Hvad du skal gøre |
|---|---|
| **Giv MOCPilot adgang til mikrofonen i systemindstillingerne** | Slå mikrofonadgang til for MOCPilot i systemindstillingerne |
| **Tillad talegenkendelse for MOCPilot i systemindstillingerne** | På en Apple-enhed skal du slå talegenkendelse til for MOCPilot i systemindstillingerne |
| **Giv dette websted adgang til mikrofonen i browseren** | Tillad mikrofonen i browserens indstillinger for webstedet |
| **Der blev ikke hørt noget** | Tryk på **Diktér**, og tal igen |
| **Stemmeinput kræver en forbindelse** | Opret forbindelse til internettet, eller skriv anmodningen |
| **Talegenkendelse er ikke tilgængelig for dette sprog lige nu** | Skift dikteringssprog, eller skriv anmodningen |
| **Ingen mikrofon fundet** / **Stemmeinput er ikke tilgængeligt på denne enhed** | Skriv anmodningen |

## Grænser {#limits}

- Ca. 30 anmodninger om dagen og en månedlig grænse. Panelets overskrift viser, hvor meget du har brugt: **I dag 5/30 · Måned 12%**.
- I den gratis prøveperiode er antallet af AI-anmodninger begrænset; de fortsætter, når abonnementet starter.
- Én anmodning ad gangen: vent på svaret, før du sender den næste.
- AI-byggeren bygger og redigerer kun profiler. Den svarer ikke på spørgsmål om andre emner.

## Fejlmeddelelser {#error-messages}

| Meddelelse | Hvad du skal gøre |
|---|---|
| **AI-byggeren er ikke tilgængelig** / **AI-tjenesten kunne ikke nås. Tjek din internetforbindelse, og prøv igen.** | Tjek din internetforbindelse, og åbn panelet igen |
| **Ingen forbindelse til AI-tjenesten. Tjek din internetforbindelse, og prøv igen.** | Tjek forbindelsen, og send anmodningen igen |
| **Forbindelsen til AI-tjenesten blev afbrudt…** | Når du er online igen, vises svaret i panelet, eller send anmodningen igen |
| **AI'en svarede ikke i tide. Send anmodningen igen.** / **Anmodningen gik tabt, send den igen** | Send anmodningen igen |
| **AI'en kunne ikke bygge en fungerende profil til denne anmodning. Prøv at sige det med andre ord.** | Omformulér anmodningen: nævn hubben, portene og hvad hver af dem gør |
| **Profilen er for stor til at blive bygget på én gang. Bed om færre ting ad gangen.** | Del anmodningen op i mindre trin |
| **AI'en afviste denne anmodning.** | Omformulér anmodningen, så den handler om profilen |
| **Du har nået dagens grænse for AI-anmodninger. Prøv igen i morgen.** | Vent til i morgen, eller rediger profilen selv |
| **Du har nået denne måneds AI-grænse.** | Grænsen nulstilles næste måned |
| **Du har brugt alle AI-forespørgsler i den gratis prøveperiode. De fortsætter, når abonnementet starter.** | Vent på, at abonnementet starter |
| **AI-byggeren bygger og redigerer kun profiler. For mange anmodninger om andre emner: prøv igen om en time.** | Vent en time, og spørg kun om profilen |
| **For mange AI-anmodninger lige nu. Prøv igen om et minut.** | Prøv igen om et minut |
| **Den forrige anmodning kører stadig.** | Vent på svaret |
| **AI-tjenesten er midlertidigt utilgængelig. Prøv igen senere.** / **Du har MocPilot Pro. AI-byggeren er ikke tilgængelig lige nu, prøv igen senere.** | Prøv igen senere |
| **Svaret var til en anden profil** | Du åbnede en anden profil, mens AI'en arbejdede, så ændringen blev ikke anvendt. Åbn den første profil igen, og gentag anmodningen |
| **Åbn først en profil til redigering** | Åbn profilen i editoren, og send derefter anmodningen |
| **Profilen kunne ikke opdateres i editoren** / **Ændringen kunne ikke fortrydes** | Prøv igen; hvis det bliver ved med at ske, så luk profilen, og åbn den igen |
