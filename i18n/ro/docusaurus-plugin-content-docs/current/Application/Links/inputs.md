---
id: Inputs
title: Intrări
description: "Intrările din Legături rapide: comenzile din tabloul de bord, vehiculul simulat, gamepadul, butoanele și senzorii hubului."
---

import Screenshot from '@site/src/components/Screenshot';

# Intrări {#inputs}

Fiecare rând începe cu o intrare. Fila **Intrări** a paletei conține:

- câte un bloc pentru fiecare **comandă din tabloul de bord**; comenzile cu mai multe canale (axele joystickului și ale D-pad-ului, volanul, pedalele, schimbătorul de viteze, frâna de mână, semnalizatoarele) primesc câte un bloc pentru fiecare canal;
- blocurile **Vehicul**, când tabloul de bord are pedale, schimbător de viteze sau frână de mână;
- blocul **Gamepad**, când blocurile gamepadului sunt activate;
- câte un bloc **Hub** pentru fiecare hub al profilului (cu excepția Mould King, care nu are butoane sau senzori).

Dacă fila este goală, afișează „Adaugă controlere în tabloul de bord sau huburi în Huburile mele: apar aici”.

<Screenshot name="links-palette-inputs" alt="Fila Intrări a paletei Legături rapide" width={900} />

Toate setările și valorile fiecărei intrări sunt descrise în referința [Blocuri de intrare](/docs/Application/Links/Blocks/InputBlocks).

## Comenzile din tabloul de bord {#dashboard-controls}

Un bloc [Controler](/docs/Application/Links/Blocks/InputBlocks#src-controller) preia o comandă din tabloul de bord după numele ei (**JOY1**, **SLDR1**, **BTN2**…) și, dacă are mai multe, **Canal** dorit:

| Comandă | Ce primește rândul |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Axa X** sau **Axa Y**, −1…1 |
| [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [controlerul de tren](/docs/Application/Links/Blocks/InputBlocks#controller-train), [buton rotativ](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | poziția sa |
| [Volan](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Unghi de virare** −1…1 sau **Claxon** |
| [Pedale](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Pedala de accelerație** sau **Pedala de frână**, 0…1 |
| [Schimbător de viteze](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Treaptă de viteză** sau **Sens (R − / înainte +)** |
| [Frână de mână](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Frâna de mână trasă** (pornit/oprit) sau **Forța frânei de mână** |
| [Semnalizare](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Semnalizare (stânga − / dreapta +)**, **Semnalizare stânga**, **Semnalizare dreapta** sau **Lumină** |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Sus / jos** sau **Stânga / dreapta**: −1, 0 sau +1 |
| [Buton](/docs/Application/Links/Blocks/InputBlocks#controller-button) | pornit cât timp este apăsat |
| [Comutator](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | pornit / oprit |
| [Comutator cu trepte](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | treapta curentă |

Când adaugi, redenumești sau modifici o comandă în tabloul de bord, paleta și rândurile se actualizează automat. Dacă setezi un joystick la **Doar orizontal**, rândurile care îi folosesc axa Y raportează „… nu se mișcă pe această axă”.

## Condu ca o mașină adevărată {#drive-like-a-real-car}

Volanul, pedalele, schimbătorul de viteze și frâna de mână dau pozițiile lor brute: un rând cu pedala acționează motorul exact cât de mult este apăsată pedala. Pentru un model care se comportă ca o mașină (accelerează cu inerție, rulează liber, frânează și merge înapoi în R), folosește în schimb intrarea [Vehicul](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Ea citește împreună pedalele, schimbătorul de viteze și frâna de mână și dă **Viteză**, **Turația motorului (rpm)**, **Frânare** sau **Pe frâna de mână** ale vehiculului:

- *Vehicul (Viteză)* → *Motor* → motoarele de tracțiune;
- *Volan (Unghi de virare)* → *Servo* → direcția;
- *Vehicul (Frânare)* → *Lumină* → stopurile;
- *Semnalizare (Semnalizare stânga)* → *Lumină* → lampa de semnalizare stânga.

## Gamepad {#gamepad}

Un singur bloc [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) acoperă întregul controler; alege un stick, un trăgaci sau un buton în **Intrare**. Mai întâi activează **Activează blocurile gamepad-ului** pe [pagina Gamepad](/docs/Application/Dashboard/Gamepad). Etichetele urmează **Dispunerea butoanelor gamepad-ului** (Xbox sau PlayStation).

## Butoanele și senzorii hubului {#hub-buttons-and-sensors}

O intrare [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) citește butonul unui hub sau unul dintre senzorii săi: baterie, înclinare, accelerație, viteza și poziția motorului, senzorii de distanță și de culoare de pe porturi și altele. Lista arată doar ce poate raporta acel hub. Pentru înclinare și accelerație, setează **Orientarea hubului** în funcție de cum stă hubul în model.

Valoarea circulă de-a lungul rândului scalată la −1…1. Un **Monitor** text pus imediat după un senzor arată valoarea reală cu unitatea ei, de exemplu „7.85 V” sau „−12°”.

Utilizări tipice:

- *Baterie* → *Indicator* (nivelul bateriei);
- *Senzor de distanță* → *Prag* (Sub, 20 %) → *Motor pe durată*: dă înapoi când ceva se apropie;
- *Buton 1* (telecomanda Powered Up) → *Motor*: condu cu telecomanda fizică.
