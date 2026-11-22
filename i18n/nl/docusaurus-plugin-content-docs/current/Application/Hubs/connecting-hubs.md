---
id: ConnectingHubs
title: Een hub toevoegen en verbinden
description: "Voeg een hub toe aan een profielslot, verbind hem, geef hem een nieuwe naam en volg zijn sensoren in de hubmonitor."
---

import Screenshot from '@site/src/components/Screenshot';

# Een hub toevoegen en verbinden {#add-and-connect-a-hub}

Je voegt een hub één keer toe aan een profiel. Daarna maakt MOCPilot verbinding zodra je het profiel opent.

## Een hub toevoegen {#add-a-hub}

1. Open het profiel en tik op **Mijn hubs** (op een computer **Hubs** in de bovenbalk of ⇧⌘H / Ctrl+Shift+H). De pagina **Mijn Bluetooth-hubs** toont de slots.
2. Tik in een vrij slot op **Nieuwe hub toevoegen**.
3. Kies je hub in de lijst. Met het filter bovenaan kies je **Alles**, **LEGO**, **SBrick**, **BuWizz** of **Mould King**. Tik op **Toevoegen**.
4. Volg de stappen op het scherm: **Druk op de knop op de hub** en **Wacht tot de zoekopdracht de hub vindt**. Tik op **Scan starten** om opnieuw te zoeken.

<Screenshot name="add-hub" alt="Een hub kiezen om toe te voegen" width={900} />

Zodra de hub gevonden is, maakt hij verbinding en blijft hij in het slot.

<Screenshot name="my-hubs" alt="Mijn Bluetooth-hubs met verbonden hubs en vrije slots" width={900} />

## Het slotmenu {#the-slot-menu}

Met de knop **Verbinden** op een slot verbind je de hub. Het slotmenu bevat:

- **Verbreken**;
- **Hub hernoemen**: slaat een nieuwe naam op in de hub zelf (verbonden hubs die dit ondersteunen);
- **Firmware bijwerken**: als er nieuwere firmware beschikbaar is; zie [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating);
- **Hubfirmware herstellen**: als de hub in herstelmodus verbonden is; zie [Firmwareherstel](/docs/Application/Hubs/RecoveryHubFirmware);
- **Configuratie selecteren**: configuraties van de Technic Move; zie [Configuraties van de Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Selecteer kanaal: A / B / C**: het besturingskanaal van Mould King;
- **Verwijder hub**: verwijdert de hub uit het profiel.

De knop **Mijn hubs** in de editor (**Hubs** op een computer) laat zien hoeveel hubs er verbonden zijn.

## Hubmonitor {#hub-monitor}

Open een verbonden hub om de **Hubmonitor** te zien:

- de hub: model, naam, firmware, batterij, opladen, temperatuur van de printplaat, configuratie, oriëntatie, kanteling (pitch, roll, yaw) en versnellingsmeter;
- elke poort: het aangesloten apparaat en zijn snelheid, positie, relatieve positie, kleur, gereflecteerd en omgevingslicht, of afstand.

Zo controleer je welke motor op welke poort zit en welke kant hij op draait, voordat je het programma bouwt.

<Screenshot name="hub-monitor" alt="Hubmonitor van een verbonden Technic Hub" width={900} />

## Tips voor de verbinding {#connection-tips}

- Zet de hub pas vlak voor het verbinden aan: veel hubs schakelen zichzelf na een paar minuten zonder verbinding uit.
- Houd de telefoon dicht bij de hub; muren en metaal verkleinen het bereik.
- Een hub kan maar met één apparaat tegelijk verbonden zijn. Sluit andere apps die hem gebruiken (LEGO®-apps, andere afstandsbedieningen).
- **Bluetooth is uitgeschakeld**: zet Bluetooth aan en geef MOCPilot in de systeeminstellingen toestemming om het te gebruiken.
- **Hub niet gevonden**: druk nogmaals op de knop van de hub, start de scan opnieuw of vervang de batterijen.
- **Mould King**-hubs maken niet echt “verbinding”: MOCPilot stuurt ze opdrachten via Bluetooth-advertenties. Reageert de hub niet, tik dan op **Opnieuw verbinden** en controleer het kanaal.

Meer in [Probleemoplossing](/docs/Help/Troubleshooting#hubs).
