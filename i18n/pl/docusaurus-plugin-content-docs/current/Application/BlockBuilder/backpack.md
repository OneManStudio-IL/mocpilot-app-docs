---
id: Backpack
title: Plecak
description: "Przechowuj fragmenty programów z Bloków logicznych w Plecaku i wstawiaj je do dowolnego profilu na każdym ze swoich urządzeń."
---

import Screenshot from '@site/src/components/Screenshot';

# Plecak {#backpack}

**Plecak** to miejsce, w którym przechowujesz fragmenty programów z bloków, aby używać ich ponownie w innych profilach: procedurę skręcania, pokaz świateł, Mój blok, który napisałeś raz i chcesz mieć wszędzie. Zapisz stos bloków w Plecaku w jednym profilu, a potem wstaw go do dowolnego innego profilu – na tym urządzeniu lub na każdym urządzeniu, na którym jesteś zalogowany.

Plecak jest częścią edytora [Bloków logicznych](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profile Szybkich połączeń go nie mają.

<Screenshot name="backpack-panel" alt="Panel Plecaka obok programu z bloków" width={900} />

## Co przechowuje Plecak {#what-the-backpack-keeps}

Każdy element w Plecaku to **kopia** zapisanych bloków:

- **Stos**: wybrany blok razem ze wszystkim, co jest do niego dołączone poniżej i w środku – dokładnie tak, jak kopiuje go **Duplikuj**.
- **Mój blok**: jeśli zapiszesz blok `define …` [Mojego bloku](/docs/Application/BlockBuilder/Blocks/MyBlocks), Plecak przechowa całą definicję. Takie elementy są oznaczone jako **Mój blok**.

Element zapamiętuje też Moje bloki, których używają Twoje bloki (również pośrednio, przez inne Moje bloki), oraz nazwy zmiennych, list, wiadomości, pojazdów i dźwięków, do których się odwołują, dzięki czemu bloki działają po wstawieniu w innym miejscu.

Wstawione bloki stają się zwykłą częścią programu profilu. Nic w profilu nie zależy od Plecaka: usunięcie elementu lub zmiana jego nazwy nie zmienia programów, do których go wstawiłeś. Elementów nie można edytować w Plecaku. Aby zmienić element, wstaw go, edytuj bloki w programie i zapisz je ponownie w Plecaku jako nowy element.

## Zapisywanie bloków w Plecaku {#save-blocks}

1. W programie kliknij blok prawym przyciskiem myszy (komputer) albo dotknij go i przytrzymaj (telefon, tablet).
2. Wybierz **Dodaj do plecaka**.
3. Wpisz nazwę w polu **Nazwa bloków** i stuknij **Zapisz**.

Blok i wszystko, co jest do niego dołączone, trafia do Plecaka. Aby zapisać definicję Mojego bloku, otwórz menu jego bloku `define …`.

<Screenshot name="backpack-add" alt="Menu bloku z poleceniem Dodaj do plecaka i okno nazwy" width={900} />

## Otwieranie Plecaka {#open}

- **Komputer i edytor webowy**: przycisk **Plecak** na górnym pasku edytora, **Widok → Plecak** w menu albo **Ctrl+Shift+B** (**⌘⇧B** na Macu). Gdy okno jest wąskie, przycisk znajduje się w menu **Więcej**. Plecak otwiera się jako panel po prawej stronie edytora, obok [Monitora](/docs/Application/BlockBuilder/Editor#monitor), jeśli on też jest otwarty.
- **Telefon i tablet**: **Więcej → Plecak** na górnym pasku edytora. Plecak otwiera się jako panel nad edytorem.

Gdy Plecak jest otwarty, przycisk jest podświetlony. Naciśnij go ponownie, aby zamknąć Plecak.

Każdy element pokazuje obrazek, nazwę i liczbę bloków (**Bloki: N**). Notatka na dole panelu informuje, gdzie przechowywany jest Plecak (zobacz [niżej](#where-it-is-kept)).

## Wstawianie bloków do programu {#insert}

- **Stuknij element**: jego bloki pojawią się w widocznej części programu.
- **Przeciągnij element na program**: bloki trafią tam, gdzie je upuścisz. Przeciągaj w bok, w stronę programu; przeciąganie w górę lub w dół przewija listę.
- **Menu elementu (⋯)**: **Wstaw**, **Zmień nazwę…** lub **Usuń**.

Na telefonach i tabletach Plecak zamyka się po wstawieniu, abyś widział bloki. Jedno **Cofnij** usuwa wszystko, co zostało wstawione.

### Co się dzieje podczas wstawiania {#what-happens}

- **Moje bloki**: Mój blok, który profil już ma z taką samą zawartością, zostaje użyty ponownie, więc ponowne wstawienie tych samych bloków nie tworzy jego kopii. Jeśli inny Mój blok w profilu używa w środku tej samej nazwy, wstawiony blok dostaje własny. Wstawienie elementu z Moim blokiem, który już jest w profilu, nic nie robi i pokazuje **Już jest**: znajdziesz ten blok w **Moje bloki**.
- **Zmienne, listy, wiadomości i pojazdy**: jeśli profil ma taki element o tej samej nazwie, bloki go używają; w przeciwnym razie zostaje utworzony. Wartości zmiennych i zawartość list nie są kopiowane. Jeśli nazwa jest zajęta przez coś innego, zobaczysz komunikat w rodzaju *Nie udało się utworzyć zmiennej „speed”: nazwa jest zajęta*.
- **Dźwięki**: Twoje własne dźwięki są plikami profilu i nie są przechowywane w Plecaku. Jeśli profil nie ma dźwięku o tej nazwie, zobaczysz *Dźwięku „…” nie ma w tym profilu: wybierz dźwięk w blokach*. Wbudowane dźwięki działają wszędzie.
- **Bloki hubów i panelu**: bloków dla huba, kontrolera panelu lub gamepada, których ten profil nie ma, nie można wstawić. Zanim cokolwiek się zmieni, aplikacja pokazuje **Niektórych bloków nie można wstawić** z listą takich bloków i informacją, ile zostanie pominiętych, i pyta, czy wstawić pozostałe. Jeśli chcesz je zachować, najpierw dodaj hub lub kontroler panelu. Jeśli żaden z bloków nie pasuje do profilu, nic nie zostanie wstawione.

## Zmiana nazwy i usuwanie {#rename-delete}

Otwórz menu elementu (⋯):

- **Zmień nazwę…** zmienia nazwę elementu.
- **Usuń** usuwa go po potwierdzeniu (**Usunąć z plecaka?**). Programy, do których go wstawiłeś, zachowują swoje bloki.

Plecak nigdy sam nie usuwa elementów: usuwaj to, czego już nie potrzebujesz.

## Gdzie przechowywany jest Plecak {#where-it-is-kept}

- **Bez konta (gość)**: tylko na tym urządzeniu. Panel informuje: *Przechowywany na tym urządzeniu. Zaloguj się, aby mieć plecak na wszystkich urządzeniach.*
- **Po zalogowaniu**: także na Twoim koncie, więc masz ten sam Plecak na wszystkich urządzeniach, również w [edytorze webowym](/docs/Introducing/WebEditor). Panel informuje: *Przechowywany na Twoim koncie: ten sam plecak na wszystkich urządzeniach.* Zmiany wprowadzone na jednym urządzeniu pojawiają się na pozostałych.
- **Pierwsze logowanie**: elementy zapisane na tym urządzeniu w trybie gościa przenoszą się na Twoje konto.

Z Plecaka możesz korzystać offline. Zmiany są przechowywane na urządzeniu i wysyłane na konto, gdy połączenie wróci (w tym czasie panel pokazuje **Synchronizacja…**). Elementu, który wciąż pobiera się z konta, nie można jeszcze wstawić: aplikacja pokazuje **Jeszcze nie gotowe**, więc spróbuj ponownie za chwilę.

## Limity {#limits}

| | Limit |
|---|---|
| Elementy w Plecaku | 200 |
| Rozmiar jednego elementu | około 512 KB (bardzo duża część programu może się nie zmieścić: zapisz mniejszą część) |
| Nazwa elementu | do 100 znaków |

Jeśli Plecak na Twoim koncie jest pełny albo element jest dla niego za duży, element zostaje tylko na tym urządzeniu, a aplikacja Cię o tym informuje. Elementy zapisane w nowszej wersji aplikacji można wstawić dopiero po zaktualizowaniu aplikacji.

## Rozwiązywanie problemów {#troubleshooting}

| Komunikat | Co zrobić |
|---|---|
| **Plecak jest pełny (200 elementów). Usuń coś, czego nie potrzebujesz.** | Usuń elementy, których już nie używasz. |
| **Za dużo bloków do plecaka. Zapisz mniejszą część.** | Zapisz mniejszy stos albo podziel program na kilka elementów. |
| **Niektórych bloków nie można wstawić** | W profilu brakuje huba, kontrolera panelu lub gamepada, których potrzebują bloki. Dodaj go i wstaw ponownie albo wstaw pozostałe bloki. |
| **Już jest** | Ten Mój blok już jest w profilu: znajdziesz go w **Moje bloki**. |
| **Jeszcze nie gotowe** | Element wciąż pobiera się z Twojego konta. Poczekaj chwilę i spróbuj ponownie. |
| **Te bloki zostały zapisane w nowszej wersji aplikacji. Zaktualizuj aplikację, aby z nich korzystać.** | Zaktualizuj MOCPilot na tym urządzeniu. |
