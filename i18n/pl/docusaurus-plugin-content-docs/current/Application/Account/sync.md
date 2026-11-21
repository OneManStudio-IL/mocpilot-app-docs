---
id: Sync
title: Synchronizacja między urządzeniami
description: "Synchronizuj profile i ustawienia MOCPilot między telefonami, tabletami, komputerami i edytorem webowym oraz pracuj offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronizacja między urządzeniami {#sync-between-devices}

Gdy jesteś zalogowany, MOCPilot utrzymuje te same profile i ustawienia na każdym urządzeniu: telefonie, tablecie, komputerze i w [edytorze webowym](/docs/Introducing/WebEditor). Niczego nie trzeba włączać: dla konta synchronizacja jest zawsze włączona.

## Jak to działa {#how-it-works}

- Zmiany są najpierw zapisywane na urządzeniu, a przesyłane na serwer, gdy jesteś online („Synchronizowanie profili…”).
- Inne urządzenia pobierają nową wersję, gdy są online.
- Zakupy nie są synchronizowane jako pliki; należą do Twojego konta i są dostępne wszędzie, gdzie się zalogujesz.
- Profile dodane na stronie internetowej (**Dodaj do mojego konta** w katalogu) lub edytowane w edytorze webowym docierają przez synchronizację.
- W trybie gościa nic nie jest synchronizowane: profile zostają tylko na tym urządzeniu.

## Konflikty {#conflicts}

Jeśli ten sam profil został zmieniony na dwóch urządzeniach, zanim się zsynchronizowały, wygrywa wersja z Twojego konta, a Twoja wersja na tym urządzeniu zostaje zapisana jako kopia (do nazwy dodawane jest „(kopia)”). MOCPilot poinformuje Cię o tym komunikatem **Synchronizacja profili**. To samo dzieje się, gdy profil zmieniony tutaj został usunięty na innym urządzeniu.

Jeśli otworzysz profil, który właśnie jest edytowany na innym urządzeniu, możesz wybrać **Tylko podgląd** (zmiany nie są zapisywane) lub **Przejmij edycję**.

## Praca offline {#working-offline}

Huby, Twoje profile i pobrane motywy działają bez internetu.

- Jeśli przy uruchomieniu MOCPilot nie może połączyć się z serwerem, pokazuje komunikat **Brak połączenia z internetem** z przyciskami **Pracuj offline** i **Ponów**.
- Gdy jesteś offline, na górze widoczna jest etykieta **Offline**. Funkcje wymagające serwera (katalog i publikowanie, Kreator AI, zdalne sterowanie, powiadomienia, zakupy, wiadomości do pomocy technicznej) informują, że potrzebują połączenia z internetem.
- Zmiany wprowadzone offline są przesyłane po przywróceniu połączenia. Gdy aplikacja znów widzi serwer, pokazuje komunikat **Połączenie wróciło** z przyciskiem **Przejdź do trybu online**.

<Screenshot name="offline-prompt" alt="Komunikat Brak połączenia z internetem z przyciskami Pracuj offline i Ponów" width={900} />

## Wylogowanie {#signing-out}

Wylogowanie usuwa Twoje profile i ustawienia z tego urządzenia; zostają na Twoim koncie i wrócą, gdy zalogujesz się ponownie. Jeśli niektóre zmiany nie zostały jeszcze przesłane, MOCPilot najpierw Cię ostrzeże i wymieni te profile: połącz się z internetem i pozwól synchronizacji się zakończyć albo wybierz **Wyloguj mimo to** (kopia zostanie zachowana w folderze Backup aplikacji).

## Wskazówki {#tips}

- Przed publikacją profilu w katalogu upewnij się, że jest zsynchronizowany: katalog pobiera go z Twojego konta.
- Aby przenieść profile na urządzenie bez konta, użyj opcji **Udostępnij** i **Importuj profil…** z plikami `.dat`. Zobacz [Zarządzanie profilami](/docs/Application/Profiles/ManageProfiles).
