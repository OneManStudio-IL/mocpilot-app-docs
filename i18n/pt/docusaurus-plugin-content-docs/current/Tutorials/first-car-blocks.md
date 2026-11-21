---
id: FirstCarBlocks
title: O mesmo carro em Blocos lógicos
description: "Passo a passo: programe um carro LEGO de controle remoto com tração, direção por servo, luzes e setas em Blocos lógicos."
---

import Screenshot from '@site/src/components/Screenshot';

# O mesmo carro em Blocos lógicos {#the-same-car-in-logic-blocks}

Este tutorial monta de novo o carro de [Seu primeiro carro RC com Ligações rápidas](/docs/Tutorials/FirstCarLinks), desta vez em [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). O resultado é o mesmo, um joystick que acelera e esterça e um botão para as luzes, e no caminho você aprende o básico da programação em blocos: eventos, laços, variáveis e o Monitor. No final, você pode adicionar setas com som de tique-taque.

**Do que você precisa**: o mesmo modelo do tutorial de Ligações rápidas:

- um LEGO® Technic™ Hub (88012);
- um motor de tração na **porta A**;
- um motor de direção com encoder na **porta B** (um motor Technic L ou XL ou qualquer motor angular Technic);
- luzes LEGO® na **porta C** (opcional).

Com um City Hub, use as portas **A** e **B** e deixe as luzes de fora.

**O resultado**:

```text
quando o programa começa
definir (luzes) para 0
definir posição relativa 0  (Hub 1, porta B)
repetir sempre
    definir (acelerador) para (joystick JOY1 eixo Y)
    iniciar motor em (acelerador) % velocidade  (Hub 1, porta A)
    ir para posição relativa (joystick JOY1 eixo X × 0.9) em 100 % velocidade  (Hub 1, porta B)

quando o botão BTN1 está pressionado
    se (luzes) = 0 então
        ligar em 100 % brilho  (Hub 1, porta C)
        definir (luzes) para 1
    outro
        desligar  (Hub 1, porta C)
        definir (luzes) para 0
```

Como ler as listagens: cada linha é um bloco, do jeito que o app o mostra. Os valores entre parênteses são o hub e a porta que você escolhe no bloco, ou um bloco ou variável que você encaixa em um espaço. As linhas recuadas ficam dentro do bloco em C acima delas.

## 1. Crie o perfil {#create-the-profile}

1. Em **Meus perfis**, comece um perfil novo (**+** → **Novo perfil** no celular, **Novo perfil** no tablet, **Arquivo → Novo perfil** no computador).
2. Escolha o bloco **Blocos lógicos**.
3. Digite um **Nome** e defina **Nível dos blocos** como **Avançado**. O laço **repetir sempre** e o **se … então … outro** usados aqui são blocos do nível Avançado; a paleta **Iniciante** não os mostra.
4. Toque em **Criar**.

