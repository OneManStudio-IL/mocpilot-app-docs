---
id: InputBlocks
title: Bloki wejść
description: "Opis wszystkich wejść Szybkich połączeń: kontrolery panelu i ich kanały, pojazd, gamepad, przyciski i czujniki hubów."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloki wejść

Każdy wiersz zaczyna się od wejścia. Karta **Wejścia** w palecie pokazuje bloki, których Twój profil może teraz użyć: po jednym bloku na każdy kontroler panelu (po jednym na kanał w kontrolerach z kilkoma kanałami), bloki **Pojazd**, blok **Gamepad** i po jednym bloku **Hub** na każdy hub. Jak ich używać: [Wejścia](/docs/Application/Links/Inputs).

Każde wejście wysyła wzdłuż wiersza jeden z dwóch sygnałów:

- **wartość**: liczba od −1 do 1 (0…1 w kontrolerach, które nie mają strony ujemnej);
- **wł./wył.**: 1 lub 0.

Bloki przetwarzania i operacje przyjmują tylko sygnały, z którymi potrafią pracować; zobacz [Bloki przetwarzania](/docs/Application/Links/Blocks/ProcessingBlocks).

## Kontroler {#src-controller}

Kontroler z Twojego panelu, pokazany pod swoją nazwą (**JOY1**, **SLDR1**, **BTN2**…).

- **Kontroler**: dowolny kontroler panelu z listy poniżej. Monitory są wyjściami, a nie wejściami.
- **Kanał**: co podaje kontroler, w kontrolerach z kilkoma kanałami. Paleta oferuje po jednym bloku na kanał.

Kierownicę, pedały, skrzynię biegów, hamulec ręczny, kierunkowskazy, reduktor i nastawnik jazdy opisano w sekcji [Kontrolery specjalne](/docs/Application/Dashboard/SpecialControls).

Jeśli kontroler zostanie usunięty z panelu, wiersz zgłasza „Wybierz kontroler panelu”. Jeśli jego kanał już nie istnieje, zgłasza „Wybierz, co podaje …” (w przypadku joysticka: „… nie porusza się w tej osi”).

### Joystick {#controller-joystick}

- **Kanał**: **Oś X** lub **Oś Y**. Joystick ustawiony na **Tylko poziomo (X)** lub **Tylko pionowo (Y)** oferuje tylko tę oś.
- Podaje: wartość −1…1, 0 na środku.

### Suwak, pionowy suwak {#controller-slider}

- Brak kanału.
- Podaje: wartość 0…1 albo −1…1, gdy włączona jest opcja **Wartości ujemne**.

### Nastawnik jazdy {#controller-train}

Nastawnik jazdy (kontroler specjalny) działa w Szybkich połączeniach jak suwak.

- Brak kanału.
- Podaje: wartość −1…1: położenie dźwigni jako część wszystkich pozycji, ujemne, gdy nawrotnik jest ustawiony do tyłu, 0 w położeniu neutralnym.

### Pokrętło {#controller-knob}

Pokrętło z płatnych motywów działa w Szybkich połączeniach jak suwak.

- Brak kanału.
- Podaje: wartość 0…1 albo −1…1, gdy pokrętło ma zero na środku.

### Kierownica {#controller-wheel}

- **Kanał**: **Kąt skrętu** (domyślnie) lub **Klakson**.
- Kąt skrętu podaje: wartość −1…1, 0 na wprost.
- Klakson podaje: wartość 1, dopóki obszar klaksonu jest wciśnięty, w przeciwnym razie 0.

### Pedały {#controller-pedals}

