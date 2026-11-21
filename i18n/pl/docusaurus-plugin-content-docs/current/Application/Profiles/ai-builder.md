---
id: AiBuilder
title: Kreator AI
description: "Opisz swój model słowami lub głosem, a Kreator AI skonfiguruje huby, panel i program profilu z Blokami logicznymi lub Szybkimi połączeniami."
---

import Screenshot from '@site/src/components/Screenshot';

# Kreator AI {#ai-builder}

Opisz swój model własnymi słowami – pisząc lub mówiąc – a **Kreator AI** skonfiguruje za Ciebie profil: huby i porty, elementy sterujące na panelu oraz program. Działa w obu edytorach: w profilu z [Blokami logicznymi](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) buduje bloki, a w profilu z [Szybkimi połączeniami](/docs/Application/Links/LinksIntroducing) – wiersze. Potem możesz dalej z nim rozmawiać, aby zmieniać profil, albo edytować go samodzielnie.

Kreator AI jest częścią [MocPilot Pro](/docs/Application/Account/Pro) i działa w aplikacji oraz w [edytorze webowym](/docs/Introducing/WebEditor). Wymaga połączenia z internetem.

<Screenshot name="blocks-ai-builder" alt="Panel Kreatora AI obok programu" width={900} />

## Otwieranie Kreatora AI {#open-the-ai-builder}

1. Otwórz profil do edycji.
2. Naciśnij przycisk **Kreator AI** (ikona iskierek) na górnym pasku. Na komputerze możesz też nacisnąć ⇧⌘I / Ctrl+Shift+I.
3. Wpisz swoją prośbę w polu **Co AI ma zbudować lub zmienić?** i naciśnij **Wyślij** (albo Enter; Shift+Enter zaczyna nowy wiersz).

Bez MocPilot Pro przycisk pokazuje, co robi Kreator AI, wraz z przyciskami **Kup MocPilot Pro** i **Nie teraz**.

Gdzie otwiera się panel:

- **Telefon**: pełnoekranowa strona nad edytorem.
- **Tablet**: pływająca karta; przeciągnij ją za nagłówek na lewą lub prawą stronę.
- **Komputer**: karta po prawej. W aplikacji (nie w przeglądarce) możesz nacisnąć **Otwórz w osobnym oknie** w jej nagłówku i umieścić okno obok edytora.

Podczas pracy AI panel pokazuje, co się dzieje (**Myślę o Twoim modelu…**, **Sprawdzam profil…** itd.). Zmiany pojawiają się w edytorze, gdy tylko AI skończy, razem z krótkim podsumowaniem tego, co się zmieniło. Gdy panel jest pusty, proponuje kilka przykładowych próśb: stuknij jedną, aby wstawić ją do pola tekstowego, a potem wyślij bez zmian albo najpierw ją zmień.

Rozmowa jest zapamiętywana dla każdego profilu, więc możesz zamknąć panel i wrócić do niej później.

## Jak napisać dobrą prośbę {#ai-builder-tips}

:::tip Podaj, jakiego huba używasz, co jest podłączone do każdego portu i co ma robić
Jednozdaniowa prośba typu „samochód ze światłami” nie wystarczy: AI musi zgadywać hub, porty i to, co robi każdy silnik, a wynik prawdopodobnie będzie wymagał poprawek. Podaj:

- **Hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Co jest na każdym porcie**: silnik napędowy, silnik skrętu (serwo), światła, czujnik.
- **Co ma robić każdy z nich**: jechać, skręcać z kalibracją, włączać i wyłączać się, mieć ograniczenie prędkości.
- **Jak chcesz sterować**: joystickami, suwakami, przyciskami, gamepadem.
:::

Powiedz to tak, jak wyjaśniłbyś to znajomemu. Możesz pisać w swoim języku.

Jeśli coś nadal jest nie tak, powiedz AI, co zmienić, zamiast zaczynać od nowa.

## Przykładowe prośby {#example-requests}

