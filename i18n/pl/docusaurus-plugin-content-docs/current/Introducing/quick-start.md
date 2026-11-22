---
id: QuickStart
title: Szybki start
description: "Zainstaluj MOCPilot, zaloguj się, utwórz pierwszy profil i steruj modelem w kilka minut."
---

import Screenshot from '@site/src/components/Screenshot';

# Szybki start {#quick-start}

Ten przewodnik prowadzi od instalacji aplikacji do uruchomienia Twojego pierwszego modelu. Potrzebujesz obsługiwanego huba z silnikiem; zobacz [Obsługiwane urządzenia](/docs/Introducing/SupportedDevices).

## 1. Zainstaluj aplikację {#1-install-the-app}

MOCPilot jest dostępny w App Store (iPhone, iPad, Mac), Google Play (Android) i Microsoft Store (Windows). Linki znajdziesz na [mocpilot.com](https://mocpilot.com).

## 2. Zaloguj się lub kontynuuj bez konta {#2-sign-in-or-continue-without-an-account}

Przy pierwszym uruchomieniu aplikacja prosi o zalogowanie. Użyj adresu e-mail lub loginu i hasła, konta Google lub Apple ID albo utwórz nowe konto.

<Screenshot name="sign-in" alt="Ekran logowania MOCPilot" width={900} />

Zalecamy założenie konta:

- Twoje profile i ustawienia są przechowywane na serwerze i synchronizowane między urządzeniami;
- odzyskasz swoje dane, jeśli wymienisz lub zgubisz urządzenie;
- zakupy i MocPilot Pro działają na wszystkich Twoich urządzeniach.

Możesz też wybrać **Kontynuuj bez konta**, ale wtedy wszystko zostaje tylko na tym urządzeniu i przepadnie po usunięciu aplikacji. Zalogować się możesz później w **Ustawienia → Konto**. Zobacz [Konto](/docs/Application/Account/UserAccount).

## 3. Poznaj aplikację {#3-find-your-way-around}

- Na **telefonie** dolny pasek zawiera **Profile**, **Ustawienia** i **Pomoc** (a po zalogowaniu także **Powiadomienia**).
- Na **tablecie** te same sekcje, **Katalog profili** i Twoje konto znajdują się na pasku bocznym.
- Na **komputerze** korzystaj z górnego paska: menu po lewej; Konto, Powiadomienia i Ustawienia po prawej.

Zobacz [Telefon, tablet i komputer](/docs/Introducing/Layouts).

## 4. Utwórz profil {#4-create-a-profile}

1. Na stronie **Moje profile** stuknij **+** → **Nowy profil** (telefon) albo wybierz **Nowy profil** (tablet i komputer lub **Plik → Nowy profil**).
2. Wybierz **typ programu**:
   - **Szybkie połączenia**, jeśli chcesz sterować modelem bez kodu. Najlepszy wybór na początek.
   - **Bloki logiczne**, jeśli potrzebujesz zdarzeń, pętli, warunków i czujników.
3. Wpisz **nazwę** i, jeśli chcesz, dodaj obraz.
4. Stuknij **Utwórz**.

<Screenshot name="create-profile-tiles" alt="Strona Nowy profil z kafelkami Bloki logiczne i Szybkie połączenia" width={900} />

Profil otworzy się w edytorze. Więcej w artykule [Tworzenie profilu](/docs/Application/Profiles/CreateProfile).

:::tip Chcesz gotowy model?
Otwórz **Katalog profili** (**Szukaj online** na stronie profili) i zainstaluj oficjalny profil dla swojego zestawu. Zobacz [Katalog i publikowanie](/docs/Application/Profiles/Catalog).
:::

## 5. Dodaj hub {#5-add-your-hub}

1. W edytorze otwórz **Moje huby** (na komputerze **Huby** na górnym pasku).
2. Stuknij **Dodaj nowy hub** w wolnym slocie, wybierz model huba i stuknij **Dodaj**.
3. Włącz hub, naciśnij jego przycisk i poczekaj, aż MOCPilot go znajdzie.

<Screenshot name="my-hubs" alt="Strona Moje huby ze slotami na huby" width={900} />

Jeśli aplikacja poprosi o aktualizację firmware, postępuj zgodnie z artykułem [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating). Więcej w artykule [Dodawanie i łączenie huba](/docs/Application/Hubs/ConnectingHubs).

## 6. Rozmieść elementy sterujące na panelu {#6-place-controls-on-the-dashboard}

1. Otwórz **Panel**.
2. Stuknij **+** (**Dodaj kontroler**; na komputerze **+ Kontroler**), wybierz **Dżojstik** i stuknij **Dodaj do panelu**.
3. Przeciągnij go w wybrane miejsce. Stuknij go, aby zmienić rozmiar, kolor lub zachowanie.

<Screenshot name="controller-palette" alt="Paleta Dodaj kontroler z zaznaczonym joystickiem" width={900} />

Zobacz [Dodawanie i rozmieszczanie elementów sterujących](/docs/Application/Dashboard/ArrangingControls).

## 7. Połącz element sterujący z silnikiem {#7-connect-the-control-to-a-motor}

**Szybkie połączenia:** przeciągnij wejście joysticka (na przykład *JOY1 Oś Y*) z **Wejść** do pustego wiersza, dodaj operację **Silnik** i wyjście **Hub** z **Wyjść**, a następnie stuknij port, do którego podłączony jest silnik. Wiersz jest gotowy, gdy nie ma czerwonej ramki. Zobacz [Szybkie połączenia](/docs/Application/Links/LinksIntroducing).

**Bloki logiczne:** dodaj blok *gdy program się uruchamia*, pętlę *powtarzać zawsze* i blok *ustaw prędkość na*, który pobiera wartość joysticka. Zobacz [Bloki logiczne](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) i [przykłady](/docs/Application/BlockBuilder/Examples).

## 8. Naciśnij Uruchom {#8-press-run}

Naciśnij **Uruchom** (▶). Porusz joystickiem, a silnik się obróci. Naciśnij **Zatrzymaj**, aby wrócić do edycji.

To wszystko. Co dalej:

- Poznaj wszystkie [typy elementów sterujących](/docs/Application/Dashboard/ControlTypes).
- Nadaj panelowi nowy wygląd dzięki [motywom](/docs/Application/Themes/ThemesOverview).
- Podłącz [gamepad](/docs/Application/Dashboard/Gamepad).
- Jeśli coś nie działa, zajrzyj do artykułu [Rozwiązywanie problemów](/docs/Help/Troubleshooting).
