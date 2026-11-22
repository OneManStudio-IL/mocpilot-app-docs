---
id: LinksIntroducing
title: Conheça as Ligações rápidas
description: "As Ligações rápidas conectam os controles do painel aos motores e luzes dos hubs, linha por linha, sem código."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Ligações rápidas {#quick-links}

**Ligações rápidas** é o editor de programas sem código do MOCPilot. Você conecta os controles do painel, o gamepad ou os sensores dos hubs a motores, luzes e indicadores, **uma linha de cada vez**. Se você já usou o app clássico Controlz, vai se sentir em casa.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Linhas das Ligações rápidas" style={{width: '100%', maxWidth: 720}} />

## Uma linha se lê como uma frase {#a-row-reads-like-a-sentence}

Cada linha vai da esquerda para a direita:

**Entrada → Processamento (opcional) → Operação → Saída**

> *Joystick 1, Eixo Y* → *Suave* → *Motor* → *Technic Hub, porta A*
>
> "Quando eu movo o joystick para cima e para baixo, o motor da porta A gira, arrancando e parando suavemente."

| Parte | O que é | Exemplos |
|---|---|---|
| **Entrada** | de onde vem o valor | um controle do painel, o veículo simulado, o gamepad, um botão ou sensor do hub |
| **Processamento** | altera o valor no caminho (nenhum, um ou vários blocos) | Inverter, Limite, Zona morta, Limiar, Suave, Alternar |
| **Operação** | o que o hub deve fazer | Motor, Servo, Motor por tempo, Luz, Girar por graus, Ir para a posição… |
| **Saída** | onde isso acontece | um **Hub** com as suas portas ou uma saída direta: Indicador, LED do hub, Matriz de LEDs, Calibrar servos |

As saídas diretas (Indicador, LED do hub, Matriz de LEDs, Calibrar servos) não precisam de operação: *Bateria do hub → Indicador*.

## O editor {#the-editor}

<Screenshot name="links-editor" alt="Editor das Ligações rápidas com linhas e a paleta" width={900} />

- As **linhas** ocupam a tela e rolam na vertical. As novas linhas começam na última linha, vazia ("Nova linha: entrada").
- A **paleta** na parte de baixo tem três abas: **Entradas**, **Processamento** e **Saídas**. Ela é montada a partir do seu perfil: cada controle do painel e cada hub em Meus hubs aparece automaticamente, o gamepad aparece quando os blocos de gamepad estão ativados, e uma operação só aparece se algum hub do perfil souber executá-la.
- O estado das linhas na barra superior, logo antes de **Executar**, mostra um visto verde quando todas as linhas estão prontas, ou um "!" vermelho com o número de problemas. No computador, ele também diz **Todas as linhas estão prontas** ou **Problemas: N**.

## Montar uma linha {#build-a-row}

1. Arraste uma entrada de **Entradas** para a linha vazia. Uma nova linha é criada.
2. Se precisar, arraste blocos de processamento de **Processamento** para depois da entrada.
3. Arraste uma operação (por exemplo, **Motor**) de **Saídas**.
4. Arraste a saída **Hub** para depois da operação e toque nas portas que quer usar.
5. Toque em qualquer bloco para mudar as configurações dele: você escolhe entre chips, sem digitar nada.

Os blocos se encaixam como peças de quebra-cabeça. O formato de cada encaixe mostra o tipo de sinal, então blocos que não funcionam juntos não se encaixam:

- um **valor** de −1 a 1 (eixos do joystick, sliders, pedais, sensores);
- **liga/desliga** (botões, interruptores, limiares);
- o encaixe **operação → hub**, para que um hub só possa vir depois de uma operação.

Para remover um bloco, arraste-o de volta para a paleta ("Solte aqui para remover") ou toque nele e escolha **Remover bloco**.

## Linhas {#rows}

Toque no número da linha para abrir o menu da linha:

- **Desligar** / **Ligar**: uma linha desligada continua no programa, mas não é executada. Útil para experimentos.
- **Remover linha**.

Você pode adicionar quantas linhas quiser.

## Executar {#run}

Pressione **Executar**. Enquanto o programa é executado, cada encaixe mostra o **valor ao vivo** que passa por ele, para você ver exatamente onde um sinal para. Não é possível editar durante a execução; pressione **Parar** para editar de novo. Veja [Executar e corrigir problemas](/docs/Application/Links/Problems).

## Desfazer {#undo}

**Desfazer** e **Refazer** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z ou os botões na barra superior) voltam até 100 passos. Eles não ficam disponíveis enquanto o programa é executado.

## Saiba mais {#read-more}

- [Entradas](/docs/Application/Links/Inputs): controles, o veículo, o gamepad, botões e sensores dos hubs
- [Processamento](/docs/Application/Links/Processing): Inverter, Limite, Zona morta, Limiar, Suave, Alternar
- [Operações e saídas](/docs/Application/Links/Operations)
- [Bloco Hub e portas](/docs/Application/Links/HubsAndPorts)
- [Executar e corrigir problemas](/docs/Application/Links/Problems)
- [Exemplos: carro, tanque, guindaste, trem](/docs/Application/Links/Examples)
- Referência dos blocos: [entradas](/docs/Application/Links/Blocks/InputBlocks), [processamento](/docs/Application/Links/Blocks/ProcessingBlocks), [operações e saídas](/docs/Application/Links/Blocks/OutputBlocks)

## Ligações rápidas ou Blocos lógicos? {#quick-links-or-logic-blocks}

As Ligações rápidas são ideais quando cada controle simplesmente move alguma coisa. Quando você precisa de lógica (sequências, condições, variáveis ou uma reação em várias etapas a um sensor), use os [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Você escolhe o tipo de programa ao criar o perfil; veja a [comparação](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
