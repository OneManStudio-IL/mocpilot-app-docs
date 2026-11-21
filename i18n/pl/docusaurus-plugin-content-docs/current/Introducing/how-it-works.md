---
id: HowItWorks
title: Jak działa MOCPilot
description: "Profile, panel, huby i program: cztery części każdego modelu w MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Jak działa MOCPilot {#how-mocpilot-works}

Wszystko w MOCPilot składa się z czterech części. Gdy je poznasz, każdy ekran stanie się zrozumiały.

<HowItWorks />

## 1. Profil: jeden model {#1-profile-one-model}

**Profil** zawiera wszystko o jednym modelu: jego huby, panel i program. Utwórz jeden profil na model, na przykład „Technic Buggy” albo „Dźwig samochodowy”.

Podczas tworzenia profilu wybierasz jego **typ programu**: Bloki logiczne lub Szybkie połączenia. Nie da się go później zmienić. Zobacz [Tworzenie profilu](/docs/Application/Profiles/CreateProfile).

## 2. Huby: elektronika modelu {#2-hubs-the-models-electronics}

**Huby** to klocki Bluetooth w Twoim modelu; do ich portów podłącza się silniki, światła i czujniki. Profil ma **sloty** na huby. Huby modelu dodajesz do slotów raz, a MOCPilot łączy się z nimi przy każdym otwarciu profilu. Zobacz [Huby](/docs/Application/Hubs/HubsOverview).

## 3. Panel: Twoje elementy sterujące {#3-dashboard-your-controls}

**Panel** to ekran, z którego sterujesz. Rozmieszczasz na siatce elementy sterujące: joysticki, suwaki, przyciski, przełączniki, przełączniki krokowe i monitory, a także specjalne elementy, takie jak kierownica i pedały. Element sterujący sam nic nie robi – przekazuje swoje wartości do programu. Zobacz [Panel](/docs/Application/Dashboard/DashboardOverview).

Możesz też używać gamepada – razem z panelem albo zamiast niego. Zobacz [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Program: to, co je łączy {#4-program-what-connects-them}

**Program** decyduje, co się dzieje, gdy poruszasz elementem sterującym: który silnik się obraca i jak szybko, które światło miga, co pokazuje monitor.

- W **Szybkich połączeniach** program to lista wierszy: *wejście → przetwarzanie → operacja → hub*. Zobacz [Szybkie połączenia](/docs/Application/Links/LinksIntroducing).
- W **Blokach logicznych** program składa się z bloków: zdarzeń, pętli, warunków, zmiennych i czujników. Zobacz [Bloki logiczne](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Uruchomienie {#5-run}

Naciśnij **Uruchom** (▶). Program startuje, elementy sterujące na panelu ożywają, a model reaguje. Naciśnij **Zatrzymaj**, aby wrócić do edycji. Zobacz [Sterowanie modelem](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program Szybkich połączeń: elementy sterujące panelu połączone z portami huba" width={900} />

## Typowa sesja {#a-typical-session}

1. Otwórz profil lub [utwórz nowy](/docs/Application/Profiles/CreateProfile).
2. Dodaj huby w **Moje huby** i włącz je.
3. Rozmieść elementy sterujące na **Panelu**.
4. Połącz je z silnikami i światłami w **programie**.
5. Naciśnij **Uruchom**, steruj, poprawiaj, powtarzaj.

## Co jest przechowywane i gdzie {#what-is-stored-where}

- Profile są zapisywane na Twoim urządzeniu. Gdy jesteś zalogowany, są też przechowywane na Twoim koncie i pojawiają się na wszystkich Twoich urządzeniach. Zobacz [Synchronizacja między urządzeniami](/docs/Application/Account/Sync).
- Motywy i inne zakupy należą do Twojego konta. Zobacz [MocPilot Pro i zakupy](/docs/Application/Account/Pro).
