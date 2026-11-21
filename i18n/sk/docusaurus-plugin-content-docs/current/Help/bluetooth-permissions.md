---
id: BluetoothPermissions
title: Bluetooth a povolenia
description: "O aké povolenia MOCPilot žiada na jednotlivých platformách, prečo, a ako vyriešiť zamietnuté povolenie alebo problém s Bluetooth."
---

# Bluetooth a povolenia {#bluetooth-and-permissions}

MOCPilot komunikuje s hubmi cez Bluetooth, preto vás systém požiada o povolenie. Niekoľko ďalších povolení sa vyžaduje, iba keď použijete funkciu, ktorá ich potrebuje.

## O čo MOCPilot žiada a prečo {#what-mocpilot-asks-for-and-why}

| Povolenie | Kedy sa vyžaduje | Prečo |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | pri prvom hľadaní hubu | na vyhľadanie a pripojenie hubov |
| **Zariadenia v okolí** (Android 12 a novší) | pri prvom hľadaní hubu | na vyhľadanie a pripojenie hubov |
| **Poloha**, presná (Android 10 a 11) | pri prvom hľadaní hubu | Android ju v týchto verziách vyžaduje na skenovanie Bluetooth. MOCPilot vašu polohu nezhromažďuje, neukladá ani nezdieľa |
| **Poloha** (Android, huby Mould King) | keď pripájate hub Mould King | aplikácia posiela príkazy hubom Mould King ako vysielanie Bluetooth a na to žiada o Polohu vo všetkých verziách Androidu |
| **Kamera** (telefón, tablet) | keď skenujete QR kód v **Pripojiť diaľkový ovládač** | na načítanie [kódu pripojenia](/docs/Application/Profiles/RemoteControl). Namiesto toho môžete zadať 6 číslic |
| **Mikrofón** (iPhone, iPad, Mac, Android) | keď prvýkrát diktujete požiadavku pre [AI staviteľa](/docs/Application/Profiles/AiBuilder) | hlasový vstup |
| **Rozpoznávanie reči** (iPhone, iPad, Mac) | spolu s mikrofónom | na prevod hlasu na text |

Vo Windows MOCPilot o povolenie Bluetooth nežiada; Bluetooth musí byť iba zapnutý. Na hlasový vstup vo Windows MOCPilot navrhuje hlasové zadávanie Windows (Win+H).

## Ak ste povolenie zamietli {#if-you-denied-a-permission}

Ak ste povolenie zamietli, systém sa zvyčajne už znova nespýta. MOCPilot potom zobrazí správu, napríklad **Skenovanie zlyhalo** s textom „Aplikácia potrebuje povolenie na skenovanie blízkych zariadení…“, „Na skenovanie kódu povoľte aplikácii MOCPilot používať kameru v systémových nastaveniach.“ alebo „Povoľte aplikácii MOCPilot prístup k mikrofónu v systémových nastaveniach“. Zapnite povolenie v systémových nastaveniach a vráťte sa do aplikácie:

**iPhone a iPad**
1. Otvorte **Nastavenia** a posuňte sa nadol na **MOCPilot**.
2. Zapnite **Bluetooth** (a podľa potreby **Kamera**, **Mikrofón** alebo **Rozpoznávanie reči**).

**Android** (názvy sa podľa výrobcu mierne líšia)
1. Otvorte **Nastavenia → Aplikácie → MOCPilot → Povolenia**.
2. Povoľte **Zariadenia v okolí**. V Androide 10 a 11 alebo pre huby Mould King povoľte aj **Poloha** a zapnite **Použiť presnú polohu**.
3. Podľa potreby povoľte **Kamera** alebo **Mikrofón**.

**Mac**
1. Otvorte **Systémové nastavenia → Súkromie a bezpečnosť**.
2. Vyberte **Bluetooth** (alebo **Mikrofón**, **Rozpoznávanie reči**) a zapnite **MOCPilot**.

**Windows**
1. Otvorte **Nastavenia → Bluetooth a zariadenia** a zapnite **Bluetooth**.

## „Bluetooth je vypnutý“ {#bluetooth-is-off}

MOCPilot zobrazí **Bluetooth je vypnutý**, keď je Bluetooth v zariadení vypnutý. Zapnite ho v ovládacom centre, v rýchlych nastaveniach alebo v systémových nastaveniach a potom správu potvrďte: aplikácia začne hľadať znova.

## Bluetooth adaptéry vo Windows {#bluetooth-adapters-on-windows}

- Potrebujete adaptér Bluetooth 4.0 (LE) alebo novší: zabudovaný v počítači alebo USB adaptér.
- **Mould King 6.0** potrebuje adaptér a ovládač, ktoré dokážu posielať vysielanie Bluetooth (advertising). Nie každý adaptér to dokáže.
- **Mould King 4.0** vo Windows nefunguje: aplikácia hlási „Huby Mould King so 4 portmi vyžadujú vysielanie Bluetooth s údajmi služby, ktoré Windows nepodporuje.“ Pre tieto huby použite telefón alebo tablet.

## Huby s klasickým Bluetooth {#classic-bluetooth-hubs}

Hub **Robot Inventor** používa klasický Bluetooth, nie Bluetooth Low Energy. Funguje na Androide, Macu a Windows, ale nie na iPhone a iPade. Ak ho MOCPilot vo Windows nenájde, najprv hub spárujte v **Nastavenia → Bluetooth a zariadenia → Pridať zariadenie** a potom ho v aplikácii vyhľadajte znova.

Všetky ostatné podporované huby používajú Bluetooth Low Energy a pridávajú sa iba v MOCPilot, nie v systémových nastaveniach Bluetooth.

## Stabilné pripojenie {#a-stable-connection}

- **Jedna aplikácia naraz.** Hub prijíma iba jedno pripojenie. Zatvorte aplikácie LEGO® a iné aplikácie na diaľkové ovládanie a odpojte hub od iných telefónov.
- **Dosah.** Držte zariadenie do niekoľkých metrov od modelu. Steny, kov, vaše telo a iné zariadenia 2,4 GHz (Wi-Fi smerovače, iné Bluetooth zariadenia) dosah skracujú.
- **Batérie.** Slabé batérie spôsobujú odpájanie, keď motory pracujú naplno.
- **Nechajte aplikáciu otvorenú.** Jazdite s MOCPilot na obrazovke a v [Nastaveniach](/docs/Application/Account/Settings) zapnite **Ponechať obrazovku zapnutú**, aby obrazovka počas otvoreného profilu nezhasla.

Ďalšie riešenia pre huby, ktoré sa nedajú nájsť alebo sa stále odpájajú: [Riešenie problémov](/docs/Help/Troubleshooting#hubs).
