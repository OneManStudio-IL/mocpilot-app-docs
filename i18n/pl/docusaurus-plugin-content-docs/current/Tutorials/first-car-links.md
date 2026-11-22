---
id: FirstCarLinks
title: Twój pierwszy zdalnie sterowany samochód w Szybkich połączeniach
description: "Krok po kroku: zbuduj zdalnie sterowany samochód LEGO z napędem, skrętem serwem i światłami w Szybkich połączeniach, bez kodu."
---

import Screenshot from '@site/src/components/Screenshot';

# Twój pierwszy zdalnie sterowany samochód w Szybkich połączeniach {#your-first-rc-car-with-quick-links}

W tym samouczku zbudujesz w [Szybkich połączeniach](/docs/Application/Links/LinksIntroducing) kompletny zdalnie sterowany samochód: jeden joystick odpowiada za jazdę i skręcanie, a przycisk włącza i wyłącza światła. Zajmie to około 15 minut i nie napiszesz ani linijki kodu.

**Czego potrzebujesz**

- LEGO® Technic™ Hub (88012);
- silnika napędowego na **porcie A**;
- silnika skrętu z czujnikiem pozycji (enkoderem) na **porcie B**, na przykład silnika Technic L lub XL albo dowolnego silnika kątowego Technic. Układ kierowniczy musi mieć ograniczniki: koła mogą skręcać w lewo i w prawo tylko do pewnego punktu;
- świateł LEGO® na **porcie C** (opcjonalnie);
- MOCPilot na telefonie, tablecie lub komputerze z Bluetooth.

:::note City Hub
City Hub (88009) ma tylko dwa porty. Podłącz silnik napędowy do **A**, a silnik skrętu do **B** i pomiń światła albo dodaj dla nich drugi hub. Cała reszta działa tak samo.
:::

**Efekt**: profil z trzema wierszami:

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | JOY1, Oś Y | Wygładzanie | Silnik | Technic Hub, port A |
| 2 | JOY1, Oś X | | Serwo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Zatrzask | Światło | Technic Hub, port C |

## 1. Utwórz profil {#create-the-profile}

1. Przejdź do **Moje profile** i zacznij nowy profil: na telefonie stuknij **+** → **Nowy profil**, na tablecie stuknij **Nowy profil** w nagłówku, na komputerze wybierz **Plik → Nowy profil**.
2. Wybierz kafelek **Szybkie połączenia**.
3. Wpisz **Nazwę**, na przykład „Mój pierwszy samochód”. Obraz i hashtagi są na razie opcjonalne.
4. Stuknij **Utwórz**. Profil otworzy się w edytorze Szybkich połączeń z jednym pustym wierszem.

Typu programu nie da się później zmienić. Więcej w artykule [Tworzenie profilu](/docs/Application/Profiles/CreateProfile).

## 2. Dodaj i połącz hub {#add-the-hub}

1. W edytorze stuknij **Moje huby** (na komputerze **Huby** na górnym pasku).
2. Stuknij **Dodaj nowy hub** w wolnym slocie, wybierz z listy Technic Hub i stuknij **Dodaj**.
3. Włącz hub i naciśnij jego przycisk. MOCPilot go znajdzie i się połączy; hub zostanie w slocie.
4. Jeśli pojawi się okno **Wymagana aktualizacja firmware**, stuknij **Aktualizuj** i trzymaj włączony hub w pobliżu, aż aktualizacja się zakończy. Zobacz [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating).

