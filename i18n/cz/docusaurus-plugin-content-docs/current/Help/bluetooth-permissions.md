---
id: BluetoothPermissions
title: Bluetooth a oprávnění
description: "Která oprávnění MOCPilot na jednotlivých platformách požaduje, proč, a jak vyřešit zamítnuté oprávnění nebo problém s Bluetooth."
---

# Bluetooth a oprávnění {#bluetooth-and-permissions}

MOCPilot komunikuje s huby přes Bluetooth, proto vás systém požádá o povolení. Několik dalších oprávnění se požaduje, jen když použijete funkci, která je potřebuje.

## Co MOCPilot požaduje a proč {#what-mocpilot-asks-for-and-why}

| Oprávnění | Kdy se požaduje | Proč |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | při prvním hledání hubu | k vyhledání a připojení hubů |
| **Zařízení v okolí** (Android 12 a novější) | při prvním hledání hubu | k vyhledání a připojení hubů |
| **Poloha**, přesná (Android 10 a 11) | při prvním hledání hubu | Android ji v těchto verzích vyžaduje pro skenování Bluetooth. MOCPilot vaši polohu neshromažďuje, neukládá ani nesdílí |
| **Poloha** (Android, huby Mould King) | když připojujete hub Mould King | aplikace posílá hubům Mould King příkazy jako bluetoothové vysílání a k tomu požaduje Polohu ve všech verzích Androidu |
| **Fotoaparát** (telefon, tablet) | když skenujete QR kód v **Připojit dálkový ovladač** | ke čtení [kódu pro připojení](/docs/Application/Profiles/RemoteControl). Místo toho můžete napsat 6 číslic |
| **Mikrofon** (iPhone, iPad, Mac, Android) | při prvním diktování požadavku [AI tvůrci](/docs/Application/Profiles/AiBuilder) | hlasové zadávání |
| **Rozpoznávání řeči** (iPhone, iPad, Mac) | spolu s mikrofonem | k převodu hlasu na text |

Ve Windows MOCPilot oprávnění k Bluetooth nepožaduje; Bluetooth jen musí být zapnuté. Pro hlasové zadávání ve Windows MOCPilot navrhuje hlasové zadávání Windows (Win+H).

## Pokud jste oprávnění zamítli {#if-you-denied-a-permission}

Pokud jste oprávnění zamítli, systém se obvykle znovu nezeptá. MOCPilot pak zobrazí zprávu, například **Skenování se nezdařilo** s textem „Aplikace potřebuje oprávnění ke skenování blízkých zařízení…“, „Povolte MOCPilot v systémovém nastavení používat fotoaparát, aby mohl kód naskenovat.“ nebo „Povolte MOCPilot přístup k mikrofonu v systémovém nastavení“. Zapněte oprávnění v systémovém nastavení a vraťte se do aplikace:

**iPhone a iPad**
1. Otevřete **Nastavení** a sjeďte dolů na **MOCPilot**.
2. Zapněte **Bluetooth** (a podle potřeby **Fotoaparát**, **Mikrofon** nebo **Rozpoznávání řeči**).

**Android** (názvy se podle výrobce mírně liší)
1. Otevřete **Nastavení → Aplikace → MOCPilot → Oprávnění**.
2. Povolte **Zařízení v okolí**. V Androidu 10 a 11 nebo pro huby Mould King povolte také **Poloha** a zapněte **Použít přesnou polohu**.
3. Podle potřeby povolte **Fotoaparát** nebo **Mikrofon**.

**Mac**
1. Otevřete **Nastavení systému → Soukromí a zabezpečení**.
2. Zvolte **Bluetooth** (nebo **Mikrofon**, **Rozpoznávání řeči**) a zapněte **MOCPilot**.

**Windows**
1. Otevřete **Nastavení → Bluetooth a zařízení** a zapněte **Bluetooth**.

## „Bluetooth je vypnutý“ {#bluetooth-is-off}

MOCPilot zobrazí **Bluetooth je vypnutý**, když je Bluetooth zařízení vypnuté. Zapněte ho v ovládacím centru, rychlém nastavení nebo systémovém nastavení a pak zprávu potvrďte: aplikace začne znovu hledat.

## Adaptéry Bluetooth ve Windows {#bluetooth-adapters-on-windows}

- Potřebujete adaptér Bluetooth 4.0 (LE) nebo novější: vestavěný v počítači nebo USB adaptér.
- **Mould King 6.0** potřebuje adaptér a ovladač, které umějí posílat bluetoothové vysílání (advertising). Ne každý adaptér to umí.
- **Mould King 4.0** ve Windows nefunguje: aplikace hlásí „Huby Mould King se 4 porty vyžadují vysílání Bluetooth s daty služby, které Windows nepodporuje.“ Pro tyto huby použijte telefon nebo tablet.

## Huby s klasickým Bluetooth {#classic-bluetooth-hubs}

Hub **Robot Inventor** používá klasické Bluetooth, ne Bluetooth Low Energy. Funguje na Androidu, Macu a Windows, ale ne na iPhonu a iPadu. Pokud ho MOCPilot ve Windows nenajde, spárujte hub nejprve v **Nastavení → Bluetooth a zařízení → Přidat zařízení** a pak ho v aplikaci vyhledejte znovu. Ve Windows a na Macu ho můžete připojit i kabelem USB; viz [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub#connect).

Všechny ostatní podporované huby používají Bluetooth Low Energy a přidávají se jen v MOCPilotu, ne v systémovém nastavení Bluetooth.

## Stabilní spojení {#a-stable-connection}

- **Vždy jen jedna aplikace.** Hub přijímá jen jedno spojení. Zavřete aplikace LEGO® a jiné aplikace pro dálkové ovládání a odpojte hub od jiných telefonů.
- **Dosah.** Mějte zařízení do několika metrů od modelu. Zdi, kov, vaše tělo a další zařízení na 2,4 GHz (routery Wi-Fi, jiná zařízení Bluetooth) dosah zkracují.
- **Baterie.** Slabé baterie způsobují odpojování, když motory pracují naplno.
- **Nechte aplikaci otevřenou.** Řiďte s MOCPilotem na obrazovce a zapněte v [Nastavení](/docs/Application/Account/Settings) volbu **Ponechat obrazovku zapnutou**, aby obrazovka nezhasla, dokud je otevřený profil.

Další řešení pro huby, které nelze najít nebo se stále odpojují: [Řešení problémů](/docs/Help/Troubleshooting#hubs).
