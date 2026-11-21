---
id: ConnectingHubs
title: Tilføj og forbind en hub
description: "Tilføj en hub til et slot i profilen, forbind den, omdøb den, og følg dens sensorer i hubmonitoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Tilføj og forbind en hub {#add-and-connect-a-hub}

Du tilføjer en hub til en profil én gang. Derefter forbinder MOCPilot til den, hver gang du åbner profilen.

## Tilføj en hub {#add-a-hub}

1. Åbn profilen, og tryk på **Mine hubs** (⇧⌘H / Ctrl+Shift+H). Siden **Mine Bluetooth-hubs** viser dine slots.
2. Tryk på **Tilføj en ny hub** i et ledigt slot.
3. Vælg din hub på listen. Filteret øverst viser **Alle**, **LEGO**, **SBrick**, **BuWizz** eller **Mould King**. Tryk på **Tilføj**.
4. Følg trinnene på skærmen: **Tryk på knappen på hubben** og **Vent på, at søgningen finder hubben**. Tryk på **Start scanning** for at søge igen.

<Screenshot name="add-hub" alt="Valg af en hub, der skal tilføjes" width={900} />

Når hubben er fundet, forbindes den og bliver i sit slot.

<Screenshot name="my-hubs" alt="Mine Bluetooth-hubs med forbundne hubs og ledige slots" width={900} />

## Slot-menuen {#the-slot-menu}

Knappen **Forbind** på et slot forbinder hubben. Slot-menuen indeholder:

- **Afbryd**;
- **Omdøb hub**: gemmer et nyt navn i selve hubben (forbundne hubs, der understøtter det);
- **Opdater firmware**: når der findes nyere firmware; se [Firmwareopdatering](/docs/Application/Hubs/FirmwareUpdating);
- **Gendan hub-firmware**: når hubben er forbundet i gendannelsestilstand; se [Gendannelse af firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Vælg konfiguration**: konfigurationer til Technic Move; se [Technic Move Hub-konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Vælg kanal: A / B / C**: Mould Kings styrekanal;
- **Slet hub**: fjerner hubben fra profilen.

Knappen **Mine hubs** i editoren viser, hvor mange hubs der er forbundet.

## Hubmonitor {#hub-monitor}

Åbn en forbundet hub for at se dens **hubmonitor**:

- hubben: model, navn, firmware, batteri, opladning, printkorttemperatur, konfiguration, orientering, hældning (pitch, roll, gir) og accelerometer;
- hver port: den tilsluttede enhed og dens hastighed, position, relative position, farve, reflekterede lys og omgivende lys eller afstand.

Brug den til at tjekke, hvilken motor der sidder på hvilken port, og hvilken vej den drejer, før du bygger programmet.

<Screenshot name="hub-monitor" alt="Hubmonitor for en forbundet Technic Hub" width={900} />

## Tips til forbindelsen {#connection-tips}

- Tænd hubben lige før du forbinder: Mange hubs slukker selv efter et par minutter uden forbindelse.
- Hold telefonen tæt på hubben; vægge og metal mindsker rækkevidden.
- En hub kan kun være forbundet til én enhed ad gangen. Luk andre apps, der bruger den (LEGO®-apps, andre fjernbetjeninger).
- **Bluetooth er slukket**: Slå Bluetooth til, og giv MOCPilot adgang til det i systemindstillingerne.
- **Hubben blev ikke fundet**: Tryk på hubbens knap igen, start scanningen igen, eller skift batterierne.
- **Mould King**-hubs »forbindes« ikke rigtigt: MOCPilot sender dem kommandoer via Bluetooth-advertising. Reagerer hubben ikke, så tryk på **Tilslut igen**, og tjek kanalen.

Mere under [Fejlfinding](/docs/Help/Troubleshooting#hubs).
