---
id: PlayMode
title: Conducerea unui model (Rulează)
description: "Rulează un profil, condu modelul, oprește-l și află ce se întâmplă când se oprește sau când o conexiune se întrerupe."
---

import Screenshot from '@site/src/components/Screenshot';

# Conducerea unui model (Rulează) {#driving-a-model-run}

Un profil are două moduri:

- **Editare**: modifici huburile, tabloul de bord și programul.
- **Rulare**: programul rulează, iar comenzile de pe tabloul de bord conduc modelul.

## Pornire și oprire {#start-and-stop}

Apasă **Rulează** (▶) la capătul din dreapta al barei de sus a editorului; pe telefon sau tabletă îl are și tabloul de bord. Pe computer, **Rulează** este butonul portocaliu din editor (și **Program → Rulează**, ⌘R / Ctrl+R). Apasă **Oprește** (■) ca să revii la editare (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Tabloul de bord cât timp programul rulează" width={900} />

Cât timp programul rulează:

- punctele grilei tabloului de bord sunt ascunse, la fel și butoanele lui de editare (pe computer, acestea nu sunt disponibile);
- comenzile răspund la atingere și la gamepad;
- monitoarele și indicatoarele afișează valori în timp real;
- în Legături rapide, editorul afișează valori în timp real între blocurile fiecărui rând, iar rândurile nu pot fi editate;
- în Blocuri logice, programul rămâne editabil, așa că îl poți regla din mers.

## Pe telefon sau tabletă {#on-a-phone-or-tablet}

Deschiderea unui profil trece telefonul în mod peisaj, pe tot ecranul, astfel încât tabloul de bord să aibă tot ecranul. Activează **Menține ecranul aprins** în Setări, ca ecranul să nu se întunece cât timp conduci. Vezi [Setări](/docs/Application/Account/Settings).

## Înainte să apeși Rulează {#before-you-press-run}

- Pornește huburile și verifică în **Huburile mele** că sunt conectate (numărul de pe butonul **Huburile mele**, **Huburi** pe computer, arată câte sunt).
- În Legături rapide, verifică butonul **Probleme**: un „!” roșu înseamnă că unele rânduri nu pot rula. Vezi [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems).
- La prima încercare, pune modelul pe un suport sau ține-l departe de marginea mesei.

## Când programul se oprește {#when-the-program-stops}

- **Legături rapide** oprește toate motoarele folosite de rânduri și resetează ieșirile (matricea LED se golește, culorile porturilor și luminile senzorilor se sting).
- **Blocuri logice** oprește porturile hubului dacă opțiunea **Oprește porturile hubului când programul se oprește** este activată în Setări editor.
- Dacă un hub se deconectează cât timp programul rulează, motoarele lui se opresc. În Legături rapide, o intrare de hub „Conectat” poate afișa acest lucru pe tabloul de bord.
- Cu controlul de la distanță, dacă legătura dintre telecomandă și dispozitivul cu huburi se pierde pentru aproximativ 4 secunde, dispozitivul cu huburi oprește profilul și toate motoarele.

## Condu de pe alt dispozitiv {#drive-from-another-device}

Cu [MocPilot Pro](/docs/Application/Account/Pro), poți rula profilul pe un dispozitiv (dispozitivul cu huburi, care conectează huburile) și îl poți controla de pe alt dispozitiv sau din editorul web. Vezi [Control de la distanță](/docs/Application/Profiles/RemoteControl).
