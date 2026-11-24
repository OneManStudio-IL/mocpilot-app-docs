---
id: BlocksIntroducing
title: Conheça os Blocos lógicos
description: "Os Blocos lógicos são o editor de programação visual por blocos do MOCPilot: eventos, laços, condições, variáveis, sensores e sons."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Blocos lógicos {#logic-blocks}

**Blocos lógicos** é o editor de programação por blocos do MOCPilot. Você monta programas encaixando blocos, de forma muito parecida com o Scratch: eventos, laços, condições, variáveis, listas, blocos próprios, sons e blocos para motores, luzes, sensores, controles do painel e o gamepad.

Escolha os Blocos lógicos quando o seu modelo precisar de lógica: robôs, sequências automáticas, reações a sensores, verificações na inicialização, jogos. Se você só precisa ligar controles a motores, as [Ligações rápidas](/docs/Application/Links/LinksIntroducing) são mais rápidas.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programa em Blocos lógicos" style={{width: '100%', maxWidth: 720}} />

:::warning Não é o Scratch
Os Blocos lógicos têm o seu próprio conjunto de blocos e o seu próprio comportamento. Não é possível importar programas do MOCPilot no Scratch, nem projetos do Scratch no MOCPilot.
:::

## O editor em resumo {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor dos Blocos lógicos com a paleta e um programa" width={900} />

- A **paleta** lista as categorias de blocos: **Eventos**, **Controle**, **Sensores**, **Sons**, **Operador**, **Variáveis**, **Listas** e **Meus blocos**. Outras categorias aparecem quando o seu perfil precisa delas: **Motores** e **Luz** (quando algum hub os suporta), **Movimento** (com um [hub Robot Inventor](/docs/Application/Hubs/RobotInventorHub)), **Simulador** (quando o painel tem pedais, câmbio ou freio de mão), **Controladores na tela** e **Gamepad**.
- A **área do programa** é onde você arrasta os blocos e monta os scripts.
- A barra superior tem **Desfazer** e **Refazer**, **Painel**, **Meus hubs**, **Gamepad**, os painéis laterais **Construtor com IA**, [**Mochila**](/docs/Application/BlockBuilder/Backpack) e **Monitor**, **Mais** (com **Configurações do editor**) e **Executar/Parar**. No celular ou tablet, os painéis laterais e o Gamepad ficam em **Mais**.

Veja [Trabalhar no editor](/docs/Application/BlockBuilder/Editor) para mais detalhes.

## Como um programa é executado {#how-a-program-runs}

- Um script começa com um bloco de **evento** (um bloco chapéu): *quando o programa começa*, *quando o botão … pressionado*, *quando eu receber …* e assim por diante.
- Os blocos encaixados embaixo dele são executados de cima para baixo.
- Vários scripts são executados **ao mesmo tempo**. Use mensagens (*transmitir*) para coordená-los.
- Os **laços** (*repetir sempre*, *repetir*, *repetir enquanto*) mantêm um script em andamento; as **condições** (*se*, *se … outro*, *esperar até*) tomam decisões.
- Os blocos **repórter** (arredondados) retornam valores e se encaixam nas entradas de outros blocos; os blocos **booleanos** (pontudos) retornam verdadeiro ou falso para as condições.
- As **variáveis** e **listas** guardam valores entre blocos e scripts.

## Formatos dos blocos {#block-shapes}

### Blocos chapéu {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Iniciam um script quando algo acontece. Só é possível encaixar blocos embaixo deles.

---

### Blocos de pilha {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Os principais blocos de comando: cada um faz alguma coisa.

---

### Blocos C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocos em forma de C que guardam outros blocos dentro: laços e condições.

---

### Blocos repórter {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Retornam um valor, como um número ou um texto.

---

### Blocos booleanos {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Retornam apenas `true` ou `false`. Normalmente são usados em condições.

---

### Blocos de fim {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Encerram um script: nada pode ser encaixado embaixo deles.

---

### Pilha de blocos {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Uma pilha é um grupo de blocos conectados que é executado como um único script, de cima para baixo.
Normalmente, uma pilha começa com um bloco de evento, seguido dos blocos que são executados em ordem.

---


## Hubs, portas e controles {#hubs-ports-and-controls}

- Os blocos de motor e de luz recebem um **hub** e uma **porta**. As categorias Motores e Luz só aparecem quando algum hub do perfil as suporta, e alguns blocos existem apenas para determinados hubs (por exemplo, os modos de potência do BuWizz ou as funções do Technic Move Hub). A descrição de cada bloco diz com quais hubs ele funciona.
- Os blocos do painel se referem aos controles pelo nome (**JOY1**, **BTN2**). Não é possível excluir um controle do painel enquanto houver blocos usando-o; remova esses blocos primeiro.
- Os blocos de gamepad aparecem quando **Ativar blocos de gamepad** está ativado na [página Gamepad](/docs/Application/Dashboard/Gamepad).

## Níveis dos blocos {#block-levels}

Cada perfil tem um **nível dos blocos**: **Iniciante** mostra os blocos mais simples, **Avançado** adiciona os blocos comuns de lógica e de dispositivos, e **Guru** mostra o conjunto completo. Escolha o nível ao criar o perfil ou depois, nas Configurações do editor. Esta referência mostra o nível de cada bloco ao lado do nome.

## Fluxo de trabalho recomendado {#recommended-workflow}

1. Comece com um bloco de evento e um script curto; pressione **Executar** e verifique se funciona.
2. Confira cedo o sentido dos motores e as faixas de valores (um Monitor ajuda).
3. Divida o programa em scripts pequenos que conversam entre si por mensagens; leve a lógica repetida para [Meus blocos](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Adicione segurança: limites, paradas, uma verificação na inicialização e um plano para quando um hub desconectar.

## Erros comuns {#common-pitfalls}

- Um script sem bloco de evento nunca começa.
- O hub ou a porta errada está selecionada, então nada visível acontece.
- Misturar texto, números e valores booleanos dá resultados inesperados.
- Eventos muito frequentes sem filtragem (por exemplo, um evento de sensor a cada mínima alteração) podem sobrecarregar o programa; use limiares ou esperas curtas.

## Referência dos blocos {#block-reference}

- [Eventos](/docs/Application/BlockBuilder/Blocks/Events) · [Controle](/docs/Application/BlockBuilder/Blocks/Control) · [Operadores](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variáveis](/docs/Application/BlockBuilder/Blocks/Variables) · [Listas](/docs/Application/BlockBuilder/Blocks/Lists) · [Meus blocos](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Movimento](/docs/Application/BlockBuilder/Blocks/Movement) · [Motores](/docs/Application/BlockBuilder/Blocks/Motors) · [Luz](/docs/Application/BlockBuilder/Blocks/Light) · [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors) · [Sons](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator) · [Controladores na tela](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

No app, toque e segure (ou clique com o botão direito) em um bloco e escolha **Sobre o bloco** para abrir a descrição dele aqui.

Programas prontos: [Exemplos](/docs/Application/BlockBuilder/Examples).
