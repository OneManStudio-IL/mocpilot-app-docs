---
id: AiBuilder
title: Construtor com IA
description: "Descreva seu modelo por escrito ou por voz, e o construtor com IA configura os hubs, o painel e o programa de um perfil em Blocos lógicos ou Ligações rápidas."
---

import Screenshot from '@site/src/components/Screenshot';

# Construtor com IA {#ai-builder}

Descreva seu modelo com suas próprias palavras, digitando ou falando, e o **Construtor com IA** configura o perfil para você: os hubs e as portas, os controles do painel e o programa. Ele funciona nos dois editores: em um perfil de [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing), monta blocos; em um perfil de [Ligações rápidas](/docs/Application/Links/LinksIntroducing), monta linhas. Depois, você continua conversando com ele para alterar o perfil ou edita por conta própria.

O construtor com IA faz parte do [MocPilot Pro](/docs/Application/Account/Pro) e funciona no app e no [editor web](/docs/Introducing/WebEditor). Ele precisa de conexão com a internet.

<Screenshot name="blocks-ai-builder" alt="Painel do construtor com IA ao lado do programa" width={900} />

## Abrir o construtor com IA {#open-the-ai-builder}

1. Abra um perfil para edição.
2. Pressione o botão **Construtor com IA** (o ícone de brilhos) na barra superior. No computador, você também pode pressionar ⇧⌘I / Ctrl+Shift+I.
3. Digite seu pedido em **O que a IA deve criar ou alterar?** e pressione **Enviar** (ou Enter; Shift+Enter começa uma nova linha).

Sem o MocPilot Pro, o botão mostra o que o construtor com IA faz, com **Assinar o MocPilot Pro** e **Agora não**.

Onde o painel abre:

- **Celular**: uma página em tela cheia sobre o editor.
- **Tablet**: um cartão flutuante; arraste-o pelo cabeçalho para o lado esquerdo ou direito.
- **Computador**: um cartão à direita. No app (não no navegador), você pode pressionar **Abrir em uma janela separada** no cabeçalho dele e posicionar a janela ao lado do editor.

Enquanto a IA trabalha, o painel mostra o que ela está fazendo (**Pensando no seu modelo…**, **Verificando o perfil…** e assim por diante). As alterações aparecem no editor assim que ela termina, junto com um breve resumo do que mudou. Quando o painel está vazio, ele sugere alguns pedidos de exemplo: toque em um para colocá-lo no campo de texto e envie como está ou altere antes.

A conversa fica guardada para cada perfil, então você pode fechar o painel e voltar a ela depois.

## Escreva um bom pedido {#ai-builder-tips}

:::tip Diga qual hub você usa, o que está ligado em cada porta e o que deve fazer
Um pedido de uma linha como “um carro com luzes” não basta: a IA precisa adivinhar o hub, as portas e o que cada motor faz, e o resultado provavelmente vai precisar de correções. Inclua:

- **O hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **O que está em cada porta**: um motor de tração, um motor de direção (servo), luzes, um sensor.
- **O que cada um deve fazer**: acelerar, esterçar com calibração, ligar e desligar, um limite de velocidade.
- **Como você quer controlar**: joysticks, controles deslizantes, botões, um gamepad.
:::

Explique como você explicaria a um amigo. Você pode escrever no seu idioma.

Se algo ainda não estiver certo, diga à IA o que mudar em vez de começar do zero.

## Exemplos de pedidos {#example-requests}

**Um carro**: “Um carro com Technic Hub: motor de tração na porta A, o motor de direção na porta C funciona como servo, as luzes na porta D. Joystick de direção à esquerda, acelerador à direita, um botão que liga as luzes.”

**Um guindaste**: “Um guindaste com Technic Hub: o motor de giro está na porta A, o motor da lança na porta B, o guincho do gancho na porta C. Um controle deslizante para o giro, botões para cima/para baixo para a lança, um joystick para o gancho, a velocidade da lança limitada a 50%.”

**Um trem**: “Um trem City com City Hub: o motor do trem está na porta A, as luzes na porta B. Um interruptor de passo para a velocidade, um velocímetro e um botão para as luzes.”

## Alterar um perfil existente {#change-an-existing-profile}

Abra o construtor com IA em um perfil que você já tem, mesmo um que você montou à mão, e diga o que mudar. A IA vê os hubs, o painel e o programa atuais e os edita:

- “Deixe a direção mais lenta.”
- “Adicione um botão de parada.”
- “Copie os controles para o meu gamepad.”
- “Limite a velocidade da lança a 50%.”

Você também pode fazer perguntas sobre o perfil, por exemplo “Em qual porta estão as luzes?”. A IA responde no painel e deixa o perfil como está.

## O que acontece com o seu perfil {#what-happens-to-your-profile}

- A IA altera diretamente o perfil aberto: hubs, painel e programa são atualizados de uma vez. Se o programa estiver rodando, ele para.
- A IA trabalha com o tipo de programa do perfil: em um perfil de Blocos lógicos, escreve blocos; em um perfil de Ligações rápidas, escreve linhas. Ela nunca transforma um no outro. Se um pedido exige algo que as linhas de Ligações rápidas não conseguem fazer, a IA avisa que é preciso um perfil de Blocos lógicos.
- As partes do perfil que a IA não precisa alterar ficam como estão.
- **Desfazer a última alteração da IA** (o botão de desfazer no cabeçalho do painel) devolve o perfil ao estado anterior à última alteração da IA. Pressione de novo para voltar mais, até 10 alterações. O histórico de desfazer é apagado quando você abre outro perfil.
- Você pode continuar editando o perfil por conta própria a qualquer momento.

