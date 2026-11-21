---
id: FirstCarBlocks
title: Aceeași mașină în Blocuri logice
description: "Pas cu pas: programează în Blocuri logice o mașină LEGO teleghidată cu tracțiune, direcție cu servo, lumini și semnalizatoare."
---

import Screenshot from '@site/src/components/Screenshot';

# Aceeași mașină în Blocuri logice {#the-same-car-in-logic-blocks}

Acest tutorial construiește din nou mașina din [Prima ta mașină teleghidată cu Legături rapide](/docs/Tutorials/FirstCarLinks), de data aceasta în [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Obții același rezultat, un joystick care conduce și virează și un buton pentru lumini, iar pe parcurs înveți bazele programării cu blocuri: evenimente, bucle, variabile și Monitorul. La final poți adăuga semnalizatoare cu sunet de ticăit.

**De ce ai nevoie**: același model ca în tutorialul Legături rapide:

- un LEGO® Technic™ Hub (88012);
- un motor de tracțiune pe **portul A**;
- un motor de direcție cu encoder pe **portul B** (un motor Technic L sau XL ori orice motor unghiular Technic);
- lumini LEGO® pe **portul C** (opțional).

Cu un City Hub, folosește porturile **A** și **B** și renunță la lumini.

**Rezultatul**:

```text
când începe programul
seta (lumini) la 0
setează poziția relativă 0  (Hub 1, portul B)
repeta mereu
    seta (accelerație) la (joystick JOY1 axa Y)
    pornește motorul la (accelerație) % viteză  (Hub 1, portul A)
    mergi la poziție relativă (joystick JOY1 axa X × 0.9) la 100 % viteză  (Hub 1, portul B)

când butonul BTN1 este apăsat
    dacă (lumini) = 0 atunci
        porni la 100 % luminozitate  (Hub 1, portul C)
        seta (lumini) la 1
    altul
        opriți  (Hub 1, portul C)
        seta (lumini) la 0
```

Cum citești listările: fiecare linie este un bloc, așa cum îl afișează aplicația. Valorile dintre paranteze sunt hubul și portul pe care le alegi în bloc sau un bloc ori o variabilă pe care le pui într-un slot. Liniile indentate intră în blocul C de deasupra lor.

## 1. Creează profilul {#create-the-profile}

1. În **Profilurile mele**, începe un profil nou (**+** → **Profil nou** pe telefon, **Profil nou** pe tabletă, **Fișier → Profil nou** pe computer).
2. Alege dala **Blocuri logice**.
3. Introdu un **Nume** și setează **Nivel blocuri** la **Avansat**. Bucla **repeta mereu** și **dacă … atunci … altul** folosite aici sunt blocuri de nivel Avansat; paleta **Începător** nu le afișează.
4. Atinge **Creează**.

Nivelul îl poți schimba mai târziu din **Setări editor** → **Selectează nivelul blocurilor**. Vezi [Creează un profil](/docs/Application/Profiles/CreateProfile) și [Niveluri de blocuri](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Adaugă hubul și comenzile {#hub-and-dashboard}

Procedează exact ca în tutorialul Legături rapide:

1. [Adaugă și conectează hubul](/docs/Tutorials/FirstCarLinks#add-the-hub) în **Huburile mele**.
2. [Așază comenzile pe tabloul de bord](/docs/Tutorials/FirstCarLinks#dashboard): un **Joystick** (**JOY1**) în stânga și un **Buton** (**BTN1**) în dreapta.

<Screenshot name="tutorial-car-dashboard" alt="Tablou de bord cu joystickul JOY1 în stânga și butonul BTN1 în dreapta" width={900} />

Odată ce hubul este în profil, paleta afișează categoriile **Motoare** și **Lumina**; comenzile apar în **Controlere pe ecran**.

## 3. Evenimente sau buclă? {#events-or-loop}

Un script începe cu un bloc **eveniment** și rulează blocurile de sub el de sus în jos. Mai multe scripturi rulează în același timp.

- Un bloc eveniment precum [când butonul … este apăsat](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) își rulează scriptul o dată, de fiecare dată când are loc evenimentul. Evenimentele se potrivesc pentru lucruri care se întâmplă într-un anumit moment: apăsarea unui buton, un comutator, o semnalizare.
- Un joystick se schimbă tot timpul. Cel mai simplu mod de a-l urmări este un script care începe cu [când începe programul](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) și citește stickul continuu într-o buclă [repeta mereu](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Această mașină le folosește pe amândouă: o buclă pentru condus și virat și un eveniment pentru lumini.

## 4. Tracțiunea {#drive}

1. Din **Evenimente**, trage [când începe programul](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) în zona programului.
2. Din **Control**, atașează [repeta mereu](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) sub el.
3. Din **Motoare**, pune [pornește motorul la … % viteză](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) în interiorul lui **repeta mereu**. Alege hubul și portul **A**.
4. Din **Controlere pe ecran**, trage blocul de valoare [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) în slotul pentru viteză. Alege **JOY1** și **axa Y**.

```text
când începe programul
repeta mereu
    pornește motorul la (joystick JOY1 axa Y) % viteză  (Hub 1, portul A)
```

Pune mașina pe un suport, apasă **Rulează** și împinge joystickul: joystickul dă valori de la −100 la 100, exact viteza motorului în procente. Apasă **Oprește** când ai terminat.

**Merge înapoi când împingi în sus?** Folosește [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) din **Operator**: `(joystick JOY1 axa Y × -1)`. **Prea rapid?** Înmulțește în schimb cu 0,5.

## 5. Direcția {#steer}

Motorul de direcție urmează axa X a joystickului cu [mergi la poziție relativă … la … % viteză](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Pozițiile relative se măsoară de la punctul setat cu [setează poziția relativă …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Atașează **setează poziția relativă** imediat sub **când începe programul**, deasupra lui **repeta mereu**. Lasă valoarea 0 și alege portul **B**.
2. În interiorul lui **repeta mereu**, sub blocul motorului, adaugă **mergi la poziție relativă … la … % viteză** cu portul **B**.
3. În slotul pentru poziție, pune **… × …**, cu **axa X** a joystickului în stânga și `0.9` în dreapta. Astfel −100…100 devine −90…90 de grade.
4. Setează viteza la 100.

```text
când începe programul
setează poziția relativă 0  (Hub 1, portul B)
repeta mereu
    pornește motorul la (joystick JOY1 axa Y) % viteză  (Hub 1, portul A)
    mergi la poziție relativă (joystick JOY1 axa X × 0.9) la 100 % viteză  (Hub 1, portul B)
```

Înainte de fiecare **Rulează**, îndreaptă roțile cu mâna: acea poziție devine centrul. Dacă roțile virează prea mult, folosește un număr mai mic decât 0,9; dacă virează în sens greșit, folosește −0,9.

### Variantă: calibrează direcția automat {#calibrate-rack}

Dacă direcția are opritoare, [calibrare cremalieră … centru … grade …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) găsește singur centrul și cursa. Creează mai întâi două variabile (**Variabile** → **Creează o variabilă**), de exemplu `centru` și `cursă`, și pune-le în sloturile blocului. Blocul rotește cremaliera până la ambele capete, se oprește la mijloc și scrie rezultatele în variabile; scriptul continuă după terminarea calibrării.

```text
când începe programul
calibrare cremalieră (centru) centru (cursă) grade  (Hub 1, portul B)
setează poziția relativă 0  (Hub 1, portul B)
repeta mereu
    pornește motorul la (joystick JOY1 axa Y) % viteză  (Hub 1, portul A)
    mergi la poziție relativă ((cursă × joystick JOY1 axa X) ÷ 100) la 100 % viteză  (Hub 1, portul B)
```

**setează poziția relativă 0** imediat după calibrare face din mijloc punctul zero, așa că stickul împins complet virează roțile cu toată cursa măsurată.

## 6. Luminile pe un buton {#lights}

Legături rapide are un bloc Comutare gata făcut. În Blocuri logice, o [variabilă](/docs/Application/BlockBuilder/Blocks/Variables) ține minte dacă luminile sunt aprinse.

1. În **Variabile**, atinge **Creează o variabilă** și numește-o `lumini`.
2. Adaugă [seta … la …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) la începutul scriptului principal: `seta (lumini) la 0`.
3. Din **Controlere pe ecran**, trage [când butonul … este apăsat](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) într-un loc liber și alege **BTN1**.
4. Sub el, adaugă [dacă … atunci … altul](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) cu condiția [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lumini) = 0`.
5. În prima ramură, adaugă [porni la … % luminozitate](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (portul **C**) și `seta (lumini) la 1`. În a doua ramură, adaugă [opriți](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (portul **C**) și `seta (lumini) la 0`.

```text
când butonul BTN1 este apăsat
    dacă (lumini) = 0 atunci
        porni la 100 % luminozitate  (Hub 1, portul C)
        seta (lumini) la 1
    altul
        opriți  (Hub 1, portul C)
        seta (lumini) la 0
```

Cu un **Comutator** în locul butonului e și mai simplu: *când comutator … este comutat activat / oprit*; vezi [exemplele](/docs/Application/BlockBuilder/Examples).

## 7. Rulează și urmărește Monitorul {#monitor}

Când ceva nu merge cum te aștepți, uită-te la valori. [Monitorul](/docs/Application/BlockBuilder/Editor#monitor) din bara de sus arată fiecare variabilă cât timp programul rulează.

1. Creează o variabilă `accelerație`.
2. În buclă, salvează în ea valoarea joystickului și folosește variabila pentru viteza motorului:

```text
repeta mereu
    seta (accelerație) la (joystick JOY1 axa Y)
    pornește motorul la (accelerație) % viteză  (Hub 1, portul A)
    mergi la poziție relativă (joystick JOY1 axa X × 0.9) la 100 % viteză  (Hub 1, portul B)
```

3. Apasă **Rulează** și deschide **Monitor**. Mișcă joystickul și apasă BTN1: `accelerație` urmează stickul, iar `lumini` trece între 0 și 1.

<Screenshot name="blocks-monitor" alt="Monitorul afișând variabile și o listă cât timp programul rulează" width={900} />

- `accelerație` se schimbă, dar motorul nu se rotește: verifică conexiunea hubului în **Huburile mele** și portul din bloc.
- `accelerație` rămâne la 0: verifică dacă blocul citește **JOY1** și axa corectă.

În Blocuri logice, programul rămâne editabil cât timp rulează, așa că poți schimba un număr și vezi efectul imediat. Iată întregul program:

<Screenshot name="tutorial-car-blocks-program" alt="Programul terminat al mașinii: scriptul principal cu bucla repeta mereu și scriptul pentru lumini pe BTN1" width={900} />

Mai mult ajutor: [Depanare](/docs/Help/Troubleshooting).

## 8. Opțional: semnalizatoare cu sunet {#turn-signals}

Adaugă pe tabloul de bord [comanda specială](/docs/Application/Dashboard/SpecialControls#turn-signals) **Semnalizare** (**STALK1**) și conectează o lumină la **portul D**. Trage maneta în sus pentru semnalizarea stânga și în jos pentru cea dreapta.

```text
când semnalizatoarele STALK1 semnalizarea stânga se aprinde
    sunetul Semnalizare redă
    repeta cât timp nu (semnalizatoarele STALK1 semnalizarea stânga este aprins ?)
        porni la 100 % luminozitate  (Hub 1, portul D)
        aștepta 0.5 secunde
        opriți  (Hub 1, portul D)
        aștepta 0.5 secunde
    oprește sunetul Semnalizare
```

Blocurile: [când semnalizatoarele …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) și [semnalizatoarele … este aprins ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) în **Controlere pe ecran**; [sunetul … redă](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) și [oprește sunetul …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) în **Sunete**; [repeta cât timp …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) și [aștepta … secunde](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) în **Control**; [nu …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) în **Operator**.

Sunetul **Semnalizare** se repetă singur până îl oprești. Sunetul se aude pe telefonul, tableta sau computerul tău.

Duplică scriptul (apăsare lungă sau clic dreapta → **Duplică**) și alege **semnalizarea dreapta** în ambele blocuri. Atunci ambele semnalizări fac să clipească aceeași lumină de pe portul D; pentru lămpi separate stânga și dreapta ai nevoie de două porturi libere, de exemplu pe un al doilea hub.

## Legături rapide sau Blocuri logice: ce să alegi? {#which-to-choose}

| | Legături rapide | Blocuri logice |
|---|---|---|
| Această mașină | 3 rânduri | 2 scripturi, 2 variabile |
| Pornire lină, zonă moartă, limită | blocuri gata făcute | înmulțești și calculezi singur |
| Direcție cu servo | blocul Servo cu calibrare Auto | blocuri de poziție relativă sau calibrare cremalieră |
| Lumini pe un buton | blocul Comutare | o variabilă și *dacă … atunci … altul* |
| Sunete, secvențe, condiții | nu | da |
| Valori în timp real | pe fiecare îmbinare a unui rând | Monitorul și monitoarele de pe tabloul de bord |
| Editare în timpul rulării | nu | da |

Alege **Legături rapide** când fiecare comandă doar mișcă ceva: mașini, camioane, trenuri, macarale. Alege **Blocuri logice** când ai nevoie de logică: sunete, modele de clipire, secvențe, reacții la senzori, jocuri. Tipul de program nu poate fi schimbat, dar poți face un al doilea profil pentru același model. Mai multe în [Creează un profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Pașii următori {#next-steps}

- Afișează bateria pe un **Monitor** de pe tabloul de bord și avertizează când se descarcă: [Exemple](/docs/Application/BlockBuilder/Examples#battery-warning).
- Condu cu un gamepad: [Blocurile gamepadului](/docs/Application/BlockBuilder/Blocks/Gamepad) și [exemplul cu gamepad](/docs/Application/BlockBuilder/Examples#gamepad).
- Fă mașina să pară reală cu pedale, cutie de viteze și inerție: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Învață editorul: [Lucrul în editor](/docs/Application/BlockBuilder/Editor).
