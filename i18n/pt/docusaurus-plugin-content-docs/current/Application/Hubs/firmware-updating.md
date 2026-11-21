---
id: FirmwareUpdating
title: Atualização de firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Atualização de firmware {#firmware-updating}

O MOCPilot pode atualizar o firmware dos hubs LEGO® Powered Up suportados quando há uma versão compatível mais nova.

Alguns hubs precisam de atualização antes de funcionar corretamente com o MOCPilot: o firmware mais novo corrige erros do hub e adiciona recursos de que o app depende.

## Hubs suportados {#supported-hubs}

O MOCPilot pode atualizar estes hubs:

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

## Antes de começar {#before-you-start}

Verifique se o hub e o seu celular, tablet ou computador têm bateria suficiente.

Mantenha o hub ligado durante toda a atualização e deixe o seu dispositivo perto dele para que a conexão Bluetooth fique estável. Não feche o MOCPilot, não desative o Bluetooth e não desligue o hub enquanto o firmware estiver sendo enviado.

:::warning Importante
Uma atualização interrompida pode deixar o hub com o firmware incompleto. Nesse caso, o hub pode precisar de recuperação do firmware antes de voltar a ser usado.
:::

## Iniciar a atualização {#starting-the-update}

Quando você conecta um hub, o MOCPilot verifica a versão do firmware. Se for necessária uma versão mais nova, o app mostra o diálogo **Atualização de firmware necessária**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Diálogo de atualização de firmware necessária" />

Selecione **Atualizar** para iniciar a atualização do firmware imediatamente.

Para atualizar mais tarde, selecione **Cancelar**. Você pode iniciar a atualização pelo menu do hub a qualquer momento.

## Atualizar mais tarde pelo menu do hub {#updating-later-from-the-hub-menu}

Para iniciar a atualização você mesmo:

1. Abra **Meus hubs Bluetooth**.
2. Encontre o hub que precisa ser atualizado.
3. Abra o menu do hub.
4. Selecione **Atualizar firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Ação Atualizar firmware no menu de contexto do hub" />

## Durante a atualização do firmware {#during-the-firmware-update}

O MOCPilot envia o firmware ao hub e mostra o progresso.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Tela de progresso da atualização de firmware" />

Aguarde o fim do envio. O hub pode reiniciar ou desconectar por um momento enquanto o novo firmware é aplicado.

Em seguida, o MOCPilot procura o hub novamente. Mantenha o hub por perto e aguarde o app se reconectar.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware enviado e busca pelo hub" />

## Concluir a atualização {#finishing-the-update}

Quando a atualização termina, o MOCPilot mostra uma confirmação.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Diálogo de atualização de firmware concluída" />

Selecione **OK**. O hub se reconecta, e o cartão dele mostra a nova versão do firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Cartão do hub com a versão do firmware atualizada" />

Agora você pode continuar usando o hub com o MOCPilot.

## Se a atualização falhar {#if-the-update-fails}

Se a atualização falhar, o MOCPilot mostra uma mensagem de erro.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Diálogo de falha na atualização de firmware" />

Primeiro, desligue e ligue o hub e execute a atualização de novo:

1. Desligue o hub.
2. Ligue o hub novamente.
3. Mantenha o hub perto do seu dispositivo.
4. Conecte-se ao hub no MOCPilot.
5. Inicie a atualização do firmware novamente.

Se o hub ainda não responder normalmente, ele pode precisar de recuperação do firmware: veja [Recuperação do firmware do hub](/docs/Application/Hubs/RecoveryHubFirmware/).
