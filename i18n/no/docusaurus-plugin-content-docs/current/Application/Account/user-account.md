---
id: UserAccount
title: Konto
description: "Logg inn, opprett en konto, gjestemodus, gjenoppretting av kjøp fra Microsoft Store, region, passord, utlogging og sletting av konto."
---

import Screenshot from '@site/src/components/Screenshot';

# Konto {#account}

En MOCPilot-konto holder profilene, innstillingene og kjøpene dine trygge og tilgjengelige på alle enhetene dine.

## Hvorfor ha en konto {#why-have-an-account}

- Profiler og innstillinger lagres på serveren og synkroniseres mellom enhetene dine.
- Du kan få alt tilbake hvis du bytter eller mister en enhet.
- Kjøp og MocPilot Pro fungerer på alle enhetene dine og i webeditoren.
- Du kan publisere profiler i katalogen og få varsler.

## Logg inn {#sign-in}

På påloggingsskjermen skriver du inn **E-post eller pålogging** og **Passord**, eller bruker **Logg på med Google** / **Logg på med Apple-ID**.

<Screenshot name="sign-in" alt="Påloggingsskjermen i MOCPilot" width={900} />

**Logg inn med QR-kode** logger deg inn på denne enheten ved at du skanner koden med telefonen og bekrefter med Face ID eller fingeravtrykk. Det krever en tilgangsnøkkel på telefonen: legg til én gang for alle på mocpilot.com under **Account → Settings → Passkeys**.

## Opprett en konto {#create-an-account}

Trykk **Opprett konto**: skriv inn e-postadressen to ganger, et brukernavn og et passord (to ganger), og bekreft regionen din. Eller bruk **Fortsett med Google** / **Fortsett med Apple-ID**. Bekreft e-postadressen med aktiveringse-posten; noen funksjoner er deaktivert til kontoen er bekreftet (trykk **Send aktiveringsmail på nytt** hvis den ikke kom).

## Glemt passordet {#forgot-your-password}

Trykk **Tilbakestill** ved siden av «Glemt passord?», skriv inn e-postadressen din og skriv inn koden fra e-posten for å velge et nytt passord.

## Gjestemodus {#guest-mode}

**Fortsett uten konto** på påloggingsskjermen åpner en kort skjerm som viser hva en konto gir deg. Trykk **Fortsett uten konto** der en gang til for å begynne å bruke appen med en gang. Alt blir bare liggende på denne enheten og går tapt hvis du fjerner appen eller mister enheten.

Du kan logge inn senere: på en telefon trykker du **Opprett en konto eller logg inn** øverst i **Innstillinger**; på et nettbrett eller en datamaskin åpner du **Konto** (**Logg inn** i gjestemodus), som viser den samme skjermen med **Opprett konto** og **Har du allerede en konto?**.

### Gjenopprett kjøp fra Microsoft Store {#restore-microsoft-store-purchases}

På Windows har gjesteskjermen også **Gjenopprett kjøp fra Microsoft Store**. Kjøp fra Microsoft Store hører til Microsoft-kontoen du bruker i Windows, så du trenger ingen MOCPilot-konto for å få dem tilbake: klikk på knappen (appen trenger internett), så sjekker appen Microsoft Store (**Sjekker Microsoft Store...**) og låser opp på denne PC-en det den Microsoft-kontoen har kjøpt, også et MocPilot Pro-abonnement.

<Screenshot name="guest-mode-windows" alt="Gjesteskjermen på Windows med Gjenopprett kjøp fra Microsoft Store" width={900} />

## Region {#region}

Hvis kontoen din ble opprettet før MOCPilot begynte å spørre om region, spør appen én gang på hver enhet, noen sekunder etter at du har logget inn: **Angi regionen din**. Regionen hjelper appen med å tilby riktig butikk og riktige priser. Trykk **Velg** for å velge land under **Kontodetaljer**, eller **Ikke nå** for å hoppe over. Du kan endre regionen når som helst under **Kontodetaljer**.

## Kontosiden {#account-page}

Telefon: **Innstillinger → Konto**. Nettbrett: kontoen din nederst i sidelinjen. Datamaskin: **Konto**-knappen i topplinjen.

- **Kontodetaljer**: brukernavn, e-post, region og konto-ID (trykk på et element for å kopiere det).
- **Kjøp**: se [MocPilot Pro og kjøp](/docs/Application/Account/Pro#purchases).
- **Endre passord**.
- **Logg ut**: se [Logge ut](/docs/Application/Account/Sync#signing-out).
- **Slett konto**.

## Slett kontoen din {#delete-your-account}

**Slett konto** sletter kontodataene dine permanent: personopplysninger, innstillinger, historikk og profilene som er lagret på serveren. Du mister også tilgangen til alt kjøpt innhold og abonnementsinnhold som er knyttet til kontoen. Dette kan ikke angres.

Skriv inn det nåværende passordet ditt og bekreft med **Skyv for å slette konto** (berøringsskjermer) eller **Slett konto** (datamaskin).

Et aktivt abonnement administreres av butikken: avslutt det der før du sletter kontoen.

## Varsler {#notifications}

**Varsler** (bjellen på en datamaskin; fanen **Varsler** på telefon og nettbrett) viser resultatene av gjennomgangen av profiler du publiserer, svar på henvendelsene dine til brukerstøtte og nyheter fra MOCPilot-teamet. Du kan merke dem som lest, velge dem og slette dem. Varsler krever en konto.
