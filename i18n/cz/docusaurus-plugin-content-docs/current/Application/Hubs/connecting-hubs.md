---
id: ConnectingHubs
title: Přidání a připojení hubu
description: "Přidejte hub do slotu profilu, připojte ho, přejmenujte a sledujte jeho senzory v monitoru hubu."
---

import Screenshot from '@site/src/components/Screenshot';

# Přidání a připojení hubu {#add-and-connect-a-hub}

Hub do profilu přidáte jen jednou. Potom se k němu MOCPilot připojí pokaždé, když profil otevřete.

## Přidání hubu {#add-a-hub}

1. Otevřete profil a klepněte na **Moje huby** (na počítači **Huby** na horní liště nebo ⇧⌘H / Ctrl+Shift+H). Stránka **Moje Bluetooth huby** zobrazí sloty.
2. Ve volném slotu klepněte na **Přidat nový hub**.
3. Vyberte svůj hub ze seznamu. Filtr nahoře nabízí **Vše**, **LEGO**, **SBrick**, **BuWizz** nebo **Mould King**. Klepněte na **Přidat**.
4. Postupujte podle pokynů na obrazovce: **Stiskněte tlačítko na rozbočovači** a **Počkejte, než vyhledávání najde rozbočovač**. Chcete-li hledat znovu, klepněte na **Spustit skenování**.

<Screenshot name="add-hub" alt="Výběr hubu k přidání" width={900} />

Jakmile je hub nalezen, připojí se a zůstane ve slotu.

<Screenshot name="my-hubs" alt="Moje Bluetooth huby s připojenými huby a volnými sloty" width={900} />

## Nabídka slotu {#the-slot-menu}

Tlačítko **Připojit** ve slotu hub připojí. Nabídka slotu obsahuje:

- **Odpojit**;
- **Přejmenovat hub**: uloží nový název přímo do hubu (u připojených hubů, které to podporují);
- **Aktualizovat firmware**: když je k dispozici novější firmware; viz [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating);
- **Obnovit firmware hubu**: když je hub připojen v režimu obnovy; viz [Obnova firmwaru](/docs/Application/Hubs/RecoveryHubFirmware);
- **Vybrat konfiguraci**: konfigurace Technic Move; viz [Konfigurace Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Vyberte kanál: A / B / C**: řídicí kanál Mould King;
- **Smazat hub**: odebere hub z profilu.

Tlačítko **Moje huby** v editoru (na počítači **Huby**) ukazuje, kolik hubů je připojeno.

## Monitor hubu {#hub-monitor}

Otevřete připojený hub a uvidíte jeho **Monitor hubu**:

- hub: model, název, firmware, baterie, nabíjení, teplota desky, konfigurace, orientace, náklon (klopení, klonění, stáčení) a akcelerometr;
- každý port: připojené zařízení a jeho rychlost, poloha, relativní poloha, barva, odražené a okolní světlo nebo vzdálenost.

Před sestavením programu si tak ověříte, který motor je na kterém portu a kterým směrem se točí.

<Screenshot name="hub-monitor" alt="Monitor hubu připojeného Technic Hubu" width={900} />

## Tipy pro připojení {#connection-tips}

- Hub zapněte těsně před připojením: mnoho hubů se po několika minutách bez připojení samo vypne.
- Držte telefon blízko hubu; zdi a kov dosah snižují.
- Hub může být najednou připojen jen k jednomu zařízení. Zavřete ostatní aplikace, které ho používají (aplikace LEGO®, jiné ovladače).
- **Bluetooth je vypnutý**: zapněte Bluetooth a v nastavení systému povolte MOCPilotu jeho používání.
- **Hub nebyl nalezen**: znovu stiskněte tlačítko hubu, spusťte skenování znovu nebo vyměňte baterie.
- Huby **Mould King** se ve skutečnosti „nepřipojují“: MOCPilot jim posílá příkazy přes Bluetooth advertising. Pokud hub nereaguje, klepněte na **Připojit znovu** a zkontrolujte kanál.

Více v části [Řešení problémů](/docs/Help/Troubleshooting#hubs).
