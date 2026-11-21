---
id: SystemRequirements
title: Systémové požiadavky
description: "Podporované operačné systémy, Bluetooth, pamäť a prehliadače pre MOCPilot."
---

# Systémové požiadavky {#system-requirements}

MOCPilot beží na telefónoch, tabletoch a počítačoch. Na riadenie modelu potrebuje zariadenie aj Bluetooth a [podporovaný hub](/docs/Introducing/SupportedDevices).

## Operačné systémy {#operating-systems}

| Platforma | Minimálna verzia | Kde ju získať |
|---|---|---|
| iPhone a iPad | iOS / iPadOS 17 | App Store |
| Telefóny a tablety s Androidom | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Počítač s Windows (64-bit, x64) | Windows 10 verzia 1809 alebo Windows 11 | Microsoft Store |

Odkazy do obchodov nájdete na [mocpilot.com](https://mocpilot.com). Aplikácia si sama vyberie rozloženie pre telefón, tablet alebo počítač; pozrite si [Telefón, tablet a počítač](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Huby sa pripájajú cez **Bluetooth Low Energy** (Bluetooth 4.0 alebo novší). Má ho takmer každý telefón a tablet; na počítači použite vstavaný adaptér alebo USB Bluetooth adaptér.
- Hub **Robot Inventor** používa klasický Bluetooth. Funguje na Androide, Macu a Windows, ale nie na iPhone a iPade.
- Huby **Mould King** prijímajú príkazy ako vysielanie Bluetooth (advertising). Vo Windows potrebuje Mould King 6.0 adaptér a ovládač, ktoré dokážu vysielať, a Mould King 4.0 nefunguje vôbec; použite preň telefón alebo tablet.
- Aplikácia požiada o povolenie Bluetooth (na Androide aj o Zariadenia v okolí alebo Polohu). Pozrite si [Bluetooth a povolenia](/docs/Help/BluetoothPermissions).

## Pamäť {#memory}

Na zariadeniach s menej ako 4 GB pamäte vykresľuje MOCPilot logické bloky jednoduchšie, aby veľké programy bežali plynulo. Deje sa to automaticky; bloky fungujú rovnako.

## Webový editor {#web-editor}

[Webový editor](/docs/Introducing/WebEditor) na mocpilot.com beží v prehliadači:

- používajte aktuálny prehliadač pre počítač; editor potrebuje WebAssembly;
- pri prvom otvorení sa stiahne približne 20 MB pre editor a približne 15 MB tém, takže rýchle pripojenie pomôže;
- prehliadače sa nedokážu pripojiť k Bluetooth hubom: ak chcete model riadiť z prehliadača, použite [diaľkové ovládanie](/docs/Application/Profiles/RemoteControl), ktoré vyžaduje prehliadač s podporou WebRTC;
- ak sa zobrazí „The editor could not start in this browser.“, aktualizujte prehliadač alebo skúste iný.

## Internet {#internet}

Huby, vaše profily a stiahnuté témy fungujú offline. Prihlásenie, synchronizácia, katalóg, AI staviteľ, diaľkové ovládanie a nákupy vyžadujú pripojenie na internet. Pozrite si [Práca offline](/docs/Application/Account/Sync#working-offline).
