---
id: RemoteControl
title: Zdalne sterowanie
description: "Uruchom profil na telefonie, tablecie lub komputerze obok modelu i steruj nim z innego urządzenia lub z edytora webowego."
---

import Screenshot from '@site/src/components/Screenshot';

# Zdalne sterowanie {#remote-control}

Zdalne sterowanie pozwala sterować modelem połączonym z innym urządzeniem. Jedno urządzenie zostaje obok modelu i komunikuje się z hubami przez Bluetooth; drugie trzymasz w rękach i korzystasz z jego panelu. W ten sposób sterujesz też modelem z [edytora webowego](/docs/Introducing/WebEditor), ponieważ przeglądarki nie mogą łączyć się z hubami.

## Dwa urządzenia {#the-two-devices}

- **Urządzenie z hubami** to telefon, tablet lub komputer obok modelu. Jego aplikacja MOCPilot łączy się z hubami i uruchamia profil. Nie potrzebuje konta.
- **Pilot** to urządzenie, z którego sterujesz: aplikacja MOCPilot na innym urządzeniu albo edytor webowy na [mocpilot.com](https://mocpilot.com). Profil otwiera się na pilocie, a pilot wysyła go do urządzenia z hubami.

## Czego potrzebujesz {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) na koncie zalogowanym na **pilocie**. Urządzenie z hubami nie potrzebuje ani konta, ani Pro.
- Aplikacji MOCPilot na urządzeniu z hubami.
- Połączenia z internetem na obu urządzeniach.

## Łączenie urządzenia z hubami {#connect-a-hub-device}

1. Na pilocie otwórz profil i naciśnij **Zdalne sterowanie** (ikona pilota: domek z łukami sygnału) na górnym pasku profilu. W edytorze webowym naciśnij **Pokaż kod** w panelu, który się otworzy.

   Pilot pokaże **kod połączenia**: kod QR i 6 cyfr.
2. Na urządzeniu z hubami otwórz MOCPilot i stuknij **Połącz pilota** na stronie **Moje profile**. Na Macu możesz też wybrać **Plik → Połącz pilota…**.
3. Wprowadź kod:
   - **na telefonie lub tablecie** skieruj aparat na kod QR albo stuknij **Wpisz kod** i wpisz 6 cyfr;
   - **na komputerze** wpisz 6 cyfr i naciśnij **Połącz**.
4. Urządzenia się połączą. Pilot wyśle profil do urządzenia z hubami i tam go uruchomi, a urządzenie z hubami pokaże pełnoekranową stronę **Zdalne sterowanie**.

<Screenshot name="remote-control-code" alt="Panel Zdalne sterowanie w otwartym profilu z kodem QR i 6-cyfrowym kodem" width={900} />

O kodzie połączenia:

- Działa jednorazowo i jest ważny przez 5 minut. Dopóki pilot go wyświetla, po wygaśnięciu zastępuje go nowy kod.
- Skanuj go w aplikacji MOCPilot, a nie w aplikacji aparatu telefonu.
- Jeśli zamkniesz panel na pilocie, zanim urządzenie z hubami się połączy, nic nie zostanie skonfigurowane; naciśnij ponownie **Zdalne sterowanie**, aby uzyskać nowy kod.

<Screenshot name="remote-connect-code-entry" alt="Okno Połącz pilota na komputerze z polem na 6 cyfr" width={900} />

## Gdy urządzenia są połączone {#when-the-devices-are-connected}

**Na pilocie:**

- Przycisk **Zdalne sterowanie** zmienia kolor na zielony (na telefonie lub tablecie pojawia się zielony pierścień), a jego panel pokazuje nazwę urządzenia z hubami i przycisk **Rozłączyć**.
- **Moje huby** pokazuje huby urządzenia z hubami. Łącz z nimi huby jak zwykle: to urządzenie z hubami ich szuka, więc gdy pojawi się prośba, naciśnij przycisk na hubie.
- Panel steruje modelem.

**Na urządzeniu z hubami** pełnoekranowa strona **Zdalne sterowanie** pokazuje:

- stan, na przykład **Działa „Mój samochód”**;
- **Połączone huby: N**, a podczas wyszukiwania **Szukanie huba: naciśnij przycisk na hubie.**;
- przypomnienie: **Nie zamykaj aplikacji. To urządzenie z hubami: łączy huby i uruchamia profil, a pilot tylko nim steruje.**;
- przycisk **Zatrzymaj**.

Ekran urządzenia z hubami pozostaje włączony, dopóki jest ono połączone. Profil nie jest zapisywany na urządzeniu z hubami i nie pojawia się na jego liście profili.

<Screenshot name="remote-hub-device" alt="Pełnoekranowa strona Zdalne sterowanie na urządzeniu z hubami ze stanem połączenia, liczbą połączonych hubów i przyciskiem Zatrzymaj" width={900} />

## Uruchom i Zatrzymaj {#run-and-stop}

- Naciśnij **Zatrzymaj** na pilocie, aby zatrzymać profil na urządzeniu z hubami. Urządzenie z hubami zawsze zatrzymuje wszystkie silniki, nawet jeśli w profilu wyłączona jest opcja **Zatrzymaj porty huba po zatrzymaniu programu**.
- Naciśnij **Uruchom** na pilocie, aby ponownie uruchomić go na urządzeniu z hubami.
- W edytorze webowym urządzenie z hubami pozostaje sparowane dla każdego profilu otwartego w tej samej karcie przeglądarki: **Uruchom** uruchamia profil na urządzeniu z hubami. Gdy żadne urządzenie z hubami nie jest sparowane, **Uruchom** uruchamia profil w przeglądarce, bez hubów.

## Gdy połączenie zostanie przerwane {#if-the-connection-drops}

:::caution Bezpieczeństwo
Jeśli urządzenie z hubami przez 4 sekundy nie otrzyma żadnego sygnału od pilota, zatrzymuje profil i wszystkie silniki.
:::

Wtedy:

- urządzenie z hubami pokazuje **Utracono połączenie z pilotem. Profil został zatrzymany. Oczekiwanie na pilota…** i czeka;
- aplikacja na pilocie pokazuje **Utracono połączenie. Ponowna próba…** z przyciskami **Spróbuj ponownie** i **Rozłączyć**;
- edytor webowy pokazuje **Urządzenie z hubami zostało rozłączone**: „Brak odpowiedzi od *urządzenia*. Profil na nim został zatrzymany, a silniki wyłączone.” Edytor wciąż próbuje połączyć się ponownie; możesz też nacisnąć **Połącz ponownie**, **Uruchom w przeglądarce** lub **Zatrzymaj**.

Gdy urządzenia znów się połączą, sprawdź stan na pilocie i naciśnij **Uruchom**, jeśli profil nie działa.

## Rozłączanie {#disconnect}

- **Na pilocie**: naciśnij **Zdalne sterowanie** i wybierz **Rozłączyć**.
- **Na urządzeniu z hubami**: naciśnij **Zatrzymaj** na stronie **Zdalne sterowanie**.

W obu przypadkach profil i silniki się zatrzymują, a urządzenie z hubami zamyka profil.

## Rozwiązywanie problemów {#troubleshooting}

| Komunikat | Gdzie | Co zrobić |
|---|---|---|
| **Zdalne sterowanie jest częścią MocPilot Pro** | pilot | Wykup subskrypcję [MocPilot Pro](/docs/Application/Account/Pro) na koncie pilota. Nie da się tego zrobić w przeglądarce: zrób to w aplikacji, a Pro zadziała też w edytorze webowym |
| **Brak połączenia z serwerem** | oba | Sprawdź połączenie z internetem i spróbuj ponownie |
| **Nie udało się pobrać kodu z serwera** | pilot | Naciśnij **Pokaż kod**, aby spróbować ponownie |
| **Błędny lub wygasły kod. Sprawdź 6 cyfr wyświetlanych na pilocie.** | urządzenie z hubami | Wpisz 6 cyfr, które pilot pokazuje w tej chwili |
| **Kod wygasł. Wyświetl nowy kod na pilocie i zeskanuj go ponownie.** | urządzenie z hubami | Naciśnij **Zdalne sterowanie** na pilocie i zeskanuj nowy kod |
| **To nie jest kod MOCPilot. Zeskanuj kod wyświetlany przez pilota.** | urządzenie z hubami | Zeskanuj kod QR z panelu **Zdalne sterowanie** na pilocie |
| **Zbyt wiele błędnych kodów. Spróbuj ponownie za kilka minut.** | urządzenie z hubami | Zaczekaj kilka minut, a potem wprowadź aktualny kod |
| **Zezwól MOCPilot na dostęp do aparatu w ustawieniach systemu, aby zeskanować kod.** | urządzenie z hubami | Zezwól na dostęp do aparatu w ustawieniach systemu albo stuknij **Wpisz kod** i wpisz 6 cyfr |
| **Pilot nie odpowiada. Sprawdź, czy ma otwarty profil i czy jest online.** | urządzenie z hubami | Trzymaj profil otwarty na pilocie i sprawdź jego połączenie z internetem |
| **Ta wersja aplikacji nie może połączyć się z pilotem** | oba | Zaktualizuj MOCPilot |
| **Ta przeglądarka nie może otworzyć bezpośredniego połączenia (WebRTC)** | edytor webowy | Użyj innej przeglądarki, na przykład Chrome, Edge lub Safari |
| **Profil jest za duży** / **Profil nie dotarł w całości** | oba | Sprawdź połączenie i ponownie naciśnij **Uruchom** |
| **Drugie urządzenie nie mogło zapisać profilu** / **Drugie urządzenie nie mogło otworzyć profilu** | pilot | Ponownie naciśnij **Uruchom**; jeśli problem się powtarza, rozłącz urządzenie z hubami i połącz je ponownie |
| **Utracono połączenie z *urządzeniem*** / **Utracono połączenie z pilotem. Oczekiwanie…** | oba | Zobacz [Gdy połączenie zostanie przerwane](#if-the-connection-drops) |
