---
id: Editor
title: Lucrul în editor
description: "Paleta, tragerea blocurilor, zoomul, meniurile contextuale, anularea, Monitorul, Setările editorului și Constructorul AI în Blocuri logice."
---

import Screenshot from '@site/src/components/Screenshot';

# Lucrul în editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editorul Blocuri logice" width={900} />

## Paleta și zona programului {#palette-and-program-area}

- Afișează sau ascunde paleta cu **Vizualizare → Paleta de blocuri** (⌘P / Ctrl+P).
- Alege o categorie, trage un bloc în zona programului și plasează-l sub alt bloc pentru a-l atașa. O previzualizare arată unde se va fixa.
- Trage o stivă întreagă de blocul ei de sus; trage un bloc din mijloc ca să-l iei împreună cu tot ce este sub el.
- Pentru a șterge blocuri, trage-le înapoi pe paletă.
- Variabilele, listele, mesajele și Blocurile mele se creează cu butoanele din categoriile lor (**Creează o variabilă**, **Creează o listă**, **Adaugă mesaj**, **Creează un bloc**) sau din **Editare → Variabilă nouă… / Listă nouă… / Mesaj nou… / Bloc nou…**. Sunetele și vehiculele au și ele butoane proprii: **Adaugă un sunet** în [Sunete](/docs/Application/BlockBuilder/Blocks/Sounds) și **Creează vehicul** în [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom și derulare {#zoom-and-scroll}

- Ciupește ecranul (pe un ecran tactil) sau folosește **Vizualizare → Mărește / Micșorează / Mărime reală** (⌘+ / ⌘− / ⌘0).
- Trage de un loc gol ca să te deplasezi.
- Meniul contextual al unui loc gol conține **Mărire**, **Micșorare**, **Resetează zoom** și **Șterge N blocuri**.

## Meniul blocului {#block-menu}

Ține apăsat (pe un ecran tactil) sau fă clic dreapta pe un bloc:

- **Editează**: modifică-i valorile;
- **Duplică**;
- **Șterge blocul** / **Șterge N blocuri**;
- **Despre bloc**: deschide descrierea blocului în această documentație;
- **Exportă blocul ca SVG** / **Exportă toate blocurile ca SVG**: salvează o imagine pentru un tutorial sau o postare pe forum.

<Screenshot name="blocks-block-menu" alt="Meniul contextual al unui bloc în Blocuri logice" width={900} />

Un bloc legat de o comandă din tabloul de bord poate fi șters doar după ce îl eliberezi de acea comandă.

## Anulare și refacere {#undo-and-redo}

Folosește **Editare → Anulează / Refă** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) sau butoanele flotante.

- O tragere este un pas; modificările rapide ale aceleiași valori se unesc într-un singur pas.
- Anularea funcționează chiar și în timp ce programul rulează.
- Crearea sau ștergerea variabilelor, listelor, mesajelor sau Blocurilor mele este și ea un pas; anularea ei oprește programul care rulează.
- Valorile stocate în variabile și liste nu se anulează.
- Tabloul de bord are propriul istoric de anulare.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) arată valorile curente ale variabilelor și listelor cât timp programul rulează. Pe computer îl poți deschide într-o fereastră separată. Este de mare ajutor când cauți o eroare.

<Screenshot name="blocks-monitor" alt="Monitorul afișând variabile și o listă cât timp programul rulează" width={900} />

## Setări editor {#editor-settings}

- **Pornește blocul prin clic**: un clic pe un bloc îl rulează, ca să-l poți testa separat; dacă programul este oprit, îl și pornește.
- **Deschide programul în centru**: când deschizi un profil, programul este afișat la 100% în mijlocul pânzei (sau din colțul său din stânga sus, dacă este mai mare), indiferent unde l-ai lăsat la editare. Se aplică tuturor profilurilor de pe acest dispozitiv.
- **Oprește porturile hubului când programul se oprește**: oprește toate motoarele și stinge toate luminile când apeși **Oprește**. Lasă opțiunea activată, cu excepția cazului în care motoarele trebuie să-și păstreze starea.
- **Selectează nivelul blocurilor**: Începător, Avansat sau Guru.

<Screenshot name="blocks-editor-settings" alt="Panoul Setări editor în Blocuri logice" width={900} />

## Niveluri de blocuri {#block-levels}

| Nivel | Afișează |
|---|---|
| **Începător** | cele mai simple blocuri; o paletă aerisită pentru copii și primii pași |
| **Avansat** | blocurile uzuale de logică și pentru dispozitive |
| **Guru** | setul complet de blocuri |

Nivelul este salvat în profil. Blocurile aflate deja în program continuă să funcționeze când cobori nivelul.

## Constructor AI {#ai-builder}

Cu [MocPilot Pro](/docs/Application/Account/Pro), **Constructor AI** (butonul cu steluțe, ⇧⌘I / Ctrl+Shift+I) configurează huburile, tabloul de bord și programul pe baza unei descrieri pe care o tastezi sau o rostești, apoi modifică profilul la cererea ta. Funcționează în profilurile Blocuri logice și Legături rapide. Consultă [Constructor AI](/docs/Application/Profiles/AiBuilder).

### Cum obții un rezultat bun {#ai-builder-tips}

Numește hubul, spune ce este conectat la fiecare port și ce trebuie să facă, precum și cum vrei să-l controlezi. Consultă [Scrie o cerere bună](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Meniurile pe desktop {#desktop-menus}

| Meniu | Elemente |
|---|---|
| Fișier | Închide profilul (⌘W) |
| Editare | Anulează, Refă, Variabilă nouă…, Listă nouă…, Mesaj nou…, Bloc nou… |
| Vizualizare | Paleta de blocuri, Mărește, Micșorează, Mărime reală |
| Program | Rulează (⌘R), Oprește (⌘.) |
