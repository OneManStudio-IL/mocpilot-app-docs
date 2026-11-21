---
id: Troubleshooting
title: Rozwiązywanie problemów
description: "Rozwiązania typowych problemów z hubami, silnikami, panelem, synchronizacją, zakupami, aktualizacjami, dźwiękiem, Kreatorem AI i zdalnym sterowaniem."
---

# Rozwiązywanie problemów {#troubleshooting}

## Huby {#hubs}

**Nie można znaleźć huba**
- Włącz Bluetooth i zezwól MOCPilot na korzystanie z Bluetooth (na Androidzie także z urządzeń w pobliżu lub lokalizacji) w ustawieniach systemu. Zobacz [Bluetooth i uprawnienia](/docs/Help/BluetoothPermissions).
- Włącz hub i naciśnij jego przycisk tuż przed skanowaniem; ponownie stuknij **Rozpocznij skanowanie**.
- Upewnij się, że hub nie jest połączony z innym telefonem lub aplikacją (aplikacje LEGO®, inny pilot). Zamknij je.
- Wymień lub naładuj baterie.
- Robot Inventor: niedostępny na iPhonie i iPadzie. Mould King 4.0: niedostępny w Windows.

**Hub się rozłącza**
- Przybliż urządzenie: ściany, metal i inne urządzenia 2,4 GHz zmniejszają zasięg.
- Słabe baterie powodują rozłączenia pod obciążeniem: naładuj je lub wymień.
- Niektóre huby wyłączają się po pewnym czasie bez poleceń; połącz się ponownie w **Moje huby**.
- Więcej o zasięgu, adapterach i uprawnieniach: [Bluetooth i uprawnienia](/docs/Help/BluetoothPermissions).

