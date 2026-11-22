---
id: QuickStart
title: Pornire rapidă
description: "Instalează MOCPilot, conectează-te, creează primul profil și condu un model în câteva minute."
---

import Screenshot from '@site/src/components/Screenshot';

# Pornire rapidă {#quick-start}

Acest ghid te duce de la instalarea aplicației până la condusul primului model. Ai nevoie de un hub acceptat cu un motor; vezi [Dispozitive acceptate](/docs/Introducing/SupportedDevices).

## 1. Instalează aplicația {#1-install-the-app}

MOCPilot este disponibil în App Store (iPhone, iPad, Mac), Google Play (Android) și Microsoft Store (Windows). Linkurile le găsești pe [mocpilot.com](https://mocpilot.com).

## 2. Conectează-te sau continuă fără cont {#2-sign-in-or-continue-without-an-account}

La prima pornire, aplicația îți cere să te conectezi. Folosește adresa de e-mail sau numele de utilizator și parola, Google sau Apple ID, ori creează un cont nou.

<Screenshot name="sign-in" alt="Ecranul de conectare MOCPilot" width={900} />

Îți recomandăm un cont:

- profilurile și setările tale sunt păstrate pe server și sincronizate între dispozitive;
- îți poți recupera datele dacă înlocuiești sau pierzi un dispozitiv;
- achizițiile și MocPilot Pro funcționează pe toate dispozitivele tale.

Merge și **Continuați fără cont**, dar atunci totul rămâne doar pe acest dispozitiv și se pierde dacă ștergi aplicația. Te poți conecta mai târziu din **Setări → Cont**. Vezi [Cont](/docs/Application/Account/UserAccount).

## 3. Orientează-te în aplicație {#3-find-your-way-around}

- Pe **telefon**, bara inferioară conține **Profiluri**, **Setări** și **Ajutor** (și **Notificări** după ce te conectezi).
- Pe **tabletă**, aceleași secțiuni, **Catalogul de profiluri** și contul tău se află în bara laterală.
- Pe **computer**, folosește bara de sus: meniurile în stânga; Cont, Notificări și Setări în dreapta.

Vezi [Telefon, tabletă și desktop](/docs/Introducing/Layouts).

## 4. Creează un profil {#4-create-a-profile}

1. Pe pagina **Profilurile mele**, atinge **+** → **Profil nou** (telefon) sau alege **Profil nou** (tabletă și computer, ori **Fișier → Profil nou**).
2. Alege **tipul de program**:
   - **Legături rapide** dacă vrei să conduci un model fără cod. Cea mai bună alegere pentru început.
   - **Blocuri logice** dacă vrei evenimente, bucle, condiții și senzori.
3. Introdu un **nume** și, dacă vrei, adaugă o imagine.
4. Atinge **Creează**.

<Screenshot name="create-profile-tiles" alt="Pagina Profil nou cu dalele Blocuri logice și Legături rapide" width={900} />

Profilul se deschide în editor. Mai multe în [Creează un profil](/docs/Application/Profiles/CreateProfile).

:::tip Vrei un model gata făcut?
Deschide **Catalogul de profiluri** (**Caută online** pe pagina de profiluri) și instalează un profil oficial pentru setul tău. Vezi [Catalog și publicare](/docs/Application/Profiles/Catalog).
:::

## 5. Adaugă hubul {#5-add-your-hub}

1. În editor, deschide **Huburile mele** (**Huburi** în bara de sus, pe computer).
2. Atinge **Adaugă un nou hub** într-un slot liber, alege modelul hubului, apoi atinge **Adaugă**.
3. Pornește hubul, apasă butonul lui și așteaptă până când MOCPilot îl găsește.

<Screenshot name="my-hubs" alt="Pagina Huburile mele cu sloturile de hub" width={900} />

Dacă aplicația cere o actualizare de firmware, urmează [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating). Mai multe în [Adaugă și conectează un hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Așază comenzi pe tabloul de bord {#6-place-controls-on-the-dashboard}

1. Deschide **Tablou de bord**.
2. Atinge **+** (**Adaugă controler**; pe computer, **+ Controler**), alege un **Joystick** și atinge **Adaugă la tabloul de bord**.
3. Trage-l unde vrei. Atinge-l ca să-i schimbi dimensiunea, culoarea sau comportamentul.

<Screenshot name="controller-palette" alt="Paleta Adaugă controler cu joystickul selectat" width={900} />

Vezi [Adaugă și aranjează comenzi](/docs/Application/Dashboard/ArrangingControls).

## 7. Leagă comanda de un motor {#7-connect-the-control-to-a-motor}

**Legături rapide:** trage intrarea joystickului (de exemplu *JOY1 Axa Y*) din **Intrări** în rândul gol, adaugă operația **Motor** și ieșirea **Hub** din **Ieșiri**, apoi atinge portul la care este conectat motorul. Rândul este gata când nu mai are chenar roșu. Vezi [Legături rapide](/docs/Application/Links/LinksIntroducing).

**Blocuri logice:** adaugă un bloc *când începe programul*, o buclă *repetă mereu* și un bloc *setează viteza motorului* care preia valoarea joystickului. Vezi [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) și [exemplele](/docs/Application/BlockBuilder/Examples).

## 8. Apasă Rulează {#8-press-run}

Apasă **Rulează** (▶). Mișcă joystickul, iar motorul se rotește. Apasă **Oprește** ca să revii la editare.

Asta e tot. Mai departe:

- Descoperă toate [tipurile de comenzi](/docs/Application/Dashboard/ControlTypes).
- Dă tabloului de bord un aspect nou cu [teme](/docs/Application/Themes/ThemesOverview).
- Conectează un [gamepad](/docs/Application/Dashboard/Gamepad).
- Dacă ceva nu funcționează, vezi [Depanare](/docs/Help/Troubleshooting).
