---
id: CreateProfile
title: Criar um perfil
description: "Crie um perfil e escolha entre os editores de programa Blocos lógicos e Ligações rápidas."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Criar um perfil {#create-a-profile}

1. Vá para **Meus perfis**.
   - Celular: toque em **+** → **Novo perfil**.
   - Tablet: **Novo perfil** no cabeçalho.
   - Computador: **Arquivo → Novo perfil** (⌘N / Ctrl+N).
2. Escolha o **tipo de programa** (veja abaixo).
3. Preencha os detalhes do perfil.
4. Toque em **Criar**. O perfil abre no editor.

<Screenshot name="create-profile-tiles" alt="Página Novo perfil" width={900} />

## Escolha o tipo de programa {#choose-the-program-type}

O tipo de programa define qual editor o perfil usa. **Não é possível alterá-lo depois.** Para experimentar o outro editor, crie um segundo perfil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Ligações rápidas" style={{width: '100%', maxWidth: 320}} />
    <h3>Ligações rápidas</h3>
    <p><em>Um esquema simplificado, como no Controlz.</em> Ligue os controles do painel aos motores e às luzes do hub, linha por linha: entrada, processamento, operação, hub. Pronto em minutos.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Blocos lógicos" style={{width: '100%', maxWidth: 320}} />
    <h3>Blocos lógicos</h3>
    <p><em>Robótica, algoritmos e cenários avançados.</em> Programe o modelo com blocos: eventos, laços, condições, variáveis e dados de sensores. Para robôs e automação.</p>
  </div>
</div>

| | Ligações rápidas | Blocos lógicos |
|---|---|---|
| Como você monta | Linhas: entrada → processamento → operação → hub | Blocos encaixados em scripts |
| Tempo de aprendizado | Minutos | Mais longo; mais possibilidades |
| Ideal para | Carros, caminhões, trens, guindastes: “este controle movimenta aquele motor” | Robôs, sequências automáticas, lógica com sensores, jogos |
| Lógica (se, laços, variáveis) | Não (só limiares e alternância) | Sim |
| Sensores | Sensores do hub como entradas; valores para indicadores | Todos os sensores do hub e do celular, qualquer cálculo |
| Arranque suave, limites, zona morta | Blocos prontos | Montados com blocos |
| Direção por servo com calibração | Bloco pronto | Blocos |
| Gamepad | Sim | Sim |
| Vários hubs | Sim | Sim |

**Na dúvida?** Comece com Ligações rápidas. Se mais tarde precisar de lógica, crie um perfil de Blocos lógicos para o modelo.

Se você tocar em **Criar** sem escolher um tipo, os blocos de escolha ficam destacados. Cada um tem um link **Documentação ↗** para a sua parte desta documentação.

## Detalhes do perfil {#profile-details}

- **Imagem**: clique na área da imagem (em uma tela sensível ao toque, toque e segure) para escolher uma imagem. Arraste a imagem para cima ou para baixo para escolher a parte que aparece. **Atualizar imagem** e **Remover** a alteram depois.
- **Nome**: obrigatório e precisa ser único: “Já existe um perfil com o nome …” significa que você já tem um perfil com esse nome.
- **Nível dos blocos** (só Blocos lógicos): **Iniciante**, **Avançado** ou **Guru**. Ele define quais blocos a paleta mostra neste perfil. Você pode mudá-lo depois nas Configurações do editor. Veja [Trabalhar no editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: descrevem o perfil e ajudam outras pessoas a encontrá-lo. As hashtags vêm de uma lista compartilhada, que é carregada quando você está on-line.

Tudo, exceto o tipo de programa, pode ser alterado depois em **Editar perfil**, onde você também pode adicionar uma descrição e marcar o perfil como **Favorito**.

## Próximos passos {#next-steps}

1. Adicione hubs: [Adicionar e conectar um hub](/docs/Application/Hubs/ConnectingHubs).
2. Posicione controles: [Painel](/docs/Application/Dashboard/DashboardOverview).
3. Escreva o programa: [Ligações rápidas](/docs/Application/Links/LinksIntroducing) ou [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Construtor com IA
Com o [MocPilot Pro](/docs/Application/Account/Pro), você pode descrever seu modelo por escrito ou por voz e deixar o construtor com IA criar os hubs, o painel e o programa (Blocos lógicos ou Ligações rápidas). Diga qual hub você usa, o que está ligado em cada porta e o que deve fazer. Veja [Como obter um bom resultado](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
