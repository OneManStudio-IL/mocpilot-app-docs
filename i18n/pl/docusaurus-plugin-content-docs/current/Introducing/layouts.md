---
id: Layouts
title: Telefon, tablet i komputer
description: "Gdzie co jest w układach MOCPilot na telefon, tablet i komputer oraz menu i skróty klawiszowe na komputerze."
---

import Screenshot from '@site/src/components/Screenshot';

# Telefon, tablet i komputer {#phone-tablet-and-desktop}

MOCPilot ma trzy układy, a aplikacja wybiera jeden z nich automatycznie:

- **Telefon**: iPhone i telefony z Androidem.
- **Tablet**: iPad i tablety z Androidem (od 7 cali wzwyż).
- **Komputer**: komputery Mac i z Windows. [Edytor webowy](/docs/Introducing/WebEditor) w przeglądarce również korzysta z edytora komputerowego.

Profile, edytory i panel są wszędzie takie same; różni się tylko nawigacja.

## Telefon {#phone}

<Screenshot name="profiles-phone" alt="Strona Moje profile na telefonie z dolnym paskiem" width={360} />

- **Dolny pasek** zawiera **Profile**, **Ustawienia** i **Pomoc**, a po zalogowaniu także **Powiadomienia**.
- **Konto** znajduje się na górze **Ustawień**.
- Nagłówek **Moje profile** zawiera **Sortuj i filtruj**, **Połącz pilota** (ikona pilota), **+** (Nowy profil, Importuj profil…, Szukaj online) i pole wyszukiwania.
- Główne ekrany są w orientacji pionowej. Po otwarciu profilu aplikacja przechodzi w **poziomy tryb pełnoekranowy**, dzięki czemu edytor i panel zajmują cały ekran. Po zamknięciu profilu wraca orientacja pionowa.
- W edytorze okrągłe przyciski u góry dają szybki dostęp do: Ekran główny, Cofnij, Ponów, Kreator AI, Ustawienia edytora, Problemy (Szybkie połączenia), Gamepad, Moje huby, Zdalne sterowanie, Panel, Monitor (Bloki logiczne) oraz Uruchom / Zatrzymaj.

<Screenshot name="editor-phone" alt="Edytor profilu na telefonie z okrągłymi przyciskami u góry" width={900} />

## Tablet {#tablet}

<Screenshot name="profiles-tablet" alt="Strona Moje profile na tablecie z paskiem bocznym" width={900} />

- **Pasek boczny** po lewej zawiera **Profile**, **Katalog profili**, **Powiadomienia**, **Ustawienia** i **Pomoc**. Pod nimi jest karta **MocPilot Pro** i Twoje konto (**Zaloguj się** w trybie gościa). Pasek boczny można zwinąć do samych ikon.
- Nagłówek **Moje profile** zawiera **Nowy profil** (w jego menu są też Importuj profil…, Połącz pilota i Szukaj online), **Sortuj i filtruj**, **Filtruj według hashtagów**, **Połącz pilota** i pole wyszukiwania.
- Stuknij kartę profilu, aby ją zaznaczyć: na pasku u dołu pojawią się **Udostępnij**, **Edycja**, **Dodaj do ulubionych** i **Uruchom**. Stuknij kartę dwukrotnie, aby uruchomić profil. Przytrzymaj kartę, aby otworzyć jej menu, w którym jest też **Usuń profil**.
- Na szerokich ekranach Ustawienia i Pomoc otwierają się obok listy.
- Profil otwiera się w orientacji poziomej, a edytor ma te same okrągłe przyciski co na telefonie.

## Komputer (Mac i Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Moje profile na komputerze" width={900} />

- Po prawej stronie górnego paska: **Konto** (**Zaloguj się** w trybie gościa), **Powiadomienia** (po zalogowaniu), **Połącz pilota** (ikona pilota) i **Ustawienia** (koło zębate).
- Ustawienia, Pomoc, Konto, Nowy profil, Edytuj profil, Katalog profili i inne strony otwierają się jako **okna** nad listą profili.
- Kliknij kartę profilu, aby zobaczyć, co możesz z nim zrobić (**Udostępnij…**, **Edytuj…**, **Dodaj do ulubionych**, **Uruchom**); dwukrotne kliknięcie uruchamia profil. Kliknij kartę prawym przyciskiem, aby otworzyć jej menu, w którym jest też **Usuń profil**.
- W edytorze **Panel** otwiera się we **własnym oknie**, więc program i panel możesz oglądać obok siebie.

### Menu {#menus}

W Windows menu znajdują się po lewej stronie górnego paska aplikacji. Na Macu są na systemowym pasku menu u góry ekranu.

