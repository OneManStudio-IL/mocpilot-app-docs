---
id: SpecialControls
title: Specjalne elementy sterujące
description: "Kierownica, pedały, skrzynia biegów, hamulec ręczny, kierunkowskazy i nastawnik jazdy: jak ich używać, ich ustawienia, wyglądy, wartości i bloki."
---

import Screenshot from '@site/src/components/Screenshot';

# Specjalne elementy sterujące {#special-controls}

Specjalne elementy sterujące wyglądają i działają jak prawdziwe: kierownica, pedały, skrzynia biegów, hamulec ręczny, dźwignia kierunkowskazów i nastawnik jazdy lokomotywy. Każdy z nich to osobny produkt: kup te, których potrzebujesz, albo zdobądź wszystkie z [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Panel z kierownicą, pedałami, skrzynią biegów, hamulcem ręcznym, kierunkowskazami i nastawnikiem jazdy" width={900} />

| Element sterujący | Produkt | Nazwa na panelu | Co przekazuje programowi |
|---|---|---|---|
| [Kierownica](#steering-wheel) | Kierownica | STWHEEL | kąt skrętu, klakson |
| [Pedały](#pedals) | Pedały | PDLS | gaz i hamulec |
| [Manualna skrzynia biegów](#gear-shifter) | Skrzynia biegów | GEAR | bieg: R, N, 1…6 |
| [Automatyczna skrzynia biegów](#gear-shifter) | Skrzynia biegów | GEARA | wybierak: P, R, N, D |
| [Hamulec ręczny](#handbrake) | Hamulec ręczny | HBRK | siła, zaciągnięcie |
| [Kierunkowskazy](#turn-signals) | Kierunkowskazy | STALK | lewy kierunkowskaz, prawy kierunkowskaz, światła |
| [Nastawnik jazdy](#train-controller) | Nastawnik jazdy | TRTHR | pozycja jazdy, kierunek, siła pociągowa |

**Pokrętło** nie jest osobnym produktem: jest częścią każdego płatnego motywu. Zobacz [Typy elementów sterujących](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Dodawanie specjalnego elementu sterującego {#add-a-special-control}

1. Otwórz panel i stuknij **+** (**Dodaj kontroler**).
2. Na liście typów elementów przewiń do grupy **Pojazd i specjalne** i wybierz element.
3. Pasek wyglądów pokazuje wszystkie jego wyglądy. Wybierz jeden, a potem skonfiguruj element w sekcji **Konfiguruj**.
4. Stuknij **Dodaj do panelu**. W przypadku elementu, którego jeszcze nie posiadasz, stuknij **Kup** lub **Wszystko z MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paleta Dodaj kontroler z zaznaczoną kierownicą i jej wyglądami na pasku wyglądów" width={900} />

## Wyglądy {#looks}

Każdy specjalny element sterujący występuje w wielu **wyglądach**. Większość z nich pasuje do płatnych motywów (Wyścigi, Aura, Klasyczny, Hologram itd.), dzięki czemu kierownica, skrzynia biegów i hamulec ręczny mogą pasować do reszty panelu. Wygląd możesz zmienić w każdej chwili: zaznacz element i wybierz inny w opcji **Wygląd** na karcie **Styl**. Wygląd zmienia tylko obraz: wartości, bloki i program pozostają takie same.

Niektóre wyglądy po wybraniu ustawiają też pasujący do nich kolor akcentu.

## Ustawienia wszystkich specjalnych elementów sterujących {#settings-of-all-special-controls}

- **Wygląd** (karta Styl): patrz wyżej.
- **Kolor akcentu** (karta Styl): skrzynia biegów, hamulec ręczny, kierunkowskazy i nastawnik jazdy.
- **Zablokować kontroler** i **Interaktywność** (karta Ustawienia), jak w każdym elemencie sterującym. Zobacz [Właściwości elementów sterujących](/docs/Application/Dashboard/ControlProperties).

## Kierownica {#steering-wheel}

Połóż palec na kierownicy i obracaj ją wokół środka. Po puszczeniu wraca do środka. Naciśnij środek kierownicy, aby zatrąbić: to nie obraca kierownicy.

**Ustawienia**

- **Kąt kierownicy** (20–120°, domyślnie 60°): o ile trzeba obrócić kierownicę, aby osiągnąć pełny skręt. Nie zmienia wartości, które otrzymuje program.
- **Efekty dźwiękowe**: dźwięk klaksonu i dźwięki, które program odtwarza z kierownicy. Dźwięk w aplikacji musi być włączony.

**Wartości**: kąt skrętu od −100 (pełny skręt w lewo) przez 0 do 100 (pełny skręt w prawo); klakson ma wartość 100, dopóki go trzymasz, w przeciwnym razie 0.

**Wyglądy**: Pojazd terenowy, Ciężarówka, Supersamochód, Retro drewno, Kierownica wyścigowa, Rajdowy zamsz, Terenowy użytkowy, Koncept podświetlany, Ciągnik siodłowy, Rodzinny sedan, Auto miejskie, Buggy pustynny, Klasyczna 4x4, Maszyny budowlane, Audio Hi-Fi, Aura, Klocki, Rdzeń obwodu, Głęboki kosmos, Ciągnik siodłowy, Neo Orbita, Kabina terenowa, Wyścigi, Rock Crawler, Taktyczny, Klasyczny, Zachód słońca, Miami, Hi-tech, Hologram.

**Dźwięki** dla programu: Klakson samochodu, Klakson ciężarówki, Klakson auta sportowego.

**Szybkie połączenia**: wejście [Kierownica](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) z kanałami **Kąt skrętu** i **Klakson**.

## Pedały {#pedals}

Pedał hamulca jest po lewej, pedał gazu po prawej. Naciśnij pedał palcem: im wyżej na pedale jest palec, tym mocniej pedał jest wciśnięty. Przy dole jest wciśnięty lekko, przy górze – do oporu. Po puszczeniu pedał wraca do góry. Możesz naciskać oba pedały jednocześnie.

**Ustawienia**: **Efekty dźwiękowe**: pozwala programowi odtwarzać dźwięki pedałów. Dźwięk w aplikacji musi być włączony.

**Wartości**: gaz i hamulec, każdy od 0 do 100.

**Wyglądy**: Pojazd terenowy, Ciężarówka, Supersamochód, Retro chrom, Karbon i czerwień, Wyścigowe wiercone, Terenowy chwyt, Koncept podświetlany, Ciągnik siodłowy, Rodzinny sedan, Auto miejskie, Buggy pustynny, Klasyczna 4x4, Maszyny budowlane, Audio Hi-Fi, Aura, Klocki, Rdzeń obwodu, Głęboki kosmos, Ciągnik siodłowy, Neo Orbita, Kabina terenowa, Wyścigi, Rock Crawler, Taktyczny, Klasyczny, Zachód słońca, Miami, Hi-tech, Hologram.

**Dźwięki** dla programu: Hamulec samochodu, Hamulec auta sportowego, Hamulec pneumatyczny ciężarówki, Sygnał cofania.

**Szybkie połączenia**: wejście [Pedały](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) z kanałami **Pedał gazu** i **Pedał hamulca**.

:::tip Same pedały to jeszcze nie samochód
Pedały podają tylko, jak mocno każdy z nich jest wciśnięty. Jeśli wiersz przekazuje gaz bezpośrednio do silnika, silnik pracuje dokładnie tak mocno, jak wciśnięty jest pedał. Aby model stopniowo przyspieszał, toczył się siłą rozpędu, hamował i cofał, użyj [symulatora pojazdu](#vehicle-simulator).
:::

## Skrzynia biegów {#gear-shifter}

Produkt **Skrzynia biegów** zawiera dwa elementy sterujące: **Manualną skrzynię biegów** i **Automatyczną skrzynię biegów**.

### Manualna skrzynia biegów {#manual-gearbox}

Kulisa w układzie H z biegiem wstecznym i maksymalnie sześcioma biegami do przodu. Przeciągnij gałkę wzdłuż środkowego rzędu, a potem w górę lub w dół do wybranego biegu. Po puszczeniu gałka wskakuje na najbliższy bieg lub wraca na luz.

- **Liczba biegów** (2–6, domyślnie 6, karta Ustawienia): kulisa zmienia się razem z nią. Bieg wsteczny jest zawsze w skrajnej lewej kolumnie, luz na środku.
- **Wartości**: −1 = bieg wsteczny (R), 0 = luz (N), 1…6 = biegi do przodu.

### Automatyczna skrzynia biegów {#automatic-gearbox}

Wybierak z czterema pozycjami: **P** (parkowanie), **R** (bieg wsteczny), **N** (luz) i **D** (jazda). Sposób obsługi zależy od wyglądu:

| Wybierak | Jak go używać | Wyglądy |
|---|---|---|
| Dźwignia | przesuwaj uchwyt wzdłuż szczeliny; zatrzymuje się na najbliższej pozycji | Hi-tech |
| Pokrętło | obracaj pokrętło palcem; wskakuje z klikiem na P, R, N lub D | Klasyczny, Głęboki kosmos, Taktyczny, Maszyny budowlane, Audio Hi-Fi, Aura, Rdzeń obwodu, Rock Crawler, Kabina terenowa, Neo Orbita, Terenówka, Wół roboczy, Koncept, Sedan, Miejskie, Klasyczna 4x4 |
| Przyciski | stuknij P, R, N lub D | Wyścigi, Ciągnik siodłowy, Klocki, Ciężarówka, Retro, Rajdowy, Supersamochód, Formuła, Dalekobieżny, Buggy, Zachód słońca, Miami, Hologram |

- **Liczba biegów** (2–8, domyślnie 6, karta Ustawienia): przez ile biegów [symulator pojazdu](#vehicle-simulator) przełącza w trybie D. Gdy symulator wybierze bieg, wybierak go pokazuje, na przykład **D3**.
- **Wartości**: −2 = P, −1 = R, 0 = N, 1 = D. Wszystkie trzy wybieraki dają te same wartości, więc program działa z każdym wyglądem.

Obie skrzynie biegów mają te same wyglądy: Klasyczny, Wyścigi, Głęboki kosmos, Taktyczny, Ciągnik siodłowy, Maszyny budowlane, Audio Hi-Fi, Aura, Rdzeń obwodu, Rock Crawler, Kabina terenowa, Klocki, Neo Orbita, Ciężarówka, Retro, Rajdowy, Terenówka, Supersamochód, Formuła, Wół roboczy, Koncept, Dalekobieżny, Sedan, Miejskie, Buggy, Zachód słońca, Klasyczna 4x4, Miami, Hi-tech, Hologram.

**Szybkie połączenia**: wejście [Drążek zmiany biegów](/docs/Application/Links/Blocks/InputBlocks#controller-gear) z kanałami **Bieg** (manualna: bieg względem liczby biegów, wsteczny ujemny; automatyczna: kierunek) oraz **Kierunek (R − / naprzód +)**: −1 na biegu wstecznym, 0 na luzie i w pozycji parkowania, +1 na dowolnym biegu do przodu.

## Hamulec ręczny {#handbrake}

Dźwignia hamulca ręcznego. Chwyć dźwignię za uchwyt i pociągnij w dół. Siła hamowania zależy od tego, jak mocno pociągniesz. Po puszczeniu dźwignia wraca na miejsce.

Aby go **zablokować**, pociągnij dźwignię do końca, a potem przesuń palec wzdłuż dźwigni w stronę jej podstawy: uchwyt zsunie się w dół, a dźwignia pozostanie zablokowana. Aby **zwolnić** zablokowaną dźwignię, stuknij element lub przeciągnij dźwignię z powrotem.

**Wartości**: siła od 0 do 100 oraz to, czy dźwignia jest zablokowana.

**Wyglądy**: Klasyczny, Rajdowy, Ciężarówka, Retro, Głęboki kosmos, Taktyczny, Aura, Ciągnik siodłowy, Maszyny budowlane, Audio Hi-Fi, Neo Orbita, Kabina terenowa, Wyścigi, Klocki, Rdzeń obwodu, Rock Crawler, Terenówka, Supersamochód, Formuła, Wół roboczy, Koncept, Dalekobieżny, Sedan, Miejskie, Buggy, Zachód słońca, Klasyczna 4x4, Miami, Hi-tech, Hologram.

**Szybkie połączenia**: wejście [Hamulec ręczny](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) z kanałami **Hamulec ręczny zaciągnięty** (wł./wył., jak przełącznik) i **Siła hamulca ręcznego**.

## Kierunkowskazy {#turn-signals}

Dźwignia kierunkowskazów z włącznikiem świateł.

- Przeciągnij dźwignię **w górę**, aby włączyć lewy kierunkowskaz, i **w dół**, aby włączyć prawy. Zostaje tam, gdzie ją zostawisz; przeciągnij ją z powrotem na środek, aby wyłączyć kierunkowskaz.
- **Stuknij** dźwignię lub przycisk reflektora, aby włączyć lub wyłączyć światła. Nie przesuwa to dźwigni.

**Ustawienia**

- **Ikona: left**, **Ikona: light**, **Ikona: right** (karta Styl): ikony lampek kontrolnych.
- **Wyjścia kierunkowskazów migają** (karta Ustawienia, domyślnie włączone): wyjścia kierunkowskazów migają razem z lampką na dźwigni, więc podłączone do nich światło miga samo. Gdy opcja jest wyłączona, wyjścia świecą światłem ciągłym, dopóki kierunkowskaz jest włączony. Bloki zawsze widzą stan ciągły.

**Wartości**: lewy kierunkowskaz, prawy kierunkowskaz i światła, każde włączone lub wyłączone.

**Wyglądy**: Klasyczny, Wyścigi, Głęboki kosmos, Taktyczny, Ciągnik siodłowy, Maszyny budowlane, Audio Hi-Fi, Aura, Rdzeń obwodu, Rock Crawler, Kabina terenowa, Klocki, Neo Orbita, Ciężarówka, Retro, Rajdowy, Terenówka, Supersamochód, Formuła, Wół roboczy, Koncept, Dalekobieżny, Sedan, Miejskie, Buggy, Zachód słońca, Klasyczna 4x4, Miami, Hi-tech, Hologram.

**Szybkie połączenia**: wejście [Kierunkowskazy](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) z kanałami **Kierunkowskazy (lewy − / prawy +)** (dwa światła o przeciwnej polaryzacji na jednym porcie), **Lewy kierunkowskaz**, **Prawy kierunkowskaz** i **Światło**.

## Nastawnik jazdy {#train-controller}

Nastawnik jazdy lokomotywy z dźwignią jazdy i nawrotnikiem.

- **Dźwignia jazdy**: przeciągnij dźwignię w górę lub w dół. Ma 8 pozycji jazdy (0–8) i zostaje na pozycji, na której ją zostawisz.
- **Nawrotnik**: przeciągnij jego gałkę w górę, aby wybrać **do przodu**, lub w dół, aby wybrać **wstecz**; środek to **neutralny**. Gałka przeskakuje z pozycji na pozycję i nigdy nie zatrzymuje się pomiędzy nimi. Jak w prawdziwej kabinie, porusza się tylko wtedy, gdy dźwignia jazdy jest na 0.

**Wartości**: pozycja jazdy (0–8), nawrotnik (1 = do przodu, 0 = neutralny, −1 = wstecz) oraz **siła pociągowa**: pozycja ÷ 8 × 100 ze znakiem kierunku, od −100 do 100. Siła pociągowa może bezpośrednio napędzać silnik pociągu.

**Wyglądy**: Oryginał, Maszyny budowlane, Audio Hi-Fi, Aura, Klocki, Buggy, Rdzeń obwodu, Miejskie, Klasyczny, Koncept, Głęboki kosmos, Terenówka, Ciągnik siodłowy, Klasyczna 4x4, Ciężarówka, Miami, Neo Orbita, Supersamochód, Wół roboczy, Kabina terenowa, Wyścigi, Rajdowy, Rock Crawler, Sedan, Zachód słońca, Taktyczny, Dalekobieżny, Retro, Formuła, Hi-tech, Hologram.

**Szybkie połączenia**: wejście [Suwak](/docs/Application/Links/Blocks/InputBlocks#controller-train); podaje siłę pociągową.

## Bloki {#blocks}

Każdy specjalny element sterujący dodaje własne bloki do kategorii **Kontrolery ekranowe nawigacyjnego** w Blokach logicznych:

| Element sterujący | Zdarzenia | Wartości |
|---|---|---|
| Kierownica | *gdy kierownica … przesunięty / wciśnięte / puszczony* | *koło kierownicy …*, *kierownica … wciśnięte / puszczony?* |
| Pedały | *gdy pedały … jakikolwiek / hamulec / przyspieszenie przesunięty / wciśnięte / puszczony* | *pedały … przyspieszenie / hamulec*, *pedał … wciśnięte / puszczony?* |
| Skrzynie biegów | *gdy skrzynia biegów … zmienia bieg / zmienia bieg w górę / zmienia bieg w dół / wrzuca luz / wsteczny / parkowanie* | *bieg …*, *skrzynia biegów … na luzie / na wstecznym / na biegu do przodu / na parkowaniu?*, *biegi z …* |
| Hamulec ręczny | *gdy hamulec ręczny … ciągnięty / zablokowany / odblokowany / puszczony* | *siła hamulca ręcznego …*, *hamulec ręczny … zablokowany / odblokowany / ciągnięty?* |
| Kierunkowskazy | *gdy kierunkowskazy … lewy kierunkowskaz / prawy kierunkowskaz / światła włącza się / wyłącza się* | *kierunkowskazy … lewy kierunkowskaz / prawy kierunkowskaz / światła jest włączony?* |
| Nastawnik jazdy | *gdy nastawnik jazdy … zmieniona pozycja / podniesiona / obniżona, nastawnik na zero, nawrotnik przestawiony, dźwignia puszczona* | *nastawnik jazdy … siła pociągowa / pozycja jazdy / nawrotnik*, *nastawnik jazdy … do przodu / wstecz / neutralny / na pozycji 0?* |

Kierownica i pedały mają też blok *dźwięk … z …*: wybiera jeden z ich dźwięków dla bloków kategorii **Dźwięki**. Szczegóły: [Kontrolery ekranowe](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Symulator pojazdu {#vehicle-simulator}

Specjalne elementy sterujące podają tylko surowe dane wejściowe. **Symulator pojazdu** zamienia pedały, skrzynię biegów i hamulec ręczny w model, który jeździ jak samochód: przyspiesza z bezwładnością, toczy się siłą rozpędu, hamuje, cofa, zmienia biegi w trybie D i stoi na hamulcu ręcznym.

- **Szybkie połączenia**: użyj wejścia [Pojazd](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Wybierz z panelu **Pedały**, **Drążek zmiany biegów** i **Hamulec ręczny**, a także **Typ pojazdu** (Samochód, Pojazd terenowy, Samochód sportowy, Ciężarówka) i **Wyjście**: **Prędkość**, **Obroty silnika (obr./min)**, **Hamowanie** lub **Na hamulcu ręcznym**.
- **Bloki logiczne**: gdy na panelu są pedały, skrzynia biegów lub hamulec ręczny, pojawia się kategoria **Symulator**. Utwórz w niej pojazd (**Utwórz pojazd**) i umieść blok *jedź* pod zdarzeniem. Wstaw wartości w jego gniazda: *gaz*, *hamulec*, *bieg*, *z* (liczba biegów; pasuje tu blok *biegi z …*), *hamulec ręczny* i *zablokowany*. Pozostałe bloki Symulatora ustawiają typ pojazdu, bezwładność silnika i prędkość cofania, odczytują prędkość, obroty silnika i bieg oraz reagują, gdy pojazd rusza, zatrzymuje się, hamuje lub zmienia bieg.

Jak jeździ symulator:

- **Gaz** przyspiesza model z bezwładnością; po jego puszczeniu model toczy się siłą rozpędu. **Hamulec** go spowalnia.
- **Bez skrzyni biegów** przytrzymanie hamulca po zatrzymaniu się modelu sprawia, że model zaczyna cofać.
- **Manualna skrzynia biegów**: R cofa, N nie jedzie. Opcjonalnie każdy bieg ogranicza prędkość maksymalną.
- **Automatyczna skrzynia biegów**: R cofa, N nie jedzie, P trzyma model jak zablokowany hamulec ręczny. W trybie D symulator sam zmienia biegi w górę i w dół i pokazuje bieg na wybieraku.
- **Hamulec ręczny**: jego siła dodaje się do hamowania; zablokowany hamulec ręczny może utrzymać model w miejscu.
- **Typ pojazdu**: ciężarówka jest cięższa (większa bezwładność) i ma hamulec pneumatyczny; samochód sportowy szybko reaguje i szybciej cofa.

Ostatnich pedałów, skrzyni biegów ani hamulca ręcznego nie można usunąć, dopóki program używa bloków Symulatora.
