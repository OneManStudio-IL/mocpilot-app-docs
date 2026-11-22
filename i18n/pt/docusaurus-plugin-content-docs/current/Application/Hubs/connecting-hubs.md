---
id: ConnectingHubs
title: Adicionar e conectar um hub
description: "Adicione um hub a um slot do perfil, conecte-o, renomeie-o e acompanhe os sensores no monitor do hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Adicionar e conectar um hub {#add-and-connect-a-hub}

Você adiciona um hub a um perfil uma única vez. Depois disso, o MOCPilot se conecta a ele sempre que você abre o perfil.

## Adicionar um hub {#add-a-hub}

1. Abra o perfil e toque em **Meus hubs** (no computador, **Hubs** na barra superior ou ⇧⌘H / Ctrl+Shift+H). A página **Meus hubs Bluetooth** mostra os slots.
2. Toque em **Adicionar um novo hub** em um slot livre.
3. Escolha o seu hub na lista. O filtro no topo mostra **Tudo**, **LEGO**, **SBrick**, **BuWizz** ou **Mould King**. Toque em **Adicionar**.
4. Siga as instruções na tela: **Pressione o botão no hub** e **Aguarde até que a busca encontre o hub**. Toque em **Iniciar varredura** para buscar novamente.

<Screenshot name="add-hub" alt="Escolhendo um hub para adicionar" width={900} />

Quando o hub é encontrado, ele se conecta e fica no slot.

<Screenshot name="my-hubs" alt="Meus hubs Bluetooth com hubs conectados e slots livres" width={900} />

## O menu do slot {#the-slot-menu}

O botão **Conectar** de um slot conecta o hub. O menu do slot tem:

- **Desconectar**;
- **Renomear hub**: grava um novo nome no próprio hub (em hubs conectados que suportam isso);
- **Atualizar firmware**: quando há um firmware mais novo disponível; veja [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating);
- **Recuperar firmware do hub**: quando o hub está conectado no modo de recuperação; veja [Recuperação do firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Selecionar configuração**: configurações do Technic Move; veja [Configurações do Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Selecionar canal: A / B / C**: o canal de controle do Mould King;
- **Excluir hub**: remove o hub do perfil.

O botão **Meus hubs** no editor (**Hubs** no computador) mostra quantos hubs estão conectados.

## Monitor do hub {#hub-monitor}

Abra um hub conectado para ver o **monitor do hub**:

- o hub: modelo, nome, firmware, bateria, carregamento, temperatura da placa, configuração, orientação, inclinação (arfagem, rolagem, guinada) e acelerômetro;
- cada porta: o dispositivo conectado e sua velocidade, posição, posição relativa, cor, luz refletida e ambiente, ou distância.

Use-o para conferir qual motor está em qual porta e para que lado ele gira antes de montar o programa.

<Screenshot name="hub-monitor" alt="Monitor do hub de um Technic Hub conectado" width={900} />

## Dicas de conexão {#connection-tips}

- Ligue o hub logo antes de conectar: muitos hubs se desligam sozinhos depois de alguns minutos sem conexão.
- Mantenha o celular perto do hub; paredes e metal reduzem o alcance.
- Um hub só pode estar conectado a um dispositivo por vez. Feche outros apps que o usam (apps da LEGO®, outros controles remotos).
- **O Bluetooth está desligado**: ative o Bluetooth e permita que o MOCPilot o use nas configurações do sistema.
- **Hub não encontrado**: pressione o botão do hub de novo, reinicie a varredura ou troque as pilhas.
- Os hubs **Mould King** não se "conectam" de verdade: o MOCPilot envia comandos a eles por anúncios Bluetooth (advertising). Se o hub não reagir, toque em **Conectar novamente** e verifique o canal.

Mais em [Solução de problemas](/docs/Help/Troubleshooting#hubs).
