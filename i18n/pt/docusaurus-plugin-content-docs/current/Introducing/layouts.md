---
id: Layouts
title: Celular, tablet e desktop
description: "Onde fica cada coisa nos layouts de celular, tablet e desktop do MOCPilot, além dos menus e atalhos de teclado do desktop."
---

import Screenshot from '@site/src/components/Screenshot';

# Celular, tablet e desktop {#phone-tablet-and-desktop}

O MOCPilot tem três layouts, e o app escolhe um automaticamente:

- **Celular**: iPhone e celulares Android.
- **Tablet**: iPad e tablets Android (a partir de 7 polegadas).
- **Desktop**: computadores Mac e Windows. O [editor web](/docs/Introducing/WebEditor) no navegador também usa o editor de desktop.

Perfis, editores e painel são iguais em todo lugar; só a navegação muda.

## Celular {#phone}

<Screenshot name="profiles-phone" alt="Página Meus perfis em um celular, com a barra inferior" width={360} />

- A **barra inferior** tem **Perfis**, **Configurações** e **Ajuda**, além de **Notificações** quando você está conectado à sua conta.
- **Conta** fica no topo das **Configurações**.
- O cabeçalho de **Meus perfis** tem **Ordenar e filtrar**, **Conectar um controle remoto** (o ícone de controle remoto), **+** (Novo perfil, Importar perfil…, Pesquisar online) e o campo de pesquisa.
- As telas principais ficam na vertical. Ao abrir um perfil, o app passa para **horizontal, em tela cheia**, para que o editor e o painel ocupem a tela toda. Ao fechar o perfil, a tela volta para a vertical.
- No editor, botões redondos na parte de cima dão acesso rápido a Início, Desfazer, Refazer, Construtor com IA, Configurações do editor, Problemas (Ligações rápidas), Gamepad, Meus hubs, Controle remoto, Painel, Monitor (Blocos lógicos) e Executar / Parar.

<Screenshot name="editor-phone" alt="Editor de perfil em um celular, com os botões redondos na parte de cima" width={900} />

## Tablet {#tablet}

<Screenshot name="profiles-tablet" alt="Página Meus perfis em um tablet, com a barra lateral" width={900} />

- A **barra lateral** à esquerda tem **Perfis**, **Catálogo de perfis**, **Notificações**, **Configurações** e **Ajuda**. Abaixo deles ficam o cartão do **MocPilot Pro** e a sua conta (**Entrar** no modo convidado). Você pode recolher a barra lateral para mostrar só os ícones.
- O cabeçalho de **Meus perfis** tem **Novo perfil** (o menu dele também tem Importar perfil…, Conectar um controle remoto e Pesquisar online), **Ordenar e filtrar**, **Filtrar por hashtags**, **Conectar um controle remoto** e o campo de pesquisa.
- Toque no cartão de um perfil para selecioná-lo: a barra na parte de baixo mostra **Compartilhar**, **Editar**, **Adicionar aos favoritos** e **Iniciar**. Toque duas vezes em um cartão para iniciá-lo. Toque e segure um cartão para abrir o menu dele, que também tem **Excluir perfil**.
- Em telas largas, Configurações e Ajuda abrem ao lado da lista.
- Um perfil abre na horizontal, e o editor tem os mesmos botões redondos do celular.

## Desktop (Mac e Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Meus perfis em um computador" width={900} />

- À direita da barra superior: **Conta** (**Entrar** no modo convidado), **Notificações** (quando você está conectado à sua conta), **Conectar um controle remoto** (o ícone de controle remoto) e **Configurações** (a engrenagem).
- Configurações, Ajuda, Conta, Novo perfil, Editar perfil, o Catálogo de perfis e outras páginas abrem como **janelas** sobre a lista de perfis.
- Clique no cartão de um perfil para ver o que você pode fazer com ele (**Compartilhar…**, **Editar…**, **Adicionar aos favoritos**, **Iniciar**); um clique duplo o inicia. Clique com o botão direito em um cartão para abrir o menu dele, que também tem **Excluir perfil**.
- No editor, o **Painel** abre em uma **janela própria**, para que você veja o programa e o painel lado a lado.

### Menus {#menus}

No Windows, os menus ficam à esquerda da barra superior do app. No Mac, ficam na barra de menus do sistema, no topo da tela.

