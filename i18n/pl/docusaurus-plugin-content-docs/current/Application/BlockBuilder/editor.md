---
id: Editor
title: Praca w edytorze
description: "Górny pasek, paleta, przeciąganie bloków, powiększenie, menu kontekstowe, cofanie, Monitor, Plecak, Ustawienia edytora i Kreator AI w Blokach logicznych."
---

import Screenshot from '@site/src/components/Screenshot';

# Praca w edytorze

<Screenshot name="blocks-editor" alt="Edytor Bloków logicznych" width={900} />

## Górny pasek {#top-bar}

- **Komputer i edytor webowy**: **Ekran główny** i menu po lewej, a obok nich **Cofnij** i **Ponów**. Pośrodku: nazwa profilu oraz **Panel**, **Huby** i **Gamepad**. Po prawej: **Kreator AI**, [**Plecak**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Więcej** (⋯), **Zdalne sterowanie** i pomarańczowy przycisk **Uruchom**. W wąskim oknie przyciski, które się nie mieszczą, przenoszą się do menu **Więcej**; zawsze jest w nim **Ustawienia edytora…**.
- **Telefon i tablet**: **Ekran główny** po lewej; po prawej **Cofnij**, **Ponów**, **Panel**, **Moje huby**, **Zdalne sterowanie**, **Więcej** oraz **Uruchom / Zatrzymaj**. W menu **Więcej** są **Kreator AI**, **Plecak**, **Monitor**, **Gamepad** i **Ustawienia edytora**.

Zobacz [Telefon, tablet i komputer](/docs/Introducing/Layouts#editor-top-bar), aby dowiedzieć się, jak pasek zwija się w wąskim oknie.

## Paleta i obszar programu {#palette-and-program-area}

- Paletę pokazujesz i ukrywasz poleceniem **Widok → Paleta bloków** (⌘P / Ctrl+P).
- Wybierz kategorię, przeciągnij blok do obszaru programu i upuść go pod innym blokiem, aby go dołączyć. Podgląd pokazuje, gdzie blok się przyczepi.
- Cały stos przeciągasz za jego górny blok; przeciągnięcie bloku ze środka zabiera go razem ze wszystkim, co jest pod nim.
- Aby usunąć bloki, przeciągnij je z powrotem na paletę.
- Zmienne, listy, wiadomości i Moje bloki tworzysz przyciskami w ich kategoriach (**Utwórz zmienną**, **Utwórz listę**, **Dodaj wiadomość**, **Stwórz blok**) albo z menu **Edycja → Nowa zmienna… / Nowa lista… / Nowa wiadomość… / Nowy blok…**. Dźwięki i pojazdy też mają własne przyciski: **Dodaj dźwięk** w kategorii [Dźwięki](/docs/Application/BlockBuilder/Blocks/Sounds) i **Utwórz pojazd** w kategorii [Symulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Powiększenie i przewijanie {#zoom-and-scroll}

- Zsuń lub rozsuń palce (na ekranie dotykowym) albo użyj poleceń **Widok → Powiększ / Pomniejsz / Rzeczywisty rozmiar** (⌘+ / ⌘− / ⌘0).
- Przeciągnij puste miejsce, aby przesunąć widok.
- Menu kontekstowe pustego miejsca zawiera **Powiększ**, **Pomniejsz**, **Resetuj powiększenie** i **Usuń N bloków**.

## Menu bloku {#block-menu}

Przytrzymaj blok (na ekranie dotykowym) lub kliknij go prawym przyciskiem myszy:

- **Edytuj**: zmiana jego wartości;
- **Duplikat**;
- **Usuń blok** / **Usuń N bloków**;
- **Dodaj do plecaka**: zachowuje blok i wszystko, co jest do niego dołączone, w [Plecaku](/docs/Application/BlockBuilder/Backpack);
- **O bloku**: otwiera opis bloku w tej dokumentacji;
- **Eksportuj blok jako SVG** / **Eksportuj wszystkie bloki jako SVG**: zapis obrazka do poradnika lub posta na forum.

<Screenshot name="blocks-block-menu" alt="Menu kontekstowe bloku w Blokach logicznych" width={900} />

Blok powiązany z kontrolerem panelu można usunąć dopiero po odłączeniu go od tego kontrolera.

## Cofanie i ponawianie {#undo-and-redo}

Użyj poleceń **Edycja → Cofnij / Ponów** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) lub przycisków **Cofnij** i **Ponów** na górnym pasku (na komputerze obok menu).

- Jedno przeciągnięcie to jeden krok; szybkie zmiany tej samej wartości łączą się w jeden krok.
- Cofanie działa nawet podczas działania programu.
- Tworzenie lub usuwanie zmiennych, list, wiadomości lub Moich bloków też jest krokiem; jego cofnięcie zatrzymuje działający program.
- Wartości zapisane w zmiennych i listach nie są cofane.
- Panel ma własną historię cofania.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Widok → Monitor**) pokazuje bieżące wartości zmiennych i list podczas działania programu. Jego przycisk jest na górnym pasku na komputerze i w menu **Więcej** na telefonie lub tablecie. Na komputerze możesz go otworzyć w osobnym oknie. To ogromna pomoc przy szukaniu błędów.

<Screenshot name="blocks-monitor" alt="Monitor pokazujący zmienne i listę podczas działania programu" width={900} />

## Plecak {#backpack}

**Plecak** (⇧⌘B / Ctrl+Shift+B, **Widok → Plecak**) przechowuje stosy bloków do ponownego użycia w dowolnym profilu: wybierz **Dodaj do plecaka** w menu bloku, a potem stuknij lub przeciągnij element, aby wstawić go do dowolnego programu. Jego przycisk jest obok **Monitora** na górnym pasku albo w menu **Więcej**. Zobacz [Plecak](/docs/Application/BlockBuilder/Backpack).

## Ustawienia edytora {#editor-settings}

Otworzysz je przez **Więcej → Ustawienia edytora** na górnym pasku (na komputerze także przez **Program → Ustawienia edytora…**).

- **Uruchamiaj blok kliknięciem**: kliknięcie bloku go uruchamia, więc możesz go przetestować osobno; jeśli program jest zatrzymany, to również go uruchamia.
- **Otwieraj program na środku**: po otwarciu profilu program jest pokazywany w skali 100% na środku obszaru roboczego (albo od lewego górnego rogu, jeśli jest większy), niezależnie od tego, gdzie go zostawiłeś podczas edycji. Dotyczy to wszystkich profili na tym urządzeniu.
- **Zatrzymaj porty huba po zatrzymaniu programu**: zatrzymuje wszystkie silniki i wyłącza wszystkie światła po naciśnięciu **Zatrzymaj**. Zostaw tę opcję włączoną, chyba że silniki muszą zachować swój stan.
- **Wybierz poziom bloków**: Początkujący, Zaawansowany lub Guru.

<Screenshot name="blocks-editor-settings" alt="Panel Ustawienia edytora w Blokach logicznych" width={900} />

## Poziomy bloków {#block-levels}

| Poziom | Pokazuje |
|---|---|
| **Początkujący** | najprostsze bloki; przejrzystą paletę dla dzieci i na pierwsze kroki |
| **Zaawansowany** | popularne bloki logiki i urządzeń |
| **Guru** | pełny zestaw bloków |

Poziom jest zapisywany w profilu. Bloki, które już są w programie, działają dalej po obniżeniu poziomu.

## Kreator AI {#ai-builder}

Z [MocPilot Pro](/docs/Application/Account/Pro) **Kreator AI** (przycisk z iskierkami na górnym pasku, **Więcej → Kreator AI** na telefonie lub tablecie, ⇧⌘I / Ctrl+Shift+I) konfiguruje huby, panel i program na podstawie opisu, który wpiszesz lub wypowiesz, a potem zmienia profil zgodnie z Twoimi prośbami. Działa w profilach Bloków logicznych i Szybkich połączeń. Zobacz [Kreator AI](/docs/Application/Profiles/AiBuilder).

### Jak uzyskać dobry wynik {#ai-builder-tips}

Podaj nazwę huba, powiedz, co jest podłączone do każdego portu i co ma robić, oraz jak chcesz tym sterować. Zobacz [Napisz dobrą prośbę](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menu na komputerze {#desktop-menus}

| Menu | Polecenia |
|---|---|
| Plik | Zamknij profil (⌘W) |
| Edycja | Cofnij, Ponów, Nowa zmienna…, Nowa lista…, Nowa wiadomość…, Nowy blok… |
| Widok | Paleta bloków (⌘P), [Plecak](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Powiększ, Pomniejsz, Rzeczywisty rozmiar |
| Program | Uruchom (⌘R), Zatrzymaj (⌘.), Ustawienia edytora… |

W systemie Windows używaj Ctrl zamiast ⌘ i Shift zamiast ⇧.
