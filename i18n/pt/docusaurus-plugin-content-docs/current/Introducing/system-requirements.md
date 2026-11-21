---
id: SystemRequirements
title: Requisitos do sistema
description: "Sistemas operacionais, Bluetooth, memória e navegadores compatíveis com o MOCPilot."
---

# Requisitos do sistema {#system-requirements}

O MOCPilot funciona em celulares, tablets e computadores. Para dirigir um modelo, o dispositivo também precisa de Bluetooth e de um [hub compatível](/docs/Introducing/SupportedDevices).

## Sistemas operacionais {#operating-systems}

| Plataforma | Versão mínima | Onde baixar |
|---|---|---|
| iPhone e iPad | iOS / iPadOS 17 | App Store |
| Celulares e tablets Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| PC com Windows (64 bits, x64) | Windows 10 versão 1809 ou Windows 11 | Microsoft Store |

Os links das lojas estão em [mocpilot.com](https://mocpilot.com). O app escolhe sozinho o layout de celular, tablet ou desktop; veja [Celular, tablet e desktop](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Os hubs se conectam por **Bluetooth Low Energy** (Bluetooth 4.0 ou mais recente). Quase todo celular e tablet tem; no computador, use o adaptador embutido ou um adaptador Bluetooth USB.
- O hub **Robot Inventor** usa Bluetooth clássico. Ele funciona no Android, no Mac e no Windows, mas não no iPhone e no iPad.
- Os hubs **Mould King** recebem comandos como transmissões Bluetooth (advertising). No Windows, o Mould King 6.0 precisa de um adaptador e de um driver capazes de transmitir, e o Mould King 4.0 não funciona; use um celular ou tablet para ele.
- O app pede permissão de Bluetooth (no Android, também Dispositivos próximos ou Localização). Veja [Bluetooth e permissões](/docs/Help/BluetoothPermissions).

## Memória {#memory}

Em dispositivos com menos de 4 GB de memória, o MOCPilot desenha os Blocos lógicos de um jeito mais simples, para que programas grandes continuem fluidos. Isso acontece automaticamente; os blocos funcionam do mesmo jeito.

## Editor web {#web-editor}

O [editor web](/docs/Introducing/WebEditor) em mocpilot.com roda no navegador:

- use um navegador de desktop atualizado; o editor precisa de WebAssembly;
- na primeira abertura, são baixados cerca de 20 MB do editor e cerca de 15 MB de temas, então uma conexão rápida ajuda;
- os navegadores não conseguem se conectar a hubs Bluetooth: para dirigir um modelo pelo navegador, use o [controle remoto](/docs/Application/Profiles/RemoteControl), que exige um navegador compatível com WebRTC;
- se aparecer “O editor não pôde ser iniciado neste navegador.”, atualize o navegador ou experimente outro.

## Internet {#internet}

Os hubs, seus perfis e os temas baixados funcionam off-line. Entrar na conta, sincronização, catálogo, construtor com IA, controle remoto e compras precisam de conexão com a internet. Veja [Trabalhar off-line](/docs/Application/Account/Sync#working-offline).
