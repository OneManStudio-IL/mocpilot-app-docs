---
id: RemoteControl
title: Controle remoto
description: "Execute um perfil no celular, tablet ou computador perto do modelo e controle-o a partir de outro dispositivo ou do editor web."
---

import Screenshot from '@site/src/components/Screenshot';

# Controle remoto {#remote-control}

O controle remoto permite dirigir um modelo conectado a outro dispositivo. Um dispositivo fica perto do modelo e se comunica com os hubs por Bluetooth; você segura o outro e usa o painel dele. É também assim que você dirige um modelo pelo [editor web](/docs/Introducing/WebEditor), já que os navegadores não conseguem se conectar a hubs.

## Os dois dispositivos {#the-two-devices}

- O **dispositivo com os hubs** é o celular, tablet ou computador perto do modelo. O app MOCPilot nele se conecta aos hubs e executa o perfil. Ele não precisa de conta.
- O **controle remoto** é de onde você controla: o app MOCPilot em outro dispositivo ou o editor web em [mocpilot.com](https://mocpilot.com). O perfil é aberto no controle remoto, que o envia ao dispositivo com os hubs.

## Do que você precisa {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) na conta conectada no **controle remoto**. O dispositivo com os hubs não precisa de conta nem de Pro.
- O app MOCPilot no dispositivo com os hubs.
- Conexão com a internet nos dois dispositivos.

## Conectar um dispositivo com os hubs {#connect-a-hub-device}

1. No controle remoto, abra o perfil e pressione **Controle remoto** (o ícone de controle remoto: uma casa com arcos de sinal) na barra superior do perfil, ao lado de **Executar**. No editor web, pressione **Mostrar o código** no painel que se abre.

   O controle remoto mostra um **código de conexão**: um código QR e 6 dígitos.
2. No dispositivo com os hubs, abra o MOCPilot e toque em **Conectar um controle remoto** na página **Meus perfis**. No Mac, você também pode escolher **Arquivo → Conectar um controle remoto…**.
3. Insira o código:
   - **no celular ou tablet**, aponte a câmera para o código QR, ou toque em **Digitar código** e digite os 6 dígitos;
   - **no computador**, digite os 6 dígitos e pressione **Conectar**.
4. Os dispositivos se conectam. O controle remoto envia o perfil ao dispositivo com os hubs e o inicia lá, e o dispositivo com os hubs mostra a página **Controle remoto** em tela cheia.

<Screenshot name="remote-control-code" alt="Painel Controle remoto em um perfil aberto, mostrando o código QR e o código de 6 dígitos" width={900} />

Sobre o código de conexão:

- Ele funciona uma vez e vale por 5 minutos. Enquanto o controle remoto continuar mostrando o código, um novo o substitui quando ele expira.
- Escaneie-o no app MOCPilot, não com o app de câmera do celular.
- Se você fechar o painel no controle remoto antes de o dispositivo com os hubs se conectar, nada é configurado; pressione **Controle remoto** de novo para obter um novo código.

<Screenshot name="remote-connect-code-entry" alt="Janela Conectar um controle remoto em um computador, com o campo para os 6 dígitos" width={900} />

## Quando os dispositivos estão conectados {#when-the-devices-are-connected}

**No controle remoto:**

- O botão **Controle remoto** fica verde (no celular ou tablet, um anel verde), e o painel dele mostra o nome do dispositivo com os hubs e um botão **Desconectar**.
- **Meus hubs** mostra os hubs do dispositivo com os hubs. Conecte os hubs a partir dali, como de costume: o dispositivo com os hubs os procura, então pressione o botão do hub quando for pedido.
- O painel controla o modelo.

**No dispositivo com os hubs**, a página **Controle remoto** em tela cheia mostra:

- o estado, por exemplo **Executando «Meu carro»**;
- **Hubs conectados: N** e, durante a busca, **À procura de um hub: prima o botão do hub.**;
- um lembrete: **Mantenha esta aplicação aberta. É o dispositivo com os hubs: liga os hubs e executa o perfil; o controle remoto apenas o controla.**;
- um botão **Parar**.

A tela do dispositivo com os hubs fica ligada enquanto ele está conectado. O perfil não é salvo no dispositivo com os hubs e não aparece na lista de perfis dele.

<Screenshot name="remote-hub-device" alt="Página Controle remoto em tela cheia no dispositivo com os hubs, com o estado da conexão, o número de hubs conectados e o botão Parar" width={900} />

## Executar e Parar {#run-and-stop}

- Pressione **Parar** no controle remoto para parar o perfil no dispositivo com os hubs. O dispositivo com os hubs sempre para todos os motores, mesmo que **Parar portas do hub quando o programa parar** esteja desativado no perfil.
- Pressione **Executar** no controle remoto para iniciá-lo de novo no dispositivo com os hubs.
- No editor web, o dispositivo com os hubs continua emparelhado para todos os perfis que você abrir na mesma aba do navegador: **Executar** inicia o perfil no dispositivo com os hubs. Quando não há dispositivo com os hubs emparelhado, **Executar** executa o perfil no navegador, sem hubs.

## Se a conexão cair {#if-the-connection-drops}

:::caution Segurança
Se o dispositivo com os hubs ficar 4 segundos sem notícias do controle remoto, ele para o perfil e todos os motores.
:::

Então:

- o dispositivo com os hubs mostra **Conexão com o controle remoto perdida. O perfil foi parado. Aguardando o controle remoto…** e aguarda;
- o app no controle remoto mostra **A ligação perdeu-se. A tentar novamente…** com **Tentar novamente** e **Desconectar**;
- o editor web mostra **O dispositivo com os hubs foi desconectado**: “*dispositivo* deixou de responder. O perfil nele foi parado e os seus motores desligados.” Ele continua tentando reconectar; você também pode pressionar **Reconectar**, **Executar no navegador** ou **Parar**.

Quando os dispositivos se conectarem de novo, confira o estado no controle remoto e pressione **Executar** se o perfil não estiver rodando.

## Desconectar {#disconnect}

- **No controle remoto**: pressione **Controle remoto** e escolha **Desconectar**.
- **No dispositivo com os hubs**: pressione **Parar** na página **Controle remoto**.

De qualquer forma, o perfil e os motores param, e o dispositivo com os hubs fecha o perfil.

## Solução de problemas {#troubleshooting}

| Mensagem | Onde | O que fazer |
|---|---|---|
| **O controlo remoto faz parte do MocPilot Pro** | controle remoto | Assine o [MocPilot Pro](/docs/Application/Account/Pro) na conta do controle remoto. Não é possível assinar no navegador: faça isso no app, e o Pro também funciona no editor web |
| **Sem conexão com o servidor** | qualquer um | Verifique a conexão com a internet e tente de novo |
| **Não foi possível obter um código do servidor** | controle remoto | Pressione **Mostrar o código** para tentar de novo |
| **Código errado ou expirado. Verifique os 6 dígitos mostrados no comando.** | dispositivo com os hubs | Digite os 6 dígitos que o controle remoto mostra agora |
| **O código expirou. Mostre um novo código no comando e leia-o novamente.** | dispositivo com os hubs | Pressione **Controle remoto** no controle remoto e escaneie o novo código |
| **Este não é um código do MOCPilot. Escaneie o código mostrado pelo controle remoto.** | dispositivo com os hubs | Escaneie o código QR do painel **Controle remoto** do controle remoto |
| **Demasiados códigos errados. Tente novamente dentro de alguns minutos.** | dispositivo com os hubs | Espere alguns minutos e insira o código atual |
| **Permita que o MOCPilot use a câmera nas configurações do sistema para escanear o código.** | dispositivo com os hubs | Permita o acesso à câmera nas configurações do sistema, ou toque em **Digitar código** e digite os 6 dígitos |
| **O controle remoto não responde. Verifique se o perfil está aberto nele e se está online.** | dispositivo com os hubs | Mantenha o perfil aberto no controle remoto e verifique a conexão com a internet dele |
| **Esta versão do app não pode se conectar a um controle remoto** | qualquer um | Atualize o MOCPilot |
| **Este navegador não consegue abrir uma ligação direta (WebRTC)** | editor web | Use outro navegador, por exemplo Chrome, Edge ou Safari |
| **O perfil é demasiado grande** / **O perfil não chegou completo** | qualquer um | Verifique a conexão e pressione **Executar** de novo |
| **O outro dispositivo não conseguiu guardar o perfil** / **O outro dispositivo não conseguiu abrir o perfil** | controle remoto | Pressione **Executar** de novo; se continuar acontecendo, desconecte e conecte o dispositivo com os hubs de novo |
| **A ligação a *dispositivo* perdeu-se** / **Ligação ao comando perdida. A aguardar…** | qualquer um | Veja [Se a conexão cair](#if-the-connection-drops) |
