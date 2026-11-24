---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Podłącz hub LEGO MINDSTORMS Robot Inventor (51515) lub SPIKE Prime przez Bluetooth albo USB, korzystaj z jego bloków i przywróć hub, jeśli przestanie działać."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor

Hubem zestawu LEGO® MINDSTORMS® Robot Inventor (51515) jest **LEGO® Technic™ Large Hub** (88016): sześć portów A–F, matryca świetlna 5×5, głośnik, żyroskop i akcelerometr. MOCPilot steruje nim tymi samymi blokami co aplikacja Robot Inventor, a do tego daje wszystko, co dodaje sam MOCPilot: panel, gamepad i pozostałe huby profilu.

**Hub SPIKE™ Prime** (45601) to ten sam sprzęt z firmware LEGO® Education. MOCPilot obsługuje go z firmware **SPIKE Legacy** (beta); zobacz [Firmware](#firmware).

## Co potrafi {#features}

- **Bloki logiczne**: wszystkie bloki aplikacji Robot Inventor, zobacz [Bloki Robot Inventor](#blocks).
- **Szybkie połączenia**: silniki, czujniki, [matryca świetlna](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) i [światła czujnika odległości](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor huba**: bateria, orientacja, nachylenie i urządzenia na portach, zobacz [Monitor huba](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Program z bloków może działać na dwa sposoby: przez **streaming**, gdy MOCPilot wykonuje program i wysyła polecenia do huba (urządzenie musi pozostać połączone), albo przez **pobieranie**, gdy MOCPilot zapisuje program w jednym ze slotów programów huba, a hub wykonuje go samodzielnie. Zobacz [Uruchamianie programu na hubie](#download).

## Podłączanie huba {#connect}

Dodaj hub jak zwykle ([Dodawanie i łączenie huba](/docs/Application/Hubs/ConnectingHubs)) i wybierz **Lego® Large Hub** (lub **LEGO® SPIKE™ Prime Hub**). Na komputerze strona łączenia ma u góry przełącznik **Bluetooth / USB**. MOCPilot zapamiętuje Twój wybór dla tego modelu huba.

### Przez Bluetooth {#bluetooth}

Hub korzysta z klasycznego Bluetooth, a nie z Bluetooth Low Energy: działa na Androidzie, Macu i Windows, ale nie na iPhonie i iPadzie.

1. Włącz hub.
2. Sparuj go w ustawieniach Bluetooth urządzenia jak zwykłe urządzenie Bluetooth (w Windows: **Ustawienia → Bluetooth i urządzenia → Dodaj urządzenie**). Naciśnij przycisk Bluetooth na hubie, żeby można go było znaleźć.
3. W MOCPilot dotknij **Skanuj**.

### Kablem USB {#usb}

W Windows i na Macu możesz też podłączyć hub jego kablem USB. Nie trzeba instalować żadnego sterownika LEGO.

1. Podłącz hub do komputera kablem USB i włącz hub.
2. Dotknij **Połącz**.

Jeśli MOCPilot pokazuje **Brak huba na USB**, sprawdź kabel (niektóre kable tylko ładują) i czy hub jest włączony.

<Screenshot name="robot-inventor-connect" alt="Podłączanie huba Robot Inventor: przełącznik Bluetooth / USB" width={900} />

### Najpierw zamknij aplikację LEGO {#close-lego-app}

Hub przyjmuje tylko jedno połączenie. Jeśli otwarta jest aplikacja MINDSTORMS lub SPIKE i trzyma hub, MOCPilot pokazuje **Hub jest zajęty: używa go inna aplikacja (LEGO MINDSTORMS lub SPIKE). Zamknij tę aplikację i spróbuj ponownie.** Zamknij aplikację LEGO i połącz się ponownie.

## Bloki Robot Inventor {#blocks}

Gdy profil ma hub Robot Inventor lub SPIKE Prime, paleta Bloków logicznych dostaje bloki aplikacji Robot Inventor. Bloki, które może wykonać tylko ten hub, mają czarno-białą **ikonę huba**.

| Kategoria | Bloki Robot Inventor |
|---|---|
| [Ruch](/docs/Application/BlockBuilder/Blocks/Movement) (nowa kategoria) | silniki ruchu, prędkość, droga na obrót, jazda, skręt, sterowanie jak w czołgu, przyspieszenie, zatrzymanie, „czy ruch został przerwany?” |
| [Silniki](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | uruchamianie z mocą, „czy silnik został przerwany?”, a także moc silnika i wykrywanie zablokowania |
| [Światło](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | obraz na kilka sekund, animacje z edytorem klatek, jasność pikseli, a także światła czujnika odległości |
| [Dźwięki](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | sygnały, dźwięki robota zapisane w hubie, głośność, efekty dźwiękowe, muzyka: nuty, bębny, pauzy, instrument, tempo |
| [Czujniki](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | czujnik siły, gesty, orientacja, kąty odchylenia / pochylenia / przechylenia, zerowanie odchylenia, prędkość kątowa, przyspieszenie, przechylenie w danym kierunku, radio między hubami |
| [Wydarzenia](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | gdy hub zostanie potrząśnięty lub stuknięty, leży na boku, jest przechylony, gdy czujnik siły zostanie naciśnięty, gdy przyjdzie sygnał radiowy |

Bloki kontroli, operatorów, zmiennych, list i Moich bloków z aplikacji Robot Inventor są takie same jak [podstawowe bloki](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) MOCPilot. Bloki, które obejmują już ogólne bloki hubów (prędkość i pozycja silnika, czujniki koloru i odległości, matryca świetlna, przycisk huba, stoper), są w swoich zwykłych kategoriach.

## Uruchamianie programu na hubie {#download}

Podobnie jak aplikacja Robot Inventor, MOCPilot może zapisać program z Bloków logicznych w jednym z 20 slotów programów huba (0–19). Hub wykonuje go wtedy bez aplikacji: możesz odłączyć telefon lub komputer, a później ponownie uruchomić program przyciskami samego huba.

### Przycisk i karta slotu {#slot-card}

Gdy hub Robot Inventor lub SPIKE Prime jest połączony z profilem Bloków logicznych, w prawym dolnym rogu edytora, obok powiększenia, pojawia się przycisk. Pokazuje numer wybranego slotu na małej matrycy 5×5 albo znak streamingu. Dotknij go, aby otworzyć kartę:

- hub z wybranym slotem; **‹** i **›** wybierają slot 0–19;
- **Pobieranie / Streaming**: jak działa **Uruchom** dla tego huba;
- przycisk **pobierania** (⤓): zapisuje program w slocie bez uruchamiania go;
- wiersz stanu: postęp, *Slot 3: program jest na hubie* albo informacja, co poszło nie tak.

Gdy połączonych jest kilka hubów Robot Inventor lub SPIKE Prime, karta ma też przycisk huba: dotknij go, aby wybrać, który hub dostanie program. MOCPilot zapamiętuje tryb i slot na tym urządzeniu.

<Screenshot name="robot-inventor-slot-card" alt="Karta slotu: hub, strzałki slotu, przełącznik Pobieranie / Streaming i przycisk pobierania" width={500} />

### Pobieranie {#download-mode}

W trybie **Pobieranie** przycisk **Uruchom** zamienia program z bloków w program huba, zapisuje go w wybranym slocie i uruchamia na hubie. Zapis trwa kilka sekund; potem program działa na hubie samodzielnie.

- Aby później uruchomić go ponownie bez aplikacji, wybierz slot lewym i prawym przyciskiem huba i naciśnij środkowy przycisk.
- **Środkowy przycisk** huba zatrzymuje program.
- Aby wrócić do uruchamiania programów z MOCPilot, przełącz kartę na **Streaming**.

### Co może działać na hubie {#download-blocks}

Większość bloków może trafić na hub:

- wydarzenia: start programu, wiadomości, warunki, stoper, przyciski huba, czujniki, gesty, orientacja, przechylenie i sygnały radiowe;
- kontrola, operatory, zmienne, listy i Moje bloki;
- wszystkie bloki Robot Inventor oraz bloki silników, światła i czujników tego huba.

Niektóre bloki potrzebują aplikacji i nie mogą działać na samym hubie: bloki panelu i gamepada, bloki innych hubów, wydarzenie **środkowego przycisku** (na hubie ten przycisk zatrzymuje program), wydarzenia baterii i połączenia, temperatura oraz kalibracja listwy zębatej. Jeśli program zawiera którykolwiek z nich, nic nie zostaje zapisane: karta pokazuje **Te bloki nie mogą działać na hubie bez aplikacji** i wymienia je. Usuń te bloki albo użyj trybu **Streaming**.

Jeśli zapis się nie powiedzie, wiersz stanu podaje przyczynę, na przykład **Za mało miejsca na hubie** albo **Hub nie odpowiedział**. Spróbuj ponownie albo uruchom hub ponownie, jeśli błąd się powtarza.

## Firmware {#firmware}

MOCPilot działa z własnym firmware LEGO huba i go nie zastępuje:

- **Hub Robot Inventor**: firmware aplikacji MINDSTORMS Robot Inventor. Ostatnia wersja to firmware 1.5.6 z oprogramowaniem huba 3.2.36.
- **Hub SPIKE Prime**: firmware **SPIKE Legacy** (to z aplikacji SPIKE 2). Nowsze firmware **SPIKE App 3** nie jest obsługiwane: MOCPilot informuje o tym, gdy znajdzie taki hub. Zainstaluj firmware SPIKE Legacy aplikacją LEGO® Education SPIKE™ Legacy i połącz się ponownie.

Gdy hub jest gotowy, pokazuje na matrycy świetlnej numer slotu programu.

## Jeśli hub się nie uruchamia {#restore}

Jeśli hub się nie uruchamia, pozostaje ciemny, nie pokazuje numeru slotu albo został przełączony na firmware SPIKE App 3, najpierw przywróć go oficjalną aplikacją:

1. Otwórz aplikację MINDSTORMS Robot Inventor (dla huba SPIKE Prime aplikację SPIKE Legacy) i podłącz hub kablem USB.
2. Uruchom aktualizację huba (**Update hub firmware**). Zapisuje ona od nowa firmware, oprogramowanie huba i dźwięki robota i trwa około 6 minut. Nie odłączaj huba, dopóki trwa.
3. Zamknij aplikację LEGO i połącz hub w MOCPilot.

### Tryb odzyskiwania (DFU) {#dfu}

Tylko jeśli oficjalna aplikacja w ogóle nie widzi huba, możesz zapisać firmware przez tryb odzyskiwania huba (DFU). To opcja dla doświadczonych użytkowników:

1. Wyłącz hub i odłącz go. Przytrzymaj **przycisk Bluetooth** i podłącz kabel USB; trzymaj, aż światło przycisku zacznie migać na czerwono, zielono i niebiesko. Komputer widzi teraz „LEGO Technic Large Hub in DFU Mode”.
2. W Windows zainstaluj jednorazowo sterownik WinUSB dla tego urządzenia, na przykład programem Zadig. Mac i Linux nie potrzebują sterownika.
3. Zapisz obraz firmware aplikacji Robot Inventor (1.5.6) narzędziem `dfu-util` pod adresem `0x08008000`. Po zakończeniu hub sam się uruchomi ponownie. Nie odłączaj go podczas zapisu.
4. Następnie uruchom **Update hub firmware** w aplikacji Robot Inventor (zobacz wyżej), aby przywrócić oprogramowanie huba i dźwięki.

DFU zapisuje tylko firmware. Samego bootloadera odzyskiwania nie da się nadpisać, więc zawsze możesz spróbować ponownie.
