---
id: ConnectingHubs
title: Pridanie a pripojenie hubu
description: "Pridajte hub do slotu profilu, pripojte ho, premenujte ho a sledujte jeho senzory v monitore hubu."
---

import Screenshot from '@site/src/components/Screenshot';

# Pridanie a pripojenie hubu {#add-and-connect-a-hub}

Hub do profilu pridáte len raz. Potom sa k nemu MOCPilot pripojí pri každom otvorení profilu.

## Pridanie hubu {#add-a-hub}

1. Otvorte profil a ťuknite na **Moje huby** (na počítači **Huby** na hornej lište alebo ⇧⌘H / Ctrl+Shift+H). Stránka **Moje Bluetooth huby** zobrazí sloty.
2. Vo voľnom slote ťuknite na **Pridať nový hub**.
3. Vyberte svoj hub zo zoznamu. Filter hore ponúka **Všetky**, **LEGO**, **SBrick**, **BuWizz** alebo **Mould King**. Ťuknite na **Pridať**.
4. Postupujte podľa pokynov na obrazovke: **Stlačte tlačidlo na hube** a **Počkajte, kým vyhľadávanie nájde hub**. Ak chcete hľadať znova, ťuknite na **Spustiť skenovanie**.

<Screenshot name="add-hub" alt="Výber hubu na pridanie" width={900} />

Keď sa hub nájde, pripojí sa a zostane v slote.

<Screenshot name="my-hubs" alt="Moje Bluetooth huby s pripojenými hubmi a voľnými slotmi" width={900} />

## Ponuka slotu {#the-slot-menu}

Tlačidlo **Pripojiť** na slote pripojí hub. Ponuka slotu obsahuje:

- **Odpojiť**;
- **Premenovať hub**: uloží nový názov priamo do hubu (pri pripojených huboch, ktoré to podporujú);
- **Aktualizovať firmvér**: keď je k dispozícii novší firmvér; pozrite si [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating);
- **Obnoviť firmvér hubu**: keď je hub pripojený v režime obnovy; pozrite si [Obnovenie firmvéru](/docs/Application/Hubs/RecoveryHubFirmware);
- **Vybrať konfiguráciu**: konfigurácie Technic Move; pozrite si [Konfigurácie Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Vyberte kanál: A / B / C**: ovládací kanál Mould King;
- **Odstrániť hub**: odstráni hub z profilu.

Tlačidlo **Moje huby** v editore (na počítači **Huby**) ukazuje, koľko hubov je pripojených.

## Monitor hubu {#hub-monitor}

Otvorte pripojený hub a zobrazí sa jeho **monitor hubu**:

- hub: model, názov, firmvér, batéria, napätie batérie, nabíjanie, teplota dosky, konfigurácia, orientácia, náklon (pitch, roll, yaw) a akcelerometer;
- každý port: pripojené zariadenie a jeho rýchlosť, poloha, relatívna poloha, farba, odrazené a okolité svetlo alebo vzdialenosť.

Pomocou neho si pred zostavením programu overíte, ktorý motor je na ktorom porte a ktorým smerom sa točí. Hodnoty sa ďalej aktualizujú, aj keď je okno MOCPilot na pozadí.

<Screenshot name="hub-monitor" alt="Monitor hubu pripojeného Technic Hubu" width={900} />

## Tipy na pripojenie {#connection-tips}

- Hub zapnite tesne pred pripojením: mnohé huby sa po niekoľkých minútach bez pripojenia samy vypnú.
- Držte telefón blízko hubu; steny a kov znižujú dosah.
- Hub môže byť naraz pripojený iba k jednému zariadeniu. Zatvorte ostatné aplikácie, ktoré ho používajú (aplikácie LEGO®, iné ovládače).
- **Bluetooth je vypnutý**: zapnite Bluetooth a v systémových nastaveniach povoľte MOCPilotu jeho používanie.
- **Hub sa nenašiel**: znova stlačte tlačidlo na hube, spustite skenovanie odznova alebo vymeňte batérie.
- Huby **Mould King** sa v skutočnosti „nepripájajú“: MOCPilot im posiela príkazy cez bluetoothový advertising. Ak hub nereaguje, ťuknite na **Pripojiť znova** a skontrolujte kanál.

Viac v časti [Riešenie problémov](/docs/Help/Troubleshooting#hubs).
