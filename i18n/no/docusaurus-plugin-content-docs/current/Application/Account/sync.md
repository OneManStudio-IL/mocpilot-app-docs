---
id: Sync
title: Synkronisering mellom enheter
description: "Hold MOCPilot-profiler og -innstillinger synkronisert mellom telefoner, nettbrett, datamaskiner og webeditoren, og jobb frakoblet."
---

import Screenshot from '@site/src/components/Screenshot';

# Synkronisering mellom enheter {#sync-between-devices}

Når du er logget inn, holder MOCPilot profilene og innstillingene dine like på alle enheter: telefon, nettbrett, datamaskin og [webeditoren](/docs/Introducing/WebEditor). Det er ingenting å slå på: synkronisering er alltid på for en konto.

## Slik fungerer det {#how-it-works}

- Endringer lagres først på enheten og lastes opp når du er på nett («Synkroniserer profiler…»).
- Andre enheter laster ned den nye versjonen når de er på nett.
- Kjøp synkroniseres ikke som filer; de hører til kontoen din og er tilgjengelige overalt der du logger inn.
- Profiler som er lagt til på nettstedet (**Legg til i kontoen min** i katalogen) eller redigert i webeditoren, kommer frem gjennom synkronisering.
- I gjestemodus synkroniseres ingenting: profilene blir bare liggende på denne enheten.

## Konflikter {#conflicts}

Hvis den samme profilen ble endret på to enheter før de rakk å synkronisere, vinner versjonen fra kontoen din, og versjonen din på denne enheten lagres som en kopi («(kopi)» legges til i navnet). MOCPilot sier fra om dette i en **Profilsynkronisering**-melding. Det samme skjer hvis en profil du har endret her, er slettet på en annen enhet.

Hvis du åpner en profil som redigeres på en annen enhet akkurat nå, kan du velge **Bare visning** (endringer lagres ikke) eller **Overta redigeringen**.

## Jobbe frakoblet {#working-offline}

Hubber, profilene dine og nedlastede temaer fungerer uten internett.

- Hvis MOCPilot ikke når serveren ved oppstart, viser den **Ingen internettforbindelse** med **Jobb frakoblet** og **Prøv igjen**.
- Mens du er frakoblet, vises merket **Frakoblet** øverst. Funksjoner som trenger serveren (katalogen og publisering, AI-byggeren, fjernstyring, varsler, kjøp, meldinger til brukerstøtte), sier fra om at de trenger internettforbindelse.
- Endringer du gjør frakoblet, lastes opp når forbindelsen er tilbake. Når appen ser serveren igjen, viser den **Forbindelsen er tilbake** med **Gå på nett**.

<Screenshot name="offline-prompt" alt="Meldingen Ingen internettforbindelse med knappene Jobb frakoblet og Prøv igjen" width={900} />

## Logge ut {#signing-out}

Når du logger ut, fjernes profilene og innstillingene dine fra denne enheten; de blir liggende i kontoen din og kommer tilbake når du logger inn igjen. Hvis noen endringer ikke er lastet opp ennå, advarer MOCPilot deg først og viser profilene: koble til internett og la synkroniseringen bli ferdig, eller velg **Logg ut likevel** (en kopi beholdes i appens Backup-mappe).

## Tips {#tips}

- Før du publiserer en profil i katalogen, må du sørge for at den er synkronisert: katalogen henter den fra kontoen din.
- For å flytte profiler til en enhet uten konto bruker du **Del** og **Importer profil…** med `.dat`-filer. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles).
