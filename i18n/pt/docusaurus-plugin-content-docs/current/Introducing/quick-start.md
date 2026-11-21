---
id: QuickStart
title: Início rápido
description: "Instale o MOCPilot, entre na sua conta, crie seu primeiro perfil e dirija um modelo em poucos minutos."
---

import Screenshot from '@site/src/components/Screenshot';

# Início rápido {#quick-start}

Este guia leva você da instalação do app até dirigir seu primeiro modelo. Você precisa de um hub compatível com um motor; veja [Dispositivos compatíveis](/docs/Introducing/SupportedDevices).

## 1. Instale o app {#1-install-the-app}

O MOCPilot está disponível na App Store (iPhone, iPad, Mac), no Google Play (Android) e na Microsoft Store (Windows). Os links estão em [mocpilot.com](https://mocpilot.com).

## 2. Entre na sua conta ou continue sem conta {#2-sign-in-or-continue-without-an-account}

Na primeira vez que você abre o app, ele pede que você entre. Use seu e-mail ou login e senha, sua conta Google ou Apple ID, ou crie uma conta nova.

<Screenshot name="sign-in" alt="A tela de entrada do MOCPilot" width={900} />

Recomendamos usar uma conta:

- seus perfis e configurações ficam guardados no servidor e são sincronizados entre seus dispositivos;
- você recupera seus dados se trocar ou perder um dispositivo;
- as compras e o MocPilot Pro funcionam em todos os seus dispositivos.

**Continuar sem conta** também funciona, mas aí tudo fica só neste dispositivo e se perde se você remover o app. Você pode entrar mais tarde em **Configurações → Conta**. Veja [Conta](/docs/Application/Account/UserAccount).

## 3. Conheça o app {#3-find-your-way-around}

- No **celular**, a barra inferior tem **Perfis**, **Configurações** e **Ajuda** (e **Notificações** depois que você entrar na sua conta).
- No **tablet**, as mesmas seções, o **Catálogo de perfis** e a sua conta ficam na barra lateral.
- No **computador**, use a barra superior: menus à esquerda; Conta, Notificações e Configurações à direita.

Veja [Celular, tablet e desktop](/docs/Introducing/Layouts).

## 4. Crie um perfil {#4-create-a-profile}

1. Na página **Meus perfis**, toque em **+** → **Novo perfil** (celular) ou escolha **Novo perfil** (tablet e computador, ou **Arquivo → Novo perfil**).
2. Escolha o **tipo de programa**:
   - **Ligações rápidas**, se você quer dirigir um modelo sem código. O melhor para começar.
   - **Blocos lógicos**, se você quer eventos, laços, condições e sensores.
3. Digite um **nome** e, se quiser, adicione uma imagem.
4. Toque em **Criar**.

<Screenshot name="create-profile-tiles" alt="Página Novo perfil com os blocos Blocos lógicos e Ligações rápidas" width={900} />

O perfil abre no editor. Mais em [Criar um perfil](/docs/Application/Profiles/CreateProfile).

:::tip Quer um modelo pronto?
Abra o **Catálogo de perfis** (**Pesquisar online** na página de perfis) e instale um perfil oficial para o seu set. Veja [Catálogo e publicação](/docs/Application/Profiles/Catalog).
:::

## 5. Adicione seu hub {#5-add-your-hub}

1. No editor, abra **Meus hubs**.
2. Toque em **Adicionar um novo hub** em um slot livre, escolha o modelo do seu hub e toque em **Adicionar**.
3. Ligue o hub, pressione o botão dele e espere o MOCPilot encontrá-lo.

<Screenshot name="my-hubs" alt="Página Meus hubs com os slots de hub" width={900} />

Se o app pedir uma atualização de firmware, siga [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating). Mais em [Adicionar e conectar um hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Posicione controles no painel {#6-place-controls-on-the-dashboard}

1. Abra o **Painel**.
2. Toque em **+** (**Adicionar controlador**), escolha um **Joystick** e toque em **Adicionar ao painel**.
3. Arraste-o para onde quiser. Toque nele para mudar o tamanho, a cor ou o comportamento.

<Screenshot name="controller-palette" alt="Paleta Adicionar controlador com o joystick selecionado" width={900} />

Veja [Adicionar e organizar controles](/docs/Application/Dashboard/ArrangingControls).

## 7. Ligue o controle a um motor {#7-connect-the-control-to-a-motor}

**Ligações rápidas:** arraste a entrada do joystick (por exemplo, *JOY1 eixo Y*) de **Entradas** para a linha vazia, adicione a operação **Motor** e a saída **Hub** de **Saídas** e toque na porta em que o motor está ligado. A linha está pronta quando não tem moldura vermelha. Veja [Ligações rápidas](/docs/Application/Links/LinksIntroducing).

**Blocos lógicos:** adicione um bloco *quando o programa começa*, um laço *repetir sempre* e um bloco que define a velocidade do motor com o valor do joystick. Veja [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) e os [exemplos](/docs/Application/BlockBuilder/Examples).

## 8. Pressione Executar {#8-press-run}

Pressione **Executar** (▶). Mova o joystick, e o motor gira. Pressione **Parar** para voltar à edição.

Pronto. Próximos passos:

- Conheça todos os [tipos de controle](/docs/Application/Dashboard/ControlTypes).
- Dê um novo visual ao painel com [temas](/docs/Application/Themes/ThemesOverview).
- Conecte um [gamepad](/docs/Application/Dashboard/Gamepad).
- Se algo não funcionar, veja [Solução de problemas](/docs/Help/Troubleshooting).
