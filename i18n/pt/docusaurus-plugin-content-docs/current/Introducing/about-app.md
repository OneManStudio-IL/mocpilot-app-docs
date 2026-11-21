---
id: AboutApp
title: Sobre o MOCPilot
description: "O MOCPilot transforma um celular, tablet ou computador em controle remoto para modelos LEGO® e compatíveis com Bluetooth."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: construa, dirija, controle tudo {#mocpilot-build-it-drive-it-control-everything}

O **MOCPilot** transforma seu celular, tablet ou computador em um controle remoto para modelos LEGO® e compatíveis com Bluetooth: carros, caminhões, trens, guindastes, robôs e seus próprios MOCs.

Você mesmo cria os controles: um **painel** com joysticks, controles deslizantes, botões, volantes e indicadores. Depois, um **programa** liga o painel aos motores e às luzes dos seus **hubs**. O MOCPilot tem dois editores de programa:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor Ligações rápidas: linhas da entrada até o hub" style={{width: '100%'}} />
    <h3>Ligações rápidas</h3>
    <p>Sem código. Cada linha liga um controle a um motor ou a uma luz: <em>entrada → processamento → operação → hub</em>. Um carro fica pronto para rodar em minutos. <a href="/docs/Application/Links/LinksIntroducing">Saiba mais</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor Blocos lógicos: programa em blocos" style={{width: '100%'}} />
    <h3>Blocos lógicos</h3>
    <p>Blocos visuais com eventos, laços, condições, variáveis e dados de sensores. Para robôs, automação e tudo o que precisa de lógica. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Saiba mais</a>.</p>
  </div>
</div>

## O que você pode fazer {#what-you-can-do}

- **Dirigir qualquer modelo** a partir de um painel criado por você: joysticks, controles deslizantes, botões, interruptores, interruptores de passo, monitores e controles especiais, como volante, pedais, câmbio, freio de mão, setas e controle de trem.
- **Usar hubs de verdade**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick e Mould King. Veja [Dispositivos compatíveis](/docs/Introducing/SupportedDevices).
- **Usar um gamepad** (estilo Xbox ou PlayStation) em vez da tela sensível ao toque.
- **Ler sensores**: bateria e inclinação do hub, velocidade e posição do motor, sensores de cor e de distância e a inclinação do seu celular.
- **Deixar o painel com a sua cara** usando [temas](/docs/Application/Themes/ThemesOverview).
- **Ter seus perfis em todo lugar**: com uma conta, os perfis são sincronizados entre seus dispositivos, e você pode editá-los no navegador em [mocpilot.com](/docs/Introducing/WebEditor).
- **Dirigir a partir de outro dispositivo**: com o MocPilot Pro, um dispositivo se conecta aos hubs e outro, ou o editor web, serve de controle remoto.
- **Compartilhar**: instale perfis do [Catálogo de perfis](/docs/Application/Profiles/Catalog) e publique os seus.

<Screenshot name="dashboard-run" alt="Um painel do MOCPilot durante a condução de um modelo" width={900} />

## Onde o MOCPilot funciona {#where-mocpilot-runs}

| Dispositivo | Layout |
|---|---|
| iPhone e celulares Android | Layout de celular: barra inferior; um perfil aberto ocupa a tela inteira na horizontal |
| iPad e tablets Android | Layout de tablet: barra lateral, mais espaço para o editor |
| Computadores Mac e Windows | Layout de desktop: menus, atalhos de teclado, o painel em uma janela própria |
| Navegador em mocpilot.com | [Editor web](/docs/Introducing/WebEditor): edição de perfis; os hubs são conectados pelo app em outro dispositivo |

Veja os detalhes em [Celular, tablet e desktop](/docs/Introducing/Layouts).

Os hubs, seus perfis e os temas baixados também funcionam sem internet. Veja [Trabalhar off-line](/docs/Application/Account/Sync#working-offline).

## Por onde começar {#where-to-start}

1. Leia [Como o MOCPilot funciona](/docs/Introducing/HowItWorks): cinco minutos que facilitam todo o resto.
2. Siga o [Início rápido](/docs/Introducing/QuickStart) para dirigir seu primeiro modelo.
3. Não sabe qual editor escolher? Compare os dois em [Criar um perfil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, o logotipo LEGO, Powered Up e Technic são marcas registradas do LEGO Group, que não patrocina, autoriza nem endossa o MOCPilot.
:::