Wskazówka: otwórz połączony hub, aby zobaczyć jego [monitor huba](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Pokazuje, jakie urządzenie jest podłączone do każdego portu, więc możesz sprawdzić silniki, zanim zbudujesz wiersze.

Więcej w artykule [Dodawanie i łączenie huba](/docs/Application/Hubs/ConnectingHubs).

## 3. Umieść elementy sterujące na panelu {#dashboard}

1. Otwórz **Panel** i stuknij **+** (**Dodaj kontroler**; na komputerze **+ Kontroler**).
2. W grupie **Dżojstiki** wybierz **Dżojstik** i stuknij **Dodaj do panelu**. Otrzyma nazwę **JOY1**. Zostaw **Typ osi** na **Obie osie (X, Y)**: góra i dół będą odpowiadać za jazdę, lewo i prawo za skręcanie.
3. Ponownie stuknij **+**. W grupie **Przyciski i przełączniki** wybierz **Przycisk** i stuknij **Dodaj do panelu**. Otrzyma nazwę **BTN1**.
4. Przeciągnij joystick na lewą stronę, a przycisk na prawą – tam, gdzie będą Twoje kciuki. Stuknij element sterujący, aby zmienić jego rozmiar (**S**, **M** lub **L**) albo wygląd.

<Screenshot name="tutorial-car-dashboard" alt="Panel z joystickiem JOY1 po lewej i przyciskiem BTN1 po prawej" width={900} />

Wolisz jechać i skręcać różnymi kciukami? Dodaj zamiast tego dwa joysticki: **JOY1** z ustawieniem **Tylko pionowo (Y)** i **JOY2** z ustawieniem **Tylko poziomo (X)**, a w wierszu skrętu użyj JOY2.

Więcej w artykułach [Dodawanie i rozmieszczanie elementów sterujących](/docs/Application/Dashboard/ArrangingControls) i [Typy elementów sterujących](/docs/Application/Dashboard/ControlTypes).

### Opcja: kierownica i pedały {#wheel-and-pedals}

Jeśli masz [specjalne elementy sterujące](/docs/Application/Dashboard/SpecialControls) **Kierownica** i **Pedały**, możesz ich użyć zamiast joysticka. W kroku 4 zbuduj wiersz 1 z wejścia [Pojazd](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) z ustawieniem **Wyjście** na **Prędkość** (przyspiesza i zwalnia jak prawdziwy samochód, więc Wygładzanie nie jest potrzebne), a wiersz 2 z wejścia **Kierownica** z kanałem **Kąt skrętu**.

## 4. Zbuduj wiersze {#rows}

Wróć do programu. Paleta u dołu ma trzy karty: **Wejścia**, **Przetwarzanie** i **Wyjścia**. Każdy wiersz biegnie od lewej do prawej: wejście → przetwarzanie → operacja → hub. Jak działa edytor: [Wprowadzenie do Szybkich połączeń](/docs/Application/Links/LinksIntroducing).

### Wiersz 1: jazda {#row-drive}

1. Na karcie **Wejścia** przeciągnij **JOY1** z kanałem **Oś Y** do pustego wiersza („Nowy wiersz: wejście”). Pod nim pojawi się nowy pusty wiersz.
2. Na karcie **Przetwarzanie** przeciągnij **Wygładzanie** za wejście. Domyślne wartości **Przyspieszanie (do pełnej prędkości)** i **Zwalnianie (do zatrzymania)** po 0,5 s są dobre na początek.
3. Na karcie **Wyjścia** przeciągnij **Silnik** za Wygładzanie.
4. Przeciągnij wyjście **Technic Hub** za Silnik i stuknij port **A**.

### Wiersz 2: skręcanie {#row-steering}

1. Przeciągnij **JOY1** z kanałem **Oś X** do następnego pustego wiersza.
2. Przeciągnij **Serwo** z karty **Wyjścia**.
3. Stuknij blok Serwo i ustaw **Kalibracja** na **Auto**.
4. Przeciągnij wyjście **Technic Hub** za Serwo i stuknij **B**.

W trybie **Auto** przy każdym uruchomieniu programu silnik skrętu obraca się do obu ograniczników; środek staje się pozycją zerową, a zakres ruchu – kątem skrętu. Aby od razu to wypróbować, stuknij **Kalibruj teraz** w ustawieniach Serwo, gdy hub jest połączony. Jeśli kalibracja się nie powiedzie, sprawdź hub, silnik i to, czy układ kierowniczy rzeczywiście ma ograniczniki.

<Screenshot name="links-servo-settings" alt="Ustawienia bloku Serwo" width={900} />

Brak ograniczników? Użyj trybu **Ręczna**: ustaw koła prosto ręcznie, stuknij **Ustaw jako zero** i wybierz **Kąt**. Zobacz [Serwo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Wiersz 3: światła {#row-lights}

1. Przeciągnij **BTN1** do następnego pustego wiersza.
2. Przeciągnij **Zatrzask** z karty **Przetwarzanie**. Zamienia on przycisk chwilowy w przełącznik: naciśnij raz, aby włączyć, i jeszcze raz, aby wyłączyć.
3. Przeciągnij **Światło** z karty **Wyjścia**.
4. Przeciągnij wyjście **Technic Hub** za Światło i stuknij **C**.

<Screenshot name="tutorial-car-links-rows" alt="Trzy gotowe wiersze samochodu: jazda, skręcanie i światła" width={900} />

Gdy wszystkie trzy wiersze są gotowe, przycisk **Problemy** na górnym pasku (tuż przed **Uruchom**) pokazuje zielony znacznik. Czerwony „!” informuje, ile problemów zostało; stuknij go, a potem problem, aby przejść do wiersza. Zobacz [Uruchamianie i naprawianie problemów](/docs/Application/Links/Problems).

## 5. Uruchom i przetestuj {#run}

1. Postaw samochód na podstawce albo trzymaj go tak, aby koła nie dotykały stołu.
2. Naciśnij **Uruchom**. Silnik skrętu się skalibruje: obróci się w obie strony i wróci na środek.
3. Przesuwaj joystick w górę i w dół: samochód jedzie do przodu i do tyłu, płynnie ruszając i hamując. Przesuwaj go w lewo i w prawo: koła skręcają.
4. Naciśnij **BTN1**: światła się włączą. Naciśnij ponownie: zgasną.
5. Naciśnij **Zatrzymaj**, aby wrócić do edycji.

Podczas działania programu każde złącze między blokami pokazuje przechodzącą przez nie wartość, więc możesz śledzić sygnał od joysticka aż do huba.

<Screenshot name="links-live-values" alt="Działający program Szybkich połączeń z bieżącymi wartościami na złączach" width={900} />

Więcej w artykule [Sterowanie modelem (Uruchom)](/docs/Application/Profiles/PlayMode).

## 6. Dopracuj ustawienia {#tune}

Najpierw naciśnij **Zatrzymaj**: wierszy nie można edytować podczas działania programu.

- **Samochód jedzie do tyłu, gdy pchasz joystick w górę?** Dodaj **Odwróć** do wiersza 1. To samo działa w wierszu 2, jeśli koła skręcają w złą stronę.
- **Silnik buczy albo pełznie przy puszczonym joysticku?** Dodaj **Martwa strefa** do wiersza 1, przed Wygładzaniem. Domyślna **Strefa** 10 % jest dobra na początek.
- **Za szybko?** Dodaj **Ograniczenie** do wiersza 1, na przykład z **Maksimum** 50 %.
- **Za wolno reaguje?** Stuknij Wygładzanie i wybierz krótszy czas albo **Natychmiast**.

Dobra kolejność w wierszu jazdy to *Martwa strefa → Ograniczenie → Wygładzanie*. Wszystkie ustawienia: [Bloki przetwarzania](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Opcjonalnie: steruj gamepadem {#gamepad}

1. Sparuj gamepad w stylu Xbox lub PlayStation ze swoim urządzeniem w systemowych ustawieniach Bluetooth.
2. W edytorze otwórz **Gamepad** i włącz **Włącz bloki gamepada**.
3. W każdym wierszu przeciągnij wejście z panelu z powrotem na paletę, aby je usunąć, i przeciągnij na jego miejsce wejście **Gamepad**. Ustaw jego **Wejście**: **Lewy drążek Y** w wierszu 1, **Prawy drążek X** w wierszu 2 i **A** (**Krzyżyk** na PlayStation) w wierszu 3.

Każdy port może należeć tylko do jednego wiersza, więc wiersz steruje portem albo z panelu, albo z gamepada. Więcej w artykule [Gamepad](/docs/Application/Dashboard/Gamepad).

## Jeśli coś się nie rusza {#if-something-does-not-move}

1. Czy hub jest połączony? Sprawdź **Moje huby** i kropkę połączenia na bloku Hub.
2. Czy silniki są podłączone do portów wybranych w wierszach?
3. Czy przycisk **Problemy** pokazuje zielony znacznik i czy każdy wiersz jest włączony?
4. Czy program działa?
5. Uruchom program i obserwuj bieżące wartości: jeśli wartość na wejściu się zmienia, ale silnik się nie obraca, sprawdź hub i port.

Komunikat w rodzaju „Port B: to urządzenie nie może działać jako serwo (potrzebny silnik z enkoderem)” oznacza, że silnik na tym porcie nie ma enkodera. Więcej komunikatów i rozwiązań: [Uruchamianie i naprawianie problemów](/docs/Application/Links/Problems) oraz [Rozwiązywanie problemów](/docs/Help/Troubleshooting).

## 8. Zapisz i udostępnij {#save-and-share}

Nie ma przycisku Zapisz: profil sam zachowuje Twoje zmiany. Gdy jesteś zalogowany, [synchronizuje się](/docs/Application/Account/Sync) także z Twoimi innymi urządzeniami.

- **Udostępnij jako plik**: na stronie **Moje profile** stuknij **Udostępnij** na karcie profilu (**Udostępnij…** na komputerze). Otrzymasz plik `.dat`, który możesz wysłać znajomemu. Zobacz [Zarządzanie profilami](/docs/Application/Profiles/ManageProfiles).
- **Opublikuj w katalogu**: otwórz **Edytuj profil** i stuknij **Wyślij do katalogu**. Najpierw dodaj obraz, opis i hashtag. Zobacz [Katalog i publikowanie](/docs/Application/Profiles/Catalog).

## Co dalej {#next-steps}

- Pilnuj baterii: dodaj do panelu **Poziom baterii** albo tekstowy **Monitor** i wiersz *Technic Hub (Bateria) → Wskaźnik*. Zobacz [Wskaźniki i monitory](/docs/Application/Dashboard/Indicators).
- Zbuduj ten sam samochód w Blokach logicznych: [Ten sam samochód w Blokach logicznych](/docs/Tutorials/FirstCarBlocks).
- Więcej przepisów: czołg, dźwig i pociąg w [Przykładach](/docs/Application/Links/Examples).
- Nadaj panelowi nowy wygląd dzięki [motywom](/docs/Application/Themes/ThemesOverview).
