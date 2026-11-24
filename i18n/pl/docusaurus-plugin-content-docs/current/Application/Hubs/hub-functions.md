---
id: HubFunctions
title: Funkcje specyficzne dla hubów
description: "Specjalne funkcje hubów Technic Move, BuWizz, SBrick, Mould King, Robot Inventor i innych w obu edytorach."
---

# Funkcje specyficzne dla hubów

Każdy hub z portami potrafi sterować silnikami i światłami. Niektóre huby potrafią więcej. W **Szybkich połączeniach** te funkcje pojawiają się w palecie tylko wtedy, gdy taki hub jest w profilu; w **Blokach logicznych** są to bloki specyficzne dla huba.

## Silniki z enkoderami (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funkcja | Szybkie połączenia | Bloki logiczne |
|---|---|---|
| Sterowanie prędkością | [Silnik](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | ustaw prędkość na, uruchom silnik na … % prędkość |
| Serwo skrętu z kalibracją | [Serwo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Ręczna / Auto) | przejdź do względnej pozycji, kalibruj drążek kierowniczy |
| Obrót o kąt | [Obrót o stopnie](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | uruchom na |
| Pozycja absolutna (silniki kątowe) | [Do pozycji](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | iść do pozycji |
| Zachowanie przy zatrzymaniu: toczenie, hamulec, utrzymanie | Silnik → **Przy zatrzymaniu** | ustaw silnik na … przy zatrzymaniu |
| Ustawienia przyspieszenia huba | Silnik → **Przyspieszenie huba** | ustaw przyspieszenie na, ustaw spowolnienie na |
| Prędkość, pozycja, moc, prąd jako wejście | [Wejście Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | prędkość, pozycja, pozycja względna, moc |

## Technic Move Hub {#technic-move-hub}

Hub zdalnie sterowanych samochodów LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Jazda, skręt i światła są sterowane według funkcji, a nie portów.
- **Skręt** sam kalibruje swoją zębatkę.
- **Hamulec**, **Boost** (tryb mocy) i **Impuls mocy** (tylko z konfiguracją Batmobile™ Tumbler).
- **Konfiguracje huba**: wgraj do huba profil samochodu za pomocą **Moje huby → Wybierz konfigurację**. Zobacz [Konfiguracje Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Światła w Blokach logicznych: *włącz światła* (Technic Move).

## BuWizz 2.0 {#buwizz-20}

- **Tryb mocy**: Wolno, Normalny, Szybko, Ludicrous. Szybkie połączenia: operacja [Tryb mocy](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Bloki logiczne: *ustawić … tryb zasilania na* (BuWizz 2).
- Bieżący tryb mocy, **napięcie wyjściowe** i prąd silnika jako wejścia.
- Proste sterowanie prędkością na portach 1–4: bez sterowania pozycją.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- Diody LED **Kolor portu** na portach 1–4: z listy lub RGB ([Kolor portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *ustaw kolor LED portu na* (BuWizz 3)).
- Prąd silnika jako wejście, pozycje względne.

## SBrick i SBrick Plus {#sbrick-and-sbrick-plus}

- Silniki i światła ze sterowaniem prędkością.
- Bez sterowania pozycją: Serwo, Obrót o stopnie i Do pozycji nie są dostępne.

## Mould King 4.0 i 6.0 {#mould-king-40-and-60}

- Tylko polecenia: bez czujników, bez przycisków, bez informacji o połączeniu.
- **Kanał sterowania** A, B lub C: operacja [Kanał](/docs/Application/Links/Blocks/OutputBlocks#op-channel) w Szybkich połączeniach, blok *ustawić … kanał sterowania do* (Mould King) w Blokach logicznych albo **Wybierz kanał** w „Moich hubach”.
- Do 3 hubów Mould King 4.0 lub 1 Mould King 6.0 na profil i tylko jeden typ Mould King na profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Wszystko o łączeniu, firmware i blokach: [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).

- **Matryca LED**: pasek poziomu, liczba lub obraz w Szybkich połączeniach; tekst i piksele w Blokach logicznych.
- **Światła czujnika odległości** („oczy” czujnika).
- **Wykrywanie zablokowania** i moc silnika.
- Wszystkie bloki aplikacji Robot Inventor: [Ruch](/docs/Application/BlockBuilder/Blocks/Movement), dźwięki i muzyka huba, gesty, odchylenie, czujnik siły, radio między hubami.
- Klasyczny Bluetooth (niedostępny na iPhonie i iPadzie) lub kabel USB w Windows i na Macu.

## Huby LEGO® z kolorową diodą LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor i pilot: kolor diody LED huba możesz ustawić z listy lub jako RGB (w Szybkich połączeniach [Dioda LED huba](/docs/Application/Links/Blocks/OutputBlocks#hub-led), w Blokach logicznych *ustaw kolor LED na*).

## Pilot LEGO® Powered Up {#lego-powered-up-remote-control}

Jego przyciski są wejściami, więc możesz sterować modelem fizycznym pilotem za pośrednictwem MOCPilot (Szybkie połączenia: wejście **Hub** → Przycisk; Bloki logiczne: zdarzenia przycisków huba).

## Wbudowane czujniki {#built-in-sensors}

Poziom i napięcie baterii, temperatura płytki, nachylenie (pochylenie, przechył, odchylenie), przyspieszenie i orientacja są dostępne w hubach, które je mają. Ustaw **Orientacja huba** (Szybkie połączenia) lub *orientacja nachylenia do* (Bloki logiczne) zgodnie z tym, jak hub jest zamontowany.
