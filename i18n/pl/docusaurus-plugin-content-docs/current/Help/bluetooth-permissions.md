---
id: BluetoothPermissions
title: Bluetooth i uprawnienia
description: "O jakie uprawnienia MOCPilot prosi na poszczególnych platformach, dlaczego, i jak rozwiązać problem z odmówionym uprawnieniem lub Bluetooth."
---

# Bluetooth i uprawnienia {#bluetooth-and-permissions}

MOCPilot komunikuje się z hubami przez Bluetooth, więc system prosi Cię o zgodę. O kilka innych uprawnień aplikacja prosi dopiero wtedy, gdy korzystasz z funkcji, która ich wymaga.

## O co prosi MOCPilot i dlaczego {#what-mocpilot-asks-for-and-why}

| Uprawnienie | Kiedy pojawia się prośba | Dlaczego |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | przy pierwszym wyszukiwaniu huba | aby znajdować huby i się z nimi łączyć |
| **Urządzenia w pobliżu** (Android 12 i nowszy) | przy pierwszym wyszukiwaniu huba | aby znajdować huby i się z nimi łączyć |
| **Lokalizacja**, dokładna (Android 10 i 11) | przy pierwszym wyszukiwaniu huba | w tych wersjach Android wymaga jej do skanowania Bluetooth. MOCPilot nie zbiera, nie przechowuje ani nie udostępnia Twojej lokalizacji |
| **Lokalizacja** (Android, huby Mould King) | przy łączeniu huba Mould King | aplikacja wysyła polecenia do hubów Mould King jako rozgłoszenia Bluetooth i prosi do tego o lokalizację w każdej wersji Androida |
| **Aparat** (telefon, tablet) | przy skanowaniu kodu QR w **Połącz pilota** | aby odczytać [kod połączenia](/docs/Application/Profiles/RemoteControl). Zamiast tego możesz wpisać 6 cyfr |
| **Mikrofon** (iPhone, iPad, Mac, Android) | przy pierwszym dyktowaniu prośby do [Kreatora AI](/docs/Application/Profiles/AiBuilder) | wprowadzanie głosowe |
| **Rozpoznawanie mowy** (iPhone, iPad, Mac) | razem z mikrofonem | aby zamieniać głos na tekst |

W Windows MOCPilot nie prosi o uprawnienie do Bluetooth; Bluetooth musi być po prostu włączony. Do wprowadzania głosowego w Windows MOCPilot proponuje pisanie głosowe Windows (Win+H).

## Jeśli odmówiłeś uprawnienia {#if-you-denied-a-permission}

Jeśli odmówiłeś uprawnienia, system zwykle nie pyta ponownie. MOCPilot pokazuje wtedy komunikat, na przykład **Skanowanie nie powiodło się** z tekstem „Aplikacja wymaga uprawnienia do skanowania pobliskich urządzeń…”, „Zezwól MOCPilot na dostęp do aparatu w ustawieniach systemu, aby zeskanować kod.” lub „Zezwól MOCPilot na dostęp do mikrofonu w ustawieniach systemu”. Włącz uprawnienie w ustawieniach systemu i wróć do aplikacji:

**iPhone i iPad**
1. Otwórz **Ustawienia** i przewiń w dół do **MOCPilot**.
2. Włącz **Bluetooth** (oraz **Aparat**, **Mikrofon** lub **Rozpoznawanie mowy**, jeśli ich potrzebujesz).

**Android** (nazwy nieco różnią się w zależności od producenta)
1. Otwórz **Ustawienia → Aplikacje → MOCPilot → Uprawnienia**.
2. Zezwól na **Urządzenia w pobliżu**. W Androidzie 10 i 11 albo dla hubów Mould King zezwól też na **Lokalizację** i włącz **Używaj dokładnej lokalizacji**.
3. Zezwól na **Aparat** lub **Mikrofon**, jeśli ich potrzebujesz.

**Mac**
1. Otwórz **Ustawienia systemowe → Prywatność i ochrona**.
2. Wybierz **Bluetooth** (albo **Mikrofon**, **Rozpoznawanie mowy**) i włącz **MOCPilot**.

**Windows**
1. Otwórz **Ustawienia → Bluetooth i urządzenia** i włącz **Bluetooth**.

## „Bluetooth jest wyłączony” {#bluetooth-is-off}

MOCPilot pokazuje komunikat **Bluetooth jest wyłączony**, gdy Bluetooth w urządzeniu jest wyłączony. Włącz go w centrum sterowania, szybkich ustawieniach lub ustawieniach systemu, a następnie potwierdź komunikat: aplikacja ponownie rozpocznie wyszukiwanie.

## Adaptery Bluetooth w Windows {#bluetooth-adapters-on-windows}

- Potrzebujesz adaptera Bluetooth 4.0 (LE) lub nowszego: wbudowanego w komputer lub na USB.
- **Mould King 6.0** wymaga adaptera i sterownika, które potrafią wysyłać rozgłoszenia Bluetooth (advertising). Nie każdy adapter to potrafi.
- **Mould King 4.0** nie działa w Windows: aplikacja pokazuje komunikat „Huby Mould King z 4 portami wymagają rozgłaszania Bluetooth z danymi usługi, którego Windows nie obsługuje.” Do tych hubów użyj telefonu lub tabletu.

## Huby z klasycznym Bluetooth {#classic-bluetooth-hubs}

Hub **Robot Inventor** korzysta z klasycznego Bluetooth, a nie z Bluetooth Low Energy. Działa na Androidzie, Macu i Windows, ale nie na iPhonie i iPadzie. Jeśli w Windows MOCPilot go nie znajduje, najpierw sparuj hub w **Ustawienia → Bluetooth i urządzenia → Dodaj urządzenie**, a potem ponownie wyszukaj go w aplikacji.

Wszystkie pozostałe obsługiwane huby korzystają z Bluetooth Low Energy i dodaje się je tylko w MOCPilot, a nie w systemowych ustawieniach Bluetooth.

## Stabilne połączenie {#a-stable-connection}

- **Jedna aplikacja naraz.** Hub przyjmuje tylko jedno połączenie. Zamknij aplikacje LEGO® i inne aplikacje do sterowania oraz odłącz hub od innych telefonów.
- **Zasięg.** Trzymaj urządzenie w odległości kilku metrów od modelu. Ściany, metal, Twoje ciało i inne urządzenia 2,4 GHz (routery Wi-Fi, inne urządzenia Bluetooth) skracają zasięg.
- **Baterie.** Słabe baterie powodują rozłączenia, gdy silniki mocno pracują.
- **Nie zamykaj aplikacji.** Steruj z MOCPilot na ekranie i włącz **Utrzymuj ekran włączony** w [Ustawieniach](/docs/Application/Account/Settings), aby ekran nie wyłączał się, gdy profil jest otwarty.

Więcej rozwiązań dla hubów, których nie da się znaleźć lub które ciągle się rozłączają: [Rozwiązywanie problemów](/docs/Help/Troubleshooting#hubs).