**„Wymagana aktualizacja firmware”**
- MOCPilot wymaga obsługiwanego firmware w hubach Technic, Technic Move, BOOST i City. Postępuj zgodnie z artykułem [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating). Jeśli aktualizacja się nie powiodła, zobacz [Odzyskiwanie firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King nie reaguje**
- Huby Mould King tylko odbierają polecenia. Użyj **Połącz ponownie**, sprawdź kanał (**Wybierz kanał**) i używaj tylko jednego typu Mould King w profilu.

## Silniki i program {#motors-and-the-program}

**Silnik się nie rusza**
- Czy program działa (**Uruchom**)? Czy hub jest połączony?
- Czy silnik jest na porcie, którego używa program? Sprawdź [monitor huba](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Szybkie połączenia: otwórz **Problemy**; śledź bieżące wartości wzdłuż wiersza. Zobacz [Uruchamianie i naprawianie problemów](/docs/Application/Links/Problems).
- Bloki logiczne: czy skrypt zaczyna się od bloku zdarzenia? Użyj **Monitora**, aby obserwować wartości.

**Silnik obraca się w złą stronę**
- Szybkie połączenia: dodaj do wiersza **Odwróć**. Bloki logiczne: pomnóż wartość przez −1.

**Silnik pełznie lub buczy po puszczeniu joysticka**
- Szybkie połączenia: dodaj **Martwa strefa**. Bloki logiczne: ignoruj małe wartości za pomocą *pomiędzy*.

**Skręt serwem nie jest wyśrodkowany lub uderza w ogranicznik**
- Szybkie połączenia: Serwo z kalibracją **Auto** albo **Ręczna** z **Ustaw jako zero** i **Środek**; zmniejsz **Kąt**. Bloki logiczne: *kalibruj drążek kierowniczy*.
- Serwo, Obrót o stopnie i Do pozycji wymagają silników z enkoderem; proste silniki i porty SBrick przyjmują tylko prędkość.

**Silniki pracują dalej po Zatrzymaj**
- Bloki logiczne: włącz **Zatrzymaj porty huba po zatrzymaniu programu** w Ustawieniach edytora.

## Panel {#dashboard}

**Nie mogę przesunąć ani usunąć elementu sterującego**
- Jest zablokowany: **Odblokuj** go w jego menu. Elementu używanego przez program nie można usunąć, dopóki nie usuniesz jego wierszy lub bloków.

**„Na panelu nie ma wolnego miejsca”**
- Przesuń lub zmniejsz inne elementy sterujące albo wybierz mniejszy rozmiar.

**Motyw lub element sterujący jest zablokowany**
- Nie posiadasz go: kup go lub zdobądź [MocPilot Pro](/docs/Application/Account/Pro) albo przełącz element na motyw Podstawowy opcją **Zmień motyw**.

**Gamepad nie jest wykrywany**
- Sparuj gamepad w systemowych ustawieniach Bluetooth (albo podłącz go przez USB). Strona **Gamepad** pokazuje **Gamepad: (nazwa)**, gdy aplikacja go widzi, a „Gamepad nie jest podłączony”, gdy go nie widzi.
- Włącz **Włącz bloki gamepada** na stronie **Gamepad**, w przeciwnym razie wejścia i bloki gamepada się nie pojawią.
- Podłączonych jest kilka gamepadów? Wybierz jeden w **Wybierz gamepad**.
- Sprawdź przyciski i drążki opcją **Testuj gamepad**.
- Windows: działają kontrolery Xbox (XInput) oraz Sony DualSense / DualSense Edge; inne kontrolery bez obsługi XInput mogą nie działać.
- Zobacz [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profile i synchronizacja {#profiles-and-sync}

**Moich profili nie ma na drugim urządzeniu**
- Zaloguj się na to samo konto na obu urządzeniach i sprawdź połączenie z internetem. Jeśli aplikacja pokazuje **Offline**, stuknij **Ponów** lub **Przejdź do trybu online**.

**„Profil nie jest zgodny”**
- Profil utworzono w nowszej wersji MOCPilot. Zaktualizuj aplikację.

**Straciłem profile po ponownej instalacji**
- W trybie gościa profile istnieją tylko na urządzeniu i przepadają razem z aplikacją. Z kontem wystarczy się ponownie zalogować, a profile wrócą.

## E-maile dotyczące konta {#account-emails}

**Nie dociera e-mail aktywacyjny lub kod resetowania hasła**
- Odczekaj kilka minut i sprawdź folder spam lub wiadomości-śmieci. E-maile przychodzą z adresu no-reply@mocpilot.com.
- Sprawdź, czy poprawnie wpisałeś adres e-mail.
- Aktywacja: otwórz stronę konta i stuknij **Wyślij ponownie wiadomość aktywacyjną**. Dopóki konto nie zostanie zweryfikowane, niektóre funkcje pozostają wyłączone.
- Resetowanie hasła: komunikat „Nie znaleziono adresu e-mail” oznacza, że nie ma konta z tym adresem; spróbuj adresu, którego użyłeś przy rejestracji. W przeciwnym razie ponownie stuknij **Zresetuj** obok „Zapomniałeś hasła?”, aby otrzymać nowy kod. Zobacz [Konto](/docs/Application/Account/UserAccount).

## Zakupy {#purchases}

**Brakuje zakupu**
- Zaloguj się na konto, na którym dokonano zakupu, a potem przejdź do **Konto → Zakupy → Przywróć**.
- „Subskrypcja powiązana z innym kontem”: subskrypcja Pro tego konta w sklepie należy do innego konta MOCPilot.

**„MocPilot Pro wymaga sprawdzenia online”**
- Pro było długo używane offline. Połącz się z internetem, a sprawdzenie wykona się samo.

## Aktualizacje aplikacji {#app-updates}

**„Wymagana aktualizacja”**
- Pełnoekranowy komunikat „Ta wersja MOCPilot nie jest już obsługiwana…” oznacza, że tej wersji nie można już używać. Stuknij **Aktualizuj**, aby otworzyć sklep i zainstalować nową wersję. Ekran pokazuje też **Zainstalowaną wersję**.
- W edytorze webowym przycisk nazywa się **Odśwież stronę**: wczyta się najnowszy edytor.

**„Dostępna jest wersja MOCPilot (wersja)”**
- Wyszła nowsza wersja. Stuknij **Aktualizuj** (w edytorze webowym **Odśwież stronę**) albo zamknij baner przyciskiem ×: nie pojawi się ponownie aż do następnej wersji.

## Dźwięk {#sound}

**Nie ma dźwięku**
- Włącz **Dźwięk** w [Ustawieniach](/docs/Application/Account/Settings): ta opcja wycisza wszystkie dźwięki aplikacji, elementów sterujących i programu.
- Zwiększ głośność multimediów w urządzeniu. Jeśli podłączone są słuchawki lub głośnik Bluetooth, dźwięk odtwarza się tam.
- Bloki logiczne: sprawdź, czy program nie ustawia głośności na 0 ani nie zatrzymuje wszystkich dźwięków. Zobacz [Dźwięki](/docs/Application/BlockBuilder/Blocks/Sounds).

## Kreator AI {#ai-builder}

**Kreator AI jest niedostępny lub pokazuje błąd**
- Kreator AI wymaga [MocPilot Pro](/docs/Application/Account/Pro) i połączenia z internetem: „Kreator AI wymaga MocPilot Pro.” lub „Nie udało się połączyć z usługą AI. Sprawdź połączenie z internetem i spróbuj ponownie.”
- „Usługa AI jest chwilowo niedostępna. Spróbuj później.” lub „Zbyt wiele zapytań do AI w tej chwili. Spróbuj ponownie za minutę.”: zaczekaj i spróbuj ponownie.
- Obowiązują limity dzienne i miesięczne: „Osiągnięto dzisiejszy limit próśb do AI. Spróbuj jutro.”
- Wprowadzanie głosowe: zezwól na mikrofon (i rozpoznawanie mowy na urządzeniach Apple) w ustawieniach systemu; zobacz [Bluetooth i uprawnienia](/docs/Help/BluetoothPermissions).
- Wszystkie komunikaty i co zrobić: [Kreator AI](/docs/Application/Profiles/AiBuilder).

## Zdalne sterowanie {#remote-control}

**Urządzenie z hubami nie łączy się lub połączenie się zrywa**
- „Zdalne sterowanie jest częścią MocPilot Pro”: konto pilota wymaga [MocPilot Pro](/docs/Application/Account/Pro).
- „Kod wygasł…” lub „Błędny lub wygasły kod…”: kod połączenia jest ważny przez 5 minut. Wyświetl nowy kod na pilocie i zeskanuj go lub wpisz ponownie.
- „Zezwól MOCPilot na dostęp do aparatu w ustawieniach systemu, aby zeskanować kod.”: zezwól na aparat w ustawieniach systemu ([jak](/docs/Help/BluetoothPermissions)) albo stuknij **Wpisz kod** i wpisz 6 cyfr.
- „Ta wersja aplikacji nie może połączyć się z pilotem” lub „Drugie urządzenie nie mogło otworzyć profilu”: zaktualizuj MOCPilot na obu urządzeniach.
- „Utracono połączenie z pilotem…”: sprawdź, czy oba urządzenia są online. Jeśli połączenie zostanie utracone na około 4 sekundy, urządzenie z hubami zatrzymuje profil i wszystkie silniki.
- Więcej: [Zdalne sterowanie](/docs/Application/Profiles/RemoteControl).

## Nadal masz problem? {#still-stuck}

Użyj opcji **Zadaj pytanie** lub **Zgłoś błąd** w sekcji **Pomoc** aplikacji (komputer: menu **Pomoc**). Odpowiedź przyjdzie e-mailem i w **Powiadomieniach**.