- **Kanał**: **Pedał gazu** (domyślnie) lub **Pedał hamulca**.
- Podaje: wartość 0…1, czyli jak mocno wciśnięty jest pedał.
- Pedały podają surowe położenie pedału. Jeśli samochód ma sam przyspieszać, zwalniać i cofać, użyj wejścia [Pojazd](#src-vehicle).

### Skrzynia biegów {#controller-gear}

Manualna i automatyczna skrzynia biegów (kontroler specjalny).

- **Kanał**: **Bieg** (domyślnie) lub **Kierunek (R − / naprzód +)**.
- Bieg, manualna skrzynia: włączony bieg podzielony przez liczbę biegów do przodu: najwyższy bieg 1, luz 0, wsteczny ujemny. Przy 4 biegach 2. bieg daje 0,5.
- Bieg, automatyczna skrzynia: to samo co Kierunek.
- Kierunek podaje: −1 na R, 0 na N (i P), +1 na dowolnym biegu do przodu lub na D.

### Hamulec ręczny {#controller-handbrake}

- **Kanał**: **Hamulec ręczny zaciągnięty** (domyślnie) lub **Siła hamulca ręcznego**.
- Hamulec ręczny zaciągnięty podaje: wł./wył., wł., dopóki dźwignia jest zablokowana.
- Siła hamulca ręcznego podaje: wartość 0…1, czyli jak mocno pociągnięta jest dźwignia.

### Kierunkowskazy {#controller-turnsignals}

Przełącznik kierunkowskazów (kontroler specjalny).

- **Kanał**: **Kierunkowskazy (lewy − / prawy +)** (domyślnie), **Lewy kierunkowskaz**, **Prawy kierunkowskaz** lub **Światło**.
- Kierunkowskazy podają: wartość −1 (w lewo), 0 (wył.) lub +1 (w prawo).
- Lewy kierunkowskaz i Prawy kierunkowskaz podają: wartość 1, dopóki dany kierunkowskaz jest włączony (miga razem z lampką, gdy w kontrolerze włączone jest miganie), w przeciwnym razie 0.
- Światło podaje: wartość 1, dopóki światło jest włączone, w przeciwnym razie 0.

### Reduktor {#controller-transfercase}

[Reduktor](/docs/Application/Dashboard/SpecialControls#transfer-case) (kontroler specjalny).

- **Kanał**: **Napęd na cztery koła** (domyślnie), **Reduktor**, **Blokada przedniego dyferencjału**, **Blokada centralnego dyferencjału** lub **Blokada tylnego dyferencjału**.
- Napęd na cztery koła podaje: wł./wył., włączony w 4H i 4L.
- Reduktor (przełożenie terenowe) podaje: wł./wył., włączony w 4L.
- Każda blokada dyferencjału podaje: wł./wył., włączona, dopóki dana blokada jest włączona.
- Samo położenie (2H, 4H, N, 4L) trafia do symulatora przez ustawienie **Reduktor** wejścia [Pojazd](#src-vehicle).

### Pad kierunkowy {#controller-dpad}

- **Kanał**: **Góra / dół** lub **Lewo / prawo**.
- Podaje: wartość +1 (w górę lub w prawo), −1 (w dół lub w lewo) lub 0.

### Przycisk {#controller-button}

- Brak kanału.
- Podaje: wł./wył., wł., dopóki jest wciśnięty.

### Przełącznik {#controller-switch}

- Brak kanału.
- Podaje: wł./wył.

### Przełącznik krokowy {#controller-stepper}

- Brak kanału.
- Podaje: wartość: bieżący krok podzielony przez **Liczba kroków**, więc ostatni krok daje 1 (−1 dla ostatniego ujemnego kroku).

## Pojazd {#src-vehicle}

Symulowany samochód sterowany pedałami, skrzynią biegów, hamulcem ręcznym i reduktorem z panelu: przyspiesza, hamuje, toczy się i cofa jak prawdziwy pojazd, a wiersz dostaje jego prędkość lub obroty silnika. Paleta pokazuje bloki Pojazd, gdy na panelu są pedały, skrzynia biegów lub hamulec ręczny — po jednym bloku na każde wyjście, od razu powiązanym z pierwszym kontrolerem każdego rodzaju.

- **Pedały**: pedały z panelu, które sterują pojazdem (wymagane).
- **Skrzynia biegów**: **brak** lub skrzynia biegów z panelu. Bez niej przytrzymanie pedału hamulca na postoju powoduje jazdę do tyłu.
- **Hamulec ręczny**: **brak** lub hamulec ręczny z panelu.
- **Reduktor**: **brak** lub reduktor z panelu. W 2H i 4H pojazd jedzie tak jak bez niego, w N nie jedzie (toczy się siłą rozpędu), w 4L jego prędkość jest ograniczona do 40 %.
- **Typ pojazdu**: **Samochód** (domyślnie), **Pojazd terenowy**, **Samochód sportowy** lub **Ciężarówka**. Typy różnią się bezwładnością i prędkością cofania; ciężarówka ma też hamulec pneumatyczny.
- **Wyjście**:
  - **Prędkość** (domyślnie): wartość −1…1, ujemna przy cofaniu;
  - **Obroty silnika (obr./min)**: wartość 0…1;
  - **Hamowanie**: wł./wył., wł., dopóki pojazd hamuje;
  - **Na hamulcu ręcznym**: wł./wył.

Problemy: „Wybierz pedały pojazdu”, „… nie ma na panelu”.

<Screenshot name="links-vehicle-settings" alt="Ustawienia bloku wejścia Pojazd" width={900} />

## Gamepad {#src-gamepad}

Kontroler do gier podłączony do Twojego urządzenia. Blok jest w palecie tylko wtedy, gdy włączona jest opcja **Włącz bloki gamepada** (strona **Gamepad** na górnym pasku); w przeciwnym razie wiersz zgłasza „Włącz bloki gamepada na stronie «Gamepad» (górny pasek)”.

- **Wejście** (domyślnie **Lewy drążek Y**). Etykiety zależą od ustawienia **Układ przycisków gamepada** (Xbox / PlayStation):
  - **Lewy drążek Y**, **Lewy drążek X**, **Prawy drążek Y**, **Prawy drążek X**: wartość −1…1;
  - **RT** / **R2**, **LT** / **L2** (spusty): wartość;
  - **A**, **B**, **X**, **Y** / **Krzyżyk**, **Kółko**, **Kwadrat**, **Trójkąt**: wł./wył.;
  - **LB** / **L1**, **RB** / **R1** (przyciski boczne): wł./wył.;
  - **Góra**, **Dół**, **Lewo**, **Prawo** (pad kierunkowy): wł./wył.

## Hub {#src-hub}

Przycisk huba lub czujnik: w samym hubie albo na jednym z jego portów. Na każdy hub profilu przypada jedno wejście Hub, z wyjątkiem hubów Mould King, które tylko odbierają polecenia.

- **Hub**: hub profilu.
- **Przycisk lub czujnik**: tylko to, co ten hub potrafi zgłaszać (lista poniżej).
- **Port**: dla czujników na porcie (wartości silnika, czujniki na portach).
- **Orientacja huba**: dla nachylenia i przyspieszenia w hubach, które pozwalają ją zmienić: **Bez zmian** (domyślnie) lub sposób zamontowania huba w modelu.

Wartość czujnika przechodzi przez wiersz podzielona przez pełną skalę i ograniczona do −1…1: bateria naładowana w 50 % daje 0,5. Tekstowy **Monitor** tuż za czujnikiem pokazuje rzeczywistą wartość z jednostką.

| Przycisk lub czujnik | Sygnał | Jednostka, pełna skala | Huby |
|---|---|---|---|
| **Przycisk 1, 2…** | wł./wył. | | huby z przyciskiem; przyciski pilota LEGO® Powered Up |
| **Bateria** | wartość | %, 100 | huby, które ją zgłaszają |
| **Napięcie baterii** | wartość | V, 12 | huby, które je zgłaszają |
| **Napięcie wyjściowe** | wartość | V, 12 | BuWizz 2.0 |
| **Temperatura** | wartość | °C, 100 | huby, które ją zgłaszają |
| **Nachylenie: pochylenie** | wartość | °, 90 | huby z czujnikiem nachylenia |
| **Nachylenie: przechył** | wartość | °, 180 | huby z czujnikiem nachylenia |
| **Nachylenie: odchylenie** | wartość | °, 180 | huby z osią odchylenia |
| **Przyspieszenie X / Y / Z** | wartość | m/s², 19,6 | huby z akcelerometrem |
| **Prędkość obrotu X / Y / Z** | wartość | °/s, 360 | huby z żyroskopem: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Prąd huba** | wartość | mA, 3000 | Technic Hub, BOOST Move Hub |
| **Prędkość silnika** | wartość | %, 100 | port; wszystkie huby z portami |
| **Kąt silnika** | wartość | °, 360 (względny) | port; silniki z enkoderem; nie SBrick, BuWizz 2.0, WeDo 2.0 |
| **Pozycja silnika** | wartość | °, 180 (absolutna) | port; silniki kątowe |
| **Moc silnika** | wartość | %, 100 | port; Robot Inventor |
| **Prąd silnika** | wartość | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Czujnik odległości** | wartość | 250 | port; nie SBrick ani BuWizz |
| **Czujnik koloru** | wartość | numer koloru, 10 | port; nie SBrick, BuWizz ani WeDo 2.0 |
| **Światło odbite**, **Światło otoczenia** | wartość | %, 100 | port; nie SBrick, BuWizz ani WeDo 2.0 |
| **Odcień koloru** | wartość | °, 360 | port; czujnik koloru Technic lub czujnik koloru i odległości BOOST; nie SBrick, BuWizz ani WeDo 2.0 |
| **Nasycenie koloru**, **Jasność koloru** | wartość | %, 100 | port; jak Odcień koloru |
| **Czujnik nachylenia: pochylenie / przechył** | wartość | °, 45 | port; czujnik nachylenia WeDo 2.0 / BOOST; nie SBrick ani BuWizz |
| **Tryb mocy** | wartość | 1–4, 4 | BuWizz 2.0 |
| **Połączony** | wł./wył. | | wszystkie huby |

Gdy hub jest połączony, MOCPilot sprawdza też urządzenie na porcie: „Port A: nie ma tam silnika”, „Port A: silnik nie ma enkodera”, „Port A: nie ma tam czujnika odległości” i tak dalej.
