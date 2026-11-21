---
id: RecoveryHubFirmware
title: Odzyskiwanie firmware huba
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Odzyskiwanie firmware huba

Odzyskiwanie firmware przywraca do życia hub, który nie może normalnie się uruchomić po przerwanej lub nieudanej aktualizacji firmware.

MOCPilot przesyła do huba działające firmware, aby hub znów mógł pracować i przyjmować aktualizacje. Używaj odzyskiwania tylko wtedy, gdy hub nie reaguje normalnie, gdy MOCPilot pokazuje, że hub jest w trybie odzyskiwania, lub po nieudanej aktualizacji.

:::warning Ważne
Przez cały czas odzyskiwania hub musi być włączony, a urządzenie musi znajdować się blisko niego. Wyłączenie Bluetooth, zamknięcie MOCPilot, wyjęcie baterii lub wyłączenie huba podczas przesyłania może spowodować niepowodzenie odzyskiwania.
:::

## Kiedy potrzebne jest odzyskiwanie {#when-recovery-is-required}

Odzyskiwanie może być potrzebne, jeśli:

- Aktualizacja firmware nie zakończyła się pomyślnie.
- Hub nie łączy się już jako zwykły hub.
- Hub pojawia się w MOCPilot jako **LEGO Bootloader**.
- MOCPilot wykrywa, że hub jest połączony w trybie odzyskiwania firmware.

Zanim zaczniesz, upewnij się, że bateria huba jest wystarczająco naładowana, Twój telefon, tablet lub komputer jest naładowany, a Bluetooth jest włączony.

## Obsługiwane huby {#supported-hubs}

Odzyskiwanie działa dla tych samych hubów co aktualizacja firmware:

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

## Przełączanie Technic Hub, Boost Hub lub City Hub w tryb odzyskiwania {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Te huby łączą się przez swój bootloader:

1. Wyłącz hub.
2. Naciśnij i przytrzymaj zielony przycisk.
3. Trzymaj przycisk, aż dioda LED huba zacznie migać na fioletowo.
4. Nie puszczaj przycisku, dopóki dioda miga na fioletowo.
5. Wciąż trzymając przycisk, otwórz **Moje huby Bluetooth** w MOCPilot i połącz się z hubem.
6. Gdy hub połączy się w trybie bootloadera, możesz puścić przycisk.

W trybie odzyskiwania hub może się pojawiać jako **LEGO Bootloader** zamiast pod swoją zwykłą nazwą.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader na liście hubów z poleceniem odzyskania firmware" />

## Przełączanie Technic Move Hub w tryb odzyskiwania {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub odzyskuje się inaczej: nie łączy się jako **LEGO Bootloader**. Zamiast tego poniższa sekwencja przycisków wgrywa fabryczne firmware **1.2.3**, które nie jest przeznaczone do codziennego użytku.

Aby przywrócić jego firmware:

1. Wyłącz hub.
2. Naciśnij i przytrzymaj zielony przycisk.
3. Trzymaj zielony przycisk przez około minutę.
4. Puść przycisk.
5. Poczekaj, aż dioda LED huba zacznie migać na biało.
6. Otwórz **Moje huby Bluetooth** w MOCPilot i połącz się z hubem.

Gdy hub się połączy, MOCPilot wykryje fabryczne firmware i zaproponuje aktualizację do najnowszej wersji. Rozpocznij aktualizację i poczekaj na jej zakończenie.

## Rozpoczęcie odzyskiwania z okna dialogowego {#start-recovery-from-the-dialog}

Gdy MOCPilot wykryje hub połączony w trybie odzyskiwania, wyświetla okno odzyskiwania.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Okno „Wykryto tryb odzyskiwania huba”" />

Wybierz **Odzyskaj**, aby rozpocząć przesyłanie firmware do huba.

Jeśli nie jesteś gotowy, wybierz **Anuluj**. Odzyskiwanie możesz rozpocząć później z menu huba.

## Rozpoczęcie odzyskiwania z menu huba {#start-recovery-from-the-hub-menu}

Aby samodzielnie rozpocząć odzyskiwanie:

1. Otwórz **Moje huby Bluetooth**.
2. Znajdź hub widoczny jako **LEGO Bootloader**.
3. Otwórz menu huba.
4. Wybierz **Odzyskaj firmware huba**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Polecenie „Odzyskaj firmware huba” w menu kontekstowym huba" />

## Podczas odzyskiwania firmware {#during-firmware-recovery}

MOCPilot przesyła firmware do huba i pokazuje postęp.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Ekran postępu odzyskiwania firmware" />

Poczekaj na zakończenie. Nie oddalaj huba od urządzenia, nie zamykaj aplikacji, nie wyłączaj Bluetooth i nie odcinaj zasilania huba.

Hub może kilka razy uruchomić się ponownie lub połączyć ponownie. To normalne: nie zamykaj MOCPilot i czekaj.

## Zakończenie odzyskiwania {#finish-recovery}

Po zakończeniu odzyskiwania MOCPilot wyświetla potwierdzenie.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Okno zakończenia odzyskiwania firmware" />

Wybierz **OK**. Hub powinien się uruchomić ponownie i połączyć jako zwykły hub, a nie jako **LEGO Bootloader**.

Następnie sprawdź hub w **Moich hubach Bluetooth**. Jeśli MOCPilot nadal prosi o aktualizację firmware, przeprowadź zwykłą [aktualizację firmware](/docs/Application/Hubs/FirmwareUpdating/).

## Jeśli odzyskiwanie się nie powiedzie {#if-recovery-fails}

Jeśli odzyskiwanie się nie powiedzie:

1. Trzymaj hub blisko urządzenia.
2. Wyłącz i włącz hub.
3. Ponownie przełącz hub w tryb odzyskiwania.
4. Połącz się z **LEGO Bootloader** w MOCPilot.
5. Ponownie uruchom **Odzyskaj firmware huba**.

Jeśli błąd się powtórzy, powtórz całą procedurę. Jeśli kilka prób zakończy się niepowodzeniem, wymień lub naładuj baterie i spróbuj ponownie.