Você pode mudar o nível depois em **Configurações do editor** → **Selecionar nível dos blocos**. Veja [Criar um perfil](/docs/Application/Profiles/CreateProfile) e [Níveis de blocos](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Adicione o hub e os controles {#hub-and-dashboard}

Faça exatamente como no tutorial de Ligações rápidas:

1. [Adicione e conecte o hub](/docs/Tutorials/FirstCarLinks#add-the-hub) em **Meus hubs**.
2. [Coloque os controles no painel](/docs/Tutorials/FirstCarLinks#dashboard): um **Joystick** (**JOY1**) à esquerda e um **Botão** (**BTN1**) à direita.

<Screenshot name="tutorial-car-dashboard" alt="Painel com o joystick JOY1 à esquerda e o botão BTN1 à direita" width={900} />

Quando o hub está no perfil, a paleta mostra as categorias **Motores** e **Luz**; os controles aparecem em **Controladores na tela**.

## 3. Eventos ou um laço? {#events-or-loop}

Um script começa com um bloco de **evento** e executa os blocos abaixo dele de cima para baixo. Vários scripts rodam ao mesmo tempo.

- Um bloco de evento como [quando o botão … está pressionado](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) executa seu script uma vez, sempre que o evento acontece. Eventos servem para coisas que acontecem em um momento: apertar um botão, mudar um interruptor, ligar uma seta.
- Um joystick muda o tempo todo. O jeito mais simples de acompanhá-lo é um script que começa com [quando o programa começa](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) e fica lendo o manche em um laço [repetir sempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Este carro usa os dois: um laço para tração e direção e um evento para as luzes.

## 4. Tração {#drive}

1. De **Eventos**, arraste [quando o programa começa](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) para a área do programa.
2. De **Controle**, encaixe [repetir sempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) abaixo dele.
3. De **Motores**, solte [iniciar motor em … % velocidade](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) dentro de **repetir sempre**. Escolha o hub e a porta **A**.
4. De **Controladores na tela**, arraste o bloco de valor do [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) para o espaço da velocidade. Escolha **JOY1** e **eixo Y**.

```text
quando o programa começa
repetir sempre
    iniciar motor em (joystick JOY1 eixo Y) % velocidade  (Hub 1, porta A)
```

Coloque o carro sobre um suporte, pressione **Executar** e empurre o joystick: o joystick dá de −100 a 100, exatamente a velocidade do motor em porcentagem. Pressione **Parar** quando terminar.

**Anda para trás quando você empurra para cima?** Use [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) de **Operador**: `(joystick JOY1 eixo Y × -1)`. **Rápido demais?** Multiplique por 0.5.

## 5. Direção {#steer}

O motor de direção segue o eixo X do joystick com [ir para posição relativa … em … % velocidade](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). As posições relativas são contadas a partir do ponto que você define com [definir posição relativa …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Encaixe **definir posição relativa** logo abaixo de **quando o programa começa**, acima de **repetir sempre**. Deixe o valor em 0 e escolha a porta **B**.
2. Dentro de **repetir sempre**, abaixo do bloco do motor, adicione **ir para posição relativa … em … % velocidade** com a porta **B**.
3. No espaço da posição, solte **… × …**, com o **eixo X** do joystick à esquerda e `0.9` à direita. Isso transforma −100…100 em −90…90 graus.
4. Defina a velocidade como 100.

```text
quando o programa começa
definir posição relativa 0  (Hub 1, porta B)
repetir sempre
    iniciar motor em (joystick JOY1 eixo Y) % velocidade  (Hub 1, porta A)
    ir para posição relativa (joystick JOY1 eixo X × 0.9) em 100 % velocidade  (Hub 1, porta B)
```

Antes de cada **Executar**, alinhe as rodas com a mão: essa posição vira o centro. Se as rodas virarem demais, use um número menor que 0.9; se esterçarem para o lado errado, use −0.9.

### Opção: calibrar a direção automaticamente {#calibrate-rack}

Se a direção tem batentes, [calibrar cremalheira … centro … graus …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) encontra o centro e o curso para você. Primeiro crie duas variáveis (**Variáveis** → **Criar uma variável**), por exemplo `meio` e `curso`, e solte-as nos espaços do bloco. O bloco leva a cremalheira até os dois extremos, para no meio e grava os resultados nas variáveis; o script continua quando a calibração termina.

```text
quando o programa começa
calibrar cremalheira (meio) centro (curso) graus  (Hub 1, porta B)
definir posição relativa 0  (Hub 1, porta B)
repetir sempre
    iniciar motor em (joystick JOY1 eixo Y) % velocidade  (Hub 1, porta A)
    ir para posição relativa ((curso × joystick JOY1 eixo X) ÷ 100) em 100 % velocidade  (Hub 1, porta B)
```

**definir posição relativa 0** logo depois da calibração transforma o meio em zero, então com o manche no máximo as rodas viram exatamente o curso medido.

## 6. Luzes em um botão {#lights}

Em Ligações rápidas existe um bloco Alternar pronto. Em Blocos lógicos, uma [variável](/docs/Application/BlockBuilder/Blocks/Variables) lembra se as luzes estão acesas.

1. Em **Variáveis**, toque em **Criar uma variável** e dê a ela o nome `luzes`.
2. Adicione [definir … para …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) no início do script principal: `definir (luzes) para 0`.
3. De **Controladores na tela**, arraste [quando o botão … está pressionado](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) para um espaço vazio e escolha **BTN1**.
4. Abaixo dele, adicione [se … então … outro](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) com a condição [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(luzes) = 0`.
5. No primeiro ramo, adicione [ligar em … % brilho](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (porta **C**) e `definir (luzes) para 1`. No segundo ramo, adicione [desligar](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (porta **C**) e `definir (luzes) para 0`.

```text
quando o botão BTN1 está pressionado
    se (luzes) = 0 então
        ligar em 100 % brilho  (Hub 1, porta C)
        definir (luzes) para 1
    outro
        desligar  (Hub 1, porta C)
        definir (luzes) para 0
```

Com um **Interruptor** no lugar do botão é ainda mais simples: *quando interruptor … ligado / desligado*; veja os [exemplos](/docs/Application/BlockBuilder/Examples).

## 7. Execute e observe o Monitor {#monitor}

Quando algo não funciona como esperado, olhe os valores. O [Monitor](/docs/Application/BlockBuilder/Editor#monitor) na barra superior mostra todas as variáveis enquanto o programa roda.

1. Crie uma variável `acelerador`.
2. No laço, guarde nela o valor do joystick e use a variável como velocidade do motor:

```text
repetir sempre
    definir (acelerador) para (joystick JOY1 eixo Y)
    iniciar motor em (acelerador) % velocidade  (Hub 1, porta A)
    ir para posição relativa (joystick JOY1 eixo X × 0.9) em 100 % velocidade  (Hub 1, porta B)
```

3. Pressione **Executar** e abra o **Monitor**. Mova o joystick e pressione BTN1: `acelerador` acompanha o manche, e `luzes` alterna entre 0 e 1.

<Screenshot name="blocks-monitor" alt="Monitor mostrando variáveis e uma lista enquanto o programa roda" width={900} />

- `acelerador` muda, mas o motor não gira: verifique a conexão do hub em **Meus hubs** e a porta no bloco.
- `acelerador` fica em 0: verifique se o bloco lê **JOY1** e o eixo certo.

Em Blocos lógicos, o programa continua editável enquanto roda, então você pode mudar um número e ver o efeito na hora. Este é o programa completo:

<Screenshot name="tutorial-car-blocks-program" alt="O programa pronto do carro: o script principal com o laço repetir sempre e o script das luzes no BTN1" width={900} />

Mais ajuda: [Solução de problemas](/docs/Help/Troubleshooting).

## 8. Opcional: setas com som {#turn-signals}

Adicione ao painel o [controle especial](/docs/Application/Dashboard/SpecialControls#turn-signals) **Setas** (**STALK1**) e ligue uma luz na **porta D**. Empurre a alavanca para cima para a seta esquerda e para baixo para a direita.

```text
quando setas STALK1 seta esquerda liga
    som Seta tocar
    repetir enquanto não (setas STALK1 seta esquerda está ligado ?)
        ligar em 100 % brilho  (Hub 1, porta D)
        esperar 0.5 segundos
        desligar  (Hub 1, porta D)
        esperar 0.5 segundos
    parar som Seta
```

Os blocos: [quando setas …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) e [setas … está ligado ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) em **Controladores na tela**; [som … tocar](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) e [parar som …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) em **Sons**; [repetir enquanto …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) e [esperar … segundos](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) em **Controle**; [não …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) em **Operador**.

O som **Seta** se repete sozinho até você pará-lo. Ele toca no seu celular, tablet ou computador.

Duplique o script (toque e segure ou clique com o botão direito → **Duplicar**) e escolha **seta direita** nos dois blocos. Assim as duas setas piscam a mesma luz na porta D; para lâmpadas separadas à esquerda e à direita, você precisa de duas portas livres, por exemplo em um segundo hub.

## Ligações rápidas ou Blocos lógicos: qual escolher? {#which-to-choose}

| | Ligações rápidas | Blocos lógicos |
|---|---|---|
| Este carro | 3 linhas | 2 scripts, 2 variáveis |
| Arranque suave, zona morta, limite | blocos prontos | multiplicar e calcular por conta própria |
| Direção por servo | bloco Servo com calibração Auto | blocos de posição relativa ou calibrar cremalheira |
| Luzes em um botão | bloco Alternar | uma variável e *se … então … outro* |
| Sons, sequências, condições | não | sim |
| Valores ao vivo | em cada junção de uma linha | o Monitor e os monitores do painel |
| Edição durante a execução | não | sim |

Escolha **Ligações rápidas** quando cada controle simplesmente movimenta algo: carros, caminhões, trens, guindastes. Escolha **Blocos lógicos** quando você precisa de lógica: sons, padrões de pisca, sequências, reações a sensores, jogos. O tipo de programa não pode ser alterado, mas você pode criar um segundo perfil para o mesmo modelo. Mais em [Criar um perfil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Próximos passos {#next-steps}

- Mostre a bateria em um **Monitor** do painel e avise quando ela estiver fraca: [Exemplos](/docs/Application/BlockBuilder/Examples#battery-warning).
- Dirija com um gamepad: [Blocos de gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad) e o [exemplo com gamepad](/docs/Application/BlockBuilder/Examples#gamepad).
- Deixe o carro com sensação de real com pedais, câmbio e inércia: [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).
- Conheça o editor: [Trabalhar no editor](/docs/Application/BlockBuilder/Editor).
