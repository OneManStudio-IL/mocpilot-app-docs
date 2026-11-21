---
id: CreateProfile
title: Creează un profil
description: "Creează un profil și alege între editoarele de programe Blocuri logice și Legături rapide."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Creează un profil {#create-a-profile}

1. Mergi la **Profilurile mele**.
   - Telefon: atinge **+** → **Profil nou**.
   - Tabletă: **Profil nou** în antet.
   - Computer: **Fișier → Profil nou** (⌘N / Ctrl+N).
2. Alege **tipul de program** (vezi mai jos).
3. Completează detaliile profilului.
4. Atinge **Creează**. Profilul se deschide în editor.

<Screenshot name="create-profile-tiles" alt="Pagina Profil nou" width={900} />

## Alege tipul de program {#choose-the-program-type}

Tipul de program decide ce editor folosește profilul. **Nu îl mai poți schimba ulterior.** Ca să încerci celălalt editor, creează un al doilea profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Legături rapide" style={{width: '100%', maxWidth: 320}} />
    <h3>Legături rapide</h3>
    <p><em>O schemă simplificată, ca în Controlz.</em> Legi comenzile de pe tabloul de bord de motoarele și luminile hubului, rând cu rând: intrare, procesare, operație, hub. Gata în câteva minute.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Blocuri logice" style={{width: '100%', maxWidth: 320}} />
    <h3>Blocuri logice</h3>
    <p><em>Robotică, algoritmi și scenarii avansate.</em> Programezi modelul cu blocuri: evenimente, bucle, condiții, variabile și date de la senzori. Pentru roboți și automatizări.</p>
  </div>
</div>

| | Legături rapide | Blocuri logice |
|---|---|---|
| Cum construiești | Rânduri: intrare → procesare → operație → hub | Blocuri îmbinate în scripturi |
| Timp de învățare | Câteva minute | Mai mult; mai multe posibilități |
| Ideal pentru | Mașini, camioane, trenuri, macarale: „această comandă mișcă acel motor” | Roboți, secvențe automate, logică cu senzori, jocuri |
| Logică (dacă, bucle, variabile) | Nu (doar praguri și comutări) | Da |
| Senzori | Senzorii hubului ca intrări; valori către indicatoare | Toți senzorii hubului și ai telefonului, orice calcul |
| Pornire lină, limite, zonă moartă | Blocuri gata făcute | Construite din blocuri |
| Direcție cu servo și calibrare | Bloc gata făcut | Blocuri |
| Gamepad | Da | Da |
| Mai multe huburi | Da | Da |

**Nu ești sigur?** Începe cu Legături rapide. Dacă mai târziu ai nevoie de logică, fă pentru model un profil Blocuri logice.

Dacă atingi **Creează** fără să alegi un tip, dalele sunt evidențiate. Fiecare dală are un link **Documentație ↗** către partea ei din această documentație.

## Detaliile profilului {#profile-details}

- **Imagine**: dă clic pe zona imaginii (ține apăsat pe un ecran tactil) ca să alegi o imagine. Trage imaginea în sus sau în jos ca să alegi partea care se vede. **Actualizează imaginea** și **Elimină** o schimbă mai târziu.
- **Nume**: obligatoriu și trebuie să fie unic: „Există deja un profil cu numele …” înseamnă că ai deja unul cu acest nume.
- **Nivel blocuri** (doar Blocuri logice): **Începător**, **Avansat** sau **Guru**. Stabilește ce blocuri afișează paleta pentru acest profil. Îl poți schimba mai târziu în Setări editor. Vezi [Lucrul în editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtaguri**: descriu profilul și îi ajută pe alții să-l găsească. Hashtagurile provin dintr-o listă comună, care se încarcă atunci când ești online.

Tot în afară de tipul de program poate fi schimbat mai târziu în **Editează profilul**, unde poți adăuga și o descriere și poți marca profilul ca **Preferat**.

## Pașii următori {#next-steps}

1. Adaugă huburi: [Adaugă și conectează un hub](/docs/Application/Hubs/ConnectingHubs).
2. Așază comenzi: [Tablou de bord](/docs/Application/Dashboard/DashboardOverview).
3. Scrie programul: [Legături rapide](/docs/Application/Links/LinksIntroducing) sau [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Constructor AI
Cu [MocPilot Pro](/docs/Application/Account/Pro), îți poți descrie modelul în cuvinte sau prin voce, iar constructorul AI creează huburile, tabloul de bord și programul (Blocuri logice sau Legături rapide). Spune ce hub folosești, ce este conectat la fiecare port și ce trebuie să facă. Vezi [Cum obții un rezultat bun](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
