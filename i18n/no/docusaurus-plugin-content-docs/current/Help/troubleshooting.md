---
id: Troubleshooting
title: Feilsøking
description: "Løsninger på vanlige problemer med hubber, motorer, dashboardet, synkronisering, kjøp, oppdateringer, lyd, AI-byggeren og fjernstyring."
---

# Feilsøking {#troubleshooting}

## Hubber {#hubs}

**Huben blir ikke funnet**
- Slå på Bluetooth og gi MOCPilot tilgang til Bluetooth (på Android også Enheter i nærheten eller Posisjon) i systeminnstillingene. Se [Bluetooth og tillatelser](/docs/Help/BluetoothPermissions).
- Slå på huben og trykk på knappen på den rett før skanningen; trykk **Start skanning** igjen.
- Kontroller at huben ikke er koblet til en annen telefon eller app (LEGO®-apper, en annen fjernkontroll). Lukk dem.
- Bytt eller lad batteriene.
- Robot Inventor: ikke tilgjengelig på iPhone og iPad. Mould King 4.0: ikke tilgjengelig på Windows.

**Huben kobles fra**
- Flytt enheten nærmere: vegger, metall og andre 2,4 GHz-enheter reduserer rekkevidden.
- Svake batterier gir frakoblinger under belastning: lad eller bytt dem.
- Noen hubber slår seg av etter en stund uten kommandoer; koble til på nytt i **Mine hubber**.
- Mer om rekkevidde, adaptere og tillatelser: [Bluetooth og tillatelser](/docs/Help/BluetoothPermissions).

