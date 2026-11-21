---
id: ProcessingBlocks
title: Blocos de processamento
description: "Referência de todos os blocos de processamento das Ligações rápidas: Inverter, Limite, Zona morta, Limiar, Suave e Alternar."
---

# Blocos de processamento {#processing-blocks}

Os blocos de processamento ficam entre a entrada e a operação (ou o indicador) e alteram o sinal no caminho. Uma linha pode ter quantos quiser, em qualquer ordem. Um bloco que não aceita o sinal que chega não se encaixa; em um arquivo, ele é indicado como "… não funciona com este controlador". Como usá-los: [Processamento](/docs/Application/Links/Processing).

## Inverter {#mod-invert}

Inverte o sinal.

- Sem configurações.
- Recebe: valor ou liga/desliga. Fornece: o mesmo tipo.
- Valor: troca o sinal (0,7 vira −0,7). Liga/desliga: ligado vira desligado e desligado vira ligado.

## Limite {#mod-limit}

Reduz a escala do valor, para que a deflexão total não passe do máximo.

- **Máximo**: 20, 30, 40, 50, 60, 70, 80 ou 90 % (padrão 50 %).
- Recebe: valor ou liga/desliga. Fornece: valor (um botão limitado fornece 0 ou o máximo).

## Zona morta {#mod-deadzone}

Trata valores pequenos em torno do zero como zero; o resto é esticado de volta para a faixa completa, então a deflexão total ainda fornece 1.

- **Zona**: 5, 10, 15, 20 ou 30 % (padrão 10 %).
- Recebe: valor. Fornece: valor.

## Limiar {#mod-threshold}

Transforma um valor em liga/desliga.

- **Ligado quando o valor está**: **Acima** (padrão) ou **Abaixo**.
- **Nível (da escala total)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 ou 90 % (padrão 20 %).
- Recebe: valor. Fornece: liga/desliga.
- Uma pequena histerese (2 % da escala total) evita que a saída fique piscando quando o valor oscila perto do nível.

## Suave {#mod-smooth}

Vai em direção ao valor de entrada aos poucos, em vez de saltar.

- **Aceleração (até a velocidade máxima)**: **Instantâneo**, 0,25, 0,5, 1, 2 ou 3 s (padrão 0,5 s): o tempo de 0 até o máximo, afastando-se do zero.
- **Desaceleração (até parar)**: as mesmas opções (padrão 0,5 s): o tempo do máximo de volta a 0.
- Recebe: valor ou liga/desliga. Fornece: valor (um botão suavizado sobe e desce em rampa).

## Alternar {#mod-toggle}

Transforma um botão de pressão em interruptor: cada toque troca a saída entre ligado e desligado. A saída começa desligada.

- Sem configurações.
- Recebe: liga/desliga. Fornece: liga/desliga.