| Menu | Windows | Mac |
|---|---|---|
| **MOCPilot** (menu aplikacji) | — | O MOCPilot, Ustawienia…, Zakończ |
| **Plik** | Nowy profil, Importuj profil…, Szukaj online, Zakończ | Nowy profil, Importuj profil…, Szukaj online, Połącz pilota… |
| **Widok** | Pełny ekran | Włącz / wyłącz pełny ekran |
| **Okno** | Minimalizuj, Maksymalizuj / Przywróć | Minimalizuj |
| **Pomoc** | Pomoc MOCPilot, Zadaj pytanie, Zgłoś błąd, O MOCPilot | Pomoc MOCPilot, Zadaj pytanie, Zgłoś błąd |

Gdy profil jest otwarty, edytor ma własne menu **Plik**, **Edycja**, **Widok** i **Program** (zobacz [Menu na komputerze](/docs/Application/BlockBuilder/Editor#desktop-menus)), a okno Panelu ma menu **Plik**, **Edycja** i **Widok** (zobacz [Panel](/docs/Application/Dashboard/DashboardOverview)).

### Skróty klawiszowe {#keyboard-shortcuts}

Na Macu ⌘ (Command) działa tak jak Ctrl w Windows; ⇧ to Shift, ⌃ to Control.

**Wszędzie**

| Działanie | Windows | Mac |
|---|---|---|
| Ustawienia | Ctrl+2 | ⌘, |
| Włączenie / wyłączenie pełnego ekranu | F11 lub Alt+Enter | ⌃⌘F |
| Minimalizacja okna | — | ⌘M |
| Zakończenie | Alt+F4 | ⌘Q |

**Moje profile** (żaden profil nie jest otwarty)

| Działanie | Windows | Mac |
|---|---|---|
| Nowy profil | Ctrl+N | ⌘N |
| Import profilu | Ctrl+O | ⌘O |
| Wyszukiwanie profili | Ctrl+F | — |
| Profile / Ustawienia / Pomoc / Konto | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Edytor profilu**

| Działanie | Windows | Mac |
|---|---|---|
| Zamknięcie profilu | Ctrl+W | ⌘W |
| Uruchom / Zatrzymaj | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Cofnij / Ponów | Ctrl+Z / Ctrl+Shift+Z lub Ctrl+Y | ⌘Z / ⇧⌘Z |
| Pokazanie panelu | Ctrl+2 | ⌘2 |
| Moje huby | Ctrl+Shift+H | ⇧⌘H |
| Kreator AI | Ctrl+Shift+I | ⇧⌘I |
| Pokazanie / ukrycie palety bloków (Bloki logiczne) | Ctrl+P | ⌘P |
| Wyszukiwanie w palecie bloków (Bloki logiczne) | Ctrl+F | ⌘F |
| Monitor (Bloki logiczne) | Ctrl+Shift+M | ⇧⌘M |
| Powiększenie / pomniejszenie / rzeczywisty rozmiar (Bloki logiczne) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Panel**

| Działanie | Windows | Mac |
|---|---|---|
| Cofnij / Ponów | Ctrl+Z / Ctrl+Shift+Z lub Ctrl+Y | ⌘Z / ⇧⌘Z |
| Powrót do programu (gdy panel jest w oknie głównym) | Ctrl+1 | ⌘1 |
| Zamknięcie okna Panelu | — | ⌘W |
| Wyjście z trybu **Wybierz** lub zamknięcie panelu właściwości | Esc | Esc |
| Usunięcie elementu sterującego (panel właściwości otwarty) | Delete lub Backspace | Delete lub Backspace |
| Duplikowanie elementu sterującego (panel właściwości otwarty) | Ctrl+D | ⌘D |

Na tablecie z klawiaturą Ctrl+B (⌘B na iPadzie) pokazuje lub ukrywa pasek boczny.

## Edytor profilu w każdym układzie {#the-profile-editor-on-every-layout}

Edytor nie ma kart. **Program** (wiersze Szybkich połączeń lub Bloki logiczne) wypełnia ekran, a wszystko inne otwierają przyciski:

| Przycisk | Otwiera |
|---|---|
| **Moje huby** | [sloty na huby](/docs/Application/Hubs/ConnectingHubs) profilu |
| **Panel** | [panel](/docs/Application/Dashboard/DashboardOverview) |
| **Gamepad** | [ustawienia gamepada](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | wartości zmiennych i list (tylko Bloki logiczne) |
| **Ustawienia edytora** | [opcje edytora](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **Kreator AI** | [Kreator AI](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problemy** | wiersze, których nie da się uruchomić (tylko Szybkie połączenia) |
| **Zdalne sterowanie** | uruchomienie profilu na innym urządzeniu i sterowanie nim stąd (MocPilot Pro); zobacz [Zdalne sterowanie](/docs/Application/Profiles/RemoteControl) |
| **Uruchom / Zatrzymaj** | uruchamia i zatrzymuje program |
