---
id: SystemRequirements
title: Systemkrav
description: "Understøttede styresystemer, Bluetooth, hukommelse og browsere til MOCPilot."
---

# Systemkrav {#system-requirements}

MOCPilot kører på telefoner, tablets og computere. For at køre en model skal enheden også have Bluetooth og en [understøttet hub](/docs/Introducing/SupportedDevices).

## Styresystemer {#operating-systems}

| Platform | Mindste version | Hvor du får den |
|---|---|---|
| iPhone og iPad | iOS / iPadOS 17 | App Store |
| Android-telefoner og -tablets | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-pc (64-bit, x64) | Windows 10 version 1809 eller Windows 11 | Microsoft Store |

Du finder linkene til butikkerne på [mocpilot.com](https://mocpilot.com). Appen vælger selv layout til telefon, tablet eller computer; se [Telefon, tablet og computer](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubs forbindes via **Bluetooth Low Energy** (Bluetooth 4.0 eller nyere). Næsten alle telefoner og tablets har det; på en computer kan du bruge den indbyggede adapter eller en USB-Bluetooth-dongle.
- **Robot Inventor**-hubben bruger klassisk Bluetooth. Den virker på Android, Mac og Windows, men ikke på iPhone og iPad. På Windows og Mac kan den også forbindes med et USB-kabel.
- **Mould King**-hubs modtager kommandoer som Bluetooth-udsendelser (advertising). På Windows kræver Mould King 6.0 en adapter og driver, der kan udsende, og Mould King 4.0 virker slet ikke; brug en telefon eller tablet til den.
- Appen beder om tilladelse til Bluetooth (på Android også Enheder i nærheden eller Placering). Se [Bluetooth og tilladelser](/docs/Help/BluetoothPermissions).

## Hukommelse {#memory}

På enheder med mindre end 4 GB hukommelse tegner MOCPilot Logikblokke på en enklere måde, så store programmer forbliver flydende. Det sker automatisk; blokkene virker på samme måde.

## Webeditor {#web-editor}

[Webeditoren](/docs/Introducing/WebEditor) på mocpilot.com kører i browseren:

- brug en opdateret browser på en computer; editoren kræver WebAssembly;
- første gang downloades ca. 20 MB til editoren og ca. 15 MB temaer, så en hurtig forbindelse hjælper;
- browsere kan ikke forbinde til Bluetooth-hubs: for at køre en model fra browseren skal du bruge [fjernstyring](/docs/Application/Profiles/RemoteControl), som kræver en browser med understøttelse af WebRTC;
- hvis du ser "Editoren kunne ikke starte i denne browser.", så opdater browseren, eller prøv en anden.

## Internet {#internet}

Hubs, dine profiler og downloadede temaer virker offline. Login, synkronisering, kataloget, AI-byggeren, fjernstyring og køb kræver en internetforbindelse. Se [Arbejde offline](/docs/Application/Account/Sync#working-offline).
