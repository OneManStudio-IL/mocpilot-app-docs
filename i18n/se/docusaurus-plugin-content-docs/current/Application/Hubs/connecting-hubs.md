---
id: ConnectingHubs
title: Lägga till och ansluta en hubb
description: "Lägg till en hubb på en plats i profilen, anslut den, byt namn på den och följ dess sensorer i hubbmonitorn."
---

import Screenshot from '@site/src/components/Screenshot';

# Lägga till och ansluta en hubb {#add-and-connect-a-hub}

Du lägger till en hubb i en profil en gång. Därefter ansluter MOCPilot till den varje gång du öppnar profilen.

## Lägg till en hubb {#add-a-hub}

1. Öppna profilen och tryck på **Mina hubbar** (⇧⌘H / Ctrl+Shift+H). Sidan **Mina Bluetooth-hubbar** visar platserna.
2. Tryck på **Lägg till en ny hubb** på en ledig plats.
3. Välj din hubb i listan. Filtret högst upp visar **Alla**, **LEGO**, **SBrick**, **BuWizz** eller **Mould King**. Tryck på **Lägg till**.
4. Följ stegen på skärmen: **Tryck på knappen på hubben** och **Vänta tills sökningen hittar hubben**. Tryck på **Starta skanning** för att söka igen.

<Screenshot name="add-hub" alt="Välja en hubb att lägga till" width={900} />

När hubben har hittats ansluts den och stannar kvar på platsen.

<Screenshot name="my-hubs" alt="Mina Bluetooth-hubbar med anslutna hubbar och lediga platser" width={900} />

## Platsens meny {#the-slot-menu}

Knappen **Anslut** på en plats ansluter hubben. Platsens meny innehåller:

- **Koppla från**;
- **Byt namn på hubb**: sparar ett nytt namn i själva hubben (anslutna hubbar som stöder det);
- **Uppdatera fast programvara**: när nyare firmware finns; se [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating);
- **Återställ hubbens fasta programvara**: när hubben är ansluten i återställningsläge; se [Återställa firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Välj konfiguration**: konfigurationer för Technic Move; se [Konfigurationer för Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Välj kanal: A / B / C**: styrkanalen för Mould King;
- **Ta bort hub**: tar bort hubben från profilen.

Knappen **Mina hubbar** i redigeraren visar hur många hubbar som är anslutna.

## Hubbmonitor {#hub-monitor}

Öppna en ansluten hubb för att se dess **hubbmonitor**:

- hubben: modell, namn, firmware, batteri, laddning, korttemperatur, konfiguration, orientering, lutning (pitch, roll, yaw) och accelerometer;
- varje port: den anslutna enheten och dess hastighet, position, relativa position, färg, reflekterat ljus och omgivningsljus eller avstånd.

Använd den för att kontrollera vilken motor som sitter på vilken port och åt vilket håll den snurrar innan du bygger programmet.

<Screenshot name="hub-monitor" alt="Hubbmonitor för en ansluten Technic Hub" width={900} />

## Tips för anslutningen {#connection-tips}

- Slå på hubben precis innan du ansluter: många hubbar stänger av sig själva efter några minuter utan anslutning.
- Håll telefonen nära hubben; väggar och metall minskar räckvidden.
- En hubb kan bara vara ansluten till en enhet åt gången. Stäng andra appar som använder den (LEGO®-appar, andra fjärrkontroller).
- **Bluetooth är avstängt**: slå på Bluetooth och tillåt MOCPilot att använda det i systeminställningarna.
- **Hubben hittades inte**: tryck på hubbens knapp igen, starta om skanningen eller byt batterier.
- **Mould King**-hubbar ”ansluts” egentligen inte: MOCPilot skickar kommandon till dem via Bluetooth-annonsering (advertising). Om hubben inte reagerar trycker du på **Anslut igen** och kontrollerar kanalen.

Mer i [Felsökning](/docs/Help/Troubleshooting#hubs).
