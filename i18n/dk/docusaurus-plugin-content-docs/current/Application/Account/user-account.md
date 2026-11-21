---
id: UserAccount
title: Konto
description: "Log ind, opret en konto, gæstetilstand, gendannelse af køb fra Microsoft Store, region, adgangskode, log ud og sletning af konto."
---

import Screenshot from '@site/src/components/Screenshot';

# Konto {#account}

En MOCPilot-konto holder dine profiler, indstillinger og køb sikre og tilgængelige på alle dine enheder.

## Hvorfor have en konto {#why-have-an-account}

- Profiler og indstillinger gemmes på serveren og synkroniseres mellem dine enheder.
- Du kan få det hele tilbage, hvis du udskifter eller mister en enhed.
- Køb og MocPilot Pro virker på alle dine enheder og i webeditoren.
- Du kan udgive profiler i kataloget og få notifikationer.

## Log ind {#sign-in}

På login-skærmen indtaster du din **Email eller login** og **Adgangskode** eller bruger **Log ind med Google** / **Log ind med Apple ID**.

<Screenshot name="sign-in" alt="Login-skærmen i MOCPilot" width={900} />

**Log ind med QR-kode** logger dig ind på denne enhed ved at scanne koden med din telefon og bekræfte med Face ID eller dit fingeraftryk. Det kræver en adgangsnøgle på telefonen: tilføj en én gang på mocpilot.com under **Konto → Indstillinger → Adgangsnøgler**.

## Opret en konto {#create-an-account}

Tryk på **Opret konto**: indtast din e-mail to gange, et brugernavn og en adgangskode (to gange), og bekræft din region. Eller brug **Fortsæt med Google** / **Fortsæt med Apple ID**. Bekræft din e-mail med aktiveringsmailen; nogle funktioner er deaktiveret, indtil kontoen er bekræftet (tryk på **Send aktiveringsmail igen**, hvis den ikke er kommet).

## Glemt adgangskode {#forgot-your-password}

Tryk på **Nulstil** ved siden af "Glemt adgangskode?", indtast din e-mail, og skriv koden fra e-mailen for at vælge en ny adgangskode.

## Gæstetilstand {#guest-mode}

**Fortsæt uden konto** på login-skærmen åbner en kort skærm, der viser, hvad en konto giver dig. Tryk på **Fortsæt uden konto** der igen for at begynde at bruge appen med det samme. Alt bliver kun på denne enhed og går tabt, hvis du fjerner appen eller mister enheden.

Du kan logge ind senere: på en telefon trykker du på **Opret en konto eller log ind** øverst i **Indstillinger**; på en tablet eller computer åbner du **Konto** (**Log ind** i gæstetilstand), som viser den samme skærm med **Opret konto** og **Har du allerede en konto?**.

### Gendan køb fra Microsoft Store {#restore-microsoft-store-purchases}

På Windows har gæsteskærmen også **Gendan køb fra Microsoft Store**. Køb i Microsoft Store hører til den Microsoft-konto, du bruger i Windows, så du behøver ikke en MOCPilot-konto for at få dem tilbage: klik på knappen (appen skal have internet), så tjekker appen Microsoft Store (**Kontrollerer Microsoft Store...**) og låser op for det på denne pc, som Microsoft-kontoen har købt, også et abonnement på MocPilot Pro.

<Screenshot name="guest-mode-windows" alt="Gæsteskærmen på Windows med Gendan køb fra Microsoft Store" width={900} />

## Region {#region}

Hvis din konto blev oprettet, før MOCPilot spurgte om region, spørger appen én gang på hver enhed, et par sekunder efter at du har logget ind: **Angiv din region**. Regionen hjælper appen med at tilbyde den rigtige butik og de rigtige priser. Tryk på **Vælg** for at vælge dit land under **Kontooplysninger**, eller på **Ikke nu** for at springe over. Du kan til enhver tid ændre regionen under **Kontooplysninger**.

## Kontoside {#account-page}

Telefon: **Indstillinger → Konto**. Tablet: din konto nederst i sidebjælken. Computer: knappen **Konto** i topbjælken.

- **Kontooplysninger**: login, e-mail, region og konto-id (tryk på et element for at kopiere det).
- **Køb**: se [MocPilot Pro og køb](/docs/Application/Account/Pro#purchases).
- **Skift adgangskode**.
- **Log ud**: se [Log ud](/docs/Application/Account/Sync#signing-out).
- **Slet konto**.

## Slet din konto {#delete-your-account}

**Slet konto** sletter permanent dine kontodata: personlige oplysninger, præferencer, historik og de profiler, der er gemt på serveren. Du mister også adgangen til alt købt indhold eller abonnementsindhold, der er knyttet til kontoen. Det kan ikke fortrydes.

Indtast din nuværende adgangskode, og bekræft med **Skub for at slette konto** (touchskærme) eller **Slet konto** (computer).

Et aktivt abonnement administreres af butikken: opsig det der, før du sletter kontoen.

## Notifikationer {#notifications}

**Notifikationer** (klokken på en computer; fanen **Notifikationer** på en telefon og tablet) viser resultaterne af gennemgangen af de profiler, du udgiver, svar på dine supporthenvendelser og nyheder fra MOCPilot-teamet. Du kan markere dem som læst, vælge dem og slette dem. Notifikationer kræver en konto.
