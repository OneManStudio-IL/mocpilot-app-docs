---
id: OutputBlocks
title: Bloki operacji i wyjść
description: "Opis wszystkich operacji i wyjść Szybkich połączeń: Silnik, Serwo, Światło, operacje Technic Move, BuWizz i Mould King, Hub, Wskaźnik, Dioda LED huba, Matryca LED, Kalibracja serw."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloki operacji i wyjść

Karta **Wyjścia** w palecie zawiera operacje i wyjścia. Jak ich używać: [Operacje i wyjścia](/docs/Application/Links/Operations).

- **Operacja** określa, co zrobić. Musi po niej nastąpić wyjście [Hub](#hub-out), które określa, gdzie.
- **Wyjście bezpośrednie** ([Wskaźnik](#dash-indicator), [Dioda LED huba](#hub-led), [Matryca LED](#hub-matrix), [Kalibracja serw](#cmd-calibrate)) samo kończy wiersz; wiersz nie może mieć operacji.

**Silnik**, **Serwo**, **Silnik na czas** i **Światło** są zawsze w palecie. Pozostałe operacje pojawiają się tylko wtedy, gdy potrafi je wykonać któryś hub profilu.

„Włączone” oznacza poniżej włączony sygnał wł./wył. albo wartość co najmniej 0,5 (o dowolnym znaku).

## Operacje dla portów {#operations-for-ports}

### Silnik {#op-motor}

Obraca silnik zgodnie z wartością wejścia: im dalej wychylisz, tym szybciej; 0 go zatrzymuje.

- Przyjmuje: wartość lub wł./wył. (wł. = pełna prędkość).
- **Przy zatrzymaniu**: **Domyślne huba** (domyślnie), **Toczenie**, **Hamulec** lub **Utrzymaj pozycję**.
- **Przyspieszenie huba**: **Domyślne huba** (domyślnie), **Szybko**, **Zrównoważone**, **Wygładzanie**, **Wolno** lub **Bardzo wolno**: własna rampa huba. Aby ustawić własną rampę, użyj bloku [Wygładzanie](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Wykrywanie zablokowania**: **Domyślne huba** (domyślnie), **Wł.** lub **Wył.**
- Huby: dowolny hub z portami. **Przy zatrzymaniu** i **Przyspieszenie huba** wymagają huba ze sterowaniem pozycją (nie SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King); **Wykrywanie zablokowania** wymaga Robot Inventor. W Technic Move Hub operacja Silnik napędza samochód.

### Serwo {#op-servo}

Skręca za pomocą silnika z enkoderem: wejście −1…1 obraca silnik do pozycji *środek + wartość × kąt*, a 0 przywraca go na środek.

- Przyjmuje: wartość lub wł./wył.
- **Kalibracja**: **Ręczna** (domyślnie) lub **Auto**.
- **Kąt**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 obrót, ±2 obroty, ±3 obroty lub ±5 obrotów (domyślnie ±90°). Tylko w trybie Ręczna.
- **Środek**: −20°, −10°, −5°, 0°, +5°, +10° lub +20° (domyślnie 0°). Tylko w trybie Ręczna.
- **Prędkość obrotu**: 25, 50, 75 lub 100 % (domyślnie 100 %).
- Ręczna: zero to położenie silnika w chwili włączenia albo pozycja ustawiona przyciskiem **Ustaw jako zero** (wcześniej dostrój ją za pomocą **◀ 5°** / **5° ▶**).
- Auto: przy każdym uruchomieniu silnik obraca się do obu ograniczników; środek staje się zerem, a zakres ruchu — kątem. **Kalibruj teraz** uruchamia kalibrację od razu. Układ kierowniczy musi mieć ograniczniki.
- Huby i porty: silnik z enkoderem w hubie ze sterowaniem pozycją (nie SBrick, BuWizz 2.0, WeDo 2.0 ani Mould King). W Technic Move Hub operacja Serwo obraca zębatkę skrętu huba, którą hub kalibruje sam.

<Screenshot name="links-servo-settings" alt="Ustawienia bloku Serwo" width={900} />

### Silnik na czas {#op-timed}

Obraca silnik przez ustalony czas za każdym razem, gdy wejście się włącza. Prędkość i kierunek zależą od wartości wejścia w tym momencie.

- Przyjmuje: wartość lub wł./wył.
- **Czas**: 0,5, 1, 2, 3, 5 lub 10 s (domyślnie 1 s).
- Huby: dowolny hub z portami; w Technic Move Hub napędza samochód.

### Obrót o stopnie {#op-degrees}

Obraca silnik o ustalony kąt za każdym razem, gdy wejście się włącza. Ujemne wejście obraca go w drugą stronę.

- Przyjmuje: wartość lub wł./wył.
- **Stopnie**: 45°, 90°, 180°, 1 obrót, 2 obroty, 3 obroty, 5 obrotów lub 10 obrotów (domyślnie 1 obrót).
- **Prędkość**: 25, 50, 75 lub 100 % (domyślnie 50 %).
- Huby i porty: silnik z enkoderem w hubie ze sterowaniem pozycją.

### Do pozycji {#op-goto}

Obraca silnik do pozycji absolutnej, gdy wejście się włącza, i do innej, gdy się wyłącza. Wybiera najkrótszą drogę.

- Przyjmuje: wartość lub wł./wył.
- **Pozycja po włączeniu**: 0°, 45°, 90°, 135°, 180°, 225°, 270° lub 315° (domyślnie 90°).
- **Pozycja po wyłączeniu**: **Bez ruchu** lub jedna z tych samych pozycji (domyślnie 0°).
- **Prędkość**: 25, 50, 75 lub 100 % (domyślnie 50 %).
- Huby i porty: silnik kątowy (pozycja absolutna) w hubie ze sterowaniem pozycją.

### Światło {#op-light}

Steruje światłami LEGO® na porcie.

- Przyjmuje: wartość lub wł./wył. Przy wartości jasność podąża za nią (−1 i 1 to pełna jasność).
- **Jasność**: 25, 50, 75 lub 100 % (domyślnie 100 %).
- **Miganie: wł.**: **Bez migania** (domyślnie), 0,25, 0,5, 1 lub 2 s: jak długo światło świeci w każdym mignięciu.
- **Miganie: wył.**: **Jak wł.** (domyślnie), 0,25, 0,5, 1 lub 2 s: jak długo pozostaje zgaszone.
- Huby: dowolny hub z portami z wyjątkiem WeDo 2.0. W Technic Move Hub operacja Światło włącza światła samochodu.

### Kolor portu {#op-portcolor}

Ustawia kolor diod LED portów BuWizz 3.0 Pro.

- Przyjmuje: wartość lub wł./wył.
- **Kolor**: **Z listy** (domyślnie) lub **RGB**.
- **Kolor po włączeniu** (domyślnie Czerwony) i **Kolor po wyłączeniu** (domyślnie Wył.): Wył., Różowy, Fioletowy, Niebieski, Jasnoniebieski, Jasnozielony, Zielony, Żółty, Pomarańczowy, Czerwony, Biały.
- **Czerwony**, **Zielony**, **Niebieski** (RGB): 0, 32, 64, 128, 192 lub 255 (domyślnie 255, 0, 0).
- Huby i porty: BuWizz 3.0 Pro, porty 1–4. Diody gasną, gdy program się zatrzymuje.

### Światła czujnika {#op-sensorlights}

Zapala cztery segmenty wokół „oczu” czujnika odległości Technic, dopóki wejście jest włączone.

- Przyjmuje: wartość lub wł./wył.
- **Światła**: **Wszystkie** (domyślnie), **Góra**, **Dół**, **Lewo**, **Prawo** lub **Przekątna**.
- **Jasność**: 25, 50, 75 lub 100 % (domyślnie 100 %).
- Huby i porty: Robot Inventor, jeden port z czujnikiem odległości. Światła gasną, gdy program się zatrzymuje.

## Operacje dla całego huba {#operations-for-the-whole-hub}

Blok Hub za tymi operacjami nie przyjmuje portów.

### Hamulec {#op-brake}

Hamuje samochód, dopóki wejście jest włączone.

- Przyjmuje: wartość lub wł./wył. Brak ustawień.
- Huby: Technic Move.

### Boost {#op-boost}

Przełącza hub w tryb mocy Boost, dopóki wejście jest włączone, i z powrotem w normalny, gdy się wyłącza.

- Przyjmuje: wartość lub wł./wył. Brak ustawień.
- Huby: Technic Move.

### Impuls mocy {#op-pulse}

Wysyła jeden impuls mocy za każdym razem, gdy wejście się włącza: silniki pracują z maksymalną mocą przez około dwie sekundy.

- Przyjmuje: wartość lub wł./wył. Brak ustawień.
- Huby: Technic Move z konfiguracją **Batmobile™ Tumbler**; zobacz [Konfiguracje Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Tryb mocy {#op-powermode}

Ustawia tryb mocy BuWizz 2.0, gdy wejście się włącza, oraz — jeśli go wybierzesz — gdy się wyłącza.

- Przyjmuje: wartość lub wł./wył.
- **Tryb po włączeniu**: **Wolno**, **Normalny** (domyślnie), **Szybko** lub **Ludicrous**.
- **Tryb po wyłączeniu**: **Bez zmian** (domyślnie) lub jeden z trybów.
- Huby: BuWizz 2.0.

### Kanał {#op-channel}

Przełącza kanał sterowania huba Mould King, gdy wejście się włącza, oraz — jeśli go wybierzesz — gdy się wyłącza.

- Przyjmuje: wartość lub wł./wył.
- **Kanał po włączeniu**: **A** (domyślnie), **B** lub **C**.
- **Kanał po wyłączeniu**: **Bez zmian** (domyślnie), **A**, **B** lub **C**.
- Huby: Mould King 4.0 i 6.0.

## Wyjścia {#outputs}

### Hub {#hub-out}

Miejsce, w którym wykonuje się operacja: hub i jego porty. Na każdy hub profilu przypada jeden blok Hub.

- **Hub**: hub profilu.
- **Porty**: jeden lub więcej portów tego huba (A–D w większości hubów i w SBrick, A–F w Robot Inventor i Mould King 6.0, 1–4 w BuWizz 2.0, 1–4 oraz A i B w BuWizz 3.0 Pro). Port może należeć tylko do jednego wiersza.
- Przyjmuje: operację. Technic Move Hub i operacje dla całego huba nie przyjmują portów.
- Więcej: [Blok Hub i porty](/docs/Application/Links/HubsAndPorts).

### Wskaźnik {#dash-indicator}

Pokazuje wartość na monitorze panelu bez zmian.

- Przyjmuje: wartość lub wł./wył., bez operacji przed sobą.
- **Wskaźnik panelu**: **Monitor tekstu** (Monitor), **Monitor wartości** (Poziom baterii, Prędkościomierz) lub **Monitor nachylenia** na panelu.
- **Oś**: **Nachylenie X** lub **Nachylenie Y**, tylko dla Monitora nachylenia (jeden wiersz na oś).
- Monitor tekstu tuż za czujnikiem huba pokazuje rzeczywistą wartość z jednostką.

### Dioda LED huba {#hub-led}

Kolorowa lampka stanu huba: jeden kolor, gdy wejście jest włączone, inny, gdy jest wyłączone.

- Przyjmuje: wartość lub wł./wył., bez operacji przed sobą.
- **Hub**: hub z kolorową diodą LED.
- **Kolor**: **Z listy** (domyślnie) lub **RGB**.
- **Kolor po włączeniu** (domyślnie Czerwony) i **Kolor po wyłączeniu** (domyślnie Wył.): Wył., Różowy, Fioletowy, Niebieski, Jasnoniebieski, Jasnozielony, Zielony, Żółty, Pomarańczowy, Czerwony, Biały.
- **Czerwony**, **Zielony**, **Niebieski** (RGB): 0, 32, 64, 128, 192 lub 255 (domyślnie 255, 0, 0).
- Huby: huby LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, pilot Powered Up); nie BuWizz, SBrick ani Mould King.

### Matryca LED {#hub-matrix}

Matryca świetlna huba.

- Przyjmuje: wartość lub wł./wył., bez operacji przed sobą.
- **Hub**: hub z matrycą LED.
- **Pokaż**: **Pasek poziomu** (domyślnie; wiersze zapalają się od dołu zgodnie z wartością), **Liczba** (wartość od −100 do 100) lub **Obraz po włączeniu**.
- **Obraz**: **Serce** (domyślnie), **Uśmiech**, **Smutek**, **Ptaszek**, **Krzyżyk**, **Strzałka w górę**, **Strzałka w dół**, **Strzałka w lewo**, **Strzałka w prawo** lub **Wszystko wł.**
- **Orientacja**: **Bez zmian** (domyślnie), **Pionowo**, **Do góry nogami**, **Lewo** lub **Prawo**.
- Huby: Robot Inventor. Matryca jest czyszczona, gdy program się zatrzymuje.

### Kalibracja serw {#cmd-calibrate}

Za każdym razem, gdy wejście się włącza, każde [Serwo](#op-servo) w trybie **Auto** w programie kalibruje się ponownie.

- Przyjmuje: wartość lub wł./wył., bez operacji przed sobą. Brak ustawień.
- Program musi mieć gotowy wiersz z Serwem w trybie Auto, w przeciwnym razie wiersz zgłasza „W tym programie nie ma serwa w trybie automatycznej kalibracji”.
