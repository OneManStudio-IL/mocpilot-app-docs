---
id: TechnicMoveHubConfigurations
title: Configurações do Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configurações do Technic Move Hub {#technic-move-hub-configurations}

## Visão geral {#overview}

Ao contrário de outros hubs LEGO® Powered Up, o Technic Move Hub se comporta de forma diferente conforme a configuração carregada nele.

O MOCPilot pode mudar essa configuração para que o hub corresponda ao set oficial da LEGO que você quer controlar.

## Configurações suportadas {#supported-configurations}

O MOCPilot conhece estas configurações:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Opções de configuração do Technic Move Hub no bloco Definir configuração do hub" />

## Mudar a configuração em Meus hubs Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Para mudar a configuração na página **Meus hubs Bluetooth**:

1. Abra **Meus hubs Bluetooth**.
2. Encontre o Technic Move Hub.
3. Abra o menu do hub.
4. Selecione **Selecionar configuração**.
5. Escolha a configuração.
6. Confirme no diálogo.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Menu de contexto do Technic Move Hub com a ação Selecionar configuração" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Submenu de configurações do Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Diálogo de confirmação da reconfiguração do Technic Move Hub" />

:::warning Importante
Mudar a configuração grava um programa no hub, de forma parecida com uma atualização de firmware.

Mantenha o hub ligado durante todo o processo e deixe o seu celular, tablet ou computador ligado e perto do hub para que a conexão Bluetooth fique estável. Não feche o MOCPilot, não desative o Bluetooth e não desligue o hub enquanto a configuração estiver sendo alterada.

Uma alteração interrompida pode danificar o firmware do hub. Nesse caso, o hub pode precisar de [recuperação do firmware](/docs/Application/Hubs/RecoveryHubFirmware/) antes de voltar a ser usado.
:::

Enquanto a configuração muda, o hub ignora os comandos normais e o LED dele passa por várias cores. Quando a nova configuração está aplicada, o hub reinicia.

## Blocos de configuração {#configuration-blocks}

Os Blocos lógicos podem ler e mudar a configuração enquanto um programa é executado.

### Definir configuração do hub {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Bloco Definir configuração do hub" />

O bloco **Definir configuração do hub** carrega uma das configurações suportadas no hub selecionado.

- Seletor de hub: escolhe o hub a reconfigurar.
- Seletor de configuração: escolhe a configuração desejada.
- Configurações disponíveis para o Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** e **Batmobile™ Tumbler**.

Veja a [documentação do bloco Definir configuração do hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Configuração do hub {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Bloco repórter Configuração do hub" />

O bloco **Configuração do hub** informa a configuração atual do hub selecionado.

- Seletor de hub: escolhe o hub a ler.
- Formato de saída: **texto** retorna o nome da configuração.
- Formato de saída: **índice** retorna o índice da configuração, útil para comparações em condições.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opções de formato de saída do bloco Configuração do hub" />

Veja a [documentação do bloco Configuração do hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Pulso de potência {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Bloco de pulso de potência do Technic Move Hub" />

O bloco **Pulso de potência** envia um pulso de potência ao Technic Move Hub selecionado. Ele só funciona com a configuração **Batmobile™ Tumbler**.

O hub então aciona os motores com potência e velocidade máximas por pouco tempo, cerca de 1–2 segundos. Em Ligações rápidas, a mesma função é a operação [Pulso de potência](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Veja a [documentação do bloco Pulso de potência](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Mudar a configuração durante a execução do programa {#change-configuration-during-program-runtime}

Um programa também pode mudar a configuração enquanto é executado. Uma abordagem típica:

1. Leia a configuração atual do hub.
2. Compare-a com a configuração exigida pelo perfil.
3. Se a configuração for diferente, defina a configuração exigida.
4. Leia a configuração novamente depois da reconfiguração.
5. Continue só quando o hub informar a configuração esperada.
6. Desconecte ou pare o programa se a configuração exigida não tiver sido aplicada.

O perfil pronto para este hub mostra como fazer isso.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Exemplo de blocos com mudança de configuração do Technic Move Hub durante a execução" />
