---
id: Simulator
title: Simulador
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulador {#simulator}

O **Simulador** transforma os pedais, o câmbio e o freio de mão do painel em um carro que se comporta como um de verdade: ele acelera com inércia, segue embalado, freia, dá ré e troca de marcha. Os controles só fornecem os seus valores brutos; o programa monta o carro a partir deles e envia a velocidade dele aos motores.

A categoria aparece enquanto o painel tem pedais, câmbio ou freio de mão. Veja [Controladores na tela](/docs/Application/BlockBuilder/Blocks/DashboardControllers) para os blocos que leem esses controles.

## Veículos {#vehicles}

Pressione **Criar veículo** no topo da categoria e dê um nome a ele (por exemplo, "Veículo 1"). Os blocos aparecem assim que o programa tem pelo menos um veículo, e em cada bloco você escolhe com qual veículo ele trabalha. **Renomear veículo** e **Excluir veículo** servem para gerenciá-los; não é possível excluir um veículo enquanto os blocos dele estiverem no programa, e os últimos pedais, câmbio ou freio de mão não podem ser removidos do painel enquanto houver blocos do Simulador em uso.

<Screenshot name="blocks-simulator" alt="Categoria Simulador com um bloco dirigir pendurado no evento dos pedais" width={900} />

Um carro típico: pendure **dirigir** no evento dos pedais, ligue os pedais a `acelerador` e `freio` e, dentro dele, ligue o motor de tração com a `velocidade` do veículo:

```text
quando os pedais PDL1 qualquer movido
    Veículo 1  dirigir  acelerador (pedais PDL1 aceleração)  freio (pedais PDL1 freio)
        iniciar motor em (velocidade de Veículo 1) % velocidade  (Hub 1, porta A)
```

Não é preciso um laço `repetir sempre`: **dirigir** continua sozinho até o carro parar.

## Blocos {#blocks}

### `… dirigir acelerador … freio … marcha … de … freio de mão … travado …` (Iniciante) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

O coração do simulador. Um bloco C que dirige o veículo: a cada 0,1 s, ele lê as entradas, move o carro um passo e executa os blocos dentro dele (coloque ali os blocos de motor). Ele termina quando o carro está parado e nada está pressionado; os blocos de dentro são executados uma última vez para que o motor receba o valor final.

- `acelerador` e `freio`: o quanto cada pedal está pressionado, de 0 a 100.
- `marcha`: a marcha selecionada: `-1` ré, `0` neutro, `1` e acima para frente. Com um controle de câmbio automático neste encaixe, é usada a posição do seletor dele (P, R, N, D), e o carro escolhe a marcha sozinho em D.
- `de`: quantas marchas o câmbio tem (6 por padrão).
- `freio de mão`: o quanto o freio de mão está puxado, de 0 a 100; `travado`: se ele está travado.
- Uma entrada só conta quando há um bloco colocado nela; um número simples em um encaixe vazio é ignorado (exceto em `de`).
- Só um bloco **dirigir** pode dirigir um veículo por vez; um segundo bloco para o mesmo veículo pula os blocos de dentro.

### `definir … tipo para …` (Iniciante) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Ajusta o motor do veículo para um tipo de veículo: por quanto tempo ele continua rodando (inércia), a velocidade máxima de ré e se tem freio a ar.

- Tipos: `Carro`, `Veículo off-road`, `Carro esportivo`, `Caminhão` (o caminhão tem freio a ar)

### `definir … … para … %` (Avançado) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Altera uma configuração do motor.

- `inércia do motor`: quanto maior, mais tempo o carro rola sem acelerador (0 significa sem inércia).
- `velocidade de ré`: a velocidade máxima em marcha a ré.

### `definir … … para …` (Avançado) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Liga ou desliga uma opção do veículo.

- `ré com o freio`: só com pedais, segurar o freio com o veículo parado faz ele andar para trás.
- `marchas limitam a velocidade`: cada marcha tem a sua própria velocidade máxima.
- `freio de mão segura`: um freio de mão travado mantém o carro no lugar.
- `freio a ar`: o freio a ar do caminhão (gera o evento "soltar ar").
- `câmbio automático`: tratar a entrada `marcha` como um seletor automático.

### `Redefinir …` (Avançado) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Para o veículo onde ele está e esquece o estado dele.

### `… de …` (Iniciante) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Retorna um dos valores do veículo.

- `velocidade`: de −100 a 100 (negativa em marcha a ré), pronta para o encaixe de velocidade de um motor.
- `rotação do motor`: de 0 a 100, para um conta-giros ou um som de motor.
- `marcha`: a marcha atual (`-1` ré, `0` neutro, depois `1`, `2`…).

### `está … … ?` (Iniciante) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Retorna `true` quando o veículo está no estado selecionado.

- Estados: `em movimento`, `Freando`, `No freio de mão`

### `quando … …` (Iniciante) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Executa o seu script quando algo acontece com o veículo.

- Eventos: `arrancar`, `parar`, `começar a frear`, `parar de frear`, `frear bruscamente`, `soltar ar`, `troca de marcha`
- Uso típico: tocar um som, por exemplo, o chiado do freio a ar em `soltar ar` ou um guincho de pneus em `frear bruscamente` (veja [Sons](/docs/Application/BlockBuilder/Blocks/Sounds)).
