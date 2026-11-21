---
id: AiBuilder
title: AI-bygger
description: "Beskriv modellen din med ord eller med stemmen, så setter AI-byggeren opp hubbene, dashboardet og programmet i en Logikkblokker- eller Hurtigkoblinger-profil."
---

import Screenshot from '@site/src/components/Screenshot';

# AI-bygger {#ai-builder}

Beskriv modellen din med dine egne ord, skrevet eller muntlig, så setter **AI-byggeren** opp profilen for deg: hubbene og portene, kontrollene på dashboardet og programmet. Den fungerer i begge editorene: i en [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)-profil bygger den blokker, i en [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing)-profil bygger den rader. Deretter fortsetter du å snakke med den for å endre profilen, eller du redigerer den selv.

AI-byggeren er en del av [MocPilot Pro](/docs/Application/Account/Pro) og fungerer i appen og i [webeditoren](/docs/Introducing/WebEditor). Den krever internettforbindelse.

<Screenshot name="blocks-ai-builder" alt="AI-bygger-panelet ved siden av programmet" width={900} />

## Åpne AI-byggeren {#open-the-ai-builder}

1. Åpne en profil for redigering.
2. Trykk på **AI-bygger**-knappen (ikonet med gnister) i topplinjen. På en datamaskin kan du også trykke ⇧⌘I / Ctrl+Shift+I.
3. Skriv forespørselen din i **Hva skal AI-en bygge eller endre?** og trykk **Send** (eller Enter; Shift+Enter gir en ny linje).

Uten MocPilot Pro viser knappen hva AI-byggeren gjør, med **Skaff MocPilot Pro** og **Ikke nå**.

Hvor panelet åpnes:

- **Telefon**: en side i fullskjerm over editoren.
- **Nettbrett**: et flytende kort; dra det etter toppfeltet til venstre eller høyre side.
- **Datamaskin**: et kort til høyre. I appen (ikke i nettleseren) kan du trykke **Åpne i eget vindu** i toppfeltet og plassere vinduet ved siden av editoren.

Mens AI-en jobber, viser panelet hva den gjør (**Tenker på modellen din…**, **Sjekker profilen…** og så videre). Endringene vises i editoren så snart den er ferdig, sammen med et kort sammendrag av hva som er endret. Når panelet er tomt, foreslår det noen eksempelforespørsler: trykk på en for å sette den inn i tekstfeltet, og send den som den er eller endre den først.

Samtalen lagres for hver profil, så du kan lukke panelet og komme tilbake til den senere.

## Skriv en god forespørsel {#ai-builder-tips}

:::tip Si hvilken hub du bruker, hva som er koblet til hver port og hva det skal gjøre
En forespørsel på én linje som «en bil med lys» er ikke nok: AI-en må gjette huben, portene og hva hver motor gjør, og resultatet må sannsynligvis rettes. Ta med:

- **Huben**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Hva som er på hver port**: en drivmotor, en styremotor (servo), lys, en sensor.
- **Hva hver av dem skal gjøre**: kjøre, styre med kalibrering, slå av og på, en fartsgrense.
- **Hvordan du vil styre det**: joysticker, skyveknapper, knapper, en spillkontroller.
:::

Si det slik du ville forklart det for en venn. Du kan skrive på ditt eget språk.

Hvis noe fortsatt ikke stemmer, forteller du AI-en hva som skal endres i stedet for å begynne på nytt.

## Eksempler på forespørsler {#example-requests}

**En bil**: «En bil med en Technic Hub: drivmotoren er på port A, styremotoren på port C fungerer som servo, lysene er på port D. Styrejoystick til venstre, gass til høyre, en knapp som slår lysene av og på.»

**En kran**: «En kran med en Technic Hub: rotasjonsmotoren er på port A, bommotoren på port B, kroken-vinsjen på port C. En skyveknapp for rotasjon, opp/ned-knapper for bommen, en joystick for kroken, bomhastigheten begrenset til 50 %.»

**Et tog**: «Et City-tog med en City Hub: togmotoren er på port A, lysene på port B. En trinnbryter for hastigheten, et speedometer og en knapp for lysene.»

## Endre en eksisterende profil {#change-an-existing-profile}

Åpne AI-byggeren i en profil du allerede har, også en du har bygd for hånd, og si hva som skal endres. AI-en ser de nåværende hubbene, dashboardet og programmet og redigerer dem:

- «Gjør styringen langsommere.»
- «Legg til en stoppknapp.»
- «Kopier kontrollene til spillkontrolleren min.»
- «Begrens bomhastigheten til 50 %.»

Du kan også spørre om profilen, for eksempel «Hvilken port er lysene på?». AI-en svarer i panelet og lar profilen være som den er.

## Hva som skjer med profilen din {#what-happens-to-your-profile}

- AI-en endrer den åpne profilen direkte: hubber, dashboard og program oppdateres med en gang. Hvis programmet kjører, stopper det.
- AI-en jobber med profilens programtype: i en Logikkblokker-profil skriver den blokker, i en Hurtigkoblinger-profil skriver den rader. Den gjør aldri den ene om til den andre. Hvis en forespørsel trenger noe Hurtigkoblinger-rader ikke kan gjøre, forteller AI-en deg at det trengs en Logikkblokker-profil.
- Deler av profilen som AI-en ikke trenger å endre, blir som de er.
- **Angre siste AI-endring** (angreknappen i panelets toppfelt) setter profilen tilbake slik den var før den siste AI-endringen. Trykk igjen for å gå lenger tilbake, opptil 10 endringer. Angrehistorikken tømmes når du åpner en annen profil.
- Du kan fortsette å redigere profilen selv når som helst.

