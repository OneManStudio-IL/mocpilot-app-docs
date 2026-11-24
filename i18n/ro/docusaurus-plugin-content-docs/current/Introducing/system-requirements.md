---
id: SystemRequirements
title: Cerințe de sistem
description: "Sisteme de operare, Bluetooth, memorie și browsere acceptate pentru MOCPilot."
---

# Cerințe de sistem {#system-requirements}

MOCPilot rulează pe telefoane, tablete și computere. Pentru a conduce un model, dispozitivul are nevoie și de Bluetooth și de un [hub acceptat](/docs/Introducing/SupportedDevices).

## Sisteme de operare {#operating-systems}

| Platformă | Versiune minimă | De unde o obții |
|---|---|---|
| iPhone și iPad | iOS / iPadOS 17 | App Store |
| Telefoane și tablete Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| PC cu Windows (64 de biți, x64) | Windows 10 versiunea 1809 sau Windows 11 | Microsoft Store |

Linkurile către magazine le găsești pe [mocpilot.com](https://mocpilot.com). Aplicația alege singură aspectul de telefon, tabletă sau desktop; vezi [Telefon, tabletă și desktop](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Huburile se conectează prin **Bluetooth Low Energy** (Bluetooth 4.0 sau mai nou). Aproape orice telefon și tabletă îl au; pe un computer, folosește adaptorul încorporat sau un adaptor Bluetooth USB.
- Hubul **Robot Inventor** folosește Bluetooth clasic. Funcționează pe Android, Mac și Windows, dar nu pe iPhone și iPad. Pe Windows și Mac se poate conecta și cu un cablu USB.
- Huburile **Mould King** primesc comenzile ca difuzări Bluetooth (advertising). Pe Windows, Mould King 6.0 are nevoie de un adaptor și un driver care pot difuza, iar Mould King 4.0 nu funcționează deloc; folosește pentru el un telefon sau o tabletă.
- Aplicația cere permisiunea Bluetooth (pe Android și Dispozitive din apropiere sau Locație). Vezi [Bluetooth și permisiuni](/docs/Help/BluetoothPermissions).

## Memorie {#memory}

Pe dispozitivele cu mai puțin de 4 GB de memorie, MOCPilot desenează Blocurile logice într-un mod mai simplu, ca programele mari să rămână fluide. Acest lucru se întâmplă automat; blocurile funcționează la fel.

## Editorul web {#web-editor}

[Editorul web](/docs/Introducing/WebEditor) de pe mocpilot.com rulează în browser:

- folosește un browser de desktop actualizat; editorul are nevoie de WebAssembly;
- la prima deschidere se descarcă aproximativ 20 MB pentru editor și aproximativ 15 MB de teme, așa că o conexiune rapidă ajută;
- browserele nu se pot conecta la huburi Bluetooth: ca să conduci un model din browser, folosește [controlul de la distanță](/docs/Application/Profiles/RemoteControl), care necesită un browser cu suport WebRTC;
- dacă vezi „The editor could not start in this browser.”, actualizează browserul sau încearcă altul.

## Internet {#internet}

Huburile, profilurile tale și temele descărcate funcționează offline. Conectarea, sincronizarea, catalogul, constructorul AI, controlul de la distanță și achizițiile necesită conexiune la internet. Vezi [Lucrul offline](/docs/Application/Account/Sync#working-offline).
