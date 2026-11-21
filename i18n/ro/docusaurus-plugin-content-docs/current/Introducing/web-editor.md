---
id: WebEditor
title: Editorul web
description: "Editează profilurile MOCPilot în browser pe mocpilot.com și condu modelul prin aplicația de pe alt dispozitiv."
---

import Screenshot from '@site/src/components/Screenshot';

# Editorul web de pe mocpilot.com {#web-editor-on-mocpilotcom}

Editorul web este MOCPilot care rulează în browser. Este aceeași aplicație, cu aceleași editoare, același tablou de bord și aceleași teme, așa că tot ce scrie în această documentație se aplică și lui.

Browserele nu pot comunica cu huburile Bluetooth, așa că editorul web este pentru **editare**. Ca să testezi un profil, rulează-l în browser fără huburi; ca să conduci modelul, lasă aplicația MOCPilot de pe un telefon, o tabletă sau un computer să conecteze huburile (vezi [Control de la distanță](/docs/Application/Profiles/RemoteControl)).

## Încearcă fără cont {#try-it-without-an-account}

Pe pagina principală [mocpilot.com](https://mocpilot.com), fiecare editor (Blocuri logice și Legături rapide) are un buton **Încearcă demo** care deschide un profil demonstrativ. Demonstrația nu necesită cont și nici huburi. În demo poți încerca fiecare temă și fiecare comandă specială; nimic nu se salvează.

## Editează-ți profilurile {#edit-your-own-profiles}

1. Conectează-te pe [mocpilot.com](https://mocpilot.com) cu contul tău MOCPilot.
2. Deschide-ți profilurile și dă clic pe **Editează** la unul dintre ele.
3. Modifică huburile, tabloul de bord sau programul, la fel ca în aplicație.
4. Închide profilul (butonul Acasă). Editorul salvează profilul și îl încarcă, iar modificarea ajunge în aplicația de pe dispozitivele tale prin [sincronizare](/docs/Application/Account/Sync).

Note:

- Poți edita doar profilurile contului cu care ești conectat. Altfel vei vedea „Acest profil nu este în contul tău” și un buton **Înapoi la site**.
- Achizițiile tale și MocPilot Pro funcționează în browser la fel ca în aplicație.
- Într-un browser de desktop, tabloul de bord este un panou flotant pe care îl poți muta și redimensiona.
- Temele se descarcă din nou la fiecare vizită (aproximativ 15 MB), așa că prima deschidere poate dura puțin.
- Importul și exportul fișierelor `.dat` nu sunt disponibile în browser; folosește aplicația.

## Rularea unui profil {#run-a-profile}

**Rulează** în editorul web rulează profilul în browser: fiecare bloc și fiecare rând funcționează, cu excepția Bluetooth, ceea ce e util pentru a testa logica, monitoarele și tabloul de bord. Când este asociat un dispozitiv cu huburi (MocPilot Pro, vezi mai jos), **Rulează** pornește în schimb profilul pe dispozitivul cu huburi.

## Control de la distanță {#remote-control}

Cu [MocPilot Pro](/docs/Application/Account/Pro), editorul web poate fi **telecomanda**: aplicația MOCPilot de pe un telefon, o tabletă sau un computer de lângă model (**dispozitivul cu huburi**) conectează huburile și rulează profilul, iar pagina din browser îl controlează. Apasă **Control de la distanță** în bara de sus a profilului, apoi **Arată codul**, iar pe dispozitivul cu huburi atinge **Conectează o telecomandă** pe pagina **Profilurile mele** și scanează codul. Vezi [Control de la distanță](/docs/Application/Profiles/RemoteControl).
