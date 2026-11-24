---
id: SystemRequirements
title: Requisiti di sistema
description: "Sistemi operativi, Bluetooth, memoria e browser supportati da MOCPilot."
---

# Requisiti di sistema {#system-requirements}

MOCPilot funziona su smartphone, tablet e computer. Per guidare un modello, il dispositivo deve avere anche il Bluetooth e un [hub supportato](/docs/Introducing/SupportedDevices).

## Sistemi operativi {#operating-systems}

| Piattaforma | Versione minima | Dove scaricarla |
|---|---|---|
| iPhone e iPad | iOS / iPadOS 17 | App Store |
| Smartphone e tablet Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| PC Windows (64 bit, x64) | Windows 10 versione 1809 o Windows 11 | Microsoft Store |

Trovi i link agli store su [mocpilot.com](https://mocpilot.com). L'app sceglie da sola il layout per smartphone, tablet o desktop; vedi [Smartphone, tablet e desktop](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Gli hub si collegano tramite **Bluetooth Low Energy** (Bluetooth 4.0 o successivo). Quasi tutti gli smartphone e i tablet lo hanno; su un computer usa l'adattatore integrato o una chiavetta Bluetooth USB.
- L'hub **Robot Inventor** usa il Bluetooth classico. Funziona su Android, Mac e Windows, ma non su iPhone e iPad. Su Windows e Mac può anche collegarsi con un cavo USB.
- Gli hub **Mould King** ricevono i comandi come trasmissioni Bluetooth (advertising). Su Windows, Mould King 6.0 richiede un adattatore e un driver in grado di trasmettere, mentre Mould King 4.0 non funziona affatto; per questi hub usa uno smartphone o un tablet.
- L'app chiede l'autorizzazione Bluetooth (su Android anche Dispositivi nelle vicinanze o Posizione). Vedi [Bluetooth e autorizzazioni](/docs/Help/BluetoothPermissions).

## Memoria {#memory}

Sui dispositivi con meno di 4 GB di memoria, MOCPilot disegna i Blocchi logici in modo più semplice, così anche i programmi grandi restano fluidi. Succede automaticamente; i blocchi funzionano allo stesso modo.

## Editor web {#web-editor}

L'[editor web](/docs/Introducing/WebEditor) su mocpilot.com funziona nel browser:

- usa un browser desktop aggiornato; l'editor richiede WebAssembly;
- alla prima apertura vengono scaricati circa 20 MB per l'editor e circa 15 MB di temi, quindi una connessione veloce aiuta;
- i browser non possono collegarsi agli hub Bluetooth: per guidare un modello dal browser usa il [controllo remoto](/docs/Application/Profiles/RemoteControl), che richiede un browser con supporto WebRTC;
- se vedi «L'editor non è riuscito ad avviarsi in questo browser.», aggiorna il browser o provane un altro.

## Internet {#internet}

Gli hub, i tuoi profili e i temi scaricati funzionano offline. Accesso, sincronizzazione, catalogo, Assistente IA, controllo remoto e acquisti richiedono una connessione a internet. Vedi [Lavorare offline](/docs/Application/Account/Sync#working-offline).