**Samochód**: „Auto z Technic Hub: silnik napędu na porcie A, silnik skrętu na porcie C działa jako serwo, światła na porcie D. Joystick skrętu po lewej, gaz po prawej, przycisk włącza światła.”

**Dźwig**: „Dźwig z Technic Hub: silnik obrotu na porcie A, silnik wysięgnika na porcie B, wciągarka haka na porcie C. Suwak do obrotu, przyciski góra/dół do wysięgnika, joystick do haka, prędkość wysięgnika ograniczona do 50%.”

**Pociąg**: „Pociąg City z City Hub: silnik pociągu na porcie A, światła na porcie B. Przełącznik krokowy do prędkości, prędkościomierz i przycisk do świateł.”

## Zmiana istniejącego profilu {#change-an-existing-profile}

Otwórz Kreator AI w profilu, który już masz – nawet zbudowanym ręcznie – i powiedz, co zmienić. AI widzi bieżące huby, panel i program i je edytuje:

- „Zwolnij skręcanie.”
- „Dodaj przycisk stop.”
- „Skopiuj sterowanie na mój gamepad.”
- „Ogranicz prędkość wysięgnika do 50%.”

Możesz też zadawać pytania o profil, na przykład „Na którym porcie są światła?”. AI odpowie w panelu i zostawi profil bez zmian.

## Co dzieje się z Twoim profilem {#what-happens-to-your-profile}

- AI zmienia otwarty profil bezpośrednio: huby, panel i program są aktualizowane od razu. Jeśli program działa, zostaje zatrzymany.
- AI pracuje z typem programu danego profilu: w profilu z Blokami logicznymi pisze bloki, w profilu z Szybkimi połączeniami – wiersze. Nigdy nie zamienia jednego w drugie. Jeśli prośba wymaga czegoś, czego wiersze Szybkich połączeń nie potrafią, AI poinformuje Cię, że potrzebny jest profil z Blokami logicznymi.
- Części profilu, których AI nie musi zmieniać, pozostają bez zmian.
- **Cofnij ostatnią zmianę AI** (przycisk cofania w nagłówku panelu) przywraca profil do stanu sprzed ostatniej zmiany AI. Naciśnij go ponownie, aby cofnąć się dalej, maksymalnie o 10 zmian. Historia cofania jest czyszczona, gdy otworzysz inny profil.
- W każdej chwili możesz dalej samodzielnie edytować profil.

## Wprowadzanie głosowe {#voice-input}

Naciśnij **Dyktuj** (przycisk mikrofonu) i wypowiedz prośbę; tekst pojawi się w polu i możesz go poprawić przed wysłaniem. Naciśnij przycisk ponownie, aby zakończyć. Jeśli dostępnych jest kilka języków, mały przycisk języka obok mikrofonu przełącza język dyktowania; aplikacja zapamiętuje Twój wybór.

| Gdzie | Jak |
|---|---|
| iPhone, iPad, Mac | **Dyktuj**; za pierwszym razem zezwól na dostęp do mikrofonu i rozpoznawanie mowy |
| Android | **Dyktuj**; za pierwszym razem zezwól na dostęp do mikrofonu |
| Windows | naciśnij **Win+H**, aby dyktować za pomocą pisania głosowego Windows (przycisk mikrofonu o tym przypomina) |
| Edytor webowy | **Dyktuj** w Chrome, Edge i Safari; zezwól stronie na dostęp do mikrofonu. Firefox nie obsługuje dyktowania |

Komunikaty wprowadzania głosowego:

| Komunikat | Co zrobić |
|---|---|
| **Zezwól MOCPilot na dostęp do mikrofonu w ustawieniach systemu** | Włącz dostęp do mikrofonu dla MOCPilot w ustawieniach systemu |
| **Zezwól MOCPilot na rozpoznawanie mowy w ustawieniach systemu** | Na urządzeniu Apple włącz rozpoznawanie mowy dla MOCPilot w ustawieniach systemu |
| **Zezwól tej stronie na dostęp do mikrofonu w przeglądarce** | Zezwól na mikrofon w ustawieniach strony w przeglądarce |
| **Nic nie usłyszano** | Naciśnij **Dyktuj** i powiedz to jeszcze raz |
| **Wprowadzanie głosowe wymaga połączenia** | Połącz się z internetem albo wpisz prośbę |
| **Rozpoznawanie mowy dla tego języka jest teraz niedostępne** | Zmień język dyktowania albo wpisz prośbę |
| **Nie znaleziono mikrofonu** / **Wprowadzanie głosowe nie jest dostępne na tym urządzeniu** | Wpisz prośbę |

