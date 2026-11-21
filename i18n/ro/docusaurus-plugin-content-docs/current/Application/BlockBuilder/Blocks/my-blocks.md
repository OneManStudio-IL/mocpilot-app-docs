---
id: MyBlocks
title: Blocurile mele
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Blocurile mele {#my-blocks}

Blocurile mele îți permit să creezi propriile blocuri reutilizabile.
Funcționează ca o funcție din programarea obișnuită: descrii comportamentul o singură dată și îl folosești în oricâte locuri vrei.

## Blocurile {#the-blocks}

### `defini …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Apasă **Creează un bloc** din partea de sus a categoriei pentru a crea un bloc nou. În zona programului apare apoi un bloc pălărie `defini` cu numele blocului tău: blocurile pe care le atașezi sub el sunt ceea ce face blocul.

- Utilizare tipică: pune logica repetată într-un singur bloc cu un nume clar.

### Blocul tău (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Fiecare bloc creat apare în paletă sub numele său. Folosirea lui rulează blocurile atașate la blocul său `defini`.

- Tip: bloc de comandă
- Utilizare tipică: folosește aceeași logică în mai multe locuri fără a copia stive.

## Exemple cu intrări diferite {#examples-with-different-inputs}

Blocuri personalizate cu diferite seturi de intrări:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Folosirea unui bloc personalizat într-un program {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Aici blocul personalizat este folosit sub `când începe programul`, iar stiva `defini` conține logica motorului pe care o rulează.

- Tiparul obișnuit: folosește blocurile proprii în scripturile de evenimente.
- Avantaj: o singură definiție, multe locuri care o folosesc.

## Editorul de blocuri {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

În editorul **Creează un bloc** stabilește cum arată blocul: adaugă etichete (**Adăugați o etichetă**) și intrări (**Adăugați o intrare**: *număr sau text* sau *boolean*). În stiva `defini`, intrările funcționează ca niște variabile care păstrează valorile transmise blocului.

## De ce să folosești Blocurile mele {#why-use-my-blocks}

- Reutilizare: scrie o dată, folosește de multe ori.
- Lizibilitate: un singur nume sugestiv în loc de stive lungi repetate.
- Modificări ușoare: corectează logica într-un singur loc, nu în fiecare copie.
- Structură: împarte un program mare în părți logice mici.

## Observații {#notes}

- Blocurile personalizate aparțin profilului și pot fi folosite oriunde în programul lui.
- Dă blocurilor nume care spun ce fac, nu cum fac.
- Un bloc care se apelează pe sine poate rula la nesfârșit; editorul te avertizează despre acest lucru.
