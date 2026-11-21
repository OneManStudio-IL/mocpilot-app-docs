---
id: RecoveryHubFirmware
title: Gjenoppretting av hub-fastvare
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gjenoppretting av hub-fastvare {#hub-firmware-recovery}

Gjenoppretting av fastvare får liv i en hub som ikke kan starte normalt etter en avbrutt eller mislykket fastvareoppdatering.

MOCPilot laster opp fungerende fastvare til huben, slik at den kan kjøre og oppdateres igjen. Bruk gjenoppretting bare når huben ikke svarer normalt, når MOCPilot viser at huben er i gjenopprettingsmodus, eller etter en mislykket oppdatering.

:::warning Viktig
Hold huben påslått og enheten nær den under hele gjenopprettingen. Hvis du slår av Bluetooth, lukker MOCPilot, tar ut batteriene eller slår av huben under opplastingen, kan gjenopprettingen mislykkes.
:::

## Når gjenoppretting er nødvendig {#when-recovery-is-required}

Du kan trenge gjenoppretting hvis:

- En fastvareoppdatering ikke ble fullført.
- Huben ikke lenger kobler til som en vanlig hub.
- Huben vises som **LEGO Bootloader** i MOCPilot.
- MOCPilot oppdager at huben er koblet til i gjenopprettingsmodus for fastvare.

Før du begynner, må du sørge for at huben har nok batteri, at telefonen, nettbrettet eller datamaskinen er ladet, og at Bluetooth er slått på.

## Støttede hubber {#supported-hubs}

Gjenoppretting fungerer for de samme hubbene som fastvareoppdatering:

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

## Sett en Technic Hub, Boost Hub eller City Hub i gjenopprettingsmodus {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Disse hubbene kobler til via bootloaderen sin:

1. Slå av huben.
2. Trykk og hold inne den grønne knappen.
3. Hold knappen inne til LED-en på huben begynner å blinke lilla.
4. Ikke slipp knappen mens LED-en blinker lilla.
5. Mens du fortsatt holder knappen inne, åpner du **Mine Bluetooth-hubber** i MOCPilot og kobler til huben.
6. Når huben er koblet til i bootloader-modus, kan du slippe knappen.

Når huben er i gjenopprettingsmodus, kan den vises som **LEGO Bootloader** i stedet for det vanlige navnet.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="LEGO Bootloader-hub i hublisten med handlingen for gjenoppretting av fastvare" />

## Sett en Technic Move Hub i gjenopprettingsmodus {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub gjenopprettes på en annen måte: den kobler ikke til som **LEGO Bootloader**. I stedet laster knappesekvensen nedenfor inn fabrikkfastvaren **1.2.3**, som ikke er ment for daglig bruk.

Slik gjenoppretter du fastvaren:

1. Slå av huben.
2. Trykk og hold inne den grønne knappen.
3. Hold den grønne knappen inne i omtrent ett minutt.
4. Slipp knappen.
5. Vent til LED-en på huben begynner å blinke hvitt.
6. Åpne **Mine Bluetooth-hubber** i MOCPilot og koble til huben.

Når huben kobler til, oppdager MOCPilot fabrikkfastvaren og tilbyr å oppdatere den til nyeste versjon. Start oppdateringen og vent til den er ferdig.

## Start gjenoppretting fra dialogen {#start-recovery-from-the-dialog}

Når MOCPilot oppdager en hub som er koblet til i gjenopprettingsmodus, vises en dialog for gjenoppretting.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialog om at huben er i gjenopprettingsmodus" />

Velg **Gjenopprett** for å begynne å laste opp fastvare til huben.

Hvis du ikke er klar, velger du **Avbryt**. Du kan starte gjenopprettingen senere fra hubmenyen.

## Start gjenoppretting fra hubmenyen {#start-recovery-from-the-hub-menu}

Slik starter du gjenopprettingen selv:

1. Åpne **Mine Bluetooth-hubber**.
2. Finn huben som vises som **LEGO Bootloader**.
3. Åpne hubmenyen.
4. Velg **Gjenopprett hub-fastvare**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Handlingen Gjenopprett hub-fastvare i hubens hurtigmeny" />

## Under gjenopprettingen {#during-firmware-recovery}

MOCPilot laster opp fastvaren til huben og viser fremdriften.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Skjermbilde med fremdriften for gjenoppretting av fastvare" />

Vent til den er ferdig. Ikke flytt huben bort fra enheten, lukk appen, slå av Bluetooth eller bryt strømmen til huben.

Huben kan starte på nytt eller koble til igjen flere ganger. Dette er normalt: la MOCPilot være åpen og vent.

## Fullfør gjenopprettingen {#finish-recovery}

Når gjenopprettingen er ferdig, viser MOCPilot en bekreftelse.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialog om at gjenopprettingen av fastvaren er fullført" />

Velg **OK**. Huben skal starte på nytt og koble til som en vanlig hub i stedet for **LEGO Bootloader**.

Sjekk deretter huben i **Mine Bluetooth-hubber**. Hvis MOCPilot fortsatt ber om en fastvareoppdatering, kjører du en vanlig [fastvareoppdatering](/docs/Application/Hubs/FirmwareUpdating/).

## Hvis gjenopprettingen mislykkes {#if-recovery-fails}

Hvis gjenopprettingen mislykkes:

1. Hold huben nær enheten din.
2. Slå huben av og på.
3. Sett huben i gjenopprettingsmodus igjen.
4. Koble til **LEGO Bootloader** i MOCPilot.
5. Start **Gjenopprett hub-fastvare** på nytt.

Hvis feilen kommer igjen, gjentar du hele prosedyren. Hvis flere forsøk mislykkes, bytter eller lader du batteriene og prøver igjen.