## Entrada de voz {#voice-input}

Pressione **Ditar** (o botão do microfone) e diga seu pedido; o texto aparece no campo, e você pode corrigi-lo antes de enviar. Pressione o botão de novo para parar. Se houver vários idiomas disponíveis, o pequeno botão de idioma ao lado do microfone troca o idioma do ditado; o app lembra a sua escolha.

| Onde | Como |
|---|---|
| iPhone, iPad, Mac | **Ditar**; na primeira vez, permita o acesso ao microfone e o reconhecimento de fala |
| Android | **Ditar**; na primeira vez, permita o acesso ao microfone |
| Windows | pressione **Win+H** para ditar com a digitação por voz do Windows (o botão do microfone lembra você disso) |
| Editor web | **Ditar** no Chrome, Edge e Safari; permita o acesso ao microfone para o site. O Firefox não tem ditado |

Mensagens da entrada de voz:

| Mensagem | O que fazer |
|---|---|
| **Permita o acesso ao microfone para o MOCPilot nas configurações do sistema** | Ative o acesso ao microfone para o MOCPilot nas configurações do sistema |
| **Permita o reconhecimento de fala para o MOCPilot nas configurações do sistema** | Em um dispositivo Apple, ative o reconhecimento de fala para o MOCPilot nas configurações do sistema |
| **Permita o acesso ao microfone para este site no navegador** | Permita o microfone nas configurações de site do navegador |
| **Nada foi ouvido** | Pressione **Ditar** e fale de novo |
| **A entrada de voz requer conexão** | Conecte-se à internet ou digite o pedido |
| **O reconhecimento de fala não está disponível para este idioma no momento** | Troque o idioma do ditado ou digite o pedido |
| **Nenhum microfone encontrado** / **A entrada de voz não está disponível neste dispositivo** | Digite o pedido |

## Limites {#limits}

- Cerca de 30 pedidos por dia e um limite mensal. O cabeçalho do painel mostra quanto você já usou: **Hoje 5/30 · Mês 12%**.
- Durante o teste gratuito, o número de pedidos à IA é limitado; eles continuam quando a assinatura começa.
- Um pedido por vez: espere a resposta antes de enviar o próximo.
- O construtor com IA só cria e edita perfis. Ele não responde a perguntas sobre outros assuntos.

## Mensagens de erro {#error-messages}

| Mensagem | O que fazer |
|---|---|
| **O construtor de IA não está disponível** / **Não foi possível acessar o serviço de IA. Verifique sua conexão com a internet e tente novamente.** | Verifique sua conexão com a internet e abra o painel de novo |
| **Sem conexão com o serviço de IA. Verifique sua conexão com a internet e tente novamente.** | Verifique a conexão e envie o pedido de novo |
| **A conexão com o serviço de IA foi perdida…** | Quando você estiver on-line de novo, a resposta aparece no painel; ou envie o pedido de novo |
| **A IA não respondeu a tempo. Envie a solicitação novamente.** / **A solicitação se perdeu, envie-a novamente** | Envie o pedido de novo |
| **A IA não conseguiu criar um perfil funcional para este pedido. Tente dizer de outra forma.** | Reformule o pedido: diga qual é o hub, as portas e o que cada uma faz |
| **O perfil é grande demais para ser criado de uma vez. Peça menos coisas por vez.** | Divida o pedido em etapas menores |
| **A IA recusou este pedido.** | Reformule o pedido para que ele seja sobre o perfil |
| **Você atingiu o limite diário de solicitações à IA. Tente novamente amanhã.** | Espere até amanhã ou edite o perfil por conta própria |
| **Você atingiu o limite mensal da IA.** | O limite é renovado no mês seguinte |
| **Você usou todas as solicitações de IA do teste gratuito. Elas continuam quando a assinatura começar.** | Espere a assinatura começar |
| **O construtor com IA só cria e edita perfis. Muitas solicitações sobre outros assuntos: tente novamente em uma hora.** | Espere uma hora e pergunte só sobre o perfil |
| **Há pedidos demais para a IA agora. Tente novamente em um minuto.** | Tente de novo em um minuto |
| **A solicitação anterior ainda está em andamento.** | Espere a resposta |
| **O serviço de IA está temporariamente indisponível. Tente mais tarde.** / **Você tem o MocPilot Pro. O construtor com IA não está disponível agora, tente novamente mais tarde.** | Tente de novo mais tarde |
| **A resposta era para outro perfil** | Você abriu outro perfil enquanto a IA trabalhava, por isso a alteração não foi aplicada. Abra o primeiro perfil de novo e repita o pedido |
| **Abra um perfil para edição primeiro** | Abra o perfil no editor e depois envie o pedido |
| **Não foi possível atualizar o perfil no editor** / **Não foi possível desfazer a alteração** | Tente de novo; se continuar acontecendo, feche e reabra o perfil |
