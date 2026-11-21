---
id: ManageProfiles
title: Gerenciar perfis
description: "Edite, compartilhe, importe, exporte e exclua perfis do MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Gerenciar perfis {#manage-profiles}

## Editar os detalhes do perfil {#edit-profile-details}

Toque em **Editar** (celular, tablet) ou clique em **Editar…** (computador) em um perfil. Em **Editar perfil**, você pode alterar:

- a **imagem** e o **nome**;
- a **descrição** (o que o perfil faz, para qual modelo é, como dirigi-lo);
- o **nível dos blocos** (Blocos lógicos);
- as **hashtags**;
- **Favorito** (celular, tablet): um perfil favorito vai para o topo da sua lista. No computador, **Favorito** fica na barra inferior da página de perfis.

<Screenshot name="edit-profile" alt="Janela Editar perfil com a imagem, o nome, a descrição e as hashtags" width={900} />

É também aqui que você exclui o perfil e, depois de entrar na sua conta, o envia para o catálogo.

O tipo de programa não pode ser alterado. Para passar um modelo para o outro editor, crie um perfil novo.

## Compartilhar (exportar) um perfil {#share-export-a-profile}

**Compartilhar…** empacota o perfil em um único arquivo `.dat` (com um nome como `Technic Buggy_<id>.dat`) e abre a janela de compartilhamento do sistema. Envie-o em uma mensagem ou por e-mail, ou salve-o nos seus arquivos.

O arquivo contém os hubs, o painel e o programa. Ele não contém compras: temas e controles especiais que o destinatário não possui são substituídos ou bloqueados quando ele edita o perfil (veja [abaixo](#paid-themes-in-shared-profiles)).

## Importar um perfil {#import-a-profile}

1. Em **Meus perfis**, escolha **Importar perfil…** (celular: **+** → **Importar perfil…**; tablet: o menu **Novo perfil**; computador: **Arquivo → Importar perfil…**, ⌘O / Ctrl+O).
2. Escolha um arquivo `.dat`.

Se você já tem esse perfil:

- uma versão diferente: escolha **Substituir**, **Salvar como cópia** (acrescenta “(cópia)” ao nome) ou **Cancelar**;
- exatamente o mesmo arquivo: ele não é carregado de novo.

Um arquivo que não é um perfil é recusado.

:::tip Duplicar um perfil
Não existe um comando separado para duplicar. Para obter uma cópia, compartilhe o perfil como arquivo e importe-o com **Salvar como cópia**.
:::

## Excluir um perfil {#delete-a-profile}

Abra **Editar perfil**:

- celular e tablet: **Deslize para excluir o perfil**;
- computador: **Excluir perfil** e confirme. **Excluir perfil** também está no menu do cartão do perfil.

O perfil é excluído deste dispositivo e da sua conta, então ele também desaparece dos seus outros dispositivos. Isso não pode ser desfeito; compartilhe o perfil como arquivo antes, se você puder precisar dele de novo.

## Perfis do catálogo {#profiles-from-the-catalog}

Um perfil instalado a partir do [Catálogo de perfis](/docs/Application/Profiles/Catalog) é uma cópia sua:

- enquanto você não o alterar, ele funciona exatamente como foi publicado, e **Atualizar** instala uma nova versão quando o autor a lança (**Atualizar a partir do catálogo** em **Editar perfil** faz o mesmo);
- a primeira alteração mostra um aviso: depois dela, o perfil deixa de receber atualizações do catálogo.

## Temas pagos em perfis compartilhados {#paid-themes-in-shared-profiles}

Os perfis podem usar [temas](/docs/Application/Themes/ThemesOverview) pagos e controles especiais (volante, pedais, câmbio e outros). Quando você edita um perfil que usa produtos que você não possui:

- os controles de temas que você não possui passam para o tema gratuito **Básico**;
- os controles especiais sem equivalente gratuito ficam bloqueados até você comprá-los;
- os produtos que você possui ficam como estão.

Um perfil do catálogo sem alterações funciona com todos os seus produtos, mesmo os que você não possui.

## Sincronização {#sync}

Quando você está conectado à sua conta, cada alteração é enviada e aparece nos seus outros dispositivos. Veja [Sincronização entre dispositivos](/docs/Application/Account/Sync).

Se você abrir um perfil que já está sendo editado em outro dispositivo, o MOCPilot pede que você escolha: **Somente visualização** (as alterações não são salvas) ou **Assumir a edição**.
