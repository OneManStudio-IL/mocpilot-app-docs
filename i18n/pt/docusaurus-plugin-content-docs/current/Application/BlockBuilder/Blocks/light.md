---
id: Light
title: Luz
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Luz {#light}

Os blocos de luz controlam a luz de status do hub, as luzes conectadas às portas e a matriz de luzes dos hubs compatíveis. A categoria aparece quando algum hub do perfil tem algo para acender.

## Luzes do hub e das portas {#hub-and-port-lights}

### `definir cor do LED para …` (Iniciante) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Define a cor da luz de status do hub.

- Hubs: hubs LEGO Powered Up (incluindo o Technic Move Hub), WeDo 2.0 e o hub MINDSTORMS Robot Inventor.
- Uso típico: mostrar o estado do modelo (pronto, em funcionamento, aviso, erro).

### `ligar em … % brilho` (Iniciante) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Acende as luzes conectadas à porta selecionada com o brilho indicado.

- Hubs: todos os hubs com portas, exceto o WeDo 2.0.
- Technic Move Hub: as portas `1`–`6` são as seis luzes do hub, numeradas no hub. Cada luz pode ser ajustada separadamente, com brilho de 0–100 %.
- Uso típico: faróis, iluminação ajustável.

### `desligar` (Iniciante) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Apaga as luzes conectadas à porta selecionada.

- Hubs: os mesmos de **ligar em … % brilho**.

### `ligar as luzes …` (Iniciante) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Acende ou apaga as luzes de um Technic Move Hub pelo seu perfil de carro.

- Opções: `desligado`, `ativado`
- Hubs: Technic Move Hub. Para ajustar cada luz separadamente, use **ligar em … % brilho** com as portas `1`–`6`; não misture os dois no mesmo hub (veja [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

## Matriz de luzes {#light-matrix}

Estes blocos trabalham com a matriz de luzes 5×5 integrada ao hub MINDSTORMS Robot Inventor.

### `ligar …` (Avançado) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Mostra a imagem selecionada na matriz de luzes e passa imediatamente para o próximo bloco. A imagem fica até que outro bloco altere a matriz ou o programa pare.

### `escrever …` (Iniciante) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Faz o texto rolar pela matriz de luzes, uma letra de cada vez.

### `desligar píxeis` (Iniciante) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Apaga todos os pixels da matriz de luzes.

### `definir píxel … x … y … brilho …` (Avançado) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Define o brilho de um pixel; o resto da matriz fica como está. `x` é a coluna e `y` é a linha; o pixel `1, 1` fica no canto superior esquerdo.

### `rodar orientação …` (Avançado) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Gira a imagem na matriz de luzes em 90 graus, no sentido horário ou anti-horário. A nova orientação vale para os blocos de Luz executados depois dele.

### `definir orientação para …` (Avançado) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Define a orientação da imagem na matriz de luzes. Por padrão, ela é `na vertical`; a nova orientação vale para os blocos de Luz executados depois dele.

- Opções: `na vertical`, `esquerda`, `direita`, `de cabeça para baixo`

## Luzes do sensor de distância {#distance-sensor-lights}

### `acender …` (Iniciante) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Controla as luzes em volta dos "olhos" do sensor de distância na porta selecionada. Você pode acender ou apagar cada luz, ou colocar uma lista no encaixe para definir o brilho de cada uma.

- Hubs: [MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), e o Technic Hub (o bloco tem o ícone do hub Robot Inventor). O sensor continua medindo a distância enquanto as luzes dele estão acesas.

### `iluminar o sensor de cor 1 … 2 … 3 … %` (Avançado) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Define o brilho das três luzes ao redor da lente do sensor de cor Technic (o sensor de cor SPIKE) na porta selecionada, de 0 a 100 % cada uma.

- Hubs: Technic Hub.
- Enquanto suas luzes estão acesas, o sensor não mede: seus valores de cor e de luz ficam como estavam. Antes de ler o sensor de novo, use Sensor Technic: **definir modo para …** (`padrão` ou `ambiente`) nessa porta. A verificação do programa no editor de blocos avisa quando um programa acende o sensor e o lê sem **definir modo**.
- Uso típico: uma luz de sinalização no modelo, ou os olhos de um robô.

## Matriz de luzes do Robot Inventor {#robot-inventor-light}

Estes blocos vêm do app Robot Inventor e só funcionam com os [hubs MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Eles têm o ícone do hub. Toque na imagem de um bloco para desenhá-la; nos blocos de animação, ela mostra o primeiro quadro e o número de quadros.

### `ligar … por … segundos` (Iniciante) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Mostra a imagem na matriz de luzes pelo tempo indicado (2 segundos por padrão) e depois a apaga. O bloco espera até o tempo acabar.

### `reproduzir animação … em … quadros por segundo até terminar` (Iniciante) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Reproduz os quadros da animação uma vez, na velocidade indicada (4 quadros por segundo por padrão), e espera até o último quadro.

### `iniciar animação … em … quadros por segundo …` (Iniciante) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Inicia a animação e passa na hora para o próximo bloco.

- `uma vez`: reproduz a animação uma única vez.
- `repetir` (padrão): reproduz a animação sem parar, até que outro bloco de luz mude a matriz.

### `definir brilho dos pixels para … %` (Avançado) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Define o brilho das imagens e animações dos blocos Robot Inventor acima, de 0 a 100 %. Até este bloco ser executado, elas ficam com o brilho máximo. Cada pixel mantém o seu brilho em relação aos outros.

### Desenhar imagens e animações {#animation-editor}

Toque na imagem de um bloco de luz para abrir o editor:

- **Pixels**: toque ou arraste sobre a grade 5×5 para pintar com o brilho selecionado.
- **Brilho**: a escala ao lado da grade escolhe o brilho da pintura (10 níveis, de apagado a máximo).
- **Tudo apagado / tudo aceso**: limpa a imagem ou a preenche com o brilho selecionado.
- **Quadros** (só nos blocos de animação): a barra sob a grade mostra o quadro atual, por exemplo **2/3**. Os botões vão para o quadro **anterior** e o **seguinte**, **adicionam** um quadro vazio depois do atual, **duplicam** o quadro atual ou o **excluem** (uma animação mantém pelo menos um quadro).

<Screenshot name="robot-inventor-animation-editor" alt="O editor de animação: a grade 5×5, a escala de brilho e a barra de quadros" width={600} />

## LEDs das portas do BuWizz 3 {#buwizz-3-port-leds}

Estes blocos definem a cor do LED ao lado de uma porta do BuWizz 3.

### `definir a cor do LED da porta para …` (Iniciante) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Define o LED da porta com uma das cores predefinidas.

### `definir a cor do LED da porta para … … …` (RGB) (Avançado) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Define a cor do LED da porta a partir de valores de vermelho, verde e azul.

- Uso típico: qualquer cor que você quiser, mudanças suaves de cor.

### `definir a cor do LED da porta a partir da string …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Define a cor do LED da porta a partir de um texto.

- Uso típico: pegar a cor de uma variável ou de uma lista.
