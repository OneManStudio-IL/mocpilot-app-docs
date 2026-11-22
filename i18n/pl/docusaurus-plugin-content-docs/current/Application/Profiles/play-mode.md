---
id: PlayMode
title: Sterowanie modelem (Uruchom)
description: "Uruchom profil, steruj modelem, zatrzymaj go i dowiedz się, co się dzieje, gdy program się zatrzymuje lub zrywa się połączenie."
---

import Screenshot from '@site/src/components/Screenshot';

# Sterowanie modelem (Uruchom) {#driving-a-model-run}

Profil ma dwa tryby:

- **Edycja**: zmieniasz huby, panel i program.
- **Uruchom**: program działa, a elementy sterujące na panelu sterują modelem.

## Uruchamianie i zatrzymywanie {#start-and-stop}

Naciśnij **Uruchom** (▶) na prawym końcu górnego paska edytora; na telefonie lub tablecie ten przycisk ma też panel. Na komputerze **Uruchom** to pomarańczowy przycisk w edytorze (także **Program → Uruchom**, ⌘R / Ctrl+R). Naciśnij **Zatrzymaj** (■), aby wrócić do edycji (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Panel podczas działania programu" width={900} />

Podczas działania programu:

- kropki siatki panelu są ukryte, podobnie jak jego przyciski edycji (na komputerze są one niedostępne);
- elementy sterujące reagują na dotyk i na gamepad;
- monitory i wskaźniki pokazują bieżące wartości;
- w Szybkich połączeniach edytor pokazuje bieżące wartości między blokami każdego wiersza, a wierszy nie można edytować;
- w Blokach logicznych program można dalej edytować, więc możesz go dopracowywać na żywo.

## Na telefonie lub tablecie {#on-a-phone-or-tablet}

Otwarcie profilu przełącza telefon w poziomy tryb pełnoekranowy, dzięki czemu panel zajmuje cały ekran. Włącz **Utrzymuj ekran włączony** w Ustawieniach, aby ekran nie gasł podczas jazdy. Zobacz [Ustawienia](/docs/Application/Account/Settings).

## Zanim naciśniesz Uruchom {#before-you-press-run}

- Włącz huby i sprawdź w **Moje huby**, czy są połączone (liczba na przycisku **Moje huby**, na komputerze **Huby**, pokazuje, ile ich jest).
- W Szybkich połączeniach sprawdź przycisk **Problemy**: czerwony „!” oznacza, że niektórych wierszy nie da się uruchomić. Zobacz [Uruchamianie i naprawianie problemów](/docs/Application/Links/Problems).
- Przy pierwszej próbie postaw model na podstawce albo trzymaj go z dala od krawędzi stołu.

## Gdy program się zatrzymuje {#when-the-program-stops}

- **Szybkie połączenia** zatrzymują wszystkie silniki używane w wierszach i resetują wyjścia (matryca LED zostaje wyczyszczona, kolory portów i światła czujników gasną).
- **Bloki logiczne** zatrzymują porty huba, jeśli w Ustawieniach edytora włączona jest opcja **Zatrzymaj porty huba po zatrzymaniu programu**.
- Jeśli hub rozłączy się podczas działania programu, jego silniki się zatrzymują. W Szybkich połączeniach może to pokazać na panelu wejście huba „Połączono”.
- Przy zdalnym sterowaniu, jeśli połączenie między pilotem a urządzeniem z hubami zostanie utracone na około 4 sekundy, urządzenie z hubami zatrzymuje profil i wszystkie silniki.

## Sterowanie z innego urządzenia {#drive-from-another-device}

Z [MocPilot Pro](/docs/Application/Account/Pro) możesz uruchomić profil na jednym urządzeniu (urządzeniu z hubami, które łączy się z hubami) i sterować nim z innego urządzenia lub z edytora webowego. Zobacz [Zdalne sterowanie](/docs/Application/Profiles/RemoteControl).
