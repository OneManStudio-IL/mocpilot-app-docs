---
id: BlocksIntroducing
title: Prezentarea Blocurilor logice
description: "Blocuri logice este editorul vizual de programare cu blocuri din MOCPilot: evenimente, bucle, condiții, variabile, senzori și sunete."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Blocuri logice {#logic-blocks}

**Blocuri logice** este editorul de programare cu blocuri din MOCPilot. Construiește programe îmbinând blocuri, la fel ca în Scratch: evenimente, bucle, condiții, variabile, liste, blocuri proprii, sunete și blocuri pentru motoare, lumini, senzori, comenzile din tabloul de bord și gamepad.

Alege Blocuri logice când modelul are nevoie de logică: roboți, secvențe automate, reacții la senzori, verificări la pornire, jocuri. Dacă doar trebuie să legi comenzi de motoare, [Legături rapide](/docs/Application/Links/LinksIntroducing) este mai rapid.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program în Blocuri logice" style={{width: '100%', maxWidth: 720}} />

:::warning Nu este Scratch
Blocuri logice are propriul set de blocuri și propriul comportament. Nu poți importa programe MOCPilot în Scratch și nici proiecte Scratch în MOCPilot.
:::

## Editorul pe scurt {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editorul Blocuri logice cu paleta și un program" width={900} />

- **Paleta** conține categoriile de blocuri: **Evenimente**, **Control**, **Senzori**, **Sunete**, **Operator**, **Variabile**, **Liste** și **Blocurile mele**. Alte categorii apar când profilul are nevoie de ele: **Motoare** și **Lumină** (când un hub le acceptă), **Simulator** (când tabloul de bord are pedale, cutie de viteze sau frână de mână), **Controlere pe ecran** și **Gamepad**.
- **Zona programului** este locul unde tragi blocurile și construiește scripturile.
- Bara de sus conține **Anulează** și **Refă**, **Tablou de bord**, **Huburile mele**, **Gamepad**, panourile laterale **Constructor AI**, [**Rucsac**](/docs/Application/BlockBuilder/Backpack) și **Monitor**, **Mai mult** (cu **Setări editor**) și **Rulează/Oprește**. Pe telefon sau tabletă, panourile laterale și Gamepad se află în **Mai mult**.

Detalii în [Lucrul în editor](/docs/Application/BlockBuilder/Editor).

## Cum rulează un program {#how-a-program-runs}

- Un script începe cu un bloc de **eveniment** (un bloc „pălărie”): *când începe programul*, *când butonul … apăsat*, *când primesc …* și așa mai departe.
- Blocurile atașate sub el rulează de sus în jos.
- Mai multe scripturi rulează **în același timp**. Folosește mesaje (*transmite*) ca să le coordonezi.
- **Buclele** (*repeta mereu*, *repeta*, *repeta cât timp*) mențin un script în funcțiune; **condițiile** (*dacă*, *dacă … altul*, *așteptați până la*) iau decizii.
- Blocurile **raportor** (rotunjite) returnează valori și se potrivesc în intrările altor blocuri; blocurile **booleene** (ascuțite) returnează adevărat sau fals pentru condiții.
- **Variabilele** și **listele** păstrează valori între blocuri și scripturi.

## Formele blocurilor {#block-shapes}

### Blocuri pălărie {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Pornesc un script când se întâmplă ceva. Poți atașa blocuri doar sub ele.

---

### Blocuri de comandă {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Principalele blocuri de comandă: fiecare face ceva.

---

### Blocuri C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocuri în formă de C care conțin alte blocuri: bucle și condiții.

---

### Blocuri raportor {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Returnează o valoare, de exemplu un număr sau un text.

---

### Blocuri booleene {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Returnează doar `true` sau `false`. De obicei le folosești în condiții.

---

### Blocuri de încheiere {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Încheie un script: sub ele nu se mai poate atașa nimic.

---

### Stivă de blocuri {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

O stivă este un grup de blocuri conectate care rulează ca un singur script, de sus în jos.
De obicei, o stivă începe cu un bloc de eveniment, urmat de blocurile care rulează pe rând.

---


## Huburi, porturi și comenzi {#hubs-ports-and-controls}

- Blocurile pentru motoare și lumini primesc un **hub** și un **port**. Categoriile Motoare și Lumină apar doar când un hub din profil le acceptă, iar unele blocuri există doar pentru anumite huburi (de exemplu, modurile de putere BuWizz sau funcțiile Technic Move Hub). Descrierea fiecărui bloc spune cu ce huburi funcționează.
- Blocurile tabloului de bord se referă la comenzi după nume (**JOY1**, **BTN2**). Nu poți șterge o comandă din tabloul de bord cât timp o folosesc blocuri; elimină mai întâi acele blocuri.
- Blocurile gamepadului apar când **Activează blocurile gamepad-ului** este activat pe [pagina Gamepad](/docs/Application/Dashboard/Gamepad).

## Niveluri de blocuri {#block-levels}

Fiecare profil are un **Nivel blocuri**: **Începător** afișează cele mai simple blocuri, **Avansat** adaugă blocurile uzuale de logică și pentru dispozitive, iar **Guru** afișează setul complet. Îl alegi când creezi profilul sau mai târziu în Setări editor. Această referință arată nivelul fiecărui bloc lângă numele lui.

## Mod de lucru recomandat {#recommended-workflow}

1. Începe cu un bloc de eveniment și un script scurt; apasă **Rulează** și verifică că funcționează.
2. Verifică din timp sensurile motoarelor și intervalele valorilor (un Monitor ajută).
3. Împarte programul în scripturi mici care comunică prin mesaje; mută logica repetată în [Blocurile mele](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Adaugă siguranță: limite, opriri, o verificare la pornire și un plan pentru cazul în care un hub se deconectează.

## Greșeli frecvente {#common-pitfalls}

- Un script fără bloc de eveniment nu pornește niciodată.
- Este selectat hubul sau portul greșit, așa că nu se întâmplă nimic vizibil.
- Amestecarea textului, numerelor și valorilor booleene dă rezultate neașteptate.
- Evenimentele foarte dese, fără filtrare (de exemplu, un eveniment de senzor la fiecare schimbare minusculă), pot supraîncărca programul; folosește praguri sau așteptări scurte.

## Referința blocurilor {#block-reference}

- [Evenimente](/docs/Application/BlockBuilder/Blocks/Events) · [Control](/docs/Application/BlockBuilder/Blocks/Control) · [Operator](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variabile](/docs/Application/BlockBuilder/Blocks/Variables) · [Liste](/docs/Application/BlockBuilder/Blocks/Lists) · [Blocurile mele](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motoare](/docs/Application/BlockBuilder/Blocks/Motors) · [Lumină](/docs/Application/BlockBuilder/Blocks/Light) · [Senzori](/docs/Application/BlockBuilder/Blocks/Sensors) · [Sunete](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Controlere pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

În aplicație, ține apăsat (sau fă clic dreapta pe) un bloc și alege **Despre bloc** ca să-i deschizi descrierea aici.

Programe gata făcute: [Exemple](/docs/Application/BlockBuilder/Examples).
