---
id: RecoveryHubFirmware
title: Hubfirmware herstellen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubfirmware herstellen {#hub-firmware-recovery}

Met firmwareherstel breng je een hub terug die na een onderbroken of mislukte firmware-update niet meer normaal opstart.

MOCPilot uploadt werkende firmware naar de hub, zodat hij weer werkt en opnieuw bijgewerkt kan worden. Gebruik herstel alleen als de hub niet normaal reageert, als MOCPilot aangeeft dat de hub in herstelmodus staat, of na een mislukte update.

:::warning Belangrijk
Laat de hub tijdens het hele herstel aan staan en houd je apparaat dichtbij. Als je Bluetooth uitzet, MOCPilot sluit, de batterijen verwijdert of de hub uitschakelt tijdens het uploaden, kan het herstel mislukken.
:::

## Wanneer herstel nodig is {#when-recovery-is-required}

Herstel kan nodig zijn als:

- Een firmware-update niet goed is afgerond.
- De hub niet meer als gewone hub verbinding maakt.
- De hub in MOCPilot verschijnt als **LEGO Bootloader**.
- MOCPilot detecteert dat de hub in firmwareherstelmodus verbonden is.

Zorg voordat je begint dat de hub voldoende batterij heeft, je telefoon, tablet of computer opgeladen is en Bluetooth aan staat.

## Ondersteunde hubs {#supported-hubs}

Herstel werkt voor dezelfde hubs als het bijwerken van de firmware:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Een Technic Hub, Boost Hub of City Hub in herstelmodus zetten {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Deze hubs maken verbinding via hun bootloader:

1. Zet de hub uit.
2. Houd de groene knop ingedrukt.
3. Blijf de knop indrukken tot de led van de hub paars begint te knipperen.
4. Laat de knop niet los terwijl de led paars knippert.
5. Open, terwijl je de knop nog vasthoudt, **Mijn Bluetooth-hubs** in MOCPilot en maak verbinding met de hub.
6. Zodra de hub in bootloadermodus verbonden is, kun je de knop loslaten.

In herstelmodus kan de hub verschijnen als **LEGO Bootloader** in plaats van met zijn gewone naam.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="LEGO Bootloader-hub in de hublijst met de actie voor firmwareherstel" />

## Een Technic Move Hub in herstelmodus zetten {#put-a-technic-move-hub-into-recovery-mode}

De Technic Move Hub wordt anders hersteld: hij maakt geen verbinding als **LEGO Bootloader**. In plaats daarvan laadt de knoppenreeks hieronder de fabrieksfirmware **1.2.3**, die niet bedoeld is voor dagelijks gebruik.

Zo herstel je de firmware:

1. Zet de hub uit.
2. Houd de groene knop ingedrukt.
3. Blijf de groene knop ongeveer een minuut indrukken.
4. Laat de knop los.
5. Wacht tot de led van de hub wit begint te knipperen.
6. Open **Mijn Bluetooth-hubs** in MOCPilot en maak verbinding met de hub.

Als de hub verbinding maakt, detecteert MOCPilot de fabrieksfirmware en biedt aan om die bij te werken naar de nieuwste versie. Start de update en wacht tot hij klaar is.

## Herstel starten vanuit het venster {#start-recovery-from-the-dialog}

Als MOCPilot een hub detecteert die in herstelmodus verbonden is, verschijnt er een herstelvenster.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Venster Herstelmodus van de hub gedetecteerd" />

Kies **Herstellen** om de firmware naar de hub te uploaden.

Ben je er nog niet klaar voor, kies dan **Annuleren**. Je kunt het herstel later starten vanuit het hubmenu.

## Herstel starten vanuit het hubmenu {#start-recovery-from-the-hub-menu}

Zo start je het herstel zelf:

1. Open **Mijn Bluetooth-hubs**.
2. Zoek de hub die als **LEGO Bootloader** wordt weergegeven.
3. Open het hubmenu.
4. Kies **Hubfirmware herstellen**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Actie Hubfirmware herstellen in het contextmenu van de hub" />

## Tijdens het firmwareherstel {#during-firmware-recovery}

MOCPilot uploadt de firmware naar de hub en toont de voortgang.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Voortgangsscherm van het firmwareherstel" />

Wacht tot het klaar is. Haal de hub niet weg bij je apparaat, sluit de app niet, zet Bluetooth niet uit en onderbreek de stroom van de hub niet.

De hub kan een paar keer opnieuw opstarten of opnieuw verbinding maken. Dat is normaal: laat MOCPilot open en wacht.

## Herstel afronden {#finish-recovery}

Als het herstel klaar is, toont MOCPilot een bevestiging.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Venster Firmwareherstel voltooid" />

Kies **OK**. De hub hoort opnieuw op te starten en weer als gewone hub verbinding te maken in plaats van als **LEGO Bootloader**.

Controleer de hub daarna in **Mijn Bluetooth-hubs**. Vraagt MOCPilot nog steeds om een firmware-update, voer dan een normale [firmware-update](/docs/Application/Hubs/FirmwareUpdating/) uit.

## Als het herstel mislukt {#if-recovery-fails}

Als het herstel mislukt:

1. Houd de hub dicht bij je apparaat.
2. Zet de hub uit en weer aan.
3. Zet de hub opnieuw in herstelmodus.
4. Maak in MOCPilot verbinding met **LEGO Bootloader**.
5. Start **Hubfirmware herstellen** opnieuw.

Verschijnt de fout opnieuw, herhaal dan de hele procedure. Mislukken meerdere pogingen, vervang of laad dan de batterijen op en probeer het nog eens.
