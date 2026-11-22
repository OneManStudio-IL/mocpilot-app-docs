---
id: Problems
title: Rularea și rezolvarea problemelor
description: "Panoul de probleme, cadrele roșii, valorile în timp real și mesajele frecvente din Legături rapide."
---

import Screenshot from '@site/src/components/Screenshot';

# Rularea și rezolvarea problemelor {#running-and-fixing-problems}

## Este totul gata? {#is-everything-ready}

Butonul **Probleme** din bara de sus a editorului (pe computer, chiar înainte de **Rulează**) arată:

- o **bifă verde**: „Toate rândurile sunt gata”;
- un **„!” roșu**: „Probleme: N”.

Pe computer, textul este scris pe buton; într-o fereastră îngustă rămân doar pictograma și numărul de probleme. Pe telefon sau tabletă, butonul arată pictograma, cu numărul într-o insignă roșie.

Atinge-l pentru a deschide panoul de probleme (un panou lateral pe telefon, un meniu pe tabletă sau computer). Acesta listează „Rândul N — motiv”; atinge un element ca să sari la acel rând. Blocul care cauzează problema are un **cadru roșu**. Când totul este în regulă, panoul afișează „Fiecare rând pornit poate rula.”

<Screenshot name="links-problems" alt="Panoul de probleme cu un rând care nu este gata" width={900} />

Rândurile cu probleme nu rulează; celelalte rânduri rulează.

## Mesaje frecvente {#common-messages}

| Mesaj | Ce trebuie făcut |
|---|---|
| Trage în rând o intrare și o ieșire (un hub sau un indicator al tabloului de bord) | rândul este gol |
| Adaugă o intrare la începutul rândului | trage mai întâi o comandă, vehiculul, gamepadul sau o intrare de hub |
| Adaugă o ieșire: un hub sau un indicator al tabloului de bord | încheie rândul cu o ieșire |
| Adaugă o operație înainte de hub: motor, servo, lumină | o ieșire Hub are nevoie de o operație înaintea ei |
| Alege cel puțin un port pe hub | atinge un port pe blocul Hub |
| Alege un controler al tabloului de bord | atinge blocul de intrare și alege o comandă |
| … nu se mișcă pe această axă | joystickul are o singură axă: alege cealaltă axă sau modifică joystickul |
| Alege ce oferă … | comanda nu mai are acest canal: alege unul |
| Alege pedalele vehiculului | intrarea Vehicul are nevoie de pedale în tabloul de bord |
| … nu este pe tabloul de bord | schimbătorul de viteze sau frâna de mână alese pentru Vehicul au fost eliminate |
| „…” nu funcționează cu acest controler | acest bloc de procesare nu se potrivește cu semnalul |
| Portul A: acest dispozitiv nu poate funcționa ca servo (este nevoie de un motor cu encoder) | folosește un motor cu encoder sau altă operație |
| Portul A are un senzor, nu un motor | verifică ce este conectat la port |
| Portul A este folosit și în rândul 2 | fiecare port poate aparține unui singur rând |
| Activează blocurile de gamepad pe pagina Gamepad (bara de sus) | deschide **Gamepad** și activează **Activează blocurile gamepad-ului** |
| Indicatorul afișează valoarea așa cum este: elimină operația | un rând cu Indicator nu are operație |
| Calibrarea nu are nevoie de operație: elimin-o | un rând cu Calibrează servo-urile nu are operație |
| Alege un hub cu LED color (huburi LEGO) | LED hub funcționează doar pe huburile LEGO® |
| Culorile porturilor sunt disponibile doar pe BuWizz 3 | Culoare port are nevoie de un BuWizz 3.0 Pro |
| Niciun servo în modul de calibrare Auto în acest program | Calibrează servo-urile are nevoie de un Servo în modul Auto |
| Acest bloc necesită o versiune mai nouă a aplicației | profilul a fost creat într-o versiune mai nouă: actualizează MOCPilot |
| Rândul este oprit | pornește-l din meniul rândului |

## Valori în timp real {#live-values}

Cât timp programul rulează, fiecare îmbinare dintre blocuri arată valoarea care trece prin ea. Mișcă o comandă și urmărește valoarea de-a lungul rândului:

- nu se schimbă nimic la intrare: comanda sau gamepadul nu trimite nimic; verifică canalul sau axa;
- valoarea se schimbă, dar motorul nu se mișcă: verifică punctul de conexiune al hubului și portul;
- valoarea este mică după **Limită** sau **Zonă moartă**: ajustează-le setările.

<Screenshot name="links-live-values" alt="Un program Legături rapide care rulează, cu valori în timp real pe îmbinări" width={900} />

## Modelul nu se mișcă {#the-model-does-not-move}

1. Este hubul conectat? Verifică **Huburile mele** și punctul de conexiune de pe blocul Hub.
2. Este ales portul corect? Sunt motoarele conectate acolo unde crezi?
3. Este rândul pornit, fără cadru roșu?
4. Rulează programul (**Rulează**)?
5. Este bateria încărcată? Adaugă un rând *Baterie → Indicator* ca s-o urmărești.

Mai multe în [Depanare](/docs/Help/Troubleshooting).
