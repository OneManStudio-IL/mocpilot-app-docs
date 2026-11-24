---
id: SystemRequirements
title: Wymagania systemowe
description: "Obsługiwane systemy operacyjne, Bluetooth, pamięć i przeglądarki dla MOCPilot."
---

# Wymagania systemowe {#system-requirements}

MOCPilot działa na telefonach, tabletach i komputerach. Aby sterować modelem, urządzenie potrzebuje też Bluetooth i [obsługiwanego huba](/docs/Introducing/SupportedDevices).

## Systemy operacyjne {#operating-systems}

| Platforma | Minimalna wersja | Gdzie pobrać |
|---|---|---|
| iPhone i iPad | iOS / iPadOS 17 | App Store |
| Telefony i tablety z Androidem | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Komputer z Windows (64-bit, x64) | Windows 10 w wersji 1809 lub Windows 11 | Microsoft Store |

Linki do sklepów znajdziesz na [mocpilot.com](https://mocpilot.com). Aplikacja sama wybiera układ telefonu, tabletu lub komputera; zobacz [Telefon, tablet i komputer](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Huby łączą się przez **Bluetooth Low Energy** (Bluetooth 4.0 lub nowszy). Ma go prawie każdy telefon i tablet; w komputerze użyj wbudowanego adaptera lub adaptera Bluetooth na USB.
- Hub **Robot Inventor** korzysta z klasycznego Bluetooth. Działa na Androidzie, Macu i Windows, ale nie na iPhonie i iPadzie. W Windows i na Macu może się też łączyć kablem USB.
- Huby **Mould King** odbierają polecenia jako rozgłoszenia Bluetooth (advertising). W Windows Mould King 6.0 wymaga adaptera i sterownika, które potrafią rozgłaszać, a Mould King 4.0 w ogóle nie działa – użyj do niego telefonu lub tabletu.
- Aplikacja prosi o uprawnienie do Bluetooth (na Androidzie także do urządzeń w pobliżu lub lokalizacji). Zobacz [Bluetooth i uprawnienia](/docs/Help/BluetoothPermissions).

## Pamięć {#memory}

Na urządzeniach z mniej niż 4 GB pamięci MOCPilot rysuje Bloki logiczne w prostszy sposób, aby duże programy działały płynnie. Dzieje się to automatycznie; bloki działają tak samo.

## Edytor webowy {#web-editor}

[Edytor webowy](/docs/Introducing/WebEditor) na mocpilot.com działa w przeglądarce:

- używaj aktualnej przeglądarki na komputerze; edytor wymaga WebAssembly;
- przy pierwszym otwarciu pobierane jest około 20 MB edytora i około 15 MB motywów, więc szybkie łącze się przyda;
- przeglądarki nie mogą łączyć się z hubami Bluetooth: aby sterować modelem z przeglądarki, użyj [zdalnego sterowania](/docs/Application/Profiles/RemoteControl), które wymaga przeglądarki obsługującej WebRTC;
- jeśli widzisz komunikat „Edytor nie może się uruchomić w tej przeglądarce.”, zaktualizuj przeglądarkę lub spróbuj innej.

## Internet {#internet}

Huby, Twoje profile i pobrane motywy działają offline. Logowanie, synchronizacja, katalog, Kreator AI, zdalne sterowanie i zakupy wymagają połączenia z internetem. Zobacz [Praca offline](/docs/Application/Account/Sync#working-offline).
