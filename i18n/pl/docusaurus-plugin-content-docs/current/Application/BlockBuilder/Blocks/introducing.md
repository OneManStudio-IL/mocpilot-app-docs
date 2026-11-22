---
id: BlocksIntroducing
title: Poznaj Bloki logiczne
description: "Bloki logiczne to wizualny edytor programowania blokowego w MOCPilot: zdarzenia, pętle, warunki, zmienne, czujniki i dźwięki."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Bloki logiczne

**Bloki logiczne** to edytor programowania blokowego w MOCPilot. Programy budujesz, łącząc bloki ze sobą, podobnie jak w Scratchu: zdarzenia, pętle, warunki, zmienne, listy, własne bloki, dźwięki oraz bloki silników, świateł, czujników, kontrolerów panelu i gamepada.

Wybierz Bloki logiczne, gdy model potrzebuje logiki: roboty, automatyczne sekwencje, reakcje na czujniki, kontrole przy starcie, gry. Jeśli chcesz tylko połączyć kontrolery z silnikami, szybciej pójdzie w [Szybkich połączeniach](/docs/Application/Links/LinksIntroducing).

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program w Blokach logicznych" style={{width: '100%', maxWidth: 720}} />

:::warning To nie Scratch
Bloki logiczne mają własny zestaw bloków i własne zachowanie. Nie można importować programów MOCPilot do Scratcha ani projektów Scratcha do MOCPilot.
:::

## Edytor w skrócie {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Edytor Bloków logicznych z paletą i programem" width={900} />

- **Paleta** zawiera kategorie bloków: **Wydarzenia**, **Kontrola**, **Czujniki**, **Dźwięki**, **Operator**, **Zmienne**, **Listy** i **Moje bloki**. Inne kategorie pojawiają się, gdy potrzebuje ich Twój profil: **Silniki** i **Światło** (gdy obsługuje je hub), **Symulator** (gdy na panelu są pedały, skrzynia biegów lub hamulec ręczny), **Kontrolery ekranowe nawigacyjnego** i **Gamepad**.
- **Obszar programu** to miejsce, do którego przeciągasz bloki i w którym budujesz skrypty.
- Na górnym pasku są **Cofnij** i **Ponów**, **Panel**, **Moje huby**, **Gamepad**, panele boczne **Kreator AI**, [**Plecak**](/docs/Application/BlockBuilder/Backpack) i **Monitor**, **Więcej** (z **Ustawieniami edytora**) oraz **Uruchom/Zatrzymaj**. Na telefonie lub tablecie panele boczne i Gamepad są w menu **Więcej**.

Szczegóły: [Praca w edytorze](/docs/Application/BlockBuilder/Editor).

## Jak działa program {#how-a-program-runs}

- Skrypt zaczyna się od bloku **zdarzenia** (bloku-czapki): *gdy program się uruchamia*, *gdy przycisk … jest naciśnięty*, *kiedy otrzymam …* i tak dalej.
- Bloki dołączone pod nim wykonują się od góry do dołu.
- Kilka skryptów działa **jednocześnie**. Do ich koordynacji używaj wiadomości (*przekazać*).
- **Pętle** (*powtarzać zawsze*, *powtórzyć*, *powtarzać, dopóki*) podtrzymują działanie skryptu; **warunki** (*jeśli*, *jeśli … inne*, *czekać aż*) podejmują decyzje.
- Bloki **raportujące** (zaokrąglone) zwracają wartości i pasują do pól innych bloków; bloki **logiczne** (ze szpiczastymi końcami) zwracają prawdę lub fałsz do warunków.
- **Zmienne** i **listy** przechowują wartości między blokami i skryptami.

## Kształty bloków {#block-shapes}

### Bloki-czapki {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Uruchamiają skrypt, gdy coś się wydarzy. Bloki można dołączać tylko pod nimi.

---

### Bloki poleceń {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Główne bloki poleceń: każdy z nich coś robi.

---

### Bloki C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloki w kształcie litery C, które obejmują inne bloki: pętle i warunki.

