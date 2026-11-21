---
id: RemoteControl
title: Fjernstyring
description: "Kjør en profil på telefonen, nettbrettet eller datamaskinen ved siden av modellen, og styr den fra en annen enhet eller fra webeditoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Fjernstyring {#remote-control}

Med fjernstyring kan du kjøre en modell som er koblet til en annen enhet. Én enhet står ved siden av modellen og kommuniserer med hubbene over Bluetooth; du holder den andre og bruker dashboardet på den. Det er også slik du kjører en modell fra [webeditoren](/docs/Introducing/WebEditor), fordi nettlesere ikke kan koble til hubber.

## De to enhetene {#the-two-devices}

- **Hubenheten** er telefonen, nettbrettet eller datamaskinen ved siden av modellen. MOCPilot-appen på den kobler til hubbene og kjører profilen. Den trenger ingen konto.
- **Fjernkontrollen** er det du styrer fra: MOCPilot-appen på en annen enhet, eller webeditoren på [mocpilot.com](https://mocpilot.com). Profilen åpnes på fjernkontrollen, og fjernkontrollen sender den til hubenheten.

## Dette trenger du {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) på kontoen som er logget inn på **fjernkontrollen**. Hubenheten trenger verken konto eller Pro.
- MOCPilot-appen på hubenheten.
- Internettforbindelse på begge enhetene.

## Koble til en hubenhet {#connect-a-hub-device}

1. På fjernkontrollen åpner du profilen og trykker **Fjernstyring** (fjernkontrollikonet: et hus med signalbuer) i profilens topplinje. I webeditoren trykker du **Vis koden** i panelet som åpnes.

   Fjernkontrollen viser en **tilkoblingskode**: en QR-kode og 6 sifre.
2. På hubenheten åpner du MOCPilot og trykker **Koble til en fjernkontroll** på siden **Mine profiler**. På Mac kan du også velge **Fil → Koble til en fjernkontroll…**.
3. Skriv inn koden:
   - **på en telefon eller et nettbrett** retter du kameraet mot QR-koden, eller trykker **Skriv inn kode** og skriver inn de 6 sifrene;
   - **på en datamaskin** skriver du inn de 6 sifrene og trykker **Koble til**.
4. Enhetene kobles sammen. Fjernkontrollen sender profilen til hubenheten og starter den der, og hubenheten viser siden **Fjernstyring** i fullskjerm.

<Screenshot name="remote-control-code" alt="Fjernstyring-panelet i en åpen profil med QR-koden og den sekssifrede koden" width={900} />

Om tilkoblingskoden:

- Den virker én gang og er gyldig i 5 minutter. Så lenge fjernkontrollen fortsetter å vise den, erstattes den av en ny kode når den utløper.
- Skann den i MOCPilot-appen, ikke med kameraappen på telefonen.
- Hvis du lukker panelet på fjernkontrollen før hubenheten kobler til, blir ingenting satt opp; trykk **Fjernstyring** igjen for en ny kode.

<Screenshot name="remote-connect-code-entry" alt="Vinduet Koble til en fjernkontroll på en datamaskin med feltet for de 6 sifrene" width={900} />

## Når enhetene er koblet sammen {#when-the-devices-are-connected}

**På fjernkontrollen:**

- **Fjernstyring**-knappen blir grønn (på telefon eller nettbrett en grønn ring), og panelet viser navnet på hubenheten og en **Koble fra**-knapp.
- **Mine hubber** viser hubbene til hubenheten. Koble til hubbene derfra som vanlig: hubenheten søker etter dem, så trykk på knappen på huben når du blir bedt om det.
- Dashboardet styrer modellen.

**På hubenheten** viser siden **Fjernstyring** i fullskjerm:

- tilstanden, for eksempel **Kjører «Min bil»**;
- **Tilkoblede hubber: N** og, mens den søker, **Søker etter en hub: trykk på knappen på huben.**;
- en påminnelse: **Hold appen åpen. Dette er hubenheten: den kobler til hubbene og kjører profilen, fjernkontrollen styrer den bare.**;
- en **Stopp**-knapp.

Skjermen på hubenheten holdes på mens den er tilkoblet. Profilen lagres ikke på hubenheten og vises ikke i profillisten der.

<Screenshot name="remote-hub-device" alt="Siden Fjernstyring i fullskjerm på hubenheten med tilkoblingsstatus, antall tilkoblede hubber og Stopp-knappen" width={900} />

## Kjør og Stopp {#run-and-stop}

- Trykk **Stopp** på fjernkontrollen for å stoppe profilen på hubenheten. Hubenheten stopper alltid alle motorer, selv om **Stopp hubporter når programmet stopper** er slått av i profilen.
- Trykk **Kjør** på fjernkontrollen for å starte den på hubenheten igjen.
- I webeditoren forblir hubenheten paret for alle profiler du åpner i den samme nettleserfanen: **Kjør** starter profilen på hubenheten. Når ingen hubenhet er paret, kjører **Kjør** profilen i nettleseren, uten hubber.

## Hvis forbindelsen brytes {#if-the-connection-drops}

:::caution Sikkerhet
Hvis hubenheten ikke hører noe fra fjernkontrollen på 4 sekunder, stopper den profilen og alle motorer.
:::

Deretter:

- viser hubenheten **Tilkoblingen til fjernkontrollen ble brutt. Profilen ble stoppet. Venter på fjernkontrollen…** og venter;
- viser appen på fjernkontrollen **Tilkoblingen ble brutt. Prøver igjen…** med **Prøv igjen** og **Koble fra**;
- viser webeditoren **Hubenheten ble koblet fra**: «*enhet* sluttet å svare. Profilen på den ble stoppet, og motorene ble slått av.» Den fortsetter å prøve å koble til på nytt; du kan også trykke **Koble til på nytt**, **Kjør i nettleseren** eller **Stopp**.

Når enhetene er koblet sammen igjen, sjekker du tilstanden på fjernkontrollen og trykker **Kjør** hvis profilen ikke kjører.

## Koble fra {#disconnect}

- **På fjernkontrollen**: trykk **Fjernstyring** og velg **Koble fra**.
- **På hubenheten**: trykk **Stopp** på siden **Fjernstyring**.

Uansett stopper profilen og motorene, og hubenheten lukker profilen.

## Feilsøking {#troubleshooting}

| Melding | Hvor | Hva du gjør |
|---|---|---|
| **Fjernstyring er en del av MocPilot Pro** | fjernkontroll | Abonner på [MocPilot Pro](/docs/Application/Account/Pro) på kontoen til fjernkontrollen. Du kan ikke abonnere i nettleseren: gjør det i appen, så fungerer Pro også i webeditoren |
| **Ingen forbindelse til serveren** | begge | Sjekk internettforbindelsen og prøv igjen |
| **Kunne ikke hente en kode fra serveren** | fjernkontroll | Trykk **Vis koden** for å prøve igjen |
| **Feil eller utløpt kode. Sjekk de 6 sifrene som vises på fjernkontrollen.** | hubenhet | Skriv inn de 6 sifrene fjernkontrollen viser akkurat nå |
| **Koden er utløpt. Vis en ny kode på fjernkontrollen og skann den på nytt.** | hubenhet | Trykk **Fjernstyring** på fjernkontrollen og skann den nye koden |
| **Dette er ikke en MOCPilot-kode. Skann koden som vises av fjernkontrollen.** | hubenhet | Skann QR-koden i **Fjernstyring**-panelet på fjernkontrollen |
| **For mange feil koder. Prøv igjen om noen minutter.** | hubenhet | Vent noen minutter, og skriv deretter inn den gjeldende koden |
| **Gi MOCPilot tilgang til kameraet i systeminnstillingene for å skanne koden.** | hubenhet | Gi tilgang til kameraet i systeminnstillingene, eller trykk **Skriv inn kode** og skriv inn de 6 sifrene |
| **Fjernkontrollen svarer ikke. Sjekk at profilen er åpen på den og at den er online.** | hubenhet | Hold profilen åpen på fjernkontrollen og sjekk internettforbindelsen der |
| **Denne versjonen av appen kan ikke koble til en fjernkontroll** | begge | Oppdater MOCPilot |
| **Denne nettleseren kan ikke åpne en direkte tilkobling (WebRTC)** | webeditor | Bruk en annen nettleser, for eksempel Chrome, Edge eller Safari |
| **Profilen er for stor** / **Profilen kom ikke helt fram** | begge | Sjekk forbindelsen og trykk **Kjør** igjen |
| **Den andre enheten kunne ikke lagre profilen** / **Den andre enheten kunne ikke åpne profilen** | fjernkontroll | Trykk **Kjør** igjen; hvis det fortsetter å skje, kobler du fra og kobler til hubenheten på nytt |
| **Tilkoblingen til *enhet* ble brutt** / **Tilkoblingen til fjernkontrollen ble brutt. Venter på den…** | begge | Se [Hvis forbindelsen brytes](#if-the-connection-drops) |
