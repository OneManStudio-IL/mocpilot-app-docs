---
id: TechnicMoveHubConfigurations
title: Konfiguracje Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Konfiguracje Technic Move Hub

## Przegląd {#overview}

W przeciwieństwie do innych hubów LEGO® Powered Up Technic Move Hub zachowuje się różnie w zależności od wgranej do niego konfiguracji.

MOCPilot potrafi zmienić tę konfigurację, aby hub pasował do oficjalnego zestawu LEGO, którym chcesz sterować.

## Obsługiwane konfiguracje {#supported-configurations}

MOCPilot zna te konfiguracje:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Opcje konfiguracji Technic Move Hub w bloku ustawiania konfiguracji huba" />

## Zmiana konfiguracji w Moich hubach Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Aby zmienić konfigurację na stronie **Moje huby Bluetooth**:

1. Otwórz **Moje huby Bluetooth**.
2. Znajdź Technic Move Hub.
3. Otwórz menu huba.
4. Wybierz **Wybierz konfigurację**.
5. Wybierz konfigurację.
6. Potwierdź w oknie dialogowym.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Menu kontekstowe Technic Move Hub z poleceniem „Wybierz konfigurację”" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Podmenu konfiguracji Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Okno potwierdzenia ponownej konfiguracji Technic Move Hub" />

:::warning Ważne
Zmiana konfiguracji zapisuje w hubie program, podobnie jak aktualizacja firmware.

Przez cały proces hub musi być włączony, a Twój telefon, tablet lub komputer — włączony i blisko huba, aby połączenie Bluetooth było stabilne. Nie zamykaj MOCPilot, nie wyłączaj Bluetooth i nie wyłączaj huba podczas zmiany konfiguracji.

Przerwana zmiana może uszkodzić firmware huba. Wtedy przed ponownym użyciem hub może wymagać [odzyskania firmware](/docs/Application/Hubs/RecoveryHubFirmware/).
:::

Podczas zmiany konfiguracji hub ignoruje zwykłe polecenia, a jego dioda LED zmienia po kolei kolory. Gdy nowa konfiguracja zostanie wgrana, hub uruchamia się ponownie.

## Bloki konfiguracji {#configuration-blocks}

Bloki logiczne mogą odczytywać i zmieniać konfigurację podczas działania programu.

### `ustawić … konfigurację na …` {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blok ustawiania konfiguracji huba" />

Blok **ustawić … konfigurację na** wgrywa do wybranego huba jedną z obsługiwanych konfiguracji.

- Wybór huba: wybiera hub do ponownej konfiguracji.
- Wybór konfiguracji: wybiera docelową konfigurację.
- Dostępne konfiguracje Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** i **Batmobile™ Tumbler**.

Zobacz [opis bloku ustawiania konfiguracji huba](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### `pobierz … konfiguracja jako …` {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Blok raportujący konfigurację huba" />

Blok **pobierz … konfiguracja jako** zwraca bieżącą konfigurację wybranego huba.

- Wybór huba: wybiera hub do odczytu.
- Format wyniku: **tekst** zwraca nazwę konfiguracji.
- Format wyniku: **indeks** zwraca numer konfiguracji, przydatny do porównań w warunkach.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opcje formatu wyniku bloku konfiguracji huba" />

Zobacz [opis bloku konfiguracji huba](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### `impuls mocy` {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blok impulsu mocy Technic Move Hub" />

Blok **impuls mocy** wysyła impuls mocy do wybranego Technic Move Hub. Działa tylko z konfiguracją **Batmobile™ Tumbler**.

Hub uruchamia wtedy silniki z maksymalną mocą i prędkością na krótki czas, około 1–2 sekund. W Szybkich połączeniach tę samą funkcję pełni operacja [Impuls mocy](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Zobacz [opis bloku impulsu mocy](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Zmiana konfiguracji podczas działania programu {#change-configuration-during-program-runtime}

Program może też zmienić konfigurację w trakcie działania. Typowe podejście:

1. Odczytaj bieżącą konfigurację huba.
2. Porównaj ją z konfiguracją wymaganą przez profil.
3. Jeśli konfiguracja jest inna, ustaw wymaganą konfigurację.
4. Po ponownej konfiguracji odczytaj konfigurację jeszcze raz.
5. Kontynuuj dopiero wtedy, gdy hub zgłosi oczekiwaną konfigurację.
6. Rozłącz się lub zatrzymaj program, jeśli wymagana konfiguracja nie została zastosowana.

Gotowy profil dla tego huba pokazuje, jak to zrobić.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Przykład bloków ze zmianą konfiguracji Technic Move Hub podczas działania programu" />
