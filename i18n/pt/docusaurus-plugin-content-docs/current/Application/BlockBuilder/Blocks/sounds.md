---
id: Sounds
title: Sons
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sons {#sounds}

Os blocos de som tocam sons no celular, tablet ou computador que executa o MOCPilot: bipes, sinais, buzinas, efeitos e as suas próprias gravações.

## Quais sons você pode tocar {#which-sounds-you-can-play}

A lista de sons dos blocos tem duas partes:

- **A biblioteca integrada**: bipes curtos, chilreios, um bipe de ré, uma sirene, um alarme, sinais de sucesso e de erro, buzinas de carro, caminhão e trem, uma campainha de bicicleta, uma seta e alguns efeitos (clique, estalo, laser, moeda, ligar, desligar).
- **Os seus próprios sons**: pressione **Adicionar som** no topo da categoria e escolha um arquivo de áudio. O app o converte e o guarda no perfil, para que ele acompanhe o perfil nos seus outros dispositivos e no catálogo. Um perfil pode ter até 30 sons; um arquivo mais longo é cortado em 15 segundos. Use **Renomear som** e **Excluir som** para gerenciá-los; os blocos que tocavam um som excluído ficam em silêncio.

<Screenshot name="blocks-add-sound" alt="O diálogo Adicionar som nos Blocos lógicos" width={900} />

## Blocos {#blocks}

### `som … tocar / tocar até o fim / repetir` (Iniciante) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Toca o som selecionado.

- `tocar`: inicia o som e passa imediatamente para o próximo bloco. Os sons feitos para tocar em loop (como a sirene ou o bipe de ré) continuam se repetindo.
- `tocar até o fim`: toca o som uma vez e espera até que ele termine.
- `repetir`: toca o som em loop até você pará-lo.
- Iniciar um som que já está tocando faz ele recomeçar.
- Você pode colocar um repórter **som** (ou uma variável que guarda um) no encaixe em vez de escolher da lista.

### `bipe … Hz por … s` (Iniciante) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Toca um tom com a altura e a duração indicadas e espera até que ele termine.

- Altura: de 50 a 8000 Hz (440 por padrão).
- Duração: de 0,02 a 10 segundos (0,2 por padrão).

### `parar som …` (Iniciante) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Para o som selecionado.

### `parar todos os sons` (Iniciante) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Para todos os sons que estão tocando.

### `definir volume do som para … %` (Avançado) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Define o volume de todos os sons do programa, de 0 a 100 %. Quando o programa para, o volume volta a 100 %.

### `volume do som` (Avançado) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Retorna o volume atual do som, de 0 a 100.

### `som …` (Avançado) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Retorna o som selecionado como um valor.

- Uso típico: guardar um som em uma variável ou lista, ou passá-lo a um dos [Meus blocos](/docs/Application/BlockBuilder/Blocks/MyBlocks), e depois tocá-lo com **som … tocar**.
