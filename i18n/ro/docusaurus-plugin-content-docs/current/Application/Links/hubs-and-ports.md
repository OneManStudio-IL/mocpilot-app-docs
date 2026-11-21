---
id: HubsAndPorts
title: Blocul Hub și porturile
description: "Blocul Hub din Legături rapide, alegerea porturilor, verificarea porturilor și întrebarea despre portul deja folosit."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocul Hub și porturile {#hub-block-and-ports}

Ieșirea [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) încheie un rând după o operație. Există câte un bloc Hub pentru fiecare hub din **Huburile mele**, așa că adaugă mai întâi huburile acolo. Până atunci, fila afișează „Adaugă huburi în Huburile mele sau indicatori în tabloul de bord: apar aici”.

## Ce arată blocul Hub {#what-the-hub-block-shows}

- numele hubului și un **punct de conexiune** (conectat sau nu);
- **porturile** ca opțiuni: A, B, C, D… pe huburile LEGO® și SBrick (A–F pe Robot Inventor și Mould King 6.0), 1–4 pe BuWizz 2.0, 1–4 plus A și B pe BuWizz 3.0 Pro;
- un subtitlu: „porturi A, B”, „alege porturile”, „tot hubul” (după o operație pentru tot hubul) sau „tracțiune, direcție, lumini” (Technic Move).

## Alege porturile {#choose-ports}

Atinge un port ca să-l folosești; atinge-l din nou ca să-l eliberezi. Un rând poate acționa **mai multe porturi** odată, de exemplu două motoare de tracțiune pe A și B.

Ai nevoie ca două motoare să se rotească în sensuri opuse? Fă două rânduri din aceeași intrare și adaugă **Inversează** la unul dintre ele.

## Un port, un rând {#one-port-one-row}

Un port aparține unui singur rând. Dacă alegi un port pe care îl folosește deja alt rând, MOCPilot întreabă:

> **Portul este deja folosit**: Pe „Technic Hub”, portul A este folosit în rândul 2 (Motor). Îl folosești în acest rând? Celălalt rând pierde acest port și nu-l mai acționează.

**Folosește în acest rând** mută portul; **Anulează** îl lasă unde era. Un port folosit de două rânduri (de exemplu, într-un fișier vechi) este raportat ca problemă: „Portul A este folosit și în rândul 2”.

<Screenshot name="port-in-use" alt="Dialogul Portul este deja folosit" width={700} />

## Verificarea porturilor {#port-checks}

Când hubul este conectat, MOCPilot știe ce este conectat la fiecare port și verifică dacă operația se potrivește:

| Problemă | Semnificație |
|---|---|
| „Portul A: acest dispozitiv nu poate funcționa ca servo (este nevoie de un motor cu encoder)” | Servo și Rotire cu grade au nevoie de un motor cu encoder |
| „Portul A: motorul nu are poziție absolută (doar motoare unghiulare)” | Mergi la poziție are nevoie de un motor unghiular |
| „Portul A are un senzor, nu un motor” | dispozitivul de pe port este un senzor |
| „Portul A acceptă doar comenzi simple de viteză: fără control al poziției” | acest port nu poate controla poziții |
| „Portul A nu are LED: folosește porturile 1-4” | Culoare port funcționează doar pe porturile 1–4 ale BuWizz 3.0 Pro |
| „Luminile senzorului: alege un singur port, cel cu senzorul de distanță” | Luminile senzorului folosesc exact un port |

Operațiile pe care un hub nu le poate executa nu îi sunt oferite. Dacă muți un rând pe alt hub, rândul arată ce operație nu se potrivește, de exemplu „Frână: doar Technic Move (… nu are comandă de frână)”.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (din mașinile LEGO® Technic cu telecomandă) se controlează după funcție, nu după port: blocul său Hub arată **tracțiune, direcție, lumini** și nu are porturi. Folosește **Motor** sau **Motor pe durată** pentru tracțiune, **Servo** pentru direcție, **Lumină** pentru lumini și **Frână**, **Boost** și **Impuls de putere** pentru funcțiile speciale.

Tracțiunea, direcția, luminile, frâna și boost-ul pot fi folosite fiecare de un singur rând („Rândul 2 acționează deja acest Technic Move”).

Pentru a încărca în hub configurația unei mașini (Porsche, Lamborghini, Batmobile), folosește **Huburile mele → Selectează configurația**. Consultă [Configurațiile Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Huburile Mould King doar primesc comenzi, așa că nu au intrări și nu confirmă conexiunea. Pentru a schimba canalul de control al hubului, folosește operația [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
