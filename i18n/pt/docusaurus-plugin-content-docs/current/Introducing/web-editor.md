---
id: WebEditor
title: Editor web
description: "Edite seus perfis do MOCPilot no navegador em mocpilot.com e dirija o modelo pelo app em outro dispositivo."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor web em mocpilot.com {#web-editor-on-mocpilotcom}

O editor web é o MOCPilot rodando no seu navegador. É o mesmo app, com os mesmos editores, painel e temas, então tudo nesta documentação vale para ele.

Os navegadores não conseguem se comunicar com hubs Bluetooth, por isso o editor web serve para **editar**. Para testar um perfil, execute-o no navegador sem hubs; para dirigir o modelo, deixe o app MOCPilot em um celular, tablet ou computador se conectar aos hubs (veja [Controle remoto](/docs/Application/Profiles/RemoteControl)).

## Experimente sem conta {#try-it-without-an-account}

Na página inicial de [mocpilot.com](https://mocpilot.com), cada editor (Blocos lógicos e Ligações rápidas) tem um botão **Experimentar demo** que abre um perfil de demonstração. A demo não exige conta nem hubs. Na demo, você pode experimentar todos os temas e controles especiais; nada é salvo.

## Edite seus próprios perfis {#edit-your-own-profiles}

1. Entre em [mocpilot.com](https://mocpilot.com) com sua conta MOCPilot.
2. Abra seus perfis e clique em **Editar** em um deles.
3. Altere os hubs, o painel ou o programa, como no app.
4. Feche o perfil (o botão Início). O editor salva o perfil e o envia, e a alteração chega ao app nos seus dispositivos pela [sincronização](/docs/Application/Account/Sync).

Observações:

- Você só pode editar perfis da conta com que entrou. Caso contrário, verá “Este perfil não está na sua conta” e um botão **Voltar ao site**.
- Suas compras e o MocPilot Pro funcionam no navegador como no app.
- Em um navegador de desktop, o painel é uma janela flutuante que você pode arrastar e redimensionar.
- Os temas são baixados de novo a cada visita (cerca de 15 MB), então a primeira abertura pode demorar um pouco.
- Importar e exportar arquivos `.dat` não está disponível no navegador; use o app.

## Executar um perfil {#run-a-profile}

**Executar** no editor web executa o perfil no navegador: todos os blocos e linhas funcionam, exceto o Bluetooth, o que é ótimo para testar a lógica, os monitores e o painel. Quando há um dispositivo com os hubs emparelhado (MocPilot Pro, veja abaixo), **Executar** inicia o perfil nesse dispositivo.

## Controle remoto {#remote-control}

Com o [MocPilot Pro](/docs/Application/Account/Pro), o editor web pode ser o **controle remoto**: o app MOCPilot em um celular, tablet ou computador perto do modelo (o **dispositivo com os hubs**) se conecta aos hubs e executa o perfil, e a página do navegador o controla. Pressione **Controle remoto** na barra superior do perfil e depois **Mostrar o código**; no dispositivo com os hubs, toque em **Conectar um controle remoto** na página **Meus perfis** e escaneie o código. Veja [Controle remoto](/docs/Application/Profiles/RemoteControl).
