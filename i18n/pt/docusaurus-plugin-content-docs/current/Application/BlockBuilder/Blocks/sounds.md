---
id: Sounds
title: Sons
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sons {#sounds}

Os blocos de som tocam sons no celular, tablet ou computador que executa o MOCPilot: bipes, sinais, buzinas, efeitos e as suas próprias gravações. O hub Robot Inventor também tem o seu próprio alto-falante, veja [Alto-falante do hub Robot Inventor](#robot-inventor-sounds).

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

## Alto-falante do hub Robot Inventor {#robot-inventor-sounds}

Estes blocos vêm do app Robot Inventor e tocam sons no alto-falante do [hub MINDSTORMS Robot Inventor ou SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), não no seu dispositivo. Eles têm o ícone do hub. As notas são números de nota MIDI: 60 é o dó central, e cada passo é um semitom (de 0 a 132).

### `tocar bipe … por … segundos` (Iniciante) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Toca um bipe da nota indicada (60 por padrão) pelo tempo indicado (0,2 s por padrão) e espera até ele terminar.

### `iniciar bipe …` (Avançado) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Inicia um bipe da nota indicada e continua na hora. O bipe soa até **parar todos os sons** ou outro som do hub.

### `tocar som … até terminar` (Iniciante) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Toca um dos sons de robô gravados no hub (Affirmative, Laser, Hello, Tadaa e mais 80) e espera até ele terminar. Os sons vêm com o software do hub; se o hub ficar em silêncio, veja [Se o hub não iniciar](/docs/Application/Hubs/RobotInventorHub#restore).

### `iniciar som …` (Iniciante) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Inicia um som de robô do hub e continua na hora.

### `parar todos os sons` (hub) (Iniciante) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Para o som e o bipe no hub. O bloco com o mesmo nome, sem o ícone do hub, para os sons do seu dispositivo.

### `definir volume do hub para … %` (Avançado) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Define o volume dos bipes, sons e notas do hub, de 0 a 100 % (100 % até você mudá-lo).

### `alterar volume do hub em …` (Avançado) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Deixa o hub mais alto ou mais baixo na quantidade indicada (−10 por padrão); o volume fica entre 0 e 100 %.

### `volume do hub` (Avançado) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Retorna o volume do hub, de 0 a 100.

### `definir … efeito para …` (Avançado) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Define um efeito sonoro para os sons de robô que começam depois dele.

- `tom`: de −360 a 360; valores positivos deixam os sons mais agudos e mais rápidos, valores negativos mais graves e mais lentos. 0 é o normal.
- `panorâmica esquerda/direita`: de −100 a 100. O hub tem um único alto-falante, então você não vai ouvir a diferença; o valor é mantido para programas feitos no app Robot Inventor.

### `mudar … efeito em …` (Avançado) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Muda o efeito de tom ou de panorâmica na quantidade indicada (10 por padrão), dentro dos mesmos limites.

### `limpar efeitos sonoros` (Avançado) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Volta o tom e a panorâmica para 0.

### Música {#robot-inventor-music}

Os blocos de música contam o tempo em **batidas**: no andamento de 60 batidas por minuto (o padrão), uma batida dura um segundo. Enquanto o programa roda no MOCPilot, as notas soam como bipes do hub com a altura e a duração certas, e os tambores como bipes curtos; o instrumento ainda não muda o som.

#### `tocar nota … por … batidas` (Avançado) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Toca uma nota (60 por padrão) pelo número de batidas indicado (0,25 por padrão) e espera.

#### `tocar tambor … por … batidas` (Avançado) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Toca um de 18 tambores (caixa, bumbo, chimbal, sino de vaca e outros) e espera pelo número de batidas indicado.

#### `pausar por … batidas` (Avançado) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Espera pelo número de batidas indicado sem tocar nada.

#### `definir instrumento para …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Escolhe um de 21 instrumentos (piano, órgão, violão, flauta, coral, sintetizador e outros) para as notas seguintes.

#### `definir andamento para …` (Avançado) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Define o andamento em batidas por minuto, de 20 a 500 (60 por padrão).

#### `alterar andamento em …` (Avançado) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Deixa a música mais rápida ou mais lenta no número de batidas por minuto indicado (20 por padrão).

#### `andamento` (Avançado) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Retorna o andamento atual em batidas por minuto.
