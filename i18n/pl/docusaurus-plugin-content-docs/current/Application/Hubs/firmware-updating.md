---
id: FirmwareUpdating
title: Aktualizacja firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Aktualizacja firmware

MOCPilot potrafi zaktualizować firmware obsługiwanych hubów LEGO® Powered Up, gdy dostępna jest nowsza zgodna wersja.

Niektóre huby wymagają aktualizacji, zanim zaczną poprawnie działać z MOCPilot: nowsze firmware naprawia błędy huba i dodaje funkcje, z których korzysta aplikacja.

## Obsługiwane huby {#supported-hubs}

MOCPilot potrafi zaktualizować te huby:

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

## Zanim zaczniesz {#before-you-start}

Upewnij się, że hub oraz Twój telefon, tablet lub komputer mają wystarczająco naładowane baterie.

Przez całą aktualizację hub musi być włączony, a urządzenie powinno znajdować się blisko niego, aby połączenie Bluetooth było stabilne. Nie zamykaj MOCPilot, nie wyłączaj Bluetooth i nie wyłączaj huba podczas przesyłania firmware.

:::warning Ważne
Przerwana aktualizacja może pozostawić hub z niekompletnym firmware. Wtedy przed ponownym użyciem hub może wymagać odzyskania firmware.
:::

## Rozpoczęcie aktualizacji {#starting-the-update}

Gdy łączysz hub, MOCPilot sprawdza wersję jego firmware. Jeśli wymagana jest nowsza wersja, aplikacja wyświetla okno **Wymagana aktualizacja firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Okno „Wymagana aktualizacja firmware”" />

Wybierz **Aktualizuj**, aby od razu rozpocząć aktualizację firmware.

Aby zaktualizować później, wybierz **Anuluj**. Aktualizację możesz w każdej chwili uruchomić z menu huba.

## Późniejsza aktualizacja z menu huba {#updating-later-from-the-hub-menu}

Aby samodzielnie rozpocząć aktualizację:

1. Otwórz **Moje huby Bluetooth**.
2. Znajdź hub, który wymaga aktualizacji.
3. Otwórz menu huba.
4. Wybierz **Zaktualizuj firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Polecenie „Zaktualizuj firmware” w menu kontekstowym huba" />

## Podczas aktualizacji firmware {#during-the-firmware-update}

MOCPilot przesyła firmware do huba i pokazuje postęp.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Ekran postępu aktualizacji firmware" />

Poczekaj na zakończenie przesyłania. Podczas wgrywania nowego firmware hub może się na chwilę uruchomić ponownie lub rozłączyć.

Następnie MOCPilot ponownie wyszukuje hub. Trzymaj hub w pobliżu i poczekaj, aż aplikacja połączy się ponownie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware przesłane, wyszukiwanie huba" />

## Zakończenie aktualizacji {#finishing-the-update}

Po zakończeniu aktualizacji MOCPilot wyświetla potwierdzenie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Okno zakończenia aktualizacji firmware" />

Wybierz **OK**. Hub połączy się ponownie, a jego karta pokaże nową wersję firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Karta huba z zaktualizowaną wersją firmware" />

Możesz dalej korzystać z huba w MOCPilot.

## Jeśli aktualizacja się nie powiedzie {#if-the-update-fails}

Jeśli aktualizacja się nie powiedzie, MOCPilot wyświetla komunikat o błędzie.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Okno nieudanej aktualizacji firmware" />

Najpierw wyłącz i włącz hub, a potem ponownie uruchom aktualizację:

1. Wyłącz hub.
2. Włącz hub ponownie.
3. Trzymaj hub blisko urządzenia.
4. Połącz się z hubem w MOCPilot.
5. Ponownie uruchom aktualizację firmware.

Jeśli hub nadal nie reaguje normalnie, może wymagać odzyskania firmware: zobacz [Odzyskiwanie firmware huba](/docs/Application/Hubs/RecoveryHubFirmware/).
