---
id: HowItWorks
title: Cum funcționează MOCPilot
description: "Profil, tablou de bord, huburi și program: cele patru părți ale oricărui model MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Cum funcționează MOCPilot {#how-mocpilot-works}

Totul în MOCPilot este construit din patru părți. Odată ce le cunoști, fiecare ecran devine clar.

<HowItWorks />

## 1. Profilul: un model {#1-profile-one-model}

Un **profil** conține tot ce ține de un model: huburile, tabloul de bord și programul. Fă câte un profil pentru fiecare model, de exemplu „Technic Buggy” sau „Camion cu macara”.

Când creezi un profil, alegi **tipul de program**: Blocuri logice sau Legături rapide. Nu îl mai poți schimba ulterior. Vezi [Creează un profil](/docs/Application/Profiles/CreateProfile).

## 2. Huburile: electronica modelului {#2-hubs-the-models-electronics}

**Huburile** sunt cărămizile Bluetooth din model; motoarele, luminile și senzorii se conectează la porturile lor. Un profil are **sloturi** pentru huburi. Adaugi o singură dată huburile modelului în sloturi, iar MOCPilot se conectează la ele de fiecare dată când deschizi profilul. Vezi [Huburi](/docs/Application/Hubs/HubsOverview).

## 3. Tabloul de bord: comenzile tale {#3-dashboard-your-controls}

**Tabloul de bord** este ecranul de pe care conduci. Așezi comenzi pe o grilă: joystickuri, glisoare, butoane, comutatoare, comutatoare pas cu pas și monitoare, plus comenzi speciale precum volanul și pedalele. O comandă nu face nimic singură; ea transmite valorile către program. Vezi [Tablou de bord](/docs/Application/Dashboard/DashboardOverview).

Poți folosi și un gamepad, împreună cu tabloul de bord sau în locul lui. Vezi [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programul: ce le leagă {#4-program-what-connects-them}

**Programul** decide ce se întâmplă când miști o comandă: ce motor se rotește și cât de repede, ce lumină clipește, ce arată un monitor.

- În **Legături rapide**, programul este o listă de rânduri: *intrare → procesare → operație → hub*. Vezi [Legături rapide](/docs/Application/Links/LinksIntroducing).
- În **Blocuri logice**, programul este alcătuit din blocuri: evenimente, bucle, condiții, variabile și senzori. Vezi [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Rularea {#5-run}

Apasă **Rulează** (▶). Programul pornește, comenzile de pe tabloul de bord prind viață și modelul răspunde. Apasă **Oprește** ca să revii la editare. Vezi [Conducerea unui model](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program Legături rapide: comenzile tabloului de bord legate de porturile hubului" width={900} />

## O sesiune obișnuită {#a-typical-session}

1. Deschide un profil sau [creează unul](/docs/Application/Profiles/CreateProfile).
2. Adaugă huburile în **Huburile mele** și pornește-le.
3. Așază comenzi pe **Tablou de bord**.
4. Leagă-le de motoare și lumini în **program**.
5. Apasă **Rulează**, condu, ajustează, repetă.

## Ce se păstrează și unde {#what-is-stored-where}

- Profilurile sunt salvate pe dispozitivul tău. Când ești conectat, ele sunt păstrate și în contul tău și apar pe toate dispozitivele tale. Vezi [Sincronizarea între dispozitive](/docs/Application/Account/Sync).
- Temele și celelalte achiziții aparțin contului tău. Vezi [MocPilot Pro și achiziții](/docs/Application/Account/Pro).