| Menu | Windows | Mac |
|---|---|---|
| **MOCPilot** (menu do app) | — | Sobre o MOCPilot, Configurações…, Sair |
| **Arquivo** | Novo perfil, Importar perfil…, Pesquisar online, Sair | Novo perfil, Importar perfil…, Pesquisar online, Conectar um controle remoto… |
| **Exibir** | Entrar em tela cheia | Entrar em tela cheia / Sair da tela cheia |
| **Janela** | Minimizar, Maximizar / Restaurar | Minimizar |
| **Ajuda** | Ajuda do MOCPilot, Fazer uma pergunta, Relatar um erro, Sobre o MOCPilot | Ajuda do MOCPilot, Fazer uma pergunta, Relatar um erro |

Quando um perfil está aberto, o editor tem seus próprios menus **Arquivo**, **Editar**, **Exibir** e **Programa** (veja [Menus do desktop](/docs/Application/BlockBuilder/Editor#desktop-menus)), e a janela do Painel tem **Arquivo**, **Editar** e **Exibir** (veja [Painel](/docs/Application/Dashboard/DashboardOverview)).

### Atalhos de teclado {#keyboard-shortcuts}

No Mac, ⌘ (Command) faz o que Ctrl faz no Windows; ⇧ é Shift, ⌃ é Control.

**Em todo lugar**

| Ação | Windows | Mac |
|---|---|---|
| Configurações | Ctrl+2 | ⌘, |
| Entrar / sair da tela cheia | F11 ou Alt+Enter | ⌃⌘F |
| Minimizar a janela | — | ⌘M |
| Sair | Alt+F4 | ⌘Q |

**Meus perfis** (nenhum perfil aberto)

| Ação | Windows | Mac |
|---|---|---|
| Novo perfil | Ctrl+N | ⌘N |
| Importar perfil | Ctrl+O | ⌘O |
| Pesquisar perfis | Ctrl+F | — |
| Perfis / Configurações / Ajuda / Conta | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Editor de perfil**

| Ação | Windows | Mac |
|---|---|---|
| Fechar o perfil | Ctrl+W | ⌘W |
| Executar / Parar | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Desfazer / Refazer | Ctrl+Z / Ctrl+Shift+Z ou Ctrl+Y | ⌘Z / ⇧⌘Z |
| Mostrar o painel | Ctrl+2 | ⌘2 |
| Meus hubs | Ctrl+Shift+H | ⇧⌘H |
| Construtor com IA | Ctrl+Shift+I | ⇧⌘I |
| Mostrar / ocultar a paleta de blocos (Blocos lógicos) | Ctrl+P | ⌘P |
| Pesquisar na paleta de blocos (Blocos lógicos) | Ctrl+F | ⌘F |
| Monitor (Blocos lógicos) | Ctrl+Shift+M | ⇧⌘M |
| Aumentar / diminuir zoom / tamanho real (Blocos lógicos) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Painel**

| Ação | Windows | Mac |
|---|---|---|
| Desfazer / Refazer | Ctrl+Z / Ctrl+Shift+Z ou Ctrl+Y | ⌘Z / ⇧⌘Z |
| Voltar ao programa (quando o painel está na janela principal) | Ctrl+1 | ⌘1 |
| Fechar a janela do Painel | — | ⌘W |
| Sair do modo **Selecionar** ou fechar o painel de propriedades | Esc | Esc |
| Excluir o controle (painel de propriedades aberto) | Delete ou Backspace | Delete ou Backspace |
| Duplicar o controle (painel de propriedades aberto) | Ctrl+D | ⌘D |

Em um tablet com teclado, Ctrl+B (⌘B no iPad) mostra ou oculta a barra lateral.

## O editor de perfil em cada layout {#the-profile-editor-on-every-layout}

O editor não tem abas. O **programa** (linhas de Ligações rápidas ou Blocos lógicos) ocupa a tela, e botões abrem todo o resto:

| Botão | Abre |
|---|---|
| **Meus hubs** | os [slots de hub](/docs/Application/Hubs/ConnectingHubs) do perfil |
| **Painel** | o [painel](/docs/Application/Dashboard/DashboardOverview) |
| **Gamepad** | as [configurações do gamepad](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | os valores de variáveis e listas (só Blocos lógicos) |
| **Configurações do editor** | as [opções do editor](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **Construtor com IA** | o [construtor com IA](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problemas** | as linhas que não podem ser executadas (só Ligações rápidas) |
| **Controle remoto** | executar o perfil em outro dispositivo e controlá-lo daqui (MocPilot Pro); veja [Controle remoto](/docs/Application/Profiles/RemoteControl) |
| **Executar / Parar** | inicia e para o programa |
