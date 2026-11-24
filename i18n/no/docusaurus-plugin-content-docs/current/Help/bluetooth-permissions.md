---
id: BluetoothPermissions
title: Bluetooth og tillatelser
description: "Hvilke tillatelser MOCPilot ber om på hver plattform, hvorfor, og hvordan du løser en avslått tillatelse eller et Bluetooth-problem."
---

# Bluetooth og tillatelser {#bluetooth-and-permissions}

MOCPilot kommuniserer med hubber over Bluetooth, så systemet ber deg om å tillate det. Noen få andre tillatelser blir bare etterspurt når du bruker en funksjon som trenger dem.

## Hva MOCPilot ber om og hvorfor {#what-mocpilot-asks-for-and-why}

| Tillatelse | Når den etterspørres | Hvorfor |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | første gang du søker etter en hub | for å finne og koble til hubber |
| **Enheter i nærheten** (Android 12 og nyere) | første gang du søker etter en hub | for å finne og koble til hubber |
| **Posisjon**, nøyaktig (Android 10 og 11) | første gang du søker etter en hub | Android krever det for Bluetooth-skanning på disse versjonene. MOCPilot verken samler inn, lagrer eller deler posisjonen din |
| **Posisjon** (Android, Mould King-hubber) | når du kobler til en Mould King-hub | appen sender kommandoer til Mould King-hubber som Bluetooth-kringkasting og ber om Posisjon for dette på alle Android-versjoner |
| **Kamera** (telefon, nettbrett) | når du skanner en QR-kode i **Koble til en fjernkontroll** | for å lese [tilkoblingskoden](/docs/Application/Profiles/RemoteControl). Du kan skrive inn de 6 sifrene i stedet |
| **Mikrofon** (iPhone, iPad, Mac, Android) | første gang du dikterer en forespørsel til [AI-byggeren](/docs/Application/Profiles/AiBuilder) | taleinndata |
| **Talegjenkjenning** (iPhone, iPad, Mac) | sammen med mikrofonen | for å gjøre stemmen din om til tekst |

På Windows ber ikke MOCPilot om Bluetooth-tillatelse; Bluetooth må bare være slått på. For taleinndata på Windows foreslår MOCPilot taleskriving i Windows (Win+H).

## Hvis du avslo en tillatelse {#if-you-denied-a-permission}

Hvis du har avslått en tillatelse, spør systemet vanligvis ikke igjen. MOCPilot viser da en melding, for eksempel **Skanning mislyktes** med «Appen trenger tillatelse til å skanne enheter i nærheten…», «Gi MOCPilot tilgang til kameraet i systeminnstillingene for å skanne koden.» eller «Gi MOCPilot tilgang til mikrofonen i systeminnstillingene». Slå på tillatelsen i systeminnstillingene og gå tilbake til appen:

**iPhone og iPad**
1. Åpne **Innstillinger** og bla ned til **MOCPilot**.
2. Slå på **Bluetooth** (og **Kamera**, **Mikrofon** eller **Talegjenkjenning** hvis du trenger dem).

**Android** (navnene varierer litt fra produsent til produsent)
1. Åpne **Innstillinger → Apper → MOCPilot → Tillatelser**.
2. Tillat **Enheter i nærheten**. På Android 10 og 11, eller for Mould King-hubber, tillater du også **Posisjon** og slår på **Bruk nøyaktig posisjon**.
3. Tillat **Kamera** eller **Mikrofon** hvis du trenger dem.

**Mac**
1. Åpne **Systeminnstillinger → Personvern og sikkerhet**.
2. Velg **Bluetooth** (eller **Mikrofon**, **Talegjenkjenning**) og slå på **MOCPilot**.

**Windows**
1. Åpne **Innstillinger → Bluetooth og enheter** og slå på **Bluetooth**.

## «Bluetooth er av» {#bluetooth-is-off}

MOCPilot viser **Bluetooth er av** når Bluetooth på enheten er slått av. Slå det på i kontrollsenteret, hurtiginnstillingene eller systeminnstillingene, og bekreft deretter meldingen: appen søker på nytt.

## Bluetooth-adaptere på Windows {#bluetooth-adapters-on-windows}

- Du trenger en Bluetooth 4.0 (LE)-adapter eller nyere: innebygd i datamaskinen eller en USB-adapter.
- **Mould King 6.0** trenger en adapter og driver som kan sende Bluetooth-kringkasting (advertising). Ikke alle adaptere kan det.
- **Mould King 4.0** fungerer ikke på Windows: appen sier «Mould King-huber med 4 porter krever Bluetooth-annonsering med tjenestedata, som Windows ikke støtter.» Bruk en telefon eller et nettbrett til disse hubbene.

## Hubber med klassisk Bluetooth {#classic-bluetooth-hubs}

**Robot Inventor**-huben bruker klassisk Bluetooth, ikke Bluetooth Low Energy. Den fungerer på Android, Mac og Windows, men ikke på iPhone og iPad. Hvis MOCPilot ikke finner den på Windows, parer du huben først under **Innstillinger → Bluetooth og enheter → Legg til enhet** og søker deretter på nytt i appen. På Windows og Mac kan du også koble den til med en USB-kabel; se [MINDSTORMS Robot Inventor-huben](/docs/Application/Hubs/RobotInventorHub#connect).

Alle andre støttede hubber bruker Bluetooth Low Energy og legges bare til i MOCPilot, ikke i systemets Bluetooth-innstillinger.

## En stabil forbindelse {#a-stable-connection}

- **Én app om gangen.** En hub godtar bare én tilkobling. Lukk LEGO®-apper og andre fjernstyringsapper, og koble huben fra andre telefoner.
- **Rekkevidde.** Hold enheten innenfor noen få meter fra modellen. Vegger, metall, kroppen din og andre 2,4 GHz-enheter (Wi-Fi-rutere, andre Bluetooth-enheter) gir kortere rekkevidde.
- **Batterier.** Svake batterier gir frakoblinger når motorene jobber hardt.
- **Hold appen åpen.** Kjør med MOCPilot på skjermen, og slå på **Hold skjermen på** i [Innstillinger](/docs/Application/Account/Settings) slik at skjermen ikke slås av mens en profil er åpen.

Flere løsninger for hubber som ikke blir funnet eller stadig kobles fra: [Feilsøking](/docs/Help/Troubleshooting#hubs).
