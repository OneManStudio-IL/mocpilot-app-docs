---
id: Control
title: Controle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controle {#control}

Os blocos de controle decidem como um script é executado: esperas, laços, ramificações e paradas. Quando o perfil tem hubs, esta categoria também traz blocos que conectam os hubs e mudam as configurações deles.

## Blocos de espera {#wait-blocks}

### `esperar … segundos` (Iniciante) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pausa o script pelo número de segundos indicado.

### `esperar até …` (Avançado) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pausa o script até que a condição se torne verdadeira.

## Laços {#loops}

### `repetir …` (Avançado) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Executa os blocos dentro dele o número de vezes indicado (10 por padrão).

### `repetir enquanto …` (Avançado) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Executa os blocos dentro dele repetidamente até que a condição se torne verdadeira.

### `repetir sempre` (Avançado) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Executa os blocos dentro dele sem parar, até que o script ou o programa pare. Nada pode ser encaixado embaixo dele.

## Ramificações {#branches}

### `se … então` (Iniciante) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Executa os blocos dentro dele só quando a condição é verdadeira.

### `se … então … outro` (Avançado) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Executa o primeiro ramo quando a condição é verdadeira e o segundo ramo caso contrário.

### `faça isso … e isso` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Executa o primeiro grupo de blocos, depois o segundo, e só então continua com os blocos embaixo dele.

## Paradas {#stopping}

### `parar …` (Iniciante) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Para scripts; o que exatamente ele para depende da opção.

- `todos`: para todos os scripts.
- `esta pilha`: para só este script.
- `e sair do programa`: para o programa.

### `parar outras pilhas` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Para todos os outros scripts em execução; este continua.

## Blocos de hub {#hub-blocks}

### `conectar / desconectar …` (Iniciante) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Conecta ou desconecta o hub selecionado do programa.

- Opções: `conectar`, `desconectar`
- Hubs: todos.

### `… conectado` (Iniciante) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Retorna `true` quando o hub selecionado está conectado.

- Tipo: bloco booleano
- Hubs: todos.

### `definir … configuração para …` (Avançado) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Muda o hub para uma das configurações dele.

- Hubs: Technic Move Hub (hoje, o único hub com configurações).
- Uso típico: mudar o hub para outra configuração antes que os próximos blocos sejam executados.

### `obter … configuração como …` (Avançado) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Retorna a configuração atual do hub.

- Tipo: bloco repórter
- Saída: `texto` ou `índice`
- Hubs: Technic Move Hub.
- Retorna `NaN` quando o hub não está conectado ou não tem configuração.

### `definir … modo de energia para …` (Iniciante) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Define o modo de potência de um BuWizz 2.

- Modos: `Lenta`, `Normal`, `Rápida`, `Ludicrous`
- Hubs: BuWizz 2.

### `obter … modo de potência como …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Retorna o modo de potência atual de um BuWizz 2.

- Saída: `texto` ou `índice`
- Hubs: BuWizz 2.

### `definir … canal de controlo para …` (Avançado) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Define o canal de controle de um hub Mould King.

- Canais: `A`, `B`, `C`
- Hubs: Mould King 4.0 e 6.0.

### `obter … canal de controlo como …` (Avançado) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Retorna o canal de controle atual de um hub Mould King.

- Saída: `texto` ou `índice`
- Hubs: Mould King 4.0 e 6.0.
