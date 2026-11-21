---
id: HowItWorks
title: Como o MOCPilot funciona
description: "Perfis, painel, hubs e programa: as quatro partes de todo modelo no MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Como o MOCPilot funciona {#how-mocpilot-works}

Tudo no MOCPilot é feito de quatro partes. Depois de conhecê-las, todas as telas fazem sentido.

<HowItWorks />

## 1. Perfil: um modelo {#1-profile-one-model}

Um **perfil** guarda tudo sobre um modelo: os hubs, o painel e o programa. Crie um perfil para cada modelo, por exemplo “Buggy Technic” ou “Caminhão guindaste”.

Ao criar um perfil, você escolhe o **tipo de programa**: Blocos lógicos ou Ligações rápidas. Não é possível alterá-lo depois. Veja [Criar um perfil](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: a eletrônica do modelo {#2-hubs-the-models-electronics}

Os **hubs** são as peças Bluetooth do seu modelo; motores, luzes e sensores são ligados às portas deles. Um perfil tem **slots** de hub. Você adiciona os hubs do modelo aos slots uma única vez, e o MOCPilot se conecta a eles sempre que você abre o perfil. Veja [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Painel: seus controles {#3-dashboard-your-controls}

O **painel** é a tela de onde você dirige. Você posiciona os controles em uma grade: joysticks, controles deslizantes, botões, interruptores, interruptores de passo e monitores, além de controles especiais, como volante e pedais. Sozinho, um controle não faz nada; ele passa seus valores para o programa. Veja [Painel](/docs/Application/Dashboard/DashboardOverview).

Você também pode usar um gamepad, junto com o painel ou no lugar dele. Veja [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programa: o que liga tudo {#4-program-what-connects-them}

O **programa** decide o que acontece quando você mexe em um controle: qual motor gira e com que velocidade, qual luz pisca, o que um monitor mostra.

- Em **Ligações rápidas**, o programa é uma lista de linhas: *entrada → processamento → operação → hub*. Veja [Ligações rápidas](/docs/Application/Links/LinksIntroducing).
- Em **Blocos lógicos**, o programa é feito de blocos: eventos, laços, condições, variáveis e sensores. Veja [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Executar {#5-run}

Pressione **Executar** (▶). O programa começa, os controles do painel ganham vida e o modelo responde. Pressione **Parar** para voltar à edição. Veja [Dirigir um modelo](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programa em Ligações rápidas: controles do painel ligados às portas do hub" width={900} />

## Uma sessão típica {#a-typical-session}

1. Abra um perfil ou [crie um](/docs/Application/Profiles/CreateProfile).
2. Adicione seus hubs em **Meus hubs** e ligue-os.
3. Posicione controles no **Painel**.
4. Ligue-os aos motores e às luzes no **programa**.
5. Pressione **Executar**, dirija, ajuste e repita.

## O que fica guardado onde {#what-is-stored-where}

- Os perfis são salvos no seu dispositivo. Quando você está conectado à sua conta, eles também ficam guardados nela e aparecem em todos os seus dispositivos. Veja [Sincronização entre dispositivos](/docs/Application/Account/Sync).
- Temas e outras compras pertencem à sua conta. Veja [MocPilot Pro e compras](/docs/Application/Account/Pro).
