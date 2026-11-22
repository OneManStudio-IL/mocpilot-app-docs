---
id: QuickStart
title: Rýchly štart
description: "Nainštalujte MOCPilot, prihláste sa, vytvorte prvý profil a za pár minút riaďte model."
---

import Screenshot from '@site/src/components/Screenshot';

# Rýchly štart {#quick-start}

Tento návod vás prevedie od inštalácie aplikácie až po jazdu s prvým modelom. Potrebujete podporovaný hub s motorom; pozrite si [Podporované zariadenia](/docs/Introducing/SupportedDevices).

## 1. Nainštalujte aplikáciu {#1-install-the-app}

MOCPilot je k dispozícii v App Store (iPhone, iPad, Mac), Google Play (Android) a Microsoft Store (Windows). Odkazy nájdete na [mocpilot.com](https://mocpilot.com).

## 2. Prihláste sa alebo pokračujte bez účtu {#2-sign-in-or-continue-without-an-account}

Pri prvom spustení vás aplikácia požiada o prihlásenie. Použite e-mail alebo prihlasovacie meno a heslo, Google alebo Apple ID, prípadne si vytvorte nový účet.

<Screenshot name="sign-in" alt="Prihlasovacia obrazovka MOCPilot" width={900} />

Odporúčame mať účet:

- vaše profily a nastavenia sa ukladajú na serveri a synchronizujú medzi vašimi zariadeniami;
- ak zariadenie vymeníte alebo stratíte, môžete svoje údaje získať späť;
- nákupy a MocPilot Pro fungujú na všetkých vašich zariadeniach.

Možnosť **Pokračovať bez účtu** funguje tiež, no všetko potom zostane iba v tomto zariadení a po odstránení aplikácie sa stratí. Prihlásiť sa môžete neskôr v **Nastavenia → Účet**. Pozrite si [Účet](/docs/Application/Account/UserAccount).

## 3. Zorientujte sa {#3-find-your-way-around}

- Na **telefóne** obsahuje spodná lišta **Profily**, **Nastavenia** a **Pomoc** (po prihlásení aj **Upozornenia**).
- Na **tablete** sú tie isté sekcie, **Katalóg profilov** a váš účet na bočnom paneli.
- Na **počítači** použite hornú lištu: ponuky vľavo; Účet, Upozornenia a Nastavenia vpravo.

Pozrite si [Telefón, tablet a počítač](/docs/Introducing/Layouts).

## 4. Vytvorte profil {#4-create-a-profile}

1. Na stránke **Moje profily** ťuknite na **+** → **Nový profil** (telefón) alebo zvoľte **Nový profil** (tablet a počítač, prípadne **Súbor → Nový profil**).
2. Zvoľte **typ programu**:
   - **Rýchle prepojenia**, ak chcete model riadiť bez kódu. Najlepšie na prvý pokus.
   - **Logické bloky**, ak chcete udalosti, cykly, podmienky a senzory.
3. Zadajte **názov** a ak chcete, pridajte obrázok.
4. Ťuknite na **Vytvoriť**.

<Screenshot name="create-profile-tiles" alt="Stránka Nový profil s dlaždicami Logické bloky a Rýchle prepojenia" width={900} />

Profil sa otvorí v editore. Viac v časti [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile).

:::tip Chcete hotový model?
Otvorte **Katalóg profilov** (**Hľadať online** na stránke profilov) a nainštalujte oficiálny profil pre svoju súpravu. Pozrite si [Katalóg a zverejňovanie](/docs/Application/Profiles/Catalog).
:::

## 5. Pridajte hub {#5-add-your-hub}

1. V editore otvorte **Moje huby** (na počítači **Huby** na hornej lište).
2. V prázdnom slote ťuknite na **Pridať nový hub**, vyberte model hubu a ťuknite na **Pridať**.
3. Zapnite hub, stlačte jeho tlačidlo a počkajte, kým ho MOCPilot nájde.

<Screenshot name="my-hubs" alt="Stránka Moje huby so slotmi hubov" width={900} />

Ak aplikácia požiada o aktualizáciu firmvéru, postupujte podľa časti [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating). Viac v časti [Pridanie a pripojenie hubu](/docs/Application/Hubs/ConnectingHubs).

## 6. Umiestnite ovládacie prvky na panel {#6-place-controls-on-the-dashboard}

1. Otvorte **Panel**.
2. Ťuknite na **+** (**Pridať ovládač**; na počítači **+ Ovládač**), vyberte **Joystick** a ťuknite na **Pridať na panel**.
3. Presuňte ho, kam chcete. Ťuknutím naň zmeníte jeho veľkosť, farbu alebo správanie.

<Screenshot name="controller-palette" alt="Paleta Pridať ovládač s vybraným joystickom" width={900} />

Pozrite si [Pridanie a usporiadanie ovládacích prvkov](/docs/Application/Dashboard/ArrangingControls).

## 7. Prepojte ovládací prvok s motorom {#7-connect-the-control-to-a-motor}

**Rýchle prepojenia:** presuňte vstup joysticku (napríklad *JOY1 Os Y*) zo sekcie **Vstupy** do prázdneho riadka, pridajte operáciu **Motor** a výstup **Hub** zo sekcie **Výstupy** a potom ťuknite na port, do ktorého je zapojený motor. Riadok je pripravený, keď nemá červený rámček. Pozrite si [Rýchle prepojenia](/docs/Application/Links/LinksIntroducing).

**Logické bloky:** pridajte blok *keď program začne*, cyklus *zopakovať vždy* a blok *nastaviť rýchlosť na*, ktorý preberá hodnotu joysticku. Pozrite si [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) a [príklady](/docs/Application/BlockBuilder/Examples).

## 8. Stlačte Spustiť {#8-press-run}

Stlačte **Spustiť** (▶). Pohnite joystickom a motor sa roztočí. Stlačením **Zastaviť** sa vrátite k úpravám.

To je všetko. Ďalej:

- Spoznajte všetky [typy ovládacích prvkov](/docs/Application/Dashboard/ControlTypes).
- Dajte panelu nový vzhľad pomocou [tém](/docs/Application/Themes/ThemesOverview).
- Pripojte [herný ovládač](/docs/Application/Dashboard/Gamepad).
- Ak niečo nefunguje, pozrite si [Riešenie problémov](/docs/Help/Troubleshooting).