---

### Bloki raportujące {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Zwracają wartość, na przykład liczbę lub tekst.

---

### Bloki logiczne (boolean) {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Zwracają tylko `true` lub `false`. Zwykle używa się ich w warunkach.

---

### Bloki kończące {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Kończą skrypt: pod nimi nie można niczego dołączyć.

---

### Stos bloków {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Stos to grupa połączonych bloków, która działa jako jeden skrypt, od góry do dołu.
Stos zwykle zaczyna się od bloku zdarzenia, po którym następują bloki wykonywane po kolei.

---


## Huby, porty i kontrolery {#hubs-ports-and-controls}

- Bloki silników i świateł przyjmują **hub** i **port**. Kategorie Silniki i Światło pojawiają się tylko wtedy, gdy obsługuje je któryś hub w profilu, a niektóre bloki istnieją tylko dla określonych hubów (na przykład tryby mocy BuWizz lub funkcje Technic Move Hub). Opis każdego bloku podaje, z którymi hubami działa.
- Bloki panelu odwołują się do kontrolerów po nazwie (**JOY1**, **BTN2**). Nie można usunąć kontrolera z panelu, dopóki używają go bloki; najpierw usuń te bloki.
- Bloki gamepada pojawiają się, gdy na [stronie Gamepad](/docs/Application/Dashboard/Gamepad) włączona jest opcja **Włącz bloki gamepada**.

## Poziomy bloków {#block-levels}

Każdy profil ma **poziom bloków**: **Początkujący** pokazuje najprostsze bloki, **Zaawansowany** dodaje popularne bloki logiki i urządzeń, a **Guru** pokazuje pełny zestaw. Wybierasz go przy tworzeniu profilu albo później w Ustawieniach edytora. W tym opisie poziom każdego bloku podano obok jego nazwy.

## Zalecany sposób pracy {#recommended-workflow}

1. Zacznij od jednego bloku zdarzenia i krótkiego skryptu; naciśnij **Uruchom** i sprawdź, czy działa.
2. Wcześnie sprawdź kierunki obrotu silników i zakresy wartości (pomoże Monitor).
3. Podziel program na małe skrypty, które komunikują się ze sobą za pomocą wiadomości; powtarzającą się logikę przenieś do [Moich bloków](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Zadbaj o bezpieczeństwo: ograniczenia, zatrzymania, kontrolę przy starcie i plan na wypadek rozłączenia huba.

## Typowe pułapki {#common-pitfalls}

- Skrypt bez bloku zdarzenia nigdy się nie uruchomi.
- Wybrano niewłaściwy hub lub port, więc nic widocznego się nie dzieje.
- Mieszanie tekstu, liczb i wartości logicznych daje nieoczekiwane wyniki.
- Bardzo częste zdarzenia bez filtrowania (na przykład zdarzenie czujnika przy każdej najmniejszej zmianie) mogą przeciążyć program; używaj progów lub krótkich oczekiwań.

## Opis bloków {#block-reference}

- [Wydarzenia](/docs/Application/BlockBuilder/Blocks/Events) · [Kontrola](/docs/Application/BlockBuilder/Blocks/Control) · [Operator](/docs/Application/BlockBuilder/Blocks/Operators)
- [Zmienne](/docs/Application/BlockBuilder/Blocks/Variables) · [Listy](/docs/Application/BlockBuilder/Blocks/Lists) · [Moje bloki](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Silniki](/docs/Application/BlockBuilder/Blocks/Motors) · [Światło](/docs/Application/BlockBuilder/Blocks/Light) · [Czujniki](/docs/Application/BlockBuilder/Blocks/Sensors) · [Dźwięki](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Symulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Kontrolery panelu](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

W aplikacji przytrzymaj blok (lub kliknij go prawym przyciskiem myszy) i wybierz **O bloku**, aby otworzyć tutaj jego opis.

Gotowe programy: [Przykłady](/docs/Application/BlockBuilder/Examples).
