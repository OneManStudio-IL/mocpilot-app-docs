---
id: BluetoothPermissions
title: Bluetooth og tilladelser
description: "Hvilke tilladelser MOCPilot beder om på hver platform, hvorfor, og hvordan du løser en afvist tilladelse eller et Bluetooth-problem."
---

# Bluetooth og tilladelser {#bluetooth-and-permissions}

MOCPilot taler med hubs via Bluetooth, så systemet beder dig om at tillade det. Nogle få andre tilladelser bliver kun efterspurgt, når du bruger en funktion, der kræver dem.

## Hvad MOCPilot beder om og hvorfor {#what-mocpilot-asks-for-and-why}

| Tilladelse | Hvornår du bliver spurgt | Hvorfor |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | første gang du søger efter en hub | for at finde og forbinde hubs |
| **Enheder i nærheden** (Android 12 og nyere) | første gang du søger efter en hub | for at finde og forbinde hubs |
| **Placering**, nøjagtig (Android 10 og 11) | første gang du søger efter en hub | Android kræver det til Bluetooth-scanning på disse versioner. MOCPilot indsamler, gemmer og deler ikke din placering |
| **Placering** (Android, Mould King-hubs) | når du forbinder en Mould King-hub | appen sender kommandoer til Mould King-hubs som Bluetooth-udsendelser og beder om Placering til det på alle Android-versioner |
| **Kamera** (telefon, tablet) | når du scanner en QR-kode i **Forbind en fjernbetjening** | for at læse [forbindelseskoden](/docs/Application/Profiles/RemoteControl). Du kan i stedet indtaste de 6 cifre |
| **Mikrofon** (iPhone, iPad, Mac, Android) | første gang du dikterer en anmodning til [AI-byggeren](/docs/Application/Profiles/AiBuilder) | stemmeinput |
| **Talegenkendelse** (iPhone, iPad, Mac) | sammen med mikrofonen | for at gøre din stemme til tekst |

På Windows beder MOCPilot ikke om tilladelse til Bluetooth; Bluetooth skal bare være slået til. Til stemmeinput på Windows foreslår MOCPilot Windows-taleindtastning (Win+H).

## Hvis du har afvist en tilladelse {#if-you-denied-a-permission}

Hvis du har afvist en tilladelse, spørger systemet som regel ikke igen. MOCPilot viser så en meddelelse, for eksempel **Scanning mislykkedes** med "Appen kræver tilladelse til at scanne enheder i nærheden…", "Giv MOCPilot adgang til kameraet i systemindstillingerne for at scanne koden." eller "Giv MOCPilot adgang til mikrofonen i systemindstillingerne". Slå tilladelsen til i systemindstillingerne, og gå tilbage til appen:

**iPhone og iPad**
1. Åbn **Indstillinger**, og rul ned til **MOCPilot**.
2. Slå **Bluetooth** til (og **Kamera**, **Mikrofon** eller **Talegenkendelse**, hvis du har brug for dem).

**Android** (navnene varierer lidt fra producent til producent)
1. Åbn **Indstillinger → Apps → MOCPilot → Tilladelser**.
2. Tillad **Enheder i nærheden**. På Android 10 og 11 eller til Mould King-hubs skal du også tillade **Placering** og slå **Brug nøjagtig placering** til.
3. Tillad **Kamera** eller **Mikrofon**, hvis du har brug for dem.

**Mac**
1. Åbn **Systemindstillinger → Anonymitet & sikkerhed**.
2. Vælg **Bluetooth** (eller **Mikrofon**, **Talegenkendelse**), og slå **MOCPilot** til.

**Windows**
1. Åbn **Indstillinger → Bluetooth og enheder**, og slå **Bluetooth** til.

## "Bluetooth er slukket" {#bluetooth-is-off}

MOCPilot viser **Bluetooth er slukket**, når enhedens Bluetooth er slået fra. Slå det til i kontrolcenteret, i hurtigindstillingerne eller i systemindstillingerne, og bekræft derefter meddelelsen: appen søger igen.

## Bluetooth-adaptere på Windows {#bluetooth-adapters-on-windows}

- Du skal bruge en Bluetooth 4.0 (LE)-adapter eller nyere: indbygget i computeren eller som USB-dongle.
- **Mould King 6.0** kræver en adapter og driver, der kan sende Bluetooth-udsendelser (advertising). Det kan ikke alle adaptere.
- **Mould King 4.0** virker ikke på Windows: appen siger "Mould King-hubs med 4 porte kræver Bluetooth-annoncering med tjenestedata, som Windows ikke understøtter." Brug en telefon eller tablet til disse hubs.

## Hubs med klassisk Bluetooth {#classic-bluetooth-hubs}

**Robot Inventor**-hubben bruger klassisk Bluetooth, ikke Bluetooth Low Energy. Den virker på Android, Mac og Windows, men ikke på iPhone og iPad. Hvis MOCPilot ikke finder den på Windows, så par først hubben under **Indstillinger → Bluetooth og enheder → Tilføj enhed**, og søg derefter igen i appen. På Windows og Mac kan du også forbinde den med et USB-kabel; se [MINDSTORMS Robot Inventor-hub](/docs/Application/Hubs/RobotInventorHub#connect).

Alle andre understøttede hubs bruger Bluetooth Low Energy og tilføjes kun i MOCPilot, ikke i systemets Bluetooth-indstillinger.

## En stabil forbindelse {#a-stable-connection}

- **Én app ad gangen.** En hub accepterer kun én forbindelse. Luk LEGO®-apps og andre fjernbetjeningsapps, og afbryd hubben fra andre telefoner.
- **Rækkevidde.** Hold enheden inden for få meter af modellen. Vægge, metal, din krop og andre 2,4 GHz-enheder (Wi-Fi-routere, andre Bluetooth-enheder) forkorter rækkevidden.
- **Batterier.** Svage batterier giver afbrydelser, når motorerne arbejder hårdt.
- **Hold appen åben.** Kør med MOCPilot på skærmen, og slå **Hold skærmen tændt** til under [Indstillinger](/docs/Application/Account/Settings), så skærmen ikke slukker, mens en profil er åben.

Flere løsninger til hubs, der ikke bliver fundet eller bliver ved med at afbryde: [Fejlfinding](/docs/Help/Troubleshooting#hubs).
