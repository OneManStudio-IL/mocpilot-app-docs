---
id: Backpack
title: Rucsac
description: "Păstrează bucăți din programele tale Blocuri logice în Rucsac și inserează-le în orice profil, pe oricare dintre dispozitivele tale."
---

import Screenshot from '@site/src/components/Screenshot';

# Rucsac {#backpack}

**Rucsacul** este locul în care păstrezi bucăți din programele tale cu blocuri ca să le refolosești în alte profiluri: o rutină de virare, un joc de lumini, un Bloc al meu pe care l-ai scris o dată și îl vrei peste tot. Salvează un teanc de blocuri în Rucsac într-un profil, apoi inserează-l în orice alt profil, pe acest dispozitiv sau pe orice dispozitiv pe care ești conectat la cont.

Rucsacul face parte din editorul [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profilurile Legături rapide nu îl au.

<Screenshot name="backpack-panel" alt="Panoul Rucsac lângă un program cu blocuri" width={900} />

## Ce păstrează Rucsacul {#what-the-backpack-keeps}

Fiecare element din Rucsac este o **copie** a blocurilor pe care le-ai salvat:

- **Un teanc**: blocul ales împreună cu tot ce este atașat sub el și în interiorul lui, exact cum îl copiază **Duplică**.
- **Un Bloc al meu**: dacă salvezi blocul `define …` al unui [Bloc al meu](/docs/Application/BlockBuilder/Blocks/MyBlocks), Rucsacul păstrează întreaga definiție. Astfel de elemente sunt marcate cu **Blocul meu**.

Elementul ține minte și Blocurile mele pe care le folosesc blocurile tale (chiar și prin alte Blocuri ale mele), precum și numele variabilelor, listelor, mesajelor, vehiculelor și sunetelor la care se referă, ca blocurile să funcționeze când le inserezi în altă parte.

Blocurile inserate devin o parte obișnuită a programului profilului. Nimic din profil nu depinde de Rucsac: dacă ștergi sau redenumești un element, programele în care l-ai inserat nu se schimbă. Elementele nu pot fi editate în Rucsac. Ca să modifici unul, inserează-l, editează blocurile în program și salvează-le din nou în Rucsac ca element nou.

## Salvează blocuri în Rucsac {#save-blocks}

1. În program, fă clic dreapta pe un bloc (computer) sau atinge-l și ține apăsat (telefon, tabletă).
2. Alege **Adaugă în rucsac**.
3. Scrie un nume în **Numele blocurilor** și atinge **Salvează**.

Blocul și tot ce este atașat de el ajung în Rucsac. Ca să salvezi definiția unui Bloc al meu, deschide meniul blocului său `define …`.

<Screenshot name="backpack-add" alt="Meniul blocului cu Adaugă în rucsac și fereastra pentru nume" width={900} />

## Deschide Rucsacul {#open}

- **Computer și editorul web**: butonul **Rucsac** din bara de sus a editorului, **Vizualizare → Rucsac** din meniu sau **Ctrl+Shift+B** (**⌘⇧B** pe Mac). Dacă fereastra este îngustă, butonul se află în meniul **Mai mult**. Rucsacul se deschide ca panou în partea dreaptă a editorului, lângă [Monitor](/docs/Application/BlockBuilder/Editor#monitor), dacă și acesta este deschis.
- **Telefon și tabletă**: **Mai mult → Rucsac** în bara de sus a editorului. Rucsacul se deschide ca panou peste editor.

Butonul este evidențiat cât timp Rucsacul este deschis. Apasă-l din nou ca să închizi Rucsacul.

Fiecare element își arată imaginea, numele și numărul de blocuri pe care le conține (**Blocuri: N**). Nota din partea de jos a panoului îți spune unde este păstrat Rucsacul (vezi [mai jos](#where-it-is-kept)).

## Inserează blocuri într-un program {#insert}

- **Atinge un element**: blocurile lui apar în partea vizibilă a programului.
- **Trage un element pe program**: blocurile ajung acolo unde le lași. Trage în lateral, spre program; tragerea în sus sau în jos derulează lista.
- **Meniul elementului (⋯)**: **Inserează**, **Redenumește…** sau **Șterge**.

Pe telefoane și tablete, Rucsacul se închide după inserare, ca să vezi blocurile. O singură apăsare pe **Anulează** elimină tot ce a fost inserat.

### Ce se întâmplă la inserare {#what-happens}

- **Blocurile mele**: un Bloc al meu pe care profilul îl are deja, cu același conținut, este refolosit, așa că dacă inserezi din nou aceleași blocuri nu se creează copii ale lui. Dacă un alt Bloc al meu din profil folosește același nume în interior, cel inserat primește unul propriu. Inserarea unui element Bloc al meu care există deja în profil nu face nimic și afișează **Există deja**: caută blocul în **Blocurile mele**.
- **Variabile, liste, mesaje și vehicule**: dacă profilul are unul cu același nume, blocurile îl folosesc; altfel este creat. Valorile variabilelor și conținutul listelor nu se copiază. Dacă numele este ocupat de altceva, primești un mesaj precum *Variabila „speed” nu a putut fi creată: numele este ocupat*.
- **Sunete**: sunetele tale proprii sunt fișiere ale profilului și nu sunt păstrate în Rucsac. Dacă profilul nu are un sunet cu acel nume, vezi *Sunetul „…” nu este în acest profil: alege un sunet în blocuri*. Sunetele încorporate funcționează peste tot.
- **Blocuri de hub și de tablou de bord**: blocurile pentru un hub, o comandă din tabloul de bord sau un gamepad pe care acest profil nu le are nu pot fi inserate. Înainte să se schimbe ceva, aplicația afișează **Unele blocuri nu pot fi inserate** cu lista acestor blocuri și câte vor fi lăsate deoparte și te întreabă dacă să le insereze pe celelalte. Dacă vrei să le păstrezi, adaugă mai întâi hubul sau comanda din tabloul de bord. Dacă niciunul dintre blocuri nu se potrivește profilului, nu se inserează nimic.

## Redenumește și șterge {#rename-delete}

Deschide meniul elementului (⋯):

- **Redenumește…** schimbă numele elementului.
- **Șterge** îl elimină după ce confirmi (**Ștergi din rucsac?**). Programele în care l-ai inserat își păstrează blocurile.

Rucsacul nu elimină niciodată elemente de la sine: șterge ce nu-ți mai trebuie.

## Unde este păstrat Rucsacul {#where-it-is-kept}

- **Fără cont (invitat)**: doar pe acest dispozitiv. Panoul spune *Păstrat pe acest dispozitiv. Conectează-te pentru a avea rucsacul pe toate dispozitivele tale.*
- **Conectat la cont**: și în contul tău, așa că ai același Rucsac pe toate dispozitivele, inclusiv în [editorul web](/docs/Introducing/WebEditor). Panoul spune *Păstrat în contul tău: același rucsac pe toate dispozitivele tale.* Modificările făcute pe un dispozitiv apar pe celelalte.
- **Prima conectare**: elementele pe care le-ai salvat ca invitat pe acest dispozitiv se mută în contul tău.

Poți folosi Rucsacul și offline. Modificările sunt păstrate pe dispozitiv și sunt trimise în cont când revine conexiunea (între timp, panoul afișează **Se sincronizează…**). Un element care încă se descarcă din cont nu poate fi inserat deocamdată: aplicația spune **Încă nu este gata**, așa că încearcă din nou peste câteva momente.

## Limite {#limits}

| | Limită |
|---|---|
| Elemente în Rucsac | 200 |
| Dimensiunea unui element | aproximativ 512 KB (o parte foarte mare de program s-ar putea să nu încapă: salvează o parte mai mică) |
| Numele elementului | până la 100 de caractere |

Dacă Rucsacul din contul tău este plin sau un element este prea mare pentru el, elementul rămâne doar pe acest dispozitiv, iar aplicația te anunță. Elementele salvate de o versiune mai nouă a aplicației pot fi inserate doar după ce actualizezi aplicația.

## Depanare {#troubleshooting}

| Mesaj | Ce să faci |
|---|---|
| **Rucsacul este plin (200 elemente). Șterge ceva de care nu ai nevoie.** | Șterge elementele pe care nu le mai folosești. |
| **Prea multe blocuri pentru rucsac. Salvează o parte mai mică.** | Salvează un teanc mai mic sau împarte programul în mai multe elemente. |
| **Unele blocuri nu pot fi inserate** | Profilului îi lipsește un hub, o comandă din tabloul de bord sau un gamepad de care au nevoie blocurile. Adaugă-l și inserează din nou sau inserează celelalte blocuri. |
| **Există deja** | Blocul meu este deja în acest profil: caută-l în **Blocurile mele**. |
| **Încă nu este gata** | Elementul încă se descarcă din cont. Așteaptă puțin și încearcă din nou. |
| **Aceste blocuri au fost salvate de o versiune mai nouă a aplicației. Actualizează aplicația pentru a le folosi.** | Actualizează MOCPilot pe acest dispozitiv. |
