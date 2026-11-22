---
id: FirstCarLinks
title: Prima ta mașină teleghidată cu Legături rapide
description: "Pas cu pas: construiește în Legături rapide o mașină LEGO teleghidată cu tracțiune, direcție cu servo și lumini, fără cod."
---

import Screenshot from '@site/src/components/Screenshot';

# Prima ta mașină teleghidată cu Legături rapide {#your-first-rc-car-with-quick-links}

În acest tutorial construiești o mașină teleghidată completă în [Legături rapide](/docs/Application/Links/LinksIntroducing): un joystick conduce și virează, iar un buton aprinde și stinge luminile. Durează aproximativ 15 minute și nu scrii niciun cod.

**De ce ai nevoie**

- un LEGO® Technic™ Hub (88012);
- un motor de tracțiune pe **portul A**;
- un motor de direcție cu senzor de poziție (encoder) pe **portul B**, de exemplu un motor Technic L sau XL ori orice motor unghiular Technic. Direcția trebuie să aibă opritoare: roțile pot vira doar până la un anumit punct spre stânga și spre dreapta;
- lumini LEGO® pe **portul C** (opțional);
- MOCPilot pe un telefon, o tabletă sau un computer cu Bluetooth.

:::note City Hub
Un City Hub (88009) are doar două porturi. Pune motorul de tracțiune pe **A** și motorul de direcție pe **B** și renunță la lumini sau adaugă pentru ele un al doilea hub. Restul funcționează la fel.
:::

**Rezultatul**: un profil cu trei rânduri:

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | JOY1, Axa Y | Lin | Motor | Technic Hub, portul A |
| 2 | JOY1, Axa X | | Servo (Auto) | Technic Hub, portul B |
| 3 | BTN1 | Comutare | Lumină | Technic Hub, portul C |

## 1. Creează profilul {#create-the-profile}

1. Mergi la **Profilurile mele** și începe un profil nou: pe telefon atinge **+** → **Profil nou**, pe tabletă atinge **Profil nou** în antet, pe computer alege **Fișier → Profil nou**.
2. Alege dala **Legături rapide**.
3. Introdu un **Nume**, de exemplu „Prima mea mașină”. Imaginea și hashtagurile sunt opționale deocamdată.
4. Atinge **Creează**. Profilul se deschide în editorul Legături rapide, cu un rând gol.

Tipul de program nu mai poate fi schimbat ulterior. Mai multe în [Creează un profil](/docs/Application/Profiles/CreateProfile).

## 2. Adaugă și conectează hubul {#add-the-hub}

1. În editor, atinge **Huburile mele** (**Huburi** în bara de sus, pe computer).
2. Atinge **Adaugă un nou hub** într-un slot liber, alege Technic Hub din listă și atinge **Adaugă**.
3. Pornește hubul și apasă-i butonul. MOCPilot îl găsește și se conectează; hubul rămâne în slot.
4. Dacă apare dialogul **Este necesară actualizarea firmware**, atinge **Actualizează** și ține hubul pornit și aproape până la terminarea actualizării. Vezi [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating).

