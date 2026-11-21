---
id: ManageProfiles
title: Zarządzanie profilami
description: "Edycja, udostępnianie, import, eksport i usuwanie profili MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Zarządzanie profilami {#manage-profiles}

## Edycja danych profilu {#edit-profile-details}

Stuknij **Edycja** (telefon, tablet) lub kliknij **Edytuj…** (komputer) przy profilu. W **Edytuj profil** możesz zmienić:

- **obraz** i **nazwę**;
- **opis** (co robi profil, do jakiego modelu jest przeznaczony, jak nim sterować);
- **poziom bloków** (Bloki logiczne);
- **hashtagi**;
- **Ulubiony** (telefon, tablet): ulubiony profil przesuwa się na górę listy. Na komputerze **Ulubiony** znajduje się na dolnym pasku strony profili.

<Screenshot name="edit-profile" alt="Okno Edytuj profil z obrazem, nazwą, opisem i hashtagami" width={900} />

Tutaj też usuwasz profil oraz – po zalogowaniu – wysyłasz go do katalogu.

Typu programu nie da się zmienić. Aby przenieść model do drugiego edytora, utwórz nowy profil.

## Udostępnianie (eksport) profilu {#share-export-a-profile}

**Udostępnij…** pakuje profil do jednego pliku `.dat` (o nazwie w rodzaju `Technic Buggy_<id>.dat`) i otwiera systemowe okno udostępniania. Wyślij go w wiadomości lub e-mailem albo zapisz w swoich plikach.

Plik zawiera huby, panel i program. Nie zawiera zakupów: motywy i specjalne elementy sterujące, których odbiorca nie posiada, zostaną zastąpione lub zablokowane, gdy zacznie edytować profil (zobacz [niżej](#paid-themes-in-shared-profiles)).

## Import profilu {#import-a-profile}

1. Na stronie **Moje profile** wybierz **Importuj profil…** (telefon: **+** → **Importuj profil…**; tablet: menu **Nowy profil**; komputer: **Plik → Importuj profil…**, ⌘O / Ctrl+O).
2. Wybierz plik `.dat`.

Jeśli masz już ten profil:

- inna wersja: wybierz **Zastąp**, **Zapisz jako kopię** (dodaje „(kopia)” do nazwy) lub **Anuluj**;
- dokładnie ten sam plik: nie zostanie wczytany ponownie.

Plik, który nie jest profilem, zostanie odrzucony.

:::tip Duplikowanie profilu
Nie ma osobnego polecenia „duplikuj”. Aby uzyskać kopię, udostępnij profil do pliku i zaimportuj go z opcją **Zapisz jako kopię**.
:::

## Usuwanie profilu {#delete-a-profile}

Otwórz **Edytuj profil**:

- telefon i tablet: **Przesuń, aby usunąć profil**;
- komputer: **Usuń profil**, a następnie potwierdź. **Usuń profil** jest też w menu karty profilu.

Profil zostanie usunięty z tego urządzenia i z Twojego konta, więc zniknie także z Twoich innych urządzeń. Nie da się tego cofnąć; jeśli profil może Ci się jeszcze przydać, najpierw udostępnij go do pliku.

## Profile z katalogu {#profiles-from-the-catalog}

Profil zainstalowany z [Katalogu profili](/docs/Application/Profiles/Catalog) jest Twoją własną kopią:

- dopóki go nie zmienisz, działa dokładnie tak, jak został opublikowany, a **Aktualizuj** instaluje nową wersję, gdy autor ją wyda (**Aktualizuj z katalogu** w **Edytuj profil** robi to samo);
- przy pierwszej zmianie pojawi się ostrzeżenie: po niej profil nie będzie już otrzymywać aktualizacji z katalogu.

## Płatne motywy w udostępnionych profilach {#paid-themes-in-shared-profiles}

Profile mogą korzystać z płatnych [motywów](/docs/Application/Themes/ThemesOverview) i specjalnych elementów sterujących (kierownica, pedały, skrzynia biegów i inne). Gdy edytujesz profil, który używa produktów, których nie posiadasz:

- elementy sterujące z motywów, których nie posiadasz, przełączają się na darmowy motyw **Podstawowy**;
- specjalne elementy sterujące bez darmowego odpowiednika zostają zablokowane, dopóki ich nie kupisz;
- produkty, które posiadasz, pozostają bez zmian.

Niezmieniony profil z katalogu działa ze wszystkimi swoimi produktami, nawet z tymi, których nie posiadasz.

## Synchronizacja {#sync}

Gdy jesteś zalogowany, każda zmiana jest przesyłana na serwer i pojawia się na Twoich innych urządzeniach. Zobacz [Synchronizacja między urządzeniami](/docs/Application/Account/Sync).

Jeśli otworzysz profil, który jest już edytowany na innym urządzeniu, MOCPilot poprosi Cię o wybór: **Tylko podgląd** (zmiany nie są zapisywane) lub **Przejmij edycję**.
