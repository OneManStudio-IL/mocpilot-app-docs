---
id: FirstCarLinks
title: Seu primeiro carro RC com Ligações rápidas
description: "Passo a passo: monte um carro LEGO de controle remoto com tração, direção por servo e luzes em Ligações rápidas, sem código."
---

import Screenshot from '@site/src/components/Screenshot';

# Seu primeiro carro RC com Ligações rápidas {#your-first-rc-car-with-quick-links}

Neste tutorial, você monta um carro de controle remoto completo em [Ligações rápidas](/docs/Application/Links/LinksIntroducing): um joystick acelera e esterça, e um botão liga e desliga as luzes. Leva cerca de 15 minutos, e você não escreve nenhum código.

**Do que você precisa**

- um LEGO® Technic™ Hub (88012);
- um motor de tração na **porta A**;
- um motor de direção com sensor de posição (encoder) na **porta B**, por exemplo um motor Technic L ou XL ou qualquer motor angular Technic. A direção precisa ter batentes: as rodas só podem virar até certo ponto para a esquerda e para a direita;
- luzes LEGO® na **porta C** (opcional);
- o MOCPilot em um celular, tablet ou computador com Bluetooth.

:::note City Hub
Um City Hub (88009) tem só duas portas. Ligue o motor de tração na **A** e o motor de direção na **B** e deixe as luzes de fora, ou adicione um segundo hub para elas. Todo o resto funciona igual.
:::

**O resultado**: um perfil com três linhas:

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | JOY1, Eixo Y | Suave | Motor | Technic Hub, porta A |
| 2 | JOY1, Eixo X | | Servo (Auto) | Technic Hub, porta B |
| 3 | BTN1 | Alternar | Luz | Technic Hub, porta C |

## 1. Crie o perfil {#create-the-profile}

1. Vá para **Meus perfis** e comece um perfil novo: no celular, toque em **+** → **Novo perfil**; no tablet, toque em **Novo perfil** no cabeçalho; no computador, escolha **Arquivo → Novo perfil**.
2. Escolha o bloco **Ligações rápidas**.
3. Digite um **Nome**, por exemplo “Meu primeiro carro”. Imagem e hashtags são opcionais por enquanto.
4. Toque em **Criar**. O perfil abre no editor de Ligações rápidas com uma linha vazia.

O tipo de programa não pode ser alterado depois. Mais em [Criar um perfil](/docs/Application/Profiles/CreateProfile).

## 2. Adicione e conecte o hub {#add-the-hub}

1. No editor, toque em **Meus hubs** (**Hubs** na barra superior, no computador).
2. Toque em **Adicionar um novo hub** em um slot livre, escolha o Technic Hub na lista e toque em **Adicionar**.
3. Ligue o hub e pressione o botão dele. O MOCPilot o encontra e se conecta; o hub fica no slot.
4. Se aparecer a janela **Atualização de firmware necessária**, toque em **Atualizar** e mantenha o hub ligado e por perto até a atualização terminar. Veja [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating).

