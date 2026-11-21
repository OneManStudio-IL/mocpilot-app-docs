---
id: Gamepad
title: Gamepad
description: "Steruj modelem gamepadem w stylu Xbox lub PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Fizyczny gamepad bywa wygodniejszy niż ekran dotykowy: prawdziwe drążki, spusty i przyciski. MOCPilot współpracuje z gamepadami Bluetooth i USB obsługiwanymi przez system urządzenia (kontrolery w stylu Xbox i PlayStation na iPhonie, iPadzie, Androidzie, Macu i Windows).

Gamepad działa razem z panelem; możesz używać obu jednocześnie.

## Podłączanie gamepada {#connect-a-gamepad}

1. Sparuj gamepad z telefonem, tabletem lub komputerem w systemowych ustawieniach Bluetooth (albo podłącz go przez USB).
2. Otwórz profil i stuknij **Gamepad** w edytorze.
3. Nagłówek strony pokazuje **Gamepad: (nazwa)**. Komunikat „Gamepad nie jest podłączony” oznacza, że system jeszcze go nie widzi.

<Screenshot name="gamepad" alt="Strona Gamepad" width={900} />

## Strona Gamepad {#gamepad-page}

- **Włącz bloki gamepada**: włącza wejścia gamepada w tym profilu. Bez tej opcji wiersze Szybkich połączeń z wejściem Gamepad zgłaszają „Włącz bloki gamepada na stronie „Gamepad” (górny pasek)”, a Bloki logiczne nie pokazują kategorii Gamepad.
- **Układ przycisków gamepada**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) lub **Sony PS** (Krzyżyk, Kółko, Kwadrat, Trójkąt, L1, R1, L2, R2). Edytory opisują przyciski zgodnie z tym wyborem.
- **Zakres wartości gamepada** (Bloki logiczne): drążki dają **-1..1** lub **-100..100**.
- **Wybierz gamepad**: gdy podłączony jest więcej niż jeden gamepad.
- **Testuj gamepad** → **Test**: tester na żywo, który pokazuje przyciski, spusty, drążki i krzyżak, dzięki czemu sprawdzisz wszystko przed użyciem.

Ustawienia są zapisywane w profilu.

## Gamepad w Szybkich połączeniach {#use-the-gamepad-in-quick-links}

Przeciągnij wejście **Gamepad** do wiersza i wybierz jego **Wejście**:

- drążki: Lewy drążek Y, Lewy drążek X, Prawy drążek Y, Prawy drążek X;
- spusty: RT / LT (R2 / L2);
- przyciski czołowe: A, B, X, Y (Krzyżyk, Kółko, Kwadrat, Trójkąt);
- przyciski ramion: LB / RB (L1 / R1);
- krzyżak: Góra, Dół, Lewo, Prawo.

Przykład: *Gamepad* (Lewy drążek Y) → *Wygładzanie* → *Silnik* → *Hub* (port A). Zobacz [Wejścia](/docs/Application/Links/Inputs#gamepad).

## Gamepad w Blokach logicznych {#use-the-gamepad-in-logic-blocks}

Kategoria **Gamepad** zawiera bloki zdarzeń (*gdy przycisk gamepada jest …*, *gdy krzyżak gamepada jest …*, *gdy drążek gamepada jest …*) oraz bloki wartości (przycisk, krzyżak, drążek, nacisk spustu). Zobacz [Bloki gamepada](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profile do publikacji {#profiles-for-publishing}

Profil można opublikować w katalogu z samym gamepadem, bez elementów sterujących na panelu: wymaganie brzmi „kontroler na panelu lub gamepad”.
