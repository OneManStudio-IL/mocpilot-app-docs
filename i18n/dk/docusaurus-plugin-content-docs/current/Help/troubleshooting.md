---
id: Troubleshooting
title: Fejlfinding
description: "Løsninger på almindelige problemer med hubs, motorer, dashboardet, synkronisering, køb, opdateringer, lyd, AI-byggeren og fjernstyring."
---

# Fejlfinding {#troubleshooting}

## Hubs {#hubs}

**Hubben bliver ikke fundet**
- Slå Bluetooth til, og giv MOCPilot lov til at bruge Bluetooth (på Android også Enheder i nærheden eller Placering) i systemindstillingerne. Se [Bluetooth og tilladelser](/docs/Help/BluetoothPermissions).
- Tænd hubben, og tryk på dens knap lige før scanningen; tryk på **Start scanning** igen.
- Sørg for, at hubben ikke er forbundet til en anden telefon eller app (LEGO®-apps, en anden fjernbetjening). Luk dem.
- Udskift eller oplad batterierne.
- Robot Inventor: ikke tilgængelig på iPhone og iPad. Mould King 4.0: ikke tilgængelig på Windows.

**Hubben afbryder forbindelsen**
- Flyt enheden tættere på: vægge, metal og andre 2,4 GHz-enheder mindsker rækkevidden.
- Svage batterier giver afbrydelser under belastning: oplad eller udskift dem.
- Nogle hubs slukker efter et stykke tid uden kommandoer; forbind igen under **Mine hubs**.
- Mere om rækkevidde, adaptere og tilladelser: [Bluetooth og tilladelser](/docs/Help/BluetoothPermissions).

