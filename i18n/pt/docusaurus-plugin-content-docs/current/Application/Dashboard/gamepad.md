---
id: Gamepad
title: Gamepad
description: "Dirija seu modelo com um gamepad estilo Xbox ou PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Um gamepad físico costuma ser mais agradável do que uma tela sensível ao toque: analógicos, gatilhos e botões de verdade. O MOCPilot funciona com gamepads Bluetooth e USB compatíveis com o sistema do dispositivo (controles estilo Xbox e PlayStation no iPhone, iPad, Android, Mac e Windows).

O gamepad funciona junto com o painel; você pode usar os dois ao mesmo tempo.

## Conectar um gamepad {#connect-a-gamepad}

1. Emparelhe o gamepad com o seu celular, tablet ou computador nas configurações de Bluetooth do sistema (ou ligue-o por USB).
2. Abra um perfil e vá para **Gamepad**: na barra superior do editor no computador, em **Mais** no celular ou tablet (aparece **Gamepad (ligado)** quando o sistema detecta um gamepad).
3. O cabeçalho da página mostra **Gamepad: (nome)**. “O gamepad não está conectado” significa que o sistema ainda não o detectou.

<Screenshot name="gamepad" alt="Página Gamepad" width={900} />

## Página Gamepad {#gamepad-page}

- **Ativar blocos de gamepad**: ativa as entradas de gamepad neste perfil. Sem isso, as linhas de Ligações rápidas com a entrada Gamepad informam “Ative os blocos de gamepad na página Gamepad (barra superior)”, e os Blocos lógicos não mostram a categoria Gamepad.
- **Layout dos botões do gamepad**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) ou **Sony PS** (Xis, Círculo, Quadrado, Triângulo, L1, R1, L2, R2). Os editores identificam os botões conforme essa escolha.
- **Intervalo de valores do gamepad** (Blocos lógicos): os analógicos dão **-1..1** ou **-100..100**.
- **Selecionar gamepad**: quando há mais de um gamepad conectado.
- **Testar gamepad** → **Teste**: um testador ao vivo que mostra botões, gatilhos, analógicos e o D-pad, para você conferir tudo antes de usar.

As configurações ficam guardadas no perfil.

## Usar o gamepad em Ligações rápidas {#use-the-gamepad-in-quick-links}

Arraste a entrada **Gamepad** para uma linha e escolha a **Entrada** dela:

- analógicos: Analógico esquerdo Y, Analógico esquerdo X, Analógico direito Y, Analógico direito X;
- gatilhos: RT / LT (R2 / L2);
- botões frontais: A, B, X, Y (Xis, Círculo, Quadrado, Triângulo);
- botões de ombro: LB / RB (L1 / R1);
- D-pad: Cima, Baixo, Esquerda, Direita.

Exemplo: *Gamepad* (Analógico esquerdo Y) → *Suave* → *Motor* → *Hub* (porta A). Veja [Entradas](/docs/Application/Links/Inputs#gamepad).

## Usar o gamepad em Blocos lógicos {#use-the-gamepad-in-logic-blocks}

A categoria **Gamepad** tem blocos de evento (*quando o botão do gamepad …*, *quando o D-pad do gamepad …*, *quando o analógico do gamepad …*) e blocos de valor (botão, D-pad, analógico, pressão do gatilho). Veja [Blocos de gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Perfis para publicação {#profiles-for-publishing}

Um perfil pode ser publicado no catálogo só com um gamepad, sem controles no painel: o requisito é “um controlador no painel ou o gamepad”.