Dica: abra o hub conectado para ver o [monitor do hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Ele mostra qual dispositivo está ligado em cada porta, para você conferir os motores antes de montar as linhas.

Mais em [Adicionar e conectar um hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Coloque os controles no painel {#dashboard}

1. Abra o **Painel** e toque em **+** (**Adicionar controlador**; no computador, **+ Controlador**).
2. No grupo **Joysticks**, escolha **Joystick** e toque em **Adicionar ao painel**. Ele recebe o nome **JOY1**. Deixe **Tipo de eixos** em **Ambos os eixos (X, Y)**: para cima e para baixo acelera, para a esquerda e para a direita esterça.
3. Toque em **+** de novo. Em **Botões e interruptores**, escolha **Botão** e toque em **Adicionar ao painel**. Ele recebe o nome **BTN1**.
4. Arraste o joystick para o lado esquerdo e o botão para o lado direito, onde ficarão seus polegares. Toque em um controle para mudar o tamanho (**S**, **M** ou **L**) ou o visual.

<Screenshot name="tutorial-car-dashboard" alt="Painel com o joystick JOY1 à esquerda e o botão BTN1 à direita" width={900} />

Prefere acelerar e esterçar com polegares diferentes? Adicione dois joysticks: **JOY1** com **Apenas vertical (Y)** e **JOY2** com **Apenas horizontal (X)**, e use o JOY2 na linha da direção.

Mais em [Adicionar e organizar controles](/docs/Application/Dashboard/ArrangingControls) e [Tipos de controle](/docs/Application/Dashboard/ControlTypes).

### Opção: volante e pedais {#wheel-and-pedals}

Se você tem os [controles especiais](/docs/Application/Dashboard/SpecialControls) **Volante** e **Pedais**, pode usá-los no lugar do joystick. No passo 4, monte a linha 1 com a entrada [Veículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) e **Saída** definida como **Velocidade** (ela acelera e desacelera como um carro de verdade, então você não precisa de Suave) e a linha 2 com a entrada **Volante** e o canal **Ângulo do volante**.

## 4. Monte as linhas {#rows}

Volte ao programa. A paleta na parte de baixo tem três abas: **Entradas**, **Processamento** e **Saídas**. Cada linha vai da esquerda para a direita: entrada → processamento → operação → hub. Como o editor funciona: [Introdução às Ligações rápidas](/docs/Application/Links/LinksIntroducing).

### Linha 1: tração {#row-drive}

1. Em **Entradas**, arraste **JOY1** com o canal **Eixo Y** para a linha vazia (“Nova linha: entrada”). Uma nova linha vazia aparece abaixo dela.
2. Em **Processamento**, arraste **Suave** para depois da entrada. Os valores padrão de 0,5 s em **Aceleração (até a velocidade máxima)** e **Desaceleração (até parar)** são um bom começo.
3. Em **Saídas**, arraste **Motor** para depois de Suave.
4. Arraste a saída **Technic Hub** para depois de Motor e toque no chip da porta **A**.

### Linha 2: direção {#row-steering}

1. Arraste **JOY1** com o canal **Eixo X** para a próxima linha vazia.
2. Arraste **Servo** de **Saídas**.
3. Toque no bloco Servo e defina **Calibração** como **Auto**.
4. Arraste a saída **Technic Hub** para depois de Servo e toque em **B**.

No modo **Auto**, toda vez que o programa começa, o motor de direção vai até os dois batentes; o meio vira o centro, e o curso vira o ângulo de direção. Para testar na hora, toque em **Calibrar agora** nas configurações do Servo com o hub conectado. Se a calibração falhar, verifique o hub, o motor e se a direção realmente tem batentes.

<Screenshot name="links-servo-settings" alt="Configurações de um bloco Servo" width={900} />

Sem batentes? Use **Manual**: alinhe as rodas com a mão, toque em **Definir como zero** e escolha o **Ângulo**. Veja [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Linha 3: luzes {#row-lights}

1. Arraste **BTN1** para a próxima linha vazia.
2. Arraste **Alternar** de **Processamento**. Ele transforma o botão de pressão em um interruptor: pressione uma vez para ligar e de novo para desligar.
3. Arraste **Luz** de **Saídas**.
4. Arraste a saída **Technic Hub** para depois de Luz e toque em **C**.

<Screenshot name="tutorial-car-links-rows" alt="As três linhas prontas do carro: tração, direção e luzes" width={900} />

Quando as três linhas estiverem prontas, o botão **Problemas** na barra superior (logo antes de **Executar**) mostra um visto verde. Um “!” vermelho indica quantos problemas faltam resolver; toque nele e depois em um problema para ir até a linha. Veja [Executar e corrigir problemas](/docs/Application/Links/Problems).

## 5. Execute e teste {#run}

1. Coloque o carro sobre um suporte ou segure-o com as rodas fora da mesa.
2. Pressione **Executar**. O motor de direção se calibra: vira para os dois lados e volta ao meio.
3. Mova o joystick para cima e para baixo: o carro anda para a frente e para trás, arrancando e parando suavemente. Mova-o para a esquerda e para a direita: as rodas esterçam.
4. Pressione **BTN1**: as luzes acendem. Pressione de novo: elas apagam.
5. Pressione **Parar** para voltar à edição.

Enquanto o programa roda, cada junção entre blocos mostra o valor que passa por ela, para você acompanhar o sinal do joystick até o hub.

<Screenshot name="links-live-values" alt="Um programa em Ligações rápidas em execução, com valores ao vivo nas junções" width={900} />

Mais em [Dirigir um modelo (Executar)](/docs/Application/Profiles/PlayMode).

## 6. Faça o ajuste fino {#tune}

Primeiro pressione **Parar**: as linhas não podem ser editadas enquanto o programa roda.

- **O carro anda para trás quando você empurra para cima?** Adicione **Inverter** à linha 1. O mesmo vale para a linha 2 se as rodas esterçarem para o lado errado.
- **O motor zumbe ou se arrasta com o joystick solto?** Adicione **Zona morta** à linha 1, antes de Suave. A **Zona** padrão de 10 % é um bom começo.
- **Rápido demais?** Adicione **Limite** à linha 1, por exemplo com **Máximo** de 50 %.
- **Lento para responder?** Toque em Suave e escolha um tempo menor, ou **Instantâneo**.

Uma boa ordem para uma linha de tração é *Zona morta → Limite → Suave*. Todas as configurações: [Blocos de processamento](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Opcional: dirija com um gamepad {#gamepad}

1. Emparelhe um gamepad estilo Xbox ou PlayStation com o seu dispositivo nas configurações de Bluetooth do sistema.
2. No editor, abra **Gamepad** e ative **Ativar blocos de gamepad**.
3. Em cada linha, arraste a entrada do painel de volta para a paleta para removê-la e arraste a entrada **Gamepad** para o lugar dela. Defina a **Entrada**: **Analógico esquerdo Y** na linha 1, **Analógico direito X** na linha 2 e **A** (**Xis** no PlayStation) na linha 3.

Cada porta só pode pertencer a uma linha, então uma linha controla a porta pelo painel ou pelo gamepad. Mais em [Gamepad](/docs/Application/Dashboard/Gamepad).

## Se algo não se mexer {#if-something-does-not-move}

1. O hub está conectado? Confira em **Meus hubs** e o ponto de conexão no bloco Hub.
2. Os motores estão ligados nas portas que você escolheu nas linhas?
3. O botão **Problemas** mostra um visto verde, e todas as linhas estão ativadas?
4. O programa está rodando?
5. Execute o programa e observe os valores ao vivo: se o valor muda na entrada, mas o motor não gira, verifique o hub e a porta.

Uma mensagem como “Porta B: este dispositivo não funciona como servo (é preciso um motor com encoder)” significa que o motor nessa porta não tem encoder. Mais mensagens e soluções: [Executar e corrigir problemas](/docs/Application/Links/Problems) e [Solução de problemas](/docs/Help/Troubleshooting).

## 8. Salve e compartilhe {#save-and-share}

Não há botão Salvar: o perfil guarda suas alterações. Quando você está conectado à sua conta, ele também é [sincronizado](/docs/Application/Account/Sync) com seus outros dispositivos.

- **Compartilhar como arquivo**: em **Meus perfis**, toque em **Compartilhar** no cartão do perfil (**Compartilhar…** no computador). Você recebe um arquivo `.dat` para mandar a um amigo. Veja [Gerenciar perfis](/docs/Application/Profiles/ManageProfiles).
- **Publicar no catálogo**: abra **Editar perfil** e toque em **Enviar para o catálogo**. Antes, adicione uma imagem, uma descrição e uma hashtag. Veja [Catálogo e publicação](/docs/Application/Profiles/Catalog).

## Próximos passos {#next-steps}

- Fique de olho na bateria: adicione ao painel um **Nível da bateria** ou um **Monitor** de texto e uma linha *Technic Hub (Bateria) → Indicador*. Veja [Indicadores e monitores](/docs/Application/Dashboard/Indicators).
- Monte o mesmo carro em Blocos lógicos: [O mesmo carro em Blocos lógicos](/docs/Tutorials/FirstCarBlocks).
- Mais receitas: um tanque, um guindaste e um trem em [Exemplos](/docs/Application/Links/Examples).
- Dê um novo visual ao painel com [temas](/docs/Application/Themes/ThemesOverview).
