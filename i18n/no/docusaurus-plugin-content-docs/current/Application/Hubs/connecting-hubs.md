---
id: ConnectingHubs
title: Legg til og koble til en hub
description: "Legg til en hub på en plass i profilen, koble den til, gi den nytt navn og følg sensorene i hubmonitoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Legg til og koble til en hub {#add-and-connect-a-hub}

Du legger til en hub i en profil bare én gang. Deretter kobler MOCPilot seg til den hver gang du åpner profilen.

## Legg til en hub {#add-a-hub}

1. Åpne profilen og trykk på **Mine hubber** (på en datamaskin **Hubber** i topplinjen eller ⇧⌘H / Ctrl+Shift+H). Siden **Mine Bluetooth-hubber** viser plassene.
2. Trykk på **Legg til en ny hub** på en ledig plass.
3. Velg huben din fra listen. Filteret øverst viser **Alle**, **LEGO**, **SBrick**, **BuWizz** eller **Mould King**. Trykk på **Legg til**.
4. Følg trinnene på skjermen: **Trykk på knappen på huben** og **Vent til søket finner huben**. Trykk på **Start skanning** for å søke på nytt.

<Screenshot name="add-hub" alt="Velg en hub som skal legges til" width={900} />

Når huben er funnet, kobles den til og blir værende på plassen.

<Screenshot name="my-hubs" alt="Mine Bluetooth-hubber med tilkoblede hubber og ledige plasser" width={900} />

## Plassmenyen {#the-slot-menu}

Knappen **Koble til** på en plass kobler til huben. Plassmenyen inneholder:

- **Koble fra**;
- **Gi hubben nytt navn**: lagrer et nytt navn i selve huben (tilkoblede hubber som støtter det);
- **Oppdater fastvare**: når det finnes nyere fastvare; se [Fastvareoppdatering](/docs/Application/Hubs/FirmwareUpdating);
- **Gjenopprett hub-fastvare**: når huben er koblet til i gjenopprettingsmodus; se [Gjenoppretting av fastvare](/docs/Application/Hubs/RecoveryHubFirmware);
- **Velg konfigurasjon**: Technic Move-konfigurasjoner; se [Konfigurasjoner for Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Velg kanal: A / B / C**: styrekanalen for Mould King;
- **Slett hub**: fjerner huben fra profilen.

Knappen **Mine hubber** i redigeringsprogrammet (**Hubber** på en datamaskin) viser hvor mange hubber som er tilkoblet.

## Hubmonitor {#hub-monitor}

Åpne en tilkoblet hub for å se **hubmonitoren**:

- huben: modell, navn, fastvare, batteri, lading, korttemperatur, konfigurasjon, orientering, helning (stigning, rulling, yaw) og akselerometer;
- hver port: enheten som er koblet til, og dens hastighet, posisjon, relative posisjon, farge, reflektert lys og omgivelseslys eller avstand.

Bruk den til å sjekke hvilken motor som sitter på hvilken port, og hvilken vei den går, før du lager programmet.

<Screenshot name="hub-monitor" alt="Hubmonitor for en tilkoblet Technic Hub" width={900} />

## Tips for tilkobling {#connection-tips}

- Slå på huben rett før du kobler til: mange hubber slår seg av etter noen minutter uten tilkobling.
- Hold telefonen nær huben; vegger og metall reduserer rekkevidden.
- En hub kan bare være koblet til én enhet om gangen. Lukk andre apper som bruker den (LEGO®-apper, andre fjernkontroller).
- **Bluetooth er av**: slå på Bluetooth og gi MOCPilot tilgang til det i systeminnstillingene.
- **Huben ble ikke funnet**: trykk på knappen på huben igjen, start skanningen på nytt eller bytt batterier.
- **Mould King**-hubber «kobles» egentlig ikke til: MOCPilot sender dem kommandoer via Bluetooth-annonsering. Hvis huben ikke reagerer, trykker du på **Koble til igjen** og sjekker kanalen.

Mer i [Feilsøking](/docs/Help/Troubleshooting#hubs).
