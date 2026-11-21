---
id: Indicators
title: Indicadores e monitores
description: "Mostre bateria, velocidade, inclinação, valores de sensores e texto no painel."
---

# Indicadores e monitores {#indicators-and-monitors}

Os monitores mostram informações no painel enquanto você dirige: nível da bateria, velocidade, inclinação, a distância até um obstáculo, a marcha ou o modo atual.

| Monitor | Mostra | Tema |
|---|---|---|
| **Monitor** | texto ou um número | todos os temas |
| **Nível da bateria** | um medidor de nível | temas pagos |
| **Velocímetro** | um medidor de velocidade | temas pagos |
| **Monitor de inclinação** | a inclinação de um modelo para a frente e para os lados | temas pagos |

Os monitores só exibem informações; não é possível dirigir com eles. O programa decide o que eles mostram.

## Em Ligações rápidas {#in-quick-links}

Use a saída **Indicador**. A linha termina no indicador em vez de um hub:

- *Hub* (Bateria) → *Indicador* (Nível da bateria): a bateria do hub em um medidor.
- *Hub* (Velocidade do motor, porta A) → *Indicador* (Velocímetro).
- *Hub* (Inclinação: arfagem) → *Indicador* (Monitor de inclinação, Inclinação X), e uma segunda linha para Inclinação: rolagem → Inclinação Y.
- *Hub* (Tensão da bateria) → *Indicador* (Monitor): mostra o valor com a unidade, como “7.85 V”.

O indicador mostra o valor como ele é, então a linha não tem operação. Veja [Indicador](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## Em Blocos lógicos {#in-logic-blocks}

Use os blocos dos controladores do painel:

- *mostrar … no monitor …* para o Monitor;
- *definir … para o monitor …* para o Nível da bateria e o Velocímetro;
- *definir … para o monitor de inclinação / rotação …* para o Monitor de inclinação.

Você pode mostrar qualquer coisa que consiga calcular: o valor de um sensor, uma variável, um texto como “Marcha 2”. Veja [Controladores na tela](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Dicas {#tips}

- Coloque o monitor da bateria em um canto onde seus dedos não o cubram.
- Para mensagens mais longas, use um Monitor de várias linhas com o estouro **Letreiro** ou **Rolar**.
- O programa pode mudar a cor da maioria dos controles, por exemplo para deixar um botão vermelho quando a bateria estiver fraca.
