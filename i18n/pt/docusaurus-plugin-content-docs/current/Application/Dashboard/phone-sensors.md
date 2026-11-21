---
id: PhoneSensors
title: Sensores do celular
description: "Use a inclinação e a aceleração do seu celular ou tablet para controlar um modelo."
---

# Sensores do celular {#phone-sensors}

Seu celular ou tablet tem sensores de movimento. O MOCPilot pode usá-los como entrada: incline o celular para esterçar, sacuda-o para disparar algo ou mostre a bateria do celular no painel.

Os sensores do celular estão disponíveis em **Blocos lógicos** (categoria **Sensores**). Ligações rápidas usa como entradas os controles do painel, o gamepad e os sensores dos hubs.

## Blocos de sensores {#sensor-blocks}

| Bloco | O que dá |
|---|---|
| `Inclinação do dispositivo` (inclinação, rotação) | a inclinação do dispositivo em graus |
| `Aceleração do dispositivo` (x, y, z) | a aceleração do dispositivo, em m/s² |
| `Acelerômetro do dispositivo` (x, y, z) | os valores brutos do acelerômetro, em m/s² |
| `% bateria do dispositivo` | o nível da bateria do dispositivo |

Detalhes: [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors).

## Exemplo: esterçar inclinando o celular {#example-steer-by-tilting-the-phone}

```text
quando o programa começa
repetir sempre
    Ir para a posição  (Hub 1, porta B)  ←  Inclinação do dispositivo (rotação) × 2
```

Use na direção um motor com posição absoluta (um motor angular).

Segure o celular na horizontal, como um volante. Limite o valor com os operadores *está entre* ou *min/max* para que a direção não bata nos batentes.

## Dicas {#tips}

- Trave a rotação da tela do dispositivo; caso contrário, o sistema pode girar a tela enquanto você inclina.
- Computadores não têm sensores de movimento; neles, os blocos dão zero.
- Para mostrar a inclinação no painel, envie os ângulos para um **Monitor de inclinação** (temas pagos). Veja [Indicadores e monitores](/docs/Application/Dashboard/Indicators).
- Os hubs também têm seus próprios sensores de inclinação: veja os blocos de sensores dos hubs e a entrada **Hub** de Ligações rápidas.