**«Fastvareoppdatering kreves»**
- MOCPilot trenger en støttet fastvare for Technic-, Technic Move-, BOOST- og City-hubber. Følg [Oppdatere fastvaren](/docs/Application/Hubs/FirmwareUpdating). Hvis en oppdatering mislyktes, se [Gjenopprette fastvaren](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King reagerer ikke**
- Mould King-hubber tar bare imot kommandoer. Bruk **Koble til igjen**, sjekk kanalen (**Velg kanal**), og bruk bare én Mould King-type per profil.

## Motorer og programmet {#motors-and-the-program}

**Motoren beveger seg ikke**
- Kjører programmet (**Kjør**)? Er huben tilkoblet?
- Sitter motoren på porten programmet bruker? Sjekk [hubmonitoren](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Hurtigkoblinger: åpne **Problemer**; følg sanntidsverdiene langs raden. Se [Kjøre og rette problemer](/docs/Application/Links/Problems).
- Logikkblokker: begynner skriptet med en hendelsesblokk? Bruk **Monitor** til å følge med på verdier.

**Motoren går feil vei**
- Hurtigkoblinger: legg til **Inverter** i raden. Logikkblokker: gang verdien med −1.

**Motoren kryper eller durer når joysticken er sluppet**
- Hurtigkoblinger: legg til **Dødsone**. Logikkblokker: ignorer små verdier med *mellom*.

**Servostyringen står skjevt eller treffer endestoppet**
- Hurtigkoblinger: Servo med **Auto**-kalibrering, eller **Manuell** med **Sett som null** og **Midtpunkt**; reduser **Vinkel**. Logikkblokker: *kalibrer styring*.
- Servo, Kjør et antall grader og Gå til posisjon krever motorer med enkoder; enkle motorer og SBrick-porter tar bare imot hastighet.

**Motorene fortsetter å gå etter Stopp**
- Logikkblokker: slå på **Stopp hubporter når programmet stopper** i Editorinnstillinger.

## Dashboard {#dashboard}

**Jeg kan ikke flytte eller slette en kontroll**
- Den er låst: velg **Lås opp** i menyen dens. En kontroll som brukes av programmet, kan ikke slettes før du fjerner radene eller blokkene som bruker den.

**«Det er ikke ledig plass på skjermen»**
- Flytt eller krymp andre kontroller, eller velg en mindre størrelse.

**Et tema eller en kontroll er låst**
- Du eier det ikke: kjøp det eller skaff deg [MocPilot Pro](/docs/Application/Account/Pro), eller bytt kontrollen til temaet Grunnleggende med **Endre tema**.

**Spillkontrolleren blir ikke oppdaget**
- Par spillkontrolleren i systemets Bluetooth-innstillinger (eller koble den til med USB). Siden **Spillkontroller** viser **Spillkontroller: (navn)** når appen ser den, og «Spillkontroller er ikke tilkoblet» når den ikke gjør det.
- Slå på **Aktiver gamepad-blokker** på siden **Spillkontroller**, ellers vises ikke gamepad-inngangene og -blokkene.
- Er flere spillkontrollere tilkoblet? Velg én under **Velg gamepad**.
- Sjekk knappene og stikkene med **Test gamepad**.
- Windows: Xbox-kontrollere (XInput) og Sony DualSense / DualSense Edge fungerer; andre kontrollere uten XInput-støtte fungerer kanskje ikke.
- Se [Spillkontroller](/docs/Application/Dashboard/Gamepad).

## Profiler og synkronisering {#profiles-and-sync}

**Profilene mine er ikke på den andre enheten min**
- Logg inn med samme konto på begge enhetene og sjekk internettforbindelsen. Hvis appen viser **Frakoblet**, trykker du **Prøv igjen** eller **Gå på nett**.

**«Profilen er ikke kompatibel»**
- Profilen er laget med en nyere versjon av MOCPilot. Oppdater appen.

**Jeg mistet profilene mine etter ny installasjon**
- I gjestemodus finnes profilene bare på enheten og forsvinner sammen med appen. Med en konto logger du inn igjen, så kommer de tilbake.

## E-poster om kontoen {#account-emails}

**Aktiveringse-posten eller koden for tilbakestilling av passord kommer ikke**
- Vent noen minutter og sjekk søppelpost-mappen. E-postene kommer fra no-reply@mocpilot.com.
- Sjekk at du har skrevet e-postadressen riktig.
- Aktivering: åpne kontosiden din og trykk **Send aktiveringsmail på nytt**. Til kontoen er bekreftet, er noen funksjoner deaktivert.
- Tilbakestilling av passord: «E-post ikke funnet» betyr at det ikke finnes noen konto med denne e-postadressen; prøv adressen du registrerte deg med. Ellers trykker du **Tilbakestill** ved siden av «Glemt passord?» igjen for å få en ny kode. Se [Konto](/docs/Application/Account/UserAccount).

## Kjøp {#purchases}

**Et kjøp mangler**
- Logg inn med kontoen du gjorde kjøpet med, og gå deretter til **Konto → Kjøp → Gjenopprett**.
- «Abonnementet er knyttet til en annen konto»: Pro-abonnementet for denne butikkontoen hører til en annen MOCPilot-konto.

**«MocPilot Pro må bekreftes på nett»**
- Pro har vært brukt frakoblet lenge. Koble til internett, så kjøres kontrollen av seg selv.

## Appoppdateringer {#app-updates}

**«Oppdatering kreves»**
- Fullskjermmeldingen «Denne versjonen av MOCPilot støttes ikke lenger…» betyr at denne versjonen ikke kan brukes lenger. Trykk **Oppdater** for å åpne butikken og installere den nye versjonen. Skjermen viser også **Installert versjon**.
- I webeditoren heter knappen **Last inn siden på nytt**: den nyeste editoren lastes inn.

**«MOCPilot (versjon) er tilgjengelig»**
- En nyere versjon er ute. Trykk **Oppdater** (i webeditoren **Last inn siden på nytt**), eller lukk banneret med ×: det kommer ikke tilbake før neste versjon.

## Lyd {#sound}

**Det kommer ingen lyd**
- Slå på **Lyd** i [Innstillinger](/docs/Application/Account/Settings): den demper alle lyder fra appen, kontrollene og programmet.
- Skru opp medievolumet på enheten. Hvis hodetelefoner eller en Bluetooth-høyttaler er tilkoblet, spilles lyden der.
- Logikkblokker: sjekk at programmet ikke setter lydvolumet til 0 eller stopper alle lyder. Se [Lyder](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI-bygger {#ai-builder}

**AI-byggeren er utilgjengelig eller viser en feil**
- AI-byggeren krever [MocPilot Pro](/docs/Application/Account/Pro) og internettforbindelse: «AI-byggeren krever MocPilot Pro.» eller «Fikk ikke kontakt med AI-tjenesten. Sjekk internettforbindelsen og prøv igjen.»
- «KI-tjenesten er midlertidig utilgjengelig. Prøv igjen senere.» eller «For mange KI-forespørsler akkurat nå. Prøv igjen om et minutt.»: vent og prøv igjen.
- Det finnes daglige og månedlige grenser: «Du har nådd dagens grense for AI-forespørsler. Prøv igjen i morgen.»
- Taleinndata: gi tilgang til mikrofonen (og talegjenkjenning på Apple-enheter) i systeminnstillingene; se [Bluetooth og tillatelser](/docs/Help/BluetoothPermissions).
- Alle meldinger og hva du gjør: [AI-bygger](/docs/Application/Profiles/AiBuilder).

## Fjernstyring {#remote-control}

**Hubenheten kobler ikke til, eller forbindelsen brytes**
- «Fjernstyring er en del av MocPilot Pro»: kontoen på fjernkontrollen trenger [MocPilot Pro](/docs/Application/Account/Pro).
- «Koden er utløpt…» eller «Feil eller utløpt kode…»: tilkoblingskoden er gyldig i 5 minutter. Vis en ny kode på fjernkontrollen og skann eller skriv den inn på nytt.
- «Gi MOCPilot tilgang til kameraet i systeminnstillingene for å skanne koden.»: gi tilgang til kameraet i systeminnstillingene ([slik gjør du det](/docs/Help/BluetoothPermissions)), eller trykk **Skriv inn kode** og skriv inn de 6 sifrene.
- «Denne versjonen av appen kan ikke koble til en fjernkontroll» eller «Den andre enheten kunne ikke åpne profilen»: oppdater MOCPilot på begge enhetene.
- «Tilkoblingen til fjernkontrollen ble brutt…»: sjekk at begge enhetene er på nett. Hvis forbindelsen er borte i rundt 4 sekunder, stopper hubenheten profilen og alle motorer.
- Mer: [Fjernstyring](/docs/Application/Profiles/RemoteControl).

## Står du fortsatt fast? {#still-stuck}

Bruk **Still et spørsmål** eller **Rapporter en feil** under **Hjelp** i appen (datamaskin: menyen **Hjelp**). Svaret kommer på e-post og i **Varsler**.
