---
id: DashboardOverview
title: Edytor panelu
description: "Panel MOCPilot: pole, siatka, górny pasek, tło i cofanie zmian."
---

import Screenshot from '@site/src/components/Screenshot';

# Edytor panelu {#dashboard-editor}

**Panel** to ekran, z którego sterujesz modelem: joysticki, suwaki, przyciski, monitory i inne elementy sterujące. Każdy profil ma jeden panel.

Otwórz go przyciskiem **Panel** na górnym pasku edytora (na komputerze ⌘2 / Ctrl+2). Na telefonie z wąskim ekranem jest on w menu **Więcej**.

- **Telefon i tablet**: panel otwiera się na pełnym ekranie nad edytorem.
- **Komputer**: panel otwiera się we własnym oknie **Panel**, więc możesz trzymać go obok programu.
- **Edytor webowy**: pływające okno, które możesz przeciągać i zmieniać jego rozmiar.

<Screenshot name="dashboard-edit" alt="Panel w trybie edycji z siatką kropek" width={900} />

## Pole i siatka {#the-field-and-the-grid}

- Pole ma zawsze proporcje **2:1** i dopasowuje się do ekranu, dzięki czemu panel wygląda tak samo na telefonie, tablecie i komputerze.
- W trybie edycji widoczna jest **siatka kropek** o wymiarach 40 × 20 komórek. Elementy sterujące przyciągają się do siatki.
- Elementy sterujące nie mogą na siebie nachodzić. Jeśli element się nie mieści, wraca na swoje miejsce.

## Górny pasek {#toolbar}

**Telefon i tablet**

| Przycisk | Co robi |
|---|---|
| ← | powrót do edytora programu |
| Cofnij / Ponów | cofa i ponawia zmiany na panelu |
| **Wybierz** | zaznacza kilka elementów sterujących, aby je razem zablokować, odblokować, usunąć lub edytować; **Gotowe** kończy zaznaczanie |
| ⚙ (Ustawienia panelu) | opcje tła i siatki (niżej) |
| **+** (Dodaj kontroler, z pomarańczowym pierścieniem) | otwiera paletę kontrolerów; zobacz [Dodawanie i rozmieszczanie elementów sterujących](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Uruchom** / **Zatrzymaj**: uruchamia i zatrzymuje program |

Podczas działania programu przyciski edycji są ukryte.

**Komputer i edytor webowy**

Górny pasek wygląda tak jak w edytorze:

- **Po lewej**: **Ekran główny** (zamyka profil), menu **Plik**, **Edycja** i **Widok**, a dalej **Cofnij** i **Ponów**.
- **Pośrodku**: nazwa profilu i **Bloki** (albo **Połączenia** w profilu Szybkich połączeń, ⌘1 / Ctrl+1), aby wrócić do programu. Sam panel nie ma tu przycisku: to strona, na której jesteś.
- **Po prawej**: **Wybierz**, **Ustawienia panelu** (⚙) i pomarańczowy przycisk **+ Kontroler** (Dodaj kontroler). W wąskim oknie nazwa profilu i przycisk **Bloki** się chowają, a z **+ Kontroler** zostaje tylko **+**.

Na komputerze pasek panelu nie ma przycisku **Uruchom**: uruchamiaj i zatrzymuj program w edytorze (⌘R / Ctrl+R, ⌘. / Ctrl+.). Gdy program działa, **Wybierz**, **Ustawienia panelu** i **+ Kontroler** są niedostępne.

Menu: **Plik** (Zamknij profil, Otwórz w osobnym oknie), **Edycja** (Cofnij, Ponów) i **Widok** (Bloki ⌘1, Panel ⌘2). W osobnym oknie Panelu pasek zamiast **Ekranu głównego** pokazuje tytuł okna, menu **Plik** ma polecenie **Zamknij okno**, a menu **Widok** i przycisku **Bloki** nie ma.

## Cofanie i ponawianie {#undo-and-redo}

Panel ma własną historię, niezależną od programu. Możesz cofnąć każde przesunięcie, zmianę rozmiaru, zmianę właściwości, dodanie i usunięcie.

## Ustawienia panelu {#dashboard-settings}

**Obraz tła**: stuknij **Zmień** i wybierz:

- **Wybierz gotowe**: gotowe tło dołączone do motywu. Galeria pokazuje tła motywów, których elementy sterujące są na tym panelu. Gotowe tło zawsze wypełnia ekran wokół pola, więc poniższe opcje go nie dotyczą.
- **Prześlij własne**: dowolny obraz z Twojego urządzenia. Jest zapisywany w profilu.

**Usuń** usuwa tło.

<Screenshot name="dashboard-backgrounds" alt="Ustawienia panelu z galerią gotowych teł" width={900} />

Dla własnego obrazu możesz też ustawić:

- **Tryb wypełnienia obrazu**: Rozciągnij, Zachowaj proporcje i dopasuj, Zachowaj proporcje i przytnij, Kafelkuj, Kafelkuj pionowo, Kafelkuj poziomo lub Dopełnij marginesami.
- **Obszar nadrzędny obrazu**: **Obszar roboczy** (tylko pole) lub **Cały ekran**.
- **Krycie obrazu**, **Włącz rozmycie obrazu** i **Siła rozmycia**: uspokajają tło, aby elementy sterujące lepiej się wyróżniały.

**Ukryj kropki**: ukrywa kropki siatki podczas działania profilu. W trybie edycji kropki pozostają widoczne, aby nadal można było wyrównywać elementy sterujące.

## Elementy sterujące a program {#controls-and-the-program}

Element sterujący podaje wartości; program decyduje, co one robią. Elementu sterującego używanego przez program nie można usunąć, dopóki program go używa. W Szybkich połączeniach usuń wiersze, które go używają; w Blokach logicznych usuń jego bloki.

## Więcej informacji {#read-more}

- [Dodawanie i rozmieszczanie elementów sterujących](/docs/Application/Dashboard/ArrangingControls): dodawanie, przesuwanie, rozmiary, blokowanie
- [Typy elementów sterujących](/docs/Application/Dashboard/ControlTypes)
- [Specjalne elementy sterujące](/docs/Application/Dashboard/SpecialControls): kierownica, pedały, skrzynia biegów, hamulec ręczny, kierunkowskazy, nastawnik jazdy
- [Właściwości elementów sterujących](/docs/Application/Dashboard/ControlProperties)
- [Wskaźniki i monitory](/docs/Application/Dashboard/Indicators)