**"Firmwareopdatering kræves"**
- MOCPilot kræver en understøttet firmware til Technic-, Technic Move-, BOOST- og City-hubs. Følg [Opdatering af firmware](/docs/Application/Hubs/FirmwareUpdating). Hvis en opdatering mislykkedes, så se [Gendannelse af firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King reagerer ikke**
- Mould King-hubs modtager kun kommandoer. Brug **Tilslut igen**, tjek kanalen (**Vælg kanal**), og brug kun én Mould King-type pr. profil.

## Motorer og programmet {#motors-and-the-program}

**Motoren bevæger sig ikke**
- Kører programmet (**Kør**)? Er hubben forbundet?
- Sidder motoren på den port, programmet bruger? Tjek [hubmonitoren](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Hurtige forbindelser: åbn **Problemer**; følg live-værdierne langs rækken. Se [Kørsel og løsning af problemer](/docs/Application/Links/Problems).
- Logikblokke: starter scriptet med en hændelsesblok? Brug **Monitor** til at holde øje med værdierne.

**Motoren drejer den forkerte vej**
- Hurtige forbindelser: tilføj **Inverter** til rækken. Logikblokke: gang værdien med −1.

**Motoren kryber eller brummer, når joysticket er sluppet**
- Hurtige forbindelser: tilføj **Dødzone**. Logikblokke: ignorer små værdier med *mellem*.

**Servostyringen er ude af centrum eller rammer endestoppet**
- Hurtige forbindelser: Servo med kalibreringen **Auto** eller **Manuel** med **Sæt som nul** og **Midte**; mindsk **Vinkel**. Logikblokke: *kalibrer styring*.
- Servo, Kør et antal grader og Gå til position kræver motorer med encoder; simple motorer og SBrick-porte tager kun imod hastighed.

**Motorerne bliver ved med at køre efter Stop**
- Logikblokke: slå **Stop hub-porte, når programmet stopper** til i Editorindstillinger.

## Dashboard {#dashboard}

**Jeg kan ikke flytte eller slette en kontrol**
- Den er låst: vælg **Lås op** i dens menu. En kontrol, som programmet bruger, kan ikke slettes, før du fjerner dens rækker eller blokke.

**"Der er ikke plads på dashboardet"**
- Flyt eller formindsk andre kontroller, eller vælg en mindre størrelse.

**Et tema eller en kontrol er låst**
- Du ejer den ikke: køb den, eller få [MocPilot Pro](/docs/Application/Account/Pro), eller skift kontrollen til temaet Grundlæggende med **Skift tema**.

**Gamepad'en bliver ikke registreret**
- Par gamepad'en i systemets Bluetooth-indstillinger (eller tilslut den med USB). Siden **Spilcontroller** viser **Gamepad: (navn)**, når appen kan se den, og "Gamepad er ikke forbundet", når den ikke kan.
- Slå **Aktivér gamepad-blokke** til på siden **Spilcontroller**, ellers vises gamepad-input og -blokke ikke.
- Er flere gamepads forbundet? Vælg én under **Vælg gamepad**.
- Tjek knapper og sticks med **Test gamepad**.
- Windows: Xbox-controllere (XInput) og Sony DualSense / DualSense Edge virker; andre controllere uden understøttelse af XInput virker måske ikke.
- Se [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profiler og synkronisering {#profiles-and-sync}

**Mine profiler er ikke på min anden enhed**
- Log ind med den samme konto på begge enheder, og tjek internetforbindelsen. Hvis appen viser **Offline**, så tryk på **Prøv igen** eller **Gå online**.

**"Profilen er ikke kompatibel"**
- Profilen er lavet med en nyere version af MOCPilot. Opdater appen.

**Jeg mistede mine profiler efter geninstallation**
- I gæstetilstand findes profilerne kun på enheden og forsvinder sammen med appen. Med en konto skal du bare logge ind igen, så kommer de tilbage.

## E-mails om kontoen {#account-emails}

**Aktiveringsmailen eller koden til nulstilling af adgangskode kommer ikke**
- Vent et par minutter, og tjek mappen med spam eller uønsket post. E-mails kommer fra no-reply@mocpilot.com.
- Tjek, at du har skrevet e-mailadressen korrekt.
- Aktivering: åbn din kontoside, og tryk på **Send aktiveringsmail igen**. Indtil kontoen er bekræftet, er nogle funktioner deaktiveret.
- Nulstilling af adgangskode: "E-mail ikke fundet" betyder, at der ikke findes en konto med denne e-mail; prøv den adresse, du tilmeldte dig med. Ellers kan du trykke på **Nulstil** ved siden af "Glemt adgangskode?" igen for at få en ny kode. Se [Konto](/docs/Application/Account/UserAccount).

## Køb {#purchases}

**Et køb mangler**
- Log ind med den konto, du foretog købet med, og gå derefter til **Konto → Køb → Gendan**.
- "Abonnementet er knyttet til en anden konto": Pro-abonnementet på denne butikskonto hører til en anden MOCPilot-konto.

**"MocPilot Pro skal bekræftes online"**
- Pro har været brugt offline i lang tid. Opret forbindelse til internettet, så kører kontrollen af sig selv.

## Opdateringer af appen {#app-updates}

**"Opdatering påkrævet"**
- Fuldskærmsmeddelelsen "Denne version af MOCPilot understøttes ikke længere…" betyder, at denne version ikke kan bruges mere. Tryk på **Opdater** for at åbne butikken og installere den nye version. Skærmen viser også din **Installeret version**.
- I webeditoren hedder knappen **Genindlæs siden**: den nyeste editor indlæses.

**"MOCPilot (version) er tilgængelig"**
- Der er kommet en nyere version. Tryk på **Opdater** (i webeditoren **Genindlæs siden**), eller luk banneret med ×: det kommer ikke igen før næste version.

## Lyd {#sound}

**Der er ingen lyd**
- Slå **Lyd** til under [Indstillinger](/docs/Application/Account/Settings): den slår alle lyde fra appen, kontrollerne og programmet fra.
- Skru op for enhedens medielydstyrke. Hvis der er tilsluttet høretelefoner eller en Bluetooth-højttaler, afspilles lyden der.
- Logikblokke: tjek, at programmet ikke sætter lydstyrken til 0 eller stopper alle lyde. Se [Lyde](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI-bygger {#ai-builder}

**AI-byggeren er utilgængelig eller viser en fejl**
- AI-byggeren kræver [MocPilot Pro](/docs/Application/Account/Pro) og en internetforbindelse: "AI-byggeren kræver MocPilot Pro." eller "AI-tjenesten kunne ikke nås. Tjek din internetforbindelse, og prøv igen."
- "AI-tjenesten er midlertidigt utilgængelig. Prøv igen senere." eller "For mange AI-anmodninger lige nu. Prøv igen om et minut.": vent, og prøv igen.
- Der er daglige og månedlige grænser: "Du har nået dagens grænse for AI-anmodninger. Prøv igen i morgen."
- Stemmeinput: giv adgang til mikrofonen (og talegenkendelse på Apple-enheder) i systemindstillingerne; se [Bluetooth og tilladelser](/docs/Help/BluetoothPermissions).
- Alle meddelelser og hvad du skal gøre: [AI-bygger](/docs/Application/Profiles/AiBuilder).

## Fjernstyring {#remote-control}

**Hubenheden forbinder ikke, eller forbindelsen falder ud**
- "Fjernstyring er en del af MocPilot Pro": fjernbetjeningens konto skal have [MocPilot Pro](/docs/Application/Account/Pro).
- "Koden er udløbet…" eller "Forkert eller udløbet kode…": forbindelseskoden er gyldig i 5 minutter. Vis en ny kode på fjernbetjeningen, og scan eller indtast den igen.
- "Giv MOCPilot adgang til kameraet i systemindstillingerne for at scanne koden.": giv adgang til kameraet i systemindstillingerne ([sådan gør du](/docs/Help/BluetoothPermissions)), eller tryk på **Indtast kode**, og indtast de 6 cifre.
- "Denne version af appen kan ikke forbinde til en fjernbetjening" eller "Den anden enhed kunne ikke åbne profilen": opdater MOCPilot på begge enheder.
- "Forbindelsen til fjernbetjeningen blev afbrudt…": tjek, at begge enheder er online. Hvis forbindelsen er væk i ca. 4 sekunder, stopper hubenheden profilen og alle motorer.
- Mere: [Fjernstyring](/docs/Application/Profiles/RemoteControl).

## Sidder du stadig fast? {#still-stuck}

Brug **Stil et spørgsmål** eller **Rapportér en fejl** under **Hjælp** i appen (computer: menuen **Hjælp**). Svaret kommer via e-mail og under **Notifikationer**.
