---
id: Examples
title: "Przykłady: samochód, czołg, dźwig, pociąg"
description: "Gotowe przepisy Szybkich połączeń na samochód, czołg, dźwig i pociąg."
---

# Przykłady

Gotowe przepisy. Najpierw umieść kontrolery na panelu i dodaj huby w „Moich hubach”, a potem zbuduj wiersze.

## Samochód ze skrętem serwem {#car-with-servo-steering}

Panel: **JOY1** (Tylko pionowo) po lewej, **JOY2** (Tylko poziomo) po prawej, **BTN1** i monitor **Poziom baterii**.

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | JOY1, Oś Y | Martwa strefa 10 %, Wygładzanie 0,5 s | Silnik | Technic Hub, porty A + B |
| 2 | JOY2, Oś X | | Serwo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Zatrzask | Światło | Technic Hub, port C |
| 4 | Hub: Bateria | | | Wskaźnik: Poziom baterii |

Jeśli jeden silnik napędu kręci się w złą stronę, rozdziel wiersz 1 na dwa wiersze i do jednego z nich dodaj **Odwróć**.

## Samochód z kierownicą, pedałami i skrzynią biegów {#car-with-a-wheel-pedals-and-a-gearbox}

Panel: **Kierownica**, **Pedały**, **Skrzynia biegów**, **Hamulec ręczny** i **Kierunkowskazy**. Wejście [Pojazd](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) zamienia pedały, skrzynię biegów i hamulec ręczny w prędkość, która rośnie i spada jak w prawdziwym samochodzie.

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | Pojazd: Prędkość | | Silnik | Technic Hub, porty A + B |
| 2 | Kierownica: Kąt skrętu | | Serwo (Auto) | Technic Hub, port D |
| 3 | Pojazd: Hamowanie | | Światło | Technic Hub, port C (światła stop) |
| 4 | Kierunkowskazy: Lewy kierunkowskaz | | Światło | City Hub, port A |
| 5 | Kierunkowskazy: Prawy kierunkowskaz | | Światło | City Hub, port B |

## Czołg (dwie gąsienice) {#tank-two-tracks}

Panel: dwa pionowe suwaki **VSLDR1** i **VSLDR2** z włączonymi opcjami **Powróć do zera** i **Wartości ujemne**.

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | VSLDR1 | Wygładzanie 0,25 s | Silnik | Hub, port A |
| 2 | VSLDR2 | Odwróć, Wygładzanie 0,25 s | Silnik | Hub, port B |

Z gamepadem użyj Lewy drążek Y w wierszu 1 i Prawy drążek Y w wierszu 2.

## Dźwig {#crane}

Panel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | DPAD1, Lewo / prawo | Ograniczenie 50 % | Silnik | Hub, port A (obrót) |
| 2 | DPAD1, Góra / dół | | Silnik | Hub, port B (wyciągarka haka) |
| 3 | SLDR1 | Martwa strefa 10 % | Silnik | Hub, port C (wysięgnik) |
| 4 | SWCH1 | | Światło (miganie 0,5 s) | Hub, port D (kogut) |

## Pociąg {#train}

Panel: **Przełącznik krokowy** **STPR1** z opcją **Wartości ujemne** (poziomy prędkości do przodu i do tyłu) oraz **BTN1** do świateł.

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | STPR1 | Wygładzanie 2 s | Silnik | City Hub, port A |
| 2 | BTN1 | Zatrzask | Światło | City Hub, port B |
| 3 | Hub: Bateria | | | Wskaźnik: Monitor |

Blok Wygładzanie sprawia, że pociąg rusza i zatrzymuje się jak prawdziwy. Jeśli na panelu jest **nastawnik jazdy**, użyj go w wierszu 1 zamiast STPR1: podaje położenie dźwigni, ujemne przy jeździe do tyłu.

## Samochód z Technic Move {#technic-move-car}

| # | Wejście | Przetwarzanie | Operacja | Wyjście |
|---|---|---|---|---|
| 1 | Pojazd: Prędkość | | Silnik | Technic Move (napęd) |
| 2 | Kierownica: Kąt skrętu | | Serwo | Technic Move (skręt) |
| 3 | BTN1 | Zatrzask | Światło | Technic Move (światła) |
| 4 | BTN2 | | Boost | Technic Move |

Bez skrzyni biegów na panelu samochód cofa, gdy przytrzymasz pedał hamulca na postoju.

## Wypróbuj w przeglądarce {#try-it-in-the-browser}

Demo Szybkich połączeń na [mocpilot.com](https://mocpilot.com) zawiera przykładowy profil z podobnymi wierszami; zobacz [Edytor webowy](/docs/Introducing/WebEditor).
