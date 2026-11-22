---
id: Gamepad
title: Gamepad
description: "Condu-ți modelul cu un gamepad în stil Xbox sau PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Un gamepad fizic este adesea mai plăcut decât un ecran tactil: stickuri, trăgace și butoane adevărate. MOCPilot funcționează cu gamepadurile Bluetooth și USB acceptate de sistemul dispozitivului (controlere în stil Xbox și PlayStation pe iPhone, iPad, Android, Mac și Windows).

Gamepadul funcționează împreună cu tabloul de bord; le poți folosi pe amândouă în același timp.

## Conectează un gamepad {#connect-a-gamepad}

1. Asociază gamepadul cu telefonul, tableta sau computerul din setările Bluetooth ale sistemului (sau conectează-l prin USB).
2. Deschide un profil și mergi la **Gamepad**: în bara de sus a editorului pe computer, în **Mai mult** pe telefon sau tabletă (scrie **Gamepad (conectat)** când sistemul vede un gamepad).
3. Antetul paginii afișează **Gamepad: (nume)**. „Gamepad nu este conectat” înseamnă că sistemul încă nu îl vede.

<Screenshot name="gamepad" alt="Pagina Gamepad" width={900} />

## Pagina Gamepad {#gamepad-page}

- **Activează blocurile gamepad-ului**: activează intrările gamepadului pentru acest profil. Fără această opțiune, rândurile Legături rapide cu intrarea Gamepad raportează „Activează blocurile de gamepad pe pagina Gamepad (bara de sus)”, iar Blocuri logice nu afișează categoria Gamepad.
- **Dispunerea butoanelor gamepad-ului**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) sau **Sony PS** (Cruce, Cerc, Pătrat, Triunghi, L1, R1, L2, R2). Editoarele denumesc butoanele în funcție de această alegere.
- **Intervalul valorilor gamepad-ului** (Blocuri logice): stickurile dau **-1..1** sau **-100..100**.
- **Selectează gamepad**: când sunt conectate mai multe gamepaduri.
- **Testează gamepadul** → **Test**: un tester în timp real care afișează butoanele, trăgacele, stickurile și padul direcțional, ca să poți verifica totul înainte de folosire.

Setările se salvează în profil.

## Folosește gamepadul în Legături rapide {#use-the-gamepad-in-quick-links}

Trage intrarea **Gamepad** într-un rând și alege-i **Intrare**:

- stickuri: Stick stânga Y, Stick stânga X, Stick dreapta Y, Stick dreapta X;
- trăgace: RT / LT (R2 / L2);
- butoane frontale: A, B, X, Y (Cruce, Cerc, Pătrat, Triunghi);
- butoane umăr: LB / RB (L1 / R1);
- pad direcțional: Sus, Jos, Stânga, Dreapta.

Exemplu: *Gamepad* (Stick stânga Y) → *Lin* → *Motor* → *Hub* (portul A). Vezi [Intrări](/docs/Application/Links/Inputs#gamepad).

## Folosește gamepadul în Blocuri logice {#use-the-gamepad-in-logic-blocks}

Categoria **Gamepad** are blocuri de evenimente (*când butonul gamepadului este …*, *când padul direcțional al gamepadului este …*, *când stickul gamepadului este …*) și blocuri de valoare (buton, pad direcțional, stick, apăsarea trăgaciului). Vezi [Blocurile gamepadului](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profiluri pentru publicare {#profiles-for-publishing}

Un profil poate fi publicat în catalog doar cu un gamepad, fără comenzi pe tabloul de bord: cerința este „un controler pe tabloul de bord sau gamepadul”.
