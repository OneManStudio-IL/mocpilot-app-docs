---
id: HubsAndPorts
title: Blok Hub i porty
description: "Blok Hub w Szybkich połączeniach: wybór portów, sprawdzanie portów i pytanie o zajęty port."
---

import Screenshot from '@site/src/components/Screenshot';

# Blok Hub i porty

Wyjście [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) kończy wiersz za operacją. Na każdy hub w **Moich hubach** przypada jeden blok Hub, więc najpierw dodaj tam swoje huby. Do tego czasu karta wyświetla komunikat „Dodaj huby w «Moje huby» lub wskaźniki do panelu: pojawią się tutaj”.

## Co pokazuje blok Hub {#what-the-hub-block-shows}

- nazwę huba i **kropkę połączenia** (połączony lub nie);
- **porty** jako przyciski wyboru: A, B, C, D… w hubach LEGO® i SBrick (A–F w Robot Inventor i Mould King 6.0), 1–4 w BuWizz 2.0, 1–4 oraz A i B w BuWizz 3.0 Pro;
- podpis: „porty A, B”, „wybierz porty”, „cały hub” (po operacji dla całego huba) albo „napęd, skręt, światła” (Technic Move w trybie **Profil samochodu**).

## Wybierz porty {#choose-ports}

Dotknij portu, aby go użyć; dotknij ponownie, aby go zwolnić. Jeden wiersz może sterować **kilkoma portami** naraz, na przykład dwoma silnikami napędu na A i B.

Dwa silniki mają się obracać w przeciwnych kierunkach? Zrób dwa wiersze z tym samym wejściem i do jednego z nich dodaj **Odwróć**.

## Jeden port, jeden wiersz {#one-port-one-row}

Port należy do jednego wiersza. Jeśli wybierzesz port, którego używa już inny wiersz, MOCPilot zapyta:

> **Port jest już używany**: Na „Technic Hub” port A jest używany w wierszu 2 (Silnik). Użyć go w tym wierszu? Drugi wiersz straci ten port i przestanie nim sterować.

**Użyj w tym wierszu** przenosi port; **Anuluj** zostawia go tam, gdzie był. Port używany przez dwa wiersze (na przykład w starym pliku) jest zgłaszany jako problem: „Port A jest też używany w wierszu 2”.

<Screenshot name="port-in-use" alt="Okno „Port jest już używany”" width={700} />

## Sprawdzanie portów {#port-checks}

Gdy hub jest połączony, MOCPilot wie, co jest podłączone do każdego portu, i sprawdza, czy operacja do tego pasuje:

| Problem | Znaczenie |
|---|---|
| „Port A: to urządzenie nie może działać jako serwo (potrzebny silnik z enkoderem)” | Serwo i Obrót o stopnie wymagają silnika z enkoderem |
| „Port A: silnik nie ma pozycji absolutnej (tylko silniki kątowe)” | Do pozycji wymaga silnika kątowego |
| „Na porcie A jest czujnik, a nie silnik” | urządzenie na porcie to czujnik |
| „Port A przyjmuje tylko proste polecenia prędkości: bez sterowania pozycją” | ten port nie może sterować pozycją |
| „Port A nie ma diody LED: użyj portów 1-4” | Kolor portu działa tylko na portach 1–4 BuWizz 3.0 Pro |
| „Światła czujnika: wybierz jeden port, ten z czujnikiem odległości” | Światła czujnika przyjmują dokładnie jeden port |
| „Port A: nie ma tam czujnika koloru” | Światła czujnika koloru i wejścia Odcień koloru, Nasycenie koloru i Jasność koloru wymagają czujnika koloru na porcie |

Operacje, których hub nie potrafi wykonać, nie są dla niego proponowane. Jeśli przełączysz wiersz na inny hub, wiersz pokaże, która operacja nie pasuje, na przykład „Hamulec: tylko Technic Move (… nie ma polecenia hamowania)”.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (w zdalnie sterowanych samochodach LEGO® Technic) można sterować na dwa sposoby. Wybierz jeden opcją **Sterowanie** w oknie bloku Hub: **Profil samochodu** (domyślnie) lub **Porty**. Wybór należy do huba, więc każdy blok Hub tego huba używa tego samego sposobu.

- **Profil samochodu**: hub jest sterowany według funkcji, a nie portów. Jego blok Hub pokazuje **napęd, skręt, światła** i nie przyjmuje portów. Do jazdy użyj operacji **Silnik** lub **Silnik na czas**, do skręcania — **Serwo**, do świateł — **Światło**, a do funkcji specjalnych — **Hamulec**, **Boost** i **Impuls mocy**. Jazdy, skrętu, świateł, hamulca i trybu Boost może używać tylko jeden wiersz („Wiersz 2 już steruje napędem tego Technic Move”).
- **Porty**: hub działa jak inne huby z portami. Jego silniki to porty `A`, `B` (silniki napędu) i `C` (silnik skrętu): działają na nich **Silnik**, **Silnik na czas**, **Serwo** (z kalibracją **Auto** na `C`), **Obrót o stopnie**, **Do pozycji**, **Przy zatrzymaniu** i **Przyspieszenie huba**. Jego sześć świateł to porty `1`–`6` wierszy **Światło**. [Wejście Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) odczytuje prędkość i kąt silników. **Hamulec**, **Boost** i **Impuls mocy** działają tylko w trybie **Profil samochodu**.

Wiersz, który nie pasuje do trybu huba, to problem, który mówi, co przełączyć: „… jest sterowany profilem samochodu: przełącz hub na „Porty”” lub „… jest sterowany port po porcie: przełącz hub na „Profil samochodu””. Profile utworzone, zanim pojawił się ten wybór, otwierają się w trybie **Profil samochodu**.

Aby wgrać do huba konfigurację samochodu (Porsche, Lamborghini, Batmobile), użyj **Moje huby → Wybierz konfigurację**. Zobacz [Konfiguracje Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Huby Mould King tylko odbierają polecenia, więc nie mają wejść i nie zgłaszają stanu połączenia. Aby przełączyć kanał sterowania huba, użyj operacji [Kanał](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