## Taleinndata {#voice-input}

Trykk **Dikter** (mikrofonknappen) og si forespørselen din; teksten vises i feltet, og du kan rette den før du sender. Trykk på knappen igjen for å stoppe. Hvis flere språk er tilgjengelige, bytter den lille språkknappen ved siden av mikrofonen dikteringsspråk; appen husker valget ditt.

| Hvor | Hvordan |
|---|---|
| iPhone, iPad, Mac | **Dikter**; første gang gir du tilgang til mikrofonen og talegjenkjenning |
| Android | **Dikter**; første gang gir du tilgang til mikrofonen |
| Windows | trykk **Win+H** for å diktere med taleskriving i Windows (mikrofonknappen minner deg på det) |
| Webeditor | **Dikter** i Chrome, Edge og Safari; gi nettstedet tilgang til mikrofonen. Firefox har ikke diktering |

Meldinger ved taleinndata:

| Melding | Hva du gjør |
|---|---|
| **Gi MOCPilot tilgang til mikrofonen i systeminnstillingene** | Slå på mikrofontilgang for MOCPilot i systeminnstillingene |
| **Tillat talegjenkjenning for MOCPilot i systeminnstillingene** | På en Apple-enhet slår du på talegjenkjenning for MOCPilot i systeminnstillingene |
| **Gi dette nettstedet tilgang til mikrofonen i nettleseren** | Tillat mikrofonen i nettleserens innstillinger for nettstedet |
| **Ingenting ble hørt** | Trykk **Dikter** og snakk igjen |
| **Taleinndata krever nettforbindelse** | Koble til internett, eller skriv forespørselen |
| **Talegjenkjenning er ikke tilgjengelig for dette språket akkurat nå** | Bytt dikteringsspråk eller skriv forespørselen |
| **Fant ingen mikrofon** / **Taleinndata er ikke tilgjengelig på denne enheten** | Skriv forespørselen |

## Grenser {#limits}

- Rundt 30 forespørsler om dagen og en månedlig grense. Panelets toppfelt viser hvor mye du har brukt: **I dag 5/30 · Måned 12%**.
- I den gratis prøveperioden er antallet AI-forespørsler begrenset; de fortsetter når abonnementet starter.
- Én forespørsel om gangen: vent på svaret før du sender den neste.
- AI-byggeren bare bygger og redigerer profiler. Den svarer ikke på spørsmål om andre emner.

## Feilmeldinger {#error-messages}

| Melding | Hva du gjør |
|---|---|
| **AI-byggeren er ikke tilgjengelig** / **Fikk ikke kontakt med AI-tjenesten. Sjekk internettforbindelsen og prøv igjen.** | Sjekk internettforbindelsen og åpne panelet igjen |
| **Ingen forbindelse til AI-tjenesten. Sjekk internettforbindelsen og prøv igjen.** | Sjekk forbindelsen og send forespørselen på nytt |
| **Forbindelsen til AI-tjenesten ble brutt…** | Når du er på nett igjen, vises svaret i panelet, eller send forespørselen på nytt |
| **AI-en svarte ikke i tide. Send forespørselen på nytt.** / **Forespørselen gikk tapt, send den på nytt** | Send forespørselen på nytt |
| **KI-en klarte ikke å bygge en profil som fungerer for denne forespørselen. Prøv å si det på en annen måte.** | Omformuler forespørselen: oppgi huben, portene og hva hver av dem gjør |
| **Profilen er for stor til å bygges på én gang. Be om færre ting om gangen.** | Del forespørselen opp i mindre steg |
| **KI-en avslo denne forespørselen.** | Omformuler forespørselen slik at den handler om profilen |
| **Du har nådd dagens grense for AI-forespørsler. Prøv igjen i morgen.** | Vent til i morgen, eller rediger profilen selv |
| **Du har nådd månedens AI-grense.** | Grensen nullstilles neste måned |
| **Du har brukt alle AI-forespørslene i den gratis prøveperioden. De fortsetter når abonnementet starter.** | Vent til abonnementet starter |
| **AI-byggeren bygger og redigerer bare profiler. For mange forespørsler om andre emner: prøv igjen om en time.** | Vent en time og spør bare om profilen |
| **For mange KI-forespørsler akkurat nå. Prøv igjen om et minutt.** | Prøv igjen om et minutt |
| **Forrige forespørsel kjører fortsatt.** | Vent på svaret |
| **KI-tjenesten er midlertidig utilgjengelig. Prøv igjen senere.** / **Du har MocPilot Pro. AI-byggeren er ikke tilgjengelig akkurat nå, prøv igjen senere.** | Prøv igjen senere |
| **Svaret gjaldt en annen profil** | Du åpnet en annen profil mens AI-en jobbet, så endringen ble ikke brukt. Åpne den første profilen igjen og gjenta forespørselen |
| **Åpne en profil for redigering først** | Åpne profilen i editoren, og send deretter forespørselen |
| **Profilen kunne ikke oppdateres i editoren** / **Endringen kunne ikke angres** | Prøv igjen; hvis det fortsetter å skje, lukker du profilen og åpner den igjen |
