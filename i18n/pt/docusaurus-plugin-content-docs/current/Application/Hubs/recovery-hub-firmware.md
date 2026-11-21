---
id: RecoveryHubFirmware
title: Recuperação do firmware do hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Recuperação do firmware do hub {#hub-firmware-recovery}

A recuperação do firmware traz de volta um hub que não consegue iniciar normalmente depois de uma atualização de firmware interrompida ou com falha.

O MOCPilot envia ao hub um firmware que funciona, para que ele possa operar e ser atualizado de novo. Use a recuperação só quando o hub não responder normalmente, quando o MOCPilot indicar que o hub está no modo de recuperação ou depois de uma atualização com falha.

:::warning Importante
Mantenha o hub ligado e o seu dispositivo perto dele durante toda a recuperação. Desativar o Bluetooth, fechar o MOCPilot, tirar as pilhas ou desligar o hub durante o envio pode fazer a recuperação falhar.
:::

## Quando a recuperação é necessária {#when-recovery-is-required}

Talvez você precise da recuperação se:

- Uma atualização de firmware não terminou com sucesso.
- O hub não se conecta mais como um hub normal.
- O hub aparece como **LEGO Bootloader** no MOCPilot.
- O MOCPilot detecta que o hub está conectado no modo de recuperação do firmware.

Antes de começar, verifique se o hub tem bateria suficiente, se o seu celular, tablet ou computador está carregado e se o Bluetooth está ativado.

## Hubs suportados {#supported-hubs}

A recuperação funciona com os mesmos hubs da atualização de firmware:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Colocar um Technic Hub, Boost Hub ou City Hub no modo de recuperação {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Esses hubs se conectam pelo bootloader:

1. Desligue o hub.
2. Pressione e segure o botão verde.
3. Continue segurando o botão até o LED do hub começar a piscar em roxo.
4. Não solte o botão enquanto o LED estiver piscando em roxo.
5. Ainda segurando o botão, abra **Meus hubs Bluetooth** no MOCPilot e conecte-se ao hub.
6. Depois que o hub se conectar no modo bootloader, você pode soltar o botão.

No modo de recuperação, o hub pode aparecer como **LEGO Bootloader** em vez do nome normal.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader na lista de hubs com a ação de recuperar o firmware" />

## Colocar um Technic Move Hub no modo de recuperação {#put-a-technic-move-hub-into-recovery-mode}

O Technic Move Hub é recuperado de outra forma: ele não se conecta como **LEGO Bootloader**. Em vez disso, a sequência de botões abaixo carrega o firmware de fábrica **1.2.3**, que não é feito para o uso diário.

Para restaurar o firmware:

1. Desligue o hub.
2. Pressione e segure o botão verde.
3. Continue segurando o botão verde por cerca de um minuto.
4. Solte o botão.
5. Aguarde até o LED do hub começar a piscar em branco.
6. Abra **Meus hubs Bluetooth** no MOCPilot e conecte-se ao hub.

Quando o hub se conecta, o MOCPilot detecta o firmware de fábrica e oferece a atualização para a versão mais recente. Inicie a atualização e aguarde até que ela termine.

## Iniciar a recuperação pelo diálogo {#start-recovery-from-the-dialog}

Quando o MOCPilot detecta um hub conectado no modo de recuperação, ele mostra um diálogo de recuperação.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Diálogo de modo de recuperação do hub detectado" />

Selecione **Recuperar** para começar a enviar o firmware ao hub.

Se você ainda não estiver pronto, selecione **Cancelar**. Você pode iniciar a recuperação mais tarde pelo menu do hub.

## Iniciar a recuperação pelo menu do hub {#start-recovery-from-the-hub-menu}

Para iniciar a recuperação você mesmo:

1. Abra **Meus hubs Bluetooth**.
2. Encontre o hub exibido como **LEGO Bootloader**.
3. Abra o menu do hub.
4. Selecione **Recuperar firmware do hub**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Ação Recuperar firmware do hub no menu de contexto do hub" />

## Durante a recuperação do firmware {#during-firmware-recovery}

O MOCPilot envia o firmware ao hub e mostra o progresso.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Tela de progresso da recuperação do firmware" />

Aguarde até o fim. Não afaste o hub do seu dispositivo, não feche o app, não desative o Bluetooth e não corte a alimentação do hub.

O hub pode reiniciar ou se reconectar várias vezes. Isso é normal: mantenha o MOCPilot aberto e aguarde.

## Concluir a recuperação {#finish-recovery}

Quando a recuperação termina, o MOCPilot mostra uma confirmação.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Diálogo de recuperação do firmware concluída" />

Selecione **OK**. O hub deve reiniciar e se reconectar como um hub normal, e não mais como **LEGO Bootloader**.

Depois, confira o hub em **Meus hubs Bluetooth**. Se o MOCPilot ainda pedir uma atualização de firmware, faça uma [atualização de firmware](/docs/Application/Hubs/FirmwareUpdating/) normal.

## Se a recuperação falhar {#if-recovery-fails}

Se a recuperação falhar:

1. Mantenha o hub perto do seu dispositivo.
2. Desligue e ligue o hub.
3. Coloque o hub no modo de recuperação novamente.
4. Conecte-se ao **LEGO Bootloader** no MOCPilot.
5. Inicie **Recuperar firmware do hub** novamente.

Se o erro aparecer de novo, repita todo o procedimento. Se várias tentativas falharem, troque ou recarregue as pilhas e tente outra vez.
