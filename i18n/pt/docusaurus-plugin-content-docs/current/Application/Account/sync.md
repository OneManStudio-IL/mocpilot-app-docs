---
id: Sync
title: Sincronização entre dispositivos
description: "Mantenha os perfis e as configurações do MOCPilot sincronizados entre celulares, tablets, computadores e o editor web, e trabalhe off-line."
---

import Screenshot from '@site/src/components/Screenshot';

# Sincronização entre dispositivos {#sync-between-devices}

Quando você está conectado à sua conta, o MOCPilot mantém seus perfis e configurações iguais em todos os dispositivos: celular, tablet, computador e o [editor web](/docs/Introducing/WebEditor). Não há nada para ativar: com uma conta, a sincronização está sempre ligada.

## Como funciona {#how-it-works}

- As alterações são salvas primeiro no dispositivo e enviadas quando você está on-line (“Sincronizando perfis…”).
- Os outros dispositivos baixam a nova versão quando estão on-line.
- As compras não são sincronizadas como arquivos; elas pertencem à sua conta e ficam disponíveis onde quer que você entre.
- Perfis adicionados no site (**Adicionar à minha conta** no catálogo) ou editados no editor web chegam pela sincronização.
- No modo convidado, nada é sincronizado: os perfis ficam só neste dispositivo.

## Conflitos {#conflicts}

Se o mesmo perfil foi alterado em dois dispositivos antes de eles sincronizarem, a versão da sua conta prevalece, e a sua versão deste dispositivo é salva como cópia (“(cópia)” é acrescentado ao nome). O MOCPilot avisa sobre isso em uma mensagem de **Sincronização de perfis**. O mesmo acontece se um perfil que você alterou aqui foi excluído em outro dispositivo.

Se você abrir um perfil que está sendo editado em outro dispositivo neste momento, pode escolher **Somente visualização** (as alterações não são salvas) ou **Assumir a edição**.

## Trabalhar off-line {#working-offline}

Os hubs, seus perfis e os temas baixados funcionam sem internet.

- Se o MOCPilot não conseguir acessar o servidor ao abrir, ele mostra **Sem conexão com a internet** com **Trabalhar off-line** e **Tentar novamente**.
- Enquanto você está off-line, aparece o rótulo **Off-line** no topo. Os recursos que precisam do servidor (catálogo e publicação, construtor com IA, controle remoto, notificações, compras, mensagens ao suporte) avisam que precisam de conexão com a internet.
- As alterações feitas off-line são enviadas quando a conexão volta. Quando o app volta a ver o servidor, ele mostra **A conexão voltou** com **Ficar on-line**.

<Screenshot name="offline-prompt" alt="Mensagem Sem conexão com a internet com os botões Trabalhar off-line e Tentar novamente" width={900} />

## Sair da conta {#signing-out}

Sair da conta remove seus perfis e configurações deste dispositivo; eles continuam na sua conta e voltam quando você entra de novo. Se algumas alterações ainda não foram enviadas, o MOCPilot avisa antes e lista os perfis: conecte-se à internet e deixe a sincronização terminar, ou escolha **Sair mesmo assim** (uma cópia fica guardada na pasta Backup do app).

## Dicas {#tips}

- Antes de publicar um perfil no catálogo, verifique se ele está sincronizado: o catálogo o pega da sua conta.
- Para levar perfis a um dispositivo sem conta, use **Compartilhar** e **Importar perfil…** com arquivos `.dat`. Veja [Gerenciar perfis](/docs/Application/Profiles/ManageProfiles).
