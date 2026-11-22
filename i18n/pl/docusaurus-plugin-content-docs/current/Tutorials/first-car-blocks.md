---
id: FirstCarBlocks
title: Ten sam samochód w Blokach logicznych
description: "Krok po kroku: zaprogramuj zdalnie sterowany samochód LEGO z napędem, skrętem serwem, światłami i kierunkowskazami w Blokach logicznych."
---

import Screenshot from '@site/src/components/Screenshot';

# Ten sam samochód w Blokach logicznych {#the-same-car-in-logic-blocks}

W tym samouczku ponownie zbudujesz samochód z artykułu [Twój pierwszy zdalnie sterowany samochód w Szybkich połączeniach](/docs/Tutorials/FirstCarLinks), tym razem w [Blokach logicznych](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Efekt będzie ten sam – joystick do jazdy i skręcania oraz przycisk do świateł – a po drodze poznasz podstawy programowania blokami: zdarzenia, pętle, zmienne i Monitor. Na koniec możesz dodać kierunkowskazy z tykającym dźwiękiem.

**Czego potrzebujesz**: tego samego modelu co w samouczku Szybkich połączeń:

- LEGO® Technic™ Hub (88012);
- silnika napędowego na **porcie A**;
- silnika skrętu z enkoderem na **porcie B** (silnika Technic L lub XL albo dowolnego silnika kątowego Technic);
- świateł LEGO® na **porcie C** (opcjonalnie).

Z City Hub użyj portów **A** i **B** i pomiń światła.

**Efekt**:

```text
gdy program się uruchamia
ustawić (światła) do 0
ustaw pozycję względną 0  (Hub 1, port B)
powtarzać zawsze
    ustawić (gaz) do (joystick JOY1 oś Y)
    uruchom silnik na (gaz) % prędkość  (Hub 1, port A)
    przejdź do względnej pozycji (joystick JOY1 oś X × 0.9) w 100 % prędkość  (Hub 1, port B)

gdy przycisk BTN1 jest naciśnięty
    jeśli (światła) = 0 wtedy
        włączyć w 100 % jasność  (Hub 1, port C)
        ustawić (światła) do 1
    inne
        wyłączyć  (Hub 1, port C)
        ustawić (światła) do 0
```

Jak czytać listingi: każdy wiersz to jeden blok, tak jak pokazuje go aplikacja. Wartości w nawiasach to hub i port wybrane w bloku albo blok lub zmienna wstawione w gniazdo. Wiersze z wcięciem znajdują się wewnątrz bloku w kształcie litery C nad nimi.

## 1. Utwórz profil {#create-the-profile}

1. Na stronie **Moje profile** zacznij nowy profil (**+** → **Nowy profil** na telefonie, **Nowy profil** na tablecie, **Plik → Nowy profil** na komputerze).
2. Wybierz kafelek **Bloki logiczne**.
3. Wpisz **Nazwę** i ustaw **Poziom bloków** na **Zaawansowany**. Użyte tu pętla **powtarzać zawsze** oraz **jeśli … wtedy … inne** to bloki zaawansowane; paleta **Początkujący** ich nie pokazuje.
4. Stuknij **Utwórz**.

Poziom możesz później zmienić w **Ustawienia edytora** → **Wybierz poziom bloków**. Zobacz [Tworzenie profilu](/docs/Application/Profiles/CreateProfile) i [Poziomy bloków](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Dodaj hub i elementy sterujące {#hub-and-dashboard}

Zrób to dokładnie tak jak w samouczku Szybkich połączeń:

1. [Dodaj i połącz hub](/docs/Tutorials/FirstCarLinks#add-the-hub) w **Moje huby**.
2. [Umieść elementy sterujące na panelu](/docs/Tutorials/FirstCarLinks#dashboard): **Dżojstik** (**JOY1**) po lewej i **Przycisk** (**BTN1**) po prawej.

<Screenshot name="tutorial-car-dashboard" alt="Panel z joystickiem JOY1 po lewej i przyciskiem BTN1 po prawej" width={900} />

Gdy hub jest już w profilu, paleta pokazuje kategorie **Silniki** i **Światło**; elementy sterujące pojawiają się w kategorii **Kontrolery ekranowe nawigacyjnego**.

## 3. Zdarzenia czy pętla? {#events-or-loop}

Skrypt zaczyna się od bloku **zdarzenia** i wykonuje bloki pod nim od góry do dołu. Kilka skryptów działa jednocześnie.

- Blok zdarzenia, taki jak [gdy przycisk … jest naciśnięty](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event), uruchamia swój skrypt raz za każdym razem, gdy zdarzenie wystąpi. Zdarzenia pasują do rzeczy, które dzieją się w konkretnej chwili: naciśnięcia przycisku, przełączenia, włączenia kierunkowskazu.
- Joystick zmienia się cały czas. Najprościej śledzić go skryptem, który zaczyna się od [gdy program się uruchamia](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) i stale odczytuje drążek w pętli [powtarzać zawsze](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Ten samochód korzysta z obu: pętli do jazdy i skręcania oraz zdarzenia do świateł.

## 4. Jazda {#drive}

1. Z kategorii **Wydarzenia** przeciągnij [gdy program się uruchamia](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) na obszar programu.
2. Z kategorii **Kontrola** doczep pod nim [powtarzać zawsze](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).
3. Z kategorii **Silniki** upuść [uruchom silnik na … % prędkość](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) wewnątrz **powtarzać zawsze**. Wybierz hub i port **A**.
4. Z kategorii **Kontrolery ekranowe nawigacyjnego** przeciągnij blok wartości [joysticka](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) w gniazdo prędkości. Wybierz **JOY1** i **oś Y**.

```text
gdy program się uruchamia
powtarzać zawsze
    uruchom silnik na (joystick JOY1 oś Y) % prędkość  (Hub 1, port A)
```

Postaw samochód na podstawce, naciśnij **Uruchom** i popchnij joystick: joystick daje wartości od −100 do 100, czyli dokładnie prędkość silnika w procentach. Gdy skończysz, naciśnij **Zatrzymaj**.

**Jedzie do tyłu, gdy pchasz w górę?** Użyj bloku [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) z kategorii **Operator**: `(joystick JOY1 oś Y × -1)`. **Za szybko?** Pomnóż zamiast tego przez 0.5.

## 5. Skręcanie {#steer}

Silnik skrętu podąża za osią X joysticka dzięki blokowi [przejdź do względnej pozycji … w … % prędkość](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Pozycje względne liczone są od punktu ustawionego blokiem [ustaw pozycję względną …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Doczep **ustaw pozycję względną** tuż pod **gdy program się uruchamia**, nad **powtarzać zawsze**. Zostaw wartość 0 i wybierz port **B**.
2. Wewnątrz **powtarzać zawsze**, pod blokiem silnika, dodaj **przejdź do względnej pozycji … w … % prędkość** z portem **B**.
3. W jego gniazdo pozycji upuść **… × …** z **osią X** joysticka po lewej i `0.9` po prawej. Zamienia to zakres −100…100 na −90…90 stopni.
4. Ustaw prędkość na 100.

```text
gdy program się uruchamia
ustaw pozycję względną 0  (Hub 1, port B)
powtarzać zawsze
    uruchom silnik na (joystick JOY1 oś Y) % prędkość  (Hub 1, port A)
    przejdź do względnej pozycji (joystick JOY1 oś X × 0.9) w 100 % prędkość  (Hub 1, port B)
```

Przed każdym **Uruchom** ustaw koła prosto ręcznie: ta pozycja staje się środkiem. Jeśli koła skręcają za mocno, użyj liczby mniejszej niż 0.9; jeśli skręcają w złą stronę, użyj −0.9.

### Opcja: automatyczna kalibracja skrętu {#calibrate-rack}

Jeśli układ kierowniczy ma ograniczniki, blok [skalibruj zębatkę … środek … stopnie …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) sam znajdzie środek i zakres ruchu. Najpierw utwórz dwie zmienne (**Zmienne** → **Utwórz zmienną**), na przykład `środek` i `zakres`, i upuść je w gniazda bloku. Blok obraca zębatkę do obu końców, zatrzymuje się na środku i zapisuje wyniki w zmiennych; skrypt toczy się dalej po zakończeniu kalibracji.

```text
gdy program się uruchamia
skalibruj zębatkę (środek) środek (zakres) stopnie  (Hub 1, port B)
ustaw pozycję względną 0  (Hub 1, port B)
powtarzać zawsze
    uruchom silnik na (joystick JOY1 oś Y) % prędkość  (Hub 1, port A)
    przejdź do względnej pozycji ((zakres × joystick JOY1 oś X) ÷ 100) w 100 % prędkość  (Hub 1, port B)
```

**ustaw pozycję względną 0** zaraz po kalibracji ustawia środek jako zero, więc pełne wychylenie drążka skręca koła o zmierzony zakres.

## 6. Światła na przycisk {#lights}

Szybkie połączenia mają gotowy blok Zatrzask. W Blokach logicznych to, czy światła są włączone, zapamiętuje [zmienna](/docs/Application/BlockBuilder/Blocks/Variables).

1. W kategorii **Zmienne** stuknij **Utwórz zmienną** i nazwij ją `światła`.
2. Na początku głównego skryptu dodaj [ustawić … do …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to): `ustawić (światła) do 0`.
3. Z kategorii **Kontrolery ekranowe nawigacyjnego** przeciągnij [gdy przycisk … jest naciśnięty](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) w puste miejsce i wybierz **BTN1**.
4. Pod nim dodaj [jeśli … wtedy … inne](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) z warunkiem [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(światła) = 0`.
5. W pierwszej gałęzi dodaj [włączyć w … % jasność](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) i `ustawić (światła) do 1`. W drugiej gałęzi dodaj [wyłączyć](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) i `ustawić (światła) do 0`.

```text
gdy przycisk BTN1 jest naciśnięty
    jeśli (światła) = 0 wtedy
        włączyć w 100 % jasność  (Hub 1, port C)
        ustawić (światła) do 1
    inne
        wyłączyć  (Hub 1, port C)
        ustawić (światła) do 0
```

Z **Przełącznikiem** zamiast przycisku jest jeszcze prościej: *gdy przełącznik … jest przełączony włączone / wyłączone*; zobacz [przykłady](/docs/Application/BlockBuilder/Examples).

## 7. Uruchom i obserwuj Monitor {#monitor}

Gdy coś nie działa zgodnie z oczekiwaniami, spójrz na wartości. [Monitor](/docs/Application/BlockBuilder/Editor#monitor) (na komputerze na górnym pasku, na telefonie lub tablecie w menu **Więcej**) pokazuje każdą zmienną podczas działania programu.

1. Utwórz zmienną `gaz`.
2. W pętli zapisuj w niej wartość joysticka i używaj tej zmiennej jako prędkości silnika:

```text
powtarzać zawsze
    ustawić (gaz) do (joystick JOY1 oś Y)
    uruchom silnik na (gaz) % prędkość  (Hub 1, port A)
    przejdź do względnej pozycji (joystick JOY1 oś X × 0.9) w 100 % prędkość  (Hub 1, port B)
```

3. Naciśnij **Uruchom** i otwórz **Monitor**. Poruszaj joystickiem i naciskaj BTN1: `gaz` podąża za drążkiem, a `światła` przełącza się między 0 a 1.

<Screenshot name="blocks-monitor" alt="Monitor pokazujący zmienne i listę podczas działania programu" width={900} />

- `gaz` się zmienia, ale silnik się nie obraca: sprawdź połączenie huba w **Moje huby** i port w bloku.
- `gaz` pozostaje na 0: sprawdź, czy blok odczytuje **JOY1** i właściwą oś.

W Blokach logicznych program można edytować także podczas działania, więc możesz zmienić liczbę i od razu zobaczyć efekt. Oto cały program:

<Screenshot name="tutorial-car-blocks-program" alt="Gotowy program samochodu: główny skrypt z pętlą powtarzać zawsze i skrypt świateł BTN1" width={900} />

Więcej pomocy: [Rozwiązywanie problemów](/docs/Help/Troubleshooting).

## 8. Opcjonalnie: kierunkowskazy z dźwiękiem {#turn-signals}

Dodaj do panelu [specjalny element sterujący](/docs/Application/Dashboard/SpecialControls#turn-signals) **Kierunkowskazy** (**STALK1**) i podłącz światło do **portu D**. Przeciągnij dźwignię w górę, aby włączyć lewy kierunkowskaz, i w dół, aby włączyć prawy.

```text
gdy kierunkowskazy STALK1 lewy kierunkowskaz włącza się
    dźwięk Kierunkowskaz odtwórz
    powtarzać, dopóki nie (kierunkowskazy STALK1 lewy kierunkowskaz jest włączony ?)
        włączyć w 100 % jasność  (Hub 1, port D)
        czekać 0.5 sekundy
        wyłączyć  (Hub 1, port D)
        czekać 0.5 sekundy
    zatrzymaj dźwięk Kierunkowskaz
```

Bloki: [gdy kierunkowskazy …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) i [kierunkowskazy … jest włączony ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) w kategorii **Kontrolery ekranowe nawigacyjnego**; [dźwięk … odtwórz](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) i [zatrzymaj dźwięk …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) w kategorii **Dźwięki**; [powtarzać, dopóki …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) i [czekać … sekundy](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) w kategorii **Kontrola**; [nie …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) w kategorii **Operator**.

Dźwięk **Kierunkowskaz** powtarza się sam, dopóki go nie zatrzymasz. Dźwięk odtwarzany jest na Twoim telefonie, tablecie lub komputerze.

Zduplikuj skrypt (przytrzymanie lub prawy przycisk → **Duplikat**) i w obu blokach wybierz **prawy kierunkowskaz**. Oba kierunkowskazy będą wtedy migać tym samym światłem na porcie D; do osobnych lamp lewej i prawej potrzebujesz dwóch wolnych portów, na przykład w drugim hubie.

## Szybkie połączenia czy Bloki logiczne: co wybrać? {#which-to-choose}

| | Szybkie połączenia | Bloki logiczne |
|---|---|---|
| Ten samochód | 3 wiersze | 2 skrypty, 2 zmienne |
| Płynny start, martwa strefa, ograniczenie | gotowe bloki | mnożenie i obliczenia samodzielnie |
| Skręt serwem | blok Serwo z kalibracją Auto | bloki pozycji względnej lub kalibracja zębatki |
| Światła na przycisk | blok Zatrzask | zmienna i *jeśli … wtedy … inne* |
| Dźwięki, sekwencje, warunki | nie | tak |
| Bieżące wartości | na każdym złączu wiersza | Monitor i monitory na panelu |
| Edycja podczas działania | nie | tak |

Wybierz **Szybkie połączenia**, gdy każdy element sterujący po prostu czymś porusza: samochody, ciężarówki, pociągi, dźwigi. Wybierz **Bloki logiczne**, gdy potrzebujesz logiki: dźwięków, wzorów migania, sekwencji, reakcji na czujniki, gier. Typu programu nie da się zmienić, ale możesz utworzyć drugi profil dla tego samego modelu. Więcej w artykule [Tworzenie profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Co dalej {#next-steps}

- Pokaż stan baterii na **Monitorze** w panelu i ostrzegaj, gdy się kończy: [Przykłady](/docs/Application/BlockBuilder/Examples#battery-warning).
- Steruj gamepadem: [Bloki gamepada](/docs/Application/BlockBuilder/Blocks/Gamepad) i [przykład z gamepadem](/docs/Application/BlockBuilder/Examples#gamepad).
- Spraw, by samochód zachowywał się realistycznie dzięki pedałom, skrzyni biegów i bezwładności: [Symulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Poznaj edytor: [Praca w edytorze](/docs/Application/BlockBuilder/Editor).