## Limity {#limits}

- Około 30 próśb dziennie oraz limit miesięczny. Nagłówek panelu pokazuje, ile już wykorzystałeś: **Dziś 5/30 · Miesiąc 12%**.
- W okresie próbnym liczba próśb do AI jest ograniczona; będą znów dostępne po rozpoczęciu subskrypcji.
- Jedna prośba naraz: zaczekaj na odpowiedź, zanim wyślesz następną.
- Kreator AI tylko tworzy i edytuje profile. Nie odpowiada na pytania na inne tematy.

## Komunikaty o błędach {#error-messages}

| Komunikat | Co zrobić |
|---|---|
| **Kreator AI jest niedostępny** / **Nie udało się połączyć z usługą AI. Sprawdź połączenie z internetem i spróbuj ponownie.** | Sprawdź połączenie z internetem i ponownie otwórz panel |
| **Brak połączenia z usługą AI. Sprawdź połączenie z internetem i spróbuj ponownie.** | Sprawdź połączenie i wyślij prośbę ponownie |
| **Połączenie z usługą AI zostało przerwane…** | Gdy znów będziesz online, odpowiedź pojawi się w panelu; możesz też wysłać prośbę ponownie |
| **AI nie odpowiedziała na czas. Wyślij prośbę ponownie.** / **Prośba zaginęła, wyślij ją ponownie** | Wyślij prośbę ponownie |
| **AI nie udało się zbudować działającego profilu dla tej prośby. Spróbuj powiedzieć to inaczej.** | Przeformułuj prośbę: podaj hub, porty i to, co robi każdy z nich |
| **Profil jest za duży, by zbudować go za jednym razem. Poproś o mniej rzeczy naraz.** | Podziel prośbę na mniejsze kroki |
| **AI odrzuciła tę prośbę.** | Przeformułuj prośbę tak, aby dotyczyła profilu |
| **Osiągnięto dzisiejszy limit próśb do AI. Spróbuj jutro.** | Zaczekaj do jutra albo edytuj profil samodzielnie |
| **Osiągnięto miesięczny limit AI.** | Limit odnowi się w przyszłym miesiącu |
| **Wykorzystano wszystkie zapytania do AI z okresu próbnego. Będą dostępne ponownie po rozpoczęciu subskrypcji.** | Zaczekaj na rozpoczęcie subskrypcji |
| **Kreator AI tylko tworzy i edytuje profile. Zbyt wiele próśb na inne tematy: spróbuj za godzinę.** | Zaczekaj godzinę i pytaj tylko o profil |
| **Zbyt wiele zapytań do AI w tej chwili. Spróbuj ponownie za minutę.** | Spróbuj ponownie za minutę |
| **Poprzednia prośba jest jeszcze przetwarzana.** | Zaczekaj na odpowiedź |
| **Usługa AI jest chwilowo niedostępna. Spróbuj później.** / **Masz MocPilot Pro. Kreator AI jest teraz niedostępny, spróbuj później.** | Spróbuj później |
| **Odpowiedź dotyczyła innego profilu** | Otworzyłeś inny profil, gdy AI pracowała, więc zmiana nie została zastosowana. Otwórz ponownie pierwszy profil i powtórz prośbę |
| **Najpierw otwórz profil do edycji** | Otwórz profil w edytorze, a potem wyślij prośbę |
| **Nie udało się zaktualizować profilu w edytorze** / **Nie udało się cofnąć zmiany** | Spróbuj ponownie; jeśli problem się powtarza, zamknij i ponownie otwórz profil |
