---
id: RemoteControl
title: Fjernstyring
description: "Kør en profil på telefonen, tabletten eller computeren ved siden af modellen, og styr den fra en anden enhed eller fra webeditoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Fjernstyring {#remote-control}

Med fjernstyring kan du køre en model, der er forbundet til en anden enhed. Den ene enhed bliver ved siden af modellen og taler med hubbene via Bluetooth; den anden holder du selv og bruger dens dashboard. Det er også sådan, du kører en model fra [webeditoren](/docs/Introducing/WebEditor), fordi browsere ikke kan forbinde til hubs.

## De to enheder {#the-two-devices}

- **Hubenheden** er den telefon, tablet eller computer, der står ved siden af modellen. Dens MOCPilot-app forbinder hubbene og kører profilen. Den behøver ikke en konto.
- **Fjernbetjeningen** er det, du styrer fra: MOCPilot-appen på en anden enhed eller webeditoren på [mocpilot.com](https://mocpilot.com). Profilen åbnes på fjernbetjeningen, og fjernbetjeningen sender den til hubenheden.

## Det skal du bruge {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) på den konto, der er logget ind på **fjernbetjeningen**. Hubenheden behøver hverken konto eller Pro.
- MOCPilot-appen på hubenheden.
- En internetforbindelse på begge enheder.

## Forbind en hubenhed {#connect-a-hub-device}

1. Åbn profilen på fjernbetjeningen, og tryk på **Fjernstyring** (ikonet for fjernstyring: et hus med signalbuer) i profilens topbjælke ved siden af **Kør**. I webeditoren trykker du på **Vis koden** i panelet, der åbnes.

   Fjernbetjeningen viser en **forbindelseskode**: en QR-kode og 6 cifre.
2. Åbn MOCPilot på hubenheden, og tryk på **Forbind en fjernbetjening** på siden **Mine profiler**. På en Mac kan du også vælge **Fil → Forbind en fjernbetjening…**.
3. Indtast koden:
   - **på en telefon eller tablet** retter du kameraet mod QR-koden eller trykker på **Indtast kode** og indtaster de 6 cifre;
   - **på en computer** indtaster du de 6 cifre og trykker på **Forbind**.
4. Enhederne forbindes. Fjernbetjeningen sender profilen til hubenheden og starter den der, og hubenheden viser fuldskærmssiden **Fjernstyring**.

<Screenshot name="remote-control-code" alt="Panelet Fjernstyring i en åben profil med QR-koden og den 6-cifrede kode" width={900} />

Om forbindelseskoden:

- Den virker én gang og er gyldig i 5 minutter. Så længe fjernbetjeningen viser den, erstattes den af en ny kode, når den udløber.
- Scan den i MOCPilot-appen, ikke med telefonens kameraapp.
- Hvis du lukker panelet på fjernbetjeningen, før hubenheden forbinder, bliver der ikke sat noget op; tryk på **Fjernstyring** igen for at få en ny kode.

<Screenshot name="remote-connect-code-entry" alt="Vinduet Forbind en fjernbetjening på en computer med feltet til de 6 cifre" width={900} />

## Når enhederne er forbundet {#when-the-devices-are-connected}

**På fjernbetjeningen:**

- Knappen **Fjernstyring** bliver grøn (på en telefon eller tablet en grøn ring), og dens panel viser hubenhedens navn og knappen **Afbryd**.
- **Mine hubs** viser hubenhedens hubs. Forbind hubbene derfra som sædvanligt: hubenheden søger efter dem, så tryk på knappen på hubben, når du bliver bedt om det.
- Dashboardet styrer modellen.

**På hubenheden** viser fuldskærmssiden **Fjernstyring**:

- tilstanden, for eksempel **Kører «Min bil»**;
- **Forbundne hubs: N** og, mens den søger, **Søger efter en hub: tryk på knappen på hubben.**;
- en påmindelse: **Hold appen åben. Det er hubenheden: den forbinder hubs og kører profilen, fjernbetjeningen styrer den kun.**;
- knappen **Stop**.

Hubenhedens skærm forbliver tændt, mens den er forbundet. Profilen gemmes ikke på hubenheden og vises ikke på dens profilliste.

<Screenshot name="remote-hub-device" alt="Fuldskærmssiden Fjernstyring på hubenheden med forbindelsestilstanden, antallet af forbundne hubs og knappen Stop" width={900} />

## Kør og Stop {#run-and-stop}

- Tryk på **Stop** på fjernbetjeningen for at stoppe profilen på hubenheden. Hubenheden stopper altid alle motorer, også selvom **Stop hub-porte, når programmet stopper** er slået fra i profilen.
- Tryk på **Kør** på fjernbetjeningen for at starte den igen på hubenheden.
- I webeditoren forbliver hubenheden parret for hver profil, du åbner i den samme browserfane: **Kør** starter profilen på hubenheden. Når ingen hubenhed er parret, kører **Kør** profilen i browseren uden hubs.

## Hvis forbindelsen falder ud {#if-the-connection-drops}

:::caution Sikkerhed
Hvis hubenheden ikke hører noget fra fjernbetjeningen i 4 sekunder, stopper den profilen og alle motorer.
:::

Derefter:

- viser hubenheden **Forbindelsen til fjernbetjeningen blev afbrudt. Profilen blev stoppet. Venter på fjernbetjeningen…** og venter;
- viser appen på fjernbetjeningen **Forbindelsen blev afbrudt. Prøver igen…** med **Prøv igen** og **Afbryd**;
- viser webeditoren **Hubenheden blev afbrudt**: "*enhed* svarer ikke længere. Profilen på den blev stoppet, og motorerne er slukket." Den bliver ved med at forsøge at forbinde igen; du kan også trykke på **Forbind igen**, **Kør i browseren** eller **Stop**.

Når enhederne er forbundet igen, så tjek tilstanden på fjernbetjeningen, og tryk på **Kør**, hvis profilen ikke kører.

## Afbryd {#disconnect}

- **På fjernbetjeningen**: tryk på **Fjernstyring**, og vælg **Afbryd**.
- **På hubenheden**: tryk på **Stop** på siden **Fjernstyring**.

Uanset hvad stopper profilen og motorerne, og hubenheden lukker profilen.

## Fejlfinding {#troubleshooting}

| Meddelelse | Hvor | Hvad du skal gøre |
|---|---|---|
| **Fjernstyring er en del af MocPilot Pro** | fjernbetjening | Abonnér på [MocPilot Pro](/docs/Application/Account/Pro) på fjernbetjeningens konto. Du kan ikke abonnere i browseren: gør det i appen, så virker Pro også i webeditoren |
| **Ingen forbindelse til serveren** | begge | Tjek internetforbindelsen, og prøv igen |
| **Kunne ikke hente en kode fra serveren** | fjernbetjening | Tryk på **Vis koden** for at prøve igen |
| **Forkert eller udløbet kode. Tjek de 6 cifre, der vises på fjernbetjeningen.** | hubenhed | Indtast de 6 cifre, som fjernbetjeningen viser lige nu |
| **Koden er udløbet. Vis en ny kode på fjernbetjeningen, og scan den igen.** | hubenhed | Tryk på **Fjernstyring** på fjernbetjeningen, og scan den nye kode |
| **Dette er ikke en MOCPilot-kode. Scan koden, som fjernbetjeningen viser.** | hubenhed | Scan QR-koden i panelet **Fjernstyring** på fjernbetjeningen |
| **For mange forkerte koder. Prøv igen om et par minutter.** | hubenhed | Vent et par minutter, og indtast derefter den aktuelle kode |
| **Giv MOCPilot adgang til kameraet i systemindstillingerne for at scanne koden.** | hubenhed | Giv adgang til kameraet i systemindstillingerne, eller tryk på **Indtast kode**, og indtast de 6 cifre |
| **Fjernbetjeningen svarer ikke. Kontrollér, at profilen er åben på den, og at den er online.** | hubenhed | Hold profilen åben på fjernbetjeningen, og tjek dens internetforbindelse |
| **Denne version af appen kan ikke forbinde til en fjernbetjening** | begge | Opdater MOCPilot |
| **Denne browser kan ikke åbne en direkte forbindelse (WebRTC)** | webeditor | Brug en anden browser, for eksempel Chrome, Edge eller Safari |
| **Profilen er for stor** / **Profilen kom ikke helt frem** | begge | Tjek forbindelsen, og tryk på **Kør** igen |
| **Den anden enhed kunne ikke gemme profilen** / **Den anden enhed kunne ikke åbne profilen** | fjernbetjening | Tryk på **Kør** igen; hvis det bliver ved med at ske, så afbryd, og forbind hubenheden igen |
| **Forbindelsen til *enhed* blev afbrudt** / **Forbindelsen til fjernbetjeningen blev afbrudt. Venter på den…** | begge | Se [Hvis forbindelsen falder ud](#if-the-connection-drops) |
