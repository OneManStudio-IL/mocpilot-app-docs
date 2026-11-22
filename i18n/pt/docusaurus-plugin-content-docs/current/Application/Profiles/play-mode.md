---
id: PlayMode
title: Dirigir um modelo (Executar)
description: "Execute um perfil, dirija o modelo, pare-o e veja o que acontece quando ele para ou uma conexão cai."
---

import Screenshot from '@site/src/components/Screenshot';

# Dirigir um modelo (Executar) {#driving-a-model-run}

Um perfil tem dois modos:

- **Edição**: você altera os hubs, o painel e o programa.
- **Execução**: o programa roda, e os controles do painel dirigem o modelo.

## Iniciar e parar {#start-and-stop}

Pressione **Executar** (▶) na ponta direita da barra superior do editor; no celular ou tablet, o painel também tem esse botão. No computador, **Executar** é o botão laranja no editor (também **Programa → Executar**, ⌘R / Ctrl+R). Pressione **Parar** (■) para voltar à edição (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Painel enquanto o programa roda" width={900} />

Enquanto o programa roda:

- os pontos da grade do painel ficam ocultos, assim como os botões de edição dele (no computador, eles ficam indisponíveis);
- os controles respondem ao toque e ao gamepad;
- monitores e indicadores mostram valores ao vivo;
- em Ligações rápidas, o editor mostra valores ao vivo entre os blocos de cada linha, e as linhas não podem ser editadas;
- em Blocos lógicos, o programa continua editável, então você pode fazer ajustes finos ao vivo.

## No celular ou tablet {#on-a-phone-or-tablet}

Ao abrir um perfil, o celular passa para a horizontal, em tela cheia, para que o painel ocupe a tela toda. Ative **Manter a tela ligada** nas Configurações para que a tela não se apague enquanto você dirige. Veja [Configurações](/docs/Application/Account/Settings).

## Antes de pressionar Executar {#before-you-press-run}

- Ligue os hubs e confira em **Meus hubs** se eles estão conectados (o número no botão **Meus hubs**, **Hubs** no computador, mostra quantos estão).
- Em Ligações rápidas, confira o botão **Problemas**: um “!” vermelho significa que algumas linhas não podem ser executadas. Veja [Executar e corrigir problemas](/docs/Application/Links/Problems).
- Na primeira tentativa, coloque o modelo sobre um suporte ou mantenha-o longe da borda da mesa.

## Quando o programa para {#when-the-program-stops}

- **Ligações rápidas** para todos os motores usados pelas linhas e redefine as saídas (matriz de LED apagada, cores das portas e luzes dos sensores desligadas).
- **Blocos lógicos** para as portas do hub se **Parar portas do hub quando o programa parar** estiver ativado nas Configurações do editor.
- Se um hub desconectar enquanto o programa roda, os motores dele param. Em Ligações rápidas, uma entrada de hub “Conectado” pode mostrar isso no painel.
- Com o controle remoto, se a conexão entre o controle remoto e o dispositivo com os hubs ficar perdida por cerca de 4 segundos, o dispositivo com os hubs para o perfil e todos os motores.

## Dirigir a partir de outro dispositivo {#drive-from-another-device}

Com o [MocPilot Pro](/docs/Application/Account/Pro), você pode executar o perfil em um dispositivo (o dispositivo com os hubs, que se conecta aos hubs) e controlá-lo a partir de outro dispositivo ou do editor web. Veja [Controle remoto](/docs/Application/Profiles/RemoteControl).
