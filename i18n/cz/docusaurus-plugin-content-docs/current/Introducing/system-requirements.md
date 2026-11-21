---
id: SystemRequirements
title: Systémové požadavky
description: "Podporované operační systémy, Bluetooth, paměť a prohlížeče pro MOCPilot."
---

# Systémové požadavky {#system-requirements}

MOCPilot běží na telefonech, tabletech i počítačích. K řízení modelu potřebuje zařízení také Bluetooth a [podporovaný hub](/docs/Introducing/SupportedDevices).

## Operační systémy {#operating-systems}

| Platforma | Minimální verze | Kde ji získat |
|---|---|---|
| iPhone a iPad | iOS / iPadOS 17 | App Store |
| Telefony a tablety Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Počítač s Windows (64bitový, x64) | Windows 10 verze 1809 nebo Windows 11 | Microsoft Store |

Odkazy do obchodů najdete na [mocpilot.com](https://mocpilot.com). Aplikace si rozložení pro telefon, tablet nebo počítač vybere sama; viz [Telefon, tablet a počítač](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Huby se připojují přes **Bluetooth Low Energy** (Bluetooth 4.0 nebo novější). Má ho téměř každý telefon a tablet; na počítači použijte vestavěný adaptér nebo USB adaptér Bluetooth.
- Hub **Robot Inventor** používá klasické Bluetooth. Funguje na Androidu, Macu a Windows, ale ne na iPhonu a iPadu.
- Huby **Mould King** přijímají příkazy jako bluetoothové vysílání (advertising). Ve Windows potřebuje Mould King 6.0 adaptér a ovladač, které vysílání podporují, a Mould King 4.0 nefunguje vůbec; použijte pro něj telefon nebo tablet.
- Aplikace požádá o oprávnění k Bluetooth (na Androidu také Zařízení v okolí nebo Poloha). Viz [Bluetooth a oprávnění](/docs/Help/BluetoothPermissions).

## Paměť {#memory}

Na zařízeních s méně než 4 GB paměti vykresluje MOCPilot Logické bloky jednodušeji, aby i velké programy zůstaly plynulé. Děje se to automaticky; bloky fungují stejně.

## Webový editor {#web-editor}

[Webový editor](/docs/Introducing/WebEditor) na mocpilot.com běží v prohlížeči:

- použijte aktuální prohlížeč pro počítač; editor potřebuje WebAssembly;
- při prvním otevření se stáhne asi 20 MB editoru a asi 15 MB motivů, takže se hodí rychlé připojení;
- prohlížeče se nemohou připojit k bluetoothovým hubům: chcete-li řídit model z prohlížeče, použijte [dálkové ovládání](/docs/Application/Profiles/RemoteControl), které vyžaduje prohlížeč s podporou WebRTC;
- pokud uvidíte „The editor could not start in this browser.“, aktualizujte prohlížeč nebo zkuste jiný.

## Internet {#internet}

Huby, vaše profily a stažené motivy fungují offline. Přihlášení, synchronizace, katalog, AI tvůrce, dálkové ovládání a nákupy vyžadují připojení k internetu. Viz [Práce offline](/docs/Application/Account/Sync#working-offline).
