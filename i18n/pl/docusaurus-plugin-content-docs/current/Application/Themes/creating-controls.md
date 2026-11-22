---
id: CreatingControls
title: Tworzenie elementów sterujących z motywu
description: "Skonfiguruj element sterujący z dowolnego motywu i zapisuj własne projekty do ponownego użycia."
---

import Screenshot from '@site/src/components/Screenshot';

# Tworzenie elementów sterujących z motywu {#create-controls-from-a-theme}

Każdy dodawany element sterujący zaczyna się od motywu. Możesz go skonfigurować przed dodaniem i zapisać skonfigurowany element jako własny projekt.

## Konfiguracja przed dodaniem {#configure-before-adding}

1. Otwórz **Dodaj kontroler** (**+** na panelu, **+ Kontroler** na komputerze).
2. Wybierz typ elementu i wygląd na pasku wyglądów.
3. W sekcji **Konfiguruj** użyj kart **Styl** i **Ustawienia**: rozmiar (paleta pokazuje go jako „S x W kropek”), kolor akcentu, ikona, opcje motywu, zachowanie.
4. Stuknij **Dodaj do panelu**.

<Screenshot name="controller-properties" alt="Konfigurowanie elementu sterującego" width={900} />

## Zapisywanie projektu {#save-a-design}

Gdy znajdziesz kombinację, która Ci się podoba (na przykład czerwony przycisk z motywu Wyścigi z ikoną klaksonu), zachowaj ją:

1. Wybierz skonfigurowany element z posiadanego motywu.
2. Stuknij **Zapisz projekt**.
3. Projekt pojawi się w **Moje projekty** → **Zapisane projekty**. Możesz go jednym stuknięciem dodać do panelu dowolnego profilu.

**Usuń** usuwa zapisany projekt.

## Kopiowanie elementów sterujących na panelu {#copy-controls-on-the-dashboard}

- **Duplikat** kopiuje element sterujący ze wszystkimi jego właściwościami.
- **Duplikat (Tylko typ)** dodaje element tego samego typu z domyślnymi właściwościami.
- **Zmień motyw** przełącza element na inny posiadany motyw bez utraty jego miejsca i połączeń z programem.

## Dobry panel {#a-good-dashboard}

- Umieść elementy do jazdy pod kciukami: joystick lub pedały po jednej stronie, sterowanie skrętem po drugiej.
- Używaj rozmiaru **L** dla najczęściej używanych elementów, a **S** dla rzadko używanych.
- Używaj jednego koloru akcentu na funkcję: zielony do jazdy, żółty do świateł, czerwony do zatrzymania.
- Gdy układ jest gotowy, zablokuj elementy (**Zablokuj wszystko**).
- Dodaj monitor baterii, aby wiedzieć, kiedy ją naładować.

:::info Własna grafika
W aplikacji nie można rysować całkowicie nowych elementów sterujących ani motywów. Motywy tworzy zespół MOCPilot; jeśli masz pomysł na motyw, daj nam znać przez **Pomoc → Zadaj pytanie**.
:::
