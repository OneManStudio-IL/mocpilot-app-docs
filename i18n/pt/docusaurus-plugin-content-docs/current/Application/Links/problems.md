---
id: Problems
title: Executar e corrigir problemas
description: "Painel de problemas, molduras vermelhas, valores ao vivo e mensagens comuns das Ligações rápidas."
---

import Screenshot from '@site/src/components/Screenshot';

# Executar e corrigir problemas {#running-and-fixing-problems}

## Está tudo pronto? {#is-everything-ready}

O botão **Problemas** na barra superior do editor (no computador, logo antes de **Executar**) mostra:

- um **visto verde**: "Todas as linhas estão prontas";
- um **"!" vermelho**: "Problemas: N".

No computador, o texto aparece escrito no botão; em uma janela estreita, ficam só o ícone e o número de problemas. No celular ou tablet, o botão mostra o ícone, com o número em um selo vermelho.

Toque nele para abrir o painel de problemas (um painel lateral no celular, um menu no tablet ou no computador). Ele lista "Linha N — motivo"; toque em um item para ir até aquela linha. O bloco que causa o problema fica com uma **moldura vermelha**. Quando está tudo certo, o painel diz "Todas as linhas ligadas podem ser executadas."

<Screenshot name="links-problems" alt="Painel de problemas com uma linha que não está pronta" width={900} />

As linhas com problemas não são executadas; as outras são.

## Mensagens comuns {#common-messages}

| Mensagem | O que fazer |
|---|---|
| Arraste uma entrada e uma saída (um hub ou um indicador do painel) para a linha | a linha está vazia |
| Adicione uma entrada no início da linha | arraste primeiro um controle, o veículo, o gamepad ou uma entrada de hub |
| Adicione uma saída: um hub ou um indicador do painel | termine a linha com uma saída |
| Adicione uma operação antes do hub: motor, servo, luz | uma saída Hub precisa de uma operação antes dela |
| Escolha pelo menos uma porta no hub | toque no chip de uma porta no bloco Hub |
| Escolha um controlador do painel | toque no bloco de entrada e escolha um controle |
| … não se move neste eixo | o joystick tem só um eixo: escolha o outro eixo ou altere o joystick |
| Escolha o que … fornece | o controle não tem mais este canal: escolha um |
| Escolha os pedais do veículo | a entrada Veículo precisa de pedais no painel |
| … não está no painel | a alavanca de câmbio ou o freio de mão escolhido para o Veículo foi removido |
| "…" não funciona com este controlador | este bloco de processamento não combina com o sinal |
| Porta A: este dispositivo não funciona como servo (é preciso um motor com encoder) | use um motor com encoder ou outra operação |
| A porta A tem um sensor, não um motor | verifique o que está ligado na porta |
| A porta A também é usada na linha 2 | cada porta só pode pertencer a uma linha |
| Ative os blocos de gamepad na página Gamepad (barra superior) | abra **Gamepad** e ative **Ativar blocos de gamepad** |
| O indicador mostra o valor como ele é: remova a operação | uma linha com Indicador não tem operação |
| A calibração não precisa de operação: remova-a | uma linha com Calibrar servos não tem operação |
| Escolha um hub com LED colorido (hubs LEGO) | LED do hub funciona só em hubs LEGO® |
| As cores das portas só estão disponíveis no BuWizz 3 | Cor da porta precisa de um BuWizz 3.0 Pro |
| Nenhum servo no modo de calibração Auto neste programa | Calibrar servos precisa de um Servo no modo Auto |
| Este bloco requer uma versão mais nova do app | o perfil foi criado em uma versão mais nova: atualize o MOCPilot |
| A linha está desligada | ligue-a no menu da linha |

## Valores ao vivo {#live-values}

Enquanto o programa é executado, cada encaixe entre blocos mostra o valor que passa por ele. Mova um controle e acompanhe o valor ao longo da linha:

- nada muda na entrada: o controle ou o gamepad não está enviando nada; verifique o canal ou o eixo;
- o valor muda, mas o motor não se move: verifique o ponto de conexão do hub e a porta;
- o valor fica pequeno depois de **Limite** ou **Zona morta**: ajuste as configurações deles.

<Screenshot name="links-live-values" alt="Um programa das Ligações rápidas em execução com valores ao vivo nos encaixes" width={900} />

## O modelo não se move {#the-model-does-not-move}

1. O hub está conectado? Verifique **Meus hubs** e o ponto de conexão no bloco Hub.
2. A porta certa está escolhida? Os motores estão ligados onde você imagina?
3. A linha está ligada e sem moldura vermelha?
4. O programa está em execução (**Executar**)?
5. A bateria está carregada? Adicione uma linha *Bateria → Indicador* para ficar de olho nela.

Mais em [Solução de problemas](/docs/Help/Troubleshooting).
