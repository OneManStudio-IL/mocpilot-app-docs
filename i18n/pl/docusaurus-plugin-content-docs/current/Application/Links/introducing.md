---
id: LinksIntroducing
title: Poznaj Szybkie połączenia
description: "Szybkie połączenia łączą kontrolery panelu z silnikami i światłami hubów wiersz po wierszu, bez kodu."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Szybkie połączenia

**Szybkie połączenia** to edytor programów MOCPilot, w którym nie piszesz kodu. Łączysz kontrolery panelu, gamepad lub czujniki huba z silnikami, światłami i wskaźnikami — **jeden wiersz naraz**. Jeśli znasz klasyczną aplikację Controlz, od razu poczujesz się jak w domu.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Wiersze Szybkich połączeń" style={{width: '100%', maxWidth: 720}} />

## Wiersz czyta się jak zdanie {#a-row-reads-like-a-sentence}

Każdy wiersz biegnie od lewej do prawej:

**Wejście → Przetwarzanie (opcjonalnie) → Operacja → Wyjście**

> *Joystick 1, oś Y* → *Wygładzanie* → *Silnik* → *Technic Hub, port A*
>
> „Gdy poruszam joystickiem w górę i w dół, silnik na porcie A się obraca, a rusza i zatrzymuje się płynnie”.

| Część | Co to jest | Przykłady |
|---|---|---|
| **Wejście** | skąd pochodzi wartość | kontroler panelu, symulowany pojazd, gamepad, przycisk lub czujnik huba |
| **Przetwarzanie** | zmienia wartość po drodze (żaden, jeden lub kilka bloków) | Odwróć, Ograniczenie, Martwa strefa, Próg, Wygładzanie, Zatrzask |
| **Operacja** | co ma zrobić hub | Silnik, Serwo, Silnik na czas, Światło, Obrót o stopnie, Do pozycji… |
| **Wyjście** | gdzie to się dzieje | **Hub** z jego portami albo wyjście bezpośrednie: Wskaźnik, Dioda LED huba, Matryca LED, Kalibracja serw |

Wyjścia bezpośrednie (Wskaźnik, Dioda LED huba, Matryca LED, Kalibracja serw) nie potrzebują operacji: *Bateria huba → Wskaźnik*.

## Edytor {#the-editor}

<Screenshot name="links-editor" alt="Edytor Szybkich połączeń z wierszami i paletą" width={900} />

- **Wiersze** wypełniają ekran i przewijają się w pionie. Nowe wiersze zaczynasz w ostatnim, pustym wierszu („Nowy wiersz: wejście”).
- **Paleta** na dole ma trzy karty: **Wejścia**, **Przetwarzanie** i **Wyjścia**. Powstaje na podstawie profilu: każdy kontroler panelu i każdy hub z „Moich hubów” pojawia się automatycznie, gamepad pojawia się po włączeniu bloków gamepada, a operacja pojawia się tylko wtedy, gdy potrafi ją wykonać któryś hub profilu.
- Stan wierszy na górnym pasku, tuż przed **Uruchom**, pokazuje zielony ptaszek, gdy wszystkie wiersze są gotowe, albo czerwony „!” z liczbą problemów. Na komputerze widać też napis **Wszystkie wiersze są gotowe** lub **Problemy: N**.

## Zbuduj wiersz {#build-a-row}

1. Przeciągnij wejście z karty **Wejścia** do pustego wiersza. Powstanie nowy wiersz.
2. W razie potrzeby przeciągnij za wejście bloki z karty **Przetwarzanie**.
3. Przeciągnij operację (na przykład **Silnik**) z karty **Wyjścia**.
4. Przeciągnij za operację wyjście **Hub** i dotknij portów, których chcesz użyć.
5. Dotknij dowolnego bloku, aby zmienić jego ustawienia: wybierasz z gotowych opcji, bez wpisywania.

Bloki pasują do siebie jak puzzle. Kształt każdego złącza pokazuje rodzaj sygnału, więc bloki, które nie mogą ze sobą współpracować, się nie łączą:

- **wartość** od −1 do 1 (osie joysticka, suwaki, pedały, czujniki);
- **wł./wył.** (przyciski, przełączniki, progi);
- złącze **operacja → hub**, dzięki któremu hub może stać tylko za operacją.

Aby usunąć blok, przeciągnij go z powrotem na paletę („Upuść tutaj, aby usunąć”) albo dotknij go i wybierz **Usuń blok**.

## Wiersze {#rows}

Dotknij numeru wiersza, aby otworzyć menu wiersza:

- **Wyłącz** / **Włącz**: wyłączony wiersz zostaje w programie, ale nie działa. Przydaje się przy eksperymentach.
- **Usuń wiersz**.

Możesz dodać dowolnie wiele wierszy.

## Uruchamianie {#run}

Naciśnij **Uruchom**. Gdy program działa, każde złącze pokazuje **bieżącą wartość**, która przez nie przepływa, więc widać dokładnie, gdzie sygnał się zatrzymuje. W trakcie działania programu nie można go edytować; naciśnij **Zatrzymaj**, aby wrócić do edycji. Zobacz [Uruchamianie i rozwiązywanie problemów](/docs/Application/Links/Problems).

## Cofanie {#undo}

**Cofnij** i **Ponów** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z albo przyciski na górnym pasku) cofają do 100 kroków. Nie są dostępne, gdy program działa.

## Więcej informacji {#read-more}

- [Wejścia](/docs/Application/Links/Inputs): kontrolery, pojazd, gamepad, przyciski i czujniki hubów
- [Przetwarzanie](/docs/Application/Links/Processing): Odwróć, Ograniczenie, Martwa strefa, Próg, Wygładzanie, Zatrzask
- [Operacje i wyjścia](/docs/Application/Links/Operations)
- [Blok Hub i porty](/docs/Application/Links/HubsAndPorts)
- [Uruchamianie i rozwiązywanie problemów](/docs/Application/Links/Problems)
- [Przykłady: samochód, czołg, dźwig, pociąg](/docs/Application/Links/Examples)
- Opis bloków: [wejścia](/docs/Application/Links/Blocks/InputBlocks), [przetwarzanie](/docs/Application/Links/Blocks/ProcessingBlocks), [operacje i wyjścia](/docs/Application/Links/Blocks/OutputBlocks)

## Szybkie połączenia czy Bloki logiczne? {#quick-links-or-logic-blocks}

Szybkie połączenia sprawdzają się najlepiej, gdy każdy kontroler po prostu czymś porusza. Gdy potrzebujesz logiki (sekwencji, warunków, zmiennych albo wieloetapowej reakcji na czujnik), użyj [Bloków logicznych](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Typ programu wybierasz przy tworzeniu profilu; zobacz [porównanie](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
