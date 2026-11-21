---
id: LinksIntroducing
title: Prezentarea Legăturilor rapide
description: "Legăturile rapide leagă comenzile din tabloul de bord de motoarele și luminile hubului, rând cu rând, fără cod."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Legături rapide {#quick-links}

**Legături rapide** este editorul de programe fără cod din MOCPilot. Conectezi comenzile din tabloul de bord, gamepadul sau senzorii hubului la motoare, lumini și indicatori, **câte un rând odată**. Dacă ai folosit aplicația clasică Controlz, te vei simți ca acasă.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Rânduri în Legături rapide" style={{width: '100%', maxWidth: 720}} />

## Un rând se citește ca o propoziție {#a-row-reads-like-a-sentence}

Fiecare rând se parcurge de la stânga la dreapta:

**Intrare → Procesare (opțional) → Operație → Ieșire**

> *Joystick 1, axa Y* → *Lin* → *Motor* → *Technic Hub, portul A*
>
> „Când mișc joystickul în sus și în jos, motorul de pe portul A se rotește, pornind și oprindu-se lin.”

| Parte | Ce este | Exemple |
|---|---|---|
| **Intrare** | de unde vine valoarea | o comandă din tabloul de bord, vehiculul simulat, gamepadul, un buton sau un senzor al hubului |
| **Procesare** | modifică valoarea pe parcurs (niciun bloc, unul sau mai multe) | Inversează, Limită, Zonă moartă, Prag, Lin, Comutare |
| **Operație** | ce trebuie să facă hubul | Motor, Servo, Motor pe durată, Lumină, Rotire cu grade, Mergi la poziție… |
| **Ieșire** | unde se întâmplă | un **Hub** cu porturile sale sau o ieșire directă: Indicator, LED hub, Matrice LED, Calibrează servo-urile |

Ieșirile directe (Indicator, LED hub, Matrice LED, Calibrează servo-urile) nu au nevoie de operație: *Baterie hub → Indicator*.

## Editorul {#the-editor}

<Screenshot name="links-editor" alt="Editorul Legături rapide cu rânduri și paleta" width={900} />

- **Rândurile** umplu ecranul și se derulează pe verticală. Rândurile noi încep în ultimul rând, cel gol („Rând nou: intrare”).
- **Paleta** din partea de jos are trei file: **Intrări**, **Procesare** și **Ieșiri**. Ea se construiește din profilul tău: fiecare comandă din tabloul de bord și fiecare hub din Huburile mele apar automat, gamepadul apare când blocurile gamepadului sunt activate, iar o operație apare doar dacă un hub al profilului o poate executa.
- Butonul **Probleme** din bara de sus arată o bifă verde când toate rândurile sunt gata sau un „!” roșu cu numărul de probleme.

## Construiește un rând {#build-a-row}

1. Trage o intrare din **Intrări** în rândul gol. Se creează un rând nou.
2. Dacă este nevoie, trage blocuri de procesare din **Procesare** după intrare.
3. Trage o operație (de exemplu, **Motor**) din **Ieșiri**.
4. Trage ieșirea **Hub** după operație și atinge porturile pe care le folosești.
5. Atinge orice bloc pentru a-i schimba setările: alege din opțiuni, fără să tastezi nimic.

Blocurile se îmbină ca piesele unui puzzle. Forma fiecărei îmbinări arată tipul de semnal, așa că blocurile care nu pot lucra împreună nu se potrivesc:

- o **valoare** de la −1 la 1 (axele joystickului, glisoare, pedale, senzori);
- **pornit/oprit** (butoane, comutatoare, praguri);
- îmbinarea **operație → hub**, astfel încât un hub poate urma doar unei operații.

Pentru a elimina un bloc, trage-l înapoi pe paletă („Plasează aici pentru a elimina”) sau atinge-l și alege **Elimină blocul**.

## Rânduri {#rows}

Atinge numărul rândului pentru a deschide meniul rândului:

- **Oprește** / **Pornește**: un rând oprit rămâne în program, dar nu rulează. Util pentru experimente.
- **Elimină rândul**.

Poți adăuga oricâte rânduri vrei.

## Rulare {#run}

Apasă **Rulează**. Cât timp programul rulează, fiecare îmbinare arată **valoarea în timp real** care trece prin ea, așa că vezi exact unde se oprește un semnal. Nu poți edita în timp ce programul rulează; apasă **Oprește** pentru a edita din nou. Consultă [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems).

## Anulare {#undo}

**Anulează** și **Refă** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z sau butoanele flotante) merg înapoi până la 100 de pași. Nu sunt disponibile cât timp programul rulează.

## Mai multe informații {#read-more}

- [Intrări](/docs/Application/Links/Inputs): comenzi, vehiculul, gamepadul, butoanele și senzorii hubului
- [Procesare](/docs/Application/Links/Processing): Inversează, Limită, Zonă moartă, Prag, Lin, Comutare
- [Operații și ieșiri](/docs/Application/Links/Operations)
- [Blocul Hub și porturile](/docs/Application/Links/HubsAndPorts)
- [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems)
- [Exemple: mașină, tanc, macara, tren](/docs/Application/Links/Examples)
- Referința blocurilor: [intrări](/docs/Application/Links/Blocks/InputBlocks), [procesare](/docs/Application/Links/Blocks/ProcessingBlocks), [operații și ieșiri](/docs/Application/Links/Blocks/OutputBlocks)

## Legături rapide sau Blocuri logice? {#quick-links-or-logic-blocks}

Legăturile rapide sunt ideale când fiecare comandă pur și simplu mișcă ceva. Când ai nevoie de logică (secvențe, condiții, variabile sau o reacție în mai mulți pași la un senzor), folosește [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Tipul programului îl alegi când creezi profilul; consultă [comparația](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