Sfat: deschide hubul conectat ca să vezi [monitorul hubului](/docs/Application/Hubs/ConnectingHubs#hub-monitor). El arată ce dispozitiv este conectat la fiecare port, așa că poți verifica motoarele înainte să construiești rândurile.

Mai multe în [Adaugă și conectează un hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Așază comenzile pe tabloul de bord {#dashboard}

1. Deschide **Tablou de bord** și atinge **+** (**Adaugă controler**; pe computer, **+ Controler**).
2. În grupul **Joysticks**, alege **Joystick** și atinge **Adaugă la tabloul de bord**. Se numește **JOY1**. Lasă **Tip de axe** la **Ambele axe (X, Y)**: sus și jos vor conduce, stânga și dreapta vor vira.
3. Atinge din nou **+**. În **Butoane și comutatoare**, alege **Buton** și atinge **Adaugă la tabloul de bord**. Se numește **BTN1**.
4. Trage joystickul în partea stângă și butonul în partea dreaptă, acolo unde vor fi degetele mari. Atinge o comandă ca să-i schimbi dimensiunea (**S**, **M** sau **L**) sau aspectul.

<Screenshot name="tutorial-car-dashboard" alt="Tablou de bord cu joystickul JOY1 în stânga și butonul BTN1 în dreapta" width={900} />

Preferi să conduci și să virezi cu degete diferite? Adaugă în schimb două joystickuri: **JOY1** cu **Doar vertical (Y)** și **JOY2** cu **Doar orizontal (X)** și folosește JOY2 în rândul de direcție.

Mai multe în [Adaugă și aranjează comenzi](/docs/Application/Dashboard/ArrangingControls) și [Tipuri de comenzi](/docs/Application/Dashboard/ControlTypes).

### Variantă: volan și pedale {#wheel-and-pedals}

Dacă ai [comenzile speciale](/docs/Application/Dashboard/SpecialControls) **Volan** și **Pedale**, le poți folosi în locul joystickului. La pasul 4, construiește rândul 1 din intrarea [Vehicul](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) cu **Ieșire** setată la **Viteză** (accelerează și încetinește ca o mașină adevărată, așa că nu ai nevoie de Lin), iar rândul 2 din intrarea **Volan** cu canalul **Unghi de virare**.

## 4. Construiește rândurile {#rows}

Întoarce-te la program. Paleta din partea de jos are trei file: **Intrări**, **Procesare** și **Ieșiri**. Fiecare rând merge de la stânga la dreapta: intrare → procesare → operație → hub. Cum funcționează editorul: [Introducere în Legături rapide](/docs/Application/Links/LinksIntroducing).

### Rândul 1: tracțiunea {#row-drive}

1. În **Intrări**, trage **JOY1** cu canalul **Axa Y** în rândul gol („Rând nou: intrare”). Sub el apare un nou rând gol.
2. În **Procesare**, trage **Lin** după intrare. Valorile implicite de 0,5 s pentru **Accelerație (până la viteza maximă)** și **Decelerație (până la oprire)** sunt un început bun.
3. În **Ieșiri**, trage **Motor** după Lin.
4. Trage ieșirea **Technic Hub** după Motor și atinge eticheta portului **A**.

### Rândul 2: direcția {#row-steering}

1. Trage **JOY1** cu canalul **Axa X** în următorul rând gol.
2. Trage **Servo** din **Ieșiri**.
3. Atinge blocul Servo și setează **Calibrare** la **Auto**.
4. Trage ieșirea **Technic Hub** după Servo și atinge **B**.

În modul **Auto**, la fiecare pornire a programului, motorul de direcție virează până la ambele opritoare; mijlocul devine centrul, iar cursa devine unghiul de virare. Ca să încerci imediat, atinge **Calibrează acum** în setările Servo cât timp hubul este conectat. Dacă calibrarea eșuează, verifică hubul, motorul și dacă direcția are într-adevăr opritoare.

<Screenshot name="links-servo-settings" alt="Setările unui bloc Servo" width={900} />

Nu ai opritoare? Folosește **Manual**: îndreaptă roțile cu mâna, atinge **Setează ca zero** și alege **Unghi**. Vezi [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Rândul 3: luminile {#row-lights}

1. Trage **BTN1** în următorul rând gol.
2. Trage **Comutare** din **Procesare**. Transformă butonul într-un comutator: o apăsare aprinde, încă una stinge.
3. Trage **Lumină** din **Ieșiri**.
4. Trage ieșirea **Technic Hub** după Lumină și atinge **C**.

<Screenshot name="tutorial-car-links-rows" alt="Cele trei rânduri terminate ale mașinii: tracțiune, direcție și lumini" width={900} />

Când toate cele trei rânduri sunt gata, butonul **Probleme** din bara de sus (chiar înainte de **Rulează**) afișează o bifă verde. Un „!” roșu îți arată câte probleme au mai rămas; atinge-l, apoi atinge o problemă ca să sari la rândul respectiv. Vezi [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems).

## 5. Rulează și testează {#run}

1. Pune mașina pe un suport sau ține-o astfel încât roțile să nu atingă masa.
2. Apasă **Rulează**. Motorul de direcție se calibrează: virează în ambele părți și revine la mijloc.
3. Împinge joystickul în sus și în jos: mașina merge înainte și înapoi, pornind și oprind lin. Mișcă-l stânga-dreapta: roțile virează.
4. Apasă **BTN1**: luminile se aprind. Apasă-l din nou: se sting.
5. Apasă **Oprește** ca să revii la editare.

Cât timp programul rulează, fiecare îmbinare dintre blocuri arată valoarea care trece prin ea, așa că poți urmări un semnal de la joystick până la hub.

<Screenshot name="links-live-values" alt="Un program Legături rapide în rulare, cu valori în timp real pe îmbinări" width={900} />

Mai multe în [Conducerea unui model (Rulează)](/docs/Application/Profiles/PlayMode).

## 6. Reglaj fin {#tune}

Apasă mai întâi **Oprește**: rândurile nu pot fi editate cât timp programul rulează.

- **Mașina merge înapoi când împingi în sus?** Adaugă **Inversează** în rândul 1. La fel și în rândul 2, dacă roțile virează în sens greșit.
- **Motorul bâzâie sau se târăște cu joystickul eliberat?** Adaugă **Zonă moartă** în rândul 1, înainte de Lin. Valoarea implicită de 10 % pentru **Zonă** este un început bun.
- **Prea rapid?** Adaugă **Limită** în rândul 1, de exemplu cu **Maxim** 50 %.
- **Prea leneș?** Atinge Lin și alege un timp mai scurt sau **Instantaneu**.

O ordine bună pentru un rând de tracțiune este *Zonă moartă → Limită → Lin*. Toate setările: [Blocuri de procesare](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Opțional: condu cu un gamepad {#gamepad}

1. Asociază un gamepad în stil Xbox sau PlayStation cu dispozitivul tău din setările Bluetooth ale sistemului.
2. În editor, deschide **Gamepad** și activează **Activează blocurile gamepad-ului**.
3. În fiecare rând, trage intrarea tabloului de bord înapoi pe paletă ca s-o elimini și trage în locul ei intrarea **Gamepad**. Setează-i **Intrare**: **Stick stânga Y** pentru rândul 1, **Stick dreapta X** pentru rândul 2 și **A** (**Cruce** pe PlayStation) pentru rândul 3.

Fiecare port poate aparține unui singur rând, așa că un rând comandă un port fie de pe tabloul de bord, fie de pe gamepad. Mai multe în [Gamepad](/docs/Application/Dashboard/Gamepad).

## Dacă ceva nu se mișcă {#if-something-does-not-move}

1. Este hubul conectat? Verifică **Huburile mele** și punctul de conexiune de pe blocul Hub.
2. Sunt motoarele conectate la porturile alese în rânduri?
3. Butonul **Probleme** afișează o bifă verde și este fiecare rând activat?
4. Rulează programul?
5. Rulează programul și urmărește valorile în timp real: dacă valoarea se schimbă la intrare, dar motorul nu se rotește, verifică hubul și portul.

Un mesaj precum „Portul B: acest dispozitiv nu poate funcționa ca servo (este nevoie de un motor cu encoder)” înseamnă că motorul de pe acel port nu are encoder. Alte mesaje și soluții: [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems) și [Depanare](/docs/Help/Troubleshooting).

## 8. Salvează și partajează {#save-and-share}

Nu există un buton Salvează: profilul păstrează modificările tale. Când ești conectat, se și [sincronizează](/docs/Application/Account/Sync) cu celelalte dispozitive.

- **Partajare ca fișier**: în **Profilurile mele**, atinge **Partajează** pe cardul profilului (**Partajează…** pe computer). Obții un fișier `.dat` pe care îl poți trimite unui prieten. Vezi [Gestionarea profilurilor](/docs/Application/Profiles/ManageProfiles).
- **Publicare în catalog**: deschide **Editează profilul** și atinge **Trimiteți în catalog**. Adaugă mai întâi o imagine, o descriere și un hashtag. Vezi [Catalog și publicare](/docs/Application/Profiles/Catalog).

## Pașii următori {#next-steps}

- Fii atent la baterie: adaugă pe tabloul de bord un **Nivelul bateriei** sau un **Monitor** text și un rând *Technic Hub (Baterie) → Indicator*. Vezi [Indicatoare și monitoare](/docs/Application/Dashboard/Indicators).
- Construiește aceeași mașină în Blocuri logice: [Aceeași mașină în Blocuri logice](/docs/Tutorials/FirstCarBlocks).
- Mai multe rețete: un tanc, o macara și un tren în [Exemple](/docs/Application/Links/Examples).
- Dă tabloului de bord un aspect nou cu [teme](/docs/Application/Themes/ThemesOverview).
