---
id: HubFunctions
title: Funcții specifice huburilor
description: "Funcțiile speciale ale huburilor Technic Move, BuWizz, SBrick, Mould King, Robot Inventor și altele, în ambele editoare."
---

# Funcții specifice huburilor {#hub-specific-functions}

Orice hub cu porturi poate acționa motoare și lumini. Unele huburi pot face mai mult. În **Legături rapide**, aceste funcții apar în paletă doar când un astfel de hub este în profil; în **Blocuri logice**, ele sunt blocuri specifice hubului.

## Motoare cu encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funcție | Legături rapide | Blocuri logice |
|---|---|---|
| Controlul vitezei | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | setează viteza la, pornește motorul la |
| Servo de direcție cu calibrare | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manual / Auto) | mergi la poziție relativă, calibrare cremalieră |
| Rotire cu un unghi | [Rotire cu grade](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | rulează pentru |
| Poziție absolută (motoare unghiulare) | [Mergi la poziție](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | mergi la poziție |
| Comportament la oprire: liber, frână, menținere | Motor → **La oprire** | setează motorul la … la oprire |
| Presetări de accelerație ale hubului | Motor → **Accelerația hubului** | setează accelerația la, setează decelerarea la |
| Viteză, poziție, putere, curent ca intrare | [Intrarea Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | viteză, poziție, poziție relativă, putere |

## Technic Move Hub {#technic-move-hub}

Hubul mașinilor LEGO® Technic cu telecomandă (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Tracțiunea, direcția și luminile se controlează după funcție, nu după port.
- **Direcția** își calibrează singură cremaliera.
- **Frână**, **Boost** (modul de putere) și **Impuls de putere** (doar cu configurația Batmobile™ Tumbler).
- **Configurațiile hubului**: încarcă în hub un profil de mașină cu **Huburile mele → Selectează configurația**. Consultă [Configurațiile Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Luminile în Blocuri logice: *aprinde luminile*.

## BuWizz 2.0 {#buwizz-20}

- **Mod de putere**: Lentă, Normal, Rapidă, Ludicrous. În Legături rapide: operația [Mod de putere](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); în Blocuri logice: *seta … mod de alimentare la*.
- Modul de putere curent, **Tensiune de ieșire** și curentul motorului ca intrări.
- Control simplu al vitezei pe porturile 1–4: fără controlul poziției.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED-uri **Culoare port** pe porturile 1–4: dintr-o listă sau RGB ([Culoare port](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *setează culoarea LED-ului portului la*).
- Curentul motorului ca intrare, poziții relative.

## SBrick și SBrick Plus {#sbrick-and-sbrick-plus}

- Motoare și lumini cu controlul vitezei.
- Fără controlul poziției: Servo, Rotire cu grade și Mergi la poziție nu sunt disponibile.

## Mould King 4.0 și 6.0 {#mould-king-40-and-60}

- Doar comenzi: fără senzori, fără butoane, fără confirmarea conexiunii.
- **Canal de control** A, B sau C: operația [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) din Legături rapide, blocul *seta … canal de control către* din Blocuri logice sau **Selectează canalul** în Huburile mele.
- Cel mult 3 Mould King 4.0 sau 1 Mould King 6.0 per profil și un singur tip de Mould King per profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Totul despre conectare, firmware și blocuri: [Hubul MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).

- **Matrice LED**: o bară de nivel, un număr sau o imagine în Legături rapide; text și pixeli în Blocuri logice.
- **Luminile senzorului de distanță** („ochii” senzorului).
- **Detectarea blocării** și puterea motorului.
- Toate blocurile aplicației Robot Inventor: [Mișcare](/docs/Application/BlockBuilder/Blocks/Movement), sunetele și muzica hubului, gesturi, derapaj, senzorul de forță, radio între huburi.
- Bluetooth clasic (nu este disponibil pe iPhone și iPad) sau un cablu USB pe Windows și Mac.

## Huburi LEGO® cu LED color {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor și telecomanda: poți seta culoarea LED-ului hubului dintr-o listă sau ca RGB ([LED hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led) în Legături rapide, *setează culoarea LED la* în Blocuri logice).

## Telecomanda LEGO® Powered Up {#lego-powered-up-remote-control}

Butoanele ei sunt intrări, așa că poți conduce un model cu telecomanda fizică prin MOCPilot (Legături rapide: intrarea **Hub** → Buton; Blocuri logice: evenimentele butoanelor hubului).

## Senzori încorporați {#built-in-sensors}

Nivelul și tensiunea bateriei, temperatura plăcii, înclinarea (pitch, roll, yaw), accelerația și orientarea sunt disponibile pe huburile care le au. Setează **Orientarea hubului** (Legături rapide) sau *seta … orientare înclinată la* (Blocuri logice) în funcție de cum este montat hubul.
