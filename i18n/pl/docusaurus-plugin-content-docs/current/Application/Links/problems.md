---
id: Problems
title: Uruchamianie i rozwiązywanie problemów
description: "Panel problemów, czerwone ramki, bieżące wartości i typowe komunikaty Szybkich połączeń."
---

import Screenshot from '@site/src/components/Screenshot';

# Uruchamianie i rozwiązywanie problemów

## Czy wszystko jest gotowe? {#is-everything-ready}

Przycisk **Problemy** na górnym pasku edytora pokazuje:

- **zielony ptaszek**: „Wszystkie wiersze są gotowe”;
- **czerwony „!”**: „Problemy: N”.

Dotknij go, aby otworzyć panel problemów (panel boczny na telefonie, menu na tablecie lub komputerze). Zawiera listę „Wiersz N — przyczyna”; dotknij pozycji, aby przejść do tego wiersza. Blok, który powoduje problem, ma **czerwoną ramkę**. Gdy wszystko jest w porządku, panel wyświetla „Każdy włączony wiersz może działać.”

<Screenshot name="links-problems" alt="Panel problemów z wierszem, który nie jest gotowy" width={900} />

Wiersze z problemami nie działają; pozostałe wiersze działają.

## Typowe komunikaty {#common-messages}

| Komunikat | Co zrobić |
|---|---|
| Przeciągnij do wiersza wejście i wyjście (hub lub wskaźnik panelu) | wiersz jest pusty |
| Dodaj wejście na początku wiersza | najpierw przeciągnij kontroler, pojazd, gamepad lub wejście huba |
| Dodaj wyjście: hub lub wskaźnik panelu | zakończ wiersz wyjściem |
| Dodaj operację przed hubem: silnik, serwo, światło | wyjście Hub wymaga operacji przed sobą |
| Wybierz co najmniej jeden port huba | dotknij portu w bloku Hub |
| Wybierz kontroler panelu | dotknij bloku wejścia i wybierz kontroler |
| … nie porusza się w tej osi | joystick ma tylko jedną oś: wybierz drugą oś lub zmień joystick |
| Wybierz, co podaje … | kontroler nie ma już tego kanału: wybierz inny |
| Wybierz pedały pojazdu | wejście Pojazd wymaga pedałów na panelu |
| … nie ma na panelu | skrzynia biegów lub hamulec ręczny wybrane dla Pojazdu zostały usunięte |
| „…” nie działa z tym kontrolerem | ten blok przetwarzania nie pasuje do sygnału |
| Port A: to urządzenie nie może działać jako serwo (potrzebny silnik z enkoderem) | użyj silnika z enkoderem albo innej operacji |
| Na porcie A jest czujnik, a nie silnik | sprawdź, co jest podłączone do portu |
| Port A jest też używany w wierszu 2 | każdy port może należeć tylko do jednego wiersza |
| Włącz bloki gamepada na stronie „Gamepad” (górny pasek) | otwórz **Gamepad** i włącz **Włącz bloki gamepada** |
| Wskaźnik pokazuje wartość bez zmian: usuń operację | wiersz ze Wskaźnikiem nie ma operacji |
| Kalibracja nie wymaga operacji: usuń ją | wiersz z Kalibracją serw nie ma operacji |
| Wybierz hub z kolorową diodą LED (huby LEGO) | Dioda LED huba działa tylko w hubach LEGO® |
| Kolory portów są dostępne tylko w BuWizz 3 | Kolor portu wymaga BuWizz 3.0 Pro |
| W tym programie nie ma serwa w trybie automatycznej kalibracji | Kalibracja serw wymaga Serwa w trybie Auto |
| Ten blok wymaga nowszej wersji aplikacji | profil utworzono w nowszej wersji: zaktualizuj MOCPilot |
| Wiersz jest wyłączony | włącz go w menu wiersza |

## Bieżące wartości {#live-values}

Gdy program działa, każde złącze między blokami pokazuje przepływającą przez nie wartość. Porusz kontrolerem i śledź wartość wzdłuż wiersza:

- na wejściu nic się nie zmienia: kontroler lub gamepad niczego nie wysyła; sprawdź kanał lub oś;
- wartość się zmienia, ale silnik się nie porusza: sprawdź kropkę połączenia huba i port;
- wartość za blokiem **Ograniczenie** lub **Martwa strefa** jest mała: dostosuj ich ustawienia.

<Screenshot name="links-live-values" alt="Działający program Szybkich połączeń z bieżącymi wartościami na złączach" width={900} />

## Model się nie porusza {#the-model-does-not-move}

1. Czy hub jest połączony? Sprawdź **Moje huby** i kropkę połączenia w bloku Hub.
2. Czy wybrano właściwy port? Czy silniki są podłączone tam, gdzie myślisz?
3. Czy wiersz jest włączony i nie ma czerwonej ramki?
4. Czy program działa (**Uruchom**)?
5. Czy bateria jest naładowana? Dodaj wiersz *Bateria → Wskaźnik*, aby ją kontrolować.

Więcej w sekcji [Rozwiązywanie problemów](/docs/Help/Troubleshooting).
