---
id: WebEditor
title: Edytor webowy
description: "Edytuj profile MOCPilot w przeglądarce na mocpilot.com i steruj modelem przez aplikację na innym urządzeniu."
---

import Screenshot from '@site/src/components/Screenshot';

# Edytor webowy na mocpilot.com {#web-editor-on-mocpilotcom}

Edytor webowy to MOCPilot działający w Twojej przeglądarce. To ta sama aplikacja z tymi samymi edytorami, panelem i motywami, więc wszystko w tej dokumentacji dotyczy także jego.

Przeglądarki nie mogą komunikować się z hubami Bluetooth, dlatego edytor webowy służy do **edycji**. Aby przetestować profil, uruchom go w przeglądarce bez hubów; aby sterować modelem, pozwól aplikacji MOCPilot na telefonie, tablecie lub komputerze połączyć się z hubami (zobacz [Zdalne sterowanie](/docs/Application/Profiles/RemoteControl)).

## Wypróbuj bez konta {#try-it-without-an-account}

Na stronie głównej [mocpilot.com](https://mocpilot.com) każdy edytor (Bloki logiczne i Szybkie połączenia) ma przycisk **Wypróbuj demo**, który otwiera profil demonstracyjny. Demo nie wymaga konta ani hubów. Możesz w nim wypróbować każdy motyw i każdy specjalny element sterujący; nic nie jest zapisywane.

## Edytuj własne profile {#edit-your-own-profiles}

1. Zaloguj się na [mocpilot.com](https://mocpilot.com) swoim kontem MOCPilot.
2. Otwórz swoje profile i kliknij **Edycja** przy jednym z nich.
3. Zmień huby, panel lub program – tak samo jak w aplikacji.
4. Zamknij profil (przycisk Ekran główny). Edytor zapisze profil i go prześle, a zmiana dotrze do aplikacji na Twoich urządzeniach dzięki [synchronizacji](/docs/Application/Account/Sync).

Uwagi:

- Możesz edytować tylko profile konta, na które jesteś zalogowany. W przeciwnym razie zobaczysz komunikat „Tego profilu nie ma na Twoim koncie” i przycisk **Wróć do strony**.
- Twoje zakupy i MocPilot Pro działają w przeglądarce tak samo jak w aplikacji.
- W przeglądarce na komputerze panel jest pływającym oknem, które możesz przeciągać i zmieniać jego rozmiar.
- Motywy są pobierane od nowa przy każdej wizycie (około 15 MB), więc pierwsze otwarcie może chwilę potrwać.
- Import i eksport plików `.dat` nie jest dostępny w przeglądarce; użyj do tego aplikacji.

## Uruchamianie profilu {#run-a-profile}

**Uruchom** w edytorze webowym uruchamia profil w przeglądarce: działa każdy blok i każdy wiersz oprócz Bluetooth, co dobrze sprawdza się przy testowaniu logiki, monitorów i panelu. Gdy sparowane jest urządzenie z hubami (MocPilot Pro, patrz niżej), **Uruchom** uruchamia profil na tym urządzeniu.

## Zdalne sterowanie {#remote-control}

Z [MocPilot Pro](/docs/Application/Account/Pro) edytor webowy może być **pilotem**: aplikacja MOCPilot na telefonie, tablecie lub komputerze obok modelu (**urządzenie z hubami**) łączy się z hubami i uruchamia profil, a strona w przeglądarce nim steruje. Naciśnij **Zdalne sterowanie** na górnym pasku profilu, a potem **Pokaż kod**; na urządzeniu z hubami stuknij **Połącz pilota** na stronie **Moje profile** i zeskanuj kod. Zobacz [Zdalne sterowanie](/docs/Application/Profiles/RemoteControl).
