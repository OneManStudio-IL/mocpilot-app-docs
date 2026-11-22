---
id: ConnectingHubs
title: Dodawanie i łączenie huba
description: "Dodaj hub do slotu profilu, połącz go, zmień jego nazwę i obserwuj czujniki w monitorze huba."
---

import Screenshot from '@site/src/components/Screenshot';

# Dodawanie i łączenie huba

Hub dodajesz do profilu tylko raz. Potem MOCPilot łączy się z nim za każdym razem, gdy otwierasz profil.

## Dodaj hub {#add-a-hub}

1. Otwórz profil i dotknij **Moje huby** (na komputerze **Huby** na górnym pasku albo ⇧⌘H / Ctrl+Shift+H). Strona **Moje huby Bluetooth** pokazuje sloty.
2. Dotknij **Dodaj nowy hub** w wolnym slocie.
3. Wybierz swój hub z listy. Filtr u góry pokazuje **Wszystko**, **LEGO**, **SBrick**, **BuWizz** lub **Mould King**. Dotknij **Dodaj**.
4. Postępuj zgodnie z instrukcjami na ekranie: **Naciśnij przycisk na hubie** i **Poczekaj, aż wyszukiwanie znajdzie hub**. Dotknij **Rozpocznij skanowanie**, aby wyszukać ponownie.

<Screenshot name="add-hub" alt="Wybór huba do dodania" width={900} />

Gdy hub zostanie znaleziony, łączy się i pozostaje w slocie.

<Screenshot name="my-hubs" alt="Moje huby Bluetooth z połączonymi hubami i wolnymi slotami" width={900} />

## Menu slotu {#the-slot-menu}

Przycisk **Połącz** w slocie łączy hub. Menu slotu zawiera:

- **Rozłączyć**;
- **Zmień nazwę hubu**: zapisuje nową nazwę w samym hubie (połączone huby, które to obsługują);
- **Zaktualizuj firmware**: gdy dostępne jest nowsze firmware; zobacz [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating);
- **Odzyskaj firmware huba**: gdy hub jest połączony w trybie odzyskiwania; zobacz [Odzyskiwanie firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Wybierz konfigurację**: konfiguracje Technic Move; zobacz [Konfiguracje Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Wybierz kanał: A / B / C**: kanał sterowania Mould King;
- **Usuń hub**: usuwa hub z profilu.

Przycisk **Moje huby** w edytorze (**Huby** na komputerze) pokazuje, ile hubów jest połączonych.

## Monitor huba {#hub-monitor}

Otwórz połączony hub, aby zobaczyć jego **monitor huba**:

- hub: model, nazwę, firmware, baterię, ładowanie, temperaturę płytki, konfigurację, orientację, nachylenie (pochylenie, przechył, odchylenie) i akcelerometr;
- każdy port: podłączone urządzenie oraz jego prędkość, pozycję, pozycję względną, kolor, światło odbite i otoczenia albo odległość.

Dzięki niemu przed zbudowaniem programu sprawdzisz, który silnik jest na którym porcie i w którą stronę się obraca.

<Screenshot name="hub-monitor" alt="Monitor huba połączonego Technic Hub" width={900} />

## Wskazówki dotyczące łączenia {#connection-tips}

- Włącz hub tuż przed łączeniem: wiele hubów wyłącza się samoczynnie po kilku minutach bez połączenia.
- Trzymaj telefon blisko huba; ściany i metal zmniejszają zasięg.
- Hub może być połączony tylko z jednym urządzeniem naraz. Zamknij inne aplikacje, które z niego korzystają (aplikacje LEGO®, inne piloty).
- **Bluetooth jest wyłączony**: włącz Bluetooth i zezwól MOCPilot na korzystanie z niego w ustawieniach systemu.
- **Nie znaleziono huba**: ponownie naciśnij przycisk huba, uruchom skanowanie od nowa lub wymień baterie.
- Huby **Mould King** tak naprawdę się „nie łączą”: MOCPilot wysyła im polecenia przez rozgłaszanie Bluetooth. Jeśli hub nie reaguje, dotknij **Połącz ponownie** i sprawdź kanał.

Więcej w sekcji [Rozwiązywanie problemów](/docs/Help/Troubleshooting#hubs).
